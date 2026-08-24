import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import uaeCtBridgeImage from '../../../assets/assessments/tax_uae/uae_ct_bridge.png';
import uaeInvoiceReviewImage from '../../../assets/assessments/tax_uae/uae_invoice_review.png';
import uaeVatReconciliationImage from '../../../assets/assessments/tax_uae/uae_vat_reconciliation.png';

export const taxUAEData = {
  id: ASSESSMENT_TYPES.tax_uae,
  title: 'UAE Taxation Professional Certification',
  shortTitle: 'UAE Tax',
  category: 'Accounting & Tax',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Professional UAE taxation assessment covering VAT, standard and zero-rated supplies, reverse charge, input tax, Corporate Tax, taxable-income adjustments, invoice controls, FTA notices, and tax-close governance.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Use the exhibits, charts, tables, and process diagrams. Select the strongest tax treatment or control response for the facts given. Questions emphasize professional judgment and reconciliation rather than isolated memorization. No negative marking.',
  questions: [
    {
      id: 'ae-01',
      type: 'mcq',
      title: 'VAT Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the UAE VAT exhibit.

{{image}}

Which line is the clearest reverse-charge exception?`,
      image: {
        src: uaeVatReconciliationImage,
        alt: 'UAE VAT reconciliation'
      },
      options: [
        'Standard-rated local sales already mapped.',
        'The AED 90,000 imported-services item.',
        'Local purchases already mapped.',
        'Zero-rated sales solely because zero-rating never requires evidence.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Imported services can require reverse-charge accounting by a UAE VAT-registered recipient, subject to the rules. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-02',
      type: 'mcq',
      title: 'UAE VAT Rate',
      difficulty: 'medium',
      points: 5,
      prompt: `A normal taxable local supply does not qualify for zero-rating or exemption.

Which VAT rate is generally relevant in the UAE?`,
      options: [
        '0% for every business supply.',
        '9% because that is the Corporate Tax rate above the threshold.',
        'There is no VAT in the UAE.',
        '5%.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The UAE standard VAT rate is 5% for standard-rated taxable supplies. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-03',
      type: 'mcq',
      title: 'Reverse Charge',
      difficulty: 'medium',
      points: 5,
      prompt: `A UAE VAT-registered company imports consultancy services from an overseas supplier, and the supply would be taxable in the UAE.

What is the strongest conceptual treatment?`,
      options: [
        'Assess reverse-charge VAT and input-tax recovery separately in accordance with the rules.',
        'The overseas supplier must always charge UAE VAT directly.',
        'Ignore the service because it is foreign.',
        'Treat it as Corporate Tax withholding.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. UAE reverse-charge rules can require the registered recipient to self-account for VAT on imported services. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-04',
      type: 'mcq',
      title: 'Zero-rated Evidence',
      difficulty: 'medium',
      points: 5,
      prompt: `A transaction is coded as a zero-rated export.

What is the strongest close control?`,
      options: [
        'Assume every foreign customer is automatically zero-rated.',
        'Delete output-tax records.',
        'Verify that the supply meets the zero-rating conditions and retain supporting export evidence before filing.',
        'Use the Corporate Tax return as evidence.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Zero-rating is conditional and should be supported by evidence, not merely customer location. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-05',
      type: 'mcq',
      title: 'VAT Input Tax',
      difficulty: 'medium',
      points: 5,
      prompt: `A purchase invoice includes UAE VAT.

What should determine whether input tax is recovered?`,
      options: [
        'Eligibility under the VAT rules and the business use/documentation of the purchase.',
        'Every VAT amount is automatically recoverable.',
        'No VAT is ever recoverable.',
        'Corporate Tax profitability determines VAT recovery.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Input-tax recovery is a separate eligibility analysis based on VAT rules and supporting documentation. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-06',
      type: 'mcq',
      title: 'VAT Exception Trend',
      difficulty: 'medium',
      points: 5,
      prompt: `Study the chart.

{{chart}}

What is the strongest conclusion?`,
      chart: {
        type: 'line',
        title: 'Open UAE VAT Exceptions',
        xAxis: ['Jan','Feb','Mar','Apr','May'],
        series: [{ name: 'Exceptions', data: [5,7,6,17,25] }]
      },
      options: [
        'The VAT close is improving continuously.',
        'The exception count is constant.',
        'Unresolved VAT exceptions are rising and require corrective action.',
        'May has fewer issues than January.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The exception count increases sharply in the last two periods. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-07',
      type: 'mcq',
      title: 'Corporate Tax Bridge',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the UAE Corporate Tax bridge.

{{image}}

Which statement is strongest?`,
      image: {
        src: uaeCtBridgeImage,
        alt: 'UAE Corporate Tax bridge'
      },
      options: [
        'Accounting profit is always identical to taxable income.',
        'Every accounting expense is automatically deductible.',
        'Corporate Tax is calculated from VAT payable.',
        'Accounting profit is the starting point; tax adjustments and reliefs must be analyzed before taxable income is finalized.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. UAE taxable income generally begins from accounting income and is adjusted under the Corporate Tax rules. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-08',
      type: 'mcq',
      title: 'Corporate Tax Rate Structure',
      difficulty: 'hard',
      points: 5,
      prompt: `For an ordinary UAE taxable person that is not applying a special qualifying free-zone rate, what is the current general rate structure reflected in FTA guidance?`,
      options: [
        '5% on all taxable income.',
        '0% on taxable income up to AED 375,000 and 9% on the portion above AED 375,000.',
        '9% on the first AED 375,000 and 0% above it.',
        'A flat 15% for every UAE business.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. FTA Corporate Tax guidance states 0% up to AED 375,000 of taxable income and 9% on the portion exceeding that amount. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-09',
      type: 'mcq',
      title: 'Invoice Classification',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the invoice exhibit.

{{image}}

Which transaction is the clearest reverse-charge review item?`,
      image: {
        src: uaeInvoiceReviewImage,
        alt: 'UAE tax invoice review'
      },
      options: [
        'INV-101, a mapped local standard-rated supply.',
        'INV-102 solely because all exports are exempt, not zero-rated.',
        'INV-103, the imported service.',
        'INV-104 solely because exempt supplies always carry 5% VAT.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Imported services are a common reverse-charge population for UAE VAT-registered businesses. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-10',
      type: 'mcq',
      title: 'VAT Books-to-Return Reconciliation',
      difficulty: 'hard',
      points: 5,
      prompt: `The sales ledger shows AED 4.6 million of standard-rated sales while the draft VAT return shows AED 4.3 million.

What is the strongest response?`,
      options: [
        'Reconcile the AED 300,000 difference to invoices, credit notes, timing, and tax codes before filing.',
        'Reduce the ledger without support.',
        'File because the draft return is presumed correct.',
        'Move the difference to Corporate Tax.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Books-to-return reconciliation is necessary to identify omitted, mistimed, or misclassified supplies. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-11',
      type: 'mcq',
      title: 'Corporate Tax Forecast',
      difficulty: 'hard',
      points: 5,
      prompt: `A business's projected taxable income rises materially during the year.

What is the strongest tax-close response?`,
      options: [
        'Keep the original forecast regardless of new information.',
        'Update the Corporate Tax forecast, assess tax adjustments/reliefs, and plan the expected cash liability.',
        'Use VAT input tax to eliminate Corporate Tax.',
        'Wait for an FTA audit before recalculating.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Forecast tax should reflect current expected taxable income and supported adjustments. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-12',
      type: 'mcq',
      title: 'Tax Loss Relief',
      difficulty: 'hard',
      points: 5,
      prompt: `A company has carried-forward tax losses and current taxable income.

What is the strongest professional approach?`,
      options: [
        'Offset every historical accounting loss automatically.',
        'Use VAT losses against Corporate Tax.',
        'Ignore ownership/continuity or statutory conditions.',
        'Evaluate loss-relief availability and limitations under the Corporate Tax rules before applying the loss in the computation.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Tax-loss relief is rule-based and should be supported rather than assumed from accounting losses. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-13',
      type: 'mcq',
      title: 'VAT Liability Bridge',
      difficulty: 'hard',
      points: 5,
      prompt: `Study the chart.

{{chart}}

Which interpretation is strongest?`,
      chart: {
        type: 'bar',
        title: 'UAE VAT Liability Bridge (AED 000)',
        categories: ['Output VAT','Recoverable Input','RCM','Net Cash'],
        series: [{ name: 'Amount', data: [118,-73,9,54] }]
      },
      options: [
        'A small net VAT amount means transaction classification does not matter.',
        'All input VAT is always recoverable.',
        'Reverse charge is a Corporate Tax item.',
        'Recoverable input VAT reduces the net cash position, while reverse-charge and output classifications still need correct reporting.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The bridge shows that classification and eligibility determine both reporting and net cash. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-14',
      type: 'mcq',
      title: 'Tax Invoice Adjustment',
      difficulty: 'hard',
      points: 5,
      prompt: `A customer returns goods after a standard-rated UAE tax invoice was issued.

What is the strongest control response?`,
      options: [
        'Delete the original invoice.',
        'Process the appropriate tax credit-note adjustment, link it to the original supply, and update the VAT reporting trail.',
        'Ignore the return because VAT was already reported.',
        'Record the return only in Corporate Tax.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. An adjustment should preserve the invoice audit trail and flow through VAT reporting. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-15',
      type: 'mcq',
      title: 'UAE VAT Close Workflow',
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
        'Apply 9% Corporate Tax to every invoice.',
        'Run payroll only.',
        'Reconcile books to VAT return categories, review RCM/zero-rated/exempt evidence, clear exceptions, and obtain sign-off.',
        'Create a new TRN each quarter.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The control step is reconciliation, classification review, exception clearing, and sign-off. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-16',
      type: 'mcq',
      title: 'Corporate Tax Process',
      difficulty: 'hard',
      points: 5,
      prompt: `Which controlled process is strongest?`,
      diagram: `flowchart LR
  A["Financial statements"] --> B["Corporate Tax adjustments"]
  B --> C["Taxable income"]
  C --> D["Return / liability review"]
  D --> E["File / pay / archive"]`,
      options: [
        'Finalize financial statements → prepare tax adjustments → determine taxable income → review return/payment → retain support.',
        'Calculate tax directly from revenue.',
        'Use VAT return figures as taxable income.',
        'File before financial records are finalized.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A controlled Corporate Tax process starts with financial statements and applies statutory adjustments. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-17',
      type: 'mcq',
      title: 'FTA Notice Response',
      difficulty: 'hard',
      points: 5,
      prompt: `The FTA sends a notice indicating a VAT payment mismatch.

What is the strongest response?`,
      options: [
        'Pay again immediately without investigation.',
        'Reconcile the notice to the filed return, payment confirmation, tax period, and accounting records before responding.',
        'Ignore the notice.',
        'Change the Corporate Tax computation.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Tax notices should be resolved using period-specific filing and payment evidence. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-18',
      type: 'mcq',
      title: 'UAE Tax Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `Which governance model is strongest for a growing UAE business?`,
      options: [
        'One reminder called \'tax\'.',
        'Only save filed returns.',
        'Rely on the accountant\'s memory.',
        'A tax calendar and close checklist covering VAT, Corporate Tax, registrations, filings, payments, evidence, exceptions, owners, and review.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. VAT and Corporate Tax obligations need structured ownership, deadlines, reconciliations, and evidence. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-19',
      type: 'mcq',
      title: 'Recurring RCM Failure',
      difficulty: 'hard',
      points: 5,
      prompt: `Three VAT periods show imported services missing from reverse-charge coding.

What is the strongest response?`,
      options: [
        'Correct the current reporting and redesign the vendor/tax-code process causing recurring RCM omissions.',
        'Treat each period as unrelated.',
        'Stop purchasing foreign services.',
        'Ignore the issue because no UAE supplier charged VAT.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Repeated reverse-charge omissions indicate a process/control weakness that should be remediated. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'ae-20',
      type: 'mcq',
      title: 'Integrated UAE Tax Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `Which dashboard gives the strongest tax oversight?`,
      diagram: `flowchart TB
  B["Books / invoices"] --> R["VAT & CT reconciliations"]
  F["FTA filings"] --> R
  P["Payments / proofs"] --> R
  R --> X["Exception register"]
  X --> V["Reviewer closure"]`,
      options: [
        'A list of VAT rates only.',
        'A folder containing filed PDFs only.',
        'A dashboard linking VAT, Corporate Tax, books, RCM items, zero-rated evidence, payments, exceptions, and reviewer closure.',
        'A dashboard showing only accounting profit.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The best design integrates source records, tax filings, payments, exceptions, and independent review. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    }
  ],
};
