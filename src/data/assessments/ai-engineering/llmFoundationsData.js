import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 1 of 15 - LLM Foundations
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const llmFoundationsData = {
  id: ASSESSMENT_TYPES.llmFoundations,
  level: 1,
  title: "LLM Foundations",
  shortTitle: "LLM Foundations",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "What a large language model actually computes: next-token prediction, tokens and context windows, sampling and temperature, the pretraining and post-training stages, where knowledge lives, and why hallucination is a mechanism rather than a bug.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Questions test whether you can explain why a model behaves the way it does, not just name the behaviour. Several distractors are the popular but incorrect explanation. No negative marking.",
  questions: [
    {
      id: "llmFoundations-01",
      type: "mcq",
      title: "What a Model Computes",
      difficulty: "easy",
      points: 3,
      prompt: "At inference time, what does a large language model fundamentally compute at each step?",
      options: [
        "A probability distribution over every token in its vocabulary, given the tokens so far. One token is then chosen from that distribution and appended to the sequence.",
        "The most semantically similar passage from its training corpus, which is rephrased in the user's own wording and returned, which is why the model can quote sources it has seen.",
        "A parse of the question into a logical form, which is then evaluated against the facts stored in its weights and rendered back out into natural language.",
        "An embedding of the full question, which is then matched against an internal index of question-answer pairs assembled during training and post-training.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. A forward pass produces a logit for every token in the vocabulary, softmaxed into a distribution over what comes next; the sampler picks one, appends it, and the process repeats. Everything else the model appears to do is emergent from that one operation. Why not B: the training corpus is not stored or searched at inference; the weights are not a copy of the text. Why not C: there is no separate parsing or logical evaluation stage, which is exactly why the model can be fluent and wrong at the same time. Why not D: there is no lookup index of question-answer pairs; nothing is retrieved."
    },
    {
      id: "llmFoundations-02",
      type: "mcq",
      title: "Context Window",
      difficulty: "easy",
      points: 3,
      prompt: "A model is advertised with a 200,000 token context window. What does that number actually bound?",
      options: [
        "The number of tokens the model can process before answer quality begins to degrade measurably, which is a published tuning guideline rather than a hard limit.",
        "How much text the model can permanently remember about a given user, accumulated across every one of their past conversations with the system.",
        "The size of the prompt only. The response is generated separately and bounded by a different setting, so it does not consume the window.",
        "The total tokens in a single request: system prompt, conversation history, retrieved documents, and the generated response all count against the same budget.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The window is one shared budget per request covering everything the model sees plus everything it writes. If your prompt fills 199,000 tokens you have 1,000 left to answer in. Why not A: it is a hard limit enforced by the API, not a guideline; quality degradation before the limit is a separate and real problem. Why not B: models are stateless between requests; anything remembered is resent by your application. Why not C: generated tokens absolutely consume the window, which is why long inputs truncate long outputs."
    },
    {
      id: "llmFoundations-03",
      type: "mcq",
      title: "Temperature",
      difficulty: "easy",
      points: 3,
      prompt: "What does raising the sampling temperature from 0.2 to 1.0 do?",
      options: [
        "It flattens the distribution over next tokens, so unlikely tokens get picked more often and output varies more between runs.",
        "It widens the pool of training data the model is willing to draw on, moving it away from the most frequently seen phrasings in its corpus.",
        "It reduces the model's tendency to refuse, since refusals are high-probability tokens that a higher temperature will down-weight relative to others.",
        "It allows the model to spend more compute per token, so it considers more possibilities before committing to each one it writes.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Temperature scales the logits before the softmax. Low temperature sharpens the distribution toward the top candidates; high temperature flattens it so unlikely tokens get a real chance. That is all it does. Why not B: there is no training data being drawn on at inference. Why not C: temperature does not target any particular content; it is not a refusal control. Why not D: temperature changes selection, not the amount of compute; the forward pass is identical either way."
    },
    {
      id: "llmFoundations-04",
      type: "mcq",
      title: "Knowledge Cutoff",
      difficulty: "easy",
      points: 3,
      prompt: "A model cannot tell you who won a match that happened last week. Why?",
      options: [
        "The model does hold the information but ranks it as low-confidence, and facts below that threshold are suppressed rather than returned.",
        "Its index of recent content refreshes on a delay, so very recent events are present but are not yet retrievable at query time.",
        "Recent events are filtered out of responses by a safety layer until they have been independently verified by the model's provider.",
        "The model's weights were fixed when training ended, so anything after that date was never in the data it learned from.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Training produces a fixed set of weights. Everything the model knows was in the data before that point; later events simply are not represented. Giving it current information means putting it in the prompt, through retrieval or a tool. Why not A: the model has no stored representation of the event to be unconfident about, and it will often invent a plausible winner instead of declining. Why not B: a base model has no index and retrieves nothing. Why not C: there is no verification-gating layer for recent facts."
    },
    {
      id: "llmFoundations-05",
      type: "mcq",
      title: "Tokens and Billing",
      difficulty: "easy",
      points: 3,
      prompt: "Your bill is measured in tokens. Which statement about tokens is correct?",
      options: [
        "A token is a single character, which makes token counts straightforward to compute directly from the raw length of any string.",
        "A token is one sentence-level unit, so token count tracks the number of clauses rather than the raw character length of the input.",
        "A token is a chunk of characters chosen by the tokenizer, so a common word is one token while a rare or misspelled one splits into several.",
        "A token is one word, so token count and word count are the same number and can be used interchangeably when estimating context usage and cost.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Tokenizers use subword units. Common words map to a single token, while rare words, names, code identifiers, and typos split into several pieces. English averages roughly 0.75 words per token, but that is an average, not a rule. Why not A: characters are far more numerous than tokens; that would overstate cost several times over. Why not B: tokens are well below sentence granularity. Why not D: word count systematically understates tokens for anything unusual."
    },
    {
      id: "llmFoundations-06",
      type: "mcq",
      title: "Run-to-Run Variation",
      difficulty: "easy",
      points: 3,
      prompt: "The same prompt sent twice returns two differently worded answers. What is the most direct explanation?",
      options: [
        "The response is sampled from a probability distribution, so unless decoding is greedy, two runs can select different tokens.",
        "The model updated itself from the first interaction, so the second request is served by slightly different weights than the first.",
        "Requests are load-balanced across replicas that hold independently trained copies of the model, so each replica answers in its own style.",
        "Provider-side caching returned a variant of a previously cached answer rather than recomputing the response from the prompt.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Generation samples from a distribution. With temperature above zero, two runs can diverge at any token, and once they diverge the rest of the response follows a different path. Why not B: inference never updates weights; the model does not learn from your requests. Why not C: replicas serve identical weights; that is what makes them replicas. Why not D: caching returns the same answer, so it would reduce variation rather than cause it."
    },
    {
      id: "llmFoundations-07",
      type: "mcq",
      title: "Training Stages",
      difficulty: "medium",
      points: 5,
      prompt: "A model is built in stages: pretraining on a large text corpus, then supervised fine-tuning on instruction-response pairs, then preference tuning from human comparisons. Which description of what each stage contributes is correct?",
      options: [
        "Pretraining fixes the vocabulary and grammar; supervised fine-tuning installs the factual knowledge the model will rely on; preference tuning adds the safety rules that block disallowed requests.",
        "Pretraining and supervised fine-tuning both teach knowledge drawn from the same corpus at different learning rates; preference tuning is the stage that makes the model able to hold a coherent multi-turn conversation at all.",
        "Pretraining produces a usable chat model directly; the later two stages are optional refinements that mainly reduce serving cost by letting a smaller model match a larger one's quality.",
        "Pretraining builds general language ability and world knowledge; supervised fine-tuning teaches it to follow instructions in a useful format; preference tuning shapes which of several acceptable answers it prefers to give.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Pretraining is where nearly all knowledge and language ability comes from. Supervised fine-tuning converts a text continuer into something that answers instructions. Preference tuning ranks among acceptable outputs, shaping tone, helpfulness, and refusal behaviour. Why not A: knowledge overwhelmingly comes from pretraining, not fine-tuning, and safety is not solely a preference-tuning artifact. Why not B: the stages differ in objective and data, not just learning rate, and multi-turn structure comes from fine-tuning data formatting. Why not C: pretraining alone yields a base model that continues text rather than answering, which is exactly why the later stages exist."
    },
    {
      id: "llmFoundations-08",
      type: "mcq",
      title: "Why Hallucination Happens",
      difficulty: "medium",
      points: 5,
      prompt: "A model invents a plausible-sounding but non-existent research paper, complete with authors and a year. What is the mechanistic explanation?",
      options: [
        "The model retrieved a genuine paper and then paraphrased it so heavily during generation that the title and authors no longer match the original.",
        "Sampling noise corrupted the correct citation as it was being written, replacing the true tokens with nearby alternatives from the same distribution.",
        "The model is trained to produce likely continuations, and a well-formed citation is a likely one. Nothing in the objective rewards saying it does not know.",
        "The paper did exist in an early version of the training corpus but was removed from later revisions, leaving a partial and now-corrupted trace of it in the weights.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The training objective rewards plausibility, not truth. A citation-shaped string is exactly what should follow a request for a citation, and the model has no separate step that checks whether the referent exists. Abstention has to be trained in deliberately, and it remains imperfect. Why not A: nothing is retrieved; there is no source document to drift from. Why not B: this happens at temperature zero too, so sampling noise is not the cause. Why not D: hallucinated citations are routinely produced for papers that never existed anywhere."
    },
    {
      id: "llmFoundations-09",
      type: "mcq",
      title: "Where Knowledge Lives",
      difficulty: "medium",
      points: 5,
      prompt: "Your application sends a 30-page policy document in the prompt and asks questions about it. Where does the model's answer come from, and what follows from that?",
      options: [
        "The document is temporarily merged into the weights for the duration of the session, so answers reflect it until the session ends and the merge is discarded.",
        "The document is indexed into the model's long-term memory the first time it is used, so later conversations can refer back to it without resending the text.",
        "The document sits in the context window for this request only. It is not learned, so it must be resent every request, and it competes with everything else for the same token budget.",
        "The document is compared against the model's pretrained knowledge and only the portions that conflict are actually used, which is why answers stay broadly consistent with its training.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Context is per-request working memory, not learning. Nothing persists, so your application resends what it needs every time, and every token spent on the document is a token unavailable for history or output. Why not A: weights are never modified at inference; there is no merge. Why not B: there is no cross-session memory in the model itself; any such feature lives in your application. Why not D: no reconciliation step exists, and in-context material generally dominates rather than being filtered against training."
    },
    {
      id: "llmFoundations-10",
      type: "mcq",
      title: "Temperature Zero",
      difficulty: "medium",
      points: 5,
      prompt: "A team sets temperature to 0 and expects byte-identical output for identical input. In production they still see occasional differences. Which explanation is correct?",
      options: [
        "Temperature 0 makes the choice greedy, but greedy still needs a unique maximum. Batching, hardware and kernel differences perturb logits, so near-ties flip and the response diverges.",
        "Temperature 0 disables sampling but not the model's own internal dropout layers, which remain active at inference and inject fresh randomness into every forward pass.",
        "Temperature 0 is documented as a very low value rather than true greedy decoding, so the sampler still draws randomly from among the top few candidates at every step.",
        "Temperature 0 applies only to the first token of a response. Every subsequent token reverts to the provider's default temperature, so drift accumulates across a long response.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Greedy decoding removes sampling randomness but not numerical nondeterminism. Floating-point reduction order varies with batch composition and kernel selection, so two tokens with nearly equal logits can swap places, and one flipped token changes everything after it. Why not B: dropout is disabled at inference; it is a training-time regulariser. Why not C: temperature 0 does mean greedy on the major APIs. Why not D: the setting applies to every step, not just the first."
    },
    {
      id: "llmFoundations-11",
      type: "mcq",
      title: "Top-p and Temperature",
      difficulty: "medium",
      points: 5,
      prompt: "You set temperature to 1.2 and top_p to 0.1. What is the practical effect?",
      options: [
        "The two settings are in direct conflict and the request is rejected by the provider, since a high temperature cannot be combined with an aggressive nucleus cutoff in the same call.",
        "top_p truncates the distribution to the smallest set of tokens covering 10 percent of probability mass, so despite the high temperature the output stays close to the most likely continuations.",
        "Temperature is applied after truncation and re-expands the candidate set again, so the high temperature dominates and the resulting output ends up close to fully random.",
        "The settings average out to roughly neutral decoding, equivalent to temperature 1.0 with the nucleus cutoff disabled entirely, so in practice neither parameter has a visible effect.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Temperature reshapes the distribution, then nucleus sampling truncates it to the smallest set whose cumulative probability reaches top_p. A cutoff of 0.1 is severe, so only the strongest candidates survive and the high temperature has little room to act. Truncation is the binding constraint. Why not A: the parameters are independent and both are accepted. Why not C: the order is temperature first, then truncation; truncation cannot be undone by a setting already applied. Why not D: they do not average; they compose, and the tighter constraint wins."
    },
    {
      id: "llmFoundations-12",
      type: "mcq",
      title: "Long Context Degradation",
      difficulty: "medium",
      points: 5,
      prompt: "A team moves from a 8,000 token prompt to a 150,000 token prompt on a model that supports it. Accuracy on the same questions drops. What is the most likely explanation?",
      options: [
        "Supporting a context length is not the same as reasoning well across it. Relevant details compete with far more irrelevant text, and evidence in the middle is attended to least reliably.",
        "Attention is normalised across tokens, so each one receives less weight as the input grows, which reduces accuracy in direct proportion to the total length of the input.",
        "The model silently truncates anything past a much smaller internal limit, so the great majority of the added material never actually reached it in the first place.",
        "Longer inputs are automatically summarised by the provider before they reach the model at all, and that summary drops precisely the fine details the questions depend on.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Advertised context length is a capacity limit, not a quality guarantee. Retrieval within a long context degrades, especially for material positioned in the middle, and adding irrelevant text actively hurts by giving the model more ways to go wrong. Feeding less but better material usually wins. Why not B: it names a real normalisation but invents a tidy linear degradation law that does not describe the observed behaviour. Why not C: the model genuinely processes the full input up to its stated limit. Why not D: providers do not silently summarise your prompt."
    },
    {
      id: "llmFoundations-13",
      type: "mcq",
      title: "Base vs Instruct Models",
      difficulty: "medium",
      points: 5,
      prompt: "A team downloads a base model rather than its instruction-tuned variant. Asked \"What is the capital of France?\", it replies with a list of similar quiz questions instead of an answer. What is happening?",
      options: [
        "The base model's weights are incomplete without the instruction-tuning stage, so it produces partially formed output until that stage is applied.",
        "The base model has no chat template applied, so the request was parsed as raw text and the model fell back to a default completion behaviour it uses on malformed input.",
        "Base models are trained on a filtered corpus that deliberately excludes factual question-answer content, so it cannot answer and produces related text instead.",
        "A base model continues text rather than responding to it. In its training data, a line like that is most often followed by more questions, so that is what it produces.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A base model does exactly one thing: continue the text it is given. Answering a question is a learned convention installed by instruction tuning. On the open internet a quiz question is frequently followed by more quiz questions, so that continuation is entirely on-objective. Why not A: the weights are complete; the behaviour is different, not broken. Why not B: chat templates matter for formatting, but a base model would still continue rather than answer even with one applied. Why not C: base corpora are not stripped of factual content; the knowledge is present but the answering convention is not."
    },
    {
      id: "llmFoundations-14",
      type: "mcq",
      title: "Scaling Trade-offs",
      difficulty: "medium",
      points: 5,
      prompt: "Given a fixed training compute budget, a team debates spending it on a much larger model trained on less data, or a smaller model trained on far more data. What does the modern evidence support?",
      options: [
        "The allocation is close to irrelevant at this scale, since the two factors substitute for each other almost perfectly and any reasonable split reaches the same final loss anyway.",
        "For a fixed compute budget there is a balanced allocation between parameters and training tokens, and pushing either far past it wastes compute. Smaller models trained longer are also cheaper to serve.",
        "Parameter count is by far the dominant factor, so the budget should go almost entirely to model size, and the available data simply repeated for as many epochs as fill the training schedule.",
        "Data volume is by far the dominant factor, so the budget should go almost entirely to training tokens, and the smallest model that still trains stably should be chosen.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Compute-optimal training balances parameters against training tokens; heavily over-parameterising a model on too little data wastes budget, and so does the reverse. There is a second, practical argument for the smaller side: inference cost is paid on every request forever, so a smaller model trained longer is often the better product decision even when the two match on quality. Why not A: allocation demonstrably changes final loss at fixed compute. Why not C: this was the pre-Chinchilla assumption and repeated epochs give sharply diminishing returns. Why not D: it overcorrects; below a certain size a model cannot absorb the extra data."
    },
    {
      id: "llmFoundations-15",
      type: "mcq",
      title: "Confident Wrong Answers",
      difficulty: "hard",
      points: 7,
      prompt: `A support assistant answers a policy question fluently and in the company's own house style, but the policy it describes does not exist. The team is confused because the model "seemed so certain".

{{diagram}}

What is the correct reading of this?`,
      diagram: `flowchart LR
  P([Prompt]) --> M["MODEL<br/><small>one process, no fact check</small>"]
  M --> O["Fluent, well-formatted<br/>house style<br/><b>wrong</b>"]
  O --> S["no hedging · no citation<br/>no uncertainty signal"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class M agent;
  class P source;
  class O,S warning;`,
      options: [
        "The confident tone indicates the answer was drawn from a high-probability region of the distribution, so the model is signalling that it considers this particular answer well supported.",
        "Fluency and correctness come from the same process and carry no relationship to each other. House style was learned from the prompt or similar documents, and says nothing about whether the content is true.",
        "The absence of hedging shows that the safety and calibration layers did not trigger, which means the answer passed the model's own internal factuality check before it was returned.",
        "Fluency is evidence of familiarity with the domain, so the model has most likely seen the real policy at some point and reproduced a near-miss version of it from partial memory of it.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. This is the single most expensive misreading in production LLM work. Style, formatting and confidence are surface properties the model reproduces well; factual grounding is a separate property it has no mechanism to guarantee. A wrong answer in perfect house style is the expected output, not an anomaly. The fix is grounding and citation, not prompt tone. Why not A: token probability is not a calibrated confidence signal about the world. Why not C: there is no internal factuality check to pass. Why not D: fluency about a domain does not imply the specific fact was seen."
    },
    {
      id: "llmFoundations-16",
      type: "mcq",
      title: "Corrections Do Not Persist",
      difficulty: "hard",
      points: 7,
      prompt: "A user corrects the assistant mid-conversation: \"No, our refund window is 45 days, not 30.\" The assistant accepts the correction and uses 45 for the rest of the chat. The next morning, a different user asks the same question and is told 30 days. What actually happened?",
      options: [
        "The correction only ever existed as tokens in that conversation's context. Weights were never touched, so a new conversation starts clean.",
        "The correction was written to the model's memory but expired overnight, since in-session learning is retained only for a limited window before the weights revert.",
        "The correction was applied to the user's own profile rather than globally, so it holds for that user in future sessions but not for anyone else.",
        "The correction was rejected during an overnight consistency check against the pretrained value, which was ranked more reliable and restored.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Accepting a correction is just conditioning on tokens that are present in the context. Once that context is gone, so is the correction. Making it stick means writing it somewhere your application controls and injecting it into future prompts, or changing the underlying source the model is grounded on. Why not B: nothing was written anywhere and weights do not revert because they never changed. Why not C: there is no per-user profile inside the model; that is an application feature you would have to build. Why not D: there is no overnight consistency process reconciling conversations against training data."
    },
    {
      id: "llmFoundations-17",
      type: "mcq",
      title: "Why Reasoning Steps Help",
      difficulty: "hard",
      points: 7,
      prompt: "On multi-step word problems, asking a model to work through its reasoning before answering measurably improves accuracy over demanding the final answer immediately. What is the mechanism?",
      options: [
        "Producing steps forces the model to sample several candidate solutions internally and then return whichever one appears most often, which is a hidden majority vote across those attempts.",
        "Writing out the steps switches the model into a distinct reasoning mode, which activates the arithmetic and logic circuits that otherwise stay dormant during ordinary generation.",
        "Each generated token gets one forward pass, so intermediate tokens give the model more sequential computation and let later steps condition on earlier partial results rather than solving it in one pass.",
        "The extra text lengthens the context, and a longer context lets the attention mechanism weight the question itself more heavily relative to the rest of the surrounding prompt.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Computation per token is fixed. Demanding an immediate answer forces the whole problem into a single forward pass; letting the model write intermediate steps gives it more passes and, critically, lets each step attend to the concrete results of earlier ones instead of holding everything implicitly. Why not A: that describes self-consistency with multiple sampled chains, which is a different technique layered on top. Why not B: there is no separate mode being switched on; it is the same network doing the same thing with more steps. Why not D: attention weighting is not what changes, and padding the context with irrelevant text does not produce the effect."
    },
    {
      id: "llmFoundations-18",
      type: "mcq",
      title: "Token Probability as Confidence",
      difficulty: "hard",
      points: 7,
      prompt: "A team gates answers on the average token log-probability of the response, refusing to show anything below a threshold. It filters out some wrong answers but also many correct ones, and confident hallucinations still get through. Why?",
      options: [
        "Log-probabilities are only meaningful within a single decoding run, so comparing them against one fixed threshold across prompts is statistically invalid and filters essentially at random.",
        "The score reflects how confident the model is that the sequence is a likely continuation, not how likely it is to be true. A fluent fabrication scores high, and an awkwardly worded correct answer scores low.",
        "Log-probabilities measure surprise relative to the training distribution, so any answer about material underrepresented in training scores low regardless of whether it is correct.",
        "Averaging over the whole response is the flaw. Taking the minimum token probability rather than the mean would isolate the single uncertain token that marks a hallucination.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. The quantity being measured is linguistic likelihood, not truth. A smoothly written invented citation is a very likely token sequence, and a correct answer phrased unusually is not, so the filter is misaligned with what the team wants and misfires in both directions. Real confidence needs grounding against a source, or calibration trained for the purpose. Why not A: scores are comparable enough to threshold; the problem is what they mean, not their scale. Why not C: it describes a real correlation but not the mechanism, and it does not explain confident hallucinations passing the filter. Why not D: the minimum is noisier and does not fix the misalignment; hallucinations are often uniformly high-probability."
    },
    {
      id: "llmFoundations-19",
      type: "mcq",
      title: "Budgeting the Window",
      difficulty: "hard",
      points: 7,
      prompt: `A summariser fails intermittently in production on a 128,000 token model.

{{diagram}}

What is the defect and the correct fix?`,
      diagram: `flowchart TB
  W["Context window<br/><b>128,000 tokens</b><br/><small>one shared budget</small>"]
  W --> S["System prompt<br/><b>1,200</b>"]
  W --> R["Retrieved documents<br/><b>up to 120,000</b>"]
  W --> H["Conversation history<br/><small>grows every turn</small>"]
  W --> O["max_tokens reserved<br/><b>8,000</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class W agent;
  class S,H source;
  class R,O warning;`,
      options: [
        "Conversation history should never be sent alongside retrieved documents. Dropping history entirely on document-summarisation turns removes the overlap and keeps the request within the window.",
        "The failures are intermittent because the retrieval size varies, so the fix is to retry on the length error with a progressively smaller retrieval size until the request is accepted.",
        "The requested output length is too large for a summariser. Reducing max_tokens to a realistic 2,000 leaves comfortable headroom and resolves the failures without touching retrieval.",
        "Input and output share the 128,000 budget, so a full retrieval plus history plus 8,000 reserved output can exceed it. Cap retrieved content against a computed budget of window minus system prompt, history and max_tokens.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. One shared budget covers system prompt, history, retrieved text and reserved output. Here the worst case is over 129,000 before the model writes anything, so it fails only when retrieval happens to run large, which is exactly the intermittent pattern. The fix is to compute the remaining budget and truncate retrieval to fit. Why not A: discarding history is a product regression and still leaves retrieval unbounded. Why not B: retry-on-failure wastes a full round trip and hides a defect you can compute your way out of before sending. Why not C: lowering max_tokens buys headroom but leaves an uncapped input that will breach the limit again as history grows."
    },
    {
      id: "llmFoundations-20",
      type: "mcq",
      title: "Limits of Direct Computation",
      difficulty: "hard",
      points: 7,
      prompt: "A finance assistant is asked to multiply two 9-digit numbers. It returns a number of the right magnitude with several wrong digits, and does so confidently. Which combination of causes is correct?",
      options: [
        "The tokenizer truncates long digit strings past a fixed length, so the model never receives the full operands and ends up computing on their leading digits alone.",
        "Numbers split into tokens that do not align with place value, and the model approximates a learned pattern in a fixed number of passes rather than executing a carrying algorithm.",
        "Arithmetic of this size exceeds the model's numeric precision, since values are represented internally in a floating-point format that cannot hold 18 significant digits.",
        "Multiplication of numbers this large was rare in the corpus, so the model interpolates between the nearest worked examples it saw, which is why the magnitude is right and the digits are not.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Two things compound. Digit strings tokenize into groups that cut across place value, so the operands are not presented in a form aligned to the algorithm; and there is no mechanism that executes carrying step by step, so the model pattern-matches to something of roughly the right shape. This is why the correct engineering answer is to hand arithmetic to a calculator tool. Why not A: tokenizers do not truncate digit strings; they split them. Why not C: activations are not a decimal register and precision is not the binding constraint. Why not D: rarity contributes, but the model would still fail on this reliably even with more examples, because the deficit is procedural."
    }
  ]
};
