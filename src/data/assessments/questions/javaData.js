import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const javaData = {
  id: ASSESSMENT_TYPES.java,
  title: "Java Backend Engineering Professional Certification",
  shortTitle: "Java",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional Java assessment covering OOP, JVM, memory, collections, generics, exceptions, streams, concurrency, performance, backend reliability, and production debugging.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical Java backend engineering judgment.",
  questions: [
{ id: 'jv-01', type: 'mcq', title: 'JVM Architecture', prompt: 'Which part of the JVM is responsible for converting bytecode to machine code at runtime?', options: ['ClassLoader', 'JIT Compiler', 'Garbage Collector', 'Interpreter'], correctIndex: 1, explanation: 'The Just-In-Time (JIT) compiler optimizes performance.' },
        { id: 'jv-02', type: 'mcq', title: 'OOP Principles', prompt: 'What is "Encapsulation"?', options: ['Inheriting from a parent', 'Hiding internal state and requiring all interaction through methods', 'Writing code once', 'Using interfaces'], correctIndex: 1, explanation: 'It protects the integrity of the object\'s data.' },
        { id: 'jv-03', type: 'mcq', title: 'Collections', prompt: 'Which Collection type does not allow duplicate elements?', options: ['ArrayList', 'LinkedList', 'HashSet', 'Vector'], correctIndex: 2, explanation: 'Sets are mathematical collections that enforce uniqueness.' },
        { id: 'jv-04', type: 'mcq', title: 'Keywords', prompt: 'What does the "static" keyword mean?', options: ['The variable is constant', 'The member belongs to the class, not an instance', 'The code is private', 'The memory is cleared'], correctIndex: 1, explanation: 'Static members can be accessed without creating an object.' },
        { id: 'jv-05', type: 'mcq', title: 'Interfaces', prompt: 'Can a Java class implement multiple interfaces?', options: ['No', 'Yes', 'Only if they are empty', 'Only in Java 8+'], correctIndex: 1, explanation: 'Java supports multiple inheritance through interfaces.' },
        { id: 'jv-06', type: 'mcq', title: 'Inheritance', prompt: 'Which keyword is used to inherit from a class?', options: ['implements', 'extends', 'inherits', 'uses'], correctIndex: 1, explanation: 'extends creates a subclass relationship.' },
        { id: 'jv-07', type: 'mcq', title: 'Strings', prompt: 'Why is String immutable in Java?', options: ['Performance', 'Security and String Pool efficiency', 'JVM limitation', 'It isn\'t'], correctIndex: 1, explanation: 'Immutability allows sharing in the String Pool and thread safety.' },
        { id: 'jv-08', type: 'mcq', title: 'Exceptions', prompt: 'What is the difference between a Checked and Unchecked exception?', options: ['No difference', 'Checked must be handled/declared at compile time', 'Unchecked are more serious', 'Checked are for hardware errors'], correctIndex: 1, explanation: 'Checked exceptions ensure developers handle common recoverable errors.' },
        { id: 'jv-09', type: 'mcq', title: 'Memory', prompt: 'Where are objects stored in Java memory?', options: ['Stack', 'Heap', 'Method Area', 'PC Register'], correctIndex: 1, explanation: 'The Heap is the shared memory for all objects; variables are on the Stack.' },
        { id: 'jv-10', type: 'mcq', title: 'Garbage Collection', prompt: 'Which method can you call to "suggest" garbage collection?', options: ['System.gc()', 'gc.collect()', 'Object.clear()', 'Memory.flush()'], correctIndex: 0, explanation: 'System.gc() is a hint, not a guarantee.' },
        { id: 'jv-11', type: 'mcq', title: 'Final Keyword', prompt: 'What happens if a class is declared "final"?', options: ['It cannot be instantiated', 'It cannot be inherited', 'It cannot have methods', 'It is private'], correctIndex: 1, explanation: 'Final classes prevent subclassing.' },
        { id: 'jv-12', type: 'mcq', title: 'Generics', prompt: 'What is the purpose of Generics?', options: ['To make code slower', 'Type safety and elimination of casting', 'To hide code', 'To use Python libraries'], correctIndex: 1, explanation: 'Generics allow classes and methods to operate on types specified by the user.' },
        { id: 'jv-13', type: 'mcq', title: 'Threads', prompt: 'Which method starts the execution of a new thread?', options: ['run()', 'start()', 'execute()', 'init()'], correctIndex: 1, explanation: 'start() initializes the thread; run() just executes the code in the current thread.' },
        { id: 'jv-14', type: 'mcq', title: 'Spring Framework', prompt: 'What is "Dependency Injection"?', options: ['Manually creating objects', 'The framework providing object dependencies at runtime', 'A security flaw', 'A type of database join'], correctIndex: 1, explanation: 'DI promotes loose coupling and testability.' },
        { id: 'jv-15', type: 'mcq', title: 'Data Structures', prompt: 'Which map implementation maintains insertion order?', options: ['HashMap', 'TreeMap', 'LinkedHashMap', 'Hashtable'], correctIndex: 2, explanation: 'LinkedHashMap uses a doubly-linked list to track order.' },
        { id: 'jv-16', type: 'mcq', title: 'Reflection', prompt: 'What is Reflection in Java?', options: ['A mirror', 'The ability to inspect or modify classes/methods at runtime', 'A design pattern', 'Code review'], correctIndex: 1, explanation: 'Reflection is powerful but can be slow and break encapsulation.' },
        { id: 'jv-17', type: 'mcq', title: 'Java 8', prompt: 'Which feature was introduced in Java 8 for functional-style programming?', options: ['Generics', 'Lambda Expressions', 'Annotations', 'Enums'], correctIndex: 1, explanation: 'Lambdas and the Stream API were major additions in Java 8.' },
        { id: 'jv-18', type: 'mcq', title: 'Abstract Class vs Interface', prompt: 'What is a key difference between an Abstract Class and an Interface?', options: ['No difference', 'Abstract classes can have state (fields); Interfaces (pre-Java 8) could not', 'Interfaces are slower', 'Abstract classes are private'], correctIndex: 1, explanation: 'Abstract classes are for "is-a" relationships; Interfaces are for "can-do" capabilities.' },
        { id: 'jv-19', type: 'mcq', title: 'Wrapper Classes', prompt: 'What is "Autoboxing"?', options: ['Packaging code', 'Automatic conversion between primitive types and their wrapper objects (e.g., int to Integer)', 'Writing tests', 'Memory clearing'], correctIndex: 1, explanation: 'Java handles the conversion automatically for developer convenience.' },
        { id: 'jv-20', type: 'mcq', title: 'Build Tools', prompt: 'Which of these is a popular Java build and dependency management tool?', options: ['npm', 'pip', 'Maven', 'Composer'], correctIndex: 2, explanation: 'Maven and Gradle are the industry standard for Java projects.' },
    {
          "id": "jv-21",
          "type": "mcq",
          "title": "Generics",
          "prompt": "What is the main benefit of Java generics?",
          "options": [
                "Type safety at compile time and reduced casting",
                "Faster internet",
                "Automatic database creation",
                "Replacing all interfaces"
          ],
          "correctIndex": 0,
          "explanation": "Generics let collections and APIs express expected types safely."
    },
    {
          "id": "jv-22",
          "type": "mcq",
          "title": "HashMap",
          "prompt": "What is required for objects used as HashMap keys to behave correctly?",
          "options": [
                "Consistent equals() and hashCode() implementations",
                "Only a public constructor",
                "A toString() method only",
                "A main method"
          ],
          "correctIndex": 0,
          "explanation": "Hash-based collections rely on equals and hashCode contracts."
    },
    {
          "id": "jv-23",
          "type": "mcq",
          "title": "Comparable vs Comparator",
          "prompt": "When should Comparator be used?",
          "options": [
                "When defining external or multiple sorting strategies",
                "Only when no class exists",
                "Only for arrays",
                "Never"
          ],
          "correctIndex": 0,
          "explanation": "Comparator separates sorting logic from the class and allows multiple orderings."
    },
    {
          "id": "jv-24",
          "type": "mcq",
          "title": "Immutability",
          "prompt": "Which practice supports immutable class design?",
          "options": [
                "Use final fields, no setters, defensive copies, and controlled construction",
                "Expose mutable internals",
                "Use public fields",
                "Share arrays directly"
          ],
          "correctIndex": 0,
          "explanation": "Immutability reduces side effects and improves thread safety."
    },
    {
          "id": "jv-25",
          "type": "mcq",
          "title": "StringBuilder",
          "prompt": "When is StringBuilder usually preferred over repeated string concatenation in loops?",
          "options": [
                "When building strings repeatedly in mutable form",
                "Only for database access",
                "Only for exceptions",
                "Never"
          ],
          "correctIndex": 0,
          "explanation": "StringBuilder avoids creating many intermediate String objects."
    },
    {
          "id": "jv-26",
          "type": "mcq",
          "title": "try-with-resources",
          "prompt": "What problem does try-with-resources solve?",
          "options": [
                "It closes AutoCloseable resources reliably",
                "It creates threads",
                "It disables exceptions",
                "It replaces collections"
          ],
          "correctIndex": 0,
          "explanation": "try-with-resources helps avoid resource leaks for files, streams, sockets, and similar resources."
    },
    {
          "id": "jv-27",
          "type": "mcq",
          "title": "Optional",
          "prompt": "What is a good use of Optional?",
          "options": [
                "Representing a value that may be absent as a return type",
                "Replacing every field in every entity",
                "Avoiding all validation",
                "Storing null directly"
          ],
          "correctIndex": 0,
          "explanation": "Optional can make absence explicit for API consumers."
    },
    {
          "id": "jv-28",
          "type": "mcq",
          "title": "Streams",
          "prompt": "What is a Java Stream best used for?",
          "options": [
                "Declarative processing of collections or data pipelines",
                "Direct memory allocation only",
                "Replacing all loops in every case",
                "Managing JVM startup"
          ],
          "correctIndex": 0,
          "explanation": "Streams provide map/filter/reduce-style operations over data."
    },
    {
          "id": "jv-29",
          "type": "mcq",
          "title": "Parallel Streams",
          "prompt": "When should parallel streams be used carefully?",
          "options": [
                "When operations are stateful, blocking, small, or order-sensitive",
                "Only when data is large and independent",
                "Never for any data",
                "Only for printing text"
          ],
          "correctIndex": 0,
          "explanation": "Parallelism has overhead and can cause issues with shared state or blocking work."
    },
    {
          "id": "jv-30",
          "type": "mcq",
          "title": "Thread Safety",
          "prompt": "Which collection is not inherently thread-safe for concurrent writes?",
          "options": [
                "ArrayList",
                "ConcurrentHashMap",
                "CopyOnWriteArrayList",
                "BlockingQueue"
          ],
          "correctIndex": 0,
          "explanation": "ArrayList needs external synchronization or a concurrent alternative for concurrent mutation."
    },
    {
          "id": "jv-31",
          "type": "mcq",
          "title": "Volatile",
          "prompt": "What does volatile primarily guarantee?",
          "options": [
                "Visibility of changes across threads",
                "Atomicity of compound operations",
                "Faster CPU execution",
                "Object immutability"
          ],
          "correctIndex": 0,
          "explanation": "volatile helps with visibility but does not make operations like increment atomic."
    },
    {
          "id": "jv-32",
          "type": "mcq",
          "title": "Synchronization",
          "prompt": "Why use synchronized?",
          "options": [
                "To control concurrent access to shared mutable state",
                "To make code compile faster",
                "To encrypt data",
                "To define inheritance"
          ],
          "correctIndex": 0,
          "explanation": "synchronized provides mutual exclusion and visibility guarantees."
    },
    {
          "id": "jv-33",
          "type": "mcq",
          "title": "ExecutorService",
          "prompt": "What is the benefit of ExecutorService?",
          "options": [
                "Managing thread pools and asynchronous task execution",
                "Replacing the JVM",
                "Creating SQL tables",
                "Compiling bytecode manually"
          ],
          "correctIndex": 0,
          "explanation": "ExecutorService abstracts thread management and task scheduling."
    },
    {
          "id": "jv-34",
          "type": "mcq",
          "title": "CompletableFuture",
          "prompt": "What is CompletableFuture used for?",
          "options": [
                "Composing asynchronous computations",
                "Changing class inheritance",
                "Formatting strings only",
                "Disabling exceptions"
          ],
          "correctIndex": 0,
          "explanation": "CompletableFuture supports async pipelines and composition."
    },
    {
          "id": "jv-35",
          "type": "mcq",
          "title": "GC Pressure",
          "prompt": "What can increase garbage collection pressure?",
          "options": [
                "Creating many short-lived objects in hot paths",
                "Using final variables",
                "Reading constants",
                "Using interfaces"
          ],
          "correctIndex": 0,
          "explanation": "High allocation rates can increase GC frequency and latency."
    },
    {
          "id": "jv-36",
          "type": "mcq",
          "title": "JVM Tuning",
          "prompt": "What should guide JVM tuning decisions?",
          "options": [
                "Metrics such as heap usage, GC logs, latency, throughput, and allocation patterns",
                "Random memory settings",
                "Only developer preference",
                "Class names"
          ],
          "correctIndex": 0,
          "explanation": "JVM tuning should be evidence-based."
    },
    {
          "id": "jv-37",
          "type": "mcq",
          "title": "Checked Exceptions",
          "prompt": "When are checked exceptions most appropriate?",
          "options": [
                "Recoverable conditions callers are expected to handle",
                "Programming bugs only",
                "Null pointer errors only",
                "All runtime failures"
          ],
          "correctIndex": 0,
          "explanation": "Checked exceptions force callers to acknowledge recoverable error paths."
    },
    {
          "id": "jv-38",
          "type": "mcq",
          "title": "SOLID",
          "prompt": "What does the Single Responsibility Principle mean?",
          "options": [
                "A class should have one primary reason to change",
                "A class can only have one method",
                "A project can only have one class",
                "A developer can only own one file"
          ],
          "correctIndex": 0,
          "explanation": "SRP improves maintainability by keeping responsibilities focused."
    },
    {
          "id": "jv-39",
          "type": "mcq",
          "title": "Backend Reliability",
          "prompt": "What matters most for a Java financial API?",
          "options": [
                "Validation, transactions, idempotency, authorization, and clear error handling",
                "Only using the newest syntax",
                "Skipping logs for speed",
                "Returning 200 for every error"
          ],
          "correctIndex": 0,
          "explanation": "Financial APIs need correctness, security, and reliable failure handling."
    },
    {
          "id": "jv-40",
          "type": "mcq",
          "title": "Production Debugging",
          "prompt": "A Java service has rising latency and frequent GC pauses. What should be inspected?",
          "options": [
                "Heap usage, allocation rate, GC logs, thread dumps, and recent code changes",
                "Only CSS files",
                "Only API names",
                "Nothing if CPU is low"
          ],
          "correctIndex": 0,
          "explanation": "Latency issues often require JVM, application, and dependency-level evidence."
    }
  ]
};
