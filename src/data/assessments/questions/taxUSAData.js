import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import estimatedTaxForecastImage from '../../../assets/assessments/tax_usa/estimated_tax_forecast.png';
import informationReturnReviewImage from '../../../assets/assessments/tax_usa/information_return_review.png';
import withholdingReconciliationImage from '../../../assets/assessments/tax_usa/withholding_reconciliation.png';

export const taxUSAData = {
  id: ASSESSMENT_TYPES.tax_usa,
  title: 'USA Taxation Professional Certification',
  shortTitle: 'USA Tax',
  category: 'Accounting & Tax',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Professional US taxation assessment covering federal income tax, withholding, estimated tax, payroll tax, W-2/1099 controls, books-to-tax reconciliation, tax notices, state/local coordination, and tax-close governance.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Use the exhibits, charts, tables, and process diagrams. Select the strongest tax treatment or control response for the facts given. Questions emphasize professional judgment and reconciliation rather than isolated memorization. No negative marking.',
  questions: [
    {
      id: 'us-01',
      type: 'mcq',
      title: 'Payroll Tax Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the payroll tax exhibit.

{{image}}

Which item is the clearest year-end information-reporting exception?`,
      image: {
        src: withholdingReconciliationImage,
        alt: 'US payroll tax reconciliation'
      },
      options: [
        'Federal withholding, which is matched.',
        'The $48,000 contractor payment that has no 1099 mapping.',
        'Social Security tax, which is matched.',
        'Medicare tax, which is matched.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The contractor payment requires classification and information-return review; the payroll tax lines shown are already reconciled. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-02',
      type: 'mcq',
      title: 'Estimated Tax Forecast',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the mid-year forecast.

{{image}}

Consulting income increased from $20,000 to $75,000 while withholding is unchanged. What is the strongest response?`,
      image: {
        src: estimatedTaxForecastImage,
        alt: 'US estimated tax forecast'
      },
      options: [
        'Wait until the return is filed and ignore the forecast.',
        'Treat the consulting income as payroll withholding automatically.',
        'Move the extra income to sales tax.',
        'Recompute expected federal tax and determine whether estimated payments or withholding need adjustment.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Federal income tax is pay-as-you-go; materially higher non-wage income can require revised estimated payments or withholding. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-03',
      type: 'mcq',
      title: 'W-2 vs Contractor Reporting',
      difficulty: 'medium',
      points: 5,
      prompt: `A worker is treated as an employee in payroll, with wages and withholding throughout the year.

Which year-end reporting path is generally consistent with that treatment?`,
      options: [
        'Include the employee in Form W-2 reporting and reconcile wages and withholding to payroll records.',
        'Issue only a 1099 because every worker receives one.',
        'Report the wages through a sales-tax return.',
        'Exclude the worker from information reporting.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Employees are generally reported on Form W-2; the control should reconcile payroll and withholding to year-end reporting. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-04',
      type: 'mcq',
      title: 'Federal vs State Tax',
      difficulty: 'medium',
      points: 5,
      prompt: `A finance team asks the IRS team to determine the company's sales-tax rate for every state.

What is the best response?`,
      options: [
        'Use one federal IRS sales-tax rate nationwide.',
        'Treat sales tax as federal payroll withholding.',
        'Separate federal income/payroll tax from state and local sales-tax analysis, because sales tax is generally administered at the state/local level.',
        'Ignore state nexus and local rules.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. US tax compliance is multi-jurisdictional; federal and state/local tax regimes must be managed separately. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-05',
      type: 'mcq',
      title: 'Withholding Control',
      difficulty: 'medium',
      points: 5,
      prompt: `Payroll records show federal income tax withheld, but the tax-deposit support is lower than the amount recorded.

What should the controller do?`,
      options: [
        'Reconcile payroll liability, deposits, and filing records and investigate the shortfall before certification.',
        'Reduce employee wages to force the totals to agree.',
        'Ignore it until next year.',
        'Classify the difference as sales tax.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Withheld taxes create a remittance obligation; differences between recorded withholding and deposits require immediate reconciliation. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-06',
      type: 'mcq',
      title: 'Tax Liability Trend',
      difficulty: 'medium',
      points: 5,
      prompt: `Study the chart.

{{chart}}

What is the strongest control conclusion?`,
      chart: {
        type: 'line',
        title: 'Open Federal Tax Exceptions',
        xAxis: ['Jan','Feb','Mar','Apr','May'],
        series: [{ name: 'Exceptions', data: [6,8,7,15,22] }]
      },
      options: [
        'The exception population is steadily improving.',
        'The count is identical every month.',
        'Unresolved federal tax exceptions are increasing and need root-cause review.',
        'No review is needed because May is below January.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The open-exception count rises materially, especially in April and May. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-07',
      type: 'mcq',
      title: 'Information Return Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the year-end information return exhibit.

{{image}}

Which item requires the most direct reporting investigation?`,
      image: {
        src: informationReturnReviewImage,
        alt: 'US year-end information return review'
      },
      options: [
        'Employee A, because W-2 mapping exists.',
        'Consultant B, because the 1099 is already mapped.',
        'Vendor D solely because inventory purchases are always reported as services.',
        'Consultant C, because $48,000 is in the books but no reporting mapping exists.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The unmapped consultant payment is the obvious exception in the reporting population. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-08',
      type: 'mcq',
      title: '1099 Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A vendor master contains several independent contractors, but tax identification details are incomplete.

What is the strongest preventive control?`,
      options: [
        'Wait until filing day to request every missing detail.',
        'Collect and validate required tax information during vendor onboarding and monitor missing data before year-end reporting.',
        'Issue W-2s to every vendor.',
        'Remove all contractor expenses from the ledger.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Early vendor-data controls reduce year-end information-return failures and follow-up risk. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-09',
      type: 'mcq',
      title: 'Estimated Tax Mechanics',
      difficulty: 'hard',
      points: 5,
      prompt: `An individual has substantial self-employment income not subject to withholding.

Which concept is most relevant to meeting federal tax obligations during the year?`,
      options: [
        'Sales-tax withholding by the IRS.',
        'A W-2 issued by the taxpayer to themselves.',
        'Estimated tax payments based on expected liability, subject to applicable rules.',
        'Waiting for an IRS bill after filing.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Estimated tax is designed for income that is not adequately covered by withholding. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-10',
      type: 'mcq',
      title: 'Books-to-Return Reconciliation',
      difficulty: 'hard',
      points: 5,
      prompt: `Taxable revenue in the general ledger is $4.8 million, but the draft federal tax workpaper uses $4.5 million.

What is the strongest response?`,
      options: [
        'Trace the $300,000 difference to book-to-tax adjustments or omissions and document the reconciliation before filing.',
        'Change the ledger to $4.5 million without evidence.',
        'File first because tax software is presumed correct.',
        'Move the difference to payroll tax.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Book-to-tax differences can be legitimate, but they must be supported and reconciled rather than assumed. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-11',
      type: 'mcq',
      title: 'Quarterly Forecasting',
      difficulty: 'hard',
      points: 5,
      prompt: `A profitable business has a major one-time gain late in the year.

What should the tax team do?`,
      options: [
        'Ignore the gain until an audit occurs.',
        'Update the annual tax forecast and assess whether estimated tax payments remain sufficient.',
        'Record the gain only in the next tax year automatically.',
        'Offset it with payroll deposits without analysis.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Material income changes should trigger a revised tax forecast and payment review. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-12',
      type: 'mcq',
      title: 'Tax Provision Review',
      difficulty: 'hard',
      points: 5,
      prompt: `The accounting team records income-tax expense based solely on last year's effective tax rate.

What is the stronger approach?`,
      options: [
        'Use last year\'s rate forever.',
        'Exclude all temporary/permanent differences.',
        'Use sales-tax collections as the provision.',
        'Recompute the current-period tax provision using current book results, tax adjustments, and applicable federal/state considerations.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. A professional tax provision should reflect current facts and supported book-to-tax adjustments. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-13',
      type: 'mcq',
      title: 'Tax Payment Bridge',
      difficulty: 'hard',
      points: 5,
      prompt: `Study the chart.

{{chart}}

Which conclusion is strongest?`,
      chart: {
        type: 'bar',
        title: 'Projected Federal Tax Funding ($000)',
        categories: ['Projected Liability','Withholding','Estimated Payments','Unfunded'],
        series: [{ name: 'Amount', data: [92,46,28,18] }]
      },
      options: [
        'The taxpayer is automatically overpaid.',
        'No payment review is necessary.',
        'Projected liability is irrelevant to pay-as-you-go compliance.',
        'Additional payment planning may be required because projected liability has risen faster than current withholding and estimated payments.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The chart shows an $18,000 projected funding gap after current withholding and estimated payments. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-14',
      type: 'mcq',
      title: 'Amended Return Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `After filing, the team discovers a material omission in taxable income.

What is the strongest governance response?`,
      options: [
        'Delete the accounting entry.',
        'Quantify the error, assess the proper amended-return or correction process, document the decision, and address any payment impact promptly.',
        'Wait indefinitely because filed returns can never be corrected.',
        'Change the next payroll return instead.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Material filing errors should be evaluated and corrected through the appropriate tax process with documented support. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-15',
      type: 'mcq',
      title: 'Federal Tax Close Process',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the workflow.

{{diagram}}

What belongs in the missing control step?`,
      diagram: `flowchart LR
  A["Close payroll & GL"] --> B["Prepare federal tax workpapers"]
  B --> C["???"]
  C --> D["File returns / make payments"]
  D --> E["Archive evidence"]`,
      options: [
        'A marketing approval.',
        'A state sales-tax rate applied to federal income.',
        'A books-to-tax reconciliation, payment/deposit tie-out, exception review, and reviewer sign-off.',
        'A new EIN application every quarter.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. A formal reconciliation and review step is needed between preparation and filing. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-16',
      type: 'mcq',
      title: 'Payroll Compliance Flow',
      difficulty: 'hard',
      points: 5,
      prompt: `Which process best describes a controlled payroll-tax cycle?`,
      diagram: `flowchart LR
  P["Payroll calculation"] --> W["Tax withholding"]
  W --> R["Liability reconciliation"]
  R --> D["Deposits / returns"]
  D --> A["Year-end W-2 / support archive"]`,
      options: [
        'Calculate payroll → withhold taxes → reconcile liabilities → make deposits/file returns → retain support.',
        'Pay net wages → ignore withholdings → fix annually.',
        'File sales tax → create W-2 → calculate payroll.',
        'Deposit taxes without reconciling payroll records.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The controlled flow links payroll calculation, withholding, remittance, reporting, and year-end evidence. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-17',
      type: 'mcq',
      title: 'Tax Notice Response',
      difficulty: 'hard',
      points: 5,
      prompt: `The IRS sends a notice showing a payment mismatch.

What is the strongest response?`,
      options: [
        'Pay the notice immediately without checking.',
        'Reconcile the notice to return, deposit confirmations, payment references, and account records before responding.',
        'Ignore all IRS notices.',
        'Modify employee W-2s regardless of the issue.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Notices should be resolved using a documented account-level reconciliation, not assumptions. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-18',
      type: 'mcq',
      title: 'Multi-jurisdiction Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `A company operates in 15 states.

Which tax-governance design is strongest?`,
      options: [
        'One federal calendar only.',
        'A verbal list maintained by one employee.',
        'No state analysis until an audit.',
        'A jurisdiction matrix covering federal, state/local income, payroll, sales/use, registrations, owners, deadlines, and reconciliations.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Multi-state operations require explicit jurisdiction, filing, nexus, and ownership controls. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-19',
      type: 'mcq',
      title: 'Root-Cause Control',
      difficulty: 'hard',
      points: 5,
      prompt: `Three quarters show the same payroll-deposit mismatch caused by manual journal entries.

What is the strongest action?`,
      options: [
        'Correct the current mismatch and redesign the journal-entry/reconciliation control that repeatedly causes it.',
        'Treat every quarter as unrelated.',
        'Post another unexplained journal entry.',
        'Stop reconciling payroll taxes.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Recurring exceptions indicate a process failure that requires root-cause remediation, not repeated cleanup. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'us-20',
      type: 'mcq',
      title: 'Integrated US Tax Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `Which dashboard design gives the controller the best oversight?`,
      diagram: `flowchart TB
  G["GL / Payroll"] --> R["Tax reconciliations"]
  F["Federal & state filings"] --> R
  P["Deposits / payments"] --> R
  R --> X["Exception register"]
  X --> V["Reviewer closure"]`,
      options: [
        'A list of federal due dates only.',
        'A folder of filed PDFs with no reconciliations.',
        'A dashboard linking GL/payroll balances, federal filings, deposits, information returns, state obligations, exceptions, and reviewer closure.',
        'A dashboard showing only total tax expense.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The design links source data, filings, payments, exceptions, and independent review. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    }
  ],
};
