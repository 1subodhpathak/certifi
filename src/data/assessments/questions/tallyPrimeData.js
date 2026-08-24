import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const tallyPrimeData = {
  id: ASSESSMENT_TYPES.tallyprime,
  title: 'TallyPrime Accounting Professional Certification',
  shortTitle: 'TallyPrime',
  category: 'Accounting',
  durationMinutes: 55,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical TallyPrime accounting judgment across company setup, ledger design, voucher selection, GST, inventory, bank reconciliation, outstanding management, security, audit trail, corrections, MIS reporting, migration, and period-end close.',
  instructions:
    '20 scenario-based questions, 55 minutes, 100 marks. Several questions include Mermaid diagrams, accounting workflows, or reconciliation schedules. Read each scenario carefully. Options are intentionally close, so choose the answer that is both technically correct and operationally sound. No negative marking.',

  questions: [
    {
      id: 'tp-01',
      type: 'mcq',
      title: 'Company Creation',
      difficulty: 'easy',
      points: 5,
      prompt: `A company is being created in TallyPrime for the first time.

It follows an April-March financial year and is GST registered.

Which setup should be confirmed before live posting begins?`,
      options: [
        'Printer settings and invoice colors only.',
        'Financial year, statutory settings, GST registration, base accounting setup, security, and opening balances.',
        'Only payroll settings because other configuration can be changed later.',
        'Stock items first, with ledgers created only when errors occur.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Base company settings influence statutory compliance, reporting, controls, and opening position. Why not A: presentation settings are secondary. Why not C: accounting and statutory setup are core prerequisites. Why not D: masters should be designed before transaction posting, not reactively.'
    },

    {
      id: 'tp-02',
      type: 'mcq',
      title: 'Ledger Design',
      difficulty: 'easy',
      points: 5,
      prompt: `A business has created separate expense ledgers for every supplier, producing more than 250 similar ledgers.

What is the strongest redesign?`,
      options: [
        'Keep one ledger per supplier because supplier detail belongs in the ledger structure.',
        'Use meaningful accounting ledgers for expense categories and rely on party ledgers and transaction reports for supplier-level analysis.',
        'Move every expense into Miscellaneous Expense.',
        'Delete all old ledgers and recreate historical transactions.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Accounting ledgers should reflect economic classification, while supplier detail belongs in party and transaction reporting. Why not A: this creates unnecessary complexity. Why not C: it destroys useful classification. Why not D: historical re-entry is risky and unnecessary.'
    },

    {
      id: 'tp-03',
      type: 'mcq',
      title: 'Voucher Selection',
      difficulty: 'easy',
      points: 5,
      prompt: `A supplier invoice for ₹180,000 is received today and will be paid next week.

Which entry approach is strongest?`,
      options: [
        'Use the appropriate Purchase voucher to record the purchase/liability, then a Payment voucher when cash is paid.',
        'Use only a Payment voucher today even though no cash has left the bank.',
        'Use a Sales voucher because an invoice was received.',
        'Use a Journal voucher for every routine supplier transaction.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Routine business events should use the voucher type that matches the underlying transaction. Why not B: payment has not occurred yet. Why not C: Sales vouchers are for customer sales. Why not D: journals are not a substitute for standard transaction flows.'
    },

    {
      id: 'tp-04',
      type: 'mcq',
      title: 'Credit Sale',
      difficulty: 'easy',
      points: 5,
      prompt: `Goods worth ₹95,000 are sold to a customer on 30-day credit terms.

What should happen in TallyPrime?`,
      options: [
        'Revenue and the customer receivable should be recorded through the proper sales transaction.',
        'Nothing should be recorded until cash is received.',
        'The amount should be posted to a supplier ledger.',
        'Only inventory should move; no accounting entry is required.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A credit sale creates revenue and a receivable immediately, while inventory effects depend on the item setup. Why not B: accrual accounting does not wait for cash. Why not C: the customer is not a supplier. Why not D: the financial effect of the sale must also be recorded.'
    },

    {
      id: 'tp-05',
      type: 'mcq',
      title: 'GST Configuration',
      difficulty: 'easy',
      points: 5,
      prompt: `A GST-registered company begins selling a new product category.

Why should HSN/SAC and tax treatment be validated before invoicing?`,
      options: [
        'Because they affect invoice formatting only.',
        'Because incorrect tax classification can distort GST calculation, invoice compliance, and return reporting.',
        'Because HSN/SAC replaces bank reconciliation.',
        'Because GST configuration matters only for exports.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Product/service tax classification affects transaction-level GST and statutory reporting. Why not A: this is a compliance issue, not just formatting. Why not C: bank reconciliation is unrelated. Why not D: GST setup applies broadly, not only to exports.'
    },

    {
      id: 'tp-06',
      type: 'mcq',
      title: 'Inventory and Accounting',
      difficulty: 'medium',
      points: 5,
      prompt: `A retailer purchases 100 units at ₹500 each.

The stock item is incorrectly configured so the purchase posts directly to expense instead of inventory.

What is the likely effect before any units are sold?`,
      options: [
        'Inventory may be understated and expense recognized too early.',
        'Sales revenue will automatically increase.',
        'Accounts Receivable will be overstated.',
        'Bank balance will be overstated.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Inventory cost should generally remain an asset until sale; premature expensing understates stock and accelerates expense recognition. Why not B: purchase classification does not create revenue. Why not C: no receivable arises from a purchase. Why not D: classification does not automatically change cash.'
    },

    {
      id: 'tp-07',
      type: 'mcq',
      title: 'Bank Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `At month-end:

Bank statement balance: ₹3,120,000
Outstanding checks: ₹240,000
Deposit in transit: ₹90,000
TallyPrime cash balance: ₹2,970,000

{{diagram}}

What does the reconciliation show?`,
      diagram: `flowchart LR
  B["Bank statement<br/><b>₹3,120,000</b>"] --> R["Adjusted bank balance"]
  O["Less outstanding checks<br/><b>₹240,000</b>"] --> R
  D["Add deposit in transit<br/><b>₹90,000</b>"] --> R
  classDef calc fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class B,O,D,R calc;`,
      options: [
        'Adjusted bank balance is ₹2,790,000.',
        'Adjusted bank balance is ₹2,970,000 and agrees to the books.',
        'Adjusted bank balance is ₹3,450,000.',
        'The reconciliation cannot work because outstanding checks should be added.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. ₹3,120,000 - ₹240,000 + ₹90,000 = ₹2,970,000. Why not A: it subtracts both items. Why not C: it adds both. Why not D: outstanding checks reduce the adjusted bank-side balance.'
    },

    {
      id: 'tp-08',
      type: 'mcq',
      title: 'Outstanding Receivables',
      difficulty: 'medium',
      points: 5,
      prompt: `Receivable outstanding shows:

Current: ₹1.8m
31-60 days: ₹900k
61-90 days: ₹500k
90+ days: ₹1.4m

What is the strongest management response?`,
      options: [
        'Ignore aging because total receivables are an asset.',
        'Prioritize collection and dispute analysis on the ₹1.4m 90+ day balance and assess collectibility.',
        'Move all 90+ balances to revenue again.',
        'Delete old customer ledgers to clean the report.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Old receivables are a working-capital and credit-risk signal. Why not A: receivables can become uncollectible. Why not C: the revenue was already recognized. Why not D: deletion would destroy records rather than resolve the issue.'
    },

    {
      id: 'tp-09',
      type: 'mcq',
      title: 'Outstanding Payables',
      difficulty: 'medium',
      points: 5,
      prompt: `A supplier ledger shows a ₹420,000 bill as outstanding, but the bank statement shows a payment for the same amount cleared two weeks ago.

What is the strongest investigation?`,
      options: [
        'Pay the bill again to clear the outstanding report.',
        'Check whether the payment was posted directly to expense or another ledger instead of being linked to the supplier liability, then correct the posting.',
        'Delete the supplier bill.',
        'Create a customer credit note.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A payment can clear the bank while the supplier liability remains open if the accounting linkage is wrong. Why not A: this risks duplicate payment. Why not C: the original bill may be valid. Why not D: customer credit notes are unrelated.'
    },

    {
      id: 'tp-10',
      type: 'mcq',
      title: 'Role-Based Security',
      difficulty: 'medium',
      points: 5,
      prompt: `One user can create supplier masters, post purchases, modify bank details, approve payments, and alter GST configuration.

What is the strongest control concern?`,
      options: [
        'The user has too many menus visible.',
        'The access design violates least privilege and segregation of duties, increasing fraud and error risk.',
        'Only the GST access is problematic.',
        'The user should be removed from TallyPrime permanently.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Combining master maintenance, transaction posting, payment authority, and configuration creates incompatible duties. Why not A: the issue is authority, not screen count. Why not C: multiple sensitive rights are involved. Why not D: controlled access can be appropriate; the role needs redesign.'
    },

    {
      id: 'tp-11',
      type: 'mcq',
      title: 'Voucher Correction',
      difficulty: 'medium',
      points: 5,
      prompt: `A ₹750,000 equipment purchase was posted to Repairs Expense.

The month is still open.

What is the strongest response?`,
      options: [
        'Leave the entry because debits and credits balance.',
        'Correct the classification through a controlled amendment or adjustment with clear narration and review evidence.',
        'Delete the equipment supplier ledger.',
        'Move the expense to next month.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Balanced entries can still be materially misclassified. Why not A: mathematical balance does not prove classification accuracy. Why not C: deleting the ledger does not fix the transaction. Why not D: shifting the period creates another misstatement.'
    },

    {
      id: 'tp-12',
      type: 'mcq',
      title: 'GST Reconciliation',
      difficulty: 'hard',
      points: 5,
      prompt: `TallyPrime shows GST payable of ₹2.45m.

The draft return shows ₹2.31m.

What is the strongest next step?`,
      options: [
        'Submit ₹2.31m because the return output should always override the books.',
        'Reconcile the ₹140,000 difference by voucher, tax code, period, adjustment, and return mapping before filing.',
        'Post ₹140,000 to Miscellaneous Expense.',
        'Ignore the difference because it is less than 10%.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Book and statutory output should be reconciled before filing. Why not A: either source can contain errors. Why not C: plugging the difference hides the cause. Why not D: tax discrepancies require resolution, not an arbitrary threshold.'
    },

    {
      id: 'tp-13',
      type: 'mcq',
      title: 'Narration and References',
      difficulty: 'hard',
      points: 5,
      prompt: `A ₹1.2m manual adjustment is posted with the narration "management entry".

No supporting reference is attached.

What is the strongest control response?`,
      options: [
        'Accept it because narration exists.',
        'Require a clear business explanation, source support, account rationale, and approval before relying on the entry.',
        'Delete every manual journal with a short narration.',
        'Move the entry to Suspense until year-end.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Material unusual entries need traceable evidence and review. Why not A: vague narration is not adequate support. Why not C: manual entries can be legitimate. Why not D: moving unsupported items does not resolve them.'
    },

    {
      id: 'tp-14',
      type: 'mcq',
      title: 'MIS Report Validation',
      difficulty: 'hard',
      points: 5,
      prompt: `Management receives two profit reports from TallyPrime for the same month.

One shows ₹8.4m profit and the other ₹7.6m.

The difference comes from different date filters and inclusion of optional vouchers.

What is the strongest response?`,
      options: [
        'Use the higher profit figure because it is more favorable.',
        'Standardize report definitions, filters, and period logic before circulation and explain any legitimate alternate views.',
        'Average the two figures.',
        'Stop using MIS reports and rely only on voucher lists.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. MIS is only reliable when report logic is governed and consistent. Why not A: selecting a favorable number is biased. Why not C: averaging different definitions has no accounting basis. Why not D: well-controlled reports remain valuable.'
    },

    {
      id: 'tp-15',
      type: 'mcq',
      title: 'Data Migration',
      difficulty: 'hard',
      points: 5,
      prompt: `During migration into TallyPrime, customer and supplier opening balances are imported.

The implementation team does not reconcile them to the legacy trial balance.

What is the primary risk?`,
      options: [
        'Opening receivables, payables, and control balances may not agree, making reports unreliable from day one.',
        'Printer settings may fail.',
        'GST rates will automatically double.',
        'Inventory units will disappear permanently.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Migration must preserve agreement between subledgers and the opening trial balance. Why not B: printing is unrelated. Why not C: tax rates do not change automatically. Why not D: the scenario concerns financial opening balances.'
    },

    {
      id: 'tp-16',
      type: 'mcq',
      title: 'Period-End Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Before month-end close, finance sees:

{{diagram}}

What is the strongest sequence?`,
      diagram: `flowchart TB
  B["Reconcile bank accounts"] --> G["Reconcile GST / statutory balances"]
  G --> O["Review receivable & payable outstandings"]
  O --> S["Verify stock / inventory exceptions"]
  S --> V["Review unusual vouchers & adjustments"]
  V --> F["Validate financial statements and close"]
  classDef step fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class B,G,O,S,V,F step;`,
      options: [
        'Close first and perform reconciliations next month.',
        'Complete reconciliations and exception reviews, post supported corrections, validate reports, then close the period.',
        'Delete old exceptions so the close can finish faster.',
        'Review only the Profit & Loss statement because balance-sheet items carry forward.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A disciplined close validates cash, tax, working capital, stock, adjustments, and reporting before final sign-off. Why not A: unresolved issues should not knowingly roll forward. Why not C: deletion is not resolution. Why not D: balance-sheet integrity is critical.'
    },

    {
      id: 'tp-17',
      type: 'mcq',
      title: 'Duplicate Bank Entry',
      difficulty: 'hard',
      points: 5,
      prompt: `A supplier payment was already entered through a Payment voucher.

Later, the same transaction is imported from the bank and posted again as an expense.

What is the likely impact?`,
      options: [
        'Cash and expense may be duplicated while the original supplier liability treatment remains inconsistent.',
        'Revenue will double.',
        'Inventory will automatically increase.',
        'There is no issue if the bank balance eventually reconciles.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Re-posting a transaction already recorded can duplicate cash movement and expense. Why not B: supplier payment does not create revenue. Why not C: no stock effect follows automatically. Why not D: a forced reconciliation can still hide incorrect classification.'
    },

    {
      id: 'tp-18',
      type: 'mcq',
      title: 'Stock and Financial Mismatch',
      difficulty: 'hard',
      points: 5,
      prompt: `Physical stock count shows 1,250 units.
TallyPrime shows 1,480 units.

The difference has existed for three months.

What is the strongest response?`,
      options: [
        'Adjust TallyPrime to 1,250 immediately with no investigation.',
        'Investigate purchase, sales, stock journal, returns, damage, and cutoff records to identify the cause before posting a controlled adjustment.',
        'Ignore the difference because inventory is an estimate.',
        'Increase physical count documentation to 1,480.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A recurring stock difference needs root-cause analysis before correction. Why not A: a blind adjustment may hide theft, process errors, or cutoff issues. Why not C: inventory is not optional. Why not D: documentation should reflect reality, not force agreement.'
    },

    {
      id: 'tp-19',
      type: 'mcq',
      title: 'Audit Trail Review',
      difficulty: 'hard',
      points: 5,
      prompt: `A material voucher from a closed period is no longer visible in the financial statements.

What is the strongest control response?`,
      options: [
        'Re-enter the amount in the current month.',
        'Review change history/audit information and user activity to identify whether the voucher was altered, cancelled, or deleted, then correct it through an approved process.',
        'Ignore the issue if current cash is correct.',
        'Change the reporting period so the old result is no longer visible.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Historical changes require traceable investigation and controlled correction. Why not A: current-period posting distorts timing. Why not C: closed-period integrity remains important. Why not D: changing the report does not fix the accounting.'
    },

    {
      id: 'tp-20',
      type: 'mcq',
      title: 'Integrated TallyPrime Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A controller reviews a TallyPrime environment and finds:

- duplicate and unclear ledgers
- unreconciled bank items
- GST differences
- old receivables
- excessive user access
- stock mismatches
- unsupported manual vouchers
- no formal month-end checklist

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  L["Ledger structure"] --> J["Control redesign"]
  B["Bank reconciliation"] --> J
  G["GST reconciliation"] --> J
  AR["Outstanding receivables"] --> J
  A["Access control"] --> J
  S["Stock integrity"] --> J
  V["Voucher governance"] --> J
  C["Period-end close"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class L,B,G,AR,A,S,V,C,J warning;`,
      options: [
        'Focus only on ledger cleanup because the other problems are operational.',
        'Establish a governed accounting operating model covering masters, voucher discipline, reconciliations, GST, stock, access, auditability, outstanding review, and period-end close.',
        'Create a new Tally company immediately and abandon historical data.',
        'Export all reports to spreadsheets and stop using system controls.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The issues are systemic and span accounting design, compliance, operations, access, and close governance. Why not A: ledger design is only one component. Why not C: a new company does not fix weak processes and may lose history. Why not D: spreadsheets weaken control rather than solve the root causes.'
    },
  ],
};
