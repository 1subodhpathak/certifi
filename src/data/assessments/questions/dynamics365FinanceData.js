import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const dynamics365FinanceData = {
  id: ASSESSMENT_TYPES.dynamics_365_finance,
  title: 'Microsoft Dynamics 365 Finance Professional Certification',
  shortTitle: 'Dynamics 365',
  category: 'Accounting',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests enterprise-grade Dynamics 365 Finance judgment across financial dimensions, legal entities, AP, AR, procure-to-pay, order-to-cash, budgeting, fixed assets, reconciliations, workflows, segregation of duties, intercompany, reporting, and period close.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Several questions include Mermaid diagrams, finance workflows, reconciliation schedules, or enterprise-control scenarios. Read each scenario carefully. Options are intentionally close, so choose the answer that best addresses the accounting, control, and system-design issue. No negative marking.',

  questions: [
    {
      id: 'd365x-01',
      type: 'mcq',
      title: 'Financial Dimensions',
      difficulty: 'easy',
      points: 5,
      prompt: `A company wants reporting by department, cost center, region, and product line without creating thousands of natural accounts.

What is the strongest design?`,
      options: [
        'Create a separate natural account for every department-region-product combination.',
        'Use a governed chart of accounts with financial dimensions for analytical reporting.',
        'Keep all reporting outside Dynamics 365 in spreadsheets.',
        'Create separate legal entities for every department.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Financial dimensions provide analytical flexibility without exploding the chart of accounts. Why not A: this creates an unmanageable COA. Why not C: it weakens integrated reporting and control. Why not D: legal entities should reflect real accounting/legal boundaries, not reporting convenience.'
    },

    {
      id: 'd365-02',
      type: 'mcq',
      title: 'Legal Entity Structure',
      difficulty: 'easy',
      points: 5,
      prompt: `A group operates three incorporated companies with separate statutory reporting and banking.

What is the strongest accounting reason to model them as distinct legal entities?`,
      options: [
        'To create different login screens.',
        'To preserve entity-level books, transaction boundaries, controls, statutory reporting, and intercompany relationships.',
        'To remove the need for consolidation.',
        'To avoid using financial dimensions.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Legal entities define accounting and control boundaries. Why not A: interface differences are not the core purpose. Why not C: multi-entity groups still require consolidation. Why not D: dimensions and legal entities solve different problems.'
    },

    {
      id: 'd365-03',
      type: 'mcq',
      title: 'Vendor Master Risk',
      difficulty: 'easy',
      points: 5,
      prompt: `A vendor requests a bank-account change by email the day before a $900,000 payment run.

What is the strongest control?`,
      options: [
        'Update the bank details because the email address looks familiar.',
        'Independently verify the change using trusted contact information and require appropriate approval before updating the vendor master.',
        'Send a small test payment first.',
        'Ask the same email sender to confirm the details again.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Bank-detail changes are high-risk master-data events and require independent verification. Why not A: email accounts can be compromised. Why not C: a test payment does not authenticate the vendor. Why not D: the same channel is not independent.'
    },

    {
      id: 'd365-04',
      type: 'mcq',
      title: 'Procure-to-Pay Match',
      difficulty: 'easy',
      points: 5,
      prompt: `Purchase order: 500 units at $80
Receipt: 460 units
Vendor invoice: 500 units at $80

What should the P2P control detect?`,
      options: [
        'A quantity mismatch that requires investigation before full invoice approval.',
        'No issue because the invoice agrees to the purchase order.',
        'A revenue-recognition problem.',
        'A fixed-asset depreciation issue.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The invoice exceeds received quantity and creates overpayment risk. Why not B: PO agreement alone is not enough. Why not C: this is AP/procurement, not revenue. Why not D: fixed assets are unrelated.'
    },

    {
      id: 'd365-05',
      type: 'mcq',
      title: 'Order-to-Cash',
      difficulty: 'easy',
      points: 5,
      prompt: `A customer pays $380,000 against invoices totaling $400,000 and disputes the remaining $20,000.

What is the strongest O2C treatment?`,
      options: [
        'Apply the $380,000 accurately and route the $20,000 through the controlled dispute/short-pay process.',
        'Leave the full payment unapplied until the dispute is resolved.',
        'Write off the $20,000 immediately.',
        'Apply $400,000 and create a negative cash balance.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Cash should be applied accurately while residual disputes follow controlled workflows. Why not B: unnecessary unapplied cash distorts aging. Why not C: a dispute does not automatically justify write-off. Why not D: you cannot apply more cash than was received.'
    },

    {
      id: 'd365-06',
      type: 'mcq',
      title: 'Budget Control',
      difficulty: 'medium',
      points: 5,
      prompt: `A department has an annual travel budget of $2.0m.

Committed spend plus actuals already total $1.92m, and a new purchase request of $180k is submitted.

What is the strongest use of budget control?`,
      options: [
        'Allow the request because the invoice has not yet been posted.',
        'Evaluate the request against available budget including commitments and require appropriate exception approval if policy permits.',
        'Reject every request once actual spend reaches 90% of budget.',
        'Ignore commitments and monitor only posted expenses.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Effective budget control considers commitments, actuals, remaining capacity, and policy-based exceptions. Why not A: commitments can consume budget before invoicing. Why not C: a blanket 90% rule may not match policy. Why not D: ignoring commitments weakens preventive control.'
    },

    {
      id: 'd365-07',
      type: 'mcq',
      title: 'AP to GL Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `Vendor subledger balance: $24.70m
GL Accounts Payable control: $24.42m

{{diagram}}

What is the strongest next step?`,
      diagram: `flowchart LR
  AP["Vendor subledger<br/><b>$24.70m</b>"] --> R["Reconciliation"]
  GL["GL control<br/><b>$24.42m</b>"] --> R
  R --> D["Difference<br/><b>$280k</b>"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class R,D warning;`,
      options: [
        'Post $280k directly to expense so balances agree.',
        'Investigate posting status, manual GL entries, timing, unposted transactions, and configuration before correcting.',
        'Use the GL amount because the GL is always right.',
        'Ignore the difference if it is less than 2%.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Subledger-to-GL breaks require root-cause analysis. Why not A: a plug hides the cause. Why not C: either side can contain errors. Why not D: control-account differences require reconciliation regardless of a simplistic threshold.'
    },

    {
      id: 'd365-08',
      type: 'mcq',
      title: 'Fixed Asset Capitalization',
      difficulty: 'medium',
      points: 5,
      prompt: `A $1.1m production machine is posted entirely to Repairs & Maintenance.

What is the strongest accounting concern?`,
      options: [
        'Expense may be overstated and fixed assets understated if the purchase meets capitalization criteria.',
        'Revenue will be understated.',
        'Cash will be overstated.',
        'Accounts Receivable will increase.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Qualifying capital expenditure should be capitalized and depreciated rather than expensed immediately. Why not B: revenue is unrelated. Why not C: classification does not change cash. Why not D: no customer receivable is involved.'
    },

    {
      id: 'd365-09',
      type: 'mcq',
      title: 'Workflow Approval Design',
      difficulty: 'medium',
      points: 5,
      prompt: `Every invoice above $500 requires CFO approval, including thousands of routine low-risk invoices.

Approvals are delayed and the CFO often approves in bulk.

What is the strongest redesign?`,
      options: [
        'Remove all approvals.',
        'Align approval thresholds and routing with delegated authority, materiality, spend category, and risk.',
        'Require CFO approval for every invoice regardless of amount.',
        'Let preparers self-approve recurring suppliers.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Approval controls should target real risk and delegated authority. Why not A: approvals remain necessary. Why not C: excessive approval can reduce control quality through rubber-stamping. Why not D: self-approval weakens segregation of duties.'
    },

    {
      id: 'd365-10',
      type: 'mcq',
      title: 'Segregation of Duties',
      difficulty: 'medium',
      points: 5,
      prompt: `One user can:
- create vendors
- change bank details
- enter invoices
- approve invoices
- generate payment files

What is the strongest control conclusion?`,
      options: [
        'The role is efficient because one person owns the process end to end.',
        'The role contains incompatible duties and creates significant fraud and unreviewed-error risk.',
        'Only bank-detail access is problematic.',
        'No issue exists if the employee is senior.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Master maintenance, invoice processing, approval, and payment execution should not be concentrated without compensating controls. Why not A: efficiency does not justify control conflict. Why not C: several permissions are high-risk. Why not D: seniority does not eliminate SoD risk.'
    },

    {
      id: 'd365-11',
      type: 'mcq',
      title: 'Close Management',
      difficulty: 'medium',
      points: 5,
      prompt: `A global close is frequently delayed because teams do not know which tasks depend on other entities or subledgers.

What would improve close management most?`,
      options: [
        'A controlled close checklist with owners, due dates, dependencies, status visibility, and escalation for material exceptions.',
        'Closing GL early and resolving subledger issues next month.',
        'Using personal notes maintained by each accountant.',
        'Removing deadlines from the close process.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Structured ownership and dependency visibility are central to enterprise close management. Why not B: this can knowingly carry unresolved issues. Why not C: private notes do not provide shared control visibility. Why not D: deadlines are necessary for coordinated close.'
    },

    {
      id: 'd365-12',
      type: 'mcq',
      title: 'Dimension Misclassification',
      difficulty: 'hard',
      points: 5,
      prompt: `A $600,000 marketing expense is posted to the correct natural account but the wrong region and cost center dimensions.

Why does this matter?`,
      options: [
        'The trial balance may still balance, but management reporting and accountability by region/cost center will be wrong.',
        'The GL will automatically become out of balance.',
        'Cash will be overstated.',
        'The expense should be treated as revenue.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Dimension errors can materially distort management reporting even when accounting balances mathematically. Why not B: dimension miscoding does not necessarily unbalance GL. Why not C: cash is unaffected by dimension coding. Why not D: classification by dimension does not change the economic nature of the expense.'
    },

    {
      id: 'd365-13',
      type: 'mcq',
      title: 'Intercompany Mismatch',
      difficulty: 'hard',
      points: 5,
      prompt: `Entity A records a $3.2m intercompany receivable from Entity B.
Entity B records only $2.9m payable to Entity A.

What is the strongest response before consolidation?`,
      options: [
        'Eliminate both using the larger balance.',
        'Reconcile the $300k difference by transaction, currency, timing, markup, and posting logic before elimination.',
        'Write off $300k in Entity A.',
        'Ignore the mismatch because consolidation removes intercompany balances anyway.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Intercompany balances should agree before elimination. Why not A: elimination should not hide unresolved breaks. Why not C: unilateral write-off is unsupported. Why not D: unresolved mismatches weaken entity and consolidated balance integrity.'
    },

    {
      id: 'd365-14',
      type: 'mcq',
      title: 'Budget Variance Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A cost center reports:

{{diagram}}

What is the strongest management interpretation?`,
      diagram: `flowchart TB
  B["Budget<br/><b>$6.0m</b>"] --> J["Variance review"]
  A["Actual<br/><b>$7.4m</b>"] --> J
  H["Headcount<br/><b>+2%</b>"] --> J
  C["Consulting spend<br/><b>+58%</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class A,C,J warning;`,
      options: [
        'The overspend is explained by headcount growth.',
        'The $1.4m unfavorable variance requires driver analysis, with consulting spend a likely major contributor.',
        'Increase next month’s budget automatically by $1.4m.',
        'Ignore the variance if the department met revenue targets.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Headcount growth of 2% is unlikely to explain a 23% total overspend, while consulting is a clear exception. Why not A: the scale does not fit. Why not C: changing the budget does not fix economics. Why not D: cost control still matters even if revenue is strong.'
    },

    {
      id: 'd365-15',
      type: 'mcq',
      title: 'Master Data Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `A review finds:
- duplicate vendors
- inconsistent customer groups
- uncontrolled new dimensions
- obsolete main accounts still in use

What is the strongest remediation?`,
      options: [
        'Centralize governance for chart, dimensions, customers, and vendors with defined ownership, approval, validation, and periodic cleanup.',
        'Allow each business unit to create masters independently for speed.',
        'Create more dimensions so every team can report differently.',
        'Keep obsolete accounts indefinitely to avoid migration work.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Core finance master data needs governed creation and lifecycle management. Why not B: uncontrolled local creation causes drift. Why not C: more dimensions can worsen complexity. Why not D: obsolete accounts can create inconsistent posting and reporting.'
    },

    {
      id: 'd365-16',
      type: 'mcq',
      title: 'Fixed Asset Lifecycle',
      difficulty: 'hard',
      points: 5,
      prompt: `A machine is permanently removed from service but remains active and continues depreciating.

What is the strongest response?`,
      options: [
        'Leave it active until net book value reaches zero.',
        'Review whether it should be retired, impaired, transferred, or otherwise updated according to policy and actual asset status.',
        'Delete the asset record.',
        'Move depreciation to Miscellaneous Expense.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Asset accounting should reflect the actual lifecycle state. Why not A: continued depreciation may be inappropriate. Why not C: deletion destroys history. Why not D: reclassifying expense does not correct asset status.'
    },

    {
      id: 'd365-17',
      type: 'mcq',
      title: 'Duplicate Invoice Detection',
      difficulty: 'hard',
      points: 5,
      prompt: `Two invoices from the same vendor have:
- same amount
- same date
- references INV-7784 and INV7784

What is the strongest AP-control response?`,
      options: [
        'Pay both because the invoice references are technically different.',
        'Flag for duplicate review using normalized reference, vendor, amount, date, PO, and receipt evidence before payment.',
        'Delete one automatically.',
        'Ignore duplicates for strategic suppliers.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Duplicate detection should account for formatting variations and supporting transaction context. Why not A: trivial reference differences can hide duplicates. Why not C: evidence is required before deletion. Why not D: strategic status does not remove payment controls.'
    },

    {
      id: 'd365-18',
      type: 'mcq',
      title: 'Management Reporting Context',
      difficulty: 'hard',
      points: 5,
      prompt: `The CFO sees revenue growth of 12%, but one legal entity has:
- margin down 5 points
- overdue receivables up 40%
- cash flow down 28%
- AP exceptions doubled

What is the strongest message?`,
      options: [
        'Performance is strong because consolidated revenue is growing.',
        'The entity’s growth quality is deteriorating, with weaker margin, collections, cash conversion, and AP-control signals requiring targeted action.',
        'Only revenue should be reported at executive level.',
        'AP exceptions are operational and should be excluded from finance reporting.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong reporting connects entity context, economics, working capital, cash, and control exceptions. Why not A: consolidated growth can hide entity-level deterioration. Why not C: revenue alone is incomplete. Why not D: AP exceptions can affect liabilities, cash, and close quality.'
    },

    {
      id: 'd365-19',
      type: 'mcq',
      title: 'Close Control Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `The controller sees:

{{diagram}}

What is the strongest conclusion?`,
      diagram: `flowchart TB
  AP["AP-GL break<br/><b>$850k</b>"] --> J["Close judgment"]
  AR["Unapplied cash<br/><b>$1.9m</b>"] --> J
  FA["Unposted asset additions<br/><b>$640k</b>"] --> J
  IC["Intercompany mismatch<br/><b>$420k</b>"] --> J
  WF["Overdue approvals<br/><b>37</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class AP,AR,FA,IC,WF,J warning;`,
      options: [
        'Close can proceed because no individual issue exceeds $2m.',
        'Multiple unresolved dependencies remain across subledgers, intercompany, and workflow, so close should not be considered complete until they are resolved or formally controlled.',
        'Only unapplied cash matters because it is the largest number.',
        'Post one GL adjustment for the combined amount.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Close quality depends on resolution of material cross-process exceptions, not just the largest item. Why not A: materiality is not a simple per-item threshold. Why not C: several issues can be significant. Why not D: one plug journal would conceal unrelated causes.'
    },

    {
      id: 'd365-20',
      type: 'mcq',
      title: 'Integrated Dynamics 365 Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A finance transformation review finds:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  DIM["Uncontrolled dimensions"] --> J["Finance operating model redesign"]
  VEN["Weak vendor-master controls"] --> J
  P2P["Frequent match overrides"] --> J
  AR["Unapplied cash backlog"] --> J
  FA["Asset lifecycle issues"] --> J
  IC["Intercompany breaks"] --> J
  SOD["SoD conflicts"] --> J
  CL["Late / inconsistent close"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class DIM,VEN,P2P,AR,FA,IC,SOD,CL,J warning;`,
      options: [
        'Focus only on system speed because process quality follows system performance.',
        'Redesign the end-to-end finance control model across master data, dimensions, workflows, P2P/O2C, reconciliation, SoD, intercompany, and close governance.',
        'Post more transactions directly to GL to reduce workflow complexity.',
        'Move controls into offline spreadsheets owned by each team.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The weaknesses are systemic and require integrated process and control redesign. Why not A: system speed does not fix governance. Why not C: bypassing subledgers/workflows can weaken traceability. Why not D: fragmented offline controls reduce enterprise consistency.'
    },
  ],
};
