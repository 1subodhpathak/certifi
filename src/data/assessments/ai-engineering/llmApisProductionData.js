import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 5 of 15 - LLM APIs in Production
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const llmApisProductionData = {
  id: ASSESSMENT_TYPES.llmApisProduction,
  level: 5,
  title: "LLM APIs in Production",
  shortTitle: "LLM APIs",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Running model calls as real infrastructure: streaming and perceived latency, time to first token against total time, token accounting and cost control, rate limits and backoff, timeouts and retries, batching, concurrency, and choosing a model against a budget.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Most questions give you a latency, cost or failure profile and ask which change addresses it. Several distractors are the fix that treats the symptom. No negative marking.",
  questions: [
    {
      id: "llmApisProduction-01",
      type: "mcq",
      title: "What Streaming Changes",
      difficulty: "easy",
      points: 3,
      prompt: "You switch an endpoint from a single response to a streamed one. What actually improves?",
      options: [
        "Total generation time falls, because streamed tokens are produced by a faster decoding path than the one used for buffered responses.",
        "Perceived latency improves because the user sees the first tokens almost immediately, while total time to the last token is essentially unchanged.",
        "Total cost falls, because streaming bills only the tokens actually delivered before the client closes the connection rather than the full response.",
        "Reliability improves, because a streamed response can resume from the last delivered token if the connection drops partway through generation.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Streaming changes when the user sees output, not how fast the model produces it. The last token arrives at roughly the same moment either way, but the wait before anything appears drops to time to first token. Why not A: the decoding path is identical; only delivery differs. Why not C: you are billed for tokens generated, and an abandoned stream has usually generated them already. Why not D: standard streaming has no resume; a dropped connection means restarting the request."
    },
    {
      id: "llmApisProduction-02",
      type: "mcq",
      title: "Two Latency Numbers",
      difficulty: "easy",
      points: 3,
      prompt: "A team tracks time to first token and total response time separately. Why does that distinction matter?",
      options: [
        "Time to first token measures network round trip and total time measures model compute, so together they separate infrastructure problems from model problems.",
        "Time to first token is driven by input length, while total time is driven by how many tokens are generated, so they move independently and have different fixes.",
        "Time to first token is the only figure users notice, so total response time is tracked purely for capacity planning rather than for user experience.",
        "They are billed differently, since providers charge a connection fee measured by time to first token and a separate per-token rate afterwards.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Prompt size dominates time to first token because the whole prompt must be processed before anything comes back; output length dominates total time because each token needs its own pass. A long prompt with a short answer and a short prompt with a long answer have opposite profiles and opposite remedies. Why not A: time to first token is mostly prefill compute, not network. Why not C: total time matters to users on any long response. Why not D: there is no separate connection fee."
    },
    {
      id: "llmApisProduction-03",
      type: "mcq",
      title: "Rate Limit Response",
      difficulty: "easy",
      points: 3,
      prompt: "Your client receives HTTP 429 from the model provider. What is the correct handling?",
      options: [
        "Retry immediately, since 429 indicates a transient queue condition that usually clears within milliseconds and a fast retry gets ahead of other clients.",
        "Fail the request and surface an error to the user, since retrying a rate limit only adds load to an already saturated endpoint.",
        "Switch to a different model on the same account, since limits are enforced per model and another model will have headroom available.",
        "Back off before retrying, growing the delay each attempt and adding jitter, and honour any retry-after header the provider returns.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Exponential backoff with jitter spreads retries so clients do not resynchronise into a thundering herd, and retry-after is the provider telling you exactly how long to wait. Why not A: immediate retry is the behaviour that turns a brief limit into a sustained one. Why not B: 429 is explicitly retryable and failing outright discards recoverable requests. Why not C: limits are often account-wide, and silently changing model changes output quality and cost without telling anyone."
    },
    {
      id: "llmApisProduction-04",
      type: "mcq",
      title: "Input and Output Pricing",
      difficulty: "easy",
      points: 3,
      prompt: "Providers usually price output tokens several times higher than input tokens. What follows for a summarisation workload?",
      options: [
        "A long input with a short summary can cost less than a short input with a long answer, so output length deserves as much attention as input.",
        "Pricing asymmetry is small enough in practice to ignore, so estimating total tokens at a single blended rate is accurate enough for budgeting.",
        "Summarisation is unusually cheap because the output is short, so cost control efforts are better spent on other workloads in the system.",
        "Cost is dominated by the documents you send, so the main lever is trimming input, and output length barely affects the bill at all.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. With output priced several times higher, a verbose response can outweigh a large prompt. Capping response length and asking for concise output are real cost levers, not just style preferences. Why not B: a multiple of several times is far too large to blend away when output share varies by workload. Why not C: it is directionally true for one request but the wrong conclusion, since summarisation at volume is still worth controlling. Why not D: it ignores the higher rate on the side you control most directly through max tokens."
    },
    {
      id: "llmApisProduction-05",
      type: "mcq",
      title: "Timeouts",
      difficulty: "easy",
      points: 3,
      prompt: "A service calls a model with no timeout configured. What is the risk?",
      options: [
        "The provider will hold the request indefinitely, and each hung call occupies a connection and a worker until the process is restarted.",
        "The request will be retried automatically by the client library forever, multiplying cost until the account reaches its spending limit.",
        "The model will generate until it reaches the context window limit, producing an extremely long and expensive response before returning.",
        "The provider will silently downgrade the request to a smaller model to guarantee it completes, changing output quality without any signal.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Without a client timeout a stalled call ties up a connection and the worker waiting on it. Under load that cascades into thread pool exhaustion and takes down the whole service, not just the one call. Set timeouts sized to your p99 plus headroom, and consider separate budgets for first token and for the full stream. Why not B: retries come from explicit retry policy, not from a missing timeout. Why not C: generation length is bounded by max tokens and stop conditions. Why not D: no provider silently substitutes a different model."
    },
    {
      id: "llmApisProduction-06",
      type: "mcq",
      title: "Choosing a Model Tier",
      difficulty: "easy",
      points: 3,
      prompt: "A pipeline has one step that classifies intent into eight categories and another that writes a customer-facing explanation. What is the sensible model choice?",
      options: [
        "Use a small model for both and compensate with more detailed prompts, since prompt quality contributes more to output than model tier does.",
        "Use the largest model for classification because errors there propagate downstream, and a smaller model for the explanation since users forgive rough wording.",
        "Use the largest available model for both, since a single model simplifies operations and any quality gain on classification is worth the extra cost.",
        "Use a small fast model for classification and a stronger model for the customer-facing text, matching model capability to the difficulty of each step.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Routing each step to the cheapest model that clears its quality bar is the standard cost lever in a multi-step pipeline. Classification into a small fixed label set is well within a small model; customer-facing prose is where the stronger model earns its price. Why not A: prompt quality matters, but there are tasks a small model cannot reach regardless of prompt. Why not B: it inverts the difficulty ordering and treats user-visible output as the low-stakes step. Why not C: paying frontier rates for an eight-way classification is waste at volume."
    },
    {
      id: "llmApisProduction-07",
      type: "mcq",
      title: "Which Failures to Retry",
      difficulty: "medium",
      points: 5,
      prompt: "A client retries every failed model call three times. Costs rise and some errors never resolve. Which retry policy is correct?",
      options: [
        "Retry only on 429, 5xx and network timeouts. A 400 for a malformed request or oversized context fails identically every time, so retrying wastes money.",
        "Retry everything but cap total attempts by wall clock rather than by count, so a persistent failure stops consuming budget once its time allowance is used up.",
        "Retry everything except authentication failures, since every other error class has some chance of succeeding on a subsequent attempt against a different backend.",
        "Retry only on network timeouts, since any error the provider actually returned represents a considered decision that a retry cannot change.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Retry classification is the whole game. Rate limits and server errors are transient and worth retrying with backoff; a 400 describing a malformed body or a context overflow is deterministic and will fail identically forever. Why not B: a time cap bounds the damage but still burns budget retrying errors that cannot succeed. Why not C: it is nearly right but sweeps in the deterministic 4xx class, which is the expensive mistake. Why not D: it is too narrow, since 429 and 5xx are genuinely retryable and are the common transient cases."
    },
    {
      id: "llmApisProduction-08",
      type: "mcq",
      title: "Concurrency Against a Quota",
      difficulty: "medium",
      points: 5,
      prompt: "A batch job must process 200,000 documents through a model with a fixed tokens-per-minute quota. Which design finishes soonest without tripping limits?",
      options: [
        "Fire all requests concurrently and rely on the client's backoff to shape traffic, since the provider's own limiter will naturally settle throughput at the quota.",
        "Process strictly one at a time so the quota can never be exceeded, and accept the longer runtime as the cost of guaranteed compliance.",
        "Meter requests client-side against the known token quota with a shared limiter, running enough concurrency to keep the budget saturated without exceeding it.",
        "Split the work across many client processes so each stays under the quota individually, letting total throughput scale with the number of processes.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The quota is the binding constraint, so the goal is to run right at it and never above. A shared client-side limiter that accounts for tokens, not just requests, lets you saturate the budget while keeping the 429 rate near zero. Why not A: relying on rejection as flow control wastes a round trip per rejected call and produces retry storms. Why not B: serial processing leaves most of the quota unused and would take far longer than necessary. Why not D: the quota is account-wide, so more processes share the same budget and simply collide with each other."
    },
    {
      id: "llmApisProduction-09",
      type: "mcq",
      title: "Streaming and Error Handling",
      difficulty: "medium",
      points: 5,
      prompt: "A streamed response fails halfway through with a server error. The client has already displayed 300 tokens. What is the correct handling?",
      options: [
        "Leave the partial text in place and append an error notice, since discarding visible output is more jarring to the user than an incomplete answer.",
        "Treat the partial output as unusable downstream, and either restart or surface a clear failure. A truncated answer can be confidently wrong in a way the user cannot detect.",
        "Retry only the remaining portion by sending the original prompt plus the 300 tokens already received as an assistant prefix, so generation continues where it stopped.",
        "Resume the stream from the last received token using the provider's continuation parameter, so the user sees no interruption and no tokens are paid for twice.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. A stream that dies mid-sentence can leave a technically fluent fragment that reverses meaning at the point it was cut. Half of a conditional statement is worse than no statement. Restart or fail visibly, and never let a partial stream flow into a parser or a downstream step. Why not A: leaving misleading text on screen with a notice beside it is exactly the failure mode described. Why not C: prefix continuation is technically possible on some APIs but re-bills the prefix and can produce a seam or a repeat, so it is not the safe default. Why not D: there is no general continuation token for a broken stream."
    },
    {
      id: "llmApisProduction-10",
      type: "mcq",
      title: "Cost of a Long Conversation",
      difficulty: "medium",
      points: 5,
      prompt: "A chat product resends the full conversation history on every turn. Cost per conversation grows faster than the number of turns. Why?",
      options: [
        "The model generates longer replies as context grows, so output token cost compounds turn over turn independently of the input size.",
        "Providers apply a surcharge on requests above a token threshold, so long conversations cross into a higher pricing tier partway through.",
        "Each turn resends everything before it, so billed input across a conversation grows with the square of the turn count.",
        "Longer contexts require more compute per token, so the per-token price the provider charges rises as the conversation window fills up.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Turn ten resends the previous nine, so cumulative input across the conversation grows quadratically. This is why long-running chats need trimming, summarisation of older turns, or prompt caching to keep cost from running away. Why not A: replies may drift longer, but that is a secondary effect next to resending the whole history each turn. Why not B: pricing is per token at a flat rate, with no threshold surcharge. Why not D: the advertised per-token price does not change with context length."
    },
    {
      id: "llmApisProduction-11",
      type: "mcq",
      title: "Idempotency on the API Boundary",
      difficulty: "medium",
      points: 5,
      prompt: "A client times out after 30 seconds and retries. Occasionally the user is charged twice for a generation that the provider did complete. What is the fix?",
      options: [
        "Raise the timeout above the provider's maximum response time, so a completed request is never abandoned and no duplicate is issued.",
        "Record a request identifier before sending and check the provider's usage log before retrying, so a completed call is detected and not repeated.",
        "Send an idempotency key with the request so the provider returns the original result rather than doing the work a second time.",
        "Move the call behind a queue with exactly-once delivery, so the retry is deduplicated by the queue before it ever reaches the provider.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Delivery is at-least-once whenever timeouts and retries exist, so you engineer for an at-most-once effect. An idempotency key lets the provider recognise the repeat and return the original outcome rather than redoing it. Why not A: a longer timeout shrinks the window but never closes it, and it hurts latency for everyone. Why not B: a usage-log check is a race with a visibility delay and adds a round trip on every retry. Why not D: exactly-once delivery across a network boundary is not something a queue can actually provide; deduplication still needs a key at the endpoint."
    },
    {
      id: "llmApisProduction-12",
      type: "mcq",
      title: "Caching Model Responses",
      difficulty: "medium",
      points: 5,
      prompt: "A team caches full model responses keyed by the exact prompt string. Hit rate in production is under 2 percent. What is the sound assessment?",
      options: [
        "Exact-match caching only helps where inputs genuinely repeat. Free-form user text does not, so cache at a level that does repeat, or use semantic matching with care.",
        "The cache key should include the model version and sampling parameters, and adding them will raise the hit rate by making more requests eligible for reuse.",
        "The cache time to live is too short for this traffic pattern, and extending it will let more requests find an existing entry before it expires.",
        "Responses are non-deterministic, so caching them is unsound in principle and the low hit rate is protecting the product from serving stale variants.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Free-form user input almost never repeats verbatim, so an exact-match cache has nothing to hit. Caching pays off on genuinely repeated units: system prompt prefixes, embeddings of stable documents, retrieval results for common queries, or classification of a bounded input set. Semantic caching is possible but risks serving an answer to a subtly different question. Why not B: those belong in the key for correctness, and adding them can only lower the hit rate. Why not C: expiry is not why distinct strings fail to match. Why not D: caching a deterministic-enough response is standard practice; the issue is key design."
    },
    {
      id: "llmApisProduction-13",
      type: "mcq",
      title: "Structured Output and Latency",
      difficulty: "medium",
      points: 5,
      prompt: "An extraction endpoint returns a large JSON object. p99 latency is unacceptable and the team considers streaming the JSON to the client. What should they weigh?",
      options: [
        "Partial JSON is not valid JSON, so a client cannot use it until complete. Streaming helps only if the client parses incrementally; otherwise reduce output size or split the work.",
        "Streaming and structured output are mutually exclusive, since constrained decoding must inspect the complete document before any token can be released to the client.",
        "Streaming will reduce p99 latency directly, because the connection stays open and the provider prioritises streamed requests over buffered ones in its scheduler.",
        "Streaming JSON is straightforward because the object is emitted in field order, so a client can parse and render each field as soon as its closing quote arrives.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The last token still arrives at the same time, so streaming does not reduce total latency at all. It only helps if the client can genuinely act on a prefix, which needs an incremental parser and a UI that can render partial state. If it cannot, attack the real cause: fewer fields, a smaller model, or splitting one large extraction into parallel calls. Why not B: constrained decoding operates token by token and streams fine. Why not C: there is no scheduling priority for streamed requests. Why not D: field-by-field consumption needs an incremental parser, which is precisely the thing being assumed away."
    },
    {
      id: "llmApisProduction-14",
      type: "mcq",
      title: "Reading a Cost Breakdown",
      difficulty: "medium",
      points: 5,
      prompt: `A monthly bill shows the following.

{{diagram}}

Which observation is best supported?`,
      diagram: `flowchart TB
  B([Monthly bill])
  B --> I["Input tokens<br/><b>42 billion</b><br/><small>60% of spend</small>"]
  B --> O["Output tokens<br/><b>5.6 billion</b><br/><small>40% of spend</small>"]
  B --> R["Requests<br/><b>14 million</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  class B agent;
  class I warning;
  class O,R source;`,
      options: [
        "Request count is the real driver at 14 million calls, so batching several units of work into each request is the change with the largest effect on total spend.",
        "Average input is about 3,000 tokens per request, which is unavoidable for a retrieval product, so the only lever left is cutting how many requests are made.",
        "Input runs about 3,000 tokens per request against 400 out, and still carries 60 percent of spend. Prompt caching, shorter system prompts and trimmed retrieval are the levers.",
        "Output is the better optimisation target, since it costs several times more per token, and cutting response length is easier than cutting the input side.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Do the division: 42 billion over 14 million is 3,000 input tokens per request against 400 out. Input is seven and a half times the volume and still 60 percent of spend even though output is priced higher per token, which is the signature of heavy system prompts and retrieved context. That points at prefix caching and trimming what goes into the window. Why not A: pricing is per token, not per request, so batching alone saves little. Why not B: 3,000 tokens of input per request is exactly what caching and trimming attack, so calling it unavoidable gives up the largest lever. Why not D: output is dearer per token but is the smaller share on far less volume."
    },
    {
      id: "llmApisProduction-15",
      type: "mcq",
      title: "Diagnosing a Latency Regression",
      difficulty: "hard",
      points: 7,
      prompt: `After a release, an assistant shows the following.

{{diagram}}

Which change best explains this?`,
      diagram: `flowchart TB
  R([After the release])
  R --> A["Time to first token<br/><b>1.9 s</b> · was 0.4 s"]
  R --> B["Tokens per second<br/><b>unchanged</b>"]
  R --> C["Total tokens output<br/><b>unchanged</b>"]
  R --> D["Model and provider<br/><b>unchanged</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  class R agent;
  class A warning;
  class B,C,D source;`,
      options: [
        "The maximum output length was raised, so the model reserves capacity for a longer response before beginning generation, which delays the first token.",
        "The client switched from streaming to buffered responses, so nothing is delivered until generation finishes and the first visible token now waits for the whole response.",
        "Retrieval was added or widened, so the prompt is now far larger. Prefill scales with input length, which raises time to first token and leaves decode speed untouched.",
        "The provider began routing requests to a more heavily loaded region, adding queueing delay ahead of every request while leaving generation speed the same.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The signature is precise: time to first token quadrupled while per-token speed and output length held. That isolates the change to prefill, which is driven by input size. A wider retrieval window or a larger system prompt is the usual culprit. Why not A: max tokens is an upper bound and does not reserve compute ahead of generation. Why not B: buffering would make time to first token roughly equal total response time, a far larger jump than this. Why not D: queueing is possible but would be a provider-side change, and the scenario ties the regression to a release."
    },
    {
      id: "llmApisProduction-16",
      type: "mcq",
      title: "Fallback Between Providers",
      difficulty: "hard",
      points: 7,
      prompt: "A team adds an automatic fallback: if the primary model errors or times out, retry the same prompt against a second provider's model. What is the most important risk they have taken on?",
      options: [
        "The fallback model behaves differently on the same prompt, so during an incident the product silently changes its quality, formatting and refusal behaviour with no signal to anyone.",
        "The second provider will not be warmed up, so its first requests after a long idle period carry significantly higher latency than the primary they replaced.",
        "Prompt caching is lost on the fallback path, so the fallback requests pay full input price and lose the discount the primary path had been receiving.",
        "Cost becomes unpredictable, since a failing primary silently doubles spend on every affected request and the second provider may price differently per token.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Availability is the easy part; behavioural equivalence is the hard part. A prompt tuned on one model can produce different formatting, different refusals and different quality on another, so an incident quietly becomes a product change. The mitigations are a per-model evaluation suite, tagging every response with the model that served it, and deciding explicitly whether degraded output beats a clean error. Why not B: warm-up is a minor and transient effect. Why not C: losing a cache discount is a cost issue, again smaller than silently changing behaviour. Why not D: cost is real but bounded and visible."
    },
    {
      id: "llmApisProduction-17",
      type: "mcq",
      title: "Load Shedding",
      difficulty: "hard",
      points: 7,
      prompt: "During a spike, an assistant's queue depth grows without bound. Every request is eventually served, but p99 latency reaches four minutes and most users have already left. What is the right response?",
      options: [
        "Prioritise the newest requests over the oldest, since recent arrivals are most likely to still have a user waiting, and let older ones expire at the back of the queue.",
        "Add capacity automatically when queue depth crosses a threshold, so the backlog is absorbed rather than rejected and no user request is discarded.",
        "Increase the client timeout so slow requests complete rather than failing, which converts the latency problem into a throughput problem the queue can absorb.",
        "Shed load explicitly: bound the queue, reject or degrade beyond it, and drop requests whose deadline has already passed rather than spending capacity on answers nobody will read.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. An unbounded queue converts an overload into a latency collapse and then spends real capacity generating answers for users who are gone. The fix is admission control: bound the queue, fail fast with a clear message past the bound, and discard work whose deadline has expired before spending a model call on it. Why not A: newest-first is a real technique but starves older requests and is a scheduling refinement, not a substitute for bounding the queue. Why not B: autoscaling helps but is too slow for a spike and is bounded by provider quota, so you still need a policy for the interval. Why not C: longer timeouts make the collapse worse by holding more resources for longer."
    },
    {
      id: "llmApisProduction-18",
      type: "mcq",
      title: "Batch Against Interactive",
      difficulty: "hard",
      points: 7,
      prompt: "One account serves an interactive assistant and a nightly bulk classification job. During the job, interactive p99 latency triples. Both use the same model. What is the correct architecture?",
      options: [
        "Run the bulk job at a lower concurrency so it consumes less quota per second, which will leave enough headroom for interactive requests during the overlap window.",
        "Move the bulk job to a smaller and faster model, so it completes in a shorter window and the period of interference is reduced proportionally.",
        "Schedule the bulk job for a period of low interactive traffic, so the two workloads do not overlap and no isolation mechanism is needed.",
        "Move the bulk job to an asynchronous batch endpoint, or give it a separate quota with a strict rate cap, so interactive traffic never queues behind it.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Two workloads with different latency requirements sharing one quota means the latency-sensitive one loses. Asynchronous batch endpoints exist for exactly this and are usually cheaper as well; failing that, hard isolation through a separate key or quota is what actually protects interactive traffic. Why not A: lower concurrency reduces the interference without eliminating it, and it is a tuning value that drifts. Why not B: a faster model shortens the window but does not stop contention within it. Why not C: scheduling helps and should be done, but it is a convention rather than a guarantee and fails the moment the job overruns or traffic shifts."
    },
    {
      id: "llmApisProduction-19",
      type: "mcq",
      title: "Silent Model Version Drift",
      difficulty: "hard",
      points: 7,
      prompt: "A production pipeline pinned to a floating model alias passes all tests for months. One morning, output format changes subtly and downstream parsing fails for 4 percent of requests. Nothing was deployed. What happened, and what is the durable fix?",
      options: [
        "The failing 4 percent are inputs that grew past a length threshold over time, and the format change is the model's response to a truncated prompt rather than a version change.",
        "The provider enabled a new safety filter on the alias, which rewrites a small fraction of responses and breaks parsers expecting the original format.",
        "The provider rotated the alias to a newer version. Pin explicit versioned identifiers and run the evaluation suite against any new version before moving the alias yourself.",
        "The provider adjusted default sampling parameters for the alias. Set temperature, top_p and max tokens explicitly on every request so no default can shift behaviour under you.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A floating alias is a dependency that changes without a deploy on your side. The durable fix is to treat the model like any other pinned dependency: use explicit versions, gate upgrades behind your evaluation suite, and move deliberately rather than being moved. Why not A: nothing suggests input growth, and truncation would fail loudly rather than produce a clean reformatting. Why not B: safety filtering blocks or refuses rather than quietly reformatting output. Why not D: pinning sampling parameters is good practice and worth doing, but defaults rarely change and would not typically produce a format shift."
    },
    {
      id: "llmApisProduction-20",
      type: "mcq",
      title: "Reading a Failure Profile",
      difficulty: "hard",
      points: 7,
      prompt: `An endpoint reports the following over one hour.

{{diagram}}

Which reading is best supported?`,
      diagram: `flowchart TB
  E([One hour of traffic])
  E --> S["Success<br/><b>91%</b>"]
  E --> T["429 rate limited<br/><b>6%</b>"]
  E --> C["Client timeout<br/><b>3%</b>"]
  E --> F["Provider 5xx<br/><b>0%</b>"]
  E --> L["p50 <b>0.9 s</b><br/>p99 <b>28.0 s</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class E agent;
  class S,F safe;
  class T,C,L warning;`,
      options: [
        "The timeouts are the primary defect, since they represent work that was paid for and discarded, and raising the client timeout past 28 seconds would recover most of that 3 percent.",
        "The absence of 5xx points at self-inflicted load: the account is at quota and the long p99 is retry backoff. Meter demand centrally and bound retries rather than raising timeouts.",
        "The p50 and p99 gap indicates two distinct populations of request, so the fix is to route long prompts to a separate endpoint so they cannot delay short ones.",
        "The provider is degraded, since a 9 percent failure rate and a 28 second p99 together indicate an upstream incident rather than anything under the team's control.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Zero server errors is the key reading: the provider is healthy and rejecting you for quota, not failing. The 28 second p99 is consistent with requests that were rate limited, backed off, and retried, with the accumulated wait landing in the client's measured latency. The fix is a shared limiter that keeps demand under quota, plus a bounded retry budget. Why not A: raising the timeout hides the backoff time rather than removing it and holds resources longer. Why not C: a bimodal distribution is plausible in general but the 429 rate points somewhere more specific. Why not D: a healthy provider returning 429 is not an incident."
    }
  ]
};
