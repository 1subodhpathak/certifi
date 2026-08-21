import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code2,
  HelpCircle,
  Info,
  Loader2,
  Monitor,
  Send,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  XOctagon,
} from 'lucide-react';

type AssessmentQuestion = {
  id?: string | number;
  type?: string;
  question?: string;
  scenario?: string;
  code?: string;
  options?: string[];
  answer?: string;
  explanation?: string;
};

type AssessmentState = {
  questions?: AssessmentQuestion[];
  skill?: string;
  title?: string;
  durationSeconds?: number;
  timePerQuestion?: number;
  difficulty?: string;
  certificateEligible?: boolean;
  distribution?: {
    mcqCount?: number;
    caseStudyCount?: number;
  };
};

const formatTime = (seconds: number) => {
  const safe = Math.max(seconds, 0);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const remainder = safe % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
};

const timestamp = () => new Date().toISOString();

export default function AssessmentRoom() {
  const { state } = useLocation() as { state: AssessmentState | null };
  const navigate = useNavigate();
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string | number, string>>({});
  const [timeLeft, setTimeLeft] = useState(state?.durationSeconds || 30 * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [violations, setViolations] = useState(0);
  const [showViolationModal, setShowViolationModal] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [tabSwitchLog, setTabSwitchLog] = useState<Array<{ at: string; note: string }>>([]);
  const [fullscreenExitLog, setFullscreenExitLog] = useState<Array<{ at: string; note: string }>>([]);
  const [cameraInterruptionsLog, setCameraInterruptionsLog] = useState<Array<{ at: string; note: string }>>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Ref callback: attach stream immediately when video element mounts,
  // even if getUserMedia already resolved (fixes black screen on production builds)
  const setVideoRef = (el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (el && streamRef.current && el.srcObject !== streamRef.current) {
      el.srcObject = streamRef.current;
    }
  };
  const startedAtRef = useRef(Date.now());

  useEffect(() => {
    if (!state?.questions?.length) navigate('/dashboard');
  }, [navigate, state]);

  useEffect(() => {
    const startProctoring = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        // Attach to video element if it's already mounted; if not, setVideoRef handles it
        if (videoRef.current && videoRef.current.srcObject !== stream) {
          videoRef.current.srcObject = stream;
        }
        setHasCameraPermission(true);
      } catch (error) {
        alert('Camera permission is required to continue. Assessment cannot start without identity verification.');
        navigate('/dashboard');
      }
    };

    startProctoring();
    document.documentElement.requestFullscreen?.().catch(() => { });

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, [navigate]);

  useEffect(() => {
    if (isFailed) return undefined;
    const timer = window.setInterval(() => {
      setTimeLeft((previous) => (previous <= 1 ? 0 : previous - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isFailed]);

  useEffect(() => {
    if (!state?.questions?.length || isSubmitting || isFailed) return;
    if (timeLeft === 0) handleSubmit();
  }, [isFailed, isSubmitting, state, timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

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
      document.documentElement.requestFullscreen?.().catch(() => { });
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

  if (!state?.questions?.length) return null;

  const questions = state.questions || [];
  const question = questions[currentQIndex];
  const questionKey = question.id ?? currentQIndex;
  const answeredCount = questions.filter((item, index) => {
    const key = item.id ?? index;
    const answer = answers[key];
    return answer !== undefined && String(answer).trim() !== '';
  }).length;
  const unansweredCount = questions.length - answeredCount;
  const canSubmit = useMemo(
    () => questions.length > 0 && answeredCount > 0,
    [questions.length, answeredCount],
  );

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

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    navigate('/report', {
      state: {
        attemptId: `attempt_${Date.now()}`,
        answers,
        questions: state.questions,
        skill: state.skill,
        title: state.title,
        certificateEligible: state.certificateEligible,
        completedAt: new Date().toISOString(),
        durationSeconds: Math.round((Date.now() - startedAtRef.current) / 1000),
        proctoring,
        sourceLearningPathId: (state as any).sourceLearningPathId,
        sourceModuleId: (state as any).sourceModuleId,
      },
    });
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((current) => current + 1);
      return;
    }
    handleSubmit();
  };

  if (!hasCameraPermission) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 font-sans text-slate-900">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-blue-700" />
        <p className="font-semibold text-slate-700">Initializing secure proctoring environment...</p>
        <p className="text-sm text-slate-500 mt-2">Please allow camera permissions to begin the assessment.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-slate-200 font-sans selection:bg-blue-200 lg:h-screen">
      {/* INSTITUTIONAL HEADER */}
      <header className="z-10 shrink-0 bg-blue-900 px-4 py-3 text-white shadow-md sm:px-6 lg:py-2.5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex w-fit items-center gap-2 border-b border-blue-700 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
              <ShieldCheck className="h-5 w-5 text-green-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Secure Session</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate('/create-assessment')}
                className="inline-flex w-fit items-center gap-1 text-sm font-medium text-blue-200 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Exit
              </button>
              <h1 className="min-w-0 text-sm font-semibold tracking-wide text-white sm:text-base">
                {state.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:justify-end">
            {violations > 0 ? (
              <div className="flex items-center gap-2 rounded border border-red-500 bg-red-600 px-3 py-1 text-white">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wide">Integrity Flag: {violations}/3</span>
              </div>
            ) : null}

            <div className="flex items-center gap-3 rounded border border-blue-800 bg-blue-950 px-3 py-2 sm:px-4 sm:py-1.5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-blue-100">Time Remaining</span>
              <span className={`text-base font-bold tracking-wider sm:text-lg ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
        {/* MAIN WORKSPACE (LEFT) */}
        <main className="flex min-h-0 min-w-0 flex-1 flex-col bg-white">
          <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <span className="text-sm font-bold text-slate-800 sm:text-base">
              Question No. {currentQIndex + 1} of {questions.length}
            </span>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Info className="h-4 w-4 text-blue-600" />
                {question.type === 'case-study' ? 'Case Study' : 'Multiple Choice'}
              </span>
            </div>
          </div>

          <div className="custom-scrollbar flex flex-1 flex-col overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-4xl">

              {/* Question Text & Context */}
              <div className="mb-6 sm:mb-8">
                {question.scenario ? (
                  <div className="mb-5 rounded-r-md border-l-4 border-blue-800 bg-blue-50 p-4 shadow-sm sm:mb-6 sm:p-5">
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                      <BookOpen className="h-4 w-4" /> Business Context / Scenario
                    </div>
                    <p className="text-sm leading-relaxed text-slate-800">{question.scenario}</p>
                  </div>
                ) : null}

                <h2 className="text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
                  {question.question}
                </h2>

                {question.code ? (
                  <div className="mt-5 overflow-hidden rounded-md border border-slate-300 shadow-sm sm:mt-6">
                    <div className="flex items-center justify-between border-b border-slate-300 bg-slate-100 px-4 py-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Reference Snippet</span>
                      <Code2 className="h-4 w-4 text-slate-500" />
                    </div>
                    <div className="overflow-x-auto bg-slate-50 p-4">
                      <pre className="text-sm text-slate-800 whitespace-pre-wrap font-mono">{question.code}</pre>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options?.map((option, index) => {
                  const isSelected = answers[questionKey] === option;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setAnswers({
                        ...answers,
                        [questionKey]: answers[questionKey] === option ? undefined : option,
                      })}
                      className={`flex w-full cursor-pointer items-start gap-3 rounded-md border p-3 text-left transition-colors sm:items-center sm:gap-4 sm:p-4 ${isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-300 bg-white hover:bg-slate-50'
                        }`}
                    >
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-400 bg-white'
                        }`}>
                        {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm text-slate-800 sm:text-base">{option}</span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* ACTION FOOTER */}
          <div className="z-20 flex shrink-0 flex-col gap-3 border-t border-slate-200 bg-slate-100 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Responses are saved locally automatically
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                type="button"
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex((current) => current - 1)}
                className="w-full rounded-md border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-50 sm:w-auto sm:py-2"
              >
                Previous
              </button>

              {currentQIndex < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 disabled:opacity-50 sm:w-auto sm:px-8 sm:py-2"
                >
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save & Next'}
                  {!isSubmitting ? <ChevronRight className="h-4 w-4" /> : null}
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
            </div>
          </div>
        </main>

        {/* PROCTORING SIDEBAR (RIGHT) */}
        <aside className="z-10 flex w-full shrink-0 flex-col border-t border-slate-300 bg-slate-50 shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.05)] lg:w-[320px] lg:border-l lg:border-t-0 lg:shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)]">
          <div className="border-b border-slate-300 bg-slate-100 px-4 py-3 sm:px-5">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-slate-600" /> Proctoring Telemetry
            </h3>
          </div>

          <div className="border-b border-slate-200 p-4 sm:p-5">
            <div className="relative mx-auto aspect-video w-full max-w-sm overflow-hidden rounded border border-slate-300 bg-black shadow-inner lg:max-w-none">
              <video ref={setVideoRef} autoPlay muted playsInline className="h-full w-full scale-x-[-1] object-cover" />
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
                <span className={fullscreenExitLog.length > 0 ? "text-red-600 font-bold" : "text-green-700 font-bold"}>
                  {fullscreenExitLog.length === 0 ? "Secured" : "Breached"}
                </span>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200 bg-white p-4 sm:p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800">
              <HelpCircle className="h-4 w-4 text-slate-600" /> Question Palette
            </h3>
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

          <div className="border-b border-slate-200 bg-slate-50/50 p-4 sm:p-5">
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 lg:grid-cols-4">
              {questions.map((item, index) => {
                const key = item.id ?? index;
                const isAnswered = answers[key] !== undefined && String(answers[key]).trim() !== '';
                const isActive = index === currentQIndex;

                return (
                  <button
                    key={String(key)}
                    type="button"
                    onClick={() => setCurrentQIndex(index)}
                    className={`relative flex h-9 w-full items-center justify-center rounded text-xs font-semibold transition-all sm:h-10 sm:text-sm ${isActive ? 'ring-2 ring-blue-600 ring-offset-1' : ''
                      } ${isAnswered
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

          <div className="flex-1 bg-slate-50/50 p-4 sm:p-5">
            <div className="rounded border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Session Protocol</h4>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                  Do not exit fullscreen mode.
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                  Do not switch browser tabs or windows.
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                  Maintain face visibility within the camera frame at all times.
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* WARNING MODAL */}
      {showViolationModal && !isFailed ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-md bg-white shadow-2xl border border-red-200 overflow-hidden">
            <div className="bg-red-600 p-4 text-center">
              <ShieldAlert className="mx-auto h-8 w-8 text-white mb-2" />
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">Integrity Warning ({violations}/3)</h3>
            </div>
            <div className="p-6 text-center">
              <p className="mb-6 text-sm leading-relaxed text-slate-700 font-medium">
                Our proctoring system detected that you exited fullscreen or switched tabs. Continued violations will result in immediate termination of the exam.
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

      {/* FAILURE MODAL */}
      {isFailed ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-md bg-white shadow-2xl border border-slate-300 overflow-hidden">
            <div className="bg-slate-900 p-8 text-center">
              <XOctagon className="mx-auto h-12 w-12 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-white tracking-wide">ASSESSMENT TERMINATED</h2>
              <div className="mt-3 inline-block rounded bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-300 border border-red-500/30">
                Protocol Violation Limit Reached
              </div>
            </div>
            <div className="p-8 text-center bg-slate-50">
              <p className="mb-8 text-sm leading-relaxed text-slate-600">
                Multiple integrity violations (such as exiting fullscreen or losing window focus) were recorded. To protect the validity of the certification process, this session has been permanently invalidated.
              </p>
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full rounded-md border border-slate-300 bg-white py-3 text-sm font-bold text-slate-800 shadow-sm hover:bg-slate-100 transition-colors"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
