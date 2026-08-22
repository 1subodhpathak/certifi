import { startTransition, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { generateAssessment, generateSkillOverview, validateAssessmentTopic } from '../services/aiService';
import { getCsPointsQuotaStatus } from '../services/pointsQuota';
import { skillLibrary } from '../data/skillData';
import DashboardShell from '../components/DashboardShell';
import {
  AlertCircle,
  GraduationCap,
  Search,
  Loader2,
  ShieldCheck,
  Info,
  X,
} from 'lucide-react';

const DIFFICULTY_OPTIONS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
const MCQ_RATIO_OPTIONS = [100, 80, 70, 60, 50];
const QUESTION_MARKERS = [5, 10, 15, 20, 25, 30];
const MAX_SKILL_SUGGESTIONS = 18;
const DEFAULT_SKILL_SUGGESTIONS = skillLibrary.slice(0, MAX_SKILL_SUGGESTIONS);
const SEARCHABLE_SKILLS = skillLibrary.map((skill) => ({
  skill,
  normalized: skill.toLowerCase(),
}));

function rankSkillMatch(normalizedSkill, query) {
  if (normalizedSkill.startsWith(query)) {
    return normalizedSkill === query ? 0 : 1;
  }

  const matchIndex = normalizedSkill.indexOf(query);
  if (matchIndex === -1) {
    return Number.POSITIVE_INFINITY;
  }

  return 10 + matchIndex;
}

function getTopSkillSuggestions(query) {
  if (!query) {
    return DEFAULT_SKILL_SUGGESTIONS;
  }

  const rankedMatches = [];

  for (const entry of SEARCHABLE_SKILLS) {
    const rank = rankSkillMatch(entry.normalized, query);
    if (!Number.isFinite(rank)) {
      continue;
    }

    rankedMatches.push({
      rank,
      skill: entry.skill,
    });
  }

  rankedMatches.sort((left, right) => {
    if (left.rank !== right.rank) {
      return left.rank - right.rank;
    }

    return left.skill.localeCompare(right.skill);
  });

  return rankedMatches.slice(0, MAX_SKILL_SUGGESTIONS).map(({ skill }) => skill);
}

const estimateTokenRange = (questionCount, difficulty, caseStudyCount) => {
  const difficultyMultiplier = {
    Beginner: 0.8,
    Intermediate: 1,
    Advanced: 1.25,
    Expert: 1.45,
  }[difficulty] || 1;

  const base = questionCount * 45;
  const scenarioWeight = caseStudyCount * 18;
  const promptOverhead = 900;
  const outputOverhead = questionCount * 55;
  const center = Math.round((base + scenarioWeight + promptOverhead + outputOverhead) * difficultyMultiplier);

  return {
    min: Math.max(400, Math.round(center * 0.65)),
    max: Math.max(1200, Math.round(center * 1.6)),
  };
};

export default function CreateAssessment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useAuth();
  const hasAutoStarted = useRef(false);
  const skillDropdownRef = useRef(null);

  const [assessmentTitle, setAssessmentTitle] = useState('');
  const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);
  const [questionCount, setQuestionCount] = useState(15);
  const [timePerQuestion, setTimePerQuestion] = useState(2);
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [mcqRatio, setMcqRatio] = useState(80);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isValidatingSkill, setIsValidatingSkill] = useState(false);
  const [isFetchingSkillOverview, setIsFetchingSkillOverview] = useState(false);
  const [skillValidationError, setSkillValidationError] = useState('');
  const [skillValidationSuggestions, setSkillValidationSuggestions] = useState([]);
  const [isSkillOverviewOpen, setIsSkillOverviewOpen] = useState(false);
  const [skillOverview, setSkillOverview] = useState(null);
  const deferredAssessmentTitle = useDeferredValue(assessmentTitle);
  const quotaStatus = getCsPointsQuotaStatus(user?.email);

  useEffect(() => {
    if (location.state?.prefill && !hasAutoStarted.current) {
      const prefill = String(location.state.prefill || '').trim();
      if (prefill) {
        setAssessmentTitle(prefill);
        hasAutoStarted.current = true;
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.state]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, navigate, user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (skillDropdownRef.current && !skillDropdownRef.current.contains(event.target)) {
        setShowSkillSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const skillSuggestions = useMemo(() => {
    const query = deferredAssessmentTitle.trim().toLowerCase();
    return getTopSkillSuggestions(query);
  }, [deferredAssessmentTitle]);

  const summary = useMemo(() => {
    const safeQuestionCount = Math.max(5, Math.min(30, Number(questionCount) || 15));
    const safeTimePerQuestion = Math.max(1, Math.min(10, Number(timePerQuestion) || 2));
    const safeMcqRatio = Math.min(100, Math.max(0, Number(mcqRatio) || 80));
    const mcqCount = Math.round((safeQuestionCount * safeMcqRatio) / 100);
    const caseStudyCount = safeQuestionCount - mcqCount;
    const tokenEstimate = estimateTokenRange(safeQuestionCount, difficulty, caseStudyCount);

    return {
      questionCount: safeQuestionCount,
      timePerQuestion: safeTimePerQuestion,
      mcqRatio: safeMcqRatio,
      caseStudyRatio: 100 - safeMcqRatio,
      mcqCount,
      caseStudyCount,
      totalMinutes: safeQuestionCount * safeTimePerQuestion,
      tokenEstimate,
      certificateEligible: safeQuestionCount >= 20,
    };
  }, [difficulty, mcqRatio, questionCount, timePerQuestion]);

  const config = useMemo(() => ({
    title: assessmentTitle.trim() || 'Custom AI Assessment',
    topic: assessmentTitle.trim() || 'Custom AI Assessment',
    questionCount: summary.questionCount,
    timePerQuestion: summary.timePerQuestion,
    difficulty,
    mcqRatio: summary.mcqRatio,
  }), [assessmentTitle, difficulty, summary]);

  const handleOpenConfirm = () => {
    const openConfirm = async () => {
      if (!assessmentTitle.trim()) {
        alert('Please enter the assessment name first.');
        return;
      }

      setIsValidatingSkill(true);
      setSkillValidationError('');
      setSkillValidationSuggestions([]);

      try {
        const validation = await validateAssessmentTopic(assessmentTitle);
        if (!validation.isValid) {
          setSkillValidationError(validation.message || 'The skill does not exist.');
          setSkillValidationSuggestions(Array.isArray(validation.suggestions) ? validation.suggestions : []);
          return;
        }

        if (validation.topic && validation.topic !== assessmentTitle) {
          setAssessmentTitle(validation.topic);
        }
        setShowConfirmModal(true);
      } catch (error) {
        console.error(error);
        setSkillValidationError('We could not validate this skill right now. Please try a more specific real-world skill.');
      } finally {
        setIsValidatingSkill(false);
      }
    };

    openConfirm();
  };

  const handleCreateAssessment = async () => {
    setIsGenerating(true);
    try {
      const assessmentData = await generateAssessment(config);
      if (assessmentData?.questions?.length) {
        navigate('/test', {
          state: {
            questions: assessmentData.questions,
            title: assessmentData.title,
            skill: assessmentData.skill,
            durationSeconds: assessmentData.durationSeconds,
            timePerQuestion: assessmentData.timePerQuestion,
            difficulty: assessmentData.difficulty,
            distribution: assessmentData.distribution,
            certificateEligible: summary.certificateEligible,
            sourceLearningPathId: location.state?.sourceLearningPathId,
            sourceModuleId: location.state?.sourceModuleId,
          },
        });
        return;
      }
      alert('Failed to generate assessment. Please try again.');
    } catch (error) {
      console.error(error);
      alert(error?.message || 'Failed to generate assessment. Please check your system configuration.');
    } finally {
      setIsGenerating(false);
      setShowConfirmModal(false);
    }
  };

  const handleExplainSkill = async () => {
    if (!assessmentTitle.trim()) {
      alert('Please enter a skill name first.');
      return;
    }

    setIsFetchingSkillOverview(true);
    setSkillValidationError('');
    setSkillValidationSuggestions([]);

    try {
      const overview = await generateSkillOverview(assessmentTitle);
      if (overview?.skill && overview.skill !== assessmentTitle) {
        setAssessmentTitle(overview.skill);
      }
      setSkillOverview(overview);
      setIsSkillOverviewOpen(true);
    } catch (error) {
      console.error(error);
      setSkillValidationError(error?.message || 'We could not explain this skill right now.');
      setIsSkillOverviewOpen(false);
    } finally {
      setIsFetchingSkillOverview(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4fafa] font-sans">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 text-slate-700 shadow-sm">
          <Loader2 className="h-5 w-5 animate-spin text-teal-600" />
          <span className="text-sm font-medium">Loading workspace...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4fafa] font-sans">
        <div className="rounded-xl border border-slate-200 bg-white px-8 py-5 text-center shadow-sm">
          <p className="text-sm font-medium text-slate-600">Redirecting to authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardShell
      title="Create Assessment"
      activeTab="create-assessment"
      scrollHeader
      contentClassName="overflow-x-hidden bg-[#f4fafa] px-4 pb-4 sm:px-8 sm:pb-6"
    >
      <style>{`
        /* Custom range slider element */
        .custom-range-input {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          background: transparent;
          outline: none;
          margin: 0;
          padding: 0;
          height: 24px;
          display: flex;
          align-items: center;
        }

        /* Webkit range slider runnable track (Chrome, Safari, Edge) */
        .custom-range-input::-webkit-slider-runnable-track {
          width: 100%;
          height: 6px;
          background: #e2e8f0; /* slate-200 track color */
          border-radius: 9999px;
          border: none;
        }

        /* Webkit range slider thumb (Chrome, Safari, Edge) */
        .custom-range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: #0d9488; /* teal-600 */
          border: none;
          margin-top: -5px; /* Vertical centering: (6px / 2) - (16px / 2) = -5px */
          cursor: pointer;
          transition: background 0.15s ease-in-out;
        }

        .custom-range-input::-webkit-slider-thumb:hover {
          background: #0f766e; /* teal-700 */
        }

        /* Mozilla range slider runnable track (Firefox) */
        .custom-range-input::-moz-range-track {
          width: 100%;
          height: 6px;
          background: #e2e8f0;
          border-radius: 9999px;
          border: none;
        }

        /* Mozilla range slider thumb (Firefox) */
        .custom-range-input::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border: none;
          border-radius: 9999px;
          background: #0d9488; /* teal-600 */
          cursor: pointer;
          transition: background 0.15s ease-in-out;
        }

        .custom-range-input::-moz-range-thumb:hover {
          background: #0f766e; /* teal-700 */
        }
      `}</style>
      <section className="w-full grid gap-6 lg:grid-cols-[3fr_1fr]">
        {/* Main Configuration Card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
          {quotaStatus.isExceeded && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800">
              <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
              <div>
                <p className="font-bold text-sm">CareerPoints Quota Exceeded ({quotaStatus.used.toLocaleString()} / {quotaStatus.limit.toLocaleString()})</p>
                <p className="text-xs text-rose-700 mt-1">
                  You have used all available CareerPoints. AI assessment generation is currently locked. Upgrade your plan or contact support to continue.
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Configure New AI Assessment</h2>
              <p className="text-sm text-slate-500 mt-1">Define parameters and question mix</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 border border-teal-100">
              <Info className="h-3.5 w-3.5" />
              Configuration
            </div>
          </div>

          <div className="space-y-5">
            {/* Assessment Name */}
            <div ref={skillDropdownRef} className="relative">
              <label htmlFor="assessmentTitle" className="mb-1.5 block text-sm font-medium text-slate-700">
                Assessment Name
              </label>
              <div className="relative">
                <input
                  id="assessmentTitle"
                  type="text"
                  value={assessmentTitle}
                  onChange={(event) => {
                    const nextValue = event.target.value;
                    startTransition(() => {
                      setAssessmentTitle(nextValue);
                      setShowSkillSuggestions(true);
                      setSkillValidationError('');
                      setSkillValidationSuggestions([]);
                    });
                  }}
                  onFocus={() => setShowSkillSuggestions(true)}
                  placeholder="React Professional Certification"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 pr-14 text-sm text-slate-800 outline-none transition-all focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:bg-slate-50"
                  disabled={isGenerating || isFetchingSkillOverview}
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={handleExplainSkill}
                  disabled={isGenerating || isFetchingSkillOverview || !assessmentTitle.trim()}
                  aria-label="Explain skill"
                  title="Explain this skill"
                  className="absolute inset-y-1.5 right-1.5 inline-flex w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-teal-50 hover:text-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isFetchingSkillOverview ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                </button>
              </div>
              {showSkillSuggestions && skillSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+0.4rem)] z-20 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                  <div className="border-b border-slate-100 bg-slate-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Matching Skills
                  </div>
                  <div className="max-h-80 overflow-y-auto py-1">
                    {skillSuggestions.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => {
                          setAssessmentTitle(skill);
                          setShowSkillSuggestions(false);
                        }}
                        className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm text-slate-700 transition-colors hover:bg-teal-50 hover:text-slate-900"
                      >
                        <span className="truncate">{skill}</span>
                        <span className="ml-3 shrink-0 text-[11px] font-medium text-slate-400">Select</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {showSkillSuggestions && assessmentTitle.trim() && skillSuggestions.length === 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+0.4rem)] z-20 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-500 shadow-lg">
                  No matching skill found yet. Keep typing your skill name.
                </div>
              )}
              {skillValidationError ? (
                <div className="mt-2 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-sm text-amber-800">
                  <p className="font-medium">{skillValidationError}</p>
                  {skillValidationSuggestions.length > 0 ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {skillValidationSuggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => {
                            setAssessmentTitle(suggestion);
                            setSkillValidationError('');
                            setSkillValidationSuggestions([]);
                          }}
                          className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-800 transition hover:bg-amber-100"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            {/* Difficulty Segmented Control */}
            <div>
              <span className="mb-1.5 block text-sm font-medium text-slate-700">Difficulty</span>
              <div className="flex w-full overflow-hidden rounded-lg border border-slate-200 bg-white">
                {DIFFICULTY_OPTIONS.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setDifficulty(option)}
                    disabled={isGenerating}
                    className={`flex-1 py-2 text-sm transition-colors ${index !== 0 ? 'border-l border-slate-200' : ''
                      } ${difficulty === option
                        ? 'bg-slate-100 font-semibold text-slate-900'
                        : 'text-slate-600 hover:bg-slate-50 font-medium'
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Range Slider */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Number of Questions</span>
                <span className="text-sm font-semibold text-slate-900">{summary.questionCount}</span>
              </div>
              <div className="px-0">
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={summary.questionCount}
                  onChange={(event) => setQuestionCount(Number(event.target.value))}
                  disabled={isGenerating}
                  className="custom-range-input cursor-pointer"
                />
              </div>
              <div className="relative mt-1 h-5 px-2 text-xs font-semibold text-slate-700">
                {QUESTION_MARKERS.map((value) => {
                  const percentage = ((value - 5) / (30 - 5)) * 100;

                  return (
                    <span
                      key={value}
                      className="absolute top-0 -translate-x-1/2 text-center"
                      style={{ left: `calc(8px + (${percentage} * (100% - 16px) / 100))` }}
                    >
                      {value}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Grid Options */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="timePerQuestion" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Time per Question
                </label>
                <select
                  id="timePerQuestion"
                  value={timePerQuestion}
                  onChange={(event) => setTimePerQuestion(Number(event.target.value))}
                  className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-all focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:bg-slate-50"
                  disabled={isGenerating}
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>{value} min</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mcqRatio" className="mb-1.5 block text-sm font-medium text-slate-700">
                  MCQ/Case Study Ratio
                </label>
                <select
                  id="mcqRatio"
                  value={mcqRatio}
                  onChange={(event) => setMcqRatio(Number(event.target.value))}
                  className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-all focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:bg-slate-50"
                  disabled={isGenerating}
                >
                  {MCQ_RATIO_OPTIONS.map((value) => (
                    <option key={value} value={value}>
                      {value}% / {100 - value}%
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Info Banner */}
            <div className={`flex items-center gap-2.5 rounded-lg px-4 py-3 text-sm border ${summary.certificateEligible
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-amber-200 bg-amber-50 text-amber-800'
              }`}>
              <AlertCircle className={`h-4 w-4 shrink-0 ${summary.certificateEligible ? 'text-emerald-600' : 'text-amber-600'}`} />
              <p>
                {summary.certificateEligible
                  ? 'Certificate eligible: this assessment has 20 or more questions.'
                  : 'Certificate rule: only assessments with 20 or more questions can issue a certificate.'}
              </p>
            </div>
          </div>
        </div>

        {/* Live Preview Sidebar */}
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900">Live Preview</h3>
            <div className="flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700 border border-green-200">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              AI Active
            </div>
          </div>

          <div className="space-y-2.5 flex-1">
            {[
              ['Difficulty', difficulty],
              ['Questions', String(summary.questionCount)],
              ['Time/Q', `${summary.timePerQuestion} min`],
              ['MCQ/Case', `${summary.mcqCount}/${summary.caseStudyCount}`],
              ['Ratio', `${summary.mcqRatio}%/${summary.caseStudyRatio}%`],
              ['Est. Duration', `${summary.totalMinutes} min`],
              ['Certificate', summary.certificateEligible ? 'Eligible' : 'Not Eligible'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{label}</span>
                <span className="font-semibold text-slate-900">{value}</span>
              </div>
            ))}

            {/* Simple CareerPoints Estimate Box */}
            <div className="mt-4 rounded-lg border border-teal-200 bg-teal-50/50 p-3">
              <p className="text-xs font-semibold text-teal-900 mb-1">CareerPoints Estimate</p>
              <p className="text-sm font-medium text-teal-800">
                Estimate : [{summary.tokenEstimate.min} - {summary.tokenEstimate.max}] CareerPoints
              </p>
            </div>
            <p className="text-xs text-slate-500 leading-tight mt-2">
              {summary.certificateEligible
                ? 'This assessment qualifies for certificate issuance because it has 20 or more questions.'
                : 'Increase the question count to 20 or more if you want this assessment to qualify for a certificate.'}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-3 leading-tight">
              Paid Service. CareerPoints [{summary.tokenEstimate.min}]-[{summary.tokenEstimate.max}] required.
              Confirmed: {config.title || 'Assessment'}, {summary.questionCount} Q, {difficulty}.
            </p>
            <button
              type="button"
              onClick={handleOpenConfirm}
              disabled={isGenerating || isValidatingSkill || quotaStatus.isExceeded}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isGenerating || isValidatingSkill ? <Loader2 className="h-4.5 w-4.5 animate-spin" /> : <GraduationCap className="h-4.5 w-4.5" />}
              {isValidatingSkill ? 'Checking Skill...' : quotaStatus.isExceeded ? 'CareerPoints Limit Reached (Locked)' : 'Create Assessment'}
            </button>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="text-base font-bold text-slate-900">Confirm Generation</h3>
              <p className="text-xs text-slate-500 mt-0.5">Please confirm CareerPoints usage to proceed.</p>
            </div>

            <div className="p-5">
              <div className="rounded-lg border border-teal-100 bg-teal-50 p-3 text-sm text-teal-800">
                This will consume approximately <span className="font-bold">{summary.tokenEstimate.min}-{summary.tokenEstimate.max}</span> CareerPoints.
              </div>

              <div className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Name</span>
                  <span className="font-medium text-slate-900 truncate max-w-[200px]">{config.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Count</span>
                  <span className="font-medium text-slate-900">{summary.questionCount} Questions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Level</span>
                  <span className="font-medium text-slate-900">{difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Certificate</span>
                  <span className={`font-medium ${summary.certificateEligible ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {summary.certificateEligible ? 'Eligible' : 'Not Eligible'}
                  </span>
                </div>
              </div>

              <div className={`mt-4 rounded-lg border px-3 py-2 text-sm ${summary.certificateEligible
                ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                : 'border-amber-200 bg-amber-50 text-amber-800'
                }`}>
                {summary.certificateEligible
                  ? 'This custom assessment can issue a certificate because it contains 20 or more questions.'
                  : 'This custom assessment cannot issue a certificate yet. Set the question count to 20 or more to unlock certificate eligibility.'}
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => !isGenerating && setShowConfirmModal(false)}
                  disabled={isGenerating}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreateAssessment}
                  disabled={isGenerating}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-teal-700 disabled:opacity-70"
                >
                  {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSkillOverviewOpen && skillOverview ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 bg-slate-50 px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">AI Skill Overview</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{skillOverview.skill}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSkillOverviewOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-6 p-5">
              <div>
                <p className="text-sm font-bold text-slate-900">What Is This Skill About?</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{skillOverview.summary}</p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                  <p className="text-sm font-bold text-slate-900">What You Will Learn</p>
                  <div className="mt-3 space-y-2">
                    {skillOverview.whatYouLearn?.map((item) => (
                      <p key={item} className="text-sm text-slate-600">{item}</p>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                  <p className="text-sm font-bold text-slate-900">Where It Is Used</p>
                  <div className="mt-3 space-y-2">
                    {skillOverview.whereItIsUsed?.map((item) => (
                      <p key={item} className="text-sm text-slate-600">{item}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-teal-100 bg-teal-50/70 p-4">
                <p className="text-sm font-bold text-slate-900">Why It Matters</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{skillOverview.whyItMatters}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </DashboardShell>
  );
}
