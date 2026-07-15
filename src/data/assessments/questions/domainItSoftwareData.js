import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainItSoftwareData = {
  id: ASSESSMENT_TYPES.domain_it_software,
  title: "IT Software Industry Domain Professional Certification",
  shortTitle: "Software Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional software industry assessment covering SaaS, SDLC, Agile, APIs, architecture, cloud models, DevOps, QA, security, licensing, product metrics, and software business operations.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "is-01",
      type: "mcq",
      title: "SaaS",
      prompt: "In the IT Software Industry domain, what does \"SaaS\" mean?",
      options: [
        "software as a service, delivered over the internet and commonly sold by subscription",
        "revenue retained and expanded from existing customers after churn and contraction",
        "A payroll-only process unrelated to this domain",
        "application architecture where major functionality is deployed as one unit",
      ],
      correctIndex: 0,
      explanation: "Software as a service, delivered over the internet and commonly sold by subscription."
    },
    {
      id: "is-02",
      type: "mcq",
      title: "PaaS",
      prompt: "In the IT Software Industry domain, what does \"PaaS\" mean?",
      options: [
        "software as a service, delivered over the internet and commonly sold by subscription",
        "process for responding to production service disruptions",
        "A design color choice with no operational meaning",
        "platform as a service, cloud platform for building, deploying, and managing applications",
      ],
      correctIndex: 3,
      explanation: "Platform as a service, cloud platform for building, deploying, and managing applications."
    },
    {
      id: "is-03",
      type: "mcq",
      title: "IaaS",
      prompt: "In the IT Software Industry domain, what does \"IaaS\" mean?",
      options: [
        "A temporary file naming convention only",
        "infrastructure as a service, cloud compute, storage, and network resources consumed on demand",
        "linear development approach where phases are completed sequentially",
        "rate at which customers or revenue are lost",
      ],
      correctIndex: 1,
      explanation: "Infrastructure as a service, cloud compute, storage, and network resources consumed on demand."
    },
    {
      id: "is-04",
      type: "mcq",
      title: "SDLC",
      prompt: "In the IT Software Industry domain, what does \"SDLC\" mean?",
      options: [
        "service level objective defining target reliability or performance",
        "A social media caption format",
        "software development lifecycle from planning and design to build, test, deploy, and maintain",
        "testing to ensure new changes did not break existing functionality",
      ],
      correctIndex: 2,
      explanation: "Software development lifecycle from planning and design to build, test, deploy, and maintain."
    },
    {
      id: "is-05",
      type: "mcq",
      title: "Waterfall",
      prompt: "In the IT Software Industry domain, what does \"Waterfall\" mean?",
      options: [
        "linear development approach where phases are completed sequentially",
        "application architecture where major functionality is deployed as one unit",
        "A customer service greeting script",
        "service level agreement defining service commitments and remedies",
      ],
      correctIndex: 0,
      explanation: "Linear development approach where phases are completed sequentially."
    },
    {
      id: "is-06",
      type: "mcq",
      title: "Agile",
      prompt: "In the IT Software Industry domain, what does \"Agile\" mean?",
      options: [
        "flow-based method using visual work-in-progress management",
        "iterative approach focused on incremental delivery, feedback, and adaptation",
        "An office administration policy only",
        "application architecture where major functionality is deployed as one unit",
      ],
      correctIndex: 1,
      explanation: "Iterative approach focused on incremental delivery, feedback, and adaptation."
    },
    {
      id: "is-07",
      type: "mcq",
      title: "Scrum sprint",
      prompt: "In the IT Software Industry domain, what does \"Scrum sprint\" mean?",
      options: [
        "software as a service, delivered over the internet and commonly sold by subscription",
        "A random sales slogan with no technical meaning",
        "time-boxed iteration where a team commits to selected work",
        "percentage of time a system is available",
      ],
      correctIndex: 2,
      explanation: "Time-boxed iteration where a team commits to selected work."
    },
    {
      id: "is-08",
      type: "mcq",
      title: "Kanban",
      prompt: "In the IT Software Industry domain, what does \"Kanban\" mean?",
      options: [
        "flow-based method using visual work-in-progress management",
        "future cost created by shortcuts, weak design, or deferred cleanup",
        "platform as a service, cloud platform for building, deploying, and managing applications",
        "A manual workaround with no control value",
      ],
      correctIndex: 0,
      explanation: "Flow-based method using visual work-in-progress management."
    },
    {
      id: "is-09",
      type: "mcq",
      title: "API",
      prompt: "In the IT Software Industry domain, what does \"API\" mean?",
      options: [
        "application programming interface enabling systems to communicate",
        "time-boxed iteration where a team commits to selected work",
        "flow-based method using visual work-in-progress management",
        "A visual branding element only",
      ],
      correctIndex: 0,
      explanation: "Application programming interface enabling systems to communicate."
    },
    {
      id: "is-10",
      type: "mcq",
      title: "REST",
      prompt: "In the IT Software Industry domain, what does \"REST\" mean?",
      options: [
        "service level objective defining target reliability or performance",
        "A meeting agenda template",
        "architectural style for network APIs using resources and standard HTTP methods",
        "runtime control that enables or disables functionality without redeploying",
      ],
      correctIndex: 2,
      explanation: "Architectural style for network APIs using resources and standard HTTP methods."
    },
    {
      id: "is-11",
      type: "mcq",
      title: "Microservices",
      prompt: "In the IT Software Industry domain, what does \"Microservices\" mean?",
      options: [
        "architecture composed of independently deployable services around business capabilities",
        "ability to understand system behavior using logs, metrics, traces, and events",
        "testing to ensure new changes did not break existing functionality",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 0,
      explanation: "Architecture composed of independently deployable services around business capabilities."
    },
    {
      id: "is-12",
      type: "mcq",
      title: "Monolith",
      prompt: "In the IT Software Industry domain, what does \"Monolith\" mean?",
      options: [
        "application architecture where major functionality is deployed as one unit",
        "A design color choice with no operational meaning",
        "service level agreement defining service commitments and remedies",
        "annual recurring revenue, a key SaaS revenue metric",
      ],
      correctIndex: 0,
      explanation: "Application architecture where major functionality is deployed as one unit."
    },
    {
      id: "is-13",
      type: "mcq",
      title: "CI/CD",
      prompt: "In the IT Software Industry domain, what does \"CI/CD\" mean?",
      options: [
        "A temporary file naming convention only",
        "continuous integration and continuous delivery or deployment automation",
        "iterative approach focused on incremental delivery, feedback, and adaptation",
        "application architecture where major functionality is deployed as one unit",
      ],
      correctIndex: 1,
      explanation: "Continuous integration and continuous delivery or deployment automation."
    },
    {
      id: "is-14",
      type: "mcq",
      title: "Regression testing",
      prompt: "In the IT Software Industry domain, what does \"Regression testing\" mean?",
      options: [
        "A social media caption format",
        "rate at which customers or revenue are lost",
        "continuous integration and continuous delivery or deployment automation",
        "testing to ensure new changes did not break existing functionality",
      ],
      correctIndex: 3,
      explanation: "Testing to ensure new changes did not break existing functionality."
    },
    {
      id: "is-15",
      type: "mcq",
      title: "Technical debt",
      prompt: "In the IT Software Industry domain, what does \"Technical debt\" mean?",
      options: [
        "future cost created by shortcuts, weak design, or deferred cleanup",
        "A customer service greeting script",
        "process for responding to production service disruptions",
        "architecture composed of independently deployable services around business capabilities",
      ],
      correctIndex: 0,
      explanation: "Future cost created by shortcuts, weak design, or deferred cleanup."
    },
    {
      id: "is-16",
      type: "mcq",
      title: "Open source",
      prompt: "In the IT Software Industry domain, what does \"Open source\" mean?",
      options: [
        "An office administration policy only",
        "revenue retained and expanded from existing customers after churn and contraction",
        "software with source code that can be inspected, used, modified, or distributed under license terms",
        "testing to ensure new changes did not break existing functionality",
      ],
      correctIndex: 2,
      explanation: "Software with source code that can be inspected, used, modified, or distributed under license terms."
    },
    {
      id: "is-17",
      type: "mcq",
      title: "License compliance",
      prompt: "In the IT Software Industry domain, what does \"License compliance\" mean?",
      options: [
        "following obligations and restrictions of software licenses",
        "testing to ensure new changes did not break existing functionality",
        "application architecture where major functionality is deployed as one unit",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 0,
      explanation: "Following obligations and restrictions of software licenses."
    },
    {
      id: "is-18",
      type: "mcq",
      title: "Uptime",
      prompt: "In the IT Software Industry domain, what does \"Uptime\" mean?",
      options: [
        "percentage of time a system is available",
        "A manual workaround with no control value",
        "architectural style for network APIs using resources and standard HTTP methods",
        "future cost created by shortcuts, weak design, or deferred cleanup",
      ],
      correctIndex: 0,
      explanation: "Percentage of time a system is available."
    },
    {
      id: "is-19",
      type: "mcq",
      title: "SLA",
      prompt: "In the IT Software Industry domain, what does \"SLA\" mean?",
      options: [
        "service level agreement defining service commitments and remedies",
        "A visual branding element only",
        "following obligations and restrictions of software licenses",
        "architecture composed of independently deployable services around business capabilities",
      ],
      correctIndex: 0,
      explanation: "Service level agreement defining service commitments and remedies."
    },
    {
      id: "is-20",
      type: "mcq",
      title: "SLO",
      prompt: "In the IT Software Industry domain, what does \"SLO\" mean?",
      options: [
        "revenue retained and expanded from existing customers after churn and contraction",
        "service level objective defining target reliability or performance",
        "verifying identity",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "Service level objective defining target reliability or performance."
    },
    {
      id: "is-21",
      type: "mcq",
      title: "Observability",
      prompt: "In the IT Software Industry domain, what does \"Observability\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "linear development approach where phases are completed sequentially",
        "ability to understand system behavior using logs, metrics, traces, and events",
        "software as a service, delivered over the internet and commonly sold by subscription",
      ],
      correctIndex: 2,
      explanation: "Ability to understand system behavior using logs, metrics, traces, and events."
    },
    {
      id: "is-22",
      type: "mcq",
      title: "Incident management",
      prompt: "In the IT Software Industry domain, what does \"Incident management\" mean?",
      options: [
        "architectural style for network APIs using resources and standard HTTP methods",
        "A design color choice with no operational meaning",
        "service level objective defining target reliability or performance",
        "process for responding to production service disruptions",
      ],
      correctIndex: 3,
      explanation: "Process for responding to production service disruptions."
    },
    {
      id: "is-23",
      type: "mcq",
      title: "Authentication",
      prompt: "In the IT Software Industry domain, what does \"Authentication\" mean?",
      options: [
        "flow-based method using visual work-in-progress management",
        "A temporary file naming convention only",
        "iterative approach focused on incremental delivery, feedback, and adaptation",
        "verifying identity",
      ],
      correctIndex: 3,
      explanation: "Verifying identity."
    },
    {
      id: "is-24",
      type: "mcq",
      title: "Authorization",
      prompt: "In the IT Software Industry domain, what does \"Authorization\" mean?",
      options: [
        "determining what an authenticated user is allowed to do",
        "architectural style for network APIs using resources and standard HTTP methods",
        "A social media caption format",
        "runtime control that enables or disables functionality without redeploying",
      ],
      correctIndex: 0,
      explanation: "Determining what an authenticated user is allowed to do."
    },
    {
      id: "is-25",
      type: "mcq",
      title: "Multi-tenancy",
      prompt: "In the IT Software Industry domain, what does \"Multi-tenancy\" mean?",
      options: [
        "rate at which customers or revenue are lost",
        "architecture where one application serves multiple customers with logical isolation",
        "A customer service greeting script",
        "degree to which a product satisfies a strong market need",
      ],
      correctIndex: 1,
      explanation: "Architecture where one application serves multiple customers with logical isolation."
    },
    {
      id: "is-26",
      type: "mcq",
      title: "Feature flag",
      prompt: "In the IT Software Industry domain, what does \"Feature flag\" mean?",
      options: [
        "percentage of time a system is available",
        "An office administration policy only",
        "runtime control that enables or disables functionality without redeploying",
        "future cost created by shortcuts, weak design, or deferred cleanup",
      ],
      correctIndex: 2,
      explanation: "Runtime control that enables or disables functionality without redeploying."
    },
    {
      id: "is-27",
      type: "mcq",
      title: "Product-market fit",
      prompt: "In the IT Software Industry domain, what does \"Product-market fit\" mean?",
      options: [
        "linear development approach where phases are completed sequentially",
        "degree to which a product satisfies a strong market need",
        "A random sales slogan with no technical meaning",
        "software as a service, delivered over the internet and commonly sold by subscription",
      ],
      correctIndex: 1,
      explanation: "Degree to which a product satisfies a strong market need."
    },
    {
      id: "is-28",
      type: "mcq",
      title: "ARR",
      prompt: "In the IT Software Industry domain, what does \"ARR\" mean?",
      options: [
        "A manual workaround with no control value",
        "annual recurring revenue, a key SaaS revenue metric",
        "revenue retained and expanded from existing customers after churn and contraction",
        "software development lifecycle from planning and design to build, test, deploy, and maintain",
      ],
      correctIndex: 1,
      explanation: "Annual recurring revenue, a key SaaS revenue metric."
    },
    {
      id: "is-29",
      type: "mcq",
      title: "Churn",
      prompt: "In the IT Software Industry domain, what does \"Churn\" mean?",
      options: [
        "percentage of time a system is available",
        "infrastructure as a service, cloud compute, storage, and network resources consumed on demand",
        "rate at which customers or revenue are lost",
        "A visual branding element only",
      ],
      correctIndex: 2,
      explanation: "Rate at which customers or revenue are lost."
    },
    {
      id: "is-30",
      type: "mcq",
      title: "Net revenue retention",
      prompt: "In the IT Software Industry domain, what does \"Net revenue retention\" mean?",
      options: [
        "A meeting agenda template",
        "application programming interface enabling systems to communicate",
        "determining what an authenticated user is allowed to do",
        "revenue retained and expanded from existing customers after churn and contraction",
      ],
      correctIndex: 3,
      explanation: "Revenue retained and expanded from existing customers after churn and contraction."
    },
    {
      id: "is-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A SaaS product has growing signups but flat ARR. What should be analyzed?",
      options: [
        "Conversion, activation, pricing, churn, expansion, customer segment, and sales funnel quality",
        "Only code editor choice",
        "Only website color",
        "Only office location",
      ],
      correctIndex: 0,
      explanation: "SaaS growth requires revenue funnel and retention analysis."
    },
    {
      id: "is-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A team releases often but production defects increase. What should improve?",
      options: [
        "Automated tests, code review, CI gates, monitoring, rollback strategy, and release discipline",
        "Only laptop brand",
        "Only meeting length",
        "Only logo design",
      ],
      correctIndex: 0,
      explanation: "High release velocity requires quality controls."
    },
    {
      id: "is-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A monolith is becoming hard to scale. What should be evaluated before moving to microservices?",
      options: [
        "Only cloud provider ads",
        "Only popularity of microservices",
        "Only number of developers",
        "Business boundaries, team ownership, operational maturity, data consistency, complexity, and deployment needs",
      ],
      correctIndex: 3,
      explanation: "Microservices solve some problems but add distributed-system complexity."
    },
    {
      id: "is-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A customer reports that one tenant can see another tenant's data. What type of issue is this?",
      options: [
        "Marketing typo",
        "Sprint planning issue",
        "Multi-tenancy isolation and authorization failure",
        "CSS bug only",
      ],
      correctIndex: 2,
      explanation: "Tenant isolation is critical in SaaS applications."
    },
    {
      id: "is-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An API is used by external partners. What is important when making breaking changes?",
      options: [
        "Versioning, deprecation notice, migration guide, compatibility, and partner communication",
        "Only rename repository",
        "Change immediately without notice",
        "Remove documentation",
      ],
      correctIndex: 0,
      explanation: "External APIs require careful change management."
    },
    {
      id: "is-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A team has many bugs from misunderstood requirements. What practice helps?",
      options: [
        "Clear acceptance criteria, examples, stakeholder review, and testable user stories",
        "Less communication",
        "More guessing",
        "Skip product review",
      ],
      correctIndex: 0,
      explanation: "Ambiguity can be reduced through shared examples and acceptance criteria."
    },
    {
      id: "is-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A service has no logs or metrics. What risk does this create?",
      options: [
        "Automatic security",
        "Better performance always",
        "No production risk",
        "Poor observability, slower incident diagnosis, and weaker reliability management",
      ],
      correctIndex: 3,
      explanation: "Observability is needed to operate production software."
    },
    {
      id: "is-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A software vendor uses open-source libraries. What should be managed?",
      options: [
        "License obligations, vulnerabilities, dependency versions, and supply-chain risk",
        "Only package names",
        "Only code comments",
        "Only stars on GitHub",
      ],
      correctIndex: 0,
      explanation: "Open-source use needs license and security governance."
    },
    {
      id: "is-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A product has high churn after onboarding. What should product teams inspect?",
      options: [
        "Only background color",
        "Activation, time-to-value, onboarding friction, support issues, and customer expectations",
        "Only sales demo length",
        "Only internal roadmap",
      ],
      correctIndex: 1,
      explanation: "Early churn often comes from weak activation or unmet expectations."
    },
    {
      id: "is-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A team wants to use feature flags. What governance is needed?",
      options: [
        "Use flags without names",
        "Never remove flags",
        "Hide all flags from engineering",
        "Flag ownership, cleanup dates, monitoring, rollout rules, and safe defaults",
      ],
      correctIndex: 3,
      explanation: "Feature flags can create risk if not owned and cleaned up."
    }
  ],
};
