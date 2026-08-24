import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import corporationTaxReviewImage from '../../../assets/assessments/tax_uk/corporation_tax_review.png';
import payeControlImage from '../../../assets/assessments/tax_uk/paye_control.png';
import vatReconciliationImage from '../../../assets/assessments/tax_uk/vat_reconciliation.png';

export const taxUKData = {
  id: ASSESSMENT_TYPES.tax_uk,
  title: 'UK Taxation Professional Certification',
  shortTitle: 'UK Tax',
  category: 'Accounting & Tax',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Professional UK taxation assessment covering VAT, reverse charge, PAYE/NIC controls, Corporation Tax, Company Tax Returns, digital records, reconciliations, HMRC notices, and tax-close governance.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Use the exhibits, charts, tables, and process diagrams. Select the strongest tax treatment or control response for the facts given. Questions emphasize professional judgment and reconciliation rather than isolated memorization. No negative marking.',
  questions: [
    {
      id: 'uk-01',
      type: 'mcq',
      title: 'VAT Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the VAT exhibit.

{{image}}

Which item requires specific reverse-charge review before the VAT return is submitted?`,
      image: {
        src: vatReconciliationImage,
        alt: 'UK VAT reconciliation'
      },
      options: [
        'Standard-rated sales already mapped.',
        'The £35,000 imported-services item.',
        'Credit notes already mapped.',
        'Input VAT solely because all input VAT is disallowed.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Imported services can require reverse-charge accounting, so the item should be assessed and mapped to the appropriate VAT return treatment. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-02',
      type: 'mcq',
      title: 'Corporation Tax Payment Timing',
      difficulty: 'medium',
      points: 5,
      prompt: `A UK company with taxable profits below the large-company instalment threshold has a normal 12-month accounting period.

Which control is strongest?`,
      options: [
        'Assume payment and filing are always due on the same day.',
        'Pay only after HMRC opens an enquiry.',
        'Use the VAT return deadline for Corporation Tax.',
        'Track the Corporation Tax payment deadline separately from the Company Tax Return filing deadline.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Corporation Tax payment is generally due before the Company Tax Return filing deadline; the two obligations should be separately controlled. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-03',
      type: 'mcq',
      title: 'VAT Books-to-Return Control',
      difficulty: 'medium',
      points: 5,
      prompt: `The sales ledger reports £620,000 of taxable sales, but the VAT workpaper contains £590,000.

What should happen before submission?`,
      options: [
        'Reconcile the £30,000 difference to invoices, credit notes, timing, and VAT classification.',
        'Submit because the VAT software total is final.',
        'Reduce the sales ledger without evidence.',
        'Move the difference to PAYE.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. VAT return values should be supported by the digital accounting records and documented reconciliation. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-04',
      type: 'mcq',
      title: 'PAYE Governance',
      difficulty: 'medium',
      points: 5,
      prompt: `Payroll shows PAYE and NIC liabilities but the payment evidence is incomplete.

What is the strongest response?`,
      options: [
        'Assume net pay proves tax was remitted.',
        'Use VAT input tax to clear PAYE.',
        'Reconcile payroll deductions/employer charges to HMRC reporting and payment evidence before closing the period.',
        'Wait until the next financial year.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Payroll-tax liabilities need to be reconciled to reporting and payment, not just payroll calculations. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-05',
      type: 'mcq',
      title: 'VAT Reverse Charge',
      difficulty: 'medium',
      points: 5,
      prompt: `A UK business purchases a service that falls under a reverse-charge rule.

What is the core accounting concept?`,
      options: [
        'The customer accounts for VAT as required by the reverse-charge rules and evaluates input-tax recovery separately.',
        'The supplier always charges normal UK VAT regardless of the rule.',
        'No VAT entries are made anywhere.',
        'The transaction is converted into PAYE.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Under reverse charge, the customer may account for output VAT and, where eligible, recover corresponding input VAT. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-06',
      type: 'mcq',
      title: 'VAT Exception Trend',
      difficulty: 'medium',
      points: 5,
      prompt: `Study the chart.

{{chart}}

What is the strongest conclusion?`,
      chart: {
        type: 'line',
        title: 'Open VAT Reconciliation Exceptions',
        xAxis: ['Jan','Feb','Mar','Apr','May'],
        series: [{ name: 'Exceptions', data: [4,7,6,14,19] }]
      },
      options: [
        'The VAT close is improving each month.',
        'The exception count is constant.',
        'Unresolved VAT exceptions are rising and require root-cause action.',
        'There are no exceptions in May.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The exception population increases materially by April and May. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-07',
      type: 'mcq',
      title: 'PAYE Control Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the PAYE exhibit.

{{image}}

Which item is the clearest mapping exception?`,
      image: {
        src: payeControlImage,
        alt: 'UK PAYE month-end control'
      },
      options: [
        'PAYE income tax already matched.',
        'Employee NIC already matched.',
        'Employer NIC already matched.',
        'The £8,200 benefits adjustment marked \'Not mapped\'.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The unmapped benefits adjustment needs investigation before year-end payroll/tax reporting is finalized. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-08',
      type: 'mcq',
      title: 'Company Tax Return Package',
      difficulty: 'hard',
      points: 5,
      prompt: `What is the strongest Company Tax Return control?`,
      options: [
        'File only the CT600 number with no accounts or computation support.',
        'Reconcile CT600 data to company accounts, tax computations, supporting schedules, and payment evidence.',
        'Use the VAT return as the corporation-tax computation.',
        'Treat HMRC acknowledgement as proof HMRC agreed every figure.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A Company Tax Return comprises more than a single number; the filing should tie to accounts and tax computations. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-09',
      type: 'mcq',
      title: 'Corporation Tax Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the corporation-tax close exhibit.

{{image}}

Which item most clearly requires tax-adjustment judgment rather than simple copying from the accounts?`,
      image: {
        src: corporationTaxReviewImage,
        alt: 'UK corporation tax close review'
      },
      options: [
        'Profit before tax as the starting point.',
        'Tax paid with matched evidence.',
        'Client entertainment marked as a potential add-back.',
        'The label \'accounts\' itself.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Book profit is the starting point, but items such as potentially non-deductible expenditure require tax adjustment analysis. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-10',
      type: 'mcq',
      title: 'Making Tax Digital Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A VAT-registered business exports figures to a spreadsheet, manually retypes totals into another file, then submits the return.

What is the strongest control concern?`,
      options: [
        'Manual re-keying can break the digital audit trail and should be replaced by controlled digital links/workflows where required.',
        'Spreadsheets can never be used for tax work.',
        'VAT returns must be handwritten.',
        'Only Corporation Tax is affected by digital-record rules.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. MTD emphasizes digital records and digital links; unnecessary manual re-keying creates control and compliance risk. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-11',
      type: 'mcq',
      title: 'Corporation Tax Forecast',
      difficulty: 'hard',
      points: 5,
      prompt: `Forecast taxable profit rises sharply late in the accounting period.

What should the tax team do?`,
      options: [
        'Keep the original tax forecast regardless of profit changes.',
        'Update the Corporation Tax forecast and reassess payment timing/cash requirements.',
        'Settle the difference through PAYE.',
        'Ignore it until HMRC sends a notice.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Material changes in forecast profit should flow into tax forecasting and payment planning. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-12',
      type: 'mcq',
      title: 'VAT Input Tax Review',
      difficulty: 'hard',
      points: 5,
      prompt: `The purchase ledger contains VAT on mixed business and potentially restricted expenditure.

What is the stronger approach?`,
      options: [
        'Recover every VAT amount automatically.',
        'Disallow all purchase VAT automatically.',
        'Use payroll classification to decide VAT recovery.',
        'Review input-tax eligibility by transaction and retain evidence supporting the recovery decision.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Input-tax recovery depends on the nature and use of the expenditure and applicable VAT rules. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-13',
      type: 'mcq',
      title: 'VAT Liability Bridge',
      difficulty: 'hard',
      points: 5,
      prompt: `Study the chart.

{{chart}}

Which statement is strongest?`,
      chart: {
        type: 'bar',
        title: 'VAT Liability Bridge (£000)',
        categories: ['Output VAT','Input VAT','Adjustments','Net Payable'],
        series: [{ name: 'Amount', data: [96,-58,-4,34] }]
      },
      options: [
        'All reverse-charge VAT is ignored.',
        'Input VAT increases output VAT by definition.',
        'A net refund means no VAT return is required.',
        'Input VAT and adjustments reduce net VAT payable, but reverse-charge amounts still need correct box treatment.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The bridge shows how output VAT is offset by recoverable input VAT and adjustments while reporting classifications still matter. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-14',
      type: 'mcq',
      title: 'Post-filing Error',
      difficulty: 'hard',
      points: 5,
      prompt: `After a Company Tax Return is submitted, a material error is discovered.

What is the strongest governance response?`,
      options: [
        'Delete the accounting record.',
        'Assess the permitted amendment/correction route promptly, quantify tax/interest impact, and document the decision.',
        'Assume a filed return can never be amended.',
        'Correct the error through the next VAT return regardless of tax type.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Errors should be addressed through the appropriate corporation-tax amendment process and documented promptly. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-15',
      type: 'mcq',
      title: 'VAT Close Workflow',
      difficulty: 'hard',
      points: 5,
      prompt: `What belongs in the missing step?

{{diagram}}`,
      diagram: `flowchart LR
  A["Close sales & purchase ledgers"] --> B["Prepare VAT data"]
  B --> C["???"]
  C --> D["Submit VAT return / pay"]
  D --> E["Archive evidence"]`,
      options: [
        'Run payroll appraisals.',
        'Apply a corporation-tax rate to VAT sales.',
        'Reconcile digital records to VAT return boxes, review exceptions, and obtain sign-off.',
        'Create a new VAT registration each quarter.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The missing control is reconciliation and review before submission. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-16',
      type: 'mcq',
      title: 'Corporation Tax Process',
      difficulty: 'hard',
      points: 5,
      prompt: `Which process is strongest?`,
      diagram: `flowchart LR
  A["Final accounts"] --> B["Tax adjustments"]
  B --> C["Taxable profit / computation"]
  C --> D["CT600 review"]
  D --> E["File / pay / archive"]`,
      options: [
        'Close accounts → prepare book-to-tax adjustments → compute taxable profit → review CT600/support → file and retain evidence.',
        'File CT600 before closing the accounts.',
        'Use VAT boxes as the tax computation.',
        'Pay Corporation Tax without reconciling the tax provision.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The flow reflects a controlled accounts-to-tax-return process. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-17',
      type: 'mcq',
      title: 'HMRC Notice',
      difficulty: 'hard',
      points: 5,
      prompt: `HMRC sends a notice showing a payment-reference mismatch.

What is the best response?`,
      options: [
        'Use last year\'s payment reference automatically.',
        'Reconcile the notice to the relevant accounting period, payment reference, bank evidence, and tax account before responding.',
        'Pay again with no investigation.',
        'Ignore the notice.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Corporation Tax payment references can vary by accounting period; reconciliation is essential. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-18',
      type: 'mcq',
      title: 'Tax Calendar Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `Which control is strongest for a growing UK business?`,
      options: [
        'One calendar entry saying \'taxes due\'.',
        'Only store payment receipts.',
        'Rely on individual memory.',
        'A tax calendar covering VAT, PAYE, Corporation Tax, annual payroll obligations, owners, evidence, and reviewer sign-off.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Multiple UK tax obligations require explicit ownership, deadlines, evidence, and review. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-19',
      type: 'mcq',
      title: 'Recurring VAT Mismatch',
      difficulty: 'hard',
      points: 5,
      prompt: `Three VAT periods show the same sales-ledger vs return difference caused by manual credit-note mapping.

What is the strongest response?`,
      options: [
        'Correct the current return work and redesign the credit-note mapping/reconciliation control.',
        'Treat every period as unrelated.',
        'Ignore the difference because credit notes reduce sales.',
        'Stop issuing credit notes.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Repeated exceptions signal a process-control failure that should be remediated. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'uk-20',
      type: 'mcq',
      title: 'Integrated UK Tax Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `Which dashboard gives the best tax oversight?`,
      diagram: `flowchart TB
  B["Books / Payroll"] --> R["Tax reconciliations"]
  H["HMRC filings"] --> R
  P["Payments / references"] --> R
  R --> X["Exception register"]
  X --> V["Reviewer closure"]`,
      options: [
        'A list of VAT rates only.',
        'A folder of submitted returns only.',
        'A dashboard linking VAT, PAYE, Corporation Tax, books, payments, filing status, exceptions, and reviewer closure.',
        'A dashboard showing only accounting profit.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The strongest dashboard connects source records, HMRC filings, payments, exceptions, and review. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    }
  ],
};
