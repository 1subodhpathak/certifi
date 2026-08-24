import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 10 of 15 - Production RAG
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const productionRagData = {
  id: ASSESSMENT_TYPES.productionRag,
  level: 10,
  title: "Production RAG",
  shortTitle: "Production RAG",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Keeping a retrieval system honest after launch: incremental indexing and freshness, deletion and the right to be forgotten, groundedness and citation verification, per-tenant isolation, evaluation that survives a changing corpus, cost and latency at volume, and the failure modes that only appear in month three.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. These questions assume the system already works on day one and ask what breaks by month six. Several distractors are fixes that work at prototype scale and fail in production. No negative marking.",
  questions: [
    {
      id: "productionRag-01",
      type: "mcq",
      title: "Keeping the Index Fresh",
      difficulty: "easy",
      points: 3,
      prompt: "A source system emits document change events. What is the right indexing strategy?",
      options: [
        "Rebuild the whole index nightly, since a full rebuild is simpler to reason about and guarantees the index matches the source exactly each morning.",
        "Consume the change events and update affected chunks incrementally, with a periodic reconciliation to catch what the stream missed.",
        "Re-embed a document only when a user query fails to find it, so indexing work is done lazily and only for content that is actually being searched for.",
        "Keep the index static and pass any documents changed since the last build directly into the prompt, so recent edits bypass retrieval entirely.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Incremental updates keep the index current within seconds and cost only the work the change requires. The periodic reconciliation matters just as much, because event streams drop messages, and a slow divergence between index and source is one of the hardest bugs to notice. Why not A: nightly rebuilds mean up to a day of staleness and re-embed unchanged content at full cost. Why not C: a failed query gives no signal about which document was missing. Why not D: recent edits are unbounded in volume and would not fit a prompt."
    },
    {
      id: "productionRag-02",
      type: "mcq",
      title: "Deleting a Document",
      difficulty: "easy",
      points: 3,
      prompt: "A document is deleted from the source system. What must happen in the retrieval system?",
      options: [
        "Its chunks must be removed from the vector index and from any caches or derived stores, since one left behind stays retrievable and quotable.",
        "Its chunks can be left in place and marked inactive, since the embedding is a lossy representation and does not constitute a copy of the original text.",
        "Nothing immediate, since the next scheduled full rebuild will omit it and the exposure window is short enough to be acceptable in most systems.",
        "Its chunks must be re-embedded with a deletion marker so queries can detect that the document once existed and report it as withdrawn.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Chunks are stored with their original text so it can be placed in a prompt, so an orphaned chunk is a live copy of deleted content that the assistant will happily quote. Deletion has to propagate everywhere the content was copied, including caches, derived summaries and evaluation fixtures. Why not B: the stored chunk text is a copy regardless of what the vector is, and inactive is only safe if the filter is actually enforced everywhere. Why not C: an exposure window is exactly what a deletion request does not permit. Why not D: retaining a marker retains the record; deletion means removal."
    },
    {
      id: "productionRag-03",
      type: "mcq",
      title: "Citations That Can Be Checked",
      difficulty: "easy",
      points: 3,
      prompt: "An assistant returns citations. What makes them trustworthy rather than decorative?",
      options: [
        "Presenting citations as links to the source system, so a user who doubts the answer can open the document and read the surrounding context.",
        "Citing at the document level rather than the passage level, so the reference stays valid even after the document is edited and its passages shift.",
        "Requiring the model to cite at least one source per paragraph, so no section of the answer is left without an attributed origin.",
        "Verifying that the cited passage actually supports the claim, rather than trusting that an emitted citation matches anything used.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A model can emit a citation that looks correct and points at a passage that does not support the sentence, because producing citation-shaped text is easy. Verification, whether by an entailment check, a judge, or a string match against the retrieved passage, is what turns a citation into evidence. Why not A: links help users but the citation may still be unsupported. Why not B: document-level citation is coarser and makes verification harder. Why not C: a per-paragraph quota encourages citing something rather than citing correctly."
    },
    {
      id: "productionRag-04",
      type: "mcq",
      title: "Per-Tenant Isolation",
      difficulty: "easy",
      points: 3,
      prompt: "A retrieval system serves many customer organisations from one deployment. What is the minimum requirement?",
      options: [
        "Every query must be scoped to the requesting tenant inside the search itself, so another tenant's vectors are never candidates for any query.",
        "Each tenant's documents must be embedded with a tenant-specific model, so vectors from different tenants are not comparable and cannot match each other.",
        "Each tenant must have their results filtered after retrieval, with an audit log recording any cross-tenant passage that was retrieved and then discarded.",
        "Each tenant's documents must be prefixed with their organisation name before embedding, so the tenant identity becomes part of the vector's meaning.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Tenant scoping is an authorisation boundary, so it must be enforced in the query where it cannot be bypassed, whether by a namespace, a partition, or a mandatory filter. Anything that lets another tenant's vector become a candidate is a leak waiting for a bug. Why not B: per-tenant models are enormously expensive and vectors from different models are still comparable enough to return, just badly. Why not C: post-filtering means the data was retrieved, which is the thing to prevent, and an audit log records the leak rather than stopping it. Why not D: text prefixes shift similarity slightly and enforce nothing."
    },
    {
      id: "productionRag-05",
      type: "mcq",
      title: "What to Log Per Query",
      difficulty: "easy",
      points: 3,
      prompt: "Which per-request record makes a retrieval system debuggable in production?",
      options: [
        "Aggregate counters per stage such as candidates retrieved and passages used, which keep the log volume manageable while showing pipeline health.",
        "The full text of every retrieved passage alongside the answer, so a reviewer can read exactly what the model saw without querying the index again.",
        "The user's question and the final answer, which together let you reproduce the case by re-running the same query through the pipeline.",
        "The rewritten query, retrieved passage identifiers with scores, what survived reranking, the prompt sent, and the answer, so any stage can be inspected later.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. When an answer is wrong you need to know which stage lost it, and that requires the intermediate artifacts: what was actually searched for, what came back and in what order, what survived, and what the model was finally given. Identifiers plus scores keep this affordable. Why not A: aggregates show health and cannot explain a single bad answer. Why not B: storing full passage text is the same information at far greater cost and duplicates content subject to deletion. Why not C: re-running is unreliable because the corpus and the model may have changed since."
    },
    {
      id: "productionRag-06",
      type: "mcq",
      title: "Cost at Volume",
      difficulty: "easy",
      points: 3,
      prompt: "A retrieval assistant's monthly cost is dominated by input tokens. Which change targets that most directly?",
      options: [
        "Cache full answers by question, so repeated questions are served without any model call and the input tokens for them are avoided entirely.",
        "Reduce passages per query and cache the static prompt prefix, since retrieved context repeated every request is the largest input block.",
        "Shorten the generated answers, since output tokens are priced higher and reducing them has a larger effect per token removed than reducing input.",
        "Switch to a cheaper generation model, since the model tier multiplies every token processed and is the single largest factor in the bill.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. In a retrieval system the retrieved passages plus the system prompt usually dwarf both the question and the answer. Sending three well-ranked passages instead of ten, and caching the invariant prefix, attacks the actual bulk. Why not A: exact-question caching has a very low hit rate on free-form input. Why not C: output is priced higher per token but is a small fraction of volume when input is dominant. Why not D: a cheaper model is a real lever but changes quality and does not reduce the token count."
    },
    {
      id: "productionRag-07",
      type: "mcq",
      title: "Re-embedding Without Downtime",
      difficulty: "medium",
      points: 5,
      prompt: "A team must move to a better embedding model over a corpus of 40 million chunks. What is the correct migration?",
      options: [
        "Run both models on every query and merge the two result sets, so the system benefits from the new model immediately without any migration period.",
        "Re-embed only the most frequently retrieved chunks first, so the majority of live queries see the improvement quickly and the remainder can follow gradually.",
        "Re-embed in place, replacing each vector as its new embedding is computed, so the index is never offline and quality improves progressively during the migration.",
        "Build a second index with the new model, verify quality on a held-out query set, then switch traffic in one step and retire the old one.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Vectors from two models are not comparable, so an index containing both is incoherent for as long as the migration runs. Building alongside, validating, and cutting over atomically means no query ever spans two spaces, and the old index is a working rollback until you retire it. Why not A: merging rankings from two spaces gives an arbitrary ordering. Why not B: partial re-embedding is the mixed-index problem again, deliberately prolonged. Why not C: in-place replacement guarantees a mixed index for the entire migration, which for 40 million chunks could be days."
    },
    {
      id: "productionRag-08",
      type: "mcq",
      title: "Groundedness in Production",
      difficulty: "medium",
      points: 5,
      prompt: "A team wants to catch fabricated answers on live traffic, where no ground truth exists. What is workable?",
      options: [
        "Compare each live answer against the answer the same question received previously, and flag any case where the two differ materially.",
        "Ask users to confirm whether each answer was correct, and treat the confirmation rate as a live groundedness signal for the system.",
        "Re-run each answered query through a second model and flag any case where the two models produce different answers from the same passages.",
        "Score a sample of live answers for whether each claim is supported by the retrieved passages, using an entailment model or judge, and alert when it drops.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Groundedness is checkable without ground truth, because the question is whether the answer follows from the passages rather than whether it is true. That makes it the one strong quality signal available on live traffic, and sampling keeps it affordable. Why not A: most questions are not repeated, and a differing answer to a rephrased question is not evidence of fabrication. Why not B: voluntary confirmation is sparse and heavily biased. Why not C: two models can disagree while both remain grounded, and it doubles cost."
    },
    {
      id: "productionRag-09",
      type: "mcq",
      title: "Evaluating a Moving Corpus",
      difficulty: "medium",
      points: 5,
      prompt: "A fixed evaluation set of 300 question-answer pairs decays in usefulness as the corpus changes. What is the sound practice?",
      options: [
        "Version the evaluation set against the corpus, review cases whose answers changed, and keep a stable core for regression plus a rotating set from recent traffic.",
        "Score only on questions whose supporting documents have not changed since the set was written, excluding the rest until their answers are manually re-verified.",
        "Freeze a snapshot of the corpus alongside the evaluation set, so the same questions always have the same correct answers and scores remain comparable over time.",
        "Regenerate the evaluation set from the current corpus before each run, so questions always reflect current content and no answer can become stale.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Two needs pull in opposite directions: comparability over time requires stability, and relevance requires currency. Running both a stable core and a rotating recent set gives you a trend line you can trust and a signal about traffic you actually serve now, with an explicit review whenever a stored answer goes stale. Why not B: excluding changed cases shrinks the set toward the static corners of the corpus. Why not C: a frozen corpus makes scores comparable and increasingly disconnected from the live system. Why not D: regenerating everything destroys comparability run to run."
    },
    {
      id: "productionRag-10",
      type: "mcq",
      title: "Latency Budget",
      difficulty: "medium",
      points: 5,
      prompt: `A retrieval assistant reports p95 of 4.2 seconds.

{{diagram}}

Where should optimisation start?`,
      diagram: `flowchart LR
  A["Query rewrite<br/><b>0.5 s</b>"] --> B["Vector search<br/><b>0.2 s</b>"]
  B --> C["Rerank 50 to 5<br/><b>0.9 s</b>"]
  C --> D["Generation<br/><b>2.6 s</b>"]
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class A,C source;
  class B safe;
  class D warning;`,
      options: [
        "Reranking, since 0.9 s for reordering five passages is disproportionate to the value it adds compared with the other stages in the pipeline.",
        "Query rewrite, since 0.5 s is spent before retrieval even begins and the step can be skipped entirely for queries that are already standalone.",
        "Generation at 2.6 s is the largest block, so stream first to cut perceived latency, then reduce input passages and consider a faster model.",
        "Vector search, since it is the only stage that scales with corpus size and will become the dominant cost as the index grows over time.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Attack the largest block first. Generation is 62 percent of the budget, and streaming converts most of that wait into visible progress without touching the pipeline at all, after which fewer input passages and a faster model are the substantive levers. Why not A: 0.9 s is worth measuring against its accuracy contribution but it is a third of generation's cost. Why not B: conditional rewriting is a genuine saving and the smallest block here. Why not D: 0.2 s is negligible and vector search scales sub-linearly with corpus size."
    },
    {
      id: "productionRag-11",
      type: "mcq",
      title: "The Corpus Grows Stale in Parts",
      difficulty: "medium",
      points: 5,
      prompt: "Some documents in a corpus are updated weekly and others have not changed in four years. Queries increasingly surface the old ones. What is likely happening?",
      options: [
        "Older documents are longer and more general, so they match many queries weakly, while specific recent ones match fewer queries strongly.",
        "Embedding models drift toward recent language, so documents written in older phrasing gradually fall out of alignment with how users write queries today.",
        "Older documents accumulate more inbound references over time, and the ranking signal derived from those references now favours them over newer content.",
        "The corpus has grown and older documents make up a larger share of it, so more of them appear in any top-k purely by proportion.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Long general documents sit near the centre of the space and are plausible matches for many queries, while short specific ones match a narrow set sharply. Over time an accumulation of general documents crowds top-k results across the board. Recency signals in ranking, chunk-size normalisation, and retiring superseded content all help. Why not B: a pinned embedding model does not drift. Why not C: a plain vector index has no inbound reference signal unless you built one. Why not D: proportion alone would not shift results if relevance ranking were working."
    },
    {
      id: "productionRag-12",
      type: "mcq",
      title: "Handling the Not-Found Case",
      difficulty: "medium",
      points: 5,
      prompt: "Roughly 15 percent of user questions have no answer anywhere in the corpus. What is the right product behaviour?",
      options: [
        "Lower the similarity threshold so something is always returned, so the assistant never appears unhelpful and the model can always ground its answer in a passage.",
        "Answer from the model's general knowledge when the corpus lacks an answer, clearly marked as unsourced, since a useful answer beats no answer for most users.",
        "Return the closest passages found and let the user judge relevance, since the system cannot reliably determine whether an answer is present in them.",
        "Detect the case and say the answer was not found, ideally naming what was searched and offering an escalation path, and track the rate as a content gap signal.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A clear not-found is a correct answer, and it is far more valuable than a confident wrong one. It also turns 15 percent of traffic into a measurable list of what the documentation is missing, which is often the highest-value output of the whole system. Why not A: guaranteeing a passage guarantees an ungrounded answer built on an irrelevant one. Why not B: mixing sourced and unsourced answers erodes the guarantee that makes retrieval worth building, and users overlook the marker. Why not C: pushing the judgement onto the user is the system declining to do its job."
    },
    {
      id: "productionRag-13",
      type: "mcq",
      title: "Index Size and Memory",
      difficulty: "medium",
      points: 5,
      prompt: "An index of 200 million chunks at 1,536 dimensions in 32-bit floats no longer fits in memory. Which approach preserves quality best?",
      options: [
        "Quantise the vectors to a smaller representation and optionally reduce dimensions, keeping full-precision rescoring on the shortlist to recover the lost accuracy.",
        "Increase chunk size so fewer chunks are needed, which reduces vector count proportionally while keeping the same content in the index.",
        "Move the index to disk-backed storage and rely on the operating system page cache to keep frequently accessed regions resident in memory.",
        "Reduce the corpus by dropping the least frequently retrieved chunks, since a large fraction of any index is never returned by real queries.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Quantisation cuts memory several-fold for a small recall cost, and rescoring the shortlist at full precision recovers most of that cost because only a few hundred vectors need the accurate comparison. Dimension reduction stacks with it where the embedding model supports it. Why not B: larger chunks trade a real quality loss in matching precision for memory. Why not C: disk-backed indexes are a legitimate option and pay a large latency cost with unpredictable page-cache behaviour under mixed queries. Why not D: retrieval frequency is a poor proxy for value, and the rare document is often the one worth having."
    },
    {
      id: "productionRag-14",
      type: "mcq",
      title: "Feedback That Improves Retrieval",
      difficulty: "medium",
      points: 5,
      prompt: "Users can mark an answer unhelpful. How should that signal be used to improve retrieval?",
      options: [
        "Down-rank the passages retrieved for any query that received negative feedback, so poorly performing content surfaces less often over time.",
        "Retrain the embedding model periodically on the negatively rated queries, so the space adapts to the cases where retrieval is currently failing.",
        "Treat flagged cases as a queue for inspection: check whether retrieval or generation failed, add confirmed cases to the evaluation set, and fix that stage.",
        "Route negatively rated queries to a stronger generation model on retry, since the passages retrieved were probably adequate and generation was the weaker stage.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Negative feedback marks a case worth examining, not a cause. The value comes from diagnosis, since the same signal can indicate a retrieval miss, a generation failure, or a genuine content gap, and each needs a different fix. Confirmed cases then become permanent evaluation cases. Why not A: automatic down-ranking on an unreliable signal will suppress correct content that happened to appear in a bad answer. Why not B: negatively rated queries are far too few and too noisy to train an embedding model. Why not D: it assumes the diagnosis rather than performing it."
    },
    {
      id: "productionRag-15",
      type: "mcq",
      title: "The Slow Divergence",
      difficulty: "hard",
      points: 7,
      prompt: `A retrieval system built on change events works well, then degrades over months.

{{diagram}}

What is happening and what is the fix?`,
      diagram: `flowchart TB
  S["Source system<br/><b>1.42 million</b> documents"] -->|change events| I["Index<br/>corresponds to <b>1.31 million</b>"]
  L["Indexer log<br/><small>no errors</small>"] -.-> I
  R["Recent documents<br/><small>index correctly</small>"] -.-> I
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class S source;
  class I warning;
  class L,R safe;`,
      options: [
        "Events have been lost through retries, restarts and deployments, and nothing reconciles index against source. Add a periodic diff of both sides that repairs the gap.",
        "The index has reached a document limit in its configuration and is silently refusing new writes beyond it, which is why only recent documents appear to index correctly.",
        "The indexer is silently dropping documents that fail extraction, so unparseable formats are lost without an error. Add extraction failure alerting and reprocess the affected documents.",
        "Chunks are being over-merged, so several documents share a chunk and the count understates coverage. Adjust the chunking so document boundaries are always respected.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. An 8 percent gap that grew slowly with a clean log is the signature of lost events rather than failures, since a failure would have logged something. Event streams drop messages during restarts and deployments, and without reconciliation those documents are simply never indexed and never noticed. The durable fix is a scheduled diff between source and index that repairs discrepancies, plus a monitored count difference. Why not B: a write limit would stop recent documents from indexing, which contradicts the evidence. Why not C: extraction failures are a real cause and would appear in the log. Why not D: chunk merging across documents is not standard behaviour."
    },
    {
      id: "productionRag-16",
      type: "mcq",
      title: "Deletion Across the Whole Path",
      difficulty: "hard",
      points: 7,
      prompt: "A customer exercises a deletion request. The team removes the chunks from the vector index. Where might the content still exist?",
      options: [
        "In the embedding vectors of neighbouring chunks, since overlap means adjacent chunks contain part of the deleted text and must also be removed or re-created.",
        "In the reranker's scoring cache, which stores query and passage pairs and would return the deleted passage's text if the same query were issued again.",
        "In the source document store only, since the retrieval system holds derived representations that no longer constitute the original personal data once vectors are removed.",
        "In query logs and traces that captured passage text, cached responses, evaluation fixtures built from production traffic, provider retention, and derived summaries or backups.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Deletion is a data path problem, not an index operation. Content spreads to every surface that touched it: logs and traces that captured the passages, response caches, evaluation datasets curated from real traffic, backups, and whatever the model provider retains under your agreement. The systems that can honour deletion are the ones designed with an inventory of where copies go. Why not A: overlap is a genuine and often overlooked detail, and it is one item on the list rather than the answer. Why not B: a reranker cache is one more surface, again a subset of the real answer. Why not C: the stored chunk text is a copy, and derived data is still within scope."
    },
    {
      id: "productionRag-17",
      type: "mcq",
      title: "Tenant Data Leak Path",
      difficulty: "hard",
      points: 7,
      prompt: "A multi-tenant system scopes every vector query by tenant. A customer still reports seeing another organisation's content. Retrieval logs confirm every retrieved chunk belonged to the correct tenant. Where is the leak?",
      options: [
        "In the embedding model, which was fine-tuned on the combined corpus of all tenants, so it can reproduce phrasings learned from another organisation's documents.",
        "In the vector index, where approximate search occasionally crosses partition boundaries under high load and returns a neighbour from an adjacent tenant's region.",
        "Somewhere other than retrieval: a shared cache keyed without tenant, a summary or memory store written per user but read too broadly, or a prompt template holding content from a prior request.",
        "In the reranker, which scores candidates from the full index rather than the tenant-scoped set, so a cross-tenant passage can be promoted into the final result.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The logs eliminate retrieval, so the leak is on a path that was never scoped. The usual culprits are a response or embedding cache keyed on the query alone, a conversation or memory store whose read scope is broader than its write scope, or state that persists between requests in a long-lived process. Scoping must be a property of every layer that holds data, not of the search call alone. Why not A: a fine-tuned embedding model does not reproduce document text; it produces vectors. Why not B: approximate search stays within its filter and does not cross partitions under load. Why not D: a reranker scores what it is given, and the logs confirm what that was."
    },
    {
      id: "productionRag-18",
      type: "mcq",
      title: "Chasing Quality in the Wrong Place",
      difficulty: "hard",
      points: 7,
      prompt: `Over two quarters a team improves their retrieval pipeline substantially.

{{diagram}}

What should they investigate?`,
      diagram: `flowchart TB
  Q([Two quarters of work])
  Q --> A["Recall at 5<br/><b>0.74 to 0.91</b>"]
  Q --> B["Groundedness<br/><b>0.88 to 0.96</b>"]
  Q --> C["User complaints<br/><b>unchanged</b>"]
  C --> D["Most complaints<br/><small>&quot;it did not answer my question&quot;</small>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class Q agent;
  class A,B safe;
  class C,D warning;`,
      options: [
        "Whether the improvements were measured on an evaluation set that no longer represents production traffic, so the gains are real on the set and absent in the live distribution.",
        "Whether the answers are grounded but unhelpful: technically supported by the passages while failing to address what the user actually wanted to know.",
        "Whether users are asking questions the corpus cannot answer at all, in which case better retrieval over the same content cannot help and the gap is a content problem.",
        "Whether the groundedness metric is measuring the right thing, since a rise to 0.96 alongside unchanged complaints suggests the judge is miscalibrated.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The complaint text is the strongest evidence available and it points at absence rather than inaccuracy. If the answer is not in the corpus, recall and groundedness can both approach their ceiling while the user experience does not move, because the pipeline is retrieving perfectly from content that does not contain what was asked. The measurement to add is the not-found rate segmented by topic, which converts complaints into a documentation backlog. Why not A: an unrepresentative evaluation set is also worth testing, and it too leaves the specific complaint unexplained. Why not B: grounded but unhelpful is a real failure mode and would more often produce complaints about relevance than about not answering at all. Why not D: judge miscalibration is a fair check and would be next, but it does not explain a complaint about not answering."
    },
    {
      id: "productionRag-19",
      type: "mcq",
      title: "Caching in a Retrieval System",
      difficulty: "hard",
      points: 7,
      prompt: "Which caching layer in a retrieval assistant carries the highest risk of serving a wrong answer?",
      options: [
        "Caching retrieval results by query text, since the same query returns stale passages after the corpus changes and no signal ties the cache to corpus state.",
        "Caching final answers by semantic similarity of the question, since two questions that embed closely can differ on a detail that changes the answer.",
        "Caching document embeddings by content hash, since a document edited without changing its hash would keep serving the previous vector indefinitely.",
        "Caching the static system prompt prefix, since a change to the prompt would not invalidate the cache and requests would continue using the previous instructions.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Semantic answer caching is the only layer here that can return an answer to a question the user did not ask. Two questions differing by a date, a jurisdiction or a negation embed very closely and have entirely different correct answers, and the failure is silent and confident. The other layers can serve stale content, which is bad, but they stay tied to something the user did ask. Why not A: query-keyed retrieval caching does risk staleness and is bounded by a short time to live. Why not C: content-hash collisions on edit are effectively impossible. Why not D: prompt cache keys include the prompt content, so a change naturally misses."
    },
    {
      id: "productionRag-20",
      type: "mcq",
      title: "Scaling to Many Corpora",
      difficulty: "hard",
      points: 7,
      prompt: "A platform must serve 3,000 customers, each with their own documents, ranging from 200 to 4 million chunks. What indexing architecture fits?",
      options: [
        "One index per customer, since complete physical isolation is the only architecture that guarantees no cross-tenant retrieval and it scales naturally with customer count.",
        "A shared index partitioned by tenant with mandatory filtering, moving the largest tenants to dedicated indexes, since thousands of small indexes carry heavy overhead.",
        "A shared index with no partitioning and tenant filtering applied after retrieval, since a single unpartitioned index gives the best approximate search quality across the whole corpus.",
        "One index per size tier, grouping customers with similar corpus sizes together, so index tuning parameters can be set appropriately for each tier's scale.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. The distribution is the constraint: 3,000 separate indexes means 3,000 sets of fixed overhead, mostly for tenants with a few hundred chunks, while one shared index would let a 4 million chunk tenant dominate the structure. Partitioning by tenant within a shared index with enforced filtering handles the long tail, and promoting the largest tenants to dedicated indexes handles the head. Why not A: per-index overhead at that count is severe and isolation is achievable through partitioning. Why not C: post-filtering is both a correctness risk and returns empty result sets for small tenants. Why not D: grouping by size mixes tenants in one index without solving isolation, and size is not a meaningful boundary."
    }
  ]
};
