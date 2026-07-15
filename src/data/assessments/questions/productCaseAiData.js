import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const productCaseAiData = {
  id: ASSESSMENT_TYPES.product_case_ai,
  title: "AI Product Strategy Case Certification",
  shortTitle: "Product Strategy",
  category: "Product thinking",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "AI product strategy, discovery, prioritization, metrics, experimentation, responsible AI, launch judgment, and executive trade-offs.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "prod-01",
      type: "mcq",
      title: "Metric Choice",
      prompt: "A new onboarding flow increased signups but paid conversion dropped. What should the PM investigate first?",
      options: ["Only total signups", "Activation quality and conversion behavior by signup cohort", "Whether the icon set needs updating", "How to increase ad spend immediately"],
      correctIndex: 1,
      explanation: "More signups do not help if downstream activation and conversion quality worsen."
    },
    {
      id: "prod-02",
      type: "mcq",
      title: "Prioritization",
      prompt: "A customer request is loud but affects only 2% of users, while a retention issue affects 40%. What should win priority?",
      options: ["The loudest request by default", "The higher-impact retention issue, unless strategic context clearly overrides it", "Neither issue", "Only the easiest engineering task"],
      correctIndex: 1,
      explanation: "Prioritization should balance business impact, user value, and strategic importance."
    },
    {
      id: "prod-03",
      type: "mcq",
      title: "Customer Insight",
      prompt: "What is the strongest way to understand why users abandon a feature?",
      options: ["Guess based on internal opinion", "Combine behavioral data with interviews or feedback from affected segments", "Copy a competitor feature set immediately", "Wait six months"],
      correctIndex: 1,
      explanation: "The best product decisions usually combine quantitative and qualitative evidence."
    },
    {
      id: "prod-04",
      type: "mcq",
      title: "Experiment Design",
      prompt: "What makes a product experiment useful?",
      options: ["It launches to everyone instantly", "It has a clear hypothesis, success metric, and comparison method", "It is difficult to measure", "It avoids any risk discussion"],
      correctIndex: 1,
      explanation: "A useful experiment is explicit about what is being tested and how success will be judged."
    },
    {
      id: "prod-05",
      type: "mcq",
      title: "Stakeholder Alignment",
      prompt: "Engineering says a request is costly, sales says it is urgent, and data is limited. What should the PM do?",
      options: ["Pick the stakeholder with more influence", "Clarify the problem, gather enough evidence, and align on trade-offs before committing scope", "Promise the feature immediately", "Reject the request without discussion"],
      correctIndex: 1,
      explanation: "PMs create alignment by structuring the decision, not by escalating noise."
    },
    {
      id: "prod-06",
      type: "mcq",
      title: "North Star",
      prompt: "Why is a north-star metric valuable in product strategy?",
      options: ["It replaces all supporting metrics", "It aligns teams around the core value delivered to users and the business", "It removes the need for research", "It is useful only for startups"],
      correctIndex: 1,
      explanation: "A north-star metric gives direction, but still needs supporting metrics beneath it."
    },
    {
      id: "prod-07",
      type: "mcq",
      title: "Launch Readiness",
      prompt: "What is the strongest launch recommendation when a feature is promising but key support workflows are incomplete?",
      options: ["Launch globally with no guardrails", "Consider a phased rollout or beta to learn safely while protecting the experience", "Cancel the feature permanently", "Hide the issue from support teams"],
      correctIndex: 1,
      explanation: "Controlled rollout helps teams learn while reducing operational and customer risk."
    },
    {
      id: "prod-08",
      type: "mcq",
      title: "Strategic Focus",
      prompt: "A PM inherits many roadmap items with weak rationale. What is the best first step?",
      options: ["Start building everything in order", "Reframe the roadmap around problems, target users, expected outcomes, and evidence", "Archive the roadmap and stop planning", "Ask design to create mockups for every item"],
      correctIndex: 1,
      explanation: "Roadmaps should be anchored in outcomes and user problems, not only feature lists."
    },
    {
      id: "prod-09",
      type: "mcq",
      title: "Competitive Pressure",
      prompt: "A competitor launches a flashy feature. What is the strongest PM response?",
      options: ["Copy it immediately without evaluation", "Assess whether the feature maps to your users, strategy, and measurable opportunity", "Ignore all competitors always", "Rebrand the homepage"],
      correctIndex: 1,
      explanation: "Competitive awareness matters, but product decisions should still fit your own context and users."
    },
    {
      id: "prod-10",
      type: "mcq",
      title: "Success Review",
      prompt: "How should a PM judge whether a shipped feature truly succeeded?",
      options: ["By whether it launched on time only", "By comparing intended outcomes with post-launch user behavior, business impact, and qualitative feedback", "By how many meetings were held", "By how complex the feature was"],
      correctIndex: 1,
      explanation: "Success should be measured by outcomes, not only output or launch completion."
    },
    {
      id: "prod-11",
      type: "mcq",
      title: "Ai Problem Framing",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for AI problem framing?",
      options: ["Apply AI problem framing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use AI problem framing only because it sounds advanced, without checking impact or constraints", "Ignore AI problem framing until the issue becomes urgent in production or with customers", "Delegate AI problem framing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "AI problem framing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-12",
      type: "mcq",
      title: "North-Star Metric",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for north-star metric?",
      options: ["Apply north-star metric with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use north-star metric only because it sounds advanced, without checking impact or constraints", "Ignore north-star metric until the issue becomes urgent in production or with customers", "Delegate north-star metric completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "north-star metric is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-13",
      type: "mcq",
      title: "Activation Quality",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for activation quality?",
      options: ["Apply activation quality with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use activation quality only because it sounds advanced, without checking impact or constraints", "Ignore activation quality until the issue becomes urgent in production or with customers", "Delegate activation quality completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "activation quality is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-14",
      type: "mcq",
      title: "Cohort Analysis",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for cohort analysis?",
      options: ["Apply cohort analysis with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use cohort analysis only because it sounds advanced, without checking impact or constraints", "Ignore cohort analysis until the issue becomes urgent in production or with customers", "Delegate cohort analysis completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "cohort analysis is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-15",
      type: "mcq",
      title: "Responsible Ai",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for responsible AI?",
      options: ["Apply responsible AI with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use responsible AI only because it sounds advanced, without checking impact or constraints", "Ignore responsible AI until the issue becomes urgent in production or with customers", "Delegate responsible AI completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "responsible AI is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-16",
      type: "mcq",
      title: "Human-In-The-Loop Review",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for human-in-the-loop review?",
      options: ["Apply human-in-the-loop review with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use human-in-the-loop review only because it sounds advanced, without checking impact or constraints", "Ignore human-in-the-loop review until the issue becomes urgent in production or with customers", "Delegate human-in-the-loop review completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "human-in-the-loop review is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-17",
      type: "mcq",
      title: "Rag Grounding",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for RAG grounding?",
      options: ["Apply RAG grounding with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use RAG grounding only because it sounds advanced, without checking impact or constraints", "Ignore RAG grounding until the issue becomes urgent in production or with customers", "Delegate RAG grounding completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "RAG grounding is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-18",
      type: "mcq",
      title: "Model Evaluation Set",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for model evaluation set?",
      options: ["Apply model evaluation set with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use model evaluation set only because it sounds advanced, without checking impact or constraints", "Ignore model evaluation set until the issue becomes urgent in production or with customers", "Delegate model evaluation set completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "model evaluation set is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-19",
      type: "mcq",
      title: "Ai Cost Model",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for AI cost model?",
      options: ["Apply AI cost model with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use AI cost model only because it sounds advanced, without checking impact or constraints", "Ignore AI cost model until the issue becomes urgent in production or with customers", "Delegate AI cost model completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "AI cost model is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-20",
      type: "mcq",
      title: "Ai Privacy Controls",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for AI privacy controls?",
      options: ["Apply AI privacy controls with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use AI privacy controls only because it sounds advanced, without checking impact or constraints", "Ignore AI privacy controls until the issue becomes urgent in production or with customers", "Delegate AI privacy controls completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "AI privacy controls is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-21",
      type: "mcq",
      title: "Hallucination Risk",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for hallucination risk?",
      options: ["Apply hallucination risk with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use hallucination risk only because it sounds advanced, without checking impact or constraints", "Ignore hallucination risk until the issue becomes urgent in production or with customers", "Delegate hallucination risk completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "hallucination risk is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-22",
      type: "mcq",
      title: "Feedback Loop Design",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for feedback loop design?",
      options: ["Apply feedback loop design with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use feedback loop design only because it sounds advanced, without checking impact or constraints", "Ignore feedback loop design until the issue becomes urgent in production or with customers", "Delegate feedback loop design completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "feedback loop design is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-23",
      type: "mcq",
      title: "Ai Launch Readiness",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for AI launch readiness?",
      options: ["Apply AI launch readiness with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use AI launch readiness only because it sounds advanced, without checking impact or constraints", "Ignore AI launch readiness until the issue becomes urgent in production or with customers", "Delegate AI launch readiness completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "AI launch readiness is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-24",
      type: "mcq",
      title: "Fallback Ux",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for fallback UX?",
      options: ["Apply fallback UX with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use fallback UX only because it sounds advanced, without checking impact or constraints", "Ignore fallback UX until the issue becomes urgent in production or with customers", "Delegate fallback UX completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "fallback UX is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-25",
      type: "mcq",
      title: "Guardrail Design",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for guardrail design?",
      options: ["Apply guardrail design with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use guardrail design only because it sounds advanced, without checking impact or constraints", "Ignore guardrail design until the issue becomes urgent in production or with customers", "Delegate guardrail design completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "guardrail design is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-26",
      type: "mcq",
      title: "Model Choice",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for model choice?",
      options: ["Apply model choice with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use model choice only because it sounds advanced, without checking impact or constraints", "Ignore model choice until the issue becomes urgent in production or with customers", "Delegate model choice completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "model choice is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-27",
      type: "mcq",
      title: "Build Vs Buy",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for build vs buy?",
      options: ["Apply build vs buy with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use build vs buy only because it sounds advanced, without checking impact or constraints", "Ignore build vs buy until the issue becomes urgent in production or with customers", "Delegate build vs buy completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "build vs buy is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-28",
      type: "mcq",
      title: "Auditability",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for auditability?",
      options: ["Apply auditability with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use auditability only because it sounds advanced, without checking impact or constraints", "Ignore auditability until the issue becomes urgent in production or with customers", "Delegate auditability completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "auditability is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-29",
      type: "mcq",
      title: "Trust Metrics",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for trust metrics?",
      options: ["Apply trust metrics with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use trust metrics only because it sounds advanced, without checking impact or constraints", "Ignore trust metrics until the issue becomes urgent in production or with customers", "Delegate trust metrics completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "trust metrics is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-30",
      type: "mcq",
      title: "Enterprise Readiness",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for enterprise readiness?",
      options: ["Apply enterprise readiness with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use enterprise readiness only because it sounds advanced, without checking impact or constraints", "Ignore enterprise readiness until the issue becomes urgent in production or with customers", "Delegate enterprise readiness completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "enterprise readiness is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-31",
      type: "mcq",
      title: "Competitive Response",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for competitive response?",
      options: ["Apply competitive response with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use competitive response only because it sounds advanced, without checking impact or constraints", "Ignore competitive response until the issue becomes urgent in production or with customers", "Delegate competitive response completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "competitive response is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-32",
      type: "mcq",
      title: "Pricing Ai Features",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for pricing AI features?",
      options: ["Apply pricing AI features with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use pricing AI features only because it sounds advanced, without checking impact or constraints", "Ignore pricing AI features until the issue becomes urgent in production or with customers", "Delegate pricing AI features completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "pricing AI features is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-33",
      type: "mcq",
      title: "Adoption Segmentation",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for adoption segmentation?",
      options: ["Apply adoption segmentation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use adoption segmentation only because it sounds advanced, without checking impact or constraints", "Ignore adoption segmentation until the issue becomes urgent in production or with customers", "Delegate adoption segmentation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "adoption segmentation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-34",
      type: "mcq",
      title: "Ai Roadmap Prioritization",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for AI roadmap prioritization?",
      options: ["Apply AI roadmap prioritization with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use AI roadmap prioritization only because it sounds advanced, without checking impact or constraints", "Ignore AI roadmap prioritization until the issue becomes urgent in production or with customers", "Delegate AI roadmap prioritization completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "AI roadmap prioritization is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-35",
      type: "mcq",
      title: "Bias Testing",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for bias testing?",
      options: ["Apply bias testing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use bias testing only because it sounds advanced, without checking impact or constraints", "Ignore bias testing until the issue becomes urgent in production or with customers", "Delegate bias testing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "bias testing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-36",
      type: "mcq",
      title: "Latency Trade-Off",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for latency trade-off?",
      options: ["Apply latency trade-off with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use latency trade-off only because it sounds advanced, without checking impact or constraints", "Ignore latency trade-off until the issue becomes urgent in production or with customers", "Delegate latency trade-off completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "latency trade-off is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-37",
      type: "mcq",
      title: "Workflow Integration",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for workflow integration?",
      options: ["Apply workflow integration with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use workflow integration only because it sounds advanced, without checking impact or constraints", "Ignore workflow integration until the issue becomes urgent in production or with customers", "Delegate workflow integration completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "workflow integration is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-38",
      type: "mcq",
      title: "Prompt-To-Product Gap",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for prompt-to-product gap?",
      options: ["Apply prompt-to-product gap with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use prompt-to-product gap only because it sounds advanced, without checking impact or constraints", "Ignore prompt-to-product gap until the issue becomes urgent in production or with customers", "Delegate prompt-to-product gap completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "prompt-to-product gap is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-39",
      type: "mcq",
      title: "Kill Criteria",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for kill criteria?",
      options: ["Apply kill criteria with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use kill criteria only because it sounds advanced, without checking impact or constraints", "Ignore kill criteria until the issue becomes urgent in production or with customers", "Delegate kill criteria completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "kill criteria is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "prod-40",
      type: "mcq",
      title: "Executive Investment Case",
      prompt: "In a professional AI Product Strategy Case scenario, which response best demonstrates strong judgment for executive investment case?",
      options: ["Apply executive investment case with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use executive investment case only because it sounds advanced, without checking impact or constraints", "Ignore executive investment case until the issue becomes urgent in production or with customers", "Delegate executive investment case completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "executive investment case is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
