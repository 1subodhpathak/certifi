import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 2 of 15 - Transformer Architecture
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const transformersData = {
  id: ASSESSMENT_TYPES.transformers,
  level: 2,
  title: "Transformer Architecture",
  shortTitle: "Transformers",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "The mechanics behind the model: self-attention and query, key and value projections, multi-head attention, positional information, causal masking, residual streams, and the compute and memory consequences that show up as latency and cost in production.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. These questions test whether you understand the shape of the computation well enough to predict cost and latency, not whether you can recite the diagram. No negative marking.",
  questions: [
    {
      id: "transformers-01",
      type: "mcq",
      title: "What Attention Does",
      difficulty: "easy",
      points: 3,
      prompt: "In one self-attention layer, what is computed for a given position in the sequence?",
      options: [
        "A weighted sum of the value vectors of other positions, where each weight reflects how relevant that position is to this one.",
        "The single most relevant earlier position, whose representation then replaces the current position's representation for the next layer.",
        "A running average of all previous positions, weighted only by how recently each one appeared in the sequence rather than by content.",
        "A similarity score against every entry in the vocabulary, which determines which token will eventually be emitted at that position.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Attention scores every position against the current one, softmaxes those scores into weights, and returns the weighted sum of value vectors. It is a soft, content-based gather over the sequence. Why not B: it is a soft mixture over many positions, not a hard selection of one. Why not C: weights come from learned content similarity, not from position recency; recency is only a pattern some heads happen to learn. Why not D: vocabulary comparison happens once at the output layer, not inside every attention layer."
    },
    {
      id: "transformers-02",
      type: "mcq",
      title: "Query, Key and Value",
      difficulty: "easy",
      points: 3,
      prompt: "Self-attention projects each token into a query, a key, and a value. What are those three roles?",
      options: [
        "The query is what this position looks for, the key is what each position offers to be matched against, and the value is the content retrieved when a match is strong.",
        "The query and key are the same projection applied twice for numerical stability, and the value is the averaged result of comparing them across heads.",
        "The query is the token's own identity, the key is its position in the sequence, and the value is the output that the layer produces for it directly.",
        "The query holds the current layer's state, the key holds the state carried over from the previous layer, and the value carries the residual that is added back in afterwards.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The analogy is a soft dictionary lookup. Queries and keys are compared to decide how much attention to pay; values carry the information that is then mixed in proportion to that attention. Why not B: query and key are separate learned projections, which is precisely what lets a position seek something different from what it offers. Why not C: position is supplied separately by positional encoding, and the layer output requires the whole weighted sum plus the feed-forward block. Why not D: all three come from the same input at the same layer; they are not states from different layers."
    },
    {
      id: "transformers-03",
      type: "mcq",
      title: "Multiple Heads",
      difficulty: "easy",
      points: 3,
      prompt: "Why does an attention layer use several heads instead of one large one?",
      options: [
        "Each head is trained on a different slice of the corpus, so together they cover more of the training distribution than one head could.",
        "Heads run on separate devices by design, so the count is chosen to match the number of accelerators available at training time.",
        "One head gives one attention pattern per position. Several smaller heads let the layer attend to different relationships at once and combine the results.",
        "Multiple heads provide redundancy, so if one head produces a degenerate attention pattern the others can outvote it at the layer output.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A single softmax gives one distribution over positions, forcing one relationship to dominate. Splitting the dimension across heads lets the layer track syntax in one head, coreference in another, and so on, then concatenate and project. Why not A: all heads see identical data; there is no per-head data split. Why not B: head count is an architectural choice independent of hardware layout. Why not D: heads are concatenated, not voted on; there is no outvoting mechanism."
    },
    {
      id: "transformers-04",
      type: "mcq",
      title: "Positional Information",
      difficulty: "easy",
      points: 3,
      prompt: "Why do transformers need an explicit positional encoding?",
      options: [
        "Because attention is a weighted sum over a set, so without position the same tokens in any order give the same result.",
        "Because the causal mask needs an index to know which positions to hide, and positional encoding is what supplies that index at runtime.",
        "Because the softmax over long sequences becomes numerically unstable unless the scores are anchored to an absolute position in the input.",
        "Because token embeddings are shared across the vocabulary, so without position two occurrences of a word would collide into one representation.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Attention is permutation-equivariant: it treats the input as a set. Without injected position, \"dog bites man\" and \"man bites dog\" would give identical representations. Positional encoding breaks that symmetry. Why not B: the mask is applied by index in the attention computation and does not read the positional encoding. Why not C: stability is handled by scaling the dot products, not by position. Why not D: repeated words genuinely do start from the same embedding, and position is one of several things that later differentiate them, but collision is not the reason position is needed."
    },
    {
      id: "transformers-05",
      type: "mcq",
      title: "Decoder-Only Models",
      difficulty: "easy",
      points: 3,
      prompt: "Modern chat models are decoder-only with causal masking. What does the causal mask enforce?",
      options: [
        "That a position can attend only to itself and earlier positions, so predicting the next token can never depend on tokens that come after it.",
        "That the model cannot attend to any padding tokens, so batches of differing lengths produce the same result as running each sequence on its own.",
        "That each attention head sees only its own slice of the hidden dimension, keeping the heads independent until they are concatenated.",
        "That attention is limited to a fixed window of recent tokens, which is what bounds memory use as the generated sequence grows.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The mask zeroes out attention to future positions. That is what makes next-token prediction a valid training signal on every position at once, and what makes generation left to right. Why not B: padding masks exist too, but they are a separate mask solving a different problem. Why not C: head separation comes from splitting the projection dimensions, not from the causal mask. Why not D: that describes sliding-window attention, an optimisation some architectures add on top; standard causal attention reaches all the way back."
    },
    {
      id: "transformers-06",
      type: "mcq",
      title: "Residuals and Normalisation",
      difficulty: "easy",
      points: 3,
      prompt: "Every transformer block adds its input back to its output and applies layer normalisation. What do these two do?",
      options: [
        "The residual connection lets the model skip layers whose contribution is small, and normalisation measures which layers can safely be skipped at inference.",
        "The residual gives gradients a direct path through the network's depth, and normalisation keeps activation scales stable so training does not diverge.",
        "The residual connection caches the previous layer's output for reuse during generation, and normalisation compresses that cache so it stays within memory limits.",
        "The residual connection averages the outputs of the attention and feed-forward paths, and normalisation converts that average into a probability distribution.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Residual connections are what make very deep stacks trainable, by giving gradients a short path back and letting each block learn a refinement rather than a full representation. Normalisation keeps activation statistics in a workable range. Why not A: nothing is skipped at inference; every block runs on every token. Why not C: the KV cache is a separate inference-time structure, unrelated to residuals. Why not D: it is an addition, not an average, and no probability distribution is formed until the output layer."
    },
    {
      id: "transformers-07",
      type: "mcq",
      title: "Quadratic Attention",
      difficulty: "medium",
      points: 5,
      prompt: "Self-attention cost grows with the square of sequence length. What exactly is quadratic, and what follows?",
      options: [
        "The vocabulary softmax is computed once per position against every other position, so output projection cost dominates and grows quadratically.",
        "The parameter count grows quadratically with the supported context length, which is why long-context models are so much larger to store and load.",
        "Every position attends to every other, so the attention score matrix has length-squared entries. Doubling the input roughly quadruples attention compute and its peak memory.",
        "The number of layers must grow with the square root of the context length to preserve quality, so it is the effective depth of the stack that scales quadratically in compute.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The score matrix is sequence length by sequence length per head, so both the compute and the intermediate memory for attention scale with the square of the input. This is why long prompts get disproportionately expensive and why so much engineering targets this term. Why not A: the vocabulary projection is computed per position against the vocabulary, which is linear in sequence length. Why not B: parameters are fixed by architecture and do not grow with context length. Why not D: depth is an independent architectural choice."
    },
    {
      id: "transformers-08",
      type: "mcq",
      title: "The KV Cache",
      difficulty: "medium",
      points: 5,
      prompt: "During generation the runtime keeps a KV cache. What does it store and what does it save?",
      options: [
        "It stores the full token probability distribution from every previous step, so the sampler is able to revisit an earlier decision if generation goes off track.",
        "It stores the key and value vectors already computed for every previous position, so each new token attends over them instead of recomputing the whole prefix.",
        "It stores a compressed summary of the prompt so that later tokens can attend to the summary rather than the full input, bounding memory growth.",
        "It stores the most recent responses keyed by their prompt, so an identical prompt can be answered again without running the model at all.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Keys and values for positions already processed do not change, so caching them turns each generation step from a full re-encode of the sequence into a single new position attending over stored state. Without it, generating n tokens would mean n full forward passes over a growing prefix. Why not A: past distributions are not retained and generation does not backtrack. Why not C: nothing is compressed; the cache holds full per-position vectors, which is why it grows. Why not D: that is response caching, a separate application-level idea."
    },
    {
      id: "transformers-09",
      type: "mcq",
      title: "Prefill and Decode",
      difficulty: "medium",
      points: 5,
      prompt: `A request with a very long prompt is slow to produce its first token, then emits the rest quickly.

{{diagram}}

What explains the two-phase behaviour?`,
      diagram: `flowchart LR
  A["PREFILL<br/><small>process 40k prompt</small><br/><b>one big parallel pass</b>"] --> B["First token"]
  B --> C["DECODE<br/><small>emit token, emit token, ...</small><br/><b>one pass per token</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef worker fill:#ffffff,stroke:#94a3b8,stroke-width:1.5px,color:#334155;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  class A agent;
  class C worker;
  class B source;`,
      options: [
        "Prefill processes the whole prompt in one heavily parallel pass, which is compute-heavy and sets time to first token. Decode then produces one token per pass, reusing the cache.",
        "Prefill loads the model weights into accelerator memory for this request, and decode reuses them, so the first token pays a one-time weight-loading cost.",
        "Prefill runs a smaller draft model over the prompt to plan the response, and decode runs the full model, which is why the phases have such different speeds.",
        "Prefill validates and tokenises the input, which is single-threaded and therefore slow for long prompts, while decode is the only phase that actually runs the network over that input.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Prefill is one forward pass over all prompt tokens at once, so its cost scales with prompt length and dominates time to first token. Decode is one pass per generated token over a cache, so it is fast per token and largely independent of prompt length. This is why TTFT and inter-token latency must be budgeted separately. Why not B: weights are resident, not loaded per request. Why not C: that describes speculative decoding, an optional optimisation with a different structure. Why not D: tokenisation is negligible; prefill is a full network pass."
    },
    {
      id: "transformers-10",
      type: "mcq",
      title: "Architecture Families",
      difficulty: "medium",
      points: 5,
      prompt: "Encoder-only, decoder-only and encoder-decoder architectures each suit different tasks. Which mapping is correct?",
      options: [
        "Encoder-only and decoder-only are just training-time variants of one same network, and only encoder-decoder is a genuinely distinct architecture at inference time.",
        "Encoder-only for open-ended generation, decoder-only for classifying text into fixed categories, and encoder-decoder for embedding documents into vectors for semantic search.",
        "Encoder-only for classification and embedding, where every token sees every other; decoder-only for generation, where tokens see only the past; encoder-decoder for turning one sequence into another.",
        "Encoder-only for translation between languages, decoder-only for summarising a document down to its key points, encoder-decoder for ranking search results by relevance.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Bidirectional attention suits understanding tasks where the whole input is available, which is why embedding and classification models are encoder-style. Causal attention suits generation. Encoder-decoder keeps a bidirectional read of a source sequence while generating a target, which fits translation. Why not A: they differ structurally in masking and cross-attention, not merely in how they were trained. Why not B: it inverts every pairing. Why not D: translation is the classic encoder-decoder task, not encoder-only."
    },
    {
      id: "transformers-11",
      type: "mcq",
      title: "Where the Parameters Are",
      difficulty: "medium",
      points: 5,
      prompt: "In a standard transformer block, which component holds the largest share of the parameters, and what does it do?",
      options: [
        "The attention projections, since queries, keys and values each need a full square matrix, and there are several heads multiplying that cost in every layer.",
        "The positional encoding table, since it must hold a learned vector for each position up to the maximum supported context length.",
        "The layer normalisation parameters, since each has a scale and a shift per hidden dimension and they appear twice in every block.",
        "The position-wise feed-forward network, which expands each position to a wider hidden dimension and projects back, handling every position independently.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The feed-forward block typically expands to roughly four times the model dimension and back, which puts about two thirds of a block's parameters there. It is applied per position with no mixing across the sequence, which is the complement to attention's mixing role. Why not A: attention projections are substantial but smaller in total than the feed-forward expansion. Why not B: positional tables are tiny, and many modern models compute position without a learned table at all. Why not C: normalisation parameters are a negligible fraction."
    },
    {
      id: "transformers-12",
      type: "mcq",
      title: "From Hidden State to Token",
      difficulty: "medium",
      points: 5,
      prompt: "After the final transformer block, how does the model get from a hidden vector to an actual token?",
      options: [
        "The final hidden vector is compared by nearest-neighbour search against the embedding table, and the closest embedding's token is emitted directly.",
        "The final hidden vector is decoded character by character by a small auxiliary network, which is what allows a model to spell out any words not in its vocabulary at all.",
        "Each attention head votes for its own preferred token, and the head with the highest confidence score decides which one is emitted at that position.",
        "A projection maps the final hidden vector to one score per vocabulary entry, softmax turns those scores into probabilities, and the sampler picks a token from that distribution.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The output projection, often tied to the input embedding matrix, produces one logit per vocabulary entry; softmax normalises them; the sampler chooses. Why not A: a nearest-neighbour search would be both slower and a different operation, though tied embeddings make the matrix multiply superficially resemble one. Why not B: there is no character decoder; out-of-vocabulary words are handled by the tokenizer splitting them into subwords. Why not C: heads are combined by concatenation and projection inside each layer, and do not vote on output tokens."
    },
    {
      id: "transformers-13",
      type: "mcq",
      title: "Batching and Throughput",
      difficulty: "medium",
      points: 5,
      prompt: "A serving team increases batch size and sees total tokens per second rise sharply while the latency of any single request gets slightly worse. Why?",
      options: [
        "Larger batches allow a lower precision numeric format to be used safely, which raises throughput at the cost of a small amount of per-request accuracy and speed.",
        "Decode is limited by moving weights from memory rather than arithmetic. One batch reads the weights once and serves many sequences, so throughput rises while each request waits to be batched.",
        "Larger batches increase the effective context each request can use, so more compute is spent per request, which lowers individual speed but raises aggregate token counts.",
        "Larger batches let the scheduler reorder requests to run the shortest first, which raises average throughput while penalising the longer requests in the batch.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Decoding one token for one sequence reads the entire weight set to do very little arithmetic, so it is memory-bandwidth bound and the hardware sits idle. Batching amortises that read across many sequences, which is why throughput scales well while individual latency rises slightly from queueing and a larger step. Why not A: precision is set by deployment configuration and is independent of batch size. Why not C: batching does not change any request's context length. Why not D: reordering is a scheduling policy, not the source of the throughput gain."
    },
    {
      id: "transformers-14",
      type: "mcq",
      title: "Depth and Width",
      difficulty: "medium",
      points: 5,
      prompt: "A team doubles the number of layers in their model and finds quality barely improves while latency clearly worsens. What is the correct reading?",
      options: [
        "Quality scales with total parameters regardless of how they are arranged, so the result shows the team must have reduced width to keep the parameter count fixed.",
        "Layers contribute with diminishing returns once depth is adequate for the task, and depth is inherently sequential, so latency grows in direct proportion while quality does not.",
        "Doubling the depth halves the effective learning rate per layer, so the deeper model is simply undertrained rather than genuinely at its quality ceiling.",
        "Depth beyond a certain threshold causes attention in the later layers to collapse toward uniform, so the added layers actively remove information rather than refining what is there.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Capability scales with total scale, but the split between depth and width has diminishing returns in each direction, and depth carries a hard latency cost because layers must run in sequence and cannot be parallelised away. Why not A: arrangement genuinely matters, and nothing in the scenario says width was reduced. Why not C: learning rate is a hyperparameter that would be retuned, not a fixed consequence of depth. Why not D: attention entropy does rise in later layers, but describing it as active information removal overstates a real but softer effect."
    },
    {
      id: "transformers-15",
      type: "mcq",
      title: "KV Cache Memory",
      difficulty: "hard",
      points: 7,
      prompt: `A team serves a long-context model. Concurrency collapses as conversations get longer, and they run out of accelerator memory long before they run out of compute.

{{diagram}}

What is consuming the memory, and which fix targets it?`,
      diagram: `flowchart TB
  W["Model weights<br/><small>unchanged in both cases</small>"]
  S["Short chats"] --> S1["<b>120</b> concurrent sessions<br/><small>memory fine</small>"]
  L["Long chats"] --> L1["<b>11</b> concurrent sessions<br/><small>out of memory</small>"]
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class W,S,L source;
  class S1 safe;
  class L1 warning;`,
      options: [
        "Longer chats produce longer responses, so the output buffers held for each session come to dominate memory. Cap the maximum response length and stream results out rather than buffering them.",
        "Model weights are being duplicated per session so that each conversation can be served fully independently of the others. Share a single copy of the weights across every session on the device.",
        "The KV cache grows linearly with tokens in a session and is held for its lifetime, so long chats multiply per-session memory. Reduce it with grouped attention, quantisation, paged allocation, or eviction of idle sessions.",
        "Attention score matrices are retained after each step so later tokens can reuse them, and those matrices grow with the square of the context. Recompute them per step instead of storing them.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Weights are a fixed cost, shared. What scales per session is the KV cache: keys and values for every layer and head, for every token so far, held as long as the session is live. That is why concurrency falls as context grows. The real fixes all attack cache size: grouped-query or multi-query attention shrink it structurally, quantisation shrinks it numerically, paged attention removes fragmentation, and eviction reclaims idle sessions. Why not A: output buffers are kilobytes against gigabytes of cache. Why not B: weights are already shared; duplicating them per session is not how serving works. Why not D: score matrices are transient within a step and are not retained."
    },
    {
      id: "transformers-16",
      type: "mcq",
      title: "Grouped-Query Attention",
      difficulty: "hard",
      points: 7,
      prompt: "An architecture keeps many query heads but has them share a much smaller number of key and value heads. What problem does this solve, and what is given up?",
      options: [
        "It allows the key and value projections to be computed once and then reused across all layers, which removes most of the per-layer work at the cost of a shallower effective depth overall.",
        "It reduces the parameter count of the attention projections so the model fits onto smaller devices, at the cost of some capacity within the attention layers.",
        "It reduces the quadratic attention compute during prefill so long prompts process faster, at the cost of slightly worse handling of long-range dependencies.",
        "It shrinks the KV cache, since cache size scales with the number of key and value heads, not query heads. That raises decode throughput and concurrency, at some cost to head diversity.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Cache footprint is driven by key and value heads. Sharing them across groups of query heads cuts memory bandwidth per decode step and cache size per token, which is exactly the constraint that limits decode throughput and concurrency. The trade is that grouped heads attend to a shared view, giving up some of the diversity separate heads would have. Why not A: projections remain per layer; nothing is shared across depth. Why not B: the parameter saving is real but minor, and not why the technique exists. Why not C: it does not change the quadratic term; prefill compute is largely unaffected."
    },
    {
      id: "transformers-17",
      type: "mcq",
      title: "Extrapolating Beyond Training Length",
      difficulty: "hard",
      points: 7,
      prompt: "A model trained on 8,000 token sequences is served with 32,000 token inputs. It does not error, but coherence degrades badly once inputs pass roughly the trained length. What is the cause?",
      options: [
        "The tokenizer's maximum sequence identifier is set from the training length, so positions past it are assigned duplicate identifiers and the model cannot distinguish them.",
        "Positional encodings were only ever exercised at distances seen in training, so relative positions past that range are out of distribution and attention patterns break down.",
        "The KV cache overflows its preallocated region past the trained length and silently wraps, so the oldest positions are overwritten with new ones mid-generation.",
        "Attention weights are normalised over the sequence, so past the trained length each weight falls below the numerical resolution of the activation format and simply rounds to zero.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Whatever scheme conveys position was fitted at distances the model actually saw. Beyond that range the encodings are extrapolated rather than learned, attention patterns degrade, and text stays locally fluent while losing long-range structure. Techniques such as position interpolation and continued training on longer sequences exist precisely to extend the trained range. Why not A: tokenizers assign token identifiers, not position identifiers. Why not C: the cache is sized for the configured context and does not silently wrap. Why not D: it invents a precision cliff at a suspiciously convenient boundary."
    },
    {
      id: "transformers-18",
      type: "mcq",
      title: "Cost of a Long Prompt",
      difficulty: "hard",
      points: 7,
      prompt: `Two requests hit the same model.

{{diagram}}

Which comparison of their latency profiles is correct?`,
      diagram: `flowchart LR
  A["Request A<br/><b>40,000</b> token prompt<br/><small>200 tokens generated</small>"]
  B["Request B<br/><b>500</b> token prompt<br/><small>4,000 tokens generated</small>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef worker fill:#ffffff,stroke:#94a3b8,stroke-width:1.5px,color:#334155;
  class A agent;
  class B worker;`,
      options: [
        "A has high time to first token from the large prefill, then finishes quickly. B answers almost immediately but takes far longer overall, since each of its 4,000 tokens needs its own pass.",
        "A is slower overall, because prefill and decode both scale with total tokens, so the request with the larger single phase dominates the end-to-end time in each case.",
        "The two are close on both measures, since total token count is the standard proxy for the work done, and both phases cost about the same per token processed.",
        "B has the higher time to first token, because a short prompt gives the model far less context to condition on, so it computes for longer before committing to a first token.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Prefill is parallel across the prompt, so 40,000 tokens is one big pass: expensive, but a single step, and it lands entirely in time to first token. Decode is strictly sequential, so 4,000 generated tokens is 4,000 passes and dominates total wall time. A is the far larger request by token count and the faster one to finish. Why not B: prefill and decode have very different per-token costs and parallelism, so total token count does not order them. Why not C: this is precisely the assumption the example is built to break. Why not D: time to first token does not depend on having more context to think with; a short prompt prefills faster."
    },
    {
      id: "transformers-19",
      type: "mcq",
      title: "Mixture of Experts",
      difficulty: "hard",
      points: 7,
      prompt: "A mixture-of-experts model advertises 400 billion total parameters but claims inference cost comparable to a much smaller dense model. Which explanation is correct?",
      options: [
        "Experts are loaded on demand from host memory for each request, so only the experts that a given request actually needs are ever resident, which keeps accelerator memory proportional to the active subset.",
        "Only a fraction of the experts is unused on any given token, so the saving comes from skipping their weight updates, which applies during training rather than at inference.",
        "The experts are quantised far more aggressively than a dense model tolerates, so total parameters are large in count but small in bytes, which is where the cost comparison comes from.",
        "A router selects a small subset of experts per token, so arithmetic per token matches the active subset. Total parameters must still be resident in memory, so it saves compute but not capacity.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Sparse routing means each token's forward pass touches only the selected experts, so floating-point cost tracks active parameters, not total. The catch is memory: the full parameter set generally has to be resident and available, so serving cost is compute-cheap but memory-expensive, and the router adds load-balancing problems of its own. Why not A: on-demand expert loading exists in some systems but is slow and is not the basis of the general claim. Why not B: the saving is at inference too, and it is about which experts compute, not which are updated. Why not C: quantisation is orthogonal and applies to dense models equally."
    },
    {
      id: "transformers-20",
      type: "mcq",
      title: "Diagnosing a Serving Regression",
      difficulty: "hard",
      points: 7,
      prompt: `After a config change, a serving cluster shows the following.

{{diagram}}

Which change is most consistent with all four numbers?`,
      diagram: `flowchart TB
  C([Config change]) --> M1["Time to first token<br/><b>unchanged</b>"]
  C --> M2["Tokens per second per request<br/><b>down 45%</b>"]
  C --> M3["Total cluster throughput<br/><b>up 30%</b>"]
  C --> M4["Eval set accuracy<br/><b>unchanged</b>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  classDef source fill:#f8fafc,stroke:#94a3b8,color:#334155;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class C agent;
  class M1,M4 source;
  class M3 safe;
  class M2 warning;`,
      options: [
        "The context window limit was increased, which allows longer prompts, lengthens prefill, and raises the number of concurrent sequences that the cluster can admit.",
        "Speculative decoding was enabled, which drafts several tokens per verification pass and therefore raises per-request generation speed as well as cluster throughput.",
        "Weight precision was reduced to a narrower numeric format, which speeds up arithmetic in both phases and shows up as faster generation for every individual request rather than slower.",
        "The maximum batch size was raised. Prefill was already batched so TTFT holds, each request now shares decode steps with more sequences so per-request speed drops, while the hardware serves more.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. Only a batching change explains all four at once: identical model so accuracy is unchanged, prefill unaffected so TTFT holds, more sequences sharing each decode step so per-request speed falls, and much better hardware utilisation so aggregate throughput rises. That trade, individual latency for cluster efficiency, is the central serving dial. Why not A: a larger context limit would move TTFT once prompts actually grew, and does not by itself change decode speed. Why not B: speculative decoding targets per-request speed, which is the number that got worse. Why not C: lower precision would raise per-request speed, contradicting the second number."
    }
  ]
};
