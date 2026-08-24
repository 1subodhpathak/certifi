import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const oracleFinancialsData = {
  id: ASSESSMENT_TYPES.oracle_financials,
  title: 'Oracle Financials Professional Certification',
  shortTitle: 'Oracle Financials',
  category: 'Accounting',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests enterprise-grade Oracle Financials judgment across subledgers, general ledger, AP, AR, fixed assets, intercompany, cash application, journal governance, master data, approvals, reconciliations, reporting, and period close.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Several questions include Mermaid diagrams, subledger flows, reconciliation schedules, or enterprise control scenarios. Read each scenario carefully. Options are intentionally close, so choose the answer that best addresses the accounting, control, and system-design issue. No negative marking.',

  questions: [
    {
      id: 'of-01',
      type: 'mcq',
      title: 'Subledger to GL Architecture',
      difficulty: 'easy',
      points: 5,
      prompt: `A company uses Oracle Financials for AP, AR, and Fixed Assets.

{{diagram}}

Why is the subledger-to-GL architecture critical?`,
      diagram: `flowchart LR
  AP["Accounts Payable"] --> SLA["Subledger Accounting"]
  AR["Accounts Receivable"] --> SLA
  FA["Fixed Assets"] --> SLA
  SLA --> GL["General Ledger"]
  GL --> FS["Financial Statements"]
  classDef flow fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class AP,AR,FA,SLA,GL,FS flow;`,
      options: [
        'It ensures transactions from operational subledgers are accounted for consistently and transferred into the enterprise books with traceability.',
        'It removes the need for subledger reconciliation.',
        'It allows finance teams to bypass the GL.',
        'It is mainly a reporting-layout feature.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Enterprise accounting depends on controlled accounting generation and transfer from subledgers into GL. Why not B: subledger-to-GL reconciliation remains essential. Why not C: GL is still the central book of record. Why not D: this is accounting architecture, not merely presentation.'
    },

    {
      id: 'of-02',
      type: 'mcq',
      title: 'Chart of Accounts Design',
      difficulty: 'easy',
      points: 5,
      prompt: `A global group wants entity, cost center, natural account, product line, and region reporting.

What is the strongest chart-of-accounts design principle?`,
      options: [
        'Create as many segments as possible so every reporting need has its own field.',
        'Use a governed segment structure that supports statutory and management reporting without unnecessary complexity or duplicate dimensions.',
        'Use one natural-account segment only and maintain all management detail offline.',
        'Create a separate chart of accounts for every department.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A strong enterprise COA balances reporting depth, governance, scalability, and usability. Why not A: excessive segmentation creates maintenance and data-quality problems. Why not C: this weakens integrated reporting. Why not D: department-specific COAs reduce standardization.'
    },

    {
      id: 'of-03',
      type: 'mcq',
      title: 'AP Approval Hierarchy',
      difficulty: 'easy',
      points: 5,
      prompt: `A $420,000 supplier invoice is entered by a buyer who can also approve the invoice and release the payment.

What is the strongest control concern?`,
      options: [
        'The invoice may take too long to process.',
        'The process concentrates incompatible duties and weakens delegated-authority and payment controls.',
        'Large invoices should never be paid electronically.',
        'The supplier should be removed from the system.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Entry, approval, and payment release should be appropriately segregated. Why not A: processing speed is secondary to fraud/control risk. Why not C: electronic payment is acceptable with proper controls. Why not D: supplier removal does not solve the access-design issue.'
    },

    {
      id: 'of-04',
      type: 'mcq',
      title: 'Three-Way Match',
      difficulty: 'easy',
      points: 5,
      prompt: `Purchase order: 1,000 units at $40
Receipt: 920 units
Supplier invoice: 1,000 units at $40

What should a three-way-match control identify?`,
      options: [
        'A quantity mismatch that should be investigated before the full invoice is approved for payment.',
        'No issue because the invoice matches the purchase order.',
        'A revenue-recognition problem.',
        'A bank-reconciliation difference.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The invoice quantity exceeds received quantity, creating overpayment risk. Why not B: PO match alone is incomplete. Why not C: this is procurement/AP, not revenue. Why not D: no bank activity is involved yet.'
    },

    {
      id: 'of-05',
      type: 'mcq',
      title: 'Supplier Master Risk',
      difficulty: 'easy',
      points: 5,
      prompt: `A supplier sends an email requesting a bank-account change two days before a $1.5m payment run.

What is the strongest response?`,
      options: [
        'Update the bank details because the email uses the supplier’s normal domain.',
        'Independently verify the bank change through trusted contact information and require proper approval before updating the supplier master.',
        'Update the bank details and send a small test payment.',
        'Ask the same email sender to confirm the account a second time.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Supplier bank changes are high-risk master-data events and require independent verification. Why not A: email accounts can be compromised. Why not C: a test payment does not authenticate the supplier. Why not D: the same channel is not independent.'
    },

    {
      id: 'of-06',
      type: 'mcq',
      title: 'Receivables Transaction Setup',
      difficulty: 'medium',
      points: 5,
      prompt: `A new AR transaction type posts revenue correctly but maps tax to the wrong liability account.

What is the strongest concern?`,
      options: [
        'Customer statements will be unaffected, so the setup can remain.',
        'Transaction-type configuration can create systematic accounting and tax errors across every invoice using that setup.',
        'Only the invoice layout is affected.',
        'The issue can be ignored until year-end.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Enterprise transaction configuration can propagate errors at scale. Why not A: accounting remains wrong even if customer balances are correct. Why not C: the problem is accounting logic, not appearance. Why not D: waiting compounds the misstatement.'
    },

    {
      id: 'of-07',
      type: 'mcq',
      title: 'Cash Application',
      difficulty: 'medium',
      points: 5,
      prompt: `A customer pays $760,000 against invoices totaling $800,000 and disputes the remaining $40,000.

What is the strongest cash-application treatment?`,
      options: [
        'Apply $760,000 to the identified invoices and route the $40,000 residual through the controlled dispute/short-pay process.',
        'Leave the full $760,000 unapplied until the dispute is resolved.',
        'Write off the $40,000 immediately.',
        'Apply the full $800,000 and create a negative cash balance.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Receipts should be applied accurately while exceptions follow controlled dispute workflows. Why not B: unnecessary unapplied cash distorts aging. Why not C: dispute does not automatically justify write-off. Why not D: cash cannot be applied beyond the amount received.'
    },

    {
      id: 'of-08',
      type: 'mcq',
      title: 'Subledger Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `AP trial balance: $18.42m
GL Accounts Payable control account: $18.19m

{{diagram}}

What is the strongest next step?`,
      diagram: `flowchart LR
  AP["AP Subledger<br/><b>$18.42m</b>"] --> R["Reconciliation"]
  GL["GL Control Account<br/><b>$18.19m</b>"] --> R
  R --> D["Difference<br/><b>$230k</b>"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class R,D warning;`,
      options: [
        'Post $230k directly to AP expense so the balances agree.',
        'Investigate transfer status, manual GL postings, timing, unaccounted transactions, and posting errors before making any correction.',
        'Use the GL balance because it is always more accurate.',
        'Ignore the difference if it is below 2% of AP.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Subledger-to-GL differences require root-cause analysis. Why not A: a plug hides the cause. Why not C: either layer can contain issues. Why not D: control-account differences should be reconciled, not dismissed using a simplistic percentage.'
    },

    {
      id: 'of-09',
      type: 'mcq',
      title: 'Manual Journal Governance',
      difficulty: 'medium',
      points: 5,
      prompt: `A $4.8m manual journal is posted late on the final day of close with description "management adjustment."

What is the strongest control response?`,
      options: [
        'Accept it because senior management requested the entry.',
        'Require source support, business rationale, account mapping, preparer/approver evidence, and independent review before relying on the journal.',
        'Move the journal to Suspense and close immediately.',
        'Delete all manual journals above $1m.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Large unusual manual journals require strong evidence and review because they can bypass normal subledger controls. Why not A: authority does not replace support. Why not C: suspense does not resolve the issue. Why not D: legitimate large journals may exist.'
    },

    {
      id: 'of-10',
      type: 'mcq',
      title: 'Fixed Asset Capitalization',
      difficulty: 'medium',
      points: 5,
      prompt: `A $900,000 production machine is recorded entirely as Repairs Expense.

What is the strongest accounting concern?`,
      options: [
        'Expense may be overstated and fixed assets understated if the expenditure meets capitalization criteria.',
        'Revenue will be understated.',
        'Cash will be overstated.',
        'Accounts Receivable will be understated.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A qualifying capital expenditure should be capitalized and depreciated rather than expensed immediately. Why not B: revenue is unrelated. Why not C: classification does not change cash. Why not D: no customer receivable is involved.'
    },

    {
      id: 'of-11',
      type: 'mcq',
      title: 'Asset Retirement',
      difficulty: 'medium',
      points: 5,
      prompt: `An asset with zero operational use remains active in Oracle Assets and continues depreciating.

What is the strongest response?`,
      options: [
        'Leave it active until book value reaches zero.',
        'Review whether the asset should be retired, impaired, transferred, or otherwise updated based on its actual status and accounting policy.',
        'Delete the asset from the database.',
        'Move depreciation expense to Miscellaneous Expense.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Asset records should reflect actual lifecycle status and policy. Why not A: continued depreciation may be inappropriate. Why not C: deletion destroys history. Why not D: reclassification does not fix asset status.'
    },

    {
      id: 'of-12',
      type: 'mcq',
      title: 'Intercompany Accounting',
      difficulty: 'hard',
      points: 5,
      prompt: `Entity A records a $2.4m receivable from Entity B.
Entity B records only a $2.1m payable to Entity A.

What is the strongest response before consolidation?`,
      options: [
        'Eliminate both balances using the larger amount.',
        'Reconcile the $300k difference by transaction, currency, timing, markup, and posting logic before elimination.',
        'Write off the $300k in Entity A.',
        'Ignore the mismatch because consolidation entries will remove it.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Intercompany balances should agree before elimination. Why not A: elimination should not conceal unresolved differences. Why not C: a unilateral write-off is unsupported. Why not D: unresolved mismatches impair balance integrity and consolidation quality.'
    },

    {
      id: 'of-13',
      type: 'mcq',
      title: 'Period Close Dependency',
      difficulty: 'hard',
      points: 5,
      prompt: `The close team wants to close GL while AP still has:
- unaccounted invoices
- payment batches in process
- a $1.1m subledger-to-GL difference

What is the strongest action?`,
      options: [
        'Close GL first because subledgers can be corrected next month.',
        'Resolve or formally control the material AP exceptions and complete subledger reconciliation before final GL close.',
        'Post one balancing journal to GL and close.',
        'Delete unaccounted invoices from AP.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Enterprise close depends on material subledger issues being resolved or appropriately controlled before GL finalization. Why not A: this knowingly carries errors forward. Why not C: a plug entry hides root causes. Why not D: deletion destroys valid transactions.'
    },

    {
      id: 'of-14',
      type: 'mcq',
      title: 'Exception Reporting',
      difficulty: 'hard',
      points: 5,
      prompt: `An AP exception report contains 2,300 items.

Only 17 items account for 82% of the total dollar value and include duplicate invoices, unmatched receipts, and blocked payments.

What is the strongest review strategy?`,
      options: [
        'Review every item in alphabetical order.',
        'Prioritize material and high-risk exceptions first while maintaining controlled follow-up for the remaining population.',
        'Ignore the 17 large items because they are likely already known.',
        'Delete low-value exceptions so the report is shorter.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Exception management should be risk- and materiality-based. Why not A: equal-order review may waste close time. Why not C: large/high-risk items deserve more attention. Why not D: low-value exceptions still need governance even if handled differently.'
    },

    {
      id: 'of-15',
      type: 'mcq',
      title: 'Master Data Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `A global Oracle instance has 18,000 suppliers.

A review finds:
- duplicate suppliers
- dormant suppliers with active bank accounts
- obsolete tax registrations
- users able to create and approve supplier changes

What is the strongest remediation?`,
      options: [
        'Perform supplier rationalization, establish change controls and independent approval, validate sensitive fields, and periodically recertify active supplier records.',
        'Keep all suppliers because deleting records is risky.',
        'Allow business users to clean supplier data without approval.',
        'Create new supplier records whenever uncertainty exists.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Supplier governance should address duplicates, sensitive bank/tax data, dormant records, and incompatible access. Why not B: dormant/duplicate records create risk. Why not C: uncontrolled cleanup can create new errors. Why not D: more duplicates worsen the problem.'
    },

    {
      id: 'of-16',
      type: 'mcq',
      title: 'Audit Readiness',
      difficulty: 'hard',
      points: 5,
      prompt: `Auditors request evidence for a sample of high-value AP payments.

Which evidence set is strongest?`,
      options: [
        'Only screenshots of the payment amounts.',
        'Supplier master approval, purchase order, receipt/service evidence, invoice, approval history, payment record, and relevant system audit trail.',
        'A spreadsheet prepared after the audit request.',
        'A manager email stating that the payments were valid.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong audit evidence is traceable across master data, transaction support, approvals, payment, and system history. Why not A: screenshots are incomplete. Why not C: retrospective spreadsheets may lack source evidence. Why not D: a statement alone is insufficient.'
    },

    {
      id: 'of-17',
      type: 'mcq',
      title: 'Duplicate Invoice Risk',
      difficulty: 'hard',
      points: 5,
      prompt: `Two invoices from the same supplier have:
- identical amount
- same invoice date
- slightly different invoice numbers: INV-1048 and INV1048

What is the strongest AP control response?`,
      options: [
        'Pay both because the invoice numbers are technically different.',
        'Flag the invoices for duplicate review using supplier, amount, date, PO, and normalized invoice-reference logic before payment.',
        'Delete one invoice automatically.',
        'Ignore duplicates when the supplier is strategic.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Duplicate controls should account for formatting variations and supporting transaction context. Why not A: small reference differences can be used accidentally or fraudulently. Why not C: evidence is needed before deletion. Why not D: strategic suppliers still require payment controls.'
    },

    {
      id: 'of-18',
      type: 'mcq',
      title: 'Management Reporting',
      difficulty: 'hard',
      points: 5,
      prompt: `The CFO receives a report showing:
- revenue +9%
- gross margin -4 points
- overdue receivables +31%
- operating cash flow -22%
- AP exceptions doubled

What is the strongest finance message?`,
      options: [
        'Performance is strong because revenue is growing.',
        'Growth is not converting cleanly into margin or cash, while working-capital and AP-control pressures are increasing; pricing, collections, and AP exceptions need targeted review.',
        'Only cash flow matters because accounting profit is less important.',
        'AP exceptions are operational and should not appear in finance reporting.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong enterprise reporting connects financial outcomes, working capital, and operational control signals. Why not A: revenue alone hides deteriorating economics. Why not C: both earnings and cash matter. Why not D: AP exceptions can affect liabilities, cash, and close quality.'
    },

    {
      id: 'of-19',
      type: 'mcq',
      title: 'Close Control Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `The controller sees:

{{diagram}}

What is the strongest conclusion?`,
      diagram: `flowchart TB
  AP["AP-GL difference<br/><b>$1.1m</b>"] --> J["Close judgment"]
  AR["Unapplied cash<br/><b>$2.7m</b>"] --> J
  FA["Unposted asset additions<br/><b>$850k</b>"] --> J
  IC["Intercompany mismatch<br/><b>$600k</b>"] --> J
  MJ["Late manual journals<br/><b>12</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class AP,AR,FA,IC,MJ,J warning;`,
      options: [
        'Close can proceed because each issue is below $3m.',
        'Multiple material unresolved dependencies remain across subledgers and manual journals, so the close should not be treated as complete until they are resolved or formally controlled.',
        'Only AP matters because it has the largest difference.',
        'The best response is one GL plug journal equal to the combined differences.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Close quality depends on resolving material cross-module exceptions, not only the largest single item. Why not A: materiality is not a simple per-item threshold. Why not C: several issues affect financial integrity. Why not D: one plug would conceal multiple unrelated causes.'
    },

    {
      id: 'of-20',
      type: 'mcq',
      title: 'Integrated Oracle Financials Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A finance transformation review identifies:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  M["Weak supplier master controls"] --> J["Finance operating model redesign"]
  AP["Three-way-match overrides"] --> J
  AR["Unapplied cash backlog"] --> J
  FA["Asset lifecycle issues"] --> J
  IC["Intercompany mismatches"] --> J
  MJ["High manual-journal volume"] --> J
  REC["Subledger-GL differences"] --> J
  CL["Late / inconsistent close"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class M,AP,AR,FA,IC,MJ,REC,CL,J warning;`,
      options: [
        'Focus only on closing faster because timing is the primary measure of finance quality.',
        'Redesign the end-to-end finance control model across master data, approvals, subledger processing, reconciliation, exception management, journal governance, and close dependencies.',
        'Move more transactions directly into GL to reduce subledger complexity.',
        'Replace system controls with offline spreadsheets maintained by each team.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The weaknesses are systemic and require integrated process and control redesign. Why not A: faster close without better controls can increase risk. Why not C: direct GL posting can weaken subledger traceability. Why not D: fragmented spreadsheets reduce enterprise governance.'
    },
  ],
};
