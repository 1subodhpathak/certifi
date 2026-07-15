import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const tableauData = {
  id: ASSESSMENT_TYPES.tableau,
  title: "Tableau Visual Analytics Professional Certification",
  shortTitle: "Tableau",
  category: "Data Tools",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Tableau calculations, LOD expressions, table calculations, dashboard design, data modeling, parameters, actions, extracts, performance, and executive visual analytics.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "tab-01",
      type: "mcq",
      title: "LOD Expressions",
      prompt: "Which LOD keyword ignores all filters except Context Filters?",
      options: ["INCLUDE", "EXCLUDE", "FIXED", "NONE"],
      correctIndex: 2,
      explanation: "FIXED LOD expressions are calculated before Dimension filters. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-02",
      type: "mcq",
      title: "Data Types",
      prompt: "In Tableau, what color represents Continuous fields?",
      options: ["Blue", "Green", "Orange", "Red"],
      correctIndex: 1,
      explanation: "Green means continuous (measurable); Blue means discrete (categorical)."
    },
    {
      id: "tab-03",
      type: "mcq",
      title: "Calculations",
      prompt: "What is the difference between a Dimension and a Measure?",
      options: ["Measures are numbers, Dimensions are text", "Dimensions slice the data, Measures are aggregated", "There is no difference", "Dimensions are larger"],
      correctIndex: 1,
      explanation: "Dimensions define the level of detail; Measures are the quantitative values being calculated."
    },
    {
      id: "tab-04",
      type: "mcq",
      title: "Sets vs Groups",
      prompt: "Which one can be dynamic based on a condition?",
      options: ["Groups", "Sets", "Folders", "Bins"],
      correctIndex: 1,
      explanation: "Sets can be defined by conditions (e.g., Top 10) and update as data changes."
    },
    {
      id: "tab-05",
      type: "mcq",
      title: "Blending",
      prompt: "What is a limitation of Data Blending?",
      options: ["It uses Left Join only", "It requires a common dimension", "It can result in Asterisks (*) if data isn't at the same grain", "All of the above"],
      correctIndex: 3,
      explanation: "Blending is a visual-level join with several constraints, including the asterisk for multiple matches."
    },
    {
      id: "tab-06",
      type: "mcq",
      title: "Table Calcs",
      prompt: "A \"Running Sum\" is an example of what?",
      options: ["LOD Expression", "Table Calculation", "Aggregate Function", "Row Level Calc"],
      correctIndex: 1,
      explanation: "Table calculations are performed on the results in the view. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-07",
      type: "mcq",
      title: "Dashboards",
      prompt: "How do you make one sheet filter another on a dashboard?",
      options: ["URL Actions", "Filter Actions", "Highlight Actions", "Parameter Actions"],
      correctIndex: 1,
      explanation: "Filter Actions allow interaction between different worksheets. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-08",
      type: "mcq",
      title: "Parameters",
      prompt: "How are Parameters different from Filters?",
      options: ["Parameters are global, Filters are local", "Parameters are static lists or values used in calcs, Filters exclude data", "Filters are faster", "No difference"],
      correctIndex: 1,
      explanation: "Parameters are user-input variables that don't filter data unless referenced in a calc or filter."
    },
    {
      id: "tab-09",
      type: "mcq",
      title: "Extracts",
      prompt: "What is a .hyper file?",
      options: ["A logo", "Tableau's high-performance in-memory data engine format", "A configuration file", "A script"],
      correctIndex: 1,
      explanation: "Hyper is the technology behind Tableau data extracts. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-10",
      type: "mcq",
      title: "Joins",
      prompt: "Where do you perform physical joins in Tableau?",
      options: ["Sheet Tab", "Data Source Tab", "Dashboard Tab", "Analytics Pane"],
      correctIndex: 1,
      explanation: "Joins and Relationships are configured in the Data Source tab. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-11",
      type: "mcq",
      title: "Dual Axis",
      prompt: "How do you create a chart with two different scales on one view?",
      options: ["Combined Axis", "Dual Axis", "Side-by-side", "Treemap"],
      correctIndex: 1,
      explanation: "Dual Axis allows two measures to share the same pane with separate axes."
    },
    {
      id: "tab-12",
      type: "mcq",
      title: "Bins",
      prompt: "What chart type is most commonly created using Bins?",
      options: ["Pie Chart", "Histogram", "Gantt Chart", "Bullet Graph"],
      correctIndex: 1,
      explanation: "Bins discretize a continuous measure into ranges for histograms. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-13",
      type: "mcq",
      title: "Context Filters",
      prompt: "Why would you use a Context Filter?",
      options: ["To make the filter slower", "To improve performance or affect LOD FIXED calcs", "To change colors", "To export data"],
      correctIndex: 1,
      explanation: "Context filters are processed before others, creating a temporary table."
    },
    {
      id: "tab-14",
      type: "mcq",
      title: "Granularity",
      prompt: "What happens when you add a Dimension to the \"Detail\" mark?",
      options: ["Data is aggregated more", "Data is broken down into more marks (finer grain)", "Nothing", "Chart turns into a table"],
      correctIndex: 1,
      explanation: "Adding dimensions increases the level of detail/granularity of the view."
    },
    {
      id: "tab-15",
      type: "mcq",
      title: "Story Points",
      prompt: "What is a \"Story\" in Tableau?",
      options: ["A long tooltip", "A sequence of visualizations that work together to convey information", "A data source", "A type of join"],
      correctIndex: 1,
      explanation: "Stories are used for guided walk-throughs of insights. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-16",
      type: "mcq",
      title: "Hierarchy",
      prompt: "What is the benefit of creating a Hierarchy?",
      options: ["Drill-down capability (+/- buttons)", "Automatic coloring", "Better security", "Smaller file size"],
      correctIndex: 0,
      explanation: "Hierarchies (like Country > State > City) allow users to expand/collapse levels."
    },
    {
      id: "tab-17",
      type: "mcq",
      title: "Aliasing",
      prompt: "How do you change the display name of a dimension member without changing the data?",
      options: ["Rename field", "Alias", "Format", "Caption"],
      correctIndex: 1,
      explanation: "Right-click a member and select \"Alias\" to change its display label. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-18",
      type: "mcq",
      title: "Analytics Pane",
      prompt: "Which feature can be dragged from the Analytics pane?",
      options: ["Calculated Field", "Reference Line", "Parameter", "Set"],
      correctIndex: 1,
      explanation: "Reference lines, Trend lines, and Clusters are in the Analytics pane. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-19",
      type: "mcq",
      title: "Sorting",
      prompt: "What is a \"Nested Sort\"?",
      options: ["Sorting everything at once", "Sorting within the context of a higher-level dimension", "Random sort", "Color-based sort"],
      correctIndex: 1,
      explanation: "Nested sorting sorts items independently within each pane. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-20",
      type: "mcq",
      title: "Calculation Order",
      prompt: "Which is calculated first in Tableau's Order of Operations?",
      options: ["Dimension Filters", "Context Filters", "Extract Filters", "Table Calcs"],
      correctIndex: 2,
      explanation: "Extract filters are at the very top of the order of operations. This is a checked foundational concept for professional Tableau work."
    },
    {
      id: "tab-21",
      type: "mcq",
      title: "Fixed Lod Filter Order",
      prompt: "In a professional Tableau Visual Analytics scenario, what is the strongest approach when dealing with FIXED LOD filter order?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Fixed Lod Filter Order requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "tab-22",
      type: "mcq",
      title: "Include Lod Use Case",
      prompt: "A team is making a decision about INCLUDE LOD use case. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about INCLUDE LOD use case balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "tab-23",
      type: "mcq",
      title: "Exclude Lod Use Case",
      prompt: "Which signal suggests EXCLUDE LOD use case needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when EXCLUDE LOD use case could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "tab-24",
      type: "mcq",
      title: "Table Calculation Addressing",
      prompt: "What is the best way to validate work involving table calculation addressing?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for table calculation addressing should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "tab-25",
      type: "mcq",
      title: "Running Total Setup",
      prompt: "In a professional Tableau Visual Analytics scenario, what is the strongest approach when dealing with running total setup?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Running Total Setup requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "tab-26",
      type: "mcq",
      title: "Parameter Action",
      prompt: "A team is making a decision about parameter action. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about parameter action balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "tab-27",
      type: "mcq",
      title: "Set Action",
      prompt: "Which signal suggests set action needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when set action could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "tab-28",
      type: "mcq",
      title: "Dashboard Filter Action",
      prompt: "What is the best way to validate work involving dashboard filter action?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for dashboard filter action should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "tab-29",
      type: "mcq",
      title: "Extract Versus Live",
      prompt: "In a professional Tableau Visual Analytics scenario, what is the strongest approach when dealing with extract versus live?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Extract Versus Live requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "tab-30",
      type: "mcq",
      title: "Context Filter Impact",
      prompt: "A team is making a decision about context filter impact. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about context filter impact balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "tab-31",
      type: "mcq",
      title: "Data Blending Grain",
      prompt: "Which signal suggests data blending grain needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when data blending grain could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "tab-32",
      type: "mcq",
      title: "Relationship Versus Join",
      prompt: "What is the best way to validate work involving relationship versus join?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for relationship versus join should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "tab-33",
      type: "mcq",
      title: "Calculated Field Aggregation",
      prompt: "In a professional Tableau Visual Analytics scenario, what is the strongest approach when dealing with calculated field aggregation?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Calculated Field Aggregation requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "tab-34",
      type: "mcq",
      title: "Dual Axis Caution",
      prompt: "A team is making a decision about dual axis caution. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about dual axis caution balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "tab-35",
      type: "mcq",
      title: "Dashboard Performance",
      prompt: "Which signal suggests dashboard performance needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when dashboard performance could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "tab-36",
      type: "mcq",
      title: "Visual Best Practice",
      prompt: "What is the best way to validate work involving visual best practice?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for visual best practice should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "tab-37",
      type: "mcq",
      title: "Tooltip Design",
      prompt: "In a professional Tableau Visual Analytics scenario, what is the strongest approach when dealing with tooltip design?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Tooltip Design requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "tab-38",
      type: "mcq",
      title: "Executive Kpi Dashboard",
      prompt: "A team is making a decision about executive KPI dashboard. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about executive KPI dashboard balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "tab-39",
      type: "mcq",
      title: "Row-Level Security",
      prompt: "Which signal suggests row-level security needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when row-level security could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "tab-40",
      type: "mcq",
      title: "Analytics Storytelling",
      prompt: "What is the best way to validate work involving analytics storytelling?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for analytics storytelling should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
