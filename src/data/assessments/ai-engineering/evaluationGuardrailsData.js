import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 7 of 15 - Evaluation and Guardrails
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const evaluationGuardrailsData = {
  id: ASSESSMENT_TYPES.evaluationGuardrails,
  level: 7,
  title: "Evaluation and Guardrails",
  shortTitle: "Evals and Guardrails",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Knowing whether the system works and keeping it inside its limits: building evaluation sets that mean something, judge models and their failure modes, offline against online measurement, regression suites in continuous integration, PII handling, content filtering, and red teaming.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Several questions present a metric that looks healthy and ask what it is failing to measure. Telling a real evaluation from a vanity one is the core skill here. No negative marking.",
  questions: [
    {
      id: "evaluationGuardrails-01",
      type: "mcq",
      title: "Why Exact Match Fails",
      difficulty: "easy",
      points: 3,
      prompt: "A team scores a summarisation feature by exact string match against a reference summary. Scores are near zero despite good output. What is the problem?",
      options: [
        "Exact match requires the model to be deterministic, so temperature must be set to zero before the metric produces meaningful scores.",
        "Many wordings can be equally good summaries, so a metric requiring identical text measures conformity to one phrasing, not quality.",
        "Exact match is case and whitespace sensitive, so normalising the text before comparison would make the scores reflect quality accurately.",
        "The reference summaries are too long, so any deviation compounds across the text and pushes the match score toward zero for all but identical output.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Summarisation has no single correct output. A metric demanding the reference wording scores paraphrase as failure, which makes it useless for the task. Open-ended generation needs graded judgement, targeted assertions about required content, or comparison against several references. Why not A: determinism gives you the same wrong score every time. Why not C: normalisation removes trivial mismatches and leaves the real problem untouched. Why not D: length compounds the effect but the flaw exists for a one-sentence summary too."
    },
    {
      id: "evaluationGuardrails-02",
      type: "mcq",
      title: "Offline and Online",
      difficulty: "easy",
      points: 3,
      prompt: "What is the difference between offline evaluation and online evaluation?",
      options: [
        "Offline runs against a fixed dataset before release; online measures live traffic after it. They answer different questions and neither replaces the other one.",
        "Offline runs without calling the model by scoring cached outputs; online calls the live model, which is why online is slower and more expensive to run.",
        "Offline is automated and online is manual, so the choice is between engineering effort up front and human reviewer time on an ongoing basis.",
        "Offline measures the model in isolation and online measures the surrounding application, so together they cover the model and the code paths around it.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Offline asks whether a change is safe to ship, on cases you control, before users see it. Online asks whether it actually helped, on real traffic, with signals like resolution rate, escalation and thumbs-down. Offline catches regressions; online catches the gap between your test set and reality. Why not B: offline evaluation typically does call the model. Why not C: both can be automated, and both can include human review. Why not D: offline suites routinely cover the full application path, not the model alone."
    },
    {
      id: "evaluationGuardrails-03",
      type: "mcq",
      title: "What Belongs in a Regression Suite",
      difficulty: "easy",
      points: 3,
      prompt: "Which cases most deserve a place in a continuous integration regression suite for an LLM feature?",
      options: [
        "Cases that previously broke and were fixed, plus one per critical behaviour, so the suite proves known failures stay fixed and core paths keep working.",
        "Cases where the model previously scored lowest, since those represent the largest available opportunity for measurable improvement over time.",
        "A random sample of production traffic, refreshed each run, so the suite always reflects the current distribution of real user input.",
        "The longest and most complex requests observed, since a system that handles the hardest cases will handle the easier ones by implication.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. A regression suite exists to stop known-good behaviour from silently breaking. Every fixed bug becomes a permanent test, and every critical path gets explicit coverage, so a prompt or model change that reintroduces an old failure is caught before release. Why not B: that is a backlog for improvement work rather than a guard against regression. Why not C: a suite that changes every run cannot distinguish a regression from a different sample. Why not D: hard cases matter but do not imply the easy ones, and easy-case regressions are common."
    },
    {
      id: "evaluationGuardrails-04",
      type: "mcq",
      title: "Judge Models",
      difficulty: "easy",
      points: 3,
      prompt: "Using a strong model to grade another model's output is common. What is the main thing to establish before trusting it?",
      options: [
        "That the judge is run at temperature zero, so repeated grading of the same output produces the same score and the metric is reproducible.",
        "That the judge is at least as capable as the model being graded, since a weaker judge cannot recognise correct answers that exceed its own ability.",
        "That the judge's scores agree with human judgement on a labelled sample, so you know the automated score tracks what you care about.",
        "That the judge is from a different provider than the model under test, so it cannot favour output that matches its own generation style.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A judge is a measurement instrument and must be calibrated against the ground truth it claims to approximate. Label a sample by hand, measure agreement, and only then trust the judge at scale. Without that, you have an automated number with unknown meaning. Why not A: reproducibility without validity means consistently measuring the wrong thing. Why not B: judge capability matters but is neither necessary nor sufficient; a strong judge can still be miscalibrated for your rubric. Why not D: self-preference bias is real and worth testing for, but cross-provider is a mitigation rather than the thing to establish."
    },
    {
      id: "evaluationGuardrails-05",
      type: "mcq",
      title: "Redacting PII",
      difficulty: "easy",
      points: 3,
      prompt: "A support assistant must not send customer identifiers to the model provider. Where should redaction happen?",
      options: [
        "In the system prompt, by instructing the model to ignore and never repeat any identifiers it encounters in the conversation.",
        "In the response handler, by scanning generated output for identifier patterns and removing them before the text reaches the user.",
        "At the provider, by enabling their data protection setting so identifiers are stripped on receipt and excluded from retention.",
        "In your own service before the request leaves it, so identifiers never appear in the provider's request payload, logs or traces.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The requirement is that the data does not leave your boundary, so the control must sit inside that boundary and run before transmission. Anything downstream has already received the data. Why not A: an instruction cannot unsend a payload that already contains the identifier. Why not B: output scanning is a useful second layer but the identifier was already transmitted on the way in. Why not C: a provider setting is a contractual and retention control, not a guarantee the data never arrives."
    },
    {
      id: "evaluationGuardrails-06",
      type: "mcq",
      title: "Red Teaming",
      difficulty: "easy",
      points: 3,
      prompt: "What is the purpose of red teaming an LLM feature before launch?",
      options: [
        "To measure accuracy on the hardest cases in the evaluation set, establishing a worst-case quality figure to publish alongside the average.",
        "To load test the system under adversarial traffic volumes, confirming it degrades gracefully when many users arrive at once.",
        "To verify that safety filters trigger on the specific categories of content listed in the applicable policy documentation.",
        "To have people actively try to make the system misbehave, finding failures that a curated evaluation set was never designed to contain.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Evaluation sets measure what you thought to test. Red teaming is adversarial and open-ended: people probe for jailbreaks, harmful output, data leakage and confidently wrong answers in ways a fixed suite cannot anticipate. Findings then become permanent regression cases. Why not A: hard cases within your set are still cases you chose. Why not B: that is load testing, a different discipline. Why not C: checking that known filters fire is compliance verification, which is narrower and largely automatable."
    },
    {
      id: "evaluationGuardrails-07",
      type: "mcq",
      title: "Building the First Eval Set",
      difficulty: "medium",
      points: 5,
      prompt: "A team is building their first evaluation set for a document question-answering feature. What matters most?",
      options: [
        "Volume above all, since statistical confidence requires several thousand cases and a small set cannot detect meaningful differences between versions.",
        "Coverage of how the feature actually fails, including questions the documents cannot answer, so the set measures what you care about rather than the easy path.",
        "Difficulty, since a set of hard cases produces more headroom for improvement and avoids the ceiling effect that makes easy sets uninformative.",
        "Realism, meaning cases drawn verbatim from production logs, since anything written by the team reflects their assumptions rather than user behaviour.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. A useful set is defined by what it can detect. It needs the normal path, the ambiguous questions, the multi-document questions, and critically the questions whose answer is not in the corpus, where the correct behaviour is to decline. A hundred well-chosen cases beats a thousand that all exercise the same path. Why not A: volume helps precision but a large homogeneous set is still blind to what it omits. Why not C: difficulty is one dimension of coverage, and an all-hard set misses regressions on common traffic. Why not D: production cases are valuable and should dominate, but relying on them alone misses failure modes not yet in the logs."
    },
    {
      id: "evaluationGuardrails-08",
      type: "mcq",
      title: "Judge Position Bias",
      difficulty: "medium",
      points: 5,
      prompt: "A judge model compares two responses and picks the better one. It selects the first response 61 percent of the time across a balanced set. What should the team conclude and do?",
      options: [
        "The first system is genuinely better by a modest margin, and 61 percent is a reasonable win rate to act on given a balanced set of comparisons.",
        "The judge has a position bias. Run each comparison in both orders and count a win only when the judge is consistent, or average the two orderings.",
        "The judge lacks enough context to differentiate, so the rubric should be expanded with explicit criteria until the win rate approaches an even split.",
        "The comparison set is unbalanced despite appearances, so re-sampling it to equalise difficulty across the two systems will remove the skew.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Position bias is a well-documented judge failure: the option presented first is favoured independently of content. The standard control is to evaluate both orderings and only count consistent judgements, which both removes the bias and reveals how often the judge is simply unstable. Why not A: it takes the measurement at face value when the measurement is the thing under suspicion. Why not C: a better rubric helps quality but does not address an ordering artifact. Why not D: set balance does not explain a systematic preference tied to position."
    },
    {
      id: "evaluationGuardrails-09",
      type: "mcq",
      title: "Groundedness",
      difficulty: "medium",
      points: 5,
      prompt: "In a retrieval-based assistant, what does a groundedness check measure, and why is it separate from correctness?",
      options: [
        "Whether the model refused when the passages did not contain an answer, which is the only behaviour a groundedness metric can meaningfully assess.",
        "Whether the retrieved passages were relevant to the question, which is a property of the retriever rather than of the generated answer.",
        "Whether the answer is supported by the retrieved passages. An answer can be true but ungrounded, or grounded in a wrong passage, so the two are independent.",
        "Whether the answer includes a citation for every claim, which is a formatting property that can be checked without reading the passages at all.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Groundedness asks a narrow, checkable question: does the retrieved context support what was said. It is separable from correctness in both directions, since the model can be accidentally right from its priors, or faithfully repeat a wrong document. That separation is what makes it useful, because it isolates fabrication from a corpus problem. Why not A: refusal on missing evidence is one behaviour groundedness informs, not the whole metric. Why not B: that is retrieval relevance, measured on the passages, not the answer. Why not D: citation presence is a formatting check and says nothing about whether the citation supports the claim."
    },
    {
      id: "evaluationGuardrails-10",
      type: "mcq",
      title: "A Metric That Looks Healthy",
      difficulty: "medium",
      points: 5,
      prompt: "A team reports 97 percent user satisfaction from thumbs-up and thumbs-down feedback. Support escalations are rising. What is the likely explanation?",
      options: [
        "Thumbs ratings measure tone rather than correctness, so a polite wrong answer scores as well as a correct one and the metric tracks politeness.",
        "Escalations and satisfaction measure different populations, so both figures can be accurate and the discrepancy carries no actionable signal.",
        "The rating prompt appears too early in the interaction, before users discover whether the answer actually solved their problem.",
        "Feedback is voluntary and skewed: users who got a bad answer usually leave rather than rate, so the sample over-represents the satisfied.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Voluntary feedback has severe response bias. The dominant reaction to a bad answer is abandonment, not a thumbs-down, so the ratings sample the people the system already served well. Escalation rate, containment rate and repeat-contact rate cover the whole population and are the numbers to trust. Why not A: tone bias exists but does not explain a 97 percent figure alongside rising escalations. Why not B: rising escalations against flat satisfaction is precisely the actionable signal that the ratings are unrepresentative. Why not C: prompt timing is a real confound but a smaller one than who chooses to respond at all."
    },
    {
      id: "evaluationGuardrails-11",
      type: "mcq",
      title: "Guardrails at Two Boundaries",
      difficulty: "medium",
      points: 5,
      prompt: "A team debates whether to filter content on the input to the model or on its output. What is the right position?",
      options: [
        "Input only, since blocking a disallowed request before it reaches the model is strictly cheaper and prevents the harmful output from ever being generated.",
        "Output only, since input filtering inevitably rejects legitimate requests that merely resemble disallowed ones and frustrates real users with a steady stream of false positives.",
        "Neither one, provided the underlying model has been safety tuned, since duplicating the provider's safety measures in your own code adds latency without adding protection.",
        "Both, because they catch different things: input filtering blocks disallowed requests and strips sensitive data before it is sent, while output filtering catches what the model produces.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The two boundaries fail in different directions. Input filtering is the only place you can stop sensitive data from leaving your service, and it blocks obviously disallowed requests cheaply. Output filtering catches what the model does with input that looked fine, including leakage of context it should not have repeated. Why not A: input filtering cannot catch a harmful response to a benign-looking prompt. Why not B: output-only leaves you having already transmitted sensitive input. Why not C: provider safety tuning is not tuned to your policy, your data or your users."
    },
    {
      id: "evaluationGuardrails-12",
      type: "mcq",
      title: "Sample Size and Confidence",
      difficulty: "medium",
      points: 5,
      prompt: "A prompt change moves the score on a 50-case evaluation set from 82 percent to 86 percent. What is the right conclusion?",
      options: [
        "The score is uninformative, since percentage metrics require several hundred cases before any difference between two versions can be interpreted at all.",
        "That is two extra cases passing. On 50 cases that is within sampling noise, so either expand the set or check whether the same two move on a rerun.",
        "A 4 point gain is a meaningful improvement and the change should ship, since the same set was used for both measurements and the comparison is therefore controlled.",
        "The change is a regression risk because a gain this small on a small set usually indicates overfitting to a handful of cases rather than genuine improvement.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Converting the percentage back into counts is the discipline: 82 to 86 percent on 50 cases is two additional passes. That is indistinguishable from noise, particularly with any sampling variation in generation. Either grow the set until the effect size is detectable, or inspect exactly which cases changed and why. Why not A: small sets are informative for large effects; the issue is this effect is small. Why not C: using the same set controls for case difficulty but not for the size of the effect being claimed. Why not D: it might be overfitting, but the immediate problem is that nothing has been established either way."
    },
    {
      id: "evaluationGuardrails-13",
      type: "mcq",
      title: "Refusal as a Measured Behaviour",
      difficulty: "medium",
      points: 5,
      prompt: "An assistant should decline when the retrieved documents do not contain an answer. How should that be evaluated?",
      options: [
        "Measure the overall refusal rate and set a target range, since too many refusals frustrate users and too few indicate the model is fabricating answers.",
        "Include cases with no supporting document and score whether it declined, plus answerable cases scored on whether it answered rather than over-refused.",
        "Measure refusals only on production traffic, since synthetic unanswerable questions do not resemble the questions users actually ask.",
        "Treat every refusal as a retrieval failure to investigate, since a well-built corpus should contain an answer to any question a user legitimately asks.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Refusal has two failure modes pulling in opposite directions, and a single rate cannot separate them. You need labelled unanswerable cases to measure fabrication, and labelled answerable cases to measure over-refusal, because a change that fixes one commonly breaks the other. Why not A: a rate with a target range conflates the two and moves for either reason. Why not C: production refusals lack ground truth about whether an answer existed, which is what makes labelled cases necessary. Why not D: some questions are genuinely outside the corpus, and declining those is correct behaviour rather than a defect."
    },
    {
      id: "evaluationGuardrails-14",
      type: "mcq",
      title: "Evals in Continuous Integration",
      difficulty: "medium",
      points: 5,
      prompt: "A team wants their LLM evaluation suite to run on every pull request. What is the practical obstacle and the usual resolution?",
      options: [
        "Model calls make the suite slow and costly on every pull request. Run a fast subset per request and the full suite nightly, with thresholds rather than exact matches.",
        "Providers rate limit continuous integration traffic, so the suite must run against a locally hosted model, which then does not reflect production behaviour.",
        "Model outputs vary between runs, so the suite cannot produce a stable pass or fail. Pin sampling to greedy decoding and require byte-identical output against stored references.",
        "The suite needs production data that cannot be used in continuous integration for privacy reasons. Generate synthetic equivalents and accept the reduced fidelity.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The real constraints are wall time and money on every push. The standard shape is a fast, cheap smoke subset gating each pull request, the full suite on merge or nightly, and scoring by threshold or graded judgement rather than exact match, because outputs vary. Why not B: rate limits are manageable with a dedicated key and are not the primary obstacle. Why not C: byte-identical assertions on generated text are brittle and will fail on valid paraphrase. Why not D: privacy is a real concern but is handled by anonymising and curating a fixture set, not a reason evals cannot run."
    },
    {
      id: "evaluationGuardrails-15",
      type: "mcq",
      title: "The Judge Agrees With Itself",
      difficulty: "hard",
      points: 7,
      prompt: "A team uses one model to generate answers and the same model to judge them against a rubric. Judge scores average 4.6 out of 5. Human review of the same outputs averages 3.1. What is happening?",
      options: [
        "The rubric is too coarse at five points, so the judge clusters near the top. A finer scale would spread the scores and bring the average closer to human judgement.",
        "Humans and models weight rubric criteria differently, so the gap reflects a legitimate difference of opinion rather than an error in the automated measurement.",
        "A model judging its own output shares the blind spots that produced it, so what it missed when generating it misses when grading. Use a different judge and calibrate against human labels.",
        "The judge sees only the output and not the input, so it grades fluency and internal consistency rather than whether the answer addressed the question asked.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Self-evaluation is correlated evaluation. Whatever the model failed to notice while generating is exactly what it fails to notice while grading, so the errors are invisible to it by construction, and there is a documented tendency to prefer its own style as well. The fix is an independent judge, validated against human labels on a sample. Why not A: rescaling changes the numbers without changing what the judge can see. Why not B: a 1.5 point gap is not a difference of opinion, it is a broken instrument. Why not D: a plausible bug worth checking, but it does not explain the specific pathology of a model rating its own work highly."
    },
    {
      id: "evaluationGuardrails-16",
      type: "mcq",
      title: "Aggregate Hides the Failure",
      difficulty: "hard",
      points: 7,
      prompt: `An evaluation dashboard shows the following.

{{diagram}}

What is the correct reading?`,
      diagram: `flowchart TB
  O["Overall accuracy<br/><b>94%</b><br/><small>stable for 3 months</small>"]
  O --> C["Complaints<br/><b>rising</b>"]
  O --> R["Refund-related queries<br/><b>8%</b> of traffic"]
  R --> A["Accuracy on refunds<br/><b>61%</b>"]
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class O safe;
  class R source;
  class C,A warning;`,
      options: [
        "94 percent overall is healthy and 61 percent on 8 percent of traffic costs under 3 points of overall accuracy, so the priority should be whichever category holds the most absolute errors.",
        "The refund category likely has mislabelled ground truth, since a 33 point gap against a stable overall figure more often indicates an evaluation defect than a model one.",
        "Three months of stability shows the model is not regressing, so the rising complaints must originate in a part of the product that the evaluation suite does not cover.",
        "The overall figure is dominated by easy high-volume categories, so a severe failure in a small high-stakes slice is invisible. Alert per category, weighted by consequence not volume.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Averages hide exactly the failures that matter most, because a small category cannot move a large mean no matter how badly it fails. Refunds are money, so the consequence per error is far higher than the volume suggests. Segment the metric, alert per category, and weight by impact rather than traffic share. Why not A: it does the arithmetic correctly and then draws the wrong conclusion, optimising for error count over error cost. Why not B: label quality is worth checking but assuming it explains the gap is how a real failure gets dismissed. Why not C: stability of a metric that cannot see the problem is not evidence the problem is elsewhere."
    },
    {
      id: "evaluationGuardrails-17",
      type: "mcq",
      title: "Guardrail False Positives",
      difficulty: "hard",
      points: 7,
      prompt: "A medical information assistant adds a safety classifier that blocks anything resembling clinical advice. Blocked requests fall from 12 percent to 0.4 percent after tuning, and user complaints about unhelpfulness drop sharply. What should the team check before declaring success?",
      options: [
        "Whether tuning reduced blocking by lowering the classifier's threshold, in which case disallowed requests are now passing and the complaint drop reflects that, not better precision.",
        "Whether the remaining 0.4 percent are correctly blocked, since a residual rate this low suggests the classifier may now be blocking only the most obvious cases.",
        "Whether the drop in complaints is statistically significant given the traffic volume, since a change this large over a short window may reflect seasonality.",
        "Whether users have learned to rephrase around the classifier, which would show as a lower block rate without any change in what the system actually permits.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Block rate and complaint volume both improve when you simply block less, so neither distinguishes better precision from a weaker filter. The measurement that settles it is a labelled set of should-block and should-allow cases, scored for false negatives as well as false positives. A safety control tuned only against complaints will always drift open. Why not B: the direction of concern is right but it treats a low rate as suspicious rather than testing recall directly. Why not C: significance is worth confirming and does not address the substantive risk. Why not D: user adaptation is a real phenomenon but would not produce this drop immediately after a tuning change."
    },
    {
      id: "evaluationGuardrails-18",
      type: "mcq",
      title: "Evaluating a Multi-Step Pipeline",
      difficulty: "hard",
      points: 7,
      prompt: "A pipeline runs: retrieve, rerank, generate, then post-process. End-to-end accuracy is 71 percent and the team wants to know where to invest. What is the right approach?",
      options: [
        "Instrument each stage with its own metric against stage-level ground truth, so you can see whether the answer was even retrievable before asking why generation went wrong.",
        "Run the whole pipeline with a stronger model at the generation step, since generation is the only stage where model capability varies and it therefore bounds overall quality.",
        "Compare end-to-end accuracy against a single-call baseline with no retrieval, since the difference isolates how much the retrieval pipeline is contributing in total.",
        "Ablate one stage at a time by removing it and re-measuring end to end, since the size of the accuracy drop reveals how much each stage contributes.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. End-to-end numbers tell you the system is wrong, never where. Per-stage measurement against per-stage ground truth is what localises it: retrieval recall says whether the answer was present at all, reranking says whether it survived to the prompt, groundedness says whether generation used it. Without that, effort goes to whichever stage someone guesses. Why not B: it assumes the answer before measuring, and if retrieval never returned the passage a stronger generator cannot help. Why not C: that measures the pipeline's total contribution, which is a different question from where it fails. Why not D: ablation is informative but coarse, and removing a stage changes the input distribution of every stage after it."
    },
    {
      id: "evaluationGuardrails-19",
      type: "mcq",
      title: "PII in the Whole Path",
      difficulty: "hard",
      points: 7,
      prompt: "A team redacts identifiers from prompts before sending them to the provider. An audit still finds customer identifiers in stored data. Where are they most likely surviving?",
      options: [
        "In the model's responses, since a redacted prompt can still elicit an identifier the model reconstructs from surrounding context and repeats in its output.",
        "In the retrieved documents injected into the prompt, since redaction was applied to the user's message but the retrieval step adds untouched source text afterwards.",
        "In the observability path: traces, debug logs, evaluation datasets built from real traffic, and cached responses, none of which the redaction step covers.",
        "In the conversation history, since redaction runs on the current turn while earlier turns were stored before the redaction step was introduced.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Redaction placed at one point in the request path leaves every other surface untouched, and those surfaces are numerous: traces, application logs, cached responses, evaluation fixtures curated from production, and error reports capturing full payloads. The control has to be a property of the data path rather than a step in one function. Why not A: model-reconstructed identifiers are a real risk but a narrower one than the systematic gap. Why not B: unredacted retrieval is a genuine hole and worth checking, but it is one of several rather than the most likely explanation of identifiers in stored data. Why not D: historical records matter for remediation but do not explain new ones appearing."
    },
    {
      id: "evaluationGuardrails-20",
      type: "mcq",
      title: "The Eval Set Goes Stale",
      difficulty: "hard",
      points: 7,
      prompt: "A stable evaluation suite has scored 88 to 91 percent for a year. Live quality complaints have roughly doubled over the same period. Nothing in the model or prompt has changed. What is the most likely explanation?",
      options: [
        "The suite has been overfitted through repeated tuning, so its score no longer generalises even though no individual change was large enough to notice.",
        "Production input has drifted from what the suite represents: new segments, new phrasings, new topics. It still measures last year's traffic and not today's.",
        "Complaint volume grows with the user base, so a doubling may reflect growth rather than a fall in quality, and the rate per session is the figure to compare.",
        "The suite's ground truth has aged, since the correct answers to some cases have changed while the stored references have not, so the score now rewards outdated answers.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. A fixed set measures a fixed distribution. As traffic evolves, the suite keeps answering last year's question accurately while the live system faces a different one. Evaluation sets need continuous refresh from current traffic, with an explicit review of what has entered the distribution since. Why not A: overfitting requires repeated tuning against the set, and the scenario says nothing changed. Why not C: it is a fair methodological caution and should be checked first, but it explains the number rather than the underlying risk the question is probing. Why not D: stale ground truth is a real decay mode and worth auditing, though it usually affects a minority of cases rather than doubling complaints."
    }
  ]
};
