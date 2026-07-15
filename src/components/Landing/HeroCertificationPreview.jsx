import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Code2, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const METRICS = [
  { label: 'Assessment', value: '15', detail: 'Adaptive questions loaded' },
  { label: 'Integrity', value: '98%', detail: 'Focus and session checks' },
  { label: 'Verification', value: 'Live', detail: 'Credential status visible' },
];

export default function HeroCertificationPreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-3xl font-sans">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-2 shadow-xl shadow-slate-200/50 transition-all">
        <div className="rounded-[1.5rem] border border-slate-100 bg-[#fdfdfd] p-4 sm:p-5">
          
          {/* Header Section (Tightened spacing) */}
          <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-teal-600">
                <Brain className="h-3.5 w-3.5" />
                Live Certification Record
              </div>
              <h3 className="mt-1.5 flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 lg:text-xl">
                React Professional Certification
                <Sparkles className="h-4 w-4 text-amber-400" />
              </h3>
              <p className="mt-1 max-w-md text-[13px] leading-snug text-slate-500">
                Assessment generation, secure exam activity, score evidence, and certificate issuance in one record.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl px-3 py-2 text-white ">
              <div className="text-teal-600 font-bold leading-none">Ready</div>
              <div className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-teal-600">For Validation</div>
            </div>
          </div>

          {/* Metrics (Reduced padding) */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {METRICS.map((metric, index) => {
              const isActive = step === index;
              return (
                <div
                  key={metric.label}
                  className={`relative overflow-hidden rounded-xl border p-3 transition-all duration-500 ${
                    isActive 
                      ? 'border-teal-200 bg-teal-50/50 shadow-sm' 
                      : 'border-slate-100 bg-white opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{metric.label}</span>
                    <span className={`text-lg font-bold leading-none ${isActive ? 'text-teal-700' : 'text-slate-700'}`}>
                      {metric.value}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">{metric.detail}</p>
                  
                  {isActive && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3.5, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-1 bg-teal-500"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Preview Window */}
          <div className="mt-4 relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
              <h4 className="text-[13px] font-semibold text-slate-700">Certification Engine Preview</h4>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-teal-600">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                </span>
                Live Evidence
              </span>
            </div>

            {/* STRICT HEIGHT LOCK: h-[160px] guarantees the div never resizes */}
            <div className="relative flex h-[160px] items-center justify-center px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 8, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full max-w-md"
                >
                  {/* Step 0: Code Generation */}
                  {step === 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-[13px] font-semibold text-teal-700">
                        <Code2 className="h-4 w-4" /> Generating Challenge Set...
                      </div>
                      <div className="overflow-hidden rounded-lg border border-slate-700 bg-[#0d1117] shadow-lg">
                        <div className="flex items-center gap-1.5 border-b border-slate-800 bg-[#161b22] px-3 py-1.5">
                          <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                          <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                          <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                        </div>
                        <div className="p-3 font-mono text-[11px] leading-relaxed text-slate-300">
                          <p><span className="text-pink-400">export function</span> <span className="text-blue-400">evaluateSolution</span>(code) {'{'}</p>
                          <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.4 }} className="mt-1.5 h-1.5 rounded bg-slate-700/50" />
                          <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ delay: 0.35, duration: 1.1 }} className="mt-1.5 h-1.5 rounded bg-slate-700/50" />
                          <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ delay: 0.8, duration: 0.5 }} className="mt-1.5 h-1.5 rounded bg-slate-700/50" />
                          <p className="mt-1.5">{'}'}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Processing/AI */}
                  {step === 1 && (
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="relative mb-3 flex h-12 w-12 items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-[3px] border-teal-100" />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                          className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-teal-500"
                        />
                        <Brain className="h-5 w-5 text-teal-600" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900">AI Scoring in Progress</h4>
                      <p className="mt-0.5 text-[13px] text-slate-500">Evaluating code quality, speed, and concept coverage.</p>
                    </div>
                  )}

                  {/* Step 2: Success/Certificate */}
                  {step === 2 && (
                    <div className="flex flex-col items-center justify-center text-center">
                      <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 ring-4 ring-teal-50"
                      >
                        <CheckCircle2 className="h-6 w-6 text-teal-600" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-slate-900">Credential Issued</h4>
                      <motion.div 
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-2 inline-block rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-mono text-slate-600 shadow-sm"
                      >
                        CERT-ID: <span className="font-semibold text-slate-900">CS-482913</span>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="mt-4 flex flex-col gap-3 rounded-xl bg-slate-900 p-4 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-slate-800 p-1.5 shrink-0">
                <ShieldCheck className="h-4 w-4 text-teal-400" />
              </div>
              <div>
                <p className="text-[13px] font-semibold">Verification-ready output packaged</p>
                <p className="text-[11px] text-slate-400">
                  Assessment report, certificate status, and learning path included.
                </p>
              </div>
            </div>

            <button className="group flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-[13px] font-semibold text-slate-900 transition-colors hover:bg-slate-100">
              View Sample
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}