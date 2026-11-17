/* global process */

export const siteUrl = String(
  (typeof process !== 'undefined' && (process.env?.SITE_URL || process.env?.VITE_SITE_URL)) ||
  'https://certifi.careersenseai.com'
).replace(/\/$/, '');

export const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

export const escapeJson = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');

// ============================================================
// EXACT PRODUCTION LIGHT NAVBAR (NO RIGHTMOST BUTTONS)
// ============================================================
export const getCertifiNavbarHtml = () => `
  <header class="relative z-50 w-full border-b border-slate-200 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
    <div class="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 py-2 sm:px-8">
      <a href="/" class="flex items-center gap-2 text-left sm:gap-2.5">
        <img src="/Logo.png" alt="CareerSense logo" class="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11" />
        <span class="leading-none">
          <span class="block text-lg font-black tracking-tight text-slate-950 sm:text-xl">
            Career<span class="text-teal-600">Sense</span>
          </span>
          <span class="mt-1 block text-[7px] font-black uppercase tracking-[0.16em] text-teal-700">
            Skills Validation &amp; Certification
          </span>
        </span>
      </a>

      <!-- Clean nav links matching active React header -->
      <nav class="hidden items-center gap-7 text-[13px] font-semibold text-slate-600 md:flex">
        <a href="/#process" class="transition-colors hover:text-teal-700">How It Works</a>
        <a href="/#why-us" class="transition-colors hover:text-teal-700">Why Us</a>
        <a href="/#roles" class="transition-colors hover:text-teal-700">Explore Skills</a>
        <a href="/#certificate-verify" class="transition-colors hover:text-teal-700">The Certificate</a>
        <a href="/#faq" class="transition-colors hover:text-teal-700">FAQs</a>
        <a href="https://careersenseai.com/pricing" class="transition-colors hover:text-teal-700">Pricing</a>
      </nav>

      <!-- Clean right section without extra buttons per user request -->
      <div class="flex items-center gap-3"></div>
    </div>
  </header>
`;

// ============================================================
// EXACT /VERIFY NAVBAR (DARK NAVY - MATCHES VerifyCertificate.tsx)
// ============================================================
export const getVerifyNavbarHtml = () => `
  <nav class="border-b border-[#4a6285] bg-[#01142e] px-4 py-2 text-[#fff9ec] shadow-[0_10px_26px_rgba(13,28,49,0.28)] sm:px-6">
    <div class="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
      <a href="/" class="group flex items-center gap-2 text-left sm:gap-2.5">
        <img src="/Logo.png" alt="CareerSense Academy crest" class="h-10 w-10 shrink-0 translate-y-1 object-contain sm:h-11 sm:w-11" />
        <div class="leading-none">
          <div class="text-lg font-black tracking-tight text-slate-100 sm:text-xl">
            Career<span class="text-teal-300">Sense</span>
          </div>
          <div class="mt-1 text-[6px] font-black uppercase tracking-[0.14em] text-white sm:tracking-[0.16em]">
            Centre for Professional Certification
          </div>
        </div>
      </a>
    </div>
  </nav>
`;

export const getCertifiFooterHtml = () => `
  <footer class="border-t border-slate-200 bg-white px-5 py-12 sm:px-8 text-slate-700">
    <div class="mx-auto grid max-w-[1400px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div class="flex items-center gap-2">
          <img src="/Logo.png" alt="CareerSense" class="h-8 w-8 object-contain" />
          <span class="text-lg font-black text-slate-950">Career<span class="text-teal-600">Sense</span></span>
        </div>
        <p class="mt-3 text-xs leading-relaxed text-slate-600">
          AI-proctored skill certifications and verified credentials helping professionals prove job readiness to employers worldwide.
        </p>
      </div>
      <div>
        <h4 class="text-xs font-black uppercase tracking-wider text-slate-900">Certifications &amp; Tracks</h4>
        <ul class="mt-3 space-y-2 text-xs">
          <li><a href="/dashboard" class="hover:text-teal-600">Software Engineering</a></li>
          <li><a href="/dashboard" class="hover:text-teal-600">Data Analytics &amp; SQL</a></li>
          <li><a href="/dashboard" class="hover:text-teal-600">Full Stack Web Dev</a></li>
          <li><a href="/verify" class="hover:text-teal-600">Official Verification Portal</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs font-black uppercase tracking-wider text-slate-900">CareerSense Tools</h4>
        <ul class="mt-3 space-y-2 text-xs">
          <li><a href="https://resume.careersenseai.com/" class="hover:text-teal-600">AI Resume Builder</a></li>
          <li><a href="https://ats.careersenseai.com/" class="hover:text-teal-600">ATS Resume Checker</a></li>
          <li><a href="https://coverletter.careersenseai.com/" class="hover:text-teal-600">AI Cover Letter Builder</a></li>
          <li><a href="https://careersenseai.com/pricing" class="hover:text-teal-600">Pricing &amp; Plans</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs font-black uppercase tracking-wider text-slate-900">Verification Trust</h4>
        <p class="mt-3 text-xs leading-relaxed text-slate-600">
          Every certificate is cryptographically signed with a unique credential ID searchable by hiring teams globally.
        </p>
      </div>
    </div>
    <div class="mx-auto mt-8 max-w-[1400px] border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
      &copy; 2026 CareerSense AI. All rights reserved.
    </div>
  </footer>
`;

export const getVerifyFooterHtml = () => `
  <footer class="border-t border-[#4a6285]/40 bg-[#01142e] px-5 py-12 sm:px-8 text-slate-300 font-sans">
    <div class="mx-auto grid max-w-[1320px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div class="flex items-center gap-2">
          <img src="/Logo.png" alt="CareerSense" class="h-8 w-8 object-contain" />
          <span class="text-lg font-black text-white">Career<span class="text-teal-300">Sense</span></span>
        </div>
        <p class="mt-3 text-xs leading-relaxed text-slate-400">
          Official Verification Registry of CareerSense Academy. Validating certificates for global employers.
        </p>
      </div>
      <div>
        <h4 class="text-xs font-black uppercase tracking-wider text-amber-300">Verification Services</h4>
        <ul class="mt-3 space-y-2 text-xs text-slate-400">
          <li><a href="/verify" class="hover:text-white">Verify Certificate ID</a></li>
          <li><a href="/" class="hover:text-white">Explore Certification Tracks</a></li>
          <li><a href="https://careersenseai.com/partner-program" class="hover:text-white">Employer Partner Registry</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs font-black uppercase tracking-wider text-amber-300">Career Ecosystem</h4>
        <ul class="mt-3 space-y-2 text-xs text-slate-400">
          <li><a href="https://resume.careersenseai.com/" class="hover:text-white">AI Resume Builder</a></li>
          <li><a href="https://ats.careersenseai.com/" class="hover:text-white">ATS Score Checker</a></li>
          <li><a href="https://coverletter.careersenseai.com/" class="hover:text-white">Cover Letter Generator</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs font-black uppercase tracking-wider text-amber-300">Integrity Standards</h4>
        <p class="mt-3 text-xs leading-relaxed text-slate-400">
          Cryptographically hashed certificates, AI proctoring telemetry, and verifiable digital badges.
        </p>
      </div>
    </div>
    <div class="mx-auto mt-8 max-w-[1320px] border-t border-white/10 pt-6 text-center text-xs text-slate-400">
      &copy; 2026 CareerSense Academy. All rights reserved.
    </div>
  </footer>
`;

export const pages = [
  {
    path: '/',
    title: 'CareerSense Skill Certification | Verifiable AI Skill Badges & Certificates',
    description: 'Validate your technical and professional skills with CareerSense AI-proctored assessments. Earn verifiable certifications, badges, and shareable credentials.',
    keywords: 'skill certification, verifiable certificate, AI skill assessment, tech certification, skill badge, CareerSense certifi',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          name: 'CareerSense Skill Certification',
          url: siteUrl,
          description: 'Validate your technical and professional skills with CareerSense AI-proctored assessments.',
          publisher: {
            '@type': 'Organization',
            name: 'CareerSense',
            url: 'https://careersenseai.com',
            logo: `${siteUrl}/Logo.png`,
          },
        },
        {
          '@type': 'WebApplication',
          '@id': `${siteUrl}/#webapp`,
          name: 'CareerSense Skill Certification',
          url: siteUrl,
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          browserRequirements: 'Requires JavaScript. Requires HTML5.',
          description: 'Validate your technical and professional skills with CareerSense AI-proctored assessments. Earn verifiable certifications, badges, and shareable credentials.',
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD',
            category: 'Free',
          },
          featureList: [
            'AI-Proctored Technical & Professional Skill Assessments',
            'Instant Performance Scoring & Diagnostic Feedback',
            'Cryptographically Verifiable Digital Certificates',
            'Shareable LinkedIn Badges & Credential IDs',
            'Personalized Learning Paths & Growth Recommendations',
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': `${siteUrl}/#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How does CareerSense Skill Certification work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Candidates take interactive, AI-proctored assessments in their chosen tech or business domain. The platform rigorously tests problem-solving, code quality, and practical knowledge to award verifiable credentials.',
              },
            },
            {
              '@type': 'Question',
              name: 'How can employers verify a CareerSense certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Employers and recruiters can visit https://certifi.careersenseai.com/verify and enter the certificate ID to instantly inspect the candidate verification record, score, and issue date.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I add CareerSense certificates to LinkedIn?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. All certificates come with 1-click LinkedIn Add to Profile integration and high-resolution PDF download.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is CareerSense Skill Certification free to start?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, candidates can start practice sessions and take baseline skill certification assessments on CareerSense.',
              },
            },
          ],
        },
      ],
    },
  },
  {
    path: '/verify',
    title: 'Verify CareerSense Certificate & Credential Authenticity | Certifi',
    description: 'Verify the authenticity of CareerSense Academy certificates and skill badges. Enter certificate ID to inspect student name, domain, score, and issue date.',
    keywords: 'verify certificate, certificate verification, credential authenticity, skill badge verification, CareerSense certifi',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          name: 'CareerSense Official Credential Verification Portal',
          description: 'Verify the authenticity of CareerSense Academy certificates and skill badges. Enter certificate ID to inspect candidate name, skill domain, score, and issue date.',
          url: `${siteUrl}/verify`,
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do employers verify a CareerSense certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Employers can navigate to https://certifi.careersenseai.com/verify, enter the certificate ID found on the candidate credential or resume, and instantly inspect the candidate name, score, issue date, and validation status.',
              },
            },
            {
              '@type': 'Question',
              name: 'What information is displayed on the verification record?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The verified record displays candidate name, certified skill program, official score percentage, date issued, unique certificate ID, and verification badge.',
              },
            },
            {
              '@type': 'Question',
              name: 'What should I do if a certificate is not found?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Double-check that the ID was entered correctly without extra spaces or symbols. If the issue persists, contact CareerSense support for direct verification.',
              },
            },
          ],
        },
      ],
    },
  },
];

export const renderPage = (baseHtml, page) => {
  const canonical = `${siteUrl}${page.path === '/' ? '/' : page.path}`;
  const headInject = `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="keywords" content="${escapeHtml(page.keywords)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="CareerSense" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonical}" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <style>body{margin:0;background-color:${page.path === '/verify' ? '#f6efe2' : '#f8fafc'};}</style>
    <script type="application/ld+json">${escapeJson(page.schema)}</script>`;

  let pageContent = '';

  if (page.path === '/') {
    // HOMEPAGE (EXACT CLONE OF ACTIVE REACT HomeHeroSection.tsx)
    pageContent = `
      ${getCertifiNavbarHtml()}
      <main class="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <!-- EXACT HERO SECTION MATCHING ACTIVE REACT UI -->
        <section class="relative overflow-hidden bg-white px-4 pb-12 pt-8 sm:px-6 sm:pt-10 md:pt-12 border-b border-slate-200">
          <div class="relative mx-auto grid min-h-[500px] max-w-[1400px] items-start gap-8 sm:gap-10 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
            <!-- LEFT CONTENT -->
            <div class="relative z-10 text-left">
              <h1 class="mb-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-5xl lg:text-[3.15rem]">
                Get <span class="text-teal-600">Verified</span><br />
                certified with evidence
              </h1>

              <p class="mb-6 max-w-[560px] text-base font-medium leading-[1.7] text-slate-700 lg:text-[1.02rem]">
                Certifi.AI turns technical assessments into verified proof of skill. Generate role-specific tests, evaluate real performance, and issue credentials people can trust.
              </p>

              <!-- 3 BUTTONS MATCHING SCREENSHOT -->
              <div class="mb-6 grid gap-3 sm:grid-cols-3">
                <a href="/dashboard" class="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700">
                  <span>Start Assessment</span>
                  <span class="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
                <a href="/verify" class="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-4 font-bold text-teal-700 shadow-sm transition hover:bg-teal-100">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <span>Check &amp; Verify</span>
                </a>
                <a href="#certificate-verify" class="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 font-bold text-slate-700 shadow-sm transition hover:bg-slate-50">
                  <span class="text-amber-500 font-bold">&#9733;</span>
                  <span>Sample Certificate</span>
                </a>
              </div>

              <!-- 3 FEATURE CARDS MATCHING SCREENSHOT -->
              <div class="mb-6 grid gap-3 sm:grid-cols-3">
                <div class="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 shadow-2xs">
                  <div class="flex items-center gap-2 text-teal-700 font-bold text-xs">
                    <span>&lt;/&gt;</span>
                    <h4>Skill Assessments</h4>
                  </div>
                  <p class="mt-1 text-[11px] text-slate-600 leading-normal">Adaptive coding and MCQ evaluations</p>
                </div>
                <div class="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 shadow-2xs">
                  <div class="flex items-center gap-2 text-teal-700 font-bold text-xs">
                    <span>&#128179;</span>
                    <h4>Verified Credentials</h4>
                  </div>
                  <p class="mt-1 text-[11px] text-slate-600 leading-normal">Instant certificates with public validation</p>
                </div>
                <div class="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 shadow-2xs">
                  <div class="flex items-center gap-2 text-teal-700 font-bold text-xs">
                    <span>&#128214;</span>
                    <h4>Learning Paths</h4>
                  </div>
                  <p class="mt-1 text-[11px] text-slate-600 leading-normal">AI roadmaps built from weak areas</p>
                </div>
              </div>

              <!-- STAT STRIP -->
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-slate-200/60 pt-5 text-slate-800">
                <div>
                  <p class="text-lg font-black text-slate-900 leading-none">15-30</p>
                  <p class="mt-1 text-[9px] font-semibold text-slate-500 leading-tight">Questions per assessment</p>
                </div>
                <div>
                  <p class="text-lg font-black text-teal-600 leading-none">80%</p>
                  <p class="mt-1 text-[9px] font-semibold text-slate-500 leading-tight">Score threshold for cert</p>
                </div>
                <div>
                  <p class="text-lg font-black text-slate-900 leading-none">Instant</p>
                  <p class="mt-1 text-[9px] font-semibold text-slate-500 leading-tight">Certificate Generation</p>
                </div>
                <div>
                  <p class="text-lg font-black text-teal-600 leading-none">Live</p>
                  <p class="mt-1 text-[9px] font-semibold text-slate-500 leading-tight">Certificate Verification</p>
                </div>
              </div>
            </div>

            <!-- RIGHT CONTENT: EXACT REPLICA OF ACTIVE REACT HeroCertificationPreview -->
            <div class="relative mx-auto w-full max-w-xl">
              <div class="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/60">
                <!-- RECORD HEADER -->
                <div class="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span class="text-[10px] font-extrabold uppercase tracking-widest text-teal-700 block">
                      LIVE CERTIFICATION RECORD
                    </span>
                    <h3 class="mt-1 text-lg font-black text-slate-950 flex items-center gap-2">
                      <span>React Professional Certification</span>
                      <span class="text-amber-400">&#10024;</span>
                    </h3>
                    <p class="mt-1 text-xs text-slate-500 leading-relaxed">
                      Assessment generation, secure exam activity, score evidence, and certificate issuance in one record.
                    </p>
                  </div>
                  <span class="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 border border-emerald-200">
                    Ready For Validation
                  </span>
                </div>

                <!-- 3 MINI METRICS -->
                <div class="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div class="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5">
                    <p class="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Assessment</p>
                    <p class="mt-0.5 text-sm font-black text-slate-900">15</p>
                    <p class="text-[8px] text-slate-400">Adaptive questions</p>
                  </div>
                  <div class="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5">
                    <p class="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Integrity</p>
                    <p class="mt-0.5 text-sm font-black text-teal-600">98%</p>
                    <p class="text-[8px] text-slate-400">Session checks</p>
                  </div>
                  <div class="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5">
                    <p class="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Verification</p>
                    <p class="mt-0.5 text-sm font-black text-slate-900">Live</p>
                    <p class="text-[8px] text-slate-400">Credential visible</p>
                  </div>
                </div>

                <!-- ENGINE PREVIEW BOX -->
                <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-center">
                  <div class="flex items-center justify-between text-[11px] font-bold text-slate-600 border-b border-slate-200/60 pb-2 mb-4">
                    <span>Certification Engine Preview</span>
                    <span class="text-teal-600 flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-teal-500"></span> Live Evidence</span>
                  </div>
                  <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-teal-500/30 border-t-teal-600 text-teal-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <p class="mt-3 text-sm font-extrabold text-slate-900">AI Scoring in Progress</p>
                  <p class="mt-1 text-xs text-slate-500">Evaluating code quality, speed, and concept coverage.</p>
                </div>

                <!-- BOTTOM OUTPUT -->
                <div class="mt-4 flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-xs text-white">
                  <div>
                    <p class="font-bold flex items-center gap-1.5">&#128737; Verification-ready output packaged</p>
                    <p class="text-[10px] text-slate-400">Assessment report, certificate status, and learning path included.</p>
                  </div>
                  <a href="/verify" class="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/20 transition">
                    View Sample &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- HIGHLIGHTS -->
        <section class="py-16 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
          <h2 class="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl text-center">
            How CareerSense Certification Empowers Careers
          </h2>
          <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div class="text-2xl mb-3">&#128187;</div>
              <h3 class="text-base font-bold text-slate-950">AI-Proctored Tests</h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">Rigorous assessments evaluating practical coding, problem solving, and architecture.</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div class="text-2xl mb-3">&#128274;</div>
              <h3 class="text-base font-bold text-slate-950">Tamper-Proof Registry</h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">Cryptographically validated IDs ensure complete trust with recruiters and hiring managers.</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div class="text-2xl mb-3">&#128202;</div>
              <h3 class="text-base font-bold text-slate-950">Detailed Score Reports</h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">Deep breakdown of domain strengths, percentile standing, and targeted growth modules.</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div class="text-2xl mb-3">&#127941;</div>
              <h3 class="text-base font-bold text-slate-950">LinkedIn Badges</h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">Add verified credentials to your LinkedIn profile with 1-click verification links.</p>
            </div>
          </div>
        </section>

        <!-- FAQS -->
        <section id="faq" class="py-16 px-4 sm:px-8 lg:px-12 max-w-[1200px] mx-auto border-t border-slate-200">
          <h2 class="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl text-center">
            Frequently Asked Questions
          </h2>
          <div class="mt-8 space-y-4">
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 class="text-sm font-bold text-slate-900">How does CareerSense Skill Certification work?</h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">Candidates take interactive, AI-proctored assessments in their chosen tech or business domain. The platform rigorously tests problem-solving, code quality, and practical knowledge to award verifiable credentials.</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 class="text-sm font-bold text-slate-900">How can employers verify a CareerSense certificate?</h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">Employers and recruiters can visit https://certifi.careersenseai.com/verify and enter the certificate ID to instantly inspect the candidate verification record, score, and issue date.</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 class="text-sm font-bold text-slate-900">Can I add CareerSense certificates to LinkedIn?</h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">Yes. All certificates come with 1-click LinkedIn Add to Profile integration and high-resolution PDF download.</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 class="text-sm font-bold text-slate-900">Is CareerSense Skill Certification free to start?</h3>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">Yes, candidates can start practice sessions and take baseline skill certification assessments on CareerSense.</p>
            </div>
          </div>
        </section>
      </main>
      ${getCertifiFooterHtml()}
    `;
  } else if (page.path === '/verify') {
    // EXACT /VERIFY PAGE (MATCHES VerifyCertificate.tsx)
    pageContent = `
      ${getVerifyNavbarHtml()}
      <main class="min-h-screen bg-[#f6efe2] font-sans text-[#2a1714]">
        <!-- HERO SECTION MATCHING VerifyCertificate.tsx -->
        <section class="relative overflow-hidden border-b border-[#dacbad]/60 bg-[#f8f2e7] py-12 px-4 sm:px-6">
          <div class="relative mx-auto max-w-[1320px]">
            <div class="mx-auto max-w-5xl text-center">
              <!-- Academic Crest Motif -->
              <div class="mb-4 flex items-center justify-center text-[#c79b49]">
                <div class="h-px w-24 bg-[#d8b66f]"></div>
                <div class="mx-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#d3a654] bg-[#fffaf0]/92 shadow-[0_0_0_1px_rgba(199,155,73,0.14)] text-lg font-serif">
                  &#127979;
                </div>
                <div class="h-px w-24 bg-[#d8b66f]"></div>
              </div>

              <h1 class="mt-2 font-serif text-[38px] sm:text-5xl lg:text-[3.1rem] font-medium tracking-[0.03em] text-[#4a1217]">
                VERIFY ACADEMIC CREDENTIALS
              </h1>

              <p class="mx-auto mt-4 max-w-2xl font-serif text-[15px] sm:text-[1.15rem] leading-relaxed text-[#5a4843]">
                Welcome to the official verification portal of CareerSense.<br />
                Validate the authenticity and status of certificates issued to our learners.
              </p>

              <!-- EXACT SEARCH BOX MATCHING REACT UI -->
              <div class="mx-auto mt-8 flex max-w-[960px] flex-col gap-2 rounded-[8px] border border-[#ceb78e] bg-[rgba(255,250,240,0.85)] p-2 shadow-md sm:flex-row sm:gap-0">
                <div class="flex min-h-[58px] flex-1 items-center gap-3 rounded-[6px] border border-[#eadbc0] bg-white px-5">
                  <svg class="h-5 w-5 text-[#23273b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <input type="text" placeholder="Enter Certificate ID or Credential Code (e.g. CSA-2026-XXXXX)" class="h-full w-full bg-transparent text-sm font-medium text-[#2a1714] placeholder:text-[#9f9688] focus:outline-none" />
                </div>
                <button type="button" class="flex min-h-[58px] items-center justify-center gap-3 rounded-[6px] border border-[#22324f] bg-[linear-gradient(180deg,#162746_0%,#101c36_100%)] px-8 font-serif text-[13px] font-semibold uppercase tracking-[0.11em] text-[#fffdf7] shadow-sm sm:min-w-[260px]">
                  <span>VERIFY CREDENTIAL</span>
                  <span>&rarr;</span>
                </button>
              </div>

              <!-- 3 TRUST HIGHLIGHTS -->
              <div class="mt-12 grid gap-4 sm:grid-cols-3 max-w-[960px] mx-auto text-left">
                <div class="rounded-xl border border-[#ceb78e]/60 bg-white/80 p-4 shadow-xs">
                  <h4 class="text-xs font-black uppercase tracking-wider text-[#4a1217]">SECURE REGISTRY VALIDATION</h4>
                  <p class="mt-1 text-xs text-[#5a4843]">Encrypted &amp; tamper-proof verification</p>
                </div>
                <div class="rounded-xl border border-[#ceb78e]/60 bg-white/80 p-4 shadow-xs">
                  <h4 class="text-xs font-black uppercase tracking-wider text-[#4a1217]">ASSESSMENT-BACKED CREDENTIAL</h4>
                  <p class="mt-1 text-xs text-[#5a4843]">Verified learning standards</p>
                </div>
                <div class="rounded-xl border border-[#ceb78e]/60 bg-white/80 p-4 shadow-xs">
                  <h4 class="text-xs font-black uppercase tracking-wider text-[#4a1217]">PUBLIC VERIFICATION</h4>
                  <p class="mt-1 text-xs text-[#5a4843]">Real-time status for employers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- VERIFICATION FAQS SECTION -->
        <section class="py-14 px-4 sm:px-6 max-w-[1020px] mx-auto">
          <h2 class="font-serif text-2xl font-bold text-[#4a1217] text-center">Frequently Asked Questions About Verification</h2>
          <div class="mt-8 space-y-4 font-serif text-slate-800">
            <div class="rounded-xl border border-[#ceb78e]/60 bg-white p-5 shadow-xs">
              <h3 class="text-sm font-bold text-[#4a1217]">How do employers verify a CareerSense certificate?</h3>
              <p class="mt-2 text-xs leading-relaxed text-[#5a4843]">Employers can navigate to https://certifi.careersenseai.com/verify, enter the certificate ID found on the candidate credential or resume, and instantly inspect the candidate name, score, issue date, and validation status.</p>
            </div>
            <div class="rounded-xl border border-[#ceb78e]/60 bg-white p-5 shadow-xs">
              <h3 class="text-sm font-bold text-[#4a1217]">What information is displayed on the verification record?</h3>
              <p class="mt-2 text-xs leading-relaxed text-[#5a4843]">The verified record displays candidate name, certified skill program, official score percentage, date issued, unique certificate ID, and verification badge.</p>
            </div>
            <div class="rounded-xl border border-[#ceb78e]/60 bg-white p-5 shadow-xs">
              <h3 class="text-sm font-bold text-[#4a1217]">What should I do if a certificate is not found?</h3>
              <p class="mt-2 text-xs leading-relaxed text-[#5a4843]">Double-check that the ID was entered correctly without extra spaces or symbols. If the issue persists, contact CareerSense support for direct verification.</p>
            </div>
          </div>
        </section>
      </main>
      ${getVerifyFooterHtml()}
    `;
  }

  let processed = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta name="description"[\s\S]*?>/i, '')
    .replace(/<meta name="keywords"[\s\S]*?>/i, '')
    .replace(/<meta name="robots"[\s\S]*?>/i, '')
    .replace(/<link rel="canonical"[\s\S]*?>/i, '')
    .replace(/<meta property="og:[\s\S]*?>/gi, '')
    .replace(/<meta name="twitter:[\s\S]*?>/gi, '')
    .replace(/<meta property="twitter:[\s\S]*?>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

  processed = processed.replace('</head>', `${headInject}\n  </head>`);

  // Ensure stylesheet link is at the very top of <head> to eliminate white flash
  const stylesheetMatch = processed.match(/<link rel="stylesheet"[^>]+>/);
  if (stylesheetMatch) {
    const stylesheetTag = stylesheetMatch[0];
    processed = processed.replace(stylesheetTag, '');
    processed = processed.replace('<head>', `<head>\n    ${stylesheetTag}`);
  }

  // Inject real pageContent directly into <div id="root">
  if (processed.includes('<div id="root"></div>')) {
    processed = processed.replace('<div id="root"></div>', `<div id="root">\n${pageContent}\n    </div>`);
  } else if (processed.includes('<div id="root">')) {
    processed = processed.replace(/<div id="root">[\s\S]*?<\/div>/i, `<div id="root">\n${pageContent}\n    </div>`);
  }

  return processed;
};
