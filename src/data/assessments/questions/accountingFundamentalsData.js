import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const accountingFundamentalsData = {
  id: ASSESSMENT_TYPES.accounting_fundamentals,
  title: 'Accounting Fundamentals Professional Certification',
  shortTitle: 'Accounting Fundamentals',
  category: 'Accounting',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical accounting judgment across double-entry bookkeeping, accruals, journals, ledgers, reconciliations, financial statements, month-end close, materiality, and internal controls.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Several questions include a Mermaid diagram or accounting schedule. Read the full scenario before choosing. Options are intentionally close, so choose the answer that is technically correct and addresses the underlying accounting issue. No negative marking.',

  questions: [
    {
      id: 'af-01',
      type: 'mcq',
      title: 'Accounting Equation Under Pressure',
      difficulty: 'easy',
      points: 5,
      prompt: `A company starts the day with Assets of $500,000, Liabilities of $320,000, and Equity of $180,000.

It then buys equipment for $40,000 cash.

{{diagram}}

Which statement is correct immediately after the purchase?`,
      diagram: `flowchart LR
  B["BEFORE<br/><b>Assets 500k</b><br/>Liabilities 320k<br/>Equity 180k"] --> T["Buy equipment<br/><b>40k cash</b>"]
  T --> A["AFTER<br/><b>Cash -40k</b><br/><b>Equipment +40k</b>"]
  classDef base fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  classDef event fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class B,A base;
  class T event;`,
      options: [
        'Assets fall to $460,000 because cash decreased by $40,000, while liabilities and equity remain unchanged.',
        'Assets remain $500,000 because one asset decreased while another increased; liabilities and equity remain unchanged.',
        'Assets rise to $540,000 because equipment was added, while cash remains an asset and should not reduce the total.',
        'Equity falls by $40,000 because buying equipment is an expense at the date of purchase.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The purchase changes the composition of assets, not total assets: cash decreases by $40,000 and equipment increases by $40,000. Liabilities and equity are unchanged. Why not A: it ignores the equipment asset acquired. Why not C: it double-counts the transaction by keeping the cash and adding the equipment. Why not D: purchasing equipment is normally capitalized, not expensed immediately.'
    },

    {
      id: 'af-02',
      type: 'mcq',
      title: 'Balanced Entry',
      difficulty: 'easy',
      points: 5,
      prompt: `A company receives a $12,000 supplier invoice for software services already consumed this month. The invoice will be paid next month.

Which journal entry records the transaction correctly?`,
      options: [
        'Debit Cash $12,000; Credit Software Expense $12,000.',
        'Debit Accounts Payable $12,000; Credit Software Expense $12,000.',
        'Debit Software Expense $12,000; Credit Accounts Payable $12,000.',
        'Debit Prepaid Software $12,000; Credit Cash $12,000.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The expense has been incurred, so Software Expense increases with a debit, and the unpaid obligation creates Accounts Payable, credited for $12,000. Why not A: no cash was received. Why not B: debiting Accounts Payable would reduce a liability rather than create one. Why not D: the service was already consumed, so it is not a prepaid asset.'
    },

    {
      id: 'af-03',
      type: 'mcq',
      title: 'Debit and Credit Logic',
      difficulty: 'easy',
      points: 5,
      prompt: `Which transaction would normally create a debit to an asset and a credit to a liability?`,
      options: [
        'Paying a supplier invoice that was recorded last month.',
        'Recording monthly depreciation expense.',
        'Buying equipment on credit from a vendor.',
        'Collecting cash from a customer whose receivable was already recorded.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Equipment increases, so the asset is debited; Accounts Payable increases, so the liability is credited. Why not A: paying an existing payable debits the liability and credits cash. Why not B: depreciation debits expense and credits accumulated depreciation. Why not D: collecting an existing receivable debits cash and credits Accounts Receivable.'
    },

    {
      id: 'af-04',
      type: 'mcq',
      title: 'Accrual Cutoff',
      difficulty: 'easy',
      points: 5,
      prompt: `The December electricity bill has not arrived by year-end. Based on meter data, finance estimates that $18,000 of electricity was consumed in December.

{{diagram}}

What is the best year-end treatment?`,
      diagram: `timeline
  title December close
  01 Dec : Electricity usage begins
  31 Dec : Financial year-end
  10 Jan : Supplier invoice arrives for December usage`,
      options: [
        'Record nothing in December because the invoice did not arrive until January.',
        'Record the $18,000 expense in January because that is when the amount becomes legally payable.',
        'Accrue a December expense and liability using the best available estimate, then true it up when the invoice arrives.',
        'Record a prepaid asset in December because the company has not yet paid the supplier.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Accrual accounting records expenses when incurred, not when invoiced or paid. A reasonable estimate should be accrued at year-end and adjusted when the actual bill arrives. Why not A: this understates December expenses and liabilities. Why not B: legal payment timing does not determine expense recognition. Why not D: no future benefit has been prepaid; the electricity was already consumed.'
    },

    {
      id: 'af-05',
      type: 'mcq',
      title: 'Journal Entry Support',
      difficulty: 'easy',
      points: 5,
      prompt: `An accountant prepares a manual journal entry for $275,000 to move costs from Operating Expense to Capital Projects.

Which control package gives the strongest support for posting the journal?`,
      options: [
        'A short narration saying "reclass per management request" and the preparer’s initials.',
        'A spreadsheet showing the amount, a business explanation, source evidence, account mapping, and independent approval.',
        'An email from the project manager asking finance to capitalize the amount, with no underlying invoices attached.',
        'A screenshot of the general ledger before posting, because it proves the expense currently exists.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A high-value manual journal should be supported by the calculation, source evidence, accounting rationale, account mapping, and independent approval. Why not A: the narration is too weak to support classification. Why not C: management intent does not replace accounting evidence. Why not D: a GL screenshot proves the balance exists but not that capitalization is appropriate.'
    },

    {
      id: 'af-06',
      type: 'mcq',
      title: 'General Ledger Investigation',
      difficulty: 'medium',
      points: 5,
      prompt: `The controller sees that Travel Expense increased from $85,000 last month to $410,000 this month.

Which is the strongest first use of the general ledger?`,
      options: [
        'Review the detailed postings, dates, sources, preparers, and descriptions making up the $410,000 balance.',
        'Recalculate the company tax provision because travel expense can affect taxable income.',
        'Compare the bank statement total to the Travel Expense balance and post the difference.',
        'Move the entire increase to Prepaid Expenses until the underlying reason is known.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The GL provides the transaction-level composition of the account, so the first step is to inspect what drove the unusual movement. Why not B: tax impact is downstream and does not diagnose the balance. Why not C: travel expense is not expected to equal bank activity. Why not D: moving unexplained balances is not investigation and could create a second misstatement.'
    },

    {
      id: 'af-07',
      type: 'mcq',
      title: 'Trial Balance Does Not Prove Accuracy',
      difficulty: 'medium',
      points: 5,
      prompt: `A trial balance agrees perfectly: total debits equal total credits.

Yet a $90,000 equipment purchase was posted as:

Debit Repairs Expense $90,000
Credit Cash $90,000

What does this demonstrate?`,
      options: [
        'The trial balance must be wrong because a classification error always causes debits and credits to differ.',
        'A balanced trial balance proves the accounts are mathematically balanced, but it does not prove transactions were classified correctly.',
        'The transaction is acceptable because both Repairs Expense and Equipment reduce profit in the current period.',
        'The error can only be detected through bank reconciliation because cash was credited.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The entry balances mathematically, so the trial balance still agrees even though the debit account is wrong. Why not A: classification errors can be perfectly balanced. Why not C: equipment is generally capitalized and affects profit over time through depreciation, unlike an immediate repair expense. Why not D: the cash side may reconcile correctly even while the expense classification is wrong.'
    },

    {
      id: 'af-08',
      type: 'mcq',
      title: 'Income Statement Interpretation',
      difficulty: 'medium',
      points: 5,
      prompt: `A company reports:

{{diagram}}

What is gross profit?`,
      diagram: `flowchart TB
  R["Revenue<br/><b>$1,200,000</b>"] --> GP["Gross Profit"]
  C["Cost of Goods Sold<br/><b>$720,000</b>"] --> GP
  O["Operating Expenses<br/><b>$310,000</b>"] --> OP["Operating Profit"]
  GP --> OP
  classDef amount fill:#f8fafc,stroke:#94a3b8,color:#0f172a;
  class R,C,O,GP,OP amount;`,
      options: [
        '$170,000',
        '$310,000',
        '$480,000',
        '$890,000',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Gross profit is Revenue minus Cost of Goods Sold: $1,200,000 - $720,000 = $480,000. Why not A: $170,000 is operating profit after subtracting operating expenses. Why not B: that is the operating expense amount itself. Why not D: it subtracts operating expenses from revenue while ignoring COGS.'
    },

    {
      id: 'af-09',
      type: 'mcq',
      title: 'Balance Sheet Classification',
      difficulty: 'medium',
      points: 5,
      prompt: `At year-end, a company has a $600,000 bank loan. $100,000 is contractually due within the next 12 months and $500,000 is due afterward.

How should the loan generally be presented?`,
      options: [
        'Entirely as a current liability because some portion is due within 12 months.',
        'Entirely as a non-current liability because the original loan term exceeded one year.',
        '$100,000 current and $500,000 non-current, assuming no other classification issue applies.',
        'Entirely in equity because debt financing increases the company’s capital base.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The amount due within the next 12 months is generally classified as current and the remainder as non-current. Why not A: only the current portion belongs in current liabilities. Why not B: classification is based on the obligation at the reporting date, not merely the original term. Why not D: debt is a liability, not equity.'
    },

    {
      id: 'af-10',
      type: 'mcq',
      title: 'Bank Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `At month-end:

{{diagram}}

The bank statement shows $248,000.
The general ledger cash balance shows $231,000.
Outstanding checks total $22,000.
A customer deposit of $5,000 was recorded in the books on the last day of the month but reached the bank the next morning.

Which reconciled balance is correct?`,
      diagram: `flowchart LR
  B["BANK STATEMENT<br/><b>$248,000</b>"] --> RB["Reconciled balance"]
  OC["Less outstanding checks<br/><b>$22,000</b>"] --> RB
  D["Add deposit in transit<br/><b>$5,000</b>"] --> RB
  classDef calc fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class B,OC,D,RB calc;`,
      options: [
        '$221,000',
        '$226,000',
        '$231,000',
        '$275,000',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Bank side reconciliation: $248,000 - $22,000 + $5,000 = $231,000, which agrees to the ledger. Why not A: it subtracts both reconciling items. Why not B: it subtracts the checks but ignores the deposit in transit. Why not D: it adds both items.'
    },

    {
      id: 'af-11',
      type: 'mcq',
      title: 'Prepaid Expense Recognition',
      difficulty: 'medium',
      points: 5,
      prompt: `On October 1, a company pays $120,000 for a 12-month insurance policy.

At December 31, how much should generally remain in Prepaid Insurance?`,
      options: [
        '$30,000',
        '$90,000',
        '$100,000',
        '$120,000',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Three months of coverage have been consumed, so $30,000 is expense and nine months, or $90,000, remains prepaid. Why not A: that is the amount recognized as expense, not the remaining asset. Why not C: it assumes only two months were consumed. Why not D: it ignores the coverage already used.'
    },

    {
      id: 'af-12',
      type: 'mcq',
      title: 'Month-End Close Sequencing',
      difficulty: 'medium',
      points: 5,
      prompt: `Finance is trying to reduce late adjustments. Today the team prepares the financial statements before several reconciliations are complete.

Which sequence is strongest?

{{diagram}}`,
      diagram: `flowchart LR
  A["1 · Post recurring & supported adjustments"] --> B["2 · Reconcile key balance-sheet accounts"]
  B --> C["3 · Investigate & clear material exceptions"]
  C --> D["4 · Review trial balance & analytics"]
  D --> E["5 · Prepare / validate financial statements"]
  classDef step fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class A,B,C,D,E step;`,
      options: [
        'Prepare the statements first, then reconcile only accounts with visible reporting anomalies.',
        'Complete supported adjustments and reconciliations before final statement preparation and analytical review.',
        'Post all estimated adjustments after the statements are issued so reporting deadlines are never missed.',
        'Skip balance-sheet reconciliations when the trial balance is mathematically balanced.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A disciplined close gets the ledger into a supported state before final reporting. Reconciliations and exception resolution should precede statement sign-off. Why not A: this creates avoidable late changes. Why not C: known adjustments belong in the reporting period before issuance. Why not D: a balanced trial balance does not prove the underlying balances are correct.'
    },

    {
      id: 'af-13',
      type: 'mcq',
      title: 'Segregation of Duties',
      difficulty: 'medium',
      points: 5,
      prompt: `One employee can create a new vendor, enter the vendor’s bank account, prepare a payment, and approve that same payment.

What is the primary control weakness?`,
      options: [
        'The employee has too many system screens open, which increases operational complexity.',
        'The process lacks segregation of duties, allowing one person to create and complete a fraudulent payment without independent challenge.',
        'The payment process is too slow because multiple responsibilities sit with one employee.',
        'The company should eliminate vendor master data and pay only from invoices.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The same person controls vendor creation, bank details, payment preparation, and approval, creating a direct fraud path. Why not A: screen count is irrelevant to the control risk. Why not C: efficiency is not the principal issue. Why not D: vendor master data is necessary; the control objective is to separate incompatible duties and require independent approval.'
    },

    {
      id: 'af-14',
      type: 'mcq',
      title: 'Materiality Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A company with annual profit of $42 million discovers a $60,000 classification error.

Normally the amount would be clearly immaterial. However, the error causes a regulated capital ratio to fall just below a required threshold.

What is the strongest conclusion?`,
      options: [
        'The error is immaterial because $60,000 is tiny relative to annual profit.',
        'The error should be ignored because classification errors do not affect cash.',
        'Materiality is not purely quantitative; the regulatory consequence can make the error qualitatively material.',
        'All errors affecting regulatory reporting are automatically material regardless of size or context.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Materiality includes qualitative factors. A small amount can matter if it changes compliance with a regulatory threshold or influences users’ decisions. Why not A: it considers only size. Why not B: cash impact is not the test for materiality. Why not D: regulatory relevance is important, but professional judgment still considers the specific facts rather than applying an absolute rule.'
    },

    {
      id: 'af-15',
      type: 'mcq',
      title: 'Revenue Cutoff',
      difficulty: 'hard',
      points: 5,
      prompt: `A customer order is invoiced for $250,000 on December 29. The goods remain in the company warehouse until January 4, when control transfers to the customer.

{{diagram}}

Assume the contract does not transfer control before shipment. Which treatment is strongest at December 31?`,
      diagram: `timeline
  title Revenue cutoff
  29 Dec : Invoice issued
  31 Dec : Reporting date
  04 Jan : Goods shipped and control transfers`,
      options: [
        'Recognize revenue on December 29 because invoicing is evidence that the sale occurred.',
        'Recognize revenue on December 31 because the customer order existed before year-end.',
        'Defer revenue until January, when control transfers under the stated contract terms.',
        'Recognize half in December and half in January to reflect the transaction spanning both periods.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Revenue recognition follows the transfer of control under the contract, not merely invoice date or order date. Why not A: invoicing alone does not establish transfer. Why not B: an order can exist before performance is complete. Why not D: there is no basis in the scenario for splitting the revenue equally.'
    },

    {
      id: 'af-16',
      type: 'mcq',
      title: 'Duplicate Liability Risk',
      difficulty: 'hard',
      points: 5,
      prompt: `During close, Accounts Payable contains a $40,000 supplier invoice dated December 28.

A separate manual accrual of $40,000 was also posted for the same service because the accountant believed the invoice had not yet arrived.

What is the accounting risk?`,
      options: [
        'Expenses and liabilities may both be understated by $40,000.',
        'Expenses and liabilities may both be overstated by $40,000 because the same obligation was recorded twice.',
        'Only cash is overstated because both entries will eventually be paid.',
        'There is no misstatement because one entry is an invoice and one is an accrual.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. If the invoice and accrual represent the same service, the obligation has been recorded twice, overstating expense and liability. Why not A: the issue is duplication, not omission. Why not C: cash is unaffected until payment. Why not D: different source types do not make duplicate recognition acceptable.'
    },

    {
      id: 'af-17',
      type: 'mcq',
      title: 'Reconciliation Exception',
      difficulty: 'hard',
      points: 5,
      prompt: `A balance-sheet reconciliation shows:

{{diagram}}

GL balance: $1,850,000
Supporting subledger: $1,790,000
Difference: $60,000

The difference has appeared for three consecutive months with the note "timing difference".

What is the strongest next step?`,
      diagram: `flowchart TB
  GL["General Ledger<br/><b>$1,850,000</b>"] --> D["Difference<br/><b>$60,000</b>"]
  SL["Subledger<br/><b>$1,790,000</b>"] --> D
  D --> M1["Month 1<br/>timing difference"]
  D --> M2["Month 2<br/>timing difference"]
  D --> M3["Month 3<br/>timing difference"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class D,M1,M2,M3 warning;`,
      options: [
        'Carry the difference forward because repeated timing differences are normal in reconciliations.',
        'Write off the $60,000 immediately because the difference is old.',
        'Investigate the underlying items, identify whether the difference is valid or an error, and clear or formally support it.',
        'Adjust the subledger to equal the GL because the GL is the official accounting record.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. A recurring unexplained difference is a control warning. The accountant should identify the specific reconciling items and determine whether they are valid timing items or errors. Why not A: repetition without evidence is not support. Why not B: age alone does not justify a write-off. Why not D: forcing the subledger to the GL without understanding the cause can hide the real issue.'
    },

    {
      id: 'af-18',
      type: 'mcq',
      title: 'Suspense Account Discipline',
      difficulty: 'hard',
      points: 5,
      prompt: `A finance team posts unidentified cash receipts to a suspense account. The balance has grown every month and is now $480,000.

Which control response is strongest?`,
      options: [
        'Leave the balance until customers contact the company, because suspense accounts are designed for unresolved items.',
        'Set ownership and aging rules, investigate items promptly, apply receipts to the correct accounts, and escalate old unresolved balances.',
        'Move the entire suspense balance to revenue at quarter-end so the account returns to zero.',
        'Split the suspense balance equally across customer accounts because that reduces concentration risk.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Suspense accounts are temporary holding accounts, not permanent storage. Strong control requires ownership, aging, investigation, clearing, and escalation. Why not A: unresolved items should not accumulate indefinitely. Why not C: unknown cash is not automatically revenue. Why not D: arbitrary allocation creates false customer balances.'
    },

    {
      id: 'af-19',
      type: 'mcq',
      title: 'Analytical Review',
      difficulty: 'hard',
      points: 5,
      prompt: `During final close review, the controller sees:

{{diagram}}

Revenue: +4% vs prior month
Headcount: flat
Payroll expense: +38%
No bonus cycle occurred
No acquisition occurred

What is the strongest accounting response?`,
      diagram: `flowchart LR
  R["Revenue<br/><b>+4%</b>"] --> A["Analytical review"]
  H["Headcount<br/><b>flat</b>"] --> A
  P["Payroll expense<br/><b>+38%</b>"] --> A
  B["Bonus cycle<br/><b>none</b>"] --> A
  A --> Q["Investigate unexpected variance"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class P,Q warning;`,
      options: [
        'Accept the result because the trial balance balances and payroll is normally a large expense.',
        'Reduce payroll expense by 34% so it aligns with revenue growth.',
        'Investigate the variance using payroll detail, journal entries, accruals, and prior-period comparisons before sign-off.',
        'Move the increase to Prepaid Payroll until Human Resources explains it.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Analytical review is intended to surface unusual relationships and movements. A 38% payroll increase with flat headcount and no known event requires investigation before reporting. Why not A: mathematical balance does not validate reasonableness. Why not B: accounting does not force costs to match revenue growth. Why not D: reclassification without evidence would create a new error.'
    },

    {
      id: 'af-20',
      type: 'mcq',
      title: 'Professional Accounting Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A senior accountant notices a $1.2 million balance in an account labeled "Other Assets". The prior-month reconciliation contains only the note "management adjustment". No source document or calculation is attached.

The reporting deadline is in two hours.

What best reflects strong professional accounting practice?`,
      options: [
        'Leave the balance unchanged because it existed last month and changing it now could delay reporting.',
        'Reverse the entire balance because unsupported balances should always be eliminated immediately.',
        'Escalate the unsupported balance, obtain or reconstruct the accounting support, assess materiality and classification, and document the conclusion before sign-off.',
        'Move the amount to retained earnings because equity is the safest place for unexplained historical balances.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Strong accounting judgment combines evidence, classification, materiality, escalation, and documentation. A material unsupported asset should not simply roll forward. Why not A: prior-period existence does not make a balance valid. Why not B: unsupported does not automatically mean incorrect; reversal without evidence could be equally wrong. Why not D: moving an unexplained balance to equity is arbitrary and conceals the issue.'
    },
  ],
};