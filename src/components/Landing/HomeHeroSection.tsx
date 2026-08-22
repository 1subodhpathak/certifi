import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpenCheck, Code2, FileCheck2, Search } from 'lucide-react';
import AnimatedHeroBackground from './AnimatedHeroBackground';
import HeroCertificationPreview from './HeroCertificationPreview';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

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
    <section className="relative overflow-hidden bg-white px-4 pb-6 pt-5 sm:px-6 sm:pt-6 md:pt-5">
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
      <div className="hidden md:block">
        <AnimatedHeroBackground />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1400px] items-center gap-8 md:gap-10 lg:grid-cols-[1.02fr,0.98fr] lg:gap-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 text-left">
          <motion.h1 variants={fadeInUp} className="mb-4 text-4xl font-extrabold leading-[1.04] tracking-tight text-slate-950 md:text-5xl lg:text-[3.15rem]">
            Get{' '}
            <span
              style={{
                display: 'inline-block',
                transition: 'opacity 0.26s ease, transform 0.26s ease',
                opacity: heroWordVisible ? 1 : 0,
                transform: heroWordVisible ? 'translateY(0px)' : 'translateY(-10px)',
              }}
              className="text-teal-600"
            >
              {HERO_WORDS[heroWordIdx]}
            </span>
            <br />
            certified with evidence
          </motion.h1>

          <motion.p variants={fadeInUp} className="mb-6 max-w-[560px] text-base font-medium leading-[1.7] text-slate-700 lg:text-[1.02rem]">
            Certifi.AI turns technical assessments into verified proof of skill. Generate role-specific tests, evaluate real
            performance, and issue credentials people can trust.
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-6 grid gap-3 sm:grid-cols-3">
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
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-6 grid gap-3 sm:grid-cols-3">
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
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 border-t border-slate-200 pt-4">
            <Highlight stat="15-30" label="Questions per assessment" />
            <Highlight stat="80%" label="Score threshold for certification" />
            <Highlight stat="Instant" label="Certificate Generation" />
            <Highlight stat="Live" label="Certificate Verification" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 hidden lg:self-center lg:block"
        >
          <HeroCertificationPreview />
        </motion.div>
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
