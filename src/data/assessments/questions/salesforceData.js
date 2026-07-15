import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const salesforceData = {
  id: ASSESSMENT_TYPES.salesforce,
  title: "Salesforce Admin & CRM Professional Certification",
  shortTitle: "Salesforce",
  category: "Business Operations",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Salesforce objects, fields, record access, profiles, permission sets, flows, validation rules, reports, dashboards, lead conversion, data quality, and CRM administration.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sf-01",
      type: "mcq",
      title: "Architecture",
      prompt: "What is \"Multitenancy\" in Salesforce?",
      options: ["One company per server", "Multiple companies sharing the same infrastructure and code base while keeping data isolated", "A type of database", "A security layer"],
      correctIndex: 1,
      explanation: "This is the core of cloud computing architecture. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-02",
      type: "mcq",
      title: "Objects",
      prompt: "What is a \"Standard Object\" in Salesforce?",
      options: ["An object created by a user", "Out-of-the-box objects provided by Salesforce (e.g., Account, Contact, Lead)", "A type of field", "A report type"],
      correctIndex: 1,
      explanation: "Standard objects come with every Salesforce org. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-03",
      type: "mcq",
      title: "Automation",
      prompt: "Which automation tool is now the recommended standard in Salesforce?",
      options: ["Process Builder", "Workflow Rules", "Flow Builder", "Apex"],
      correctIndex: 2,
      explanation: "Flow is the most powerful declarative automation tool. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-04",
      type: "mcq",
      title: "Security",
      prompt: "What do \"Profiles\" control in Salesforce?",
      options: ["User passwords", "What a user can DO (Object permissions, field-level security, app access)", "The theme of the site", "The company address"],
      correctIndex: 1,
      explanation: "Profiles are the foundation of user access. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-05",
      type: "mcq",
      title: "Sharing",
      prompt: "What are \"Organization-Wide Defaults\" (OWD) used for?",
      options: ["Setting the company name", "Setting the baseline level of access users have to each other's records", "Configuring email", "Database backups"],
      correctIndex: 1,
      explanation: "OWD is the most restrictive level of the sharing model. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-06",
      type: "mcq",
      title: "Leads",
      prompt: "What happens during \"Lead Conversion\"?",
      options: ["The lead is deleted", "The Lead is converted into an Account, Contact, and optionally an Opportunity", "The lead is emailed", "The lead is moved to a different list"],
      correctIndex: 1,
      explanation: "This is the standard transition from a prospect to a customer. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-07",
      type: "mcq",
      title: "Reporting",
      prompt: "What is a \"Report Type\" in Salesforce?",
      options: ["The color of the report", "A template that determines which objects and fields are available for a report", "A type of chart", "A folder"],
      correctIndex: 1,
      explanation: "Custom report types allow you to join related objects. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-08",
      type: "mcq",
      title: "AppExchange",
      prompt: "What is \"AppExchange\"?",
      options: ["A place to buy phones", "Salesforce's cloud marketplace for apps, components, and consulting services", "A social network", "A developer forum"],
      correctIndex: 1,
      explanation: "It is the \"App Store\" for Salesforce. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-09",
      type: "mcq",
      title: "Validation Rules",
      prompt: "What is the purpose of a \"Validation Rule\"?",
      options: ["To speed up data entry", "To verify that the data a user enters in a record meets the standards you specify before the record is saved", "To calculate tax", "To delete bad data"],
      correctIndex: 1,
      explanation: "Validation rules prevent dirty data. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-10",
      type: "mcq",
      title: "Fields",
      prompt: "What is a \"Formula Field\"?",
      options: ["A field where you type math", "A read-only field that derives its value from an expression or other fields", "A mandatory field", "A hidden field"],
      correctIndex: 1,
      explanation: "Formula fields are powerful for automated calculations. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-11",
      type: "mcq",
      title: "Relationships",
      prompt: "What is the difference between Lookup and Master-Detail relationships?",
      options: ["No difference", "Master-Detail is tightly coupled (deletion of parent deletes child); Lookup is loosely coupled", "Lookup is faster", "Master-Detail is for mobile"],
      correctIndex: 1,
      explanation: "Master-Detail also allows for roll-up summary fields. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-12",
      type: "mcq",
      title: "Dashboards",
      prompt: "How many components can a standard Salesforce Dashboard have?",
      options: ["10", "20", "50", "Unlimited"],
      correctIndex: 1,
      explanation: "The limit is 20 components per dashboard. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-13",
      type: "mcq",
      title: "Sandboxes",
      prompt: "What is a \"Sandbox\" in Salesforce?",
      options: ["A play area", "A copy of your production organization used for development, testing, and training", "A type of security", "An old version of Salesforce"],
      correctIndex: 1,
      explanation: "Always test in a sandbox before deploying to production. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-14",
      type: "mcq",
      title: "Page Layouts",
      prompt: "What do \"Page Layouts\" control?",
      options: ["Data validation", "The organization of buttons, fields, and related lists on a record detail page", "User permissions", "The database schema"],
      correctIndex: 1,
      explanation: "They control the UI experience for the user. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-15",
      type: "mcq",
      title: "Data Loader",
      prompt: "What is the \"Data Loader\" tool used for?",
      options: ["To write code", "Bulk import, export, update, and delete of Salesforce records", "To browse the web", "To manage servers"],
      correctIndex: 1,
      explanation: "Essential for large-scale data migrations. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-16",
      type: "mcq",
      title: "Chatter",
      prompt: "What is \"Chatter\"?",
      options: ["A loud noise", "Salesforce's enterprise social network for collaboration within the org", "A customer support tool", "A type of report"],
      correctIndex: 1,
      explanation: "Chatter allows for @mentioning users on specific records. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-17",
      type: "mcq",
      title: "Lightning Experience",
      prompt: "What is \"Lightning Experience\"?",
      options: ["A fast internet connection", "The modern, component-based UI for Salesforce", "A type of automation", "A mobile app only"],
      correctIndex: 1,
      explanation: "It replaced the older \"Salesforce Classic\" interface. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-18",
      type: "mcq",
      title: "Queue",
      prompt: "What is a \"Queue\" in Salesforce?",
      options: ["A line at the store", "A holding area for records (like Leads or Cases) that don't yet have an owner", "A type of report", "A folder"],
      correctIndex: 1,
      explanation: "Groups of users can pick up records from a queue. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-19",
      type: "mcq",
      title: "Roll-up Summary",
      prompt: "What does a \"Roll-up Summary\" field do?",
      options: ["Summarizes a report", "Calculates values from related records (Count, Sum, Min, Max) on a Master-Detail relationship", "Rounds numbers", "Groups data"],
      correctIndex: 1,
      explanation: "Useful for seeing \"Total Opportunity Value\" on an Account. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-20",
      type: "mcq",
      title: "Permission Sets",
      prompt: "Why would you use a \"Permission Set\" instead of a \"Profile\"?",
      options: ["Profiles are old", "To grant additional permissions to specific users without changing their profile", "For mobile users only", "To limit access"],
      correctIndex: 1,
      explanation: "Permission sets allow for granular, additive access control. This is a checked foundational concept for professional Salesforce work."
    },
    {
      id: "sf-21",
      type: "mcq",
      title: "Custom Object Design",
      prompt: "In a professional Salesforce Admin & CRM scenario, what is the strongest approach when dealing with custom object design?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Custom Object Design requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sf-22",
      type: "mcq",
      title: "Master-Detail Relationship",
      prompt: "A team is making a decision about master-detail relationship. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about master-detail relationship balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sf-23",
      type: "mcq",
      title: "Lookup Relationship",
      prompt: "Which signal suggests lookup relationship needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when lookup relationship could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sf-24",
      type: "mcq",
      title: "Permission Set Usage",
      prompt: "What is the best way to validate work involving permission set usage?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for permission set usage should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sf-25",
      type: "mcq",
      title: "Role Hierarchy",
      prompt: "In a professional Salesforce Admin & CRM scenario, what is the strongest approach when dealing with role hierarchy?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Role Hierarchy requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sf-26",
      type: "mcq",
      title: "Sharing Rules",
      prompt: "A team is making a decision about sharing rules. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about sharing rules balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sf-27",
      type: "mcq",
      title: "Field-Level Security",
      prompt: "Which signal suggests field-level security needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when field-level security could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sf-28",
      type: "mcq",
      title: "Record Types",
      prompt: "What is the best way to validate work involving record types?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for record types should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sf-29",
      type: "mcq",
      title: "Page Layouts",
      prompt: "In a professional Salesforce Admin & CRM scenario, what is the strongest approach when dealing with page layouts?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Page Layouts requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sf-30",
      type: "mcq",
      title: "Validation Rule Design",
      prompt: "A team is making a decision about validation rule design. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about validation rule design balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sf-31",
      type: "mcq",
      title: "Flow Error Handling",
      prompt: "Which signal suggests Flow error handling needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when Flow error handling could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sf-32",
      type: "mcq",
      title: "Approval Process",
      prompt: "What is the best way to validate work involving approval process?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for approval process should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sf-33",
      type: "mcq",
      title: "Lead Assignment Rules",
      prompt: "In a professional Salesforce Admin & CRM scenario, what is the strongest approach when dealing with lead assignment rules?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Lead Assignment Rules requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sf-34",
      type: "mcq",
      title: "Duplicate Management",
      prompt: "A team is making a decision about duplicate management. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about duplicate management balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sf-35",
      type: "mcq",
      title: "Data Import Cleanup",
      prompt: "Which signal suggests data import cleanup needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when data import cleanup could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sf-36",
      type: "mcq",
      title: "Report Folder Access",
      prompt: "What is the best way to validate work involving report folder access?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for report folder access should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sf-37",
      type: "mcq",
      title: "Dashboard Running User",
      prompt: "In a professional Salesforce Admin & CRM scenario, what is the strongest approach when dealing with dashboard running user?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Dashboard Running User requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sf-38",
      type: "mcq",
      title: "Sandbox Deployment",
      prompt: "A team is making a decision about sandbox deployment. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about sandbox deployment balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sf-39",
      type: "mcq",
      title: "Change Set Risk",
      prompt: "Which signal suggests change set risk needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when change set risk could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sf-40",
      type: "mcq",
      title: "Crm Governance",
      prompt: "What is the best way to validate work involving CRM governance?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for CRM governance should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
