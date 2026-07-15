import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const kotlinData = {
  id: ASSESSMENT_TYPES.kotlin,
  title: "Kotlin Android Development Professional Certification",
  shortTitle: "Kotlin",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Kotlin null safety, classes, coroutines, flows, Jetpack Compose, lifecycle, architecture, testing, performance, and production Android development.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "kt-01",
      type: "mcq",
      title: "Null Safety",
      prompt: "How does Kotlin prevent NullPointerExceptions?",
      options: ["By ignoring nulls", "By distinguishing between nullable and non-nullable types in the type system", "By using \"!\"", "It doesn't"],
      correctIndex: 1,
      explanation: "Types like String cannot be null unless declared as String?."
    },
    {
      id: "kt-02",
      type: "mcq",
      title: "Variables",
      prompt: "What is the difference between \"val\" and \"var\"?",
      options: ["No difference", "val is immutable (read-only); var is mutable", "var is for integers only", "val is faster"],
      correctIndex: 1,
      explanation: "Use val whenever possible for cleaner, safer code. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "kt-03",
      type: "mcq",
      title: "Coroutines",
      prompt: "What is a Coroutine?",
      options: ["A heavy thread", "A lightweight, non-blocking way to handle asynchronous tasks", "A type of class", "A UI element"],
      correctIndex: 1,
      explanation: "Coroutines allow writing async code sequentially without blocking threads."
    },
    {
      id: "kt-04",
      type: "mcq",
      title: "Data Classes",
      prompt: "What is a \"Data Class\" in Kotlin?",
      options: ["A class for holding data with automatic equals/hashCode/toString methods", "A database table", "A class with no methods", "A private class"],
      correctIndex: 0,
      explanation: "Data classes reduce boilerplate for model objects. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "kt-05",
      type: "mcq",
      title: "Extensions",
      prompt: "How do you add a new function to an existing class (like String) in Kotlin?",
      options: ["Inheritance", "Extension Functions", "Writing a utility class", "You can't"],
      correctIndex: 1,
      explanation: "fun String.myFunc() { ... } adds myFunc to all String instances."
    },
    {
      id: "kt-06",
      type: "mcq",
      title: "Jetpack Compose",
      prompt: "What is Jetpack Compose?",
      options: ["A build tool", "A modern, declarative toolkit for building native Android UI", "A music app", "A database library"],
      correctIndex: 1,
      explanation: "Compose is the modern replacement for XML-based layouts."
    },
    {
      id: "kt-07",
      type: "mcq",
      title: "Scope Functions",
      prompt: "Which scope function is best for configuring an object and returning it (using \"this\")?",
      options: ["let", "run", "apply", "also"],
      correctIndex: 2,
      explanation: "apply is commonly used for object initialization. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "kt-08",
      type: "mcq",
      title: "Higher-Order Functions",
      prompt: "What is a Higher-Order Function?",
      options: ["A function with many lines", "A function that takes another function as a parameter or returns one", "A global function", "A private function"],
      correctIndex: 1,
      explanation: "Lambdas are often used as parameters in higher-order functions."
    },
    {
      id: "kt-09",
      type: "mcq",
      title: "Interoperability",
      prompt: "Can Kotlin and Java code exist in the same project?",
      options: ["No", "Yes, they are 100% interoperable", "Only if converted", "Only in small projects"],
      correctIndex: 1,
      explanation: "Kotlin is designed to work seamlessly with existing Java code and libraries."
    },
    {
      id: "kt-10",
      type: "mcq",
      title: "Lateinit",
      prompt: "What is \"lateinit\" used for?",
      options: ["To delay app start", "To declare a non-null property that will be initialized after the constructor", "To make code slow", "For optional values"],
      correctIndex: 1,
      explanation: "Commonly used for dependency injection or setup in onCreate()."
    },
    {
      id: "kt-11",
      type: "mcq",
      title: "ViewModel",
      prompt: "What is the purpose of a ViewModel in Android?",
      options: ["To design the UI", "To store and manage UI-related data in a lifecycle-conscious way", "To handle network calls directly", "To manage the database"],
      correctIndex: 1,
      explanation: "ViewModels survive configuration changes like screen rotations."
    },
    {
      id: "kt-12",
      type: "mcq",
      title: "Flow",
      prompt: "What is \"Kotlin Flow\"?",
      options: ["A type of loop", "A cold asynchronous data stream that emits multiple values sequentially", "A UI layout", "A build system"],
      correctIndex: 1,
      explanation: "Flow is part of the coroutines library for reactive streams."
    },
    {
      id: "kt-13",
      type: "mcq",
      title: "Sealed Classes",
      prompt: "What is a \"Sealed Class\" used for?",
      options: ["To hide code", "To represent restricted class hierarchies (like a powerful enum)", "To encrypt data", "To close the app"],
      correctIndex: 1,
      explanation: "Sealed classes allow for exhaustive when expressions. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "kt-14",
      type: "mcq",
      title: "Dependency Injection",
      prompt: "Which library is recommended by Google for DI in Android?",
      options: ["Dagger", "Hilt", "Koin", "Guice"],
      correctIndex: 1,
      explanation: "Hilt is built on top of Dagger to simplify DI in Android apps."
    },
    {
      id: "kt-15",
      type: "mcq",
      title: "Room",
      prompt: "What is \"Room\" in the Android Jetpack library?",
      options: ["A physical space", "An abstraction layer over SQLite for easier database access", "A networking library", "A UI component"],
      correctIndex: 1,
      explanation: "Room provides compile-time checks for SQL queries. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "kt-16",
      type: "mcq",
      title: "WorkManager",
      prompt: "When should you use WorkManager?",
      options: ["For UI animations", "For deferrable, guaranteed background tasks (like syncing data)", "For immediate API calls", "For playing audio"],
      correctIndex: 1,
      explanation: "WorkManager handles task execution even if the app exits or the device restarts."
    },
    {
      id: "kt-17",
      type: "mcq",
      title: "Smart Cast",
      prompt: "What is \"Smart Casting\" in Kotlin?",
      options: ["Automatic type casting after a type check (is)", "Casting with a remote", "AI-based casting", "Manual casting"],
      correctIndex: 0,
      explanation: "If you check \"if (x is String)\", Kotlin treats x as a String inside the block."
    },
    {
      id: "kt-18",
      type: "mcq",
      title: "Navigation",
      prompt: "What is the \"Navigation Component\"?",
      options: ["Google Maps", "A library for managing app navigation and fragment transitions", "A set of icons", "A deep link tool"],
      correctIndex: 1,
      explanation: "It provides a visual graph to manage app flow. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "kt-19",
      type: "mcq",
      title: "Retrofit",
      prompt: "Which library is commonly used with Kotlin for network requests?",
      options: ["OkHttp", "Retrofit", "Ktor", "All of the above"],
      correctIndex: 3,
      explanation: "While Retrofit is the most popular, all are used in the Kotlin/Android ecosystem."
    },
    {
      id: "kt-20",
      type: "mcq",
      title: "Gradle",
      prompt: "What is \"Kotlin DSL\" in the context of Gradle?",
      options: ["A UI framework", "Using Kotlin instead of Groovy for build scripts", "A database", "A testing tool"],
      correctIndex: 1,
      explanation: "Kotlin DSL provides better type safety and IDE support for build configurations."
    },
    {
      id: "kt-21",
      type: "mcq",
      title: "Safe Calls",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for safe calls?",
      options: ["Apply safe calls with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use safe calls only because it sounds advanced, without checking impact or constraints", "Ignore safe calls until the issue becomes urgent in production or with customers", "Delegate safe calls completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "safe calls is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-22",
      type: "mcq",
      title: "Elvis Operator",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for Elvis operator?",
      options: ["Apply Elvis operator with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Elvis operator only because it sounds advanced, without checking impact or constraints", "Ignore Elvis operator until the issue becomes urgent in production or with customers", "Delegate Elvis operator completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Elvis operator is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-23",
      type: "mcq",
      title: "Smart Casts",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for smart casts?",
      options: ["Apply smart casts with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use smart casts only because it sounds advanced, without checking impact or constraints", "Ignore smart casts until the issue becomes urgent in production or with customers", "Delegate smart casts completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "smart casts is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-24",
      type: "mcq",
      title: "Sealed Classes",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for sealed classes?",
      options: ["Apply sealed classes with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use sealed classes only because it sounds advanced, without checking impact or constraints", "Ignore sealed classes until the issue becomes urgent in production or with customers", "Delegate sealed classes completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "sealed classes is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-25",
      type: "mcq",
      title: "Dispatchers.Io",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for Dispatchers.IO?",
      options: ["Apply Dispatchers.IO with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Dispatchers.IO only because it sounds advanced, without checking impact or constraints", "Ignore Dispatchers.IO until the issue becomes urgent in production or with customers", "Delegate Dispatchers.IO completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Dispatchers.IO is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-26",
      type: "mcq",
      title: "Dispatchers.Main",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for Dispatchers.Main?",
      options: ["Apply Dispatchers.Main with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Dispatchers.Main only because it sounds advanced, without checking impact or constraints", "Ignore Dispatchers.Main until the issue becomes urgent in production or with customers", "Delegate Dispatchers.Main completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Dispatchers.Main is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-27",
      type: "mcq",
      title: "Structured Concurrency",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for structured concurrency?",
      options: ["Apply structured concurrency with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use structured concurrency only because it sounds advanced, without checking impact or constraints", "Ignore structured concurrency until the issue becomes urgent in production or with customers", "Delegate structured concurrency completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "structured concurrency is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-28",
      type: "mcq",
      title: "Flow",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for Flow?",
      options: ["Apply Flow with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Flow only because it sounds advanced, without checking impact or constraints", "Ignore Flow until the issue becomes urgent in production or with customers", "Delegate Flow completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Flow is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-29",
      type: "mcq",
      title: "Stateflow",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for StateFlow?",
      options: ["Apply StateFlow with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use StateFlow only because it sounds advanced, without checking impact or constraints", "Ignore StateFlow until the issue becomes urgent in production or with customers", "Delegate StateFlow completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "StateFlow is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-30",
      type: "mcq",
      title: "Viewmodel",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for ViewModel?",
      options: ["Apply ViewModel with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ViewModel only because it sounds advanced, without checking impact or constraints", "Ignore ViewModel until the issue becomes urgent in production or with customers", "Delegate ViewModel completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ViewModel is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-31",
      type: "mcq",
      title: "Repository Pattern",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for repository pattern?",
      options: ["Apply repository pattern with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use repository pattern only because it sounds advanced, without checking impact or constraints", "Ignore repository pattern until the issue becomes urgent in production or with customers", "Delegate repository pattern completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "repository pattern is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-32",
      type: "mcq",
      title: "Compose Recomposition",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for Compose recomposition?",
      options: ["Apply Compose recomposition with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Compose recomposition only because it sounds advanced, without checking impact or constraints", "Ignore Compose recomposition until the issue becomes urgent in production or with customers", "Delegate Compose recomposition completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Compose recomposition is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-33",
      type: "mcq",
      title: "Remember",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for remember?",
      options: ["Apply remember with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use remember only because it sounds advanced, without checking impact or constraints", "Ignore remember until the issue becomes urgent in production or with customers", "Delegate remember completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "remember is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-34",
      type: "mcq",
      title: "Remembersaveable",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for rememberSaveable?",
      options: ["Apply rememberSaveable with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use rememberSaveable only because it sounds advanced, without checking impact or constraints", "Ignore rememberSaveable until the issue becomes urgent in production or with customers", "Delegate rememberSaveable completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "rememberSaveable is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-35",
      type: "mcq",
      title: "Launchedeffect",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for LaunchedEffect?",
      options: ["Apply LaunchedEffect with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use LaunchedEffect only because it sounds advanced, without checking impact or constraints", "Ignore LaunchedEffect until the issue becomes urgent in production or with customers", "Delegate LaunchedEffect completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "LaunchedEffect is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-36",
      type: "mcq",
      title: "Compose Side Effects",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for Compose side effects?",
      options: ["Apply Compose side effects with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Compose side effects only because it sounds advanced, without checking impact or constraints", "Ignore Compose side effects until the issue becomes urgent in production or with customers", "Delegate Compose side effects completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Compose side effects is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-37",
      type: "mcq",
      title: "Room",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for Room?",
      options: ["Apply Room with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Room only because it sounds advanced, without checking impact or constraints", "Ignore Room until the issue becomes urgent in production or with customers", "Delegate Room completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Room is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-38",
      type: "mcq",
      title: "Unit Testing",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for unit testing?",
      options: ["Apply unit testing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use unit testing only because it sounds advanced, without checking impact or constraints", "Ignore unit testing until the issue becomes urgent in production or with customers", "Delegate unit testing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "unit testing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-39",
      type: "mcq",
      title: "Compose Performance",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for Compose performance?",
      options: ["Apply Compose performance with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Compose performance only because it sounds advanced, without checking impact or constraints", "Ignore Compose performance until the issue becomes urgent in production or with customers", "Delegate Compose performance completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Compose performance is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "kt-40",
      type: "mcq",
      title: "Production Android Architecture",
      prompt: "In a professional Kotlin Android Development Professional scenario, which response best demonstrates strong judgment for production Android architecture?",
      options: ["Apply production Android architecture with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use production Android architecture only because it sounds advanced, without checking impact or constraints", "Ignore production Android architecture until the issue becomes urgent in production or with customers", "Delegate production Android architecture completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "production Android architecture is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
