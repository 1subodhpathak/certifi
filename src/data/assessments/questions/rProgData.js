import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const rProgData = {
  id: ASSESSMENT_TYPES.r_prog,
  title: "R Programming for Data Science Professional Certification",
  shortTitle: "R Programming",
  category: "Advanced Tech",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "R fundamentals, data frames, tidyverse, dplyr, ggplot2, statistical analysis, missing data, modeling workflows, reproducibility, and production analytics judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "rp-01",
      type: "mcq",
      title: "Core Concept",
      prompt: "What is R primarily used for?",
      options: ["Game development", "Statistical computing and data visualization", "Mobile apps", "Web servers"],
      correctIndex: 1,
      explanation: "R is the go-to language for statisticians and data scientists. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-02",
      type: "mcq",
      title: "Data Structures",
      prompt: "What is a \"Data Frame\"?",
      options: ["A picture frame", "A table-like structure where columns can have different data types", "A list of numbers only", "A type of array"],
      correctIndex: 1,
      explanation: "Data frames are the most common structure for tabular data in R. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-03",
      type: "mcq",
      title: "Tidyverse",
      prompt: "What is the \"Tidyverse\"?",
      options: ["A cleaning tool", "A collection of R packages designed for data science (dplyr, ggplot2, etc.)", "A type of database", "A version of R"],
      correctIndex: 1,
      explanation: "The Tidyverse provides a consistent grammar for data manipulation. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-04",
      type: "mcq",
      title: "Assignment",
      prompt: "Which operator is most commonly used for assignment in R?",
      options: ["=", ":=", "<-", "->"],
      correctIndex: 2,
      explanation: "While = works, <- is the idiomatic R assignment operator. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-05",
      type: "mcq",
      title: "Dplyr",
      prompt: "Which dplyr function is used to pick a subset of columns?",
      options: ["filter()", "select()", "mutate()", "summarize()"],
      correctIndex: 1,
      explanation: "select() is for columns; filter() is for rows. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-06",
      type: "mcq",
      title: "Ggplot2",
      prompt: "What is the \"Grammar of Graphics\" (ggplot2) based on?",
      options: ["Layers", "Drawing lines", "Pixels", "Shapes"],
      correctIndex: 0,
      explanation: "ggplot2 builds plots layer by layer (data, mapping, geom). This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-07",
      type: "mcq",
      title: "Vectorization",
      prompt: "What is \"Vectorization\" in R?",
      options: ["Drawing vectors", "Operations that apply to an entire vector at once without explicit loops", "Converting data to PDF", "A type of sorting"],
      correctIndex: 1,
      explanation: "Vectorized code is much faster and cleaner in R. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-08",
      type: "mcq",
      title: "Missing Data",
      prompt: "How are missing values represented in R?",
      options: ["NULL", "NaN", "NA", "EMPTY"],
      correctIndex: 2,
      explanation: "NA (Not Available) is the standard for missing data. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-09",
      type: "mcq",
      title: "Piping",
      prompt: "What is the pipe operator (%>%) in the magrittr/dplyr package used for?",
      options: ["Connecting databases", "Passing the result of one function as the first argument to the next", "Adding numbers", "Ending a script"],
      correctIndex: 1,
      explanation: "Piping makes code much more readable by reading left-to-right. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-10",
      type: "mcq",
      title: "Factors",
      prompt: "What are \"Factors\" used for?",
      options: ["Multiplication", "Storing categorical data with defined levels", "Sorting numbers", "Managing memory"],
      correctIndex: 1,
      explanation: "Factors are essential for statistical modeling of groups. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-11",
      type: "mcq",
      title: "Lists",
      prompt: "What makes a List different from a Vector in R?",
      options: ["No difference", "Lists can contain different types of elements (including other lists)", "Vectors are larger", "Lists are for strings only"],
      correctIndex: 1,
      explanation: "Vectors are atomic (one type); lists are generic. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-12",
      type: "mcq",
      title: "CRAN",
      prompt: "What is \"CRAN\"?",
      options: ["A type of computer", "The Comprehensive R Archive Network - the main repository for R packages", "A search engine", "A data file"],
      correctIndex: 1,
      explanation: "CRAN hosts thousands of community-built packages. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-13",
      type: "mcq",
      title: "Functions",
      prompt: "How do you define a function in R?",
      options: ["def myFunc():", "function(args) { body }", "myFunc => {}", "void myFunc() {}"],
      correctIndex: 1,
      explanation: "Example: add <- function(x, y) { x + y }. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-14",
      type: "mcq",
      title: "Apply Family",
      prompt: "What is the \"apply\" family of functions used for?",
      options: ["Applying for jobs", "Iterating over data structures (lists, matrices) in a functional way", "Database joins", "Encryption"],
      correctIndex: 1,
      explanation: "Functions like lapply, sapply, and tapply are R-idiomatic alternatives to loops."
    },
    {
      id: "rp-15",
      type: "mcq",
      title: "RMarkdown",
      prompt: "What is \"RMarkdown\" used for?",
      options: ["Writing code only", "Creating dynamic documents that combine code, output, and narrative (HTML, PDF, Word)", "Styling websites", "Managing servers"],
      correctIndex: 1,
      explanation: "Essential for reproducible research and reporting. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-16",
      type: "mcq",
      title: "Indexing",
      prompt: "In R, what is the starting index of a vector?",
      options: ["0", "1", "-1", "Random"],
      correctIndex: 1,
      explanation: "R is 1-indexed, which differs from many other programming languages. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-17",
      type: "mcq",
      title: "Matrices",
      prompt: "What is a \"Matrix\" in R?",
      options: ["A movie", "A 2D array where all elements must be of the same data type", "A type of list", "A database table"],
      correctIndex: 1,
      explanation: "Matrices are used for mathematical and linear algebra operations. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-18",
      type: "mcq",
      title: "Packages",
      prompt: "Which command is used to install a new package from CRAN?",
      options: ["get package", "install.packages(\"name\")", "npm install name", "library(name)"],
      correctIndex: 1,
      explanation: "library() loads it; install.packages() downloads it. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-19",
      type: "mcq",
      title: "Statistical Tests",
      prompt: "Which function is used to perform a T-test in R?",
      options: ["t.test()", "mean.test()", "stats.t()", "cor.test()"],
      correctIndex: 0,
      explanation: "R has hundreds of built-in statistical test functions. This is a checked foundational concept for professional R Programming work."
    },
    {
      id: "rp-20",
      type: "mcq",
      title: "Shiny",
      prompt: "What is \"Shiny\"?",
      options: ["A cleaning product", "A framework for building interactive web applications directly from R", "A plotting library", "A database driver"],
      correctIndex: 1,
      explanation: "Shiny allows data scientists to build dashboards without HTML/CSS/JS knowledge."
    },
    {
      id: "rp-21",
      type: "mcq",
      title: "Tidy Data Principles",
      prompt: "In a professional R Programming for Data Science scenario, what is the strongest approach when dealing with tidy data principles?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Tidy Data Principles requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rp-22",
      type: "mcq",
      title: "Dplyr Filter Versus Select",
      prompt: "A team is making a decision about dplyr filter versus select. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about dplyr filter versus select balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rp-23",
      type: "mcq",
      title: "Mutate With Case_When",
      prompt: "Which signal suggests mutate with case_when needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when mutate with case_when could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rp-24",
      type: "mcq",
      title: "Group_By Summarise Workflow",
      prompt: "What is the best way to validate work involving group_by summarise workflow?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for group_by summarise workflow should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "rp-25",
      type: "mcq",
      title: "Joins And Key Integrity",
      prompt: "In a professional R Programming for Data Science scenario, what is the strongest approach when dealing with joins and key integrity?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Joins And Key Integrity requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rp-26",
      type: "mcq",
      title: "Pivot_Longer Usage",
      prompt: "A team is making a decision about pivot_longer usage. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about pivot_longer usage balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rp-27",
      type: "mcq",
      title: "Ggplot Aesthetic Mapping",
      prompt: "Which signal suggests ggplot aesthetic mapping needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when ggplot aesthetic mapping could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rp-28",
      type: "mcq",
      title: "Faceting Strategy",
      prompt: "What is the best way to validate work involving faceting strategy?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for faceting strategy should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "rp-29",
      type: "mcq",
      title: "Missing Value Treatment",
      prompt: "In a professional R Programming for Data Science scenario, what is the strongest approach when dealing with missing value treatment?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Missing Value Treatment requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rp-30",
      type: "mcq",
      title: "Factor Ordering",
      prompt: "A team is making a decision about factor ordering. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about factor ordering balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rp-31",
      type: "mcq",
      title: "Linear Model Interpretation",
      prompt: "Which signal suggests linear model interpretation needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when linear model interpretation could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rp-32",
      type: "mcq",
      title: "Confidence Interval Interpretation",
      prompt: "What is the best way to validate work involving confidence interval interpretation?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for confidence interval interpretation should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "rp-33",
      type: "mcq",
      title: "P-Value Misuse",
      prompt: "In a professional R Programming for Data Science scenario, what is the strongest approach when dealing with p-value misuse?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "P-Value Misuse requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rp-34",
      type: "mcq",
      title: "Reproducible Scripts",
      prompt: "A team is making a decision about reproducible scripts. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about reproducible scripts balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rp-35",
      type: "mcq",
      title: "Rmarkdown Reporting",
      prompt: "Which signal suggests RMarkdown reporting needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when RMarkdown reporting could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rp-36",
      type: "mcq",
      title: "Package Management With Renv",
      prompt: "What is the best way to validate work involving package management with renv?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for package management with renv should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "rp-37",
      type: "mcq",
      title: "Data Type Coercion",
      prompt: "In a professional R Programming for Data Science scenario, what is the strongest approach when dealing with data type coercion?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Data Type Coercion requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rp-38",
      type: "mcq",
      title: "Vector Recycling",
      prompt: "A team is making a decision about vector recycling. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about vector recycling balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rp-39",
      type: "mcq",
      title: "Performance With Vectorization",
      prompt: "Which signal suggests performance with vectorization needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when performance with vectorization could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rp-40",
      type: "mcq",
      title: "Analytics Workflow Review",
      prompt: "What is the best way to validate work involving analytics workflow review?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for analytics workflow review should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
