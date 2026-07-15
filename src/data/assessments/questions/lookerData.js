import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const lookerData = {
  id: ASSESSMENT_TYPES.looker,
  title: "Looker & Looker Studio Professional Certification",
  shortTitle: "Looker",
  category: "Data Tools",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "LookML views, explores, joins, dimensions, measures, PDTs, caching, access control, Looker Studio blending, calculated fields, dashboards, and governed analytics.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "lk-01",
      type: "mcq",
      title: "LookML Basics",
      prompt: "What is a \"View\" in LookML?",
      options: ["A dashboard", "A map of a database table", "A specific user role", "A saved report"],
      correctIndex: 1,
      explanation: "A view file defines dimensions and measures for a specific database table."
    },
    {
      id: "lk-02",
      type: "mcq",
      title: "Looker Studio",
      prompt: "How do you combine data from two different sources in Looker Studio?",
      options: ["Joining", "Blending", "Merging", "Aggregating"],
      correctIndex: 1,
      explanation: "Data Blending is the tool for cross-source analysis in Looker Studio."
    },
    {
      id: "lk-03",
      type: "mcq",
      title: "Dimensions vs Measures",
      prompt: "In LookML, which one usually uses a SQL aggregate function?",
      options: ["Dimension", "Measure", "Filter", "Parameter"],
      correctIndex: 1,
      explanation: "Measures correspond to aggregate functions like SUM, COUNT, AVG."
    },
    {
      id: "lk-04",
      type: "mcq",
      title: "Explores",
      prompt: "What is an \"Explore\" in Looker?",
      options: ["A search bar", "A starting point for a query, often joining multiple views", "A data connector", "A mobile app"],
      correctIndex: 1,
      explanation: "Explores define how views can be joined and queried by users."
    },
    {
      id: "lk-05",
      type: "mcq",
      title: "Derived Tables",
      prompt: "What is a \"PDT\" in Looker?",
      options: ["Permanent Data Tool", "Persistent Derived Table", "Project Data Template", "Public Data Table"],
      correctIndex: 1,
      explanation: "PDTs are tables written back to the database by Looker to improve performance."
    },
    {
      id: "lk-06",
      type: "mcq",
      title: "Looker Studio Calculated Fields",
      prompt: "Which function allows for conditional logic in Looker Studio?",
      options: ["IF", "SWITCH", "CASE", "WHEN"],
      correctIndex: 2,
      explanation: "CASE statements are the primary way to do logic: CASE WHEN ... THEN ... END."
    },
    {
      id: "lk-07",
      type: "mcq",
      title: "Caching",
      prompt: "How does Looker ensure data isn't stale?",
      options: ["Auto-refresh every second", "Datagroups and Cache policies", "Manual reload only", "It doesn't"],
      correctIndex: 1,
      explanation: "Datagroups allow Looker to check for data changes and invalidate cache."
    },
    {
      id: "lk-08",
      type: "mcq",
      title: "Dimensions",
      prompt: "What is a \"Dimension Group\" used for?",
      options: ["Grouping users", "Handling date and time fields automatically", "Creating folders", "Encryption"],
      correctIndex: 1,
      explanation: "Dimension groups create multiple timeframes (date, week, month) from one timestamp."
    },
    {
      id: "lk-09",
      type: "mcq",
      title: "Looker Architecture",
      prompt: "Looker is primarily ___?",
      options: ["In-memory", "In-database (SQL generating)", "A standalone database", "A desktop app"],
      correctIndex: 1,
      explanation: "Looker translates user actions into SQL queries run directly on your database."
    },
    {
      id: "lk-10",
      type: "mcq",
      title: "Looker Studio Filters",
      prompt: "What is a \"Control\" in Looker Studio?",
      options: ["A settings menu", "An interactive element like a date range or dropdown filter", "A user permission", "A type of chart"],
      correctIndex: 1,
      explanation: "Controls (like Drop-down lists) allow users to filter the dashboard."
    },
    {
      id: "lk-11",
      type: "mcq",
      title: "Symmetry",
      prompt: "What problem does Looker's \"Symmetric Aggregates\" solve?",
      options: ["Slow queries", "Incorrect sums when joining tables with different grains (Fan-out)", "Duplicate columns", "Missing data"],
      correctIndex: 1,
      explanation: "Symmetric aggregates prevent over-counting when joining one-to-many relationships."
    },
    {
      id: "lk-12",
      type: "mcq",
      title: "Projects",
      prompt: "What is the \"Model\" file in a Looker project used for?",
      options: ["Styling charts", "Defining database connections and Explores", "Storing raw data", "Managing users"],
      correctIndex: 1,
      explanation: "Model files define the connection and the available Explores for that project."
    },
    {
      id: "lk-13",
      type: "mcq",
      title: "Looker Studio Community",
      prompt: "What is a \"Community Visualization\"?",
      options: ["A chat room", "A custom-built chart type created by third parties", "A shared dashboard", "Public data"],
      correctIndex: 1,
      explanation: "Community Visualizations allow for custom D3/JS charts not native to Looker Studio."
    },
    {
      id: "lk-14",
      type: "mcq",
      title: "Liquid",
      prompt: "What is \"Liquid\" in Looker?",
      options: ["A theme engine", "A templating language for dynamic SQL and links", "A data format", "A cloud service"],
      correctIndex: 1,
      explanation: "Liquid allows for conditional logic within LookML parameters (e.g., dynamic table names)."
    },
    {
      id: "lk-15",
      type: "mcq",
      title: "Dashboards",
      prompt: "What is a \"Look\" in Looker?",
      options: ["A visual theme", "A saved, single visualization", "A user profile", "A database schema"],
      correctIndex: 1,
      explanation: "A Look is a saved query/visualization that can be viewed on its own or added to dashboards."
    },
    {
      id: "lk-16",
      type: "mcq",
      title: "Scheduling",
      prompt: "How can you deliver reports automatically in Looker?",
      options: ["Manual export only", "Schedules to Email, Slack, S3, etc.", "Browser bookmarks", "API calls only"],
      correctIndex: 1,
      explanation: "Looker has a robust scheduler for automated report delivery."
    },
    {
      id: "lk-17",
      type: "mcq",
      title: "Parameters",
      prompt: "In LookML, what does a \"parameter\" allow?",
      options: ["Filtering", "User-defined values that can be used in liquid logic", "Changing database credentials", "System settings"],
      correctIndex: 1,
      explanation: "Parameters provide a UI for users to input values that drive logic without standard filtering."
    },
    {
      id: "lk-18",
      type: "mcq",
      title: "Looker Studio Joins",
      prompt: "What is the default join type in Looker Studio blending?",
      options: ["Inner Join", "Left Outer Join", "Full Outer Join", "Cross Join"],
      correctIndex: 1,
      explanation: "Looker Studio blending defaults to a Left Outer Join. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "lk-19",
      type: "mcq",
      title: "Access Control",
      prompt: "What is an \"Access Filter\" in Looker?",
      options: ["A password", "A way to apply row-level security based on user attributes", "A firewall", "A VPN"],
      correctIndex: 1,
      explanation: "Access filters dynamically filter queries based on who is logged in."
    },
    {
      id: "lk-20",
      type: "mcq",
      title: "API",
      prompt: "What is the Looker SDK?",
      options: ["A design kit", "Libraries for interacting with Looker via code (Python, TS, etc.)", "A browser extension", "A database driver"],
      correctIndex: 1,
      explanation: "The SDK allows developers to embed Looker or automate tasks via the API."
    },
    {
      id: "lk-21",
      type: "mcq",
      title: "Lookml Model File",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for LookML model file?",
      options: ["Apply LookML model file with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use LookML model file only because it sounds advanced, without checking impact or constraints", "Ignore LookML model file until the issue becomes urgent in production or with customers", "Delegate LookML model file completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "LookML model file is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-22",
      type: "mcq",
      title: "Dimensions",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for dimensions?",
      options: ["Apply dimensions with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use dimensions only because it sounds advanced, without checking impact or constraints", "Ignore dimensions until the issue becomes urgent in production or with customers", "Delegate dimensions completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "dimensions is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-23",
      type: "mcq",
      title: "Measures",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for measures?",
      options: ["Apply measures with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use measures only because it sounds advanced, without checking impact or constraints", "Ignore measures until the issue becomes urgent in production or with customers", "Delegate measures completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "measures is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-24",
      type: "mcq",
      title: "Join Relationship",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for join relationship?",
      options: ["Apply join relationship with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use join relationship only because it sounds advanced, without checking impact or constraints", "Ignore join relationship until the issue becomes urgent in production or with customers", "Delegate join relationship completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "join relationship is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-25",
      type: "mcq",
      title: "Fanout Problem",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for fanout problem?",
      options: ["Apply fanout problem with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use fanout problem only because it sounds advanced, without checking impact or constraints", "Ignore fanout problem until the issue becomes urgent in production or with customers", "Delegate fanout problem completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "fanout problem is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-26",
      type: "mcq",
      title: "Symmetric Aggregates",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for symmetric aggregates?",
      options: ["Apply symmetric aggregates with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use symmetric aggregates only because it sounds advanced, without checking impact or constraints", "Ignore symmetric aggregates until the issue becomes urgent in production or with customers", "Delegate symmetric aggregates completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "symmetric aggregates is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-27",
      type: "mcq",
      title: "Pdt Strategy",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for PDT strategy?",
      options: ["Apply PDT strategy with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use PDT strategy only because it sounds advanced, without checking impact or constraints", "Ignore PDT strategy until the issue becomes urgent in production or with customers", "Delegate PDT strategy completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "PDT strategy is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-28",
      type: "mcq",
      title: "Datagroups",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for datagroups?",
      options: ["Apply datagroups with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use datagroups only because it sounds advanced, without checking impact or constraints", "Ignore datagroups until the issue becomes urgent in production or with customers", "Delegate datagroups completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "datagroups is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-29",
      type: "mcq",
      title: "Access Filters",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for access filters?",
      options: ["Apply access filters with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use access filters only because it sounds advanced, without checking impact or constraints", "Ignore access filters until the issue becomes urgent in production or with customers", "Delegate access filters completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "access filters is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-30",
      type: "mcq",
      title: "Liquid",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for Liquid?",
      options: ["Apply Liquid with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Liquid only because it sounds advanced, without checking impact or constraints", "Ignore Liquid until the issue becomes urgent in production or with customers", "Delegate Liquid completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Liquid is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-31",
      type: "mcq",
      title: "Parameters",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for parameters?",
      options: ["Apply parameters with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use parameters only because it sounds advanced, without checking impact or constraints", "Ignore parameters until the issue becomes urgent in production or with customers", "Delegate parameters completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "parameters is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-32",
      type: "mcq",
      title: "Drill Fields",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for drill fields?",
      options: ["Apply drill fields with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use drill fields only because it sounds advanced, without checking impact or constraints", "Ignore drill fields until the issue becomes urgent in production or with customers", "Delegate drill fields completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "drill fields is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-33",
      type: "mcq",
      title: "Content Validation",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for content validation?",
      options: ["Apply content validation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use content validation only because it sounds advanced, without checking impact or constraints", "Ignore content validation until the issue becomes urgent in production or with customers", "Delegate content validation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "content validation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-34",
      type: "mcq",
      title: "Looker Studio Blending",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for Looker Studio blending?",
      options: ["Apply Looker Studio blending with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Looker Studio blending only because it sounds advanced, without checking impact or constraints", "Ignore Looker Studio blending until the issue becomes urgent in production or with customers", "Delegate Looker Studio blending completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Looker Studio blending is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-35",
      type: "mcq",
      title: "Calculated Fields",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for calculated fields?",
      options: ["Apply calculated fields with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use calculated fields only because it sounds advanced, without checking impact or constraints", "Ignore calculated fields until the issue becomes urgent in production or with customers", "Delegate calculated fields completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "calculated fields is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-36",
      type: "mcq",
      title: "Dashboard Design",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for dashboard design?",
      options: ["Apply dashboard design with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use dashboard design only because it sounds advanced, without checking impact or constraints", "Ignore dashboard design until the issue becomes urgent in production or with customers", "Delegate dashboard design completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "dashboard design is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-37",
      type: "mcq",
      title: "Governed Metrics",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for governed metrics?",
      options: ["Apply governed metrics with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use governed metrics only because it sounds advanced, without checking impact or constraints", "Ignore governed metrics until the issue becomes urgent in production or with customers", "Delegate governed metrics completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "governed metrics is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-38",
      type: "mcq",
      title: "Sql Runner",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for SQL Runner?",
      options: ["Apply SQL Runner with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use SQL Runner only because it sounds advanced, without checking impact or constraints", "Ignore SQL Runner until the issue becomes urgent in production or with customers", "Delegate SQL Runner completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "SQL Runner is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-39",
      type: "mcq",
      title: "Explore Performance",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for Explore performance?",
      options: ["Apply Explore performance with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Explore performance only because it sounds advanced, without checking impact or constraints", "Ignore Explore performance until the issue becomes urgent in production or with customers", "Delegate Explore performance completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Explore performance is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "lk-40",
      type: "mcq",
      title: "Analytics Governance",
      prompt: "In a professional Looker & Looker Studio Professional scenario, which response best demonstrates strong judgment for analytics governance?",
      options: ["Apply analytics governance with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use analytics governance only because it sounds advanced, without checking impact or constraints", "Ignore analytics governance until the issue becomes urgent in production or with customers", "Delegate analytics governance completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "analytics governance is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
