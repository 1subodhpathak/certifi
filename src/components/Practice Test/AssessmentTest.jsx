import React, { useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  ListChecks,
  RotateCcw,
  Send,
  XCircle,
  Sparkles,
  Trophy,
  Zap,
  Target,
  Award,
  Info,
  Shield,
  Download,
  Eye,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPracticeAssessment } from '../../data/practiceAssessmentsData';
import { usePracticeTestStore } from '../../core/stores/practiceTestStore';
import { useProfileStore } from '../../core/stores/profileStore';
import { recordUsage } from '../../services/usageLedger';
import CertificatePreview, {
  downloadCertificatePdf,
  formatCertificateDate,
  getCandidateName,
} from '../shared/AssessmentCertificate';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const difficultyStyles = {
  easy: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
  medium: 'bg-amber-50 text-amber-700 ring-1 ring-amber-100',
  hard: 'bg-rose-50 text-rose-700 ring-1 ring-rose-100',
};

const formatDifficulty = (difficulty) => {
  const value = difficulty || 'easy';
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const formatTime = (seconds) => {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const scoreFreeText = (question, answer = '') => {
  const normalized = answer.toLowerCase();
  const rubricResults = (question.rubric || []).map((item) => {
    const matched = (item.keywords || []).filter((keyword) => normalized.includes(keyword.toLowerCase()));
    const passed = matched.length >= Math.min(2, item.keywords?.length || 1);
    return {
      ...item,
      matched,
      earnedPoints: passed ? item.points : Math.round(item.points * (matched.length / Math.max(item.keywords?.length || 1, 1))),
      passed,
    };
  });

  const earnedPoints = rubricResults.reduce((sum, item) => sum + item.earnedPoints, 0);
  const totalPoints = rubricResults.reduce((sum, item) => sum + item.points, 0) || question.points || 1;

  return {
    earnedPoints: Math.min(earnedPoints, totalPoints),
    totalPoints,
    isCorrect: earnedPoints / totalPoints >= 0.7,
    rubricResults,
  };
};

const AssessmentTest = ({ assessmentId, onBack }) => {
  const assessment = getPracticeAssessment(assessmentId);
  const addAttempt = usePracticeTestStore((state) => state.addAttempt);
  const addCertificate = usePracticeTestStore((state) => state.addCertificate);
  const updateAttemptCertificate = usePracticeTestStore((state) => state.updateAttemptCertificate);
  const profileData = useProfileStore((state) => state.profileData || {});
  const updateProfileField = useProfileStore((state) => state.updateField);
  const [status, setStatus] = useState('lobby'); // lobby, active, result
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStartConfirm, setShowStartConfirm] = useState(false);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [isCertificatePreviewOpen, setIsCertificatePreviewOpen] = useState(false);
  const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false);
  const certificateRef = useRef(null);
  const startedAt = useMemo(() => Date.now(), []);

  if (!assessment) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Assessment not found</h2>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white"
        >
          <ArrowLeft size={16} /> Back to Practice Hub
        </button>
      </div>
    );
  }

  const questions = assessment.questions || [];
  const currentQuestion = questions[currentIndex];
  const difficultyCounts = questions.reduce((counts, question) => {
    const difficulty = question.difficulty || 'easy';
    return {
      ...counts,
      [difficulty]: (counts[difficulty] || 0) + 1,
    };
  }, {});
  const answeredCount = questions.filter((question) => {
    const answer = answers[question.id];
    return answer !== undefined && String(answer).trim() !== '';
  }).length;
  const completionPercent = Math.round((answeredCount / questions.length) * 100);

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: prev[currentQuestion.id] === value ? undefined : value,
    }));
  };

  const getProficiency = (score) => {
    if (score >= 90) return { label: 'Elite Expert', color: 'text-indigo-600', bg: 'bg-indigo-50' };
    if (score >= 75) return { label: 'Advanced', color: 'text-emerald-600', bg: 'bg-emerald-50' };
    if (score >= 50) return { label: 'Proficient', color: 'text-blue-600', bg: 'bg-blue-50' };
    return { label: 'Developing', color: 'text-amber-600', bg: 'bg-amber-50' };
  };

  const handleSubmit = () => {
    const questionResults = questions.map((question) => {
      const answer = answers[question.id];
      if (question.type === 'free_text') {
        const textResult = scoreFreeText(question, answer || '');
        return {
          ...question,
          candidateAnswer: answer || '',
          ...textResult,
        };
      }

      const isCorrect = Number(answer) === question.correctIndex;
      return {
        ...question,
        candidateAnswer: answer,
        isCorrect,
        earnedPoints: isCorrect ? assessment.pointsPerQuestion : 0,
        totalPoints: assessment.pointsPerQuestion,
      };
    });

    const earnedPoints = questionResults.reduce((sum, question) => sum + question.earnedPoints, 0);
    const totalPoints = questionResults.reduce((sum, question) => sum + question.totalPoints, 0);
    const score = Math.round((earnedPoints / totalPoints) * 100);
    const elapsedSeconds = Math.round((Date.now() - startedAt) / 1000);
    const totalCorrect = questionResults.filter((question) => question.isCorrect).length;
    
    const finalResult = {
      id: `${assessment.id}-${Date.now()}`,
      testId: assessment.id,
      testName: assessment.title,
      score,
      earnedPoints,
      totalPoints,
      elapsedSeconds,
      totalCorrect,
      totalQuestions: questions.length,
      questionResults,
      answers,
      proficiency: getProficiency(score)
    };

    addAttempt(finalResult);
    setResult(finalResult);
    setStatus('result');
  };

  const handleViewCertificate = () => {
    if (!result) return;

    const nextCertificate = certificate || {
      id: `TS-${new Date().getFullYear()}-${String(Date.now()).slice(-8)}`,
      candidateName: getCandidateName(profileData),
      candidateEmail: profileData.email || '',
      testId: result.testId,
      testTitle: result.testName,
      category: assessment.category,
      score: result.score,
      proficiency: result.proficiency.label,
      earnedPoints: result.earnedPoints,
      totalPoints: result.totalPoints,
      totalCorrect: result.totalCorrect,
      totalQuestions: result.totalQuestions,
      timeSpent: result.elapsedSeconds,
      issuedAt: new Date().toISOString(),
    };

    setCertificate(nextCertificate);
    setIsCertificatePreviewOpen(true);
    addCertificate(nextCertificate);
    updateAttemptCertificate(result.id, nextCertificate);
    if (!Array.isArray(profileData.certifications) || !profileData.certifications.some((item) => item.certificateId === nextCertificate.id)) {
      updateProfileField('certifications', [
        {
          id: nextCertificate.id,
          certificateId: nextCertificate.id,
          name: `${nextCertificate.testTitle} Certificate`,
          issuer: 'Talent Sense',
          date: formatCertificateDate(nextCertificate.issuedAt),
          score: `${nextCertificate.score}%`,
        },
        ...(profileData.certifications || []),
      ]);
    }
  };

  const handleDownloadCertificate = async () => {
    if (!certificate) return;
    setIsGeneratingCertificate(true);
    try {
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      if (!certificateRef.current) return;

      await downloadCertificatePdf(certificateRef.current, certificate);
    } finally {
      setIsGeneratingCertificate(false);
    }
  };

  // --- RESULT VIEW ---
  if (status === 'result' && result) {
    return (
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
        <AnimatePresence>
          {isCertificatePreviewOpen && certificate && (
            <motion.div
              className="fixed inset-0 z-[160] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCertificatePreviewOpen(false)}
            >
              <motion.div
                className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex shrink-0 flex-col gap-3 border-b border-slate-200 px-5 py-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base font-black text-slate-950">Assessment Certificate</h3>
                    <p className="text-xs font-semibold text-slate-500">{certificate.testTitle} · {certificate.id}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDownloadCertificate}
                      disabled={isGeneratingCertificate}
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Download size={14} />
                      {isGeneratingCertificate ? 'Preparing PDF...' : 'Download PDF'}
                    </button>
                    <button
                      onClick={() => setIsCertificatePreviewOpen(false)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50"
                      title="Close certificate preview"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-auto bg-slate-100 p-4 md:p-6">
                  <div className="mx-auto w-max" ref={certificateRef}>
                    <CertificatePreview certificate={certificate} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <header className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition hover:bg-slate-50">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">{assessment.title}</h1>
              <p className="text-sm font-medium text-slate-500">Performance Analysis & Breakdown</p>
            </div>
          </div>
          <button onClick={() => setStatus('active')} className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600">
            <RotateCcw size={18} /> Retake Test
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Proficiency Card */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-sm">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="space-y-6">
                  <div className={cn("inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest", result.proficiency.bg, result.proficiency.color)}>
                    <Trophy size={14} /> Proficiency: {result.proficiency.label}
                  </div>
                  <h2 className="text-5xl font-black tracking-tight text-slate-900">Your <span className="text-blue-600">Skill Score</span>.</h2>
                  <p className="max-w-md text-lg font-medium leading-relaxed text-slate-500">
                    You've demonstrated a strong grasp of {assessment.category} principles. Your performance highlights consistent logic and accuracy.
                  </p>
                </div>
                
                <div className="flex flex-col items-center justify-center rounded-[3rem] bg-slate-900 p-10 text-white shadow-2xl min-w-[240px]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Overall Score</p>
                  <div className="relative flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={364.4} strokeDashoffset={364.4 - (364.4 * result.score) / 100} className="text-blue-500 transition-all duration-1000 ease-out" />
                    </svg>
                    <span className="absolute text-4xl font-black">{result.score}%</span>
                  </div>
                  <p className="mt-6 text-sm font-bold text-slate-300">{result.totalCorrect} / {result.totalQuestions} Correct</p>
                </div>
              </div>
            </div>

            {/* Detailed Question Review */}
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-3 px-2">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full" /> Question Review
              </h3>
              {result.questionResults.map((q, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-md">
                  <div className="flex items-start gap-6">
                    <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black", q.isCorrect ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600")}>
                      {q.isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Question {idx + 1}</p>
                          <span className={cn(
                            'rounded-md px-2 py-1 text-[10px] font-black uppercase tracking-wider',
                            difficultyStyles[q.difficulty || 'easy']
                          )}>
                            {formatDifficulty(q.difficulty)}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 leading-snug">{q.title}</h4>
                      </div>
                      <p className="text-sm font-medium text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl">{q.prompt}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-slate-100 bg-white">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Answer</p>
                          <p className="text-sm font-bold text-slate-700">
                            {q.type === 'mcq' ? q.options[q.candidateAnswer] || 'Not Answered' : q.candidateAnswer || 'Not Answered'}
                          </p>
                        </div>
                        {q.type === 'mcq' && !q.isCorrect && (
                          <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/30">
                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2">Correct Answer</p>
                            <p className="text-sm font-bold text-emerald-700">{q.options[q.correctIndex]}</p>
                          </div>
                        )}
                      </div>
                      
                      {q.explanation && (
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 text-blue-700 text-sm font-medium">
                          <Info size={18} className="shrink-0 mt-0.5" />
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Stats */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50 p-8 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-900">Professional Certificate</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                Generate a polished certificate with your profile name, assessment title, score, certificate ID, and issue date.
              </p>
              <div className="mt-5 rounded-2xl border border-white bg-white/80 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Certificate Name</p>
                <p className="mt-1 text-sm font-black text-slate-900">{getCandidateName(profileData)}</p>
                <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Assessment</p>
                <p className="mt-1 text-sm font-bold text-slate-700">{assessment.title}</p>
              </div>
              <button
                onClick={handleViewCertificate}
                disabled={isGeneratingCertificate}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-4 text-sm font-black text-white shadow-xl shadow-slate-200 transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Eye size={18} />
                {certificate ? 'View Certificate' : 'Generate & View Certificate'}
              </button>
              {certificate && (
                <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-widest text-blue-700">
                  Stored as {certificate.id}
                </p>
              )}
            </div>

            <div className="rounded-[2.5rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-black text-slate-900">Performance Metrics</h3>
              <div className="space-y-6">
                {[
                  { label: 'Time Spent', value: formatTime(result.elapsedSeconds), icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'Avg Speed', value: `${Math.round(result.elapsedSeconds / result.totalQuestions)}s / q`, icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
                  { label: 'Accuracy', value: `${result.score}%`, icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { label: 'Status', value: result.proficiency.label, icon: Award, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", item.bg, item.color)}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</p>
                      <p className="text-base font-black text-slate-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-indigo-600 p-8 text-white shadow-xl">
              <Sparkles className="mb-4 text-indigo-200" size={32} />
              <h3 className="mb-3 text-xl font-black">Ready for the Next Level?</h3>
              <p className="text-sm font-medium leading-relaxed text-indigo-100 mb-6">
                Your performance in {assessment.title} suggests you're ready for more complex challenges. Try our Architecture Sandbox next.
              </p>
              <button onClick={onBack} className="w-full py-3 bg-white text-indigo-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-colors">
                Back to Practice Hub
              </button>
            </div>
          </aside>
        </div>
      </div>
    );
  }

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
                  <FileText size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">Start Assessment?</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    This test is timed and your score is calculated immediately after submission.
                    Make sure you are ready before you begin.
                  </p>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <button 
                    onClick={() => {
                      recordUsage({
                        action: 'Start Practice Assessment',
                        area: assessment.title || assessment.id,
                        careerPoints: 2500,
                        status: 'completed',
                        metadata: {
                          assessmentId: assessment.id,
                          fixedCharge: 2500,
                        },
                      });
                      setStatus('active');
                    }}
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
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">{assessment.title}</h1>
              <p className="text-sm font-medium text-slate-500">Official TalentSense Assessment Module</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-blue-500/10 transition-colors" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <Sparkles size={14} /> Ready for Certification
                </div>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900">Master the <span className="text-blue-600">{assessment.title}</span> domain.</h2>
                <p className="mb-8 max-w-xl text-sm font-medium leading-relaxed text-slate-500">
                  {assessment.instructions} This assessment measures core proficiency, speed, and accuracy across real-world professional scenarios.
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowStartConfirm(true)}
                    className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600 active:scale-[0.98]"
                  >
                    Start Assessment <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">High Precision</h3>
                <p className="text-sm font-medium text-slate-500">Questions progress from fundamentals to advanced workplace scenarios for clearer skill mapping.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Results</h3>
                <p className="text-sm font-medium text-slate-500">Get a detailed breakdown of your strengths and improvement areas immediately.</p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl">
              <h3 className="mb-8 text-xl font-black">Test Structure</h3>
              <div className="space-y-6">
                {[
                  { label: 'Total Questions', value: `${questions.length} Items`, icon: ListChecks },
                  { label: 'Time Required', value: `${assessment.durationMinutes} Min`, icon: Clock },
                  { label: 'Question Flow', value: 'Easy to Hard', icon: Shield },
                  { label: 'Result Format', value: 'Full Proficiency Report', icon: FileText },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                      <p className="text-sm font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-slate-500">Difficulty Split</h4>
              <div className="grid grid-cols-3 gap-3">
                {['easy', 'medium', 'hard'].map((difficulty) => (
                  <div key={difficulty} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center">
                    <p className={cn('mx-auto mb-2 inline-flex rounded-md px-2 py-1 text-[10px] font-black uppercase tracking-wider', difficultyStyles[difficulty])}>
                      {formatDifficulty(difficulty)}
                    </p>
                    <p className="text-xl font-black text-slate-900">{difficultyCounts[difficulty] || 0}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Info size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Direct Share</h4>
              </div>
              <p className="text-xs font-medium leading-relaxed text-slate-600">
                Your report highlights accuracy, completion speed, strengths, and areas where focused practice can improve your score.
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  // --- ACTIVE TEST VIEW ---
  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-16 animate-in fade-in duration-500">
      <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <button onClick={onBack} className="mt-1 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900">
            <ArrowLeft size={18} />
          </button>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{assessment.category}</p>
            <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-900">{assessment.title}</h1>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
            <Clock size={15} /> {assessment.durationMinutes}m Remaining
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
            <ListChecks size={15} /> {currentIndex + 1} / {questions.length}
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm self-start">
          <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Progress</span>
            <span>{completionPercent}%</span>
          </div>
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${completionPercent}%` }} />
          </div>
          <div className="grid grid-cols-5 gap-2 lg:grid-cols-4">
            {questions.map((question, index) => {
              const answered = answers[question.id] !== undefined && String(answers[question.id]).trim() !== '';
              return (
                <button
                  key={question.id}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'flex h-10 items-center justify-center rounded-lg text-xs font-bold transition',
                    index === currentIndex
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : answered
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  )}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </aside>

        <main className="rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 p-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                {currentQuestion.type === 'free_text' ? 'Written Response' : 'Conceptual Analysis'}
              </span>
              <span className={cn(
                'rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider',
                difficultyStyles[currentQuestion.difficulty || 'easy']
              )}>
                {formatDifficulty(currentQuestion.difficulty)} Level
              </span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 leading-tight">{currentQuestion.title}</h2>
            <p className="mt-6 whitespace-pre-wrap text-lg font-medium leading-relaxed text-slate-500">
              {currentQuestion.prompt}
            </p>
          </div>

          <div className="p-8 bg-slate-50/50">
            {currentQuestion.type === 'mcq' ? (
              <div className="grid gap-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(index)}
                    className={cn(
                      'flex items-center gap-5 rounded-2xl border-2 p-5 text-left transition-all group',
                      answers[currentQuestion.id] === index
                        ? 'border-blue-600 bg-white text-slate-900 shadow-xl shadow-blue-50 scale-[1.01]'
                        : 'border-white bg-white text-slate-600 hover:border-blue-100 hover:bg-white shadow-sm'
                    )}
                  >
                    <span className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-colors',
                      answers[currentQuestion.id] === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500'
                    )}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-base font-bold">{option}</span>
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                value={answers[currentQuestion.id] || ''}
                onChange={(event) => handleAnswer(event.target.value)}
                placeholder="Structure your professional response here..."
                className="min-h-[350px] w-full rounded-[1.5rem] border-2 border-transparent bg-white p-6 text-lg font-medium leading-relaxed text-slate-900 outline-none transition focus:border-blue-500 shadow-sm"
              />
            )}
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-100 p-8 sm:flex-row sm:items-center sm:justify-between bg-white">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:opacity-30"
            >
              <ArrowLeft size={18} /> Previous
            </button>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => { if(confirm("Reset all answers?")) { setAnswers({}); setCurrentIndex(0); } }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-400 transition hover:text-rose-500 hover:border-rose-100"
              >
                <RotateCcw size={18} /> Reset
              </button>
              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((index) => Math.min(questions.length - 1, index + 1))}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-600 shadow-lg shadow-blue-100"
                >
                  Next Question <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-200 animate-pulse hover:animate-none"
                >
                  Complete Assessment <Send size={18} />
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AssessmentTest;
