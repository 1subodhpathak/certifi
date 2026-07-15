import { QrCode, ShieldCheck, Sparkles } from 'lucide-react';
import candidateImg from "../../assets/candidate.png";

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Main Content & Visual Grid Split */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Core Value Proposition & Data Counters */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                WHY CHOOSE US
              </div>
              <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-3xl">
                A validation engine built for{' '}
                <span className="text-teal-600">Practical Capability</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-500 font-normal">
                Traditional exams reward memorized textbook answers. CareerSense turns assessments into proctored, verifiable proof of skill with cheat detection, live credential validation, and AI-powered custom assessment creation.
              </p>
            </div>

            {/* Impact Metric Callouts inspired by the reference layout */}
            <div className="grid grid-cols-2 gap-6 border-y border-slate-100 py-6 max-w-xl">
              <div>
                <div className="text-3xl sm:text-3xl font-extrabold tracking-tight text-teal-600">
                  100%
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Proctored Skill Validation
                </div>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  Camera-based trust signals, fullscreen checks, and suspicious activity logs protect assessment integrity.
                </p>
              </div>

              <div>
                <div className="text-3xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  AI-Powered
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Custom Assessment Creation
                </div>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  Build role-specific quizzes with your own skill, difficulty, timing, and question mix in just a few clicks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Curved Background Mask with Local Image Asset */}
          <div className="relative hidden lg:block lg:col-span-5 h-[400px]">
            {/* Curved Background Frame matching layout from Screenshot 2026-06-23 at 12.47.04 AM.jpg */}
            <div className="absolute inset-0 rounded-l-[200px] rounded-r-3xl overflow-hidden border border-slate-100 bg-slate-50 shadow-inner">
              <img 
                src={candidateImg} 
                alt="Candidate Readiness Interface"
                className="h-full w-full object-cover object-center opacity-100 transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* Soft corporate teal-to-transparent overlay tint gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 via-teal-900/5 to-transparent" />
            </div>
          </div>

        </div>

        {/* Bottom Feature Banners Block */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          
          {/* Card 1 */}
          <div className="group rounded-2xl border border-rose-200/70 bg-gradient-to-br from-rose-600 via-red-600 to-rose-700 p-6 text-white shadow-md shadow-rose-700/15 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-rose-100" />
              <h3 className="text-base font-bold tracking-tight">Cheat Detection System</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-rose-50/90 font-normal">
              Protect assessments with proctoring telemetry, fullscreen integrity checks, tab-switch tracking, and trust scoring.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl border border-cyan-200/60 bg-gradient-to-br from-cyan-600 to-cyan-700 p-6 text-white shadow-md shadow-cyan-700/10 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <QrCode className="h-5 w-5 shrink-0 text-cyan-100" />
              <h3 className="text-base font-bold tracking-tight">Barcode Scan & Verify</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-cyan-50/90 font-normal">
              Every credential can be validated through a public verification page, unique credential ID, and scannable barcode workflow.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-slate-300">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 shrink-0 text-teal-600" />
              <h3 className="text-base font-bold tracking-tight text-slate-900">Create Your Own Quiz</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 font-normal">
              Generate custom AI assessments with your own skill name, question count, time limit, difficulty level, and MCQ vs case-study ratio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
