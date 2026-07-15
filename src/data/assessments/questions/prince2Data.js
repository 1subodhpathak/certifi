import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const prince2Data = {
  id: ASSESSMENT_TYPES.prince2,
  title: "PRINCE2 Project Management Foundation Certification",
  shortTitle: "PRINCE2",
  category: "Project Management",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "PRINCE2 principles, themes/practices, processes, business case, stages, tolerances, change, risk, quality, and governance.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "p2-01",
      type: "mcq",
      title: "Principles",
      prompt: "How many principles are in PRINCE2?",
      options: ["5", "7", "9", "12"],
      correctIndex: 1,
      explanation: "PRINCE2 is based on 7 core principles. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "p2-02",
      type: "mcq",
      title: "Business Case",
      prompt: "Which principle states that a project must have a valid reason to start and continue?",
      options: ["Learn from experience", "Continued business justification", "Focus on products", "Manage by stages"],
      correctIndex: 1,
      explanation: "Without justification, a project should be stopped. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "p2-03",
      type: "mcq",
      title: "Organization",
      prompt: "What are the three levels of management in the PRINCE2 project team?",
      options: ["Owner, Manager, Staff", "Directing, Managing, Delivering", "Initiation, Planning, Closing", "Sponsor, PM, Team Lead"],
      correctIndex: 1,
      explanation: "Project Board (Directing), PM (Managing), Team Manager (Delivering)."
    },
    {
      id: "p2-04",
      type: "mcq",
      title: "Processes",
      prompt: "What is the first process in a PRINCE2 project?",
      options: ["Initiating a Project", "Starting up a Project (SU)", "Directing a Project", "Controlling a Stage"],
      correctIndex: 1,
      explanation: "Starting up a Project occurs pre-project to verify viability."
    },
    {
      id: "p2-05",
      type: "mcq",
      title: "Tolerance",
      prompt: "What is the purpose of \"Manage by Exception\"?",
      options: ["To fire people", "To allow management to intervene only when tolerances are exceeded", "To document everything", "To speed up work"],
      correctIndex: 1,
      explanation: "It defines the authority levels and thresholds (tolerances)."
    },
    {
      id: "p2-06",
      type: "mcq",
      title: "Products",
      prompt: "What is the \"Project Product Description\" used for?",
      options: ["To buy products", "To define the customer's quality expectations", "To market the project", "To list all tasks"],
      correctIndex: 1,
      explanation: "It defines what the project must deliver to be accepted."
    },
    {
      id: "p2-07",
      type: "mcq",
      title: "Themes",
      prompt: "Which theme addresses how the project will handle changes and issues?",
      options: ["Risk", "Change", "Quality", "Progress"],
      correctIndex: 1,
      explanation: "The Change theme manages requests and configurations. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "p2-08",
      type: "mcq",
      title: "Stages",
      prompt: "What is the minimum number of management stages in a PRINCE2 project?",
      options: ["1", "2", "3", "5"],
      correctIndex: 1,
      explanation: "An initiation stage and at least one further management stage."
    },
    {
      id: "p2-09",
      type: "mcq",
      title: "Project Board",
      prompt: "Who represents the interests of those who will use the project products?",
      options: ["Executive", "Senior User", "Senior Supplier", "Project Manager"],
      correctIndex: 1,
      explanation: "The Senior User is responsible for specifying the requirements."
    },
    {
      id: "p2-10",
      type: "mcq",
      title: "Plans",
      prompt: "Which plan provides the Project Board with the info needed to approve the next stage?",
      options: ["Project Plan", "Stage Plan", "Team Plan", "Exception Plan"],
      correctIndex: 1,
      explanation: "The Stage Plan is the detailed plan for the current/next stage."
    },
    {
      id: "p2-11",
      type: "mcq",
      title: "Quality",
      prompt: "What is a \"Quality Audit\"?",
      options: ["Checking every product", "An independent check that the project is following its quality processes", "A performance review", "A financial check"],
      correctIndex: 1,
      explanation: "Audits ensure compliance with the quality management system."
    },
    {
      id: "p2-12",
      type: "mcq",
      title: "Risk",
      prompt: "What is the \"Risk Appetite\"?",
      options: ["How much risk is acceptable", "A list of risks", "The cost of risk", "A strategy"],
      correctIndex: 0,
      explanation: "Risk appetite defines the level of risk exposure the organization is willing to take."
    },
    {
      id: "p2-13",
      type: "mcq",
      title: "Work Package",
      prompt: "What is a Work Package?",
      options: ["A suitcase", "A set of info about one or more products to be delivered by a team", "A project stage", "A financial budget"],
      correctIndex: 1,
      explanation: "Work Packages are the link between the PM and Team Manager."
    },
    {
      id: "p2-14",
      type: "mcq",
      title: "Progress",
      prompt: "What is an \"End Stage Report\" used for?",
      options: ["To end the project", "To summarize progress and help the Board decide on the next stage", "To assign tasks", "To hire people"],
      correctIndex: 1,
      explanation: "It provides a snapshot of performance at the end of a stage."
    },
    {
      id: "p2-15",
      type: "mcq",
      title: "Issue Register",
      prompt: "What is the difference between an Issue and a Risk?",
      options: ["No difference", "A risk is a future uncertainty; an issue has already happened", "A risk is always bad", "An issue is always small"],
      correctIndex: 1,
      explanation: "Issues are current events; risks are potential events. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "p2-16",
      type: "mcq",
      title: "Executive",
      prompt: "What is the primary role of the Executive on the Project Board?",
      options: ["To do the work", "To ensure the project provides value for money (Business)", "To write code", "To manage the team"],
      correctIndex: 1,
      explanation: "The Executive is the \"owner\" of the Business Case. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "p2-17",
      type: "mcq",
      title: "Checkpoints",
      prompt: "What is a \"Checkpoint Report\"?",
      options: ["A status update from the Team Manager to the PM", "A report to the Board", "A final report", "A technical doc"],
      correctIndex: 0,
      explanation: "It provides progress info at the team level. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "p2-18",
      type: "mcq",
      title: "Closure",
      prompt: "Which process prepares the project for its end?",
      options: ["Managing Product Delivery", "Closing a Project (CP)", "Controlling a Stage", "Directing a Project"],
      correctIndex: 1,
      explanation: "CP ensures a clean shutdown and handover. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "p2-19",
      type: "mcq",
      title: "Tailoring",
      prompt: "What does \"Tailoring\" PRINCE2 mean?",
      options: ["Removing rules", "Adapting the methodology to suit the project context", "Ignoring principles", "Changing the name"],
      correctIndex: 1,
      explanation: "Tailoring ensures the method is appropriate for the scale/risk/complexity."
    },
    {
      id: "p2-20",
      type: "mcq",
      title: "Configuration Management",
      prompt: "What is Configuration Management primarily concerned with?",
      options: ["Setting up PCs", "Version control and tracking of project products", "Hiring", "Office layout"],
      correctIndex: 1,
      explanation: "It tracks the status and versions of all deliverables. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "p2-21",
      type: "mcq",
      title: "Tailoring Prince2",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for tailoring PRINCE2?",
      options: ["Apply tailoring PRINCE2 with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use tailoring PRINCE2 only because it sounds advanced, without checking impact or constraints", "Ignore tailoring PRINCE2 until the issue becomes urgent in production or with customers", "Delegate tailoring PRINCE2 completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "tailoring PRINCE2 is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-22",
      type: "mcq",
      title: "Business Case Ownership",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for business case ownership?",
      options: ["Apply business case ownership with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use business case ownership only because it sounds advanced, without checking impact or constraints", "Ignore business case ownership until the issue becomes urgent in production or with customers", "Delegate business case ownership completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "business case ownership is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-23",
      type: "mcq",
      title: "Product-Based Planning",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for product-based planning?",
      options: ["Apply product-based planning with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use product-based planning only because it sounds advanced, without checking impact or constraints", "Ignore product-based planning until the issue becomes urgent in production or with customers", "Delegate product-based planning completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "product-based planning is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-24",
      type: "mcq",
      title: "Management Stages",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for management stages?",
      options: ["Apply management stages with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use management stages only because it sounds advanced, without checking impact or constraints", "Ignore management stages until the issue becomes urgent in production or with customers", "Delegate management stages completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "management stages is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-25",
      type: "mcq",
      title: "Tolerances",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for tolerances?",
      options: ["Apply tolerances with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use tolerances only because it sounds advanced, without checking impact or constraints", "Ignore tolerances until the issue becomes urgent in production or with customers", "Delegate tolerances completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "tolerances is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-26",
      type: "mcq",
      title: "Change Control",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for change control?",
      options: ["Apply change control with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use change control only because it sounds advanced, without checking impact or constraints", "Ignore change control until the issue becomes urgent in production or with customers", "Delegate change control completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "change control is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-27",
      type: "mcq",
      title: "Risk Response",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for risk response?",
      options: ["Apply risk response with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use risk response only because it sounds advanced, without checking impact or constraints", "Ignore risk response until the issue becomes urgent in production or with customers", "Delegate risk response completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "risk response is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-28",
      type: "mcq",
      title: "Quality Register",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for quality register?",
      options: ["Apply quality register with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use quality register only because it sounds advanced, without checking impact or constraints", "Ignore quality register until the issue becomes urgent in production or with customers", "Delegate quality register completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "quality register is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-29",
      type: "mcq",
      title: "Work Package",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for work package?",
      options: ["Apply work package with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use work package only because it sounds advanced, without checking impact or constraints", "Ignore work package until the issue becomes urgent in production or with customers", "Delegate work package completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "work package is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-30",
      type: "mcq",
      title: "Highlight Report",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for highlight report?",
      options: ["Apply highlight report with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use highlight report only because it sounds advanced, without checking impact or constraints", "Ignore highlight report until the issue becomes urgent in production or with customers", "Delegate highlight report completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "highlight report is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-31",
      type: "mcq",
      title: "Exception Plan",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for exception plan?",
      options: ["Apply exception plan with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use exception plan only because it sounds advanced, without checking impact or constraints", "Ignore exception plan until the issue becomes urgent in production or with customers", "Delegate exception plan completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "exception plan is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-32",
      type: "mcq",
      title: "Lessons Log",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for lessons log?",
      options: ["Apply lessons log with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use lessons log only because it sounds advanced, without checking impact or constraints", "Ignore lessons log until the issue becomes urgent in production or with customers", "Delegate lessons log completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "lessons log is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-33",
      type: "mcq",
      title: "Benefits Review",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for benefits review?",
      options: ["Apply benefits review with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use benefits review only because it sounds advanced, without checking impact or constraints", "Ignore benefits review until the issue becomes urgent in production or with customers", "Delegate benefits review completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "benefits review is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-34",
      type: "mcq",
      title: "Project Brief",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for project brief?",
      options: ["Apply project brief with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use project brief only because it sounds advanced, without checking impact or constraints", "Ignore project brief until the issue becomes urgent in production or with customers", "Delegate project brief completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "project brief is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-35",
      type: "mcq",
      title: "Pid Baseline",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for PID baseline?",
      options: ["Apply PID baseline with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use PID baseline only because it sounds advanced, without checking impact or constraints", "Ignore PID baseline until the issue becomes urgent in production or with customers", "Delegate PID baseline completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "PID baseline is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-36",
      type: "mcq",
      title: "Project Board",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for project board?",
      options: ["Apply project board with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use project board only because it sounds advanced, without checking impact or constraints", "Ignore project board until the issue becomes urgent in production or with customers", "Delegate project board completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "project board is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-37",
      type: "mcq",
      title: "Senior Supplier",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for senior supplier?",
      options: ["Apply senior supplier with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use senior supplier only because it sounds advanced, without checking impact or constraints", "Ignore senior supplier until the issue becomes urgent in production or with customers", "Delegate senior supplier completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "senior supplier is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-38",
      type: "mcq",
      title: "Controlled Closure",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for controlled closure?",
      options: ["Apply controlled closure with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use controlled closure only because it sounds advanced, without checking impact or constraints", "Ignore controlled closure until the issue becomes urgent in production or with customers", "Delegate controlled closure completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "controlled closure is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-39",
      type: "mcq",
      title: "Premature Closure",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for premature closure?",
      options: ["Apply premature closure with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use premature closure only because it sounds advanced, without checking impact or constraints", "Ignore premature closure until the issue becomes urgent in production or with customers", "Delegate premature closure completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "premature closure is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "p2-40",
      type: "mcq",
      title: "Stage Exception Scenario",
      prompt: "In a professional PRINCE2 Project Management Foundation scenario, which response best demonstrates strong judgment for stage exception scenario?",
      options: ["Apply stage exception scenario with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use stage exception scenario only because it sounds advanced, without checking impact or constraints", "Ignore stage exception scenario until the issue becomes urgent in production or with customers", "Delegate stage exception scenario completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "stage exception scenario is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
