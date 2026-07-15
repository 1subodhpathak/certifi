import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Info,
  Loader2,
  Monitor,
  Send,
  ShieldAlert,
  ShieldCheck,
  XOctagon,
} from 'lucide-react';
import { assessmentsMap } from '../data/assessments';
import { buildProctoringSummary, buildQuestionBank, buildSkillReportCard } from '../services/assessmentInsights';
import { saveAssessmentAttempt } from '../services/attemptRegistry';

const PRACTICE_ATTEMPTS_KEY = 'careerSensePracticeAttempts';
const timestamp = () => new Date().toISOString();

const formatTime = (seconds) => {
  const safe = Math.max(seconds, 0);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const remainder = safe % 60;
  
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
};

const scoreFreeText = (question, answer = '') => {
  const normalized = answer.toLowerCase();
  const rubric = question.rubric || [];
  const rubricResults = rubric.map((item) => {
    const matched = (item.keywords || []).filter((keyword) => normalized.includes(keyword.toLowerCase()));
    const ratio = matched.length / Math.max((item.keywords || []).length, 1);
    const earnedPoints = Math.round(item.points * ratio);
    const passed = matched.length >= Math.min(2, (item.keywords || []).length || 1);

    return {
      ...item,
      matched,
      earnedPoints: passed ? item.points : earnedPoints,
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

export default function PracticeSession() {
  const navigate = useNavigate();
  const { assessmentId } = useParams();
  const assessment = assessmentId ? assessmentsMap[assessmentId] : null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [remainingTime, setRemainingTime] = useState((assessment?.durationMinutes || 30) * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startedAt] = useState(Date.now());
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [violations, setViolations] = useState(0);
  const [showViolationModal, setShowViolationModal] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [tabSwitchLog, setTabSwitchLog] = useState([]);
  const [fullscreenExitLog, setFullscreenExitLog] = useState([]);
  const [cameraInterruptionsLog, setCameraInterruptionsLog] = useState([]);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    if (!assessment) {
      navigate('/practice-hub');
    }
  }, [assessment, navigate]);

  useEffect(() => {
    if (!assessment) return undefined;

    const startProctoring = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setHasCameraPermission(true);
      } catch (error) {
        alert('Camera permission is required to continue. Practice test cannot start without identity verification.');
        navigate('/practice-hub');
      }
    };

    startProctoring();
    document.documentElement.requestFullscreen?.().catch(() => {});

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, [assessment, navigate]);

  useEffect(() => {
    if (!assessment) return undefined;
    const timer = window.setInterval(() => {
      setRemainingTime((previous) => {
        if (previous <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [assessment]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden || isFailed) return;
      setTabSwitchLog((current) => [...current, { at: timestamp(), note: 'Tab or window focus lost.' }]);
      setViolations((current) => {
        const next = current + 1;
        if (next >= 3) setIsFailed(true);
        else setShowViolationModal(true);
        return next;
      });
    };

    const handleFullscreenChange = () => {
      if (document.fullscreenElement || isFailed) return;
      setFullscreenExitLog((current) => [...current, { at: timestamp(), note: 'Fullscreen mode exited.' }]);
      setViolations((current) => {
        const next = current + 1;
        if (next >= 3) setIsFailed(true);
        else setShowViolationModal(true);
        return next;
      });
      document.documentElement.requestFullscreen?.().catch(() => {});
    };

    const handleTrackEnded = () => {
      setCameraInterruptionsLog((current) => [...current, { at: timestamp(), note: 'Camera stream interrupted.' }]);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    streamRef.current?.getVideoTracks().forEach((track) => track.addEventListener('ended', handleTrackEnded));

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      streamRef.current?.getVideoTracks().forEach((track) => track.removeEventListener('ended', handleTrackEnded));
    };
  }, [isFailed]);

  const questions = assessment?.questions || [];
  const currentQuestion = questions[currentIndex];
  
  const answeredCount = questions.filter((question) => {
    const answer = answers[question.id];
    return answer !== undefined && String(answer).trim() !== '';
  }).length;
  const unansweredCount = questions.length - answeredCount;

  const canSubmit = useMemo(
    () => questions.length > 0 && answeredCount > 0,
    [questions.length, answeredCount],
  );

  useEffect(() => {
    if (remainingTime === 0 && assessment && !isSubmitting && !isFailed) {
      handleSubmit();
    }
  }, [remainingTime, assessment, isSubmitting, isFailed]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!assessment || !currentQuestion) return null;

  const faceVisibility = hasCameraPermission && streamRef.current?.active ? 98 : 0;
  const proctoring = {
    tabSwitches: tabSwitchLog.length,
    tabSwitchLog,
    fullscreenExits: fullscreenExitLog.length,
    fullscreenExitLog,
    cameraInterruptions: cameraInterruptionsLog.length,
    cameraInterruptionsLog,
    faceVisibility,
    fullscreenIntegrity: Math.max(0, 100 - fullscreenExitLog.length * 18),
  };

  const handleAnswerChange = (value) => {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: previous[currentQuestion.id] === value ? undefined : value,
    }));
  };

  const persistAttempt = (attempt) => {
    try {
      const existing = JSON.parse(localStorage.getItem(PRACTICE_ATTEMPTS_KEY) || '[]');
      const toCompactAttempt = (item) => ({
        id: item.id,
        assessmentId: item.assessmentId,
        assessmentTitle: item.assessmentTitle,
        score: item.score,
        totalCorrect: item.totalCorrect,
        totalQuestions: item.totalQuestions,
        elapsedSeconds: item.elapsedSeconds,
        issuedAt: item.issuedAt,
      });
      const compactAttempt = toCompactAttempt(attempt);
      const compactExisting = Array.isArray(existing) ? existing.map(toCompactAttempt) : [];
      let next = [compactAttempt, ...compactExisting.filter((item) => item.id !== compactAttempt.id)].slice(0, 24);
      while (next.length > 0) {
        try {
          localStorage.setItem(PRACTICE_ATTEMPTS_KEY, JSON.stringify(next));
          return;
        } catch (quotaError) {
          next = next.slice(0, -1);
          if (next.length === 0) throw quotaError;
        }
      }
    } catch (error) {
      console.error('Failed to save practice attempt:', error);
    }
  };

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const questionResults = questions.map((question) => {
      const answer = answers[question.id];

      if (question.type === 'free_text') {
        return {
          ...question,
          candidateAnswer: answer || '',
          ...scoreFreeText(question, answer || ''),
        };
      }

      const isCorrect = Number(answer) === question.correctIndex;
      const totalPoints = assessment.pointsPerQuestion || 5;

      return {
        ...question,
        candidateAnswer: answer,
        isCorrect,
        earnedPoints: isCorrect ? totalPoints : 0,
        totalPoints,
      };
    });

    const earnedPoints = questionResults.reduce((sum, question) => sum + question.earnedPoints, 0);
    const totalPoints = questionResults.reduce((sum, question) => sum + question.totalPoints, 0);
    const score = totalPoints ? Math.round((earnedPoints / totalPoints) * 100) : 0;
    const totalCorrect = questionResults.filter((question) => question.isCorrect).length;

    const result = {
      id: `${assessment.id}-${Date.now()}`,
      assessmentId: assessment.id,
      assessmentTitle: assessment.title,
      category: assessment.category,
      description: assessment.description,
      score,
      earnedPoints,
      totalPoints,
      totalCorrect,
      totalQuestions: questions.length,
      elapsedSeconds: Math.max(0, Math.round((Date.now() - startedAt) / 1000)),
      answers,
      proctoring,
      questionResults,
      issuedAt: new Date().toISOString(),
    };

    persistAttempt(result);
    saveAssessmentAttempt({
      id: result.id,
      skill: result.assessmentTitle,
      title: result.assessmentTitle,
      score: result.score,
      earnedPoints: result.earnedPoints,
      totalPoints: result.totalPoints,
      reportCard: buildSkillReportCard(result.questionResults, buildProctoringSummary(proctoring)),
      proctoringSummary: buildProctoringSummary(proctoring),
      questionBank: buildQuestionBank(result.assessmentTitle, questions),
      createdAt: result.issuedAt,
      attemptNumber: 1,
    });
    navigate('/practice-hub/report', { state: result });
  };

  const isFreeText = currentQuestion.type === 'free_text';

  if (!hasCameraPermission) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 font-sans text-slate-900">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-blue-700" />
        <p className="font-semibold text-slate-700">Initializing secure proctoring environment...</p>
        <p className="mt-2 text-sm text-slate-500">Please allow camera permissions to begin the practice test.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-slate-200 font-sans selection:bg-blue-200 lg:h-screen">
      {/* INSTITUTIONAL HEADER */}
      <header className="z-10 shrink-0 bg-blue-900 px-4 py-3 text-white shadow-md sm:px-6 lg:py-2.5">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex w-fit items-center gap-2 border-b border-blue-700 pb-3 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
            <ShieldCheck className="h-5 w-5 text-green-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Secure Practice</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate('/practice-hub')}
                className="inline-flex w-fit items-center gap-1 text-sm font-medium text-blue-200 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Exit
              </button>
              <div className="lg:border-l lg:border-blue-700 lg:pl-4">
                <h1 className="text-sm font-semibold tracking-wide sm:text-base">
                  {assessment.title} <span className="ml-2 inline-block rounded bg-blue-800 px-2 py-0.5 text-xs text-blue-200">{assessment.category}</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 xl:justify-end">
            {violations > 0 ? (
              <div className="flex items-center gap-2 rounded border border-red-500 bg-red-600 px-3 py-1 text-white">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wide">Integrity Flag: {violations}/3</span>
              </div>
            ) : null}

            <div className="flex items-center gap-3 rounded border border-blue-800 bg-blue-950 px-3 py-2 sm:px-4 sm:py-1.5">
              <Clock className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-100">Time Left:</span>
              <span className="text-base font-bold tracking-wider text-white sm:text-lg">
                {formatTime(remainingTime)}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
        {/* MAIN WORKSPACE (LEFT) */}
        <main className="flex min-h-0 flex-1 flex-col overflow-hidden bg-white">
          <div className="flex-1 overflow-y-auto">
            {/* Question Header Strip */}
            <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <span className="text-sm font-bold text-slate-800 sm:text-base">
                Question No. {currentIndex + 1}
              </span>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 sm:text-sm">
                <span className="flex items-center gap-1"><Info className="h-4 w-4 text-blue-600"/> {isFreeText ? 'Subjective' : 'Objective'}</span>
                <span className="font-semibold text-green-700">+{assessment.pointsPerQuestion || 5} Marks</span>
              </div>
            </div>

            {/* Question Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-base font-semibold text-slate-900 sm:text-lg">{currentQuestion.title}</h2>
              <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-slate-700 sm:text-base">
                {currentQuestion.prompt}
              </p>

              {currentQuestion.expectedOutput ? (
                <div className="mt-6 border-l-4 border-slate-400 bg-slate-50 p-4 text-sm text-slate-700">
                  <span className="font-bold text-slate-900">Note:</span> {currentQuestion.expectedOutput}
                </div>
              ) : null}

              <div className="mt-8">
                {isFreeText ? (
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm font-semibold text-slate-700">Your Response:</label>
                    <textarea
                      value={answers[currentQuestion.id] || ''}
                      onChange={(event) => handleAnswerChange(event.target.value)}
                      className="min-h-[260px] w-full resize-y rounded-md border border-slate-300 bg-white p-4 text-sm leading-relaxed text-slate-800 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:min-h-[350px]"
                      placeholder="Type your structured answer here..."
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((option, index) => {
                      const isSelected = answers[currentQuestion.id] === index;
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleAnswerChange(index)}
                          className={`flex w-full cursor-pointer items-start gap-3 rounded-md border p-3 text-left transition-colors sm:items-center sm:gap-4 sm:p-4 ${
                            isSelected
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-slate-300 bg-white hover:bg-slate-50'
                          }`}
                        >
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-400 bg-white'
                          }`}>
                            {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                          </div>
                          <span className="text-sm text-slate-800 sm:text-base">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ACTION FOOTER */}
          <footer className="flex shrink-0 flex-col gap-3 border-t border-slate-200 bg-slate-100 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((previous) => previous - 1)}
              className="w-full rounded-md border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-50 sm:w-auto sm:py-2"
            >
              Previous
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIndex((previous) => previous + 1)}
                className="w-full rounded-md bg-blue-700 px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:py-2"
              >
                Save & Next
              </button>
            ) : (
              <button
                type="button"
                disabled={!canSubmit || isSubmitting}
                onClick={handleSubmit}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:opacity-50 sm:w-auto sm:py-2"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Submit Assessment
              </button>
            )}
          </footer>
        </main>

        {/* QUESTION PALETTE (RIGHT) */}
        <aside className="z-0 flex w-full shrink-0 flex-col border-t border-slate-300 bg-slate-50 shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.05)] lg:w-[320px] lg:border-l lg:border-t-0 lg:shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)]">
          <div className="border-b border-slate-300 bg-slate-100 px-4 py-3 sm:px-5">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-slate-600" /> Proctoring Telemetry
            </h3>
          </div>

          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="relative mx-auto aspect-video w-full max-w-sm overflow-hidden rounded border border-slate-300 bg-black shadow-inner lg:max-w-none">
              <video ref={videoRef} autoPlay muted playsInline className="h-full w-full scale-x-[-1] object-cover" />
              <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-sm bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white tracking-wider">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                REC
              </div>
            </div>

            <div className="mt-4 space-y-3 text-xs font-medium text-slate-600">
              <div className="flex justify-between items-center">
                <span>Identity Verification</span>
                <span className="text-green-700 font-bold flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Face Visibility Index</span>
                <span className="text-slate-900 font-bold">{faceVisibility}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Fullscreen Lock</span>
                <span className={fullscreenExitLog.length > 0 ? 'text-red-600 font-bold' : 'text-green-700 font-bold'}>
                  {fullscreenExitLog.length === 0 ? 'Secured' : 'Breached'}
                </span>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200 bg-white p-4 sm:p-5">
            <h3 className="mb-3 text-sm font-bold text-slate-800">Question Palette</h3>
            <div className="grid grid-cols-1 gap-3 text-xs font-medium text-slate-600 sm:grid-cols-2 sm:gap-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-white">{answeredCount}</span>
                Answered
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded border border-slate-300 bg-white text-slate-600">{unansweredCount}</span>
                Not Answered
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Section 1
            </h4>
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 lg:grid-cols-4">
              {questions.map((question, index) => {
                const isAnswered = answers[question.id] !== undefined && String(answers[question.id]).trim() !== '';
                const isActive = index === currentIndex;
                
                return (
                  <button
                    key={question.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`relative flex h-9 w-full items-center justify-center rounded text-xs font-semibold transition-all sm:h-10 sm:text-sm ${
                      isActive ? 'ring-2 ring-blue-600 ring-offset-1' : ''
                    } ${
                      isAnswered
                        ? 'bg-green-600 text-white'
                        : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      {showViolationModal && !isFailed ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-md bg-white shadow-2xl border border-red-200 overflow-hidden">
            <div className="bg-red-600 p-4 text-center">
              <ShieldAlert className="mx-auto h-8 w-8 text-white mb-2" />
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">Integrity Warning ({violations}/3)</h3>
            </div>
            <div className="p-6 text-center">
              <p className="mb-6 text-sm leading-relaxed text-slate-700 font-medium">
                Our proctoring system detected that you exited fullscreen or switched tabs. Continued violations will result in immediate termination of the practice test.
              </p>
              <button
                onClick={() => setShowViolationModal(false)}
                className="w-full rounded-md bg-red-600 py-2.5 text-sm font-bold text-white hover:bg-red-700 transition-colors shadow-sm"
              >
                Acknowledge & Resume
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isFailed ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-md bg-white shadow-2xl border border-slate-300 overflow-hidden">
            <div className="bg-slate-900 p-8 text-center">
              <XOctagon className="mx-auto h-12 w-12 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-white tracking-wide">PRACTICE TEST TERMINATED</h2>
              <div className="mt-3 inline-block rounded bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-300 border border-red-500/30">
                Protocol Violation Limit Reached
              </div>
            </div>
            <div className="p-8 text-center bg-slate-50">
              <p className="mb-8 text-sm leading-relaxed text-slate-600">
                Multiple integrity violations were recorded. This practice session has been invalidated to preserve secure test conditions.
              </p>
              <button
                onClick={() => navigate('/practice-hub')}
                className="w-full rounded-md border border-slate-300 bg-white py-3 text-sm font-bold text-slate-800 shadow-sm hover:bg-slate-100 transition-colors"
              >
                Return to Practice Hub
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
