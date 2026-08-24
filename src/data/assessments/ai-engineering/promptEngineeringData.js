import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 4 of 15 - Prompting and Structured Output
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const promptEngineeringData = {
  id: ASSESSMENT_TYPES.promptEngineering,
  level: 4,
  title: "Prompting and Structured Output",
  shortTitle: "Prompting",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Treating the prompt as an engineered artifact: message roles, few-shot design, when reasoning steps help and when they hurt, schema-constrained output, prompt caching and prefix stability, reproducibility, and how to tell a real prompt improvement from a lucky one.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Several questions describe a prompt that is failing in production and ask for the fix that addresses the cause rather than the symptom. No negative marking.",
  questions: [
    {
      id: "promptEngineering-01",
      type: "mcq",
      title: "Message Roles",
      difficulty: "easy",
      points: 3,
      prompt: "A chat request carries system, user and assistant messages. What is the system message for?",
      options: [
        "Standing instructions that frame the whole conversation: the assistant's role, rules, tone and output format, applied on every turn.",
        "Diagnostic metadata for the provider, such as the application name and request identifier, which is logged but never shown to the model.",
        "The single most recent instruction from the user, promoted into a privileged position so that it takes precedence over the rest of the conversation history.",
        "A hidden preamble the provider inserts on your behalf, which your own instructions are appended to rather than being able to replace.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The system message carries persistent framing: who the assistant is, what it must and must not do, and how to format answers. It is prepended to the conversation and conditions every turn. Why not B: it is model input, not telemetry. Why not C: user instructions go in user messages; the system message is authored by you, not promoted from the user. Why not D: you author the system message directly; there is no provider preamble your text is merely appended to."
    },
    {
      id: "promptEngineering-02",
      type: "mcq",
      title: "Few-Shot Examples",
      difficulty: "easy",
      points: 3,
      prompt: "Adding three worked examples to a prompt reliably improves output on a classification task. What are the examples doing?",
      options: [
        "Demonstrating the task format and decision boundary in context, so the model conditions on a concrete pattern rather than inferring it from prose.",
        "Increasing the amount of context available, which raises the compute the model spends on the request and therefore its accuracy.",
        "Teaching the model the task from scratch, since without examples it has no representation of the categories being distinguished.",
        "Temporarily fine-tuning the model on those examples for the duration of the request, after which the adjustment is discarded.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Examples make the expected input-output mapping concrete: the format, the label set, the granularity of judgement. The model conditions on that pattern rather than guessing what your prose description meant. Why not B: padding the context with unrelated text does not improve accuracy, so volume is not the mechanism. Why not C: capability comes from training; examples elicit and shape it rather than installing it. Why not D: no weights change; this is conditioning, not fine-tuning."
    },
    {
      id: "promptEngineering-03",
      type: "mcq",
      title: "Instructions That Do Not Work",
      difficulty: "easy",
      points: 3,
      prompt: "A team adds \"Only state facts you are certain about. Do not make anything up.\" to their system prompt. Hallucination rates barely move. Why?",
      options: [
        "The instruction sits in the system message, which the model weights less heavily than user messages, so moving it into the user turn would be enough to make it effective.",
        "The instruction is too short to shift behaviour, and expanding it into a detailed policy with examples of correct refusals would make it take effect.",
        "The wording is negative, and negated instructions are consistently ignored, so rephrasing it as a positive directive would produce the intended behaviour.",
        "The model has no reliable internal signal for what it does and does not know, so an instruction to report certainty cannot be followed even when it tries to comply.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The instruction asks for a capability that does not exist. A fabricated fact is generated by the same process as a true one, and there is no calibrated internal certainty to consult. Reducing hallucination needs grounding in retrieved sources, citation requirements that can be checked, or verification after generation. Why not A: role placement has modest effects and does not create a missing capability. Why not B: length is not the constraint. Why not C: negative phrasing is somewhat weaker but this instruction fails in either form."
    },
    {
      id: "promptEngineering-04",
      type: "mcq",
      title: "Asking for a Format",
      difficulty: "easy",
      points: 3,
      prompt: "You need machine-readable output. Which prompt-level approach is most reliable?",
      options: [
        "Specify the exact schema with field names, types and a valid example, and use the provider's structured-output mode where available.",
        "Ask for JSON and set temperature to zero, which makes the output deterministic and therefore guarantees that it will parse on every request.",
        "Ask for JSON and request a natural-language explanation alongside it, so a human can resolve any case where the machine-readable part fails to parse.",
        "Ask for JSON, then repair the common problems in your own parser, since models cannot be constrained to a format and post-processing is the only workable option.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Be explicit about the schema and, where the provider supports it, constrain decoding so invalid tokens cannot be emitted at all. That converts a probabilistic hope into a structural guarantee. Why not B: determinism means the same output every time, not a valid one; a consistently malformed response is still malformed. Why not C: mixing prose into the response is a common cause of parse failures rather than a remedy for them. Why not D: it gives up a real capability; constrained decoding exists precisely so parsers do not have to repair output."
    },
    {
      id: "promptEngineering-05",
      type: "mcq",
      title: "Reasoning Before Answering",
      difficulty: "easy",
      points: 3,
      prompt: "For a multi-step task, which prompt structure is most likely to produce a correct final answer?",
      options: [
        "Ask for the answer only, with a note that the model should reason internally before responding, keeping the response short and the cost low.",
        "Ask for the reasoning steps first and the answer at the end, so each step conditions on the results of the steps before it.",
        "Ask for the answer three separate times in the same response and instruct the model to return whichever value it produced most often.",
        "Ask for the answer first and the reasoning after, so the answer is not biased by whatever the model happened to write while working through it.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Order matters because generation is left to right. Reasoning written before the answer is available for the answer to condition on; reasoning written after is a post-hoc narration of a decision already made. Why not A: telling a model to reason internally does not create hidden computation in a standard model; the tokens are where the work happens. Why not C: repeating within one response is not independent sampling, so it does not give the benefit of a real self-consistency vote. Why not D: this actively destroys the benefit, since the answer is committed before any work is done."
    },
    {
      id: "promptEngineering-06",
      type: "mcq",
      title: "Untrusted Content in a Prompt",
      difficulty: "easy",
      points: 3,
      prompt: "Your prompt template inserts a user-submitted review and asks the model to summarise it. What is the basic risk?",
      options: [
        "The review may contain text that reads as instructions, and the model cannot distinguish your instructions from content you pasted in.",
        "The review may contain characters that break JSON encoding, causing the request body to be rejected by the provider before the model runs.",
        "The review may be in a language the model handles poorly, so the summary silently degrades without any signal that quality has dropped.",
        "The review may exceed the context window, causing the template's own instructions to be truncated and the request to fail without any clear error.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Everything arrives as one token sequence. Text inside the review that looks like a directive can be followed, because there is no structural boundary marking it as data. Delimiters and instructions to treat it as data raise the bar but do not create a real boundary. Why not B: encoding is handled by your client library. Why not C: language coverage is a quality issue, not the structural risk of mixing instructions with untrusted input. Why not D: truncation is an operational concern, not the security risk the question is pointing at."
    },
    {
      id: "promptEngineering-07",
      type: "mcq",
      title: "When Reasoning Hurts",
      difficulty: "medium",
      points: 5,
      prompt: "A team adds \"think step by step before answering\" to every prompt in their product, including a simple sentiment classifier. Accuracy on the classifier drops slightly and latency triples. What is the correct reading?",
      options: [
        "The instruction conflicts with the classification task because a classifier must return a label, so the model spends its output budget on prose and truncates before reaching the label.",
        "Reasoning steps only work when paired with few-shot examples that demonstrate the reasoning, and without them the model produces unfocused text that only adds noise.",
        "Accuracy dropped because reasoning raises the effective temperature of the response, so the label at the end is sampled from a flatter distribution than a direct answer would be.",
        "Reasoning steps help on multi-step problems and add cost everywhere. On a single-judgement task there is nothing to decompose, and the extra text lets the model argue itself out of a right answer.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Reasoning steps buy sequential computation, which is valuable when a problem genuinely has steps and wasteful when it does not. On a one-shot judgement the model is often right immediately, and generating a rationale gives it the opportunity to construct a plausible case for the wrong label. Apply it selectively, per task, and measure. Why not A: truncation would show as malformed output rather than a small accuracy drop. Why not B: examples help but their absence does not explain a drop below the no-reasoning baseline. Why not C: reasoning does not alter sampling temperature."
    },
    {
      id: "promptEngineering-08",
      type: "mcq",
      title: "Constrained Decoding",
      difficulty: "medium",
      points: 5,
      prompt: "Schema-constrained output differs from simply asking for JSON. What does the constraint actually do?",
      options: [
        "It fine-tunes a lightweight adapter on your schema at request time, so the model learns the required shape before generating the response.",
        "It masks the distribution at each step so only tokens that continue a schema-valid document stay selectable, making invalid output impossible.",
        "It appends the schema to the system prompt in a canonical form that the model was trained to recognise, which raises compliance to near certainty in practice.",
        "It validates the model's response against the schema after generation and then automatically retries the request whenever that validation fails.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Constrained decoding intervenes during sampling, zeroing the probability of any token that would make the output unparseable against the grammar or schema. The guarantee is structural rather than probabilistic. Note that it constrains shape, not correctness: a schema-valid response can still contain wrong values. Why not A: no training happens per request. Why not C: prompt-level schema description raises compliance but leaves a failure tail, which is exactly what constrained decoding removes. Why not D: that is retry-on-validation, a weaker outer loop that costs extra calls."
    },
    {
      id: "promptEngineering-09",
      type: "mcq",
      title: "Prompt Caching",
      difficulty: "medium",
      points: 5,
      prompt: `A provider offers prompt caching that discounts repeated prefixes. A team caches a 12,000 token system prompt but sees almost no hit rate.

{{diagram}}

What is likely wrong?`,
      diagram: `flowchart LR
  A["System rules<br/><b>12,000 tok</b><br/><small>intended cache prefix</small>"] --> B["User profile"]
  B --> C["Retrieved docs"]
  C --> D["Question"]
  B -.->|changes per request| X["Cache prefix ends here"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class A agent;
  class C,D source;
  class B,X warning;`,
      options: [
        "The cached prefix is too large for the cache tier, so entries are evicted before a second request can reuse them. Splitting it into smaller cached segments fixes the hit rate.",
        "Caching matches on an exact prefix, so the reused region ends at the first byte that varies. Something before or inside the system block is changing, such as a timestamp or a reordered field.",
        "Caching requires an explicit cache identifier on every request, and without one the provider treats each request as a distinct conversation with no shared history.",
        "Caching applies to whole requests rather than to prefixes, so any change anywhere in the request means nothing is reused and the discount cannot apply at all.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Prefix caching is exact-match from the first token forward. A timestamp, a session identifier, a randomised field order, or anything else that varies inside or ahead of the block truncates the reusable region at that point. The layout rule is: most stable content first, most variable content last. Why not A: 12,000 tokens is well within normal cacheable size. Why not C: some providers use explicit markers, but a missing marker would give zero hits rather than the near-zero hit rate that points at prefix instability. Why not D: caching is specifically prefix-based, which is why layout matters at all."
    },
    {
      id: "promptEngineering-10",
      type: "mcq",
      title: "Example Selection Bias",
      difficulty: "medium",
      points: 5,
      prompt: "A classifier prompt uses eight few-shot examples, seven labelled \"approve\" and one \"reject\". In production it approves nearly everything. What is happening?",
      options: [
        "The single reject example is being read as an exception to the rule rather than as a class, so the model treats rejection as a special case requiring explicit justification.",
        "Few-shot examples must be balanced because the model averages their embeddings into a single prototype, and an imbalanced set moves that prototype toward the majority.",
        "Eight examples exceed the number the model can attend to reliably, so the later ones dominate and the earlier reject example is effectively ignored.",
        "The examples condition the model on the label distribution as well as the task, so a skewed set shifts its prior toward the majority label independently of the input.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. In-context examples convey more than format. The distribution of labels acts as a prior, and a seven-to-one split tells the model that approval is overwhelmingly likely before it has looked at the case. Balance the label distribution, or state the expected base rate explicitly. Why not A: it is a statistical prior, not an interpretive judgement about exceptions. Why not B: no prototype is formed; examples condition generation directly. Why not C: eight examples is well within attention range and recency is not the mechanism here."
    },
    {
      id: "promptEngineering-11",
      type: "mcq",
      title: "Delimiting Untrusted Input",
      difficulty: "medium",
      points: 5,
      prompt: "A summariser wraps user-submitted text in triple backticks and instructs the model to treat everything inside as data. A user submits text containing triple backticks followed by new instructions, and the model follows them. What is the correct conclusion?",
      options: [
        "The instruction to treat the content as data was placed before the content. Repeating it after the closing delimiter would give it recency and make it stick.",
        "The input should have been escaped before insertion, so that any delimiter appearing inside the user text is neutralised and cannot close the block early.",
        "Delimiters are a convention the model has learned to respect, not a boundary it enforces. They reduce accidental confusion and cannot withstand a user deliberately targeting them.",
        "Backticks are a poor choice of delimiter because they already carry meaning in code contexts. A delimiter drawn from a rarely used character range would hold up against this attack.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. There is no privileged channel: your delimiters and the user's text are the same kind of tokens. Delimiting is worth doing because it helps in the ordinary case, but treating it as a security control is the error. Real defence limits what the model can do with the instruction it was tricked into following. Why not A: recency changes weighting, not authority. Why not B: escaping is genuinely worth doing and closes this particular hole, but it is a mitigation of one technique rather than the structural conclusion. Why not D: an obscure delimiter is harder to guess but is still just characters, and the input often reveals the format."
    },
    {
      id: "promptEngineering-12",
      type: "mcq",
      title: "Instruction Placement",
      difficulty: "medium",
      points: 5,
      prompt: "A prompt places its instructions before a 60,000 token document. Compliance with the output format is inconsistent. What is a sound first change?",
      options: [
        "Move the instructions to the end, after the document, so they are closest to the point of generation, and consider restating the format requirement in both positions.",
        "Move the document into a system message and keep instructions in the user message, so the two occupy structurally separate channels that the model weights differently.",
        "Split the document into several user messages so each one is short enough for the instructions to remain in effective range for all of it.",
        "Raise the instruction's priority by repeating it several times consecutively at the start, so its weight in the attention computation grows proportionally.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. With a very long body of text between the instruction and the point of generation, the instruction competes with everything in between. Placing it immediately before generation, and often stating it in both places, is the standard and effective fix. Why not B: role separation does not create a strong enough priority difference to solve this, and a 60,000 token system message is unusual. Why not C: splitting into multiple messages does not change the total distance to the generation point. Why not D: consecutive repetition is a blunt instrument that wastes tokens; position is doing the work, not raw count."
    },
    {
      id: "promptEngineering-13",
      type: "mcq",
      title: "Reproducibility",
      difficulty: "medium",
      points: 5,
      prompt: "An audited workflow must be able to explain how any past answer was produced. Which set of things must be captured?",
      options: [
        "The prompt text and the response, which together are sufficient to reproduce the result at any later date simply by resending the same prompt.",
        "The prompt, the response, and the temperature setting, since temperature is the only parameter that introduces variation between otherwise identical calls.",
        "The prompt, the response, the sampling parameters, the exact model version, and any retrieved content, since a provider model can be updated under a stable alias.",
        "A cryptographic hash of the request and the response, which proves the pair was not altered and lets the whole exchange be re-derived from the provider's own logs if needed.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Reproducibility fails at whichever piece you did not record. A model alias can be repointed to a new version, retrieved documents change as the corpus changes, and sampling parameters change the output. Capture all of it, pin explicit model versions rather than moving aliases, and treat retrieved context as part of the record. Why not A: the same prompt on a silently updated model gives a different answer. Why not B: temperature is one of several parameters, and model version is the bigger risk. Why not D: a hash proves integrity but does not let you reconstruct or explain how the answer was produced."
    },
    {
      id: "promptEngineering-14",
      type: "mcq",
      title: "Judging a Prompt Change",
      difficulty: "medium",
      points: 5,
      prompt: "An engineer changes a prompt, tries it on six cases that previously failed, sees all six pass, and ships it. What is wrong with that process?",
      options: [
        "Prompt changes must be evaluated at the temperature used in production, and a single pass at any temperature is unreliable regardless of how many cases are used.",
        "The change should have been compared against a variant prompt rather than against the original, since any change tends to score better than no change at all.",
        "Six cases is far too few for statistical confidence. Running that same comparison over a few hundred cases instead would make the result trustworthy.",
        "The cases were chosen because they failed, so improvement on them is expected. Without a held-out set and a regression check on cases that previously passed, this measures nothing.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Two flaws compound. Tuning on the failures and then evaluating on those same failures is fitting to the test set. And a prompt change is global, so the real question is what it broke among the cases that already worked. You need a fixed evaluation set, a held-out set the change was not tuned on, and a regression check both ways. Why not A: temperature matters for variance, but selection bias is the defect here. Why not B: comparing against the original is exactly right; the problem is which cases it was compared on. Why not C: more cases chosen the same biased way reproduces the same error at greater expense."
    },
    {
      id: "promptEngineering-15",
      type: "mcq",
      title: "Intermittent Parse Failures",
      difficulty: "hard",
      points: 7,
      prompt: `An extraction service parses JSON from the model. About 2 percent of responses fail to parse.

{{diagram}}

Which response is correct?`,
      diagram: `flowchart TB
  F([2% of responses fail to parse])
  F --> A["Most failures<br/><small>a short sentence before the opening brace</small>"]
  F --> B["Some failures<br/><small>a trailing markdown code fence</small>"]
  F --> C["A few failures<br/><small>valid object, one required field missing</small>"]
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef danger fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class F source;
  class A,B warning;
  class C danger;`,
      options: [
        "Add a repair pass that strips text outside the outermost braces and removes code fences, then re-validate. This handles every observed case without another model call.",
        "Lower the temperature to zero and add \"Respond with JSON only\" to the prompt. Determinism plus an explicit instruction removes the variance that produces the stray text.",
        "Use constrained decoding to make wrapper text and fences impossible, and treat the missing field separately, since a schema guarantees shape but not that a value was found.",
        "Retry any response that fails to parse, up to three attempts. At a 2 percent failure rate the chance of three consecutive failures is negligible and no other change is required.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The three failure modes are not one problem. Wrapper prose and fences are shape violations, and constrained decoding eliminates them outright by making those tokens unselectable. A schema-valid object with a missing required field is a different failure: the information was not present or not found, and the right handling is an explicit nullable field or a not-found path, not a parser fix. Why not A: repair heuristics work until a brace appears inside a string value, and they silently mask the missing-field case. Why not B: determinism makes a malformed output consistent rather than absent. Why not D: retrying hides a defect you can eliminate, triples cost on the tail, and never fixes the missing field."
    },
    {
      id: "promptEngineering-16",
      type: "mcq",
      title: "Prompt Portability",
      difficulty: "hard",
      points: 7,
      prompt: "A carefully tuned prompt performs well on one provider's model and noticeably worse on another, despite similar benchmark scores. What is the most accurate explanation and response?",
      options: [
        "The second model has a smaller effective context, so the prompt is being truncated. Shortening it until it fits within that model's practical limit restores the original behaviour.",
        "Benchmark parity implies prompt parity, so the difference must come from sampling parameters not being matched. Aligning temperature and nucleus settings will close the gap.",
        "Prompts encode assumptions about one model's post-training: formatting habits, how it weights system messages, how it takes reasoning cues. Re-tune and re-evaluate per model, with an evaluation set for each.",
        "The prompt has been overfitted to the first model and is therefore fragile by construction. Rewriting it in a shorter, more generic form will make it perform equally well on both.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A prompt is tuned against one model's learned conventions, and those conventions come from post-training choices that differ between providers. Aggregate benchmarks average over exactly the differences your specific prompt is sensitive to. Treat prompts as model-specific artifacts with per-model evaluation. Why not A: truncation is a concrete failure that would show up plainly, not as a general quality drop. Why not B: matching parameters is worth doing but does not account for different instruction-following behaviour. Why not D: a shorter generic prompt usually loses to a well-tuned specific one on both models, so this trades quality for portability rather than achieving both."
    },
    {
      id: "promptEngineering-17",
      type: "mcq",
      title: "Designing for Cache Hits",
      difficulty: "hard",
      points: 7,
      prompt: `A support assistant sends the following on every turn.

{{diagram}}

Cache hit rate is near zero. What is the correct reordering, and what is the limit of the gain?`,
      diagram: `flowchart LR
  N1["1 · today's date<br/>and a request id"] --> N2["2 · static tool definitions<br/><b>8,000 tok</b>"]
  N2 --> N3["3 · static policy documents<br/><b>15,000 tok</b>"]
  N3 --> N4["4 · this user's profile"]
  N4 --> N5["5 · conversation history"]
  N5 --> N6["6 · current question"]
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  class N1 warning;
  class N2,N3 safe;
  class N4,N5,N6 source;`,
      options: [
        "Remove the date and request id entirely. Once every block is static across turns the whole prompt caches, including the conversation history, which is stable within a session.",
        "Move the static blocks to the front and the varying content behind, so the 23,000 static tokens form a stable cached prefix. History and profile still vary, so only content before the first change is used.",
        "Move the conversation history to the front, since it is the largest block over a long session, and accept that the static definitions are too small to be worth caching separately.",
        "Interleave the static and dynamic blocks so that no single change invalidates a large region, which limits the damage any one varying field can do to the cached portion.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Prefix caching reuses everything up to the first differing token, so a per-request date at position one destroys the entire benefit. Put the invariant 23,000 tokens first, then profile, then history, then the question. The honest limit is that history grows every turn, so the cacheable region ends where the stable content ends, and reuse never extends past it. Why not A: removing the date helps, but history is appended to each turn, so it is not stable within a session. Why not C: history changes every turn and is the worst possible thing to place first. Why not D: interleaving guarantees the first change comes early, which is the opposite of what you want."
    },
    {
      id: "promptEngineering-18",
      type: "mcq",
      title: "Examples That Teach the Wrong Thing",
      difficulty: "hard",
      points: 7,
      prompt: "A prompt for extracting structured data from invoices includes four examples, all of which happen to be single-page invoices from the same vendor with totals under 1,000. In production the model formats output perfectly but misreads multi-page invoices and large totals. What went wrong?",
      options: [
        "The task is unsuited to few-shot prompting because invoice layouts vary too widely. A fine-tuned extraction model is the only reliable approach at this level of variation.",
        "Four examples are not enough to cover the input space. Expanding to twenty examples drawn from that same vendor would give the model sufficient coverage to generalise from.",
        "The examples taught format and, with it, an unintended prior over what invoices look like. They need to span the real variation: many vendors, multi-page documents, and the full range of values.",
        "The examples should be moved to the very end of the prompt so that the actual invoice is processed first and the model is not anchored on the example documents before it has even read the real input.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Examples convey everything they have in common, not only the part you intended. Four narrow examples teach the schema and, silently, that invoices are one page from one vendor with small totals. The fix is to make the example set span the variation the system will actually see, which is the same discipline as building a training set. Why not A: it jumps to fine-tuning before the far cheaper fix of better examples has been tried. Why not B: twenty examples from the same vendor multiply the bias rather than correcting it. Why not D: ordering does not remove a prior carried by the content of the examples."
    },
    {
      id: "promptEngineering-19",
      type: "mcq",
      title: "Schema Valid, Semantically Wrong",
      difficulty: "hard",
      points: 7,
      prompt: "A pipeline uses constrained decoding, so 100 percent of responses parse. Downstream, a review finds the model invents plausible values for fields not present in the source document, rather than leaving them empty. Why does the schema not prevent this?",
      options: [
        "The schema marks those fields as required, and a required field with no permissible empty value leaves the model no way to express absence, so it produces something that fits the type.",
        "Constrained decoding validates types but not values, so it should be paired with a post-generation range check on each field to catch values outside the plausible bounds.",
        "The model was given the schema but not the source document within the same message, so it filled the fields from its prior knowledge rather than from the input it was meant to extract from.",
        "Constrained decoding raises the probability of every schema-conforming token, which pushes the model toward completing fields rather than leaving any of them blank.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The schema is doing exactly what it was told: this field must be present and must be a string. Given no basis in the document, the model still has to emit a conforming value, so it invents one. Absence has to be representable, through nullable fields, an explicit not-found sentinel, or a confidence field, and the prompt must instruct the model to use it. Why not B: a range check catches implausible values, not plausible fabrications, which is the actual failure. Why not C: nothing in the scenario suggests the document was omitted, and that would produce total failure rather than selective invention. Why not D: constraint masks invalid tokens rather than boosting conforming ones, and an empty value would be conforming if the schema allowed it."
    },
    {
      id: "promptEngineering-20",
      type: "mcq",
      title: "Eval Improved, Production Regressed",
      difficulty: "hard",
      points: 7,
      prompt: "Over a quarter a team ran 40 prompt experiments against a fixed 200-case evaluation set. The score rose from 71 to 89 percent. Production complaint volume did not fall, and on some categories it rose. What is the most likely explanation?",
      options: [
        "Production input has drifted away from the evaluation set over the course of the quarter, so the set no longer represents live traffic and the measured improvement simply does not transfer.",
        "The evaluation set is too small to detect real improvement, so the rise from 71 to 89 percent is within noise and no genuine change occurred in either direction.",
        "Forty rounds of tuning against one fixed set optimised for that set. Its remaining errors were memorised rather than solved, and the score no longer estimates performance on unseen input.",
        "The evaluation metric measures a property that users do not actually care about, so the entire measured improvement is real but irrelevant to complaint volume.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Every experiment that keeps or discards a change based on one fixed set leaks information from that set into the prompt. After forty rounds the score reports fit to those 200 cases, not generalisation, and the rise on some production categories is the signature of changes that traded broad behaviour for narrow wins. Rotate in fresh cases, hold out a set that never informs a decision, and confirm against production signals. Why not A: drift is plausible over a quarter but would not usually produce category-level regressions on its own. Why not B: an 18 point move on 200 cases is well outside noise. Why not D: a badly chosen metric is a real risk but does not explain categories getting worse."
    }
  ]
};
