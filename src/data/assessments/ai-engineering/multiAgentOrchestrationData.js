import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 13 of 15 - Multi-Agent Orchestration
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const multiAgentOrchestrationData = {
  id: ASSESSMENT_TYPES.multiAgentOrchestration,
  level: 13,
  title: "Multi-Agent Orchestration",
  shortTitle: "Multi-Agent",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Coordinating several agents: topology choice between supervisor, handoff, router and subagent patterns, task decomposition, what context to pass across a boundary, aggregating conflicting results, delegation depth, cost accounting, and debugging a failure that spans agents.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Several questions ask you to pick a topology from stated requirements or to decide whether a second agent is warranted at all. Recognising when one agent is the better answer is weighted heavily. No negative marking.",
  questions: [
    {
      id: "multiAgentOrchestration-01",
      type: "mcq",
      title: "Why Split Into Agents",
      difficulty: "easy",
      points: 3,
      prompt: "What is the strongest general argument for splitting a system into several agents?",
      options: [
        "Several smaller models cost less to run than one large model, so decomposition is primarily a cost optimisation over a single capable agent.",
        "Each agent works in its own context with its own instructions and tools, keeping its decision space small and its context focused.",
        "Multiple agents provide redundancy, so a wrong answer from one can be detected and corrected by another before it reaches the user.",
        "Agents can be developed in different programming languages, so teams are free to choose the stack that suits each capability best.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. The core benefit is scoping: a narrow tool set, a focused prompt, and a context window that holds only what this piece of work needs. Everything else follows from that. Why not A: several model calls usually cost more in total than one, since coordination adds calls and repeated context. Why not C: redundancy through cross-checking is a specific pattern you can build, not a property of having several agents. Why not D: language choice is an implementation detail available to any service architecture."
    },
    {
      id: "multiAgentOrchestration-02",
      type: "mcq",
      title: "Supervisor Topology",
      difficulty: "easy",
      points: 3,
      prompt: "In a supervisor topology, how does work flow?",
      options: [
        "The supervisor decomposes the request and assigns sub-tasks, each result returns to it, and it decides what happens next.",
        "The supervisor forwards the request to the first worker, which passes it along a chain until one of them produces a final answer for the user.",
        "The supervisor broadcasts each request to every worker and selects whichever response arrives first, discarding the rest to minimise latency.",
        "Agents negotiate among themselves to decide who is best suited to each task, and the supervisor records the outcome for auditing purposes.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. A supervisor is a hub: it owns decomposition, delegation and integration, and every result passes back through it. That gives central control and makes the supervisor both the coordination point and the potential bottleneck. Why not B: passing along a chain describes sequential handoffs. Why not C: broadcasting and racing is a redundancy pattern, not delegation. Why not D: peer negotiation describes a decentralised pattern with no supervisor."
    },
    {
      id: "multiAgentOrchestration-03",
      type: "mcq",
      title: "Handoff",
      difficulty: "easy",
      points: 3,
      prompt: "In a handoff pattern, what actually changes when one agent hands off to another?",
      options: [
        "The conversation is archived and a new one begins, so the receiving agent starts from the user's original request without the intervening turns.",
        "Both agents remain active and respond in turn, with the user seeing a combined answer assembled from the contributions of each.",
        "Control transfers, so the receiving agent's prompt and tools become active and it continues the conversation with the user directly.",
        "The first agent calls the second as a tool and waits for its result, then continues the conversation itself using what was returned.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Handoff is a transfer of control. The new agent takes over the conversation with its own instructions and tools, and typically stays active for subsequent turns, which is what makes repeat requests cheap. Why not A: the conversation history normally carries across, which is the point. Why not B: one agent is active at a time. Why not D: that describes the subagent-as-tool pattern, where control returns to the caller."
    },
    {
      id: "multiAgentOrchestration-04",
      type: "mcq",
      title: "Subagent as a Tool",
      difficulty: "easy",
      points: 3,
      prompt: "A main agent invokes a subagent through a tool call. What is the defining characteristic?",
      options: [
        "The subagent runs asynchronously and reports back whenever it finishes, so the caller continues working while the subagent proceeds.",
        "The subagent inherits the caller's full tool set, since it operates on behalf of the caller and may need any capability the caller has.",
        "The subagent runs its own loop in a separate context and returns a single result to the caller, which retains control throughout.",
        "The subagent shares the caller's context and message history, so both agents see the same conversation and can build on each other's reasoning.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Delegation through a tool call gives context isolation and a single handoff back. The subagent does its own multi-step work invisibly and returns one condensed result, and the caller never loses control of the overall task. Why not A: the standard form is synchronous, and asynchronous delegation is a separate variant. Why not B: subagents are normally given a deliberately narrow tool set. Why not D: sharing context defeats the isolation that motivates the pattern."
    },
    {
      id: "multiAgentOrchestration-05",
      type: "mcq",
      title: "The Cost of Coordination",
      difficulty: "easy",
      points: 3,
      prompt: "A single agent handles a request in 3 model calls. The same request through a supervisor with two workers takes 6. Why?",
      options: [
        "Every delegation costs a call to decide and one to integrate, on top of the worker's own calls, so coordination is real overhead.",
        "Workers must confirm receipt of their assignment before beginning, which adds a handshake call per worker to the total count.",
        "Worker agents use smaller models, so each needs more calls to reach the same quality that one call to a larger model would achieve.",
        "The supervisor re-reads its full context on every worker result, and each re-read counts as an additional call against the total.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Coordination is not free. The supervisor spends calls deciding what to delegate and integrating what comes back, and those are pure overhead relative to doing the work directly. Multi-agent has to buy something worth that overhead. Why not B: there is no handshake protocol in a normal delegation. Why not C: model size is an independent choice. Why not D: re-reading context costs input tokens within a call, not extra calls."
    },
    {
      id: "multiAgentOrchestration-06",
      type: "mcq",
      title: "Scoping a Specialist",
      difficulty: "easy",
      points: 3,
      prompt: "A specialist agent is created for refund processing. What should it be given?",
      options: [
        "The full company tool set with instructions to use only the refund-related ones, so it can handle adjacent requests without another handoff.",
        "Only the refund tools it needs, plus instructions covering refund policy and the conditions under which it should hand back rather than proceed.",
        "The same tools as the main agent but with a refund-focused system prompt, so behaviour is specialised while capability stays uniform across agents.",
        "Refund tools plus read access to every customer record, so it always has enough context to decide without needing to request more information.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. A specialist is defined by what it cannot do as much as by what it can. A minimal tool set makes selection easy and bounds the damage from a mistake or an injected instruction, and an explicit hand-back condition stops it improvising outside its remit. Why not A: an instruction not to use a tool is not a restriction. Why not C: identical capability with a different prompt gives up the main benefit of specialising. Why not D: broad read access is a data exposure the role does not require."
    },
    {
      id: "multiAgentOrchestration-07",
      type: "mcq",
      title: "What Crosses the Boundary",
      difficulty: "medium",
      points: 5,
      prompt: "A supervisor delegates to a research worker. What should it pass?",
      options: [
        "A pointer to the shared conversation store, so the worker can read whatever it decides it needs rather than receiving a fixed slice up front.",
        "The full conversation history, so the worker has complete context and can interpret its task in light of everything the user has said.",
        "Only the task description, since a worker with no other context cannot be distracted by irrelevant material and will stay focused on its assignment.",
        "A self-contained task statement with the context needed to carry it out and the expected result shape, minus the unrelated history.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The boundary is where you decide what the worker needs to know, and both extremes are wrong. Passing everything reintroduces the context bloat delegation was meant to avoid; passing nothing produces work that misses an essential constraint. A self-contained brief plus the expected output shape is the balance. Why not A: letting the worker read freely is context bloat with extra steps. Why not B: full history undoes the isolation. Why not C: bare task descriptions routinely omit the qualifier that made the task specific."
    },
    {
      id: "multiAgentOrchestration-08",
      type: "mcq",
      title: "Decomposition Granularity",
      difficulty: "medium",
      points: 5,
      prompt: "A supervisor breaks every request into fifteen or more small sub-tasks. What is likely to go wrong?",
      options: [
        "The supervisor will exceed the maximum number of concurrent workers, so tasks queue and the run takes longer than a single agent would.",
        "Coordination overhead dominates, the supervisor's context fills with fragments, and each boundary can drop context the pieces needed to share.",
        "Workers will finish faster than the supervisor can dispatch, so most of the run is spent idle waiting for the supervisor's next assignment.",
        "Small tasks fall below the level where a model performs well, so each individual result will be lower quality than a larger task would produce.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Every split costs a dispatch and an integration, and every boundary drops whatever context did not make it into the brief. Fifteen fragments means fifteen chances to lose the thread and a supervisor whose window fills with partial results. Granularity should follow real seams in the work. Why not A: concurrency limits cause queueing rather than the described degradation. Why not C: idle workers are a scheduling detail, not the failure mode. Why not D: models handle small tasks well; the loss is in coordination, not in per-task quality."
    },
    {
      id: "multiAgentOrchestration-09",
      type: "mcq",
      title: "Conflicting Results",
      difficulty: "medium",
      points: 5,
      prompt: "Two workers return contradictory conclusions about the same fact. What should the supervisor do?",
      options: [
        "Treat the conflict as a signal, not a tie: check whether the two used different sources or assumptions, and escalate if evidence cannot settle it.",
        "Return both to the user with their sources and let the user decide, since the system cannot adjudicate a genuine disagreement between two specialists.",
        "Ask a third worker to resolve the disagreement, treating the majority of three as the answer since two independent agreements are stronger than one.",
        "Prefer whichever worker is more specialised in the relevant domain, since domain fit is the best available proxy for reliability when evidence conflicts.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. A contradiction usually means the two were working from different inputs, different time ranges, or different readings of the question, and that difference is the actual finding. Comparing their evidence resolves most cases and identifies a real data problem in the rest. Why not B: passing an unexplained contradiction to the user is the system declining to do its job. Why not C: a third model call is not an independent observation, since it shares the same priors and often the same inputs. Why not D: specialisation is a weak proxy and ignores the evidence each one actually had."
    },
    {
      id: "multiAgentOrchestration-10",
      type: "mcq",
      title: "Delegation Depth",
      difficulty: "medium",
      points: 5,
      prompt: "Subagents are permitted to spawn their own subagents, and a run reaches five levels deep. What goes wrong?",
      options: [
        "Deep nesting exceeds the framework's recursion limit, so runs fail once they pass the maximum depth the runtime was configured to allow.",
        "Each level runs in its own separate process, so the number of concurrent processes grows exponentially with depth and exhausts the host's resources.",
        "Results from deep levels arrive out of order, so the top-level agent integrates them incorrectly and produces an inconsistent final answer.",
        "Each level adds coordination overhead and loses context in summarisation, so the deepest work runs against a brief several steps removed from the real request.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Each hop compresses the brief going down and compresses the result coming back, so five levels down the agent is working on a paraphrase of a paraphrase. Cost and latency multiply along the way. Most systems cap depth at one or two levels for exactly this reason. Why not A: a hard recursion limit is a symptom of the concern rather than the underlying problem. Why not B: subagents are usually not separate processes and would not grow exponentially. Why not C: results are matched to their calls, so ordering is not the issue."
    },
    {
      id: "multiAgentOrchestration-11",
      type: "mcq",
      title: "Shared State Between Agents",
      difficulty: "medium",
      points: 5,
      prompt: "Several agents read and write a shared scratchpad during a run. What is the main risk?",
      options: [
        "Shared state defeats context isolation, since every agent must read the whole scratchpad and therefore sees the material the isolation was meant to hide.",
        "Writes cannot be attributed to a specific agent, which makes it impossible to determine which agent introduced an incorrect fact when debugging.",
        "The scratchpad grows unbounded across a long run, eventually exceeding the context window of whichever agent reads it most frequently.",
        "Agents overwrite one another's entries and read stale state, so the outcome depends on interleaving unless writes are structured and merge rules explicit.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A shared mutable store between concurrent writers is a distributed state problem, and the default of last write wins silently discards work. It needs append-only sections, per-agent keys, or explicit merge rules so that concurrent updates combine rather than overwrite. Why not A: agents read the sections relevant to them, so isolation is not automatically lost. Why not B: attribution is straightforward to add and is a debugging convenience. Why not C: unbounded growth is a real secondary concern managed by pruning."
    },
    {
      id: "multiAgentOrchestration-12",
      type: "mcq",
      title: "Routing Accuracy",
      difficulty: "medium",
      points: 5,
      prompt: "A router sends each request to one of six specialists and is wrong 9 percent of the time. What is the most valuable addition?",
      options: [
        "A second router that independently classifies the request, with disagreement between the two routed to a stronger model for a final decision.",
        "A path for the specialist to hand back when a request is outside its remit, so a misroute is recoverable rather than confidently wrong.",
        "More specialists, so each covers a narrower domain and the boundaries between them become clearer for the router to distinguish.",
        "A confidence threshold on the router, below which the request goes to a general-purpose agent that can handle it without a specialist.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. No router reaches 100 percent, so the system's behaviour on a misroute matters more than shaving points off the error rate. A specialist that can recognise a request is not its own and hand back turns a wrong answer into a small delay. Why not A: a second router adds cost and latency and shares the same failure modes. Why not C: more specialists makes routing harder, not easier. Why not D: a confidence threshold is a useful complement and still leaves confident misroutes unhandled."
    },
    {
      id: "multiAgentOrchestration-13",
      type: "mcq",
      title: "Consistent Output Across Agents",
      difficulty: "medium",
      points: 5,
      prompt: "Three specialists produce answers in noticeably different tones and formats, and users notice when a conversation moves between them. What is the right fix?",
      options: [
        "Route every conversation to one specialist for its whole duration, so the user never encounters a change of voice within a single session.",
        "Merge the three specialists into one agent, since consistent user experience matters more than the benefits specialisation provides.",
        "Have a single presentation step compose the final user-facing response from specialist output, so formatting and tone are owned in one place.",
        "Add the same tone and formatting instructions to all three system prompts, so each specialist independently produces output in the shared house style.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Separate the specialist's job of being right from the job of presenting an answer. A final composition step gives one place to own voice and format, and it keeps working when a fourth specialist is added later. Why not A: pinning a conversation to one specialist hides the seam by refusing to route correctly. Why not B: it discards specialisation to solve a presentation problem. Why not D: duplicated instructions drift apart over time and depend on each model following them identically."
    },
    {
      id: "multiAgentOrchestration-14",
      type: "mcq",
      title: "Error From a Subagent",
      difficulty: "medium",
      points: 5,
      prompt: "A subagent fails partway through its task. What should it return to the caller?",
      options: [
        "Its best partial answer phrased as a normal result, since the caller can assess quality and a partial answer is more useful than a failure notice.",
        "The raw exception from whichever tool failed, so the caller has full technical detail about the underlying cause of the failure.",
        "Nothing. The failure should propagate as an exception so the caller's error handling deals with it rather than the caller's reasoning.",
        "A structured result stating that the task was not completed, what was accomplished, and why it stopped, so the caller can decide what to do next.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The caller is making a decision, so it needs the outcome as data: not completed, this much was achieved, this is what blocked it. That lets it retry differently, delegate elsewhere, or report accurately. Why not A: a partial answer presented as a complete one is how failures become silent, and callers do not reliably detect it. Why not B: raw exceptions are large, leak internals, and give the caller no basis for a decision. Why not C: an exception removes the caller's ability to route around the failure, which is a main reason to have a coordinating agent."
    },
    {
      id: "multiAgentOrchestration-15",
      type: "mcq",
      title: "Multi-Agent Where One Would Do",
      difficulty: "hard",
      points: 7,
      prompt: `A team builds five agents for a document assistant: a classifier, a retriever, a summariser, a formatter, and a coordinator.

{{diagram}}

What is the correct assessment?`,
      diagram: `flowchart LR
  R([Request]) --> C1["Coordinator"]
  C1 --> C2["Classifier"]
  C2 --> C3["Retriever"]
  C3 --> C4["Summariser"]
  C4 --> C5["Formatter"]
  C5 --> O["Latency <b>11 s</b><br/><small>was 3 s with one agent · quality unchanged</small>"]
  classDef supervisor fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef worker fill:#ffffff,stroke:#94a3b8,stroke-width:1.5px,color:#334155;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class C1 supervisor;
  class C2,C3,C4,C5 worker;
  class R source;
  class O warning;`,
      options: [
        "Quality is unchanged because the agents lack specialised tools, so giving each a distinct tool set will realise the benefit the architecture was meant to provide.",
        "The coordinator is redundant when the order is fixed, so removing it and chaining the other four directly will recover most of the lost latency.",
        "Five agents in a fixed order is a pipeline with model calls at each stage. Agency buys nothing when nothing decides, so write code that calls models where needed.",
        "The agents are too fine-grained, so they should be merged into two, a retrieval agent and a generation agent, which preserves the architecture at lower cost.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Nothing here is deciding anything. A fixed sequence of five stages is a pipeline, and wrapping each stage in an agent adds a coordination call and a non-deterministic control flow for a route that never varies. Write the sequence in code and use model calls for the stages that genuinely need one, which here is realistically summarisation and perhaps classification. Why not A: it assumes the architecture is right and looks for a way to justify it. Why not B: dropping the coordinator helps and leaves four agents doing a fixed sequence. Why not D: merging reduces the cost of the wrong shape."
    },
    {
      id: "multiAgentOrchestration-16",
      type: "mcq",
      title: "Choosing the Topology",
      difficulty: "hard",
      points: 7,
      prompt: `Requirements for a new system.

{{diagram}}

Which topology fits?`,
      diagram: `flowchart LR
  A[New system]
  A --> R1["R1 · One question needs<br/><small>four independent domain lookups</small>"]
  A --> R2["R2 · The four must run concurrently<br/><small>to meet a latency target</small>"]
  A --> R3["R3 · Final answer must be<br/><small>a single synthesised response</small>"]
  A --> R4["R4 · Each domain has<br/><small>a large body of reference material</small>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef requirement fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#0f172a;
  class A agent;
  class R1,R2,R3,R4 requirement;`,
      options: [
        "A coordinator delegating to four subagents in parallel, each isolated with its own domain material, then synthesising the summaries.",
        "Handoffs between four domain agents in sequence, with the last one synthesising, since each agent can build on what the previous one established.",
        "One agent holding all four domains' reference material, which removes coordination overhead entirely and produces a naturally unified answer.",
        "A router that classifies the question into its dominant domain and sends it to that specialist, which keeps the path short and the answer coherent.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. R2 rules out anything sequential, R4 rules out co-locating all the material in one context, and R3 requires a single point that composes the answer. Parallel delegation with isolated subagents satisfies all four: each processes only its own domain, they run concurrently, and the coordinator synthesises. Why not B: handoffs are inherently sequential and fail R2. Why not C: loading four large bodies of reference material into one context fails R4 and degrades quality. Why not D: a router picks one domain and the question needs four, so it fails R1."
    },
    {
      id: "multiAgentOrchestration-17",
      type: "mcq",
      title: "Debugging Across Agents",
      difficulty: "hard",
      points: 7,
      prompt: "A user reports a wrong answer from a system with a coordinator and six workers. Each agent logs independently with its own request identifier. What is missing?",
      options: [
        "A correlation identifier propagated from the top-level request through every delegation, so all work for one request assembles into one trace.",
        "Centralised log aggregation, so entries from all seven agents are stored in one place rather than in each agent's own log stream.",
        "Timestamps synchronised across agents, so the sequence of events can be reconstructed accurately from entries produced by different processes.",
        "Structured logging in a common format, so entries from different agents can be parsed and searched together by a single query.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Without a correlation identifier flowing through every delegation, you have seven independent logs and no way to know which entries belong to the user's request. Everything else in the list is useful and useless without it. Propagate a trace identifier at the boundary, and record the parent-child relationship so the delegation tree can be reconstructed. Why not B: aggregation puts everything in one place and still leaves you unable to select the right entries. Why not C: clock sync helps ordering once you know which events to order. Why not D: a common format makes unrelated entries easier to read."
    },
    {
      id: "multiAgentOrchestration-18",
      type: "mcq",
      title: "Cost Attribution",
      difficulty: "hard",
      points: 7,
      prompt: "A multi-agent product's cost per request is four times the estimate. Which measurement locates the excess?",
      options: [
        "The distribution of latency across agents, since time spent is a good proxy for tokens processed and is cheaper to instrument than token counting.",
        "Total tokens per request against the projection, since a single aggregate figure identifies whether the overrun is in input or output tokens.",
        "The number of agents invoked per request, since cost scales with agent count and a higher than expected count explains the multiple directly.",
        "Per-agent token accounting split by direction and attributed to the delegation tree, so you see which agent takes the excess and whether it is context or output.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A four times overrun has a location, and only per-agent accounting split by direction reveals it. The usual finding is that a coordinator resends an accumulating history to every worker, so input tokens multiply with the number of delegations rather than adding. Attributing to the delegation tree shows that immediately. Why not A: latency is a poor proxy, since a large input processes fast and a long output does not. Why not B: an aggregate confirms the overrun without localising it. Why not C: agent count is one factor and does not distinguish an expensive agent from a chatty one."
    },
    {
      id: "multiAgentOrchestration-19",
      type: "mcq",
      title: "Evaluating a Multi-Agent System",
      difficulty: "hard",
      points: 7,
      prompt: "End-to-end accuracy for a coordinator and three workers is 64 percent. How should the team find where to invest?",
      options: [
        "Run the same evaluation set through a single agent with all the tools, and treat the difference as a measure of what the multi-agent architecture contributes.",
        "Replace each worker in turn with a stronger model and measure the change in score, since the worker whose replacement moves the overall figure most is the weakest link.",
        "Evaluate the coordinator alone by scoring whether its final answers are grounded in the results the workers returned, since that isolates coordination from worker quality.",
        "Evaluate each worker on its own task, and separately evaluate the coordinator's decomposition and synthesis, since a system fails from weak workers or bad splitting.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A multi-agent system has two distinct classes of failure, and the aggregate cannot tell them apart. Workers need per-task evaluation against their own ground truth; the coordinator needs evaluating on the things only it does, namely whether it split the work correctly, briefed each worker adequately, and reassembled the results faithfully. Why not A: a useful sanity check that says whether the architecture helps, not where it fails. Why not B: model swapping is expensive, coarse, and confounds worker capability with brief quality. Why not C: grounding covers synthesis and misses decomposition, where coordinators most often fail."
    },
    {
      id: "multiAgentOrchestration-20",
      type: "mcq",
      title: "Fan-Out Under Load",
      difficulty: "hard",
      points: 7,
      prompt: `A coordinator delegates to up to eight workers per request. Under load the system shows the following.

{{diagram}}

What is happening and what is the fix?`,
      diagram: `flowchart TB
  L([Under load])
  L --> A["Coordinator CPU<br/><b>low</b>"]
  L --> B["Provider 429 rate<br/><b>high</b>"]
  L --> C["Worker queue depth<br/><b>rising</b>"]
  L --> D["End-to-end p99<br/><b>growing without bound</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class L agent;
  class A source;
  class B,C,D warning;`,
      options: [
        "The coordinator is the bottleneck despite low CPU, since it must await all eight workers before proceeding. Let it synthesise from whichever workers have returned once a deadline passes.",
        "The workers are individually too slow, so the coordinator ends up waiting on the slowest one every time. Move the workers to a faster model so each returns sooner and the queues drain.",
        "Each request becomes eight concurrent model calls, so demand is eight times the request rate and exceeds the shared quota. Bound concurrency centrally and delegate only where it earns its cost.",
        "The queue is unbounded, so work accumulates faster than it can drain. Adding more worker replicas will raise throughput until the queue stabilises at an acceptable depth again.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Fan-out multiplies demand against a quota that is shared account-wide, so a request rate that looks modest arrives at the provider as eight times that. The 429 rate confirms the constraint is upstream, and low coordinator CPU rules out the orchestrator. Meter total concurrency against the real budget, apply admission control, and reduce fan-out where a delegation is not earning its cost. Why not A: partial synthesis on a deadline is a reasonable degradation strategy and does not reduce the demand causing the 429s. Why not B: faster workers issue the same number of calls, and possibly faster. Why not D: more workers aim more calls at the same saturated quota."
    }
  ]
};
