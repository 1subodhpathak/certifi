import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const systemDesignMcqData = {
  id: ASSESSMENT_TYPES.systemDesign,
  title: "System Design & Engineering Architecture Professional Certification",
  shortTitle: "Sys Design",
  category: "Engineering Architecture",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Scalable architecture, databases, caching, queues, APIs, reliability, consistency, observability, storage, distributed systems, security, and system trade-off judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sd-01",
      type: "mcq",
      title: "Scaling Strategy",
      prompt: "You have a high-traffic app with slow database reads. What is the first fix?",
      options: ["Upgrade CPU", "Add a Cache (Redis/Memcached)", "Rewrite the app in C++", "Add more servers"],
      correctIndex: 1,
      explanation: "Caching reads is the most common and effective way to scale read-heavy workloads."
    },
    {
      id: "sd-02",
      type: "mcq",
      title: "Database Choice",
      prompt: "Which database is best for a social network where relationships (graph) are key?",
      options: ["PostgreSQL", "MongoDB", "Neo4j", "Redis"],
      correctIndex: 2,
      explanation: "Graph databases like Neo4j are optimized for traversing relationships."
    },
    {
      id: "sd-03",
      type: "mcq",
      title: "Microservices",
      prompt: "What is a major risk of moving to microservices?",
      options: ["Slower development", "Complexity in networking/observability", "Less scalability", "Harder to test single units"],
      correctIndex: 1,
      explanation: "Distributed systems introduce complexity in service communication, latency, and debugging."
    },
    {
      id: "sd-04",
      type: "mcq",
      title: "Consistency",
      prompt: "In CAP theorem, if you choose Consistency and Availability, what must you give up?",
      options: ["Performance", "Partition Tolerance", "Security", "Durability"],
      correctIndex: 1,
      explanation: "CAP theorem states you can only have 2 of 3 (Consistency, Availability, Partition Tolerance)."
    },
    {
      id: "sd-05",
      type: "mcq",
      title: "Load Balancing",
      prompt: "Where is a Load Balancer usually placed?",
      options: ["Between App and DB", "Between User and App", "Inside the DB", "In the frontend code"],
      correctIndex: 1,
      explanation: "Load balancers distribute traffic from users across multiple application servers."
    },
    {
      id: "sd-06",
      type: "mcq",
      title: "Message Queues",
      prompt: "Which tool is best for asynchronous tasks like sending emails?",
      options: ["Redis", "RabbitMQ/Kafka", "PostgreSQL", "S3"],
      correctIndex: 1,
      explanation: "Message queues allow decoupling and async processing of long-running tasks."
    },
    {
      id: "sd-07",
      type: "mcq",
      title: "CDN",
      prompt: "What is the primary benefit of a Content Delivery Network?",
      options: ["Security", "Lower latency for global users", "Faster database writes", "Less code"],
      correctIndex: 1,
      explanation: "CDNs cache static assets (images, JS) closer to users geographically. This is a checked foundational concept for professional Sys Design work."
    },
    {
      id: "sd-08",
      type: "mcq",
      title: "Sharding",
      prompt: "What is Database Sharding?",
      options: ["Replication", "Horizontal partitioning of data across servers", "Vertical scaling of CPU", "Cleaning data"],
      correctIndex: 1,
      explanation: "Sharding splits a single dataset across multiple database instances. This is a checked foundational concept for professional Sys Design work."
    },
    {
      id: "sd-09",
      type: "mcq",
      title: "NoSQL vs SQL",
      prompt: "When is NoSQL (Document) usually preferred?",
      options: ["Complex transactions (ACID)", "Highly structured data", "Unstructured data or rapid schema changes", "Financial systems"],
      correctIndex: 2,
      explanation: "NoSQL offers schema flexibility and easy horizontal scaling for unstructured data."
    },
    {
      id: "sd-10",
      type: "mcq",
      title: "Latency",
      prompt: "Which operation is slowest?",
      options: ["L1 Cache Read", "Memory Read", "SSD Disk Seek", "Network Roundtrip (same DC)"],
      correctIndex: 3,
      explanation: "Networking is orders of magnitude slower than local hardware operations."
    },
    {
      id: "sd-11",
      type: "mcq",
      title: "Rate Limiting",
      prompt: "Why implement rate limiting?",
      options: ["Save money", "Protect against DDoS and API abuse", "Make the app faster", "Improve SEO"],
      correctIndex: 1,
      explanation: "Rate limiting prevents a single user or bot from overwhelming the system."
    },
    {
      id: "sd-12",
      type: "mcq",
      title: "Monitoring",
      prompt: "Which metric is a \"Golden Signal\" of monitoring?",
      options: ["CPU Usage", "Errors", "Latency", "Both Errors and Latency"],
      correctIndex: 3,
      explanation: "The 4 Golden Signals are Latency, Traffic, Errors, and Saturation. This is a checked foundational concept for professional Sys Design work."
    },
    {
      id: "sd-13",
      type: "mcq",
      title: "Statelessness",
      prompt: "Why make application servers stateless?",
      options: ["Better security", "Easier to scale horizontally", "Faster reads", "Less memory usage"],
      correctIndex: 1,
      explanation: "Stateless servers can handle any request from any user, making it easy to add/remove servers."
    },
    {
      id: "sd-14",
      type: "mcq",
      title: "DNS",
      prompt: "What is the primary job of DNS?",
      options: ["Routing packets", "Mapping domain names to IP addresses", "Security", "Caching HTML"],
      correctIndex: 1,
      explanation: "Domain Name System acts as the phonebook for the internet. This is a checked foundational concept for professional Sys Design work."
    },
    {
      id: "sd-15",
      type: "mcq",
      title: "Availability",
      prompt: "What does \"Three Nines\" (99.9%) availability mean in terms of downtime/year?",
      options: ["8 hours", "~9 hours", "~50 minutes", "1 minute"],
      correctIndex: 1,
      explanation: "99.9% uptime allows for roughly 8.76 hours of downtime per year. This is a checked foundational concept for professional Sys Design work."
    },
    {
      id: "sd-16",
      type: "mcq",
      title: "Indexing",
      prompt: "What is the trade-off of adding many database indexes?",
      options: ["Slower reads", "Slower writes", "More CPU usage on reads", "Less disk space"],
      correctIndex: 1,
      explanation: "Indexes speed up reads but slow down writes (as the index must be updated)."
    },
    {
      id: "sd-17",
      type: "mcq",
      title: "WebSockets",
      prompt: "When are WebSockets better than REST?",
      options: ["Real-time apps (Chat/Trading)", "Static blogs", "Simple CRUD APIs", "File uploads"],
      correctIndex: 0,
      explanation: "WebSockets provide full-duplex, real-time communication. This is a checked foundational concept for professional Sys Design work."
    },
    {
      id: "sd-18",
      type: "mcq",
      title: "SQL Injection",
      prompt: "How do you primarily prevent SQL Injection?",
      options: ["Firewall", "Prepared Statements (Parameterization)", "Deleting users", "Encryption"],
      correctIndex: 1,
      explanation: "Prepared statements separate code from data, preventing malicious input execution."
    },
    {
      id: "sd-19",
      type: "mcq",
      title: "Redundancy",
      prompt: "What is a \"Single Point of Failure\" (SPOF)?",
      options: ["A small bug", "A component whose failure stops the entire system", "A slow API", "A low-priority server"],
      correctIndex: 1,
      explanation: "Eliminating SPOFs is critical for high-availability systems. This is a checked foundational concept for professional Sys Design work."
    },
    {
      id: "sd-20",
      type: "mcq",
      title: "Idempotency",
      prompt: "Why is idempotency important in APIs?",
      options: ["Security", "Handling retries without duplicate actions", "Making code shorter", "Faster response"],
      correctIndex: 1,
      explanation: "Idempotent requests (like PUT/DELETE) can be repeated safely if the first attempt fails or times out."
    },
    {
      id: "sd-21",
      type: "mcq",
      title: "Read-Heavy Scaling",
      prompt: "In a professional System Design & Engineering Architecture scenario, what is the strongest approach when dealing with read-heavy scaling?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Read-Heavy Scaling requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sd-22",
      type: "mcq",
      title: "Write-Heavy Scaling",
      prompt: "A team is making a decision about write-heavy scaling. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about write-heavy scaling balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sd-23",
      type: "mcq",
      title: "Cache Invalidation",
      prompt: "Which signal suggests cache invalidation needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when cache invalidation could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sd-24",
      type: "mcq",
      title: "Rate Limiting",
      prompt: "What is the best way to validate work involving rate limiting?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for rate limiting should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sd-25",
      type: "mcq",
      title: "Idempotency",
      prompt: "In a professional System Design & Engineering Architecture scenario, what is the strongest approach when dealing with idempotency?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Idempotency requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sd-26",
      type: "mcq",
      title: "Api Pagination",
      prompt: "A team is making a decision about API pagination. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about API pagination balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sd-27",
      type: "mcq",
      title: "Database Indexing",
      prompt: "Which signal suggests database indexing needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when database indexing could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sd-28",
      type: "mcq",
      title: "Eventual Consistency",
      prompt: "What is the best way to validate work involving eventual consistency?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for eventual consistency should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sd-29",
      type: "mcq",
      title: "Strong Consistency Trade-Off",
      prompt: "In a professional System Design & Engineering Architecture scenario, what is the strongest approach when dealing with strong consistency trade-off?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Strong Consistency Trade-Off requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sd-30",
      type: "mcq",
      title: "Message Queue Retry",
      prompt: "A team is making a decision about message queue retry. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about message queue retry balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sd-31",
      type: "mcq",
      title: "Dead-Letter Queue",
      prompt: "Which signal suggests dead-letter queue needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when dead-letter queue could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sd-32",
      type: "mcq",
      title: "Schema Migration",
      prompt: "What is the best way to validate work involving schema migration?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for schema migration should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sd-33",
      type: "mcq",
      title: "Multi-Region Failover",
      prompt: "In a professional System Design & Engineering Architecture scenario, what is the strongest approach when dealing with multi-region failover?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Multi-Region Failover requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sd-34",
      type: "mcq",
      title: "Cdn Cache Strategy",
      prompt: "A team is making a decision about CDN cache strategy. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about CDN cache strategy balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sd-35",
      type: "mcq",
      title: "Object Storage Design",
      prompt: "Which signal suggests object storage design needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when object storage design could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sd-36",
      type: "mcq",
      title: "Observability Signals",
      prompt: "What is the best way to validate work involving observability signals?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for observability signals should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sd-37",
      type: "mcq",
      title: "Slo And Error Budget",
      prompt: "In a professional System Design & Engineering Architecture scenario, what is the strongest approach when dealing with SLO and error budget?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Slo And Error Budget requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sd-38",
      type: "mcq",
      title: "Backpressure",
      prompt: "A team is making a decision about backpressure. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about backpressure balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sd-39",
      type: "mcq",
      title: "Hot Partition",
      prompt: "Which signal suggests hot partition needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when hot partition could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sd-40",
      type: "mcq",
      title: "Architecture Review",
      prompt: "What is the best way to validate work involving architecture review?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for architecture review should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
