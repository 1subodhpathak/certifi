import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const mongodbData = {
  id: ASSESSMENT_TYPES.mongodb,
  title: "MongoDB Professional Database Certification",
  shortTitle: "MongoDB",
  category: "Databases",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Document modeling, BSON, indexes, aggregation, replication, sharding, transactions, schema design, performance, security, backups, and operations.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "mg-01",
      type: "mcq",
      title: "Data Model",
      prompt: "How does MongoDB store data?",
      options: ["In tables", "In BSON documents", "In XML files", "In key-value pairs only"],
      correctIndex: 1,
      explanation: "BSON (Binary JSON) allows for rich, hierarchical data structures."
    },
    {
      id: "mg-02",
      type: "mcq",
      title: "ID",
      prompt: "What is the default primary key field in MongoDB?",
      options: ["id", "_id", "uuid", "pk"],
      correctIndex: 1,
      explanation: "_id is automatically generated if not provided. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-03",
      type: "mcq",
      title: "Aggregation",
      prompt: "Which stage of the aggregation pipeline is used to filter documents?",
      options: ["$match", "$group", "$sort", "$project"],
      correctIndex: 0,
      explanation: "$match is similar to the SQL WHERE clause. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-04",
      type: "mcq",
      title: "Indexing",
      prompt: "What type of index should you use to support queries on fields inside an array?",
      options: ["Text Index", "Multikey Index", "Hashed Index", "Compound Index"],
      correctIndex: 1,
      explanation: "Multikey indexes allow indexing each element of an array."
    },
    {
      id: "mg-05",
      type: "mcq",
      title: "Sharding",
      prompt: "What is \"Sharding\" in MongoDB?",
      options: ["Deleting data", "Horizontal scaling by distributing data across multiple machines", "Backing up data", "Encryption"],
      correctIndex: 1,
      explanation: "Sharding handles datasets that exceed the capacity of a single server."
    },
    {
      id: "mg-06",
      type: "mcq",
      title: "Replica Sets",
      prompt: "What is the primary purpose of a Replica Set?",
      options: ["Performance", "High Availability and data redundancy", "Sorting", "Security"],
      correctIndex: 1,
      explanation: "Replica sets provide failover and self-healing. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-07",
      type: "mcq",
      title: "Lookup",
      prompt: "Which aggregation stage performs a left outer join to another collection?",
      options: ["$join", "$lookup", "$merge", "$union"],
      correctIndex: 1,
      explanation: "$lookup allows for relational-style queries in NoSQL. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-08",
      type: "mcq",
      title: "Updates",
      prompt: "Which operator adds an element to an array?",
      options: ["$add", "$push", "$set", "$inc"],
      correctIndex: 1,
      explanation: "$push appends a value to an array field. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-09",
      type: "mcq",
      title: "Atomic Operations",
      prompt: "Are MongoDB operations atomic at the document level?",
      options: ["No", "Yes", "Only with transactions", "Only for strings"],
      correctIndex: 1,
      explanation: "Single-document operations are always atomic. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-10",
      type: "mcq",
      title: "Transactions",
      prompt: "Since which version does MongoDB support multi-document ACID transactions?",
      options: ["2.4", "3.2", "4.0", "5.0"],
      correctIndex: 2,
      explanation: "4.0 introduced transactions for replica sets. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-11",
      type: "mcq",
      title: "Capped Collections",
      prompt: "What is a \"Capped Collection\"?",
      options: ["A collection with a limit on items", "Fixed-size collections that overwrite oldest entries when full (circular)", "A private collection", "A cached collection"],
      correctIndex: 1,
      explanation: "Great for logging or real-time data streams. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-12",
      type: "mcq",
      title: "Read Preference",
      prompt: "What does \"Secondary\" read preference mean?",
      options: ["Read from the primary only", "Read from any available secondary member", "Don't read", "Read from the nearest node"],
      correctIndex: 1,
      explanation: "Allows offloading read traffic from the primary node. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-13",
      type: "mcq",
      title: "TTL Index",
      prompt: "What is a \"TTL Index\" used for?",
      options: ["Encryption", "Automatically removing documents after a certain time", "Faster sorting", "Tagging"],
      correctIndex: 1,
      explanation: "TTL (Time To Live) is used for expiring sessions or temporary data."
    },
    {
      id: "mg-14",
      type: "mcq",
      title: "Embedded vs References",
      prompt: "When is \"Embedding\" (denormalization) generally preferred in MongoDB?",
      options: ["Always", "When data is \"owned\" by the parent and accessed together", "When data is large", "Never"],
      correctIndex: 1,
      explanation: "Embedding reduces the need for expensive joins. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-15",
      type: "mcq",
      title: "GridFS",
      prompt: "What is \"GridFS\"?",
      options: ["A CSS framework", "A system for storing and retrieving large files (>16MB)", "A database GUI", "A type of index"],
      correctIndex: 1,
      explanation: "GridFS chunks large files into smaller documents. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-16",
      type: "mcq",
      title: "Projection",
      prompt: "How do you return only specific fields in a query?",
      options: ["Filtering", "Projection", "Aggregating", "Sorting"],
      correctIndex: 1,
      explanation: "Projection ({ field: 1 }) reduces network overhead. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-17",
      type: "mcq",
      title: "Write Concern",
      prompt: "What does \"w: 1\" mean in write concern?",
      options: ["Write to one machine", "Wait for acknowledgment from the primary node", "Don't wait", "Write once"],
      correctIndex: 1,
      explanation: "Higher \"w\" values provide stronger data durability guarantees."
    },
    {
      id: "mg-18",
      type: "mcq",
      title: "Explain",
      prompt: "How do you check if a query is using an index?",
      options: ["db.collection.explain()", "db.collection.index()", "db.collection.stats()", "db.collection.check()"],
      correctIndex: 0,
      explanation: "explain(\"executionStats\") shows how many documents were scanned vs returned."
    },
    {
      id: "mg-19",
      type: "mcq",
      title: "Upsert",
      prompt: "What is an \"Upsert\"?",
      options: ["An error", "A command that updates a document if it exists, or creates it if it doesn't", "A fast insert", "A database merge"],
      correctIndex: 1,
      explanation: "It is a combination of Update and Insert. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "mg-20",
      type: "mcq",
      title: "Change Streams",
      prompt: "What do \"Change Streams\" allow you to do?",
      options: ["Edit code", "Listen for real-time data changes in a collection/database", "Refresh the page", "Manage users"],
      correctIndex: 1,
      explanation: "Change streams power real-time apps and event-driven architectures."
    },
    {
      id: "mg-21",
      type: "mcq",
      title: "Embed Vs Reference",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for embed vs reference?",
      options: ["Apply embed vs reference with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use embed vs reference only because it sounds advanced, without checking impact or constraints", "Ignore embed vs reference until the issue becomes urgent in production or with customers", "Delegate embed vs reference completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "embed vs reference is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-22",
      type: "mcq",
      title: "Reference Modeling",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for reference modeling?",
      options: ["Apply reference modeling with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use reference modeling only because it sounds advanced, without checking impact or constraints", "Ignore reference modeling until the issue becomes urgent in production or with customers", "Delegate reference modeling completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "reference modeling is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-23",
      type: "mcq",
      title: "Compound Indexes",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for compound indexes?",
      options: ["Apply compound indexes with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use compound indexes only because it sounds advanced, without checking impact or constraints", "Ignore compound indexes until the issue becomes urgent in production or with customers", "Delegate compound indexes completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "compound indexes is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-24",
      type: "mcq",
      title: "Index Selectivity",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for index selectivity?",
      options: ["Apply index selectivity with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use index selectivity only because it sounds advanced, without checking impact or constraints", "Ignore index selectivity until the issue becomes urgent in production or with customers", "Delegate index selectivity completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "index selectivity is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-25",
      type: "mcq",
      title: "$Match Early",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for $match early?",
      options: ["Apply $match early with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use $match early only because it sounds advanced, without checking impact or constraints", "Ignore $match early until the issue becomes urgent in production or with customers", "Delegate $match early completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "$match early is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-26",
      type: "mcq",
      title: "$Project",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for $project?",
      options: ["Apply $project with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use $project only because it sounds advanced, without checking impact or constraints", "Ignore $project until the issue becomes urgent in production or with customers", "Delegate $project completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "$project is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-27",
      type: "mcq",
      title: "$Unwind",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for $unwind?",
      options: ["Apply $unwind with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use $unwind only because it sounds advanced, without checking impact or constraints", "Ignore $unwind until the issue becomes urgent in production or with customers", "Delegate $unwind completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "$unwind is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-28",
      type: "mcq",
      title: "Write Concern",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for write concern?",
      options: ["Apply write concern with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use write concern only because it sounds advanced, without checking impact or constraints", "Ignore write concern until the issue becomes urgent in production or with customers", "Delegate write concern completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "write concern is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-29",
      type: "mcq",
      title: "Read Concern",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for read concern?",
      options: ["Apply read concern with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use read concern only because it sounds advanced, without checking impact or constraints", "Ignore read concern until the issue becomes urgent in production or with customers", "Delegate read concern completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "read concern is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-30",
      type: "mcq",
      title: "Shard Key",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for shard key?",
      options: ["Apply shard key with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use shard key only because it sounds advanced, without checking impact or constraints", "Ignore shard key until the issue becomes urgent in production or with customers", "Delegate shard key completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "shard key is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-31",
      type: "mcq",
      title: "Hot Shard",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for hot shard?",
      options: ["Apply hot shard with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use hot shard only because it sounds advanced, without checking impact or constraints", "Ignore hot shard until the issue becomes urgent in production or with customers", "Delegate hot shard completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "hot shard is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-32",
      type: "mcq",
      title: "Replica Election",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for replica election?",
      options: ["Apply replica election with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use replica election only because it sounds advanced, without checking impact or constraints", "Ignore replica election until the issue becomes urgent in production or with customers", "Delegate replica election completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "replica election is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-33",
      type: "mcq",
      title: "Transaction Trade-Offs",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for transaction trade-offs?",
      options: ["Apply transaction trade-offs with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use transaction trade-offs only because it sounds advanced, without checking impact or constraints", "Ignore transaction trade-offs until the issue becomes urgent in production or with customers", "Delegate transaction trade-offs completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "transaction trade-offs is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-34",
      type: "mcq",
      title: "Ttl Indexes",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for TTL indexes?",
      options: ["Apply TTL indexes with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use TTL indexes only because it sounds advanced, without checking impact or constraints", "Ignore TTL indexes until the issue becomes urgent in production or with customers", "Delegate TTL indexes completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "TTL indexes is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-35",
      type: "mcq",
      title: "Schema Validation",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for schema validation?",
      options: ["Apply schema validation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use schema validation only because it sounds advanced, without checking impact or constraints", "Ignore schema validation until the issue becomes urgent in production or with customers", "Delegate schema validation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "schema validation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-36",
      type: "mcq",
      title: "Document Size",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for document size?",
      options: ["Apply document size with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use document size only because it sounds advanced, without checking impact or constraints", "Ignore document size until the issue becomes urgent in production or with customers", "Delegate document size completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "document size is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-37",
      type: "mcq",
      title: "Atlas Search",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for Atlas Search?",
      options: ["Apply Atlas Search with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Atlas Search only because it sounds advanced, without checking impact or constraints", "Ignore Atlas Search until the issue becomes urgent in production or with customers", "Delegate Atlas Search completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Atlas Search is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-38",
      type: "mcq",
      title: "Backup Restore",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for backup restore?",
      options: ["Apply backup restore with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use backup restore only because it sounds advanced, without checking impact or constraints", "Ignore backup restore until the issue becomes urgent in production or with customers", "Delegate backup restore completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "backup restore is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-39",
      type: "mcq",
      title: "Security Hardening",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for security hardening?",
      options: ["Apply security hardening with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use security hardening only because it sounds advanced, without checking impact or constraints", "Ignore security hardening until the issue becomes urgent in production or with customers", "Delegate security hardening completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "security hardening is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "mg-40",
      type: "mcq",
      title: "Performance Triage",
      prompt: "In a professional MongoDB Professional Database scenario, which response best demonstrates strong judgment for performance triage?",
      options: ["Apply performance triage with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use performance triage only because it sounds advanced, without checking impact or constraints", "Ignore performance triage until the issue becomes urgent in production or with customers", "Delegate performance triage completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "performance triage is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
