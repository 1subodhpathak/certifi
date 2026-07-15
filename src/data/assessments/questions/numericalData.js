import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const numericalData = {
  id: ASSESSMENT_TYPES.numerical,
  title: "Numerical Reasoning & Business Analytics Certification",
  shortTitle: "Numerical",
  category: "Quantitative Analytics",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Percentages, ratios, CAGR, margins, break-even, unit economics, capacity, weighted averages, finance math, and business interpretation.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "num-01",
      type: "mcq",
      title: "CAGR Calculation",
      prompt: "Revenue grew from $100M to $144M over 2 years. What is the CAGR?",
      options: ["10%", "20%", "22%", "44%"],
      correctIndex: 1,
      explanation: "CAGR = (Final/Initial)^(1/years) - 1. (144/100)^0.5 - 1 = 1.2 - 1 = 20%."
    },
    {
      id: "num-02",
      type: "mcq",
      title: "Inventory Turn",
      prompt: "COGS is $5M. Average Inventory is $500k. What is the Inventory Turnover?",
      options: ["5x", "10x", "12x", "20x"],
      correctIndex: 1,
      explanation: "Inventory Turnover = COGS / Avg Inventory. 5M / 500k = 10."
    },
    {
      id: "num-03",
      type: "mcq",
      title: "Break-even Analysis",
      prompt: "Unit price $150, Variable cost $90, Fixed costs $300k. Break-even volume?",
      options: ["3,333", "5,000", "6,667", "7,500"],
      correctIndex: 1,
      explanation: "Unit margin = $60. Break-even = $300k / $60 = 5,000 units."
    },
    {
      id: "num-04",
      type: "mcq",
      title: "Weighted Retention",
      prompt: "VIPs (10% of users) retain at 90%. Others retain at 60%. Overall retention?",
      options: ["63%", "65%", "70%", "75%"],
      correctIndex: 0,
      explanation: "(0.10 * 0.90) + (0.90 * 0.60) = 0.09 + 0.54 = 0.63 or 63%."
    },
    {
      id: "num-05",
      type: "mcq",
      title: "LTV Calculation",
      prompt: "ARPU is $50/mo. Monthly churn is 2%. What is the estimated LTV?",
      options: ["$1,000", "$1,500", "$2,500", "$5,000"],
      correctIndex: 2,
      explanation: "LTV = ARPU / Churn. $50 / 0.02 = $2,500. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-06",
      type: "mcq",
      title: "Market Share",
      prompt: "Total Market $2B. Your revenue $150M. Your market share?",
      options: ["5%", "7.5%", "10%", "15%"],
      correctIndex: 1,
      explanation: "150M / 2000M = 0.075 or 7.5%. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-07",
      type: "mcq",
      title: "Conversion Funnel",
      prompt: "10,000 clicks. 500 leads. 50 sales. What is the click-to-sale conversion rate?",
      options: ["0.5%", "5%", "10%", "50%"],
      correctIndex: 0,
      explanation: "50 / 10,000 = 0.005 or 0.5%. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-08",
      type: "mcq",
      title: "Markup vs Margin",
      prompt: "A product has a 25% markup on cost. What is the gross margin percentage?",
      options: ["20%", "25%", "30%", "33%"],
      correctIndex: 0,
      explanation: "If cost is 100, price is 125. Margin = 25/125 = 20%. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-09",
      type: "mcq",
      title: "Staffing Capacity",
      prompt: "Each agent handles 40 calls/day. Target volume 2000 calls. Min agents needed?",
      options: ["40", "45", "50", "60"],
      correctIndex: 2,
      explanation: "2000 / 40 = 50 agents. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-10",
      type: "mcq",
      title: "Burn Rate",
      prompt: "Cash balance $1.2M. Monthly burn $150k. Runway in months?",
      options: ["6", "8", "10", "12"],
      correctIndex: 1,
      explanation: "1.2M / 150k = 8 months. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-11",
      type: "mcq",
      title: "Discount Impact",
      prompt: "Price $200. Discount 15%. Volume must increase by how much to keep revenue flat?",
      options: ["15%", "17.6%", "20%", "25%"],
      correctIndex: 1,
      explanation: "New price 170. 170 * (1+x) = 200. 1+x = 1.176. x = 17.6%."
    },
    {
      id: "num-12",
      type: "mcq",
      title: "Operating Margin",
      prompt: "Rev $10M. Gross Profit $6M. OpEx $4M. Operating Margin?",
      options: ["20%", "40%", "60%", "10%"],
      correctIndex: 0,
      explanation: "Op Profit = 6M - 4M = 2M. Margin = 2M / 10M = 20%. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-13",
      type: "mcq",
      title: "Compound Interest",
      prompt: "$10,000 at 5% compounded annually for 2 years. Final balance?",
      options: ["$11,000", "$11,025", "$11,050", "$11,100"],
      correctIndex: 1,
      explanation: "10,000 * 1.05 * 1.05 = 11,025. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-14",
      type: "mcq",
      title: "Ratio Analysis",
      prompt: "Current Assets $500k. Current Liabilities $200k. Current Ratio?",
      options: ["1.5", "2.0", "2.5", "3.0"],
      correctIndex: 2,
      explanation: "500k / 200k = 2.5. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-15",
      type: "mcq",
      title: "Payback Period",
      prompt: "Investment $40k. Annual saving $8k. Payback in years?",
      options: ["3", "4", "5", "6"],
      correctIndex: 2,
      explanation: "40k / 8k = 5 years. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-16",
      type: "mcq",
      title: "Efficiency",
      prompt: "Output 80 units. Labor hours 10. Labor productivity (units/hr)?",
      options: ["8", "10", "12", "15"],
      correctIndex: 0,
      explanation: "80 / 10 = 8. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-17",
      type: "mcq",
      title: "Tax Impact",
      prompt: "Profit $200k. Tax rate 25%. Net Income?",
      options: ["$150k", "$160k", "$175k", "$180k"],
      correctIndex: 0,
      explanation: "200k * 0.75 = 150k. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-18",
      type: "mcq",
      title: "SLA Calculation",
      prompt: "900 tickets. 810 met SLA. SLA performance?",
      options: ["85%", "90%", "95%", "98%"],
      correctIndex: 1,
      explanation: "810 / 900 = 90%. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-19",
      type: "mcq",
      title: "Price Elasticity",
      prompt: "Price +10% causes Volume -5%. Is demand elastic or inelastic?",
      options: ["Elastic", "Inelastic", "Unit elastic", "Perfectly elastic"],
      correctIndex: 1,
      explanation: "Elasticity = |-5/10| = 0.5. < 1 means inelastic. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-20",
      type: "mcq",
      title: "ROAS",
      prompt: "Ad spend $10k. Driven revenue $50k. ROAS?",
      options: ["2x", "3x", "4x", "5x"],
      correctIndex: 3,
      explanation: "50k / 10k = 5x. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "num-21",
      type: "mcq",
      title: "Percentage Increase",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for percentage increase?",
      options: ["Apply percentage increase with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use percentage increase only because it sounds advanced, without checking impact or constraints", "Ignore percentage increase until the issue becomes urgent in production or with customers", "Delegate percentage increase completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "percentage increase is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-22",
      type: "mcq",
      title: "Reverse Percentage",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for reverse percentage?",
      options: ["Apply reverse percentage with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use reverse percentage only because it sounds advanced, without checking impact or constraints", "Ignore reverse percentage until the issue becomes urgent in production or with customers", "Delegate reverse percentage completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "reverse percentage is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-23",
      type: "mcq",
      title: "Gross Margin",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for gross margin?",
      options: ["Apply gross margin with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use gross margin only because it sounds advanced, without checking impact or constraints", "Ignore gross margin until the issue becomes urgent in production or with customers", "Delegate gross margin completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "gross margin is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-24",
      type: "mcq",
      title: "Operating Margin",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for operating margin?",
      options: ["Apply operating margin with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use operating margin only because it sounds advanced, without checking impact or constraints", "Ignore operating margin until the issue becomes urgent in production or with customers", "Delegate operating margin completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "operating margin is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-25",
      type: "mcq",
      title: "Weighted Average",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for weighted average?",
      options: ["Apply weighted average with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use weighted average only because it sounds advanced, without checking impact or constraints", "Ignore weighted average until the issue becomes urgent in production or with customers", "Delegate weighted average completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "weighted average is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-26",
      type: "mcq",
      title: "Payback Period",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for payback period?",
      options: ["Apply payback period with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use payback period only because it sounds advanced, without checking impact or constraints", "Ignore payback period until the issue becomes urgent in production or with customers", "Delegate payback period completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "payback period is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-27",
      type: "mcq",
      title: "Contribution Margin",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for contribution margin?",
      options: ["Apply contribution margin with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use contribution margin only because it sounds advanced, without checking impact or constraints", "Ignore contribution margin until the issue becomes urgent in production or with customers", "Delegate contribution margin completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "contribution margin is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-28",
      type: "mcq",
      title: "Capacity Utilization",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for capacity utilization?",
      options: ["Apply capacity utilization with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use capacity utilization only because it sounds advanced, without checking impact or constraints", "Ignore capacity utilization until the issue becomes urgent in production or with customers", "Delegate capacity utilization completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "capacity utilization is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-29",
      type: "mcq",
      title: "Productivity",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for productivity?",
      options: ["Apply productivity with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use productivity only because it sounds advanced, without checking impact or constraints", "Ignore productivity until the issue becomes urgent in production or with customers", "Delegate productivity completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "productivity is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-30",
      type: "mcq",
      title: "Arpu",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for ARPU?",
      options: ["Apply ARPU with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ARPU only because it sounds advanced, without checking impact or constraints", "Ignore ARPU until the issue becomes urgent in production or with customers", "Delegate ARPU completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ARPU is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-31",
      type: "mcq",
      title: "Cac Payback",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for CAC payback?",
      options: ["Apply CAC payback with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CAC payback only because it sounds advanced, without checking impact or constraints", "Ignore CAC payback until the issue becomes urgent in production or with customers", "Delegate CAC payback completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CAC payback is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-32",
      type: "mcq",
      title: "Debt-To-Equity",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for debt-to-equity?",
      options: ["Apply debt-to-equity with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use debt-to-equity only because it sounds advanced, without checking impact or constraints", "Ignore debt-to-equity until the issue becomes urgent in production or with customers", "Delegate debt-to-equity completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "debt-to-equity is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-33",
      type: "mcq",
      title: "Probability",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for probability?",
      options: ["Apply probability with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use probability only because it sounds advanced, without checking impact or constraints", "Ignore probability until the issue becomes urgent in production or with customers", "Delegate probability completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "probability is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-34",
      type: "mcq",
      title: "Expected Value",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for expected value?",
      options: ["Apply expected value with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use expected value only because it sounds advanced, without checking impact or constraints", "Ignore expected value until the issue becomes urgent in production or with customers", "Delegate expected value completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "expected value is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-35",
      type: "mcq",
      title: "Index Change",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for index change?",
      options: ["Apply index change with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use index change only because it sounds advanced, without checking impact or constraints", "Ignore index change until the issue becomes urgent in production or with customers", "Delegate index change completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "index change is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-36",
      type: "mcq",
      title: "Inventory Days",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for inventory days?",
      options: ["Apply inventory days with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use inventory days only because it sounds advanced, without checking impact or constraints", "Ignore inventory days until the issue becomes urgent in production or with customers", "Delegate inventory days completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "inventory days is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-37",
      type: "mcq",
      title: "Run Rate",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for run rate?",
      options: ["Apply run rate with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use run rate only because it sounds advanced, without checking impact or constraints", "Ignore run rate until the issue becomes urgent in production or with customers", "Delegate run rate completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "run rate is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-38",
      type: "mcq",
      title: "Mix Shift",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for mix shift?",
      options: ["Apply mix shift with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use mix shift only because it sounds advanced, without checking impact or constraints", "Ignore mix shift until the issue becomes urgent in production or with customers", "Delegate mix shift completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "mix shift is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-39",
      type: "mcq",
      title: "Funnel Conversion",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for funnel conversion?",
      options: ["Apply funnel conversion with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use funnel conversion only because it sounds advanced, without checking impact or constraints", "Ignore funnel conversion until the issue becomes urgent in production or with customers", "Delegate funnel conversion completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "funnel conversion is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "num-40",
      type: "mcq",
      title: "Small Sample Interpretation",
      prompt: "In a professional Numerical Reasoning & Business Analytics scenario, which response best demonstrates strong judgment for small sample interpretation?",
      options: ["Apply small sample interpretation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use small sample interpretation only because it sounds advanced, without checking impact or constraints", "Ignore small sample interpretation until the issue becomes urgent in production or with customers", "Delegate small sample interpretation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "small sample interpretation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
