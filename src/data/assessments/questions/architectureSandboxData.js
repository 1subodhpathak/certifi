import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level system architecture assessment.
// Questions progress from basic architecture choices to enterprise-grade
// scale, reliability, resiliency, distributed systems, data ownership,
// security, observability, and trade-off decision-making.
export const architectureSandboxData = {
  id: ASSESSMENT_TYPES.architecture_sandbox,
  title: 'System Architecture Decision-Making Certification',
  shortTitle: 'Architecture Sandbox',
  category: 'System architecture',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional scenario-based architecture assessment covering scalability, resiliency, service boundaries, data ownership, caching, messaging, distributed systems, observability, security, deployment strategy, and trade-off thinking.',
  instructions:
    'Choose the strongest architecture decision for each scenario. Questions move from easy to hard and are designed to test practical architecture judgment, not memorization.',
  questions: [
    {
      id: 'arch-01',
      type: 'mcq',
      title: 'Read Scalability',
      prompt: 'A dashboard product has heavy read traffic and can tolerate data being a few seconds stale. What architecture change is most appropriate?',
      options: [
        'Force every read to hit the primary database',
        'Add caching or read replicas to reduce pressure on the primary database',
        'Move all business data to spreadsheets',
        'Block users during peak hours'
      ],
      correctIndex: 1,
      explanation:
        'When slight staleness is acceptable, caching and read replicas are practical ways to improve read scalability and reduce primary database load.'
    },
    {
      id: 'arch-02',
      type: 'mcq',
      title: 'Horizontal Scaling',
      prompt: 'A stateless API service is receiving more traffic than a single server can handle. What is the strongest scaling approach?',
      options: [
        'Add more stateless API instances behind a load balancer',
        'Store user sessions only in local server memory',
        'Move all requests to one larger browser tab',
        'Disable logging to increase capacity'
      ],
      correctIndex: 0,
      explanation:
        'Stateless services can scale horizontally by adding more instances behind a load balancer because any instance can handle any request.'
    },
    {
      id: 'arch-03',
      type: 'mcq',
      title: 'Caching Strategy',
      prompt: 'A product catalog changes rarely but is read very frequently. Which caching strategy is most reasonable?',
      options: [
        'Cache frequently accessed catalog data with a clear TTL or invalidation strategy',
        'Never cache because all caches are unsafe',
        'Cache only failed API responses',
        'Store catalog data only in frontend localStorage forever'
      ],
      correctIndex: 0,
      explanation:
        'Read-heavy and rarely changing data is a strong candidate for caching, provided TTLs or invalidation rules are clearly defined.'
    },
    {
      id: 'arch-04',
      type: 'mcq',
      title: 'Cache Invalidation',
      prompt: 'A pricing service updates prices frequently, and stale prices can create financial risk. What is the best architecture decision?',
      options: [
        'Use aggressive caching without expiration',
        'Apply strict cache invalidation, short TTLs, or avoid caching critical price decisions',
        'Let the frontend decide the final price',
        'Store prices only in browser cookies'
      ],
      correctIndex: 1,
      explanation:
        'When stale data has financial or compliance risk, caching must be carefully controlled using short TTLs, invalidation, or strong consistency paths.'
    },
    {
      id: 'arch-05',
      type: 'mcq',
      title: 'CDN Usage',
      prompt: 'A global website serves large images, JavaScript bundles, and CSS files to users across regions. What should be added first to improve delivery performance?',
      options: [
        'A Content Delivery Network for static assets',
        'A single database trigger',
        'A larger primary key',
        'A manual email approval process'
      ],
      correctIndex: 0,
      explanation:
        'A CDN caches static assets close to users, reducing latency and improving global page load performance.'
    },
    {
      id: 'arch-06',
      type: 'mcq',
      title: 'Service Boundaries',
      prompt: 'When is splitting a monolith into separate services most justified?',
      options: [
        'Whenever the codebase exists',
        'When independent scaling, ownership, deployment, and reliability needs create clear operational value',
        'Only because microservices are popular',
        'As a substitute for missing tests'
      ],
      correctIndex: 1,
      explanation:
        'Service boundaries should solve real business and operational problems such as independent ownership, scaling, deployment, and resilience.'
    },
    {
      id: 'arch-07',
      type: 'mcq',
      title: 'Modular Monolith',
      prompt: 'A small team has a growing product but limited DevOps maturity. They want cleaner boundaries without microservice complexity. What is often the best next step?',
      options: [
        'Move immediately to 40 microservices',
        'Build a modular monolith with clear domain boundaries',
        'Duplicate the database for every developer',
        'Remove all automated tests'
      ],
      correctIndex: 1,
      explanation:
        'A modular monolith can improve maintainability and domain separation without introducing distributed systems complexity too early.'
    },
    {
      id: 'arch-08',
      type: 'mcq',
      title: 'API Gateway',
      prompt: 'Multiple backend services need centralized authentication, rate limiting, routing, and request logging. Which component is most appropriate?',
      options: [
        'API Gateway',
        'CSS preprocessor',
        'Local browser cache only',
        'Spreadsheet macro'
      ],
      correctIndex: 0,
      explanation:
        'An API gateway commonly centralizes cross-cutting API concerns such as authentication, routing, rate limiting, and logging.'
    },
    {
      id: 'arch-09',
      type: 'mcq',
      title: 'Backend for Frontend',
      prompt: 'A mobile app and web app need different response shapes and orchestration logic. What architecture pattern may help?',
      options: [
        'Backend for Frontend',
        'Single shared SQL query in the UI',
        'Hardcoded frontend responses',
        'One database table per screen'
      ],
      correctIndex: 0,
      explanation:
        'A Backend for Frontend can tailor APIs to specific client needs without forcing every client to use the same backend contract.'
    },
    {
      id: 'arch-10',
      type: 'mcq',
      title: 'Failure Isolation',
      prompt: 'A recommendation engine sometimes fails, but checkout must remain available. What is the strongest design choice?',
      options: [
        'Make checkout fully depend on recommendations',
        'Fail gracefully so checkout works even when recommendations are unavailable',
        'Disable all monitoring',
        'Store recommendations only in client cookies'
      ],
      correctIndex: 1,
      explanation:
        'Critical user flows should degrade gracefully when non-critical dependencies fail.'
    },
    {
      id: 'arch-11',
      type: 'mcq',
      title: 'Circuit Breaker',
      prompt: 'What is the main reason to use circuit breakers between services?',
      options: [
        'To increase frontend animation speed',
        'To stop cascading failures when a dependency becomes slow or unavailable',
        'To reduce code formatting effort',
        'To store backups on developer laptops'
      ],
      correctIndex: 1,
      explanation:
        'Circuit breakers prevent repeated calls to failing dependencies and help stop failures from spreading across systems.'
    },
    {
      id: 'arch-12',
      type: 'mcq',
      title: 'Timeouts',
      prompt: 'A payment service calls a third-party risk service that occasionally hangs for 30 seconds. What should the payment service include?',
      options: [
        'No timeout because the dependency may eventually respond',
        'Timeouts, retries where safe, and a fallback or failure path',
        'An infinite retry loop in the frontend',
        'A larger logo on the payment page'
      ],
      correctIndex: 1,
      explanation:
        'External calls should use timeouts and controlled retry/fallback behavior to avoid resource exhaustion and poor user experience.'
    },
    {
      id: 'arch-13',
      type: 'mcq',
      title: 'Retry Strategy',
      prompt: 'A service retries failed requests immediately and indefinitely during an outage. What is the main risk?',
      options: [
        'It may amplify load and worsen the outage',
        'It guarantees faster recovery',
        'It removes the need for monitoring',
        'It improves database normalization'
      ],
      correctIndex: 0,
      explanation:
        'Unbounded immediate retries can create retry storms. Retries should use limits, exponential backoff, jitter, and idempotency where appropriate.'
    },
    {
      id: 'arch-14',
      type: 'mcq',
      title: 'Bulkhead Pattern',
      prompt: 'One slow downstream integration is consuming all worker threads and affecting unrelated features. Which resiliency pattern helps isolate this?',
      options: [
        'Bulkhead isolation',
        'Global variable sharing',
        'Single queue for all workloads with no limits',
        'Removing all timeouts'
      ],
      correctIndex: 0,
      explanation:
        'Bulkheads isolate resources so one failing dependency or workload cannot consume all capacity and bring down unrelated parts of the system.'
    },
    {
      id: 'arch-15',
      type: 'mcq',
      title: 'Asynchronous Work',
      prompt: 'After payment succeeds, the system must send invoices, emails, and analytics events. What pattern is best?',
      options: [
        'Run every task synchronously before confirming payment',
        'Publish an event and process downstream actions asynchronously',
        'Retry forever from the browser',
        'Store everything in one browser tab'
      ],
      correctIndex: 1,
      explanation:
        'Event-driven processing keeps the core payment flow fast and decouples secondary actions from the critical transaction.'
    },
    {
      id: 'arch-16',
      type: 'mcq',
      title: 'Queue Buffering',
      prompt: 'A video-processing system receives sudden spikes of upload jobs. Processing can happen within a few minutes. What is the best design?',
      options: [
        'Reject all uploads during spikes',
        'Use a queue to buffer jobs and scale workers based on backlog',
        'Process every job synchronously in the upload request',
        'Ask users to manually retry later'
      ],
      correctIndex: 1,
      explanation:
        'Queues smooth traffic spikes and allow background workers to process jobs reliably at a controlled rate.'
    },
    {
      id: 'arch-17',
      type: 'mcq',
      title: 'Idempotency',
      prompt: 'A client may retry a payment request after a network timeout. What should the payment API support to avoid duplicate charges?',
      options: [
        'Idempotency keys',
        'Random response delays',
        'Duplicate database writes',
        'Frontend-only validation'
      ],
      correctIndex: 0,
      explanation:
        'Idempotency keys allow the server to recognize duplicate retries and avoid performing the same payment operation multiple times.'
    },
    {
      id: 'arch-18',
      type: 'mcq',
      title: 'Event Ordering',
      prompt: 'An order system receives events such as OrderCreated, PaymentCaptured, and OrderCancelled. What is an important design concern?',
      options: [
        'Events may arrive out of order or be processed more than once, so consumers should handle ordering and idempotency',
        'Events are always globally ordered automatically',
        'Events remove the need for data validation',
        'Consumers should trust every event without schema checks'
      ],
      correctIndex: 0,
      explanation:
        'Distributed event systems commonly require consumers to handle duplicates, ordering issues, and schema evolution.'
    },
    {
      id: 'arch-19',
      type: 'mcq',
      title: 'Outbox Pattern',
      prompt: 'A service writes an order to its database and must also publish an OrderCreated event. What pattern helps avoid the database write succeeding but the event publish failing?',
      options: [
        'Transactional outbox pattern',
        'Frontend polling only',
        'Manual log copying',
        'CSS isolation'
      ],
      correctIndex: 0,
      explanation:
        'The outbox pattern stores the event in the same transaction as the business data, then reliably publishes it asynchronously.'
    },
    {
      id: 'arch-20',
      type: 'mcq',
      title: 'Sagas',
      prompt: 'A travel booking workflow reserves flight, hotel, and car rental across separate services. If hotel booking fails, previous reservations may need compensation. Which pattern fits?',
      options: [
        'Saga pattern',
        'Single giant database lock across all services',
        'Static HTML rendering',
        'Round-robin DNS only'
      ],
      correctIndex: 0,
      explanation:
        'The saga pattern coordinates distributed workflows using local transactions and compensating actions instead of one global transaction.'
    },
    {
      id: 'arch-21',
      type: 'mcq',
      title: 'Data Ownership',
      prompt: 'Two services both update customer status directly in the same database table. What is the key architectural risk?',
      options: [
        'Better security',
        'Tightly coupled ownership and inconsistent business rules',
        'Faster deployments',
        'Lower storage cost'
      ],
      correctIndex: 1,
      explanation:
        'Shared write ownership creates unclear responsibility, inconsistent rules, and coordination problems across services.'
    },
    {
      id: 'arch-22',
      type: 'mcq',
      title: 'Database Per Service',
      prompt: 'In a microservices architecture, why is database-per-service often preferred?',
      options: [
        'It gives each service clear ownership of its data and reduces tight coupling',
        'It guarantees zero latency',
        'It removes the need for backups',
        'It makes all joins easier across services'
      ],
      correctIndex: 0,
      explanation:
        'Database-per-service supports service autonomy and ownership, but it also introduces trade-offs around querying and consistency.'
    },
    {
      id: 'arch-23',
      type: 'mcq',
      title: 'SQL vs NoSQL',
      prompt: 'A banking ledger requires strong consistency, transactions, and relational integrity. Which storage choice is usually strongest?',
      options: [
        'A relational database with ACID transaction support',
        'An unstructured text file',
        'A cache-only store',
        'A browser IndexedDB database as the source of truth'
      ],
      correctIndex: 0,
      explanation:
        'Financial ledgers usually require strong consistency, durable transactions, auditability, and relational integrity.'
    },
    {
      id: 'arch-24',
      type: 'mcq',
      title: 'Document Store',
      prompt: 'A product catalog has flexible attributes that vary significantly by category. Which database style may be appropriate?',
      options: [
        'Document database',
        'Only a fixed spreadsheet',
        'A single boolean column',
        'No persistence layer'
      ],
      correctIndex: 0,
      explanation:
        'Document databases can be useful when records have flexible, nested, or category-specific structures.'
    },
    {
      id: 'arch-25',
      type: 'mcq',
      title: 'Sharding',
      prompt: 'A single database can no longer handle write volume or data size. What is sharding?',
      options: [
        'Splitting data across multiple database partitions or nodes based on a shard key',
        'Deleting older records without backup',
        'Adding CSS classes to database rows',
        'Moving all users to one table'
      ],
      correctIndex: 0,
      explanation:
        'Sharding distributes data across multiple partitions or nodes, usually using a shard key, to improve scalability.'
    },
    {
      id: 'arch-26',
      type: 'mcq',
      title: 'Shard Key Design',
      prompt: 'Why is shard key choice important?',
      options: [
        'A poor shard key can create hot partitions and uneven load',
        'Shard keys only affect UI color',
        'Any random key always works equally well',
        'Shard keys remove the need for indexes'
      ],
      correctIndex: 0,
      explanation:
        'A bad shard key can concentrate traffic on a small number of partitions, limiting scalability and causing hotspots.'
    },
    {
      id: 'arch-27',
      type: 'mcq',
      title: 'Consistency Trade-off',
      prompt: 'An order confirmation page must immediately show whether payment succeeded. Which consistency model is most appropriate for that decision?',
      options: [
        'Strong consistency for the payment decision',
        'Eventually consistent data only, even for the payment result',
        'Randomly cached values',
        'Client-side guessing'
      ],
      correctIndex: 0,
      explanation:
        'Critical user-facing decisions such as payment success generally require strongly consistent confirmation from the authoritative system.'
    },
    {
      id: 'arch-28',
      type: 'mcq',
      title: 'Eventual Consistency',
      prompt: 'A social media like count may be slightly delayed across regions. What consistency model is often acceptable?',
      options: [
        'Eventual consistency',
        'No persistence at all',
        'Manual spreadsheet updates only',
        'Strict global locking for every like'
      ],
      correctIndex: 0,
      explanation:
        'For non-critical counters and social features, eventual consistency is often acceptable and improves scalability.'
    },
    {
      id: 'arch-29',
      type: 'mcq',
      title: 'Data Freshness',
      prompt: 'An analytics system refreshes every six hours, but users now need near-real-time visibility. What is the strongest next step?',
      options: [
        'Change the chart colors',
        'Re-evaluate ingestion for lower-latency streaming or micro-batch updates',
        'Rename the dashboard',
        'Remove historical data'
      ],
      correctIndex: 1,
      explanation:
        'When freshness requirements change materially, the ingestion and processing architecture must be revisited.'
    },
    {
      id: 'arch-30',
      type: 'mcq',
      title: 'CQRS',
      prompt: 'A system has complex write rules but very high read volume requiring optimized query views. Which pattern may help?',
      options: [
        'CQRS, separating write models from read models',
        'Single table with no indexes',
        'Frontend-only state as the source of truth',
        'Removing all APIs'
      ],
      correctIndex: 0,
      explanation:
        'CQRS separates command/write concerns from query/read concerns, allowing each side to be optimized independently.'
    },
    {
      id: 'arch-31',
      type: 'mcq',
      title: 'Observability',
      prompt: 'A multi-service workflow is hard to debug across service boundaries. What helps most?',
      options: [
        'Adding more CSS comments',
        'Distributed tracing with correlated request IDs across services',
        'Fewer logs and fewer dashboards',
        'Removing health checks'
      ],
      correctIndex: 1,
      explanation:
        'Distributed tracing and correlation IDs help follow a request across multiple services and identify where failures or latency occur.'
    },
    {
      id: 'arch-32',
      type: 'mcq',
      title: 'Logs, Metrics, Traces',
      prompt: 'Which statement best describes logs, metrics, and traces?',
      options: [
        'Logs explain events, metrics quantify system behavior over time, and traces follow requests across services',
        'They are three names for the same thing',
        'Only logs are useful in production',
        'Metrics are only for frontend styling'
      ],
      correctIndex: 0,
      explanation:
        'Good observability combines logs, metrics, and traces because each answers a different operational question.'
    },
    {
      id: 'arch-33',
      type: 'mcq',
      title: 'SLOs',
      prompt: 'A team defines that 99.9% of checkout requests should complete successfully within 500 ms. What is this an example of?',
      options: [
        'Service Level Objective',
        'CSS contract',
        'Database migration',
        'Feature flag'
      ],
      correctIndex: 0,
      explanation:
        'An SLO defines a measurable reliability target for a service or user journey.'
    },
    {
      id: 'arch-34',
      type: 'mcq',
      title: 'Deployment Strategy',
      prompt: 'A team wants to release a risky change to a small percentage of users before full rollout. Which deployment strategy fits best?',
      options: [
        'Canary release',
        'Big-bang release to all users',
        'Manual database editing',
        'Turning off monitoring'
      ],
      correctIndex: 0,
      explanation:
        'Canary releases expose changes to a small user segment first, reducing blast radius and allowing early detection of issues.'
    },
    {
      id: 'arch-35',
      type: 'mcq',
      title: 'Feature Flags',
      prompt: 'What is a strong use case for feature flags?',
      options: [
        'Separating deployment from release and enabling controlled rollout or rollback',
        'Replacing source control',
        'Avoiding all testing',
        'Storing passwords in code'
      ],
      correctIndex: 0,
      explanation:
        'Feature flags allow teams to deploy code safely while controlling who can access a feature.'
    },
    {
      id: 'arch-36',
      type: 'mcq',
      title: 'Disaster Recovery',
      prompt: 'A business says it can tolerate at most 15 minutes of data loss during a disaster. Which metric is being described?',
      options: [
        'RPO',
        'RTO',
        'CPU utilization',
        'P99 latency'
      ],
      correctIndex: 0,
      explanation:
        'Recovery Point Objective defines the maximum acceptable amount of data loss measured in time.'
    },
    {
      id: 'arch-37',
      type: 'mcq',
      title: 'Recovery Time',
      prompt: 'A business says a service must be restored within 30 minutes after a major outage. Which metric is being described?',
      options: [
        'RTO',
        'RPO',
        'Cache hit ratio',
        'Payload size'
      ],
      correctIndex: 0,
      explanation:
        'Recovery Time Objective defines the maximum acceptable time to restore service after an outage.'
    },
    {
      id: 'arch-38',
      type: 'mcq',
      title: 'Multi-Region Design',
      prompt: 'A system needs very high availability across regions, but active-active design would greatly increase complexity and data consistency risk. What is the best architectural response?',
      options: [
        'Evaluate trade-offs between active-active, active-passive, cost, consistency, operational maturity, and recovery requirements',
        'Always choose active-active because it sounds more advanced',
        'Avoid backups because multi-region solves everything',
        'Use one region with no disaster recovery plan'
      ],
      correctIndex: 0,
      explanation:
        'Multi-region architecture is a trade-off decision. Active-active is powerful but complex and not always justified.'
    },
    {
      id: 'arch-39',
      type: 'mcq',
      title: 'Security Architecture',
      prompt: 'A service needs access to database credentials. What is the strongest approach?',
      options: [
        'Store secrets in a managed secrets vault and inject them securely at runtime',
        'Commit credentials directly into source code',
        'Share passwords in team chat',
        'Put credentials in frontend JavaScript'
      ],
      correctIndex: 0,
      explanation:
        'Secrets should be stored in managed secret systems with access control, rotation, auditing, and secure runtime injection.'
    },
    {
      id: 'arch-40',
      type: 'mcq',
      title: 'Architecture Trade-offs',
      prompt: 'What makes an architecture recommendation credible in a senior-level design review?',
      options: [
        'Using the most complex stack available',
        'Explaining trade-offs across scale, reliability, cost, security, maintainability, user experience, and implementation speed',
        'Copying a famous company architecture exactly',
        'Avoiding constraints so the recommendation sounds cleaner'
      ],
      correctIndex: 1,
      explanation:
        'Strong architecture decisions are context-aware trade-off decisions. They explain why a design fits the actual constraints and business goals.'
    }
  ]
};