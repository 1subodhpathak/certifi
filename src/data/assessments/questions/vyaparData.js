import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const vyaparData = {
  id: ASSESSMENT_TYPES.vyapar,
  title: 'Vyapar Bookkeeping & Billing Professional Certification',
  shortTitle: 'Vyapar',
  category: 'Accounting',
  durationMinutes: 45,
  pointsPerQuestion: 5,
  passingPercentage: 80,
  description:
    'Tests practical Vyapar bookkeeping judgment across billing, GST, receivables, payables, stock control, collections, expenses, returns, cash application, business reporting, and small-business finance discipline.',
  instructions:
    '20 scenario-based questions, 45 minutes, 100 marks. Several questions include Mermaid diagrams, billing flows, or working-capital schedules. Read each scenario carefully. Options are intentionally close, so choose the answer that is both technically correct and operationally sound. No negative marking.',

  questions: [
    {
      id: 'vy-01',
      type: 'mcq',
      title: 'Business Setup',
      difficulty: 'easy',
      points: 5,
      prompt: `A small distributor is setting up Vyapar for the first time.

It is GST registered, sells both goods and services, and tracks stock across two locations.

Which setup should be confirmed before daily billing starts?`,
      options: [
        'Theme, logo, and invoice color only.',
        'Business details, GST registration, tax settings, item masters, units, stock opening balances, customer/vendor masters, and basic accounting structure.',
        'Only customer names, because other settings can be added after sales begin.',
        'Only stock quantity, because bookkeeping can be reconstructed later.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Core business, tax, item, party, and opening-data setup drives invoice accuracy, GST, stock, and reporting. Why not A: branding is secondary. Why not C: incomplete setup creates downstream posting and tax errors. Why not D: reconstructing bookkeeping later is risky and inefficient.'
    },

    {
      id: 'vy-02',
      type: 'mcq',
      title: 'GST Billing',
      difficulty: 'easy',
      points: 5,
      prompt: `A GST-registered business begins selling a new taxable product.

What is the strongest action before issuing customer invoices?`,
      options: [
        'Configure the item’s tax treatment and applicable GST details, then test a representative invoice before going live.',
        'Issue invoices without tax and adjust GST manually at month-end.',
        'Add GST as a miscellaneous income line.',
        'Use one tax rate for all products to simplify billing.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Tax treatment should be configured before invoicing so customer documents and GST reporting are correct. Why not B: delayed manual correction can create filing and customer-document issues. Why not C: GST collected is generally a liability, not income. Why not D: tax rates may differ by product or transaction.'
    },

    {
      id: 'vy-03',
      type: 'mcq',
      title: 'Credit Sale and Receivable',
      difficulty: 'easy',
      points: 5,
      prompt: `A customer buys goods worth ₹85,000 on 30-day credit terms.

What is the strongest bookkeeping outcome?`,
      options: [
        'Record the sale and customer receivable now, then apply the collection when cash is received.',
        'Record nothing until cash arrives.',
        'Record only stock movement and no customer balance.',
        'Post the amount as a supplier payable.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A credit sale creates revenue and a receivable when the sale occurs. Why not B: waiting for cash understates sales and receivables. Why not C: the financial effect must also be recorded. Why not D: the customer is not a supplier.'
    },

    {
      id: 'vy-04',
      type: 'mcq',
      title: 'Receivable Aging',
      difficulty: 'easy',
      points: 5,
      prompt: `A receivable report shows:

{{diagram}}

What is the strongest management response?`,
      diagram: `flowchart TB
  C["Current<br/><b>₹6.2L</b>"] --> A["Receivable Aging"]
  D1["31-60 days<br/><b>₹3.8L</b>"] --> A
  D2["61-90 days<br/><b>₹2.6L</b>"] --> A
  D3["90+ days<br/><b>₹5.4L</b>"] --> A
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class D3,A warning;`,
      options: [
        'Ignore aging because all receivables are assets.',
        'Prioritize the 90+ day balances for collection, dispute review, and collectibility assessment.',
        'Move old receivables back into sales.',
        'Delete customers with overdue balances.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Old receivables are a working-capital and credit-risk warning. Why not A: receivables can become uncollectible. Why not C: revenue was already recognized. Why not D: deleting customers does not resolve outstanding balances.'
    },

    {
      id: 'vy-05',
      type: 'mcq',
      title: 'Expense Logging',
      difficulty: 'easy',
      points: 5,
      prompt: `A business owner records sales daily but enters most expenses only at month-end from memory.

What is the strongest risk?`,
      options: [
        'Profit and cash reporting can be temporarily overstated, and missing support may weaken GST/tax and expense accuracy.',
        'Revenue will automatically be understated.',
        'Stock quantity will always increase.',
        'Customer receivables will be deleted.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Delayed expense entry distorts profitability and cash visibility and increases documentation risk. Why not B: the direct issue is expense omission. Why not C: stock does not automatically change. Why not D: receivables are unrelated.'
    },

    {
      id: 'vy-06',
      type: 'mcq',
      title: 'Supplier Payable',
      difficulty: 'medium',
      points: 5,
      prompt: `A supplier bill for ₹240,000 is received today. Payment will be made in three weeks.

What is the strongest treatment?`,
      options: [
        'Record the purchase and supplier payable now, then record the payment when cash is actually paid.',
        'Wait three weeks and record only the cash payment.',
        'Record the amount as customer receivable.',
        'Record the purchase twice so one entry represents the bill and one represents the future payment.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The purchase/liability belongs in the period when the obligation arises; payment later clears the payable. Why not B: waiting understates expenses/inventory and liabilities. Why not C: this is not a customer transaction. Why not D: duplicate recording would overstate the books.'
    },

    {
      id: 'vy-07',
      type: 'mcq',
      title: 'Cash Application',
      difficulty: 'medium',
      points: 5,
      prompt: `A customer pays ₹72,000 against an open invoice of ₹90,000.

What is the strongest posting?`,
      options: [
        'Apply ₹72,000 to the invoice and leave ₹18,000 outstanding.',
        'Close the invoice fully because most of the balance was collected.',
        'Record ₹72,000 as new sales income.',
        'Delete the original invoice and create a new one for ₹18,000.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Partial collections should reduce the specific receivable while preserving the remaining balance. Why not B: this understates A/R. Why not C: the revenue was already recognized. Why not D: deleting the invoice damages transaction history.'
    },

    {
      id: 'vy-08',
      type: 'mcq',
      title: 'Sales Return',
      difficulty: 'medium',
      points: 5,
      prompt: `A customer returns goods worth ₹18,000 from a ₹75,000 credit sale.

The goods are accepted back into usable stock.

What should the return process preserve?`,
      options: [
        'Customer balance reduction, return/revenue impact, and the appropriate inventory increase.',
        'Only customer communication; no accounting entry is required.',
        'Only inventory quantity, because revenue was already booked.',
        'Only a cash refund even though the customer has not paid yet.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A proper return affects receivable/revenue and, when goods return to stock, inventory as well. Why not B: the accounting effects are real. Why not C: revenue/customer balance also needs correction. Why not D: no cash refund is required if the invoice is still unpaid.'
    },

    {
      id: 'vy-09',
      type: 'mcq',
      title: 'Inventory Variance',
      difficulty: 'medium',
      points: 5,
      prompt: `Vyapar shows 520 units of an item.
Physical count shows 446 units.

The difference has increased for three months.

What is the strongest response?`,
      options: [
        'Adjust the system to 446 immediately with no investigation.',
        'Investigate purchases, sales, returns, damage, stock transfers, and entry timing before posting a controlled stock adjustment.',
        'Change the physical count record to 520.',
        'Ignore the difference because inventory reports are approximate.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A recurring stock difference can indicate process errors, shrinkage, or cutoff issues and should be investigated before adjustment. Why not A: a blind write-off can hide the cause. Why not C: records must reflect reality. Why not D: inventory accuracy is essential to margin and stock control.'
    },

    {
      id: 'vy-10',
      type: 'mcq',
      title: 'Profit Despite Strong Sales',
      difficulty: 'medium',
      points: 5,
      prompt: `Sales increased 22%, but reported profit fell 11%.

{{diagram}}

Which review is strongest?`,
      diagram: `flowchart TB
  S["Sales<br/><b>+22%</b>"] --> J["Profit review"]
  M["Gross margin<br/><b>-6 pts</b>"] --> J
  D["Discounts<br/><b>+35%</b>"] --> J
  R["Returns<br/><b>+18%</b>"] --> J
  E["Operating expenses<br/><b>+14%</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class M,D,R,E,J warning;`,
      options: [
        'Conclude that the business is healthy because sales are growing.',
        'Investigate margin, discounting, returns, and operating expenses because top-line growth is not converting into profit.',
        'Increase invoice count further without changing pricing or cost controls.',
        'Ignore returns because returned goods may be resold.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong revenue can still produce weaker profit when unit economics and costs deteriorate. Why not A: sales alone are incomplete. Why not C: more sales can worsen losses if economics remain poor. Why not D: returns directly affect revenue quality, stock, and margin.'
    },

    {
      id: 'vy-11',
      type: 'mcq',
      title: 'GST Summary Review',
      difficulty: 'medium',
      points: 5,
      prompt: `Vyapar’s GST summary shows output tax of ₹640,000.
The accountant’s transaction review indicates ₹702,000.

What is the strongest next step?`,
      options: [
        'Use the lower amount because software output should be final.',
        'Reconcile the ₹62,000 difference by invoice, tax rate, item setup, return, and period before filing.',
        'Post ₹62,000 to Miscellaneous Expense.',
        'Ignore the difference if customer invoices were paid.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GST output should be reconciled to source transactions before filing. Why not A: system output can reflect setup or posting errors. Why not C: a plug entry hides the issue. Why not D: tax accuracy is independent of collection status.'
    },

    {
      id: 'vy-12',
      type: 'mcq',
      title: 'Mobile Entry Control',
      difficulty: 'medium',
      points: 5,
      prompt: `Sales staff create invoices directly from mobile devices.

Management finds frequent duplicate invoices and incorrect customer selections.

What is the strongest improvement?`,
      options: [
        'Disable mobile access for every employee permanently.',
        'Use controlled user access, standardized masters, review of duplicates/exceptions, and training for mobile transaction entry.',
        'Allow users to create duplicate customer masters so searching is easier.',
        'Ignore the issue because mobile speed is more important than data quality.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Mobile-first workflows need the same master-data and review discipline as desktop workflows. Why not A: mobile access can be useful when controlled. Why not C: duplicate masters worsen data quality. Why not D: speed does not justify unreliable books.'
    },

    {
      id: 'vy-13',
      type: 'mcq',
      title: 'Duplicate Collection',
      difficulty: 'hard',
      points: 5,
      prompt: `A customer collection of ₹50,000 was recorded manually against an invoice.

Later, the bank transaction is imported and recorded again as a new receipt.

What is the likely effect?`,
      options: [
        'Cash and customer collection may be duplicated, potentially creating an incorrect customer credit or understated receivable.',
        'Supplier payable will increase.',
        'Inventory quantity will double.',
        'There is no issue because both entries represent the same real cash.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Recording the same collection twice overstates cash/receipt activity and distorts the customer balance. Why not B: this is not a supplier transaction. Why not C: no stock event occurred. Why not D: one real cash receipt should appear once in the books.'
    },

    {
      id: 'vy-14',
      type: 'mcq',
      title: 'Collections Discipline',
      difficulty: 'hard',
      points: 5,
      prompt: `Revenue is increasing, but receivable aging is worsening and actual cash collections are flat.

What is the strongest interpretation?`,
      options: [
        'Growth quality may be weakening because billed sales are not converting into cash at the same pace.',
        'The business is definitely stronger because revenue is higher.',
        'Collections do not matter until invoices exceed one year overdue.',
        'Receivables should be moved to inventory.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Deteriorating aging with flat cash conversion is a working-capital warning despite growth. Why not B: revenue quality matters. Why not C: problems should be addressed well before one year. Why not D: receivables and inventory are different assets.'
    },

    {
      id: 'vy-15',
      type: 'mcq',
      title: 'Cash vs Bank Recording',
      difficulty: 'hard',
      points: 5,
      prompt: `A ₹30,000 customer payment was received in cash but mistakenly recorded as a bank receipt.

Why does this matter?`,
      options: [
        'The total receipt may be correct, but cash-on-hand and bank balances are misstated and reconciliation will be affected.',
        'Revenue will automatically be doubled.',
        'GST will always become zero.',
        'The error has no impact because both accounts are assets.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Correct account classification matters even when total assets are unchanged. Why not B: revenue is not necessarily affected. Why not C: GST does not automatically change. Why not D: account-level accuracy is necessary for reconciliation and cash control.'
    },

    {
      id: 'vy-16',
      type: 'mcq',
      title: 'Supplier Payment Planning',
      difficulty: 'hard',
      points: 5,
      prompt: `A small business has ₹480,000 available cash.

Payments due this week:
- critical supplier: ₹260,000
- rent: ₹120,000
- non-critical supplier: ₹180,000
- tax due next week: ₹150,000

Expected customer collections this week: ₹90,000

What is the strongest management approach?`,
      options: [
        'Pay every supplier immediately and deal with the tax later.',
        'Use a short-term cash plan that prioritizes critical obligations, considers expected collections, preserves required liquidity, and actively manages lower-priority payments.',
        'Stop all payments until customer collections arrive.',
        'Pay only the smallest invoices first.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Small-business cash management requires prioritization by timing, criticality, and available liquidity. Why not A: this can create a statutory shortfall. Why not C: blanket payment freezes can damage operations. Why not D: invoice size alone is not the correct priority rule.'
    },

    {
      id: 'vy-17',
      type: 'mcq',
      title: 'Data Backup and Recovery',
      difficulty: 'hard',
      points: 5,
      prompt: `A business uses Vyapar as its primary billing and bookkeeping system.

Only one phone contains the latest local data and no recent backup exists.

What is the strongest control response?`,
      options: [
        'Continue because mobile devices rarely fail.',
        'Establish regular backup/sync and recovery procedures, verify backups can be restored, and avoid a single-device dependency.',
        'Take screenshots of monthly reports as the only backup.',
        'Print every invoice and delete old digital data.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Financial data requires recoverable backups and resilience against device loss or corruption. Why not A: single-device dependency is a material operational risk. Why not C: screenshots do not preserve transaction-level data. Why not D: paper does not replace recoverable digital accounting records.'
    },

    {
      id: 'vy-18',
      type: 'mcq',
      title: 'Month-End Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Before month-end, the owner sees:

- old receivables
- supplier dues not matched to payments
- stock differences
- GST summary discrepancy
- several cash expenses with no references

What is the strongest close approach?`,
      options: [
        'Close the month immediately because small businesses do not need formal review.',
        'Reconcile customer/vendor balances, cash/bank, stock, GST, and unusual expenses, correct supported errors, and document unresolved issues before relying on reports.',
        'Delete old balances to make the reports cleaner.',
        'Review only sales because revenue is the most important figure.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Even a small-business system needs disciplined period-end validation across cash, working capital, tax, stock, and expenses. Why not A: size does not eliminate control needs. Why not C: deletion hides problems. Why not D: profit and cash depend on more than sales.'
    },

    {
      id: 'vy-19',
      type: 'mcq',
      title: 'Owner Withdrawal',
      difficulty: 'hard',
      points: 5,
      prompt: `The owner withdraws ₹100,000 from the business bank account for personal use.

What is the strongest bookkeeping principle?`,
      options: [
        'Record it according to the business structure as an owner draw/equity-related withdrawal rather than treating it as an operating business expense.',
        'Record it as Office Expense because cash left the business.',
        'Record it as Sales Return.',
        'Ignore it because owner transactions are personal.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Personal owner withdrawals generally should not distort operating expenses and should be classified according to the legal/accounting structure. Why not B: personal use is not an operating expense. Why not C: no customer sale was returned. Why not D: the business bank movement must still be recorded.'
    },

    {
      id: 'vy-20',
      type: 'mcq',
      title: 'Integrated Vyapar Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A business uses Vyapar only for invoice printing.

A review finds:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  AR["Old receivables"] --> J["Bookkeeping redesign"]
  AP["Untracked supplier dues"] --> J
  GST["GST differences"] --> J
  ST["Stock mismatches"] --> J
  EX["Missing expenses"] --> J
  CA["Cash / bank miscoding"] --> J
  BK["No reliable backup"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class AR,AP,GST,ST,EX,CA,BK,J warning;`,
      options: [
        'Continue using Vyapar only for invoices because bookkeeping can stay outside the system.',
        'Establish disciplined end-to-end use for billing, receivables, payables, expenses, stock, GST, cash/bank recording, periodic review, and backup/recovery.',
        'Create more invoice templates to improve visibility.',
        'Stop recording stock because it causes reconciliation issues.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The business needs an integrated bookkeeping operating model, not just billing. Why not A: fragmented records weaken cash, profit, tax, and working-capital visibility. Why not C: presentation does not solve control issues. Why not D: removing stock tracking reduces rather than improves operational control.'
    },
  ],
};
