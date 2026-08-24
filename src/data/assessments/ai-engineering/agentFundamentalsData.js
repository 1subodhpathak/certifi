import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 11 of 15 - Agent Fundamentals
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const agentFundamentalsData = {
  id: ASSESSMENT_TYPES.agentFundamentals,
  level: 11,
  title: "Agent Fundamentals",
  shortTitle: "Agent Fundamentals",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "What an agent is and when to build one: the tool-calling loop, designing tool schemas the model can actually use, the difference between an agent and a workflow, stopping conditions, and the failure modes that appear as soon as a model is allowed to choose its own next step.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Several questions describe a team about to build an agent and ask whether that is the right shape for the problem. Knowing when a deterministic workflow is better is weighted as heavily as knowing how agents work. No negative marking.",
  questions: [
    {
      id: "agentFundamentals-01",
      type: "mcq",
      title: "The Agent Loop",
      difficulty: "easy",
      points: 3,
      prompt: "What distinguishes an agent from a single model call with tools attached?",
      options: [
        "The agent has persistent memory across sessions, which is what lets it accumulate knowledge about a user rather than starting fresh each time.",
        "The agent uses a larger model with stronger reasoning, since choosing between tools requires capability that ordinary generation does not.",
        "The agent runs a loop: the model may call a tool, see the result, and decide what to do next, repeating until it decides it is finished.",
        "The agent runs tools in parallel, rather than sequentially, which lets it finish multi-step tasks inside a single request.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The loop is the defining property. A single call can request a tool; an agent feeds the result back and lets the model decide the next step, which is what makes the number of steps and their order determined at runtime rather than in advance. Why not A: memory is a feature you may add and is not what makes something an agent. Why not B: model size is unrelated to the control flow. Why not D: parallel tool calls are an optimisation available to both."
    },
    {
      id: "agentFundamentals-02",
      type: "mcq",
      title: "What the Model Sees",
      difficulty: "easy",
      points: 3,
      prompt: "How does a model know which tools it can call?",
      options: [
        "Tools are registered with the provider ahead of time and associated with an API key, so the model has them available without being told per request.",
        "The model infers available tools from the system prompt's description of its role, which is why role descriptions must enumerate every capability.",
        "It discovers them by attempting calls, observing which of them succeed, and building up a working set over the course of the conversation.",
        "Tool definitions are sent with the request as structured schemas, giving each tool's name, description and parameters, and the model selects.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Tools are part of the request payload, described as schemas the model reads on every call. This is why tool descriptions are prompt engineering: they are the only thing the model has to decide with, and it pays for them in tokens on every request. Why not A: tools are per-request, not registered against a key. Why not B: the system prompt can reinforce usage, and the schemas are what define availability. Why not C: there is no discovery loop, and a call to an undefined tool is simply invalid."
    },
    {
      id: "agentFundamentals-03",
      type: "mcq",
      title: "Who Executes the Tool",
      difficulty: "easy",
      points: 3,
      prompt: "A model emits a tool call. What happens next?",
      options: [
        "The model executes the tool inside its own sandbox and continues generating, so the caller sees only the final answer with the tool step hidden.",
        "Your code receives the tool name and arguments, executes them, and sends the result back as a new message so the model can continue.",
        "The tool call is returned to the user for confirmation, and execution begins only once the user approves the specific call and its arguments.",
        "The provider executes the tool on the model's behalf, returning the result to it, which is why definitions must include an endpoint URL.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. The model produces a structured request; your application executes it and returns the result as a message. That boundary is where every control lives: validation, authorisation, rate limiting, and human approval. Why not A: the model has no execution environment of its own. Why not C: user confirmation is a control you can add at that boundary and is not the default behaviour. Why not D: providers do not call your systems for you in a standard tool-calling loop."
    },
    {
      id: "agentFundamentals-04",
      type: "mcq",
      title: "Tool Descriptions Matter",
      difficulty: "easy",
      points: 3,
      prompt: "An agent has a tool described as \"gets data\". It is rarely called and often called wrongly. What is the fix?",
      options: [
        "Move the tool earlier in the tool list, since the model attends most strongly to the first definitions it encounters in the request.",
        "Add usage instructions to the system prompt describing when the tool should be called, keeping the tool schema itself minimal to save tokens.",
        "Write a description stating what the tool returns, when to use it and when not, and give each parameter a clear description with an example.",
        "Rename the tool to something distinctive, since the model selects on name, and the description only formats parameters.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Tool descriptions are the model's only basis for choosing, so they are prompt engineering with a schema wrapper. State what it returns, the conditions for using it, the conditions for not using it, and describe every parameter concretely. Why not A: ordering has a marginal effect next to description quality. Why not B: system prompt guidance is a useful supplement, and putting the information where the model reads the tool is more reliable. Why not D: the name helps and cannot carry the conditions for use."
    },
    {
      id: "agentFundamentals-05",
      type: "mcq",
      title: "Agent or Workflow",
      difficulty: "easy",
      points: 3,
      prompt: "A task always runs the same four steps in the same order. Should it be an agent?",
      options: [
        "No. If the steps are known in advance, write a deterministic pipeline. An agent adds latency, cost and non-determinism for a decision nobody needs to make.",
        "Yes. An agent will discover the same four steps and its reasoning about them makes the pipeline more robust to unexpected input than fixed code.",
        "Yes, but only if the four steps involve model calls. A pipeline of pure functions should stay a pipeline, while any sequence including model calls should be agentic.",
        "No, unless the steps may fail, in which case an agent is required because deterministic pipelines cannot recover from a failed step without human intervention.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Agency is for when the next step genuinely depends on what was learned in the previous one. A fixed sequence is code, and writing it as code makes it faster, cheaper, testable and reproducible. Why not B: letting a model rediscover a known sequence introduces the possibility of getting it wrong. Why not C: a pipeline of model calls is still a pipeline. Why not D: pipelines handle errors with ordinary error handling and retries."
    },
    {
      id: "agentFundamentals-06",
      type: "mcq",
      title: "Stopping",
      difficulty: "easy",
      points: 3,
      prompt: "What makes an agent loop terminate?",
      options: [
        "The model responds without a tool call, which the runtime treats as the final answer, subject to whatever step, time and cost limits the application enforces.",
        "The loop ends when a tool returns a result the model marks as sufficient, using a required completion flag in every tool response schema.",
        "The loop ends after a fixed number of iterations set at configuration time, which is the only reliable stopping condition since the model cannot signal completion.",
        "The provider ends the loop when the conversation hits the context window limit, which acts as the natural boundary on any agent's run.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The natural stop is a turn with no tool call, meaning the model considers itself done. Because a model can loop indefinitely, that must be paired with hard limits the application enforces: maximum steps, wall clock, and token budget. Why not B: there is no required sufficiency flag in tool responses. Why not C: an iteration cap is a necessary backstop rather than the only mechanism, and the model can signal completion. Why not D: hitting the context limit is a failure, not a designed stop."
    },
    {
      id: "agentFundamentals-07",
      type: "mcq",
      title: "Too Many Tools",
      difficulty: "medium",
      points: 5,
      prompt: "An agent with 40 tools selects the wrong one frequently. What are the sound options?",
      options: [
        "Order the tools by expected usage frequency, so the most commonly needed tools appear first and the model reaches the right one before considering the rest.",
        "Reduce the tool set per request from context, group related tools behind fewer higher-level ones, or route to an agent holding only the relevant subset.",
        "Improve every description until the model can distinguish all 40, since selection quality is determined by description quality, and nothing else.",
        "Move to a larger model, since tool selection across a large set is a reasoning task that scales with model capability and cannot be solved structurally.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Forty schemas is both a large context cost on every request and a hard selection problem. All three levers reduce the choice the model actually faces: filter to what this request could plausibly need, consolidate related operations behind one tool with a mode parameter, or delegate to a specialised agent with a small tool set. Why not A: ordering is a weak effect. Why not C: descriptions matter and will not make a 40-way choice easy. Why not D: a larger model helps somewhat and is an expensive way to avoid a structural fix."
    },
    {
      id: "agentFundamentals-08",
      type: "mcq",
      title: "Designing a Tool Schema",
      difficulty: "medium",
      points: 5,
      prompt: "Which tool signature is best designed for an agent?",
      options: [
        "get_orders(customer_id: string, status: enum, limit: int) with constrained parameters and a documented default, covering the access pattern needed.",
        "fetch(resource: string, params: object) as a single generic tool, so one definition covers every endpoint and the tool list stays small as the system grows.",
        "get_all_orders() returning the complete order table, letting the agent filter in its own reasoning rather than encoding filter logic in the tool interface.",
        "run_query(sql: string) with a description of the database schema, so the agent can express any query, and no new tool is ever needed.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. A narrow, typed, enumerated interface is easier for the model to call correctly, cheap to validate, and bounds what a mistake or an injected instruction can do. Constrained parameters mean invalid combinations are rejected structurally rather than reasoned about. Why not B: a generic wrapper hides the real interface, so the model gets no useful schema and validation becomes impossible. Why not C: returning entire tables wastes context and pushes filtering into the least reliable place. Why not D: free-form SQL is maximally expressive and maximally dangerous, and it makes every prompt injection a database query."
    },
    {
      id: "agentFundamentals-09",
      type: "mcq",
      title: "Tool Results in Context",
      difficulty: "medium",
      points: 5,
      prompt: "An agent calls a search tool that returns 12,000 tokens of results. What is the consequence and the standard remedy?",
      options: [
        "The result must be embedded and retrieved rather than passed directly, since raw tool output is not in a form the model can reason over effectively.",
        "The result stays in the conversation for every later step, so context grows fast and reasoning degrades. Summarise or truncate tool output before it enters the history.",
        "The result consumes the agent's step budget faster, since large tool outputs count against the maximum number of iterations the agent is permitted.",
        "The result exceeds what the model can attend to in one turn, so it should be split across several turns and fed in sequentially over the following steps.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Tool output joins the conversation and is resent on every subsequent step, so one large result is paid for repeatedly and progressively crowds out the agent's own reasoning. Summarising, truncating, or writing the full result to a store and passing back a reference are the standard remedies. Why not A: embedding tool output is occasionally useful and is not the general answer. Why not C: step budgets count steps, not tokens. Why not D: the model can attend to it; the problem is persistence and cost."
    },
    {
      id: "agentFundamentals-10",
      type: "mcq",
      title: "Tool Errors",
      difficulty: "medium",
      points: 5,
      prompt: "A tool raises an exception. What should the agent runtime send back to the model?",
      options: [
        "The full stack trace, so the model has the maximum available information, and can reason precisely about the underlying cause of the failure.",
        "Nothing. The runtime should retry silently and, if all retries fail, terminate the run rather than letting the model react to an infrastructure failure.",
        "A generic failure message identical for all errors, so the model cannot be influenced by error text that may contain untrusted content from an upstream system.",
        "A short structured message naming the tool and failure class, with guidance on whether to retry, try another approach, or report to the user.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The model needs enough to choose a next action and nothing more. Naming the tool and the failure class, plus what to do about it, lets it retry a transient failure, correct a bad argument, or stop and report. Why not A: stack traces are large, leak internals, and often contain untrusted upstream content. Why not B: silent retry then termination discards the agent's ability to route around a failure. Why not C: an undifferentiated message gives the model no basis to distinguish a bad argument from an outage."
    },
    {
      id: "agentFundamentals-11",
      type: "mcq",
      title: "Parallel Tool Calls",
      difficulty: "medium",
      points: 5,
      prompt: "A model emits three tool calls in one turn. When is it safe to execute them concurrently?",
      options: [
        "Always, since the model would have issued them sequentially if it needed the result of one before the next, so a single turn implies independence.",
        "When the calls are independent and free of ordering constraints. Reads generally qualify; calls that mutate shared state may need serialising whatever the model asked for.",
        "Only when all three target the same backend, since concurrency across different systems introduces failure modes the agent cannot reason about.",
        "Never, since the model expects results in the order it emitted them and concurrent execution can return them out of order and confuse subsequent reasoning.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Emitting calls together signals that the model believes they are independent, and that belief is not a guarantee. Read-only lookups parallelise safely; writes that touch shared state may need ordering or locking that the model knows nothing about. The runtime owns that decision. Why not A: it treats a model's implicit assumption as a correctness proof. Why not C: cross-system concurrency is routine. Why not D: results are returned matched to their call identifiers, so ordering is not the issue."
    },
    {
      id: "agentFundamentals-12",
      type: "mcq",
      title: "Bounding a Run",
      difficulty: "medium",
      points: 5,
      prompt: "Which set of limits should an agent run carry in production?",
      options: [
        "All three: a step cap, a wall-clock deadline and a token budget, since each bounds a different failure and one can be exhausted without the others.",
        "A maximum step count, so a looping agent cannot run forever, which is sufficient because every other cost is bounded by the number of steps.",
        "A wall-clock deadline, since users abandon slow requests and time is the only limit that maps directly to the user experience.",
        "A token budget, since cost is the primary operational risk and tokens are the unit in which both model calls and tool output are billed.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The three failure modes are distinct. A tight loop of cheap steps hits the step cap; a single tool call that hangs hits the deadline while using two steps; an agent making a few calls with enormous outputs hits the token budget while looking fine on both others. Why not B: steps do not bound a slow tool or a huge tool result. Why not C: a deadline alone permits a very expensive run inside the time limit. Why not D: a token budget alone permits a run that hangs indefinitely on one call."
    },
    {
      id: "agentFundamentals-13",
      type: "mcq",
      title: "Reading an Agent Trace",
      difficulty: "medium",
      points: 5,
      prompt: `An agent trace shows the following.

{{diagram}}

What does this pattern indicate?`,
      diagram: `sequenceDiagram
  participant A as AGENT
  participant T as search_docs
  A->>T: "refund window"
  T-->>A: 3 results
  A->>T: "refund window"
  T-->>A: 3 results
  A->>T: "refund policy"
  T-->>A: 3 results
  A->>T: "refund window"
  T-->>A: 3 results
  Note over A: step 5 · final answer, incorrect`,
      options: [
        "The step limit is set too low, so the agent was cut off before it could refine its query into one that would have found the answer.",
        "The search tool is returning inconsistent results between identical calls, so the agent is retrying in an attempt to obtain a stable set of documents.",
        "The results lacked the answer and the agent could not progress, so it repeated near-identical queries rather than reporting a miss.",
        "The agent's context was truncated between steps, so it lost the earlier results and re-issued the query because it no longer remembered making it.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Repeating an almost identical query is the classic signature of an agent that has not found what it needs and lacks both a better strategy and a sanctioned way to give up. The fixes are giving it an explicit not-found path, improving retrieval so the answer is findable, and detecting repeated identical calls in the runtime. Why not A: it reached a final answer within the budget, so the cap is not what stopped it. Why not B: the trace shows three results returned consistently. Why not D: truncation would show as broader loss of coherence, not a tight query loop."
    },
    {
      id: "agentFundamentals-14",
      type: "mcq",
      title: "Prompting an Agent",
      difficulty: "medium",
      points: 5,
      prompt: "How does a system prompt for an agent differ from one for a single-turn assistant?",
      options: [
        "It must be shorter, since it is resent on every step of the loop, and its token cost multiplies by the number of steps the agent takes.",
        "It must describe the available tools in full, since agents receive tool schemas only on the first step and rely on the prompt thereafter.",
        "It must give the objective, when to use which tool, what to do when one fails or returns nothing, and when to stop, since the model chooses its own path.",
        "It must avoid examples, since worked examples cause the agent to imitate the specific tool sequence shown rather than reasoning about the current task.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A single-turn prompt shapes one output; an agent prompt shapes a policy. The model is deciding what to do next at every step, so it needs the goal, guidance on tool selection, explicit handling for empty and failed results, and clear stopping criteria, which is the guidance most often missing. Why not A: cost is a real consideration and brevity is not the defining difference. Why not B: tool schemas are sent on every request. Why not D: examples of good tool sequences are often helpful, and over-imitation is a risk to manage rather than a reason to avoid them."
    },
    {
      id: "agentFundamentals-15",
      type: "mcq",
      title: "Agent Where a Pipeline Belongs",
      difficulty: "hard",
      points: 7,
      prompt: `A team builds an agent to process invoices.

{{diagram}}

Same steps every time. The agent works but is slow, costs 30 times a direct implementation, and occasionally skips validation. What is the correct assessment?`,
      diagram: `flowchart LR
  A["Extract fields"] --> B["Validate against PO"]
  B --> C["Flag discrepancies"]
  C --> D["Write to ledger"]
  B -.->|sometimes skipped| C
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class A agent;
  class C,D source;
  class B warning;`,
      options: [
        "The sequence is fixed, so it should be a deterministic pipeline with model calls only for extraction. Skipped validation is not a bug; it is what making a step optional means.",
        "The agent needs a stronger system prompt that marks validation as mandatory and forbids proceeding without it, which will make the sequence reliable without restructuring.",
        "The agent should be given fewer tools so the choice at each step is simpler, which will make it follow the intended sequence reliably and reduce cost.",
        "The agent should validate its own output at the end by checking that every required step was actually performed, and retrying the whole run whenever it finds that one was missed.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Handing a known sequence to a model means asking it to rediscover the right answer on every invoice and accepting that it will sometimes decide otherwise. Validation being skipped is not a defect in the prompt; it is what optional means. Code the sequence, and use the model for the genuinely uncertain part, which is extraction. Why not B: a stronger instruction reduces the frequency without changing the fact that compliance is discretionary. Why not C: fewer tools does not make a step mandatory. Why not D: a self-check retry adds cost and asks the same unreliable component to audit itself."
    },
    {
      id: "agentFundamentals-16",
      type: "mcq",
      title: "The Tool That Is Too Powerful",
      difficulty: "hard",
      points: 7,
      prompt: "A support agent has a tool execute_sql(query) against the production database, described as read-only. Reviewers are uneasy. What is the strongest objection?",
      options: [
        "Read-only is a claim about intent, not an enforced property, and the blast radius is every row the connection can read. Any injected instruction becomes a query.",
        "SQL generation quality varies with schema complexity, so the agent will produce incorrect queries on unfamiliar tables and return wrong answers confidently.",
        "Free-form SQL costs many tokens to express and to parse, so a parameterised tool would be cheaper and faster, and just as capable in practice.",
        "The model may generate inefficient queries that lock tables or scan large volumes, degrading production performance during periods of heavy agent usage.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The interface defines the capability. A tool that accepts arbitrary SQL grants everything the database connection can do, so the only real controls are a genuinely read-only credential scoped to the minimum necessary tables, and ideally replacing free-form SQL with parameterised operations. Once untrusted text can reach this agent, that capability is reachable by an attacker. Why not B: query correctness is a quality problem, not the reason reviewers should refuse this. Why not C: token cost is trivial next to the security exposure. Why not D: performance risk is real and recoverable."
    },
    {
      id: "agentFundamentals-17",
      type: "mcq",
      title: "Non-Deterministic Step Count",
      difficulty: "hard",
      points: 7,
      prompt: "An agent completes the same class of task in 3 steps sometimes and 11 steps other times, with the same quality of final answer. Which consequences matter most in production?",
      options: [
        "Variance makes the agent impossible to evaluate, since two runs on the same input are not comparable and no metric can be computed across them.",
        "Latency and cost per request become unpredictable, capacity planning gets harder, and every timeout must be sized for the worst case, wasting headroom on typical requests.",
        "The variance shows the agent is unreliable, so the answers it produces in 11 steps should carry lower confidence than the ones produced in 3.",
        "Longer runs accumulate more context, so the 11-step runs are more likely to exceed the window and should be capped at the observed median step count.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Variable step count is inherent to agency and mostly acceptable, but it makes the operational envelope wide: p99 latency and cost sit far above the median, and every limit has to be sized for the tail. That is a capacity and product decision, and it is why step distribution is worth monitoring as a first-class metric. Why not A: evaluation across variable runs is routine, scoring the outcome rather than the path. Why not C: the scenario states final quality is the same, so step count is not a confidence signal here. Why not D: capping at the median would truncate legitimate longer runs."
    },
    {
      id: "agentFundamentals-18",
      type: "mcq",
      title: "Agent Confidently Reports Success",
      difficulty: "hard",
      points: 7,
      prompt: "An agent is asked to update a customer record. It calls the update tool, the tool returns an error, and the agent replies \"I have updated the record.\" What is the underlying problem?",
      options: [
        "The agent lacked sufficient context about the record, so it could not tell whether the error indicated a genuine failure or a benign no-op on an unchanged field.",
        "The tool's error message was not descriptive enough for the model to recognise it as a failure, so a clearer error string would prevent the misreport.",
        "The model was not instructed to verify its work, so a follow-up read after every write would catch cases where the update did not take effect.",
        "Nothing verifies the agent's claim against what happened. The outcome lives in the tool results, so the runtime must decide success rather than trust the narration.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A model's summary is generated text, not a status report, and it will sometimes describe an intended action rather than an actual one. Any outcome that matters must be determined from the tool result by code: check the return, and derive the user-facing claim from that rather than from the model's prose. Why not A: the error was returned, so the information was present and simply not treated as authoritative. Why not B: better error text lowers the frequency and leaves the trust model unchanged. Why not C: read-after-write is a genuinely useful pattern and still routes the conclusion through the model's narration."
    },
    {
      id: "agentFundamentals-19",
      type: "mcq",
      title: "Choosing the Shape",
      difficulty: "hard",
      points: 7,
      prompt: "Which requirement most strongly indicates an agent rather than a fixed workflow?",
      options: [
        "The task takes user input in natural language, which means the sequence of operations cannot be determined until the input has been interpreted by a model.",
        "The task involves several tools and multiple model calls, which a single call cannot accomplish and which therefore requires an agent loop to coordinate.",
        "The task must handle occasional tool failures, which requires runtime decisions about retrying or trying an alternative approach that fixed code cannot express.",
        "The number and order of steps depend on what earlier steps reveal, and the branching is wide enough that enumerating the paths in advance is impractical.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Agency earns its cost when the path genuinely cannot be known in advance and the space of paths is too wide to enumerate. That is the one thing a fixed workflow cannot express and a loop can. Why not A: interpreting input can be a single classification call that then selects among a handful of known workflows. Why not B: multiple tools and calls describe most pipelines, which stay pipelines. Why not C: retry and fallback are ordinary error handling that deterministic code does well."
    },
    {
      id: "agentFundamentals-20",
      type: "mcq",
      title: "Cost of an Agent Turn",
      difficulty: "hard",
      points: 7,
      prompt: "An agent averages 6 steps. Each step resends the full conversation, and tool results average 2,000 tokens. What dominates cost, and what is the highest-leverage change?",
      options: [
        "Output tokens dominate, since each step generates reasoning at the higher rate, so telling the agent to be brief is the largest saving.",
        "Input dominates, since every step resends prior tool output, so 6 steps re-process the same results. Trim or summarise output before it enters history.",
        "The number of steps dominates, so reducing the average from 6 to 3 by giving the agent better tools would roughly halve the cost of a run.",
        "Tool execution dominates, since the tools call downstream systems whose real cost never appears in the token accounting at all.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Accumulation is the effect people miss. Six steps with 2,000 token results means the first result is re-processed six times, the second five, and so on, so input grows roughly with the square of the step count. Trimming tool output attacks the term that is growing fastest. Why not A: agent reasoning per step is short next to tool output, even at the higher output rate. Why not C: fewer steps helps and is a consequence of better tools rather than a direct lever, and it does not address the per-step payload. Why not D: downstream cost is real and outside the token question being asked."
    }
  ]
};
