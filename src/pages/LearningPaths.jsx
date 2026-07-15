import { startTransition, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import DashboardShell from '../components/DashboardShell';
import { skillLibrary } from '../data/skillData';
import {
  estimateLearningPathCareerPoints,
  generateLearningPath,
  validateAssessmentTopic,
} from '../services/aiService';
import { convertPointsToUsd } from '../services/usageLedger';
import { getStoredLearningPaths, saveLearningPath, saveLearningPathsList } from '../services/learningPathRegistry';
import { useCertifiStore } from '../store/useCertifiStore';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Loader2,
  Lock,
  Play,
  Plus,
  Search,
  Sparkles,
  Target,
  Trash2,
  Trophy,
  X,
} from 'lucide-react';

const DEFAULT_SKILL_SUGGESTIONS = skillLibrary.slice(0, 100);
const SEARCHABLE_SKILLS = skillLibrary.map((skill) => ({
  skill,
  normalized: skill.toLowerCase(),
}));
const MAX_SKILL_SUGGESTIONS = 18;

function rankSkillMatch(normalizedSkill, query) {
  if (normalizedSkill.startsWith(query)) {
    return normalizedSkill === query ? 0 : 1;
  }

  const matchIndex = normalizedSkill.indexOf(query);
  if (matchIndex === -1) return Number.POSITIVE_INFINITY;
  return 10 + matchIndex;
}

function getTopSkillSuggestions(query) {
  if (!query) {
    return DEFAULT_SKILL_SUGGESTIONS.slice(0, MAX_SKILL_SUGGESTIONS);
  }

  const rankedMatches = [];

  for (const entry of SEARCHABLE_SKILLS) {
    const rank = rankSkillMatch(entry.normalized, query);
    if (!Number.isFinite(rank)) continue;

    rankedMatches.push({
      rank,
      skill: entry.skill,
    });
  }

  rankedMatches.sort((leftSkill, rightSkill) => {
    if (leftSkill.rank !== rightSkill.rank) {
      return leftSkill.rank - rightSkill.rank;
    }

    return leftSkill.skill.localeCompare(rightSkill.skill);
  });

  return rankedMatches.slice(0, MAX_SKILL_SUGGESTIONS).map(({ skill }) => skill);
}

export default function LearningPaths() {
  const navigate = useNavigate();
  const skillDropdownRef = useRef(null);
  
  const storeLearningPaths = useCertifiStore((state) => state.learningPaths);
  const allPaths = useMemo(() => {
    if (typeof window !== 'undefined' && window.clerkUserId) {
      return storeLearningPaths;
    }
    try {
      const stored = localStorage.getItem('myLearningPaths');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }, [storeLearningPaths]);

  const [activePathId, setActivePathId] = useState(null);
  const [isNewPathModalOpen, setIsNewPathModalOpen] = useState(false);
  const [pathSkill, setPathSkill] = useState('');
  const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);
  const [isValidatingSkill, setIsValidatingSkill] = useState(false);
  const [isGeneratingLearningPath, setIsGeneratingLearningPath] = useState(false);
  const [skillValidationError, setSkillValidationError] = useState('');
  const [skillValidationSuggestions, setSkillValidationSuggestions] = useState([]);
  const [isGeneratePathConfirmOpen, setIsGeneratePathConfirmOpen] = useState(false);
  const [generatedPath, setGeneratedPath] = useState(null);
  const [isGeneratedPathSaved, setIsGeneratedPathSaved] = useState(false);
  const deferredPathSkill = useDeferredValue(pathSkill);

  const handleBeginModule = async (moduleTitle, moduleId) => {
    const prefill = String(moduleTitle || '').trim();
    if (!prefill) return;

    try {
      await navigator.clipboard.writeText(prefill);
    } catch (error) {
      console.warn('Clipboard copy failed for module title:', error);
    }

    navigate('/create-assessment', {
      state: {
        prefill,
        sourceLearningPathId: activePathId,
        sourceModuleId: moduleId
      },
    });
  };

  useEffect(() => {
    if (allPaths.length > 0 && !activePathId) {
      setActivePathId(allPaths[allPaths.length - 1].id);
    }
  }, [allPaths, activePathId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (skillDropdownRef.current && !skillDropdownRef.current.contains(event.target)) {
        setShowSkillSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activePath = allPaths.find((path) => path.id === activePathId);

  const skillSuggestions = useMemo(() => {
    const query = deferredPathSkill.trim().toLowerCase();
    return getTopSkillSuggestions(query);
  }, [deferredPathSkill]);

  const pathEstimate = useMemo(
    () => estimateLearningPathCareerPoints(deferredPathSkill.trim(), 0, []),
    [deferredPathSkill],
  );

  const resetNewPathFlow = () => {
    setPathSkill('');
    setShowSkillSuggestions(false);
    setSkillValidationError('');
    setSkillValidationSuggestions([]);
    setIsGeneratePathConfirmOpen(false);
    setGeneratedPath(null);
    setIsGeneratedPathSaved(false);
    setIsValidatingSkill(false);
    setIsGeneratingLearningPath(false);
  };

  const handleOpenNewPathModal = () => {
    resetNewPathFlow();
    setIsNewPathModalOpen(true);
  };

  const handleCloseNewPathModal = () => {
    setIsNewPathModalOpen(false);
    resetNewPathFlow();
  };

  const handleDeletePath = (event, pathId) => {
    event.stopPropagation();

    if (window.confirm('Are you sure you want to remove this learning path from your workspace?')) {
      const updatedPaths = allPaths.filter((path) => path.id !== pathId);
      saveLearningPathsList(updatedPaths);

      if (activePathId === pathId) {
        setActivePathId(updatedPaths.length > 0 ? updatedPaths[0].id : null);
      }
    }
  };

  const handleOpenGenerateConfirm = async () => {
    if (!pathSkill.trim()) {
      setSkillValidationError('Please enter a skill first.');
      return;
    }

    setIsValidatingSkill(true);
    setSkillValidationError('');
    setSkillValidationSuggestions([]);

    try {
      const validation = await validateAssessmentTopic(pathSkill);
      if (!validation.isValid) {
        setSkillValidationError(validation.message || 'The skill does not exist.');
        setSkillValidationSuggestions(Array.isArray(validation.suggestions) ? validation.suggestions : []);
        return;
      }

      if (validation.topic && validation.topic !== pathSkill) {
        setPathSkill(validation.topic);
      }

      setGeneratedPath(null);
      setIsGeneratedPathSaved(false);
      setIsGeneratePathConfirmOpen(true);
      setShowSkillSuggestions(false);
    } catch (error) {
      console.error('Failed to validate learning path skill:', error);
      setSkillValidationError('We could not validate this skill right now. Please try a more specific real-world skill.');
    } finally {
      setIsValidatingSkill(false);
    }
  };

  const handleConfirmGeneratePath = async () => {
    setIsGeneratingLearningPath(true);

    try {
      const normalizedSkill = pathSkill.trim();
      const nextPath = await generateLearningPath(normalizedSkill, 0, []);
      setGeneratedPath(nextPath);
      setIsGeneratedPathSaved(false);
      setIsGeneratePathConfirmOpen(false);
    } catch (error) {
      console.error('Failed to generate learning path:', error);
      alert('We could not generate a learning path right now. Please try again.');
    } finally {
      setIsGeneratingLearningPath(false);
    }
  };

  const handleStoreGeneratedPath = () => {
    if (!generatedPath) return;

    const timestamp = Date.now();
    const normalizedSkill = pathSkill.trim() || generatedPath.role || 'Learning Path';
    const nextPath = {
      id: `path-${timestamp}`,
      title: generatedPath.role || normalizedSkill,
      role: normalizedSkill,
      description: generatedPath.description,
      progress: 0,
      totalModules: generatedPath.modules?.length || 0,
      modules: (generatedPath.modules || []).map((module, index) => ({
        id: `mod-${timestamp}-${index}`,
        title: module.title,
        description: module.description,
        estimatedTime: module.estimatedTime,
        topics: Array.isArray(module.topics) ? module.topics : [],
        recommendedTests: Array.isArray(module.recommendedTests) ? module.recommendedTests : [],
        status: index === 0 ? 'current' : 'open',
        quizId: module.title,
      })),
    };

    saveLearningPath(nextPath);
    setActivePathId(nextPath.id);
    setIsGeneratedPathSaved(true);

    window.setTimeout(() => {
      handleCloseNewPathModal();
    }, 900);
  };

  const { isSignedIn } = useClerkAuth();
  const isSynced = useCertifiStore((state) => state.isSynced);

  if (isSignedIn && !isSynced) {
    return (
      <DashboardShell
        title="Learning Paths"
        subtitle="Track your structured roadmaps, continue modules, and monitor skill progression."
        activeTab="learning-paths"
        contentClassName="px-4 pb-4 sm:px-6 sm:pb-6 bg-[#f4fafa] min-h-screen"
        scrollHeader
      >
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
          <p className="text-sm font-medium text-slate-500 font-sans">Syncing learning paths...</p>
        </div>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell
      title="Learning Paths"
      subtitle="Track your structured roadmaps, continue modules, and monitor skill progression."
      activeTab="learning-paths"
      contentClassName="px-4 pb-4 sm:px-6 sm:pb-6 bg-[#f4fafa] min-h-screen"
      scrollHeader
    >
      {isNewPathModalOpen ? (
        <div className="fixed inset-0 z-[160] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md">
          <div className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_32px_90px_rgba(15,23,42,0.28)]">
            <div className="flex items-center justify-between border-b border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#12243f_48%,#153550_100%)] px-6 py-5 text-white sm:px-8">
              <div className="flex items-center gap-4">
                <img src="/Logo.png" alt="CareerSense" className="h-12 w-auto object-contain sm:h-14" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-sky-300">Learning Path Authorization</p>
                  <h2 className="mt-1 text-2xl font-bold text-white">Create A New Learning Path</h2>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseNewPathModal}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 text-slate-200 transition hover:bg-white/14 hover:text-white"
                aria-label="Close new path modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              <div className="mb-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sky-500">Official Credential Workflow</p>
                <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                  {generatedPath ? 'Learning path generated' : isGeneratePathConfirmOpen ? 'Confirm learning path generation' : 'Choose a skill to build a path'}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
                  {generatedPath
                    ? 'Your AI roadmap is ready. Review the generated modules below and store it in your learning path workspace.'
                    : isGeneratePathConfirmOpen
                      ? 'We validated this skill. Confirm if you want CareerSense AI to prepare a learning path and spend the estimated points below.'
                      : 'Search for a real-world skill, choose from the matching suggestions, and we will prepare a structured roadmap you can save to your workspace.'}
                </p>
              </div>

              {!generatedPath ? (
                <>
                  <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
                      <div ref={skillDropdownRef} className="relative">
                        <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                          Search Skill
                        </label>

                        <div className="relative">
                          <input
                            type="text"
                            value={pathSkill}
                            onChange={(event) => {
                              const nextValue = event.target.value;
                              startTransition(() => {
                                setPathSkill(nextValue);
                                setShowSkillSuggestions(true);
                                setSkillValidationError('');
                                setSkillValidationSuggestions([]);
                              });
                            }}
                            onFocus={() => setShowSkillSuggestions(true)}
                            placeholder="Excel, SQL, Python..."
                            className="h-16 w-full rounded-2xl border border-slate-200 bg-white pl-5 pr-24 text-base font-semibold text-slate-900 outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
                          />

                          <button
                            type="button"
                            onClick={handleOpenGenerateConfirm}
                            disabled={isValidatingSkill || isGeneratingLearningPath}
                            className="absolute right-2 top-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 text-sm font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                          >
                            {isValidatingSkill ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                            <span className="hidden sm:inline">Search</span>
                          </button>
                        </div>

                        {showSkillSuggestions && skillSuggestions.length > 0 ? (
                          <div className="absolute left-0 right-0 top-[calc(100%+0.55rem)] z-20 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
                            <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                              Matching Skills
                            </div>
                            <div className="max-h-80 overflow-y-auto py-1">
                              {skillSuggestions.map((skill) => (
                                <button
                                  key={skill}
                                  type="button"
                                  onClick={() => {
                                    setPathSkill(skill);
                                    setShowSkillSuggestions(false);
                                    setSkillValidationError('');
                                    setSkillValidationSuggestions([]);
                                  }}
                                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-teal-50 hover:text-slate-900"
                                >
                                  <span className="truncate">{skill}</span>
                                  <span className="ml-3 shrink-0 text-[11px] font-semibold text-slate-400">Select</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {skillValidationError ? (
                        <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                            <div>
                              <p className="font-semibold">{skillValidationError}</p>
                              {skillValidationSuggestions.length > 0 ? (
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {skillValidationSuggestions.map((suggestion) => (
                                    <button
                                      key={suggestion}
                                      type="button"
                                      onClick={() => {
                                        setPathSkill(suggestion);
                                        setSkillValidationError('');
                                        setSkillValidationSuggestions([]);
                                        setShowSkillSuggestions(false);
                                      }}
                                      className="rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-100"
                                    >
                                      {suggestion}
                                    </button>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ) : null}

                      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Appended Document Modules</p>
                        <div className="mt-4 grid gap-4 text-sm text-slate-700 md:grid-cols-2">
                          <div className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-500" />
                            <p>Search and validate a real-world skill from the CareerSense library.</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-500" />
                            <p>Review estimated CareerSense points before generating the roadmap.</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-500" />
                            <p>Generate 4-5 practical modules with focused learning topics.</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-500" />
                            <p>Store the completed path directly into your learning path workspace.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-sky-100 bg-sky-50/70 p-5 shadow-sm sm:p-6">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-700">
                        Required Resource Allocation
                      </p>
                      <div className="mt-4 rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-2xl font-black tracking-tight text-slate-950">
                              {pathEstimate.min.toLocaleString()}-{pathEstimate.max.toLocaleString()}
                            </p>
                            <p className="mt-2 text-sm text-slate-500">
                              Estimated surcharge: ${convertPointsToUsd(pathEstimate.min).toFixed(4)}-${convertPointsToUsd(pathEstimate.max).toFixed(4)} USD
                            </p>
                          </div>
                          <div className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-right shadow-sm">
                            <p className="text-3xl font-black tracking-tight text-slate-950">{pathEstimate.max.toLocaleString()}</p>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">PTS</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Current Selection</p>
                        <p className="mt-2 text-lg font-bold text-teal-700">
                          {pathSkill.trim() || 'No skill selected yet'}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          Once confirmed, CareerSense AI will create a structured learning path with practical modules, study topics, and suggested checkpoints.
                        </p>
                      </div>
                    </div>
                  </div>

                  {isGeneratePathConfirmOpen ? (
                    <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                            <Sparkles className="h-7 w-7" />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Learning Path Authorization</p>
                            <h4 className="mt-2 text-2xl font-black text-slate-950">
                              Do you want to create a learning path for this skill?
                            </h4>
                            <p className="mt-2 text-base text-slate-600">
                              We validated <span className="font-bold text-slate-900">{pathSkill}</span>. This will prepare a tailored roadmap and spend the estimated CareerSense points shown here.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 text-right shadow-sm">
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">Estimated Points</p>
                          <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                            {pathEstimate.max.toLocaleString()}
                          </p>
                          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">PTS</p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col justify-end gap-3 sm:flex-row">
                        <button
                          type="button"
                          onClick={() => setIsGeneratePathConfirmOpen(false)}
                          className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                        >
                          No
                        </button>
                        <button
                          type="button"
                          onClick={handleConfirmGeneratePath}
                          disabled={isGeneratingLearningPath}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                        >
                          {isGeneratingLearningPath ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                          {isGeneratingLearningPath ? 'Generating...' : 'Yes, Generate'}
                        </button>
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr]">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700">AI Roadmap Ready</p>
                        <h4 className="mt-2 text-2xl font-black text-slate-950">
                          {generatedPath.role || pathSkill}
                        </h4>
                        <p className="mt-2 text-base leading-8 text-slate-600">
                          {generatedPath.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Generated Summary</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-slate-50 p-3">
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">Skill</p>
                          <p className="mt-2 text-sm font-bold text-slate-900">{pathSkill}</p>
                        </div>
                        <div className="rounded-xl bg-slate-50 p-3">
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">Modules</p>
                          <p className="mt-2 text-sm font-bold text-slate-900">{generatedPath.modules?.length || 0} modules</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Generated Modules</p>
                        <h4 className="mt-2 text-xl font-black text-slate-950">Review Before Storing</h4>
                      </div>
                      <div className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700">
                        {generatedPath.modules?.length || 0} modules
                      </div>
                    </div>

                    <div className="mt-5 space-y-4">
                      {(generatedPath.modules || []).map((module, index) => (
                        <div key={`${module.title}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-black text-slate-500">
                              {index + 1}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="text-base font-bold text-slate-900">{module.title}</p>
                                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                                  {module.estimatedTime || 'Planned'}
                                </span>
                              </div>
                              <p className="mt-2 text-sm leading-6 text-slate-600">{module.description}</p>

                              {Array.isArray(module.topics) && module.topics.length > 0 ? (
                                <div className="mt-4">
                                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">What To Learn</p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {module.topics.map((topic, topicIndex) => (
                                      <span
                                        key={`${module.title}-topic-${topicIndex}`}
                                        className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                                      >
                                        {topic}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 bg-slate-50/85 px-6 py-4 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                {!generatedPath ? (
                  <>
                    <button
                      type="button"
                      onClick={handleCloseNewPathModal}
                      className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    {!isGeneratePathConfirmOpen ? (
                      <button
                        type="button"
                        onClick={handleOpenGenerateConfirm}
                        disabled={isValidatingSkill || isGeneratingLearningPath}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                      >
                        {isValidatingSkill ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                        {isValidatingSkill ? 'Checking Skill...' : 'Continue'}
                      </button>
                    ) : null}
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setGeneratedPath(null);
                        setIsGeneratedPathSaved(false);
                        setShowSkillSuggestions(false);
                      }}
                      className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                      Edit Skill
                    </button>
                    <button
                      type="button"
                      onClick={handleStoreGeneratedPath}
                      disabled={isGeneratedPathSaved}
                      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition ${
                        isGeneratedPathSaved
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-950 text-white hover:bg-slate-800'
                      }`}
                    >
                      {isGeneratedPathSaved ? <CheckCircle2 className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      {isGeneratedPathSaved ? 'Stored In Learning Paths' : 'Store Learning Path'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-7xl pt-4">
        <div className="grid items-start gap-6 grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-4 min-w-0">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Active Tracks ({allPaths.length})
              </h3>
              <button
                onClick={handleOpenNewPathModal}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-bold text-teal-600 transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                <Plus className="h-3.5 w-3.5" />
                New Path
              </button>
            </div>

            <div className="hide-scrollbar flex max-h-[calc(100vh-180px)] flex-col gap-3 overflow-y-auto pb-10">
              {allPaths.map((path) => (
                <div
                  key={path.id}
                  onClick={() => setActivePathId(path.id)}
                  className={`group relative w-full cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                    activePathId === path.id
                      ? 'border-teal-500 bg-white shadow-sm ring-1 ring-teal-500'
                      : 'border-slate-200 bg-white hover:border-teal-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={(event) => handleDeletePath(event, path.id)}
                    className="absolute right-2 top-2 z-10 rounded-md p-1.5 text-slate-300 opacity-0 transition-all hover:bg-red-50 hover:text-red-600 group-hover:opacity-100"
                    title="Remove Path"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="mb-2.5 flex items-start justify-between pr-6">
                    <span
                      className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        activePathId === path.id ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <Target className="h-3 w-3" />
                      {path.role || 'Career Track'}
                    </span>
                    {path.progress === 100 ? (
                      <Trophy className="absolute right-3 top-3 h-4 w-4 text-amber-500" />
                    ) : null}
                  </div>

                  <h3 className={`mb-3 pr-4 text-sm font-bold leading-snug ${activePathId === path.id ? 'text-slate-900' : 'text-slate-700'}`}>
                    {path.title}
                  </h3>

                  <div className="mt-auto">
                    <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>{path.progress || 0}% Completed</span>
                      <span>{path.totalModules || 0} Modules</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ease-out ${activePathId === path.id ? 'bg-teal-500' : 'bg-slate-300'}`}
                        style={{ width: `${path.progress || 0}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {allPaths.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white/50 px-6 py-10 text-center">
                  <Compass className="mb-3 h-8 w-8 text-slate-300" />
                  <p className="text-sm font-bold text-slate-900">No active paths</p>
                  <p className="mt-1 text-xs text-slate-500">Create a new AI roadmap from the New Path button.</p>
                </div>
              ) : null}
            </div>
          </aside>

          <main className="min-w-0">
            {activePath ? (
              <div className="min-h-[500px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-8 flex flex-col gap-5 border-b border-slate-100 pb-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{activePath.title}</h2>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-500">{activePath.description}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end justify-center rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Overall Progress</p>
                    <p className="mt-0.5 text-2xl font-black text-teal-600">{activePath.progress || 0}%</p>
                  </div>
                </div>

                <div className="relative ml-4 space-y-8 border-l-2 border-slate-100 pb-4 pl-8">
                  {activePath.modules && activePath.modules.map((module, index) => {
                    const isLocked = false;
                    const isCompleted = module.status === 'completed';
                    const isCurrent = module.status === 'current' || module.status === 'open' || (!module.status && index === 0);

                    return (
                      <div key={index} className={`group relative transition-all duration-300 ${isLocked ? 'opacity-60' : 'opacity-100'}`}>
                        <div
                          className={`absolute -left-[51px] top-4 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white shadow-sm transition-all duration-300 ${
                            isCompleted ? 'bg-teal-500 text-white' : ''
                          } ${
                            isCurrent ? 'bg-white text-teal-600 ring-1 ring-teal-500 ring-offset-2' : ''
                          } ${
                            isLocked ? 'bg-slate-100 text-slate-400' : ''
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : null}
                          {isCurrent ? (
                            <>
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-20" />
                              <Play className="ml-0.5 h-4 w-4 fill-current" />
                            </>
                          ) : null}
                          {isLocked ? <Lock className="h-4 w-4" /> : null}
                        </div>

                        <div
                          className={`rounded-xl border p-5 transition-all duration-300 ${
                            isCurrent ? 'border-teal-200 bg-teal-50/30' : ''
                          } ${
                            isCompleted ? 'border-slate-200 bg-white' : ''
                          } ${
                            isLocked ? 'border-slate-100 bg-slate-50/50' : ''
                          }`}
                        >
                          <div className="mb-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                            <h3 className={`text-base font-bold tracking-tight ${isCurrent ? 'text-teal-900' : 'text-slate-900'}`}>
                              {module.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              {isCompleted && typeof module.score !== 'undefined' ? (
                                <span className="inline-flex items-center gap-1 rounded bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700 ring-1 ring-teal-600/10">
                                  Score: {module.score}%
                                </span>
                              ) : null}
                              {!isLocked ? (
                                <span className="inline-flex items-center gap-1.5 rounded border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-500">
                                  <Clock className="h-3.5 w-3.5" />
                                  {module.estimatedTime || 'Est. 45m'}
                                </span>
                              ) : null}
                            </div>
                          </div>

                          <p className="mb-5 max-w-xl text-sm leading-relaxed text-slate-500">
                            {module.description}
                          </p>

                          {Array.isArray(module.topics) && module.topics.length > 0 ? (
                            <div className="mb-4">
                              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">What To Learn</p>
                              <div className="flex flex-wrap gap-2">
                                {module.topics.map((topic, topicIndex) => (
                                  <span
                                    key={`${module.title}-topic-${topicIndex}`}
                                    className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}

                          {Array.isArray(module.recommendedTests) && module.recommendedTests.length > 0 ? (
                            <div className="mb-5">
                              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">Recommended Tests</p>
                              <ul className="space-y-1.5">
                                {module.recommendedTests.map((testName, testIndex) => (
                                  <li key={`${module.title}-test-${testIndex}`} className="text-sm text-slate-600">
                                    {testName}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          {!isLocked ? (
                            <button
                              onClick={() => handleBeginModule(module.title, module.id)}
                              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-all ${
                                isCompleted
                                  ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                  : 'bg-teal-600 text-white shadow-sm hover:bg-teal-700'
                              }`}
                            >
                              {isCompleted ? 'Review Material' : 'Begin Module'}
                              {!isCompleted ? <ArrowRight className="h-4 w-4" /> : null}
                            </button>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex h-full min-h-[500px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
                  <BookOpen className="h-8 w-8 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No roadmap selected</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-500">
                  Select a learning path from the left sidebar to view its detailed modules and track your progress.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </DashboardShell>
  );
}
