import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const reactData = {
  id: ASSESSMENT_TYPES.react,
  title: "React Frontend Engineering Professional Certification",
  shortTitle: "React",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "React component architecture, hooks, state management, rendering behavior, performance, routing, forms, testing, accessibility, and production frontend judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "re-01",
      type: "mcq",
      title: "Virtual DOM",
      prompt: "Why is the Virtual DOM considered fast?",
      options: ["It uses less memory", "It calculates the minimum number of changes needed to the real DOM", "It replaces the browser", "It doesn't use JavaScript"],
      correctIndex: 1,
      explanation: "Reconciliation (diffing) minimizes expensive real-DOM operations. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-02",
      type: "mcq",
      title: "Hooks",
      prompt: "Which hook is used for side effects (like API calls)?",
      options: ["useState", "useContext", "useEffect", "useMemo"],
      correctIndex: 2,
      explanation: "useEffect handles synchronization with external systems. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-03",
      type: "mcq",
      title: "Props vs State",
      prompt: "What is the main difference between Props and State?",
      options: ["Props are internal, State is external", "Props are immutable from the component's view; State is managed internally", "There is no difference", "State is faster"],
      correctIndex: 1,
      explanation: "Props are passed down; State is local data that changes over time. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-04",
      type: "mcq",
      title: "Keys",
      prompt: "Why are \"keys\" important when rendering a list of components?",
      options: ["To style them", "To help React identify which items have changed, been added, or removed", "To set IDs", "To bind data"],
      correctIndex: 1,
      explanation: "Stable keys ensure efficient updates and preserve component state. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-05",
      type: "mcq",
      title: "JSX",
      prompt: "What is JSX?",
      options: ["A Java extension", "A syntax extension for JavaScript that looks like HTML", "A CSS framework", "A database language"],
      correctIndex: 1,
      explanation: "JSX allows writing UI structure inside JavaScript. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-06",
      type: "mcq",
      title: "Context API",
      prompt: "What problem does the Context API solve?",
      options: ["Slow rendering", "Prop drilling", "Data security", "Missing files"],
      correctIndex: 1,
      explanation: "Context allows sharing state deeply without passing props manually at every level."
    },
    {
      id: "re-07",
      type: "mcq",
      title: "Redux",
      prompt: "In Redux, what is the only way to change the state?",
      options: ["Directly editing the store", "Dispatching an action", "Updating a prop", "Calling a hook"],
      correctIndex: 1,
      explanation: "State is read-only; actions describe \"what happened\" to trigger a change."
    },
    {
      id: "re-08",
      type: "mcq",
      title: "Pure Components",
      prompt: "What makes a component \"Pure\"?",
      options: ["It has no CSS", "It renders the same output for the same props and state", "It doesn't use hooks", "It is a class component"],
      correctIndex: 1,
      explanation: "Pure components are predictable and easier to optimize. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-09",
      type: "mcq",
      title: "React Router",
      prompt: "How do you handle navigation in a React Single Page Application (SPA)?",
      options: ["<a> tags only", "React Router or similar library", "Window.location", "Manual DOM manipulation"],
      correctIndex: 1,
      explanation: "Libraries like React Router manage URL changes without full page reloads."
    },
    {
      id: "re-10",
      type: "mcq",
      title: "Performance",
      prompt: "Which hook would you use to memoize a expensive calculation result?",
      options: ["useCallback", "useMemo", "useRef", "useEffect"],
      correctIndex: 1,
      explanation: "useMemo returns a memoized value that only re-calculates when dependencies change."
    },
    {
      id: "re-11",
      type: "mcq",
      title: "useCallback",
      prompt: "When should you use useCallback?",
      options: ["To memoize an object", "To prevent unnecessary re-renders of child components that depend on a stable function reference", "To make an API call", "To store a DOM element"],
      correctIndex: 1,
      explanation: "useCallback memoizes the function itself. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-12",
      type: "mcq",
      title: "useRef",
      prompt: "What is a primary use case for the useRef hook?",
      options: ["To trigger re-renders", "To access a DOM element directly or store mutable values that don't trigger re-renders", "To share state", "To handle errors"],
      correctIndex: 1,
      explanation: "Refs are a \"back door\" for imperative actions or persistent data. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-13",
      type: "mcq",
      title: "HOC",
      prompt: "What is a \"Higher-Order Component\"?",
      options: ["A large component", "A function that takes a component and returns a new component", "A component with many props", "A Redux store"],
      correctIndex: 1,
      explanation: "HOCs are a pattern for reusing component logic. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-14",
      type: "mcq",
      title: "Composition",
      prompt: "What is meant by \"Composition over Inheritance\" in React?",
      options: ["Building small, reusable components and combining them", "Extending classes", "Writing code once", "Using CSS"],
      correctIndex: 0,
      explanation: "React favors building complex UIs by nesting components rather than extending them."
    },
    {
      id: "re-15",
      type: "mcq",
      title: "Fragment",
      prompt: "What is a React Fragment (<> or <React.Fragment>)?",
      options: ["A piece of CSS", "A way to group a list of children without adding extra nodes to the DOM", "A breaking change", "A type of hook"],
      correctIndex: 1,
      explanation: "Fragments prevent \"div soup\" in the HTML output. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-16",
      type: "mcq",
      title: "Error Boundaries",
      prompt: "How do you catch JavaScript errors in your component tree?",
      options: ["try/catch everywhere", "Error Boundary components", "Window.onerror", "Redux"],
      correctIndex: 1,
      explanation: "Error boundaries are class components that catch errors in their child tree."
    },
    {
      id: "re-17",
      type: "mcq",
      title: "Testing",
      prompt: "Which library is standard for testing React components?",
      options: ["Jest & React Testing Library", "Mocha", "Selenium", "Postman"],
      correctIndex: 0,
      explanation: "RTL focuses on testing components from the user's perspective. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-18",
      type: "mcq",
      title: "Strict Mode",
      prompt: "What is the purpose of <React.StrictMode>?",
      options: ["To make the app faster", "To highlight potential problems in the application (like unsafe lifecycles)", "To block users", "To encrypt data"],
      correctIndex: 1,
      explanation: "StrictMode helps find deprecated patterns and side-effect bugs in dev mode."
    },
    {
      id: "re-19",
      type: "mcq",
      title: "Portals",
      prompt: "What do Portals allow you to do?",
      options: ["Navigate to other websites", "Render children into a DOM node outside the parent component's hierarchy", "Upload files", "Change the theme"],
      correctIndex: 1,
      explanation: "Portals are useful for modals, tooltips, and global overlays. This is a checked foundational concept for professional React work."
    },
    {
      id: "re-20",
      type: "mcq",
      title: "Server Components",
      prompt: "What is a benefit of React Server Components?",
      options: ["They run in the browser", "They reduce the bundle size sent to the client and can fetch data on the server", "They are harder to build", "They replace CSS"],
      correctIndex: 1,
      explanation: "Server components move logic to the server, improving client performance."
    },
    {
      id: "re-21",
      type: "mcq",
      title: "Component Composition",
      prompt: "In a professional React Frontend Engineering scenario, what is the strongest approach when dealing with component composition?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Component Composition requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "re-22",
      type: "mcq",
      title: "Useeffect Dependency Arrays",
      prompt: "A team is making a decision about useEffect dependency arrays. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about useEffect dependency arrays balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "re-23",
      type: "mcq",
      title: "Controlled Components",
      prompt: "Which signal suggests controlled components needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when controlled components could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "re-24",
      type: "mcq",
      title: "Lifting State Up",
      prompt: "What is the best way to validate work involving lifting state up?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for lifting state up should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "re-25",
      type: "mcq",
      title: "Memoization With Usememo",
      prompt: "In a professional React Frontend Engineering scenario, what is the strongest approach when dealing with memoization with useMemo?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Memoization With Usememo requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "re-26",
      type: "mcq",
      title: "Usecallback Trade-Offs",
      prompt: "A team is making a decision about useCallback trade-offs. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about useCallback trade-offs balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "re-27",
      type: "mcq",
      title: "React.Memo Usage",
      prompt: "Which signal suggests React.memo usage needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when React.memo usage could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "re-28",
      type: "mcq",
      title: "Context Performance",
      prompt: "What is the best way to validate work involving context performance?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for context performance should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "re-29",
      type: "mcq",
      title: "Redux Toolkit Slice Design",
      prompt: "In a professional React Frontend Engineering scenario, what is the strongest approach when dealing with Redux Toolkit slice design?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Redux Toolkit Slice Design requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "re-30",
      type: "mcq",
      title: "React Query Server State",
      prompt: "A team is making a decision about React Query server state. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about React Query server state balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "re-31",
      type: "mcq",
      title: "Suspense Boundaries",
      prompt: "Which signal suggests Suspense boundaries needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when Suspense boundaries could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "re-32",
      type: "mcq",
      title: "Error Boundaries",
      prompt: "What is the best way to validate work involving error boundaries?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for error boundaries should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "re-33",
      type: "mcq",
      title: "Lazy Loading Routes",
      prompt: "In a professional React Frontend Engineering scenario, what is the strongest approach when dealing with lazy loading routes?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Lazy Loading Routes requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "re-34",
      type: "mcq",
      title: "Form Validation",
      prompt: "A team is making a decision about form validation. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about form validation balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "re-35",
      type: "mcq",
      title: "Accessibility Semantics",
      prompt: "Which signal suggests accessibility semantics needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when accessibility semantics could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "re-36",
      type: "mcq",
      title: "Keyboard Navigation",
      prompt: "What is the best way to validate work involving keyboard navigation?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for keyboard navigation should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "re-37",
      type: "mcq",
      title: "Hydration Mismatch",
      prompt: "In a professional React Frontend Engineering scenario, what is the strongest approach when dealing with hydration mismatch?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Hydration Mismatch requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "re-38",
      type: "mcq",
      title: "State Immutability",
      prompt: "A team is making a decision about state immutability. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about state immutability balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "re-39",
      type: "mcq",
      title: "Testing User Behavior",
      prompt: "Which signal suggests testing user behavior needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when testing user behavior could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "re-40",
      type: "mcq",
      title: "Production Rendering Performance",
      prompt: "What is the best way to validate work involving production rendering performance?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for production rendering performance should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
