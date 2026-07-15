import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainApData = {
  id: ASSESSMENT_TYPES.domain_ap,
  title: "Accounts Payable Domain Professional Certification",
  shortTitle: "AP Domain",
  category: "Accounting & Tax",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional AP assessment covering procure-to-pay, invoice processing, three-way match, vendor master, accruals, payments, discounts, controls, duplicate prevention, tax forms, compliance, and reporting.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "ap-01",
      type: "mcq",
      title: "Accounts payable",
      prompt: "In the Accounts Payable domain, what does \"Accounts payable\" mean?",
      options: [
        "control separating vendor setup, invoice approval, and payment execution",
        "A payroll-only process unrelated to this domain",
        "amount a company owes suppliers or vendors for goods or services received",
        "invoice that cannot be processed automatically due to mismatch or missing data",
      ],
      correctIndex: 2,
      explanation: "Amount a company owes suppliers or vendors for goods or services received."
    },
    {
      id: "ap-02",
      type: "mcq",
      title: "Procure-to-pay",
      prompt: "In the Accounts Payable domain, what does \"Procure-to-pay\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "scheduled process for selecting and executing approved payments",
        "goods received not invoiced liability for received goods awaiting invoice",
        "end-to-end process from requisition and purchase order to receipt, invoice, and payment",
      ],
      correctIndex: 3,
      explanation: "End-to-end process from requisition and purchase order to receipt, invoice, and payment."
    },
    {
      id: "ap-03",
      type: "mcq",
      title: "Purchase order",
      prompt: "In the Accounts Payable domain, what does \"Purchase order\" mean?",
      options: [
        "2 percent discount if paid within 10 days, otherwise full payment due in 30 days",
        "A temporary file naming convention only",
        "report showing unpaid supplier invoices by due date or age",
        "buyer document authorizing purchase of specified goods or services",
      ],
      correctIndex: 3,
      explanation: "Buyer document authorizing purchase of specified goods or services."
    },
    {
      id: "ap-04",
      type: "mcq",
      title: "Goods receipt",
      prompt: "In the Accounts Payable domain, what does \"Goods receipt\" mean?",
      options: [
        "record confirming goods were received from a supplier",
        "scheduled process for selecting and executing approved payments",
        "A social media caption format",
        "buyer document authorizing purchase of specified goods or services",
      ],
      correctIndex: 0,
      explanation: "Record confirming goods were received from a supplier."
    },
    {
      id: "ap-05",
      type: "mcq",
      title: "Vendor invoice",
      prompt: "In the Accounts Payable domain, what does \"Vendor invoice\" mean?",
      options: [
        "supplier request for payment for goods or services provided",
        "A customer service greeting script",
        "month-end estimate for expenses incurred but not yet invoiced",
        "amount a company owes suppliers or vendors for goods or services received",
      ],
      correctIndex: 0,
      explanation: "Supplier request for payment for goods or services provided."
    },
    {
      id: "ap-06",
      type: "mcq",
      title: "Three-way match",
      prompt: "In the Accounts Payable domain, what does \"Three-way match\" mean?",
      options: [
        "comparison of purchase order, goods receipt, and supplier invoice before payment",
        "payment detail sent to supplier explaining invoices paid",
        "An office administration policy only",
        "supplier terms defining when payment is due and any discount conditions",
      ],
      correctIndex: 0,
      explanation: "Comparison of purchase order, goods receipt, and supplier invoice before payment."
    },
    {
      id: "ap-07",
      type: "mcq",
      title: "Two-way match",
      prompt: "In the Accounts Payable domain, what does \"Two-way match\" mean?",
      options: [
        "discount obtained by paying supplier before standard due date",
        "comparison of purchase order and invoice when goods receipt is not required",
        "A random sales slogan with no technical meaning",
        "buyer document authorizing purchase of specified goods or services",
      ],
      correctIndex: 1,
      explanation: "Comparison of purchase order and invoice when goods receipt is not required."
    },
    {
      id: "ap-08",
      type: "mcq",
      title: "Vendor master file",
      prompt: "In the Accounts Payable domain, what does \"Vendor master file\" mean?",
      options: [
        "amount a company owes suppliers or vendors for goods or services received",
        "A manual workaround with no control value",
        "end-to-end process from requisition and purchase order to receipt, invoice, and payment",
        "central supplier record with tax, address, bank, payment terms, and contact details",
      ],
      correctIndex: 3,
      explanation: "Central supplier record with tax, address, bank, payment terms, and contact details."
    },
    {
      id: "ap-09",
      type: "mcq",
      title: "Duplicate payment",
      prompt: "In the Accounts Payable domain, what does \"Duplicate payment\" mean?",
      options: [
        "buying outside approved procurement process or supplier agreements",
        "retaining required tax amounts from supplier payments when applicable",
        "A visual branding element only",
        "paying the same invoice more than once",
      ],
      correctIndex: 3,
      explanation: "Paying the same invoice more than once."
    },
    {
      id: "ap-10",
      type: "mcq",
      title: "Invoice exception",
      prompt: "In the Accounts Payable domain, what does \"Invoice exception\" mean?",
      options: [
        "invoice that cannot be processed automatically due to mismatch or missing data",
        "A meeting agenda template",
        "defined routing for invoice review and authorization",
        "US tax information return for certain reportable payments to vendors",
      ],
      correctIndex: 0,
      explanation: "Invoice that cannot be processed automatically due to mismatch or missing data."
    },
    {
      id: "ap-11",
      type: "mcq",
      title: "Accrued liability",
      prompt: "In the Accounts Payable domain, what does \"Accrued liability\" mean?",
      options: [
        "central supplier record with tax, address, bank, payment terms, and contact details",
        "expense incurred but not yet invoiced or paid",
        "A payroll-only process unrelated to this domain",
        "retaining required tax amounts from supplier payments when applicable",
      ],
      correctIndex: 1,
      explanation: "Expense incurred but not yet invoiced or paid."
    },
    {
      id: "ap-12",
      type: "mcq",
      title: "Payment terms",
      prompt: "In the Accounts Payable domain, what does \"Payment terms\" mean?",
      options: [
        "US tax information return for certain reportable payments to vendors",
        "end-to-end process from requisition and purchase order to receipt, invoice, and payment",
        "A design color choice with no operational meaning",
        "supplier terms defining when payment is due and any discount conditions",
      ],
      correctIndex: 3,
      explanation: "Supplier terms defining when payment is due and any discount conditions."
    },
    {
      id: "ap-13",
      type: "mcq",
      title: "2/10 net 30",
      prompt: "In the Accounts Payable domain, what does \"2/10 net 30\" mean?",
      options: [
        "2 percent discount if paid within 10 days, otherwise full payment due in 30 days",
        "fraud involving false invoices, altered bank details, or unauthorized payments",
        "amount a company owes suppliers or vendors for goods or services received",
        "A temporary file naming convention only",
      ],
      correctIndex: 0,
      explanation: "2 percent discount if paid within 10 days, otherwise full payment due in 30 days."
    },
    {
      id: "ap-14",
      type: "mcq",
      title: "EFT",
      prompt: "In the Accounts Payable domain, what does \"EFT\" mean?",
      options: [
        "A social media caption format",
        "electronic funds transfer such as ACH, wire, or electronic payment",
        "end-to-end process from requisition and purchase order to receipt, invoice, and payment",
        "fraud involving false invoices, altered bank details, or unauthorized payments",
      ],
      correctIndex: 1,
      explanation: "Electronic funds transfer such as ACH, wire, or electronic payment."
    },
    {
      id: "ap-15",
      type: "mcq",
      title: "W-9",
      prompt: "In the Accounts Payable domain, what does \"W-9\" mean?",
      options: [
        "US tax form used to collect a vendor taxpayer identification number",
        "A customer service greeting script",
        "goods received not invoiced liability for received goods awaiting invoice",
        "comparison of supplier statement to AP ledger records",
      ],
      correctIndex: 0,
      explanation: "US tax form used to collect a vendor taxpayer identification number."
    },
    {
      id: "ap-16",
      type: "mcq",
      title: "1099",
      prompt: "In the Accounts Payable domain, what does \"1099\" mean?",
      options: [
        "US tax information return for certain reportable payments to vendors",
        "scheduled process for selecting and executing approved payments",
        "An office administration policy only",
        "month-end estimate for expenses incurred but not yet invoiced",
      ],
      correctIndex: 0,
      explanation: "US tax information return for certain reportable payments to vendors."
    },
    {
      id: "ap-17",
      type: "mcq",
      title: "GRNI",
      prompt: "In the Accounts Payable domain, what does \"GRNI\" mean?",
      options: [
        "goods received not invoiced liability for received goods awaiting invoice",
        "buyer document authorizing purchase of specified goods or services",
        "A random sales slogan with no technical meaning",
        "US tax information return for certain reportable payments to vendors",
      ],
      correctIndex: 0,
      explanation: "Goods received not invoiced liability for received goods awaiting invoice."
    },
    {
      id: "ap-18",
      type: "mcq",
      title: "Invoice aging",
      prompt: "In the Accounts Payable domain, what does \"Invoice aging\" mean?",
      options: [
        "month-end estimate for expenses incurred but not yet invoiced",
        "central supplier record with tax, address, bank, payment terms, and contact details",
        "report showing unpaid supplier invoices by due date or age",
        "A manual workaround with no control value",
      ],
      correctIndex: 2,
      explanation: "Report showing unpaid supplier invoices by due date or age."
    },
    {
      id: "ap-19",
      type: "mcq",
      title: "Early payment discount",
      prompt: "In the Accounts Payable domain, what does \"Early payment discount\" mean?",
      options: [
        "A visual branding element only",
        "discount obtained by paying supplier before standard due date",
        "invoice that cannot be processed automatically due to mismatch or missing data",
        "scheduled process for selecting and executing approved payments",
      ],
      correctIndex: 1,
      explanation: "Discount obtained by paying supplier before standard due date."
    },
    {
      id: "ap-20",
      type: "mcq",
      title: "Payment run",
      prompt: "In the Accounts Payable domain, what does \"Payment run\" mean?",
      options: [
        "comparison of purchase order and invoice when goods receipt is not required",
        "scheduled process for selecting and executing approved payments",
        "defined routing for invoice review and authorization",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "Scheduled process for selecting and executing approved payments."
    },
    {
      id: "ap-21",
      type: "mcq",
      title: "Segregation of duties",
      prompt: "In the Accounts Payable domain, what does \"Segregation of duties\" mean?",
      options: [
        "supplier account balance that may indicate overpayment, credit memo, or adjustment",
        "ensuring purchases use approved purchase orders and buying channels",
        "A payroll-only process unrelated to this domain",
        "control separating vendor setup, invoice approval, and payment execution",
      ],
      correctIndex: 3,
      explanation: "Control separating vendor setup, invoice approval, and payment execution."
    },
    {
      id: "ap-22",
      type: "mcq",
      title: "Approval workflow",
      prompt: "In the Accounts Payable domain, what does \"Approval workflow\" mean?",
      options: [
        "defined routing for invoice review and authorization",
        "A design color choice with no operational meaning",
        "goods received not invoiced liability for received goods awaiting invoice",
        "comparison of purchase order, goods receipt, and supplier invoice before payment",
      ],
      correctIndex: 0,
      explanation: "Defined routing for invoice review and authorization."
    },
    {
      id: "ap-23",
      type: "mcq",
      title: "PO compliance",
      prompt: "In the Accounts Payable domain, what does \"PO compliance\" mean?",
      options: [
        "supplier request for payment for goods or services provided",
        "ensuring purchases use approved purchase orders and buying channels",
        "central supplier record with tax, address, bank, payment terms, and contact details",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Ensuring purchases use approved purchase orders and buying channels."
    },
    {
      id: "ap-24",
      type: "mcq",
      title: "Maverick spend",
      prompt: "In the Accounts Payable domain, what does \"Maverick spend\" mean?",
      options: [
        "buyer document authorizing purchase of specified goods or services",
        "A social media caption format",
        "control separating vendor setup, invoice approval, and payment execution",
        "buying outside approved procurement process or supplier agreements",
      ],
      correctIndex: 3,
      explanation: "Buying outside approved procurement process or supplier agreements."
    },
    {
      id: "ap-25",
      type: "mcq",
      title: "Debit balance",
      prompt: "In the Accounts Payable domain, what does \"Debit balance\" mean?",
      options: [
        "scheduled process for selecting and executing approved payments",
        "A customer service greeting script",
        "supplier account balance that may indicate overpayment, credit memo, or adjustment",
        "buyer document authorizing purchase of specified goods or services",
      ],
      correctIndex: 2,
      explanation: "Supplier account balance that may indicate overpayment, credit memo, or adjustment."
    },
    {
      id: "ap-26",
      type: "mcq",
      title: "Remittance advice",
      prompt: "In the Accounts Payable domain, what does \"Remittance advice\" mean?",
      options: [
        "payment detail sent to supplier explaining invoices paid",
        "An office administration policy only",
        "retaining required tax amounts from supplier payments when applicable",
        "record confirming goods were received from a supplier",
      ],
      correctIndex: 0,
      explanation: "Payment detail sent to supplier explaining invoices paid."
    },
    {
      id: "ap-27",
      type: "mcq",
      title: "Tax withholding",
      prompt: "In the Accounts Payable domain, what does \"Tax withholding\" mean?",
      options: [
        "invoice that cannot be processed automatically due to mismatch or missing data",
        "retaining required tax amounts from supplier payments when applicable",
        "supplier request for payment for goods or services provided",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "Retaining required tax amounts from supplier payments when applicable."
    },
    {
      id: "ap-28",
      type: "mcq",
      title: "Payment fraud",
      prompt: "In the Accounts Payable domain, what does \"Payment fraud\" mean?",
      options: [
        "fraud involving false invoices, altered bank details, or unauthorized payments",
        "discount obtained by paying supplier before standard due date",
        "A manual workaround with no control value",
        "report showing unpaid supplier invoices by due date or age",
      ],
      correctIndex: 0,
      explanation: "Fraud involving false invoices, altered bank details, or unauthorized payments."
    },
    {
      id: "ap-29",
      type: "mcq",
      title: "Vendor statement reconciliation",
      prompt: "In the Accounts Payable domain, what does \"Vendor statement reconciliation\" mean?",
      options: [
        "supplier terms defining when payment is due and any discount conditions",
        "comparison of supplier statement to AP ledger records",
        "A visual branding element only",
        "central supplier record with tax, address, bank, payment terms, and contact details",
      ],
      correctIndex: 1,
      explanation: "Comparison of supplier statement to AP ledger records."
    },
    {
      id: "ap-30",
      type: "mcq",
      title: "Close accrual",
      prompt: "In the Accounts Payable domain, what does \"Close accrual\" mean?",
      options: [
        "month-end estimate for expenses incurred but not yet invoiced",
        "report showing unpaid supplier invoices by due date or age",
        "A meeting agenda template",
        "control separating vendor setup, invoice approval, and payment execution",
      ],
      correctIndex: 0,
      explanation: "Month-end estimate for expenses incurred but not yet invoiced."
    },
    {
      id: "ap-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An invoice amount does not match the purchase order. What should AP do?",
      options: [
        "Route as an exception, verify PO/receipt/pricing, and obtain approval or correction before payment",
        "Pay immediately",
        "Delete the invoice",
        "Ignore the mismatch",
      ],
      correctIndex: 0,
      explanation: "Invoice mismatches should be resolved before payment."
    },
    {
      id: "ap-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A vendor requests bank account change by email. What control is most important?",
      options: [
        "Share login details",
        "Update immediately",
        "Independent verification, approval workflow, audit trail, and segregation of duties",
        "Ignore vendor master controls",
      ],
      correctIndex: 2,
      explanation: "Bank detail changes are high fraud risk."
    },
    {
      id: "ap-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "AP finds two invoices with same vendor, amount, and invoice number. What is the risk?",
      options: [
        "Customer churn",
        "Inventory markdown",
        "Higher revenue",
        "Duplicate payment",
      ],
      correctIndex: 3,
      explanation: "Duplicate invoice characteristics are key duplicate payment indicators."
    },
    {
      id: "ap-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Goods are received but invoice has not arrived at month-end. What should be recorded?",
      options: [
        "Revenue",
        "No accounting ever",
        "Bad debt",
        "GRNI or accrued liability if expense has been incurred",
      ],
      correctIndex: 3,
      explanation: "Accruals ensure expenses are recorded in the correct period."
    },
    {
      id: "ap-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A supplier offers 2/10 net 30. What should AP evaluate?",
      options: [
        "Pay twice",
        "Whether paying within 10 days earns a financially beneficial discount",
        "Ignore terms",
        "Always wait 30 days",
      ],
      correctIndex: 1,
      explanation: "Discount capture can generate savings if cash policy supports it."
    },
    {
      id: "ap-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Invoices are delayed due to missing approvals. What should improve?",
      options: [
        "Random payment selection",
        "No approvals",
        "More manual emails only",
        "Approval workflow, delegation rules, reminders, escalation, and PO compliance",
      ],
      correctIndex: 3,
      explanation: "Workflow bottlenecks need process and ownership improvements."
    },
    {
      id: "ap-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A vendor statement shows invoices not in AP ledger. What should be done?",
      options: [
        "Pay all blindly",
        "Delete vendor",
        "Ignore the statement",
        "Reconcile statement to AP records, receipts, and open invoices",
      ],
      correctIndex: 3,
      explanation: "Statement reconciliation identifies missing invoices or discrepancies."
    },
    {
      id: "ap-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An urgent manual payment is requested outside normal process. What should AP ensure?",
      options: [
        "Bypass all controls permanently",
        "Pay without review",
        "Valid business reason, approval, vendor validation, fraud checks, and audit documentation",
        "Use personal account",
      ],
      correctIndex: 2,
      explanation: "Manual payments need strong controls due to fraud risk."
    },
    {
      id: "ap-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "AP wants fewer exceptions. What upstream process matters?",
      options: [
        "Only office location",
        "Only payment date",
        "PO accuracy, vendor onboarding, receiving discipline, contract terms, and invoice submission standards",
        "Only check color",
      ],
      correctIndex: 2,
      explanation: "AP exception rates often depend on upstream purchasing and receiving quality."
    },
    {
      id: "ap-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A supplier is repeatedly paid late. What should be analyzed?",
      options: [
        "Invoice receipt timing, approval delays, match exceptions, payment terms, cash holds, and workflow owners",
        "Only AP team lunch",
        "Only invoice paper",
        "Only supplier logo",
      ],
      correctIndex: 0,
      explanation: "Late payments need process root-cause analysis."
    }
  ],
};
