const indiaJobRoles = [
  {
    skill: 'Frontend Engineering',
    category: 'React • TypeScript • UI Systems',
    desc: 'Build confidence in component design, responsive layouts, accessibility, and production-ready frontend workflows.',
    level: 'Beginner to Advanced',
    accent: 'from-cyan-500 to-teal-500',
    overview:
      'Frontend engineers translate product ideas into fast, polished user experiences. This track checks how well you handle real UI patterns, debugging, state flow, and delivery quality.',
    certificationFocus: 'UI architecture, component logic, accessibility, and debugging depth.',
    careerOutcomes: ['Frontend Developer', 'UI Engineer', 'React Developer', 'Product Engineer'],
    toolsCovered: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'API integration'],
    bestUse:
      'Ideal for learners preparing for frontend interviews, practical coding rounds, or portfolio-backed certification proof.',
    interviewQuestions: [
      {
        q: 'How do you decide whether state should live locally, in context, or in a global store?',
        a: 'I start with scope and ownership. If the state is isolated to one component tree, local state is enough. If several nearby components need it, context usually works. I reach for a global store only when the state is shared broadly, updated frequently, or needs predictable cross-page behavior.',
      },
      {
        q: 'What is your process when a React page feels slow?',
        a: 'I first confirm where the lag is coming from: rendering, network, or large assets. Then I check unnecessary re-renders, expensive lists, and blocking API calls. After that I optimize the slowest path with techniques like pagination, code splitting, memoization where justified, and lighter assets.',
      },
      {
        q: 'How do you make a component library scalable?',
        a: 'I standardize tokens, spacing, states, and naming early. Reusable components need clear APIs, accessible defaults, and enough flexibility without becoming overly configurable. Good documentation and usage patterns are as important as the code itself.',
      },
    ],
  },
  {
    skill: 'Backend Development',
    category: 'Node.js • APIs • Databases',
    desc: 'Validate API design, data modeling, service reliability, and backend problem-solving with realistic engineering prompts.',
    level: 'Intermediate to Advanced',
    accent: 'from-emerald-500 to-teal-500',
    overview:
      'Backend developers create the logic, data flows, and service contracts behind every product experience. This track evaluates how you structure systems, reason about scale, and write maintainable backend solutions.',
    certificationFocus: 'API design, business logic, database reasoning, and service reliability.',
    careerOutcomes: ['Backend Engineer', 'API Developer', 'Platform Engineer', 'Software Engineer'],
    toolsCovered: ['Node.js', 'Express', 'SQL', 'REST APIs', 'Authentication'],
    bestUse:
      'Best for candidates preparing for service-layer engineering roles and backend-heavy technical interviews.',
    interviewQuestions: [
      {
        q: 'How do you design an API that is easy to evolve over time?',
        a: 'I keep resources consistent, make naming predictable, and avoid leaking internal implementation details. I version only when necessary, document contracts clearly, and design responses so new fields can be added without breaking existing consumers.',
      },
      {
        q: 'When would you denormalize data in a backend system?',
        a: 'I do it when read performance or reporting simplicity is more important than perfect normalization, especially for high-traffic queries. The tradeoff is write complexity, so I only denormalize when the access pattern clearly justifies it.',
      },
      {
        q: 'How do you debug a slow endpoint?',
        a: 'I break the request path into pieces: app logic, queries, external services, and payload size. Then I measure each step, identify the bottleneck, and fix the most expensive operation first rather than guessing.',
      },
    ],
  },
  {
    skill: 'Data Analytics',
    category: 'SQL • Python • BI Thinking',
    desc: 'Measure practical data analysis, dashboard reasoning, and insight communication instead of rote theoretical knowledge.',
    level: 'Beginner to Intermediate',
    accent: 'from-sky-500 to-cyan-500',
    overview:
      'Data analysts turn raw numbers into decisions. This track checks your ability to query datasets, interpret patterns, communicate findings, and connect analysis back to business questions.',
    certificationFocus: 'Query writing, trend analysis, business reasoning, and structured communication.',
    careerOutcomes: ['Data Analyst', 'Business Analyst', 'Reporting Analyst', 'Insights Associate'],
    toolsCovered: ['SQL', 'Python', 'Excel', 'Dashboards', 'Data storytelling'],
    bestUse:
      'Great for learners targeting analyst roles and wanting evidence of hands-on reporting and insight-generation skills.',
    interviewQuestions: [
      {
        q: 'How do you approach a vague business question with data?',
        a: 'I first clarify the decision we are trying to support, then define the key metric, segment, and time window. Only after the business goal is clear do I pull data, explore patterns, and turn the results into a recommendation.',
      },
      {
        q: 'What do you do when dashboard numbers and raw query outputs do not match?',
        a: 'I compare definitions first: filters, joins, date logic, and refresh windows. Most mismatches come from inconsistent metric definitions rather than query syntax, so I align the business logic before changing the implementation.',
      },
      {
        q: 'How do you explain a finding to a non-technical stakeholder?',
        a: 'I avoid raw technical detail and focus on what changed, why it matters, and what action should follow. The goal is not to show every query step but to make the insight usable.',
      },
    ],
  },
  {
    skill: 'Cloud & DevOps',
    category: 'AWS • CI/CD • Deployment',
    desc: 'Assess release readiness, deployment thinking, incident awareness, and practical cloud fundamentals.',
    level: 'Intermediate to Advanced',
    accent: 'from-teal-500 to-emerald-500',
    overview:
      'Cloud and DevOps roles require strong operational judgment, not just tool familiarity. This track evaluates deployment flow, reliability thinking, automation discipline, and release safety.',
    certificationFocus: 'Deployment workflow, CI/CD thinking, cloud fundamentals, and reliability mindset.',
    careerOutcomes: ['DevOps Engineer', 'Cloud Engineer', 'Site Reliability Engineer', 'Platform Engineer'],
    toolsCovered: ['AWS', 'CI/CD', 'Docker', 'Monitoring', 'Infrastructure basics'],
    bestUse:
      'Useful for candidates preparing for cloud support, platform, or deployment-focused engineering interviews.',
    interviewQuestions: [
      {
        q: 'What makes a CI/CD pipeline reliable?',
        a: 'A reliable pipeline is fast, repeatable, and safe. It needs meaningful automated checks, clear rollback paths, visibility into failures, and enough isolation that one flaky stage does not block every release.',
      },
      {
        q: 'How do you think about incident response?',
        a: 'I prioritize quick containment first, then root-cause analysis, and finally prevention. During the incident I want clear ownership, good communication, and the smallest safe fix to restore service.',
      },
      {
        q: 'How would you reduce deployment risk?',
        a: 'I use smaller releases, automated validation, environment parity, and controlled rollouts such as blue-green or canary strategies when the system justifies them.',
      },
    ],
  },
  {
    skill: 'Cybersecurity Fundamentals',
    category: 'Threats • IAM • Secure Systems',
    desc: 'Show security awareness through access control, threat reasoning, and practical secure-system decision making.',
    level: 'Beginner to Intermediate',
    accent: 'from-slate-700 to-cyan-600',
    overview:
      'Security readiness is increasingly expected across technical roles. This track validates whether you understand core security hygiene, access control, and how to reduce risk in everyday systems.',
    certificationFocus: 'Identity, access, secure defaults, and common vulnerability awareness.',
    careerOutcomes: ['Security Analyst', 'Security Associate', 'IAM Specialist', 'Secure Systems Engineer'],
    toolsCovered: ['IAM', 'Security hygiene', 'Risk review', 'Access controls', 'Secure workflows'],
    bestUse:
      'Helpful for learners who want a strong security foundation before moving into security-focused or compliance-sensitive roles.',
    interviewQuestions: [
      {
        q: 'What is the principle of least privilege and why does it matter?',
        a: 'It means users and systems should only have the access they need to do their current job, nothing more. It reduces blast radius, lowers accidental misuse, and makes privilege escalation harder for attackers.',
      },
      {
        q: 'How do you respond if credentials are accidentally exposed?',
        a: 'I revoke or rotate them immediately, identify where they were used, assess whether there was suspicious activity, and then document the incident and harden the workflow that allowed the exposure.',
      },
      {
        q: 'What makes a system secure by default?',
        a: 'Secure defaults mean the safest setting is the starting point: minimal access, encryption where possible, auditability, and explicit opt-in for risky behavior.',
      },
    ],
  },
  {
    skill: 'Product Management',
    category: 'Strategy • Execution • Metrics',
    desc: 'Validate prioritization, product sense, communication, and metric-driven decision making through scenario prompts.',
    level: 'Intermediate to Advanced',
    accent: 'from-cyan-600 to-blue-500',
    overview:
      'Product managers coordinate business goals, user needs, and engineering execution. This track measures how clearly you think through priorities, tradeoffs, and measurable outcomes.',
    certificationFocus: 'Problem framing, prioritization, stakeholder reasoning, and metric judgment.',
    careerOutcomes: ['Associate Product Manager', 'Product Manager', 'Growth PM', 'Platform PM'],
    toolsCovered: ['Roadmapping', 'Metrics', 'User problems', 'Tradeoffs', 'Cross-functional communication'],
    bestUse:
      'Strong fit for candidates preparing for PM interviews, case rounds, or role-switch transitions into product.',
    interviewQuestions: [
      {
        q: 'How do you prioritize features when every stakeholder says their request is urgent?',
        a: 'I bring the conversation back to user impact, business value, urgency, and effort. A shared framework creates alignment and keeps decisions from being driven only by the loudest voice.',
      },
      {
        q: 'What metric would you choose to evaluate a new feature?',
        a: 'I choose a metric tied directly to the feature’s intended behavior, then pair it with guardrail metrics so improvement in one area does not hide damage elsewhere.',
      },
      {
        q: 'How do you handle disagreement between design and engineering?',
        a: 'I clarify the user goal, surface the constraints honestly, and work toward the smallest solution that preserves product intent without ignoring technical risk.',
      },
    ],
  },
  {
    skill: 'QA Automation',
    category: 'Testing • Playwright • Release Quality',
    desc: 'Evaluate automation thinking, test design, edge-case handling, and release confidence with practical workflows.',
    level: 'Beginner to Advanced',
    accent: 'from-teal-500 to-sky-500',
    overview:
      'QA automation is about quality strategy as much as test scripts. This track checks whether you can design coverage intelligently, prevent regressions, and support stable releases.',
    certificationFocus: 'Automation logic, coverage strategy, bug reasoning, and release quality discipline.',
    careerOutcomes: ['QA Engineer', 'SDET', 'Automation Tester', 'Quality Engineer'],
    toolsCovered: ['Playwright', 'Test planning', 'Regression coverage', 'Bug analysis', 'Release validation'],
    bestUse:
      'Useful for candidates targeting testing, SDET, and release-quality roles with evidence of hands-on evaluation skill.',
    interviewQuestions: [
      {
        q: 'How do you decide what should be automated first?',
        a: 'I prioritize stable, repetitive, high-value flows that are run often and are expensive to test manually. That gives the fastest reliability return without wasting effort on volatile areas.',
      },
      {
        q: 'What makes a test suite hard to trust?',
        a: 'Frequent flaky failures, unclear ownership, poor environment control, and tests that fail for the wrong reasons all reduce trust. A suite only helps if the team believes its signal.',
      },
      {
        q: 'How do you balance speed and coverage in testing?',
        a: 'I use a layered strategy: fast checks earlier, deeper end-to-end coverage on critical paths, and clear separation between smoke, regression, and exploratory workflows.',
      },
    ],
  },
  {
    skill: 'Business & Consulting',
    category: 'Analysis • Communication • Problem Solving',
    desc: 'Build structured thinking through scenario-based problem solving, recommendations, and business communication.',
    level: 'Beginner to Intermediate',
    accent: 'from-emerald-500 to-cyan-500',
    overview:
      'Consulting-style roles reward clarity, synthesis, and structured communication. This track evaluates how you break down problems, justify recommendations, and communicate decisions with confidence.',
    certificationFocus: 'Structured problem solving, business reasoning, communication, and recommendation quality.',
    careerOutcomes: ['Business Analyst', 'Consulting Analyst', 'Strategy Associate', 'Operations Analyst'],
    toolsCovered: ['Case solving', 'Hypothesis thinking', 'Communication', 'Frameworks', 'Recommendation writing'],
    bestUse:
      'Best for learners preparing for consulting-style interviews, business case rounds, or analytical client-facing roles.',
    interviewQuestions: [
      {
        q: 'How do you structure a problem when the data is incomplete?',
        a: 'I frame the decision, list the key drivers, state assumptions clearly, and build a first-pass hypothesis. The structure matters because it lets me reason forward even before perfect data is available.',
      },
      {
        q: 'What makes a recommendation persuasive?',
        a: 'A persuasive recommendation is clear, grounded in evidence, realistic to implement, and explicit about tradeoffs and risks.',
      },
      {
        q: 'How do you communicate uncertainty to stakeholders?',
        a: 'I explain what is known, what is assumed, and what could change the decision. That keeps the discussion honest without making it directionless.',
      },
    ],
  },
];

export default indiaJobRoles;
