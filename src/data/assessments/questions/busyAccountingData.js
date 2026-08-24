import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const busyAccountingData = {
  id: ASSESSMENT_TYPES.busy_accounting,
  title: 'Busy Accounting Software Professional Certification',
  shortTitle: 'Busy',
  category: 'Accounting',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical Busy accounting judgment across master data, voucher discipline, inventory-accounting integration, GST, receivables, payables, banking, access control, stock integrity, reporting, backup, corrections, and period-end close.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Several questions include Mermaid diagrams, accounting workflows, or reconciliation schedules. Read each scenario carefully. Options are intentionally close, so choose the answer that is both technically correct and operationally sound. No negative marking.',

  questions: [
    {
      id: 'by-01',
      type: 'mcq',
      title: 'Master Data Hygiene',
      difficulty: 'easy',
      points: 5,
      prompt: `A trading company has duplicate customer names, inconsistent item codes, and multiple tax codes for the same product category.

What is the strongest first action?`,
      options: [
        'Continue posting and clean masters at year-end.',
        'Standardize and deduplicate customer, vendor, item, unit, and tax masters before more transactions are posted.',
        'Create additional masters to preserve every variation.',
        'Move all transactions to one generic customer and one generic item.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Master-data quality directly affects transaction accuracy, GST, stock, reporting, and reconciliation. Why not A: bad masters create repeated downstream errors. Why not C: more duplicates worsen the problem. Why not D: generic masters destroy operational and reporting detail.'
    },

    {
      id: 'by-02',
      type: 'mcq',
      title: 'Voucher Discipline',
      difficulty: 'easy',
      points: 5,
      prompt: `A supplier invoice is received today for goods purchased on 30-day credit terms.

Which process is strongest?`,
      options: [
        'Record the purchase using the appropriate purchase voucher and settle it later through the payment workflow.',
        'Use a payment voucher immediately even though no payment occurred.',
        'Use a sales voucher because an invoice document exists.',
        'Use only journal vouchers for all business transactions.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The voucher should reflect the underlying business event and preserve correct classification and audit trail. Why not B: no cash has moved yet. Why not C: this is a purchase, not a sale. Why not D: journals are not a substitute for standard transaction workflows.'
    },

    {
      id: 'by-03',
      type: 'mcq',
      title: 'Inventory and Accounts',
      difficulty: 'easy',
      points: 5,
      prompt: `A distributor buys 200 units of an item at ₹450 each.

The item is accidentally configured so purchases post directly to expense instead of inventory.

What is the likely effect before any units are sold?`,
      options: [
        'Inventory may be understated and expense recognized too early.',
        'Revenue will be overstated automatically.',
        'Accounts Receivable will increase.',
        'Bank balance will be overstated.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Inventory cost should generally remain an asset until sale; premature expensing understates stock and accelerates cost recognition. Why not B: purchase classification does not create revenue. Why not C: no customer receivable arises. Why not D: cash is not automatically misstated by this classification error.'
    },

    {
      id: 'by-04',
      type: 'mcq',
      title: 'GST Configuration',
      difficulty: 'easy',
      points: 5,
      prompt: `A GST-registered company adds a new item category but reuses an old tax setup without validating the rate or HSN/SAC mapping.

What is the strongest risk?`,
      options: [
        'The invoice font may be incorrect.',
        'GST may be calculated or reported incorrectly, affecting customer documents and statutory returns.',
        'Bank reconciliation will automatically fail.',
        'Receivable aging will disappear.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Tax setup errors can flow into invoices, ledgers, and returns. Why not A: presentation is secondary. Why not C: reconciliation is a separate process. Why not D: aging is unrelated.'
    },

    {
      id: 'by-05',
      type: 'mcq',
      title: 'Receivable Aging',
      difficulty: 'easy',
      points: 5,
      prompt: `A receivable-aging report shows:

{{diagram}}

What is the strongest management response?`,
      diagram: `flowchart TB
  C["Current<br/><b>₹9.2L</b>"] --> A["Receivable Aging"]
  D1["31-60<br/><b>₹4.6L</b>"] --> A
  D2["61-90<br/><b>₹2.1L</b>"] --> A
  D3["90+<br/><b>₹6.8L</b>"] --> A
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class D3,A warning;`,
      options: [
        'Ignore the aging because all receivables are assets.',
        'Prioritize old balances for collection, dispute review, and collectibility assessment.',
        'Move 90+ balances back into revenue.',
        'Delete customers whose invoices are overdue.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Aged receivables are a working-capital and credit-risk signal. Why not A: old receivables may not convert to cash. Why not C: revenue is not re-recognized. Why not D: deletion does not resolve balances.'
    },

    {
      id: 'by-06',
      type: 'mcq',
      title: 'Payable Planning',
      difficulty: 'medium',
      points: 5,
      prompt: `The company has ₹1.2m available cash.

This week:
- critical supplier due: ₹700k
- disputed supplier invoice: ₹260k
- non-critical supplier due: ₹350k
- tax due next week: ₹420k

What is the strongest payable-management approach?`,
      options: [
        'Pay all invoices strictly by smallest amount first.',
        'Prioritize valid critical obligations, preserve liquidity for near-term statutory needs, and resolve disputed items before payment.',
        'Pay the disputed invoice first because it is overdue.',
        'Stop all supplier payments until next month.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Payables should be managed using due dates, business criticality, disputes, and liquidity. Why not A: amount alone is not the correct priority. Why not C: disputed amounts require resolution. Why not D: blanket payment freezes can damage operations.'
    },

    {
      id: 'by-07',
      type: 'mcq',
      title: 'Bank Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `At month-end:

Bank statement balance: ₹4,050,000
Outstanding checks: ₹310,000
Deposit in transit: ₹120,000
Busy cash balance: ₹3,860,000

{{diagram}}

What does the reconciliation show?`,
      diagram: `flowchart LR
  B["Bank statement<br/><b>₹4,050,000</b>"] --> R["Adjusted bank balance"]
  O["Less outstanding checks<br/><b>₹310,000</b>"] --> R
  D["Add deposit in transit<br/><b>₹120,000</b>"] --> R
  classDef calc fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class B,O,D,R calc;`,
      options: [
        'Adjusted balance is ₹3,620,000.',
        'Adjusted balance is ₹3,860,000 and agrees to the books.',
        'Adjusted balance is ₹4,480,000.',
        'The reconciliation is impossible because outstanding checks should be added.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. ₹4,050,000 - ₹310,000 + ₹120,000 = ₹3,860,000. Why not A: it subtracts both items. Why not C: it adds both. Why not D: outstanding checks reduce the adjusted bank-side balance.'
    },

    {
      id: 'by-08',
      type: 'mcq',
      title: 'Duplicate Bank Posting',
      difficulty: 'medium',
      points: 5,
      prompt: `A supplier payment was already recorded through the normal payment workflow.

Later, the same bank transaction is imported and categorized again as an expense.

What is the likely effect?`,
      options: [
        'The supplier will automatically be paid twice by the bank.',
        'Cash and expense may be duplicated in the books, while the supplier balance may remain inconsistent.',
        'Revenue will increase.',
        'Inventory will double.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Re-posting an already-recorded bank transaction can duplicate cash and expense. Why not A: bookkeeping duplication does not itself send another bank payment. Why not C: this is not revenue. Why not D: no stock transaction occurred.'
    },

    {
      id: 'by-09',
      type: 'mcq',
      title: 'User Access',
      difficulty: 'medium',
      points: 5,
      prompt: `One Busy user can create suppliers, edit bank details, post purchases, approve payments, and alter GST settings.

What is the strongest control concern?`,
      options: [
        'The user sees too many menu options.',
        'The role violates segregation of duties and least-privilege principles.',
        'Only GST access should be removed.',
        'The user should never be allowed into Busy again.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Combining master-data maintenance, posting, payment authority, and configuration creates fraud and error risk. Why not A: authority is the issue, not menu count. Why not C: several sensitive permissions are involved. Why not D: access should be redesigned, not necessarily eliminated.'
    },

    {
      id: 'by-10',
      type: 'mcq',
      title: 'Stock Discrepancy',
      difficulty: 'medium',
      points: 5,
      prompt: `Busy shows 1,840 units.
Physical count shows 1,660 units.

The difference has grown over three months.

What is the strongest response?`,
      options: [
        'Adjust Busy to 1,660 immediately with no investigation.',
        'Investigate purchases, sales, returns, stock transfers, damage, cutoff, and count procedures before posting a controlled adjustment.',
        'Change the physical count to match Busy.',
        'Ignore the variance if sales remain strong.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A recurring stock discrepancy can indicate process errors, shrinkage, or cutoff issues. Why not A: blind adjustment can hide the cause. Why not C: documentation must reflect actual stock. Why not D: inventory integrity matters regardless of sales.'
    },

    {
      id: 'by-11',
      type: 'mcq',
      title: 'MIS Report Validation',
      difficulty: 'medium',
      points: 5,
      prompt: `Two Busy reports show different gross profit for the same month because one report excludes selected voucher types.

What is the strongest response?`,
      options: [
        'Use the report with the higher gross profit.',
        'Standardize filters, voucher inclusion, periods, and report definitions before circulating management results.',
        'Average the two profit values.',
        'Stop using management reports entirely.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. MIS is only reliable when report logic is governed and consistently applied. Why not A: selecting the favorable number is biased. Why not C: averaging different definitions has no accounting basis. Why not D: controlled reporting remains useful.'
    },

    {
      id: 'by-12',
      type: 'mcq',
      title: 'Backup Discipline',
      difficulty: 'medium',
      points: 5,
      prompt: `The company keeps its only current Busy data file on one office computer.

There has been no tested backup for four months.

What is the strongest control response?`,
      options: [
        'Continue because desktop accounting files are usually stable.',
        'Implement regular backups, store copies separately, and periodically test restore procedures.',
        'Take screenshots of monthly reports instead.',
        'Print every invoice and delete old digital records.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Backup is a business-continuity control and should be tested for recoverability. Why not A: single-device dependency is a material risk. Why not C: screenshots do not preserve transactional data. Why not D: paper does not replace recoverable system records.'
    },

    {
      id: 'by-13',
      type: 'mcq',
      title: 'GST Reconciliation',
      difficulty: 'hard',
      points: 5,
      prompt: `Busy reports GST payable of ₹2.18m.
The draft statutory return shows ₹2.04m.

What is the strongest next step?`,
      options: [
        'Submit ₹2.04m because the return output should override the books.',
        'Reconcile the ₹140,000 difference by transaction, tax code, item setup, adjustment, and period before filing.',
        'Post ₹140,000 to Miscellaneous Expense.',
        'Ignore the difference if the percentage is small.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Tax output must reconcile to underlying accounting before filing. Why not A: either source can contain errors. Why not C: a plug entry hides the cause. Why not D: statutory differences need investigation.'
    },

    {
      id: 'by-14',
      type: 'mcq',
      title: 'Material Posting Error',
      difficulty: 'hard',
      points: 5,
      prompt: `A ₹900,000 machinery purchase was posted to Repairs Expense.

The month is still open.

What is the strongest response?`,
      options: [
        'Leave it because the voucher balances.',
        'Correct the classification through a controlled amendment or adjustment with support and review evidence.',
        'Delete the supplier ledger.',
        'Move the expense into next month.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A balanced voucher can still be materially misclassified. Why not A: mathematical balance does not prove accounting correctness. Why not C: deleting the ledger does not correct the transaction. Why not D: shifting periods creates another error.'
    },

    {
      id: 'by-15',
      type: 'mcq',
      title: 'Receivable vs Cash Quality',
      difficulty: 'hard',
      points: 5,
      prompt: `Sales increased 19% this quarter, but receivables increased 47% and cash collections increased only 4%.

What is the strongest interpretation?`,
      options: [
        'Growth quality may be weakening because billed sales are not converting into cash at the same pace.',
        'The business is unquestionably stronger because sales are higher.',
        'Receivables do not matter until they are over one year old.',
        'The company should classify receivables as inventory.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Receivables growing much faster than sales and collections is a working-capital warning. Why not B: sales quality matters. Why not C: collection risk should be monitored much earlier. Why not D: receivables and inventory are different assets.'
    },

    {
      id: 'by-16',
      type: 'mcq',
      title: 'Period-End Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Before period close, finance sees:

{{diagram}}

What is the strongest close sequence?`,
      diagram: `flowchart TB
  B["Bank reconciliations"] --> G["GST / tax reconciliation"]
  G --> AR["Receivable & payable aging"]
  AR --> S["Stock verification / exceptions"]
  S --> V["Review unusual vouchers"]
  V --> F["Validate reports & close"]
  classDef step fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class B,G,AR,S,V,F step;`,
      options: [
        'Close first and review exceptions next month.',
        'Complete reconciliations and exception reviews, post supported corrections, validate reports, then close.',
        'Delete unresolved items so the close is faster.',
        'Review only the P&L because balance-sheet accounts carry forward.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A disciplined close validates cash, tax, working capital, stock, unusual postings, and reports before sign-off. Why not A: unresolved issues should not knowingly roll forward. Why not C: deletion is not resolution. Why not D: balance-sheet integrity is essential.'
    },

    {
      id: 'by-17',
      type: 'mcq',
      title: 'Old Supplier Balance',
      difficulty: 'hard',
      points: 5,
      prompt: `A supplier payable of ₹360,000 has remained open for six months.

The supplier states the invoice was already settled.

What is the strongest investigation?`,
      options: [
        'Write off the payable immediately.',
        'Trace payment records, bank transactions, debit/credit notes, and ledger postings to determine whether the liability is valid or was settled incorrectly.',
        'Pay the supplier again.',
        'Move the balance to revenue.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Old unexplained payables need evidence-based reconciliation. Why not A: age alone does not justify write-off. Why not C: this risks duplicate payment. Why not D: unresolved liabilities are not revenue.'
    },

    {
      id: 'by-18',
      type: 'mcq',
      title: 'Audit Trail and Change Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A material voucher from a previously reviewed month has been changed.

The current report no longer agrees to the signed-off version.

What is the strongest response?`,
      options: [
        'Adjust the current month to force year-to-date totals back into line.',
        'Review user/change history, identify what changed and why, and correct the record through an approved process while preserving traceability.',
        'Ignore it if cash is unaffected.',
        'Delete the prior report so nobody compares it.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Historical changes require traceable investigation and controlled correction. Why not A: current-period adjustments can distort timing. Why not C: non-cash errors can still be material. Why not D: deleting evidence weakens control.'
    },

    {
      id: 'by-19',
      type: 'mcq',
      title: 'Operational Reporting',
      difficulty: 'hard',
      points: 5,
      prompt: `A distributor wants a weekly management pack from Busy.

Which combination is most useful?`,
      options: [
        'Only sales invoices.',
        'Sales and margin, stock aging/movement, receivable and payable aging, cash/bank position, GST exceptions, and material operational variances.',
        'Only supplier names and item codes.',
        'A raw export of every voucher with no summary.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Trading/distribution management needs an integrated view of commercial performance, stock, working capital, liquidity, tax, and exceptions. Why not A: sales alone are too narrow. Why not C: master lists are not performance reports. Why not D: raw detail without synthesis is not decision-ready.'
    },

    {
      id: 'by-20',
      type: 'mcq',
      title: 'Integrated Busy Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A controller reviews a Busy environment and finds:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  M["Duplicate masters"] --> J["Control redesign"]
  V["Inconsistent voucher use"] --> J
  G["GST differences"] --> J
  B["Unreconciled bank items"] --> J
  S["Stock mismatches"] --> J
  A["Excess user access"] --> J
  BK["Weak backups"] --> J
  C["No formal close"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class M,V,G,B,S,A,BK,C,J warning;`,
      options: [
        'Focus only on stock because Busy is primarily an inventory tool.',
        'Establish a governed accounting operating model covering masters, voucher discipline, GST, banking, stock, access, backup, reporting, and period-end close.',
        'Create a new company file and abandon historical data immediately.',
        'Export all records to spreadsheets and stop using Busy controls.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The problems are systemic and span configuration, accounting operations, compliance, control, resilience, and close governance. Why not A: stock is only one component. Why not C: a new file does not fix weak processes and may lose history. Why not D: spreadsheets weaken rather than strengthen the control environment.'
    },
  ],
};
