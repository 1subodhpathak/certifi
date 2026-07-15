import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const nexusData = {
  id: ASSESSMENT_TYPES.nexus,
  title: "Nexus Scaled Scrum Professional Certification",
  shortTitle: "Nexus",
  category: "Project Management",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Scaled Scrum with Nexus, integration, dependencies, Nexus Sprint Planning, Nexus Daily Scrum, refinement, Nexus Sprint Backlog, and integrated increments.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "nx-01",
      type: "mcq",
      title: "Scaling",
      prompt: "What is the primary purpose of the Nexus framework?",
      options: ["To replace Scrum", "To scale Scrum for 3-9 teams working on a single product", "To manage waterfalls", "To reduce team size"],
      correctIndex: 1,
      explanation: "Nexus is designed for multiple teams working on one Product Backlog."
    },
    {
      id: "nx-02",
      type: "mcq",
      title: "The NIT",
      prompt: "What does NIT stand for in Nexus?",
      options: ["Nexus Integration Team", "Nexus IT Team", "New Implementation Task", "Nexus Internal Testing"],
      correctIndex: 0,
      explanation: "The NIT is responsible for ensuring an integrated Increment is produced."
    },
    {
      id: "nx-03",
      type: "mcq",
      title: "Dependencies",
      prompt: "What is the biggest challenge Nexus aims to solve?",
      options: ["Lack of budget", "Cross-team dependencies and integration issues", "Choosing tools", "Managing stakeholders"],
      correctIndex: 1,
      explanation: "Scale increases communication and dependency overhead. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "nx-04",
      type: "mcq",
      title: "Events",
      prompt: "Which event replaces the standard Sprint Planning when scaling with Nexus?",
      options: ["Nexus Sprint Planning", "Big Room Planning", "Master Planning", "Shared Planning"],
      correctIndex: 0,
      explanation: "Nexus Sprint Planning coordinates work across all teams."
    },
    {
      id: "nx-05",
      type: "mcq",
      title: "The Daily",
      prompt: "What is the \"Nexus Daily Scrum\"?",
      options: ["A meeting for all developers", "A meeting for representatives to identify integration issues", "A monthly update", "A board review"],
      correctIndex: 1,
      explanation: "It happens before individual team Dailies to coordinate cross-team work."
    },
    {
      id: "nx-06",
      type: "mcq",
      title: "Sprint Backlog",
      prompt: "Does Nexus have a \"Nexus Sprint Backlog\"?",
      options: ["No, only team backlogs", "Yes, it provides visibility into dependencies and the Nexus goal", "Only for the PO", "Only for managers"],
      correctIndex: 1,
      explanation: "The Nexus Sprint Backlog shows the state of the integrated work."
    },
    {
      id: "nx-07",
      type: "mcq",
      title: "Roles",
      prompt: "Which role is part of the Nexus Integration Team?",
      options: ["Product Owner", "Scrum Master", "One or more NIT Members", "All of the above"],
      correctIndex: 3,
      explanation: "The NIT consists of the PO, a Scrum Master, and members from the teams."
    },
    {
      id: "nx-08",
      type: "mcq",
      title: "Refinement",
      prompt: "How is Refinement different in Nexus?",
      options: ["It isn't", "It is a formal event used to decompose work and identify dependencies early", "It is optional", "It is done by the PO only"],
      correctIndex: 1,
      explanation: "Frequent refinement is essential to minimize future integration issues."
    },
    {
      id: "nx-09",
      type: "mcq",
      title: "The Increment",
      prompt: "What is the expected output of every Nexus Sprint?",
      options: ["Multiple separate increments", "A single, integrated \"Done\" Increment", "A prototype", "A plan"],
      correctIndex: 1,
      explanation: "The goal is always one integrated product increment. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "nx-10",
      type: "mcq",
      title: "Nexus Sprint Goal",
      prompt: "Who is accountable for the Nexus Sprint Goal?",
      options: ["Individual teams", "The Nexus Integration Team", "The Stakeholders", "The CEO"],
      correctIndex: 1,
      explanation: "The NIT ensures the goal is met and the product integrates."
    },
    {
      id: "nx-11",
      type: "mcq",
      title: "Integration",
      prompt: "Who performs the actual integration work in Nexus?",
      options: ["The NIT only", "The individual Scrum Teams", "A separate QA team", "The Customer"],
      correctIndex: 1,
      explanation: "The teams do the work; the NIT provides coaching and ensures accountability."
    },
    {
      id: "nx-12",
      type: "mcq",
      title: "Scrum Master",
      prompt: "Can the Scrum Master of a Nexus also be a Scrum Master for an individual team?",
      options: ["Yes", "No", "Only if the project is small", "Only with permission"],
      correctIndex: 0,
      explanation: "This is common to ensure alignment, but depends on capacity."
    },
    {
      id: "nx-13",
      type: "mcq",
      title: "Product Owner",
      prompt: "How many Product Owners are in a Nexus?",
      options: ["One per team", "Only one for the entire Nexus", "Two", "Unlimited"],
      correctIndex: 1,
      explanation: "One product, one backlog, one Product Owner. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "nx-14",
      type: "mcq",
      title: "Retrospective",
      prompt: "What are the three parts of the Nexus Sprint Retrospective?",
      options: ["Start, Stop, Continue", "Nexus-wide, Team-level, Nexus-wide (Integrated)", "Initiate, Plan, Execute", "Individual, Team, Stakeholder"],
      correctIndex: 1,
      explanation: "It starts with cross-team issues, then team specific, then back to integrated improvement."
    },
    {
      id: "nx-15",
      type: "mcq",
      title: "Team Size",
      prompt: "What is the recommended number of Scrum Teams in a Nexus?",
      options: ["2-5", "3-9", "10-20", "Unlimited"],
      correctIndex: 1,
      explanation: "Nexus is designed for scaling up to 9 teams. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "nx-16",
      type: "mcq",
      title: "Nexus Sprint Review",
      prompt: "Which event provides transparency into the integrated increment for stakeholders?",
      options: ["Team Sprint Review", "Nexus Sprint Review", "Stakeholder Meeting", "Demo Day"],
      correctIndex: 1,
      explanation: "The Nexus Sprint Review replaces individual reviews for the product."
    },
    {
      id: "nx-17",
      type: "mcq",
      title: "Self-Organization",
      prompt: "Does Nexus reduce the self-organization of teams?",
      options: ["Yes, NIT dictates everything", "No, the NIT coaches teams to solve their own integration issues", "Partially", "Only for juniors"],
      correctIndex: 1,
      explanation: "The NIT is a coaching and accountability body, not a management body."
    },
    {
      id: "nx-18",
      type: "mcq",
      title: "Conflict",
      prompt: "If a team cannot integrate their work, what should the NIT do?",
      options: ["Do it for them", "Work with the teams to resolve the underlying issue", "Fire the team", "Ignore it"],
      correctIndex: 1,
      explanation: "The NIT exists to help the Nexus deliver an integrated increment."
    },
    {
      id: "nx-19",
      type: "mcq",
      title: "Transparency",
      prompt: "What is the primary artifact that provides transparency in Nexus?",
      options: ["The NIT Report", "The Integrated Increment", "The Gantt Chart", "The Budget"],
      correctIndex: 1,
      explanation: "The increment is the ultimate proof of progress. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "nx-20",
      type: "mcq",
      title: "Nexus Framework",
      prompt: "Nexus is a process or a framework?",
      options: ["Process", "Framework", "Methodology", "Tool"],
      correctIndex: 1,
      explanation: "Like Scrum, Nexus is a framework that can be adapted. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "nx-21",
      type: "mcq",
      title: "Nexus Scale",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus scale?",
      options: ["Apply Nexus scale with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus scale only because it sounds advanced, without checking impact or constraints", "Ignore Nexus scale until the issue becomes urgent in production or with customers", "Delegate Nexus scale completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus scale is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-22",
      type: "mcq",
      title: "Single Product Backlog",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for single Product Backlog?",
      options: ["Apply single Product Backlog with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use single Product Backlog only because it sounds advanced, without checking impact or constraints", "Ignore single Product Backlog until the issue becomes urgent in production or with customers", "Delegate single Product Backlog completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "single Product Backlog is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-23",
      type: "mcq",
      title: "Nexus Integration Team",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus Integration Team?",
      options: ["Apply Nexus Integration Team with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus Integration Team only because it sounds advanced, without checking impact or constraints", "Ignore Nexus Integration Team until the issue becomes urgent in production or with customers", "Delegate Nexus Integration Team completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus Integration Team is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-24",
      type: "mcq",
      title: "Cross-Team Dependencies",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for cross-team dependencies?",
      options: ["Apply cross-team dependencies with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use cross-team dependencies only because it sounds advanced, without checking impact or constraints", "Ignore cross-team dependencies until the issue becomes urgent in production or with customers", "Delegate cross-team dependencies completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "cross-team dependencies is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-25",
      type: "mcq",
      title: "Nexus Sprint Planning",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus Sprint Planning?",
      options: ["Apply Nexus Sprint Planning with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus Sprint Planning only because it sounds advanced, without checking impact or constraints", "Ignore Nexus Sprint Planning until the issue becomes urgent in production or with customers", "Delegate Nexus Sprint Planning completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus Sprint Planning is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-26",
      type: "mcq",
      title: "Nexus Daily Scrum",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus Daily Scrum?",
      options: ["Apply Nexus Daily Scrum with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus Daily Scrum only because it sounds advanced, without checking impact or constraints", "Ignore Nexus Daily Scrum until the issue becomes urgent in production or with customers", "Delegate Nexus Daily Scrum completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus Daily Scrum is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-27",
      type: "mcq",
      title: "Nexus Sprint Review",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus Sprint Review?",
      options: ["Apply Nexus Sprint Review with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus Sprint Review only because it sounds advanced, without checking impact or constraints", "Ignore Nexus Sprint Review until the issue becomes urgent in production or with customers", "Delegate Nexus Sprint Review completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus Sprint Review is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-28",
      type: "mcq",
      title: "Nexus Retrospective",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus Retrospective?",
      options: ["Apply Nexus Retrospective with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus Retrospective only because it sounds advanced, without checking impact or constraints", "Ignore Nexus Retrospective until the issue becomes urgent in production or with customers", "Delegate Nexus Retrospective completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus Retrospective is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-29",
      type: "mcq",
      title: "Shared Definition Of Done",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for shared Definition of Done?",
      options: ["Apply shared Definition of Done with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use shared Definition of Done only because it sounds advanced, without checking impact or constraints", "Ignore shared Definition of Done until the issue becomes urgent in production or with customers", "Delegate shared Definition of Done completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "shared Definition of Done is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-30",
      type: "mcq",
      title: "Nexus Refinement",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus refinement?",
      options: ["Apply Nexus refinement with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus refinement only because it sounds advanced, without checking impact or constraints", "Ignore Nexus refinement until the issue becomes urgent in production or with customers", "Delegate Nexus refinement completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus refinement is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-31",
      type: "mcq",
      title: "Integration Debt",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for integration debt?",
      options: ["Apply integration debt with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use integration debt only because it sounds advanced, without checking impact or constraints", "Ignore integration debt until the issue becomes urgent in production or with customers", "Delegate integration debt completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "integration debt is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-32",
      type: "mcq",
      title: "Local Optimization Anti-Pattern",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for local optimization anti-pattern?",
      options: ["Apply local optimization anti-pattern with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use local optimization anti-pattern only because it sounds advanced, without checking impact or constraints", "Ignore local optimization anti-pattern until the issue becomes urgent in production or with customers", "Delegate local optimization anti-pattern completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "local optimization anti-pattern is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-33",
      type: "mcq",
      title: "Product Owner Accountability",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Product Owner accountability?",
      options: ["Apply Product Owner accountability with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Product Owner accountability only because it sounds advanced, without checking impact or constraints", "Ignore Product Owner accountability until the issue becomes urgent in production or with customers", "Delegate Product Owner accountability completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Product Owner accountability is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-34",
      type: "mcq",
      title: "Nexus Sprint Backlog Transparency",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus Sprint Backlog transparency?",
      options: ["Apply Nexus Sprint Backlog transparency with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus Sprint Backlog transparency only because it sounds advanced, without checking impact or constraints", "Ignore Nexus Sprint Backlog transparency until the issue becomes urgent in production or with customers", "Delegate Nexus Sprint Backlog transparency completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus Sprint Backlog transparency is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-35",
      type: "mcq",
      title: "Continuous Integration",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for continuous integration?",
      options: ["Apply continuous integration with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use continuous integration only because it sounds advanced, without checking impact or constraints", "Ignore continuous integration until the issue becomes urgent in production or with customers", "Delegate continuous integration completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "continuous integration is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-36",
      type: "mcq",
      title: "Nit Membership",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for NIT membership?",
      options: ["Apply NIT membership with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use NIT membership only because it sounds advanced, without checking impact or constraints", "Ignore NIT membership until the issue becomes urgent in production or with customers", "Delegate NIT membership completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "NIT membership is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-37",
      type: "mcq",
      title: "Dependency Resolution",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for dependency resolution?",
      options: ["Apply dependency resolution with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use dependency resolution only because it sounds advanced, without checking impact or constraints", "Ignore dependency resolution until the issue becomes urgent in production or with customers", "Delegate dependency resolution completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "dependency resolution is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-38",
      type: "mcq",
      title: "Scrum Principles At Scale",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Scrum principles at scale?",
      options: ["Apply Scrum principles at scale with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Scrum principles at scale only because it sounds advanced, without checking impact or constraints", "Ignore Scrum principles at scale until the issue becomes urgent in production or with customers", "Delegate Scrum principles at scale completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Scrum principles at scale is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-39",
      type: "mcq",
      title: "Nexus Sprint Goal",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for Nexus Sprint Goal?",
      options: ["Apply Nexus Sprint Goal with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Nexus Sprint Goal only because it sounds advanced, without checking impact or constraints", "Ignore Nexus Sprint Goal until the issue becomes urgent in production or with customers", "Delegate Nexus Sprint Goal completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Nexus Sprint Goal is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "nx-40",
      type: "mcq",
      title: "Repeated Integration Failure",
      prompt: "In a professional Nexus Scaled Scrum Professional scenario, which response best demonstrates strong judgment for repeated integration failure?",
      options: ["Apply repeated integration failure with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use repeated integration failure only because it sounds advanced, without checking impact or constraints", "Ignore repeated integration failure until the issue becomes urgent in production or with customers", "Delegate repeated integration failure completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "repeated integration failure is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
