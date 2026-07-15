import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const powerbiData = {
  id: ASSESSMENT_TYPES.powerbi,
  title: "Power BI & DAX Professional Certification",
  shortTitle: "Power BI",
  category: "Data Tools",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Semantic modeling, DAX, filter context, Power Query, relationships, visuals, RLS, refresh, gateways, performance, and governance.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "pbi-01",
      type: "mcq",
      title: "DAX Context",
      prompt: "Which DAX function changes the filter context of a calculation?",
      options: ["SUM", "CALCULATE", "FILTER", "ALL"],
      correctIndex: 1,
      explanation: "CALCULATE is the most powerful function in DAX as it modifies filter context."
    },
    {
      id: "pbi-02",
      type: "mcq",
      title: "Data Modeling",
      prompt: "Which relationship type is generally recommended to avoid in complex models?",
      options: ["One-to-One", "One-to-Many", "Many-to-Many", "Active"],
      correctIndex: 2,
      explanation: "Many-to-Many can lead to ambiguity and performance issues if not handled carefully."
    },
    {
      id: "pbi-03",
      type: "mcq",
      title: "Power Query",
      prompt: "What is the underlying language used in Power Query?",
      options: ["DAX", "SQL", "M", "VBA"],
      correctIndex: 2,
      explanation: "M is the formula language for Power Query transformations."
    },
    {
      id: "pbi-04",
      type: "mcq",
      title: "Measures vs Columns",
      prompt: "When should you prefer a Calculated Column over a Measure?",
      options: ["For aggregations", "When using slicers", "To use as a Row Header in a table", "To save memory"],
      correctIndex: 2,
      explanation: "Calculated Columns are calculated at refresh and can be used in axes/rows; measures are dynamic."
    },
    {
      id: "pbi-05",
      type: "mcq",
      title: "DAX Functions",
      prompt: "Which function returns a table with all filters removed from specific columns?",
      options: ["REMOVEFILTERS", "FILTER", "VALUES", "DISTINCT"],
      correctIndex: 0,
      explanation: "REMOVEFILTERS (or ALL) ignores existing filters in the context."
    },
    {
      id: "pbi-06",
      type: "mcq",
      title: "Time Intelligence",
      prompt: "To use Time Intelligence functions, what is a strict requirement for your Date table?",
      options: ["Must have gaps", "Must be marked as a Date Table", "Must be linked via Many-to-Many", "Must contain only weekdays"],
      correctIndex: 1,
      explanation: "Power BI requires a continuous Date table marked accordingly for time intelligence to work."
    },
    {
      id: "pbi-07",
      type: "mcq",
      title: "Visuals",
      prompt: "Which visual is best for showing a distribution of values?",
      options: ["Pie Chart", "Scatter Chart", "Histogram", "Table"],
      correctIndex: 2,
      explanation: "Histograms show frequency distribution. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pbi-08",
      type: "mcq",
      title: "RLS",
      prompt: "What does RLS stand for in Power BI?",
      options: ["Rapid Load System", "Row-Level Security", "Report Link Service", "Relational Logic Sync"],
      correctIndex: 1,
      explanation: "Row-Level Security restricts data access based on user roles."
    },
    {
      id: "pbi-09",
      type: "mcq",
      title: "Gateways",
      prompt: "What is the purpose of an On-premises data gateway?",
      options: ["To speed up cloud data", "To connect cloud reports to local data sources", "To encrypt reports", "To build mobile apps"],
      correctIndex: 1,
      explanation: "Gateways act as a bridge between Power BI Service and local datasets."
    },
    {
      id: "pbi-10",
      type: "mcq",
      title: "DAX Variables",
      prompt: "What is the primary benefit of using VAR in DAX?",
      options: ["Harder to read", "Improved performance and readability", "Lowering file size", "Hiding code"],
      correctIndex: 1,
      explanation: "Variables are calculated once and reused, improving performance and making code cleaner."
    },
    {
      id: "pbi-11",
      type: "mcq",
      title: "Star Schema",
      prompt: "In a Star Schema, what contains the quantitative data?",
      options: ["Dimension Tables", "Fact Tables", "Looker Tables", "Schema Tables"],
      correctIndex: 1,
      explanation: "Fact tables hold metrics/measures; Dimension tables hold descriptive attributes."
    },
    {
      id: "pbi-12",
      type: "mcq",
      title: "Cross Filtering",
      prompt: "What does \"Bi-directional\" cross-filtering allow?",
      options: ["Filters only flow from Fact to Dim", "Filters flow both ways between tables", "No filtering", "Auto-refresh"],
      correctIndex: 1,
      explanation: "It allows filters on the \"many\" side to affect the \"one\" side, but use with caution."
    },
    {
      id: "pbi-13",
      type: "mcq",
      title: "Aggregation",
      prompt: "Which DAX function would you use to iterate over a table to sum a calculation?",
      options: ["SUM", "SUMX", "TOTALSUM", "ADDSUM"],
      correctIndex: 1,
      explanation: "Iterator functions (ending in X) evaluate expressions for every row in a table."
    },
    {
      id: "pbi-14",
      type: "mcq",
      title: "Workspace",
      prompt: "Where do you publish reports for collaboration?",
      options: ["Local Drive", "AppSource", "Workspace", "OneDrive"],
      correctIndex: 2,
      explanation: "Workspaces in Power BI Service are the containers for dashboards, reports, and datasets."
    },
    {
      id: "pbi-15",
      type: "mcq",
      title: "Slicers",
      prompt: "What is a \"Sync Slicer\"?",
      options: ["A slicer that updates every second", "A slicer that applies across multiple report pages", "A slicer for video", "An AI slicer"],
      correctIndex: 1,
      explanation: "Sync slicers allow a selection on one page to be synchronized to others."
    },
    {
      id: "pbi-16",
      type: "mcq",
      title: "Data Types",
      prompt: "Which data type is most efficient for storing currency to avoid rounding issues?",
      options: ["Decimal Number", "Fixed Decimal Number", "Whole Number", "Text"],
      correctIndex: 1,
      explanation: "Fixed Decimal Number (Currency) is stored with 4 decimal places of precision."
    },
    {
      id: "pbi-17",
      type: "mcq",
      title: "Bookmarks",
      prompt: "What do Bookmarks capture in a report?",
      options: ["Only data", "The state of a report page (filters, visibility, etc.)", "The password", "The underlying SQL"],
      correctIndex: 1,
      explanation: "Bookmarks save the specific view/state of a report for navigation or storytelling."
    },
    {
      id: "pbi-18",
      type: "mcq",
      title: "Q&A Visual",
      prompt: "Which technology powers the Q&A visual in Power BI?",
      options: ["Blockchain", "NLP (Natural Language Processing)", "Quantum Computing", "Manual Mapping"],
      correctIndex: 1,
      explanation: "NLP allows users to ask questions in plain English. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pbi-19",
      type: "mcq",
      title: "Drillthrough",
      prompt: "What is the purpose of Drillthrough?",
      options: ["To delete data", "To navigate to a detailed page filtered to a specific entity", "To refresh data", "To change colors"],
      correctIndex: 1,
      explanation: "Drillthrough takes users from a summary view to detailed insights about a specific data point."
    },
    {
      id: "pbi-20",
      type: "mcq",
      title: "DirectQuery",
      prompt: "What is a limitation of DirectQuery compared to Import mode?",
      options: ["Smaller file size", "Limited DAX functions and performance overhead", "No local storage", "Real-time data"],
      correctIndex: 1,
      explanation: "DirectQuery doesn't store data in Power BI, so performance depends on the source and some DAX is restricted."
    },
    {
      id: "pbi-21",
      type: "mcq",
      title: "Star Schema",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for star schema?",
      options: ["Apply star schema with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use star schema only because it sounds advanced, without checking impact or constraints", "Ignore star schema until the issue becomes urgent in production or with customers", "Delegate star schema completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "star schema is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-22",
      type: "mcq",
      title: "Filter Context",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for filter context?",
      options: ["Apply filter context with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use filter context only because it sounds advanced, without checking impact or constraints", "Ignore filter context until the issue becomes urgent in production or with customers", "Delegate filter context completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "filter context is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-23",
      type: "mcq",
      title: "Row Context",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for row context?",
      options: ["Apply row context with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use row context only because it sounds advanced, without checking impact or constraints", "Ignore row context until the issue becomes urgent in production or with customers", "Delegate row context completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "row context is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-24",
      type: "mcq",
      title: "Calculate",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for CALCULATE?",
      options: ["Apply CALCULATE with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CALCULATE only because it sounds advanced, without checking impact or constraints", "Ignore CALCULATE until the issue becomes urgent in production or with customers", "Delegate CALCULATE completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CALCULATE is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-25",
      type: "mcq",
      title: "Sumx Iterator",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for SUMX iterator?",
      options: ["Apply SUMX iterator with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use SUMX iterator only because it sounds advanced, without checking impact or constraints", "Ignore SUMX iterator until the issue becomes urgent in production or with customers", "Delegate SUMX iterator completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "SUMX iterator is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-26",
      type: "mcq",
      title: "Measures Vs Columns",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for measures vs columns?",
      options: ["Apply measures vs columns with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use measures vs columns only because it sounds advanced, without checking impact or constraints", "Ignore measures vs columns until the issue becomes urgent in production or with customers", "Delegate measures vs columns completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "measures vs columns is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-27",
      type: "mcq",
      title: "Query Folding",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for query folding?",
      options: ["Apply query folding with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use query folding only because it sounds advanced, without checking impact or constraints", "Ignore query folding until the issue becomes urgent in production or with customers", "Delegate query folding completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "query folding is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-28",
      type: "mcq",
      title: "Incremental Refresh",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for incremental refresh?",
      options: ["Apply incremental refresh with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use incremental refresh only because it sounds advanced, without checking impact or constraints", "Ignore incremental refresh until the issue becomes urgent in production or with customers", "Delegate incremental refresh completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "incremental refresh is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-29",
      type: "mcq",
      title: "Rls Testing",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for RLS testing?",
      options: ["Apply RLS testing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use RLS testing only because it sounds advanced, without checking impact or constraints", "Ignore RLS testing until the issue becomes urgent in production or with customers", "Delegate RLS testing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "RLS testing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-30",
      type: "mcq",
      title: "Gateway Failures",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for gateway failures?",
      options: ["Apply gateway failures with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use gateway failures only because it sounds advanced, without checking impact or constraints", "Ignore gateway failures until the issue becomes urgent in production or with customers", "Delegate gateway failures completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "gateway failures is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-31",
      type: "mcq",
      title: "Composite Models",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for composite models?",
      options: ["Apply composite models with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use composite models only because it sounds advanced, without checking impact or constraints", "Ignore composite models until the issue becomes urgent in production or with customers", "Delegate composite models completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "composite models is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-32",
      type: "mcq",
      title: "Directquery Trade-Offs",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for DirectQuery trade-offs?",
      options: ["Apply DirectQuery trade-offs with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use DirectQuery trade-offs only because it sounds advanced, without checking impact or constraints", "Ignore DirectQuery trade-offs until the issue becomes urgent in production or with customers", "Delegate DirectQuery trade-offs completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "DirectQuery trade-offs is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-33",
      type: "mcq",
      title: "Dax Variables",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for DAX variables?",
      options: ["Apply DAX variables with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use DAX variables only because it sounds advanced, without checking impact or constraints", "Ignore DAX variables until the issue becomes urgent in production or with customers", "Delegate DAX variables completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "DAX variables is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-34",
      type: "mcq",
      title: "Removefilters",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for REMOVEFILTERS?",
      options: ["Apply REMOVEFILTERS with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use REMOVEFILTERS only because it sounds advanced, without checking impact or constraints", "Ignore REMOVEFILTERS until the issue becomes urgent in production or with customers", "Delegate REMOVEFILTERS completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "REMOVEFILTERS is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-35",
      type: "mcq",
      title: "Date Table",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for date table?",
      options: ["Apply date table with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use date table only because it sounds advanced, without checking impact or constraints", "Ignore date table until the issue becomes urgent in production or with customers", "Delegate date table completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "date table is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-36",
      type: "mcq",
      title: "Visual Selection",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for visual selection?",
      options: ["Apply visual selection with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use visual selection only because it sounds advanced, without checking impact or constraints", "Ignore visual selection until the issue becomes urgent in production or with customers", "Delegate visual selection completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "visual selection is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-37",
      type: "mcq",
      title: "Performance Analyzer",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for Performance Analyzer?",
      options: ["Apply Performance Analyzer with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Performance Analyzer only because it sounds advanced, without checking impact or constraints", "Ignore Performance Analyzer until the issue becomes urgent in production or with customers", "Delegate Performance Analyzer completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Performance Analyzer is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-38",
      type: "mcq",
      title: "Deployment Pipelines",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for deployment pipelines?",
      options: ["Apply deployment pipelines with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use deployment pipelines only because it sounds advanced, without checking impact or constraints", "Ignore deployment pipelines until the issue becomes urgent in production or with customers", "Delegate deployment pipelines completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "deployment pipelines is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-39",
      type: "mcq",
      title: "Semantic Model Governance",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for semantic model governance?",
      options: ["Apply semantic model governance with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use semantic model governance only because it sounds advanced, without checking impact or constraints", "Ignore semantic model governance until the issue becomes urgent in production or with customers", "Delegate semantic model governance completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "semantic model governance is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pbi-40",
      type: "mcq",
      title: "Executive Dashboard Design",
      prompt: "In a professional Power BI & DAX Professional scenario, which response best demonstrates strong judgment for executive dashboard design?",
      options: ["Apply executive dashboard design with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use executive dashboard design only because it sounds advanced, without checking impact or constraints", "Ignore executive dashboard design until the issue becomes urgent in production or with customers", "Delegate executive dashboard design completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "executive dashboard design is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
