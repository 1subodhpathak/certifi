import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 3 of 15 - Tokenization and Embeddings
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const tokenizationEmbeddingsData = {
  id: ASSESSMENT_TYPES.tokenizationEmbeddings,
  level: 3,
  title: "Tokenization and Embeddings",
  shortTitle: "Tokens and Embeddings",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "How text becomes numbers and what that costs you: subword tokenisation and the failures it causes, token budgets across languages and formats, what an embedding does and does not encode, similarity metrics, and why a change of embedding model invalidates an index.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Several questions ask you to predict a production failure from the tokenizer or the embedding model alone. No negative marking.",
  questions: [
    {
      id: "tokenizationEmbeddings-01",
      type: "mcq",
      title: "What a Tokenizer Does",
      difficulty: "easy",
      points: 3,
      prompt: "What does a tokenizer do before text reaches the model?",
      options: [
        "It splits text into subword units drawn from a fixed vocabulary and maps each one to an integer identifier the model can look up.",
        "It translates the text into a canonical intermediate language, which is how one model can be trained on many languages at once.",
        "It compresses the text so that longer inputs fit into the context window, with a ratio that depends on how repetitive the input is.",
        "It removes stopwords, punctuation and casing so the model receives a normalised form of the text with less noise in it.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Tokenisation maps text to a sequence of integer identifiers drawn from a fixed vocabulary of subword pieces. That integer sequence is what the model actually consumes. Why not B: there is no intermediate language; multilingual ability comes from training data. Why not C: it is a lossless mapping, not a compressor, and it does not adapt its ratio to fit a window. Why not D: nothing is discarded; punctuation and casing are preserved because they carry meaning and are themselves tokens or parts of tokens."
    },
    {
      id: "tokenizationEmbeddings-02",
      type: "mcq",
      title: "Counting Letters",
      difficulty: "easy",
      points: 3,
      prompt: "Asked how many times the letter r appears in \"strawberry\", models frequently answer wrongly. What is the primary cause?",
      options: [
        "Attention cannot revisit earlier positions once a token is emitted, so the model cannot scan back through the word to tally occurrences.",
        "Counting is an arithmetic operation, and models route arithmetic to a separate numeric pathway that handles only digits rather than letters.",
        "The word is rare enough that it appears too seldom in training data for the model to have learned its spelling reliably.",
        "The model sees a handful of subword tokens, not a sequence of characters, so the individual letters are not directly available to count.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The word arrives as two or three tokens. The character-level structure the question asks about is not what the model receives, so it has to infer spelling indirectly rather than read it off. Why not A: attention over prior positions is exactly what is available; the problem is what those positions contain. Why not B: there is no separate numeric pathway; it is the same network throughout. Why not C: the word is common and the model can spell it on request; the failure is in counting, not in knowledge."
    },
    {
      id: "tokenizationEmbeddings-03",
      type: "mcq",
      title: "Estimating Token Count",
      difficulty: "easy",
      points: 3,
      prompt: "You need a quick estimate of the tokens in a block of ordinary English prose. Which rule of thumb is closest?",
      options: [
        "Roughly one token per sentence, since sentence boundaries are the unit at which the model segments and processes text.",
        "Roughly four characters per token, so a little over one token per word once spaces and punctuation are accounted for.",
        "Roughly one token per two words, since the tokenizer merges frequent word pairs into single vocabulary entries during training.",
        "Roughly one token per character, since the vocabulary is built at character granularity to keep it small and language-independent.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. English prose runs close to four characters per token, which puts it modestly above one token per word once punctuation and whitespace are counted. Anything unusual, such as code, identifiers, or non-English text, pushes the count up. Why not A: tokens are far below sentence granularity. Why not C: this halves the true count; tokenizers do not merge across word boundaries at that scale. Why not D: characters outnumber tokens roughly four to one, so this overstates cost heavily."
    },
    {
      id: "tokenizationEmbeddings-04",
      type: "mcq",
      title: "What an Embedding Is",
      difficulty: "easy",
      points: 3,
      prompt: "What is a text embedding?",
      options: [
        "A list of the most important keywords with a weight for each, which is what allows a search engine to match a query to a document.",
        "A compressed copy of the text from which the original can be reconstructed, used so documents take less space in the index.",
        "A fixed-length vector of numbers positioned so that texts with similar meaning land near each other in the vector space.",
        "A hash of the text used to detect exact duplicates quickly, which is why near-identical documents produce nearly identical values.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. An embedding maps text to a point in a high-dimensional space where geometric closeness approximates semantic closeness. That property is what makes similarity search work. Why not A: that describes a sparse keyword representation, which is a different and complementary technique. Why not B: embeddings are lossy and not invertible; you cannot reconstruct the text from the vector. Why not D: hashes are designed so similar inputs give unrelated outputs, which is the exact opposite property."
    },
    {
      id: "tokenizationEmbeddings-05",
      type: "mcq",
      title: "Comparing Embeddings",
      difficulty: "easy",
      points: 3,
      prompt: "Two documents are embedded and their vectors compared with cosine similarity. What does the score measure?",
      options: [
        "The angle between the two vectors, so it reflects direction and ignores how long either vector happens to be.",
        "The straight-line distance between the two points, so vectors far apart in magnitude always score as dissimilar.",
        "The proportion of dimensions in which the two vectors carry the same sign, which acts as a robust measure of agreement.",
        "The number of overlapping words between the two documents, normalised by the length of the longer of the two.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Cosine similarity is the normalised dot product, which measures the angle between vectors and discards magnitude. That is usually what you want, since a long document and a short one on the same topic should still match. Why not B: that describes Euclidean distance, which is a different metric and is magnitude-sensitive. Why not C: sign agreement is not what cosine computes. Why not D: no words are compared; the whole point is that meaning is compared without shared vocabulary."
    },
    {
      id: "tokenizationEmbeddings-06",
      type: "mcq",
      title: "Non-English Token Cost",
      difficulty: "easy",
      points: 3,
      prompt: "The same paragraph translated into a language written in a non-Latin script often costs several times more tokens. Why?",
      options: [
        "Translation systematically produces longer text than the original did, and the token count simply reflects that increase in the underlying word count.",
        "Non-Latin scripts require a wider character encoding, and the tokenizer bills by the underlying byte, so identical text occupies several times more billable units.",
        "Multilingual models append a language identification prefix to every sentence, and that fixed overhead comes to dominate for shorter passages.",
        "The tokenizer vocabulary was built from a corpus dominated by English, so under-represented scripts lack whole-word entries and fragment into many small pieces.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Vocabulary entries are learned from training text. Frequent English words earn dedicated tokens; a script that appeared far less often gets no such entries, so its text splits into many short pieces, sometimes down to single characters or bytes. The result is a direct and often severe cost and context penalty for those languages. Why not A: word count differences are minor next to a several-fold token increase. Why not B: billing is per token, and the byte width is not what drives the count. Why not C: no such per-sentence prefix exists."
    },
    {
      id: "tokenizationEmbeddings-07",
      type: "mcq",
      title: "How the Vocabulary Is Built",
      difficulty: "medium",
      points: 5,
      prompt: "Byte-pair encoding builds its vocabulary before any model training happens. How does it work?",
      options: [
        "It starts from minimal units such as bytes and repeatedly merges the most frequent adjacent pair into a new entry until the vocabulary reaches its target size.",
        "It clusters words by their embeddings from a small pretrained model and assigns one vocabulary entry per cluster, so related words share a token.",
        "It starts from a dictionary of the language and adds inflected forms until the vocabulary reaches its target size, which is the reason it handles morphology as well as it does.",
        "It starts from the most frequent whole words and splits the rarest ones into pieces until every entry meets a minimum frequency threshold in the corpus.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Byte-pair encoding is bottom-up and purely frequency-driven: begin with minimal units, count adjacent pairs, merge the most common, repeat. Frequent sequences end up as single tokens and rare ones stay fragmented, which is why the vocabulary reflects corpus statistics rather than linguistics. Why not B: no model or embedding is used; the procedure runs before any training. Why not C: no dictionary is involved, and morphological behaviour is an accident of frequency rather than a design goal. Why not D: it builds up from small units rather than splitting down from words."
    },
    {
      id: "tokenizationEmbeddings-08",
      type: "mcq",
      title: "Leading Spaces and Case",
      difficulty: "medium",
      points: 5,
      prompt: "In many tokenizers \"Paris\", \" Paris\" and \"paris\" map to different token identifiers. What is the practical consequence?",
      options: [
        "Embeddings for the three forms are orthogonal by construction, which is precisely why a case-sensitive search returns results disjoint from a case-insensitive one.",
        "The tokenizer normalises all three to a canonical identifier before lookup, so the distinction exists in the vocabulary but never reaches the model.",
        "Prompt formatting matters more than it looks. Whitespace and casing change the token sequence, so a template that alters them can shift model behaviour and token counts.",
        "The model treats the three as entirely unrelated words, so a prompt using one form cannot elicit any knowledge the model learned about another form.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The leading space is usually part of the token, and case is preserved, so seemingly cosmetic template changes produce genuinely different input sequences. This is why trailing whitespace in a prompt, or a stray case change in a delimiter, can move results and token counts. Why not A: nothing forces the embeddings to be orthogonal, and they end up close together. Why not B: no such normalisation happens, which is exactly why the distinction is visible. Why not D: the model relates the forms perfectly well from context; they are different tokens, not unrelated concepts."
    },
    {
      id: "tokenizationEmbeddings-09",
      type: "mcq",
      title: "Embedding Model vs Chat Model",
      difficulty: "medium",
      points: 5,
      prompt: "A team plans to build search over their documents using the same chat model they use for answering. What should they understand?",
      options: [
        "Embedding models are simply chat models with generation disabled, so the choice is a deployment flag rather than a separate model to select and evaluate.",
        "Embedding models are trained specifically so that distance in vector space tracks relevance, and they are far smaller and cheaper. A chat model is not trained for that objective.",
        "A chat model must be fine-tuned on the document corpus before it can produce embeddings, after which its vectors will outperform any general-purpose embedding model.",
        "Any model can produce embeddings by averaging its final hidden states, and doing so with the larger chat model gives measurably better retrieval than any dedicated embedding model would.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Embedding models are trained with a contrastive objective that explicitly pulls related texts together and pushes unrelated ones apart. That objective, not raw model size, is what makes the geometry useful for retrieval, and the models are small enough to embed millions of chunks cheaply. Why not A: the training objectives differ fundamentally; it is not a runtime flag. Why not C: fine-tuning a chat model for embeddings is possible but is a large project, not a prerequisite, and rarely beats a good off-the-shelf embedding model. Why not D: pooled hidden states from a generative model are a weak substitute and are far more expensive to compute."
    },
    {
      id: "tokenizationEmbeddings-10",
      type: "mcq",
      title: "Embedding Dimensions",
      difficulty: "medium",
      points: 5,
      prompt: "One embedding model outputs 384 dimensions, another 3,072. What does the larger dimension buy, and what does it cost?",
      options: [
        "The dimension count sets the maximum input length the model accepts, so the larger model is chosen when documents exceed the smaller model's chunk limit.",
        "More dimensions guarantee better retrieval quality, since capacity scales with dimension, and the only cost is a proportional increase in index storage.",
        "More dimensions can capture finer distinctions, but quality depends mainly on training rather than size, and the cost is more storage, memory and slower similarity search.",
        "More dimensions mainly improve results on longer documents, since each dimension can specialise in a different section of the text, so short-text search sees no real benefit at all.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Dimension is capacity, not quality. A well-trained small model routinely beats a poorly-trained large one on the same benchmark, while the large one costs proportionally more to store and search across millions of vectors. Choose on measured retrieval quality for your corpus, then on cost. Why not A: input length is set by the model's own context limit, which is unrelated to output dimension. Why not B: the guarantee is false and the cost extends well past storage into query latency. Why not D: dimensions do not partition by document section."
    },
    {
      id: "tokenizationEmbeddings-11",
      type: "mcq",
      title: "Cross-Model Comparability",
      difficulty: "medium",
      points: 5,
      prompt: "Half a corpus was embedded with one model and half with another, both producing 1,024 dimensions. Search results are erratic. Why?",
      options: [
        "Two models with matching output dimensions still produce vectors in unrelated coordinate systems, so distances between vectors from different models are meaningless.",
        "The vectors are comparable in principle but need renormalising to a common scale, after which cosine similarity across the two halves behaves correctly.",
        "One model normalises its output vectors to unit length and the other does not, so switching the index metric from cosine to dot product resolves the mismatch.",
        "The two halves were embedded at different times, so the newer half reflects a more recent snapshot of the language and consistently dominates the ranking for any current terminology.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Each model learns its own space. Dimension 7 means something different in each, so a distance computed across the two is arbitrary. Matching dimensionality is a coincidence of configuration, not evidence of a shared space. There is no fix but re-embedding everything with one model. Why not B: no rescaling can align two independently learned spaces. Why not C: normalisation is a real difference between models but only changes metric choice within one space. Why not D: recency of embedding is irrelevant; the vectors are not timestamped in any meaningful sense."
    },
    {
      id: "tokenizationEmbeddings-12",
      type: "mcq",
      title: "Where Dense Retrieval Fails",
      difficulty: "medium",
      points: 5,
      prompt: "A semantic search system works well on natural-language questions but repeatedly fails when users search for exact part numbers such as \"XR-4471-B\". Why?",
      options: [
        "Alphanumeric identifiers are stripped out as noise during preprocessing, so they were never present in the vectors that were indexed.",
        "Embeddings capture meaning, and rare identifiers carry little of it, so near-identical codes land close together and the exact match is not reliably ranked first.",
        "Identifiers are tokenised into single characters, so the resulting vector reflects only character frequency rather than the identifier as a whole.",
        "Part numbers exceed the embedding model's numeric range, so identifiers longer than a few digits saturate and collapse to the same vector.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Dense retrieval is built to match meaning, and one part number means almost the same thing as another to a model that has seen neither. Exact-match lookups are precisely where lexical search is strong, which is why hybrid retrieval pairs the two. Why not A: standard pipelines do not strip identifiers, and if they did the failure would be total rather than a ranking problem. Why not C: identifiers do fragment into several tokens, but the vector still reflects the sequence rather than a bag of characters. Why not D: there is no numeric saturation mechanism in the embedding."
    },
    {
      id: "tokenizationEmbeddings-13",
      type: "mcq",
      title: "Cosine and Dot Product",
      difficulty: "medium",
      points: 5,
      prompt: "A vector index is configured for dot-product similarity, but the embedding model returns unnormalised vectors. What is the risk?",
      options: [
        "Dot product requires vectors of roughly equal norm in order to stay numerically stable, so unnormalised inputs cause overflow and silently truncate the result set.",
        "Dot product rewards magnitude as well as direction, so vectors that happen to have larger norms can rank ahead of ones that are actually a better semantic match.",
        "Dot product is undefined for unnormalised vectors, so the index returns an error rather than a ranking when the query is finally issued.",
        "Dot product on unnormalised vectors always reduces to ranking by vector length alone, so results become independent of the query text entirely.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Dot product equals cosine only when both vectors are unit length. Without normalisation the norm leaks into the score, and whatever systematically produces longer vectors, often just longer text, gets a ranking advantage unrelated to relevance. Either normalise at index and query time or configure the index for cosine. Why not A: overflow is not the issue at typical embedding scales. Why not C: the operation is perfectly well defined. Why not D: direction still contributes; the query has not stopped mattering."
    },
    {
      id: "tokenizationEmbeddings-14",
      type: "mcq",
      title: "Budgeting a Corpus",
      difficulty: "medium",
      points: 5,
      prompt: `You must estimate cost to embed a corpus.

{{diagram}}

Which reasoning is sound?`,
      diagram: `flowchart LR
  C["Corpus<br/><b>50,000</b> documents"] --> L["Average length<br/><b>6,000</b> characters"]
  L --> K["Chunk size<br/><b>500</b> tokens<br/><small>50 token overlap</small>"]
  K --> E["Embedded tokens<br/><small>to be priced</small>"]
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  class C,L,K source;
  class E agent;`,
      options: [
        "Cost tracks document count, since each document is a single embedding call regardless of its length, so 50,000 calls is the figure to price against.",
        "Cost tracks characters directly, so the 300 million characters can be priced against the published per-token rate, treating characters and tokens as equivalent units.",
        "Roughly 1,500 tokens per document gives about 75 million tokens, then the 10 percent overlap adds around 10 percent more chunks, so price about 82 million embedded tokens.",
        "Only the first chunk of each document needs embedding, since later chunks are covered by the overlap, so the figure is 50,000 chunks of 500 tokens.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Convert characters to tokens at roughly four to one, giving about 1,500 tokens per document and 75 million overall, then add for overlap because overlapping windows re-embed the shared region. Around 82 million embedded tokens is the right order of magnitude. Why not A: documents are chunked, so call count is far higher than document count and cost is per token anyway. Why not B: treating characters as tokens overstates by about four times. Why not D: overlap joins adjacent chunks, it does not make later chunks redundant."
    },
    {
      id: "tokenizationEmbeddings-15",
      type: "mcq",
      title: "Diagnosing a Retrieval Failure",
      difficulty: "hard",
      points: 7,
      prompt: `An internal assistant answers policy questions well but fails on hardware inventory queries.

{{diagram}}

What is the diagnosis and the right fix?`,
      diagram: `flowchart LR
  Q1["&quot;what is the leave carry-over policy&quot;"] --> R1["correct chunk retrieved"]
  Q2["&quot;specs for asset AC-7781-QX&quot;"] --> R2["unrelated chunks retrieved<br/><small>the asset chunk exists and contains that exact string</small>"]
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class Q1,Q2 source;
  class R1 safe;
  class R2 warning;`,
      options: [
        "The embedding model has a shorter input limit than the chunk size used for inventory records, so those chunks were silently truncated before the identifier was reached.",
        "Identifiers must be normalised consistently at both index and query time. Strip out the hyphens and lowercase both sides so that the query and the stored chunk text produce matching vectors.",
        "The asset chunk is too short to embed meaningfully, so its vector is dominated by boilerplate. Merge short records into larger chunks so each vector carries more signal.",
        "Dense retrieval matches meaning, and an unseen identifier has almost none, so it does not rank the exact match first. Add lexical search alongside the vector search and fuse the two rankings.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The split is diagnostic: natural-language questions work, exact identifiers do not. That is the signature of dense-only retrieval, which is strong on paraphrase and weak on rare literal strings. Hybrid retrieval fixes it by letting a lexical index match the identifier exactly and fusing that with the semantic ranking. Why not A: truncation would remove the identifier from the index entirely, whereas the scenario states the chunk contains it. Why not B: normalisation helps lexical matching but does not make a dense model rank an unseen identifier correctly. Why not C: chunk length is a real tuning knob but would degrade both query types, not just one."
    },
    {
      id: "tokenizationEmbeddings-16",
      type: "mcq",
      title: "Changing the Embedding Model",
      difficulty: "hard",
      points: 7,
      prompt: "A team upgrades to a newer embedding model and re-embeds only documents added after the switch, to save on cost. Search quality drops sharply across the whole corpus. Why, and what is the correct migration?",
      options: [
        "Retrieval quality depends on the distribution of vectors in the index, so mixing two eras skews the nearest-neighbour graph. Rebuilding the index structure over the existing vectors restores quality.",
        "Newer models are tuned for shorter inputs, so the old chunks are now longer than is optimal for them. Re-chunking the corpus at a smaller size while keeping the existing vectors resolves the mismatch.",
        "New and old vectors occupy unrelated spaces, so distances between them are meaningless and the index now ranks against a mix of two incompatible geometries. The whole corpus must be re-embedded, ideally into a new index cut over atomically.",
        "The newer model produces a different output dimension, so the index silently pads or truncates the shorter vectors, and that padded region then adds noise to every single comparison it takes part in.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. An embedding index is only coherent if every vector came from the same model. A partial migration leaves you comparing coordinates from two unrelated spaces, which corrupts ranking corpus-wide rather than only for the new documents. Re-embed everything, build a fresh index, and cut over in one step so no query ever spans both. Why not A: rebuilding the graph over incompatible vectors preserves the incompatibility. Why not B: chunk length is unrelated to the mixed-space problem. Why not D: dimensions may well match, and a mismatch would fail loudly rather than degrade quietly."
    },
    {
      id: "tokenizationEmbeddings-17",
      type: "mcq",
      title: "Numeric Tokenisation",
      difficulty: "hard",
      points: 7,
      prompt: "A model handles \"12 + 7\" reliably but makes errors on \"14829 + 76341\". Beyond the absence of a carrying algorithm, what does tokenisation contribute?",
      options: [
        "Long digit strings split into groups that do not align with place value, and the grouping differs between the operands, so digits that must be added are not presented in a consistent structure.",
        "Numbers are tokenised right to left while text is tokenised left to right, so the model must reverse its internal ordering before it can align the two operands.",
        "Digit tokens are assigned identifiers in ascending numeric order, so arithmetic on identifiers approximates arithmetic on values and accumulates error as magnitude grows.",
        "Large numbers exceed the vocabulary's numeric entries and fall back to an unknown token, so the model works from context alone rather than the digits themselves.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Multi-digit numbers fragment into chunks whose boundaries follow corpus frequency, not place value, and two operands can fragment differently. The units column of one may sit inside a token that also spans the tens, so the alignment addition requires is simply not present in the input. That is why digit-aligned tokenisation measurably improves arithmetic, and why the right engineering answer remains a calculator tool. Why not B: tokenisation is left to right throughout. Why not C: token identifiers are arbitrary indices with no numeric meaning. Why not D: there is no unknown-token fallback for digits."
    },
    {
      id: "tokenizationEmbeddings-18",
      type: "mcq",
      title: "Multilingual Cost and Quality",
      difficulty: "hard",
      points: 7,
      prompt: "A product launches in a market whose language fragments into roughly four times as many tokens per sentence as English. Which set of consequences should the team plan for?",
      options: [
        "Higher cost per request, less text fitting the same window, slower generation because more tokens must be produced, and usually weaker quality since the language was under-represented in training.",
        "Lower quality only, since fragmentation is a training-data symptom rather than a runtime one, and providers price by request rather than by token for non-English text.",
        "Higher cost and lower effective context, but quality is unaffected, since the model reconstructs the same internal representation regardless of how the text was segmented.",
        "Higher cost only. Context is measured in characters internally, so heavy fragmentation shows up on the invoice but does not reduce how much text actually fits into a request.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Fragmentation is one symptom of under-representation and it compounds. You pay more per unit of meaning, fit less into the window, generate more slowly because output is also more tokens, and typically get weaker quality because the same scarcity that starved the tokenizer also starved the model. Budget and evaluate that market separately. Why not B: cost is per token and the effects are not confined to quality. Why not C: quality is very often affected, and the correlation with fragmentation is not a coincidence. Why not D: context limits are counted in tokens, so fragmentation directly reduces usable text."
    },
    {
      id: "tokenizationEmbeddings-19",
      type: "mcq",
      title: "High Similarity, Wrong Answer",
      difficulty: "hard",
      points: 7,
      prompt: "A retrieval system returns a chunk with cosine similarity 0.91 to the query. The chunk is on-topic but does not contain the answer, and the model then fabricates one. What does the score actually tell you?",
      options: [
        "A score of 0.91 is below the practical threshold for this class of model, so raising the cut-off to 0.95 would filter out chunks like this one and prevent the fabrication.",
        "The score indicates the chunk is a near-duplicate of the query text, which is a sign the corpus contains restated versions of the questions rather than the answers to them.",
        "Cosine similarity conflates relevance with chunk length, so the high score mainly reflects that this chunk is similar in size to the query rather than similar in content.",
        "The score confirms topical relevance but says nothing about whether the answer is present, and a fixed threshold cannot separate the two. Verify groundedness after retrieval rather than trusting similarity.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Similarity measures how alike two texts are, not whether one answers the other. A chunk on exactly the right topic that omits the specific fact scores high and is genuinely the nearest neighbour, which is why threshold tuning cannot fix this. The system needs a groundedness check, a reranker that scores answer-bearing content, or an explicit path to say the answer was not found. Why not A: raising the threshold discards good retrievals while confidently wrong near-misses still clear it. Why not B: 0.91 is normal for on-topic content and does not imply duplication. Why not C: cosine discards magnitude, so length is not what drives the score."
    },
    {
      id: "tokenizationEmbeddings-20",
      type: "mcq",
      title: "Silent Index Drift",
      difficulty: "hard",
      points: 7,
      prompt: "A retrieval system slowly degrades over eight months. The embedding model is unchanged and its version is pinned. Documents are added daily, and chunking was retuned once from 800 to 400 tokens without a full re-index. What is the most likely cause?",
      options: [
        "The nearest-neighbour index degrades as vectors are inserted incrementally, so recall falls steadily away until that index structure is rebuilt from scratch.",
        "The corpus now mixes 800 token and 400 token chunks. Longer chunks average more topics into one vector and compete unevenly with shorter ones, so ranking is inconsistent corpus-wide.",
        "Daily additions have grown the corpus well past the point where a single index can maintain recall, so it should be sharded by document type with results merged back across the shards.",
        "Embedding models drift as their providers quietly retrain them, so a pinned version number no longer guarantees identical vectors over a period this long.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Changing chunk size without re-indexing leaves two populations in one index. A long chunk's vector is an average over more material, so it matches broadly but weakly, while short chunks match narrowly and sharply. Ranking then depends on which era a document was ingested in rather than on relevance, and it worsens as the mix shifts. Re-chunk and re-embed the whole corpus. Why not A: incremental insertion does degrade some index structures slightly, but not on this scale, and periodic rebuilds are routine. Why not C: corpus growth alone does not produce a steady eight-month decline at ordinary scales. Why not D: a pinned version is exactly the guarantee that this does not happen."
    }
  ]
};
