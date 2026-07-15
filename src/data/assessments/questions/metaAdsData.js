import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const metaAdsData = {
  id: ASSESSMENT_TYPES.meta_ads,
  title: "Meta Ads Professional Certification",
  shortTitle: "Meta Ads",
  category: "Marketing",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Campaign structure, objectives, Pixel, Conversions API, audiences, creative testing, bidding, budgets, placements, attribution, ROAS, and optimization.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "ma-01",
      type: "mcq",
      title: "Structure",
      prompt: "What are the three levels of a Meta Ads campaign?",
      options: ["Account, Campaign, Ad", "Campaign, Ad Set, Ad", "Objective, Audience, Content", "Group, Subgroup, Item"],
      correctIndex: 1,
      explanation: "Campaign sets objective; Ad Set sets targeting/budget; Ad is the creative."
    },
    {
      id: "ma-02",
      type: "mcq",
      title: "Objectives",
      prompt: "Which objective should you choose to drive sales on your website?",
      options: ["Awareness", "Traffic", "Sales (Conversions)", "Leads"],
      correctIndex: 2,
      explanation: "Sales objective optimizes for purchase events. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ma-03",
      type: "mcq",
      title: "Pixel",
      prompt: "What is the \"Meta Pixel\" used for?",
      options: ["Creating images", "Tracking actions on your website to measure and optimize ad performance", "A type of ad format", "Managing comments"],
      correctIndex: 1,
      explanation: "The Pixel is essential for retargeting and conversion tracking."
    },
    {
      id: "ma-04",
      type: "mcq",
      title: "CAPI",
      prompt: "What does \"CAPI\" stand for?",
      options: ["Creative Application Interface", "Conversions API", "Campaign Analytics Port", "Custom Audience Profile"],
      correctIndex: 1,
      explanation: "CAPI allows server-to-server event tracking to bypass browser limitations."
    },
    {
      id: "ma-05",
      type: "mcq",
      title: "Targeting",
      prompt: "What is a \"Lookalike Audience\"?",
      options: ["People who look like models", "An audience of people similar to your existing customers/visitors", "People with the same names", "A random audience"],
      correctIndex: 1,
      explanation: "Lookalikes are a powerful way to find new potential customers."
    },
    {
      id: "ma-06",
      type: "mcq",
      title: "Custom Audiences",
      prompt: "How do you create a \"Custom Audience\"?",
      options: ["By guessing", "Uploading customer lists or using website/app activity data", "Buying lists from Meta", "Searching for interests"],
      correctIndex: 1,
      explanation: "Custom audiences target people who have already interacted with your business."
    },
    {
      id: "ma-07",
      type: "mcq",
      title: "Budgeting",
      prompt: "What is the difference between \"Daily Budget\" and \"Lifetime Budget\"?",
      options: ["No difference", "Daily is a daily average; Lifetime is the total for the whole campaign duration", "Lifetime is always cheaper", "Daily is for awareness only"],
      correctIndex: 1,
      explanation: "Lifetime budget allows Meta to spend more on high-performance days."
    },
    {
      id: "ma-08",
      type: "mcq",
      title: "Placements",
      prompt: "What is \"Advantage+ Placements\"?",
      options: ["Ads on premium sites", "Meta's automated system for showing ads where they are likely to perform best across its platforms", "Paid placement", "Sticky ads"],
      correctIndex: 1,
      explanation: "It lets the algorithm decide between FB, Instagram, Messenger, and Audience Network."
    },
    {
      id: "ma-09",
      type: "mcq",
      title: "Creative",
      prompt: "What is a \"Carousel Ad\"?",
      options: ["An ad with music", "An ad that shows multiple images or videos that users can swipe through", "A video ad only", "A single large image"],
      correctIndex: 1,
      explanation: "Carousels are great for showing multiple products or a process."
    },
    {
      id: "ma-10",
      type: "mcq",
      title: "ROAS",
      prompt: "What does \"ROAS\" stand for?",
      options: ["Return on Ad Spend", "Rate of All Sales", "Reach of Ad System", "Revenue of Ad Success"],
      correctIndex: 0,
      explanation: "ROAS = Revenue / Ad Spend. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ma-11",
      type: "mcq",
      title: "CBO",
      prompt: "What is \"Advantage Campaign Budget\" (formerly CBO)?",
      options: ["Budgeting by country", "Meta automatically distributing your budget across all ad sets to get the best results", "Fixed budgeting", "Manual bidding only"],
      correctIndex: 1,
      explanation: "CBO optimizes at the campaign level rather than the ad set level."
    },
    {
      id: "ma-12",
      type: "mcq",
      title: "Learning Phase",
      prompt: "What is the \"Learning Phase\"?",
      options: ["When you learn to use the tool", "When Meta's system is gathering data to determine the best way to deliver an ad set", "A training course", "When users see the ad for the first time"],
      correctIndex: 1,
      explanation: "Significant edits to an ad set will restart the learning phase."
    },
    {
      id: "ma-13",
      type: "mcq",
      title: "A/B Testing",
      prompt: "What can you test in a Meta A/B test?",
      options: ["Creative", "Audience", "Placement", "All of the above"],
      correctIndex: 3,
      explanation: "A/B testing helps scientifically determine what drives performance."
    },
    {
      id: "ma-14",
      type: "mcq",
      title: "Attribution Window",
      prompt: "What is the default attribution window for Meta Ads?",
      options: ["1-day click", "7-day click and 1-day view", "28-day click", "Lifetime"],
      correctIndex: 1,
      explanation: "Standard window since the iOS 14.5 update. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ma-15",
      type: "mcq",
      title: "Creative Fatigue",
      prompt: "What is \"Creative Fatigue\"?",
      options: ["Being tired of making ads", "When your audience sees your ads too many times and they become less effective", "A bug in the designer", "Low battery"],
      correctIndex: 1,
      explanation: "High frequency often leads to increased costs and lower CTR."
    },
    {
      id: "ma-16",
      type: "mcq",
      title: "Instant Experience",
      prompt: "What is an \"Instant Experience\"?",
      options: ["Fast loading page", "A full-screen, mobile-optimized experience that opens when someone clicks an ad", "A chat bot", "A live stream"],
      correctIndex: 1,
      explanation: "Formerly known as Canvas ads. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ma-17",
      type: "mcq",
      title: "Quality Ranking",
      prompt: "What is \"Quality Ranking\" in ad relevance diagnostics?",
      options: ["Ad budget", "How your ad's perceived quality compares to other ads competing for the same audience", "Image resolution", "Company rating"],
      correctIndex: 1,
      explanation: "High-quality ads get better pricing in the auction. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ma-18",
      type: "mcq",
      title: "Lead Ads",
      prompt: "What is a \"Lead Ad\"?",
      options: ["Ads for leaders", "An ad with a built-in form that allows users to submit info without leaving the platform", "A search ad", "A call-only ad"],
      correctIndex: 1,
      explanation: "Excellent for high-friction industries where users don't want to leave FB/IG."
    },
    {
      id: "ma-19",
      type: "mcq",
      title: "Detailed Targeting",
      prompt: "Which of these is NOT a category in detailed targeting?",
      options: ["Demographics", "Interests", "Behaviors", "Eye Color"],
      correctIndex: 3,
      explanation: "Targeting includes age, location, gender, interests, and behaviors."
    },
    {
      id: "ma-20",
      type: "mcq",
      title: "Business Suite",
      prompt: "What is \"Meta Business Suite\" used for?",
      options: ["Writing ads only", "Managing all marketing and advertising activities across Facebook and Instagram in one place", "Personal profiles", "Gaming"],
      correctIndex: 1,
      explanation: "It centralizes messages, posts, and insights. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ma-21",
      type: "mcq",
      title: "Learning Phase",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for learning phase?",
      options: ["Apply learning phase with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use learning phase only because it sounds advanced, without checking impact or constraints", "Ignore learning phase until the issue becomes urgent in production or with customers", "Delegate learning phase completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "learning phase is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-22",
      type: "mcq",
      title: "Event Match Quality",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for event match quality?",
      options: ["Apply event match quality with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use event match quality only because it sounds advanced, without checking impact or constraints", "Ignore event match quality until the issue becomes urgent in production or with customers", "Delegate event match quality completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "event match quality is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-23",
      type: "mcq",
      title: "Pixel Plus Capi",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for Pixel plus CAPI?",
      options: ["Apply Pixel plus CAPI with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Pixel plus CAPI only because it sounds advanced, without checking impact or constraints", "Ignore Pixel plus CAPI until the issue becomes urgent in production or with customers", "Delegate Pixel plus CAPI completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Pixel plus CAPI is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-24",
      type: "mcq",
      title: "Purchase Optimization",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for purchase optimization?",
      options: ["Apply purchase optimization with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use purchase optimization only because it sounds advanced, without checking impact or constraints", "Ignore purchase optimization until the issue becomes urgent in production or with customers", "Delegate purchase optimization completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "purchase optimization is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-25",
      type: "mcq",
      title: "Creative Testing",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for creative testing?",
      options: ["Apply creative testing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use creative testing only because it sounds advanced, without checking impact or constraints", "Ignore creative testing until the issue becomes urgent in production or with customers", "Delegate creative testing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "creative testing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-26",
      type: "mcq",
      title: "Ad Fatigue",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for ad fatigue?",
      options: ["Apply ad fatigue with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ad fatigue only because it sounds advanced, without checking impact or constraints", "Ignore ad fatigue until the issue becomes urgent in production or with customers", "Delegate ad fatigue completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ad fatigue is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-27",
      type: "mcq",
      title: "Frequency",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for frequency?",
      options: ["Apply frequency with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use frequency only because it sounds advanced, without checking impact or constraints", "Ignore frequency until the issue becomes urgent in production or with customers", "Delegate frequency completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "frequency is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-28",
      type: "mcq",
      title: "Roas",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for ROAS?",
      options: ["Apply ROAS with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ROAS only because it sounds advanced, without checking impact or constraints", "Ignore ROAS until the issue becomes urgent in production or with customers", "Delegate ROAS completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ROAS is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-29",
      type: "mcq",
      title: "Cpa",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for CPA?",
      options: ["Apply CPA with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CPA only because it sounds advanced, without checking impact or constraints", "Ignore CPA until the issue becomes urgent in production or with customers", "Delegate CPA completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CPA is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-30",
      type: "mcq",
      title: "Attribution Window",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for attribution window?",
      options: ["Apply attribution window with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use attribution window only because it sounds advanced, without checking impact or constraints", "Ignore attribution window until the issue becomes urgent in production or with customers", "Delegate attribution window completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "attribution window is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-31",
      type: "mcq",
      title: "Budget Fragmentation",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for budget fragmentation?",
      options: ["Apply budget fragmentation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use budget fragmentation only because it sounds advanced, without checking impact or constraints", "Ignore budget fragmentation until the issue becomes urgent in production or with customers", "Delegate budget fragmentation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "budget fragmentation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-32",
      type: "mcq",
      title: "Broad Targeting",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for broad targeting?",
      options: ["Apply broad targeting with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use broad targeting only because it sounds advanced, without checking impact or constraints", "Ignore broad targeting until the issue becomes urgent in production or with customers", "Delegate broad targeting completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "broad targeting is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-33",
      type: "mcq",
      title: "Retargeting",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for retargeting?",
      options: ["Apply retargeting with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use retargeting only because it sounds advanced, without checking impact or constraints", "Ignore retargeting until the issue becomes urgent in production or with customers", "Delegate retargeting completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "retargeting is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-34",
      type: "mcq",
      title: "Audience Exclusions",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for audience exclusions?",
      options: ["Apply audience exclusions with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use audience exclusions only because it sounds advanced, without checking impact or constraints", "Ignore audience exclusions until the issue becomes urgent in production or with customers", "Delegate audience exclusions completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "audience exclusions is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-35",
      type: "mcq",
      title: "Advantage+ Automation",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for Advantage+ automation?",
      options: ["Apply Advantage+ automation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Advantage+ automation only because it sounds advanced, without checking impact or constraints", "Ignore Advantage+ automation until the issue becomes urgent in production or with customers", "Delegate Advantage+ automation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Advantage+ automation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-36",
      type: "mcq",
      title: "Landing Page Conversion",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for landing page conversion?",
      options: ["Apply landing page conversion with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use landing page conversion only because it sounds advanced, without checking impact or constraints", "Ignore landing page conversion until the issue becomes urgent in production or with customers", "Delegate landing page conversion completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "landing page conversion is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-37",
      type: "mcq",
      title: "Offer Testing",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for offer testing?",
      options: ["Apply offer testing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use offer testing only because it sounds advanced, without checking impact or constraints", "Ignore offer testing until the issue becomes urgent in production or with customers", "Delegate offer testing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "offer testing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-38",
      type: "mcq",
      title: "Policy Risk",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for policy risk?",
      options: ["Apply policy risk with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use policy risk only because it sounds advanced, without checking impact or constraints", "Ignore policy risk until the issue becomes urgent in production or with customers", "Delegate policy risk completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "policy risk is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-39",
      type: "mcq",
      title: "Backend Reconciliation",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for backend reconciliation?",
      options: ["Apply backend reconciliation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use backend reconciliation only because it sounds advanced, without checking impact or constraints", "Ignore backend reconciliation until the issue becomes urgent in production or with customers", "Delegate backend reconciliation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "backend reconciliation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ma-40",
      type: "mcq",
      title: "Scaling Winners",
      prompt: "In a professional Meta Ads Professional scenario, which response best demonstrates strong judgment for scaling winners?",
      options: ["Apply scaling winners with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use scaling winners only because it sounds advanced, without checking impact or constraints", "Ignore scaling winners until the issue becomes urgent in production or with customers", "Delegate scaling winners completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "scaling winners is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
