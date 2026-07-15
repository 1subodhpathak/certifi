import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const sapBasicsData = {
  id: ASSESSMENT_TYPES.sap,
  title: "SAP ERP Foundations Professional Certification",
  shortTitle: "SAP Basics",
  category: "Business Operations",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "SAP ERP concepts, organizational structures, master data, FI/CO, MM, SD, procure-to-pay, order-to-cash, reporting, authorizations, S/4HANA, and business process integration.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sa-01",
      type: "mcq",
      title: "Core Concept",
      prompt: "What does \"SAP\" stand for?",
      options: ["Systems, Applications, and Products in Data Processing", "Simplified Accounting Platform", "Standard Automated Processing", "Software and Programming"],
      correctIndex: 0,
      explanation: "SAP is the world's leading ERP software provider. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-02",
      type: "mcq",
      title: "ERP",
      prompt: "What is the primary purpose of an ERP system?",
      options: ["Writing emails", "Integrating all business processes into a single system with a shared database", "Designing products", "Managing the website"],
      correctIndex: 1,
      explanation: "ERP breaks down silos between departments. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-03",
      type: "mcq",
      title: "S/4HANA",
      prompt: "What is \"S/4HANA\"?",
      options: ["A new version of Java", "SAP's latest ERP suite designed for in-memory computing", "A hardware server", "A mobile app"],
      correctIndex: 1,
      explanation: "HANA is the high-performance in-memory database at the core. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-04",
      type: "mcq",
      title: "Modules",
      prompt: "Which module handles Financial Accounting?",
      options: ["MM", "SD", "FI", "PP"],
      correctIndex: 2,
      explanation: "FI (Financial Accounting) is the core module for reporting. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-05",
      type: "mcq",
      title: "Navigation",
      prompt: "What is a \"Transaction Code\" (T-Code)?",
      options: ["A secret password", "A shortcut code used to navigate directly to an SAP screen or function", "A tax code", "A product ID"],
      correctIndex: 1,
      explanation: "T-Codes (e.g., VA01 for Create Sales Order) are essential for navigation."
    },
    {
      id: "sa-06",
      type: "mcq",
      title: "Master Data",
      prompt: "What is \"Master Data\" in SAP?",
      options: ["Temporary records", "Permanent, centralized data about entities (e.g., Material, Customer, Vendor)", "User passwords", "Log files"],
      correctIndex: 1,
      explanation: "Master data is reused across many transactions. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-07",
      type: "mcq",
      title: "Client",
      prompt: "In SAP, what is a \"Client\"?",
      options: ["A customer", "A self-contained unit in an SAP system with its own set of data and records", "A type of hardware", "An employee"],
      correctIndex: 1,
      explanation: "A single SAP installation can host multiple clients (e.g., 100 for Dev, 200 for Test)."
    },
    {
      id: "sa-08",
      type: "mcq",
      title: "MM Module",
      prompt: "What does the \"MM\" module stand for?",
      options: ["Module Management", "Materials Management", "Marketing Management", "Manufacturing Module"],
      correctIndex: 1,
      explanation: "MM handles procurement, inventory, and warehouse management. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-09",
      type: "mcq",
      title: "SD Module",
      prompt: "What is the \"SD\" module responsible for?",
      options: ["Sales and Distribution", "System Development", "Standard Documentation", "Staff Directory"],
      correctIndex: 0,
      explanation: "SD handles orders, shipping, and billing. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-10",
      type: "mcq",
      title: "Fiori",
      prompt: "What is \"SAP Fiori\"?",
      options: ["A floral department", "A modern, user-friendly UI for SAP applications", "A database engine", "A programming language"],
      correctIndex: 1,
      explanation: "Fiori provides a web-like, responsive UX for SAP. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-11",
      type: "mcq",
      title: "ABAP",
      prompt: "What is \"ABAP\"?",
      options: ["A type of budget", "SAP's proprietary programming language used to develop its applications", "An accounting term", "A security protocol"],
      correctIndex: 1,
      explanation: "Advanced Business Application Programming. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-12",
      type: "mcq",
      title: "Configuration",
      prompt: "What is the \"IMG\" (Implementation Guide) used for?",
      options: ["Reading news", "Customizing and configuring SAP settings without writing code", "Writing help docs", "Managing users"],
      correctIndex: 1,
      explanation: "IMG is the central area for consultants to set up business rules. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-13",
      type: "mcq",
      title: "Workflow",
      prompt: "What is \"SAP Workflow\" used for?",
      options: ["Managing email", "Automating business processes and approval cycles", "Drawing diagrams", "Controlling hardware"],
      correctIndex: 1,
      explanation: "Workflow routes tasks to the right person for action/approval. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-14",
      type: "mcq",
      title: "Transport",
      prompt: "What is a \"Transport Request\"?",
      options: ["A travel form", "A package of configuration/code changes moved from one SAP system (e.g., Dev) to another (e.g., Prod)", "A shipping label", "A database backup"],
      correctIndex: 1,
      explanation: "Transports ensure consistency across the landscape. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-15",
      type: "mcq",
      title: "Organizational Structure",
      prompt: "What is the highest organizational level in SAP Financials?",
      options: ["Plant", "Company Code", "Sales Org", "Purchasing Org"],
      correctIndex: 1,
      explanation: "Company Code represents a legal entity for which a set of books is prepared."
    },
    {
      id: "sa-16",
      type: "mcq",
      title: "Reporting",
      prompt: "What is \"SAP BW/4HANA\"?",
      options: ["A web server", "A data warehouse solution for advanced analytics and reporting", "A mobile app", "An accounting module"],
      correctIndex: 1,
      explanation: "BW (Business Warehouse) handles heavy reporting outside the transactional system."
    },
    {
      id: "sa-17",
      type: "mcq",
      title: "Cloud",
      prompt: "What is \"Rise with SAP\"?",
      options: ["A morning meeting", "A managed cloud service for transitioning to S/4HANA Cloud", "A training program", "A type of database"],
      correctIndex: 1,
      explanation: "Rise is SAP's \"Business Transformation as a Service\" offering. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-18",
      type: "mcq",
      title: "Procure-to-Pay",
      prompt: "What is the \"Procure-to-Pay\" (P2P) cycle?",
      options: ["Buying and paying for goods", "A sales cycle", "A payroll process", "A manufacturing plan"],
      correctIndex: 0,
      explanation: "The integration of procurement and financial processes. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-19",
      type: "mcq",
      title: "Order-to-Cash",
      prompt: "What is the \"Order-to-Cash\" (O2C) cycle?",
      options: ["A manufacturing process", "The sequence of steps from receiving a customer order to receiving payment", "Buying inventory", "Hiring employees"],
      correctIndex: 1,
      explanation: "Core business cycle handled by SD and FI. This is a checked foundational concept for professional SAP Basics work."
    },
    {
      id: "sa-20",
      type: "mcq",
      title: "Security",
      prompt: "How is access managed in SAP?",
      options: ["Passwords only", "Roles and Authorization Objects", "IP blocking", "Physical keys"],
      correctIndex: 1,
      explanation: "Security is very granular in SAP, down to specific activities on specific data."
    },
    {
      id: "sa-21",
      type: "mcq",
      title: "Company Code",
      prompt: "In a professional SAP ERP Foundations scenario, what is the strongest approach when dealing with company code?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Company Code requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sa-22",
      type: "mcq",
      title: "Controlling Area",
      prompt: "A team is making a decision about controlling area. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about controlling area balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sa-23",
      type: "mcq",
      title: "Plant And Storage Location",
      prompt: "Which signal suggests plant and storage location needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when plant and storage location could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sa-24",
      type: "mcq",
      title: "Material Master",
      prompt: "What is the best way to validate work involving material master?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for material master should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sa-25",
      type: "mcq",
      title: "Customer Master",
      prompt: "In a professional SAP ERP Foundations scenario, what is the strongest approach when dealing with customer master?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Customer Master requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sa-26",
      type: "mcq",
      title: "Vendor Master",
      prompt: "A team is making a decision about vendor master. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about vendor master balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sa-27",
      type: "mcq",
      title: "Fi Posting Document",
      prompt: "Which signal suggests FI posting document needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when FI posting document could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sa-28",
      type: "mcq",
      title: "Co Cost Center",
      prompt: "What is the best way to validate work involving CO cost center?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for CO cost center should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sa-29",
      type: "mcq",
      title: "Mm Purchase Requisition",
      prompt: "In a professional SAP ERP Foundations scenario, what is the strongest approach when dealing with MM purchase requisition?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Mm Purchase Requisition requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sa-30",
      type: "mcq",
      title: "Purchase Order Release",
      prompt: "A team is making a decision about purchase order release. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about purchase order release balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sa-31",
      type: "mcq",
      title: "Goods Receipt",
      prompt: "Which signal suggests goods receipt needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when goods receipt could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sa-32",
      type: "mcq",
      title: "Invoice Verification",
      prompt: "What is the best way to validate work involving invoice verification?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for invoice verification should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sa-33",
      type: "mcq",
      title: "Sd Sales Order",
      prompt: "In a professional SAP ERP Foundations scenario, what is the strongest approach when dealing with SD sales order?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Sd Sales Order requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sa-34",
      type: "mcq",
      title: "Delivery And Billing",
      prompt: "A team is making a decision about delivery and billing. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about delivery and billing balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sa-35",
      type: "mcq",
      title: "Three-Way Match",
      prompt: "Which signal suggests three-way match needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when three-way match could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sa-36",
      type: "mcq",
      title: "S/4Hana Business Partner",
      prompt: "What is the best way to validate work involving S/4HANA business partner?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for S/4HANA business partner should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sa-37",
      type: "mcq",
      title: "Authorization Role",
      prompt: "In a professional SAP ERP Foundations scenario, what is the strongest approach when dealing with authorization role?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Authorization Role requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sa-38",
      type: "mcq",
      title: "Fiori Launchpad",
      prompt: "A team is making a decision about Fiori launchpad. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about Fiori launchpad balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sa-39",
      type: "mcq",
      title: "Integration Point",
      prompt: "Which signal suggests integration point needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when integration point could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sa-40",
      type: "mcq",
      title: "Sap Process Troubleshooting",
      prompt: "What is the best way to validate work involving SAP process troubleshooting?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for SAP process troubleshooting should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
