import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 9 of 15 - Advanced Retrieval
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const advancedRetrievalData = {
  id: ASSESSMENT_TYPES.advancedRetrieval,
  level: 9,
  title: "Advanced Retrieval",
  shortTitle: "Advanced Retrieval",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Making retrieval actually work: hybrid dense and lexical search, rank fusion, cross-encoder reranking, query rewriting and expansion, metadata filtering, recall against precision, and diagnosing which stage of a retrieval pipeline lost the answer.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Most questions give you a retrieval pipeline that is underperforming and ask which stage to change. Naming the failing stage is worth as much as naming the technique. No negative marking.",
  questions: [
    {
      id: "advancedRetrieval-01",
      type: "mcq",
      title: "Lexical and Dense",
      difficulty: "easy",
      points: 3,
      prompt: "Hybrid retrieval combines a lexical method such as BM25 with dense vector search. What does each contribute?",
      options: [
        "Lexical searches document titles and metadata while dense searches body text, so together they cover the full document rather than one part of it.",
        "Lexical search is faster and dense search is more accurate, so lexical acts as a cheap first pass that dense search then refines into a final ranking.",
        "Lexical matches exact terms, strong on rare words, names and identifiers. Dense matches meaning, strong on paraphrase and synonyms. Their failures are largely uncorrelated.",
        "Lexical handles short queries and dense handles long ones, so the system routes each query to whichever method suits its length before searching.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The two methods fail on different inputs, which is precisely why combining them works. Lexical nails a part number or a surname that a dense model has never meaningfully seen; dense finds the passage that answers the question in entirely different words. Why not A: both methods search the same indexed text. Why not B: dense search is not uniformly more accurate, and hybrid runs both rather than using one to refine the other. Why not D: query length is not what separates them."
    },
    {
      id: "advancedRetrieval-02",
      type: "mcq",
      title: "What a Reranker Does",
      difficulty: "easy",
      points: 3,
      prompt: "A reranker is added after the retriever. What does it do?",
      options: [
        "It scores each retrieved passage against the query directly, reading both together, and reorders them so the most relevant few can be kept.",
        "It expands the retrieved set by fetching the passages adjacent to each hit, so the model receives surrounding context along with the match.",
        "It re-embeds the retrieved passages with a larger embedding model and re-sorts them by the improved similarity scores against the original query vector.",
        "It removes duplicate and near-duplicate passages from the retrieved set so the prompt contains distinct sources rather than repeated content.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. A reranker looks at the query and a candidate passage together and produces a relevance score. Because it reads the pair jointly rather than comparing two independently produced vectors, it is far more accurate than the retriever, and far too slow to run over the whole corpus. That is why it runs on a shortlist. Why not B: that is context expansion, also a different step. Why not C: re-embedding separately still compares independent vectors and misses the point. Why not D: that is deduplication, a different step."
    },
    {
      id: "advancedRetrieval-03",
      type: "mcq",
      title: "Retrieve Wide, Rerank Narrow",
      difficulty: "easy",
      points: 3,
      prompt: "A common pipeline retrieves 50 candidates and reranks down to 5. Why that shape?",
      options: [
        "Retrieving 50 lets the reranker learn the distribution of the corpus, and 5 is the number of passages a model can attend to without quality loss.",
        "Retrieving 50 raises the chance the answer is in the candidate set, and reranking picks the best few, so recall comes from the retriever and precision from the reranker.",
        "Retrieving 50 and reranking to 5 is a cost heuristic: the reranker is priced per candidate, so 50 balances its cost against the retriever's cost.",
        "Retrieving 50 keeps latency low because approximate search is cheaper at higher k, and reranking to 5 is what makes the result set small enough to fit the prompt.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Each stage does the job it is good at. The retriever is cheap and can afford to be generous, maximising the chance the answer is captured; the reranker is expensive and accurate, so it runs only on the shortlist and delivers precision. Neither could do both jobs alone at acceptable cost. Why not A: rerankers do not learn at query time, and there is no fixed limit of five passages. Why not C: cost shapes the exact numbers, but the reason for the shape is the recall and precision split. Why not D: approximate search is not cheaper at higher k."
    },
    {
      id: "advancedRetrieval-04",
      type: "mcq",
      title: "Query Rewriting",
      difficulty: "easy",
      points: 3,
      prompt: "In a multi-turn chat, a user asks \"and what about the second one?\". Why does this break retrieval, and what fixes it?",
      options: [
        "The query is too short to embed meaningfully. Padding it with the conversation's topic keywords gives the embedding model enough text to produce a usable vector.",
        "The query has no standalone meaning, so its embedding matches nothing useful. Rewrite it into a self-contained question from the history first.",
        "The query contains no nouns, so lexical search has nothing to match. Adding a dense-only path for short queries avoids the empty lexical result.",
        "The query refers to a previous result rather than the corpus, so retrieval should be skipped entirely and the answer taken from the earlier turn's context.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Retrieval sees only what you send it. A follow-up that depends on prior turns embeds to a meaningless point in the space. The standard fix is a rewrite step that resolves references against the conversation and produces a standalone query, which is then retrieved on. Why not A: padding with keywords is a crude approximation of rewriting and produces a muddled query. Why not C: the absence of nouns is a symptom, not the cause. Why not D: the follow-up usually does need new retrieval, just under a resolved query."
    },
    {
      id: "advancedRetrieval-05",
      type: "mcq",
      title: "Filter Before or After",
      difficulty: "easy",
      points: 3,
      prompt: "A query must be restricted to one department's documents. Should the filter run before or after the vector search?",
      options: [
        "After, since applying a filter inside the search prevents the index from using its approximate structure and forces a slow exhaustive scan.",
        "After, because filtering the retrieved set is simpler to implement and produces identical results as long as k is set high enough to compensate.",
        "Either, since the two orderings return the same passages and differ only in how much intermediate data is transferred out of the index.",
        "Before, as a restriction inside the search, so the k results are all from that department rather than whatever survives filtering after.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Filtering after search means the search spent its k slots on documents you were going to discard, so you can easily end up with two results instead of five, or none. Filtered search evaluates the restriction as part of the traversal and returns k matching results. Why not A: modern vector indexes support filtered search efficiently, and even where it costs something, correctness comes first. Why not B: post-filtering with a raised k is a workaround with an unpredictable yield. Why not C: the results genuinely differ, which is the entire point."
    },
    {
      id: "advancedRetrieval-06",
      type: "mcq",
      title: "Recall and Precision",
      difficulty: "easy",
      points: 3,
      prompt: "In retrieval, what is the difference between recall and precision?",
      options: [
        "Recall measures how similar the returned passages are to the query; precision measures how consistently the same passages are returned across repeated runs.",
        "Recall measures speed of retrieval at a given result size; precision measures how closely the approximate index matches an exhaustive search.",
        "Recall measures how much of the corpus is indexed and reachable; precision measures how accurately the embedding represents each passage's meaning.",
        "Recall is whether the relevant passages were found at all; precision is what proportion of the returned passages are actually relevant.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Recall asks whether you got what you needed; precision asks how much of what you got was worth having. They trade against each other as k moves, which is why both are reported at a stated k rather than as single numbers. Why not A: similarity is the ranking signal, not the metric, and run-to-run consistency is a different property. Why not B: those describe latency and approximate-search quality. Why not C: those describe index coverage and embedding quality."
    },
    {
      id: "advancedRetrieval-07",
      type: "mcq",
      title: "Fusing Two Rankings",
      difficulty: "medium",
      points: 5,
      prompt: "Hybrid search produces a lexical ranking and a dense ranking. Why is reciprocal rank fusion usually preferred to adding the two scores together?",
      options: [
        "The two scores are on incomparable scales, so summing them lets the larger scale dominate. Fusion uses only rank position, which is comparable across methods.",
        "Rank fusion guarantees that every document appearing in either ranking is included in the result, whereas score addition discards documents missing from one of them.",
        "Score addition requires both methods to return the same candidate set, which hybrid search cannot guarantee, so fusion is the only method that handles disjoint result sets.",
        "Rank fusion is faster to compute, since it avoids the floating-point work of normalising and summing two score distributions for every candidate.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. A BM25 score is unbounded and corpus-dependent; a cosine similarity sits in a narrow range. Adding them is dimensionally meaningless and in practice one method silently wins. Reciprocal rank fusion throws away the magnitudes and keeps only the ordering, which is the part both methods agree on the meaning of. Why not B: fusion does handle partial overlap well, but score addition can too with a default for missing entries. Why not C: it overstates the constraint into an impossibility. Why not D: the speed difference is negligible."
    },
    {
      id: "advancedRetrieval-08",
      type: "mcq",
      title: "Bi-encoder and Cross-encoder",
      difficulty: "medium",
      points: 5,
      prompt: "Why can a cross-encoder reranker not simply replace the vector retriever?",
      options: [
        "A cross-encoder cannot be batched, so its throughput is fixed regardless of hardware, whereas vector search scales with the resources allocated to it.",
        "A cross-encoder produces a relevance score rather than a vector, so there is nothing to store in an index and every query would require scoring the entire corpus at query time.",
        "A cross-encoder requires the query and passage to be similar in length, so it cannot score a short query against a long document without truncation.",
        "A cross-encoder is trained on a fixed corpus and must be retrained whenever documents are added, which makes it unusable for an index that changes.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. A bi-encoder embeds passages once, offline, and query time is a nearest-neighbour lookup. A cross-encoder must read the query and the passage together, so nothing can be precomputed and the cost is one model call per candidate. Over millions of passages that is impossible, which is exactly why it runs on a shortlist. Why not A: they batch well; the problem is the number of pairs, not batching. Why not C: cross-encoders handle asymmetric lengths routinely. Why not D: they generalise to new documents without retraining."
    },
    {
      id: "advancedRetrieval-09",
      type: "mcq",
      title: "Query Expansion",
      difficulty: "medium",
      points: 5,
      prompt: "A system generates three paraphrases of each query, retrieves for all four, and merges the results. What does this buy and what does it cost?",
      options: [
        "It buys coverage of multiple documents, since each paraphrase is steered toward a different source, and it costs the loss of a single coherent ranking.",
        "It buys recall, since a paraphrase may match phrasing the original missed, and costs extra retrieval calls, latency, and a larger set to rerank.",
        "It buys higher precision because agreement across paraphrases confirms relevance, and it costs only the generation of the paraphrases themselves.",
        "It buys robustness to spelling errors, since paraphrasing normalises the query text, and it costs one additional model call per request.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Expansion is a recall technique. A user's phrasing is one sample from many valid ways to ask, and each paraphrase gets a different neighbourhood of the space. The costs are real: a generation call, several retrievals, added latency, and a larger set for the reranker, which is why it is usually paired with reranking to restore precision. Why not A: nothing steers paraphrases toward distinct sources unless you build that explicitly. Why not C: it lowers precision in the merged set rather than raising it, and understates the cost. Why not D: spelling robustness is a minor side effect."
    },
    {
      id: "advancedRetrieval-10",
      type: "mcq",
      title: "Small-to-Big Retrieval",
      difficulty: "medium",
      points: 5,
      prompt: "A pipeline indexes small chunks for matching but sends the larger surrounding section to the model. What problem does this solve?",
      options: [
        "It allows the same corpus to serve both search and summarisation, since small chunks suit search while large sections suit summary generation.",
        "It reduces index size, since only small chunks are embedded while the larger sections are stored unembedded and retrieved by reference when needed.",
        "It lets the reranker score small chunks quickly while the generator receives more text, which keeps reranking cost low without reducing answer quality.",
        "It resolves the chunk-size trade-off: small vectors match precisely, while the model still gets the context needed to read the matched passage.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Matching and reading have different optimal granularities. A tight chunk gives a sharp vector; a paragraph in isolation is often uninterpretable without its heading or preceding sentence. Decoupling the two, by indexing small and expanding to the parent section before generation, gets both. Why not A: it is not about serving two different tasks. Why not B: index size falls as a side effect, not as the motivation. Why not C: reranking cost is a minor benefit next to the interpretability gain."
    },
    {
      id: "advancedRetrieval-11",
      type: "mcq",
      title: "Reranker Latency Budget",
      difficulty: "medium",
      points: 5,
      prompt: "Adding a cross-encoder reranker over 50 candidates raises p95 latency by 400 ms, which breaks the product's budget. What is the reasonable response?",
      options: [
        "Run the reranker in parallel with generation and use its output to reorder the citations shown to the user, keeping the answer itself on the unreranked passages.",
        "Remove the reranker and compensate by raising top-k, since more passages in the prompt give the generator a similar chance of seeing the right one.",
        "Reduce the candidate set, use a smaller reranker, or rerank only when the retriever's top scores are close and the ordering is uncertain.",
        "Move reranking into a background job that reorders the index periodically, so query-time ranking reflects reranker quality without any per-request cost.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. All three levers keep the precision benefit while cutting cost: fewer candidates scales latency down almost linearly, a smaller reranker trades a little accuracy for a lot of speed, and conditional reranking spends the budget only on queries where the retriever was unsure. Why not A: reranking citations after the answer was written from a worse ordering makes the citations inconsistent with the answer. Why not B: raising top-k adds noise, which is the problem the reranker was solving. Why not D: relevance is query-dependent, so there is no query-independent ordering to precompute."
    },
    {
      id: "advancedRetrieval-12",
      type: "mcq",
      title: "HyDE",
      difficulty: "medium",
      points: 5,
      prompt: "One technique generates a hypothetical answer to the query, embeds that, and retrieves with it instead of the query embedding. Why would that help?",
      options: [
        "The generated answer is checked against the corpus, so any hallucinated content is filtered out before retrieval and only verified terms contribute to the query vector.",
        "Generating an answer first lets the system detect when the model already knows the answer, in which case retrieval can be skipped and latency saved.",
        "The generated answer is longer, and longer text produces more stable embeddings, so the retrieval vector is less sensitive to the exact phrasing the user chose.",
        "Questions and answers are written differently, so a question vector sits far from the passage answering it. A hypothetical answer looks like the target and lands nearer.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. There is an asymmetry between how questions and answers are phrased, and embedding spaces reflect it. A hypothetical answer, even a factually wrong one, is stylistically and lexically much closer to the passage you want, so it retrieves better. The technique costs a generation call and can mislead on topics the model has strong wrong priors about. Why not A: no verification step is involved, and the hypothetical answer is expected to contain invented specifics. Why not B: the model has no reliable signal for whether it knows something. Why not C: length stability is not the mechanism."
    },
    {
      id: "advancedRetrieval-13",
      type: "mcq",
      title: "Measuring the Stages",
      difficulty: "medium",
      points: 5,
      prompt: "A team wants to know whether their reranker is worth its cost. What is the right measurement?",
      options: [
        "Compare end-to-end accuracy with and without reranking at the same final k, and check precision at that k, so you see whether better ordering gave better answers.",
        "Compare latency and cost per query against the change in user satisfaction scores, since the reranker is an optimisation and should be judged on user-visible outcome alone.",
        "Compare average reranker score against average retriever similarity score, since a consistently higher reranker score shows it is finding better passages.",
        "Compare recall at the final k with and without reranking, since the reranker's purpose is to ensure the answer-bearing passage survives to the prompt.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The reranker's job is to raise precision at the final k, and the reason you care is answer quality. Holding k fixed and toggling the stage isolates its contribution, while precision at k confirms the mechanism actually worked rather than the difference coming from somewhere else. Why not B: satisfaction is too noisy and too slow to attribute a single pipeline stage. Why not C: the two scores are on unrelated scales and neither is ground truth. Why not D: recall at the retriever's k is unchanged by reranking, which only reorders what was already retrieved."
    },
    {
      id: "advancedRetrieval-14",
      type: "mcq",
      title: "Diversity in Results",
      difficulty: "medium",
      points: 5,
      prompt: "A query returns five passages, all near-duplicates from different versions of the same document. What is the right intervention?",
      options: [
        "Deduplicate at ingestion and add a diversity-aware selection step, so the k passages sent cover distinct content rather than one point.",
        "Raise top-k so that beyond the duplicates there are enough distinct passages for the model to work with, and let the generator ignore the repetition.",
        "Lower the similarity threshold so near-duplicates fall below the cut-off, leaving only the single strongest instance of the repeated content.",
        "Instruct the generator to treat repeated passages as one source, which prevents it from over-weighting the duplicated claim in its answer.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Duplicates waste the k slots that should carry different information, and they also make a single claim look corroborated by five sources. Fix it at both ends: remove genuine duplication at ingestion, and select for diversity when choosing what to send. Why not B: raising k spends more tokens to work around a problem rather than removing it. Why not C: near-duplicates all score similarly, so a threshold cannot separate them from the one you want to keep. Why not D: a prompt instruction does not recover the context slots already spent."
    },
    {
      id: "advancedRetrieval-15",
      type: "mcq",
      title: "Locating the Lost Answer",
      difficulty: "hard",
      points: 7,
      prompt: `A pipeline runs retrieve 50, rerank to 5, generate. For a failing query the trace shows the following.

{{diagram}}

Where is the defect and what is the correct fix?`,
      diagram: `flowchart LR
  R["Retrieve 50<br/><small>answer passage present at rank 34</small>"] --> K["Rerank to 5<br/><small>answer passage absent</small>"]
  K --> G["Generate<br/><b>fabricated answer</b>"]
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef danger fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class R safe;
  class K warning;
  class G danger;`,
      options: [
        "The candidate set of 50 is too small for a corpus of this size, so the passage barely made the shortlist. Raise the first-stage k so borderline passages have more room.",
        "The retriever ranked the passage 34th, which is too low. Improve the embedding model or the chunking so the passage ranks in the top 5 before reranking.",
        "The generator fabricated rather than declining, which is the defect. Instruct it to answer only from the passages and to say when the answer is absent.",
        "The reranker had the passage and rejected it, so it is the failing stage. Evaluate it on labelled pairs, and separately stop the generator fabricating.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The trace localises it exactly: retrieval succeeded, since rank 34 of 50 is a hit, and the reranker then discarded the right passage, which is its one job. That is a reranker quality problem to be measured on labelled pairs. The fabrication is a real second defect and worth fixing, but it is downstream, and fixing only it converts a wrong answer into a refusal while the retrievable answer stays lost. Why not A: a larger candidate set does not help when the reranker is what dropped it. Why not B: retrieval did its job at this k. Why not C: it addresses the visible symptom and leaves the actual failure in place."
    },
    {
      id: "advancedRetrieval-16",
      type: "mcq",
      title: "Hybrid Made It Worse",
      difficulty: "hard",
      points: 7,
      prompt: "Adding BM25 alongside dense retrieval lowered end-to-end accuracy. Investigation shows lexical results dominate the fused ranking for conversational queries. What is the likely cause?",
      options: [
        "The dense retriever is underperforming on conversational queries, and hybrid search merely exposed a weakness that was already present in the dense path.",
        "Conversational queries contain common words BM25 scores against, and the fusion weighting favours lexical too heavily. Tune the weights and route by query type.",
        "BM25 and dense search return disjoint result sets for conversational queries, so fusion has nothing to reinforce and effectively returns the lexical ranking alone.",
        "BM25 is unsuitable for any corpus that contains natural prose, so it should be restricted to a separate identifier-lookup path invoked only on exact-match queries.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Hybrid is not automatically better; it is a weighted combination and the weights matter. Long conversational queries give BM25 many common terms to score, inflating lexical results exactly where semantic matching should win. The fixes are tuning the fusion weights on a labelled set and, often, routing by query shape so identifier-like queries lean lexical and prose queries lean dense. Why not A: dense quality was adequate before hybrid was added, so the regression came from fusion. Why not C: disjoint sets are common in hybrid and fusion handles them; that alone would not cause a systematic drop. Why not D: BM25 is strong on prose corpora and this overcorrects."
    },
    {
      id: "advancedRetrieval-17",
      type: "mcq",
      title: "Rewriting Loses the Question",
      difficulty: "hard",
      points: 7,
      prompt: "A query rewriter converts follow-ups into standalone questions. Accuracy improves on follow-ups but drops on first-turn questions. Why?",
      options: [
        "The rewriter was tuned on follow-up examples only, so it needs first-turn examples added to its prompt before it can handle them without degradation.",
        "The rewriter adds latency to every query, and the evaluation harness scores slow first-turn responses as failures, which is a measurement artifact rather than a quality change.",
        "First-turn questions are already standalone, so rewriting can only change them, and the rewriter adds its own reading, drops qualifiers, or narrows the question.",
        "First-turn questions have no conversation history, so the rewriter falls back to a generic template that strips the question's specificity before it reaches retrieval.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A rewrite is a lossy transformation applied by a model. On a follow-up it adds necessary information; on an already complete question it can only introduce drift, quietly narrowing scope or dropping a qualifier the user cared about. The standard fix is to rewrite conditionally, detecting whether the query is context-dependent and passing standalone questions straight through. Why not A: better examples reduce drift without removing the case for skipping the step entirely. Why not B: it assumes a harness bug rather than reading the asymmetry. Why not D: a fallback template is possible but the general mechanism is rewrite drift, which occurs even with sensible output."
    },
    {
      id: "advancedRetrieval-18",
      type: "mcq",
      title: "Filtering Empties the Result Set",
      difficulty: "hard",
      points: 7,
      prompt: "A system retrieves 20 candidates, then filters by department. For some users the prompt frequently arrives with zero passages, and the assistant says it cannot help even when relevant documents exist. What is wrong?",
      options: [
        "The filter runs after search, so the 20 nearest neighbours are chosen without regard to department and may contain none from the user's. Move it into the search.",
        "The similarity threshold is being applied before the filter, so passages are discarded on score before the department restriction has a chance to select among them.",
        "The candidate pool is too small at 20. Raising it to 200 before filtering will make it very unlikely that no passages survive for any given user.",
        "The department metadata is missing on some documents, so they fail the filter regardless of relevance. Backfilling the metadata will restore those documents to the result set.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Post-filtering picks the globally nearest 20 and then throws away everything that does not match, so a user in a small department can easily lose all of them. Filtered search restricts the traversal instead and returns k results that already satisfy the constraint. Why not B: it invents an ordering that would not produce this user-specific pattern. Why not C: raising the pool reduces the frequency without fixing the ordering problem, and it costs latency on every query for a structural defect. Why not D: missing metadata is worth auditing but would fail uniformly rather than for particular users."
    },
    {
      id: "advancedRetrieval-19",
      type: "mcq",
      title: "Reranker Trained on the Wrong Thing",
      difficulty: "hard",
      points: 7,
      prompt: "An off-the-shelf reranker performs well on general benchmarks and poorly on a corpus of legal contracts. What is the most likely explanation and the right response?",
      options: [
        "Legal contracts are highly repetitive, so all passages score similarly and the reranker cannot separate them. Deduplicating the corpus will restore useful score separation.",
        "General rerankers assume a single relevant passage per query, while contract questions typically have several, so the reranker's scoring is fundamentally unsuited to this domain.",
        "Legal text runs longer than the reranker's maximum input length, so contract passages are truncated before scoring and the reranker ends up judging only their opening lines.",
        "The reranker was trained on general web pairs, where relevance means topical match. Legal relevance turns on precise conditions and scope, so its notion is misaligned. Fine-tune on in-domain labelled pairs.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Relevance is domain-specific. A general reranker learned that a passage about the same topic is relevant, but in contracts two clauses can be topically identical and differ on the condition that decides the question. The response is in-domain labelled pairs and fine-tuning, which is one of the highest-return investments in a specialised retrieval system. Why not A: repetition is a real feature of contracts but deduplication removes clauses that are genuinely distinct in scope. Why not B: rerankers score each passage independently, so multiple relevant passages is not a problem for them. Why not C: truncation is worth checking and would affect general benchmarks too."
    },
    {
      id: "advancedRetrieval-20",
      type: "mcq",
      title: "Reading a Pipeline Report",
      difficulty: "hard",
      points: 7,
      prompt: `A retrieval evaluation reports the following.

{{diagram}}

Where is the loss?`,
      diagram: `flowchart TB
  E([Evaluation report])
  E --> A["Recall at 50<br/><b>0.93</b>"]
  E --> B["Recall at 5 post-rerank<br/><b>0.89</b>"]
  E --> C["Precision at 5<br/><b>0.31</b>"]
  E --> D["Groundedness<br/><b>0.94</b>"]
  E --> F["End-to-end accuracy<br/><b>0.58</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class E agent;
  class A,B,D safe;
  class C source;
  class F warning;`,
      options: [
        "In retrieval, since 0.93 leaves 7 percent of all queries unanswerable, and that hard ceiling combined with the normal downstream losses is enough to account for the end-to-end figure.",
        "In generation, since groundedness at 0.94 shows the answers do follow the passages, so the model must be selecting the wrong passage out of the five it was handed.",
        "Not in the pipeline. Retrieval and groundedness are both strong, so the gap points at the evaluation: grounded answers are being marked wrong, so the ground truth or the grading is at fault.",
        "In reranking, since recall falls from 0.93 to 0.89 and precision at 5 is only 0.31, so the reranker is both dropping answers and filling the prompt with irrelevant passages.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Follow the numbers. Retrieval finds the answer 89 percent of the time at the final k, and 94 percent of answers are supported by the passages given, yet only 58 percent are judged correct. Those cannot all hold unless something outside the pipeline is wrong: the ground truth is stale or ambiguous, the grader is too strict about phrasing, or a post-processing step is corrupting output after generation. Investigate the measurement before rebuilding a pipeline the metrics say is working. Why not A: a 7 percent ceiling cannot explain a 42 percent shortfall. Why not B: high groundedness is evidence against the generator ignoring its context. Why not D: precision of 0.31 at k=5 is expected when roughly one passage of five carries the answer."
    }
  ]
};
