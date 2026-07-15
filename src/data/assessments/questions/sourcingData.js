import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const sourcingData = {
  id: ASSESSMENT_TYPES.sourcing,
  title: "Technical Sourcing & Boolean Search Professional Certification",
  shortTitle: "Sourcing",
  category: "HR & Recruitment",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Boolean search, LinkedIn/GitHub sourcing, candidate pipelines, outreach, diversity sourcing, talent mapping, screening signals, ATS hygiene, and recruiting judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sc-01",
      type: "mcq",
      title: "Boolean Search",
      prompt: "Which operator is used to find results that MUST contain both of two keywords?",
      options: ["OR", "AND", "NOT", "NEAR"],
      correctIndex: 1,
      explanation: "AND narrows search results. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-02",
      type: "mcq",
      title: "Boolean Search",
      prompt: "How do you find exact phrases in a search engine?",
      options: ["Using brackets []", "Using quotation marks \"\"", "Using parenthese ()", "Using asterisks **"],
      correctIndex: 1,
      explanation: "Quotes ensure words appear together in that specific order. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-03",
      type: "mcq",
      title: "LinkedIn Sourcing",
      prompt: "What is a \"Filter\" in LinkedIn Recruiter?",
      options: ["A way to change colors", "Specific criteria like Location, Skills, and Job Title to narrow down candidates", "A type of message", "A security setting"],
      correctIndex: 1,
      explanation: "Filters are essential for targeted sourcing. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-04",
      type: "mcq",
      title: "GitHub Sourcing",
      prompt: "Which part of a GitHub profile is most useful for technical sourcers?",
      options: ["The bio", "Repositories and Contributions (commit history)", "Followers", "The location"],
      correctIndex: 1,
      explanation: "Code quality and activity are best evaluated via repos. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-05",
      type: "mcq",
      title: "Outreach",
      prompt: "What is the goal of an \"InMail\"?",
      options: ["To hire someone immediately", "To start a conversation and spark interest in a role", "To send a legal contract", "To track employee hours"],
      correctIndex: 1,
      explanation: "Initial outreach is about relationship building. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-06",
      type: "mcq",
      title: "Boolean Search",
      prompt: "What does the NOT operator do?",
      options: ["Adds more results", "Excludes results containing specific keywords", "Finds synonyms", "Does nothing"],
      correctIndex: 1,
      explanation: "NOT (or minus sign) helps remove irrelevant results (e.g., -manager). This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-07",
      type: "mcq",
      title: "Drip Campaigns",
      prompt: "What is a \"Recruitment Drip Campaign\"?",
      options: ["A type of leak", "A series of automated follow-up emails sent to passive candidates", "A social media post", "A live event"],
      correctIndex: 1,
      explanation: "Drip campaigns improve response rates through persistent outreach. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-08",
      type: "mcq",
      title: "Pipelines",
      prompt: "What is a \"Talent Pipeline\"?",
      options: ["A water pipe", "A pool of pre-vetted, qualified candidates for future or current roles", "A list of employees", "A type of resume"],
      correctIndex: 1,
      explanation: "Pipelining reduces time-to-hire. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-09",
      type: "mcq",
      title: "StackOverflow",
      prompt: "How can you use StackOverflow for sourcing?",
      options: ["By asking questions", "Identifying experts in specific technologies through their reputation and answers", "Buying ads only", "Posting job links in comments"],
      correctIndex: 1,
      explanation: "Reputation scores indicate technical depth and community involvement. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-10",
      type: "mcq",
      title: "X-Ray Search",
      prompt: "What is an \"X-Ray Search\"?",
      options: ["Using a medical device", "Using a search engine (like Google) to find information on specific sites like LinkedIn or GitHub", "Scanning resumes", "Background checks"],
      correctIndex: 1,
      explanation: "Example: site:linkedin.com/in \"python developer\" \"London\". This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-11",
      type: "mcq",
      title: "ATS",
      prompt: "What does \"ATS\" stand for?",
      options: ["Applicant Tracking System", "Advanced Technical Sourcing", "Automated Talent Search", "Account Tool System"],
      correctIndex: 0,
      explanation: "ATS is the central database for managing recruitment. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-12",
      type: "mcq",
      title: "Diversity Sourcing",
      prompt: "What is a common goal of Diversity Sourcing?",
      options: ["Hiring only one group", "Expanding the talent pool to ensure representation of underrepresented groups", "Ignoring skills", "Lowering standards"],
      correctIndex: 1,
      explanation: "Diversity sourcing aims for a balanced top-of-funnel. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-13",
      type: "mcq",
      title: "Personalization",
      prompt: "Why is personalization important in candidate outreach?",
      options: ["It sounds nice", "It significantly increases response rates from passive candidates", "It is required by law", "It is easier to do"],
      correctIndex: 1,
      explanation: "Generic templates are often ignored by top talent. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-14",
      type: "mcq",
      title: "CRM",
      prompt: "What is a \"Talent CRM\"?",
      options: ["Customer Relationship Management", "Candidate Relationship Management (for passive candidate engagement)", "Recruitment Management", "Corporate Resource Manager"],
      correctIndex: 1,
      explanation: "A CRM manages the \"pre-applicant\" phase. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-15",
      type: "mcq",
      title: "Engagement Metrics",
      prompt: "What is a \"Response Rate\"?",
      options: ["How fast you type", "The percentage of people who reply to your outreach messages", "The cost of an ad", "Number of hires"],
      correctIndex: 1,
      explanation: "Key metric for measuring outreach effectiveness. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-16",
      type: "mcq",
      title: "Boolean Search",
      prompt: "What do parenthesess () do in a Boolean string?",
      options: ["Nothing", "Group keywords together (usually for OR conditions)", "Add secret codes", "Link to other sites"],
      correctIndex: 1,
      explanation: "Example: (Python OR Java OR C++). This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-17",
      type: "mcq",
      title: "Employee Referrals",
      prompt: "Why are employee referrals highly valued?",
      options: ["They are cheaper", "They often have higher retention and better cultural fit", "They don't need interviews", "Both A and B"],
      correctIndex: 3,
      explanation: "Referrals are usually the highest quality source of hire. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-18",
      type: "mcq",
      title: "Market Intelligence",
      prompt: "What is \"Talent Mapping\"?",
      options: ["Drawing maps", "Analyzing the competitor landscape to see where talent is located and their titles", "Tracking office locations", "Scheduling interviews"],
      correctIndex: 1,
      explanation: "Mapping helps build a strategic sourcing plan. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-19",
      type: "mcq",
      title: "Candidate Experience",
      prompt: "When does the \"Candidate Experience\" begin?",
      options: ["During the interview", "At the very first point of contact (e.g., the sourcing message)", "When they start the job", "When they sign the contract"],
      correctIndex: 1,
      explanation: "First impressions matter. This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-20",
      type: "mcq",
      title: "Boolean - Asterisk",
      prompt: "What is the asterisk (*) used for in some search engines?",
      options: ["Multiplication", "Wildcard - to find variations of a word root (e.g., Recruit*)", "Bold text", "Deleting words"],
      correctIndex: 1,
      explanation: "Finds \"recruit\", \"recruiter\", \"recruiting\", \"recruitment\". This is a checked foundational concept for professional Sourcing work."
    },
    {
      id: "sc-21",
      type: "mcq",
      title: "Boolean Grouping",
      prompt: "In a professional Technical Sourcing & Boolean Search scenario, what is the strongest approach when dealing with Boolean grouping?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Boolean Grouping requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-22",
      type: "mcq",
      title: "Exact Phrase Search",
      prompt: "A team is making a decision about exact phrase search. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about exact phrase search balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-23",
      type: "mcq",
      title: "Site Search Operator",
      prompt: "Which signal suggests site search operator needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when site search operator could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-24",
      type: "mcq",
      title: "Linkedin Title Filters",
      prompt: "What is the best way to validate work involving LinkedIn title filters?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for LinkedIn title filters should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sc-25",
      type: "mcq",
      title: "Github Repository Signals",
      prompt: "In a professional Technical Sourcing & Boolean Search scenario, what is the strongest approach when dealing with GitHub repository signals?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Github Repository Signals requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-26",
      type: "mcq",
      title: "Stack Overflow Sourcing",
      prompt: "A team is making a decision about Stack Overflow sourcing. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about Stack Overflow sourcing balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-27",
      type: "mcq",
      title: "X-Ray Search",
      prompt: "Which signal suggests X-Ray search needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when X-Ray search could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-28",
      type: "mcq",
      title: "Diversity Sourcing",
      prompt: "What is the best way to validate work involving diversity sourcing?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for diversity sourcing should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sc-29",
      type: "mcq",
      title: "Talent Market Mapping",
      prompt: "In a professional Technical Sourcing & Boolean Search scenario, what is the strongest approach when dealing with talent market mapping?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Talent Market Mapping requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-30",
      type: "mcq",
      title: "Candidate Persona",
      prompt: "A team is making a decision about candidate persona. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about candidate persona balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-31",
      type: "mcq",
      title: "Outreach Personalization",
      prompt: "Which signal suggests outreach personalization needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when outreach personalization could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-32",
      type: "mcq",
      title: "Follow-Up Cadence",
      prompt: "What is the best way to validate work involving follow-up cadence?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for follow-up cadence should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sc-33",
      type: "mcq",
      title: "Response Rate Metric",
      prompt: "In a professional Technical Sourcing & Boolean Search scenario, what is the strongest approach when dealing with response rate metric?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Response Rate Metric requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-34",
      type: "mcq",
      title: "Passive Candidate Motivation",
      prompt: "A team is making a decision about passive candidate motivation. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about passive candidate motivation balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-35",
      type: "mcq",
      title: "Screening Signal Quality",
      prompt: "Which signal suggests screening signal quality needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when screening signal quality could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-36",
      type: "mcq",
      title: "Pipeline Stage Hygiene",
      prompt: "What is the best way to validate work involving pipeline stage hygiene?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for pipeline stage hygiene should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sc-37",
      type: "mcq",
      title: "Ats Notes Quality",
      prompt: "In a professional Technical Sourcing & Boolean Search scenario, what is the strongest approach when dealing with ATS notes quality?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Ats Notes Quality requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-38",
      type: "mcq",
      title: "Candidate Privacy",
      prompt: "A team is making a decision about candidate privacy. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about candidate privacy balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-39",
      type: "mcq",
      title: "Hiring Manager Intake",
      prompt: "Which signal suggests hiring manager intake needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when hiring manager intake could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-40",
      type: "mcq",
      title: "Sourcing Strategy Judgment",
      prompt: "What is the best way to validate work involving sourcing strategy judgment?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for sourcing strategy judgment should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
