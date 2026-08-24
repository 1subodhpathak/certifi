import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const quickbooksData = {
  id: ASSESSMENT_TYPES.quickbooks,
  title: 'QuickBooks Bookkeeping & Accounting Professional Certification',
  shortTitle: 'QuickBooks',
  category: 'Finance',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical QuickBooks bookkeeping judgment across chart of accounts, customer and vendor workflows, bank feeds, reconciliations, Undeposited Funds, accounts receivable and payable, sales tax, inventory, journal entries, payroll liabilities, reporting, audit trail, and month-end close.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Several questions include Mermaid diagrams, bookkeeping flows, or reconciliation schedules. Read the complete scenario before choosing. Options are intentionally close, so select the answer that is both technically correct and operationally sound. No negative marking.',

  questions: [
    {
      id: 'qb-01',
      type: 'mcq',
      title: 'Chart of Accounts Design',
      difficulty: 'easy',
      points: 5,
      prompt: `A growing consulting company has created separate expense accounts for every supplier, resulting in more than 400 expense accounts.

What is the strongest redesign?`,
      options: [
        'Keep one GL account per supplier because more accounts always improve reporting.',
        'Use a structured chart of accounts based on the economic nature of transactions, while using vendor records and reporting dimensions for supplier-level detail.',
        'Move all expenses into one Miscellaneous Expense account.',
        'Delete historical accounts and re-enter all transactions from the beginning.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The chart of accounts should represent meaningful accounting categories, not duplicate the vendor master. Vendor-level detail belongs in transaction and vendor reporting. Why not A: excessive accounts create clutter and inconsistent classification. Why not C: one catch-all account destroys useful financial analysis. Why not D: historical re-entry is unnecessary and risky.'
    },

    {
      id: 'qb-02',
      type: 'mcq',
      title: 'Invoice vs Sales Receipt',
      difficulty: 'easy',
      points: 5,
      prompt: `A customer receives services today but will pay under 30-day credit terms.

Which QuickBooks workflow is most appropriate?`,
      options: [
        'Create a Sales Receipt because revenue has already been earned.',
        'Create an Invoice so revenue and Accounts Receivable are recorded until payment is received.',
        'Create a Bill because payment will occur later.',
        'Record a Bank Deposit immediately even though no cash was received.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. An invoice is used when the customer owes the business after the sale. Why not A: a Sales Receipt is generally appropriate when payment is received at the time of sale. Why not C: Bills are vendor-side obligations. Why not D: no bank deposit exists yet.'
    },

    {
      id: 'qb-03',
      type: 'mcq',
      title: 'Bank Feed Matching',
      difficulty: 'easy',
      points: 5,
      prompt: `A $4,800 customer payment was already recorded against an open invoice.

The same $4,800 later appears in the bank feed.

What is the strongest action?`,
      options: [
        'Add the bank-feed item as new income so the bank balance matches.',
        'Match the bank-feed transaction to the existing recorded payment or deposit rather than creating a duplicate.',
        'Delete the original customer payment and keep only the bank-feed item.',
        'Post the bank-feed item to Accounts Payable.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The transaction already exists in the books, so the bank-feed item should be matched, not added again. Why not A: adding it duplicates income or cash activity. Why not C: deleting a valid customer transaction can break A/R history. Why not D: Accounts Payable is unrelated.'
    },

    {
      id: 'qb-04',
      type: 'mcq',
      title: 'Vendor Bill Workflow',
      difficulty: 'easy',
      points: 5,
      prompt: `A supplier sends a $12,000 invoice today for services already received. The company will pay it next month.

Which workflow preserves Accounts Payable correctly?`,
      options: [
        'Enter a Bill now, then use the bill-payment workflow when cash is paid.',
        'Record an Expense now and another Expense when payment is made.',
        'Create a customer Invoice because an invoice document was received.',
        'Wait until payment occurs and record nothing in the current period.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Entering a Bill records the current-period expense and Accounts Payable; the later payment clears the liability. Why not B: that can duplicate expense. Why not C: customer invoices are for amounts customers owe the business. Why not D: this understates expense and liabilities under accrual accounting.'
    },

    {
      id: 'qb-05',
      type: 'mcq',
      title: 'Undeposited Funds',
      difficulty: 'easy',
      points: 5,
      prompt: `Three customers pay $1,200, $800, and $2,000 during the day. The bank receives one combined deposit of $4,000.

{{diagram}}

Which workflow makes reconciliation easiest?`,
      diagram: `flowchart LR
  C1["Customer A<br/><b>$1,200</b>"] --> UF["Undeposited Funds"]
  C2["Customer B<br/><b>$800</b>"] --> UF
  C3["Customer C<br/><b>$2,000</b>"] --> UF
  UF --> D["Bank Deposit<br/><b>$4,000</b>"]
  classDef hold fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class UF,D hold;`,
      options: [
        'Record each payment directly to the bank account as three separate deposits.',
        'Receive each payment into Undeposited Funds and combine them into one $4,000 Bank Deposit matching the bank statement.',
        'Record one $4,000 Sales Receipt and ignore the individual customer payments.',
        'Post the difference between customer payments and the bank deposit to Miscellaneous Income.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Undeposited Funds is designed to group individually received payments into the same combined deposit that appears at the bank. Why not A: the books would show three deposits while the bank shows one, complicating matching. Why not C: customer-level A/R history would be lost or misstated. Why not D: there is no difference to recognize as income.'
    },

    {
      id: 'qb-06',
      type: 'mcq',
      title: 'Bank Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `At month-end:

Bank statement balance: $92,400
Outstanding checks: $8,600
Deposit in transit: $3,200
QuickBooks cash balance: $87,000

{{diagram}}

What does the reconciliation show?`,
      diagram: `flowchart LR
  B["Bank statement<br/><b>$92,400</b>"] --> R["Adjusted bank balance"]
  O["Less outstanding checks<br/><b>$8,600</b>"] --> R
  D["Add deposit in transit<br/><b>$3,200</b>"] --> R
  classDef calc fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class B,O,D,R calc;`,
      options: [
        'Adjusted bank balance is $80,600, so QuickBooks is overstated.',
        'Adjusted bank balance is $87,000, so the stated reconciling items explain the difference.',
        'Adjusted bank balance is $104,200, so QuickBooks is understated.',
        'The reconciliation cannot be completed because outstanding checks should be added.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. $92,400 - $8,600 + $3,200 = $87,000, which agrees to QuickBooks. Why not A: it subtracts both adjustments. Why not C: it adds both. Why not D: outstanding checks reduce the bank-side adjusted balance.'
    },

    {
      id: 'qb-07',
      type: 'mcq',
      title: 'Reconciliation Discrepancy',
      difficulty: 'medium',
      points: 5,
      prompt: `Last month’s bank reconciliation was completed successfully.

This month QuickBooks reports a beginning-balance discrepancy of $2,750.

What is the strongest first investigation?`,
      options: [
        'Force the opening balance to match the bank statement with a journal entry.',
        'Review changes to previously reconciled transactions and the audit trail to identify whether a reconciled item was edited, deleted, or unreconciled.',
        'Ignore the discrepancy if current-month deposits look correct.',
        'Create a new bank account in QuickBooks and move the current balance there.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A beginning-balance discrepancy commonly indicates that a previously reconciled transaction changed after reconciliation. Why not A: a plug journal hides the cause. Why not C: prior-period integrity still matters. Why not D: opening a new account does not fix the historical break.'
    },

    {
      id: 'qb-08',
      type: 'mcq',
      title: 'Duplicate Vendor Payment',
      difficulty: 'medium',
      points: 5,
      prompt: `A vendor bill for $18,500 was entered and later paid through Pay Bills.

The bank feed now shows the $18,500 withdrawal, and a bookkeeper is about to categorize it directly to Office Expense.

What is the primary risk?`,
      options: [
        'The vendor will receive a second physical payment.',
        'The expense and cash outflow may be recorded twice if the bank-feed item is added instead of matched to the existing bill payment.',
        'Accounts Receivable will be overstated.',
        'The original Bill will automatically be deleted.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The withdrawal already exists through the Bill Payment, so the bank-feed item should be matched. Why not A: categorizing the bank feed does not itself send money again, though it corrupts the books. Why not C: this is an A/P transaction. Why not D: bank-feed categorization does not automatically delete the Bill.'
    },

    {
      id: 'qb-09',
      type: 'mcq',
      title: 'Accounts Receivable Aging',
      difficulty: 'medium',
      points: 5,
      prompt: `The A/R Aging report shows:

{{diagram}}

Current: $120,000
31-60 days: $70,000
61-90 days: $45,000
90+ days: $110,000

What is the strongest management interpretation?`,
      diagram: `flowchart TB
  C["Current<br/><b>$120k</b>"] --> A["A/R Aging"]
  D1["31-60<br/><b>$70k</b>"] --> A
  D2["61-90<br/><b>$45k</b>"] --> A
  D3["90+<br/><b>$110k</b>"] --> A
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class D3,A warning;`,
      options: [
        'Collections appear healthy because most receivables are not yet written off.',
        'The $110,000 in 90+ day balances requires focused collection review, dispute analysis, and assessment of collectibility.',
        'The company should move all 90+ balances to revenue.',
        'A/R aging is irrelevant if the Profit and Loss report shows a profit.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Old receivables can signal collection problems, disputes, or credit risk and require targeted follow-up. Why not A: age matters even before write-off. Why not C: the balances are already receivables tied to previously recognized sales. Why not D: profitability does not guarantee cash collection.'
    },

    {
      id: 'qb-10',
      type: 'mcq',
      title: 'Accounts Payable Aging',
      difficulty: 'medium',
      points: 5,
      prompt: `The A/P Aging report includes a $26,000 Bill that the operations manager says was paid two weeks ago.

The bank confirms a $26,000 payment cleared.

What is the strongest bookkeeping investigation?`,
      options: [
        'Delete the Bill because the bank proves payment occurred.',
        'Check whether the payment was recorded directly as an Expense or Check instead of being applied to the open Bill, then correct the linkage without duplicating expense.',
        'Create a credit memo for the vendor.',
        'Pay the Bill again so QuickBooks shows it as closed.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A common error is recording the cash payment separately without applying it to the Bill, leaving A/P open and potentially duplicating expense. Why not A: deleting a valid Bill may remove the original liability/expense trail. Why not C: vendor credits are for actual reductions or returns, not bookkeeping linkage. Why not D: that would duplicate cash payment.'
    },

    {
      id: 'qb-11',
      type: 'mcq',
      title: 'Credit Memo Usage',
      difficulty: 'medium',
      points: 5,
      prompt: `A customer was invoiced $9,000, but $1,500 of work was cancelled after invoicing.

The customer has not yet paid.

What is the strongest QuickBooks treatment?`,
      options: [
        'Edit the original invoice to $7,500 without preserving evidence of the change.',
        'Create a $1,500 customer Credit Memo and apply it to the invoice so the remaining A/R becomes $7,500.',
        'Enter a vendor Credit because the business owes the customer money.',
        'Record a $1,500 Expense to reduce profit.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A customer Credit Memo provides a clear reduction to A/R while preserving the original invoice trail. Why not A: editing can obscure the audit trail depending on process and policy. Why not C: vendor credits belong to A/P. Why not D: the adjustment should reduce the customer balance and relevant revenue account, not simply create an unrelated expense.'
    },

    {
      id: 'qb-12',
      type: 'mcq',
      title: 'Sales Tax Configuration',
      difficulty: 'medium',
      points: 5,
      prompt: `A business begins selling into a jurisdiction where a new category of its products is taxable.

What is the strongest setup approach?`,
      options: [
        'Manually add an estimated tax amount to each invoice as a separate income line.',
        'Confirm the tax obligation and product/customer treatment, configure the appropriate sales-tax settings, test representative transactions, and reconcile tax liability reporting before filing.',
        'Continue treating all sales as non-taxable until the first tax notice arrives.',
        'Book sales tax directly to revenue because it is collected from customers.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Sales-tax setup requires correct jurisdictional treatment, configuration, testing, and liability reconciliation. Why not A: manual estimates create inconsistent tax calculation. Why not C: reactive compliance creates exposure. Why not D: sales tax collected generally creates a liability rather than company revenue.'
    },

    {
      id: 'qb-13',
      type: 'mcq',
      title: 'Inventory Item Setup',
      difficulty: 'hard',
      points: 5,
      prompt: `A retailer buys an item for $60 and sells it for $100.

The bookkeeper mistakenly configures the item so purchases post directly to Cost of Goods Sold rather than inventory.

What is the likely effect before the item is sold?`,
      options: [
        'Inventory may be understated and expense recognized too early.',
        'Revenue will be overstated by $40.',
        'Accounts Payable cannot be created.',
        'Cash will automatically be overstated.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. For inventory accounting, product cost generally remains an asset until sale; posting purchases directly to COGS can expense cost prematurely and understate inventory. Why not B: the setup error affects cost recognition, not automatically revenue. Why not C: vendor liabilities can still be recorded. Why not D: no automatic cash overstatement follows.'
    },

    {
      id: 'qb-14',
      type: 'mcq',
      title: 'Loan Payment Split',
      difficulty: 'hard',
      points: 5,
      prompt: `A monthly bank withdrawal of $10,500 relates to a loan.

The lender statement shows:
Principal: $8,900
Interest: $1,600

How should the transaction generally be classified?`,
      options: [
        'Debit Loan Payable $8,900, debit Interest Expense $1,600, credit Cash $10,500.',
        'Debit Interest Expense $10,500, credit Cash $10,500.',
        'Debit Loan Payable $10,500, credit Cash $10,500.',
        'Debit Equipment $8,900, debit Interest Expense $1,600, credit Cash $10,500.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Principal reduces the loan liability while interest is a current-period expense. Why not B: it fails to reduce principal. Why not C: it treats interest as principal. Why not D: repayment does not create a new equipment asset.'
    },

    {
      id: 'qb-15',
      type: 'mcq',
      title: 'Deferred Revenue',
      difficulty: 'hard',
      points: 5,
      prompt: `A customer pays $24,000 on December 1 for a 12-month service contract beginning that day.

By December 31, one month of service has been delivered.

What is the strongest year-end accounting treatment?`,
      options: [
        'Recognize all $24,000 as December revenue because cash was received.',
        'Recognize $2,000 as revenue and leave $22,000 as a liability for future service.',
        'Recognize no revenue until the contract ends.',
        'Record the full $24,000 as Accounts Receivable.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. One month of a 12-month service has been earned, so $2,000 is revenue and the remaining $22,000 is deferred/unearned revenue. Why not A: cash receipt does not mean all service has been earned. Why not C: revenue should be recognized as performance occurs. Why not D: cash has already been collected.'
    },

    {
      id: 'qb-16',
      type: 'mcq',
      title: 'Payroll Liability',
      difficulty: 'hard',
      points: 5,
      prompt: `The payroll register shows $18,000 withheld from employees for taxes.

The payroll liability account in QuickBooks shows only $11,500 before remittance.

What is the strongest response?`,
      options: [
        'Pay $11,500 because the QuickBooks liability balance is the official amount.',
        'Reconcile payroll reports, liability postings, prior payments, and adjustments to identify the $6,500 difference before remitting or clearing the liability.',
        'Post $6,500 directly to Payroll Expense so the liability matches.',
        'Ignore the difference until year-end.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Payroll liabilities should reconcile to underlying payroll calculations and remittances. Why not A: an unexplained system balance may be wrong. Why not C: forcing the difference to expense can conceal a posting or payment error. Why not D: statutory liabilities require timely resolution.'
    },

    {
      id: 'qb-17',
      type: 'mcq',
      title: 'Audit Log Investigation',
      difficulty: 'hard',
      points: 5,
      prompt: `A reconciled $7,200 expense disappeared from last month’s P&L after the period was closed.

{{diagram}}

What is the strongest QuickBooks control investigation?`,
      diagram: `flowchart LR
  P["Prior closed period<br/><b>$7,200 expense present</b>"] --> C["Current report<br/><b>expense missing</b>"]
  C --> A["Review Audit Log<br/>user · date · action"]
  A --> R["Determine whether transaction<br/>was edited or deleted"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class C,A,R warning;`,
      options: [
        'Re-enter a new $7,200 expense immediately without checking what happened.',
        'Use the Audit Log and reconciliation history to determine who changed or deleted the transaction, then restore or correct it with documented approval.',
        'Ignore the prior-period change because the current bank balance is correct.',
        'Increase current-month expense by $7,200 to compensate.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The audit trail should identify the change and support a controlled correction. Why not A: blind re-entry can duplicate the item if the original was merely reclassified. Why not C: closed-period integrity matters even if cash currently reconciles. Why not D: pushing the error into the current period distorts period reporting.'
    },

    {
      id: 'qb-18',
      type: 'mcq',
      title: 'Class and Location Tracking',
      difficulty: 'hard',
      points: 5,
      prompt: `Management wants profitability by department and by physical branch.

What is the strongest design principle?`,
      options: [
        'Create separate income and expense GL accounts for every department and branch combination.',
        'Use the chart of accounts for natural account classification and use tracking dimensions such as classes/locations consistently for management reporting where supported by the setup.',
        'Put department and branch names only in transaction memos.',
        'Maintain completely separate QuickBooks companies for every department even though they are one legal entity.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Management dimensions should not unnecessarily explode the chart of accounts. Why not A: this creates a complex and difficult-to-maintain COA. Why not C: memo text is inconsistent for structured reporting. Why not D: separate companies can fragment one entity’s accounting unless there is a legitimate structural reason.'
    },

    {
      id: 'qb-19',
      type: 'mcq',
      title: 'Month-End Close',
      difficulty: 'hard',
      points: 5,
      prompt: `Before closing the month, the bookkeeper sees:

{{diagram}}

What is the strongest close sequence?`,
      diagram: `flowchart TB
  B["Bank / credit card<br/>reconciliations"] --> C["A/R and A/P review"]
  C --> U["Undeposited Funds / suspense<br/>exception review"]
  U --> J["Supported adjustments"]
  J --> F["Review P&L / Balance Sheet<br/>and lock period"]
  classDef step fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class B,C,U,J,F step;`,
      options: [
        'Lock the period first so nobody can change data, then perform reconciliations.',
        'Complete reconciliations and exception reviews, post supported adjustments, review financial statements, and then apply appropriate closing controls.',
        'Export the P&L to Excel and close the month without reviewing balance-sheet accounts.',
        'Delete old unreconciled items so reports are cleaner before close.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A strong close validates cash, receivables, payables, temporary holding accounts, adjustments, and statement reasonableness before locking the period. Why not A: locking too early prevents necessary corrections. Why not C: balance-sheet integrity is essential. Why not D: unresolved items must be investigated, not deleted.'
    },

    {
      id: 'qb-20',
      type: 'mcq',
      title: 'Integrated Bookkeeping Quality',
      difficulty: 'hard',
      points: 5,
      prompt: `A new controller reviews the QuickBooks file and finds:

- 190 accounts in the chart of accounts with duplicate purposes
- old transactions changed after reconciliation
- bank-feed items frequently added instead of matched
- $85,000 sitting in Undeposited Funds for months
- A/R includes large 120+ day balances
- vendor payments are sometimes recorded outside the Bill workflow
- no documented month-end close

What is the strongest remediation strategy?`,
      options: [
        'Focus only on cleaning the chart of accounts because all other issues will correct themselves afterward.',
        'Establish a controlled bookkeeping operating model covering account structure, transaction workflows, bank matching, reconciliation discipline, aging review, clearing accounts, audit-log monitoring, and a documented month-end close.',
        'Create a new QuickBooks company file and abandon all historical data immediately.',
        'Export all reports to spreadsheets and stop relying on QuickBooks reporting.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The issues are systemic and require coordinated improvements to bookkeeping design, transaction processing, reconciliation, controls, and close governance. Why not A: the chart of accounts is only one problem. Why not C: a new file does not fix weak processes and risks losing history. Why not D: spreadsheets do not solve underlying accounting-control failures.'
    },
  ],
};
