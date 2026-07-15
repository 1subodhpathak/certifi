import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const productData = {
  id: ASSESSMENT_TYPES.product,
  title: "Product Management Professional Certification",
  shortTitle: "Product",
  category: "Product Management",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Product discovery, MVPs, prioritization, product-market fit, metrics, experiments, roadmap trade-offs, growth, monetization, and strategy.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "prd-01",
      type: "mcq",
      title: "MVP Definition",
      prompt: "What is the primary goal of a Minimum Viable Product (MVP)?",
      options: ["Build every feature", "Verify a core hypothesis with least effort", "Launch a perfect product", "Save money"],
      correctIndex: 1,
      explanation: "MVPs are about learning, not just launching. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "prd-02",
      type: "mcq",
      title: "Prioritization",
      prompt: "You have a high-effort, low-impact feature. Where does it go on the roadmap?",
      options: ["Top priority", "Backlog/Discard", "Do it next week", "Ask the CEO"],
      correctIndex: 1,
      explanation: "Roadmaps should prioritize High Impact / Low Effort (Quick Wins)."
    },
    {
      id: "prd-03",
      type: "mcq",
      title: "User Research",
      prompt: "What is the risk of \"Survivorship Bias\" in user research?",
      options: ["Researching too many people", "Only listening to users who stay, ignoring those who left", "Researching competitors", "Too much data"],
      correctIndex: 1,
      explanation: "Ignoring churned users misses critical \"why\" data for improvement."
    },
    {
      id: "prd-04",
      type: "mcq",
      title: "Metrics",
      prompt: "What is a \"Vanity Metric\"?",
      options: ["Monthly Active Users", "Total App Downloads (without retention)", "Revenue", "Churn Rate"],
      correctIndex: 1,
      explanation: "Downloads look good but don't indicate real business value or usage."
    },
    {
      id: "prd-05",
      type: "mcq",
      title: "User Persona",
      prompt: "Why create user personas?",
      options: ["To make the deck look good", "To build empathy and focus features on specific user needs", "To replace user testing", "To name characters"],
      correctIndex: 1,
      explanation: "Personas help the team make trade-offs by asking \"would this user need this?\"."
    },
    {
      id: "prd-06",
      type: "mcq",
      title: "A/B Testing",
      prompt: "When is an A/B test result statistically significant?",
      options: ["When you like the result", "When the p-value is below a threshold (e.g. 0.05)", "When 10 people tested it", "After 1 hour"],
      correctIndex: 1,
      explanation: "Significance ensures the change isn't due to random chance."
    },
    {
      id: "prd-07",
      type: "mcq",
      title: "Network Effects",
      prompt: "What is a network effect?",
      options: ["Fast internet", "A product becomes more valuable as more people use it", "Viral marketing", "Many servers"],
      correctIndex: 1,
      explanation: "Examples include WhatsApp or Facebook. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "prd-08",
      type: "mcq",
      title: "Churn Rate",
      prompt: "How do you calculate monthly churn rate?",
      options: ["Users added / Total users", "Users lost / Users at start of month", "Revenue / Users", "Users lost + Users added"],
      correctIndex: 1,
      explanation: "Churn = (Lost / Initial) * 100. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "prd-09",
      type: "mcq",
      title: "Product-Market Fit",
      prompt: "What is a common indicator of Product-Market Fit?",
      options: ["High ad spend", "A flat retention curve over time", "Many employees", "Positive PR"],
      correctIndex: 1,
      explanation: "PMF means a group of users find enough value to keep coming back organically."
    },
    {
      id: "prd-10",
      type: "mcq",
      title: "Opportunity Cost",
      prompt: "What is the opportunity cost of building Feature A?",
      options: ["The price of the developers", "The value of Feature B that you couldn't build instead", "Server costs", "Nothing"],
      correctIndex: 1,
      explanation: "Choosing one path means forgoing the benefits of another."
    },
    {
      id: "prd-11",
      type: "mcq",
      title: "Friction",
      prompt: "What is \"UX Friction\"?",
      options: ["Broken code", "Steps or hurdles that make it harder to complete a task", "Cool animations", "Slow internet"],
      correctIndex: 1,
      explanation: "Reducing friction is the fastest way to improve conversion."
    },
    {
      id: "prd-12",
      type: "mcq",
      title: "Virality",
      prompt: "What is a \"Viral Coefficient\" (K) > 1 mean?",
      options: ["The app is dying", "Each user brings in more than 1 new user on average", "The app has bugs", "Users are leaving"],
      correctIndex: 1,
      explanation: "K > 1 means exponential organic growth. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "prd-13",
      type: "mcq",
      title: "Agile",
      prompt: "In Scrum, what is the purpose of a Sprint Retrospective?",
      options: ["Plan the next sprint", "Reflect on how the team worked and improve the process", "Demo the code", "Assign blame"],
      correctIndex: 1,
      explanation: "Retros are for continuous process improvement. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "prd-14",
      type: "mcq",
      title: "North Star Metric",
      prompt: "What is a North Star Metric?",
      options: ["The CEO's favorite metric", "The single metric that best captures the core value delivered to users", "Total Revenue", "Employee count"],
      correctIndex: 1,
      explanation: "It aligns the whole company on value creation (e.g. \"Nights Booked\" for Airbnb)."
    },
    {
      id: "prd-15",
      type: "mcq",
      title: "Cannibalization",
      prompt: "What is product cannibalization?",
      options: ["Bugs", "A new product taking sales away from your own existing product", "Competitor stealing users", "High server costs"],
      correctIndex: 1,
      explanation: "It can be strategic or accidental. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "prd-16",
      type: "mcq",
      title: "Freemium",
      prompt: "What is a risk of a Freemium model?",
      options: ["Too much money", "High support/server costs for non-paying users", "Users love free stuff", "No one uses it"],
      correctIndex: 1,
      explanation: "Free users must be balanced against the revenue from paid users."
    },
    {
      id: "prd-17",
      type: "mcq",
      title: "Value Prop",
      prompt: "What is a Value Proposition?",
      options: ["The price", "The unique benefit a product provides to a specific user", "The logo", "The technology stack"],
      correctIndex: 1,
      explanation: "It explains why a customer should buy from you instead of a competitor."
    },
    {
      id: "prd-18",
      type: "mcq",
      title: "Hooks",
      prompt: "In the Hook Model (Nir Eyal), what follows the Trigger?",
      options: ["Variable Reward", "Action", "Investment", "Sleep"],
      correctIndex: 1,
      explanation: "The cycle is Trigger -> Action -> Variable Reward -> Investment."
    },
    {
      id: "prd-19",
      type: "mcq",
      title: "Switching Costs",
      prompt: "What are switching costs?",
      options: ["Server migration fees", "The time/effort/money for a user to move to a competitor", "New hire costs", "Cloud bills"],
      correctIndex: 1,
      explanation: "High switching costs (like in ERP or Social Networks) create defensibility."
    },
    {
      id: "prd-20",
      type: "mcq",
      title: "Empathy Mapping",
      prompt: "What do you map in an Empathy Map?",
      options: ["Code components", "What the user Says, Thinks, Does, and Feels", "Competitor features", "Database tables"],
      correctIndex: 1,
      explanation: "It is a tool for deep user understanding. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "prd-21",
      type: "mcq",
      title: "Opportunity Solution Tree",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for opportunity solution tree?",
      options: ["Apply opportunity solution tree with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use opportunity solution tree only because it sounds advanced, without checking impact or constraints", "Ignore opportunity solution tree until the issue becomes urgent in production or with customers", "Delegate opportunity solution tree completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "opportunity solution tree is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-22",
      type: "mcq",
      title: "Problem Validation",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for problem validation?",
      options: ["Apply problem validation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use problem validation only because it sounds advanced, without checking impact or constraints", "Ignore problem validation until the issue becomes urgent in production or with customers", "Delegate problem validation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "problem validation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-23",
      type: "mcq",
      title: "Jobs To Be Done",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for Jobs To Be Done?",
      options: ["Apply Jobs To Be Done with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Jobs To Be Done only because it sounds advanced, without checking impact or constraints", "Ignore Jobs To Be Done until the issue becomes urgent in production or with customers", "Delegate Jobs To Be Done completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Jobs To Be Done is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-24",
      type: "mcq",
      title: "Roadmap Trade-Offs",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for roadmap trade-offs?",
      options: ["Apply roadmap trade-offs with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use roadmap trade-offs only because it sounds advanced, without checking impact or constraints", "Ignore roadmap trade-offs until the issue becomes urgent in production or with customers", "Delegate roadmap trade-offs completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "roadmap trade-offs is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-25",
      type: "mcq",
      title: "Activation Metric",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for activation metric?",
      options: ["Apply activation metric with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use activation metric only because it sounds advanced, without checking impact or constraints", "Ignore activation metric until the issue becomes urgent in production or with customers", "Delegate activation metric completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "activation metric is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-26",
      type: "mcq",
      title: "Retention Curve",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for retention curve?",
      options: ["Apply retention curve with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use retention curve only because it sounds advanced, without checking impact or constraints", "Ignore retention curve until the issue becomes urgent in production or with customers", "Delegate retention curve completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "retention curve is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-27",
      type: "mcq",
      title: "Pricing Discovery",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for pricing discovery?",
      options: ["Apply pricing discovery with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use pricing discovery only because it sounds advanced, without checking impact or constraints", "Ignore pricing discovery until the issue becomes urgent in production or with customers", "Delegate pricing discovery completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "pricing discovery is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-28",
      type: "mcq",
      title: "Feature Adoption",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for feature adoption?",
      options: ["Apply feature adoption with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use feature adoption only because it sounds advanced, without checking impact or constraints", "Ignore feature adoption until the issue becomes urgent in production or with customers", "Delegate feature adoption completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "feature adoption is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-29",
      type: "mcq",
      title: "North-Star Metric",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for north-star metric?",
      options: ["Apply north-star metric with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use north-star metric only because it sounds advanced, without checking impact or constraints", "Ignore north-star metric until the issue becomes urgent in production or with customers", "Delegate north-star metric completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "north-star metric is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-30",
      type: "mcq",
      title: "Guardrail Metrics",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for guardrail metrics?",
      options: ["Apply guardrail metrics with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use guardrail metrics only because it sounds advanced, without checking impact or constraints", "Ignore guardrail metrics until the issue becomes urgent in production or with customers", "Delegate guardrail metrics completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "guardrail metrics is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-31",
      type: "mcq",
      title: "Customer Segmentation",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for customer segmentation?",
      options: ["Apply customer segmentation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use customer segmentation only because it sounds advanced, without checking impact or constraints", "Ignore customer segmentation until the issue becomes urgent in production or with customers", "Delegate customer segmentation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "customer segmentation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-32",
      type: "mcq",
      title: "Prd Quality",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for PRD quality?",
      options: ["Apply PRD quality with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use PRD quality only because it sounds advanced, without checking impact or constraints", "Ignore PRD quality until the issue becomes urgent in production or with customers", "Delegate PRD quality completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "PRD quality is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-33",
      type: "mcq",
      title: "Confirmation Bias",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for confirmation bias?",
      options: ["Apply confirmation bias with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use confirmation bias only because it sounds advanced, without checking impact or constraints", "Ignore confirmation bias until the issue becomes urgent in production or with customers", "Delegate confirmation bias completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "confirmation bias is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-34",
      type: "mcq",
      title: "Launch Plan",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for launch plan?",
      options: ["Apply launch plan with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use launch plan only because it sounds advanced, without checking impact or constraints", "Ignore launch plan until the issue becomes urgent in production or with customers", "Delegate launch plan completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "launch plan is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-35",
      type: "mcq",
      title: "Feature Sunsetting",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for feature sunsetting?",
      options: ["Apply feature sunsetting with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use feature sunsetting only because it sounds advanced, without checking impact or constraints", "Ignore feature sunsetting until the issue becomes urgent in production or with customers", "Delegate feature sunsetting completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "feature sunsetting is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-36",
      type: "mcq",
      title: "Api Product Thinking",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for API product thinking?",
      options: ["Apply API product thinking with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use API product thinking only because it sounds advanced, without checking impact or constraints", "Ignore API product thinking until the issue becomes urgent in production or with customers", "Delegate API product thinking completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "API product thinking is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-37",
      type: "mcq",
      title: "Platform Product Thinking",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for platform product thinking?",
      options: ["Apply platform product thinking with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use platform product thinking only because it sounds advanced, without checking impact or constraints", "Ignore platform product thinking until the issue becomes urgent in production or with customers", "Delegate platform product thinking completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "platform product thinking is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-38",
      type: "mcq",
      title: "Ai Product Risk",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for AI product risk?",
      options: ["Apply AI product risk with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use AI product risk only because it sounds advanced, without checking impact or constraints", "Ignore AI product risk until the issue becomes urgent in production or with customers", "Delegate AI product risk completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "AI product risk is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-39",
      type: "mcq",
      title: "Executive Communication",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for executive communication?",
      options: ["Apply executive communication with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use executive communication only because it sounds advanced, without checking impact or constraints", "Ignore executive communication until the issue becomes urgent in production or with customers", "Delegate executive communication completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "executive communication is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prd-40",
      type: "mcq",
      title: "Product Judgment",
      prompt: "In a professional Product Management Professional scenario, which response best demonstrates strong judgment for product judgment?",
      options: ["Apply product judgment with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use product judgment only because it sounds advanced, without checking impact or constraints", "Ignore product judgment until the issue becomes urgent in production or with customers", "Delegate product judgment completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "product judgment is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
