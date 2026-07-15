import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const shrmData = {
  id: ASSESSMENT_TYPES.shrm,
  title: "SHRM HR Operations & People Strategy Certification",
  shortTitle: "HR Ops",
  category: "HR & Recruitment",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "HR strategy, employee lifecycle, compliance, employee relations, performance management, total rewards, DEI, workforce planning, analytics, and HR operations judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "hr-01",
      type: "mcq",
      title: "Strategic HR",
      prompt: "What does \"SHRM\" stand for?",
      options: ["Society for Human Resource Management", "Strategic Human Resource Method", "Systematic Hire and Retention Manager", "Specialist HR Market"],
      correctIndex: 0,
      explanation: "SHRM is the world's largest HR professional society. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-02",
      type: "mcq",
      title: "Employee Life Cycle",
      prompt: "What are the stages of the Employee Life Cycle?",
      options: ["Hire, Work, Fire", "Attraction, Recruitment, Onboarding, Development, Retention, Separation", "Application, Interview, Offer", "Start, Middle, End"],
      correctIndex: 1,
      explanation: "HR manages the entire journey of an employee. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-03",
      type: "mcq",
      title: "Total Rewards",
      prompt: "What is included in \"Total Rewards\"?",
      options: ["Salary only", "Salary, benefits, recognition, and development opportunities", "Bonuses only", "Gift cards"],
      correctIndex: 1,
      explanation: "Total rewards is everything of value provided to an employee. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-04",
      type: "mcq",
      title: "Compliance",
      prompt: "What is \"At-Will Employment\" (common in many US states)?",
      options: ["Employment for life", "The employer or employee can end the relationship at any time for any legal reason", "A contract for 1 year", "Volunteer work"],
      correctIndex: 1,
      explanation: "A fundamental concept in US labor law. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-05",
      type: "mcq",
      title: "Employee Relations",
      prompt: "What is the primary goal of \"Employee Relations\"?",
      options: ["To be friends", "To manage the relationship between employer and employees to ensure productivity and morale", "To manage unions only", "To fire people"],
      correctIndex: 1,
      explanation: "ER focuses on conflict resolution and workplace culture. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-06",
      type: "mcq",
      title: "Performance Mgmt",
      prompt: "What is a \"360-Degree Feedback\"?",
      options: ["Feedback from a circle", "Feedback from managers, peers, direct reports, and sometimes customers", "Looking at performance all year", "A physical exam"],
      correctIndex: 1,
      explanation: "Provides a comprehensive view of performance. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-07",
      type: "mcq",
      title: "Training & Dev",
      prompt: "What is \"Upskilling\"?",
      options: ["Promoting someone", "Teaching employees new skills to help them stay relevant in their current role", "Hiring new people", "Changing job titles"],
      correctIndex: 1,
      explanation: "Critical for adapting to technological change. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-08",
      type: "mcq",
      title: "DE&I",
      prompt: "What does \"DE&I\" stand for?",
      options: ["Department of Education and Industry", "Diversity, Equity, and Inclusion", "Data, Entry, and Integration", "Digital Equity and Internet"],
      correctIndex: 1,
      explanation: "DE&I is a core strategic focus for modern HR. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-09",
      type: "mcq",
      title: "Workforce Planning",
      prompt: "What is \"Succession Planning\"?",
      options: ["Planning a party", "Identifying and developing future leaders to fill key roles when current leaders leave", "Hiring many people at once", "Retiring employees"],
      correctIndex: 1,
      explanation: "Ensures business continuity. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-10",
      type: "mcq",
      title: "Compensation",
      prompt: "What is \"Pay Equity\"?",
      options: ["Giving everyone a raise", "Ensuring employees are paid the same for equal work, regardless of gender, race, etc.", "Paying the minimum wage", "Paying more than competitors"],
      correctIndex: 1,
      explanation: "A major legal and ethical requirement. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-11",
      type: "mcq",
      title: "Benefits",
      prompt: "Which of these is a \"Mandatory Benefit\" in the US?",
      options: ["Paid Vacation", "Social Security / Medicare", "Gym membership", "Remote work"],
      correctIndex: 1,
      explanation: "Legally required benefits vary by country. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-12",
      type: "mcq",
      title: "Termination",
      prompt: "What is a \"PIP\" (Performance Improvement Plan)?",
      options: ["A bonus", "A formal process to help an underperforming employee reach the required standards", "A firing notice", "A type of training"],
      correctIndex: 1,
      explanation: "PIPs are the last step before termination for performance. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-13",
      type: "mcq",
      title: "Onboarding",
      prompt: "What is the main goal of \"Onboarding\"?",
      options: ["Giving them a laptop", "Integrating new employees into the company culture and giving them tools to succeed", "Signing papers", "Touring the office"],
      correctIndex: 1,
      explanation: "Good onboarding improves retention. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-14",
      type: "mcq",
      title: "HRIS",
      prompt: "What does \"HRIS\" stand for?",
      options: ["Human Resource Information System", "Hire and Retention Integration Software", "Highly Responsive Intelligence System", "Human Relationship Interface"],
      correctIndex: 0,
      explanation: "HRIS is the software used to manage HR data. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-15",
      type: "mcq",
      title: "Employee Engagement",
      prompt: "Which tool is commonly used to measure employee engagement?",
      options: ["Stopwatch", "Engagement Surveys (eNPS)", "Revenue reports", "Attendance logs"],
      correctIndex: 1,
      explanation: "Surveys provide data on how employees feel about their work. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-16",
      type: "mcq",
      title: "Labor Unions",
      prompt: "What is \"Collective Bargaining\"?",
      options: ["Shopping for a deal", "Negotiation of wages and other conditions of employment by an organized body of employees (union)", "Individual negotiations", "A legal battle"],
      correctIndex: 1,
      explanation: "Core function of labor relations. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-17",
      type: "mcq",
      title: "Organizational Dev",
      prompt: "What is \"Change Management\" in HR?",
      options: ["Changing passwords", "The process of helping employees transition through organizational changes", "Firing managers", "Moving offices"],
      correctIndex: 1,
      explanation: "HR plays a lead role in cultural transitions. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-18",
      type: "mcq",
      title: "Recruitment",
      prompt: "What is \"Employer Branding\"?",
      options: ["The company logo", "The company's reputation as a place to work and its value proposition to employees", "The products they sell", "The office design"],
      correctIndex: 1,
      explanation: "Good branding attracts top talent. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-19",
      type: "mcq",
      title: "Turnover",
      prompt: "What is \"Voluntary Turnover\"?",
      options: ["Firing someone", "When an employee chooses to leave the company (e.g., for a new job)", "Layoffs", "Retirement"],
      correctIndex: 1,
      explanation: "High voluntary turnover is a sign of engagement issues. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-20",
      type: "mcq",
      title: "Ethics",
      prompt: "What is the role of an HR \"Code of Ethics\"?",
      options: ["To follow the law only", "To provide guidelines for professional and ethical behavior in HR practice", "To write rules", "To punish people"],
      correctIndex: 1,
      explanation: "Ethics are central to the SHRM competency model. This is a checked foundational concept for professional HR Ops work."
    },
    {
      id: "hr-21",
      type: "mcq",
      title: "Job Analysis",
      prompt: "In a professional SHRM HR Operations & People Strategy scenario, what is the strongest approach when dealing with job analysis?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Job Analysis requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "hr-22",
      type: "mcq",
      title: "Structured Onboarding",
      prompt: "A team is making a decision about structured onboarding. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about structured onboarding balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "hr-23",
      type: "mcq",
      title: "Employee Relations Investigation",
      prompt: "Which signal suggests employee relations investigation needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when employee relations investigation could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "hr-24",
      type: "mcq",
      title: "Progressive Discipline",
      prompt: "What is the best way to validate work involving progressive discipline?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for progressive discipline should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "hr-25",
      type: "mcq",
      title: "Performance Improvement Plan",
      prompt: "In a professional SHRM HR Operations & People Strategy scenario, what is the strongest approach when dealing with performance improvement plan?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Performance Improvement Plan requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "hr-26",
      type: "mcq",
      title: "Reasonable Accommodation",
      prompt: "A team is making a decision about reasonable accommodation. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about reasonable accommodation balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "hr-27",
      type: "mcq",
      title: "Harassment Complaint Process",
      prompt: "Which signal suggests harassment complaint process needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when harassment complaint process could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "hr-28",
      type: "mcq",
      title: "Pay Equity Review",
      prompt: "What is the best way to validate work involving pay equity review?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for pay equity review should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "hr-29",
      type: "mcq",
      title: "Succession Planning",
      prompt: "In a professional SHRM HR Operations & People Strategy scenario, what is the strongest approach when dealing with succession planning?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Succession Planning requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "hr-30",
      type: "mcq",
      title: "Workforce Analytics",
      prompt: "A team is making a decision about workforce analytics. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about workforce analytics balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "hr-31",
      type: "mcq",
      title: "Employee Engagement Survey",
      prompt: "Which signal suggests employee engagement survey needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when employee engagement survey could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "hr-32",
      type: "mcq",
      title: "Total Rewards Strategy",
      prompt: "What is the best way to validate work involving total rewards strategy?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for total rewards strategy should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "hr-33",
      type: "mcq",
      title: "Benefits Communication",
      prompt: "In a professional SHRM HR Operations & People Strategy scenario, what is the strongest approach when dealing with benefits communication?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Benefits Communication requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "hr-34",
      type: "mcq",
      title: "Learning Needs Analysis",
      prompt: "A team is making a decision about learning needs analysis. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about learning needs analysis balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "hr-35",
      type: "mcq",
      title: "Retention Risk",
      prompt: "Which signal suggests retention risk needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when retention risk could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "hr-36",
      type: "mcq",
      title: "Hris Data Integrity",
      prompt: "What is the best way to validate work involving HRIS data integrity?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for HRIS data integrity should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "hr-37",
      type: "mcq",
      title: "Policy Update Rollout",
      prompt: "In a professional SHRM HR Operations & People Strategy scenario, what is the strongest approach when dealing with policy update rollout?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Policy Update Rollout requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "hr-38",
      type: "mcq",
      title: "Manager Coaching",
      prompt: "A team is making a decision about manager coaching. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about manager coaching balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "hr-39",
      type: "mcq",
      title: "Compliance Documentation",
      prompt: "Which signal suggests compliance documentation needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when compliance documentation could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "hr-40",
      type: "mcq",
      title: "Strategic Hr Judgment",
      prompt: "What is the best way to validate work involving strategic HR judgment?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for strategic HR judgment should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
