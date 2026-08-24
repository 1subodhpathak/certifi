import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const zohoBooksData = {
  id: ASSESSMENT_TYPES.zoho_books,
  title: 'Zoho Books Accounting Professional Certification',
  shortTitle: 'Zoho Books',
  category: 'Accounting',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical Zoho Books accounting judgment across organization setup, chart of accounts, GST configuration, receivables, payables, bank feeds, reconciliation, inventory, automation, access control, reporting, audit trail, month-end close, and implementation readiness.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Several questions include Mermaid diagrams, accounting workflows, or reconciliation schedules. Read the complete scenario before choosing. Options are intentionally close, so select the answer that is both technically correct and operationally sound. No negative marking.',

  questions: [
    {
      id: 'zb-01',
      type: 'mcq',
      title: 'Organization Setup',
      difficulty: 'easy',
      points: 5,
      prompt: `A company is setting up Zoho Books for the first time.

It operates in India, reports on an April-March fiscal year, and has transactions in INR and USD.

Which setup decision is most important before live transactions begin?`,
      options: [
        'Choose a theme and invoice color before configuring accounting.',
        'Confirm base currency, fiscal year, tax registrations, chart of accounts, and opening balances before transaction processing starts.',
        'Create all customer invoices first and configure tax settings later.',
        'Import bank transactions before defining the accounting structure.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Core organization settings drive downstream posting, tax, and reporting logic. Why not A: branding is secondary. Why not C: tax and accounting settings should be established before live invoicing. Why not D: bank data should not be imported into an undefined accounting structure.'
    },

    {
      id: 'zb-02',
      type: 'mcq',
      title: 'Chart of Accounts Design',
      difficulty: 'easy',
      points: 5,
      prompt: `A business creates separate expense accounts for every vendor, resulting in more than 300 expense accounts.

What is the strongest redesign?`,
      options: [
        'Keep one account per vendor because supplier-level detail belongs in the chart of accounts.',
        'Use meaningful natural-account categories in the chart of accounts and use vendor records/reports for supplier-level analysis.',
        'Move all expenses into one generic Miscellaneous Expense account.',
        'Delete the entire chart of accounts and rebuild historical transactions manually.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The chart of accounts should represent economic categories, while vendor-level detail belongs in vendor and transaction reporting. Why not A: this makes the chart unnecessarily complex. Why not C: it removes useful classification. Why not D: a full historical rebuild is unnecessary and risky.'
    },

    {
      id: 'zb-03',
      type: 'mcq',
      title: 'GST Treatment',
      difficulty: 'easy',
      points: 5,
      prompt: `A registered business sells taxable goods to customers in multiple states.

Why must customer and transaction GST treatment be configured carefully?`,
      options: [
        'Because it changes how invoice templates are displayed.',
        'Because place of supply, registration status, and tax treatment can affect tax calculation and return reporting.',
        'Because GST settings determine employee payroll.',
        'Because bank feeds will not work unless every customer has the same tax code.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GST treatment can affect tax type, rate, invoice compliance, and return reporting. Why not A: design is not the core issue. Why not C: GST transaction configuration is separate from payroll. Why not D: bank feeds do not require identical customer tax treatment.'
    },

    {
      id: 'zb-04',
      type: 'mcq',
      title: 'Customer Sales Flow',
      difficulty: 'easy',
      points: 5,
      prompt: `A customer receives services today under 30-day credit terms.

Which Zoho Books workflow is strongest?`,
      options: [
        'Create an Invoice now and apply the customer payment when cash is received.',
        'Record a Payment Received immediately even though no money has arrived.',
        'Create a Vendor Bill because payment will happen later.',
        'Post a manual journal for every sale instead of using customer transactions.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. An invoice records revenue and Accounts Receivable until the customer pays. Why not B: no cash has been received. Why not C: vendor bills belong to payables. Why not D: standard transaction forms preserve customer subledger and audit detail better than unnecessary manual journals.'
    },

    {
      id: 'zb-05',
      type: 'mcq',
      title: 'Vendor Bill Workflow',
      difficulty: 'easy',
      points: 5,
      prompt: `A supplier invoice for ₹450,000 is received this month for services already consumed. Payment is due next month.

What should be recorded now?`,
      options: [
        'A Vendor Bill that records the expense and Accounts Payable.',
        'A Customer Credit Note.',
        'A bank withdrawal even though payment has not occurred.',
        'Nothing until the supplier is paid.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The bill records the current-period expense and liability before cash payment. Why not B: customer credit notes affect receivables. Why not C: there is no bank movement yet. Why not D: waiting would understate expense and liabilities under accrual accounting.'
    },

    {
      id: 'zb-06',
      type: 'mcq',
      title: 'Bank Feed Matching',
      difficulty: 'medium',
      points: 5,
      prompt: `A ₹125,000 customer payment has already been recorded and applied to an invoice.

The same ₹125,000 later appears in the bank feed.

What is the strongest action?`,
      options: [
        'Categorize the bank-feed item as new Sales Income.',
        'Match the bank-feed item to the existing recorded transaction rather than creating another entry.',
        'Delete the original customer payment and keep only the feed entry.',
        'Post the feed item to Accounts Payable.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The transaction already exists in the books and should be matched. Why not A: this can duplicate income or cash. Why not C: deleting the original can break customer history and A/R settlement. Why not D: it is unrelated to payables.'
    },

    {
      id: 'zb-07',
      type: 'mcq',
      title: 'Bank Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `At month-end:

Bank statement balance: ₹2,480,000
Outstanding checks: ₹180,000
Deposit in transit: ₹70,000
Zoho Books cash balance: ₹2,370,000

{{diagram}}

What does the reconciliation show?`,
      diagram: `flowchart LR
  B["Bank statement<br/><b>₹2,480,000</b>"] --> R["Adjusted bank balance"]
  O["Less outstanding checks<br/><b>₹180,000</b>"] --> R
  D["Add deposit in transit<br/><b>₹70,000</b>"] --> R
  classDef calc fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class B,O,D,R calc;`,
      options: [
        'Adjusted bank balance is ₹2,230,000, so Zoho Books is overstated.',
        'Adjusted bank balance is ₹2,370,000, so the stated reconciling items explain the difference.',
        'Adjusted bank balance is ₹2,730,000, so the books are understated.',
        'The reconciliation cannot work because outstanding checks should be added.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. ₹2,480,000 - ₹180,000 + ₹70,000 = ₹2,370,000, which agrees to the books. Why not A: it subtracts both reconciling items. Why not C: it adds both. Why not D: outstanding checks reduce the bank-side adjusted balance.'
    },

    {
      id: 'zb-08',
      type: 'mcq',
      title: 'Workflow Automation',
      difficulty: 'medium',
      points: 5,
      prompt: `A company wants an automation that sends overdue reminders automatically.

Some key customers have negotiated grace periods that differ from standard terms.

What is the strongest implementation approach?`,
      options: [
        'Enable the automation for every customer immediately because consistency is more important than exceptions.',
        'Define the rule carefully, test customer segments and exceptions, and prevent automated reminders from violating approved special terms.',
        'Avoid all automation because finance communication should always be manual.',
        'Send reminders daily to ensure customers cannot miss them.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Automation should preserve approved business rules and exceptions. Why not A: blanket automation can create incorrect customer communication. Why not C: automation can be valuable when designed with controls. Why not D: excessive reminders can damage customer relationships.'
    },

    {
      id: 'zb-09',
      type: 'mcq',
      title: 'Inventory Accounting',
      difficulty: 'medium',
      points: 5,
      prompt: `A retailer buys an item for ₹600 and sells it later for ₹1,000.

The item is mistakenly configured so purchases post directly to expense instead of inventory.

What is the likely accounting effect before sale?`,
      options: [
        'Inventory may be understated and expense recognized too early.',
        'Revenue will automatically be overstated by ₹400.',
        'Cash will be overstated.',
        'Accounts Receivable cannot be created.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Inventory cost generally remains an asset until the item is sold; expensing purchases immediately can understate inventory and accelerate expense recognition. Why not B: the setup error affects cost timing, not automatically revenue. Why not C: cash does not become overstated merely from classification. Why not D: A/R creation is unrelated.'
    },

    {
      id: 'zb-10',
      type: 'mcq',
      title: 'Credit Note',
      difficulty: 'medium',
      points: 5,
      prompt: `A customer was invoiced ₹90,000, but goods worth ₹15,000 were returned before payment.

What is the strongest treatment?`,
      options: [
        'Delete the original invoice.',
        'Issue a ₹15,000 Credit Note and apply it against the customer invoice.',
        'Create a vendor credit.',
        'Post ₹15,000 to Miscellaneous Expense.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A customer credit note reduces receivables and preserves the transaction trail. Why not A: deleting the invoice obscures the original transaction. Why not C: vendor credits relate to supplier transactions. Why not D: an unrelated expense does not properly reduce the customer balance.'
    },

    {
      id: 'zb-11',
      type: 'mcq',
      title: 'User Roles',
      difficulty: 'medium',
      points: 5,
      prompt: `A junior accountant can create vendors, change bank details, enter bills, approve payments, and modify tax settings.

What is the strongest control concern?`,
      options: [
        'The user may take longer because too many menus are visible.',
        'The access profile violates segregation-of-duties and least-privilege principles.',
        'Zoho Books should not allow junior employees to log in at all.',
        'The only issue is that tax settings should be hidden.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Combining vendor maintenance, transaction entry, approval, and configuration creates fraud and error risk. Why not A: usability is not the principal issue. Why not C: junior users can have appropriate limited roles. Why not D: the risk spans several incompatible responsibilities.'
    },

    {
      id: 'zb-12',
      type: 'mcq',
      title: 'GST Reconciliation',
      difficulty: 'hard',
      points: 5,
      prompt: `Zoho Books reports GST payable of ₹1.82m for the period.

The draft GST return shows ₹1.69m.

What is the strongest next step?`,
      options: [
        'Submit the lower amount because the return portal should be treated as authoritative.',
        'Reconcile the ₹130,000 difference by transaction, tax code, adjustment, and reporting period before filing or payment.',
        'Post ₹130,000 to Tax Expense so the balances agree.',
        'Ignore the difference if it is less than 10% of the liability.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Tax liability and return output should be reconciled before submission. Why not A: portal output may reflect incomplete or incorrect data. Why not C: a plug expense hides the root cause. Why not D: compliance discrepancies require investigation regardless of a simplistic percentage threshold.'
    },

    {
      id: 'zb-13',
      type: 'mcq',
      title: 'Audit Trail Investigation',
      difficulty: 'hard',
      points: 5,
      prompt: `A ₹320,000 expense that was present in last month’s closed P&L no longer appears.

{{diagram}}

What is the strongest investigation?`,
      diagram: `flowchart LR
  P["Prior period report<br/><b>Expense present</b>"] --> C["Current report<br/><b>Expense missing</b>"]
  C --> A["Review audit trail<br/>user · timestamp · change"]
  A --> R["Determine edit / deletion<br/>and correct with approval"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class C,A,R warning;`,
      options: [
        'Re-enter the expense immediately without checking the audit trail.',
        'Review audit history to identify who changed or deleted the transaction and correct it through a documented process.',
        'Ignore the change because the current cash balance still reconciles.',
        'Post the amount into the current month to keep year-to-date expense unchanged.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Audit history should identify the source of the change and support a controlled correction. Why not A: blind re-entry can duplicate or misclassify the transaction. Why not C: closed-period integrity matters. Why not D: moving the impact to the current month distorts period reporting.'
    },

    {
      id: 'zb-14',
      type: 'mcq',
      title: 'A/R Aging and Liquidity',
      difficulty: 'hard',
      points: 5,
      prompt: `Leadership asks why cash is tight despite strong revenue growth.

Zoho Books shows:

{{diagram}}

What is the strongest interpretation?`,
      diagram: `flowchart TB
  R["Revenue<br/><b>+18%</b>"] --> J["Liquidity review"]
  AR["A/R 90+ days<br/><b>₹8.4m</b>"] --> J
  AP["Payables due in 30 days<br/><b>₹6.9m</b>"] --> J
  C["Cash<br/><b>₹2.1m</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class AR,AP,C,J warning;`,
      options: [
        'The company is liquid because revenue is growing.',
        'Slow collections are tying up cash while near-term supplier obligations remain high, creating working-capital pressure.',
        'Only payables matter because receivables are assets.',
        'The business should immediately stop all sales.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Revenue growth does not create cash until receivables are collected, and large near-term payables intensify liquidity pressure. Why not A: growth can consume cash. Why not C: receivable timing is central to liquidity. Why not D: the data supports collection and cash-management action, not automatically stopping sales.'
    },

    {
      id: 'zb-15',
      type: 'mcq',
      title: 'Duplicate Vendor Payment Risk',
      difficulty: 'hard',
      points: 5,
      prompt: `A Vendor Bill was entered and paid through the normal bill-payment workflow.

The same bank withdrawal later appears in the feed, and a user is about to categorize it again as an expense.

What is the strongest action?`,
      options: [
        'Add it as a new expense so the bank feed can be cleared.',
        'Match the bank-feed transaction to the existing payment and investigate before creating any new posting.',
        'Delete the original Vendor Bill.',
        'Create a customer credit note.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The withdrawal already exists in the accounting records, so adding it again can duplicate expense and cash activity. Why not A: clearing the feed is not more important than avoiding duplication. Why not C: deleting the original bill can break A/P history. Why not D: customer credit notes are unrelated.'
    },

    {
      id: 'zb-16',
      type: 'mcq',
      title: 'Month-End Close',
      difficulty: 'hard',
      points: 5,
      prompt: `Before closing the month, finance sees:

- two unreconciled bank accounts
- old customer balances over 120 days
- an unexplained tax liability difference
- several manual journals posted on the final day
- no documented review sign-off

Which sequence is strongest?`,
      options: [
        'Lock the month immediately to prevent any more changes.',
        'Complete reconciliations, investigate aging and tax differences, review material manual entries, validate statements, document open issues, and then close the period.',
        'Export reports first and review the exceptions next month.',
        'Delete unresolved items so the month can close on time.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A controlled close validates key balances and exceptions before lock. Why not A: locking too early prevents necessary corrections. Why not C: knowingly carrying unexplained issues weakens the close. Why not D: deletion is not resolution.'
    },

    {
      id: 'zb-17',
      type: 'mcq',
      title: 'Opening Balance Migration',
      difficulty: 'hard',
      points: 5,
      prompt: `During migration into Zoho Books, the implementation team imports customer and vendor opening balances but does not reconcile them to the legacy trial balance.

What is the primary risk?`,
      options: [
        'Invoice templates may display old branding.',
        'Opening A/R, A/P, and control-account balances may not agree, causing unreliable reporting from day one.',
        'Bank feeds will permanently stop working.',
        'Tax rates will automatically double.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Migration must preserve agreement between subledgers, control accounts, and the opening trial balance. Why not A: branding is unrelated. Why not C: bank feeds are not permanently disabled by this issue. Why not D: tax rates do not automatically change because of balance migration.'
    },

    {
      id: 'zb-18',
      type: 'mcq',
      title: 'Cutover Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A business plans to go live on Zoho Books next Monday.

Testing has covered invoice creation but not:
- vendor payments
- GST returns
- credit notes
- bank reconciliation
- opening-balance agreement

What is the strongest implementation decision?`,
      options: [
        'Go live anyway because invoicing is the most important process.',
        'Complete critical end-to-end testing and reconcile opening data before cutover, or formally delay the go-live if material risks remain.',
        'Go live and fix tax and reconciliation problems after the first month.',
        'Skip user acceptance testing because the software is commercially established.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A production accounting rollout should validate critical transaction cycles, compliance output, and opening balances before cutover. Why not A: invoicing alone does not prove the accounting system is ready. Why not C: live remediation can corrupt financial and tax records. Why not D: product maturity does not replace organization-specific testing.'
    },

    {
      id: 'zb-19',
      type: 'mcq',
      title: 'Management Reporting',
      difficulty: 'hard',
      points: 5,
      prompt: `The CFO wants a monthly Zoho Books pack.

Which combination is most useful?`,
      options: [
        'Only the Profit & Loss statement.',
        'P&L, Balance Sheet, cash position, A/R and A/P aging, tax liabilities, material variances, and exception commentary.',
        'Only invoice counts and customer names.',
        'A raw export of every journal entry with no summary.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Management needs an integrated view of performance, financial position, liquidity, working capital, tax, and exceptions. Why not A: P&L alone misses balance-sheet and cash risks. Why not C: invoice counts are too narrow. Why not D: raw detail without synthesis is not decision-ready.'
    },

    {
      id: 'zb-20',
      type: 'mcq',
      title: 'Integrated Zoho Books Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A controller reviews a Zoho Books implementation and finds:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  COA["Duplicate / unclear accounts"] --> J["Control redesign"]
  TAX["GST differences"] --> J
  BANK["Unmatched bank-feed items"] --> J
  AR["Old receivables"] --> J
  ACCESS["Excess user access"] --> J
  CLOSE["No formal month-end close"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class COA,TAX,BANK,AR,ACCESS,CLOSE,J warning;`,
      options: [
        'Focus only on the chart of accounts because the other issues are operational.',
        'Establish a governed accounting operating model covering account structure, tax configuration, bank matching, reconciliations, aging review, access control, audit monitoring, and a documented close.',
        'Create a new Zoho Books organization and abandon all historical information immediately.',
        'Export all data to spreadsheets and stop using system controls.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The problems are systemic and span configuration, accounting operations, compliance, access, and close governance. Why not A: the chart of accounts is only one component. Why not C: a new system instance does not fix weak processes. Why not D: spreadsheets would weaken rather than strengthen controls.'
    },
  ],
};
