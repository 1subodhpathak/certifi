import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Sparkles,
  Target,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import indiaJobRoles from '../../data/indiaJobRoles';

function SkillPreviewCard({ skill, category, desc, level, accent, onReadMore }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-slate-100/80 h-full">
      <div>
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />

        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          <Sparkles className="h-3 w-3 text-teal-500" />
          Expert Track
        </div>

        <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900 line-clamp-1">{skill}</h3>
        <p className="text-xs font-medium text-slate-400">{category}</p>

        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">{desc}</p>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Level</div>
          <div className="text-xs font-semibold text-slate-700">{level}</div>
        </div>

        <button
          type="button"
          onClick={onReadMore}
          className="inline-flex items-center gap-1 rounded-xl bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-700"
        >
          Check
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </article>
  );
}

/* Modal Matching Screenshot 2026-06-23 at 12.10.56 AM.png but styled with unified Teal brand theme */
function SkillDetailsModal({ job, onClose, onStartAssessment }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      {/* Dark Backdrop Overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Centered Popup Container */}
      <div className="relative z-10 flex h-full max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50/50 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Block matching layout from reference image with Teal accents */}
        <div className="shrink-0 border-b border-slate-100 bg-white/90 px-6 py-6 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-700">
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                Role Explorer
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {job.skill}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 max-w-3xl">
                {job.overview}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Split Body Content Grid */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-[0.42fr,0.58fr] items-start">
            
            {/* Left Sidebar Layout */}
            <div className="space-y-4">
              {/* Companies / Tools Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  <BookOpen className="h-3.5 w-3.5" />
                  Tools Covered
                </div>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {job.toolsCovered.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 uppercase tracking-wide shadow-3xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certification Focus Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Certification Focus
                </div>
                <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  {job.certificationFocus}
                </p>
              </div>

              {/* Best Use & Pinned Left Primary Action Block */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                    <Target className="h-3.5 w-3.5" />
                    Best Use
                  </div>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500">
                    {job.bestUse || "Review the role details, skim the Q&A, and then jump into the simulation hub to practice."}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onStartAssessment}
                  className="flex w-full items-center justify-center rounded-xl bg-teal-600 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
                >
                  Start Assessment
                </button>
              </div>
            </div>

            {/* Right Main Content Stream Q&A Cards */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Top Interview Insights
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Tailored expectations matching real technical problem-solving standards expected for this specialized skill track.
                </p>
              </div>

              {/* Questions Stream */}
              {job.interviewQuestions.map((item, index) => (
                <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[11px] font-bold text-teal-700">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.q}</h4>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default function ExpertSkillsSection() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const CAROUSEL_LIMIT = 4;

  const handleNextSkills = () => {
    if (startIndex + CAROUSEL_LIMIT < indiaJobRoles.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrevSkills = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const displayedSkills = indiaJobRoles.slice(startIndex, startIndex + CAROUSEL_LIMIT);

  return (
    <>
      <section id="roles" className="relative overflow-hidden bg-slate-50 px-6 py-10 lg:py-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-100/40 blur-[80px]" />
          <div className="absolute bottom-6 right-6 h-64 w-64 rounded-full bg-cyan-100/40 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-teal-600">
                CERTIFICATION TRACKS
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Top Certifications by <span className="text-teal-600">Our Career Experts</span>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Browse certification pathways mapped to real job expectations, practical tool stacks, and recruiter-ready evaluation depth across the most in-demand skill domains.
.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePrevSkills}
                disabled={startIndex === 0}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border bg-white shadow-sm transition ${
                  startIndex === 0 
                    ? 'border-slate-100 text-slate-300 cursor-not-allowed opacity-50' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
                aria-label="Previous tracks"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNextSkills}
                disabled={startIndex + CAROUSEL_LIMIT >= indiaJobRoles.length}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border bg-teal-50 text-teal-600 shadow-sm transition ${
                  startIndex + CAROUSEL_LIMIT >= indiaJobRoles.length
                    ? 'border-slate-100 text-slate-300 cursor-not-allowed opacity-50'
                    : 'border-teal-200 hover:bg-teal-100'
                }`}
                aria-label="Next tracks"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {displayedSkills.map((job) => (
              <div key={job.skill} className="h-full animate-in fade-in duration-300">
                <SkillPreviewCard
                  skill={job.skill}
                  category={job.category}
                  desc={job.desc}
                  level={job.level}
                  accent={job.accent}
                  onReadMore={() => setSelectedJob(job)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedJob ? (
        <SkillDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onStartAssessment={() => navigate('/dashboard')}
        />
      ) : null}
    </>
  );
}
