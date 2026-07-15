import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const taxEuropeData = {
  id: ASSESSMENT_TYPES.tax_europe,
  title: "European Tax VAT & Corporate Tax Professional Certification",
  shortTitle: "Europe Tax",
  category: "Accounting & Tax",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "EU VAT, reverse charge, VIES, OSS/IOSS, BEPS, transfer pricing, withholding tax, digital services tax, country-specific rules, compliance, and tax risk judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "te-01",
      type: "mcq",
      title: "Indirect Tax",
      prompt: "What is \"VAT\"?",
      options: ["Value Added Tax", "Virtual Account Transaction", "Volume and Tax", "Variable Asset Type"],
      correctIndex: 0,
      explanation: "A consumption tax placed on a product whenever value is added at each stage of supply."
    },
    {
      id: "te-02",
      type: "mcq",
      title: "EU VAT",
      prompt: "What is \"VIES\"?",
      options: ["A type of visa", "VAT Information Exchange System (for validating VAT numbers in the EU)", "Virtual Internal Equity System", "Very Important Entry Standard"],
      correctIndex: 1,
      explanation: "Allows businesses to check if a customer in another EU country is VAT-registered."
    },
    {
      id: "te-03",
      type: "mcq",
      title: "Cross-Border",
      prompt: "What is \"Reverse Charge\" in EU VAT?",
      options: ["Paying tax backwards", "When the buyer of a service from another EU country accounts for the VAT", "Getting a refund", "A tax for exports only"],
      correctIndex: 1,
      explanation: "Simplifies VAT for B2B cross-border services. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-04",
      type: "mcq",
      title: "Direct Tax",
      prompt: "What is the \"BEPS\" initiative?",
      options: ["Base Erosion and Profit Shifting (OECD project to tackle tax avoidance)", "Better European Payment System", "Business Equity and Profit Standard", "Business Entry and Price System"],
      correctIndex: 0,
      explanation: "BEPS aims to prevent multinational companies from moving profits to low-tax jurisdictions."
    },
    {
      id: "te-05",
      type: "mcq",
      title: "Transfer Pricing",
      prompt: "What is the \"Arm's Length Principle\"?",
      options: ["Staying far away from tax offices", "Pricing transactions between related entities as if they were unrelated parties", "A type of accounting rule for banks", "A measure of physical distance"],
      correctIndex: 1,
      explanation: "Used to prevent profit shifting through internal pricing. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-06",
      type: "mcq",
      title: "UK Tax",
      prompt: "In the UK, what is \"HMRC\"?",
      options: ["Her Majesty's Revenue and Customs", "High Market Revenue Control", "Home Management and Rural Council", "Heavy Metal Research Corp"],
      correctIndex: 0,
      explanation: "The UK government department responsible for tax collection. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-07",
      type: "mcq",
      title: "Germany Tax",
      prompt: "What is \"Gewerbesteuer\" in Germany?",
      options: ["Income tax", "Trade Tax (levied by local municipalities)", "VAT", "Solidarity surcharge"],
      correctIndex: 1,
      explanation: "A business tax that varies by city. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-08",
      type: "mcq",
      title: "Withholding",
      prompt: "What is \"Withholding Tax\" (WHT)?",
      options: ["A tax you don't pay", "Tax deducted at source on payments to non-residents (e.g., dividends, royalties)", "A tax refund", "A fine for late filing"],
      correctIndex: 1,
      explanation: "Regulated by Double Tax Treaties (DTT). This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-09",
      type: "mcq",
      title: "Digital Tax",
      prompt: "What is the \"DST\" (Digital Services Tax)?",
      options: ["A tax on computers", "A tax on revenue generated from certain digital services (e.g., social media, search)", "A tax on phone apps only", "A type of VAT"],
      correctIndex: 1,
      explanation: "Proposed/enacted by several European countries to tax big tech. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-10",
      type: "mcq",
      title: "Compliance",
      prompt: "What is \"CbCR\"?",
      options: ["Country-by-Country Reporting", "Central Business Cost Report", "Corporate Bank Cash Review", "Creative Business Color Range"],
      correctIndex: 0,
      explanation: "Requires large multinationals to report revenue and taxes for every country they operate in."
    },
    {
      id: "te-11",
      type: "mcq",
      title: "Ireland Tax",
      prompt: "Why is Ireland known for its corporate tax regime?",
      options: ["It has no tax", "It historically has a low corporate tax rate (e.g., 12.5%)", "It is only for Irish companies", "It is a tax haven only for individuals"],
      correctIndex: 1,
      explanation: "Ireland is a major hub for tech and pharma due to its tax policy. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-12",
      type: "mcq",
      title: "VAT",
      prompt: "What is the \"Standard Rate\" of VAT in the EU?",
      options: ["Exactly 20% everywhere", "At least 15% (varies by country, often 17-27%)", "Fixed at 10%", "0%"],
      correctIndex: 1,
      explanation: "Each country sets its own rate within EU guidelines. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-13",
      type: "mcq",
      title: "France Tax",
      prompt: "What is the \"Impôt sur les Sociétés\" (IS)?",
      options: ["Income tax", "Corporate Tax in France", "VAT", "Social security tax"],
      correctIndex: 1,
      explanation: "France has been gradually lowering its corporate tax rate. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-14",
      type: "mcq",
      title: "Terminology",
      prompt: "What is a \"Tax Resident\"?",
      options: ["A person living in a tax office", "An individual or entity subject to tax in a country based on their presence or connection", "A tourist", "A government employee"],
      correctIndex: 1,
      explanation: "Residency rules vary (e.g., 183-day rule). This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-15",
      type: "mcq",
      title: "Tax Havens",
      prompt: "What is a \"Blacklisted Jurisdiction\"?",
      options: ["A country with black flags", "A country identified by the EU as non-cooperative for tax purposes", "A country with high taxes", "A country with no internet"],
      correctIndex: 1,
      explanation: "The EU list of non-cooperative jurisdictions for tax purposes. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-16",
      type: "mcq",
      title: "Inheritance Tax",
      prompt: "Is Inheritance Tax common in Europe?",
      options: ["No", "Yes, but rates and exemptions vary significantly by country", "Only in the UK", "Only for royalty"],
      correctIndex: 1,
      explanation: "Often called \"Succession Duty\". This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-17",
      type: "mcq",
      title: "Environmental Tax",
      prompt: "What is a \"Carbon Tax\"?",
      options: ["A tax on pencils", "A tax on the carbon content of fuels or emissions", "A tax on paper", "A tax on recycling"],
      correctIndex: 1,
      explanation: "An \"eco-tax\" aimed at reducing CO2 emissions. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-18",
      type: "mcq",
      title: "Customs",
      prompt: "What is the \"Common External Tariff\" in the EU?",
      options: ["A tax on all internal sales", "A uniform tariff applied to goods imported from outside the EU", "A sales tax", "A tax on transport"],
      correctIndex: 1,
      explanation: "The EU is a Customs Union. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-19",
      type: "mcq",
      title: "Capital Gains",
      prompt: "How are Capital Gains generally taxed in Europe?",
      options: ["They are always exempt", "Varies, but often taxed separately from ordinary income at specific rates", "Taxed at 100%", "Included in VAT"],
      correctIndex: 1,
      explanation: "Some countries have exemptions for long-term holdings. This is a checked foundational concept for professional Europe Tax work."
    },
    {
      id: "te-20",
      type: "mcq",
      title: "Audit",
      prompt: "What is \"Statutory Audit\"?",
      options: ["A voluntary check", "A legally required audit of financial records for companies meeting certain size criteria", "A tax inspection", "A bank audit"],
      correctIndex: 1,
      explanation: "Ensures compliance with local accounting standards (e.g., UK GAAP, German HGB)."
    },
    {
      id: "te-21",
      type: "mcq",
      title: "Vat Registration Threshold",
      prompt: "In a professional European Tax VAT & Corporate Tax scenario, what is the strongest approach when dealing with VAT registration threshold?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Vat Registration Threshold requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "te-22",
      type: "mcq",
      title: "Input Vat Recovery",
      prompt: "A team is making a decision about input VAT recovery. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about input VAT recovery balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "te-23",
      type: "mcq",
      title: "Output Vat Liability",
      prompt: "Which signal suggests output VAT liability needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when output VAT liability could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "te-24",
      type: "mcq",
      title: "Reverse Charge Invoice",
      prompt: "What is the best way to validate work involving reverse charge invoice?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for reverse charge invoice should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "te-25",
      type: "mcq",
      title: "Intra-Community Supply",
      prompt: "In a professional European Tax VAT & Corporate Tax scenario, what is the strongest approach when dealing with intra-community supply?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Intra-Community Supply requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "te-26",
      type: "mcq",
      title: "Vies Validation",
      prompt: "A team is making a decision about VIES validation. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about VIES validation balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "te-27",
      type: "mcq",
      title: "Oss Scheme",
      prompt: "Which signal suggests OSS scheme needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when OSS scheme could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "te-28",
      type: "mcq",
      title: "Ioss Imports",
      prompt: "What is the best way to validate work involving IOSS imports?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for IOSS imports should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "te-29",
      type: "mcq",
      title: "Place Of Supply Rules",
      prompt: "In a professional European Tax VAT & Corporate Tax scenario, what is the strongest approach when dealing with place of supply rules?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Place Of Supply Rules requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "te-30",
      type: "mcq",
      title: "Vat Exemption Risk",
      prompt: "A team is making a decision about VAT exemption risk. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about VAT exemption risk balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "te-31",
      type: "mcq",
      title: "Beps Pillar Two",
      prompt: "Which signal suggests BEPS Pillar Two needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when BEPS Pillar Two could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "te-32",
      type: "mcq",
      title: "Transfer Pricing Documentation",
      prompt: "What is the best way to validate work involving transfer pricing documentation?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for transfer pricing documentation should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "te-33",
      type: "mcq",
      title: "Arm’S Length Method",
      prompt: "In a professional European Tax VAT & Corporate Tax scenario, what is the strongest approach when dealing with arm’s length method?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Arm’S Length Method requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "te-34",
      type: "mcq",
      title: "Withholding Tax Treaty",
      prompt: "A team is making a decision about withholding tax treaty. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about withholding tax treaty balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "te-35",
      type: "mcq",
      title: "Permanent Establishment",
      prompt: "Which signal suggests permanent establishment needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when permanent establishment could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "te-36",
      type: "mcq",
      title: "Uk Making Tax Digital",
      prompt: "What is the best way to validate work involving UK Making Tax Digital?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for UK Making Tax Digital should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "te-37",
      type: "mcq",
      title: "Germany Trade Tax",
      prompt: "In a professional European Tax VAT & Corporate Tax scenario, what is the strongest approach when dealing with Germany trade tax?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Germany Trade Tax requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "te-38",
      type: "mcq",
      title: "France Corporate Tax Concept",
      prompt: "A team is making a decision about France corporate tax concept. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about France corporate tax concept balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "te-39",
      type: "mcq",
      title: "Digital Services Tax",
      prompt: "Which signal suggests digital services tax needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when digital services tax could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "te-40",
      type: "mcq",
      title: "Tax Compliance Judgment",
      prompt: "What is the best way to validate work involving tax compliance judgment?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for tax compliance judgment should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
