import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 12 of 15 - Agent Reliability
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const agentReliabilityData = {
  id: ASSESSMENT_TYPES.agentReliability,
  level: 12,
  title: "Agent Reliability",
  shortTitle: "Agent Reliability",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Making an agent survive contact with production: durable state and checkpointing, resuming after a crash, human-in-the-loop approval, circuit breakers for loops, tool failure handling, idempotency and duplicate side effects, and the observability needed to debug a run you cannot reproduce.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Every question assumes the agent already produces good answers on a laptop and asks what happens when a worker is killed, a tool times out, or a human takes three days to approve. No negative marking.",
  questions: [
    {
      id: "agentReliability-01",
      type: "mcq",
      title: "Why State Must Be External",
      difficulty: "easy",
      points: 3,
      prompt: "An agent holds its run state in process memory. What breaks first in production?",
      options: [
        "State cannot be inspected while a run is executing, so debugging a misbehaving agent requires reproducing the problem from the beginning.",
        "Concurrent runs can interfere with one another through shared process state, producing cross-contamination between unrelated user requests.",
        "Memory usage grows with concurrent runs until the process is exhausted, which limits how many agents can execute at once on a single host.",
        "Any deploy, crash or restart destroys every in-flight run, and no other replica can take over a run that a failed one was holding.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Deploys happen constantly, so in-memory runs die routinely rather than exceptionally. Persisting state at each step lets any replica resume and makes a restart survivable. Why not A: poor introspection is a consequence of the same design and a milder one. Why not B: cross-contamination indicates a specific bug rather than the general consequence of in-memory state. Why not C: memory pressure is real and appears later than the first deploy."
    },
    {
      id: "agentReliability-02",
      type: "mcq",
      title: "What a Checkpoint Holds",
      difficulty: "easy",
      points: 3,
      prompt: "An agent checkpoints after each step. What must the checkpoint contain to allow a resume?",
      options: [
        "The conversation so far including tool calls and results, plus accumulated working state, so the next step computes exactly as it would have.",
        "The original user request and the current step number, since the agent can regenerate the intermediate steps deterministically when it resumes.",
        "A summary of progress so far, which keeps checkpoints small while giving the resumed run enough context to continue toward the goal.",
        "The final answer produced so far, so a resumed run can continue appending to it rather than restarting the response from the beginning.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Resume means computing the next step as though nothing happened, which requires everything the next step would have read: the full message history including tool results, and any state the agent has built up. Why not B: the steps are not deterministic and cannot be regenerated; replaying them would repeat tool calls with side effects. Why not C: a summary loses detail the next step may depend on and makes resume lossy. Why not D: the partial answer is a small part of the state that matters."
    },
    {
      id: "agentReliability-03",
      type: "mcq",
      title: "Which Tools Need Approval",
      difficulty: "easy",
      points: 3,
      prompt: "An agent has tools to read a calendar, search documents, send an email, and delete a file. Which should require human approval?",
      options: [
        "All four, since a uniform policy is simpler to audit and prevents any gap opening as new tools are added to the agent over time.",
        "The two read tools, since they are the ones that can pull sensitive content into the model's context where it may be repeated in an answer.",
        "Send email and delete file, since both have external irreversible effects, while the reads can run freely to keep the agent fast.",
        "Delete file only, since it is the sole irreversible operation and email can be recalled or corrected by a follow-up message if it goes wrong.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Gate on blast radius. Sending an email and deleting a file both reach outside the system and cannot be cleanly undone; reads are recoverable and gating them would slow every run for little benefit. Why not A: approving reads trains reviewers to click through, which weakens the gate where it matters. Why not B: it inverts the risk ordering. Why not D: a sent email cannot be unsent, and a wrong one to a customer is a real incident."
    },
    {
      id: "agentReliability-04",
      type: "mcq",
      title: "Approve, Edit, Reject",
      difficulty: "easy",
      points: 3,
      prompt: "A human-in-the-loop gate offers approve, edit and reject. Why does edit matter as much as approve?",
      options: [
        "Edit lets the reviewer change which tool is called, redirecting the agent to a safer operation when it has selected the wrong one entirely.",
        "Edit lets the reviewer add a note to the agent's context so it learns from the correction and avoids the same mistake later in the run.",
        "Edit lets the reviewer adjust the approval threshold for subsequent calls, so similar operations can proceed without interrupting them again.",
        "Edit lets the reviewer correct the arguments before execution, since one tool with different arguments can be routine or catastrophic.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The tool name is rarely the risk; the arguments are. Deleting a temporary file and deleting a production directory are the same tool call with different arguments, so a gate that only offers yes or no forces a reviewer to reject and restart over a single wrong parameter. Why not A: substituting a different tool is unusual and is closer to rejecting. Why not B: adding guidance is a separate and useful capability. Why not C: threshold changes are a policy control rather than what edit means."
    },
    {
      id: "agentReliability-05",
      type: "mcq",
      title: "Circuit Breakers",
      difficulty: "easy",
      points: 3,
      prompt: "Why must loop protection live in the orchestration layer rather than in the prompt?",
      options: [
        "Prompt instructions consume tokens on every step, so enforcing limits in code avoids the cost of restating the rule throughout a long run.",
        "The prompt is visible to the model and could be overridden by injected content, whereas orchestration code sits outside anything the model can influence.",
        "An agent stuck in a loop is failing to reason correctly, so the component whose judgement has already failed cannot be relied on to detect and stop it.",
        "Orchestration code can count steps precisely while a model can only estimate how many times it has repeated an action within its context.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A loop means the model's judgement has already broken down, so asking that same judgement to notice and stop is asking the failed component to detect its own failure. Termination has to be enforced by something that cannot be reasoned out of. Why not A: token cost is a minor consideration. Why not B: injection resistance is a genuine additional benefit and not the primary reason. Why not D: counting accuracy is a symptom of the same underlying point."
    },
    {
      id: "agentReliability-06",
      type: "mcq",
      title: "Tracing an Agent Run",
      difficulty: "easy",
      points: 3,
      prompt: "What must a trace capture to make a failed agent run diagnosable?",
      options: [
        "A sampled subset of steps, since capturing every step of every run is prohibitively expensive at production volume and adds latency to each call.",
        "The user's request and the final output, plus total latency and token count, which together characterise the run and allow comparison against successful ones.",
        "Every step: model input and output, each tool call with arguments and result, timings and decision points, so the run can be read.",
        "The model's reasoning text from each step, since that is where the agent explains its intent and is where a wrong decision will be visible.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Agent runs are not reproducible, so the trace is the only record of what happened. You need each model input and output, every tool call with arguments and result, and the timings, because the failure could be at any step and you will not get a second chance to observe it. Why not A: sampling is a cost lever for high volume, and the failing run is exactly the one you cannot afford to have missed. Why not B: input and output tell you it failed, never where. Why not D: reasoning text describes intent, which may not match what was executed."
    },
    {
      id: "agentReliability-07",
      type: "mcq",
      title: "Resuming After a Crash",
      difficulty: "medium",
      points: 5,
      prompt: "A worker dies mid-run. The last checkpoint was written after step 4. Step 5 had called a payment tool that succeeded. What happens on resume, and what prevents harm?",
      options: [
        "The run cannot resume, since state after step 5 was never persisted, so the safest behaviour is to fail it and require a manual intervention.",
        "The run resumes at step 5 and calls the payment tool again. Only an idempotency key on the call prevents a second charge, since the checkpoint has no record of the first.",
        "The run resumes at step 5 and the runtime spots the earlier attempt in the tool's audit log, skipping the call and continuing with the recorded result.",
        "The run resumes at step 4 and re-executes it, which is safe because step 4 completed and was checkpointed, so no side effect gets repeated twice.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. The checkpoint records what was committed, and step 5's outcome was not. A resumed run therefore repeats it, and nothing in the agent framework knows a charge already happened. The protection has to live at the tool boundary as a deterministic idempotency key derived from run and step identity, so the provider recognises the repeat. Why not A: failing every such run is safe and unusable at any volume. Why not C: there is no automatic audit-log reconciliation unless you build it, and it races with visibility delays. Why not D: resuming at step 4 still leads into step 5 and the duplicate call."
    },
    {
      id: "agentReliability-08",
      type: "mcq",
      title: "Long Human Waits",
      difficulty: "medium",
      points: 5,
      prompt: "An agent pauses for an approval that typically takes two days. What must the design do?",
      options: [
        "Poll the approvals store on a schedule from within the run, keeping the agent alive and letting it continue immediately once a decision appears.",
        "Split into two independent runs, the second reconstructing context from a database record written by the first, so neither run has to survive the wait.",
        "Hold the run in a background worker with a long timeout, persisting state periodically so a restart during the wait loses at most a few minutes of progress.",
        "Persist the run state and release all resources, then resume from the checkpoint when approval arrives, so nothing is held during the wait.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A two-day pause must cost nothing while it waits. Persist, exit, and let the approval event resume the stored run from the pause point. That survives deploys, restarts and scale-to-zero, and holds no worker. Why not A: polling holds a worker for two days doing nothing and does not survive a restart. Why not B: reconstructing from a database row loses whatever was not explicitly serialised into it, including the reasoning trace. Why not C: a long-lived worker still dies on deploy, and periodic snapshots leave a lossy window."
    },
    {
      id: "agentReliability-09",
      type: "mcq",
      title: "Side Effects Before a Pause",
      difficulty: "medium",
      points: 5,
      prompt: "A framework resumes a paused step by re-executing it from the beginning and replaying the stored human response. What must the author of that step avoid?",
      options: [
        "Returning a value from the step, since the resumed execution overwrites it and the first execution's return is discarded silently.",
        "Calling more than one tool in the step, since only the first tool result is replayed and later calls would execute a second time against live systems.",
        "Performing non-idempotent side effects before the pause, since everything ahead of the pause point runs again on resume and will happen twice.",
        "Reading external state before the pause, since values fetched on the first execution may differ on resume and produce inconsistent behaviour.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Resume restarts the step rather than continuing from the pause line, so every statement before the pause executes a second time. A write, an email or an audit insert placed there happens twice on every approved run. Move side effects into an earlier step, or make them idempotent under a deterministic key. Why not A: the return value is taken from the completing execution, which is the intended behaviour. Why not B: multiple tool calls are fine as long as they are ordered consistently and free of side effects before the pause. Why not D: re-reading state is usually harmless and occasionally desirable."
    },
    {
      id: "agentReliability-10",
      type: "mcq",
      title: "Retry With New Information",
      difficulty: "medium",
      points: 5,
      prompt: "An agent's tool call fails because an argument was invalid. What is the correct retry?",
      options: [
        "Terminate the run, since a validation failure indicates the agent misunderstood the task and continuing risks compounding the error further.",
        "Return the validation error to the model with enough detail to correct the argument, and let it issue a corrected call, bounded by a retry limit.",
        "Retry with the argument omitted, so the tool applies its default value and the call succeeds without requiring another model call to fix it.",
        "Retry the identical call with backoff, since transient validation failures can occur under load and the same arguments may be accepted on a later attempt.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. A validation failure is deterministic, so an identical retry fails identically. It is also exactly the kind of error the model can fix if told what was wrong, which makes it the case where feeding the error back is most valuable. Bound the attempts so a model that cannot correct it does not loop. Why not A: terminating discards a recoverable situation. Why not C: silently dropping an argument changes the operation's meaning without anyone deciding to. Why not D: backoff is for transient failures and this is not one."
    },
    {
      id: "agentReliability-11",
      type: "mcq",
      title: "Detecting a Stuck Agent",
      difficulty: "medium",
      points: 5,
      prompt: "Which runtime signal most reliably indicates an agent is stuck rather than working hard?",
      options: [
        "Repetition: the same tool called with the same or near-identical arguments across steps, or state that has not changed between consecutive checkpoints.",
        "Step count approaching the configured maximum, since a run that needs most of its budget is usually one that has failed to converge on an answer.",
        "Elapsed time past the expected duration for the task class, since a run taking far longer than its peers is the clearest evidence something has gone wrong.",
        "Rising token consumption without a corresponding increase in the number of distinct tools called, indicating the agent is generating text without acting.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Repetition without state change is the direct signature of no progress, and it can be detected cheaply by hashing tool calls and comparing checkpoints. It also fires early, before the step or time limit is reached, which leaves room to intervene rather than just terminate. Why not B: approaching the cap is a late signal and some hard tasks legitimately do. Why not C: elapsed time is a useful backstop that cannot distinguish a slow tool from a loop. Why not D: it is a reasonable heuristic and can also describe legitimate long reasoning."
    },
    {
      id: "agentReliability-12",
      type: "mcq",
      title: "Partial Failure",
      difficulty: "medium",
      points: 5,
      prompt: "An agent completes 7 of 10 sub-tasks, then fails irrecoverably. What should the system do?",
      options: [
        "Retry the whole run from the beginning, since the first 7 sub-tasks succeeded once and are likely to succeed again on a fresh attempt.",
        "Persist what completed, report which sub-tasks succeeded and which did not, and make the run resumable so the rest runs without redoing the first 7.",
        "Roll back the 7 completed sub-tasks so the system returns to its state before the run began, leaving no partial work behind for anyone to reconcile.",
        "Report the failure to the user, since a partially completed task cannot be trusted and the safest outcome is to treat the entire run as unsuccessful.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Partial progress is real work with real side effects, and both discarding it and hiding it are wrong. Record exactly what completed, tell the user in those terms, and support resuming from the boundary. Why not A: re-running completed sub-tasks repeats their side effects unless every one is idempotent. Why not C: rollback is often impossible, since sent emails and external writes do not unwind. Why not D: reporting total failure after seven real changes misrepresents the system state."
    },
    {
      id: "agentReliability-13",
      type: "mcq",
      title: "Timeout Inside a Step",
      difficulty: "medium",
      points: 5,
      prompt: "A tool call hangs. The agent has a 10-minute wall-clock budget for the whole run. What should the runtime do?",
      options: [
        "Escalate to a human when a call exceeds its expected duration, since a hang may indicate an incident that an operator should see immediately.",
        "Apply a per-tool timeout well below the run budget, cancel the hanging call, and return a timeout error to the model so it can choose an alternative path.",
        "Let the run budget handle it, since a hanging call will eventually trip the overall deadline and terminating there is simpler than managing per-tool limits.",
        "Retry the tool call in parallel after a delay and use whichever attempt returns first, so a single slow instance does not block the run.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Nested budgets are the point: a per-call timeout leaves the run enough remaining budget to recover, whereas letting one call consume the entire allowance guarantees the run dies with nothing to show. Returning the timeout to the model lets it try another route. Why not A: escalating every slow call floods operators. Why not C: it converts a recoverable single-tool failure into total run failure. Why not D: hedged requests are a real technique for idempotent reads and dangerous for anything with side effects."
    },
    {
      id: "agentReliability-14",
      type: "mcq",
      title: "Approval Fatigue",
      difficulty: "medium",
      points: 5,
      prompt: "An agent requires approval for every write. Reviewers approve 98 percent of requests within seconds, and a harmful call recently slipped through. What is the correct response?",
      options: [
        "Require two separate approvers for every write, since a second reviewer is likely to catch whatever the first one missed and the additional cost is fairly modest.",
        "Replace human approval with an automated policy check, since a reviewer approving 98 percent of requests is adding no value the policy engine cannot provide.",
        "Add a mandatory delay before any approval can be submitted, so that reviewers cannot approve reflexively and are forced to spend real time on each decision.",
        "Gate only the genuinely consequential calls, surface the arguments and their blast radius in the request, and route high-risk categories to a reviewer able to judge them.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A 98 percent approval rate means the gate is mostly noise, and reviewers rationally stop reading. Gating less, and presenting what actually differs about the risky call, restores attention where it matters. Why not A: two inattentive reviewers are not much better than one, and the cost is doubled. Why not B: automated policy checks are an excellent complement and cannot handle the judgement cases that are precisely why a human is in the loop. Why not C: forced delay adds friction without adding information and gets worked around."
    },
    {
      id: "agentReliability-15",
      type: "mcq",
      title: "Duplicate Side Effects",
      difficulty: "hard",
      points: 7,
      prompt: `An agent that creates support tickets produces duplicates roughly once per thousand runs.

{{diagram}}

What is the cause and the fix?`,
      diagram: `flowchart TB
  T["create_ticket tool<br/><small>retry with backoff on network timeout</small>"]
  T --> A["Ticket API<br/><b>not idempotent</b>"]
  A --> D["Duplicates<br/><small>always identical in content</small><br/><b>~1 per 1,000 runs</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef danger fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class T agent;
  class A warning;
  class D danger;`,
      options: [
        "The agent occasionally calls the tool twice because the model emits the same call in consecutive steps, so the runtime should deduplicate identical calls within a run.",
        "The retry policy uses too short a backoff, so a slow but successful request is retried before it completes. Raising the initial delay past the API's p99 removes the overlap.",
        "The runtime resumes from a checkpoint written before the call, so the ticket is created once per resume. Checkpoint before the tool call rather than after it.",
        "The timeout fires after the request reached the server and succeeded, so the retry creates a second ticket. Send a deterministic idempotency key so the API sees the repeat.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A client timeout tells you nothing about whether the server acted. At roughly one in a thousand, the request lands in the window where it succeeded but the response was lost, and the retry creates a second identical ticket. Identical content is the giveaway. The fix belongs at the API boundary, as a key derived deterministically from run and step so both attempts carry the same one. Why not A: model-level duplication would not correlate with retries or produce byte-identical tickets at that rate. Why not B: a longer delay shrinks the window without closing it. Why not C: checkpointing earlier turns a duplicate into a silently skipped ticket."
    },
    {
      id: "agentReliability-16",
      type: "mcq",
      title: "The Agent That Cannot Give Up",
      difficulty: "hard",
      points: 7,
      prompt: "An agent asked for information not present in any accessible system tries eight tools, then fabricates an answer. Which combination fixes this?",
      options: [
        "Reduce the tool set so the agent runs out of options sooner and reaches a conclusion before it has accumulated enough context to fabricate a plausible answer.",
        "Add a sanctioned not-found outcome, instruct the agent to use it, verify the answer against the tool results obtained, and cap steps so exhaustion is deliberate.",
        "Instruct the agent never to state anything it has not verified with a tool, which addresses the fabrication directly without changing the loop's structure.",
        "Increase the step budget so the agent can search more thoroughly, since eight tools may simply have been too few to locate information that does exist somewhere.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Fabrication here is a structural gap: the agent has no permitted way to fail, so producing an answer is the only path to completion. Give it an explicit not-found outcome, check the final answer against what the tools actually returned rather than trusting the narration, and bound the search so exhaustion is a designed state. Why not A: fewer tools reduces capability and does not create a way to conclude nothing was found. Why not C: an instruction not to fabricate is the same class of control that already failed. Why not D: more steps extends a futile search and makes fabrication more likely, not less."
    },
    {
      id: "agentReliability-17",
      type: "mcq",
      title: "Debugging Without Reproduction",
      difficulty: "hard",
      points: 7,
      prompt: "A customer reports the agent did something wrong three days ago. The run cannot be reproduced: the corpus has changed, the model alias moved, and sampling is non-deterministic. What makes this investigable?",
      options: [
        "A complete stored trace of the run: every model input and output, every tool call and result, the model version and retrieved context, so it can be read not re-run.",
        "A deterministic replay capability that re-runs the stored inputs against a pinned model version at temperature zero, reproducing the original run exactly.",
        "Aggregate metrics broken down by hour, so that the run in question can be located within a broader pattern of degraded behaviour across that day.",
        "A snapshot of the corpus taken daily, so the retrieval state of three days ago can be restored and the query re-issued against the correct index version.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Agent runs are one-time events, so the trace is the artifact of record and has to be complete enough to read the decision path without re-execution. That is why full-fidelity tracing is not optional for agents in the way it might be for a stateless endpoint. Why not B: replay still cannot reproduce the original, since the same inputs at temperature zero can diverge and the surrounding systems have moved. Why not C: aggregates cannot explain one run. Why not D: corpus snapshots help reconstruct one input among many and do not capture what the model did with it."
    },
    {
      id: "agentReliability-18",
      type: "mcq",
      title: "Compensating Actions",
      difficulty: "hard",
      points: 7,
      prompt: "A multi-step agent books a flight, then a hotel, then a car. The hotel booking fails. What is the correct design?",
      options: [
        "Retry the hotel booking until it succeeds or the budget is exhausted, since the flight is already committed and abandoning it wastes a real purchase.",
        "Reserve all three provisionally and confirm them together at the end, so no step is committed until every step is known to be available.",
        "Define a compensating action per committed step and run them in reverse on failure, accepting that compensation is best-effort and must be recorded and surfaced.",
        "Order the steps so that the least reversible action always runs last, which means the flight should be booked only after the hotel and the car are secured.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. There is no distributed transaction across three vendors, so the workable pattern is compensation: an explicit undo per committed step, run in reverse, with the honest caveat that a cancellation can itself fail or incur a fee. That has to be recorded and surfaced to a human rather than assumed. Why not A: unbounded retry on an unavailable hotel does not make it available. Why not B: provisional holds are the better design where every vendor supports them, which is exactly what cannot be assumed. Why not D: reordering by reversibility is genuinely good practice and reduces exposure without removing the need for compensation."
    },
    {
      id: "agentReliability-19",
      type: "mcq",
      title: "Reading a Reliability Report",
      difficulty: "hard",
      points: 7,
      prompt: `An agent platform reports the following over a week.

{{diagram}}

What is the priority?`,
      diagram: `flowchart TB
  S["Runs started<br/><b>48,200</b>"]
  S --> C["Completed<br/><b>44,100</b><br/><small>average 5.4 steps</small>"]
  S --> K["Terminated by step cap<br/><b>3,900</b><br/><small>average 25.0 steps · cap is 25</small>"]
  S --> E["Failed with an error<br/><b>200</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  class S agent;
  class C safe;
  class K warning;
  class E source;`,
      options: [
        "The 3,900 capped runs, since every one hit the cap exactly rather than spreading below it, the signature of looping rather than working. Find what they share.",
        "The completion rate of 91 percent, which should be raised toward 99 percent by adding retries around whichever step most commonly precedes a termination.",
        "The 200 errors, since they are unhandled failures, and unhandled failures are always a higher priority than a configured limit that is behaving exactly as intended.",
        "Raise the step cap, since 8 percent of runs are hitting it and completed runs average only 5.4 steps, which shows the cap is set too close to normal usage.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The distribution is the tell. Completed runs finish in about 5 steps while capped runs sit exactly at 25, with nothing in between, so these are not runs that needed a little more room; they are runs that would have gone forever. Eight percent of traffic is looping, burning 25 steps each, and finding what they share is the highest-value investigation on the page. Why not B: it treats the symptom without asking why runs terminate. Why not C: 200 errors is 0.4 percent and worth fixing after a 20 times larger problem. Why not D: raising the cap makes each looping run more expensive."
    },
    {
      id: "agentReliability-20",
      type: "mcq",
      title: "State Growth Over a Long Run",
      difficulty: "hard",
      points: 7,
      prompt: "An agent handling a multi-hour task fails at step 60 with a context length error, having succeeded through step 59. What is the durable design?",
      options: [
        "Reset the context at a fixed step interval, keeping only the original request, so the agent always operates within a bounded window regardless of run length.",
        "Raise the model's context limit by moving to a longer-context model, which removes the failure for runs of this length and defers the problem to much longer ones.",
        "Manage context as a first-class concern: write large tool results to a store and keep references, summarise finished phases, and keep only what later steps need.",
        "Cap the number of steps below the point where context typically overflows, so a run fails early and predictably rather than after an hour of accumulated work.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Any long-running agent accumulates context until it exceeds the window, so context management has to be part of the design rather than a limit you hope not to reach. Offloading bulky tool output to a store with references, compacting finished phases into summaries, and pruning what later steps do not need keeps the window bounded no matter how long the run goes. Why not A: a blind periodic reset discards information later steps depend on. Why not B: a larger window postpones the same failure and costs more per step throughout. Why not D: failing earlier is more predictable and still fails."
    }
  ]
};
