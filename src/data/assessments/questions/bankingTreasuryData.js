import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const bankingTreasuryData = {
  id: ASSESSMENT_TYPES.banking_treasury,
  title: 'Banking & Treasury Operations Professional Certification',
  shortTitle: 'Banking & Treasury',
  category: 'Accounting',
  durationMinutes: 55,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Assesses practical treasury judgment across cash positioning, bank reconciliation, liquidity forecasting, payment controls, bank account governance, FX exposure, short-term funding, fraud prevention, and executive treasury reporting.',
  instructions:
    '20 scenario-based questions, 55 minutes, 100 marks. Several questions include Mermaid diagrams, cash schedules, or treasury workflows. Read the full scenario before choosing. Options are intentionally close, so choose the answer that best addresses the underlying treasury risk or operating issue. No negative marking.',

  questions: [
    {
      id: 'bt-01',
      type: 'mcq',
      title: 'Treasury Objective',
      difficulty: 'easy',
      points: 5,
      prompt: `A company has profitable operations but unpredictable cash timing across 14 bank accounts in 6 countries.

What is the strongest description of treasury's role?`,
      options: [
        'Maximize the number of banking relationships so funds are spread across more institutions.',
        'Maintain sufficient liquidity, control cash movement, optimize funding, and manage financial risk across the business.',
        'Replace accounts payable and accounts receivable because both functions affect cash.',
        'Focus primarily on month-end reporting because daily balances are too volatile to manage.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Treasury exists to ensure liquidity, control cash flows, manage funding, and monitor financial risks. Why not A: more accounts can increase complexity and control risk. Why not C: treasury works with AP and AR but does not replace them. Why not D: treasury is an active daily operating function, not only a reporting function.'
    },

    {
      id: 'bt-02',
      type: 'mcq',
      title: 'Daily Cash Position',
      difficulty: 'easy',
      points: 5,
      prompt: `At 9:00 AM, treasury receives this position:

{{diagram}}

What is the strongest immediate interpretation?`,
      diagram: `flowchart LR
  O["Opening cash<br/><b>$4.2m</b>"] --> P["Today's position"]
  I["Expected inflows<br/><b>$1.1m</b>"] --> P
  X["Committed outflows<br/><b>$4.8m</b>"] --> P
  M["Minimum liquidity buffer<br/><b>$1.0m</b>"] --> P
  classDef metric fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class O,I,X,M,P metric;`,
      options: [
        'The company has excess liquidity because opening cash exceeds the minimum buffer.',
        'The company may face a same-day liquidity shortfall because projected ending cash is $0.5m, below the $1.0m minimum buffer.',
        'No action is needed because expected inflows always arrive before committed outflows.',
        'The company should cancel all payments until the next business day.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. $4.2m + $1.1m - $4.8m leaves $0.5m, below the required $1.0m buffer. Why not A: opening cash alone is not the relevant position. Why not C: timing uncertainty is exactly why daily positioning matters. Why not D: treasury should evaluate funding and payment priority rather than automatically stopping all payments.'
    },

    {
      id: 'bt-03',
      type: 'mcq',
      title: 'Bank Reconciliation',
      difficulty: 'easy',
      points: 5,
      prompt: `The bank statement shows $3.46 million.
The ledger shows $3.18 million.

Outstanding checks total $410,000.
A deposit in transit totals $130,000.

What is the reconciled bank balance?`,
      options: [
        '$3.05 million',
        '$3.18 million',
        '$3.59 million',
        '$4.00 million',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. $3.46m - $0.41m + $0.13m = $3.18m, which agrees to the ledger. Why not A: it subtracts both reconciling items. Why not C: it adds the deposit but ignores outstanding checks. Why not D: it adds both items.'
    },

    {
      id: 'bt-04',
      type: 'mcq',
      title: 'Payment Approval',
      difficulty: 'easy',
      points: 5,
      prompt: `A payment analyst creates a $680,000 payment batch. The same analyst can also edit vendor bank details and release the batch to the bank.

What is the primary control weakness?`,
      options: [
        'The analyst may take too long because too many tasks sit with one person.',
        'The process lacks segregation of duties across vendor maintenance, payment preparation, and payment release.',
        'The payment amount is too large for electronic banking.',
        'The company should stop using batch payments and pay each invoice separately.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Concentrating vendor-bank maintenance, payment preparation, and release creates a direct fraud path. Why not A: efficiency is secondary to the control issue. Why not C: electronic banking can handle large payments with proper controls. Why not D: individual payments do not solve the authorization weakness.'
    },

    {
      id: 'bt-05',
      type: 'mcq',
      title: 'Liquidity Stress',
      difficulty: 'easy',
      points: 5,
      prompt: `Which combination most strongly suggests emerging liquidity stress?`,
      options: [
        'High cash balances, unused credit facilities, and falling overdue payables.',
        'Tight cash, rising overdue supplier balances, increasing use of overdrafts, and poor visibility into collections.',
        'Stable cash with improving forecast accuracy.',
        'Falling fixed assets and lower depreciation expense.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Tight cash, delayed supplier payments, growing short-term borrowing, and weak inflow visibility are direct liquidity-stress signals. Why not A: those are signs of stronger liquidity. Why not C: this does not indicate stress. Why not D: fixed-asset movements are not the most direct liquidity indicator.'
    },

    {
      id: 'bt-06',
      type: 'mcq',
      title: '13-Week Cash Forecast',
      difficulty: 'medium',
      points: 5,
      prompt: `Treasury prepares a 13-week forecast.

Week 5 shows a projected $6 million cash deficit, but the forecast assumes that a $9 million customer receipt arrives exactly on its contractual due date.

The customer has paid 20-30 days late for the last four invoices.

What is the strongest treasury response?`,
      options: [
        'Keep the contractual date because forecasts should use legally agreed payment terms.',
        'Stress the collection timing using observed payment behavior and assess funding needs under the delayed-receipt scenario.',
        'Remove the customer receipt entirely because late-paying customers should never be included in forecasts.',
        'Borrow $9 million immediately because historical lateness guarantees the receipt will miss the due date.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Treasury forecasts should reflect realistic timing and scenario risk, not just contractual dates. Why not A: this can create false confidence. Why not C: the receipt is still expected and should be modeled with timing uncertainty. Why not D: borrowing should follow forecasted need and alternatives, not an automatic rule.'
    },

    {
      id: 'bt-07',
      type: 'mcq',
      title: 'Collection Timing',
      difficulty: 'medium',
      points: 5,
      prompt: `Sales are on plan, but treasury repeatedly misses its weekly liquidity forecast because customer receipts arrive later than expected.

Which metric should treasury monitor most closely alongside the forecast?`,
      options: [
        'Receivable aging and actual collection timing by customer or customer group.',
        'Depreciation by fixed-asset category.',
        'Employee headcount by department.',
        'Gross margin by product only.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Forecast accuracy depends heavily on when receivables actually convert to cash. Why not B: depreciation is non-cash. Why not C: headcount is not the direct cause of collection timing. Why not D: margin matters for economics but not the timing of customer receipts.'
    },

    {
      id: 'bt-08',
      type: 'mcq',
      title: 'Payment Run Review',
      difficulty: 'medium',
      points: 5,
      prompt: `Before releasing a $12 million payment run, treasury identifies:

- 1 new vendor added yesterday
- 2 invoices with identical amount and reference
- 1 vendor whose bank account changed this morning
- sufficient cash to fund the batch

What is the strongest action?`,
      options: [
        'Release the full batch because liquidity is sufficient.',
        'Hold and investigate the exceptions, validate approvals and vendor changes independently, and release only after the flagged items are resolved.',
        'Delete all four flagged payments and permanently block the vendors.',
        'Release the batch first and investigate afterward to avoid late-payment fees.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Duplicate invoices and same-day bank-detail changes are classic payment-control exceptions and should be independently verified before release. Why not A: liquidity does not override fraud controls. Why not C: exceptions require investigation, not automatic deletion. Why not D: post-payment review is too late for preventable fraud.'
    },

    {
      id: 'bt-09',
      type: 'mcq',
      title: 'Bank Account Governance',
      difficulty: 'medium',
      points: 5,
      prompt: `A group has 67 bank accounts. Twelve have had no activity for more than a year, and several still list former employees as signatories.

What is the strongest treasury response?`,
      options: [
        'Leave dormant accounts open because unused accounts create no risk.',
        'Perform an account rationalization and signatory review, close unnecessary accounts, and remove obsolete access promptly.',
        'Move a small amount of money through each dormant account to keep it active.',
        'Transfer ownership of all accounts to Accounts Payable.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Dormant accounts and outdated signatories create fraud, operational, and governance risk. Why not A: unused accounts can still be compromised. Why not C: activity does not solve the governance weakness. Why not D: bank account ownership should remain under controlled treasury governance.'
    },

    {
      id: 'bt-10',
      type: 'mcq',
      title: 'FX Exposure',
      difficulty: 'medium',
      points: 5,
      prompt: `A US company expects to pay a supplier EUR 5 million in 90 days.

At today's rate, the payment is approximately $5.4 million.

What risk does treasury primarily face?`,
      options: [
        'If the euro strengthens against the dollar, the dollar cost of the future payment may increase.',
        'If the euro strengthens, the dollar cost must decrease because the company is buying euros.',
        'There is no FX risk until the invoice becomes overdue.',
        'FX risk affects only accounting translation, not real cash payments.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The company must buy euros in the future, so a stronger euro can increase the dollar cash cost. Why not B: the direction is reversed. Why not C: exposure exists as soon as the foreign-currency obligation is expected or committed. Why not D: transaction FX exposure can directly affect realized cash outflow.'
    },

    {
      id: 'bt-11',
      type: 'mcq',
      title: 'Unreconciled Bank Item',
      difficulty: 'medium',
      points: 5,
      prompt: `A $950,000 bank debit has remained unreconciled for five business days. The description is unfamiliar and no payment instruction matches it.

What is the strongest response?`,
      options: [
        'Carry it as a timing difference until month-end.',
        'Investigate immediately with the bank and internal payment teams, identify ownership, and escalate because it may represent an unauthorized or misdirected cash movement.',
        'Post it to Miscellaneous Expense so the reconciliation clears.',
        'Ignore it if the bank balance remains positive.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A large unexplained cash movement is a priority treasury exception and potentially a fraud or operational-loss event. Why not A: five days with no explanation is not a normal timing item. Why not C: clearing the reconciliation without support hides the issue. Why not D: available cash does not reduce the control risk.'
    },

    {
      id: 'bt-12',
      type: 'mcq',
      title: 'Treasury Dashboard',
      difficulty: 'medium',
      points: 5,
      prompt: `Which dashboard is most decision-useful for a CFO?`,
      diagram: `flowchart TB
  A["Available Cash"] --> D["TREASURY DASHBOARD"]
  F["13-week Forecast"] --> D
  L["Liquidity Headroom"] --> D
  FX["Major FX Exposures"] --> D
  X["Payment / Bank Exceptions"] --> D
  classDef metric fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class A,F,L,FX,X,D metric;`,
      options: [
        'A list of every bank transaction posted during the month.',
        'Current cash, forecasted headroom, major funding constraints, material FX exposures, key exceptions, and recommended actions.',
        'Only the total bank balance at yesterday’s close.',
        'A vendor master list sorted alphabetically.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Leadership needs a forward-looking view of liquidity, risks, exceptions, and actions. Why not A: transaction detail is operational, not executive. Why not C: one static balance lacks forecast and risk context. Why not D: vendor data is not a treasury dashboard.'
    },

    {
      id: 'bt-13',
      type: 'mcq',
      title: 'Fraudulent Bank Change',
      difficulty: 'hard',
      points: 5,
      prompt: `A supplier emails Accounts Payable requesting a bank-account change. The email address appears legitimate, and the attached letter uses the supplier's logo.

The next payment is $1.8 million.

What is the strongest control before updating the master data?`,
      options: [
        'Accept the change because the request came from the supplier’s usual email domain.',
        'Verify the change through an independent channel using previously trusted contact information, then require appropriate approval before updating the bank details.',
        'Update the bank account but send a small test payment first.',
        'Ask the same email sender to confirm the bank details a second time.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Bank-detail changes are high-risk and should be independently verified using trusted contact data, not information contained in the change request. Why not A: compromised email accounts are common. Why not C: even a small payment can validate an attacker-controlled account but does not authenticate the supplier. Why not D: the same compromised channel provides no independent verification.'
    },

    {
      id: 'bt-14',
      type: 'mcq',
      title: 'Short-Term Borrowing',
      difficulty: 'hard',
      points: 5,
      prompt: `Treasury forecasts the following:

{{diagram}}

A $7 million deficit is projected for 8 days.
A committed revolver costs 6.2% annually.
A 30-day deposit worth $12 million matures in 10 days.
Breaking the deposit early costs a $40,000 penalty.

What should treasury compare first?`,
      diagram: `flowchart LR
  GAP["Cash gap<br/><b>$7m for 8 days</b>"] --> D["Funding decision"]
  REV["Revolver<br/><b>6.2% p.a.</b>"] --> D
  DEP["Deposit matures<br/><b>in 10 days</b>"] --> D
  PEN["Early break penalty<br/><b>$40k</b>"] --> D
  classDef calc fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class GAP,REV,DEP,PEN,D calc;`,
      options: [
        'The cost and operational certainty of drawing the revolver versus breaking the deposit, while considering the exact timing of the cash gap.',
        'Only the interest rate on the revolver because deposits should never be broken early.',
        'Only the deposit penalty because borrowing does not affect liquidity.',
        'Whether the company was profitable last year.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Treasury should compare the cost and practicality of available funding alternatives against the timing of the liquidity need. Why not B: an absolute rule can be economically suboptimal. Why not C: borrowing cost is directly relevant. Why not D: historical profitability does not answer an 8-day funding decision.'
    },

    {
      id: 'bt-15',
      type: 'mcq',
      title: 'Cash Concentration',
      difficulty: 'hard',
      points: 5,
      prompt: `A group has $22 million idle in subsidiaries while the parent company is drawing $15 million on an expensive overdraft.

What is the strongest treasury question?`,
      options: [
        'Can surplus cash be legally and operationally concentrated or swept to reduce external borrowing, subject to tax, regulatory, and local restrictions?',
        'Can the subsidiaries spend the idle cash faster so balances fall?',
        'Should the parent increase the overdraft limit to avoid moving cash internally?',
        'Should all subsidiary bank accounts be closed immediately?',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Cash concentration can reduce external borrowing when internal surplus cash is available, but legal, tax, regulatory, and operational constraints must be considered. Why not B: unnecessary spending destroys value. Why not C: external borrowing may be avoidable. Why not D: account closure is unrelated to whether cash can be pooled.'
    },

    {
      id: 'bt-16',
      type: 'mcq',
      title: 'Forecast Accuracy',
      difficulty: 'hard',
      points: 5,
      prompt: `For eight consecutive weeks, treasury's forecast overstates ending cash by 12-18%.

Post-analysis shows that customer receipts are consistently later than forecast and supplier payments are consistently earlier.

What is the strongest improvement?`,
      options: [
        'Keep the existing assumptions so the forecast remains comparable week to week.',
        'Recalibrate timing assumptions using actual collection and payment behavior, track forecast variance by driver, and assign owners to recurring misses.',
        'Increase the minimum cash buffer by 18% and leave the forecast logic unchanged.',
        'Forecast only monthly because weekly forecasting produces too much noise.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Systematic misses should be diagnosed and used to improve assumptions and accountability. Why not A: consistency is not useful when the model is systematically biased. Why not C: a larger buffer may protect liquidity but does not improve forecast quality. Why not D: reducing frequency can hide timing risk rather than solve it.'
    },

    {
      id: 'bt-17',
      type: 'mcq',
      title: 'Counterparty Concentration',
      difficulty: 'hard',
      points: 5,
      prompt: `Treasury keeps 82% of total cash with one bank because that bank pays the highest overnight yield.

What risk is most directly increased?`,
      options: [
        'Counterparty and operational concentration risk, because a disruption or failure at one institution could affect most of the company’s liquidity.',
        'Foreign exchange risk, regardless of the currency of the deposits.',
        'Inventory obsolescence risk.',
        'Revenue-recognition risk.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Concentrating most cash with one institution increases dependency on that bank’s solvency and operational availability. Why not B: FX risk depends on currency exposure, not bank concentration alone. Why not C or D: those risks are unrelated to bank counterparty concentration.'
    },

    {
      id: 'bt-18',
      type: 'mcq',
      title: 'Payment File Integrity',
      difficulty: 'hard',
      points: 5,
      prompt: `A payment file is approved in the ERP, exported to a shared folder, manually uploaded to the bank portal, and released.

There is no control preventing the file from being altered after ERP approval.

{{diagram}}

What is the strongest control improvement?`,
      diagram: `flowchart LR
  ERP["ERP<br/><b>Approved payment file</b>"] --> F["Shared folder"]
  F --> U["Manual upload"]
  U --> B["Bank portal"]
  M["Risk<br/><b>file can change after approval</b>"] -.-> F
  classDef danger fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class F,M danger;`,
      options: [
        'Require the preparer to visually compare the file name before upload.',
        'Use secure system-to-bank transmission or cryptographic integrity controls so the approved payment content cannot be changed without detection.',
        'Move the shared folder to a different network drive.',
        'Require the approver to approve the batch again after the payment is released.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The key risk is alteration between approval and bank submission. Secure transmission or integrity validation closes that gap. Why not A: file names do not prove contents are unchanged. Why not C: relocating the folder does not establish integrity. Why not D: post-release approval is too late.'
    },

    {
      id: 'bt-19',
      type: 'mcq',
      title: 'Liquidity Scenario Analysis',
      difficulty: 'hard',
      points: 5,
      prompt: `Base forecast shows a $4 million minimum cash balance.

Stress scenario assumptions:
- top customer pays 14 days late: -$7m
- unexpected tax payment: -$3m
- unused revolver availability: +$8m

What does the stress scenario imply?`,
      options: [
        'The company remains comfortably liquid because the stressed cash position is still above the $4 million base-case minimum.',
        'The stressed position is about $2 million positive, but liquidity headroom has narrowed materially and may fall below policy buffers, so contingency planning is warranted.',
        'The revolver eliminates all liquidity risk because it is larger than the tax payment.',
        'Customer collection timing should be excluded from treasury stress testing.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. $4m - $7m - $3m + $8m = $2m. Liquidity remains positive, but headroom is materially reduced and may breach policy buffers. Why not A: the stressed position is below the $4m base-case minimum. Why not C: a revolver reduces risk but does not eliminate it. Why not D: collection timing is a central treasury stress variable.'
    },

    {
      id: 'bt-20',
      type: 'mcq',
      title: 'Integrated Treasury Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A CFO sees the following weekly treasury dashboard:

{{diagram}}

Which conclusion is strongest?`,
      diagram: `flowchart TB
  C["Available cash<br/><b>$9m</b>"] --> J["Treasury judgment"]
  B["Minimum buffer<br/><b>$6m</b>"] --> J
  F["13-week forecast<br/><b>$11m deficit in week 4</b>"] --> J
  R["Revolver headroom<br/><b>$7m</b>"] --> J
  AP["Overdue payables<br/><b>+32%</b>"] --> J
  FX["Unhedged FX payable<br/><b>€8m</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class F,AP,FX,J warning;`,
      options: [
        'Treasury is healthy because today’s cash exceeds the minimum buffer.',
        'The company has a forward liquidity gap larger than current revolver headroom, worsening supplier pressure, and material FX exposure, so funding and risk actions are needed before week 4.',
        'The only issue is FX because current cash is adequate.',
        'The company should immediately pay all overdue suppliers from today’s cash balance.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A static positive cash balance does not offset a forecast deficit that exceeds committed headroom, rising overdue payables, and an unhedged foreign-currency obligation. Why not A: it ignores forward liquidity. Why not C: multiple material risks are present. Why not D: paying all overdue suppliers immediately could worsen the forecast shortfall.'
    },
  ],
};
