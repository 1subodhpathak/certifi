import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  Award,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  FileBadge2,
  Globe2,
  Landmark,
  LockKeyhole,
  Medal,
  ChevronRight,
  Search,
  ShieldCheck,
  UserRound,
  XCircle,
  RotateCcw,
} from 'lucide-react';

import academyBackground from '../assets/CS Academy.png';
import csSeal from '../assets/CSSeal.png';
import shagunSignature from '../assets/ShagunSignature.png';
import csWatermark from '../assets/CSWatermark4.png';
import { cleanCertificateId, findCertificateById } from '../services/certificateRegistry';
import { buildQrCodeImageUrl } from '../services/shareLinks';

type VerificationStatus = 'idle' | 'loading' | 'success' | 'error';

export default function VerifyCertificate() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [certId, setCertId] = useState(searchParams.get('id') || '');
  const [status, setStatus] = useState<VerificationStatus>('idle');
  const [result, setResult] = useState<any>(null);

  const runVerification = async (rawValue: string) => {
    const targetID = cleanCertificateId(rawValue);
    if (!targetID) return;

    setStatus('loading');

    try {
      let found: any = null;

      // 1. Try to fetch from backend (unauthenticated public route)
      try {
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
        const response = await fetch(`${baseUrl}/careersense/certifi/verify/${targetID}`);
        if (response.ok) {
          found = await response.json();
        }
      } catch (apiErr) {
        console.warn('Backend verification failed, falling back to local registry:', apiErr);
      }

      // 2. Fallback to local storage registry (e.g. offline dev/unsynced fallback)
      if (!found) {
        found = findCertificateById(targetID);
      }

      if (!found) {
        setResult(null);
        setStatus('error');
        return;
      }

      setResult({
        ...found,
        student: found.studentName || 'Alexander Bennett',
        course: found.skill || found.title || 'Advanced Certificate Program in Data Science and Machine Learning',
        issueDate: found.date || found.issuedAt || 'May 20, 2025',
        score: String(found.score || '').includes('%') ? found.score : `${found.score || 89}%`,
        verifiedId: cleanCertificateId(found.id || found.certificateId || 'CSA-ACDSML-2025-05874'),
      });

      setStatus('success');
    } catch (error) {
      console.error('Verification Error:', error);
      setResult(null);
      setStatus('error');
    }
  };

  useEffect(() => {
    const idFromQuery = searchParams.get('id');
    if (idFromQuery) {
      runVerification(idFromQuery);
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleVerify = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!certId.trim()) return;
    runVerification(certId);
  };

  const trustHighlights = useMemo(
    () => [
      {
        icon: ShieldCheck,
        title: 'SECURE REGISTRY VALIDATION',
        detail: 'Encrypted & tamper-proof verification',
      },
      {
        icon: Medal,
        title: 'ASSESSMENT-BACKED CREDENTIAL',
        detail: 'Verified learning standards',
      },
      {
        icon: Globe2,
        title: 'PUBLIC VERIFICATION',
        detail: 'Real-time status for employers',
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-[#f6efe2] font-sans text-[#2a1714]">
      {/* Navbar */}
      <nav className="border-b border-[#4a6285] bg-[#01142e] px-4 py-2 text-[#fff9ec] shadow-[0_10px_26px_rgba(13,28,49,0.28)] sm:px-6">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-left sm:gap-2.5"
          >
            <img
              src="/Logo.png"
              alt="CareerSense Academy crest"
              className="h-10 w-10 shrink-0 translate-y-1 object-contain sm:h-11 sm:w-11"
            />
            <div className="leading-none">
              <div className="text-lg font-black tracking-tight text-slate-100 sm:text-xl">
                Career<span className="text-teal-300">Sense</span>
              </div>
              <div className="mt-1 text-[6px] font-black uppercase tracking-[0.14em] text-white-200 sm:tracking-[0.16em]">
                Centre for Professional Certification
              </div>
            </div>
          </button>

          {/* <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 rounded-[4px] bg-transparent px-5 py-2 text-sm font-medium text-[#fff8e9] transition hover:bg-white/8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </button>
          </div> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#dacbad]/60 bg-[#f8f2e7]">
        <div
          className="absolute inset-0 opacity-[0.58] sepia-[0.38] saturate-[0.76]"
          style={{
            backgroundImage: `url(${academyBackground})`,
            backgroundPosition: 'center 28%',
            backgroundSize: 'cover',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(251,246,236,0.72) 0%, rgba(247,240,228,0.76) 44%, rgba(243,236,221,0.88) 100%)',
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,252,245,0.04)_0%,rgba(255,252,245,0)_62%)]" />
        <div className="absolute left-0 top-0 h-full w-44 bg-gradient-to-r from-[#f8f2e7] via-[#f8f2e7]/62 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-44 bg-gradient-to-l from-[#f8f2e7] via-[#f8f2e7]/62 to-transparent" />

        <div className="relative mx-auto max-w-[1320px] px-4 pb-8 pt-9 sm:px-6 sm:pb-8 sm:pt-9">
          <div className="mx-auto max-w-5xl text-center">
            {/* Academic Crest Motif */}
            <div className="mb-4 flex items-center justify-center text-[#c79b49]">
              <div className="h-px w-24 bg-[#d8b66f]" />
              <div className="mx-4 flex items-center gap-1.5">
                <div className="flex h-9 items-center">
                  <svg viewBox="0 0 28 36" className="h-9 w-7 fill-none stroke-current">
                    <path d="M24 31c-5-3-8-8-9-15" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M22.5 26.5c-3.7-2.7-5.8-6.3-6.7-11.3" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M20.5 22.5c-2.2-1.9-3.5-4.3-4.1-7.7" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d3a654] bg-[#fffaf0]/92 shadow-[0_0_0_1px_rgba(199,155,73,0.14)]">
                  <Landmark className="h-5 w-5 text-[#c79b49]" strokeWidth={1.8} />
                </div>
                <div className="flex h-9 items-center">
                  <svg viewBox="0 0 28 36" className="h-9 w-7 fill-none stroke-current scale-x-[-1]">
                    <path d="M24 31c-5-3-8-8-9-15" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M22.5 26.5c-3.7-2.7-5.8-6.3-6.7-11.3" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M20.5 22.5c-2.2-1.9-3.5-4.3-4.1-7.7" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="h-px w-24 bg-[#d8b66f]" />
            </div>

            <h1 className="mt-2 font-serif text-[42px] font-medium tracking-[0.03em] text-[#4a1217] sm:text-5xl lg:text-[3.1rem]">
              VERIFY ACADEMIC CREDENTIALS
            </h1>

            <p className="mx-auto mt-4 max-w-2xl font-serif text-[15px] leading-relaxed text-[#5a4843] sm:text-[1.16rem]">
              Welcome to the official verification portal of CareerSense.
              <br /> Validate the authenticity and status of certificates issued to our learners.
            </p>

            <form
              onSubmit={handleVerify}
              className="mx-auto mt-8 flex max-w-[1020px] flex-col gap-2 rounded-[8px] border border-[#ceb78e] bg-[rgba(255,250,240,0.8)] p-1.5 shadow-[0_14px_28px_rgba(117,84,31,0.08)] sm:flex-row sm:gap-0"
            >
              <div className="flex min-h-[58px] flex-1 items-center gap-4 rounded-[6px] border border-[#eadbc0] bg-[linear-gradient(180deg,#fffdfa_0%,#fff9ef_100%)] px-6 shadow-[inset_0_1px_2px_rgba(145,115,59,0.05)]">
                <Search className="h-6 w-6 shrink-0 text-[#23273b] stroke-[1.8]" />
                <input
                  type="text"
                  value={certId}
                  onChange={(event) => setCertId(event.target.value)}
                  placeholder="Enter Certificate ID or Credential Code"
                  className="h-full w-full bg-transparent text-[15px] font-medium tracking-normal text-[#2a1714] placeholder:font-normal placeholder:text-[#9f9688] focus:outline-none sm:text-[16px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || !certId.trim()}
                className="flex min-h-[58px] items-center justify-center gap-3 rounded-[6px] border border-[#22324f] bg-[linear-gradient(180deg,#162746_0%,#101c36_100%)] px-10 font-serif text-[13px] font-semibold uppercase tracking-[0.11em] text-[#fffdf7] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition hover:bg-[linear-gradient(180deg,#1a2d4f_0%,#12213f_100%)] disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[302px]"
              >
                {status === 'loading' ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <>
                    VERIFY CREDENTIAL
                    <span className="ml-2 flex h-10 w-10 items-center justify-center border-l border-white/12 pl-3">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </>
                )}
              </button>
            </form>

            <div className="mx-auto mt-8 grid max-w-[1240px] gap-5 border-t border-[#dcccb0]/80 pt-5 md:grid-cols-[1.08fr,1.22fr,1.18fr]">
              {trustHighlights.map((item, index) => (
                <TrustItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  detail={item.detail}
                  bordered={index !== 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1320px] px-4 pb-14 pt-4 sm:px-6">
        {status === 'success' && result ? (
          <section className="space-y-4">
            {/* Success Banner */}
            <div className="flex flex-col gap-4 rounded-[6px] border border-[#bfd5b8] bg-[linear-gradient(90deg,#f5fbf3_0%,#fbfffa_72%,#f4faf1_100%)] px-6 py-3 shadow-sm lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#87ad82] bg-[#edf7ea] text-[#356037] shadow-[inset_0_2px_8px_rgba(53,96,55,0.08)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#7ca576]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>

                <div>
                  <p className="font-serif text-[1.45rem] font-medium tracking-[0.05em] text-[#2d5d32]">
                    VERIFICATION SUCCESSFUL
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#4b5a4b]">
                    This credential is authentic and currently valid.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[13px]">
                <span className="text-[#5a6b5a]">
                  Verified on:{' '}
                  <span className="font-medium text-[#324432]">
                    {new Date().toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                    , {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })} (IST)
                  </span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#c6ddc2] bg-[#e7f4e3] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#29562a]">
                  <Check className="h-3.5 w-3.5" />
                  VALID
                </span>
              </div>
            </div>

            {/* Main Credential Display */}
            <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(360px,0.8fr)]">
              <CertificatePreview result={result} />

              {/* Credential Details Sidebar */}
              <aside className="min-w-0 rounded-[6px] border border-[#ddcfb2] bg-[#fffaf0] p-5 shadow-[0_12px_30px_rgba(98,74,30,0.06)]">
                <div className="mb-6">
                  <h2 className="font-serif text-[1.6rem] font-medium tracking-[0.05em] text-[#3d2421]">
                    CREDENTIAL DETAILS
                  </h2>
                  <div className="mt-3 flex items-center">
                    <div className="h-px w-full bg-[#d2c4aa]" />
                    <div className="mx-2 flex items-center gap-1 text-[#b89151]">
                      <span className="h-1.5 w-1.5 rotate-45 bg-current" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-current" />
                    </div>
                    <div className="h-px w-full bg-[#d2c4aa]" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <CredentialRow icon={UserRound} label="RECIPIENT" value={result.student} />
                  <CredentialRow icon={BookOpen} label="CERTIFICATION" value={result.course} />
                  <CredentialRow icon={CalendarDays} label="ISSUE DATE" value={result.issueDate} />
                  <CredentialRow icon={Award} label="VERIFIED SCORE" value={result.score} />
                  <CredentialRow icon={FileBadge2} label="CREDENTIAL ID" value={result.verifiedId} />
                  <CredentialRow
                    icon={ShieldCheck}
                    label="STATUS"
                    value={result.status || 'VALID'}
                    helper="This credential is active and in good standing."
                    success
                  />
                </div>
              </aside>
            </div>
          </section>
        ) : null}

        {status === 'error' ? (
          <section className="rounded-md border border-red-200 bg-[#fffaf7] p-10 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
              <XCircle className="h-7 w-7 text-red-700" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#421b18]">
              Certificate Not Found
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-[#5a4843]">
              We could not find a valid record for <span className="font-mono font-bold">{certId}</span>. Please verify the ID or request a direct verification link from the issuer.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#421b18] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2a0808]"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </button>
          </section>
        ) : null}

        {/* Footer */}
        <footer className={`grid gap-6 ${status === 'idle' ? 'mt-12' : 'mt-6'} border-t border-[#d8ccb6] bg-[linear-gradient(180deg,#faf4e8_0%,#f6efdf_100%)] px-1 py-5 text-[13px] text-[#5a4843] md:grid-cols-3`}>
          <FooterItem
            icon={LockKeyhole}
            title="VERIFIED. TRUSTED. RESPECTED."
            detail="Every credential. Every time."
          />
          <FooterItem
            icon={Landmark}
            title="CareerSense"
            detail="Centre for Advanced Professional Certification"
          />
          <FooterItem
            icon={Globe2}
            title="Learn more about our verification process at"
            detail="careersense.academy/verify"
            highlightDetail
          />
        </footer>
      </main>
    </div>
  );
}

function CertificatePreview({ result }: { result: any }) {
  const qrCodeUrl = buildQrCodeImageUrl(result.verifyUrl);

  return (
    <div className="w-full rounded-[6px] border border-[#ddcfb2] bg-[#fffaf0] p-2 shadow-[0_12px_30px_rgba(98,74,30,0.06)]">
      {/* Desktop / Laptop Aspect-Scaled Certificate (sm and larger) */}
      <div className="hidden sm:flex items-start justify-center overflow-hidden rounded-[3px] border border-[#e2d3b1] bg-[#fff8ed] px-2 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4">
        <div className="relative aspect-[1.414/1] w-full sm:w-[520px] lg:w-[640px] xl:w-[770px]">
          <div className="absolute left-1/2 top-0 w-[1180px] max-w-none origin-top -translate-x-1/2 scale-[0.441] lg:scale-[0.542] xl:scale-[0.653]">
            <div className="relative aspect-[1.414/1] overflow-hidden bg-[#FCFAF6] p-8 text-slate-900 select-none">
              <div className="relative flex h-full flex-col justify-between border-4 border-[#C5A880] bg-[#FCFAF6] p-8 shadow-inner">
                {/* Background Watermark */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={csWatermark}
                    alt=""
                    aria-hidden="true"
                    className="h-auto w-[66%] max-w-none select-none opacity-[0.08] mix-blend-multiply [filter:invert(1)_grayscale(1)_contrast(1.15)]"
                  />
                </div>

                {/* Corner Ornaments */}
                <div className="pointer-events-none absolute inset-1.5 border border-[#C5A880]/40" />
                <div className="absolute left-2.5 top-2.5 h-6 w-6 border-l-2 border-t-2 border-[#0A1D37]/80" />
                <div className="absolute right-2.5 top-2.5 h-6 w-6 border-r-2 border-t-2 border-[#0A1D37]/80" />
                <div className="absolute bottom-2.5 left-2.5 h-6 w-6 border-b-2 border-l-2 border-[#0A1D37]/80" />
                <div className="absolute bottom-2.5 right-2.5 h-6 w-6 border-b-2 border-r-2 border-[#0A1D37]/80" />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center p-1">
                      <img src="/Logo.png" alt="CareerSense official mark" className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold uppercase leading-tight tracking-[0.1em] text-[#0A1D37]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                        CareerSense Academy
                      </div>
                      <div className="mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.25em] text-slate-500">
                        Board of Verified Skills & Credentials
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[34%] rounded-sm border border-[#C5A880]/20 bg-white/70 p-2 text-right">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Document Control</div>
                    <div className="mt-1 break-words text-xs font-bold leading-tight text-slate-800">ID: {result.verifiedId}</div>
                    <div className="mt-0.5 text-[9px] font-semibold tracking-wider text-[#C5A880]">Secure Transcript Verified</div>
                  </div>
                </div>

                {/* Body */}
                <div className="relative z-10 my-auto flex flex-col items-center px-10 text-center">
                  <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A880]">
                    Upon recommendation of the executive evaluation engine
                  </div>

                  <h1 className="text-2xl lg:text-3xl font-normal leading-tight tracking-wide text-[#0A1D37]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    This Certificate of Proficiency is awarded to
                  </h1>

                  <div className="my-5 w-full max-w-2xl">
                    <h2 className="border-y-2 border-[#C5A880]/30 bg-[#C5A880]/5 py-3 text-4xl lg:text-5xl font-bold italic leading-none tracking-tight text-[#0A1D37]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                      {result.student || result.studentName}
                    </h2>
                  </div>

                  <p className="mt-2 text-[14px] font-medium leading-relaxed text-slate-700 max-w-2xl">
                    who has successfully demonstrated objective industry capability and completed all technical evaluation parameters benchmarked for verified competence in
                  </p>

                  <h3 className="mt-4 text-2xl lg:text-3xl font-bold uppercase leading-tight tracking-[0.04em] text-[#0A1D37]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {result.skill || result.course}
                  </h3>

                  <div className="mt-8 grid w-full max-w-3xl grid-cols-3 divide-x divide-slate-200/80 border border-[#C5A880]/30 bg-white shadow-sm">
                    <MetricCell label="Performance Status" value={result.score} />
                    <MetricCell label="Confidence" value={result.reportCard?.confidenceScore ? `${result.reportCard.confidenceScore}%` : 'N/A'} />
                    <MetricCell label="Trust Score" value={result.proctoringSummary?.trustScore ? `${result.proctoringSummary.trustScore}%` : 'N/A'} />
                  </div>
                </div>

                {/* Footer - 4 Column Layout */}
                <div className="relative z-10 grid grid-cols-4 items-end gap-5 border-t border-[#C5A880]/40 pt-8">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Date of Validation</div>
                    <div className="mt-1 text-base font-bold text-slate-900">{result.issueDate}</div>
                    <div className="mt-0.5 text-[11px] text-slate-500">Academic Registry Ledger</div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="relative flex h-28 w-28 items-center justify-center">
                      <img src={csSeal} alt="CareerSense official seal" className="h-30 w-30 object-contain" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center">
                    <img src={qrCodeUrl} alt="Verification QR code" className="h-24 w-24 rounded-md" />
                  </div>

                  <div className="text-center">
                    <div className="flex h-12 items-end justify-center">
                      <img src={shagunSignature} alt="Authorized Signature" className="h-20 w-auto object-contain pb-1 mix-blend-multiply" />
                    </div>
                    <div className="border-t border-slate-400/60 pt-1.5">
                      <div className="text-sm font-bold text-[#0A1D37]">Shagun Nagpal</div>
                      <div className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">CEO / Director of Assessments</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive View (under sm breakpoint) */}
      <div className="block sm:hidden w-full rounded-[3px] border border-[#e2d3b1] bg-[#fff8ed] p-1.5">
        <div className="relative w-full bg-[#FCFAF6] p-2 text-slate-900 select-none rounded-lg shadow-sm border border-[#C5A880]/30">
          <div className="relative flex flex-col justify-between border-2 border-[#C5A880] bg-[#FCFAF6] p-2 shadow-inner">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
              <img
                src={csWatermark}
                alt=""
                aria-hidden="true"
                className="h-auto w-[84%] max-w-none select-none opacity-[0.06] mix-blend-multiply [filter:invert(1)_grayscale(1)_contrast(1.15)]"
              />
            </div>

            <div className="pointer-events-none absolute inset-1 border border-[#C5A880]/40" />
            <div className="absolute left-1.5 top-1.5 h-3 w-3 border-l-2 border-t-2 border-[#0A1D37]/80" />
            <div className="absolute right-1.5 top-1.5 h-3 w-3 border-r-2 border-t-2 border-[#0A1D37]/80" />
            <div className="absolute bottom-1.5 left-1.5 h-3 w-3 border-b-2 border-l-2 border-[#0A1D37]/80" />
            <div className="absolute bottom-1.5 right-1.5 h-3 w-3 border-b-2 border-r-2 border-[#0A1D37]/80" />

            {/* Header */}
            <div className="relative z-10 flex items-start justify-between gap-1.5">
              <div className="flex min-w-0 items-center gap-1.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <img src="/Logo.png" alt="CareerSense official mark" className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase leading-tight tracking-[0.04em] text-[#0A1D37]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    CareerSense Academy
                  </div>
                  <div className="mt-0.5 text-[5px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Board of Verified Skills & Credentials
                  </div>
                </div>
              </div>

              <div className="max-w-[45%] rounded-sm border border-[#C5A880]/20 bg-white/70 p-1 text-right">
                <div className="text-[5px] font-bold uppercase tracking-[0.1em] text-slate-500">Document Control</div>
                <div className="mt-0.5 break-words text-[6.5px] font-bold leading-tight text-slate-800">ID: {result.verifiedId}</div>
                <div className="mt-0.5 text-[4.5px] font-semibold tracking-[0.06em] text-[#C5A880]">Secure Transcript Verified</div>
              </div>
            </div>

            {/* Body */}
            <div className="relative z-10 my-2 flex flex-col items-center px-1 text-center">
              <div className="mb-1 text-[6px] font-bold uppercase tracking-[0.14em] text-[#C5A880]">
                Upon recommendation of the executive evaluation engine
              </div>

              <h1 className="text-[10px] font-normal leading-tight tracking-wide text-[#0A1D37]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                This Certificate of Proficiency is awarded to
              </h1>

              <div className="my-1.5 w-full max-w-2xl">
                <h2 className="border-y border-[#C5A880]/30 bg-[#C5A880]/5 py-1 text-xs font-bold italic leading-none tracking-tight text-[#0A1D37]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {result.student || result.studentName}
                </h2>
              </div>

              <p className="mt-0.5 text-[7px] font-medium leading-relaxed text-slate-700">
                who has successfully demonstrated objective industry capability and completed all technical evaluation parameters benchmarked for verified competence in
              </p>

              <h3 className="mt-1 text-[10px] font-bold uppercase leading-tight tracking-[0.04em] text-[#0A1D37]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                {result.skill || result.course}
              </h3>

              <div className="mt-2 grid w-full grid-cols-3 divide-x divide-slate-200/80 border border-[#C5A880]/30 bg-white shadow-sm">
                <div className="px-1 py-1 text-center">
                  <div className="text-[5.5px] font-bold uppercase tracking-wider text-[#C5A880]">Performance Status</div>
                  <div className="mt-0.5 text-[9px] font-bold text-[#0A1D37]">{result.score}</div>
                </div>
                <div className="px-1 py-1 text-center">
                  <div className="text-[5.5px] font-bold uppercase tracking-wider text-[#C5A880]">Confidence</div>
                  <div className="mt-0.5 text-[9px] font-bold text-[#0A1D37]">{result.reportCard?.confidenceScore ? `${result.reportCard.confidenceScore}%` : 'N/A'}</div>
                </div>
                <div className="px-1 py-1 text-center">
                  <div className="text-[5.5px] font-bold uppercase tracking-wider text-[#C5A880]">Trust Score</div>
                  <div className="mt-0.5 text-[9px] font-bold text-[#0A1D37]">{result.proctoringSummary?.trustScore ? `${result.proctoringSummary.trustScore}%` : 'N/A'}</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 grid grid-cols-4 items-end gap-x-1 border-t border-[#C5A880]/40 pt-2">
              <div className="min-w-0 text-left">
                <div className="text-[4.5px] font-bold uppercase tracking-[0.08em] text-slate-500 truncate">Date of Validation</div>
                <div className="mt-0.5 text-[6.5px] font-bold text-slate-900 truncate">{result.issueDate}</div>
                <div className="mt-0.5 text-[4px] text-slate-500 truncate">Academic Registry</div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative flex h-7 w-7 items-center justify-center">
                  <img src={csSeal} alt="CareerSense official seal" className="h-8 w-8 object-contain" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <img src={qrCodeUrl} alt="Verification QR code" className="h-6 w-6 rounded-md" />
              </div>

              <div className="min-w-0 text-center">
                <div className="flex h-4 items-end justify-center">
                  <img src={shagunSignature} alt="Authorized Signature" className="h-5 w-auto object-contain pb-0.5 mix-blend-multiply" />
                </div>
                <div className="border-t border-slate-400/60 pt-0.5">
                  <div className="text-[5.5px] font-bold text-[#0A1D37] truncate">Shagun Nagpal</div>
                  <div className="mt-0.5 text-[3.8px] font-bold uppercase tracking-tighter text-slate-500 truncate">CEO / Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustItem({
  icon: Icon,
  title,
  detail,
  bordered,
}: {
  icon: LucideIcon;
  title: string;
  detail: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex items-start justify-center gap-4 text-left ${bordered ? 'md:border-l md:border-[#d4c6a9] md:pl-10' : ''
        }`}
    >
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#604638]">
        <Icon className="h-6 w-6 stroke-[1.5]" />
      </div>

      <div className="min-w-0 max-w-none">
        <p className="text-[10.5px] font-semibold tracking-[0.13em] text-[#3d2421] md:text-[10px] lg:text-[10.5px]">
          {title}
        </p>
        <p className="mt-1 text-[13px] leading-[1.45] text-[#6b5a55] lg:text-[13.5px]">{detail}</p>
      </div>
    </div>
  );
}

function CredentialRow({
  icon: Icon,
  label,
  value,
  helper,
  success = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  helper?: string;
  success?: boolean;
}) {
  return (
    <div className="flex gap-4 rounded-[4px] border border-[#eadfcb] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e2d4bd] bg-[#fbf8f2] text-[#8b7e75]">
        <Icon className="h-4 w-4 stroke-[1.5]" />
      </div>

      <div className="min-w-0 flex-1 pt-0.5">
        {!success ? (
          <p className="text-[10px] font-medium uppercase tracking-widest text-[#8b7e75]">
            {label}
          </p>
        ) : null}

        {success ? (
          <div className="mt-1.5 flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#8b7e75]">
                {label}
              </p>
              <div className="inline-flex w-fit items-center gap-1 rounded bg-[#d4e9d1] px-2 py-0.5 text-[11px] font-semibold tracking-wider text-[#29562a]">
                {value}
              </div>
            </div>
            {helper && <p className="text-[11.5px] leading-snug text-[#73635d]">{helper}</p>}
          </div>
        ) : (
          <p className="mt-1 font-serif text-[14px] leading-snug text-[#2a1714]">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

function MetricCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-3">
      <div className="text-[8px] font-bold uppercase tracking-wider text-[#C5A880]">{label}</div>
      <div className="mt-1 text-sm font-bold text-[#0A1D37] sm:text-base">{value}</div>
    </div>
  );
}


function FooterItem({
  icon: Icon,
  title,
  detail,
  highlightDetail,
}: {
  icon: LucideIcon;
  title: string;
  detail: string;
  highlightDetail?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2a1714] text-[#2a1714]">
        <Icon className="h-4 w-4 stroke-[1.5]" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[12.5px] font-medium text-[#2a1714]">{title}</p>
        {highlightDetail ? (
          <p className="text-[12px] text-[#8c2a2a]">{detail}</p>
        ) : (
          <p className="text-[12px] text-[#6b5a55]">{detail}</p>
        )}
      </div>
    </div>
  );
}
