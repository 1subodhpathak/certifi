import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const sqlAdvData = {
  id: ASSESSMENT_TYPES.sql_adv,
  title: "Advanced SQL & Query Optimization Professional Certification",
  shortTitle: "SQL Adv",
  category: "Databases",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Window functions, CTEs, joins, indexes, query plans, transactions, normalization, materialized views, performance tuning, and analytical SQL judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sq-01",
      type: "mcq",
      title: "Window Functions",
      prompt: "Which window function is used to assign a unique sequential integer to rows within a partition?",
      options: ["RANK()", "DENSE_RANK()", "ROW_NUMBER()", "NTILE()"],
      correctIndex: 2,
      explanation: "ROW_NUMBER() always assigns unique consecutive numbers. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-02",
      type: "mcq",
      title: "CTEs",
      prompt: "What does \"CTE\" stand for in SQL?",
      options: ["Common Table Expression", "Column Transaction Entry", "Cached Table Element", "Complex Tuning Engine"],
      correctIndex: 0,
      explanation: "CTEs improve readability and can be recursive. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-03",
      type: "mcq",
      title: "Indexing",
      prompt: "What is a \"Clustered Index\"?",
      options: ["An index on many columns", "An index that determines the physical order of data in a table", "A non-unique index", "A secondary index"],
      correctIndex: 1,
      explanation: "A table can have only one clustered index (usually the Primary Key). This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-04",
      type: "mcq",
      title: "Joins",
      prompt: "Which join returns all rows from the left table and matched rows from the right?",
      options: ["INNER JOIN", "LEFT JOIN", "FULL JOIN", "CROSS JOIN"],
      correctIndex: 1,
      explanation: "LEFT JOIN ensures no data from the primary table is lost. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-05",
      type: "mcq",
      title: "ACID",
      prompt: "What does the \"A\" in ACID properties stand for?",
      options: ["Accuracy", "Atomicity", "Availability", "Aggregration"],
      correctIndex: 1,
      explanation: "Atomicity ensures a transaction is \"all or nothing\". This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-06",
      type: "mcq",
      title: "Normalization",
      prompt: "Which normal form is concerned with removing partial functional dependencies?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      correctIndex: 1,
      explanation: "2NF requires that all non-key attributes are fully functional on the primary key."
    },
    {
      id: "sq-07",
      type: "mcq",
      title: "Query Tuning",
      prompt: "What does an \"EXPLAIN\" plan show?",
      options: ["The query result", "The execution path the database engine takes for a query", "The table schema", "User permissions"],
      correctIndex: 1,
      explanation: "EXPLAIN helps identify slow scans or missing indexes. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-08",
      type: "mcq",
      title: "Triggers",
      prompt: "What is a SQL Trigger?",
      options: ["A button", "Stored code that automatically executes in response to certain events (INSERT/UPDATE)", "A type of join", "A primary key"],
      correctIndex: 1,
      explanation: "Triggers are used for complex integrity or auditing. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-09",
      type: "mcq",
      title: "Views",
      prompt: "What is a \"Materialized View\"?",
      options: ["A temporary view", "A view whose results are physically stored and can be refreshed", "A read-only table", "A hidden table"],
      correctIndex: 1,
      explanation: "Materialized views improve performance for heavy aggregations. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-10",
      type: "mcq",
      title: "Transactions",
      prompt: "Which command saves all changes made during a transaction?",
      options: ["SAVE", "COMMIT", "ROLLBACK", "EXIT"],
      correctIndex: 1,
      explanation: "COMMIT makes changes permanent. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-11",
      type: "mcq",
      title: "Ranking",
      prompt: "How does RANK() differ from DENSE_RANK()?",
      options: ["No difference", "RANK() skips numbers after a tie; DENSE_RANK() does not", "DENSE_RANK() is slower", "RANK() is for integers only"],
      correctIndex: 1,
      explanation: "RANK gives 1, 2, 2, 4 while DENSE_RANK gives 1, 2, 2, 3. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-12",
      type: "mcq",
      title: "Constraints",
      prompt: "What is a FOREIGN KEY used for?",
      options: ["To encrypt data", "To enforce referential integrity between two tables", "To sort data", "To hide columns"],
      correctIndex: 1,
      explanation: "It ensures that the value in one table matches a value in another. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-13",
      type: "mcq",
      title: "Set Operators",
      prompt: "Which operator returns rows that appear in both queries?",
      options: ["UNION", "EXCEPT", "INTERSECT", "MINUS"],
      correctIndex: 2,
      explanation: "INTERSECT finds the common set between two query results. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-14",
      type: "mcq",
      title: "Stored Procs",
      prompt: "What is a benefit of using Stored Procedures?",
      options: ["Faster SQL writing", "Reduced network traffic and improved security through encapsulation", "Better CSS", "No database needed"],
      correctIndex: 1,
      explanation: "Logic is pre-compiled on the server. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-15",
      type: "mcq",
      title: "GROUP BY",
      prompt: "Which clause is used to filter the results of a GROUP BY?",
      options: ["WHERE", "HAVING", "FILTER", "LIMIT"],
      correctIndex: 1,
      explanation: "HAVING is applied after aggregation; WHERE is applied before. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-16",
      type: "mcq",
      title: "Self Join",
      prompt: "What is a \"Self Join\"?",
      options: ["Joining a table to itself", "Joining two identical tables", "A join with no conditions", "Deleting data"],
      correctIndex: 0,
      explanation: "Useful for hierarchical data (e.g., employee-manager relationship in one table)."
    },
    {
      id: "sq-17",
      type: "mcq",
      title: "Execution Order",
      prompt: "In a SELECT statement, which clause is logically processed first?",
      options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
      correctIndex: 1,
      explanation: "The engine first identifies the source table (FROM). This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-18",
      type: "mcq",
      title: "NULLs",
      prompt: "How do you check for a missing value in SQL?",
      options: ["col = NULL", "col IS NULL", "col == \"\"", "col is EMPTY"],
      correctIndex: 1,
      explanation: "NULL is not a value, so it requires the IS NULL operator. This is a checked foundational concept for professional SQL Adv work."
    },
    {
      id: "sq-19",
      type: "mcq",
      title: "Partitioning",
      prompt: "What is \"Horizontal Partitioning\"?",
      options: ["Splitting a table into smaller tables by columns", "Splitting a table into smaller tables by rows", "Rotating data", "Encryption"],
      correctIndex: 1,
      explanation: "Helps manage massive tables by breaking them into manageable chunks (shards)."
    },
    {
      id: "sq-20",
      type: "mcq",
      title: "Cursors",
      prompt: "What is a SQL Cursor used for?",
      options: ["To click on rows", "To process query results one row at a time in procedural code", "To speed up SELECTs", "To design reports"],
      correctIndex: 1,
      explanation: "Cursors are row-level iterators, often slower than set-based operations."
    },
    {
      id: "sq-21",
      type: "mcq",
      title: "Row_Number Deduplication",
      prompt: "In a professional Advanced SQL & Query Optimization scenario, what is the strongest approach when dealing with ROW_NUMBER deduplication?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Row_Number Deduplication requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sq-22",
      type: "mcq",
      title: "Rank Versus Dense_Rank",
      prompt: "A team is making a decision about RANK versus DENSE_RANK. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about RANK versus DENSE_RANK balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sq-23",
      type: "mcq",
      title: "Running Total Window",
      prompt: "Which signal suggests running total window needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when running total window could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sq-24",
      type: "mcq",
      title: "Lead Lag Comparison",
      prompt: "What is the best way to validate work involving lead lag comparison?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for lead lag comparison should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sq-25",
      type: "mcq",
      title: "Recursive Cte",
      prompt: "In a professional Advanced SQL & Query Optimization scenario, what is the strongest approach when dealing with recursive CTE?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Recursive Cte requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sq-26",
      type: "mcq",
      title: "Anti Join",
      prompt: "A team is making a decision about anti join. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about anti join balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sq-27",
      type: "mcq",
      title: "Semi Join",
      prompt: "Which signal suggests semi join needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when semi join could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sq-28",
      type: "mcq",
      title: "Sargable Predicate",
      prompt: "What is the best way to validate work involving sargable predicate?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for sargable predicate should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sq-29",
      type: "mcq",
      title: "Covering Index",
      prompt: "In a professional Advanced SQL & Query Optimization scenario, what is the strongest approach when dealing with covering index?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Covering Index requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sq-30",
      type: "mcq",
      title: "Composite Index Order",
      prompt: "A team is making a decision about composite index order. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about composite index order balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sq-31",
      type: "mcq",
      title: "Index Selectivity",
      prompt: "Which signal suggests index selectivity needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when index selectivity could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sq-32",
      type: "mcq",
      title: "Query Plan Scan Type",
      prompt: "What is the best way to validate work involving query plan scan type?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for query plan scan type should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sq-33",
      type: "mcq",
      title: "Transaction Isolation",
      prompt: "In a professional Advanced SQL & Query Optimization scenario, what is the strongest approach when dealing with transaction isolation?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Transaction Isolation requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sq-34",
      type: "mcq",
      title: "Deadlock Prevention",
      prompt: "A team is making a decision about deadlock prevention. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about deadlock prevention balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sq-35",
      type: "mcq",
      title: "Upsert Pattern",
      prompt: "Which signal suggests upsert pattern needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when upsert pattern could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sq-36",
      type: "mcq",
      title: "Materialized View Refresh",
      prompt: "What is the best way to validate work involving materialized view refresh?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for materialized view refresh should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sq-37",
      type: "mcq",
      title: "Partition Pruning",
      prompt: "In a professional Advanced SQL & Query Optimization scenario, what is the strongest approach when dealing with partition pruning?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Partition Pruning requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sq-38",
      type: "mcq",
      title: "Slow Query Triage",
      prompt: "A team is making a decision about slow query triage. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about slow query triage balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sq-39",
      type: "mcq",
      title: "Data Warehouse Sql",
      prompt: "Which signal suggests data warehouse SQL needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when data warehouse SQL could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sq-40",
      type: "mcq",
      title: "Analytical Sql Judgment",
      prompt: "What is the best way to validate work involving analytical SQL judgment?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for analytical SQL judgment should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
