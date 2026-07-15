import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Brain, CheckCircle2, 
  ChevronLeft, ChevronRight, Clock as ClockIcon, Info, 
  Layout, Play, RotateCcw, Sparkles, Target, 
  Trophy, Zap, Shield as ShieldIcon, Save, FileText, 
  BarChart3, Lightbulb, AlertCircle, TrendingUp, 
  XCircle, Timer as TimerIcon, Award, ChevronDown, ChevronUp, ListChecks,
  History as HistoryIcon
} from 'lucide-react';
import { COGNITIVE_QUESTIONS, COGNITIVE_DOMAINS, COGNITIVE_EVALUATION } from '../../data/cognitiveTestData';
import { usePracticeTestStore } from '../../core/stores/practiceTestStore';

const STORAGE_KEY_PROGRESS = 'ts_cognitive_progress';
const STORAGE_KEY_REPORTS = 'ts_cognitive_reports';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const CognitiveTest = ({ onBack }) => {
  const [status, setStatus] = useState('lobby'); // lobby, active, result, history
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: selectedOption }
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [result, setResult] = useState(null);
  const [savedReports, setSavedReports] = useState([]);
  const [expandedExplanation, setExpandedExplanation] = useState(null);
  const [showStartConfirm, setShowStartConfirm] = useState(false);

  // Load reports on mount
  useEffect(() => {
    const reports = localStorage.getItem(STORAGE_KEY_REPORTS);
    if (reports) {
      try {
        setSavedReports(JSON.parse(reports));
      } catch (e) {
        console.error("Failed to load reports", e);
      }
    }
  }, []);

  // Timer logic
  useEffect(() => {
    let timer;
    if (status === 'active' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            calculateResults();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status, timeLeft]);

  const currentQuestion = COGNITIVE_QUESTIONS[currentIndex];
  const totalQuestions = COGNITIVE_QUESTIONS.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (option) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
    if (currentIndex < totalQuestions - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 400);
    }
  };

  const calculateResults = () => {
    const domainScores = {
      PATTERN: { correct: 0, total: 0 },
      CRITICAL: { correct: 0, total: 0 },
      ABSTRACT: { correct: 0, total: 0 }
    };

    let totalCorrect = 0;

    COGNITIVE_QUESTIONS.forEach(q => {
      domainScores[q.domain].total++;
      if (answers[q.id] === q.correct) {
        domainScores[q.domain].correct++;
        totalCorrect++;
      }
    });

    const overallScore = Math.round((totalCorrect / COGNITIVE_QUESTIONS.length) * 100);
    const resultsByDomain = Object.keys(domainScores).map(d => ({
      id: d,
      label: COGNITIVE_DOMAINS[d],
      percent: Math.round((domainScores[d].correct / domainScores[d].total) * 100),
      correct: domainScores[d].correct,
      total: domainScores[d].total
    }));

    const questionResults = COGNITIVE_QUESTIONS.map(q => ({
      ...q,
      candidateAnswer: answers[q.id],
      isCorrect: answers[q.id] === q.correct,
      earnedPoints: answers[q.id] === q.correct ? 1 : 0,
      totalPoints: 1
    }));

    const finalResult = {
      id: `cognitive-${Date.now()}`,
      testId: 'cognitive-ability',
      testName: 'Cognitive Ability Test',
      score: overallScore,
      earnedPoints: totalCorrect,
      totalPoints: COGNITIVE_QUESTIONS.length,
      domains: resultsByDomain,
      questionResults,
      answers,
      proficiency: {
        label: overallScore >= 80 ? 'Exceptional' : overallScore >= 60 ? 'Above Average' : overallScore >= 40 ? 'Average' : 'Below Average',
        color: overallScore >= 80 ? 'text-indigo-600' : overallScore >= 60 ? 'text-emerald-600' : overallScore >= 40 ? 'text-blue-600' : 'text-amber-600',
        bg: overallScore >= 80 ? 'bg-indigo-50' : overallScore >= 60 ? 'bg-emerald-50' : overallScore >= 40 ? 'bg-blue-50' : 'bg-amber-50'
      },
      createdAt: new Date().toISOString()
    };

    usePracticeTestStore.getState().addAttempt(finalResult);
    
    setResult(finalResult);
    setStatus('result');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <AlertCircle size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">Start Challenge?</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    This test cannot be repeated for the next <span className="text-slate-900 font-bold">30 days</span>. 
                    Your cognitive profile will be shared <span className="text-slate-900 font-bold">directly with the client</span>.
                  </p>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <button 
                    onClick={() => { setShowStartConfirm(false); setStatus('active'); }}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg"
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
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Cognitive Ability</h1>
              <p className="text-sm font-medium text-slate-500">Test your critical thinking and problem-solving skills.</p>
            </div>
          </div>
          {savedReports.length > 0 && (
            <button 
              onClick={() => setStatus('history')}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              <HistoryIcon size={18} /> Past Results
            </button>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-sm">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <Zap size={14} /> Mu Sigma Style Assessment
                </div>
                <h2 className="mb-5 text-4xl font-black leading-tight text-slate-900">The <span className="text-emerald-600">Cognitive</span> Challenge.</h2>
                <p className="mb-8 max-w-xl text-lg font-medium leading-relaxed text-slate-500">
                  Measure your mental agility across three critical domains: Pattern Recognition, Critical Thinking, and Abstract Reasoning.
                </p>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setShowStartConfirm(true)}
                    className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center gap-3 shadow-xl hover:shadow-emerald-500/25 active:scale-95"
                  >
                    Start Challenge <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Patterns', desc: 'Hidden sequences and trends.', icon: BarChart3, bg: 'bg-blue-50', color: 'text-blue-600' },
                { title: 'Critical', desc: 'Logic traps and verbal puzzles.', icon: Lightbulb, bg: 'bg-amber-50', color: 'text-amber-600' },
                { title: 'Abstract', desc: 'Visualize complex idea links.', icon: Target, bg: 'bg-purple-50', color: 'text-purple-600' },
              ].map((item, i) => (
                <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-2xl", item.bg, item.color)}>
                    <item.icon size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-black text-slate-900">{item.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl">
              <h3 className="mb-8 text-xl font-black">Test Structure</h3>
              <div className="space-y-6">
                {[
                  { label: 'Time Limit', value: '15 Minutes', icon: TimerIcon },
                  { label: 'Questions', value: '20 Items', icon: ListChecks },
                  { label: 'Difficulty', value: 'Consulting Level', icon: Award },
                  { label: 'Feedback', value: 'Instant & Detailed', icon: Sparkles },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <item.icon size={18} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                      <p className="text-sm font-bold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-900">
                <AlertCircle size={16} /> Quick Note
              </h4>
              <p className="text-xs text-emerald-800/70 font-medium leading-relaxed">
                This is a timed test. If you don't know an answer, it's better to guess and move on than to get stuck. Every second counts!
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  // --- ACTIVE TEST VIEW ---
  if (status === 'active') {
    return (
      <div className="max-w-4xl mx-auto flex flex-col min-h-[600px]">
        {/* Header with Timer */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 mb-8 shadow-sm flex items-center justify-between px-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
              {currentIndex + 1}
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Question</p>
              <p className="text-sm font-bold text-slate-900">{COGNITIVE_DOMAINS[currentQuestion.domain]}</p>
            </div>
          </div>

          <div className={`flex items-center gap-3 px-6 py-2 rounded-2xl border-2 ${timeLeft < 60 ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
            <ClockIcon size={18} />
            <span className="font-black text-xl tabular-nums">{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white border border-slate-200 rounded-[3rem] p-16 shadow-sm"
            >
              <h2 className="text-3xl font-black text-slate-900 mb-12 leading-tight">
                {currentQuestion.text}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect(opt)}
                    className={`p-6 rounded-2xl border-2 text-left transition-all group ${
                      answers[currentQuestion.id] === opt
                        ? 'bg-slate-900 border-slate-900 text-white shadow-xl translate-y-[-2px]'
                        : 'bg-white border-slate-100 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">{opt}</span>
                      {answers[currentQuestion.id] === opt && <CheckCircle2 size={20} className="text-emerald-400" />}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between px-4">
            <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: `${progress}%` }}
                className="h-full bg-emerald-500" 
              />
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors disabled:opacity-0"
              >
                Previous
              </button>
              {currentIndex === totalQuestions - 1 && (
                <button 
                  onClick={calculateResults}
                  className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20"
                >
                  Submit Final <Sparkles size={16} className="inline ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULT VIEW ---
  if (status === 'result' && result) {
    return (
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setStatus('lobby')} className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 transition-all">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Challenge Results</h1>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm">
            <FileText size={18} /> Detailed Report
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-10 text-center shadow-sm">
              <div className="w-24 h-24 rounded-[2rem] bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Trophy size={48} />
              </div>
              <h2 className="text-5xl font-black text-slate-900 mb-2">{result.score}%</h2>
              <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mb-8">Overall Proficiency</p>
              
              <div className="space-y-4 text-left border-t border-slate-100 pt-8">
                <h4 className="font-black text-slate-900 text-sm">Cognitive Profile:</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {result.evaluation}
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-8 text-white">
              <h3 className="text-xl font-black mb-6">Domain Scores</h3>
              <div className="space-y-6">
                {result.domainScores.map(d => (
                  <div key={d.id} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span>{d.label}</span>
                      <span>{d.percent}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${d.percent}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold">{d.correct} / {d.total} Correct</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-black text-slate-900">Review Questions</h3>
            <div className="space-y-4">
              {COGNITIVE_QUESTIONS.map((q, i) => {
                const isCorrect = result.answers[q.id] === q.correct;
                const isExpanded = expandedExplanation === q.id;
                
                return (
                  <div key={q.id} className={`bg-white border rounded-3xl transition-all overflow-hidden ${isCorrect ? 'border-emerald-100' : 'border-rose-100'}`}>
                    <button 
                      onClick={() => setExpandedExplanation(isExpanded ? null : q.id)}
                      className="w-full p-6 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                          {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                        </div>
                        <span className="font-bold text-slate-900 line-clamp-1">{q.text}</span>
                      </div>
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="px-6 pb-6"
                        >
                          <div className="pt-4 border-t border-slate-50 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Your Answer</p>
                                <p className={`text-sm font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>{result.answers[q.id] || 'Skipped'}</p>
                              </div>
                              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                                <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1">Correct Answer</p>
                                <p className="text-sm font-bold text-emerald-700">{q.correct}</p>
                              </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl">
                              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Info size={12} className="text-blue-500" /> Explanation
                              </p>
                              <p className="text-sm text-slate-600 font-medium leading-relaxed">{q.explanation}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- HISTORY VIEW ---
  if (status === 'history') {
    return (
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
        <header className="flex items-center gap-4">
          <button onClick={() => setStatus('lobby')} className="p-3 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 transition-all shadow-sm">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Challenge History</h1>
            <p className="text-slate-500 font-medium">Review your past cognitive performances.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedReports.map(report => (
            <div key={report.id} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-slate-900">{report.score}%</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date(report.date).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {report.domainScores.map(d => (
                  <div key={d.id} className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{d.label}</span>
                    <span className="text-[10px] font-black text-slate-900">{d.percent}%</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => { setResult(report); setStatus('result'); }}
                className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all"
              >
                Review Report
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default CognitiveTest;
