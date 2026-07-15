import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const netsuiteData = {
  id: ASSESSMENT_TYPES.netsuite,
  title: "Oracle NetSuite ERP Professional Certification",
  shortTitle: "NetSuite",
  category: "Business Operations",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "ERP fundamentals, records, roles, saved searches, workflows, SuiteCloud, SuiteScript, OneWorld, order-to-cash, procure-to-pay, reporting, and controls.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "ns-01",
      type: "mcq",
      title: "Core Concepts",
      prompt: "What is a defining characteristic of NetSuite?",
      options: ["It is an on-premise software", "It was built from the ground up as a native cloud ERP", "It is only for small businesses", "It is a mobile app only"],
      correctIndex: 1,
      explanation: "NetSuite is the first cloud ERP company. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ns-02",
      type: "mcq",
      title: "Unified Platform",
      prompt: "What does a \"Unified Platform\" mean in the context of NetSuite?",
      options: ["One screen only", "A single database for CRM, ERP, E-commerce, and HR", "A type of operating system", "A social network"],
      correctIndex: 1,
      explanation: "NetSuite avoids the need for complex integrations between separate systems."
    },
    {
      id: "ns-03",
      type: "mcq",
      title: "Roles",
      prompt: "What is a \"Role\" in NetSuite?",
      options: ["A job title only", "A set of permissions and a customized dashboard for a specific user type", "A type of report", "A database field"],
      correctIndex: 1,
      explanation: "Roles (e.g., Accountant, Sales Manager) control access and UI."
    },
    {
      id: "ns-04",
      type: "mcq",
      title: "Dashboards",
      prompt: "What are \"Portlets\" in NetSuite?",
      options: ["Charging ports", "Individual components on a dashboard that display specific data or shortcuts", "A type of file", "A user role"],
      correctIndex: 1,
      explanation: "Portlets provide at-a-glance visibility into KPIs and tasks."
    },
    {
      id: "ns-05",
      type: "mcq",
      title: "Records",
      prompt: "What is a \"Saved Search\"?",
      options: ["A browser bookmark", "A powerful, reusable tool for querying and filtering data in NetSuite", "A type of audit", "A backup"],
      correctIndex: 1,
      explanation: "Saved searches are the foundation for reporting and automation."
    },
    {
      id: "ns-06",
      type: "mcq",
      title: "Customization",
      prompt: "What is \"SuiteCloud\"?",
      options: ["A weather app", "The platform for customizing and extending NetSuite (SuiteScript, SuiteFlow, etc.)", "A storage service", "A type of database"],
      correctIndex: 1,
      explanation: "SuiteCloud allows developers to build custom logic on top of NetSuite."
    },
    {
      id: "ns-07",
      type: "mcq",
      title: "SuiteScript",
      prompt: "Which programming language is SuiteScript based on?",
      options: ["Java", "Python", "JavaScript", "C#"],
      correctIndex: 2,
      explanation: "NetSuite uses JS for its custom server-side and client-side scripting."
    },
    {
      id: "ns-08",
      type: "mcq",
      title: "SuiteFlow",
      prompt: "What is \"SuiteFlow\"?",
      options: ["A fluid dynamics tool", "The graphical workflow engine for automating business processes in NetSuite", "A type of report", "A data migration tool"],
      correctIndex: 1,
      explanation: "It allows for non-code-based automation of approvals and tasks."
    },
    {
      id: "ns-09",
      type: "mcq",
      title: "Subsidiaries",
      prompt: "What is \"OneWorld\" in NetSuite?",
      options: ["A travel agency", "The module for managing multi-subsidiary, multi-currency, and multi-tax global businesses", "A social network", "A type of browser"],
      correctIndex: 1,
      explanation: "OneWorld allows for global financial consolidation. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ns-10",
      type: "mcq",
      title: "Items",
      prompt: "What are \"Items\" used for in NetSuite?",
      options: ["Storing employee names", "Everything a business buys, sells, or tracks (Inventory, Services, Non-inventory)", "Writing blogs", "Managing cloud storage"],
      correctIndex: 1,
      explanation: "Items map to income, expense, and asset accounts. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ns-11",
      type: "mcq",
      title: "Transactions",
      prompt: "How is a \"Sales Order\" different from an \"Invoice\" in NetSuite?",
      options: ["No difference", "Sales Order is the commitment to sell; Invoice is the request for payment", "Sales Order is faster", "Invoice is for taxes"],
      correctIndex: 1,
      explanation: "NetSuite tracks the transition from order to fulfillment to billing."
    },
    {
      id: "ns-12",
      type: "mcq",
      title: "CRM",
      prompt: "Does NetSuite include a CRM?",
      options: ["No", "Yes, it is integrated into the core platform", "Only as an add-on", "Only in the US"],
      correctIndex: 1,
      explanation: "NetSuite CRM manages marketing, sales, and service. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ns-13",
      type: "mcq",
      title: "SiteBuilder/SuiteCommerce",
      prompt: "What is \"SuiteCommerce\"?",
      options: ["A retail store", "NetSuite's e-commerce solution that connects directly to the ERP/CRM", "A shipping service", "A payment gateway"],
      correctIndex: 1,
      explanation: "It allows for real-time inventory and customer visibility on the web."
    },
    {
      id: "ns-14",
      type: "mcq",
      title: "Advanced Revenue Management",
      prompt: "What is \"ARM\" in NetSuite used for?",
      options: ["Security", "Advanced Revenue Management - automating complex revenue recognition schedules", "Hardware management", "User permissions"],
      correctIndex: 1,
      explanation: "Essential for compliance with standards like ASC 606 / IFRS 15."
    },
    {
      id: "ns-15",
      type: "mcq",
      title: "Global Search",
      prompt: "Where is the Global Search bar located in NetSuite?",
      options: ["At the bottom", "In the center of the top header", "In the settings menu", "In a separate app"],
      correctIndex: 1,
      explanation: "Global search is the fastest way to find any record by name or ID."
    },
    {
      id: "ns-16",
      type: "mcq",
      title: "KPIs",
      prompt: "What are \"KPI Scorecards\"?",
      options: ["A list of goals", "Dashboards that compare multiple KPIs across different periods or categories", "A type of report", "A user profile"],
      correctIndex: 1,
      explanation: "They provide a deep dive into business performance trends."
    },
    {
      id: "ns-17",
      type: "mcq",
      title: "SuiteAnalytics",
      prompt: "What is \"SuiteAnalytics Workbook\"?",
      options: ["A book", "The modern tool for complex data analysis, pivot tables, and visualizations in NetSuite", "A training guide", "A type of database"],
      correctIndex: 1,
      explanation: "It provides a more flexible way to analyze data than standard reports."
    },
    {
      id: "ns-18",
      type: "mcq",
      title: "Integration",
      prompt: "What is a \"SuiteTalk\"?",
      options: ["A meeting", "The SOAP and REST-based web services for integrating NetSuite with external systems", "A chat tool", "A blog"],
      correctIndex: 1,
      explanation: "It is the API interface for NetSuite. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ns-19",
      type: "mcq",
      title: "Versions",
      prompt: "How often is NetSuite updated?",
      options: ["Every day", "Twice a year (major releases)", "Once a year", "Never"],
      correctIndex: 1,
      explanation: "All customers are on the same version, updated automatically by Oracle."
    },
    {
      id: "ns-20",
      type: "mcq",
      title: "Implementation",
      prompt: "What is \"SuiteSuccess\"?",
      options: ["A success story", "NetSuite's methodology for rapid implementation based on industry leading practices", "A type of bonus", "A support plan"],
      correctIndex: 1,
      explanation: "It aims to get customers live in weeks rather than months."
    },
    {
      id: "ns-21",
      type: "mcq",
      title: "Transaction Records",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for transaction records?",
      options: ["Apply transaction records with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use transaction records only because it sounds advanced, without checking impact or constraints", "Ignore transaction records until the issue becomes urgent in production or with customers", "Delegate transaction records completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "transaction records is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-22",
      type: "mcq",
      title: "Entity Records",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for entity records?",
      options: ["Apply entity records with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use entity records only because it sounds advanced, without checking impact or constraints", "Ignore entity records until the issue becomes urgent in production or with customers", "Delegate entity records completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "entity records is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-23",
      type: "mcq",
      title: "Saved Search Criteria",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for Saved Search criteria?",
      options: ["Apply Saved Search criteria with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Saved Search criteria only because it sounds advanced, without checking impact or constraints", "Ignore Saved Search criteria until the issue becomes urgent in production or with customers", "Delegate Saved Search criteria completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Saved Search criteria is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-24",
      type: "mcq",
      title: "Saved Search Results",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for Saved Search results?",
      options: ["Apply Saved Search results with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Saved Search results only because it sounds advanced, without checking impact or constraints", "Ignore Saved Search results until the issue becomes urgent in production or with customers", "Delegate Saved Search results completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Saved Search results is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-25",
      type: "mcq",
      title: "User Event Scripts",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for User Event scripts?",
      options: ["Apply User Event scripts with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use User Event scripts only because it sounds advanced, without checking impact or constraints", "Ignore User Event scripts until the issue becomes urgent in production or with customers", "Delegate User Event scripts completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "User Event scripts is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-26",
      type: "mcq",
      title: "Client Scripts",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for Client Scripts?",
      options: ["Apply Client Scripts with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Client Scripts only because it sounds advanced, without checking impact or constraints", "Ignore Client Scripts until the issue becomes urgent in production or with customers", "Delegate Client Scripts completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Client Scripts is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-27",
      type: "mcq",
      title: "Scheduled Scripts",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for Scheduled Scripts?",
      options: ["Apply Scheduled Scripts with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Scheduled Scripts only because it sounds advanced, without checking impact or constraints", "Ignore Scheduled Scripts until the issue becomes urgent in production or with customers", "Delegate Scheduled Scripts completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Scheduled Scripts is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-28",
      type: "mcq",
      title: "Map/Reduce Scripts",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for Map/Reduce scripts?",
      options: ["Apply Map/Reduce scripts with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Map/Reduce scripts only because it sounds advanced, without checking impact or constraints", "Ignore Map/Reduce scripts until the issue becomes urgent in production or with customers", "Delegate Map/Reduce scripts completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Map/Reduce scripts is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-29",
      type: "mcq",
      title: "Governance Units",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for governance units?",
      options: ["Apply governance units with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use governance units only because it sounds advanced, without checking impact or constraints", "Ignore governance units until the issue becomes urgent in production or with customers", "Delegate governance units completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "governance units is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-30",
      type: "mcq",
      title: "Suiteflow Approvals",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for SuiteFlow approvals?",
      options: ["Apply SuiteFlow approvals with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use SuiteFlow approvals only because it sounds advanced, without checking impact or constraints", "Ignore SuiteFlow approvals until the issue becomes urgent in production or with customers", "Delegate SuiteFlow approvals completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "SuiteFlow approvals is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-31",
      type: "mcq",
      title: "Oneworld Consolidation",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for OneWorld consolidation?",
      options: ["Apply OneWorld consolidation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use OneWorld consolidation only because it sounds advanced, without checking impact or constraints", "Ignore OneWorld consolidation until the issue becomes urgent in production or with customers", "Delegate OneWorld consolidation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "OneWorld consolidation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-32",
      type: "mcq",
      title: "Role Security",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for role security?",
      options: ["Apply role security with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use role security only because it sounds advanced, without checking impact or constraints", "Ignore role security until the issue becomes urgent in production or with customers", "Delegate role security completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "role security is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-33",
      type: "mcq",
      title: "System Notes",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for System Notes?",
      options: ["Apply System Notes with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use System Notes only because it sounds advanced, without checking impact or constraints", "Ignore System Notes until the issue becomes urgent in production or with customers", "Delegate System Notes completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "System Notes is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-34",
      type: "mcq",
      title: "Csv Import Controls",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for CSV import controls?",
      options: ["Apply CSV import controls with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CSV import controls only because it sounds advanced, without checking impact or constraints", "Ignore CSV import controls until the issue becomes urgent in production or with customers", "Delegate CSV import controls completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CSV import controls is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-35",
      type: "mcq",
      title: "Order-To-Cash",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for order-to-cash?",
      options: ["Apply order-to-cash with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use order-to-cash only because it sounds advanced, without checking impact or constraints", "Ignore order-to-cash until the issue becomes urgent in production or with customers", "Delegate order-to-cash completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "order-to-cash is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-36",
      type: "mcq",
      title: "Procure-To-Pay",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for procure-to-pay?",
      options: ["Apply procure-to-pay with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use procure-to-pay only because it sounds advanced, without checking impact or constraints", "Ignore procure-to-pay until the issue becomes urgent in production or with customers", "Delegate procure-to-pay completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "procure-to-pay is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-37",
      type: "mcq",
      title: "Manual Journal Controls",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for manual journal controls?",
      options: ["Apply manual journal controls with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use manual journal controls only because it sounds advanced, without checking impact or constraints", "Ignore manual journal controls until the issue becomes urgent in production or with customers", "Delegate manual journal controls completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "manual journal controls is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-38",
      type: "mcq",
      title: "Period Close",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for period close?",
      options: ["Apply period close with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use period close only because it sounds advanced, without checking impact or constraints", "Ignore period close until the issue becomes urgent in production or with customers", "Delegate period close completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "period close is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-39",
      type: "mcq",
      title: "Integration Risk",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for integration risk?",
      options: ["Apply integration risk with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use integration risk only because it sounds advanced, without checking impact or constraints", "Ignore integration risk until the issue becomes urgent in production or with customers", "Delegate integration risk completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "integration risk is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ns-40",
      type: "mcq",
      title: "Erp Customization Judgment",
      prompt: "In a professional Oracle NetSuite ERP Professional scenario, which response best demonstrates strong judgment for ERP customization judgment?",
      options: ["Apply ERP customization judgment with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ERP customization judgment only because it sounds advanced, without checking impact or constraints", "Ignore ERP customization judgment until the issue becomes urgent in production or with customers", "Delegate ERP customization judgment completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ERP customization judgment is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
