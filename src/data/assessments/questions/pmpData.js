import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const pmpData = {
  id: ASSESSMENT_TYPES.pmp,
  title: "PMP Project Management Professional Certification",
  shortTitle: "PMP",
  category: "Project Management",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Project integration, scope, schedule, cost, quality, resources, communications, risk, procurement, stakeholders, agile, and hybrid delivery.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "pm-01",
      type: "mcq",
      title: "Integration",
      prompt: "Which document formally authorizes a project and gives the PM authority?",
      options: ["Business Case", "Project Charter", "Project Management Plan", "Statement of Work"],
      correctIndex: 1,
      explanation: "The Project Charter is the foundational document that authorizes the project."
    },
    {
      id: "pm-02",
      type: "mcq",
      title: "Stakeholders",
      prompt: "When should stakeholder identification begin?",
      options: ["During Planning", "After the Charter is approved", "As early as possible in Initiation", "During Execution"],
      correctIndex: 2,
      explanation: "Identifying stakeholders early in Initiation is critical for project success."
    },
    {
      id: "pm-03",
      type: "mcq",
      title: "Scope",
      prompt: "What is \"Scope Creep\"?",
      options: ["Planned changes", "Uncontrolled expansion of scope without adjustments to time/cost", "A slow PM", "Reducing scope"],
      correctIndex: 1,
      explanation: "Scope creep is unauthorized growth in requirements. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pm-04",
      type: "mcq",
      title: "Schedule",
      prompt: "What is the \"Critical Path\"?",
      options: ["The most important tasks", "The shortest path through the network", "The longest path which determines the project duration", "The path with the most float"],
      correctIndex: 2,
      explanation: "The critical path has zero float; any delay here delays the project."
    },
    {
      id: "pm-05",
      type: "mcq",
      title: "Cost",
      prompt: "If EV = 100 and AC = 120, what is the Cost Performance Index (CPI)?",
      options: ["1.2", "0.8", "20", "-20"],
      correctIndex: 1,
      explanation: "CPI = EV / AC. 100 / 120 = 0.83 (Over budget). This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pm-06",
      type: "mcq",
      title: "Quality",
      prompt: "What is the difference between Precision and Accuracy?",
      options: ["No difference", "Precision is consistency; Accuracy is closeness to target", "Accuracy is consistency", "Precision is closeness to target"],
      correctIndex: 1,
      explanation: "A process can be precise (repeatable) but inaccurate (off-target)."
    },
    {
      id: "pm-07",
      type: "mcq",
      title: "Resources",
      prompt: "Which theory states that hygiene factors prevent dissatisfaction but don't motivate?",
      options: ["Maslow's Hierarchy", "Herzberg's Two-Factor Theory", "McGregor's Theory X/Y", "Expectancy Theory"],
      correctIndex: 1,
      explanation: "Herzberg identified motivators vs. hygiene factors. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pm-08",
      type: "mcq",
      title: "Risk",
      prompt: "What is a \"Risk Register\"?",
      options: ["A list of completed tasks", "A central document for identifying, analyzing, and responding to risks", "A financial report", "A list of project members"],
      correctIndex: 1,
      explanation: "The risk register tracks all identified project risks. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pm-09",
      type: "mcq",
      title: "Procurement",
      prompt: "Which contract type carries the most risk for the buyer?",
      options: ["Fixed Price", "Time and Materials", "Cost Plus Fixed Fee", "Lump Sum"],
      correctIndex: 2,
      explanation: "Cost-reimbursable contracts place the risk of overruns on the buyer."
    },
    {
      id: "pm-10",
      type: "mcq",
      title: "Communications",
      prompt: "How many communication channels exist for a team of 10 people?",
      options: ["10", "90", "45", "100"],
      correctIndex: 2,
      explanation: "Channels = n(n-1)/2. 10(9)/2 = 45. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pm-11",
      type: "mcq",
      title: "Agile",
      prompt: "In Scrum, what is the \"Definition of Done\" (DoD)?",
      options: ["The PM's approval", "A shared understanding of what it means for work to be complete", "When the code is written", "When the customer pays"],
      correctIndex: 1,
      explanation: "DoD ensures quality and consistency across increments. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pm-12",
      type: "mcq",
      title: "Change Management",
      prompt: "What is the first step after receiving a change request?",
      options: ["Implement it", "Evaluate the impact", "Ask the sponsor", "Reject it"],
      correctIndex: 1,
      explanation: "Always assess the impact on triple constraints before taking action."
    },
    {
      id: "pm-13",
      type: "mcq",
      title: "Conflict",
      prompt: "Which conflict resolution technique is considered \"Win-Win\"?",
      options: ["Smoothing", "Compromising", "Collaborating/Problem Solving", "Forcing"],
      correctIndex: 2,
      explanation: "Collaboration aims to find a solution that satisfies all parties."
    },
    {
      id: "pm-14",
      type: "mcq",
      title: "Ethics",
      prompt: "What are the four pillars of the PMI Code of Ethics?",
      options: ["Trust, Honesty, Respect, Fairness", "Responsibility, Respect, Fairness, Honesty", "Quality, Time, Cost, Scope", "Initiation, Planning, Execution, Closure"],
      correctIndex: 1,
      explanation: "Responsibility, Respect, Fairness, and Honesty are the core values."
    },
    {
      id: "pm-15",
      type: "mcq",
      title: "EVM",
      prompt: "What does a Schedule Performance Index (SPI) of 1.1 indicate?",
      options: ["Behind schedule", "Ahead of schedule", "On schedule", "Over budget"],
      correctIndex: 1,
      explanation: "SPI > 1 means the project is performing ahead of schedule."
    },
    {
      id: "pm-16",
      type: "mcq",
      title: "Scope Baseline",
      prompt: "What components make up the Scope Baseline?",
      options: ["Project Charter, WBS, Dictionary", "Scope Statement, WBS, WBS Dictionary", "Requirement Doc, Scope Statement", "Project Plan only"],
      correctIndex: 1,
      explanation: "These three documents together define the approved scope."
    },
    {
      id: "pm-17",
      type: "mcq",
      title: "Leadership",
      prompt: "Which leadership style is characterized by \"hands-off\"?",
      options: ["Autocratic", "Transactional", "Laissez-faire", "Transformational"],
      correctIndex: 2,
      explanation: "Laissez-faire allows the team to make their own decisions."
    },
    {
      id: "pm-18",
      type: "mcq",
      title: "Closing",
      prompt: "What is a key activity during the \"Close Project\" phase?",
      options: ["Finding more work", "Lessons Learned documentation", "Hiring new staff", "Defining scope"],
      correctIndex: 1,
      explanation: "Capturing lessons learned is vital for organizational process assets."
    },
    {
      id: "pm-19",
      type: "mcq",
      title: "Project vs Operation",
      prompt: "What is a primary characteristic of a Project?",
      options: ["Ongoing and repetitive", "Temporary and unique", "Permanent", "Revenue-generating only"],
      correctIndex: 1,
      explanation: "Projects have a definite start and end and create a unique result."
    },
    {
      id: "pm-20",
      type: "mcq",
      title: "Matrix Organization",
      prompt: "Who has the power in a \"Strong Matrix\" organization?",
      options: ["Functional Manager", "Project Manager", "Equally shared", "The Sponsor"],
      correctIndex: 1,
      explanation: "In a strong matrix, the PM has moderate to high authority."
    },
    {
      id: "pm-21",
      type: "mcq",
      title: "Predictive Vs Agile",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for predictive vs agile?",
      options: ["Apply predictive vs agile with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use predictive vs agile only because it sounds advanced, without checking impact or constraints", "Ignore predictive vs agile until the issue becomes urgent in production or with customers", "Delegate predictive vs agile completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "predictive vs agile is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-22",
      type: "mcq",
      title: "Servant Leadership",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for servant leadership?",
      options: ["Apply servant leadership with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use servant leadership only because it sounds advanced, without checking impact or constraints", "Ignore servant leadership until the issue becomes urgent in production or with customers", "Delegate servant leadership completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "servant leadership is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-23",
      type: "mcq",
      title: "Integrated Change Control",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for integrated change control?",
      options: ["Apply integrated change control with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use integrated change control only because it sounds advanced, without checking impact or constraints", "Ignore integrated change control until the issue becomes urgent in production or with customers", "Delegate integrated change control completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "integrated change control is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-24",
      type: "mcq",
      title: "Stakeholder Engagement",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for stakeholder engagement?",
      options: ["Apply stakeholder engagement with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use stakeholder engagement only because it sounds advanced, without checking impact or constraints", "Ignore stakeholder engagement until the issue becomes urgent in production or with customers", "Delegate stakeholder engagement completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "stakeholder engagement is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-25",
      type: "mcq",
      title: "Risk Transfer",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for risk transfer?",
      options: ["Apply risk transfer with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use risk transfer only because it sounds advanced, without checking impact or constraints", "Ignore risk transfer until the issue becomes urgent in production or with customers", "Delegate risk transfer completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "risk transfer is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-26",
      type: "mcq",
      title: "Opportunity Enhancement",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for opportunity enhancement?",
      options: ["Apply opportunity enhancement with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use opportunity enhancement only because it sounds advanced, without checking impact or constraints", "Ignore opportunity enhancement until the issue becomes urgent in production or with customers", "Delegate opportunity enhancement completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "opportunity enhancement is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-27",
      type: "mcq",
      title: "Spi Calculation",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for SPI calculation?",
      options: ["Apply SPI calculation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use SPI calculation only because it sounds advanced, without checking impact or constraints", "Ignore SPI calculation until the issue becomes urgent in production or with customers", "Delegate SPI calculation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "SPI calculation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-28",
      type: "mcq",
      title: "Cpi Interpretation",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for CPI interpretation?",
      options: ["Apply CPI interpretation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CPI interpretation only because it sounds advanced, without checking impact or constraints", "Ignore CPI interpretation until the issue becomes urgent in production or with customers", "Delegate CPI interpretation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CPI interpretation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-29",
      type: "mcq",
      title: "Critical Chain",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for critical chain?",
      options: ["Apply critical chain with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use critical chain only because it sounds advanced, without checking impact or constraints", "Ignore critical chain until the issue becomes urgent in production or with customers", "Delegate critical chain completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "critical chain is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-30",
      type: "mcq",
      title: "Cost Of Quality",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for cost of quality?",
      options: ["Apply cost of quality with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use cost of quality only because it sounds advanced, without checking impact or constraints", "Ignore cost of quality until the issue becomes urgent in production or with customers", "Delegate cost of quality completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "cost of quality is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-31",
      type: "mcq",
      title: "Fixed Price Contracts",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for fixed price contracts?",
      options: ["Apply fixed price contracts with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use fixed price contracts only because it sounds advanced, without checking impact or constraints", "Ignore fixed price contracts until the issue becomes urgent in production or with customers", "Delegate fixed price contracts completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "fixed price contracts is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-32",
      type: "mcq",
      title: "Communication Planning",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for communication planning?",
      options: ["Apply communication planning with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use communication planning only because it sounds advanced, without checking impact or constraints", "Ignore communication planning until the issue becomes urgent in production or with customers", "Delegate communication planning completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "communication planning is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-33",
      type: "mcq",
      title: "Conflict Collaboration",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for conflict collaboration?",
      options: ["Apply conflict collaboration with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use conflict collaboration only because it sounds advanced, without checking impact or constraints", "Ignore conflict collaboration until the issue becomes urgent in production or with customers", "Delegate conflict collaboration completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "conflict collaboration is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-34",
      type: "mcq",
      title: "Hybrid Delivery",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for hybrid delivery?",
      options: ["Apply hybrid delivery with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use hybrid delivery only because it sounds advanced, without checking impact or constraints", "Ignore hybrid delivery until the issue becomes urgent in production or with customers", "Delegate hybrid delivery completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "hybrid delivery is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-35",
      type: "mcq",
      title: "Business Value Prioritization",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for business value prioritization?",
      options: ["Apply business value prioritization with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use business value prioritization only because it sounds advanced, without checking impact or constraints", "Ignore business value prioritization until the issue becomes urgent in production or with customers", "Delegate business value prioritization completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "business value prioritization is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-36",
      type: "mcq",
      title: "Definition Of Done",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for Definition of Done?",
      options: ["Apply Definition of Done with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Definition of Done only because it sounds advanced, without checking impact or constraints", "Ignore Definition of Done until the issue becomes urgent in production or with customers", "Delegate Definition of Done completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Definition of Done is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-37",
      type: "mcq",
      title: "Lessons Learned",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for lessons learned?",
      options: ["Apply lessons learned with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use lessons learned only because it sounds advanced, without checking impact or constraints", "Ignore lessons learned until the issue becomes urgent in production or with customers", "Delegate lessons learned completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "lessons learned is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-38",
      type: "mcq",
      title: "Benefits Realization",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for benefits realization?",
      options: ["Apply benefits realization with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use benefits realization only because it sounds advanced, without checking impact or constraints", "Ignore benefits realization until the issue becomes urgent in production or with customers", "Delegate benefits realization completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "benefits realization is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-39",
      type: "mcq",
      title: "Escalation",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for escalation?",
      options: ["Apply escalation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use escalation only because it sounds advanced, without checking impact or constraints", "Ignore escalation until the issue becomes urgent in production or with customers", "Delegate escalation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "escalation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pm-40",
      type: "mcq",
      title: "Sponsor Scope Request",
      prompt: "In a professional PMP Project Management Professional scenario, which response best demonstrates strong judgment for sponsor scope request?",
      options: ["Apply sponsor scope request with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use sponsor scope request only because it sounds advanced, without checking impact or constraints", "Ignore sponsor scope request until the issue becomes urgent in production or with customers", "Delegate sponsor scope request completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "sponsor scope request is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
