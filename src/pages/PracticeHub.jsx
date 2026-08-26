import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Download,
  LibraryBig,
  Search,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import DashboardShell from '../components/DashboardShell';
import { assessmentsMap } from '../data/assessments';
import { ASSESSMENT_TYPES } from '../data/assessmentTypes';
import agentBuilderCover from '../assets/test-covers/AiEngineering/Agent Builder.png';

const PRACTICE_ATTEMPTS_KEY = 'careerSensePracticeAttempts';

const coverModules = import.meta.glob('../assets/test-covers/**/*.{jpg,jpeg,png,gif}', {
  eager: true,
  import: 'default',
});

const coverByBaseName = Object.fromEntries(
  Object.entries(coverModules).map(([path, asset]) => {
    const fileName = path.split('/').pop() || '';
    const baseName = fileName.replace(/\.[^.]+$/, '').toLowerCase();
    return [baseName, asset];
  }),
);

const assessmentTypeEntries = Object.entries(ASSESSMENT_TYPES);
const coverAssetOverrides = {
  [ASSESSMENT_TYPES.agentBuilder]: agentBuilderCover,
};
const coverOverrides = {
  [ASSESSMENT_TYPES.communication]: 'communication',
  [ASSESSMENT_TYPES.caseStudy]: 'casestudy',
  [ASSESSMENT_TYPES.systemDesign]: 'systemdesign',
  [ASSESSMENT_TYPES.cognitive_ability]: 'cognitive-ability',
  [ASSESSMENT_TYPES.architecture_sandbox]: 'architecture-sandbox',
  [ASSESSMENT_TYPES.product_case_ai]: 'product-case-ai',
  [ASSESSMENT_TYPES.debugging_duel]: 'debugging-duel',
  [ASSESSMENT_TYPES.daily_incident]: 'daily-incident',
  [ASSESSMENT_TYPES.zoho_books]: 'zoho',
  [ASSESSMENT_TYPES.tallyprime]: 'tally',
  [ASSESSMENT_TYPES.busy_accounting]: 'bas',
  [ASSESSMENT_TYPES.marg_erp]: 'marg',
  [ASSESSMENT_TYPES.oracle_financials]: 'oracle',
  [ASSESSMENT_TYPES.dynamics_365_finance]: 'd365',
  [ASSESSMENT_TYPES.gst_india_pro]: 'gst',
  [ASSESSMENT_TYPES.accounting_fundamentals]: 'accounting',
  [ASSESSMENT_TYPES.financial_statement_analysis]: 'fsa',
  [ASSESSMENT_TYPES.banking_treasury]: 'banking',
  [ASSESSMENT_TYPES.payroll_compliance]: 'payroll',
  [ASSESSMENT_TYPES.mis_reporting]: 'mis',
  [ASSESSMENT_TYPES.mathematics_statistics]: 'mathematics',
  [ASSESSMENT_TYPES.fin_modeling]: 'fin_medeling',
  [ASSESSMENT_TYPES.python_ai]: 'python for ai',
  [ASSESSMENT_TYPES.numpy_ai]: 'numpy',
  [ASSESSMENT_TYPES.pandas_ai]: 'pandas',
  [ASSESSMENT_TYPES.openai_apis]: 'open ai',
  [ASSESSMENT_TYPES.langchain]: 'langchain',
  [ASSESSMENT_TYPES.llamaindex]: 'llama',
  [ASSESSMENT_TYPES.hugging_face]: 'hugging',
  [ASSESSMENT_TYPES.vector_databases]: 'vector',
  [ASSESSMENT_TYPES.ml_deployment]: 'mld',
  [ASSESSMENT_TYPES.docker_ai]: 'docker',
  [ASSESSMENT_TYPES.cicd_ml]: 'ci:cd',
  [ASSESSMENT_TYPES.ml_monitoring]: 'mm',
  [ASSESSMENT_TYPES.aws_ai_services]: 'aws for ai',
  [ASSESSMENT_TYPES.google_vertex_ai]: 'google vertex',
  [ASSESSMENT_TYPES.regression_ml]: 'regression',
  [ASSESSMENT_TYPES.classification_ml]: 'classification',
  [ASSESSMENT_TYPES.ensemble_models]: 'ensemble',
  [ASSESSMENT_TYPES.prompt_engineering]: 'prompt',
  [ASSESSMENT_TYPES.llm_fundamentals]: 'llm fundamentals',
  [ASSESSMENT_TYPES.rag_ai]: 'rag',
  [ASSESSMENT_TYPES.ai_agents]: 'ai agents',
  [ASSESSMENT_TYPES.agentBuilder]: 'agent builder',
  [ASSESSMENT_TYPES.vector_database_ops]: 'vector database',
  [ASSESSMENT_TYPES.llm_deployment]: 'llm deployement',
  [ASSESSMENT_TYPES.llmFoundations]: 'llmfoundation',
  [ASSESSMENT_TYPES.transformers]: 'transformer architecture',
  [ASSESSMENT_TYPES.tokenizationEmbeddings]: 'tokenization and embeddings',
  [ASSESSMENT_TYPES.promptEngineering]: 'prompting and structured output',
  [ASSESSMENT_TYPES.llmApisProduction]: 'llm apis in production',
  [ASSESSMENT_TYPES.modelAdaptation]: 'fine-tuning vs rag vs prompting',
  [ASSESSMENT_TYPES.evaluationGuardrails]: 'evaluation and guardrails',
  [ASSESSMENT_TYPES.ragFundamentals]: 'rag fundamentals',
  [ASSESSMENT_TYPES.advancedRetrieval]: 'advanced retrieval',
  [ASSESSMENT_TYPES.productionRag]: 'production rag',
  [ASSESSMENT_TYPES.agentFundamentals]: 'agent fundamentals',
  [ASSESSMENT_TYPES.agentReliability]: 'agent reliability',
  [ASSESSMENT_TYPES.multiAgentOrchestration]: 'multi-agent orchestration',
  [ASSESSMENT_TYPES.aiSystemDesign]: 'ai system design at scale',
  [ASSESSMENT_TYPES.aiSecurityGovernance]: 'ai security, safety and governance',
};

const getCoverForAssessment = (assessmentId) => {
  if (coverAssetOverrides[assessmentId]) return coverAssetOverrides[assessmentId];
  const matchedKey = assessmentTypeEntries.find(([, value]) => value === assessmentId)?.[0];
  const lookupKey = (coverOverrides[assessmentId] || matchedKey || 'practice-test').toLowerCase();
  return coverByBaseName[lookupKey] || coverByBaseName['practice-test'] || null;
};

const TRACKS = {
  ALL: 'All',
  AI_ENGINEERING: 'AI Engineering',
  DATA_ANALYTICS: 'Data Analytics',
  ACCOUNTING: 'Accounting',
  SKILLS: 'Skills & Tools',
  LANGUAGES: 'Languages',
  TAXATION: 'Taxation',
  DOMAINS: 'Domains',
  AI_ML: 'AI/ML',
  PROFESSIONAL_READINESS: 'Professional Readiness',
  CLOUD_SECURITY: 'Cloud & Security',
};

const TRACK_BY_ID = new Map([
  [ASSESSMENT_TYPES.communication, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.sjt, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.culture, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.ethics, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.critical_thinking, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.conflict, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.eq, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.presentation, TRACKS.PROFESSIONAL_READINESS],

  [ASSESSMENT_TYPES.aptitude, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.numerical, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.cognitive_ability, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.finance, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.fin_modeling, TRACKS.ACCOUNTING],

  [ASSESSMENT_TYPES.caseStudy, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.architecture_sandbox, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.product_case_ai, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.debugging_duel, TRACKS.PROFESSIONAL_READINESS],
  [ASSESSMENT_TYPES.daily_incident, TRACKS.PROFESSIONAL_READINESS],

  [ASSESSMENT_TYPES.french, TRACKS.LANGUAGES],
  [ASSESSMENT_TYPES.german, TRACKS.LANGUAGES],
  [ASSESSMENT_TYPES.spanish, TRACKS.LANGUAGES],
  [ASSESSMENT_TYPES.japanese, TRACKS.LANGUAGES],
  [ASSESSMENT_TYPES.chinese, TRACKS.LANGUAGES],

  [ASSESSMENT_TYPES.quickbooks, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.zoho_books, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.tallyprime, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.vyapar, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.busy_accounting, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.marg_erp, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.oracle_financials, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.dynamics_365_finance, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.gst_india_pro, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.accounting_fundamentals, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.financial_statement_analysis, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.banking_treasury, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.payroll_compliance, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.mis_reporting, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.ifrs, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.auditing, TRACKS.ACCOUNTING],
  [ASSESSMENT_TYPES.domain_accounting, TRACKS.DOMAINS],
  [ASSESSMENT_TYPES.domain_ar, TRACKS.DOMAINS],
  [ASSESSMENT_TYPES.domain_ap, TRACKS.DOMAINS],
  [ASSESSMENT_TYPES.domain_fa, TRACKS.DOMAINS],
  [ASSESSMENT_TYPES.sourcing, TRACKS.DOMAINS],
  [ASSESSMENT_TYPES.shrm, TRACKS.DOMAINS],
  [ASSESSMENT_TYPES.tax_india, TRACKS.TAXATION],
  [ASSESSMENT_TYPES.tax_uk, TRACKS.TAXATION],
  [ASSESSMENT_TYPES.tax_usa, TRACKS.TAXATION],
  [ASSESSMENT_TYPES.tax_europe, TRACKS.TAXATION],
  [ASSESSMENT_TYPES.tax_uae, TRACKS.TAXATION],

  [ASSESSMENT_TYPES.aiml, TRACKS.AI_ML],
  [ASSESSMENT_TYPES.agentBuilder, TRACKS.AI_ENGINEERING],
  [ASSESSMENT_TYPES.r_prog, TRACKS.AI_ML],
  [ASSESSMENT_TYPES.spark, TRACKS.AI_ML],

  [ASSESSMENT_TYPES.excel, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.powerbi, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.tableau, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.looker, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.sql_adv, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.r_prog, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.spark, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.pandas_ai, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.numpy_ai, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.mathematics_statistics, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.ga4, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.postgresql, TRACKS.DATA_ANALYTICS],
  [ASSESSMENT_TYPES.python, TRACKS.DATA_ANALYTICS],

  [ASSESSMENT_TYPES.aws, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.azure, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.gcp, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.docker, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.kubernetes, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.jenkins, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.terraform, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.hacking, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.security_plus, TRACKS.CLOUD_SECURITY],
  [ASSESSMENT_TYPES.owasp, TRACKS.CLOUD_SECURITY],
]);

const DATA_ANALYTICS_ROADMAP = [
  ASSESSMENT_TYPES.numerical,
  ASSESSMENT_TYPES.mathematics_statistics,
  ASSESSMENT_TYPES.excel,
  ASSESSMENT_TYPES.sql_adv,
  ASSESSMENT_TYPES.postgresql,
  ASSESSMENT_TYPES.python,
  ASSESSMENT_TYPES.numpy_ai,
  ASSESSMENT_TYPES.pandas_ai,
  ASSESSMENT_TYPES.r_prog,
  ASSESSMENT_TYPES.powerbi,
  ASSESSMENT_TYPES.tableau,
  ASSESSMENT_TYPES.looker,
  ASSESSMENT_TYPES.ga4,
  ASSESSMENT_TYPES.spark,
];

const DATA_ANALYTICS_ROADMAP_RANK = new Map(
  DATA_ANALYTICS_ROADMAP.map((assessmentId, index) => [assessmentId, index]),
);

const DOMAIN_PREFIXES = ['domain-'];
const DOMAIN_CATEGORY_KEYWORDS = ['industry knowledge'];
const AI_ML_CATEGORY_KEYWORDS = ['ai/ml', 'artificial intelligence', 'machine learning', 'mlops', 'llm', 'rag'];
const ANALYTICS_CATEGORY_KEYWORDS = ['analytics', 'analytical reasoning', 'quantitative'];
const WORKPLACE_CATEGORY_KEYWORDS = [
  'workplace',
  'organizational values',
  'client-facing readiness',
  'workplace integrity',
];
const SKILLS_CATEGORY_KEYWORDS = [
  'software development',
  'project management',
  'product management',
  'business operations',
  'data tools',
  'databases',
  'marketing',
  'design & creative',
  'hr & recruitment',
  'engineering architecture',
  'software quality',
  'advanced tech',
];

const getTrack = (assessment) => {
  const directTrack = TRACK_BY_ID.get(assessment.id);
  if (directTrack) return directTrack;

  const assessmentId = assessment.id || '';
  const category = (assessment.category || '').toLowerCase();

  if (category.includes('ai engineering')) return TRACKS.AI_ENGINEERING;
  if (assessmentId.startsWith('language-')) return TRACKS.LANGUAGES;
  if (assessmentId.startsWith('tax-')) return TRACKS.TAXATION;
  if (DOMAIN_PREFIXES.some((prefix) => assessmentId.startsWith(prefix))) return TRACKS.DOMAINS;
  if (DOMAIN_CATEGORY_KEYWORDS.some((keyword) => category.includes(keyword))) return TRACKS.DOMAINS;
  if (AI_ML_CATEGORY_KEYWORDS.some((keyword) => category.includes(keyword))) return TRACKS.AI_ML;
  if (ANALYTICS_CATEGORY_KEYWORDS.some((keyword) => category.includes(keyword))) return TRACKS.DATA_ANALYTICS;
  if (WORKPLACE_CATEGORY_KEYWORDS.some((keyword) => category.includes(keyword))) return TRACKS.PROFESSIONAL_READINESS;
  if (/cloud|infrastructure|security|devops/.test(category)) return TRACKS.CLOUD_SECURITY;
  if (SKILLS_CATEGORY_KEYWORDS.some((keyword) => category.includes(keyword))) return TRACKS.SKILLS;

  return TRACKS.SKILLS;
};

const formatAttempts = (attempts) => {
  const grouped = new Map();
  attempts.forEach((attempt) => {
    const current = grouped.get(attempt.assessmentId);
    if (!current || attempt.score > current.score) {
      grouped.set(attempt.assessmentId, attempt);
    }
  });
  return grouped;
};

const filterTabs = [
  TRACKS.ALL,
  TRACKS.AI_ENGINEERING,
  TRACKS.DATA_ANALYTICS,
  TRACKS.ACCOUNTING,
  TRACKS.SKILLS,
  TRACKS.LANGUAGES,
  TRACKS.TAXATION,
  TRACKS.DOMAINS,
  TRACKS.AI_ML,
  TRACKS.PROFESSIONAL_READINESS,
  TRACKS.CLOUD_SECURITY,
];

const trackAttributions = {
  [TRACKS.ACCOUNTING]: 'By Shagun Nagpal',
  [TRACKS.AI_ENGINEERING]: 'By Satvik',
};

export default function PracticeHub() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [attemptMap, setAttemptMap] = useState(new Map());
  const [showCompletedAssessments, setShowCompletedAssessments] = useState(true);
  const completedScrollerRef = useRef(null);
  const filterScrollerRef = useRef(null);
  const filterTabRefs = useRef(new Map());
  const [canScrollFiltersLeft, setCanScrollFiltersLeft] = useState(false);
  const [canScrollFiltersRight, setCanScrollFiltersRight] = useState(false);

  useEffect(() => {
    try {
      const storedAttempts = JSON.parse(localStorage.getItem(PRACTICE_ATTEMPTS_KEY) || '[]');
      setAttemptMap(formatAttempts(storedAttempts));
    } catch (error) {
      console.error('Failed to load practice attempts:', error);
      setAttemptMap(new Map());
    }
  }, []);

  const assessments = useMemo(() => (
    Object.values(assessmentsMap).map((assessment) => {
      const bestAttempt = attemptMap.get(assessment.id);
      return {
        ...assessment,
        questionCount: assessment.questions?.length || 0,
        track: getTrack(assessment),
        cover: getCoverForAssessment(assessment.id),
        bestScore: bestAttempt?.score ?? null,
        hasAttempt: Boolean(bestAttempt),
      };
    })
  ), [attemptMap]);

  useEffect(() => {
    const scroller = filterScrollerRef.current;
    if (!scroller) return undefined;

    const updateScrollState = () => {
      setCanScrollFiltersLeft(scroller.scrollLeft > 2);
      setCanScrollFiltersRight(
        scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2,
      );
    };

    updateScrollState();
    scroller.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      scroller.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  useEffect(() => {
    filterTabRefs.current.get(activeFilter)?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeFilter]);

  const filteredAssessments = useMemo(() => {
    const filtered = assessments.filter((assessment) => {
      const matchesFilter = activeFilter === 'All' || assessment.track === activeFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q || [
        assessment.title,
        assessment.shortTitle,
        assessment.category,
        assessment.description,
      ].filter(Boolean).some((value) => value.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });

    if (activeFilter === TRACKS.DATA_ANALYTICS) {
      return filtered.sort((a, b) => (
        (DATA_ANALYTICS_ROADMAP_RANK.get(a.id) ?? Number.MAX_SAFE_INTEGER)
        - (DATA_ANALYTICS_ROADMAP_RANK.get(b.id) ?? Number.MAX_SAFE_INTEGER)
      ));
    }

    return filtered;
  }, [assessments, activeFilter, searchQuery]);
  const completedAssessments = useMemo(
    () => filteredAssessments.filter((assessment) => assessment.hasAttempt),
    [filteredAssessments],
  );
  const availableAssessments = useMemo(
    () => filteredAssessments.filter((assessment) => !assessment.hasAttempt),
    [filteredAssessments],
  );

  const scrollCompletedAssessments = (direction) => {
    const container = completedScrollerRef.current;
    if (!container) return;
    const scrollAmount = Math.max(320, Math.round(container.clientWidth * 0.82));
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollFilterTabs = (direction) => {
    const scroller = filterScrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({
      left: direction * Math.max(280, Math.round(scroller.clientWidth * 0.6)),
      behavior: 'smooth',
    });
  };

  return (
    <DashboardShell
      title="Practice Hub"
      subtitle="Operational insights across your skills, proficiency, and readiness."
      activeTab="practice-hub"
      contentClassName="bg-[#f4fafa] px-6 pb-12 pt-0 sm:px-10"
      scrollHeader
    >
      <div className="mx-auto max-w-7xl">
        {/* Controls Section (Filters & Search) */}
        <section className="rounded-2xl border border-slate-200/75 bg-white shadow-sm mb-8">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-slate-800">Available Assessments</h3>
              <p className="text-xs text-slate-500 mt-0.5">Filter by track or search by keyword</p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <button
                type="button"
                onClick={() => navigate('/my-certificates')}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              >
                <Download className="h-4 w-4 text-slate-400" />
                My Reports
              </button>

              <div className="relative w-full lg:w-[26rem]">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search assessments..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-800 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
            </div>
          </div>

          {/* Single-line filter rail with a visible, styled horizontal scrollbar. */}
          <div className="px-5 pb-3 pt-4">
            <div className="flex items-stretch gap-2">
              <button
                type="button"
                onClick={() => scrollFilterTabs(-1)}
                disabled={!canScrollFiltersLeft}
                aria-label="Scroll categories left"
                className="mb-3 hidden w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 disabled:cursor-default disabled:opacity-30 sm:flex"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="relative min-w-0 flex-1">
                {canScrollFiltersLeft && (
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
                )}
                <div
                  ref={filterScrollerRef}
                  className="overflow-x-auto pb-3 [scrollbar-color:rgb(148_163_184)_rgb(241_245_249)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-teal-500"
                >
                  <div className="flex w-max min-w-full items-stretch gap-1.5">
                    {filterTabs.map((tab) => (
                      <button
                        key={tab}
                        ref={(element) => {
                          if (element) filterTabRefs.current.set(tab, element);
                          else filterTabRefs.current.delete(tab);
                        }}
                        type="button"
                        onClick={() => setActiveFilter(tab)}
                        className={`group relative flex min-h-14 shrink-0 flex-col items-center justify-center rounded-xl px-4 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
                          activeFilter === tab
                            ? 'font-semibold text-slate-900 after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:rounded-full after:bg-teal-500'
                            : 'font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                        }`}
                      >
                        <span className={`min-h-3 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.08em] ${
                          trackAttributions[tab] ? 'text-emerald-600' : 'text-transparent'
                        }`} aria-hidden={!trackAttributions[tab]}>
                          {trackAttributions[tab] || 'Category'}
                        </span>
                        <span className="whitespace-nowrap">
                          {tab === 'All' ? 'All Modules' : tab}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                {canScrollFiltersRight && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />
                )}
              </div>

              <button
                type="button"
                onClick={() => scrollFilterTabs(1)}
                disabled={!canScrollFiltersRight}
                aria-label="Scroll categories right"
                className="mb-3 hidden w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 disabled:cursor-default disabled:opacity-30 sm:flex"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {completedAssessments.length > 0 ? (
          <section className="mb-10">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">Completed Assessments</h3>
                <p className="mt-1 text-sm text-slate-500">Your finished tests are grouped here for quick review and retakes.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-200/60">
                  {completedAssessments.length} completed
                </span>
                {showCompletedAssessments ? (
                  <div className="hidden items-center gap-2 md:flex">
                    <button
                      type="button"
                      onClick={() => scrollCompletedAssessments('left')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
                      aria-label="Scroll completed assessments left"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollCompletedAssessments('right')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
                      aria-label="Scroll completed assessments right"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : null}
                <button
                  type="button"
                  onClick={() => setShowCompletedAssessments((current) => !current)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  {showCompletedAssessments ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  {showCompletedAssessments ? 'Minimize' : 'Maximize'}
                </button>
              </div>
            </div>
            {showCompletedAssessments ? (
              <div className="space-y-4">
                <div
                  ref={completedScrollerRef}
                  className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {completedAssessments.map((assessment) => (
                    <div key={assessment.id} className="w-[320px] min-w-[320px] snap-start lg:w-[calc((100%-4.5rem)/4)] lg:min-w-[calc((100%-4.5rem)/4)]">
                      <AssessmentCard
                        assessment={assessment}
                        showTrackBadge={activeFilter === TRACKS.ALL}
                        onOpen={() => navigate(`/practice-hub/test/${assessment.id}`)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                  <button
                    type="button"
                    onClick={() => scrollCompletedAssessments('left')}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Left
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCompletedAssessments('right')}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    Right
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-8 text-sm text-slate-500">
                Completed assessments are minimized. Expand this section anytime to review scores or retake tests.
              </div>
            )}
          </section>
        ) : null}

        {availableAssessments.length > 0 ? (
          <section>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">Available Assessments</h3>
                <p className="mt-1 text-sm text-slate-500">Start a new practice module from the remaining available assessments.</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                {availableAssessments.length} available
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {availableAssessments.map((assessment) => (
                <AssessmentCard
                  key={assessment.id}
                  assessment={assessment}
                  showTrackBadge={activeFilter === TRACKS.ALL}
                  onOpen={() => navigate(`/practice-hub/test/${assessment.id}`)}
                />
              ))}
            </div>
          </section>
        ) : null}

        {filteredAssessments.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 mb-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No assessments found</h3>
            <p className="mt-2 text-sm text-slate-500 max-w-sm">
              We couldn't find any practice modules matching your current search or filter criteria. Try adjusting your selections.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
              }}
              className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700"
            >
              Clear filters & search
            </button>
          </div>
        ) : null}
      </div>
    </DashboardShell>
  );
}

function AssessmentCard({ assessment, showTrackBadge = false, onOpen }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/75 bg-white shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5">
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden border-b border-slate-100 bg-slate-100/50">
        {assessment.cover ? (
          <img
            src={assessment.cover}
            alt={assessment.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <LibraryBig className="h-8 w-8 text-slate-300" />
          </div>
        )}
        {showTrackBadge ? (
          <div className="absolute right-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur">
            {assessment.track}
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h4 className="mb-2 text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-teal-700">
          {assessment.shortTitle || assessment.title}
        </h4>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
          {assessment.description}
        </p>

        <div className="mt-auto border-t border-slate-100 pt-4">
          <div className="mb-4 flex items-center justify-between">
            {assessment.hasAttempt ? (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-200/50">
                  <CheckCircle2 className="h-3 w-3" />
                  Completed
                </span>
                <span className="text-xs font-medium text-slate-500">Score: {assessment.bestScore}%</span>
              </div>
            ) : (
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Clock className="h-3.5 w-3.5" />
                {assessment.durationMinutes} Minutes
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50 hover:text-teal-800"
          >
            {assessment.hasAttempt ? 'Retake Assessment' : 'Start Assessment'}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
