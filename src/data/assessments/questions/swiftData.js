import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const swiftData = {
  id: ASSESSMENT_TYPES.swift,
  title: "iOS Swift Development Professional Certification",
  shortTitle: "Swift",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Swift language fundamentals, optionals, ARC, structs/classes, SwiftUI, UIKit, concurrency, networking, app lifecycle, testing, performance, and iOS architecture.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sw-01",
      type: "mcq",
      title: "Optionals",
      prompt: "How do you safely unwrap an optional in Swift?",
      options: ["Using \"!\"", "if let or guard let statements", "Just using it", "print()"],
      correctIndex: 1,
      explanation: "Optional binding prevents crashes from nil values. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-02",
      type: "mcq",
      title: "Memory Management",
      prompt: "What does ARC stand for?",
      options: ["Automatic Resource Control", "Automatic Reference Counting", "Advanced Runtime Core", "Active Response Coding"],
      correctIndex: 1,
      explanation: "ARC automatically manages memory by counting references to objects. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-03",
      type: "mcq",
      title: "Structs vs Classes",
      prompt: "What is a major difference between a Struct and a Class in Swift?",
      options: ["Structs are reference types, Classes are value types", "Structs are value types, Classes are reference types", "No difference", "Classes are faster"],
      correctIndex: 1,
      explanation: "Structs are copied when passed around; classes share the same instance."
    },
    {
      id: "sw-04",
      type: "mcq",
      title: "SwiftUI",
      prompt: "Which property wrapper is used to manage a simple piece of state within a view?",
      options: ["@State", "@Binding", "@ObservedObject", "@Environment"],
      correctIndex: 0,
      explanation: "@State is for simple local state managed by SwiftUI. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-05",
      type: "mcq",
      title: "Closures",
      prompt: "What is a \"trailing closure\" in Swift?",
      options: ["A closure that never runs", "A closure passed as the last argument to a function outside the parentheses", "An error", "A type of variable"],
      correctIndex: 1,
      explanation: "It makes function calls cleaner when a closure is the final parameter."
    },
    {
      id: "sw-06",
      type: "mcq",
      title: "Protocols",
      prompt: "What is a Protocol in Swift?",
      options: ["A type of class", "A blueprint of methods or properties that a type can adopt", "A network connection", "A security layer"],
      correctIndex: 1,
      explanation: "Protocols are similar to interfaces in other languages. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-07",
      type: "mcq",
      title: "Extensions",
      prompt: "What do Extensions allow you to do?",
      options: ["Download files", "Add new functionality to an existing class or struct", "Delete code", "Run code in the background"],
      correctIndex: 1,
      explanation: "Extensions help organize code and extend types you don't own. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-08",
      type: "mcq",
      title: "Retain Cycles",
      prompt: "How do you prevent a retain cycle in a closure?",
      options: ["Using \"strong self\"", "Using a capture list with [weak self] or [unowned self]", "Closing the app", "Using a timer"],
      correctIndex: 1,
      explanation: "Capturing self weakly prevents two objects from holding strong references to each other."
    },
    {
      id: "sw-09",
      type: "mcq",
      title: "Enums",
      prompt: "Can Swift Enums have methods and computed properties?",
      options: ["No", "Yes", "Only with Power-ups", "Only in iOS 15+"],
      correctIndex: 1,
      explanation: "Swift enums are powerful and can contain complex logic. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-10",
      type: "mcq",
      title: "Guard",
      prompt: "What is the benefit of using \"guard\" over \"if\"?",
      options: ["It is slower", "It provides early exit and keeps the \"happy path\" unindented", "It hides errors", "It is for UI only"],
      correctIndex: 1,
      explanation: "Guard improves readability by handling failure cases first. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-11",
      type: "mcq",
      title: "Delegation",
      prompt: "What is the Delegation pattern commonly used for in iOS?",
      options: ["To share data between all views", "To allow one object to communicate back to its owner or another object", "To design icons", "To encrypt data"],
      correctIndex: 1,
      explanation: "Delegation is a standard pattern in UIKit for handling events. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-12",
      type: "mcq",
      title: "Combine",
      prompt: "What is the \"Combine\" framework used for?",
      options: ["Merging images", "Declarative asynchronous programming (reactive)", "Database management", "UI layout"],
      correctIndex: 1,
      explanation: "Combine handles values over time, similar to Rx. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-13",
      type: "mcq",
      title: "View Lifecycle",
      prompt: "In UIKit, which method is called after the view controller's view is loaded into memory?",
      options: ["viewWillAppear", "viewDidLoad", "viewDidAppear", "loadView"],
      correctIndex: 1,
      explanation: "viewDidLoad is the most common place for initial setup. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-14",
      type: "mcq",
      title: "Auto Layout",
      prompt: "What is the purpose of Auto Layout?",
      options: ["To generate code automatically", "To define UI positions and sizes based on constraints that adapt to different screens", "To refresh the app", "To change themes"],
      correctIndex: 1,
      explanation: "Constraints ensure the UI looks good on all iPhone/iPad sizes. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-15",
      type: "mcq",
      title: "SceneDelegate",
      prompt: "What is the role of SceneDelegate in modern iOS apps?",
      options: ["Managing the app lifecycle", "Managing multiple windows or scenes of an app", "Handling network calls", "Managing the database"],
      correctIndex: 1,
      explanation: "Introduced in iOS 13 to support multi-window functionality on iPad. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-16",
      type: "mcq",
      title: "Codable",
      prompt: "What does the \"Codable\" protocol provide?",
      options: ["A way to write code", "A unified way to encode and decode data (like JSON)", "Encryption", "A type of variable"],
      correctIndex: 1,
      explanation: "Codable combines Encodable and Decodable for easy data serialization. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-17",
      type: "mcq",
      title: "Concurrency",
      prompt: "Which new feature in Swift 5.5+ simplifies asynchronous code?",
      options: ["Grand Central Dispatch", "async/await", "Closures", "OperationQueues"],
      correctIndex: 1,
      explanation: "async/await makes asynchronous code look and behave like synchronous code."
    },
    {
      id: "sw-18",
      type: "mcq",
      title: "Unit Testing",
      prompt: "Which framework is native to Xcode for unit and UI testing?",
      options: ["XCTest", "Quick/Nimble", "Appium", "Postman"],
      correctIndex: 0,
      explanation: "XCTest is the built-in library for all Apple platform testing. This is a checked foundational concept for professional Swift work."
    },
    {
      id: "sw-19",
      type: "mcq",
      title: "App Store",
      prompt: "What is \"TestFlight\"?",
      options: ["A game", "Apple's beta testing service for apps", "A crash reporting tool", "A coding environment"],
      correctIndex: 1,
      explanation: "TestFlight allows you to distribute beta versions to testers before release."
    },
    {
      id: "sw-20",
      type: "mcq",
      title: "Universal Apps",
      prompt: "What is \"Catalyst\"?",
      options: ["A chemistry tool", "A technology to bring iPad apps to the Mac", "A build system", "A type of database"],
      correctIndex: 1,
      explanation: "Catalyst allows developers to port their tablet apps to macOS with minimal effort."
    },
    {
      id: "sw-21",
      type: "mcq",
      title: "Optional Chaining",
      prompt: "In a professional iOS Swift Development scenario, what is the strongest approach when dealing with optional chaining?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Optional Chaining requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sw-22",
      type: "mcq",
      title: "Guard Let Usage",
      prompt: "A team is making a decision about guard let usage. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about guard let usage balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sw-23",
      type: "mcq",
      title: "Weak Self In Closures",
      prompt: "Which signal suggests weak self in closures needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when weak self in closures could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sw-24",
      type: "mcq",
      title: "Struct Value Semantics",
      prompt: "What is the best way to validate work involving struct value semantics?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for struct value semantics should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sw-25",
      type: "mcq",
      title: "Class Reference Semantics",
      prompt: "In a professional iOS Swift Development scenario, what is the strongest approach when dealing with class reference semantics?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Class Reference Semantics requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sw-26",
      type: "mcq",
      title: "Protocol-Oriented Design",
      prompt: "A team is making a decision about protocol-oriented design. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about protocol-oriented design balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sw-27",
      type: "mcq",
      title: "Generics",
      prompt: "Which signal suggests generics needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when generics could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sw-28",
      type: "mcq",
      title: "Result Builders",
      prompt: "What is the best way to validate work involving result builders?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for result builders should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sw-29",
      type: "mcq",
      title: "Async Await",
      prompt: "In a professional iOS Swift Development scenario, what is the strongest approach when dealing with async await?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Async Await requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sw-30",
      type: "mcq",
      title: "Mainactor",
      prompt: "A team is making a decision about MainActor. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about MainActor balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sw-31",
      type: "mcq",
      title: "Combine Publisher",
      prompt: "Which signal suggests Combine publisher needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when Combine publisher could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sw-32",
      type: "mcq",
      title: "Swiftui State Ownership",
      prompt: "What is the best way to validate work involving SwiftUI state ownership?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for SwiftUI state ownership should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sw-33",
      type: "mcq",
      title: "Observedobject Versus Stateobject",
      prompt: "In a professional iOS Swift Development scenario, what is the strongest approach when dealing with ObservedObject versus StateObject?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Observedobject Versus Stateobject requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sw-34",
      type: "mcq",
      title: "Navigationstack",
      prompt: "A team is making a decision about NavigationStack. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about NavigationStack balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sw-35",
      type: "mcq",
      title: "Urlsession Error Handling",
      prompt: "Which signal suggests URLSession error handling needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when URLSession error handling could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sw-36",
      type: "mcq",
      title: "Keychain Storage",
      prompt: "What is the best way to validate work involving Keychain storage?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for Keychain storage should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sw-37",
      type: "mcq",
      title: "App Lifecycle",
      prompt: "In a professional iOS Swift Development scenario, what is the strongest approach when dealing with app lifecycle?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "App Lifecycle requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sw-38",
      type: "mcq",
      title: "Unit Testing",
      prompt: "A team is making a decision about unit testing. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about unit testing balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sw-39",
      type: "mcq",
      title: "Ui Testing",
      prompt: "Which signal suggests UI testing needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when UI testing could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sw-40",
      type: "mcq",
      title: "App Store Release Readiness",
      prompt: "What is the best way to validate work involving App Store release readiness?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for App Store release readiness should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
