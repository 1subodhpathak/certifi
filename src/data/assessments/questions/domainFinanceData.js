import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainFinanceData = {
  id: ASSESSMENT_TYPES.domain_finance,
  title: "Finance Industry Domain Professional Certification",
  shortTitle: "Finance Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional finance industry assessment covering banking, capital markets, financial instruments, risk, regulation, investment management, monetary policy, lending, liquidity, compliance, and performance metrics.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "df-01",
      type: "mcq",
      title: "Commercial bank",
      prompt: "In the Finance Industry domain, what does \"Commercial bank\" mean?",
      options: [
        "financial contract whose value depends on an underlying asset, rate, index, or event",
        "financial institution that accepts deposits and makes loans, earning revenue largely through interest spread and fees",
        "global banking standards for capital, liquidity, and risk management",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 1,
      explanation: "Financial institution that accepts deposits and makes loans, earning revenue largely through interest spread and fees."
    },
    {
      id: "df-02",
      type: "mcq",
      title: "Net interest margin",
      prompt: "In the Finance Industry domain, what does \"Net interest margin\" mean?",
      options: [
        "analysis of financial resilience under adverse scenarios",
        "risk that an entity cannot meet obligations without unacceptable loss",
        "difference between interest income from assets and interest expense on funding, relative to earning assets",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 2,
      explanation: "Difference between interest income from assets and interest expense on funding, relative to earning assets."
    },
    {
      id: "df-03",
      type: "mcq",
      title: "IPO",
      prompt: "In the Finance Industry domain, what does \"IPO\" mean?",
      options: [
        "standardized contract obligating parties to buy or sell an asset at a future date",
        "initial public offering, when a private company first sells shares to the public",
        "difference between interest income from assets and interest expense on funding, relative to earning assets",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Initial public offering, when a private company first sells shares to the public."
    },
    {
      id: "df-04",
      type: "mcq",
      title: "Bond",
      prompt: "In the Finance Industry domain, what does \"Bond\" mean?",
      options: [
        "analysis of financial resilience under adverse scenarios",
        "fixed-income instrument representing debt owed by an issuer to investors",
        "A social media caption format",
        "initial public offering, when a private company first sells shares to the public",
      ],
      correctIndex: 1,
      explanation: "Fixed-income instrument representing debt owed by an issuer to investors."
    },
    {
      id: "df-05",
      type: "mcq",
      title: "Equity",
      prompt: "In the Finance Industry domain, what does \"Equity\" mean?",
      options: [
        "risk of loss from failed processes, systems, people, or external events",
        "ownership interest in a company, commonly represented by shares",
        "professional management of investments on behalf of clients",
        "A customer service greeting script",
      ],
      correctIndex: 1,
      explanation: "Ownership interest in a company, commonly represented by shares."
    },
    {
      id: "df-06",
      type: "mcq",
      title: "Derivative",
      prompt: "In the Finance Industry domain, what does \"Derivative\" mean?",
      options: [
        "An office administration policy only",
        "US Securities and Exchange Commission regulating securities markets and investor protection",
        "financial contract whose value depends on an underlying asset, rate, index, or event",
        "risk that a borrower or counterparty fails to meet obligations",
      ],
      correctIndex: 2,
      explanation: "Financial contract whose value depends on an underlying asset, rate, index, or event."
    },
    {
      id: "df-07",
      type: "mcq",
      title: "Option",
      prompt: "In the Finance Industry domain, what does \"Option\" mean?",
      options: [
        "analysis of financial resilience under adverse scenarios",
        "excess return relative to a benchmark after considering risk or strategy",
        "derivative giving the right, not obligation, to buy or sell an asset at a specified price",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Derivative giving the right, not obligation, to buy or sell an asset at a specified price."
    },
    {
      id: "df-08",
      type: "mcq",
      title: "Future",
      prompt: "In the Finance Industry domain, what does \"Future\" mean?",
      options: [
        "standardized contract obligating parties to buy or sell an asset at a future date",
        "excess return relative to a benchmark after considering risk or strategy",
        "A manual workaround with no control value",
        "relationship between interest rates and maturities for debt instruments",
      ],
      correctIndex: 0,
      explanation: "Standardized contract obligating parties to buy or sell an asset at a future date."
    },
    {
      id: "df-09",
      type: "mcq",
      title: "Swap",
      prompt: "In the Finance Industry domain, what does \"Swap\" mean?",
      options: [
        "risk of loss from failed processes, systems, people, or external events",
        "mergers and acquisitions involving combination, sale, or purchase of companies or assets",
        "derivative contract exchanging cash flows, commonly interest-rate or currency-related",
        "A visual branding element only",
      ],
      correctIndex: 2,
      explanation: "Derivative contract exchanging cash flows, commonly interest-rate or currency-related."
    },
    {
      id: "df-10",
      type: "mcq",
      title: "SEC",
      prompt: "In the Finance Industry domain, what does \"SEC\" mean?",
      options: [
        "US Securities and Exchange Commission regulating securities markets and investor protection",
        "investment fund using varied strategies, often with more flexibility and risk",
        "derivative contract exchanging cash flows, commonly interest-rate or currency-related",
        "A meeting agenda template",
      ],
      correctIndex: 0,
      explanation: "US Securities and Exchange Commission regulating securities markets and investor protection."
    },
    {
      id: "df-11",
      type: "mcq",
      title: "Central bank",
      prompt: "In the Finance Industry domain, what does \"Central bank\" mean?",
      options: [
        "institution managing currency, money supply, interest rates, and financial stability",
        "derivative contract exchanging cash flows, commonly interest-rate or currency-related",
        "difference between interest income from assets and interest expense on funding, relative to earning assets",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 0,
      explanation: "Institution managing currency, money supply, interest rates, and financial stability."
    },
    {
      id: "df-12",
      type: "mcq",
      title: "Monetary policy",
      prompt: "In the Finance Industry domain, what does \"Monetary policy\" mean?",
      options: [
        "know your customer identity and due diligence process",
        "mergers and acquisitions involving combination, sale, or purchase of companies or assets",
        "central bank actions influencing interest rates, liquidity, and inflation",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 2,
      explanation: "Central bank actions influencing interest rates, liquidity, and inflation."
    },
    {
      id: "df-13",
      type: "mcq",
      title: "M&A",
      prompt: "In the Finance Industry domain, what does \"M&A\" mean?",
      options: [
        "A temporary file naming convention only",
        "central bank actions influencing interest rates, liquidity, and inflation",
        "mergers and acquisitions involving combination, sale, or purchase of companies or assets",
        "professional management of investments on behalf of clients",
      ],
      correctIndex: 2,
      explanation: "Mergers and acquisitions involving combination, sale, or purchase of companies or assets."
    },
    {
      id: "df-14",
      type: "mcq",
      title: "Liquidity risk",
      prompt: "In the Finance Industry domain, what does \"Liquidity risk\" mean?",
      options: [
        "A social media caption format",
        "risk that a borrower or counterparty fails to meet obligations",
        "difference between interest income from assets and interest expense on funding, relative to earning assets",
        "risk that an entity cannot meet obligations without unacceptable loss",
      ],
      correctIndex: 3,
      explanation: "Risk that an entity cannot meet obligations without unacceptable loss."
    },
    {
      id: "df-15",
      type: "mcq",
      title: "Credit risk",
      prompt: "In the Finance Industry domain, what does \"Credit risk\" mean?",
      options: [
        "A customer service greeting script",
        "know your customer identity and due diligence process",
        "financial contract whose value depends on an underlying asset, rate, index, or event",
        "risk that a borrower or counterparty fails to meet obligations",
      ],
      correctIndex: 3,
      explanation: "Risk that a borrower or counterparty fails to meet obligations."
    },
    {
      id: "df-16",
      type: "mcq",
      title: "Market risk",
      prompt: "In the Finance Industry domain, what does \"Market risk\" mean?",
      options: [
        "difference between interest income from assets and interest expense on funding, relative to earning assets",
        "risk of loss from market price movements such as rates, FX, equities, or commodities",
        "An office administration policy only",
        "investment fund using varied strategies, often with more flexibility and risk",
      ],
      correctIndex: 1,
      explanation: "Risk of loss from market price movements such as rates, FX, equities, or commodities."
    },
    {
      id: "df-17",
      type: "mcq",
      title: "Operational risk",
      prompt: "In the Finance Industry domain, what does \"Operational risk\" mean?",
      options: [
        "A random sales slogan with no technical meaning",
        "measure of sensitivity to market movement",
        "professional management of investments on behalf of clients",
        "risk of loss from failed processes, systems, people, or external events",
      ],
      correctIndex: 3,
      explanation: "Risk of loss from failed processes, systems, people, or external events."
    },
    {
      id: "df-18",
      type: "mcq",
      title: "Alpha",
      prompt: "In the Finance Industry domain, what does \"Alpha\" mean?",
      options: [
        "A manual workaround with no control value",
        "excess return relative to a benchmark after considering risk or strategy",
        "standardized contract obligating parties to buy or sell an asset at a future date",
        "derivative giving the right, not obligation, to buy or sell an asset at a specified price",
      ],
      correctIndex: 1,
      explanation: "Excess return relative to a benchmark after considering risk or strategy."
    },
    {
      id: "df-19",
      type: "mcq",
      title: "Beta",
      prompt: "In the Finance Industry domain, what does \"Beta\" mean?",
      options: [
        "difference between interest income from assets and interest expense on funding, relative to earning assets",
        "measure of sensitivity to market movement",
        "know your customer identity and due diligence process",
        "A visual branding element only",
      ],
      correctIndex: 1,
      explanation: "Measure of sensitivity to market movement."
    },
    {
      id: "df-20",
      type: "mcq",
      title: "KYC",
      prompt: "In the Finance Industry domain, what does \"KYC\" mean?",
      options: [
        "A meeting agenda template",
        "investment fund using varied strategies, often with more flexibility and risk",
        "ownership interest in a company, commonly represented by shares",
        "know your customer identity and due diligence process",
      ],
      correctIndex: 3,
      explanation: "Know your customer identity and due diligence process."
    },
    {
      id: "df-21",
      type: "mcq",
      title: "AML",
      prompt: "In the Finance Industry domain, what does \"AML\" mean?",
      options: [
        "ownership interest in a company, commonly represented by shares",
        "A payroll-only process unrelated to this domain",
        "anti-money laundering compliance controls",
        "excess return relative to a benchmark after considering risk or strategy",
      ],
      correctIndex: 2,
      explanation: "Anti-money laundering compliance controls."
    },
    {
      id: "df-22",
      type: "mcq",
      title: "Basel framework",
      prompt: "In the Finance Industry domain, what does \"Basel framework\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "mergers and acquisitions involving combination, sale, or purchase of companies or assets",
        "ownership interest in a company, commonly represented by shares",
        "global banking standards for capital, liquidity, and risk management",
      ],
      correctIndex: 3,
      explanation: "Global banking standards for capital, liquidity, and risk management."
    },
    {
      id: "df-23",
      type: "mcq",
      title: "Capital adequacy",
      prompt: "In the Finance Industry domain, what does \"Capital adequacy\" mean?",
      options: [
        "sufficiency of bank capital relative to risk-weighted assets",
        "central bank actions influencing interest rates, liquidity, and inflation",
        "global banking standards for capital, liquidity, and risk management",
        "A temporary file naming convention only",
      ],
      correctIndex: 0,
      explanation: "Sufficiency of bank capital relative to risk-weighted assets."
    },
    {
      id: "df-24",
      type: "mcq",
      title: "Stress testing",
      prompt: "In the Finance Industry domain, what does \"Stress testing\" mean?",
      options: [
        "A social media caption format",
        "initial public offering, when a private company first sells shares to the public",
        "anti-money laundering compliance controls",
        "analysis of financial resilience under adverse scenarios",
      ],
      correctIndex: 3,
      explanation: "Analysis of financial resilience under adverse scenarios."
    },
    {
      id: "df-25",
      type: "mcq",
      title: "VaR",
      prompt: "In the Finance Industry domain, what does \"VaR\" mean?",
      options: [
        "value at risk, estimated potential loss over a time horizon at a confidence level",
        "A customer service greeting script",
        "financial institution that accepts deposits and makes loans, earning revenue largely through interest spread and fees",
        "sufficiency of bank capital relative to risk-weighted assets",
      ],
      correctIndex: 0,
      explanation: "Value at risk, estimated potential loss over a time horizon at a confidence level."
    },
    {
      id: "df-26",
      type: "mcq",
      title: "Duration",
      prompt: "In the Finance Industry domain, what does \"Duration\" mean?",
      options: [
        "measure of bond price sensitivity to interest rate changes",
        "An office administration policy only",
        "relationship between interest rates and maturities for debt instruments",
        "risk that an entity cannot meet obligations without unacceptable loss",
      ],
      correctIndex: 0,
      explanation: "Measure of bond price sensitivity to interest rate changes."
    },
    {
      id: "df-27",
      type: "mcq",
      title: "Yield curve",
      prompt: "In the Finance Industry domain, what does \"Yield curve\" mean?",
      options: [
        "A random sales slogan with no technical meaning",
        "relationship between interest rates and maturities for debt instruments",
        "difference between interest income from assets and interest expense on funding, relative to earning assets",
        "central bank actions influencing interest rates, liquidity, and inflation",
      ],
      correctIndex: 1,
      explanation: "Relationship between interest rates and maturities for debt instruments."
    },
    {
      id: "df-28",
      type: "mcq",
      title: "Hedge fund",
      prompt: "In the Finance Industry domain, what does \"Hedge fund\" mean?",
      options: [
        "A manual workaround with no control value",
        "institution managing currency, money supply, interest rates, and financial stability",
        "risk that an entity cannot meet obligations without unacceptable loss",
        "investment fund using varied strategies, often with more flexibility and risk",
      ],
      correctIndex: 3,
      explanation: "Investment fund using varied strategies, often with more flexibility and risk."
    },
    {
      id: "df-29",
      type: "mcq",
      title: "Asset management",
      prompt: "In the Finance Industry domain, what does \"Asset management\" mean?",
      options: [
        "A visual branding element only",
        "ownership interest in a company, commonly represented by shares",
        "standardized contract obligating parties to buy or sell an asset at a future date",
        "professional management of investments on behalf of clients",
      ],
      correctIndex: 3,
      explanation: "Professional management of investments on behalf of clients."
    },
    {
      id: "df-30",
      type: "mcq",
      title: "Custody",
      prompt: "In the Finance Industry domain, what does \"Custody\" mean?",
      options: [
        "A meeting agenda template",
        "safekeeping and administration of financial assets",
        "fixed-income instrument representing debt owed by an issuer to investors",
        "anti-money laundering compliance controls",
      ],
      correctIndex: 1,
      explanation: "Safekeeping and administration of financial assets."
    },
    {
      id: "df-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A bank's net interest margin falls. What should be analyzed?",
      options: [
        "Only branch paint",
        "Loan yield, deposit cost, funding mix, rate changes, asset mix, and competition",
        "Only employee uniforms",
        "Only ATM screen color",
      ],
      correctIndex: 1,
      explanation: "NIM depends on asset yield and funding cost dynamics."
    },
    {
      id: "df-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A portfolio loses value when interest rates rise. Which risk is likely relevant?",
      options: [
        "Only HR risk",
        "Only operational risk",
        "Only office risk",
        "Interest-rate risk and bond duration exposure",
      ],
      correctIndex: 3,
      explanation: "Bond prices are sensitive to rate changes, especially with longer duration."
    },
    {
      id: "df-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A lender sees rising defaults in one segment. What should risk teams inspect?",
      options: [
        "Only customer birthday month",
        "Only logo position",
        "Credit policy, borrower profile, vintage, macro factors, underwriting, and collections performance",
        "Only branch music",
      ],
      correctIndex: 2,
      explanation: "Credit losses require portfolio segmentation and driver analysis."
    },
    {
      id: "df-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A trading desk has unusual losses after system downtime. What risk category is most relevant?",
      options: [
        "Brand awareness",
        "Operational risk",
        "Payroll accounting only",
        "Office facilities",
      ],
      correctIndex: 1,
      explanation: "System failures and process breakdowns are operational risk events."
    },
    {
      id: "df-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An investment strategy claims high returns with no risk. What should be questioned?",
      options: [
        "Only manager title",
        "Risk exposure, benchmark, drawdowns, leverage, liquidity, and data validity",
        "Only brochure length",
        "Only font style",
      ],
      correctIndex: 1,
      explanation: "All returns should be evaluated relative to risk and evidence."
    },
    {
      id: "df-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A bank customer transaction triggers suspicious activity patterns. What process matters?",
      options: [
        "AML monitoring, investigation, due diligence, and regulatory reporting if required",
        "Sales discounting",
        "Factory inspection",
        "Media buying",
      ],
      correctIndex: 0,
      explanation: "Suspicious financial activity should be reviewed under AML processes."
    },
    {
      id: "df-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A company plans an IPO. What must be prepared?",
      options: [
        "Only a new slogan",
        "Only internal chat",
        "Only office furniture",
        "Financial disclosures, governance, regulatory filings, investor story, underwriting, and controls",
      ],
      correctIndex: 3,
      explanation: "IPO readiness requires financial, regulatory, governance, and market preparation."
    },
    {
      id: "df-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A bank faces a stress scenario with deposit outflows. What should be evaluated?",
      options: [
        "Only ad campaign reach",
        "Liquidity buffer, funding sources, asset liquidity, contingency plans, and regulatory ratios",
        "Only number of desks",
        "Only email signature",
      ],
      correctIndex: 1,
      explanation: "Liquidity stress testing evaluates ability to meet obligations."
    },
    {
      id: "df-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A derivative exposure is poorly understood. What should be reviewed?",
      options: [
        "Only contract font",
        "Only trader seniority",
        "Underlying risk, valuation, counterparty exposure, collateral, liquidity, and scenario sensitivity",
        "Only office location",
      ],
      correctIndex: 2,
      explanation: "Derivatives require risk, valuation, and counterparty analysis."
    },
    {
      id: "df-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A finance dashboard shows revenue but not risk-adjusted return. What is missing?",
      options: [
        "Only export format",
        "Only chart colors",
        "Only title length",
        "Capital usage, risk, losses, volatility, liquidity, and benchmark context",
      ],
      correctIndex: 3,
      explanation: "Finance performance should be evaluated with risk and capital context."
    }
  ],
};
