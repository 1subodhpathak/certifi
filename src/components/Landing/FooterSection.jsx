import { Mail, ShieldCheck, ArrowRight, Landmark, FileText, CheckCircle2, Phone, MapPin } from 'lucide-react';
import officeBg from "../../assets/Office.png"; 

const footerGroups = [
  {
    title: 'Platform Registry',
    links: [
      { label: 'Evaluation Framework', href: '#process' },
      { label: 'Institutional Integrity', href: '#why-us' },
      { label: 'Competency Matrices', href: '#roles' },
      { label: 'Candidate Profiles', href: '#testimonials' },
    ],
  },
  {
    title: 'Evaluation Boards',
    links: [
      { label: 'AI Validation Sheets', href: '/dashboard' },
      { label: 'Syllabus Practice Hub', href: '/practice-hub' },
      { label: 'Structured Curricula', href: '/learning-paths' },
      { label: 'Verified Transcripts', href: '/my-certificates' },
    ],
  },
  {
    title: 'Academic Records',
    links: [
      { label: 'Ledger Fees & Scale', href: '/subscription' },
      { label: 'Usage Auditing', href: '/usage-billing' },
      { label: 'Identity Settings', href: '/my-profile' },
      { label: 'Public Verification Portal', href: '/verify-certificate' },
    ],
  },
];

function FooterLink({ href, label }) {
  return (
    <a href={href} className="text-xs text-slate-300 transition-colors hover:text-white font-medium">
      {label}
    </a>
  );
}

export default function FooterSection() {
  return (
    <footer 
      className="relative border-t border-slate-800 bg-cover bg-center font-sans text-slate-200 antialiased"
      style={{ backgroundImage: `url(${officeBg})` }}
    >
      
      {/* Adjusted Overlay: 
        Lowered opacity to 70% (bg-slate-950/70) and removed the blur 
        so the office background is clearly visible behind the footer content. 
      */}
      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* Institutional Top Accents */}
      <div className="absolute z-10 inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-[1380px] px-4 py-16 sm:px-6">
        
        {/* Core Institutional Brand Profile */}
        <div className="grid gap-12 border-b border-slate-700/50 pb-12 lg:grid-cols-[1.3fr,0.7fr] lg:items-start">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3.5">
              <img
                src="/Logo1.png"
                alt="Certifi.AI logo"
                className="h-12 w-12 shrink-0 object-contain"
              />
              <div>
                <div className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  Career<span className="text-teal-500">Sense</span>
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-teal-500 mt-0.5">
                  National Skills Validation
                </div>
              </div>
            </div>

            <h2 className="mt-6 max-w-2xl text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl leading-snug">
              Standardized AI-generated examination papers, competency assessment grids, and secure micro-credentialing infrastructure.
            </h2>
            
            <p className="mt-4 max-w-[72ch] text-xs leading-relaxed text-slate-300">
              Operating under strict programmatic evaluation parameters, CareerSense offers automated examination sheets 
              and ledgered transcript archives for professionals and enterprise boards. All results are bound to 
              secure public cryptographic hashes to guarantee absolute credential tamper-resistance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600/90 border border-teal-500/50 px-4 py-2 text-xs font-bold text-white transition hover:bg-teal-500"
              >
                Initialize Examination
                <ArrowRight className="h-3.5 w-3.5 text-teal-100" />
              </a>
              <a
                href="/verify-certificate"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/60 px-4 py-2 text-xs font-bold text-slate-200 transition hover:bg-slate-800/80"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
                Verification Desk
              </a>
            </div>
          </div>

          {/* Institutional Contact Office Directory */}
          <div className="grid gap-3 sm:grid-cols-1 w-full lg:max-w-sm">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 backdrop-blur-md p-4 space-y-3.5 shadow-xl">
              
              {/* Registrar Email */}
              <div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Landmark className="h-3.5 w-3.5 text-teal-400" />
                  <p className="text-[10px] font-bold uppercase tracking-wider">Office of Academic Records</p>
                </div>
                <a href="mailto:Support@careersenseai.com" className="mt-1 block text-xs font-semibold text-white hover:underline">
                  Support@careersenseai.com
                </a>
              </div>

              <div className="w-full h-px bg-slate-700/60" />

              {/* International Registries Helplines */}
              <div>
                <div className="flex items-center gap-2 text-slate-300 mb-1.5">
                  <Phone className="h-3.5 w-3.5 text-teal-400" />
                  <p className="text-[10px] font-bold uppercase tracking-wider">Support Hotlines</p>
                </div>
                <div className="space-y-1 text-xs font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇺🇸</span>
                    <a href="tel:+12018936385" className="hover:text-white hover:underline">+1 (201) 893-6385</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇮🇳</span>
                    <a href="tel:+919891422329" className="hover:text-white hover:underline">+91 9891422329</a>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-slate-700/60" />

              {/* Secretarial Address */}
              <div>
                <div className="flex items-center gap-2 text-slate-300 mb-1">
                  <MapPin className="h-3.5 w-3.5 text-teal-400" />
                  <p className="text-[10px] font-bold uppercase tracking-wider">Secretariat Headquarters</p>
                </div>
                <p className="text-xs font-medium text-slate-200 leading-normal">
                  85 CourtHouse Pl, Jersey City<br />
                  New Jersey — 07306
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Secondary Informational Matrix */}
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-[1fr,1.2fr]">
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Registry Framework Summary
            </h3>
            <p className="mt-3 max-w-[64ch] text-xs leading-relaxed text-slate-300">
              The CareerSense system serves as a decentralized credential registry supporting role-focused analytics, business logic papers, 
              case study breakdowns, automated grading architectures, and structural progress planning modules. All digital evaluation blocks 
              are logged against verified candidate profiles to generate secure employment profiles for review.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-200 uppercase tracking-wider">
              <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" /> ISO / IEC Compliant Verification Protocols
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 bg-slate-900/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <FooterLink key={link.label} {...link} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & System Timestamp Sub-footer */}
        <div className="flex flex-col gap-4 border-t border-slate-700/50 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CareerSense National Registry System. All institutional data assets, examinations, and ledger logs remain strictly protected.</p>
          <div className="flex flex-wrap items-center gap-5 font-medium">
            <a href="/subscription" className="transition-colors hover:text-white">Fee Structure</a>
            <a href="#" className="transition-colors hover:text-white">Privacy Protocol</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Governance</a>
            <a href="/verify-certificate" className="transition-colors hover:text-white">Verification Ledger</a>
          </div>
        </div>

      </div>
    </footer>
  );
}