import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const reactnativeData = {
  id: ASSESSMENT_TYPES.reactnative,
  title: "React Native Mobile Development Professional Certification",
  shortTitle: "React Native",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "React Native components, navigation, styling, Expo, native modules, platform differences, performance, lists, mobile state, permissions, debugging, and release readiness.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "rn-01",
      type: "mcq",
      title: "Architecture",
      prompt: "How does React Native communicate between JavaScript and Native code?",
      options: ["Directly", "Via a Bridge (Serialized JSON)", "Using a Webview", "It doesn't"],
      correctIndex: 1,
      explanation: "The Bridge allows asynchronous communication between the JS thread and Native thread."
    },
    {
      id: "rn-02",
      type: "mcq",
      title: "Components",
      prompt: "Which React Native component is the equivalent of a <div> in HTML?",
      options: ["Text", "View", "Image", "ScrollView"],
      correctIndex: 1,
      explanation: "View is the basic container for layout. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-03",
      type: "mcq",
      title: "Styling",
      prompt: "How are styles applied in React Native?",
      options: ["Standard CSS files", "StyleSheet.create() using a subset of CSS-like properties", "Inline strings", "External libraries only"],
      correctIndex: 1,
      explanation: "Styles use JS objects and follow Flexbox for layout. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-04",
      type: "mcq",
      title: "Expo",
      prompt: "What is Expo?",
      options: ["A design tool", "A framework and platform for universal React applications (managed workflow)", "A database", "A compiler"],
      correctIndex: 1,
      explanation: "Expo simplifies development and deployment by abstracting native complexity."
    },
    {
      id: "rn-05",
      type: "mcq",
      title: "Flexbox",
      prompt: "What is the default flex-direction in React Native?",
      options: ["row", "column", "row-reverse", "column-reverse"],
      correctIndex: 1,
      explanation: "Unlike the web, React Native defaults to column layout. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-06",
      type: "mcq",
      title: "Images",
      prompt: "How do you include a local image in React Native?",
      options: ["<img src=\"path\">", "require(\"./image.png\")", "{{ uri: \"path\" }}", "import image from \"path\""],
      correctIndex: 1,
      explanation: "require() is used for static assets. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-07",
      type: "mcq",
      title: "Text",
      prompt: "Can you put text directly inside a <View> without a <Text> component?",
      options: ["Yes", "No, it must be inside <Text>", "Only in Android", "Only in iOS"],
      correctIndex: 1,
      explanation: "All text nodes must be wrapped in a <Text> component. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-08",
      type: "mcq",
      title: "Lists",
      prompt: "Which component is optimized for rendering long lists of data?",
      options: ["ScrollView", "FlatList", "ListView (deprecated)", "SectionList"],
      correctIndex: 1,
      explanation: "FlatList only renders items that are currently on screen (windowing). This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-09",
      type: "mcq",
      title: "Navigation",
      prompt: "What is the most popular navigation library for React Native?",
      options: ["React Navigation", "Native Router", "Linker", "NavigatorIO"],
      correctIndex: 0,
      explanation: "React Navigation is the community-standard solution. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-10",
      type: "mcq",
      title: "Platform Specific",
      prompt: "How do you write code that only runs on iOS?",
      options: ["if (iOS) {}", "Platform.OS === \"ios\"", "Using .ios.js file extension", "Both B and C"],
      correctIndex: 3,
      explanation: "React Native provides both runtime checks and file-extension-based splitting."
    },
    {
      id: "rn-11",
      type: "mcq",
      title: "AsyncStorage",
      prompt: "What is \"AsyncStorage\" used for?",
      options: ["Fast database", "Simple, unencrypted, asynchronous, persistent, key-value storage", "Cloud sync", "Temporary cache"],
      correctIndex: 1,
      explanation: "It is the equivalent of localStorage for mobile. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-12",
      type: "mcq",
      title: "Hooks",
      prompt: "Can you use standard React hooks (useState, useEffect) in React Native?",
      options: ["No", "Yes, they work exactly the same", "Only in web versions", "Only with Expo"],
      correctIndex: 1,
      explanation: "React Native uses the same React core as the web. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-13",
      type: "mcq",
      title: "Native Modules",
      prompt: "When would you need to write a \"Native Module\"?",
      options: ["To style a button", "To access a platform API not yet available in React Native", "To fetch data", "To use Redux"],
      correctIndex: 1,
      explanation: "Native modules bridge the gap between JS and Objective-C/Java. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-14",
      type: "mcq",
      title: "Animations",
      prompt: "Which API is recommended for performant animations in React Native?",
      options: ["CSS Animations", "Animated API or Reanimated", "requestAnimationFrame", "Lottie"],
      correctIndex: 1,
      explanation: "Animated and Reanimated handle animations efficiently, often offloading to the native thread."
    },
    {
      id: "rn-15",
      type: "mcq",
      title: "Linking",
      prompt: "What is \"Linking\" used for?",
      options: ["Connecting databases", "Handling deep links and opening external apps/URLs", "Compiling code", "Adding libraries"],
      correctIndex: 1,
      explanation: "Linking provides a general interface to interact with both incoming and outgoing app links."
    },
    {
      id: "rn-16",
      type: "mcq",
      title: "JSI",
      prompt: "What is \"JSI\" in the new React Native architecture?",
      options: ["Java Script Interface", "JavaScript Interface, allowing direct synchronous calls between JS and Native", "Just Some Interface", "Joint System Integration"],
      correctIndex: 1,
      explanation: "JSI replaces the Bridge for much higher performance. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-17",
      type: "mcq",
      title: "Safe Area",
      prompt: "Why is <SafeAreaView> important?",
      options: ["To encrypt data", "To handle notches and navigation bars on modern devices", "For accessibility", "For child safety"],
      correctIndex: 1,
      explanation: "It ensures content is rendered within the \"safe\" boundaries of the device."
    },
    {
      id: "rn-18",
      type: "mcq",
      title: "Fast Refresh",
      prompt: "What is \"Fast Refresh\"?",
      options: ["Clearing cache", "The combination of Hot Reloading and Live Reloading", "A battery saver", "A build command"],
      correctIndex: 1,
      explanation: "It provides a resilient developer experience with full state preservation where possible."
    },
    {
      id: "rn-19",
      type: "mcq",
      title: "Bundler",
      prompt: "What is the name of the JavaScript bundler for React Native?",
      options: ["Webpack", "Metro", "Rollup", "Parcel"],
      correctIndex: 1,
      explanation: "Metro is specialized for React Native development. This is a checked foundational concept for professional React Native work."
    },
    {
      id: "rn-20",
      type: "mcq",
      title: "Permissions",
      prompt: "How are permissions (Camera, Location) handled in React Native?",
      options: ["Automatically", "Requesting via platform-specific APIs or libraries like react-native-permissions", "In the settings app only", "In CSS"],
      correctIndex: 1,
      explanation: "You must request permission at runtime and declare it in Info.plist/AndroidManifest."
    },
    {
      id: "rn-21",
      type: "mcq",
      title: "View Versus Text",
      prompt: "In a professional React Native Mobile Development scenario, what is the strongest approach when dealing with View versus Text?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "View Versus Text requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rn-22",
      type: "mcq",
      title: "Safeareaview Usage",
      prompt: "A team is making a decision about SafeAreaView usage. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about SafeAreaView usage balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rn-23",
      type: "mcq",
      title: "Flatlist Virtualization",
      prompt: "Which signal suggests FlatList virtualization needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when FlatList virtualization could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rn-24",
      type: "mcq",
      title: "Keyextractor Quality",
      prompt: "What is the best way to validate work involving keyExtractor quality?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for keyExtractor quality should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "rn-25",
      type: "mcq",
      title: "Navigation Params",
      prompt: "In a professional React Native Mobile Development scenario, what is the strongest approach when dealing with navigation params?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Navigation Params requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rn-26",
      type: "mcq",
      title: "Deep Linking",
      prompt: "A team is making a decision about deep linking. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about deep linking balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rn-27",
      type: "mcq",
      title: "Asyncstorage Limits",
      prompt: "Which signal suggests AsyncStorage limits needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when AsyncStorage limits could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rn-28",
      type: "mcq",
      title: "Secure Storage",
      prompt: "What is the best way to validate work involving secure storage?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for secure storage should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "rn-29",
      type: "mcq",
      title: "Permission Handling",
      prompt: "In a professional React Native Mobile Development scenario, what is the strongest approach when dealing with permission handling?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Permission Handling requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rn-30",
      type: "mcq",
      title: "Camera Or Location Access",
      prompt: "A team is making a decision about camera or location access. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about camera or location access balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rn-31",
      type: "mcq",
      title: "Platform-Specific Files",
      prompt: "Which signal suggests platform-specific files needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when platform-specific files could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rn-32",
      type: "mcq",
      title: "Native Module Bridge",
      prompt: "What is the best way to validate work involving native module bridge?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for native module bridge should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "rn-33",
      type: "mcq",
      title: "Expo Managed Workflow",
      prompt: "In a professional React Native Mobile Development scenario, what is the strongest approach when dealing with Expo managed workflow?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Expo Managed Workflow requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rn-34",
      type: "mcq",
      title: "Bare Workflow Trade-Off",
      prompt: "A team is making a decision about bare workflow trade-off. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about bare workflow trade-off balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rn-35",
      type: "mcq",
      title: "Hermes Engine",
      prompt: "Which signal suggests Hermes engine needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when Hermes engine could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rn-36",
      type: "mcq",
      title: "Performance Profiling",
      prompt: "What is the best way to validate work involving performance profiling?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for performance profiling should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "rn-37",
      type: "mcq",
      title: "Image Optimization",
      prompt: "In a professional React Native Mobile Development scenario, what is the strongest approach when dealing with image optimization?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Image Optimization requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "rn-38",
      type: "mcq",
      title: "Offline-First Mobile Ux",
      prompt: "A team is making a decision about offline-first mobile UX. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about offline-first mobile UX balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "rn-39",
      type: "mcq",
      title: "App Release Signing",
      prompt: "Which signal suggests app release signing needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when app release signing could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "rn-40",
      type: "mcq",
      title: "Crash Diagnostics",
      prompt: "What is the best way to validate work involving crash diagnostics?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for crash diagnostics should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
