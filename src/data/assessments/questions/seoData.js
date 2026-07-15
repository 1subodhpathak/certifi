import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const seoData = {
  id: ASSESSMENT_TYPES.seo,
  title: "SEO Strategy & Technical Audit Professional Certification",
  shortTitle: "SEO",
  category: "Marketing",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "On-page SEO, technical SEO, search intent, keyword strategy, content quality, internal linking, crawlability, Core Web Vitals, backlinks, local SEO, analytics, and SEO audit judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "se-01",
      type: "mcq",
      title: "Core Concept",
      prompt: "What does \"SEO\" stand for?",
      options: ["Search Engine Optimization", "Social Engagement Office", "Single Entry Order", "Systematic Entry Optimization"],
      correctIndex: 0,
      explanation: "SEO is the practice of increasing organic traffic from search engines."
    },
    {
      id: "se-02",
      type: "mcq",
      title: "On-Page",
      prompt: "Which HTML tag is considered the most important for on-page SEO?",
      options: ["<title>", "<meta>", "<h1>", "<div>"],
      correctIndex: 0,
      explanation: "The title tag tells search engines and users exactly what the page is about."
    },
    {
      id: "se-03",
      type: "mcq",
      title: "Technical SEO",
      prompt: "What is a \"Sitemap.xml\" used for?",
      options: ["To design the site", "To help search engines crawl and index your website's pages", "To show users where to go", "For security"],
      correctIndex: 1,
      explanation: "It is a roadmap of your site for search engine bots. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-04",
      type: "mcq",
      title: "Backlinks",
      prompt: "What is an \"External Backlink\"?",
      options: ["A link to another site", "A link from another website to your website", "A link between two pages on your site", "A social media share"],
      correctIndex: 1,
      explanation: "Backlinks are a major ranking factor representing \"votes of confidence\"."
    },
    {
      id: "se-05",
      type: "mcq",
      title: "Keywords",
      prompt: "What is a \"Long-Tail Keyword\"?",
      options: ["A very long word", "Specific, low-volume search phrases that are often easier to rank for", "A popular keyword", "A keyword in the URL"],
      correctIndex: 1,
      explanation: "Example: \"best vegan dog food for puppies\" vs \"dog food\". This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-06",
      type: "mcq",
      title: "Robots.txt",
      prompt: "What is the purpose of the robots.txt file?",
      options: ["To block hackers", "To give instructions to search engine crawlers on which pages to index or ignore", "To speed up the site", "To store passwords"],
      correctIndex: 1,
      explanation: "It manages \"crawl budget\" by preventing bots from visiting useless pages."
    },
    {
      id: "se-07",
      type: "mcq",
      title: "Alt Text",
      prompt: "Why is \"Alt Text\" important for SEO?",
      options: ["It styles images", "It helps search engines understand what an image is and improves accessibility", "It makes images load faster", "It adds captions"],
      correctIndex: 1,
      explanation: "Search engines can't \"see\" images like humans do. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-08",
      type: "mcq",
      title: "Authority",
      prompt: "What is \"Domain Authority\" (DA)?",
      options: ["A legal term", "A metric (often by Moz/Ahrefs) predicting how well a website will rank", "The cost of a domain", "The age of a domain"],
      correctIndex: 1,
      explanation: "DA is a relative score based on backlink profile strength. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-09",
      type: "mcq",
      title: "Local SEO",
      prompt: "Which tool is essential for Local SEO?",
      options: ["Google Search Console", "Google Business Profile", "Google Analytics", "WordPress"],
      correctIndex: 1,
      explanation: "Google Business Profile manages your appearance in Google Maps and local search."
    },
    {
      id: "se-10",
      type: "mcq",
      title: "Core Web Vitals",
      prompt: "What are \"Core Web Vitals\"?",
      options: ["Health metrics", "A set of metrics that measure user experience (loading, interactivity, visual stability)", "A type of keyword", "Backlink quality scores"],
      correctIndex: 1,
      explanation: "LCP, FID, and CLS are part of Google's ranking algorithm. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-11",
      type: "mcq",
      title: "Canonical Tags",
      prompt: "What is a \"Canonical Tag\" (rel=\"canonical\") used for?",
      options: ["To bold text", "To tell search engines which version of a duplicate page is the \"master\" version", "To redirect users", "To link to the home page"],
      correctIndex: 1,
      explanation: "Prevents duplicate content issues. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-12",
      type: "mcq",
      title: "Search Console",
      prompt: "What is \"Google Search Console\" used for?",
      options: ["Writing blogs", "Monitoring site performance, indexing status, and search traffic", "Creating ads", "Editing the site"],
      correctIndex: 1,
      explanation: "Essential for seeing which queries bring users to your site. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-13",
      type: "mcq",
      title: "CTR",
      prompt: "What is \"Click-Through Rate\" (CTR)?",
      options: ["Number of sales", "The percentage of people who clicked your link after seeing it in search results", "Bounce rate", "Time on site"],
      correctIndex: 1,
      explanation: "High CTR signals to Google that your result is relevant. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-14",
      type: "mcq",
      title: "Structured Data",
      prompt: "What is \"Schema Markup\"?",
      options: ["Site architecture", "A code format (JSON-LD) that provides explicit clues to search engines about the meaning of a page", "CSS styling", "JavaScript files"],
      correctIndex: 1,
      explanation: "Schema helps generate \"Rich Snippets\" (e.g., star ratings, recipes). This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-15",
      type: "mcq",
      title: "Internal Linking",
      prompt: "What is a benefit of Internal Linking?",
      options: ["Better CSS", "Distributing \"link juice\" and helping bots understand site hierarchy", "Reducing costs", "Security"],
      correctIndex: 1,
      explanation: "Strategic internal links keep users and bots on the site longer. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-16",
      type: "mcq",
      title: "404 Errors",
      prompt: "How do 404 errors affect SEO?",
      options: ["They don't", "They hurt user experience and can lead to lost crawl budget if too many exist", "They improve ranking", "They are required"],
      correctIndex: 1,
      explanation: "Fix broken links or redirect them to relevant pages. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-17",
      type: "mcq",
      title: "E-E-A-T",
      prompt: "What does \"E-E-A-T\" stand for in Google Quality Guidelines?",
      options: ["Easy, Efficient, Accurate, Timely", "Experience, Expertise, Authoritativeness, Trustworthiness", "Entry, Exit, Action, Track", "Every, Each, All, Together"],
      correctIndex: 1,
      explanation: "E-E-A-T is critical for YMYL (Your Money Your Life) content. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-18",
      type: "mcq",
      title: "Anchor Text",
      prompt: "What is \"Anchor Text\"?",
      options: ["The text at the bottom of a page", "The clickable text in a hyperlink", "The page title", "The URL path"],
      correctIndex: 1,
      explanation: "Descriptive anchor text helps search engines understand the linked page's topic."
    },
    {
      id: "se-19",
      type: "mcq",
      title: "Voice Search",
      prompt: "How does Voice Search SEO differ from traditional SEO?",
      options: ["No difference", "Focuses more on natural language and conversational, question-based queries", "Only works for mobile", "Only for local"],
      correctIndex: 1,
      explanation: "Voice queries are usually longer and phrased as full questions. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-20",
      type: "mcq",
      title: "SSL",
      prompt: "Is having an SSL certificate (HTTPS) a ranking factor?",
      options: ["No", "Yes", "Only for banks", "Only for e-commerce"],
      correctIndex: 1,
      explanation: "Google confirmed HTTPS as a lightweight ranking signal in 2014. This is a checked foundational concept for professional SEO work."
    },
    {
      id: "se-21",
      type: "mcq",
      title: "Search Intent Mapping",
      prompt: "In a professional SEO Strategy & Technical Audit scenario, what is the strongest approach when dealing with search intent mapping?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Search Intent Mapping requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "se-22",
      type: "mcq",
      title: "Title Tag Rewrite",
      prompt: "A team is making a decision about title tag rewrite. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about title tag rewrite balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "se-23",
      type: "mcq",
      title: "Meta Description Role",
      prompt: "Which signal suggests meta description role needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when meta description role could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "se-24",
      type: "mcq",
      title: "Canonical Tag Issue",
      prompt: "What is the best way to validate work involving canonical tag issue?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for canonical tag issue should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "se-25",
      type: "mcq",
      title: "Noindex Mistake",
      prompt: "In a professional SEO Strategy & Technical Audit scenario, what is the strongest approach when dealing with noindex mistake?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Noindex Mistake requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "se-26",
      type: "mcq",
      title: "Robots.Txt Limitation",
      prompt: "A team is making a decision about robots.txt limitation. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about robots.txt limitation balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "se-27",
      type: "mcq",
      title: "Xml Sitemap Hygiene",
      prompt: "Which signal suggests XML sitemap hygiene needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when XML sitemap hygiene could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "se-28",
      type: "mcq",
      title: "Internal Linking Strategy",
      prompt: "What is the best way to validate work involving internal linking strategy?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for internal linking strategy should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "se-29",
      type: "mcq",
      title: "Crawl Budget Prioritization",
      prompt: "In a professional SEO Strategy & Technical Audit scenario, what is the strongest approach when dealing with crawl budget prioritization?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Crawl Budget Prioritization requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "se-30",
      type: "mcq",
      title: "Core Web Vitals",
      prompt: "A team is making a decision about Core Web Vitals. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about Core Web Vitals balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "se-31",
      type: "mcq",
      title: "Schema Markup",
      prompt: "Which signal suggests schema markup needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when schema markup could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "se-32",
      type: "mcq",
      title: "Content Cannibalization",
      prompt: "What is the best way to validate work involving content cannibalization?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for content cannibalization should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "se-33",
      type: "mcq",
      title: "E-E-A-T Content Review",
      prompt: "In a professional SEO Strategy & Technical Audit scenario, what is the strongest approach when dealing with E-E-A-T content review?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "E-E-A-T Content Review requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "se-34",
      type: "mcq",
      title: "Backlink Quality",
      prompt: "A team is making a decision about backlink quality. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about backlink quality balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "se-35",
      type: "mcq",
      title: "Toxic Link Judgment",
      prompt: "Which signal suggests toxic link judgment needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when toxic link judgment could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "se-36",
      type: "mcq",
      title: "Local Seo Citations",
      prompt: "What is the best way to validate work involving local SEO citations?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for local SEO citations should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "se-37",
      type: "mcq",
      title: "Google Business Profile",
      prompt: "In a professional SEO Strategy & Technical Audit scenario, what is the strongest approach when dealing with Google Business Profile?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Google Business Profile requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "se-38",
      type: "mcq",
      title: "Seo Migration Risk",
      prompt: "A team is making a decision about SEO migration risk. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about SEO migration risk balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "se-39",
      type: "mcq",
      title: "Search Console Diagnostics",
      prompt: "Which signal suggests Search Console diagnostics needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when Search Console diagnostics could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "se-40",
      type: "mcq",
      title: "Seo Prioritization",
      prompt: "What is the best way to validate work involving SEO prioritization?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for SEO prioritization should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
