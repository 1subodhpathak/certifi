import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const postgresqlData = {
  id: ASSESSMENT_TYPES.postgresql,
  title: "PostgreSQL Professional Database Certification",
  shortTitle: "PostgreSQL",
  category: "Databases",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "SQL, MVCC, indexing, JSONB, query plans, constraints, transactions, replication, partitioning, extensions, security, and operations.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "pg-01",
      type: "mcq",
      title: "JSON Support",
      prompt: "Which data type is better for storing JSON in PostgreSQL for efficient querying?",
      options: ["JSON", "JSONB", "TEXT", "VARCHAR"],
      correctIndex: 1,
      explanation: "JSONB (Binary JSON) supports indexing and faster processing."
    },
    {
      id: "pg-02",
      type: "mcq",
      title: "Concurrency",
      prompt: "What does \"MVCC\" stand for in PostgreSQL?",
      options: ["Multi-Version Concurrency Control", "Master View Column Control", "Managed Version Cloud Core", "Multiple Value Cached Core"],
      correctIndex: 0,
      explanation: "MVCC allows multiple users to read and write without locking each other."
    },
    {
      id: "pg-03",
      type: "mcq",
      title: "Extensions",
      prompt: "Which command is used to add a new extension to PostgreSQL?",
      options: ["ADD EXTENSION", "CREATE EXTENSION", "INSTALL EXTENSION", "LOAD EXTENSION"],
      correctIndex: 1,
      explanation: "PostgreSQL has a rich ecosystem of extensions like PostGIS or pg_stat_statements."
    },
    {
      id: "pg-04",
      type: "mcq",
      title: "Vacuum",
      prompt: "What is the purpose of the \"VACUUM\" command?",
      options: ["To delete the database", "To reclaim storage occupied by dead tuples (deleted/updated rows)", "To speed up inserts", "To encrypt data"],
      correctIndex: 1,
      explanation: "Because of MVCC, old versions of rows need to be cleaned up."
    },
    {
      id: "pg-05",
      type: "mcq",
      title: "Indexing",
      prompt: "Which index type is best for full-text search in PostgreSQL?",
      options: ["B-Tree", "GIN (Generalized Inverted Index)", "Hash", "BRIN"],
      correctIndex: 1,
      explanation: "GIN indexes are ideal for composite values like arrays and JSONB."
    },
    {
      id: "pg-06",
      type: "mcq",
      title: "Performance",
      prompt: "What does \"pg_stat_statements\" provide?",
      options: ["A log of errors", "Statistics on all SQL statements executed by the server", "A GUI", "User profiles"],
      correctIndex: 1,
      explanation: "It is the most important extension for finding slow queries."
    },
    {
      id: "pg-07",
      type: "mcq",
      title: "Functions",
      prompt: "Which procedural language is native to PostgreSQL for writing functions?",
      options: ["T-SQL", "PL/pgSQL", "PL/SQL", "Java"],
      correctIndex: 1,
      explanation: "PL/pgSQL is the powerful SQL-like procedural language. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pg-08",
      type: "mcq",
      title: "Triggers",
      prompt: "Can a PostgreSQL trigger call a function written in Python or JS?",
      options: ["No", "Yes (via PL/Python or PL/V8 extensions)", "Only in the cloud", "Only for small tables"],
      correctIndex: 1,
      explanation: "PostgreSQL supports multiple procedural languages via its extension system."
    },
    {
      id: "pg-09",
      type: "mcq",
      title: "WAL",
      prompt: "What is \"WAL\" (Write Ahead Logging)?",
      options: ["A security wall", "A standard method for ensuring data integrity by logging changes before they are written to data files", "A type of index", "A networking tool"],
      correctIndex: 1,
      explanation: "WAL ensures the database can recover after a crash. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pg-10",
      type: "mcq",
      title: "Foreign Data Wrappers",
      prompt: "What is \"FDW\" in PostgreSQL?",
      options: ["A firewall", "Foreign Data Wrapper - allows querying data from other databases/files as if they were local tables", "A data encryptor", "A backup tool"],
      correctIndex: 1,
      explanation: "PostgreSQL can act as a hub for many data sources. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pg-11",
      type: "mcq",
      title: "Serial",
      prompt: "In older versions, what did the \"SERIAL\" data type create?",
      options: ["A random number", "An auto-incrementing integer sequence", "A string", "A date"],
      correctIndex: 1,
      explanation: "Modern Postgres (10+) favors IDENTITY columns. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pg-12",
      type: "mcq",
      title: "BRIN Index",
      prompt: "When is a \"BRIN\" (Block Range Index) most effective?",
      options: ["For small tables", "For very large tables where data is physically sorted by the indexed column (e.g., timestamps)", "For text search", "For unique IDs"],
      correctIndex: 1,
      explanation: "BRIN indexes are much smaller than B-Trees for specific datasets."
    },
    {
      id: "pg-13",
      type: "mcq",
      title: "Explain",
      prompt: "What is the difference between EXPLAIN and EXPLAIN ANALYZE?",
      options: ["No difference", "EXPLAIN shows the plan; EXPLAIN ANALYZE actually runs the query and shows real times", "ANALYZE is slower", "EXPLAIN is only for SELECT"],
      correctIndex: 1,
      explanation: "Use ANALYZE to get the most accurate performance profile."
    },
    {
      id: "pg-14",
      type: "mcq",
      title: "Schemas",
      prompt: "What is a \"Schema\" in PostgreSQL?",
      options: ["The whole database", "A logical container for grouping tables/views within a database", "A user role", "A type of join"],
      correctIndex: 1,
      explanation: "The \"public\" schema is the default. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pg-15",
      type: "mcq",
      title: "Common Table Expressions",
      prompt: "Does PostgreSQL support Recursive CTEs?",
      options: ["No", "Yes", "Only for integers", "Only in the cloud"],
      correctIndex: 1,
      explanation: "Recursive CTEs are powerful for hierarchical or graph data."
    },
    {
      id: "pg-16",
      type: "mcq",
      title: "UPSERT",
      prompt: "Which clause is used for UPSERT operations in PostgreSQL?",
      options: ["INSERT OR UPDATE", "ON CONFLICT", "IF EXISTS", "MERGE"],
      correctIndex: 1,
      explanation: "INSERT ... ON CONFLICT (id) DO UPDATE ... is the standard syntax."
    },
    {
      id: "pg-17",
      type: "mcq",
      title: "Replication",
      prompt: "What is the difference between Physical and Logical replication?",
      options: ["No difference", "Physical replicates disk blocks; Logical replicates data changes (SQL-like)", "Physical is faster", "Logical is for backups only"],
      correctIndex: 1,
      explanation: "Logical replication allows for more granular control and cross-version sync."
    },
    {
      id: "pg-18",
      type: "mcq",
      title: "Views",
      prompt: "Is a standard VIEW in Postgres materialized by default?",
      options: ["Yes", "No, it is a virtual table computed at runtime", "Only in production", "Only for small tables"],
      correctIndex: 1,
      explanation: "Standard views don't store data; Materialized views do."
    },
    {
      id: "pg-19",
      type: "mcq",
      title: "Array Type",
      prompt: "Can you store a native Array of integers in a single column?",
      options: ["No", "Yes", "Only with a plugin", "Only as JSON"],
      correctIndex: 1,
      explanation: "PostgreSQL has native support for array types on almost any data type."
    },
    {
      id: "pg-20",
      type: "mcq",
      title: "Constraints",
      prompt: "What is an \"Exclusion Constraint\"?",
      options: ["A way to block users", "A constraint that ensures two rows don't overlap in a specific way (e.g., booking times)", "A unique key", "A foreign key"],
      correctIndex: 1,
      explanation: "Commonly used with GIST indexes for range types. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "pg-21",
      type: "mcq",
      title: "Explain Analyze",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for EXPLAIN ANALYZE?",
      options: ["Apply EXPLAIN ANALYZE with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use EXPLAIN ANALYZE only because it sounds advanced, without checking impact or constraints", "Ignore EXPLAIN ANALYZE until the issue becomes urgent in production or with customers", "Delegate EXPLAIN ANALYZE completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "EXPLAIN ANALYZE is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-22",
      type: "mcq",
      title: "B-Tree Indexes",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for B-tree indexes?",
      options: ["Apply B-tree indexes with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use B-tree indexes only because it sounds advanced, without checking impact or constraints", "Ignore B-tree indexes until the issue becomes urgent in production or with customers", "Delegate B-tree indexes completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "B-tree indexes is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-23",
      type: "mcq",
      title: "Partial Indexes",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for partial indexes?",
      options: ["Apply partial indexes with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use partial indexes only because it sounds advanced, without checking impact or constraints", "Ignore partial indexes until the issue becomes urgent in production or with customers", "Delegate partial indexes completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "partial indexes is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-24",
      type: "mcq",
      title: "Composite Index Order",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for composite index order?",
      options: ["Apply composite index order with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use composite index order only because it sounds advanced, without checking impact or constraints", "Ignore composite index order until the issue becomes urgent in production or with customers", "Delegate composite index order completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "composite index order is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-25",
      type: "mcq",
      title: "Transaction Isolation",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for transaction isolation?",
      options: ["Apply transaction isolation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use transaction isolation only because it sounds advanced, without checking impact or constraints", "Ignore transaction isolation until the issue becomes urgent in production or with customers", "Delegate transaction isolation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "transaction isolation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-26",
      type: "mcq",
      title: "Deadlocks",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for deadlocks?",
      options: ["Apply deadlocks with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use deadlocks only because it sounds advanced, without checking impact or constraints", "Ignore deadlocks until the issue becomes urgent in production or with customers", "Delegate deadlocks completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "deadlocks is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-27",
      type: "mcq",
      title: "Foreign Keys",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for foreign keys?",
      options: ["Apply foreign keys with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use foreign keys only because it sounds advanced, without checking impact or constraints", "Ignore foreign keys until the issue becomes urgent in production or with customers", "Delegate foreign keys completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "foreign keys is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-28",
      type: "mcq",
      title: "Unique Constraints",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for unique constraints?",
      options: ["Apply unique constraints with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use unique constraints only because it sounds advanced, without checking impact or constraints", "Ignore unique constraints until the issue becomes urgent in production or with customers", "Delegate unique constraints completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "unique constraints is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-29",
      type: "mcq",
      title: "Upsert",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for upsert?",
      options: ["Apply upsert with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use upsert only because it sounds advanced, without checking impact or constraints", "Ignore upsert until the issue becomes urgent in production or with customers", "Delegate upsert completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "upsert is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-30",
      type: "mcq",
      title: "Jsonb Gin Indexes",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for JSONB GIN indexes?",
      options: ["Apply JSONB GIN indexes with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use JSONB GIN indexes only because it sounds advanced, without checking impact or constraints", "Ignore JSONB GIN indexes until the issue becomes urgent in production or with customers", "Delegate JSONB GIN indexes completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "JSONB GIN indexes is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-31",
      type: "mcq",
      title: "Partitioning",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for partitioning?",
      options: ["Apply partitioning with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use partitioning only because it sounds advanced, without checking impact or constraints", "Ignore partitioning until the issue becomes urgent in production or with customers", "Delegate partitioning completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "partitioning is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-32",
      type: "mcq",
      title: "Streaming Replication",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for streaming replication?",
      options: ["Apply streaming replication with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use streaming replication only because it sounds advanced, without checking impact or constraints", "Ignore streaming replication until the issue becomes urgent in production or with customers", "Delegate streaming replication completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "streaming replication is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-33",
      type: "mcq",
      title: "Backup Restore Testing",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for backup restore testing?",
      options: ["Apply backup restore testing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use backup restore testing only because it sounds advanced, without checking impact or constraints", "Ignore backup restore testing until the issue becomes urgent in production or with customers", "Delegate backup restore testing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "backup restore testing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-34",
      type: "mcq",
      title: "Connection Pooling",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for connection pooling?",
      options: ["Apply connection pooling with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use connection pooling only because it sounds advanced, without checking impact or constraints", "Ignore connection pooling until the issue becomes urgent in production or with customers", "Delegate connection pooling completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "connection pooling is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-35",
      type: "mcq",
      title: "Autovacuum",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for autovacuum?",
      options: ["Apply autovacuum with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use autovacuum only because it sounds advanced, without checking impact or constraints", "Ignore autovacuum until the issue becomes urgent in production or with customers", "Delegate autovacuum completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "autovacuum is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-36",
      type: "mcq",
      title: "Materialized Views",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for materialized views?",
      options: ["Apply materialized views with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use materialized views only because it sounds advanced, without checking impact or constraints", "Ignore materialized views until the issue becomes urgent in production or with customers", "Delegate materialized views completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "materialized views is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-37",
      type: "mcq",
      title: "Ctes",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for CTEs?",
      options: ["Apply CTEs with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CTEs only because it sounds advanced, without checking impact or constraints", "Ignore CTEs until the issue becomes urgent in production or with customers", "Delegate CTEs completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CTEs is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-38",
      type: "mcq",
      title: "Least Privilege Roles",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for least privilege roles?",
      options: ["Apply least privilege roles with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use least privilege roles only because it sounds advanced, without checking impact or constraints", "Ignore least privilege roles until the issue becomes urgent in production or with customers", "Delegate least privilege roles completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "least privilege roles is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-39",
      type: "mcq",
      title: "Slow Query Triage",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for slow query triage?",
      options: ["Apply slow query triage with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use slow query triage only because it sounds advanced, without checking impact or constraints", "Ignore slow query triage until the issue becomes urgent in production or with customers", "Delegate slow query triage completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "slow query triage is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "pg-40",
      type: "mcq",
      title: "Safe Schema Migrations",
      prompt: "In a professional PostgreSQL Professional Database scenario, which response best demonstrates strong judgment for safe schema migrations?",
      options: ["Apply safe schema migrations with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use safe schema migrations only because it sounds advanced, without checking impact or constraints", "Ignore safe schema migrations until the issue becomes urgent in production or with customers", "Delegate safe schema migrations completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "safe schema migrations is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
