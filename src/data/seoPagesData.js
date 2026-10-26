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
    body: `
      <span class="badge">CareerSense AI Workspace</span>
      <h1>CareerSense Verifiable Skill Certification</h1>
      <p>Prove your technical and professional capabilities with AI-proctored skill assessments, verifiable digital credentials, and shareable badges.</p>

      <h2>Key Highlights of CareerSense Certifications</h2>
      <ul>
        <li><strong>AI-Proctored Assessments:</strong> Rigorous, realistic challenges evaluating practical knowledge in software engineering, data science, AI, and product management.</li>
        <li><strong>Instant Verification System:</strong> Every credential includes a unique ID that recruiters can verify instantly at <a href="/verify">certifi.careersenseai.com/verify</a>.</li>
        <li><strong>Shareable Digital Badges:</strong> Showcase earned credentials directly on your LinkedIn profile, portfolio, and resume.</li>
        <li><strong>Personalized Growth Pathways:</strong> Detailed score reports highlight your exact strengths and suggest targeted practice modules to master growth areas.</li>
      </ul>

      <h2>How It Works in 3 Steps</h2>
      <ol>
        <li><strong>Select Your Skill Domain:</strong> Choose from technical and business assessment paths tailored to current industry standards.</li>
        <li><strong>Take the Assessment:</strong> Complete the interactive, timed assessment in a distraction-free testing environment.</li>
        <li><strong>Earn and Share Your Credential:</strong> Download your high-resolution certificate and share your verified badge with employers.</li>
      </ol>

      <h2>Frequently Asked Questions</h2>
      <div class="faq-item">
        <h3>How does CareerSense Skill Certification work?</h3>
        <p>Candidates take interactive, AI-proctored assessments in their chosen tech or business domain. The platform rigorously tests problem-solving, code quality, and practical knowledge to award verifiable credentials.</p>
      </div>
      <div class="faq-item">
        <h3>How can employers verify a CareerSense certificate?</h3>
        <p>Employers and recruiters can visit https://certifi.careersenseai.com/verify and enter the certificate ID to instantly inspect the candidate verification record, score, and issue date.</p>
      </div>
      <div class="faq-item">
        <h3>Can I add CareerSense certificates to LinkedIn?</h3>
        <p>Yes. All certificates come with 1-click LinkedIn Add to Profile integration and high-resolution PDF download.</p>
      </div>
      <div class="faq-item">
        <h3>Is CareerSense Skill Certification free to start?</h3>
        <p>Yes, candidates can start practice sessions and take baseline skill certification assessments on CareerSense.</p>
      </div>

      <h2>Explore the CareerSense AI Ecosystem</h2>
      <ul>
        <li><a href="https://resume.careersenseai.com/">Free AI Resume Builder</a> — Build ATS-compliant resumes with 60+ job-specific examples and templates.</li>
        <li><a href="https://ats.careersenseai.com/">ATS Resume Score Checker</a> — Scan your resume against job descriptions for instant match scores and keyword suggestions.</li>
        <li><a href="https://coverletter.careersenseai.com/">AI Cover Letter Builder</a> — Generate tailored executive cover letters calibrated to any job description.</li>
        <li><a href="https://careersenseai.com/">CareerSense Platform</a> — Unified career acceleration suite for tech professionals and executives.</li>
      </ul>`,
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
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Certifi Home', item: `${siteUrl}/` },
            { '@type': 'ListItem', position: 2, name: 'Verify Certificate', item: `${siteUrl}/verify` },
          ],
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
    body: `
      <nav><a href="/">Certifi Home</a> / Certificate Verification</nav>
      <span class="badge">Official Credential Verification</span>
      <h1>Official CareerSense Certificate &amp; Credential Verification</h1>
      <p>Instant, cryptographic verification for certificates and skill credentials issued by CareerSense Academy. Validated for employers, recruiters, and educational institutions worldwide.</p>

      <h2>How to Verify a CareerSense Certificate</h2>
      <ol>
        <li><strong>Locate Certificate ID:</strong> Find the unique Certificate ID printed at the bottom of the candidate credential or included in their digital verification link (e.g. CSA-ACDSML-YYYY-XXXXX or alphanumeric code).</li>
        <li><strong>Enter the ID:</strong> Type or paste the certificate ID into the verification search box at <a href="/verify">certifi.careersenseai.com/verify</a>.</li>
        <li><strong>Inspect Verification Record:</strong> Instantly view the candidate's verified name, course domain, proctored assessment score, issue date, and authenticity status.</li>
      </ol>

      <h2>Security &amp; Verification Standards</h2>
      <div class="card">
        <h3>Tamper-Proof Digital Registry</h3>
        <p>Every certificate issued by CareerSense is cryptographically hashed and indexed in our verifiable registry, preventing credential falsification or unauthorized modification.</p>
      </div>

      <div class="card">
        <h3>Direct LinkedIn Credential Sync</h3>
        <p>Candidates can link their verified certificate directly to their LinkedIn profile certifications, allowing hiring managers to confirm authenticity with a single click.</p>
      </div>

      <div class="card">
        <h3>Rigorous Assessment Proctoring</h3>
        <p>Certificates are awarded only after candidates achieve passing benchmark scores in timed, AI-proctored technical assessments that evaluate real-world problem solving.</p>
      </div>

      <h2>Frequently Asked Questions About Verification</h2>
      <div class="faq-item">
        <h3>How do employers verify a CareerSense certificate?</h3>
        <p>Employers can navigate to https://certifi.careersenseai.com/verify, enter the certificate ID found on the candidate credential or resume, and instantly inspect the candidate name, score, issue date, and validation status.</p>
      </div>
      <div class="faq-item">
        <h3>What information is displayed on the verification record?</h3>
        <p>The verified record displays candidate name, certified skill program, official score percentage, date issued, unique certificate ID, and verification badge.</p>
      </div>
      <div class="faq-item">
        <h3>What should I do if a certificate is not found?</h3>
        <p>Double-check that the ID was entered correctly without extra spaces or symbols. If the issue persists, contact CareerSense support for direct verification.</p>
      </div>

      <h2>Explore CareerSense AI Tools</h2>
      <ul>
        <li><a href="https://certifi.careersenseai.com/">CareerSense Skill Certification Home</a></li>
        <li><a href="https://resume.careersenseai.com/">Free AI Resume Builder</a></li>
        <li><a href="https://ats.careersenseai.com/">ATS Resume Score Checker</a></li>
        <li><a href="https://coverletter.careersenseai.com/">AI Cover Letter Builder</a></li>
        <li><a href="https://careersenseai.com/">CareerSense Main Platform</a></li>
      </ul>`,
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
    <style>@keyframes cs-spin{to{transform:rotate(360deg)}}body{margin:0;background-color:#f8fafc;}</style>
    <script type="application/ld+json">${escapeJson(page.schema)}</script>`;

  const prerenderNoscript = `
  <noscript>
    <style>
      #root { display: none !important; }
      .cs-seo-fallback {
        max-width: 960px;
        margin: 40px auto;
        padding: 24px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #071426;
        line-height: 1.6;
      }
      .cs-seo-fallback h1 { font-size: 30px; font-weight: 700; color: #071426; margin-bottom: 16px; }
      .cs-seo-fallback h2 { font-size: 22px; font-weight: 600; color: #0284c7; margin-top: 28px; margin-bottom: 12px; }
      .cs-seo-fallback h3 { font-size: 17px; font-weight: 600; color: #071426; margin-top: 18px; margin-bottom: 6px; }
      .cs-seo-fallback p { color: #475569; margin-bottom: 16px; font-size: 16px; }
      .cs-seo-fallback a { color: #0284c7; font-weight: 600; text-decoration: underline; }
      .cs-seo-fallback ul, .cs-seo-fallback ol { padding-left: 22px; margin-bottom: 20px; }
      .cs-seo-fallback li { margin-bottom: 8px; color: #334155; }
      .cs-seo-fallback .badge { display: inline-block; background: #e0f2fe; color: #0369a1; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; margin-bottom: 12px; }
      .cs-seo-fallback .card { border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin-bottom: 14px; background: #F8FAFC; }
      .cs-seo-fallback .faq-item { border-bottom: 1px solid #E2E8F0; padding-bottom: 14px; margin-bottom: 14px; }
      .cs-seo-fallback nav { margin-bottom: 20px; font-size: 14px; color: #64748B; }
      .cs-seo-fallback nav a { color: #0284c7; text-decoration: none; }
    </style>
    <div class="cs-seo-fallback">
      ${page.body}
    </div>
  </noscript>`;

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

  if (processed.includes('href="/vite.svg"')) {
    processed = processed.replace('href="/vite.svg"', 'href="/favicon.svg"');
  }

  processed = processed.replace('</head>', `${headInject}\n  </head>`);

  if (processed.includes('<noscript>')) {
    processed = processed.replace(/<noscript>[\s\S]*?<\/noscript>/i, prerenderNoscript);
  } else if (processed.includes('</div>')) {
    processed = processed.replace(/(<div id="root">[\s\S]*?<\/div>)/i, `$1\n${prerenderNoscript}`);
  }

  return processed;
};
