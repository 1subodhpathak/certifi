import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 6 of 15 - Fine-tuning vs RAG vs Prompting
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const modelAdaptationData = {
  id: ASSESSMENT_TYPES.modelAdaptation,
  level: 6,
  title: "Fine-tuning vs RAG vs Prompting",
  shortTitle: "Model Adaptation",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Choosing how to adapt a model to your problem: what fine-tuning can and cannot teach, parameter-efficient methods, preference tuning and distillation, the data volume each approach needs, and the decision rule for when retrieval beats training and when neither is the answer.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Several questions describe a team about to fine-tune and ask whether that is the right call. Knowing when not to train is as heavily weighted as knowing how. No negative marking.",
  questions: [
    {
      id: "modelAdaptation-01",
      type: "mcq",
      title: "What Fine-tuning Teaches",
      difficulty: "easy",
      points: 3,
      prompt: "Fine-tuning is best at teaching a model which of the following?",
      options: [
        "A consistent behaviour, format or style, learned from many examples of the input-output mapping you want it to reproduce.",
        "Access to systems it could not otherwise reach, since training on API transcripts grants the model the ability to call those systems.",
        "Reasoning ability beyond what the base model has, since gradient updates on hard problems raise its underlying capability ceiling.",
        "Facts that change frequently, since a training pass writes them into the weights where they are cheaper to access than in a prompt.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Fine-tuning shapes behaviour. Given enough examples of the mapping you want, it teaches format, tone, task convention and domain style far more reliably than prompting can. Why not B: tool access is a runtime capability granted by your system, not something training confers. Why not C: fine-tuning can sharpen a capability the base model already has but does not raise its ceiling. Why not D: facts belong in retrieval, because anything that changes needs a retraining cycle to update and cannot be audited or cited."
    },
    {
      id: "modelAdaptation-02",
      type: "mcq",
      title: "When Retrieval Wins",
      difficulty: "easy",
      points: 3,
      prompt: "A company needs an assistant that answers from an internal wiki updated several times a day. Which approach fits?",
      options: [
        "Put the entire wiki in the system prompt so nothing needs retrieving, and refresh that prompt whenever the wiki changes materially.",
        "Fine-tune nightly on the day's wiki changes, so the model always carries the current content in its weights by the next morning.",
        "Fine-tune once on the full wiki and rely on the model to generalise from it as later edits refine the same underlying material.",
        "Retrieve the relevant wiki passages at query time and place them in the prompt, so that answers stay current and can cite a source.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Content that changes daily and needs to be citable is a retrieval problem. Re-indexing is minutes and cheap, the answer points at a source, and a wrong answer is traceable to a document. Why not A: a full wiki will not fit, and even where it does it wastes the window and degrades quality. Why not B: a nightly training cycle is expensive, slow and unauditable, and the model still cannot cite. Why not C: a one-time training pass goes stale immediately and does not generalise to edits it never saw."
    },
    {
      id: "modelAdaptation-03",
      type: "mcq",
      title: "The Cheapest Thing First",
      difficulty: "easy",
      points: 3,
      prompt: "A team's classification accuracy is 78 percent and they want 90 percent. What should they try first?",
      options: [
        "Improve the prompt: sharpen the label definitions, add balanced examples, and check whether errors cluster in one category first.",
        "Fine-tune on a few thousand labelled examples, since a trained classifier will outperform any prompt-based approach on a well-defined task.",
        "Move to a larger model, since capability is the binding constraint on classification accuracy and prompt changes cannot close a 12 point gap.",
        "Collect more labelled data first, since no method can exceed the quality of the labels available and the current set is likely too small.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Prompt work is hours, costs nothing to reverse, and frequently closes gaps this size, especially when the errors turn out to concentrate in one ambiguous category. It also produces the labelled examples and error analysis you would need before fine-tuning anyway. Why not B: fine-tuning may well be the eventual answer but it is the expensive option to reach for first. Why not C: a larger model is worth testing but is a permanent cost increase on every request. Why not D: more data matters for training, but the error analysis comes first and may show the label definition is the problem."
    },
    {
      id: "modelAdaptation-04",
      type: "mcq",
      title: "What LoRA Does",
      difficulty: "easy",
      points: 3,
      prompt: "Parameter-efficient fine-tuning with LoRA differs from full fine-tuning in what way?",
      options: [
        "It trains only the final few layers of the network, leaving earlier layers frozen because they encode general language rather than task-specific behaviour.",
        "It quantises the model to a lower precision before training, which reduces memory enough that a full update becomes affordable on smaller hardware.",
        "It trains on a smaller sample of the dataset selected for diversity, which reaches similar quality at a fraction of the total training steps.",
        "It trains a small number of added low-rank matrices while the base weights stay frozen, so training is far cheaper and the result is a small adapter file.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. LoRA inserts small low-rank matrices alongside existing weights and trains only those. The base model is untouched, memory needed for optimiser state collapses, and the artifact is megabytes rather than the full model, so many adapters can share one base at serving time. Why not A: last-layer tuning is a different and generally weaker technique. Why not B: that describes quantisation, which is often combined with LoRA but is a separate idea. Why not C: dataset subsampling is a data strategy, not what makes the method parameter-efficient."
    },
    {
      id: "modelAdaptation-05",
      type: "mcq",
      title: "Combining Approaches",
      difficulty: "easy",
      points: 3,
      prompt: "Are retrieval and fine-tuning alternatives to each other?",
      options: [
        "Yes, because a fine-tuned model has the domain content in its weights and retrieving the same content into the prompt creates conflicting sources of truth.",
        "No, they are complementary and are frequently combined: fine-tune for how the model should behave, and retrieve for what it needs to know right now.",
        "Yes, they solve the same problem by different means, so combining them duplicates effort and adds cost without a corresponding quality gain.",
        "No, but they must be applied in sequence: retrieval is used until enough interaction data accumulates, at which point fine-tuning replaces it entirely.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. They address different axes. Fine-tuning fixes behaviour, format and domain convention; retrieval supplies current, citable facts. A production system frequently wants both: a tuned model that reliably follows your output contract, grounded on documents retrieved at query time. Why not A: retrieved content should take precedence over the model's priors by design, which is a resolvable instruction, not a conflict. Why not C: they target different failure modes, so the effort is not duplicated. Why not D: retrieval does not become unnecessary once you fine-tune, because content still changes."
    },
    {
      id: "modelAdaptation-06",
      type: "mcq",
      title: "Distillation",
      difficulty: "easy",
      points: 3,
      prompt: "What is model distillation in this context?",
      options: [
        "Compressing a model to a lower numeric precision so it occupies less memory and runs faster, with a small and measurable quality loss.",
        "Merging several fine-tuned models into one set of weights, so a single deployment covers the tasks each of them was trained on individually.",
        "Training a smaller model on a larger one's outputs, so it imitates that model's behaviour on the tasks the data covers.",
        "Removing low-importance weights from a trained model until it reaches a target size, keeping the behaviour that the remaining weights encode.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Distillation uses a strong model as a teacher, generating outputs that become the training data for a smaller student. Where it works, you get most of the teacher's behaviour on your task at a fraction of the serving cost. Note that provider terms often restrict using outputs to train competing models, so check before doing it. Why not A: that describes quantisation. Why not B: that describes model merging. Why not D: that describes pruning."
    },
    {
      id: "modelAdaptation-07",
      type: "mcq",
      title: "How Much Data",
      difficulty: "medium",
      points: 5,
      prompt: "A team wants to fine-tune a model to produce their specific report format. How much data should they plan for?",
      options: [
        "A few hundred to a few thousand consistent, high-quality examples usually suffices for a format task, and consistency matters more than volume.",
        "Roughly one example per distinct field in the report, since the model needs to see each field demonstrated once to learn where it belongs.",
        "As much as can be gathered, since fine-tuning quality scales with dataset size and there is no practical point of diminishing returns for format tasks.",
        "Tens of thousands of examples minimum, since fine-tuning is a training process and needs a dataset comparable in scale to what pretraining used.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Format and style adaptation is one of the most data-efficient uses of fine-tuning, and a few hundred to a few thousand clean examples typically suffices. Consistency dominates: a thousand examples that disagree about the format teach the model that the format is optional. Why not B: one example per field is far too few to establish a reliable convention. Why not C: returns diminish quickly on format tasks, and adding inconsistent examples actively degrades the result. Why not D: that scale is for pretraining, not adaptation."
    },
    {
      id: "modelAdaptation-08",
      type: "mcq",
      title: "Catastrophic Forgetting",
      difficulty: "medium",
      points: 5,
      prompt: "After fine-tuning on 5,000 domain examples, a model performs well on the target task but has become noticeably worse at general instruction following. What happened, and what helps?",
      options: [
        "The learning rate was too low to converge, so the model sits between its original behaviour and the target one. Training longer at the same rate will resolve both.",
        "The training data was too narrow to represent the task, so the model overfitted to surface patterns. Adding more examples of the same task will restore generality.",
        "Training pulled the weights toward the narrow distribution it saw, degrading capabilities absent from that data. Mix in general data, lower the learning rate, use a parameter-efficient method.",
        "The base checkpoint was replaced rather than adapted, so general ability must be restored by merging the tuned weights back with the original ones at a chosen ratio.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Gradient updates on a narrow distribution move the weights away from behaviours that distribution never exercised. The standard mitigations are replaying general instruction data alongside your domain data, training gently with a low learning rate and few epochs, and using LoRA so the base weights are never overwritten. Why not A: training longer on the same narrow data makes forgetting worse. Why not B: more of the same narrow data reinforces the problem rather than fixing it. Why not D: weight merging is a real technique but the checkpoint was not replaced, and merging is a repair rather than the primary answer."
    },
    {
      id: "modelAdaptation-09",
      type: "mcq",
      title: "Preference Tuning",
      difficulty: "medium",
      points: 5,
      prompt: "Supervised fine-tuning trains on correct examples. What does preference tuning add that supervised fine-tuning cannot?",
      options: [
        "It replaces the fixed dataset with live user feedback, so the model updates continuously from production rather than a static set.",
        "It trains on ranked comparisons between candidate responses, so the model learns which of several acceptable answers is better.",
        "It trains on incorrect examples with a reversed loss, so the model learns which outputs to avoid rather than only which to reproduce.",
        "It runs at inference rather than training time, scoring several sampled candidates against a preference model and returning the highest-ranked one.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Many qualities are comparative rather than absolute: which answer is more helpful, better calibrated, more appropriately hedged. There is no single gold output to imitate, but people can reliably rank two candidates, and preference methods learn from exactly that signal. Why not A: preference tuning uses a collected dataset; continuous online updating is a separate and much harder problem. Why not C: negative examples with a flipped loss are unstable and not what preference tuning does. Why not D: that describes best-of-n reranking at inference, a different technique."
    },
    {
      id: "modelAdaptation-10",
      type: "mcq",
      title: "Serving Many Adapters",
      difficulty: "medium",
      points: 5,
      prompt: "A platform needs a differently tuned model for each of 40 customers. Which serving approach is most practical?",
      options: [
        "Deploy one shared base model with 40 LoRA adapters, loading the right adapter per request so the large base weights are held in memory only once.",
        "Deploy one model fine-tuned on the union of all 40 customers' data, since a single model that has seen every customer's patterns will serve each of them well.",
        "Deploy one base model and place each customer's tuning data in the system prompt at request time, which avoids training and adapter management entirely.",
        "Deploy 40 separate fully fine-tuned models, since isolation per customer is worth the cost and avoids any risk of cross-customer interference at inference.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. This is the reason parameter-efficient tuning matters operationally. One base model occupies memory once, adapters are small, and serving stacks can swap or batch across them, so per-customer cost is the adapter rather than a whole model. Why not B: a union model averages conflicting conventions and leaks one customer's patterns into another's output. Why not C: prompt-based conditioning is worth trying first, but it is not a substitute for tuning and it pays the context cost on every request. Why not D: 40 full models means 40 times the memory and a separate deployment to operate for each."
    },
    {
      id: "modelAdaptation-11",
      type: "mcq",
      title: "Training Data Quality",
      difficulty: "medium",
      points: 5,
      prompt: "A fine-tuning set of 8,000 examples was assembled from historical support tickets, including cases where the agent gave a wrong answer. What is the consequence?",
      options: [
        "The model learns the wrong answers just as faithfully as the right ones, because the objective imitates the data with no notion of correctness.",
        "The model will learn to hedge on the topics where examples conflicted, which is a safe failure mode and is generally acceptable in a support context.",
        "None of consequence, since incorrect examples are a small minority and the training process averages them out against the correct majority.",
        "Training time increases because the model must reconcile conflicting examples, but final quality converges to the same point as a clean dataset would.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Fine-tuning imitates. Nothing in the loss distinguishes a correct example from an incorrect one, so errors in the data become errors in the model, delivered with the same fluency as everything else. Curating the set is usually more of the work than the training run. Why not B: the model will not reliably hedge; it is at least as likely to state a wrong answer confidently. Why not C: errors are learned, not averaged away, particularly if they cluster on specific topics. Why not D: convergence is to the data you provided, so a dirty dataset converges to dirty behaviour."
    },
    {
      id: "modelAdaptation-12",
      type: "mcq",
      title: "Prompt Cost After Tuning",
      difficulty: "medium",
      points: 5,
      prompt: "A team fine-tunes a model on their output format and then keeps their original 4,000 token formatting instructions in the system prompt. What should they do?",
      options: [
        "Keep the instructions but move them after the user content, so they cost the same but exert stronger influence at the point of generation.",
        "Remove the instructions and rely on the tuned behaviour, since a fine-tuned model ignores system prompt instructions that duplicate what it was trained on.",
        "Test removing them. If the tuning holds the format, that is a large per-request saving, and one of the main returns on fine-tuning is a shorter prompt.",
        "Keep the instructions as a safeguard, since a fine-tuned model can still drift and the prompt provides a fallback specification at modest cost.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Trading prompt tokens for trained behaviour is a principal reason to fine-tune in the first place: the instruction is paid once in training rather than on every request. The right move is empirical, remove and measure, keeping only what proves necessary. Why not A: repositioning changes nothing about the cost, which is the point at issue. Why not B: a tuned model does not ignore its system prompt, so this reasoning is wrong even though the action is close to right. Why not D: 4,000 tokens on every request is not a modest cost at volume, and it is a guess rather than a measurement."
    },
    {
      id: "modelAdaptation-13",
      type: "mcq",
      title: "Evaluating a Tuned Model",
      difficulty: "medium",
      points: 5,
      prompt: "A fine-tuned model scores 94 percent on a held-out split of the training data. What does that number establish?",
      options: [
        "That the model generalises to production, since a held-out split was never seen during training and is therefore an unbiased estimate of live performance.",
        "That the model learned the mapping in that dataset. If production input differs from the collected data, the number can badly overstate live performance.",
        "That the model has not overfitted, since overfitting would show as a large gap between training and held-out accuracy rather than a high score on both.",
        "That the training set was large enough, since a score this high on unseen examples indicates the data volume was quite sufficient for the task.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. A held-out split controls for memorisation within a dataset; it says nothing about whether that dataset resembles production. If the examples were drawn from one time period, one customer segment or one channel, the score measures performance on that slice. Evaluate on genuinely fresh production-like input before trusting it. Why not A: unbiased with respect to the collection, not with respect to live traffic. Why not C: it is evidence against one narrow form of overfitting while missing distribution shift entirely. Why not D: a high score can also mean the task was easy or the split was leaky."
    },
    {
      id: "modelAdaptation-14",
      type: "mcq",
      title: "The Decision Rule",
      difficulty: "medium",
      points: 5,
      prompt: "Which framing best captures when to reach for each approach?",
      options: [
        "Prompting for prototypes, retrieval for production, and fine-tuning once traffic justifies the cost, since the three form a natural maturity progression.",
        "Retrieval when the answer depends on your data; fine-tuning when the model must behave differently; prompting first for both, since it is the cheapest way to find out which you need.",
        "Fine-tuning whenever a task is well defined and repeats at volume, retrieval only when documents exceed the context window, and prompting for anything one-off.",
        "Prompting when the base model nearly works, fine-tuning when it clearly does not, and retrieval reserved for those tasks where source citations are contractually required.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. The split is knowledge versus behaviour, and prompting is the cheap experiment that tells you which one you are missing. If the model produces the right kind of answer but with the wrong facts, that is retrieval. If it has the facts but will not follow your conventions, that is tuning. Why not A: they are not maturity stages; a mature system may use retrieval and never fine-tune. Why not C: retrieval is about freshness, citability and scale, not only about the window. Why not D: it reduces retrieval to a compliance feature and skips the knowledge-versus-behaviour distinction."
    },
    {
      id: "modelAdaptation-15",
      type: "mcq",
      title: "The Wrong Reason to Fine-tune",
      difficulty: "hard",
      points: 7,
      prompt: `A team plans to fine-tune so the assistant knows their product catalogue, which has 12,000 items and changes weekly.

{{diagram}}

What is the strongest objection?`,
      diagram: `flowchart LR
  G["Goal<br/><small>answer questions about current stock and pricing</small>"] --> P["Plan<br/><small>fine-tune monthly on a catalogue dump</small>"]
  P --> F["Fallback<br/><b>none</b>"]
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class G source;
  class P agent;
  class F warning;`,
      options: [
        "Fine-tuning on structured catalogue data will damage the model's conversational ability, so the tuned model will answer accurately but interact poorly with customers.",
        "12,000 items is too few to fine-tune on effectively, so the model will not learn the catalogue reliably and will interpolate between similar items.",
        "Monthly training is too infrequent for weekly changes, so the cycle should be tightened to weekly to keep the weights aligned with the catalogue.",
        "Facts in weights cannot be updated, cited, permission-checked or verified. Weekly change leaves the model confidently stale, with no way to tell right from wrong.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. This is the canonical misuse. Facts written into weights lose everything that makes factual answers trustworthy: they cannot be updated between runs, cannot be cited, cannot be filtered by what a given user is allowed to see, and cannot be checked against a source. Pricing and stock are exactly the case for retrieval against the live catalogue. Why not A: some capability loss is plausible but it is a side effect, not the central objection. Why not B: dataset size is not the binding problem and would not fix the approach if solved. Why not C: shortening the cycle treats stale weights as a scheduling issue while leaving citation, permissions and verification unaddressed."
    },
    {
      id: "modelAdaptation-16",
      type: "mcq",
      title: "Tuned Model Underperforms",
      difficulty: "hard",
      points: 7,
      prompt: `A model fine-tuned on 3,000 curated examples performs worse in production than the base model with a good prompt.

{{diagram}}

What is the most likely explanation?`,
      diagram: `flowchart TB
  E["Examples drawn from<br/><b>a single high-volume customer</b>"]
  E --> H["Held-out accuracy<br/>tuned <b>91%</b> · base <b>84%</b>"]
  E --> P["Production quality<br/>tuned <b>clearly worse</b>"]
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  class E warning;
  class H safe;
  class P warning;`,
      options: [
        "Production input is longer than the training examples, so the tuned model encounters inputs outside the length range it was adapted to and degrades on them.",
        "The data came from one customer, so the model learned that customer's conventions as universal. Held-out accuracy is high because the split shares the same bias.",
        "3,000 examples is too few, so the model is undertrained and its production behaviour reflects incomplete learning that more data would resolve.",
        "The base model with a good prompt is inherently stronger, and fine-tuning a general model on a narrow task nearly always degrades it relative to prompting.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. The pattern is diagnostic: the tuned model wins on held-out data and loses in production. Both splits come from the same biased source, so the evaluation inherits the bias and cannot detect it. The model learned one customer's conventions as the rule. Fix the sampling before touching the training recipe. Why not A: length shift is possible but nothing in the scenario suggests it, and it would not produce this clean split between the two measurements. Why not C: undertraining would show as a weak held-out score, not a strong one. Why not D: fine-tuning frequently beats prompting on narrow tasks; the failure here is the data, not the method."
    },
    {
      id: "modelAdaptation-17",
      type: "mcq",
      title: "Cost Crossover",
      difficulty: "hard",
      points: 7,
      prompt: `A classification step runs 40 million times a month.

{{diagram}}

What is the sound conclusion?`,
      diagram: `flowchart TB
  V([40 million calls per month])
  V --> A["Frontier model<br/><small>900 token prompt</small><br/>quality <b>96%</b>"]
  V --> B["Small tuned model<br/><small>120 token prompt</small><br/>quality <b>95%</b>"]
  B --> C["Tuning cost<br/><small>one-off, modest</small>"]
  B --> D["Serving cost per token<br/><b>~20x lower</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef alternative fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  class V agent;
  class A alternative;
  class B,C,D safe;`,
      options: [
        "Stay on the frontier model. A one point quality difference across 40 million decisions is 400,000 additional errors a month, which outweighs any infrastructure saving.",
        "The tuned model wins on cost and the quality gap is small, so switch and monitor. The real questions are what one misclassification costs and whether quality holds as input drifts.",
        "Run both and take the frontier model's answer whenever the two disagree, which preserves quality while moving most of the volume onto the cheaper path.",
        "Neither is right until a third option is tested: prompt the small model without tuning, since the tuning cost may be avoidable at this quality level.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. At this volume a 20x per-token difference compounded with a prompt seven times shorter is an enormous saving against one point of accuracy, so the switch is almost certainly correct. What makes it a judgement rather than arithmetic is the cost of a single error and the fact that a tuned model's quality can drift as input distribution moves, so ongoing monitoring is part of the decision. Why not A: it asserts the error cost without knowing it; for many classification steps a recoverable misroute is cheap. Why not C: running both costs more than the frontier model alone and needs a frontier call on every request to know whether they disagree. Why not D: the untuned small model is a reasonable check but its quality is not given, and it does not address the decision as posed."
    },
    {
      id: "modelAdaptation-18",
      type: "mcq",
      title: "Retrieval and Tuning Together",
      difficulty: "hard",
      points: 7,
      prompt: "A team fine-tunes on question-answer pairs where the answers came from their documents. In production they also retrieve those documents into the prompt. The model sometimes answers from its tuned memory and contradicts the retrieved passage. What is the correct fix?",
      options: [
        "Remove retrieval, since the model has already absorbed the document content through tuning and the retrieved passages are now redundant context.",
        "Increase the retrieval weight by placing passages in the system message rather than the user message, so they carry more authority than the tuned behaviour.",
        "Retrain with the retrieved passage in each training input and the answer derived only from it, so the model learns to ground in context rather than recall from memory.",
        "Lower the temperature so the model is less likely to deviate from the retrieved text, which will reduce the frequency of contradictions to an acceptable level.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The tuning taught it to answer these questions from memory, which is exactly the behaviour now competing with retrieval. Training examples must mirror the production input shape: context plus question in, answer grounded in that context out, including cases where the context does not contain the answer and the correct output is to say so. Why not A: removing retrieval reintroduces staleness and removes citations. Why not B: message role is a weak lever against a trained behaviour. Why not D: temperature does not choose between two sources of an answer."
    },
    {
      id: "modelAdaptation-19",
      type: "mcq",
      title: "Distillation Boundaries",
      difficulty: "hard",
      points: 7,
      prompt: "A team distills a frontier model into a small one for their support workflow. On their evaluation set the student matches the teacher. Which risk is most important to plan for?",
      options: [
        "The student inherits the teacher's mistakes as well as its strengths, so its error rate can never be lower than the teacher's on any category of input.",
        "The student cannot be evaluated fairly against the teacher, since the evaluation set was generated from teacher outputs and is therefore biased toward agreement.",
        "The student will degrade over time as the teacher is updated, so it must be re-distilled on a schedule to stay aligned with the teacher's current behaviour.",
        "The student matches on the distribution the distillation data covered and fails sharply outside it, with no broader capability to fall back on.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Distillation transfers behaviour on the distribution you sampled. Inside it the student can genuinely match; outside it there is no general capability underneath to degrade gracefully into, so failures are sharper and less predictable than the teacher's. Plan for out-of-distribution detection and an escalation path back to the larger model. Why not A: a student can beat its teacher on a narrow task, so the floor claim is wrong. Why not B: the evaluation bias is a real concern but it is a measurement flaw, not the operational risk to plan for. Why not C: the deployed student does not degrade because the teacher changed; that is a maintenance consideration, not a risk to the system."
    },
    {
      id: "modelAdaptation-20",
      type: "mcq",
      title: "Diagnosing the Real Gap",
      difficulty: "hard",
      points: 7,
      prompt: "An assistant is failing. Which observation points at fine-tuning as the right remedy rather than retrieval or prompting?",
      options: [
        "It answers confidently about product features that were removed six months ago, and the current documentation contradicts what it says.",
        "It performs well on common questions and poorly on rare ones, and the rare cases are those with the least documentation available internally.",
        "It cites documents that do not support its claims, and the cited passages are on-topic but do not contain the specific fact being asserted.",
        "It answers correctly but ignores the required output structure about a fifth of the time, and no prompt or examples have closed that gap.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Correct content with unreliable structure, after prompting and examples have been exhausted, is the clearest signal for tuning: the knowledge is there and the behaviour is not, which is precisely what training on many consistent examples fixes. Why not A: stale facts mean the model is answering from priors instead of current documents, which is a retrieval problem. Why not B: poor performance where documentation is thin is a content gap, and no amount of training creates information that was never written down. Why not C: unsupported citations are a grounding and verification problem, so the fix is better retrieval, reranking and a groundedness check."
    }
  ]
};
