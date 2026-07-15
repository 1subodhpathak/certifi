import { ASSESSMENT_TYPES } from '../../assessmentTypes';

const CATEGORY = 'AI/ML';
const DEFAULT_DURATION = 35;
const POINTS_PER_QUESTION = 5;

const rotateOptions = (correct, distractors, seed) => {
  const base = [correct, ...distractors.slice(0, 3)];
  const shift = seed % base.length;
  return base.map((_, index) => base[(index - shift + base.length) % base.length]);
};

const buildQuestions = (prefix, subject, records) => records.flatMap((record, index) => {
  const others = records.filter((_, otherIndex) => otherIndex !== index);
  const definitionOptions = rotateOptions(
    record.definition,
    others.slice(0, 3).map((item) => item.definition),
    index,
  );
  const useCaseOptions = rotateOptions(
    record.useCase,
    others.slice(1, 4).map((item) => item.useCase),
    index + 1,
  );
  const keyPointOptions = rotateOptions(
    record.keyPoint,
    others.slice(2, 5).map((item) => item.keyPoint),
    index + 2,
  );

  return [
    {
      id: `${prefix}-${String(index * 3 + 1).padStart(2, '0')}`,
      type: 'mcq',
      title: `${record.term} Fundamentals`,
      prompt: `What best describes ${record.term} in a professional ${subject} workflow?`,
      options: definitionOptions,
      correctIndex: definitionOptions.indexOf(record.definition),
      explanation: record.definition,
    },
    {
      id: `${prefix}-${String(index * 3 + 2).padStart(2, '0')}`,
      type: 'mcq',
      title: `${record.term} Use Case`,
      prompt: `When is ${record.term} most useful in day-to-day ${subject} execution?`,
      options: useCaseOptions,
      correctIndex: useCaseOptions.indexOf(record.useCase),
      explanation: record.useCase,
    },
    {
      id: `${prefix}-${String(index * 3 + 3).padStart(2, '0')}`,
      type: 'mcq',
      title: `${record.term} Best Practice`,
      prompt: `Which statement reflects strong judgment when working with ${record.term}?`,
      options: keyPointOptions,
      correctIndex: keyPointOptions.indexOf(record.keyPoint),
      explanation: record.keyPoint,
    },
  ];
});

const buildAssessment = ({
  id,
  title,
  shortTitle,
  description,
  prefix,
  records,
  durationMinutes = DEFAULT_DURATION,
}) => ({
  id,
  title,
  shortTitle,
  category: CATEGORY,
  durationMinutes,
  pointsPerQuestion: POINTS_PER_QUESTION,
  description,
  instructions: 'Choose the strongest answer for each professional AI/ML scenario and concept check.',
  questions: buildQuestions(prefix, shortTitle, records),
});

export const mathematicsStatisticsData = buildAssessment({
  id: ASSESSMENT_TYPES.mathematics_statistics,
  title: 'Mathematics & Statistics for AI Professional Certification',
  shortTitle: 'Math & Statistics',
  description: 'Probability, linear algebra, optimization, distributions, hypothesis testing, and metrics used in AI and ML work.',
  prefix: 'ms',
  records: [
    { term: 'Linear algebra', definition: 'The branch of math used to represent data and model parameters as vectors and matrices.', useCase: 'When encoding features, multiplying weight matrices, or reasoning about embeddings.', keyPoint: 'Good ML intuition includes understanding dimensionality, dot products, and matrix shape alignment.' },
    { term: 'Probability', definition: 'A framework for quantifying uncertainty and the likelihood of events.', useCase: 'When estimating model confidence, risk, or the behavior of random variables.', keyPoint: 'Probabilities should be interpreted in context rather than treated as guaranteed outcomes.' },
    { term: 'Conditional probability', definition: 'The probability of one event given that another event has already occurred.', useCase: 'When applying Bayes reasoning, updating beliefs, or analyzing dependent events.', keyPoint: 'Always check what information is being conditioned on before interpreting the result.' },
    { term: 'Expectation', definition: 'The long-run average value of a random variable weighted by its probabilities.', useCase: 'When comparing forecasted outcomes, expected loss, or average return.', keyPoint: 'Expectation is about average tendency, not a promise that one observation will match it.' },
    { term: 'Variance', definition: 'A measure of how spread out values are around the mean.', useCase: 'When evaluating volatility, uncertainty, or feature scaling behavior.', keyPoint: 'High variance signals dispersion and often changes how confidently results should be interpreted.' },
    { term: 'Gradient descent', definition: 'An optimization method that updates parameters in the direction that reduces loss.', useCase: 'When training linear models, neural networks, or other differentiable systems.', keyPoint: 'Learning rate selection matters because steps that are too large or too small slow convergence.' },
    { term: 'Hypothesis testing', definition: 'A statistical process for evaluating whether evidence supports or rejects a stated assumption.', useCase: 'When comparing experiments, model changes, or product interventions.', keyPoint: 'A statistically significant result still needs practical and business relevance checks.' },
    { term: 'Normal distribution', definition: 'A bell-shaped probability distribution often used to model natural variation and measurement noise.', useCase: 'When approximating errors, interpreting z-scores, or framing confidence intervals.', keyPoint: 'Many methods assume approximate normality, so checking assumptions improves reliability.' },
    { term: 'Correlation', definition: 'A measure of the strength and direction of association between variables.', useCase: 'When exploring feature relationships or spotting redundant inputs.', keyPoint: 'Correlation does not establish causation and should not be overinterpreted.' },
    { term: 'Bias-variance tradeoff', definition: 'The balance between underfitting from overly simple models and overfitting from overly flexible ones.', useCase: 'When choosing model complexity, regularization, or feature engineering depth.', keyPoint: 'Strong model design aims for generalization rather than just the lowest training error.' },
  ],
});

export const pythonForAiData = buildAssessment({
  id: ASSESSMENT_TYPES.python_ai,
  title: 'Python for AI Professional Certification',
  shortTitle: 'Python for AI',
  description: 'Python syntax, data handling, packaging, notebooks, and workflow patterns commonly used in AI projects.',
  prefix: 'pyai',
  records: [
    { term: 'Virtual environment', definition: 'An isolated Python environment used to manage project-specific dependencies.', useCase: 'When keeping AI project libraries separate from system-wide packages or other repos.', keyPoint: 'Reproducible AI work starts with dependency isolation and explicit version control.' },
    { term: 'List comprehension', definition: 'A compact Python syntax for building lists from iterables with optional filtering.', useCase: 'When transforming small collections or preparing lightweight feature lists.', keyPoint: 'Readable code matters more than clever one-liners in production workflows.' },
    { term: 'Dictionary', definition: 'A key-value data structure used for fast lookups and structured metadata storage.', useCase: 'When storing parameters, feature mappings, or API payload fields.', keyPoint: 'Choose clear keys and consistent schemas so downstream code stays maintainable.' },
    { term: 'Function', definition: 'A reusable block of code that encapsulates logic behind named inputs and outputs.', useCase: 'When modularizing preprocessing, inference calls, or evaluation steps.', keyPoint: 'Small, testable functions make AI pipelines easier to debug and extend.' },
    { term: 'Exception handling', definition: 'A Python mechanism for catching and responding to runtime errors gracefully.', useCase: 'When wrapping API calls, file reads, or model loading operations that may fail.', keyPoint: 'Fail loudly enough for observability but safely enough to protect the workflow.' },
    { term: 'Pandas integration', definition: 'The common Python practice of using DataFrames to clean, inspect, and transform tabular data.', useCase: 'When preparing datasets before model training or reporting outputs.', keyPoint: 'Data type checks and null handling should happen early in the pipeline.' },
    { term: 'Notebook workflow', definition: 'An interactive development style that mixes code, output, and narrative in one document.', useCase: 'When exploring data, validating ideas, or explaining model experiments.', keyPoint: 'Notebooks are great for exploration but should be hardened before production use.' },
    { term: 'Package import', definition: 'The act of loading external or internal modules so code can reuse structured functionality.', useCase: 'When organizing utilities, model code, and evaluation helpers across files.', keyPoint: 'Stable import structure reduces duplication and supports cleaner architecture.' },
    { term: 'Type hints', definition: 'Python annotations that document expected input and output types for functions and objects.', useCase: 'When improving editor assistance, readability, and maintainability in larger AI codebases.', keyPoint: 'Type hints reduce ambiguity even though Python remains dynamically typed.' },
    { term: 'CLI script', definition: 'A command-line Python entry point used to run repeatable tasks or pipelines.', useCase: 'When launching training jobs, batch inference, or data preparation steps.', keyPoint: 'Operational AI work benefits from scripts that are parameterized and easy to automate.' },
  ],
});

export const numpyAiData = buildAssessment({
  id: ASSESSMENT_TYPES.numpy_ai,
  title: 'NumPy for AI Professional Certification',
  shortTitle: 'NumPy',
  description: 'Arrays, broadcasting, vectorization, reshaping, linear algebra, and performance-oriented numerical programming.',
  prefix: 'np',
  records: [
    { term: 'ndarray', definition: 'NumPy’s core multi-dimensional array structure for efficient numerical computation.', useCase: 'When storing tensors, feature matrices, or batched numeric outputs.', keyPoint: 'Array shape and dtype awareness are essential for correct scientific code.' },
    { term: 'Broadcasting', definition: 'A NumPy rule set that lets arrays with compatible shapes participate in element-wise operations.', useCase: 'When applying scalars or differently shaped arrays without manual loops.', keyPoint: 'Broadcasting is powerful only when shape compatibility is clearly understood.' },
    { term: 'Vectorization', definition: 'Replacing explicit Python loops with optimized array operations.', useCase: 'When improving the performance of math-heavy preprocessing or simulation code.', keyPoint: 'Vectorized code is usually faster and clearer for large numeric workloads.' },
    { term: 'Reshape', definition: 'An operation that changes an array’s dimensions without changing its underlying values when possible.', useCase: 'When preparing model inputs, flattening features, or batching data.', keyPoint: 'Reshape errors often come from mismatched element counts or wrong ordering assumptions.' },
    { term: 'Axis', definition: 'The dimension along which a NumPy operation is applied.', useCase: 'When summing rows, averaging columns, or reducing batched tensors.', keyPoint: 'Misreading axes is a common source of silent logic bugs in ML code.' },
    { term: 'Dot product', definition: 'A linear algebra operation that multiplies and sums aligned elements to measure projection or combine weights.', useCase: 'When computing linear model outputs, similarity, or neural activations.', keyPoint: 'Dimension alignment matters because matrix math follows strict shape rules.' },
    { term: 'Masking', definition: 'Using boolean arrays to filter or update selected elements of an array.', useCase: 'When removing invalid records or applying conditional transformations.', keyPoint: 'Masking keeps data operations expressive without manual index bookkeeping.' },
    { term: 'Random seed', definition: 'A fixed value used to make pseudo-random operations reproducible.', useCase: 'When repeating experiments, debugging training behavior, or comparing runs.', keyPoint: 'Reproducibility improves trust in experiments and comparisons.' },
    { term: 'dtype', definition: 'The declared data type of array elements, such as float32 or int64.', useCase: 'When balancing memory use, precision, and compatibility with downstream frameworks.', keyPoint: 'Choosing the right dtype affects both performance and numerical stability.' },
    { term: 'Slicing', definition: 'Selecting portions of an array by index ranges or positions.', useCase: 'When batching data, extracting windows, or separating train-validation splits.', keyPoint: 'Consistent slicing logic is important because off-by-one mistakes are easy to miss.' },
  ],
});

export const pandasAiData = buildAssessment({
  id: ASSESSMENT_TYPES.pandas_ai,
  title: 'Pandas for AI Professional Certification',
  shortTitle: 'Pandas',
  description: 'Cleaning, joining, aggregating, and validating tabular datasets used in analytics and machine learning pipelines.',
  prefix: 'pd',
  records: [
    { term: 'DataFrame', definition: 'A two-dimensional labeled data structure used for tabular analysis and transformation.', useCase: 'When cleaning training data, preparing features, or inspecting model outputs.', keyPoint: 'Reliable AI work depends on clear column semantics and schema awareness.' },
    { term: 'Missing values', definition: 'Absent entries in a dataset that need explicit handling before analysis or training.', useCase: 'When imputing, dropping, or flagging incomplete records.', keyPoint: 'Null handling should reflect business meaning, not just technical convenience.' },
    { term: 'GroupBy', definition: 'A Pandas operation for splitting data into groups and aggregating each group.', useCase: 'When summarizing by user, cohort, region, or experiment bucket.', keyPoint: 'Grouped summaries are only useful when aggregation logic matches the business question.' },
    { term: 'Merge', definition: 'A join operation that combines rows from multiple tables using related keys.', useCase: 'When enriching features from lookup tables or linking labels to events.', keyPoint: 'Join type and key uniqueness should be validated to avoid silent duplication.' },
    { term: 'Apply', definition: 'A flexible Pandas method that runs a custom function across rows or columns.', useCase: 'When built-in vectorized operations are insufficient for a transformation.', keyPoint: 'Prefer vectorized operations when possible because apply can be slower at scale.' },
    { term: 'Datetime parsing', definition: 'Converting raw text or numeric fields into timestamp-aware values.', useCase: 'When creating time-based features, windows, or trend analysis.', keyPoint: 'Timezone and parsing assumptions should be explicit in production data flows.' },
    { term: 'Categorical encoding', definition: 'Representing category-like columns efficiently using discrete labels.', useCase: 'When reducing memory usage or preparing features for ML models.', keyPoint: 'Encoding should be consistent between training and inference environments.' },
    { term: 'Outlier inspection', definition: 'The process of identifying unusual values that may reflect errors or important edge cases.', useCase: 'When validating data quality before training or dashboard publication.', keyPoint: 'Outliers should be investigated rather than automatically removed.' },
    { term: 'Index', definition: 'The labeled row axis in a DataFrame used for alignment and referencing.', useCase: 'When resampling time series, joining data, or preserving entity identity.', keyPoint: 'Unexpected indexes can cause alignment bugs if they are not reset or managed intentionally.' },
    { term: 'Pipeline-ready dataset', definition: 'A cleaned and validated table whose schema and meaning are stable enough for repeatable ML use.', useCase: 'When handing data from exploration into training or batch inference.', keyPoint: 'Production readiness means the data contract is explicit, testable, and monitored.' },
  ],
});

export const openAiApisData = buildAssessment({
  id: ASSESSMENT_TYPES.openai_apis,
  title: 'OpenAI & APIs Professional Certification',
  shortTitle: 'OpenAI & APIs',
  description: 'Prompted API workflows, request design, rate limits, structured outputs, and production integration patterns.',
  prefix: 'oai',
  records: [
    { term: 'API request', definition: 'A structured call sent from an application to a model service with inputs and configuration.', useCase: 'When integrating chat, extraction, or generation workflows into a product.', keyPoint: 'Reliable API design starts with explicit inputs, predictable outputs, and error handling.' },
    { term: 'System instruction', definition: 'A high-level directive that steers model behavior and role throughout a response.', useCase: 'When defining tone, scope, guardrails, or output policy for a workflow.', keyPoint: 'Clear system instructions reduce ambiguity and improve consistency.' },
    { term: 'Structured output', definition: 'A response format designed to return data in a predictable machine-readable schema.', useCase: 'When feeding model output into downstream automation or UI components.', keyPoint: 'Structured output reduces brittle parsing and makes integrations easier to validate.' },
    { term: 'Rate limiting', definition: 'Service-level protection that restricts how many requests or tokens can be used over time.', useCase: 'When designing retries, throughput planning, or user-facing quotas.', keyPoint: 'Production systems should handle throttling gracefully rather than assuming infinite capacity.' },
    { term: 'Token budgeting', definition: 'The practice of planning prompt and response size to control cost, latency, and truncation risk.', useCase: 'When balancing answer quality against performance and usage economics.', keyPoint: 'Large prompts should be intentional because they affect both speed and spend.' },
    { term: 'Function calling', definition: 'A pattern where the model chooses or fills parameters for predefined application tools.', useCase: 'When connecting the model to search, database, or workflow actions.', keyPoint: 'Tool use should be validated server-side because the model should not be treated as authority.' },
    { term: 'Streaming response', definition: 'A response mode where partial output is delivered progressively instead of waiting for the full completion.', useCase: 'When improving perceived latency in chat or long-form generation interfaces.', keyPoint: 'Streaming improves UX but requires frontend and backend handling for incremental updates.' },
    { term: 'Retry strategy', definition: 'A controlled policy for reattempting failed requests due to timeouts, rate limits, or transient errors.', useCase: 'When hardening production AI features that depend on network calls.', keyPoint: 'Retries should be bounded and observability should reveal repeated failure patterns.' },
    { term: 'Moderation workflow', definition: 'A safety layer used to screen or handle risky inputs and outputs before displaying or acting on them.', useCase: 'When deploying user-facing AI features with abuse or compliance concerns.', keyPoint: 'Safety controls should be part of product design, not an afterthought.' },
    { term: 'Evaluation harness', definition: 'A repeatable process for checking whether API changes improve accuracy, reliability, or policy adherence.', useCase: 'When comparing prompts, model settings, or release candidates.', keyPoint: 'Model changes should be judged on measured outcomes instead of anecdotal impressions.' },
  ],
});

export const langchainData = buildAssessment({
  id: ASSESSMENT_TYPES.langchain,
  title: 'LangChain Professional Certification',
  shortTitle: 'LangChain',
  description: 'Chains, prompts, memory, tool orchestration, retrieval patterns, and production agent workflows with LangChain.',
  prefix: 'lc',
  records: [
    { term: 'Chain', definition: 'A LangChain workflow that connects one or more model or tool steps into a repeatable sequence.', useCase: 'When building structured pipelines such as classify-then-route or retrieve-then-answer.', keyPoint: 'Good chains are modular and observable rather than hidden inside one prompt.' },
    { term: 'Prompt template', definition: 'A reusable prompt structure with variable placeholders filled at runtime.', useCase: 'When standardizing prompts across users, tools, or datasets.', keyPoint: 'Templates work best when placeholders are explicit and context is tightly scoped.' },
    { term: 'Retriever', definition: 'A component that fetches relevant documents or chunks for a user query.', useCase: 'When grounding answers with external knowledge instead of relying only on model memory.', keyPoint: 'Retriever quality often matters as much as model quality in RAG systems.' },
    { term: 'Tool', definition: 'An external function or capability that the model can invoke through the application layer.', useCase: 'When the workflow needs search, math, APIs, or database access.', keyPoint: 'Tools should have narrow contracts and reliable validation.' },
    { term: 'Memory', definition: 'A mechanism for preserving selected conversation state or workflow context across turns.', useCase: 'When multi-step assistants need to remember preferences or prior decisions.', keyPoint: 'Only retain context that is actually useful because noisy memory hurts quality.' },
    { term: 'Output parser', definition: 'A layer that converts model output into a validated format such as JSON or typed objects.', useCase: 'When LangChain results must feed downstream logic or automation.', keyPoint: 'Parsing strategy should match the strictness required by the consuming system.' },
    { term: 'Runnable', definition: 'A composable LangChain building block used to define, connect, and execute logic.', useCase: 'When constructing modern chains with clear step boundaries and reusable flows.', keyPoint: 'Composable runnables encourage maintainable pipeline architecture.' },
    { term: 'Callback tracing', definition: 'A monitoring pattern that records execution events for prompts, tools, latency, and failures.', useCase: 'When debugging a production chain or comparing prompt performance.', keyPoint: 'Observability is essential because LLM pipelines are harder to debug than traditional code paths.' },
    { term: 'Agent loop', definition: 'A control pattern in which the model reasons, decides on a tool, observes the result, and continues.', useCase: 'When a task requires iterative planning rather than one direct response.', keyPoint: 'Agent loops need limits and guardrails so they do not become expensive or unstable.' },
    { term: 'Context window management', definition: 'The discipline of controlling how much history and retrieved content is sent into each run.', useCase: 'When chains combine conversation state, retrieved docs, and tool output.', keyPoint: 'More context is not always better because irrelevant tokens reduce signal quality.' },
  ],
});

export const llamaindexData = buildAssessment({
  id: ASSESSMENT_TYPES.llamaindex,
  title: 'LlamaIndex Professional Certification',
  shortTitle: 'LlamaIndex',
  description: 'Ingestion, indexing, document chunks, retrieval composition, and knowledge-grounded application design with LlamaIndex.',
  prefix: 'li',
  records: [
    { term: 'Document loader', definition: 'A component that reads raw source content into a form the indexing pipeline can process.', useCase: 'When ingesting PDFs, web pages, docs, or internal knowledge stores.', keyPoint: 'Loading quality affects downstream retrieval because bad source parsing creates bad context.' },
    { term: 'Chunking', definition: 'Splitting source content into smaller units suitable for embedding and retrieval.', useCase: 'When balancing semantic completeness against retrieval precision.', keyPoint: 'Chunk size should be tuned to the query style and document structure.' },
    { term: 'Index', definition: 'A data structure that organizes embedded or structured knowledge for efficient retrieval.', useCase: 'When building searchable corpora for question answering or copilots.', keyPoint: 'Index choice should reflect the retrieval pattern, scale, and metadata needs.' },
    { term: 'Node', definition: 'A unit of content and metadata within LlamaIndex used during ingestion and retrieval.', useCase: 'When tracking chunk-level provenance, relationships, or source references.', keyPoint: 'Rich metadata improves filtering and traceability in grounded AI systems.' },
    { term: 'Query engine', definition: 'The component that receives a query, retrieves context, and coordinates answer generation.', useCase: 'When exposing search or chat over indexed knowledge.', keyPoint: 'Query engines should be evaluated on both answer quality and citation reliability.' },
    { term: 'Metadata filtering', definition: 'Restricting retrieval based on structured attributes such as source, date, or department.', useCase: 'When narrowing results to the right subset of enterprise knowledge.', keyPoint: 'Filtering improves precision when the knowledge base spans multiple domains.' },
    { term: 'Response synthesizer', definition: 'A layer that combines retrieved results into a final answer strategy.', useCase: 'When summarizing across many chunks or composing grounded responses.', keyPoint: 'Synthesis quality depends on both retrieval signal and prompt discipline.' },
    { term: 'Router query engine', definition: 'A mechanism that sends a question to the most appropriate retriever or index.', useCase: 'When one application spans multiple knowledge sources or modalities.', keyPoint: 'Routing logic should be transparent enough to inspect and refine.' },
    { term: 'Ingestion pipeline', definition: 'A repeatable sequence that loads, transforms, chunks, embeds, and stores source content.', useCase: 'When operationalizing knowledge updates for a retrieval system.', keyPoint: 'Ingestion should be versioned because source changes affect retrieval behavior.' },
    { term: 'Citation grounding', definition: 'The practice of connecting answers back to supporting source passages or records.', useCase: 'When building trust in enterprise assistants or regulated workflows.', keyPoint: 'Citations should be accurate enough that users can verify the answer quickly.' },
  ],
});

export const huggingFaceData = buildAssessment({
  id: ASSESSMENT_TYPES.hugging_face,
  title: 'Hugging Face Professional Certification',
  shortTitle: 'Hugging Face',
  description: 'Transformers, tokenizers, model hubs, pipelines, fine-tuning concepts, and ecosystem usage patterns.',
  prefix: 'hf',
  records: [
    { term: 'Transformer model', definition: 'A neural architecture built around attention mechanisms for sequence understanding and generation.', useCase: 'When working on NLP, embeddings, summarization, or generative AI tasks.', keyPoint: 'Model choice should match task requirements, latency, and resource limits.' },
    { term: 'Tokenizer', definition: 'A component that converts raw text into model-consumable tokens or IDs.', useCase: 'When preparing prompts and documents for transformer inference or training.', keyPoint: 'Tokenization behavior affects context length, cost, and output quality.' },
    { term: 'Model hub', definition: 'A repository ecosystem where pretrained models, datasets, and demos are shared and versioned.', useCase: 'When evaluating existing checkpoints before training from scratch.', keyPoint: 'Always verify model license, provenance, and suitability for the intended use.' },
    { term: 'Pipeline API', definition: 'A simplified Hugging Face interface for running common inference tasks with minimal setup.', useCase: 'When quickly prototyping sentiment, classification, generation, or extraction.', keyPoint: 'Pipelines are excellent for speed, but deeper control may require lower-level APIs.' },
    { term: 'Fine-tuning', definition: 'Training a pretrained model further on task-specific data so it performs better on a defined objective.', useCase: 'When domain adaptation matters more than generic performance.', keyPoint: 'Fine-tuning data quality often matters more than just increasing quantity.' },
    { term: 'Dataset object', definition: 'A structured dataset representation used for loading, transforming, and batching examples efficiently.', useCase: 'When preparing examples for tokenization, evaluation, or training loops.', keyPoint: 'Consistent dataset schema reduces surprises in training pipelines.' },
    { term: 'Model card', definition: 'Documentation that explains a model’s purpose, training context, limitations, and usage notes.', useCase: 'When deciding whether a published model is appropriate for production use.', keyPoint: 'Reading the model card is part of responsible model selection.' },
    { term: 'Trainer', definition: 'A high-level training utility that standardizes many common fine-tuning workflows.', useCase: 'When running supervised experiments without building a full custom loop.', keyPoint: 'Convenience is valuable, but teams should still understand metrics and checkpoints.' },
    { term: 'Inference endpoint', definition: 'A hosted or deployed serving interface that exposes model predictions over an API.', useCase: 'When operationalizing a Hugging Face model for application use.', keyPoint: 'Serving design should account for cold starts, scale, and observability.' },
    { term: 'PEFT', definition: 'Parameter-efficient fine-tuning methods that adapt models using a smaller number of trainable parameters.', useCase: 'When compute or memory constraints make full fine-tuning impractical.', keyPoint: 'PEFT can speed experimentation while keeping deployment footprints manageable.' },
  ],
});

export const vectorDatabasesData = buildAssessment({
  id: ASSESSMENT_TYPES.vector_databases,
  title: 'Vector Databases Professional Certification',
  shortTitle: 'Vector Databases',
  description: 'Embeddings, similarity search, indexing, metadata filtering, and operational retrieval design.',
  prefix: 'vdb',
  records: [
    { term: 'Embedding', definition: 'A dense numeric representation that captures semantic relationships between items.', useCase: 'When comparing meaning across text, images, or other high-dimensional objects.', keyPoint: 'Embedding quality depends on choosing a model aligned to the retrieval task.' },
    { term: 'Similarity search', definition: 'Retrieving items whose vector representations are close to a query vector.', useCase: 'When powering semantic search, recommendation, or retrieval-augmented generation.', keyPoint: 'Distance metric choice affects what “similar” means operationally.' },
    { term: 'Cosine similarity', definition: 'A measure of directional closeness between vectors, often used in semantic retrieval.', useCase: 'When comparing embeddings whose magnitude is less important than orientation.', keyPoint: 'Metric choice should be validated with real queries and judged on retrieval quality.' },
    { term: 'Approximate nearest neighbor', definition: 'A search strategy that trades exactness for much faster vector retrieval at scale.', useCase: 'When serving low-latency search over large embedding collections.', keyPoint: 'ANN systems require recall-performance tradeoff tuning rather than assuming defaults are ideal.' },
    { term: 'Metadata filter', definition: 'A structured constraint applied alongside vector search to restrict eligible results.', useCase: 'When limiting retrieval by tenant, date, source, or document type.', keyPoint: 'Hybrid filtering improves relevance in enterprise retrieval systems.' },
    { term: 'Upsert', definition: 'An operation that inserts a record if absent or updates it if already present.', useCase: 'When refreshing embeddings as source content changes.', keyPoint: 'Content and embedding versioning should stay synchronized during updates.' },
    { term: 'Namespace', definition: 'A logical partition used to isolate vector collections within one database system.', useCase: 'When separating customers, environments, or product domains.', keyPoint: 'Isolation design should support both security and maintainability.' },
    { term: 'Re-indexing', definition: 'Rebuilding vector structures so changes in data or configuration are reflected in search behavior.', useCase: 'When embeddings, metadata, or ANN settings are updated materially.', keyPoint: 'Re-indexing plans should account for downtime, rollback, and consistency.' },
    { term: 'Hybrid search', definition: 'A retrieval strategy that combines vector similarity with lexical or keyword signals.', useCase: 'When queries need both semantic understanding and exact term matching.', keyPoint: 'Hybrid retrieval often outperforms pure vector search on enterprise content.' },
    { term: 'Recall evaluation', definition: 'Measuring how often the right supporting items are returned by the retriever.', useCase: 'When validating whether a vector database is good enough for downstream QA.', keyPoint: 'Retriever evaluation should happen before blaming answer quality on the model alone.' },
  ],
});

export const mlDeploymentData = buildAssessment({
  id: ASSESSMENT_TYPES.ml_deployment,
  title: 'ML Deployment Professional Certification',
  shortTitle: 'ML Deployment',
  description: 'Serving patterns, packaging, rollouts, latency management, and operational ML release design.',
  prefix: 'mld',
  records: [
    { term: 'Model serving', definition: 'Exposing a trained model so applications can request predictions in real time or batch mode.', useCase: 'When turning an experiment into a consumable production capability.', keyPoint: 'Serving design should reflect latency, throughput, and business criticality.' },
    { term: 'Batch inference', definition: 'Running predictions on many records together on a schedule rather than per-request.', useCase: 'When immediate responses are not required and throughput matters most.', keyPoint: 'Batch is often simpler and cheaper when real-time interaction is unnecessary.' },
    { term: 'Online inference', definition: 'Generating predictions synchronously in response to live application requests.', useCase: 'When products need immediate scoring, ranking, or generation.', keyPoint: 'Online systems need stronger attention to latency and reliability budgets.' },
    { term: 'Blue-green rollout', definition: 'A release pattern that keeps old and new environments side by side for controlled switching.', useCase: 'When deploying model changes with rollback readiness.', keyPoint: 'Safer deployment patterns are worth the extra setup for high-impact systems.' },
    { term: 'Canary release', definition: 'Sending a small slice of traffic to a new model before wider rollout.', useCase: 'When measuring live performance and failure risk incrementally.', keyPoint: 'Canaries are useful only when metrics and guardrails are already defined.' },
    { term: 'Feature parity', definition: 'Ensuring the features used in training are produced consistently in production inference.', useCase: 'When avoiding train-serve skew in deployed ML systems.', keyPoint: 'Feature mismatches are a common hidden cause of production model degradation.' },
    { term: 'Model artifact', definition: 'A packaged representation of the trained model and its required assets.', useCase: 'When versioning and promoting models across environments.', keyPoint: 'Artifacts should capture preprocessing, metadata, and dependency expectations.' },
    { term: 'Inference latency', definition: 'The time required for a deployed model to process a request and return a result.', useCase: 'When meeting SLAs for user-facing AI systems.', keyPoint: 'Latency budgets should include network, preprocessing, and postprocessing overhead.' },
    { term: 'Autoscaling', definition: 'Automatically adjusting compute capacity based on traffic or resource signals.', useCase: 'When inference load changes materially over time.', keyPoint: 'Scaling policy should match both burst behavior and cost constraints.' },
    { term: 'Rollback plan', definition: 'A predefined method for reverting to a safer model or system state after a bad release.', useCase: 'When a deployment harms accuracy, latency, or business outcomes.', keyPoint: 'Releases are only production-ready when rollback is tested, not just imagined.' },
  ],
});

export const dockerForAiData = buildAssessment({
  id: ASSESSMENT_TYPES.docker_ai,
  title: 'Docker for AI Professional Certification',
  shortTitle: 'Docker for AI',
  description: 'Containers, images, dependencies, reproducibility, and packaging AI workloads for local and cloud use.',
  prefix: 'dai',
  records: [
    { term: 'Container image', definition: 'A packaged snapshot of code, dependencies, and runtime configuration.', useCase: 'When making AI applications portable across environments.', keyPoint: 'Image consistency is critical for reproducible training and inference behavior.' },
    { term: 'Dockerfile', definition: 'A declarative file that defines how a container image should be built.', useCase: 'When standardizing AI application environments or serving stacks.', keyPoint: 'Clear layering and minimal dependencies improve both speed and security.' },
    { term: 'Base image', definition: 'The starting image used as the foundation for a Docker build.', useCase: 'When choosing the operating system and runtime baseline for ML workloads.', keyPoint: 'Smaller and well-maintained base images reduce attack surface and build time.' },
    { term: 'Volume mount', definition: 'A way to expose host or persistent storage inside a running container.', useCase: 'When accessing datasets, checkpoints, or configuration files.', keyPoint: 'Storage strategy should distinguish between ephemeral compute and durable assets.' },
    { term: 'Layer caching', definition: 'Docker’s reuse of unchanged build steps to speed up image creation.', useCase: 'When rebuilding AI services frequently during iteration.', keyPoint: 'Ordering Dockerfile steps well can save substantial build time.' },
    { term: 'Environment variable', definition: 'A runtime configuration value injected into the container process.', useCase: 'When passing API keys, model paths, or deployment settings.', keyPoint: 'Secrets should be managed safely rather than hardcoded into images.' },
    { term: 'Entrypoint', definition: 'The default command or process the container runs when it starts.', useCase: 'When launching inference servers, batch jobs, or worker processes.', keyPoint: 'The entrypoint should be predictable and aligned to one clear responsibility.' },
    { term: 'GPU container', definition: 'A container configured so the application can access GPU hardware for acceleration.', useCase: 'When serving larger models or running training jobs efficiently.', keyPoint: 'GPU support requires compatible drivers, runtime settings, and dependency planning.' },
    { term: 'Container registry', definition: 'A service used to store and distribute versioned container images.', useCase: 'When promoting AI builds across dev, staging, and production.', keyPoint: 'Tagging strategy should support traceability and rollback.' },
    { term: 'Reproducible runtime', definition: 'A deployment environment that behaves consistently across machines and releases.', useCase: 'When reducing “works on my machine” issues in ML engineering.', keyPoint: 'Containers help reproducibility only when the image build is deterministic and versioned.' },
  ],
});

export const cicdForMlData = buildAssessment({
  id: ASSESSMENT_TYPES.cicd_ml,
  title: 'CI/CD for ML Professional Certification',
  shortTitle: 'CI/CD for ML',
  description: 'Automated validation, release pipelines, artifact promotion, and safe delivery practices for ML systems.',
  prefix: 'cicd',
  records: [
    { term: 'Continuous integration', definition: 'An engineering practice of automatically validating code and changes as they are merged.', useCase: 'When checking tests, linting, packaging, or data contract validation for ML repos.', keyPoint: 'Fast feedback helps catch workflow breakage before it reaches production.' },
    { term: 'Continuous delivery', definition: 'A release discipline where software is always kept in a deployable state through automation.', useCase: 'When promoting model services or training pipelines with lower manual risk.', keyPoint: 'Delivery maturity depends on tests and observability, not just automation scripts.' },
    { term: 'Model validation gate', definition: 'An automated checkpoint that blocks release if performance or policy criteria are not met.', useCase: 'When preventing weak models from being deployed accidentally.', keyPoint: 'Gate criteria should reflect business risk, not only one headline metric.' },
    { term: 'Artifact promotion', definition: 'Moving a tested build or model artifact through controlled environments.', useCase: 'When progressing from development to staging to production.', keyPoint: 'Promotion should use the same artifact, not a rebuilt substitute, to preserve trust.' },
    { term: 'Test suite', definition: 'A set of automated checks covering logic, interfaces, and operational assumptions.', useCase: 'When verifying training code, inference endpoints, or feature transformations.', keyPoint: 'ML systems need data and behavior tests in addition to ordinary unit tests.' },
    { term: 'Pipeline trigger', definition: 'An event that starts an automated workflow such as a code push, schedule, or approved release.', useCase: 'When controlling when retraining or deployment automation should run.', keyPoint: 'Trigger design should prevent accidental expensive or unsafe runs.' },
    { term: 'Secrets management', definition: 'A secure way to store and provide credentials needed by CI/CD jobs.', useCase: 'When workflows require cloud access, registries, or model service keys.', keyPoint: 'Credentials should be scoped narrowly and rotated instead of embedded in code.' },
    { term: 'Rollback automation', definition: 'A delivery capability that reverts to a prior known-good version after release failure.', useCase: 'When model or service changes damage accuracy or system health.', keyPoint: 'Rollback speed matters most when customer-facing behavior is at risk.' },
    { term: 'Approval workflow', definition: 'A controlled release step where a human reviews critical evidence before deployment proceeds.', useCase: 'When regulated or high-impact ML changes require governance.', keyPoint: 'Manual approvals are most valuable when paired with good summarized evidence.' },
    { term: 'Release observability', definition: 'Monitoring deployed changes so teams can detect whether a release improved or harmed outcomes.', useCase: 'When validating canaries, fresh deployments, or retraining events.', keyPoint: 'A pipeline is incomplete if it deploys but cannot explain what happened afterward.' },
  ],
});

export const mlMonitoringData = buildAssessment({
  id: ASSESSMENT_TYPES.ml_monitoring,
  title: 'ML Monitoring Professional Certification',
  shortTitle: 'ML Monitoring',
  description: 'Drift, performance decay, alerting, data quality, and production health oversight for machine learning systems.',
  prefix: 'mon',
  records: [
    { term: 'Data drift', definition: 'A shift in the distribution of input data between training and production environments.', useCase: 'When investigating why a stable model starts performing differently over time.', keyPoint: 'Drift detection is most useful when linked to action thresholds and business impact.' },
    { term: 'Concept drift', definition: 'A change in the relationship between inputs and the target outcome over time.', useCase: 'When the world changes and the old model logic is no longer predictive.', keyPoint: 'Concept drift often requires retraining or redesign rather than only data cleanup.' },
    { term: 'Prediction distribution', definition: 'The observed spread and frequency of model outputs in production.', useCase: 'When checking whether score behavior has become abnormal or unstable.', keyPoint: 'Output monitoring can reveal issues even before labels are available.' },
    { term: 'Label delay', definition: 'The time lag between a prediction being made and ground truth arriving for evaluation.', useCase: 'When designing monitoring for churn, fraud, or other delayed outcomes.', keyPoint: 'Monitoring plans should separate immediate proxy signals from delayed accuracy checks.' },
    { term: 'Feature quality alert', definition: 'A notification that feature values are missing, malformed, out of range, or inconsistent.', useCase: 'When protecting inference quality from upstream data failures.', keyPoint: 'Data quality monitoring is often the first line of defense in ML operations.' },
    { term: 'SLA breach', definition: 'A failure to meet agreed service expectations such as latency or availability.', useCase: 'When tracking operational health of prediction services.', keyPoint: 'Model quality is not enough if the service cannot deliver reliably.' },
    { term: 'Calibration', definition: 'The degree to which predicted probabilities align with observed real-world frequencies.', useCase: 'When scores are used for thresholding, ranking, or risk decisions.', keyPoint: 'Well-calibrated probabilities support better downstream decision-making.' },
    { term: 'Alert fatigue', definition: 'A state where teams receive too many noisy alerts to respond effectively.', useCase: 'When tuning thresholds and severity for production ML monitoring.', keyPoint: 'Actionable monitoring favors precision and escalation design over sheer alert volume.' },
    { term: 'Root cause triage', definition: 'A structured process for isolating whether a performance issue comes from data, code, infrastructure, or behavior change.', useCase: 'When production metrics move unexpectedly after a model or pipeline update.', keyPoint: 'Good triage narrows possibilities quickly instead of assuming the model is always at fault.' },
    { term: 'Monitoring dashboard', definition: 'A consolidated view of the most important health, quality, and business metrics for an ML system.', useCase: 'When giving operators and stakeholders shared visibility into production behavior.', keyPoint: 'Dashboards should emphasize decisions and actions rather than metric clutter.' },
  ],
});

export const awsAiServicesData = buildAssessment({
  id: ASSESSMENT_TYPES.aws_ai_services,
  title: 'AWS AI Services Professional Certification',
  shortTitle: 'AWS AI Services',
  description: 'AWS-native AI services, managed ML workflows, model hosting, and cloud integration patterns.',
  prefix: 'awai',
  records: [
    { term: 'Amazon SageMaker', definition: 'AWS’s managed platform for building, training, and deploying machine learning models.', useCase: 'When teams want integrated ML development without stitching every component manually.', keyPoint: 'Managed services help speed delivery but still require sound MLOps design.' },
    { term: 'SageMaker endpoint', definition: 'A managed deployment interface for serving models in real time.', useCase: 'When applications need API-accessible inference on AWS.', keyPoint: 'Endpoint design should match traffic patterns, cost limits, and latency goals.' },
    { term: 'Bedrock', definition: 'An AWS service for accessing foundation models and generative AI capabilities through managed APIs.', useCase: 'When building generative AI apps without directly managing model infrastructure.', keyPoint: 'Managed LLM access still needs governance, evaluation, and prompt discipline.' },
    { term: 'S3 data lake', definition: 'Object storage used to retain training data, artifacts, and evaluation outputs at scale.', useCase: 'When organizing durable AI inputs and outputs on AWS.', keyPoint: 'Storage structure and permissions should support both reproducibility and security.' },
    { term: 'IAM role', definition: 'An AWS identity mechanism that grants scoped permissions to services or workloads.', useCase: 'When training jobs or inference endpoints need controlled access to data and other services.', keyPoint: 'Least-privilege permissions reduce risk in AI infrastructure.' },
    { term: 'Batch transform', definition: 'A SageMaker pattern for running offline inference over large datasets.', useCase: 'When predictions can be scheduled instead of served live.', keyPoint: 'Batch is often operationally simpler for large-volume scoring jobs.' },
    { term: 'Feature store', definition: 'A managed repository for storing, sharing, and serving ML features consistently.', useCase: 'When multiple models or teams rely on common engineered inputs.', keyPoint: 'Feature governance helps reduce train-serve inconsistencies.' },
    { term: 'CloudWatch', definition: 'AWS’s monitoring and logging service for infrastructure and application telemetry.', useCase: 'When tracking endpoint latency, failures, and operational health.', keyPoint: 'Operational metrics should be tied to alerting and runbooks.' },
    { term: 'Auto scaling policy', definition: 'A rule set that expands or contracts serving capacity based on observed demand or utilization.', useCase: 'When real-time AI traffic is variable.', keyPoint: 'Scaling settings should be tested against real bursts, not just average load.' },
    { term: 'Model registry', definition: 'A controlled catalog of model versions, metadata, and promotion status.', useCase: 'When governing which trained models are allowed into production.', keyPoint: 'Model lineage and approval evidence matter in mature AI operations.' },
  ],
});

export const googleVertexAiData = buildAssessment({
  id: ASSESSMENT_TYPES.google_vertex_ai,
  title: 'Google Vertex AI Professional Certification',
  shortTitle: 'Google Vertex AI',
  description: 'Vertex AI training, pipelines, endpoints, evaluation, and managed GenAI and ML workflows on Google Cloud.',
  prefix: 'vtx',
  records: [
    { term: 'Vertex AI Workbench', definition: 'A managed notebook environment for data science and ML development on Google Cloud.', useCase: 'When teams need cloud-based experimentation with integrated services.', keyPoint: 'Notebook convenience should still be paired with reproducible code practices.' },
    { term: 'Vertex training job', definition: 'A managed execution environment for running model training workloads.', useCase: 'When scaling experiments or standardizing training outside local machines.', keyPoint: 'Training jobs should capture config, data version, and output artifacts consistently.' },
    { term: 'Vertex endpoint', definition: 'A managed deployment target for serving machine learning models online.', useCase: 'When production applications need low-latency predictions on GCP.', keyPoint: 'Endpoint configuration should align with availability and cost expectations.' },
    { term: 'Vertex pipeline', definition: 'An orchestrated workflow for data preparation, training, evaluation, and deployment steps.', useCase: 'When teams want repeatable, auditable ML operations.', keyPoint: 'Pipelines reduce manual errors only when each step has clear contracts.' },
    { term: 'Model evaluation', definition: 'The process of measuring a model’s quality against the criteria relevant to the use case.', useCase: 'When deciding whether a new Vertex model run should be promoted.', keyPoint: 'One metric rarely tells the whole story for production readiness.' },
    { term: 'Feature store', definition: 'A centralized system for managing and reusing machine learning features.', useCase: 'When multiple models depend on the same engineered attributes.', keyPoint: 'Shared features need governance, freshness tracking, and consistency guarantees.' },
    { term: 'Prediction skew', definition: 'A discrepancy between offline expectation and online prediction behavior.', useCase: 'When diagnosing why a model that looked good in testing behaves poorly live.', keyPoint: 'Skew investigation should include inputs, preprocessing, environment, and data latency.' },
    { term: 'Generative AI Studio', definition: 'A Google Cloud interface for experimenting with foundation model prompts and settings.', useCase: 'When prototyping LLM workflows before formal application integration.', keyPoint: 'Studio experimentation is most valuable when findings are turned into measurable evaluation plans.' },
    { term: 'Service account', definition: 'A machine identity used by Google Cloud workloads to access other services.', useCase: 'When Vertex jobs or endpoints need scoped permissions.', keyPoint: 'Permission boundaries should be intentional because AI systems often touch sensitive data.' },
    { term: 'Monitoring integration', definition: 'Connecting deployed models to telemetry and alerting for health and quality oversight.', useCase: 'When managing Vertex endpoints in a production environment.', keyPoint: 'Deployment without monitoring leaves teams blind to regressions and incidents.' },
  ],
});

export const regressionMlData = buildAssessment({
  id: ASSESSMENT_TYPES.regression_ml,
  title: 'Regression for ML Professional Certification',
  shortTitle: 'Regression',
  description: 'Linear and regularized regression, residuals, assumptions, feature handling, and business forecasting use cases.',
  prefix: 'reg',
  records: [
    { term: 'Linear regression', definition: 'A model that predicts a continuous target using a linear combination of input features.', useCase: 'When estimating revenue, demand, price, or other numeric outcomes.', keyPoint: 'Interpretability is a strength, but assumptions and residual behavior still matter.' },
    { term: 'Residual', definition: 'The difference between an observed value and the model’s predicted value.', useCase: 'When diagnosing whether the model is systematically wrong in certain regions.', keyPoint: 'Residual analysis often reveals missing features or assumption violations.' },
    { term: 'R-squared', definition: 'A metric describing how much variance in the target is explained by the model.', useCase: 'When summarizing fit quality in a regression context.', keyPoint: 'A strong R-squared does not guarantee that the model is causal or production-ready.' },
    { term: 'MAE', definition: 'Mean absolute error, which averages the absolute size of prediction mistakes.', useCase: 'When the business cares about typical error magnitude in natural units.', keyPoint: 'MAE is often easier to explain to stakeholders than squared-error metrics.' },
    { term: 'RMSE', definition: 'Root mean squared error, which penalizes larger mistakes more strongly than MAE.', useCase: 'When large prediction misses are especially costly.', keyPoint: 'RMSE is sensitive to outliers and should be interpreted with that in mind.' },
    { term: 'Multicollinearity', definition: 'A condition where predictor variables are highly correlated with each other.', useCase: 'When coefficient stability or interpretability becomes problematic.', keyPoint: 'Correlated features may not hurt prediction much but can distort interpretation.' },
    { term: 'Ridge regression', definition: 'A regularized regression method that penalizes large coefficients with an L2 term.', useCase: 'When reducing overfitting while keeping all features in the model.', keyPoint: 'Regularization strength should be tuned rather than guessed.' },
    { term: 'Lasso regression', definition: 'A regularized regression method that can shrink some coefficients to zero with an L1 penalty.', useCase: 'When feature selection and simplicity are valuable.', keyPoint: 'Lasso may help sparsity, but stability should be checked across datasets.' },
    { term: 'Heteroscedasticity', definition: 'A pattern where residual variance changes across the range of predictions.', useCase: 'When checking whether regression errors remain well-behaved.', keyPoint: 'Uneven error variance can weaken trust in naive inference and intervals.' },
    { term: 'Feature scaling', definition: 'Transforming numeric features so their magnitudes are on comparable ranges.', useCase: 'When training regularized models or gradient-based optimization methods.', keyPoint: 'Scaling decisions must be reproduced exactly at inference time.' },
  ],
});

export const classificationMlData = buildAssessment({
  id: ASSESSMENT_TYPES.classification_ml,
  title: 'Classification for ML Professional Certification',
  shortTitle: 'Classification',
  description: 'Binary and multiclass prediction, thresholds, metrics, imbalance handling, and classification model interpretation.',
  prefix: 'cls',
  records: [
    { term: 'Binary classification', definition: 'A modeling task where the outcome has two possible classes.', useCase: 'When predicting churn, fraud, approval, or conversion outcomes.', keyPoint: 'Threshold choice often matters as much as the model score itself.' },
    { term: 'Multiclass classification', definition: 'A classification setup where one example can belong to one of several classes.', useCase: 'When routing tickets, tagging intent, or classifying documents by topic.', keyPoint: 'Evaluation should examine per-class behavior, not only one aggregate score.' },
    { term: 'Confusion matrix', definition: 'A table that compares predicted classes against actual classes.', useCase: 'When diagnosing the kinds of mistakes a classifier is making.', keyPoint: 'Error type matters because false positives and false negatives rarely cost the same.' },
    { term: 'Precision', definition: 'The share of predicted positives that are truly positive.', useCase: 'When false positives are costly and prediction trust matters.', keyPoint: 'Precision should be interpreted together with recall, not in isolation.' },
    { term: 'Recall', definition: 'The share of actual positives that the classifier successfully identifies.', useCase: 'When missing a positive case is especially harmful.', keyPoint: 'Recall improvements may come with more false positives, so tradeoffs matter.' },
    { term: 'F1 score', definition: 'A metric that balances precision and recall using their harmonic mean.', useCase: 'When a single summary metric is needed for imbalanced classification.', keyPoint: 'F1 is useful but still hides threshold and business-cost nuances.' },
    { term: 'Class imbalance', definition: 'A dataset condition where some classes appear far less often than others.', useCase: 'When fraud, defects, or rare events are the targets of interest.', keyPoint: 'Imbalance should influence metrics, sampling, and threshold strategy.' },
    { term: 'Decision threshold', definition: 'The score cutoff used to convert model probabilities into class labels.', useCase: 'When tuning business tradeoffs after model training.', keyPoint: 'Thresholds should be optimized for the operational goal, not left at defaults automatically.' },
    { term: 'ROC-AUC', definition: 'A metric that summarizes how well a classifier separates classes across many thresholds.', useCase: 'When comparing the ranking ability of classification models.', keyPoint: 'AUC is informative, but deployment still requires threshold-specific evaluation.' },
    { term: 'Calibration curve', definition: 'A view of whether predicted probabilities match observed event rates.', useCase: 'When probabilities drive decisions rather than just binary labels.', keyPoint: 'A model can rank well yet still produce poorly calibrated probabilities.' },
  ],
});

export const ensembleModelsData = buildAssessment({
  id: ASSESSMENT_TYPES.ensemble_models,
  title: 'Ensemble Models Professional Certification',
  shortTitle: 'Ensemble Models',
  description: 'Bagging, boosting, random forests, stacking, and practical considerations for ensemble methods.',
  prefix: 'ens',
  records: [
    { term: 'Ensemble method', definition: 'A modeling approach that combines multiple learners to improve predictive performance.', useCase: 'When one model alone is too weak or unstable for the task.', keyPoint: 'Ensembles help most when member models contribute complementary signal.' },
    { term: 'Bagging', definition: 'An ensemble strategy that trains many models on resampled data and aggregates their outputs.', useCase: 'When reducing variance and stabilizing predictions.', keyPoint: 'Bagging works best with models whose predictions vary meaningfully across samples.' },
    { term: 'Random forest', definition: 'A bagged ensemble of decision trees with additional feature randomness at each split.', useCase: 'When seeking strong tabular performance with limited tuning.', keyPoint: 'Random forests are robust, but feature importance should still be interpreted carefully.' },
    { term: 'Boosting', definition: 'An ensemble approach where new models iteratively focus on correcting earlier errors.', useCase: 'When high accuracy on structured data is a priority.', keyPoint: 'Boosting can overfit if complexity and validation are not managed well.' },
    { term: 'XGBoost-style tuning', definition: 'The process of adjusting tree depth, learning rate, and regularization in gradient-boosted models.', useCase: 'When squeezing extra performance from boosting models.', keyPoint: 'Systematic tuning beats random guesswork, especially on sensitive models.' },
    { term: 'Stacking', definition: 'A method that trains a meta-model to combine the outputs of several base models.', useCase: 'When multiple diverse learners provide useful but different signals.', keyPoint: 'Stacking requires careful validation to avoid leakage.' },
    { term: 'Voting classifier', definition: 'An ensemble that chooses the final class from several models using majority or weighted voting.', useCase: 'When combining reasonably strong classifiers with simple operational logic.', keyPoint: 'Weights should reflect measured value, not intuition alone.' },
    { term: 'Out-of-bag estimate', definition: 'A validation signal produced in bagging by evaluating each model on samples it did not train on.', useCase: 'When estimating generalization without a separate validation split in certain workflows.', keyPoint: 'Convenient validation shortcuts still need to be checked against final holdout performance.' },
    { term: 'Feature importance', definition: 'A measure of how influential features appear to be in a trained model’s decisions.', useCase: 'When explaining model behavior or guiding feature review.', keyPoint: 'Importance is not the same as causality and can be misleading in correlated data.' },
    { term: 'Bias reduction', definition: 'The improvement that comes when combined models correct systematic weakness in simpler learners.', useCase: 'When single-model underfitting limits performance.', keyPoint: 'Model complexity should be justified by real gains and maintainability needs.' },
  ],
});

export const promptEngineeringData = buildAssessment({
  id: ASSESSMENT_TYPES.prompt_engineering,
  title: 'Prompt Engineering Professional Certification',
  shortTitle: 'Prompt Engineering',
  description: 'Instruction design, constraints, examples, evaluation, iteration, and reliable prompting patterns for LLM applications.',
  prefix: 'pe',
  records: [
    { term: 'Prompt scope', definition: 'The degree to which a prompt clearly defines the task boundaries and intended outcome.', useCase: 'When reducing ambiguity in model behavior for production use.', keyPoint: 'Narrow, well-scoped prompts usually outperform vague open-ended instructions.' },
    { term: 'Few-shot example', definition: 'A sample input-output pair included in the prompt to guide the model toward the desired pattern.', useCase: 'When output format or reasoning style needs stronger steering.', keyPoint: 'Examples should be representative of the real tasks the system will face.' },
    { term: 'Constraint instruction', definition: 'A prompt rule that limits format, tone, length, or behavior.', useCase: 'When responses must fit UI, policy, or automation requirements.', keyPoint: 'Constraints only help when they are explicit, testable, and not contradictory.' },
    { term: 'Delimiting context', definition: 'Separating instructions, source material, and user content with clear structure.', useCase: 'When reducing confusion between task rules and reference text.', keyPoint: 'Prompt structure is a practical reliability tool, not just formatting style.' },
    { term: 'Prompt iteration', definition: 'Systematically refining prompts based on observed outputs and evaluation evidence.', useCase: 'When improving consistency without immediately changing models.', keyPoint: 'Iteration should be driven by test cases instead of anecdotal success stories.' },
    { term: 'Output schema', definition: 'A specified structure that the model should follow when returning information.', useCase: 'When outputs are consumed by code, dashboards, or downstream APIs.', keyPoint: 'Structured expectations reduce manual cleanup and integration brittleness.' },
    { term: 'Grounding context', definition: 'Supplying trusted source material so the model can answer from provided evidence.', useCase: 'When domain accuracy matters more than generic fluency.', keyPoint: 'Grounding improves reliability only if the supplied context is relevant and high-quality.' },
    { term: 'Prompt injection awareness', definition: 'An understanding that untrusted input may try to override or manipulate system behavior.', useCase: 'When building tools that mix user text with privileged instructions or data.', keyPoint: 'Defense requires architectural controls, not just polite wording in prompts.' },
    { term: 'Evaluation set', definition: 'A collection of representative test cases used to judge prompt quality objectively.', useCase: 'When deciding whether prompt revisions improved performance.', keyPoint: 'Prompt quality should be measured across varied edge cases, not one happy path.' },
    { term: 'Fallback behavior', definition: 'A predefined response strategy when the prompt or context is insufficient for a reliable answer.', useCase: 'When safe abstention is better than confident fabrication.', keyPoint: 'Good prompt design includes how the system should handle uncertainty.' },
  ],
});

export const llmFundamentalsData = buildAssessment({
  id: ASSESSMENT_TYPES.llm_fundamentals,
  title: 'LLM Fundamentals Professional Certification',
  shortTitle: 'LLM Fundamentals',
  description: 'Core concepts behind large language models, tokenization, attention, training stages, and inference behavior.',
  prefix: 'llm',
  records: [
    { term: 'Token', definition: 'A unit of text that the model processes internally during training and inference.', useCase: 'When estimating context length, cost, or truncation risk.', keyPoint: 'Token counts are operationally important because they affect both latency and spend.' },
    { term: 'Attention', definition: 'A mechanism that helps the model weigh the relevance of different tokens to one another.', useCase: 'When understanding how transformers capture relationships in text.', keyPoint: 'Attention is central to sequence modeling but does not by itself guarantee factuality.' },
    { term: 'Pretraining', definition: 'The large-scale learning stage where a model absorbs broad statistical patterns from vast text corpora.', useCase: 'When giving a model general language competence before task-specific adaptation.', keyPoint: 'Pretraining produces broad capability, but domain reliability often needs additional grounding or tuning.' },
    { term: 'Fine-tuning', definition: 'An additional training stage that adapts a pretrained model toward specific behavior or tasks.', useCase: 'When domain needs are not well served by the base model alone.', keyPoint: 'Fine-tuning should be justified by measurable gains and governance needs.' },
    { term: 'Inference', definition: 'The process of generating output from a trained model given a prompt or input.', useCase: 'When running chat, extraction, summarization, or assistant features.', keyPoint: 'Inference quality depends on prompt design, context, and model limitations.' },
    { term: 'Context window', definition: 'The maximum amount of tokenized input the model can consider in one run.', useCase: 'When planning how much conversation or retrieved data to include.', keyPoint: 'Context is a scarce resource that should be used strategically.' },
    { term: 'Temperature', definition: 'A sampling control that influences how deterministic or varied the model’s output tends to be.', useCase: 'When balancing creativity against consistency in generation.', keyPoint: 'Low randomness is often preferable for structured or operational tasks.' },
    { term: 'Hallucination', definition: 'A model output that sounds plausible but is unsupported, incorrect, or fabricated.', useCase: 'When assessing the risk of ungrounded responses in production.', keyPoint: 'Hallucination mitigation requires retrieval, validation, or abstention patterns.' },
    { term: 'Instruction following', definition: 'A model behavior pattern where outputs align with user or system directions.', useCase: 'When building assistants expected to honor format, tone, and boundaries.', keyPoint: 'Instruction following varies by model and should be tested rather than assumed.' },
    { term: 'Alignment', definition: 'The broader goal of shaping model behavior to be helpful, safe, and useful in real settings.', useCase: 'When choosing prompts, model policies, and guardrails for deployment.', keyPoint: 'Alignment is a product and systems problem, not only a modeling problem.' },
  ],
});

export const ragAiData = buildAssessment({
  id: ASSESSMENT_TYPES.rag_ai,
  title: 'RAG Professional Certification',
  shortTitle: 'RAG',
  description: 'Retrieval-augmented generation architecture, chunking, recall, grounding, and answer quality control.',
  prefix: 'rag',
  records: [
    { term: 'Retrieval-augmented generation', definition: 'An architecture that supplements a language model with retrieved external knowledge before answering.', useCase: 'When answers need to reflect current or domain-specific source material.', keyPoint: 'RAG quality depends on retrieval, prompt design, and evidence discipline together.' },
    { term: 'Chunk strategy', definition: 'The method used to split documents into retrieval units.', useCase: 'When balancing semantic completeness against fine-grained relevance.', keyPoint: 'Chunking decisions strongly influence whether the right context can be found.' },
    { term: 'Top-k retrieval', definition: 'Selecting the top k most relevant chunks or documents for the query.', useCase: 'When controlling how much retrieved evidence is passed to the model.', keyPoint: 'Too few results can miss evidence, while too many can flood the context window.' },
    { term: 'Reranking', definition: 'A second-stage relevance step that reorders retrieved candidates using a stronger signal.', useCase: 'When basic vector search does not consistently surface the best context first.', keyPoint: 'Reranking can improve precision but adds complexity and latency.' },
    { term: 'Grounded answer', definition: 'A response that stays anchored to retrieved evidence rather than unsupported generalization.', useCase: 'When trust and verifiability matter in QA systems.', keyPoint: 'Applications should prefer evidence-backed answers over fluent speculation.' },
    { term: 'Retriever recall', definition: 'How often the retrieval layer successfully finds the information needed to answer a query.', useCase: 'When diagnosing whether failures start before generation.', keyPoint: 'Weak recall means the model never had the right evidence to begin with.' },
    { term: 'Answer citation', definition: 'A reference to the specific source passage or document supporting a response.', useCase: 'When users need to verify or audit the system’s claims.', keyPoint: 'Citations should be accurate enough to inspect quickly, not just look impressive.' },
    { term: 'Context packing', definition: 'The process of deciding which retrieved passages fit into the available context window.', useCase: 'When multiple relevant chunks compete for inclusion.', keyPoint: 'Packing should favor relevance, diversity, and non-duplication.' },
    { term: 'Query rewriting', definition: 'Transforming a user query into a form that improves retrieval quality.', useCase: 'When natural user wording is too vague or incomplete for the retriever.', keyPoint: 'Rewrite logic should improve retrieval without distorting intent.' },
    { term: 'RAG evaluation', definition: 'Measuring retrieval quality, groundedness, and final answer usefulness in a repeatable way.', useCase: 'When improving a retrieval system beyond anecdotal prompting changes.', keyPoint: 'RAG needs multi-layer evaluation because not every failure comes from the same component.' },
  ],
});

export const aiAgentsData = buildAssessment({
  id: ASSESSMENT_TYPES.ai_agents,
  title: 'AI Agents Professional Certification',
  shortTitle: 'AI Agents',
  description: 'Planning, tool use, memory, loop control, guardrails, and operational patterns for agentic systems.',
  prefix: 'agt',
  records: [
    { term: 'Agent', definition: 'An AI system that can reason about a task, invoke tools, and iterate toward a goal.', useCase: 'When a workflow requires more than one direct model response.', keyPoint: 'Agents need explicit boundaries because autonomy without control creates risk.' },
    { term: 'Planning step', definition: 'An intermediate stage where the system decides what actions or subgoals to pursue.', useCase: 'When tasks require sequencing rather than one-shot completion.', keyPoint: 'Plans help only when they are cheap, grounded, and tied to execution reality.' },
    { term: 'Tool invocation', definition: 'A structured request from the agent to an external capability such as search or code execution.', useCase: 'When the task depends on information or actions outside the model’s weights.', keyPoint: 'Tool use should be validated and logged because it affects real systems.' },
    { term: 'Observation', definition: 'The result returned to the agent after a tool call or external action.', useCase: 'When deciding the next step in a multi-action loop.', keyPoint: 'Reliable agents depend on good observations, not just good prompts.' },
    { term: 'Loop limit', definition: 'A cap on how many reasoning or action cycles an agent can take.', useCase: 'When preventing runaway cost or unstable behavior.', keyPoint: 'Bounded iteration is a practical safety control in agent design.' },
    { term: 'State management', definition: 'Tracking the information an agent needs to continue a task coherently over time.', useCase: 'When actions span multiple tool calls or user turns.', keyPoint: 'State should be intentional, relevant, and not overloaded with noise.' },
    { term: 'Delegation pattern', definition: 'A design where one coordinating agent routes work to narrower specialist components or tools.', useCase: 'When complex workflows benefit from separation of responsibilities.', keyPoint: 'Division of labor improves reliability only if interfaces stay clear.' },
    { term: 'Guardrail', definition: 'A rule or control that limits what an agent is allowed to do or how it behaves.', useCase: 'When tools can affect money, data, or user trust.', keyPoint: 'Guardrails belong in application logic, not just in natural-language instructions.' },
    { term: 'Human-in-the-loop', definition: 'A workflow step where a person reviews, approves, or corrects the agent before critical action.', useCase: 'When autonomy risk is too high for unsupervised execution.', keyPoint: 'Human review is most effective when the system surfaces the right evidence succinctly.' },
    { term: 'Agent evaluation', definition: 'A repeatable way to measure task completion quality, safety, and efficiency for agentic workflows.', useCase: 'When comparing prompt strategies, tool sets, or loop policies.', keyPoint: 'Agent systems should be judged on outcomes and reliability, not just impressive demos.' },
  ],
});

export const vectorDatabaseOpsData = buildAssessment({
  id: ASSESSMENT_TYPES.vector_database_ops,
  title: 'Vector Database Operations Professional Certification',
  shortTitle: 'Vector Database',
  description: 'Operational design for vector stores including ingestion, governance, scaling, and retrieval maintenance.',
  prefix: 'vops',
  records: [
    { term: 'Collection design', definition: 'The way vector records are organized into logical stores or partitions.', useCase: 'When planning tenant separation, product domains, or environment isolation.', keyPoint: 'Good collection boundaries simplify governance and performance tuning.' },
    { term: 'Embedding refresh', definition: 'Updating stored vectors when source content or embedding models change.', useCase: 'When keeping retrieval aligned with the latest knowledge or representation strategy.', keyPoint: 'Refresh workflows should preserve consistency between content, metadata, and vectors.' },
    { term: 'Schema metadata', definition: 'The structured fields stored alongside vectors to support filtering and governance.', useCase: 'When adding source, owner, access, or freshness signals to retrieval.', keyPoint: 'Metadata planning often drives retrieval usefulness in real enterprise systems.' },
    { term: 'Deletion strategy', definition: 'A process for removing or tombstoning obsolete vector records safely.', useCase: 'When content expires, permissions change, or records must be forgotten.', keyPoint: 'Deletion should be traceable because stale vectors can create compliance and relevance issues.' },
    { term: 'Index tuning', definition: 'Adjusting search configuration to balance speed, memory, and recall.', useCase: 'When retrieval latency or quality is not meeting expectations.', keyPoint: 'Operational tuning should be measured on real queries rather than benchmark assumptions alone.' },
    { term: 'Access control', definition: 'Mechanisms that restrict who can query or manage vector data.', useCase: 'When the store contains tenant-specific or sensitive information.', keyPoint: 'Security boundaries matter because semantic search can expose unexpected knowledge paths.' },
    { term: 'Freshness policy', definition: 'A rule set defining how quickly the vector store should reflect new or updated source data.', useCase: 'When retrieval quality depends on timely content updates.', keyPoint: 'Freshness requirements should match business expectations for recency.' },
    { term: 'Capacity planning', definition: 'Estimating storage, compute, and query demand for the vector infrastructure.', useCase: 'When scaling search workloads or onboarding more corpora.', keyPoint: 'Capacity assumptions should include embedding dimensionality and traffic patterns.' },
    { term: 'Operational backup', definition: 'A recovery approach for restoring vector data and related metadata after failure.', useCase: 'When the retrieval layer is critical to product continuity.', keyPoint: 'Backup plans should cover the full retrieval state, not just raw source files.' },
    { term: 'Query auditability', definition: 'The ability to inspect what was retrieved, filtered, and returned for a given search request.', useCase: 'When debugging retrieval mistakes or proving responsible system behavior.', keyPoint: 'Auditability helps teams improve search quality and satisfy governance demands.' },
  ],
});

export const llmDeploymentData = buildAssessment({
  id: ASSESSMENT_TYPES.llm_deployment,
  title: 'LLM Deployment Professional Certification',
  shortTitle: 'LLM Deployment',
  description: 'Serving, caching, routing, observability, safety, and cost control patterns for production LLM applications.',
  prefix: 'lld',
  records: [
    { term: 'Prompt service layer', definition: 'An application layer that standardizes how prompts, parameters, and policies are sent to an LLM.', useCase: 'When multiple product features need a shared model integration contract.', keyPoint: 'Centralized prompt services improve consistency and release control.' },
    { term: 'Caching strategy', definition: 'A method for reusing prior LLM responses or intermediate results when the same request repeats.', useCase: 'When reducing cost and latency for predictable workloads.', keyPoint: 'Caching should respect freshness, privacy, and response validity constraints.' },
    { term: 'Model routing', definition: 'Choosing which model or endpoint should handle a request based on task, cost, or latency needs.', useCase: 'When one deployment must support multiple use cases with different requirements.', keyPoint: 'Routing policies should be measurable and easy to reason about operationally.' },
    { term: 'Fallback model', definition: 'A secondary model or pathway used when the primary deployment is unavailable or unsuitable.', useCase: 'When availability or budget protections matter in production.', keyPoint: 'Fallback design should preserve acceptable quality, not just keep the lights on.' },
    { term: 'Latency budgeting', definition: 'Planning acceptable time spent across retrieval, prompting, generation, and postprocessing.', useCase: 'When shipping responsive LLM features to end users.', keyPoint: 'Latency should be managed as an end-to-end system property.' },
    { term: 'Cost attribution', definition: 'Tracking which product, team, or workflow consumed model usage and spend.', useCase: 'When controlling economics of LLM deployments at scale.', keyPoint: 'Good cost visibility enables smarter prompt, model, and routing decisions.' },
    { term: 'Safety policy enforcement', definition: 'Applying application-level rules that govern what the LLM may return or act upon.', useCase: 'When deploying customer-facing or business-critical assistants.', keyPoint: 'Safety should be enforceable in code, not left purely to model discretion.' },
    { term: 'Session memory policy', definition: 'Rules for what conversation history is stored and reused across turns.', useCase: 'When balancing personalization against privacy and context quality.', keyPoint: 'Memory retention should be intentional, useful, and compliant.' },
    { term: 'Output validation', definition: 'Checking the model’s response for schema correctness, policy compliance, or factual support before use.', useCase: 'When LLM output drives downstream automation or visible user actions.', keyPoint: 'Validation is a key reliability layer in production AI systems.' },
    { term: 'Release evaluation', definition: 'A pre- and post-deployment review process for deciding whether an LLM change is acceptable.', useCase: 'When prompts, models, or retrieval layers are updated in production.', keyPoint: 'LLM releases should be evidence-driven because qualitative changes can have hidden costs.' },
  ],
});
