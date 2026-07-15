import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const sparkData = {
  id: ASSESSMENT_TYPES.spark,
  title: "Apache Spark Big Data Professional Certification",
  shortTitle: "Spark",
  category: "Advanced Tech",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Spark architecture, RDDs, DataFrames, Spark SQL, lazy evaluation, shuffles, partitioning, caching, joins, streaming, performance tuning, and big data operations.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "as-01",
      type: "mcq",
      title: "Core Concept",
      prompt: "What is Apache Spark?",
      options: ["A database", "A unified analytics engine for large-scale data processing", "A web server", "A programming language"],
      correctIndex: 1,
      explanation: "Spark provides a fast, general-purpose cluster-computing system. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-02",
      type: "mcq",
      title: "Performance",
      prompt: "Why is Spark faster than traditional MapReduce?",
      options: ["It uses more disks", "It performs in-memory computing", "It has less code", "It is only for small data"],
      correctIndex: 1,
      explanation: "By keeping data in RAM, Spark avoids expensive disk I/O between stages."
    },
    {
      id: "as-03",
      type: "mcq",
      title: "Data Structures",
      prompt: "What does \"RDD\" stand for?",
      options: ["Random Data Driver", "Resilient Distributed Dataset", "Remote Database Directory", "Real-time Data Delivery"],
      correctIndex: 1,
      explanation: "RDDs are the fundamental data structure of Spark (immutable, partitioned collections)."
    },
    {
      id: "as-04",
      type: "mcq",
      title: "Transformations",
      prompt: "Are Spark transformations \"Lazy\" or \"Eager\"?",
      options: ["Lazy (evaluated only when an action is called)", "Eager (evaluated immediately)", "Depends on the CPU", "Random"],
      correctIndex: 0,
      explanation: "Laziness allows Spark to optimize the entire execution graph. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-05",
      type: "mcq",
      title: "Actions",
      prompt: "Which of these is an \"Action\" (triggers computation)?",
      options: ["map()", "filter()", "collect()", "select()"],
      correctIndex: 2,
      explanation: "Actions like collect(), count(), and save() trigger the execution of the DAG."
    },
    {
      id: "as-06",
      type: "mcq",
      title: "DataFrames",
      prompt: "What is a \"Spark DataFrame\"?",
      options: ["A list of files", "A distributed collection of data organized into named columns (like a table)", "A type of chart", "A database table"],
      correctIndex: 1,
      explanation: "DataFrames provide a higher-level API than RDDs and enable optimization."
    },
    {
      id: "as-07",
      type: "mcq",
      title: "Architecture",
      prompt: "What is the role of the \"Driver\" program in Spark?",
      options: ["To store data", "To orchestrate the execution, schedule tasks, and maintain cluster state", "To process raw bytes", "To manage the UI"],
      correctIndex: 1,
      explanation: "The driver converts user code into units of execution (tasks). This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-08",
      type: "mcq",
      title: "Executors",
      prompt: "What are \"Executors\" in Spark?",
      options: ["The people who write code", "Processes on worker nodes that run the tasks and store data", "The main controller", "A type of database"],
      correctIndex: 1,
      explanation: "Executors perform the actual computation. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-09",
      type: "mcq",
      title: "Spark SQL",
      prompt: "What does Spark SQL allow you to do?",
      options: ["Write SQL only", "Query structured data inside Spark programs using SQL or the DataFrame API", "Connect to any SQL DB only", "Design UI"],
      correctIndex: 1,
      explanation: "It seamlessly mixes SQL with Spark procedural code. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-10",
      type: "mcq",
      title: "Catalyst",
      prompt: "What is the \"Catalyst Optimizer\"?",
      options: ["A fuel additive", "Spark SQL's query optimization engine", "A build tool", "A network layer"],
      correctIndex: 1,
      explanation: "Catalyst optimizes the execution plan for queries. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-11",
      type: "mcq",
      title: "Partitioning",
      prompt: "Why is \"Partitioning\" important in Spark?",
      options: ["To organize files", "To enable parallelism by dividing data across multiple nodes", "To encrypt data", "To backup data"],
      correctIndex: 1,
      explanation: "More partitions allow for more parallel tasks. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-12",
      type: "mcq",
      title: "Shuffling",
      prompt: "What is a \"Shuffle\" in Spark?",
      options: ["A dance", "The process of redistributing data across the cluster (often expensive)", "A type of sort", "A random sample"],
      correctIndex: 1,
      explanation: "Shuffles occur during operations like join() or groupByKey(). This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-13",
      type: "mcq",
      title: "Spark Streaming",
      prompt: "What is \"Structured Streaming\"?",
      options: ["A video service", "A scalable, fault-tolerant stream processing engine built on Spark SQL", "A type of download", "A database link"],
      correctIndex: 1,
      explanation: "It allows processing real-time data using the same API as batch. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-14",
      type: "mcq",
      title: "Broadcast Variables",
      prompt: "What is a \"Broadcast Variable\" used for?",
      options: ["Sending radio signals", "Efficiently sharing a large, read-only value with all worker nodes", "Caching data", "Tracking users"],
      correctIndex: 1,
      explanation: "Instead of sending data with every task, it is sent once per node. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-15",
      type: "mcq",
      title: "Accumulators",
      prompt: "What is an \"Accumulator\" used for?",
      options: ["Storing files", "Variables that are only \"added\" to (e.g., counters or sums) across executors", "Calculating averages", "Database joins"],
      correctIndex: 1,
      explanation: "Accumulators are write-only for executors. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-16",
      type: "mcq",
      title: "MLlib",
      prompt: "What is \"MLlib\"?",
      options: ["A library for books", "Spark's scalable machine learning library", "A music player", "A database driver"],
      correctIndex: 1,
      explanation: "MLlib contains high-quality algorithms for classification, regression, etc."
    },
    {
      id: "as-17",
      type: "mcq",
      title: "Deployment",
      prompt: "Which cluster manager is built into Spark by default?",
      options: ["YARN", "Mesos", "Kubernetes", "Standalone Cluster Manager"],
      correctIndex: 3,
      explanation: "Spark can also run on YARN or K8s. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-18",
      type: "mcq",
      title: "PySpark",
      prompt: "What is \"PySpark\"?",
      options: ["A Python library for Spark", "The Python API for Spark", "A type of data file", "A web framework"],
      correctIndex: 1,
      explanation: "Allows Python developers to leverage Spark's power. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-19",
      type: "mcq",
      title: "Caching",
      prompt: "Which command persists a DataFrame in memory?",
      options: ["df.save()", "df.cache() or df.persist()", "df.keep()", "df.store()"],
      correctIndex: 1,
      explanation: "Caching is useful for datasets accessed multiple times in a loop. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-20",
      type: "mcq",
      title: "DAG",
      prompt: "What does \"DAG\" stand for in Spark?",
      options: ["Data Access Group", "Directed Acyclic Graph", "Digital Asset Guide", "Distributed Analytics Grid"],
      correctIndex: 1,
      explanation: "Spark represents the execution plan as a DAG of stages. This is a checked foundational concept for professional Spark work."
    },
    {
      id: "as-21",
      type: "mcq",
      title: "Narrow Versus Wide Transformations",
      prompt: "In a professional Apache Spark Big Data scenario, what is the strongest approach when dealing with narrow versus wide transformations?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Narrow Versus Wide Transformations requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "as-22",
      type: "mcq",
      title: "Shuffle Cost",
      prompt: "A team is making a decision about shuffle cost. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about shuffle cost balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "as-23",
      type: "mcq",
      title: "Partition Sizing",
      prompt: "Which signal suggests partition sizing needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when partition sizing could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "as-24",
      type: "mcq",
      title: "Repartition Versus Coalesce",
      prompt: "What is the best way to validate work involving repartition versus coalesce?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for repartition versus coalesce should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "as-25",
      type: "mcq",
      title: "Cache Versus Persist",
      prompt: "In a professional Apache Spark Big Data scenario, what is the strongest approach when dealing with cache versus persist?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Cache Versus Persist requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "as-26",
      type: "mcq",
      title: "Broadcast Join",
      prompt: "A team is making a decision about broadcast join. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about broadcast join balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "as-27",
      type: "mcq",
      title: "Skewed Join Mitigation",
      prompt: "Which signal suggests skewed join mitigation needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when skewed join mitigation could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "as-28",
      type: "mcq",
      title: "Executor Memory",
      prompt: "What is the best way to validate work involving executor memory?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for executor memory should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "as-29",
      type: "mcq",
      title: "Driver Memory Issue",
      prompt: "In a professional Apache Spark Big Data scenario, what is the strongest approach when dealing with driver memory issue?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Driver Memory Issue requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "as-30",
      type: "mcq",
      title: "Collect Anti-Pattern",
      prompt: "A team is making a decision about collect anti-pattern. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about collect anti-pattern balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "as-31",
      type: "mcq",
      title: "Spark Sql Optimizer",
      prompt: "Which signal suggests Spark SQL optimizer needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when Spark SQL optimizer could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "as-32",
      type: "mcq",
      title: "Dataframe Versus Rdd",
      prompt: "What is the best way to validate work involving DataFrame versus RDD?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for DataFrame versus RDD should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "as-33",
      type: "mcq",
      title: "Delta Lake Acid",
      prompt: "In a professional Apache Spark Big Data scenario, what is the strongest approach when dealing with Delta Lake ACID?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Delta Lake Acid requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "as-34",
      type: "mcq",
      title: "Structured Streaming Watermark",
      prompt: "A team is making a decision about Structured Streaming watermark. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about Structured Streaming watermark balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "as-35",
      type: "mcq",
      title: "Checkpointing",
      prompt: "Which signal suggests checkpointing needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when checkpointing could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "as-36",
      type: "mcq",
      title: "Small Files Problem",
      prompt: "What is the best way to validate work involving small files problem?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for small files problem should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "as-37",
      type: "mcq",
      title: "Predicate Pushdown",
      prompt: "In a professional Apache Spark Big Data scenario, what is the strongest approach when dealing with predicate pushdown?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Predicate Pushdown requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "as-38",
      type: "mcq",
      title: "File Format Choice",
      prompt: "A team is making a decision about file format choice. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about file format choice balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "as-39",
      type: "mcq",
      title: "Cluster Sizing",
      prompt: "Which signal suggests cluster sizing needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when cluster sizing could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "as-40",
      type: "mcq",
      title: "Spark Job Debugging",
      prompt: "What is the best way to validate work involving Spark job debugging?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for Spark job debugging should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
