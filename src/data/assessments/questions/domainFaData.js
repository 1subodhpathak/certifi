import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainFaData = {
  id: ASSESSMENT_TYPES.domain_fa,
  title: "Finance & Accounting Domain Professional Certification",
  shortTitle: "F&A Domain",
  category: "Accounting & Tax",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional F&A assessment covering accrual accounting, financial statements, consolidation, intercompany, management reporting, budgeting, costing, tax, controls, close process, and financial analysis.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "fa-01",
      type: "mcq",
      title: "Matching principle",
      prompt: "In the Finance & Accounting domain, what does \"Matching principle\" mean?",
      options: [
        "combining financial statements of parent and subsidiaries while eliminating intercompany activity",
        "A payroll-only process unrelated to this domain",
        "recognizing expenses in the same period as the revenue they help generate",
        "budgeting method where each expense must be justified from a zero base",
      ],
      correctIndex: 2,
      explanation: "Recognizing expenses in the same period as the revenue they help generate."
    },
    {
      id: "fa-02",
      type: "mcq",
      title: "Accrual accounting",
      prompt: "In the Finance & Accounting domain, what does \"Accrual accounting\" mean?",
      options: [
        "actual tax expense as a percentage of pre-tax income after deductions and credits",
        "A design color choice with no operational meaning",
        "recording revenue and expenses when earned or incurred, not only when cash moves",
        "comparison of actual results against budget, forecast, or standard to explain differences",
      ],
      correctIndex: 2,
      explanation: "Recording revenue and expenses when earned or incurred, not only when cash moves."
    },
    {
      id: "fa-03",
      type: "mcq",
      title: "Income statement",
      prompt: "In the Finance & Accounting domain, what does \"Income statement\" mean?",
      options: [
        "current assets minus current liabilities",
        "A temporary file naming convention only",
        "financial statement showing revenue, expenses, and profit over a period",
        "using expected costs for products or activities and analyzing variances against actuals",
      ],
      correctIndex: 2,
      explanation: "Financial statement showing revenue, expenses, and profit over a period."
    },
    {
      id: "fa-04",
      type: "mcq",
      title: "Balance sheet",
      prompt: "In the Finance & Accounting domain, what does \"Balance sheet\" mean?",
      options: [
        "unit accountable for both revenue and costs",
        "process designed to prevent or detect errors, fraud, or reporting misstatement",
        "financial statement showing assets, liabilities, and equity at a point in time",
        "A social media caption format",
      ],
      correctIndex: 2,
      explanation: "Financial statement showing assets, liabilities, and equity at a point in time."
    },
    {
      id: "fa-05",
      type: "mcq",
      title: "Cash flow statement",
      prompt: "In the Finance & Accounting domain, what does \"Cash flow statement\" mean?",
      options: [
        "budgeting method where each expense must be justified from a zero base",
        "statement showing cash inflows and outflows from operating, investing, and financing activities",
        "A customer service greeting script",
        "recording revenue and expenses when earned or incurred, not only when cash moves",
      ],
      correctIndex: 1,
      explanation: "Statement showing cash inflows and outflows from operating, investing, and financing activities."
    },
    {
      id: "fa-06",
      type: "mcq",
      title: "Working capital",
      prompt: "In the Finance & Accounting domain, what does \"Working capital\" mean?",
      options: [
        "updated estimate of future financial performance based on latest data and assumptions",
        "pricing of transactions between related entities for tax and management purposes",
        "An office administration policy only",
        "current assets minus current liabilities",
      ],
      correctIndex: 3,
      explanation: "Current assets minus current liabilities."
    },
    {
      id: "fa-07",
      type: "mcq",
      title: "EBIT",
      prompt: "In the Finance & Accounting domain, what does \"EBIT\" mean?",
      options: [
        "financial statement showing revenue, expenses, and profit over a period",
        "process designed to prevent or detect errors, fraud, or reporting misstatement",
        "earnings before interest and taxes, often used as operating profit measure",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Earnings before interest and taxes, often used as operating profit measure."
    },
    {
      id: "fa-08",
      type: "mcq",
      title: "EBITDA",
      prompt: "In the Finance & Accounting domain, what does \"EBITDA\" mean?",
      options: [
        "A manual workaround with no control value",
        "structured list of accounts used to classify financial transactions",
        "internal financial reporting used for business decision-making",
        "earnings before interest, taxes, depreciation, and amortization",
      ],
      correctIndex: 3,
      explanation: "Earnings before interest, taxes, depreciation, and amortization."
    },
    {
      id: "fa-09",
      type: "mcq",
      title: "Intercompany elimination",
      prompt: "In the Finance & Accounting domain, what does \"Intercompany elimination\" mean?",
      options: [
        "using expected costs for products or activities and analyzing variances against actuals",
        "generally accepted accounting principles used for US financial reporting",
        "removal of transactions between entities under common control during consolidation",
        "A visual branding element only",
      ],
      correctIndex: 2,
      explanation: "Removal of transactions between entities under common control during consolidation."
    },
    {
      id: "fa-10",
      type: "mcq",
      title: "Subsidiary",
      prompt: "In the Finance & Accounting domain, what does \"Subsidiary\" mean?",
      options: [
        "organizational unit responsible for costs but not directly revenue",
        "A meeting agenda template",
        "company controlled by another company, usually a parent entity",
        "process designed to prevent or detect errors, fraud, or reporting misstatement",
      ],
      correctIndex: 2,
      explanation: "Company controlled by another company, usually a parent entity."
    },
    {
      id: "fa-11",
      type: "mcq",
      title: "Consolidation",
      prompt: "In the Finance & Accounting domain, what does \"Consolidation\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "combining financial statements of parent and subsidiaries while eliminating intercompany activity",
        "financial statement showing revenue, expenses, and profit over a period",
        "generally accepted accounting principles used for US financial reporting",
      ],
      correctIndex: 1,
      explanation: "Combining financial statements of parent and subsidiaries while eliminating intercompany activity."
    },
    {
      id: "fa-12",
      type: "mcq",
      title: "IFRS",
      prompt: "In the Finance & Accounting domain, what does \"IFRS\" mean?",
      options: [
        "process of comparing records to identify and resolve differences",
        "A design color choice with no operational meaning",
        "international financial reporting standards used in many countries outside the US",
        "earnings before interest and taxes, often used as operating profit measure",
      ],
      correctIndex: 2,
      explanation: "International financial reporting standards used in many countries outside the US."
    },
    {
      id: "fa-13",
      type: "mcq",
      title: "US GAAP",
      prompt: "In the Finance & Accounting domain, what does \"US GAAP\" mean?",
      options: [
        "using expected costs for products or activities and analyzing variances against actuals",
        "generally accepted accounting principles used for US financial reporting",
        "A temporary file naming convention only",
        "international financial reporting standards used in many countries outside the US",
      ],
      correctIndex: 1,
      explanation: "Generally accepted accounting principles used for US financial reporting."
    },
    {
      id: "fa-14",
      type: "mcq",
      title: "Standard costing",
      prompt: "In the Finance & Accounting domain, what does \"Standard costing\" mean?",
      options: [
        "recording revenue and expenses when earned or incurred, not only when cash moves",
        "internal financial reporting used for business decision-making",
        "using expected costs for products or activities and analyzing variances against actuals",
        "A social media caption format",
      ],
      correctIndex: 2,
      explanation: "Using expected costs for products or activities and analyzing variances against actuals."
    },
    {
      id: "fa-15",
      type: "mcq",
      title: "Variance analysis",
      prompt: "In the Finance & Accounting domain, what does \"Variance analysis\" mean?",
      options: [
        "generally accepted accounting principles used for US financial reporting",
        "comparison of actual results against budget, forecast, or standard to explain differences",
        "financial statement showing revenue, expenses, and profit over a period",
        "A customer service greeting script",
      ],
      correctIndex: 1,
      explanation: "Comparison of actual results against budget, forecast, or standard to explain differences."
    },
    {
      id: "fa-16",
      type: "mcq",
      title: "Zero-based budgeting",
      prompt: "In the Finance & Accounting domain, what does \"Zero-based budgeting\" mean?",
      options: [
        "process designed to prevent or detect errors, fraud, or reporting misstatement",
        "budgeting method where each expense must be justified from a zero base",
        "An office administration policy only",
        "financial statement showing assets, liabilities, and equity at a point in time",
      ],
      correctIndex: 1,
      explanation: "Budgeting method where each expense must be justified from a zero base."
    },
    {
      id: "fa-17",
      type: "mcq",
      title: "Forecast",
      prompt: "In the Finance & Accounting domain, what does \"Forecast\" mean?",
      options: [
        "updated estimate of future financial performance based on latest data and assumptions",
        "earnings before interest, taxes, depreciation, and amortization",
        "international financial reporting standards used in many countries outside the US",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 0,
      explanation: "Updated estimate of future financial performance based on latest data and assumptions."
    },
    {
      id: "fa-18",
      type: "mcq",
      title: "Budget",
      prompt: "In the Finance & Accounting domain, what does \"Budget\" mean?",
      options: [
        "removal of transactions between entities under common control during consolidation",
        "financial plan approved for a future period",
        "recording revenue and expenses when earned or incurred, not only when cash moves",
        "A manual workaround with no control value",
      ],
      correctIndex: 1,
      explanation: "Financial plan approved for a future period."
    },
    {
      id: "fa-19",
      type: "mcq",
      title: "Effective tax rate",
      prompt: "In the Finance & Accounting domain, what does \"Effective tax rate\" mean?",
      options: [
        "comparison of actual results against budget, forecast, or standard to explain differences",
        "unit accountable for both revenue and costs",
        "actual tax expense as a percentage of pre-tax income after deductions and credits",
        "A visual branding element only",
      ],
      correctIndex: 2,
      explanation: "Actual tax expense as a percentage of pre-tax income after deductions and credits."
    },
    {
      id: "fa-20",
      type: "mcq",
      title: "Deferred tax",
      prompt: "In the Finance & Accounting domain, what does \"Deferred tax\" mean?",
      options: [
        "A meeting agenda template",
        "recognizing expenses in the same period as the revenue they help generate",
        "tax accounting difference between book and tax timing of income or expenses",
        "statement showing cash inflows and outflows from operating, investing, and financing activities",
      ],
      correctIndex: 2,
      explanation: "Tax accounting difference between book and tax timing of income or expenses."
    },
    {
      id: "fa-21",
      type: "mcq",
      title: "Cost center",
      prompt: "In the Finance & Accounting domain, what does \"Cost center\" mean?",
      options: [
        "organizational unit responsible for costs but not directly revenue",
        "A payroll-only process unrelated to this domain",
        "recording revenue and expenses when earned or incurred, not only when cash moves",
        "accounting entry recording debits and credits in the general ledger",
      ],
      correctIndex: 0,
      explanation: "Organizational unit responsible for costs but not directly revenue."
    },
    {
      id: "fa-22",
      type: "mcq",
      title: "Profit center",
      prompt: "In the Finance & Accounting domain, what does \"Profit center\" mean?",
      options: [
        "period-end activities to finalize books and prepare reporting",
        "A design color choice with no operational meaning",
        "unit accountable for both revenue and costs",
        "financial statement showing assets, liabilities, and equity at a point in time",
      ],
      correctIndex: 2,
      explanation: "Unit accountable for both revenue and costs."
    },
    {
      id: "fa-23",
      type: "mcq",
      title: "Chart of accounts",
      prompt: "In the Finance & Accounting domain, what does \"Chart of accounts\" mean?",
      options: [
        "structured list of accounts used to classify financial transactions",
        "A temporary file naming convention only",
        "financial plan approved for a future period",
        "unit accountable for both revenue and costs",
      ],
      correctIndex: 0,
      explanation: "Structured list of accounts used to classify financial transactions."
    },
    {
      id: "fa-24",
      type: "mcq",
      title: "Close process",
      prompt: "In the Finance & Accounting domain, what does \"Close process\" mean?",
      options: [
        "A social media caption format",
        "period-end activities to finalize books and prepare reporting",
        "threshold for information that could influence financial statement users",
        "budgeting method where each expense must be justified from a zero base",
      ],
      correctIndex: 1,
      explanation: "Period-end activities to finalize books and prepare reporting."
    },
    {
      id: "fa-25",
      type: "mcq",
      title: "Journal entry",
      prompt: "In the Finance & Accounting domain, what does \"Journal entry\" mean?",
      options: [
        "process designed to prevent or detect errors, fraud, or reporting misstatement",
        "accounting entry recording debits and credits in the general ledger",
        "A customer service greeting script",
        "financial plan approved for a future period",
      ],
      correctIndex: 1,
      explanation: "Accounting entry recording debits and credits in the general ledger."
    },
    {
      id: "fa-26",
      type: "mcq",
      title: "Reconciliation",
      prompt: "In the Finance & Accounting domain, what does \"Reconciliation\" mean?",
      options: [
        "statement showing cash inflows and outflows from operating, investing, and financing activities",
        "process of comparing records to identify and resolve differences",
        "unit accountable for both revenue and costs",
        "An office administration policy only",
      ],
      correctIndex: 1,
      explanation: "Process of comparing records to identify and resolve differences."
    },
    {
      id: "fa-27",
      type: "mcq",
      title: "Internal control",
      prompt: "In the Finance & Accounting domain, what does \"Internal control\" mean?",
      options: [
        "company controlled by another company, usually a parent entity",
        "process designed to prevent or detect errors, fraud, or reporting misstatement",
        "A random sales slogan with no technical meaning",
        "generally accepted accounting principles used for US financial reporting",
      ],
      correctIndex: 1,
      explanation: "Process designed to prevent or detect errors, fraud, or reporting misstatement."
    },
    {
      id: "fa-28",
      type: "mcq",
      title: "Materiality",
      prompt: "In the Finance & Accounting domain, what does \"Materiality\" mean?",
      options: [
        "A manual workaround with no control value",
        "organizational unit responsible for costs but not directly revenue",
        "threshold for information that could influence financial statement users",
        "process designed to prevent or detect errors, fraud, or reporting misstatement",
      ],
      correctIndex: 2,
      explanation: "Threshold for information that could influence financial statement users."
    },
    {
      id: "fa-29",
      type: "mcq",
      title: "Management reporting",
      prompt: "In the Finance & Accounting domain, what does \"Management reporting\" mean?",
      options: [
        "A visual branding element only",
        "earnings before interest, taxes, depreciation, and amortization",
        "organizational unit responsible for costs but not directly revenue",
        "internal financial reporting used for business decision-making",
      ],
      correctIndex: 3,
      explanation: "Internal financial reporting used for business decision-making."
    },
    {
      id: "fa-30",
      type: "mcq",
      title: "Transfer pricing",
      prompt: "In the Finance & Accounting domain, what does \"Transfer pricing\" mean?",
      options: [
        "organizational unit responsible for costs but not directly revenue",
        "A meeting agenda template",
        "pricing of transactions between related entities for tax and management purposes",
        "financial plan approved for a future period",
      ],
      correctIndex: 2,
      explanation: "Pricing of transactions between related entities for tax and management purposes."
    },
    {
      id: "fa-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A subsidiary sold goods to another subsidiary. What must happen in consolidation?",
      options: [
        "Eliminate intercompany revenue, cost, receivable/payable, and unrealized profit where applicable",
        "Record it as external revenue",
        "Ignore it because both entities are profitable",
        "Double-count the sale",
      ],
      correctIndex: 0,
      explanation: "Consolidated statements should reflect only external transactions."
    },
    {
      id: "fa-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Actual margin is below budget. What should FP&A analyze?",
      options: [
        "Only employee titles",
        "Price, volume, mix, cost variance, discounts, FX, and one-time items",
        "Only office rent",
        "Only report color",
      ],
      correctIndex: 1,
      explanation: "Margin variance requires driver decomposition."
    },
    {
      id: "fa-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A month-end balance does not match supporting detail. What should be done?",
      options: [
        "Delete the account",
        "Change the report total manually",
        "Ignore the difference",
        "Perform reconciliation, identify timing/errors, document support, and post correcting entries if needed",
      ],
      correctIndex: 3,
      explanation: "Reconciliations support accurate close and reporting."
    },
    {
      id: "fa-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A company wants better budget discipline. What helps most?",
      options: [
        "No budget owners",
        "Only annual guessing",
        "Stop reviewing actuals",
        "Ownership by cost center, assumptions, variance review, approvals, and forecast updates",
      ],
      correctIndex: 3,
      explanation: "Budget control requires ownership and actual-vs-plan discipline."
    },
    {
      id: "fa-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A large expense was paid in advance for a future period. How should it generally be treated?",
      options: [
        "Record as prepaid asset and expense over the benefited period",
        "Expense all immediately in every case",
        "Record as revenue",
        "Ignore it",
      ],
      correctIndex: 0,
      explanation: "Prepaid expenses are recognized over the period benefited."
    },
    {
      id: "fa-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A CFO asks why cash fell while profit rose. What should be analyzed?",
      options: [
        "Profit only",
        "Only tax rate",
        "Only sales count",
        "Working capital, receivables, inventory, payables, capex, debt, and non-cash items",
      ],
      correctIndex: 3,
      explanation: "Profit and cash can diverge due to working capital and non-cash items."
    },
    {
      id: "fa-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A cost center overspends due to a new contract. What should reporting include?",
      options: [
        "Variance amount, driver, owner, forecast impact, and corrective action",
        "No explanation",
        "Only total annual cost",
        "Only blame",
      ],
      correctIndex: 0,
      explanation: "Management reporting should explain variances and actions."
    },
    {
      id: "fa-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Transfer pricing is not documented between entities. What is the risk?",
      options: [
        "No reporting issue",
        "Better compliance",
        "Tax, compliance, audit, and intercompany margin risk",
        "Automatic savings",
      ],
      correctIndex: 2,
      explanation: "Related-party pricing needs documentation and compliance support."
    },
    {
      id: "fa-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A manual journal entry is posted without support. What control is weak?",
      options: [
        "Marketing review",
        "Office security",
        "Journal approval, documentation, segregation of duties, and review controls",
        "Warehouse labeling",
      ],
      correctIndex: 2,
      explanation: "Manual journals are high-risk and require evidence and approval."
    },
    {
      id: "fa-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A finance team wants faster close without lower quality. What is best?",
      options: [
        "Post estimates forever",
        "Skip reviews",
        "Standardized close calendar, reconciliations, automation, ownership, materiality, and issue tracking",
        "Stop reconciling",
      ],
      correctIndex: 2,
      explanation: "Close acceleration should be balanced with controls and quality."
    }
  ],
};
