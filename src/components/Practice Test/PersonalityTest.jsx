import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Brain, CheckCircle2,
  ChevronLeft, ChevronRight, History as HistoryIcon, Info,
  Layout, Play, RotateCcw, Sparkles, Target,
  Trophy, User, Users, Zap, Heart, Shield as ShieldIcon, Compass,
  Save, FileText, BarChart3, PieChart, Briefcase,
  Lightbulb, AlertCircle, TrendingUp, Clock as ClockIcon, ListChecks
} from 'lucide-react';
import { PERSONALITY_QUESTIONS, OPTIONS, TRAIT_DETAILS, PERSONALITY_TRAITS } from '../../data/personalityTestData';
import { usePracticeTestStore } from '../../core/stores/practiceTestStore';

const STORAGE_KEY_PROGRESS = 'ts_personality_progress';
const STORAGE_KEY_REPORTS = 'ts_personality_reports';

const PersonalityTest = ({ onBack }) => {
  const [status, setStatus] = useState('lobby'); // lobby, active, result, history
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [savedReports, setSavedReports] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [showPartTransition, setShowPartTransition] = useState(false);
  const [showStartConfirm, setShowStartConfirm] = useState(false);

  // Load progress and saved reports on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (savedProgress) {
      try {
        const { currentIndex: savedIdx, answers: savedAns } = JSON.parse(savedProgress);
        setCurrentIndex(savedIdx || 0);
        setAnswers(savedAns || {});
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }

    const reports = localStorage.getItem(STORAGE_KEY_REPORTS);
    if (reports) {
      try {
        setSavedReports(JSON.parse(reports));
      } catch (e) {
        console.error("Failed to load reports", e);
      }
    }
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    if (status === 'active') {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify({ currentIndex, answers }));
    }
  }, [currentIndex, answers, status]);

  const currentQuestion = PERSONALITY_QUESTIONS[currentIndex];
  const totalQuestions = PERSONALITY_QUESTIONS.length;
  const partSize = 10;
  const currentPart = Math.floor(currentIndex / partSize) + 1;
  const totalParts = Math.ceil(totalQuestions / partSize);
  const totalProgress = ((currentIndex) / totalQuestions) * 100;

  const handleOptionSelect = (value) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentIndex < totalQuestions - 1) {
      const nextIndex = currentIndex + 1;
      // Trigger part transition every 10 questions
      if (nextIndex % partSize === 0 && nextIndex > 0) {
        setTimeout(() => {
          setShowPartTransition(true);
        }, 500);
      } else {
        setTimeout(() => setCurrentIndex(nextIndex), 300);
      }
    }
  };

  const continueToNextPart = () => {
    setShowPartTransition(false);
    setCurrentIndex(currentIndex + 1);
  };

  const calculateResults = () => {
    setIsSaving(true);
    const scores = {
      OPENNESS: 0,
      CONSCIENTIOUSNESS: 0,
      EXTRAVERSION: 0,
      AGREEABLENESS: 0,
      NEUROTICISM: 0
    };

    const counts = {
      OPENNESS: 0,
      CONSCIENTIOUSNESS: 0,
      EXTRAVERSION: 0,
      AGREEABLENESS: 0,
      NEUROTICISM: 0
    };

    PERSONALITY_QUESTIONS.forEach(q => {
      const val = answers[q.id];
      if (val !== undefined) {
        let score = val;
        if (q.reverse) {
          score = 6 - val;
        }
        scores[q.trait] += score;
        counts[q.trait]++;
      }
    });

    const reportData = Object.keys(scores).map(traitId => {
      const traitInfo = TRAIT_DETAILS[traitId];
      const avg = counts[traitId] > 0 ? (scores[traitId] / (counts[traitId] * 5)) * 100 : 0;
      const isHigh = avg >= 60;
      const content = isHigh ? traitInfo.high : traitInfo.low;

      return {
        id: traitId,
        title: traitInfo.title,
        summary: traitInfo.summary,
        score: Math.round(avg),
        isHigh,
        traits: content.traits,
        description: content.description,
        workplace: content.workplace,
        recruiterAdvice: content.recruiterAdvice
      };
    });

    const questionResults = PERSONALITY_QUESTIONS.map(q => ({
      ...q,
      candidateAnswer: answers[q.id],
      isCorrect: true, // Personality questions don't have "correct" answers
      earnedPoints: answers[q.id],
      totalPoints: 5
    }));

    const finalResult = {
      id: `personality-${Date.now()}`,
      testId: 'personality-spectrum',
      testName: 'Personality Spectrum',
      score: 100, // Personality tests don't have a "score" usually, but we set it as completed
      traits: reportData,
      persona: generatePersona(reportData),
      questionResults,
      answers,
      proficiency: {
        label: 'Profile Generated',
        color: 'text-violet-600',
        bg: 'bg-violet-50'
      },
      createdAt: new Date().toISOString()
    };

    usePracticeTestStore.getState().addAttempt(finalResult);

    // Save report to history (local)
    const newReports = [finalResult, ...savedReports];
    setSavedReports(newReports);
    localStorage.setItem(STORAGE_KEY_REPORTS, JSON.stringify(newReports));

    // Clear progress
    localStorage.removeItem(STORAGE_KEY_PROGRESS);

    setResult(finalResult);
    setTimeout(() => {
      setStatus('result');
      setIsSaving(false);
    }, 1000);
  };

  const generatePersona = (traits) => {
    const o = traits.find(t => t.id === 'OPENNESS').score;
    const c = traits.find(t => t.id === 'CONSCIENTIOUSNESS').score;
    const e = traits.find(t => t.id === 'EXTRAVERSION').score;

    if (o > 70 && c > 70) return { title: 'The Architect', icon: Compass, color: 'text-indigo-600', bg: 'bg-indigo-50' };
    if (e > 70 && o > 70) return { title: 'The Visionary', icon: Lightbulb, color: 'text-amber-600', bg: 'bg-amber-50' };
    if (c > 80) return { title: 'The Executioner', icon: Shield, color: 'text-emerald-600', bg: 'bg-emerald-50' };
    if (e > 80) return { title: 'The Connector', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' };
    return { title: 'The Strategist', icon: Target, color: 'text-slate-600', bg: 'bg-slate-50' };
  };

  const startTest = () => {
    if (currentIndex > 0) {
      setStatus('active');
    } else {
      setShowStartConfirm(true);
    }
  };

  const confirmStart = () => {
    setShowStartConfirm(false);
    setStatus('active');
  };

  const resetTest = () => {
    if (window.confirm("This will clear your current progress. Are you sure?")) {
      setAnswers({});
      setCurrentIndex(0);
      localStorage.removeItem(STORAGE_KEY_PROGRESS);
      setStatus('lobby');
    }
  };

  const deleteReport = (id) => {
    const newReports = savedReports.filter(r => r.id !== id);
    setSavedReports(newReports);
    localStorage.setItem(STORAGE_KEY_REPORTS, JSON.stringify(newReports));
  };

  // --- LOBBY VIEW ---
  if (status === 'lobby') {
    return (
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12 relative">
        <AnimatePresence>
          {showStartConfirm && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <AlertCircle size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">Start Assessment?</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    This test cannot be repeated for the next <span className="text-slate-900 font-bold">30 days</span>. 
                    Your analytical report will be shared <span className="text-slate-900 font-bold">directly with the client</span>.
                  </p>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <button 
                    onClick={confirmStart}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg"
                  >
                    Yes, Start Now
                  </button>
                  <button 
                    onClick={() => setShowStartConfirm(false)}
                    className="w-full py-4 bg-slate-50 text-slate-400 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-all"
                  >
                    No, Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <header className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition hover:bg-slate-50">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Personality Spectrum</h1>
              <p className="text-sm font-medium text-slate-500">Professional psychometric analysis for modern teams.</p>
            </div>
          </div>
          {savedReports.length > 0 && (
            <button
              onClick={() => setStatus('history')}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              <HistoryIcon size={18} /> View Past Reports
            </button>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-blue-500/10 transition-colors" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <Sparkles size={14} /> Professional DNA
                </div>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900">Understand your <span className="text-blue-600">inner working</span> model.</h2>
                <p className="mb-8 max-w-xl text-sm font-medium leading-relaxed text-slate-500">
                  A comprehensive 100-question assessment based on the industry-standard "Big Five" model. Gain insights into your leadership style, team dynamics, and ideal work environment.
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={startTest}
                    className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600 active:scale-[0.98]"
                  >
                    {currentIndex > 0 ? 'Continue Assessment' : 'Start Assessment'} <ArrowRight size={18} />
                  </button>
                  {currentIndex > 0 && (
                    <button
                      onClick={resetTest}
                      className="rounded-lg bg-slate-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-400 transition hover:text-rose-500"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Brain size={24} />
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">Scientific Rigor</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-500">Based on decades of psychometric research, mapping 100 behavioral markers across 5 core traits.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <TrendingUp size={24} />
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">Recruiter Insights</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-500">Generates a detailed breakdown that helps hiring managers understand your cultural and role fit.</p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="relative overflow-hidden rounded-xl bg-slate-900 p-5 text-white shadow-sm">
              <div className="relative z-10">
                <h3 className="mb-5 text-base font-bold">Test Structure</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Total Questions', value: '100 Items', icon: ListChecks },
                    { label: 'Time Required', value: '15-20 Min', icon: ClockIcon },
                    { label: 'Test Logic', value: 'Big Five (OCEAN)', icon: ShieldIcon },
                    { label: 'Result Format', value: 'Full PDF Report', icon: FileText },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <item.icon size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                        <p className="text-sm font-bold text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                  <Info size={18} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900">Progressive Saving</h4>
              </div>
              <p className="text-sm text-blue-800/70 font-medium leading-relaxed mb-6">
                The test is divided into 10 parts. Your progress is automatically saved after every question. Feel free to leave and return anytime.
              </p>
              {currentIndex > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-blue-900 uppercase">
                    <span>Current Progress</span>
                    <span>{Math.round(totalProgress)}%</span>
                  </div>
                  <div className="h-2 bg-blue-200/50 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${totalProgress}%` }} />
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    );
  }

  // --- HISTORY VIEW ---
  if (status === 'history') {
    return (
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setStatus('lobby')} className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 transition-all shadow-sm">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Report History</h1>
              <p className="text-slate-500 font-medium">Your previous personality assessments.</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedReports.map(report => (
            <div key={report.id} className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className={`w-14 h-14 rounded-2xl ${report.persona.bg} ${report.persona.color} flex items-center justify-center mb-6`}>
                <report.persona.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{report.persona.title}</h3>
              <p className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">Completed: {new Date(report.date).toLocaleDateString()}</p>

              <div className="grid grid-cols-5 gap-1 mb-8">
                {report.traits.map(t => (
                  <div key={t.id} className="h-1 rounded-full bg-slate-100 overflow-hidden" title={`${t.title}: ${t.score}%`}>
                    <div className="h-full bg-blue-500" style={{ width: `${t.score}%` }} />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setResult(report); setStatus('result'); }}
                  className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all"
                >
                  View Report
                </button>
                <button
                  onClick={() => deleteReport(report.id)}
                  className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-rose-500 hover:bg-rose-50 transition-all"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- ACTIVE TEST VIEW ---
  if (status === 'active') {
    return (
      <div className="max-w-4xl mx-auto min-h-[700px] flex flex-col animate-in zoom-in-95 duration-300">
        {/* Progress Header */}
        <div className="mb-12 bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
              {currentPart}
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assessment Progress</p>
              <h4 className="font-bold text-slate-900">Part {currentPart} of {totalParts}</h4>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-12 hidden md:block">
            <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase mb-2">
              <span>Overall Progress</span>
              <span>{Math.round(totalProgress)}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${totalProgress}%` }}
                className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]"
              />
            </div>
          </div>

          <button
            onClick={() => setStatus('lobby')}
            className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-600 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all"
          >
            <Save size={14} /> Save & Exit
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center relative">
          <AnimatePresence>
            {showPartTransition && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-50 flex items-center justify-center p-6"
              >
                <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl text-center max-w-lg space-y-8">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <Trophy size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Part {currentPart} Completed!</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      Great job! You've completed 10 more questions. Your progress is saved.
                      You can continue now or take a break and come back later.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={continueToNextPart}
                      className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-500/20"
                    >
                      Continue to Part {currentPart + 1} <ArrowRight size={18} />
                    </button>
                    <button
                      onClick={() => setStatus('lobby')}
                      className="w-full py-4 bg-slate-50 text-slate-500 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-all"
                    >
                      Save and Take a Break
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {!showPartTransition && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12 bg-white border border-slate-200 rounded-[3rem] p-16 shadow-sm shadow-slate-200/50"
              >
                <div className="text-center space-y-8">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100">
                    Question {currentIndex + 1} of 100
                  </span>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-[1.2] max-w-2xl mx-auto">
                    {currentQuestion.text}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleOptionSelect(opt.value)}
                      className={`group relative flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all active:scale-95 ${answers[currentQuestion.id] === opt.value
                        ? 'bg-slate-900 border-slate-900 text-white shadow-xl translate-y-[-4px]'
                        : `bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-slate-50`
                        }`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-tighter text-center leading-tight">
                        {opt.label}
                      </span>
                      {answers[currentQuestion.id] === opt.value && (
                        <motion.div layoutId="check" className="absolute top-2 right-2">
                          <CheckCircle2 size={16} className="text-blue-400" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between px-4">
            <button
              onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors disabled:opacity-0"
            >
              <ChevronLeft size={18} /> Back
            </button>

            {Object.keys(answers).length === totalQuestions ? (
              <button
                onClick={calculateResults}
                disabled={isSaving}
                className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3 disabled:opacity-50"
              >
                {isSaving ? 'Processing...' : 'Finalize Report'} <Sparkles size={20} />
              </button>
            ) : (
              <div className="text-xs font-bold text-slate-400 italic">
                Answers are saved automatically
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- RESULT VIEW ---
  if (status === 'result' && result) {
    return (
      <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in zoom-in-95 duration-500 pb-20">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setStatus('lobby')} className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 transition-all shadow-sm">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Psychometric Report</h1>
              <p className="text-slate-500 font-medium italic">Verified by TalentSense Behavioral Analytics Engine</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-all">
              <FileText size={18} /> Download PDF
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              <Zap size={18} /> Share Profile
            </button>
          </div>
        </header>

        {/* Executive Summary Card */}
        <div className="bg-white border border-slate-200 rounded-[3.5rem] p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full translate-x-1/4 -translate-y-1/4" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className={`w-32 h-32 rounded-[2.5rem] ${result.persona.bg} ${result.persona.color} flex items-center justify-center mb-8 shadow-inner`}>
                <result.persona.icon size={64} />
              </div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Verified Persona</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-4">{result.persona.title}</h3>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                <CheckCircle2 size={12} /> Reliability: High (98%)
              </div>
            </div>

            <div className="lg:col-span-8">
              <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-blue-500" /> Executive Analysis
              </h4>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                Your profile indicates a strong orientation towards
                {result.traits.find(t => t.id === 'CONSCIENTIOUSNESS').score > 60 ? ' structured execution ' : ' flexible problem solving '}
                combined with {result.traits.find(t => t.id === 'OPENNESS').score > 60 ? ' high intellectual curiosity.' : ' pragmatic realism.'}
                You are best positioned in roles that require both strategic foresight and disciplined attention to detail.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {result.traits.map(t => (
                  <div key={t.id} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{t.title}</p>
                    <p className="text-lg font-black text-slate-900">{t.score}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Trait Breakdown */}
        <div className="grid grid-cols-1 gap-8">
          {result.traits.map((trait) => (
            <div key={trait.id} className="bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm group hover:border-blue-200 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">{trait.title}</h3>
                      <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em]">{trait.id}</p>
                    </div>
                    <div className="text-4xl font-black text-slate-900 opacity-20">{trait.score}%</div>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${trait.score}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trait.traits.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4 border-l border-slate-100 lg:pl-10">
                  <h4 className="font-black text-sm uppercase tracking-widest text-slate-900 flex items-center gap-2">
                    <User size={16} className="text-blue-500" /> Behavioral Pattern
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                    "{trait.description}"
                  </p>
                </div>

                <div className="lg:col-span-4 space-y-6 bg-slate-50 rounded-3xl p-6 border border-slate-100">
                  <div className="space-y-4">
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-900 flex items-center gap-2">
                      <Briefcase size={14} className="text-emerald-500" /> Workplace Impact
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{trait.workplace}</p>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-900 flex items-center gap-2">
                      <AlertCircle size={14} className="text-amber-500" /> Recruiter Advice
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{trait.recruiterAdvice}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4">Add this to your Hiring Profile?</h2>
            <p className="text-slate-400 font-medium mb-8 max-w-xl mx-auto">This will allow recruiters and hiring managers to see your personality breakdown alongside your skills and experience.</p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                Publish to Profile
              </button>
              <button onClick={() => setStatus('lobby')} className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                Dismiss
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        </div>
      </div>
    );
  }

  return null;
};

export default PersonalityTest;
