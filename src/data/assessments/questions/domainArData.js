import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainArData = {
  id: ASSESSMENT_TYPES.domain_ar,
  title: "Accounts Receivable Domain Professional Certification",
  shortTitle: "AR Domain",
  category: "Accounting & Tax",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional AR assessment covering invoicing, credit management, collections, cash application, disputes, aging, deductions, bad debt, controls, reporting, and order-to-cash operations.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "ar-01",
      type: "mcq",
      title: "Accounts receivable",
      prompt: "In the Accounts Receivable domain, what does \"Accounts receivable\" mean?",
      options: [
        "customer payment detail explaining which invoices are being paid",
        "A payroll-only process unrelated to this domain",
        "matching incoming customer payments to open invoices",
        "amount customers owe a company for goods or services already provided",
      ],
      correctIndex: 3,
      explanation: "Amount customers owe a company for goods or services already provided."
    },
    {
      id: "ar-02",
      type: "mcq",
      title: "Invoice",
      prompt: "In the Accounts Receivable domain, what does \"Invoice\" mean?",
      options: [
        "document requesting payment for goods or services delivered",
        "A design color choice with no operational meaning",
        "days sales outstanding, average time needed to collect payment after sale",
        "report categorizing open receivables by how long they have been outstanding",
      ],
      correctIndex: 0,
      explanation: "Document requesting payment for goods or services delivered."
    },
    {
      id: "ar-03",
      type: "mcq",
      title: "Credit memo",
      prompt: "In the Accounts Receivable domain, what does \"Credit memo\" mean?",
      options: [
        "document requesting payment for goods or services delivered",
        "document reducing the amount a customer owes",
        "cash received but not matched to a specific customer invoice",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Document reducing the amount a customer owes."
    },
    {
      id: "ar-04",
      type: "mcq",
      title: "Debit memo",
      prompt: "In the Accounts Receivable domain, what does \"Debit memo\" mean?",
      options: [
        "payment less than invoice amount",
        "A social media caption format",
        "document reducing the amount a customer owes",
        "document increasing the amount owed due to correction or additional charge",
      ],
      correctIndex: 3,
      explanation: "Document increasing the amount owed due to correction or additional charge."
    },
    {
      id: "ar-05",
      type: "mcq",
      title: "DSO",
      prompt: "In the Accounts Receivable domain, what does \"DSO\" mean?",
      options: [
        "days sales outstanding, average time needed to collect payment after sale",
        "report categorizing open receivables by how long they have been outstanding",
        "A customer service greeting script",
        "formal reminder sent to customer for overdue payment",
      ],
      correctIndex: 0,
      explanation: "Days sales outstanding, average time needed to collect payment after sale."
    },
    {
      id: "ar-06",
      type: "mcq",
      title: "Aging report",
      prompt: "In the Accounts Receivable domain, what does \"Aging report\" mean?",
      options: [
        "An office administration policy only",
        "short payment taken by customer for claims, discounts, returns, or disputes",
        "removing uncollectible receivable from the ledger",
        "report categorizing open receivables by how long they have been outstanding",
      ],
      correctIndex: 3,
      explanation: "Report categorizing open receivables by how long they have been outstanding."
    },
    {
      id: "ar-07",
      type: "mcq",
      title: "Cash application",
      prompt: "In the Accounts Receivable domain, what does \"Cash application\" mean?",
      options: [
        "amount customers owe a company for goods or services already provided",
        "block on new orders due to credit risk or overdue balances",
        "matching incoming customer payments to open invoices",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Matching incoming customer payments to open invoices."
    },
    {
      id: "ar-08",
      type: "mcq",
      title: "Remittance advice",
      prompt: "In the Accounts Receivable domain, what does \"Remittance advice\" mean?",
      options: [
        "document increasing the amount owed due to correction or additional charge",
        "A manual workaround with no control value",
        "bank service that receives and processes customer payments",
        "customer payment detail explaining which invoices are being paid",
      ],
      correctIndex: 3,
      explanation: "Customer payment detail explaining which invoices are being paid."
    },
    {
      id: "ar-09",
      type: "mcq",
      title: "Collections",
      prompt: "In the Accounts Receivable domain, what does \"Collections\" mean?",
      options: [
        "lost revenue due to billing errors, missed invoices, deductions, or weak controls",
        "A visual branding element only",
        "process of following up with customers to recover overdue amounts",
        "assessment of customer payment risk, financial health, and credit exposure",
      ],
      correctIndex: 2,
      explanation: "Process of following up with customers to recover overdue amounts."
    },
    {
      id: "ar-10",
      type: "mcq",
      title: "Credit limit",
      prompt: "In the Accounts Receivable domain, what does \"Credit limit\" mean?",
      options: [
        "maximum credit exposure approved for a customer",
        "A meeting agenda template",
        "block on new orders due to credit risk or overdue balances",
        "contra-asset estimate of receivables expected not to be collected",
      ],
      correctIndex: 0,
      explanation: "Maximum credit exposure approved for a customer."
    },
    {
      id: "ar-11",
      type: "mcq",
      title: "Credit hold",
      prompt: "In the Accounts Receivable domain, what does \"Credit hold\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "amount considered uncollectible",
        "assessment of customer payment risk, financial health, and credit exposure",
        "block on new orders due to credit risk or overdue balances",
      ],
      correctIndex: 3,
      explanation: "Block on new orders due to credit risk or overdue balances."
    },
    {
      id: "ar-12",
      type: "mcq",
      title: "Bad debt",
      prompt: "In the Accounts Receivable domain, what does \"Bad debt\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "amount considered uncollectible",
        "days sales outstanding, average time needed to collect payment after sale",
        "removing uncollectible receivable from the ledger",
      ],
      correctIndex: 1,
      explanation: "Amount considered uncollectible."
    },
    {
      id: "ar-13",
      type: "mcq",
      title: "Allowance for doubtful accounts",
      prompt: "In the Accounts Receivable domain, what does \"Allowance for doubtful accounts\" mean?",
      options: [
        "cash received but not matched to a specific customer invoice",
        "contra-asset estimate of receivables expected not to be collected",
        "A temporary file naming convention only",
        "customer payment detail explaining which invoices are being paid",
      ],
      correctIndex: 1,
      explanation: "Contra-asset estimate of receivables expected not to be collected."
    },
    {
      id: "ar-14",
      type: "mcq",
      title: "Write-off",
      prompt: "In the Accounts Receivable domain, what does \"Write-off\" mean?",
      options: [
        "formal reminder sent to customer for overdue payment",
        "removing uncollectible receivable from the ledger",
        "A social media caption format",
        "bank service that receives and processes customer payments",
      ],
      correctIndex: 1,
      explanation: "Removing uncollectible receivable from the ledger."
    },
    {
      id: "ar-15",
      type: "mcq",
      title: "Dispute management",
      prompt: "In the Accounts Receivable domain, what does \"Dispute management\" mean?",
      options: [
        "process of following up with customers to recover overdue amounts",
        "document requesting payment for goods or services delivered",
        "A customer service greeting script",
        "process for resolving customer disagreement over invoice, pricing, delivery, or quality",
      ],
      correctIndex: 3,
      explanation: "Process for resolving customer disagreement over invoice, pricing, delivery, or quality."
    },
    {
      id: "ar-16",
      type: "mcq",
      title: "Deduction",
      prompt: "In the Accounts Receivable domain, what does \"Deduction\" mean?",
      options: [
        "short payment taken by customer for claims, discounts, returns, or disputes",
        "An office administration policy only",
        "amount customers owe a company for goods or services already provided",
        "control separating authorization, recording, and cash handling responsibilities",
      ],
      correctIndex: 0,
      explanation: "Short payment taken by customer for claims, discounts, returns, or disputes."
    },
    {
      id: "ar-17",
      type: "mcq",
      title: "Order-to-cash",
      prompt: "In the Accounts Receivable domain, what does \"Order-to-cash\" mean?",
      options: [
        "contra-asset estimate of receivables expected not to be collected",
        "end-to-end process from order entry through invoicing, collections, and cash application",
        "lost revenue due to billing errors, missed invoices, deductions, or weak controls",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "End-to-end process from order entry through invoicing, collections, and cash application."
    },
    {
      id: "ar-18",
      type: "mcq",
      title: "Payment terms",
      prompt: "In the Accounts Receivable domain, what does \"Payment terms\" mean?",
      options: [
        "customer payment detail explaining which invoices are being paid",
        "document increasing the amount owed due to correction or additional charge",
        "A manual workaround with no control value",
        "conditions defining when payment is due, such as Net 30",
      ],
      correctIndex: 3,
      explanation: "Conditions defining when payment is due, such as Net 30."
    },
    {
      id: "ar-19",
      type: "mcq",
      title: "Lockbox",
      prompt: "In the Accounts Receivable domain, what does \"Lockbox\" mean?",
      options: [
        "lost revenue due to billing errors, missed invoices, deductions, or weak controls",
        "bank service that receives and processes customer payments",
        "cash received but not matched to a specific customer invoice",
        "A visual branding element only",
      ],
      correctIndex: 1,
      explanation: "Bank service that receives and processes customer payments."
    },
    {
      id: "ar-20",
      type: "mcq",
      title: "Unapplied cash",
      prompt: "In the Accounts Receivable domain, what does \"Unapplied cash\" mean?",
      options: [
        "document increasing the amount owed due to correction or additional charge",
        "cash received but not matched to a specific customer invoice",
        "control separating authorization, recording, and cash handling responsibilities",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "Cash received but not matched to a specific customer invoice."
    },
    {
      id: "ar-21",
      type: "mcq",
      title: "Short payment",
      prompt: "In the Accounts Receivable domain, what does \"Short payment\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "payment less than invoice amount",
        "prioritized plan for contacting customers based on risk, age, value, and behavior",
        "end-to-end process from order entry through invoicing, collections, and cash application",
      ],
      correctIndex: 1,
      explanation: "Payment less than invoice amount."
    },
    {
      id: "ar-22",
      type: "mcq",
      title: "Collection strategy",
      prompt: "In the Accounts Receivable domain, what does \"Collection strategy\" mean?",
      options: [
        "payment less than invoice amount",
        "A design color choice with no operational meaning",
        "prioritized plan for contacting customers based on risk, age, value, and behavior",
        "document requesting payment for goods or services delivered",
      ],
      correctIndex: 2,
      explanation: "Prioritized plan for contacting customers based on risk, age, value, and behavior."
    },
    {
      id: "ar-23",
      type: "mcq",
      title: "Customer statement",
      prompt: "In the Accounts Receivable domain, what does \"Customer statement\" mean?",
      options: [
        "A temporary file naming convention only",
        "process of following up with customers to recover overdue amounts",
        "customer payment detail explaining which invoices are being paid",
        "summary of open invoices, payments, credits, and balances for a customer",
      ],
      correctIndex: 3,
      explanation: "Summary of open invoices, payments, credits, and balances for a customer."
    },
    {
      id: "ar-24",
      type: "mcq",
      title: "AR turnover",
      prompt: "In the Accounts Receivable domain, what does \"AR turnover\" mean?",
      options: [
        "process of following up with customers to recover overdue amounts",
        "A social media caption format",
        "measure of how efficiently receivables are collected",
        "contra-asset estimate of receivables expected not to be collected",
      ],
      correctIndex: 2,
      explanation: "Measure of how efficiently receivables are collected."
    },
    {
      id: "ar-25",
      type: "mcq",
      title: "Provisioning",
      prompt: "In the Accounts Receivable domain, what does \"Provisioning\" mean?",
      options: [
        "A customer service greeting script",
        "report categorizing open receivables by how long they have been outstanding",
        "recording estimated bad debt expense",
        "conditions defining when payment is due, such as Net 30",
      ],
      correctIndex: 2,
      explanation: "Recording estimated bad debt expense."
    },
    {
      id: "ar-26",
      type: "mcq",
      title: "Revenue leakage",
      prompt: "In the Accounts Receivable domain, what does \"Revenue leakage\" mean?",
      options: [
        "lost revenue due to billing errors, missed invoices, deductions, or weak controls",
        "An office administration policy only",
        "payment less than invoice amount",
        "report categorizing open receivables by how long they have been outstanding",
      ],
      correctIndex: 0,
      explanation: "Lost revenue due to billing errors, missed invoices, deductions, or weak controls."
    },
    {
      id: "ar-27",
      type: "mcq",
      title: "Segregation of duties",
      prompt: "In the Accounts Receivable domain, what does \"Segregation of duties\" mean?",
      options: [
        "payment less than invoice amount",
        "control separating authorization, recording, and cash handling responsibilities",
        "bank service that receives and processes customer payments",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "Control separating authorization, recording, and cash handling responsibilities."
    },
    {
      id: "ar-28",
      type: "mcq",
      title: "Dunning letter",
      prompt: "In the Accounts Receivable domain, what does \"Dunning letter\" mean?",
      options: [
        "formal reminder sent to customer for overdue payment",
        "A manual workaround with no control value",
        "payment less than invoice amount",
        "report categorizing open receivables by how long they have been outstanding",
      ],
      correctIndex: 0,
      explanation: "Formal reminder sent to customer for overdue payment."
    },
    {
      id: "ar-29",
      type: "mcq",
      title: "Promise to pay",
      prompt: "In the Accounts Receivable domain, what does \"Promise to pay\" mean?",
      options: [
        "process for resolving customer disagreement over invoice, pricing, delivery, or quality",
        "customer commitment to pay a specified amount by a specified date",
        "process of following up with customers to recover overdue amounts",
        "A visual branding element only",
      ],
      correctIndex: 1,
      explanation: "Customer commitment to pay a specified amount by a specified date."
    },
    {
      id: "ar-30",
      type: "mcq",
      title: "Customer credit review",
      prompt: "In the Accounts Receivable domain, what does \"Customer credit review\" mean?",
      options: [
        "A meeting agenda template",
        "assessment of customer payment risk, financial health, and credit exposure",
        "document requesting payment for goods or services delivered",
        "contra-asset estimate of receivables expected not to be collected",
      ],
      correctIndex: 1,
      explanation: "Assessment of customer payment risk, financial health, and credit exposure."
    },
    {
      id: "ar-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "DSO rises sharply. What should AR analyze?",
      options: [
        "Only office supplies",
        "Only sales team names",
        "Only invoice logo",
        "Aging, customer segments, disputes, payment terms, billing accuracy, collections effectiveness, and cash application delays",
      ],
      correctIndex: 3,
      explanation: "DSO increase requires end-to-end AR driver analysis."
    },
    {
      id: "ar-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A large payment is received but not matched to invoices. What is it?",
      options: [
        "Unapplied cash that needs remittance research and matching",
        "Inventory shrinkage",
        "A write-off",
        "Bad debt automatically",
      ],
      correctIndex: 0,
      explanation: "Unapplied cash must be researched and applied correctly."
    },
    {
      id: "ar-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A customer short pays due to a pricing dispute. What should happen?",
      options: [
        "Ignore it",
        "Write off immediately without review",
        "Open dispute, validate contract/pricing, coordinate with sales/customer service, and resolve deduction",
        "Ship more product without review",
      ],
      correctIndex: 2,
      explanation: "Deductions should be validated and resolved through dispute management."
    },
    {
      id: "ar-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A high-risk customer exceeds credit limit. What is the best control?",
      options: [
        "Review exposure, payment history, risk, approvals, and consider credit hold or revised terms",
        "Delete the customer",
        "Approve all orders automatically",
        "Ignore the limit",
      ],
      correctIndex: 0,
      explanation: "Credit limits manage customer exposure and bad debt risk."
    },
    {
      id: "ar-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Collections team contacts all customers equally. What is better?",
      options: [
        "Only call small balances",
        "Call random customers",
        "Stop collections",
        "Prioritize by age, value, risk, customer behavior, dispute status, and payment promise",
      ],
      correctIndex: 3,
      explanation: "Collections should focus effort based on risk and value."
    },
    {
      id: "ar-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Invoices are frequently disputed for quantity differences. What should be investigated?",
      options: [
        "Order, shipment, delivery proof, pricing, invoice generation, and customer receipt data",
        "Only office lunch",
        "Only AR clerk keyboard",
        "Only bank fees",
      ],
      correctIndex: 0,
      explanation: "Quantity disputes require order-to-cash document matching."
    },
    {
      id: "ar-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Bad debt expense is understated. What should be reviewed?",
      options: [
        "Allowance methodology, aging, historical loss, customer risk, and write-off policy",
        "Only website traffic",
        "Only sales bonuses",
        "Only invoice color",
      ],
      correctIndex: 0,
      explanation: "Allowance estimates should reflect collection risk."
    },
    {
      id: "ar-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Cash application errors create customer complaints. What control helps?",
      options: [
        "Remittance matching, exception workflow, automation rules, review, and reconciliation",
        "Manual guessing",
        "Delete payment records",
        "No review",
      ],
      correctIndex: 0,
      explanation: "Cash application needs accurate matching and exception handling."
    },
    {
      id: "ar-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A customer promises to pay next Friday. What should AR record?",
      options: [
        "No documentation",
        "Random reminder",
        "Only customer mood",
        "Promise-to-pay amount, date, contact, notes, and follow-up action",
      ],
      correctIndex: 3,
      explanation: "Documented promises improve collection follow-up."
    },
    {
      id: "ar-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "AR wants to reduce revenue leakage. What should it inspect?",
      options: [
        "Billing completeness, pricing accuracy, deductions, credit memos, unbilled revenue, and dispute root causes",
        "Only AR team size",
        "Only invoice paper",
        "Only total revenue",
      ],
      correctIndex: 0,
      explanation: "Revenue leakage often comes from billing and deduction weaknesses."
    }
  ],
};
