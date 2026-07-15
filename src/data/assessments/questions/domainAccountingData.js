import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainAccountingData = {
  id: ASSESSMENT_TYPES.domain_accounting,
  title: "Core Accounting Domain Professional Certification",
  shortTitle: "Accounting Domain",
  category: "Accounting & Tax",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional accounting assessment covering double-entry accounting, general ledger, financial statements, accruals, reconciliations, revenue recognition, depreciation, inventory, controls, close process, and reporting quality.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "da-01",
      type: "mcq",
      title: "Balance sheet",
      prompt: "In the Core Accounting domain, what does \"Balance sheet\" mean?",
      options: [
        "goods held for sale or materials used in production",
        "A payroll-only process unrelated to this domain",
        "financial statement showing assets, liabilities, and equity at a point in time",
        "obligation due within one year or operating cycle",
      ],
      correctIndex: 2,
      explanation: "Financial statement showing assets, liabilities, and equity at a point in time."
    },
    {
      id: "da-02",
      type: "mcq",
      title: "Income statement",
      prompt: "In the Core Accounting domain, what does \"Income statement\" mean?",
      options: [
        "central accounting record containing all accounts and transactions",
        "A design color choice with no operational meaning",
        "entry that increases liabilities, equity, and revenue and decreases assets and expenses",
        "financial statement showing revenue, expenses, and net income over a period",
      ],
      correctIndex: 3,
      explanation: "Financial statement showing revenue, expenses, and net income over a period."
    },
    {
      id: "da-03",
      type: "mcq",
      title: "Cash flow statement",
      prompt: "In the Core Accounting domain, what does \"Cash flow statement\" mean?",
      options: [
        "financial statement showing cash flows from operating, investing, and financing activities",
        "financial statement showing revenue, expenses, and net income over a period",
        "cost of goods sold, direct cost of products sold during a period",
        "A temporary file naming convention only",
      ],
      correctIndex: 0,
      explanation: "Financial statement showing cash flows from operating, investing, and financing activities."
    },
    {
      id: "da-04",
      type: "mcq",
      title: "Double-entry accounting",
      prompt: "In the Core Accounting domain, what does \"Double-entry accounting\" mean?",
      options: [
        "financial statement showing assets, liabilities, and equity at a point in time",
        "process designed to prevent or detect errors, fraud, or misstatement",
        "system where every transaction affects at least two accounts with debits and credits",
        "A social media caption format",
      ],
      correctIndex: 2,
      explanation: "System where every transaction affects at least two accounts with debits and credits."
    },
    {
      id: "da-05",
      type: "mcq",
      title: "Debit",
      prompt: "In the Core Accounting domain, what does \"Debit\" mean?",
      options: [
        "entry that increases assets and expenses and decreases liabilities, equity, and revenue",
        "cost of goods sold, direct cost of products sold during a period",
        "A customer service greeting script",
        "asset expected to convert to cash or be used within one year or operating cycle",
      ],
      correctIndex: 0,
      explanation: "Entry that increases assets and expenses and decreases liabilities, equity, and revenue."
    },
    {
      id: "da-06",
      type: "mcq",
      title: "Credit",
      prompt: "In the Core Accounting domain, what does \"Credit\" mean?",
      options: [
        "method allocating equal depreciation expense each period",
        "cost of goods sold, direct cost of products sold during a period",
        "An office administration policy only",
        "entry that increases liabilities, equity, and revenue and decreases assets and expenses",
      ],
      correctIndex: 3,
      explanation: "Entry that increases liabilities, equity, and revenue and decreases assets and expenses."
    },
    {
      id: "da-07",
      type: "mcq",
      title: "Trial balance",
      prompt: "In the Core Accounting domain, what does \"Trial balance\" mean?",
      options: [
        "financial statement showing revenue, expenses, and net income over a period",
        "method allocating equal depreciation expense each period",
        "A random sales slogan with no technical meaning",
        "list of general ledger accounts and balances used to check debit-credit equality",
      ],
      correctIndex: 3,
      explanation: "List of general ledger accounts and balances used to check debit-credit equality."
    },
    {
      id: "da-08",
      type: "mcq",
      title: "General ledger",
      prompt: "In the Core Accounting domain, what does \"General ledger\" mean?",
      options: [
        "A manual workaround with no control value",
        "asset expected to convert to cash or be used within one year or operating cycle",
        "system where every transaction affects at least two accounts with debits and credits",
        "central accounting record containing all accounts and transactions",
      ],
      correctIndex: 3,
      explanation: "Central accounting record containing all accounts and transactions."
    },
    {
      id: "da-09",
      type: "mcq",
      title: "Journal entry",
      prompt: "In the Core Accounting domain, what does \"Journal entry\" mean?",
      options: [
        "allocation of long-lived asset cost over its useful life",
        "record of a transaction using debits and credits",
        "A visual branding element only",
        "control separating incompatible responsibilities to reduce fraud and error risk",
      ],
      correctIndex: 1,
      explanation: "Record of a transaction using debits and credits."
    },
    {
      id: "da-10",
      type: "mcq",
      title: "Accrued revenue",
      prompt: "In the Core Accounting domain, what does \"Accrued revenue\" mean?",
      options: [
        "A meeting agenda template",
        "financial statement showing cash flows from operating, investing, and financing activities",
        "record of a transaction using debits and credits",
        "revenue earned but not yet billed or received in cash",
      ],
      correctIndex: 3,
      explanation: "Revenue earned but not yet billed or received in cash."
    },
    {
      id: "da-11",
      type: "mcq",
      title: "Accrued expense",
      prompt: "In the Core Accounting domain, what does \"Accrued expense\" mean?",
      options: [
        "threshold for information that could affect decisions of financial statement users",
        "A payroll-only process unrelated to this domain",
        "expense incurred but not yet paid or invoiced",
        "entry that resets temporary accounts at period end",
      ],
      correctIndex: 2,
      explanation: "Expense incurred but not yet paid or invoiced."
    },
    {
      id: "da-12",
      type: "mcq",
      title: "Deferred revenue",
      prompt: "In the Core Accounting domain, what does \"Deferred revenue\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "financial statement showing assets, liabilities, and equity at a point in time",
        "cash received before revenue is earned",
        "entry that increases assets and expenses and decreases liabilities, equity, and revenue",
      ],
      correctIndex: 2,
      explanation: "Cash received before revenue is earned."
    },
    {
      id: "da-13",
      type: "mcq",
      title: "Prepaid expense",
      prompt: "In the Core Accounting domain, what does \"Prepaid expense\" mean?",
      options: [
        "principle determining when revenue should be recorded",
        "A temporary file naming convention only",
        "list of general ledger accounts and balances used to check debit-credit equality",
        "payment made before the related expense is consumed",
      ],
      correctIndex: 3,
      explanation: "Payment made before the related expense is consumed."
    },
    {
      id: "da-14",
      type: "mcq",
      title: "Depreciation",
      prompt: "In the Core Accounting domain, what does \"Depreciation\" mean?",
      options: [
        "evidence trail showing transaction source, approval, processing, and posting",
        "central accounting record containing all accounts and transactions",
        "A social media caption format",
        "allocation of long-lived asset cost over its useful life",
      ],
      correctIndex: 3,
      explanation: "Allocation of long-lived asset cost over its useful life."
    },
    {
      id: "da-15",
      type: "mcq",
      title: "Straight-line depreciation",
      prompt: "In the Core Accounting domain, what does \"Straight-line depreciation\" mean?",
      options: [
        "payment made before the related expense is consumed",
        "method allocating equal depreciation expense each period",
        "A customer service greeting script",
        "threshold for information that could affect decisions of financial statement users",
      ],
      correctIndex: 1,
      explanation: "Method allocating equal depreciation expense each period."
    },
    {
      id: "da-16",
      type: "mcq",
      title: "COGS",
      prompt: "In the Core Accounting domain, what does \"COGS\" mean?",
      options: [
        "An office administration policy only",
        "cumulative profit kept in the business after dividends",
        "process designed to prevent or detect errors, fraud, or misstatement",
        "cost of goods sold, direct cost of products sold during a period",
      ],
      correctIndex: 3,
      explanation: "Cost of goods sold, direct cost of products sold during a period."
    },
    {
      id: "da-17",
      type: "mcq",
      title: "Inventory",
      prompt: "In the Core Accounting domain, what does \"Inventory\" mean?",
      options: [
        "process of verifying account balances against supporting detail",
        "A random sales slogan with no technical meaning",
        "goods held for sale or materials used in production",
        "threshold for information that could affect decisions of financial statement users",
      ],
      correctIndex: 2,
      explanation: "Goods held for sale or materials used in production."
    },
    {
      id: "da-18",
      type: "mcq",
      title: "Current asset",
      prompt: "In the Core Accounting domain, what does \"Current asset\" mean?",
      options: [
        "A manual workaround with no control value",
        "payment made before the related expense is consumed",
        "asset expected to convert to cash or be used within one year or operating cycle",
        "list of general ledger accounts and balances used to check debit-credit equality",
      ],
      correctIndex: 2,
      explanation: "Asset expected to convert to cash or be used within one year or operating cycle."
    },
    {
      id: "da-19",
      type: "mcq",
      title: "Current liability",
      prompt: "In the Core Accounting domain, what does \"Current liability\" mean?",
      options: [
        "obligation due within one year or operating cycle",
        "principle determining when revenue should be recorded",
        "A visual branding element only",
        "period-end entry to update accounts before financial statements",
      ],
      correctIndex: 0,
      explanation: "Obligation due within one year or operating cycle."
    },
    {
      id: "da-20",
      type: "mcq",
      title: "Retained earnings",
      prompt: "In the Core Accounting domain, what does \"Retained earnings\" mean?",
      options: [
        "cash received before revenue is earned",
        "A meeting agenda template",
        "financial statement showing assets, liabilities, and equity at a point in time",
        "cumulative profit kept in the business after dividends",
      ],
      correctIndex: 3,
      explanation: "Cumulative profit kept in the business after dividends."
    },
    {
      id: "da-21",
      type: "mcq",
      title: "Revenue recognition",
      prompt: "In the Core Accounting domain, what does \"Revenue recognition\" mean?",
      options: [
        "principle determining when revenue should be recorded",
        "financial statement showing assets, liabilities, and equity at a point in time",
        "A payroll-only process unrelated to this domain",
        "goods held for sale or materials used in production",
      ],
      correctIndex: 0,
      explanation: "Principle determining when revenue should be recorded."
    },
    {
      id: "da-22",
      type: "mcq",
      title: "Matching principle",
      prompt: "In the Core Accounting domain, what does \"Matching principle\" mean?",
      options: [
        "process of verifying account balances against supporting detail",
        "payment made before the related expense is consumed",
        "recognizing expenses in the same period as related revenue",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 2,
      explanation: "Recognizing expenses in the same period as related revenue."
    },
    {
      id: "da-23",
      type: "mcq",
      title: "Bank reconciliation",
      prompt: "In the Core Accounting domain, what does \"Bank reconciliation\" mean?",
      options: [
        "comparison of bank statement to accounting records to resolve differences",
        "allocation of long-lived asset cost over its useful life",
        "A temporary file naming convention only",
        "list of general ledger accounts and balances used to check debit-credit equality",
      ],
      correctIndex: 0,
      explanation: "Comparison of bank statement to accounting records to resolve differences."
    },
    {
      id: "da-24",
      type: "mcq",
      title: "Account reconciliation",
      prompt: "In the Core Accounting domain, what does \"Account reconciliation\" mean?",
      options: [
        "list of general ledger accounts and balances used to check debit-credit equality",
        "comparison of bank statement to accounting records to resolve differences",
        "process of verifying account balances against supporting detail",
        "A social media caption format",
      ],
      correctIndex: 2,
      explanation: "Process of verifying account balances against supporting detail."
    },
    {
      id: "da-25",
      type: "mcq",
      title: "Internal control",
      prompt: "In the Core Accounting domain, what does \"Internal control\" mean?",
      options: [
        "financial statement showing cash flows from operating, investing, and financing activities",
        "process designed to prevent or detect errors, fraud, or misstatement",
        "A customer service greeting script",
        "principle determining when revenue should be recorded",
      ],
      correctIndex: 1,
      explanation: "Process designed to prevent or detect errors, fraud, or misstatement."
    },
    {
      id: "da-26",
      type: "mcq",
      title: "Segregation of duties",
      prompt: "In the Core Accounting domain, what does \"Segregation of duties\" mean?",
      options: [
        "An office administration policy only",
        "obligation due within one year or operating cycle",
        "process of verifying account balances against supporting detail",
        "control separating incompatible responsibilities to reduce fraud and error risk",
      ],
      correctIndex: 3,
      explanation: "Control separating incompatible responsibilities to reduce fraud and error risk."
    },
    {
      id: "da-27",
      type: "mcq",
      title: "Materiality",
      prompt: "In the Core Accounting domain, what does \"Materiality\" mean?",
      options: [
        "threshold for information that could affect decisions of financial statement users",
        "recognizing expenses in the same period as related revenue",
        "A random sales slogan with no technical meaning",
        "expense incurred but not yet paid or invoiced",
      ],
      correctIndex: 0,
      explanation: "Threshold for information that could affect decisions of financial statement users."
    },
    {
      id: "da-28",
      type: "mcq",
      title: "Adjusting entry",
      prompt: "In the Core Accounting domain, what does \"Adjusting entry\" mean?",
      options: [
        "evidence trail showing transaction source, approval, processing, and posting",
        "A manual workaround with no control value",
        "entry that resets temporary accounts at period end",
        "period-end entry to update accounts before financial statements",
      ],
      correctIndex: 3,
      explanation: "Period-end entry to update accounts before financial statements."
    },
    {
      id: "da-29",
      type: "mcq",
      title: "Closing entry",
      prompt: "In the Core Accounting domain, what does \"Closing entry\" mean?",
      options: [
        "A visual branding element only",
        "entry that resets temporary accounts at period end",
        "financial statement showing cash flows from operating, investing, and financing activities",
        "obligation due within one year or operating cycle",
      ],
      correctIndex: 1,
      explanation: "Entry that resets temporary accounts at period end."
    },
    {
      id: "da-30",
      type: "mcq",
      title: "Audit trail",
      prompt: "In the Core Accounting domain, what does \"Audit trail\" mean?",
      options: [
        "financial statement showing assets, liabilities, and equity at a point in time",
        "A meeting agenda template",
        "system where every transaction affects at least two accounts with debits and credits",
        "evidence trail showing transaction source, approval, processing, and posting",
      ],
      correctIndex: 3,
      explanation: "Evidence trail showing transaction source, approval, processing, and posting."
    },
    {
      id: "da-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A bank statement does not match the cash ledger. What should accounting do?",
      options: [
        "Perform bank reconciliation, identify timing differences/errors, and post valid adjustments",
        "Change the bank statement",
        "Delete cash account",
        "Ignore the difference",
      ],
      correctIndex: 0,
      explanation: "Bank reconciliations ensure cash records are accurate."
    },
    {
      id: "da-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Cash is received before service is delivered. How should it generally be recorded?",
      options: [
        "Owner equity only",
        "Deferred revenue liability until earned",
        "Revenue immediately in every case",
        "Expense",
      ],
      correctIndex: 1,
      explanation: "Unearned revenue is a liability until performance obligation is satisfied."
    },
    {
      id: "da-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A utility bill relates to December but invoice arrives in January. What principle applies?",
      options: [
        "Record as revenue",
        "Accrue the expense in December if material and incurred",
        "Record only when approved by marketing",
        "Ignore it forever",
      ],
      correctIndex: 1,
      explanation: "Accrual accounting records expenses when incurred."
    },
    {
      id: "da-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A company buys equipment for multi-year use. How is the cost normally recognized?",
      options: [
        "Record as revenue",
        "Capitalize the asset and depreciate over useful life",
        "Do not record it",
        "Expense all purchases as COGS automatically",
      ],
      correctIndex: 1,
      explanation: "Long-lived assets are typically capitalized and depreciated."
    },
    {
      id: "da-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Trial balance balances. Does that guarantee no accounting errors?",
      options: [
        "Yes, audit is unnecessary",
        "Yes, all accounts are perfect",
        "No transactions occurred",
        "No, equal debits and credits can still contain classification, omission, or principle errors",
      ],
      correctIndex: 3,
      explanation: "A balanced trial balance does not prove all entries are correct."
    },
    {
      id: "da-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Revenue increased sharply near year-end. What should be reviewed?",
      options: [
        "Only office party cost",
        "Only logo design",
        "Revenue recognition criteria, cut-off, contracts, delivery evidence, returns, and collectability",
        "Only report page count",
      ],
      correctIndex: 2,
      explanation: "Revenue spikes require cut-off and recognition review."
    },
    {
      id: "da-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Inventory count is lower than book balance. What may be needed?",
      options: [
        "Investigate shrinkage/errors and record adjustment if supported",
        "Delete inventory records",
        "Ignore physical count",
        "Increase revenue",
      ],
      correctIndex: 0,
      explanation: "Inventory records should be reconciled to physical evidence."
    },
    {
      id: "da-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "One person can create vendors, approve invoices, and run payments. What control risk exists?",
      options: [
        "Better governance",
        "No risk",
        "Weak segregation of duties and higher fraud risk",
        "Improved audit trail automatically",
      ],
      correctIndex: 2,
      explanation: "Incompatible duties should be separated or compensated by controls."
    },
    {
      id: "da-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A reconciliation has old unexplained differences. What should happen?",
      options: [
        "Research, resolve, document, escalate if needed, and clear valid reconciling items",
        "Delete support",
        "Roll forward forever",
        "Hide it",
      ],
      correctIndex: 0,
      explanation: "Reconciliations require timely resolution of unexplained items."
    },
    {
      id: "da-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Financial statements are prepared without supporting documentation. What is the concern?",
      options: [
        "Automatic compliance",
        "No concern",
        "Better efficiency always",
        "Weak audit trail and higher reporting risk",
      ],
      correctIndex: 3,
      explanation: "Financial reporting should be supported by evidence and review controls."
    }
  ],
};
