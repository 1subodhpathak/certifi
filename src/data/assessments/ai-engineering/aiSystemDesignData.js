import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 14 of 15 - AI System Design at Scale
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const aiSystemDesignData = {
  id: ASSESSMENT_TYPES.aiSystemDesign,
  level: 14,
  title: "AI System Design at Scale",
  shortTitle: "AI System Design",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "The classic system design interview with AI-shaped constraints: serving and batching, caching layers, queueing and backpressure, multi-tenancy and noisy neighbours, capacity planning against provider quota, cost per request, degradation strategy, and the observability needed to run any of it.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Most questions give you a metric profile or a set of requirements and ask for the change that addresses the actual constraint. Several distractors are correct engineering aimed at the wrong bottleneck. No negative marking.",
  questions: [
    {
      id: "aiSystemDesign-01",
      type: "mcq",
      title: "Where the Latency Is",
      difficulty: "easy",
      points: 3,
      prompt: "An AI feature's p50 latency is 2.4 seconds. Which component is almost always the dominant term?",
      options: [
        "Network transit between services, since AI features typically involve several service hops and each adds a round trip to the total.",
        "Request serialisation, since prompts and responses are large payloads and encoding them repeatedly across service boundaries is costly.",
        "The vector search, since similarity comparison over a large index is expensive, and that cost grows as the corpus does.",
        "The model call, since generating tokens is inherently sequential and dwarfs all the database, retrieval and network work around it.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Generation runs one forward pass per token and cannot be parallelised away, so it dominates almost every AI request path. Retrieval is typically tens of milliseconds and serialisation is negligible against seconds of generation. Optimise the model call first. Why not A: service hops matter in aggregate and are small next to generation. Why not B: payload encoding is trivial at these sizes. Why not C: vector search over millions of vectors is fast, usually well under 100 ms."
    },
    {
      id: "aiSystemDesign-02",
      type: "mcq",
      title: "Stateless Services",
      difficulty: "easy",
      points: 3,
      prompt: "Why should the request-handling tier of an AI system be stateless?",
      options: [
        "So any replica can serve any request, letting the tier scale horizontally and survive restarts without losing work in progress.",
        "So requests can be processed in any order, which allows the load balancer to reorder traffic and prioritise the most important requests.",
        "So the service uses less memory per instance, which lowers the cost of running the number of replicas that peak traffic requires.",
        "So conversation history is not duplicated across replicas, which prevents inconsistent answers when a user's requests hit different instances.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Statelessness makes replicas interchangeable, which is what makes horizontal scaling and rolling deploys safe. State lives in a shared store, so a replica dying costs one request rather than every session it was holding. Why not B: ordering is unrelated to statelessness. Why not C: lower memory is a side effect, not the reason. Why not D: it describes a consequence of putting state in a shared store rather than the reason the tier is stateless."
    },
    {
      id: "aiSystemDesign-03",
      type: "mcq",
      title: "Async for Long Work",
      difficulty: "easy",
      points: 3,
      prompt: "A feature takes 90 seconds to complete. What is the right request pattern?",
      options: [
        "Accept the request, return a job identifier at once, process on a queue, and deliver the result by polling or push when ready.",
        "Split the work into shorter synchronous calls that the client issues in sequence, so no single request exceeds a normal timeout.",
        "Stream the response over the whole 90 seconds, sending periodic keepalive frames so the connection is not closed by intermediate proxies.",
        "Hold the connection open for the full duration with a generous timeout, so the client gets the result in one exchange, and no queue is needed.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Ninety seconds is far past what connections, proxies and mobile networks tolerate reliably. Accepting the work, returning a handle, and processing asynchronously decouples the client's connection from the work's duration and makes the job resumable and observable. Why not B: pushing orchestration into the client duplicates it per platform and loses work if the client goes away. Why not C: streaming is right when there is incremental output to show and is fragile as a way to hold a connection. Why not D: intermediate proxies close long connections regardless of your timeout."
    },
    {
      id: "aiSystemDesign-04",
      type: "mcq",
      title: "Noisy Neighbours",
      difficulty: "easy",
      points: 3,
      prompt: "One customer's bulk job degrades every other customer's latency on a shared deployment. What is the general fix?",
      options: [
        "Move the offending customer to a dedicated deployment, since a customer generating this much load has outgrown a shared tier.",
        "Enforce per-tenant limits and fair scheduling so that no single tenant can consume more than its share of a shared resource.",
        "Process requests strictly in arrival order, so no customer can be starved by another's traffic regardless of volume.",
        "Scale the deployment so there is enough headroom to absorb any single customer's peak without affecting the others.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Multi-tenancy requires isolation as a policy, not as a consequence of capacity. Per-tenant quotas and fair queueing bound what any one tenant can take, which holds whether the deployment is over-provisioned or not. Why not A: dedicated deployments suit the largest tenants and do not solve the general problem. Why not C: strict ordering is what makes starvation possible, since a burst of one tenant's requests occupies the queue ahead of everyone else's. Why not D: headroom is expensive and the next spike exceeds it."
    },
    {
      id: "aiSystemDesign-05",
      type: "mcq",
      title: "Graceful Degradation",
      difficulty: "easy",
      points: 3,
      prompt: "The model provider is returning errors for 40 percent of requests. What should a well-designed system do?",
      options: [
        "Queue all requests until the provider recovers, then process the backlog, so no user request is lost during the incident.",
        "Serve what it can without the model: cached answers, retrieved documents, a fallback, and a clear message about reduced capability.",
        "Return an error for all requests during the incident, so behaviour stays consistent, and users are not confused by intermittent success.",
        "Retry aggressively until each request succeeds, since the provider is partially available and enough attempts will get through.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Degradation means the useful parts keep working. Retrieval still returns relevant documents, caches still hold recent answers, and a clear message about reduced capability is better than a blank error. Design what the feature does without the model before you need it. Why not A: queueing an interactive request for an unknown duration is a failure with extra steps. Why not C: consistency is not worth discarding the 60 percent that would succeed. Why not D: aggressive retry against a struggling provider deepens the incident."
    },
    {
      id: "aiSystemDesign-06",
      type: "mcq",
      title: "What to Monitor",
      difficulty: "easy",
      points: 3,
      prompt: "Beyond standard service metrics, what does an AI system specifically need to monitor?",
      options: [
        "Model version, tokens in and out per request, cost per request, and quality signals such as groundedness or refusal rate on a sample.",
        "The number of unique prompts, since diversity shows whether users exercise the feature as intended, and narrow use signals a product problem.",
        "Model provider status pages, so incidents affecting the underlying service can be correlated with error rates in your own dashboards.",
        "Average response length, since it correlates with both cost and user satisfaction and is cheap to compute from the response payload.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. These are the dimensions that do not exist in ordinary services and that move without a deploy: which model version served the request, the token counts that drive both cost and latency, the cost itself, and a sampled quality signal so silent regressions are visible. Why not B: prompt diversity is a product analytic. Why not C: correlating with a status page is useful and reactive rather than a metric of your own. Why not D: response length is one input to cost and a weak proxy for satisfaction."
    },
    {
      id: "aiSystemDesign-07",
      type: "mcq",
      title: "Capacity Against Quota",
      difficulty: "medium",
      points: 5,
      prompt: "A service must handle 500 requests per second at peak, averaging 3,000 input and 400 output tokens. The provider quota is 2 million tokens per minute. What does the arithmetic show?",
      options: [
        "Only output tokens count against a generation quota, so demand is 12 million tokens per minute, which is 6 times over and can be closed by reducing response length.",
        "Quota is enforced per request, not in aggregate, so 500 requests per second is the figure to check here, and total token volume does not bind.",
        "Demand is about 102 million tokens per minute against a 2 million quota, 50 times over. The design needs a far larger quota, a smaller prompt, caching, or self-hosting.",
        "Demand is about 1.7 million tokens per minute, which fits inside the quota with modest headroom, so the design is viable exactly as specified.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. 500 requests per second is 30,000 per minute; at 3,400 tokens each that is 102 million tokens per minute against a 2 million quota. Being 50 times over is an architectural finding, not a tuning problem, and it has to be confronted before anything else in the design. Doing this arithmetic early is the single most useful habit in AI capacity planning. Why not A: input tokens count against token quotas. Why not B: providers enforce both, and the token limit binds first here. Why not D: it is off by a factor of about 60."
    },
    {
      id: "aiSystemDesign-08",
      type: "mcq",
      title: "Caching Layers",
      difficulty: "medium",
      points: 5,
      prompt: "Which caching layer in an AI system offers the best return with the lowest correctness risk?",
      options: [
        "Prompt prefix caching of the invariant system prompt and tool definitions, which cuts input cost on every request without changing answers.",
        "Caching retrieved passages keyed by query, which removes the vector search from the request path and shortens end-to-end latency.",
        "Full response caching keyed by the user's question, which eliminates the model call entirely for any question that has been asked before.",
        "Semantic caching keyed by question embedding, which catches rephrasings of the same question and therefore achieves a much higher hit rate.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Prefix caching applies to essentially every request, often covers the largest block of input tokens, and cannot change an answer because the cached content is identical by definition. That combination of broad applicability and zero correctness risk is unusual. Why not B: retrieval is a small share of latency and cached passages go stale as the corpus changes. Why not C: exact-match hit rates on free-form questions are very low. Why not D: semantic caching has the highest correctness risk, since two questions can embed closely and have different correct answers."
    },
    {
      id: "aiSystemDesign-09",
      type: "mcq",
      title: "Queue Design",
      difficulty: "medium",
      points: 5,
      prompt: "An asynchronous AI pipeline uses a queue. What must the design specify beyond the queue itself?",
      options: [
        "An exactly-once delivery guarantee, so an AI job that carries side effects is never processed twice, however the workers happen to fail.",
        "A maximum depth with defined behaviour when full, a visibility timeout matched to job duration, a retry limit with a dead-letter queue, and a drop deadline.",
        "A priority scheme, so the urgent jobs run first, since AI workloads vary widely in how latency-sensitive each request happens to be.",
        "A partitioning scheme by tenant, so each customer's jobs are processed independently and one tenant's backlog can never delay another tenant's.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. These four are the ones that turn a queue from a buffer into a system with defined behaviour under stress: bounded depth so overload is explicit, a visibility timeout matched to the long durations AI jobs have, a retry cap with somewhere for poison messages to go, and a deadline so nobody spends model calls on work whose requester left. Why not A: exactly-once delivery is not achievable; you get at-least-once plus idempotency at the endpoint. Why not C: priority is valuable and secondary. Why not D: partitioning is a multi-tenancy concern layered on top."
    },
    {
      id: "aiSystemDesign-10",
      type: "mcq",
      title: "Read the Bottleneck",
      difficulty: "medium",
      points: 5,
      prompt: `A service shows the following.

{{diagram}}

Where is the bottleneck?`,
      diagram: `flowchart TB
  S([Service under steady load])
  S --> A["Request rate<br/><b>steady</b>"]
  S --> B["p99 latency<br/><b>rising</b>"]
  S --> C["Provider 429 rate<br/><b>0</b>"]
  S --> D["Worker CPU<br/><b>22%</b>"]
  S --> E["DB connection pool<br/><b>saturated</b>"]
  S --> F["Model call latency<br/><b>unchanged</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class S agent;
  class C,F safe;
  class A,D source;
  class B,E warning;`,
      options: [
        "The request rate, since steady arrival against rising latency means the service has passed the load at which its queues stop draining fully.",
        "The model provider, since rising p99 with unchanged average model latency indicates a growing tail on the provider's side that the mean is hiding.",
        "The workers, since low CPU alongside rising latency indicates they are blocked, and adding worker replicas will restore throughput.",
        "The database access path. Nothing else shows pressure, so requests queue for connections, and low CPU fits workers blocked waiting.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Read what is saturated: the connection pool, and nothing else. Zero 429s clears the provider, unchanged model latency clears the model call, and 22 percent CPU says workers are blocked rather than busy, which is exactly what waiting on a pool looks like. Fix the pool, the queries behind it, or the number of connections each request holds. Why not A: steady arrival with a saturated downstream resource points at the resource. Why not B: unchanged model latency and no throttling contradict this. Why not C: adding replicas aims more requests at the same saturated pool."
    },
    {
      id: "aiSystemDesign-11",
      type: "mcq",
      title: "Model Routing for Cost",
      difficulty: "medium",
      points: 5,
      prompt: "A product routes simple requests to a small model and complex ones to a large model. What is the main design risk?",
      options: [
        "The routing decision adds latency to every request, which can outweigh the time saved by using a smaller model on the simple ones.",
        "Costs become unpredictable, since the proportion of requests routed to the expensive model varies with traffic mix and cannot be forecast.",
        "The classifier deciding complexity becomes a critical component whose errors are invisible, since a misroute gives a plausible weaker answer, not an error.",
        "The two models produce different output formats, so downstream parsing must handle both, and it breaks whenever either is updated.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A misroute does not fail; it quietly returns a worse answer, so the failure never appears in error rates and only shows up in quality metrics nobody is watching per route. The router needs its own evaluation, and quality should be tracked separately for each path. Why not A: routing latency is small and is the point of using a cheap classifier. Why not B: mix variability affects forecasting and is a budgeting problem rather than a design risk. Why not D: format differences are real and are handled by structured output."
    },
    {
      id: "aiSystemDesign-12",
      type: "mcq",
      title: "Self-Host or Call an API",
      difficulty: "medium",
      points: 5,
      prompt: "A team considers self-hosting an open-weights model instead of calling a provider. Which factor most often decides it?",
      options: [
        "Latency, since a locally hosted model avoids the network round trip to a provider and therefore responds faster on every request.",
        "Model quality, since the strongest available models are proprietary and self-hosting therefore imposes a quality ceiling the team must accept.",
        "Data residency, since self-hosting is the only way to guarantee prompts never leave infrastructure the organisation controls.",
        "Sustained utilisation. Reserved accelerators are paid for whether busy or not, so self-hosting wins only above a high steady load.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The economics turn on utilisation. API pricing is per token with no idle cost; self-hosting means paying for hardware continuously, so the break-even sits at high, steady throughput. Spiky or modest workloads almost always cost more self-hosted, before counting the engineering to operate it. Why not A: network transit is milliseconds against seconds of generation. Why not B: quality matters and is not usually what decides, since open-weights models are adequate for many tasks. Why not C: residency is decisive when it applies and applies to a minority of deployments."
    },
    {
      id: "aiSystemDesign-13",
      type: "mcq",
      title: "Rollout of a Prompt Change",
      difficulty: "medium",
      points: 5,
      prompt: "A prompt change passed offline evaluation. How should it reach production?",
      options: [
        "Deploy to all traffic, since the change was validated offline and a partial rollout delays the benefit while adding operational complexity.",
        "Deploy behind a flag to a small share of traffic, compare quality and cost against a held-back control, and expand with instant revert.",
        "Deploy to internal users first for a week, then to all traffic, since staff can report qualitative problems that metrics would not surface.",
        "Deploy to a single region first, so any problem is contained geographically and the blast radius is limited to one part of the user base.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Offline evaluation covers the cases you thought of; production covers the rest. A flagged percentage rollout with a control group measures the change against live traffic on quality, cost and latency simultaneously, and reverts in seconds if something moves the wrong way. Why not A: it converts an unknown into a full-traffic incident. Why not C: internal users are a poor sample and a week is slow feedback. Why not D: regional rollout limits blast radius without giving a comparable control group."
    },
    {
      id: "aiSystemDesign-14",
      type: "mcq",
      title: "Cost Per Request",
      difficulty: "medium",
      points: 5,
      prompt: "A team wants cost per request as a first-class metric. What must be captured?",
      options: [
        "The number of model calls per request, since cost scales with call count and token counts are difficult to obtain reliably at request granularity.",
        "Cost sampled from a representative subset of requests, since attributing spend to every request individually adds overhead to the hot path.",
        "Total monthly spend divided by total requests, which gives a blended figure, and is trivial to compute straight from the invoice.",
        "Input and output tokens per request with model version, attributed to feature and tenant, so cost is computed per request and segmented.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A blended average hides everything you would act on. Per-request token counts by direction, tagged with model version, feature and tenant, let you see which feature is expensive, which tenant is unprofitable, and what a change actually did. Providers return usage on every response, so the data is already there. Why not A: calls are a poor proxy, since one call with 40,000 tokens dwarfs ten small ones. Why not B: sampling is unnecessary when usage arrives with every response. Why not C: an average cannot be segmented."
    },
    {
      id: "aiSystemDesign-15",
      type: "mcq",
      title: "Designing Within a Quota",
      difficulty: "hard",
      points: 7,
      prompt: "A design must serve 500 requests per second but the provider quota supports roughly 10. Which combination is the realistic architecture?",
      options: [
        "Negotiate a higher quota and design as originally specified, since provider limits are commercial, not physical, and scale with committed spend.",
        "Queue everything and process it asynchronously at whatever rate the quota allows, accepting that response latency will then be dictated entirely by backlog depth.",
        "Question whether every request needs a model call: serve most deterministically, cache hard, use a small self-hosted model for the bulk, reserve the provider for the rest.",
        "Shard traffic across accounts with several providers, multiplying the available quota by however many accounts the team is prepared to operate.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A 50 times gap is not closed by tuning. The productive question is how many of those 500 requests genuinely need a frontier model, and the answer is usually a small fraction: a large share is repeat or classifiable and can be served deterministically or from cache, most of the remainder is within a small self-hosted model, and the provider handles the residual. Why not A: raising quota is part of any real plan and will not deliver 50 times. Why not B: unbounded queueing turns a capacity problem into indefinite latency. Why not D: multiple accounts to evade limits breaches most provider terms and multiplies operational burden."
    },
    {
      id: "aiSystemDesign-16",
      type: "mcq",
      title: "Tail Latency",
      difficulty: "hard",
      points: 7,
      prompt: "A service reports p50 of 1.1 s and p99 of 47 s. The model call is the dominant cost in both. What is the most likely cause and the right response?",
      options: [
        "Output length varies, so the longest responses take proportionally longer. Capping max tokens brings that tail back in line with the median.",
        "Input length varies enormously, so a small share carries very large prompts. Cap and truncate input, and route the largest requests to their own path and budget.",
        "The provider's tail is long, so the only response is a client timeout at an acceptable percentile, and a retry for whatever exceeds it.",
        "Requests are queueing behind a saturated worker pool, and the p99 reflects wait time rather than model time. Adding replicas will collapse the tail.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. A 40 times gap between median and tail on the same operation almost always means the inputs are not comparable. In retrieval and agent systems a small share of requests carries far more context, and prefill scales with input, so those land in the tail. Capping input and giving outsized requests their own path with their own budget addresses the cause. Why not A: output length is a real contributor and decode is bounded by max tokens, so it rarely produces a 40 times spread. Why not C: retrying a slow request usually makes the tail worse by resending a large prompt. Why not D: the scenario states the model call dominates both percentiles, which rules out queueing."
    },
    {
      id: "aiSystemDesign-17",
      type: "mcq",
      title: "Multi-Region Design",
      difficulty: "hard",
      points: 7,
      prompt: "A product must serve users on two continents with low latency and keep each region's data resident locally. What does the AI layer require?",
      options: [
        "A single global deployment with regional read replicas of the vector index, since retrieval is what dominates latency while model calls can be served centrally.",
        "Regional deployments sharing one vector index in a primary region, since duplicating an index across regions creates consistency problems that are harder than the latency they solve.",
        "A single deployment in one region behind a global content delivery network, since edge caching delivers low latency, and nothing needs duplicating anywhere.",
        "Independent regional stacks: local model endpoints, local vector index and local state, with only configuration replicated, and requests never crossing regions.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Residency and latency point the same way: the request path must stay inside the region, which means the model endpoint, the index and the state all live there. What crosses is configuration and code, not user data, and the operational cost is running two stacks. Why not A: it inverts the latency argument, since model calls dominate and are the thing that must be local. Why not B: sharing an index in a primary region sends user queries across the boundary, which is exactly what residency forbids. Why not C: edge caching cannot serve dynamic generation, and a single region breaches residency."
    },
    {
      id: "aiSystemDesign-18",
      type: "mcq",
      title: "Reading a Scaling Report",
      difficulty: "hard",
      points: 7,
      prompt: `After a scale-out from 10 to 40 replicas the cluster shows the following.

{{diagram}}

What happened?`,
      diagram: `flowchart TB
  S([Scale-out 10 to 40 replicas])
  S --> A["Throughput<br/><b>up 1.15x</b>"]
  S --> B["p99 latency<br/><b>up 3x</b>"]
  S --> C["Provider 429 rate<br/><b>6%</b> · was 0"]
  S --> D["Replica CPU<br/><b>8%</b> · was 30"]
  S --> E["DB connections<br/><b>near limit</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class S agent;
  class A,D source;
  class B,C,E warning;`,
      options: [
        "Four times the replicas is four times the demand against a fixed quota and connection limit, so the constraint moved downstream. Scale the shared limits or meter demand centrally.",
        "The load balancer is distributing traffic unevenly across the 40 replicas, so a few are saturated while the averaged CPU reading still appears low across the whole fleet.",
        "Throughput barely moved because the underlying workload is inherently sequential, so it cannot benefit from horizontal scaling regardless of how many replicas are added.",
        "The replicas are individually too small, so each one handles far fewer requests than expected. Larger instances would make more efficient use of the available provider quota.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Scaling the stateless tier does not scale what it depends on. Four times the replicas pushed four times the concurrency at one provider quota and one connection limit, and both became the constraint, which is why throughput barely moved while latency tripled on backoff and queueing. Dropping CPU confirms the replicas are idle waiting. Why not B: uneven distribution would show some replicas at high CPU. Why not C: the workload parallelises fine; the shared dependencies do not. Why not D: 8 percent CPU shows the replicas are not the constraint."
    },
    {
      id: "aiSystemDesign-19",
      type: "mcq",
      title: "Deciding What to Degrade",
      difficulty: "hard",
      points: 7,
      prompt: "During a partial provider outage the system can serve about 30 percent of normal model capacity. Which allocation policy is soundest?",
      options: [
        "Prioritise by value and reversibility: interactive traffic over background jobs, and defer anything retryable later with no user waiting.",
        "Allocate the remaining capacity proportionally across tenants by their normal share, so each customer experiences the same percentage reduction.",
        "Serve requests first come first served until capacity is exhausted, then reject, since any prioritisation scheme is unfair to whoever is deprioritised.",
        "Serve every request with a smaller and faster model, so all users get an answer at reduced quality rather than some users getting nothing.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Under scarcity you spend capacity where it does the most good, and the useful axis is whether a human is waiting and whether the work can be done later. Background indexing, batch classification and retries can all be deferred at no user cost, which often frees enough capacity to keep interactive traffic close to normal. Why not B: proportional fairness is defensible for billing and ignores that a tenant's traffic is not uniformly valuable. Why not C: first come first served treats a nightly batch job as equal to a waiting customer. Why not D: a fallback model is a good complement and assumes the smaller model has capacity and acceptable quality for every path."
    },
    {
      id: "aiSystemDesign-20",
      type: "mcq",
      title: "The Full Design Sketch",
      difficulty: "hard",
      points: 7,
      prompt: "You must design a document assistant: 50,000 users, 2 million documents, sub-3 second responses, per-user permissions, and full auditability. Which set of decisions is coherent?",
      options: [
        "Stateless API tier, one vector index per user for guaranteed isolation, synchronous generation, and full audit logs capturing every prompt and response verbatim.",
        "Event-driven architecture with all requests queued, model calls in worker pools, permissions applied after retrieval, and quality sampled weekly by human review.",
        "Stateless API tier, permission-filtered vector search with a reranker, streamed generation, prefix caching, per-tenant quotas, tracing with model version and tokens, and an async bulk path.",
        "Monolithic service with an in-process index for speed, synchronous generation, response caching keyed by question text, and aggregate cost and latency metrics.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Each piece maps to a stated requirement: statelessness for scale, permission filtering inside the search because authorisation cannot be applied afterwards, reranking for quality under a latency budget, streaming to meet a 3 second perceived target, prefix caching for cost, per-tenant quotas for fairness, and tracing with model version and tokens for auditability. Why not A: 50,000 per-user indexes is unworkable overhead, and verbatim prompt logging conflicts with most data policies. Why not B: queueing everything breaks the interactive target, post-retrieval permission filtering is a leak, and weekly human sampling is not auditability. Why not D: an in-process index and a monolith cannot scale to 50,000 users, and aggregate metrics fail auditability."
    }
  ]
};
