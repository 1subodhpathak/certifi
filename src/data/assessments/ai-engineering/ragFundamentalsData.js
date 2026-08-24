import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 8 of 15 - RAG Fundamentals
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const ragFundamentalsData = {
  id: ASSESSMENT_TYPES.ragFundamentals,
  level: 8,
  title: "RAG Fundamentals",
  shortTitle: "RAG Fundamentals",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "Retrieval-augmented generation as a system: the ingestion pipeline, chunking strategy and its consequences, embedding and indexing, the retrieve-then-generate loop, why retrieval beats stuffing the context window, and the failure modes that appear the moment a corpus is real.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Several questions describe a retrieval system returning the wrong thing and ask which stage is at fault. Locating the failure matters as much as knowing the fix. No negative marking.",
  questions: [
    {
      id: "ragFundamentals-01",
      type: "mcq",
      title: "The Retrieval Loop",
      difficulty: "easy",
      points: 3,
      prompt: "What happens on a single request in a retrieval-augmented system?",
      options: [
        "The model is queried first, and if its confidence is low the system retrieves supporting documents and asks again with them attached.",
        "The question is embedded and matched against an index, the top passages go into the prompt, and the model answers from them.",
        "The question is matched against a cache of previous questions, and the stored answer is returned when a sufficiently similar question is found.",
        "The documents are loaded into the model's memory once at startup, and each question is then answered from that resident knowledge.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Retrieve, then generate. The question becomes a query against an index, the best matching passages are placed in the prompt, and the model answers grounded in them. Why not A: confidence-triggered retrieval is a real variant but the model has no reliable confidence signal, so it is not the standard loop. Why not C: that describes semantic caching, which serves stored answers rather than grounding new ones. Why not D: models have no resident memory across requests; context is supplied per call."
    },
    {
      id: "ragFundamentals-02",
      type: "mcq",
      title: "Why Not Just Paste Everything",
      difficulty: "easy",
      points: 3,
      prompt: "A model supports 200,000 tokens of context. Why still build retrieval rather than paste the whole corpus in?",
      options: [
        "Because pasted text is treated as untrusted input while retrieved text is treated as verified, so retrieval is required for the model to rely on it.",
        "Because the corpus almost always exceeds even a large window, and where it fits you pay per token per request while quality degrades in a long, mostly irrelevant context.",
        "Because providers apply a rate limit on large requests, so pasting a full corpus would exhaust the account's quota within a small number of calls.",
        "Because the model cannot attend to more than a few thousand tokens at once, so anything beyond that is present in the request but never actually read.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Three separate reasons compound: most corpora are far larger than any window, you pay per token per request, and reasoning quality falls as relevant detail is buried in irrelevant text. Retrieval sends a small amount of highly relevant material instead. Why not A: the model makes no trust distinction between pasted and retrieved text. Why not C: quota is a real constraint but not the primary architectural argument. Why not D: models genuinely attend across their full context; quality degrades but attention is not capped at a few thousand tokens."
    },
    {
      id: "ragFundamentals-03",
      type: "mcq",
      title: "Why Chunk",
      difficulty: "easy",
      points: 3,
      prompt: "Documents are split into chunks before embedding. Why not embed each document whole?",
      options: [
        "Because a document-level vector averages every topic into one point, so it matches specific questions weakly and returns far more text than needed.",
        "Because embedding models cannot process documents above a few hundred tokens, so splitting is a hard technical requirement rather than a design choice.",
        "Because chunk boundaries let the index deduplicate repeated passages across documents, which is the main source of storage savings in a large corpus.",
        "Because embedding models charge per call rather than per token, so many small chunks cost less to embed than a few large documents.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. A single vector is one point in space. For a long multi-topic document that point sits between its topics and matches nothing sharply, and retrieving it drags in far more text than the question needed. Chunks give each passage its own vector and let you return just the relevant part. Why not B: input limits exist but are usually well above a few hundred tokens, and they are not the main motivation. Why not C: deduplication is not why chunking exists. Why not D: embedding is priced per token, so chunking with overlap costs slightly more."
    },
    {
      id: "ragFundamentals-04",
      type: "mcq",
      title: "Chunk Overlap",
      difficulty: "easy",
      points: 3,
      prompt: "Chunks are usually created with some overlap between neighbours. What does the overlap achieve?",
      options: [
        "It lets the retriever merge adjacent chunks at query time by matching their shared region, reconstructing the original document order automatically.",
        "It gives the index redundant copies of each passage, so a corrupted or missing chunk can be reconstructed from its neighbours during an incremental re-index.",
        "It increases the number of chunks, which raises the chance that any given query finds a match somewhere in the corpus regardless of how it is phrased.",
        "It keeps a fact that straddles a boundary intact in at least one chunk, so a sentence split across two chunks is still fully present in one of them.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Boundaries fall wherever the splitter puts them, which will sometimes be through the middle of the sentence that answers the question. Overlap guarantees such a passage appears whole in at least one chunk. Why not A: adjacency is tracked by stored metadata, not inferred from overlapping text. Why not B: overlap is not a redundancy or recovery mechanism. Why not C: more chunks does not raise match probability in any useful sense and dilutes the index."
    },
    {
      id: "ragFundamentals-05",
      type: "mcq",
      title: "What Top-k Controls",
      difficulty: "easy",
      points: 3,
      prompt: "A retriever is configured with top-k of 5. What does that mean, and what is the trade-off in raising it?",
      options: [
        "Five is the minimum similarity rank a passage must reach to be returned, so raising it applies a stricter filter and returns fewer but better passages.",
        "Five candidate passages are considered internally and the single best is returned. Raising it widens the internal search without changing prompt size.",
        "Five passages go to the prompt. Raising it improves the chance the answer is included but adds tokens, cost and irrelevant text to sift.",
        "Five passages are returned per document. Raising it retrieves more of each matching document while leaving the number of distinct documents unchanged.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Top-k is the number of passages handed to the model. Raising it increases recall, the chance the answer is somewhere in the context, while lowering precision and adding cost. It is one of the two or three dials that most affect a retrieval system's behaviour. Why not A: it is a count, not a threshold, and raising a count returns more rather than fewer. Why not B: all k passages go into the prompt; nothing narrows to one. Why not D: it is a global count of passages, not per document."
    },
    {
      id: "ragFundamentals-06",
      type: "mcq",
      title: "Citing Sources",
      difficulty: "easy",
      points: 3,
      prompt: "Why is returning source citations alongside an answer valuable beyond user trust?",
      options: [
        "Citations improve retrieval quality over time, because the retriever learns from which sources were cited and ranks them higher on later queries.",
        "Citations are required for the model to use retrieved content, since without an explicit reference it treats context as background rather than evidence.",
        "Citations reduce token cost, because the model can reference a document identifier instead of reproducing the passage text in its answer.",
        "Citations make the answer verifiable and make failures diagnosable, since you can check whether the cited passage actually supports the claim.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A citation converts an opaque answer into a checkable one. It lets a user verify, and it lets you separate a retrieval failure from a generation failure when something goes wrong, which is the difference between debugging a system and guessing at it. Why not A: no learning loop exists unless you build one, and citation frequency is a poor training signal. Why not B: the model uses context whether or not it cites. Why not C: citations add tokens rather than saving them."
    },
    {
      id: "ragFundamentals-07",
      type: "mcq",
      title: "Choosing Chunk Size",
      difficulty: "medium",
      points: 5,
      prompt: "A team must choose between 200 token and 1,200 token chunks for a policy corpus. What is the trade-off?",
      options: [
        "Large chunks are always better because the model can ignore irrelevant text, whereas information missing from a small chunk cannot be recovered at generation time.",
        "Chunk size mainly affects embedding cost rather than retrieval quality, since the embedding model normalises over length and produces comparable vectors either way.",
        "Small chunks match precisely but may omit the context needed to interpret the passage. Large chunks carry context but dilute the vector and add irrelevant text.",
        "Small chunks are always better for retrieval quality, and the only reason to use large chunks is to keep the total vector count and index cost down.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. This is the central tuning decision and it genuinely cuts both ways. A 200 token chunk gives a sharp vector but may lose the section heading or the qualifying sentence that makes it interpretable. A 1,200 token chunk keeps context but averages more topics into one point and spends prompt budget on text the question did not need. The answer depends on the corpus and must be measured. Why not A: it treats large chunks as always better, on the assumption the model simply ignores the surplus text, which measurably it does not. Why not B: chunk size affects retrieval quality substantially, which is why it is tuned. Why not D: it treats small chunks as always better, which ignores the interpretability cost."
    },
    {
      id: "ragFundamentals-08",
      type: "mcq",
      title: "Where Metadata Earns Its Place",
      difficulty: "medium",
      points: 5,
      prompt: "Each chunk is stored with metadata such as source document, section, date and access level. What is the primary operational value?",
      options: [
        "It provides a fallback ranking when vector similarity scores sit close together, breaking ties by recency or by source authority.",
        "It allows the index to be partitioned across machines by metadata value, which is the main way large vector indexes are scaled horizontally.",
        "It improves the embedding, since concatenating metadata into the chunk text before embedding gives the vector additional signal to match against.",
        "It lets you filter candidates before or during search, so a query can be restricted to what the user may see, or to a date range, without the vector.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Filtering is what makes retrieval usable in a real organisation. Access level filtering is a correctness and security requirement, not a nicety, and date or source filtering routinely fixes relevance problems that no amount of embedding tuning would. Why not A: tie-breaking is a real use and a small one. Why not B: sharding is usually by vector count or hash rather than by metadata value. Why not C: embedding metadata into the text is sometimes useful but is a minor technique next to filtering."
    },
    {
      id: "ragFundamentals-09",
      type: "mcq",
      title: "Approximate Search",
      difficulty: "medium",
      points: 5,
      prompt: "Vector databases use approximate nearest-neighbour search rather than exact search. What does that mean in practice?",
      options: [
        "Search returns vectors within a fixed distance rather than a fixed count, so the number of results varies with how dense the region of the index is.",
        "It trades a small amount of recall for a large speed gain, so the true nearest neighbour is occasionally missed. The tolerance is tunable, trading latency against recall.",
        "It approximates the vectors themselves by quantising them, so search is exact over compressed representations and precision loss comes from the compression alone.",
        "Results are ranked approximately, so the returned set is correct but its internal ordering may not match true similarity, which matters only if you use the scores directly.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Exact search over millions of vectors means comparing against every one, which is far too slow. Approximate indexes navigate a structure that usually finds the true neighbours and occasionally does not, with parameters that let you buy recall back with latency. Knowing your index is not exact is what makes an unexplainable missed result explainable. Why not A: that describes a radius query, a different search mode. Why not C: quantisation is one technique used inside some indexes, not what approximate means. Why not D: the miss is in membership, not only ordering."
    },
    {
      id: "ragFundamentals-10",
      type: "mcq",
      title: "The Ingestion Pipeline",
      difficulty: "medium",
      points: 5,
      prompt: "Which sequence describes a correct ingestion pipeline?",
      options: [
        "Embed the raw file, then extract text from the embedding, chunk it, attach metadata, and write the chunks to the index alongside the original vector.",
        "Chunk the raw file bytes, embed each chunk, extract text from the chunks that embedded successfully, and index the extracted text for keyword search.",
        "Index the raw files first so they are searchable immediately, then extract, chunk and embed in the background, replacing the raw entries as vectors become available.",
        "Extract text from the source format, clean it, split into chunks, attach metadata, embed each, and write vectors, metadata and chunk text to the index.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Extraction comes first because a PDF or slide deck is not text yet, and extraction quality caps everything downstream. Then cleaning, chunking, metadata, embedding, and writing the vector with both metadata and the original chunk text, since the text is what goes into the prompt later. Why not A: you cannot recover text from an embedding; the mapping is lossy and one-way. Why not B: embedding raw bytes before extraction is not a meaningful operation. Why not C: indexing raw files gives nothing to search until extraction has happened."
    },
    {
      id: "ragFundamentals-11",
      type: "mcq",
      title: "Retrieval Recall",
      difficulty: "medium",
      points: 5,
      prompt: "A team measures retrieval recall at k=5 and finds it is 62 percent. What does that tell them?",
      options: [
        "That 62 percent of retrieved passages were relevant to the query, so nearly two in five passages in each prompt are wasting context on irrelevant text.",
        "That in 38 percent of cases the answer-bearing passage was not in the top 5, so the generator cannot answer those however good it is.",
        "That the model produced a correct answer 62 percent of the time when given the retrieved passages, which is the end-to-end accuracy of the pipeline.",
        "That 62 percent of the corpus is reachable through retrieval at this k, with the remainder never surfacing for any query the evaluation set contained.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Recall at k is the fraction of queries whose answer-bearing passage made it into the top k. At 62 percent, retrieval has already lost 38 percent of cases before the model is even invoked, which puts a hard ceiling on end-to-end accuracy and tells you exactly where to invest. Why not A: that is precision, a different measure. Why not C: recall measures retrieval, not generation. Why not D: it is per query, not a coverage figure over the corpus."
    },
    {
      id: "ragFundamentals-12",
      type: "mcq",
      title: "Handling Tables and Structure",
      difficulty: "medium",
      points: 5,
      prompt: "A corpus of financial PDFs contains tables. Naive text extraction produces retrieval that fails on numeric questions. What is the sound approach?",
      options: [
        "Embed the tables as images using a multimodal model, since numeric layout is visual information that any text representation will inevitably lose.",
        "Increase the chunk size so each table fits entirely within one chunk, which preserves the numbers together even when the extracted layout is flattened.",
        "Exclude tables from the index and answer numeric questions from a separate database, since tabular data is not suited to text retrieval in any form.",
        "Detect tables during extraction and preserve their structure, as markdown or with a generated summary of what the table shows, so the chunk reads on its own.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Flattened table extraction destroys the row and column association that gives a number its meaning, so the chunk becomes a list of digits with no referents. Preserving structure, and often adding a short description of what the table contains, makes the chunk both retrievable and interpretable on its own. Why not A: multimodal indexing is a legitimate advanced option, and it is heavier and less searchable than fixing extraction. Why not B: a bigger chunk containing the same flattened mess does not restore the associations. Why not C: a separate numeric store is often right for structured data but excluding tables entirely loses the surrounding narrative."
    },
    {
      id: "ragFundamentals-13",
      type: "mcq",
      title: "Prompting the Generator",
      difficulty: "medium",
      points: 5,
      prompt: "Which instruction to the generation step most reduces fabricated answers in a retrieval system?",
      options: [
        "Answer thoroughly and confidently, since hedging reduces user trust, and rely on the retrieval stage to ensure the passages are correct and complete.",
        "Answer concisely and avoid speculation, keeping the response under a fixed length so there is less room for unsupported claims to appear.",
        "Answer only from the provided passages, cite the one supporting each claim, and say the answer was not found if they do not contain it.",
        "Answer using the provided passages, and where they are incomplete, supplement from general knowledge while noting which parts came from outside the sources.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Three elements do the work together: restricting the source, requiring per-claim citation so groundedness is checkable, and giving the model an explicit permitted output for the not-found case. Without that last one the model has no sanctioned way to fail and will invent something. Why not A: instructing confidence over accuracy makes fabrication worse. Why not B: brevity limits the volume of fabrication without addressing whether it happens. Why not D: permitting supplementation is exactly the door through which unsupported claims arrive."
    },
    {
      id: "ragFundamentals-14",
      type: "mcq",
      title: "Two Ways to Fail",
      difficulty: "medium",
      points: 5,
      prompt: "An answer is wrong. How do you tell a retrieval failure from a generation failure?",
      options: [
        "Check whether the retrieved passages contained the answer. If they did, generation failed to use them; if not, retrieval failed and no generator could have won.",
        "Check the similarity scores of the retrieved passages. Low scores indicate retrieval failed, while high scores with a wrong answer indicate generation failed.",
        "Re-run with a stronger generation model. If the answer improves it was generation, and if it does not it was retrieval, since retrieval is unchanged between the two runs.",
        "Compare the answer against the ground truth. A partially correct answer indicates retrieval returned some of what was needed, while a wholly wrong one indicates generation.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Inspecting the retrieved context is the direct test, and it should be logged on every request precisely so this question can be answered without re-running anything. If the answer was present and unused, that is generation. If it was never retrieved, no generator could have helped. Why not B: similarity scores are weakly informative, since an on-topic passage without the answer scores high. Why not C: it is an indirect probe that costs a run and confounds the two stages. Why not D: partial correctness can arise from either stage."
    },
    {
      id: "ragFundamentals-15",
      type: "mcq",
      title: "Diagnosing a Broken Corpus",
      difficulty: "hard",
      points: 7,
      prompt: `A retrieval system answers well on recent documents and poorly on older ones.

{{diagram}}

What is the diagnosis?`,
      diagram: `flowchart LR
  A["Documents before March<br/><small>scanned PDFs</small>"] --> A1["Retrieval recall<br/><b>21%</b>"]
  B["Documents after March<br/><small>native digital PDFs</small>"] --> B1["Retrieval recall<br/><b>88%</b>"]
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class A,B source;
  class A1 warning;
  class B1 safe;`,
      options: [
        "Scanned PDFs are images, so extraction either failed or produced character errors. The indexed chunks contain no readable text, and no retrieval tuning fixes a corrupt index.",
        "Older documents are longer, so their chunks average more topics per vector and match specific questions less sharply than the shorter recent ones.",
        "Older documents use outdated terminology that no longer matches how users phrase questions, so the semantic gap between query and document has widened over time.",
        "The index was built incrementally and the older vectors were written with an earlier configuration, so they sit in a different region of the space than newer ones.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The split falls exactly on document format, which points at extraction rather than anything semantic. Scanned pages need optical character recognition, and without it the extractor yields nothing or garbage, so the chunks in the index are not the text anyone thinks they are. Inspect the stored chunk text directly; it is the fastest way to confirm. The fix is upstream, in ingestion, followed by re-indexing. Why not B: length differences do not produce a 67 point recall gap. Why not C: terminology drift is gradual and would not produce a sharp break at a format boundary. Why not D: configuration drift is worth ruling out but does not align with the scanned and native split."
    },
    {
      id: "ragFundamentals-16",
      type: "mcq",
      title: "The Answer Spans Documents",
      difficulty: "hard",
      points: 7,
      prompt: "Users ask \"how does our refund policy differ between the EU and US contracts?\" Each region's policy is in its own document. Retrieval returns five chunks, all from the EU document, and the answer is one-sided. Why, and what helps?",
      options: [
        "The similarity threshold is too permissive, so five weakly matching EU chunks crowd out the stronger US ones. Raising the threshold will admit only the best chunk from each document.",
        "The generator selected the EU passages from a balanced retrieved set because they appeared first in the prompt, so shuffling passage order will produce a balanced answer.",
        "The EU document is more detailed, so it produces more chunks and dominates the index. Balancing chunk counts across documents will give each region equal representation.",
        "The query embeds to one point, and the nearest neighbours cluster in whichever document matches best. Comparative questions need per-region queries, or diversity constraints across sources.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. One query vector has one neighbourhood, and top-k by similarity has no notion of covering multiple sources. Comparative and multi-hop questions need the query broken into parts and retrieved separately, or a diversity-aware selection step that caps how many chunks any single document may contribute. Why not A: a threshold filters by score and cannot enforce coverage across documents. Why not B: the scenario states retrieval itself returned only EU chunks, so ordering in the prompt is not the cause. Why not C: chunk-count imbalance can worsen it but is not the mechanism, and equalising counts does not make a comparison work."
    },
    {
      id: "ragFundamentals-17",
      type: "mcq",
      title: "Contradictory Sources",
      difficulty: "hard",
      points: 7,
      prompt: "A corpus contains a 2023 policy and its 2025 replacement, both indexed. Retrieval returns both. The model blends them into an answer that matches neither. What is the correct fix?",
      options: [
        "Raise top-k so that additional passages from the 2025 document outnumber the 2023 ones, letting weight of evidence resolve the conflict during generation.",
        "Add a reranking step that scores passages for authority, so the superseded document is ranked below the current one and falls outside the top-k.",
        "Fix it at ingestion. Superseded documents should be marked and filtered by default, since contradictory sources in the index make every later stage guess.",
        "Instruct the model to prefer the more recent passage when sources conflict, since the metadata needed to make that judgement is already present in the prompt.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. This is a corpus governance problem wearing a retrieval costume. If both documents are legitimately in the index with equal standing, every stage after ingestion is left resolving a conflict it has no authority to resolve. Mark superseded documents, filter them by default, and keep them retrievable only for explicitly historical queries. Why not A: retrieving more of both makes the contradiction larger. Why not B: reranking by authority is a reasonable second layer but still treats a data problem as a ranking problem. Why not D: a prompt instruction is a weak control over a conflict that should not have reached the prompt, and blending is exactly the failure it must prevent."
    },
    {
      id: "ragFundamentals-18",
      type: "mcq",
      title: "Tuning Against the Wrong Metric",
      difficulty: "hard",
      points: 7,
      prompt: "A team raises top-k from 5 to 25. Retrieval recall rises from 71 to 94 percent, but end-to-end answer accuracy falls from 68 to 61 percent. What is happening?",
      options: [
        "Recall improved as expected, but the extra 20 passages are mostly irrelevant, and that noise plus the longer context makes the generator worse at using the one that mattered.",
        "The recall metric is miscounting, since a passage can appear in the top 25 without being genuinely retrievable, so the apparent gain is a measurement artifact.",
        "The prompt now exceeds the model's effective context, so the earliest passages are truncated and the answer-bearing chunk is frequently dropped before generation.",
        "Answer accuracy fell because the larger context increased latency, and the evaluation harness counted slow responses as failures under its timeout.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Recall and precision move in opposite directions as k rises, and the generator is affected by both. Twenty extra passages that do not contain the answer are twenty additional opportunities to ground on the wrong thing, and the relevant passage is now buried in a much longer context. This is the standard argument for a reranker: retrieve broadly for recall, then narrow sharply for precision. Why not B: the recall measurement is behaving exactly as defined. Why not C: possible in principle, but truncation would show as a hard failure rather than a 7 point drift. Why not D: it invents a harness artifact rather than reading the trade-off."
    },
    {
      id: "ragFundamentals-19",
      type: "mcq",
      title: "Access Control in Retrieval",
      difficulty: "hard",
      points: 7,
      prompt: "An internal assistant serves staff at several permission levels. Which design correctly enforces document access?",
      options: [
        "Retrieve without restriction and filter the retrieved passages by permission before they are inserted into the prompt, so restricted text never reaches the model.",
        "Apply the permission filter inside the search, so restricted vectors are never candidates, and re-check on the way out. It must never rest on a model instruction.",
        "Maintain one index per permission level and route each user to the index matching their clearance, accepting the storage cost of duplicating shared documents.",
        "Retrieve without restriction and instruct the model not to reveal content the user is not cleared to see, listing the permission rules in the system prompt.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Authorisation belongs in the query, evaluated against the user's identity, so restricted content is never a candidate. A second check on the results is cheap defence in depth. The crucial point is that no part of the enforcement may rest on the model following an instruction. Why not A: filtering after search is far better than A and still lets restricted content into your retrieval path, plus it silently shrinks the result set below k. Why not C: per-level indexes work for a small fixed hierarchy but duplicate storage and break down on overlapping group membership. Why not D: a prompt rule is not an access control, and the restricted text has already been transmitted."
    },
    {
      id: "ragFundamentals-20",
      type: "mcq",
      title: "When Retrieval Is the Wrong Tool",
      difficulty: "hard",
      points: 7,
      prompt: "Users ask an assistant \"how many open tickets does the platform team have?\" Retrieval over the ticket corpus returns individual tickets and the model produces a wrong count. What is the correct architecture?",
      options: [
        "Route aggregate questions to the ticket system rather than to retrieval. Counting is an operation over a complete set, and top-k returns a sample by construction.",
        "Raise top-k high enough to retrieve all open tickets for the team, so the model has the complete set in context and can count it accurately.",
        "Store a precomputed count in the index as its own chunk, refreshed on a schedule, so the aggregate question retrieves a stated figure rather than a set of tickets.",
        "Instruct the model to state that it can only report on the tickets it was shown, so the count is presented as a lower bound rather than as a total.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Retrieval returns the k most similar passages, which is a sample. An aggregate needs the whole set, so the question belongs in a query against the system of record, and the assistant's job is to route it there and present the result. Why not B: it might work at small scale and fails as soon as the count exceeds what fits in context, and it makes correctness depend on the model counting reliably. Why not C: a precomputed count is stale by design and only answers the exact question anticipated. Why not D: an honest hedge is better than a confident wrong number and still does not answer the user."
    }
  ]
};
