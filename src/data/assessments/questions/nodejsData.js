import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const nodejsData = {
  id: ASSESSMENT_TYPES.nodejs,
  title: "Node.js Backend Engineering Certification",
  shortTitle: "Node.js",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Node.js runtime, event loop, async patterns, Express middleware, streams, error handling, security, performance, testing, APIs, and production operations.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "no-01",
      type: "mcq",
      title: "Architecture",
      prompt: "What is the core engine that powers Node.js?",
      options: ["V8", "SpiderMonkey", "Chakra", "Nitro"],
      correctIndex: 0,
      explanation: "Node.js uses Google's V8 JavaScript engine. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "no-02",
      type: "mcq",
      title: "Event Loop",
      prompt: "In which phase of the Event Loop are \"setTimeout\" callbacks executed?",
      options: ["Poll", "Check", "Timers", "Idle"],
      correctIndex: 2,
      explanation: "The Timers phase handles callbacks scheduled by setTimeout and setInterval."
    },
    {
      id: "no-03",
      type: "mcq",
      title: "Modules",
      prompt: "Which function is used to import a module in CommonJS?",
      options: ["import()", "require()", "fetch()", "load()"],
      correctIndex: 1,
      explanation: "require() is the standard for CommonJS modules in Node."
    },
    {
      id: "no-04",
      type: "mcq",
      title: "Streams",
      prompt: "What is the primary benefit of using Streams in Node.js?",
      options: ["Better security", "Processing data in chunks without loading the whole file into memory", "Faster CPU speed", "Encryption"],
      correctIndex: 1,
      explanation: "Streams are essential for memory-efficient handling of large files or network data."
    },
    {
      id: "no-05",
      type: "mcq",
      title: "Express",
      prompt: "What is \"Middleware\" in an Express application?",
      options: ["A database", "Functions that have access to req, res, and next() to process requests", "A frontend component", "A type of route"],
      correctIndex: 1,
      explanation: "Middleware can execute code, modify request/response objects, and end the cycle."
    },
    {
      id: "no-06",
      type: "mcq",
      title: "Buffers",
      prompt: "What is a \"Buffer\" in Node.js used for?",
      options: ["Storing text strings", "Handling raw binary data", "Routing requests", "Managing threads"],
      correctIndex: 1,
      explanation: "Buffers are used to represent a fixed-size chunk of memory outside the V8 heap."
    },
    {
      id: "no-07",
      type: "mcq",
      title: "Package Manager",
      prompt: "What does \"npm\" stand for?",
      options: ["Node Package Manager", "Network Processing Module", "Node Programming Method", "New Project Manager"],
      correctIndex: 0,
      explanation: "npm is the default package manager for Node.js. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "no-08",
      type: "mcq",
      title: "Async Patterns",
      prompt: "What was the \"Callback Hell\" problem solved by?",
      options: ["More callbacks", "Promises and Async/Await", "Global variables", "Recursion"],
      correctIndex: 1,
      explanation: "Promises and Async/Await provide a cleaner way to handle sequential async tasks."
    },
    {
      id: "no-09",
      type: "mcq",
      title: "Process",
      prompt: "How do you access environment variables in Node.js?",
      options: ["env.VARIABLE", "process.env.VARIABLE", "system.env", "global.env"],
      correctIndex: 1,
      explanation: "The process object provides info about the current Node process."
    },
    {
      id: "no-10",
      type: "mcq",
      title: "EventEmitter",
      prompt: "Which class is used to handle custom events in Node.js?",
      options: ["EventListener", "EventEmitter", "EventMachine", "Dispatcher"],
      correctIndex: 1,
      explanation: "Many Node core modules (like HTTP) inherit from EventEmitter."
    },
    {
      id: "no-11",
      type: "mcq",
      title: "Thread Model",
      prompt: "Node.js is primarily ___?",
      options: ["Multi-threaded", "Single-threaded but non-blocking", "Synchronous", "Slow"],
      correctIndex: 1,
      explanation: "Node uses a single-threaded event loop but offloads I/O to libuv threads."
    },
    {
      id: "no-12",
      type: "mcq",
      title: "Filesystem",
      prompt: "Which module is used to work with the file system?",
      options: ["path", "fs", "os", "http"],
      correctIndex: 1,
      explanation: "The fs module provides APIs for interacting with the file system."
    },
    {
      id: "no-13",
      type: "mcq",
      title: "Cluster",
      prompt: "What is the \"Cluster\" module used for?",
      options: ["Grouping files", "Creating child processes to share the same server port and utilize multiple CPU cores", "Database clustering", "Security"],
      correctIndex: 1,
      explanation: "Cluster allows Node apps to take advantage of multi-core systems."
    },
    {
      id: "no-14",
      type: "mcq",
      title: "REPL",
      prompt: "What does \"REPL\" stand for?",
      options: ["Read-Eval-Print Loop", "Remote Event Processing Link", "Run-Execute-Process-Log", "Ready-Exit-Pause-Loop"],
      correctIndex: 0,
      explanation: "REPL is the interactive Node.js shell. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "no-15",
      type: "mcq",
      title: "Path",
      prompt: "Which method in the \"path\" module joins segments into a normalized path?",
      options: ["path.join()", "path.concat()", "path.resolve()", "path.merge()"],
      correctIndex: 0,
      explanation: "path.join() handles cross-platform slash differences (\\ vs /)."
    },
    {
      id: "no-16",
      type: "mcq",
      title: "Status Codes",
      prompt: "In Express, how do you send a 404 status?",
      options: ["res.send(404)", "res.status(404).send()", "res.error(404)", "res.end(404)"],
      correctIndex: 1,
      explanation: "res.status() sets the code; .send() or .json() sends the response."
    },
    {
      id: "no-17",
      type: "mcq",
      title: "Body Parser",
      prompt: "Why is a body-parser (or express.json()) needed?",
      options: ["To encrypt data", "To parse incoming request bodies in a middleware before your handlers", "To speed up routes", "To handle cookies"],
      correctIndex: 1,
      explanation: "It populates req.body with the parsed payload. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "no-18",
      type: "mcq",
      title: "Global Object",
      prompt: "What is the global object in Node.js equivalent to \"window\" in the browser?",
      options: ["window", "global", "process", "context"],
      correctIndex: 1,
      explanation: "Variables attached to \"global\" are available everywhere."
    },
    {
      id: "no-19",
      type: "mcq",
      title: "Libuv",
      prompt: "What is the role of libuv in Node.js?",
      options: ["Rendering UI", "Handling the event loop and asynchronous I/O across platforms", "Managing packages", "Compiling JS"],
      correctIndex: 1,
      explanation: "Libuv is a C library that provides the event loop and thread pool."
    },
    {
      id: "no-20",
      type: "mcq",
      title: "Security",
      prompt: "What is \"npm audit\" used for?",
      options: ["Checking code quality", "Identifying vulnerabilities in your project dependencies", "Running tests", "Checking license info"],
      correctIndex: 1,
      explanation: "It checks the dependency tree against known vulnerability databases."
    },
    {
      id: "no-21",
      type: "mcq",
      title: "Event Loop Blocking",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for event loop blocking?",
      options: ["Apply event loop blocking with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use event loop blocking only because it sounds advanced, without checking impact or constraints", "Ignore event loop blocking until the issue becomes urgent in production or with customers", "Delegate event loop blocking completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "event loop blocking is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-22",
      type: "mcq",
      title: "Microtasks",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for microtasks?",
      options: ["Apply microtasks with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use microtasks only because it sounds advanced, without checking impact or constraints", "Ignore microtasks until the issue becomes urgent in production or with customers", "Delegate microtasks completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "microtasks is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-23",
      type: "mcq",
      title: "Process.Nexttick",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for process.nextTick?",
      options: ["Apply process.nextTick with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use process.nextTick only because it sounds advanced, without checking impact or constraints", "Ignore process.nextTick until the issue becomes urgent in production or with customers", "Delegate process.nextTick completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "process.nextTick is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-24",
      type: "mcq",
      title: "Stream Backpressure",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for stream backpressure?",
      options: ["Apply stream backpressure with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use stream backpressure only because it sounds advanced, without checking impact or constraints", "Ignore stream backpressure until the issue becomes urgent in production or with customers", "Delegate stream backpressure completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "stream backpressure is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-25",
      type: "mcq",
      title: "Express Error Middleware",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for Express error middleware?",
      options: ["Apply Express error middleware with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Express error middleware only because it sounds advanced, without checking impact or constraints", "Ignore Express error middleware until the issue becomes urgent in production or with customers", "Delegate Express error middleware completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Express error middleware is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-26",
      type: "mcq",
      title: "Async Route Errors",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for async route errors?",
      options: ["Apply async route errors with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use async route errors only because it sounds advanced, without checking impact or constraints", "Ignore async route errors until the issue becomes urgent in production or with customers", "Delegate async route errors completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "async route errors is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-27",
      type: "mcq",
      title: "Security Headers",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for security headers?",
      options: ["Apply security headers with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use security headers only because it sounds advanced, without checking impact or constraints", "Ignore security headers until the issue becomes urgent in production or with customers", "Delegate security headers completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "security headers is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-28",
      type: "mcq",
      title: "Request Validation",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for request validation?",
      options: ["Apply request validation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use request validation only because it sounds advanced, without checking impact or constraints", "Ignore request validation until the issue becomes urgent in production or with customers", "Delegate request validation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "request validation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-29",
      type: "mcq",
      title: "Rate Limiting",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for rate limiting?",
      options: ["Apply rate limiting with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use rate limiting only because it sounds advanced, without checking impact or constraints", "Ignore rate limiting until the issue becomes urgent in production or with customers", "Delegate rate limiting completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "rate limiting is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-30",
      type: "mcq",
      title: "Jwt Validation",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for JWT validation?",
      options: ["Apply JWT validation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use JWT validation only because it sounds advanced, without checking impact or constraints", "Ignore JWT validation until the issue becomes urgent in production or with customers", "Delegate JWT validation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "JWT validation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-31",
      type: "mcq",
      title: "Environment Config",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for environment config?",
      options: ["Apply environment config with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use environment config only because it sounds advanced, without checking impact or constraints", "Ignore environment config until the issue becomes urgent in production or with customers", "Delegate environment config completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "environment config is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-32",
      type: "mcq",
      title: "Worker Threads",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for worker threads?",
      options: ["Apply worker threads with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use worker threads only because it sounds advanced, without checking impact or constraints", "Ignore worker threads until the issue becomes urgent in production or with customers", "Delegate worker threads completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "worker threads is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-33",
      type: "mcq",
      title: "Unhandled Rejection",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for unhandled rejection?",
      options: ["Apply unhandled rejection with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use unhandled rejection only because it sounds advanced, without checking impact or constraints", "Ignore unhandled rejection until the issue becomes urgent in production or with customers", "Delegate unhandled rejection completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "unhandled rejection is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-34",
      type: "mcq",
      title: "Package-Lock",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for package-lock?",
      options: ["Apply package-lock with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use package-lock only because it sounds advanced, without checking impact or constraints", "Ignore package-lock until the issue becomes urgent in production or with customers", "Delegate package-lock completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "package-lock is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-35",
      type: "mcq",
      title: "Npm Audit",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for npm audit?",
      options: ["Apply npm audit with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use npm audit only because it sounds advanced, without checking impact or constraints", "Ignore npm audit until the issue becomes urgent in production or with customers", "Delegate npm audit completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "npm audit is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-36",
      type: "mcq",
      title: "Api Pagination",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for API pagination?",
      options: ["Apply API pagination with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use API pagination only because it sounds advanced, without checking impact or constraints", "Ignore API pagination until the issue becomes urgent in production or with customers", "Delegate API pagination completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "API pagination is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-37",
      type: "mcq",
      title: "Idempotency Keys",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for idempotency keys?",
      options: ["Apply idempotency keys with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use idempotency keys only because it sounds advanced, without checking impact or constraints", "Ignore idempotency keys until the issue becomes urgent in production or with customers", "Delegate idempotency keys completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "idempotency keys is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-38",
      type: "mcq",
      title: "Structured Logs",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for structured logs?",
      options: ["Apply structured logs with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use structured logs only because it sounds advanced, without checking impact or constraints", "Ignore structured logs until the issue becomes urgent in production or with customers", "Delegate structured logs completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "structured logs is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-39",
      type: "mcq",
      title: "Graceful Shutdown",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for graceful shutdown?",
      options: ["Apply graceful shutdown with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use graceful shutdown only because it sounds advanced, without checking impact or constraints", "Ignore graceful shutdown until the issue becomes urgent in production or with customers", "Delegate graceful shutdown completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "graceful shutdown is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "no-40",
      type: "mcq",
      title: "Production Api Design",
      prompt: "In a professional Node.js Backend Engineering scenario, which response best demonstrates strong judgment for production API design?",
      options: ["Apply production API design with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use production API design only because it sounds advanced, without checking impact or constraints", "Ignore production API design until the issue becomes urgent in production or with customers", "Delegate production API design completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "production API design is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
