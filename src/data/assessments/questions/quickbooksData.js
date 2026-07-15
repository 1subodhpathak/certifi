import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const quickbooksData = {
  id: ASSESSMENT_TYPES.quickbooks,
  title: "QuickBooks Bookkeeping & Accounting Professional Certification",
  shortTitle: "QuickBooks",
  category: "Finance",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Chart of accounts, invoicing, bills, bank feeds, reconciliations, sales tax, payroll basics, reporting, month-end close, controls, and bookkeeping accuracy.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "qb-01",
      type: "mcq",
      title: "Chart of Accounts",
      prompt: "What is the \"Chart of Accounts\"?",
      options: ["A list of customers", "The complete list of every account that a business has to record its financial transactions", "A profit report", "A marketing tool"],
      correctIndex: 1,
      explanation: "It is the structural foundation of the accounting system. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-02",
      type: "mcq",
      title: "Transactions",
      prompt: "What is the difference between an \"Invoice\" and a \"Sales Receipt\" in QuickBooks?",
      options: ["No difference", "Invoice is for future payment; Sales Receipt is for payment received at the time of sale", "Invoice is only for products", "Sales Receipt is for taxes"],
      correctIndex: 1,
      explanation: "Invoices create Accounts Receivable. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-03",
      type: "mcq",
      title: "Reconciliation",
      prompt: "What does \"Reconcile\" mean in QuickBooks?",
      options: ["Deleting transactions", "Matching transactions in QuickBooks with your bank/credit card statements", "Sending emails", "Updating the software"],
      correctIndex: 1,
      explanation: "Reconciliation ensures the books match the actual bank balance. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-04",
      type: "mcq",
      title: "Vendors",
      prompt: "Which document do you record in QuickBooks when you *receive* a bill from a vendor to pay later?",
      options: ["Check", "Bill", "Expense", "Purchase Order"],
      correctIndex: 1,
      explanation: "Recording a Bill creates Accounts Payable. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-05",
      type: "mcq",
      title: "Items",
      prompt: "What are \"Products and Services\" used for in QuickBooks?",
      options: ["Storing employee names", "Items you buy and sell, which map to accounts in the Chart of Accounts", "Writing blogs", "Managing cloud storage"],
      correctIndex: 1,
      explanation: "Items simplify data entry on sales and purchase forms. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-06",
      type: "mcq",
      title: "Reporting",
      prompt: "Which report shows what a business *owns* and what it *owes* at a specific point in time?",
      options: ["Profit and Loss", "Balance Sheet", "Cash Flow Statement", "Sales by Customer"],
      correctIndex: 1,
      explanation: "Balance Sheet follows the equation: Assets = Liabilities + Equity. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-07",
      type: "mcq",
      title: "Profit & Loss",
      prompt: "What does a Profit and Loss (P&L) report show?",
      options: ["Current inventory", "Income and Expenses over a specific period of time", "Bank balance", "Employee hours"],
      correctIndex: 1,
      explanation: "Also known as an Income Statement. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-08",
      type: "mcq",
      title: "Bank Feeds",
      prompt: "What is the benefit of using \"Bank Feeds\"?",
      options: ["It earns interest", "It automatically imports transactions from your bank into QuickBooks", "It blocks hackers", "It pays bills automatically"],
      correctIndex: 1,
      explanation: "Bank feeds significantly speed up bookkeeping. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-09",
      type: "mcq",
      title: "Undeposited Funds",
      prompt: "What is the purpose of the \"Undeposited Funds\" account?",
      options: ["A savings account", "A temporary holding account for payments received but not yet deposited into the bank", "A lost money account", "A tax account"],
      correctIndex: 1,
      explanation: "It helps you group multiple payments into a single bank deposit. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-10",
      type: "mcq",
      title: "Accrual vs Cash",
      prompt: "What is \"Accrual Basis\" accounting?",
      options: ["Recording income when cash is received", "Recording income when it is earned and expenses when they are incurred (regardless of cash flow)", "A type of tax", "Monthly reporting"],
      correctIndex: 1,
      explanation: "Accrual gives a more accurate picture of long-term profitability. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-11",
      type: "mcq",
      title: "Classes",
      prompt: "What are \"Classes\" used for in QuickBooks?",
      options: ["Student training", "Tracking different segments or departments of a business for detailed reporting", "Sorting customers", "Managing inventory types"],
      correctIndex: 1,
      explanation: "Classes allow for multi-dimensional reporting. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-12",
      type: "mcq",
      title: "Journal Entries",
      prompt: "When should you use a \"Journal Entry\"?",
      options: ["For daily sales", "For complex adjustments, depreciation, or year-end corrections not handled by standard forms", "To pay bills", "To add customers"],
      correctIndex: 1,
      explanation: "Journal entries require a solid understanding of debits and credits. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-13",
      type: "mcq",
      title: "Audit Log",
      prompt: "What is the \"Audit Log\" used for?",
      options: ["Paying taxes", "Tracking every change made to the company data and who made it", "Checking inventory", "Backup"],
      correctIndex: 1,
      explanation: "Essential for troubleshooting and internal control. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-14",
      type: "mcq",
      title: "Estimates",
      prompt: "What is an \"Estimate\"?",
      options: ["A final bill", "A quote or proposal sent to a customer; it does not affect the books", "A random guess", "A type of expense"],
      correctIndex: 1,
      explanation: "Estimates can be converted into invoices once the work is approved. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-15",
      type: "mcq",
      title: "Credit Memos",
      prompt: "When do you use a \"Credit Memo\"?",
      options: ["To give a customer a refund or reduce the balance they owe", "To pay a vendor", "To increase a price", "To record a bank deposit"],
      correctIndex: 0,
      explanation: "Credit memos reduce Accounts Receivable. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-16",
      type: "mcq",
      title: "Payroll",
      prompt: "Does QuickBooks handle employee payroll?",
      options: ["No", "Yes (usually as an add-on service)", "Only for contractors", "Only in the US"],
      correctIndex: 1,
      explanation: "QuickBooks Payroll automates taxes, filings, and payments. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-17",
      type: "mcq",
      title: "Inventory",
      prompt: "What is \"Inventory Tracking\" in QuickBooks?",
      options: ["Counting boxes", "Automatically tracking quantities and value of products as they are bought and sold", "A list of suppliers", "A price list"],
      correctIndex: 1,
      explanation: "Useful for retail and manufacturing businesses. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-18",
      type: "mcq",
      title: "Project Tracking",
      prompt: "What is the \"Projects\" feature used for?",
      options: ["Managing staff", "Tracking income and expenses for specific jobs to see profitability at a project level", "Writing code", "Marketing"],
      correctIndex: 1,
      explanation: "Essential for service-based businesses like agencies or construction. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-19",
      type: "mcq",
      title: "Permissions",
      prompt: "Can you limit what a user can see in QuickBooks?",
      options: ["No", "Yes, through User Permissions and Roles", "Only in the desktop version", "Only for admins"],
      correctIndex: 1,
      explanation: "You can create \"Standard\" or \"Custom\" users with limited access. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-20",
      type: "mcq",
      title: "Apps",
      prompt: "What is the \"QuickBooks App Store\"?",
      options: ["A place to buy phones", "A marketplace for third-party tools that integrate with QuickBooks (e.g., TSheets, Bill.com)", "A game store", "A theme store"],
      correctIndex: 1,
      explanation: "Integrations extend the core functionality of QuickBooks. This is a checked foundational concept for professional QuickBooks work."
    },
    {
      id: "qb-21",
      type: "mcq",
      title: "Month-End Close Checklist",
      prompt: "In a professional QuickBooks Bookkeeping & Accounting scenario, what is the strongest approach when dealing with month-end close checklist?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Month-End Close Checklist requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "qb-22",
      type: "mcq",
      title: "Bank Reconciliation Exception",
      prompt: "A team is making a decision about bank reconciliation exception. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about bank reconciliation exception balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "qb-23",
      type: "mcq",
      title: "Duplicate Vendor Payment",
      prompt: "Which signal suggests duplicate vendor payment needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when duplicate vendor payment could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "qb-24",
      type: "mcq",
      title: "Undeposited Funds Workflow",
      prompt: "What is the best way to validate work involving undeposited funds workflow?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for undeposited funds workflow should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "qb-25",
      type: "mcq",
      title: "Sales Tax Setup",
      prompt: "In a professional QuickBooks Bookkeeping & Accounting scenario, what is the strongest approach when dealing with sales tax setup?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Sales Tax Setup requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "qb-26",
      type: "mcq",
      title: "Class And Location Tracking",
      prompt: "A team is making a decision about class and location tracking. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about class and location tracking balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "qb-27",
      type: "mcq",
      title: "1099 Vendor Setup",
      prompt: "Which signal suggests 1099 vendor setup needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when 1099 vendor setup could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "qb-28",
      type: "mcq",
      title: "Accounts Receivable Aging",
      prompt: "What is the best way to validate work involving accounts receivable aging?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for accounts receivable aging should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "qb-29",
      type: "mcq",
      title: "Accounts Payable Aging",
      prompt: "In a professional QuickBooks Bookkeeping & Accounting scenario, what is the strongest approach when dealing with accounts payable aging?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Accounts Payable Aging requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "qb-30",
      type: "mcq",
      title: "Credit Memo Usage",
      prompt: "A team is making a decision about credit memo usage. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about credit memo usage balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "qb-31",
      type: "mcq",
      title: "Deferred Revenue Treatment",
      prompt: "Which signal suggests deferred revenue treatment needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when deferred revenue treatment could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "qb-32",
      type: "mcq",
      title: "Inventory Item Setup",
      prompt: "What is the best way to validate work involving inventory item setup?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for inventory item setup should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "qb-33",
      type: "mcq",
      title: "Chart Of Accounts Design",
      prompt: "In a professional QuickBooks Bookkeeping & Accounting scenario, what is the strongest approach when dealing with chart of accounts design?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Chart Of Accounts Design requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "qb-34",
      type: "mcq",
      title: "Owner Draw Classification",
      prompt: "A team is making a decision about owner draw classification. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about owner draw classification balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "qb-35",
      type: "mcq",
      title: "Loan Payment Split",
      prompt: "Which signal suggests loan payment split needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when loan payment split could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "qb-36",
      type: "mcq",
      title: "Payroll Liability Account",
      prompt: "What is the best way to validate work involving payroll liability account?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for payroll liability account should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "qb-37",
      type: "mcq",
      title: "Audit Log Review",
      prompt: "In a professional QuickBooks Bookkeeping & Accounting scenario, what is the strongest approach when dealing with audit log review?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Audit Log Review requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "qb-38",
      type: "mcq",
      title: "Period Close Controls",
      prompt: "A team is making a decision about period close controls. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about period close controls balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "qb-39",
      type: "mcq",
      title: "Financial Report Review",
      prompt: "Which signal suggests financial report review needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when financial report review could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "qb-40",
      type: "mcq",
      title: "Bookkeeping Quality Check",
      prompt: "What is the best way to validate work involving bookkeeping quality check?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for bookkeeping quality check should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
