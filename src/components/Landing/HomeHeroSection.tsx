import { useEffect, useState } from 'react';
import { ArrowRight, Award, BookOpenCheck, Code2, FileCheck2, Search } from 'lucide-react';
import AnimatedHeroBackground from './AnimatedHeroBackground';
import HeroCertificationPreview from './HeroCertificationPreview';

const HERO_WORDS = ['Smarter', 'Trusted', 'Verified', 'Career-ready'];

type HomeHeroSectionProps = {
  onStartAssessment: () => void;
  onVerifyCertificate: () => void;
  onSampleCertificate?: () => void;
};

export default function HomeHeroSection({
  onStartAssessment,
  onVerifyCertificate,
  onSampleCertificate,
}: HomeHeroSectionProps) {
  const [heroWordIdx, setHeroWordIdx] = useState(0);
  const [heroWordVisible, setHeroWordVisible] = useState(true);

  useEffect(() => {
    const cycle = window.setInterval(() => {
      setHeroWordVisible(false);
      window.setTimeout(() => {
        setHeroWordIdx((current) => (current + 1) % HERO_WORDS.length);
        setHeroWordVisible(true);
      }, 260);
    }, 2600);

    return () => window.clearInterval(cycle);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-4 pb-8 pt-5 sm:px-6 sm:pt-6 md:pt-6">
      {/* Mobile background decor */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#f8fffd_0%,#f5f8fc_46%,#ffffff_100%)] md:hidden" />
      <div
        className="absolute inset-0 z-0 opacity-70 md:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute left-[-18%] top-[8%] z-0 h-56 w-56 rounded-full bg-teal-100/70 blur-3xl md:hidden" />
      <div className="absolute bottom-[-8%] right-[-10%] z-0 h-64 w-64 rounded-full bg-cyan-100/70 blur-3xl md:hidden" />
      
      {/* Desktop background decor */}
      <div className="hidden md:block">
        <AnimatedHeroBackground />
      </div>

      <div className="relative mx-auto grid min-h-[500px] max-w-[1400px] items-start gap-8 sm:gap-10 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
        <div className="relative z-10 text-left">
          <h1 className="mb-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-5xl lg:text-[3.15rem]">
            Get{' '}
            <span
              style={{
                display: 'inline-block',
                transition: 'opacity 0.26s ease, transform 0.26s ease',
                opacity: heroWordVisible ? 1 : 0,
                transform: heroWordVisible ? 'translateY(0px)' : 'translateY(-6px)',
              }}
              className="text-teal-600"
            >
              {HERO_WORDS[heroWordIdx]}
            </span>
            <br />
            certified with evidence
          </h1>

          <p className="mb-6 max-w-[560px] text-base font-medium leading-[1.7] text-slate-700 lg:text-[1.02rem]">
            Certifi.AI turns technical assessments into verified proof of skill. Generate role-specific tests, evaluate real
            performance, and issue credentials people can trust.
          </p>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <button
              onClick={onStartAssessment}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
            >
              Start Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onVerifyCertificate}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-4 font-bold text-teal-700 shadow-sm transition hover:bg-teal-100"
            >
              <Search className="h-4 w-4" />
              Check & Verify
            </button>

            <button
              onClick={() => {
                if (onSampleCertificate) {
                  onSampleCertificate();
                } else {
                  document.getElementById('certificate-verify')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <Award className="h-4 w-4 text-amber-500" />
              Sample Certificate
            </button>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            {[
              {
                title: 'Skill Assessments',
                detail: 'Adaptive coding and MCQ evaluations',
                icon: <Code2 className="h-4 w-4" />,
              },
              {
                title: 'Verified Credentials',
                detail: 'Instant certificates with public validation',
                icon: <FileCheck2 className="h-4 w-4" />,
              },
              {
                title: 'Learning Paths',
                detail: 'AI roadmaps built from weak areas',
                icon: <BookOpenCheck className="h-4 w-4" />,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm sm:bg-white/90 sm:backdrop-blur-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  {item.icon}
                </div>
                <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 border-t border-slate-200 pt-4">
            <Highlight stat="15-30" label="Questions per assessment" />
            <Highlight stat="80%" label="Score threshold for certification" />
            <Highlight stat="Instant" label="Certificate Generation" />
            <Highlight stat="Live" label="Certificate Verification" />
          </div>
        </div>

        <div className="relative z-10 hidden lg:self-center lg:block">
          <HeroCertificationPreview />
        </div>
      </div>
    </section>
  );
}

function Highlight({ stat, label }: { stat: string; label: string }) {
  return (
    <div>
      <div className="text-lg font-black text-slate-900">{stat}</div>
      <div className="text-[11px] font-medium text-slate-500">{label}</div>
    </div>
  );
}
