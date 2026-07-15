import { CheckCircle2 } from 'lucide-react';
import coverageImage from '../../assets/Coverage.png';

const workflowSteps = [
  {
    step: '1',
    title: 'Create Your Profile',
    description: 'Set up your account and define the skills or certifications you want to pursue.',
  },
  {
    step: '2',
    title: 'Choose or Create Your Own Assessment',
    description: 'Select a role-focused evaluation with coding, concepts, and scenario-based questions.',
  },
  {
    step: '3',
    title: 'Complete the Session',
    description: 'Take the proctored assessment in a structured environment with real performance tracking.',
  },
  {
    step: '4',
    title: 'Review Your Results',
    description: 'Get AI-generated scoring, strengths, weak areas, and actionable performance feedback.',
  },
  {
    step: '5',
    title: 'Claim Your Credential',
    description: 'Unlock a verifiable certificate and a tailored learning path for the next improvement cycle.',
  },
];

const workflowBullets = [
  'Role-aware assessment setup',
  'Scenario-based evaluation flow',
  'Instant score and transcript review',
  'Repeatable improvement loops',
];

export default function GuidedWorkflowSection() {
  return (
    /* Removed min-h-screen and added tight, uniform vertical padding blocks */
    <section id="process" className="relative w-full overflow-hidden bg-slate-950 py-12 sm:py-16 lg:py-20">
      
      {/* Background Image Layer matching references */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.99] scale-[1.01]"
          style={{ backgroundImage: `url(${coverageImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(45,212,191,0.08),transparent_20rem),radial-gradient(circle_at_82%_20%,rgba(125,211,252,0.08),transparent_24rem)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        
        {/* Left Column: Headline and Badges */}
        <div className="max-w-[580px] py-4">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-teal-400">
            How It Works
          </div>

          <h2 className="mt-4 text-[1.1rem] font-black tracking-tight text-white sm:text-[1.7rem]">
            A guided workflow for{' '}
            <span className="text-teal-400">Certification Readiness</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            CareerSense turns skill validation into a structured loop: define your target, complete a realistic assessment,
            and leave with verified proof and feedback you can act on before the next opportunity.
          </p>

          {/* Quick-check bullet points grid */}
          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {workflowBullets.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-teal-400" />
                <p className="text-sm font-medium text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Premium Glassmorphic Timeline Card */}
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-2xl shadow-black/40 sm:p-8 lg:p-10">
          <div className="relative">
            {/* Timeline Vertical Axis Connecting Line */}
            <div className="absolute left-5 top-3 bottom-3 w-[2px] bg-white/10" />

            {/* List of Steps (Tightened step spacing from space-y-5 to space-y-4) */}
            <div className="space-y-4">
              {workflowSteps.map((item) => (
                <div key={item.step} className="relative flex gap-5 group">
                  
                  {/* Glowing Numeric Node Indicator */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal-400 bg-slate-900 text-sm font-bold text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-transform duration-300 group-hover:scale-105">
                    {item.step}
                  </div>

                  {/* Step Description Content */}
                  <div className="pt-1">
                    <h3 className="text-sm sm:text-base font-bold tracking-tight text-white leading-none">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-[13px] font-normal leading-normal text-slate-400 max-w-[50ch]">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
