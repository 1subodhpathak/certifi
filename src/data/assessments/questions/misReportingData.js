import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const misReportingData = {
  id: ASSESSMENT_TYPES.mis_reporting,
  title: 'MIS Reporting Professional Certification',
  shortTitle: 'MIS Reporting',
  category: 'Accounting',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical management reporting judgment across KPI design, variance analysis, dashboard structure, data quality, trend interpretation, exception reporting, management storytelling, escalation, and decision-oriented finance reporting.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Several questions include Mermaid diagrams, dashboard views, or reporting schedules. Read the full scenario before choosing. Options are intentionally close, so select the answer that best improves decision quality, control, or management action. No negative marking.',

  questions: [
    {
      id: 'mis-01',
      type: 'mcq',
      title: 'Decision-Ready MIS',
      difficulty: 'easy',
      points: 5,
      prompt: `A CFO receives a 60-page monthly pack containing hundreds of numbers but very little commentary.

What is the strongest purpose of redesigning the MIS pack?`,
      options: [
        'Reduce the report to one page regardless of business complexity.',
        'Convert financial and operational data into concise, decision-ready insight with clear signals, drivers, risks, and actions.',
        'Remove financial data and keep only operational metrics.',
        'Replace the general ledger with a management dashboard.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. MIS should turn data into decision support, not simply distribute more data. Why not A: brevity is useful only if decision-relevant context remains. Why not C: strong MIS often combines financial and operational information. Why not D: MIS consumes accounting data but does not replace the ledger.'
    },

    {
      id: 'mis-02',
      type: 'mcq',
      title: 'KPI Definition',
      difficulty: 'easy',
      points: 5,
      prompt: `Two business units both report "Customer Retention".

Unit A defines it as customers active at year-end divided by customers active at year-start.
Unit B defines it as customers who purchased in the last 90 days divided by all customers ever acquired.

What is the primary reporting problem?`,
      options: [
        'The KPI uses percentages instead of absolute values.',
        'The definition is inconsistent, so the reported values are not comparable and can create false management conclusions.',
        'Retention should be reported only once a year.',
        'Both definitions are correct, so no documentation is needed.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A KPI must have a stable, documented definition to support comparison. Why not A: percentages are entirely appropriate for retention. Why not C: reporting frequency depends on the business. Why not D: even reasonable definitions create confusion when different teams use them for the same KPI name.'
    },

    {
      id: 'mis-03',
      type: 'mcq',
      title: 'Variance Diagnosis',
      difficulty: 'easy',
      points: 5,
      prompt: `Budgeted operating expense for the month was $8.0m.
Actual operating expense was $9.6m.

{{diagram}}

Which is the strongest next step?`,
      diagram: `flowchart LR
  B["Budget<br/><b>$8.0m</b>"] --> V["Variance<br/><b>+$1.6m / +20%</b>"]
  A["Actual<br/><b>$9.6m</b>"] --> V
  V --> D["Driver analysis"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class V,D warning;`,
      options: [
        'Report the $1.6m unfavorable variance and stop there.',
        'Break the variance into major drivers such as volume, rate, timing, one-time items, and controllable versus uncontrollable factors.',
        'Reduce next month’s budget by $1.6m to offset the overspend.',
        'Remove the variance from the report if revenue exceeded budget.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Management needs to understand what caused the variance and whether action is required. Why not A: magnitude alone is not enough. Why not C: changing future budgets without understanding the cause can hide rather than solve the issue. Why not D: revenue performance does not automatically neutralize cost control concerns.'
    },

    {
      id: 'mis-04',
      type: 'mcq',
      title: 'Source Data Failure',
      difficulty: 'easy',
      points: 5,
      prompt: `A polished sales dashboard shows 14% growth.

Finance later discovers that one region failed to upload three days of sales data for the prior period, making the growth rate artificially high.

What failed?`,
      options: [
        'Dashboard color selection.',
        'Source-data completeness and validation before publication.',
        'Management’s ability to read percentages.',
        'The choice to show growth instead of absolute sales.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A visually polished dashboard is still wrong if its underlying data is incomplete. Why not A: formatting did not cause the error. Why not C: the problem exists before management sees the report. Why not D: growth can be useful when calculated from complete data.'
    },

    {
      id: 'mis-05',
      type: 'mcq',
      title: 'Audience Design',
      difficulty: 'easy',
      points: 5,
      prompt: `The CFO wants a monthly group-level view.
A regional operations manager wants store-level daily exceptions.

What is the strongest reporting design?`,
      options: [
        'Send the same detailed report to both users for consistency.',
        'Use a common metric framework but tailor aggregation, frequency, detail, and action focus to each audience.',
        'Send only the CFO report because senior leadership has priority.',
        'Let each manager define completely different KPIs without central governance.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Good MIS preserves metric consistency while adapting presentation to decision needs. Why not A: identical detail levels create overload or insufficient information. Why not C: operational users need actionable reporting too. Why not D: uncontrolled definitions destroy comparability.'
    },

    {
      id: 'mis-06',
      type: 'mcq',
      title: 'Dashboard Overload',
      difficulty: 'medium',
      points: 5,
      prompt: `A management dashboard contains 54 KPIs, 18 charts, and 9 color-coded scorecards on one page.

Leadership says they cannot tell what requires attention.

What is the strongest redesign?`,
      options: [
        'Add more colors so each KPI is easier to distinguish.',
        'Create hierarchy: a small number of priority KPIs, clear exceptions, trend context, and drill-down detail for secondary metrics.',
        'Remove all charts and replace them with raw tables.',
        'Keep every metric visible but reduce the font size.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Effective dashboards prioritize attention and support drill-down rather than presenting every metric equally. Why not A: more color can increase noise. Why not C: tables alone do not solve hierarchy. Why not D: shrinking content preserves the overload.'
    },

    {
      id: 'mis-07',
      type: 'mcq',
      title: 'Management Narrative',
      difficulty: 'medium',
      points: 5,
      prompt: `Which commentary is strongest for leadership?`,
      options: [
        '"Revenue was $42.1m, EBITDA was $6.8m, and DSO was 71 days."',
        '"Revenue beat plan by 6%, but EBITDA margin fell 3 points due to discounting and freight. DSO rose 12 days, increasing working-capital pressure. Pricing and collection actions are recommended."',
        '"Revenue was good, but some areas need monitoring."',
        '"See attached spreadsheet for details."',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong narrative explains what changed, why, the business consequence, and what action should follow. Why not A: it gives numbers without interpretation. Why not C: it is vague. Why not D: it shifts the analytical burden to the reader.'
    },

    {
      id: 'mis-08',
      type: 'mcq',
      title: 'Reporting Timeliness',
      difficulty: 'medium',
      points: 5,
      prompt: `A flash sales report is delivered on day 2 with 98% completeness.
The fully reconciled version is available on day 12.

Management needs to respond quickly to demand changes.

What is the strongest design?`,
      options: [
        'Wait until day 12 for every report because only fully reconciled data should ever be used.',
        'Use a clearly labeled preliminary flash report for fast decisions, followed by a controlled final version once reconciliation is complete.',
        'Publish only the flash report and stop producing a final version.',
        'Publish both without indicating which is preliminary.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Different decision cycles can require different levels of speed and certainty, but status and limitations must be transparent. Why not A: excessive delay can destroy decision usefulness. Why not C: final reconciled reporting remains important. Why not D: unlabeled versions create confusion and control risk.'
    },

    {
      id: 'mis-09',
      type: 'mcq',
      title: 'Trend Context',
      difficulty: 'medium',
      points: 5,
      prompt: `The current month shows customer churn of 5.4%.

Which additional context would make the number most decision-useful?`,
      options: [
        'Prior periods, target, customer segment mix, and major business events affecting churn.',
        'The company logo and report author.',
        'Only the absolute number of customers.',
        'The balance sheet total.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A KPI becomes meaningful when management can compare it with history, expectation, and relevant drivers. Why not B: report metadata does not explain performance. Why not C: absolute customer count can help but is not enough. Why not D: balance-sheet size does not directly contextualize churn.'
    },

    {
      id: 'mis-10',
      type: 'mcq',
      title: 'Exception Reporting',
      difficulty: 'medium',
      points: 5,
      prompt: `A business tracks 120 stores.

Most operate within normal ranges, but 7 stores account for 68% of the total adverse profit variance.

What is the strongest MIS approach?`,
      options: [
        'Give each store equal space because equal reporting is fair.',
        'Prioritize the 7 material exceptions in the executive view while keeping drill-down access to all stores.',
        'Remove the other 113 stores from all reporting permanently.',
        'Average all stores together so leadership sees one clean number.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Exception-focused reporting directs attention to the items that matter most without losing underlying detail. Why not A: equal visibility can dilute management attention. Why not C: stable stores still require ongoing monitoring. Why not D: averaging can hide the actual problem locations.'
    },

    {
      id: 'mis-11',
      type: 'mcq',
      title: 'Operational Driver Linkage',
      difficulty: 'medium',
      points: 5,
      prompt: `Gross margin fell from 39% to 34%.

Operations data shows:
- units sold +11%
- average selling price -8%
- expedited freight +42%
- return rate +5 points

What is the strongest interpretation?`,
      options: [
        'The margin decline is unrelated to operations because margin is a finance metric.',
        'The financial result should be linked to lower pricing, higher logistics cost, and increased returns to identify operational actions.',
        'Higher unit volume proves the margin decline is acceptable.',
        'Only average selling price should be discussed because it is closest to revenue.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong MIS connects financial outcomes to operational drivers that management can act on. Why not A: operational behavior often explains financial results. Why not C: volume growth can still destroy value if unit economics deteriorate. Why not D: several drivers are contributing.'
    },

    {
      id: 'mis-12',
      type: 'mcq',
      title: 'Metric Definition Change',
      difficulty: 'medium',
      points: 5,
      prompt: `In July, management changes the definition of "Active Customer" to include users with activity in the last 180 days instead of 90 days.

The dashboard shows a sudden 24% increase in active customers.

What is the strongest reporting treatment?`,
      options: [
        'Present the increase as growth because the reported number is higher.',
        'Disclose the definition change, restate prior periods where practical, and separate methodology impact from true business growth.',
        'Remove all historical data because it is no longer comparable.',
        'Keep the change undocumented to avoid confusing readers.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Definition changes can create artificial trends and must be isolated from underlying performance. Why not A: this would misrepresent growth. Why not C: historical data may still be useful if restated or clearly bridged. Why not D: hiding methodology change reduces trust.'
    },

    {
      id: 'mis-13',
      type: 'mcq',
      title: 'Forecast vs Actual',
      difficulty: 'hard',
      points: 5,
      prompt: `A region reports:

{{diagram}}

Which is the strongest management message?`,
      diagram: `flowchart TB
  REV["Revenue<br/><b>Actual +9% vs plan</b>"] --> J["Management interpretation"]
  GM["Gross Margin<br/><b>-4 pts vs plan</b>"] --> J
  OPEX["Opex<br/><b>+12% vs plan</b>"] --> J
  EBITDA["EBITDA<br/><b>-7% vs plan</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class GM,OPEX,EBITDA,J warning;`,
      options: [
        'The region is performing strongly because revenue exceeded plan.',
        'Top-line growth is not translating into profit; pricing/mix and operating-cost drivers should be investigated because EBITDA is below plan despite higher revenue.',
        'The plan should be revised upward so EBITDA no longer appears unfavorable.',
        'Gross margin is irrelevant because EBITDA already includes all costs.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The report should highlight that growth is failing to convert into earnings and direct attention to drivers. Why not A: revenue alone is incomplete. Why not C: changing the benchmark does not improve actual economics. Why not D: gross margin is one of the drivers explaining the EBITDA result.'
    },

    {
      id: 'mis-14',
      type: 'mcq',
      title: 'Data Reconciliation',
      difficulty: 'hard',
      points: 5,
      prompt: `The MIS dashboard reports revenue of $84.3m.
The general ledger reports $82.9m.
The commercial system reports $85.1m.

All three reports are labeled "Revenue".

What is the strongest next step?`,
      options: [
        'Use the largest value because commercial systems are closer to customers.',
        'Define the authoritative source and reconciliation logic, investigate timing/classification differences, and document why the three systems differ.',
        'Average the three values and report $84.1m.',
        'Use the GL value and delete the other two reports.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Management reporting needs clear source hierarchy and reconciliation logic. Why not A: proximity to customers does not establish accounting authority. Why not C: averaging unrelated definitions has no analytical basis. Why not D: the other sources may still be operationally valuable even if the GL is authoritative for financial reporting.'
    },

    {
      id: 'mis-15',
      type: 'mcq',
      title: 'Leading vs Lagging Indicators',
      difficulty: 'hard',
      points: 5,
      prompt: `A subscription business reports monthly revenue and EBITDA, but management says problems are visible only after they hit the P&L.

Which KPI set would best improve early warning?`,
      options: [
        'Customer activation, churn, pipeline conversion, support backlog, collection behavior, and usage trends alongside financial results.',
        'Only annual revenue and annual profit.',
        'More detailed GL account balances without operational measures.',
        'Historical tax expense and depreciation by month.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Leading indicators help management see operational deterioration before it appears fully in financial results. Why not B: annual measures are slow and lagging. Why not C: additional accounting detail may not reveal future demand or customer behavior. Why not D: these are largely lagging financial measures.'
    },

    {
      id: 'mis-16',
      type: 'mcq',
      title: 'Threshold Design',
      difficulty: 'hard',
      points: 5,
      prompt: `A dashboard flags every variance above 2%, creating hundreds of red alerts each month.

Leadership ignores the alerts because most are immaterial.

What is the strongest improvement?`,
      options: [
        'Remove all alert thresholds and rely on management intuition.',
        'Use materiality-based thresholds that consider percentage, absolute value, persistence, and business risk rather than one fixed percentage.',
        'Increase the threshold to 50% for every KPI.',
        'Show every variance but remove the red color.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Effective exception thresholds should reflect business significance, not a universal percentage. Why not A: structured monitoring still matters. Why not C: one very high threshold would miss important issues. Why not D: changing color does not reduce noise.'
    },

    {
      id: 'mis-17',
      type: 'mcq',
      title: 'Root Cause vs Symptom',
      difficulty: 'hard',
      points: 5,
      prompt: `Customer profitability is down 18%.

The MIS commentary says: "Profitability declined because cost increased."

Why is this weak?`,
      options: [
        'It repeats the symptom without identifying the underlying cost drivers, customer behavior, mix, pricing, or operational cause.',
        'It uses the word profitability instead of EBITDA.',
        'All MIS commentary should avoid causal interpretation.',
        'Customer profitability should never be shown to management.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Saying cost increased does not explain why it increased or what management can do. Why not B: terminology is not the key weakness. Why not C: good MIS should distinguish evidence-based drivers from unsupported assumptions. Why not D: customer profitability can be highly decision-useful.'
    },

    {
      id: 'mis-18',
      type: 'mcq',
      title: 'Escalation Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A weekly MIS report identifies that one business unit has:

- revenue 3% below plan
- operating cash flow 42% below plan
- overdue receivables up 55%
- covenant headroom narrowing rapidly

What should be escalated?`,
      options: [
        'Only the revenue miss because revenue is the primary KPI.',
        'The combined liquidity and covenant risk, because the cash and receivable deterioration may be more urgent than the modest revenue variance.',
        'Nothing until month-end because weekly data is preliminary.',
        'Only the overdue receivables because covenant analysis belongs to treasury.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong MIS prioritizes business significance, and the emerging liquidity/covenant risk is more urgent than a small revenue miss. Why not A: headline revenue can distract from more material risk. Why not C: material fast-moving risk should not wait for month-end. Why not D: MIS should connect risks across functions.'
    },

    {
      id: 'mis-19',
      type: 'mcq',
      title: 'Executive Dashboard Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `The CEO dashboard shows:

{{diagram}}

Which interpretation is strongest?`,
      diagram: `flowchart TB
  R["Revenue<br/><b>+14%</b>"] --> J["Executive judgment"]
  GM["Gross Margin<br/><b>-6 pts</b>"] --> J
  CH["Churn<br/><b>4% → 8%</b>"] --> J
  DSO["DSO<br/><b>51 → 77 days</b>"] --> J
  FCF["Free Cash Flow<br/><b>-22%</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class GM,CH,DSO,FCF,J warning;`,
      options: [
        'Performance is strong because revenue growth is double-digit.',
        'Growth quality appears to be weakening: margin, retention, collections, and cash conversion are deteriorating despite strong revenue.',
        'Only churn requires attention because it is the only customer KPI.',
        'The business should immediately stop all sales activity.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Several independent indicators show that headline growth may be coming with worsening economics and cash quality. Why not A: it ignores the deterioration beneath revenue. Why not C: margin, DSO, and cash flow are also material. Why not D: the report supports investigation and corrective action, not an extreme unsupported response.'
    },

    {
      id: 'mis-20',
      type: 'mcq',
      title: 'Integrated MIS Ownership',
      difficulty: 'hard',
      points: 5,
      prompt: `A company’s monthly MIS process has these problems:

- reports arrive 12 days late
- different teams use different KPI definitions
- dashboard totals do not reconcile to finance
- commentary restates numbers without explaining drivers
- every variance is flagged, so leaders ignore alerts
- actions from prior reviews are not tracked

What is the strongest redesign?`,
      options: [
        'Improve the dashboard colors and automate PDF distribution.',
        'Create governed KPI definitions, source reconciliation, materiality-based exception rules, faster reporting cycles, driver-based commentary, and action tracking with clear ownership.',
        'Remove commentary so management can interpret the numbers independently.',
        'Ask each business unit to create its own report without central standards.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The weaknesses span governance, timeliness, data integrity, analysis, prioritization, and accountability, so the solution must address the full MIS operating model. Why not A: presentation and automation do not fix analytical or control weaknesses. Why not C: this reduces decision support further. Why not D: decentralized definitions would worsen inconsistency.'
    },
  ],
};
