import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import gstItcReconciliationImage from '../../../assets/assessments/tax_india/gst_itc_reconciliation.png';
import itrInformationReviewImage from '../../../assets/assessments/tax_india/itr_information_review.png';
import tdsControlRegisterImage from '../../../assets/assessments/tax_india/tds_control_register.png';

// Interactive professional-certification assessment for Indian taxation.
// Focuses on practical compliance judgment, reconciliation, controls, and exception handling.
export const taxIndiaData = {
  id: ASSESSMENT_TYPES.tax_india,
  title: 'India Taxation Professional Certification',
  shortTitle: 'India Tax',
  category: 'Accounting & Tax',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Professional India taxation assessment covering GST, ITC reconciliation, GSTR-1/GSTR-3B controls, GSTR-2B review, e-way bills, reverse charge, TDS, tax-credit matching, advance tax, capital gains, exports, e-invoicing, and tax-close governance.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Use the charts, tables, diagrams, and exhibits provided. Select the strongest compliance response for the facts given. Questions test professional judgment rather than isolated rule memorization. No negative marking.',
  questions: [
    {
      id: 'ti-01',
      type: 'mcq',
      title: 'GST ITC Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the April ITC reconciliation.

{{image}}

Metro Components appears in the purchase register with ₹36,000 of GST but is missing from GSTR-2B. What is the strongest month-end response?`,
      image: {
        src: gstItcReconciliationImage,
        alt: 'GST purchase register versus GSTR-2B reconciliation'
      },
      options: [
        'Claim the ₹36,000 because the purchase register is sufficient evidence.',
        'Investigate the supplier reporting status and ITC eligibility, follow up with the supplier, and claim only when permitted.',
        'Delete the vendor invoice from the books.',
        'Move the amount to income-tax expense automatically.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GSTR-2B is an auto-drafted ITC statement, but eligibility still requires self-assessment; a missing document should become a reconciliation exception, not an automatic claim. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-02',
      type: 'mcq',
      title: 'Intra-state vs Inter-state GST',
      difficulty: 'medium',
      points: 5,
      prompt: `A company registered in Maharashtra invoices goods to a customer in Karnataka, and the place of supply is Karnataka.

Which tax treatment is generally appropriate?`,
      options: [
        'Charge only CGST.',
        'Charge CGST and Maharashtra SGST.',
        'Do not charge GST because the customer is in another state.',
        'Charge IGST.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Supplier location and place of supply are in different states, so the supply is inter-state and generally attracts IGST. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-03',
      type: 'mcq',
      title: 'GSTR-1 to GSTR-3B Control',
      difficulty: 'medium',
      points: 5,
      prompt: `The outward taxable value in the sales ledger is ₹1.28 crore, GSTR-1 shows ₹1.21 crore, and draft GSTR-3B shows ₹1.21 crore.

What should the tax team do before filing?`,
      options: [
        'Reconcile the ₹7 lakh difference to invoices, credit notes, amendments, and timing before filing.',
        'File both returns because GSTR-1 and GSTR-3B agree.',
        'Force the ledger to ₹1.21 crore without evidence.',
        'Ignore the difference until the annual return.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Agreement between two returns does not prove the books are correct; the books-to-return reconciliation is the control that identifies omitted or mistimed transactions. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-04',
      type: 'mcq',
      title: 'E-Way Bill Judgment',
      difficulty: 'medium',
      points: 5,
      prompt: `Goods worth ₹86,000 are being moved interstate by road. The transaction is not covered by a specific exemption.

What is the strongest compliance action before movement?`,
      options: [
        'Move the goods first and create the document only if stopped.',
        'Use a TDS challan instead.',
        'Generate the required e-way bill and ensure transport details are correctly captured.',
        'No document is needed because GST was charged on the invoice.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Inter-state movement of goods above the general ₹50,000 consignment threshold normally requires an e-way bill, subject to the rules and exemptions. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-05',
      type: 'mcq',
      title: 'Reverse Charge Workflow',
      difficulty: 'medium',
      points: 5,
      prompt: `A taxable inward supply falls under a notified reverse-charge category.

Which process is most appropriate?`,
      options: [
        'Identify the RCM liability, discharge the tax as required, and evaluate ITC separately subject to eligibility.',
        'Ask the supplier to ignore the transaction completely.',
        'Net the tax directly against revenue.',
        'Treat RCM as a TDS deduction.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Under reverse charge the recipient bears the GST payment obligation for specified supplies; payment and ITC eligibility are separate steps. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-06',
      type: 'mcq',
      title: 'GST Exception Trend',
      difficulty: 'medium',
      points: 5,
      prompt: `The chart shows unreconciled GST purchase invoices at month end.

{{chart}}

What should concern the tax controller most?`,
      chart: {
        type: 'line',
        title: 'Unreconciled Purchase Invoices',
        xAxis: ['Jan','Feb','Mar','Apr','May'],
        series: [{ name: 'Exceptions', data: [8,11,9,24,31] }]
      },
      options: [
        'The fact that January had any exceptions at all.',
        'The exact same count in every month.',
        'The sharp rise in unresolved exceptions in April and May.',
        'A steady decline to zero.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The control population more than triples from January to May, indicating worsening supplier reporting, reconciliation, or close discipline. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-07',
      type: 'mcq',
      title: 'TDS Month-End Control',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the TDS register.

{{image}}

Which exception should be escalated first from a deposit-compliance perspective?`,
      image: {
        src: tdsControlRegisterImage,
        alt: 'TDS month-end control register'
      },
      options: [
        'The consultancy item that is paid and mapped.',
        'The contractor item that is paid and mapped.',
        'The professional-fee item solely because it has the largest description.',
        'The rent item where TDS is booked but the challan status is still pending.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Tax has already been deducted on the rent payment but deposit remains pending, creating a direct remittance-compliance exception. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-08',
      type: 'mcq',
      title: 'TDS Return Mapping',
      difficulty: 'hard',
      points: 5,
      prompt: `The Professional Fee line in the TDS control register shows tax paid but 'Return Mapping: Unmapped'.

What is the best next action?`,
      image: {
        src: tdsControlRegisterImage,
        alt: 'TDS control register with unmapped return item'
      },
      options: [
        'Pay the same TDS again automatically.',
        'Trace the challan and deductee data into the correct quarterly TDS statement before filing.',
        'Remove the expense from the general ledger.',
        'Convert the payment into GST ITC.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Deposit alone is not the entire compliance cycle; the tax and deductee details must also be correctly reported in the relevant TDS statement. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-09',
      type: 'mcq',
      title: 'AIS / 26AS Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the pre-filing information exhibit.

{{image}}

Which item should the return preparer investigate before finalizing the return?`,
      image: {
        src: itrInformationReviewImage,
        alt: 'Tax return pre-filing information review'
      },
      options: [
        'Salary, because there is no variance.',
        'Dividend, because it matches exactly.',
        'The ₹19,000 bank-interest variance.',
        'Securities sale, because reported information must always be ignored.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The external reported interest exceeds the taxpayer record, so the preparer should identify omitted interest, duplication, or reporting error before filing. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-10',
      type: 'mcq',
      title: 'Tax Credit Matching',
      difficulty: 'hard',
      points: 5,
      prompt: `A company's books show TDS receivable of ₹4.80 lakh, while the available tax-credit information reflects ₹4.25 lakh.

What is the strongest response?`,
      options: [
        'Reconcile deductor-wise differences, identify missing or incorrect reporting, and follow up before treating the full book amount as available credit.',
        'Claim ₹4.80 lakh automatically because it is in the ledger.',
        'Write off the entire ₹4.80 lakh.',
        'Move the difference to GST output tax.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Tax credit should be supported by the tax-credit information and underlying certificates/challans; unmatched balances require deductor-level investigation. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-11',
      type: 'mcq',
      title: 'Advance Tax Forecast',
      difficulty: 'hard',
      points: 5,
      prompt: `At the end of Q2, a profitable company revises its annual taxable-income forecast sharply upward.

Which control is most appropriate?`,
      options: [
        'Wait until the income-tax return is due regardless of the revised liability.',
        'Recompute projected income-tax liability and advance-tax requirements using the revised forecast.',
        'Stop recording tax expense until year end.',
        'Use GSTR-3B to settle the income-tax shortfall.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Advance-tax compliance depends on expected annual tax liability, so material forecast changes should trigger a fresh computation. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-12',
      type: 'mcq',
      title: 'Capital Gains Classification',
      difficulty: 'hard',
      points: 5,
      prompt: `An accountant is reviewing the sale of investments and notices that different asset classes were held for different periods.

What should determine whether each gain is treated as short-term or long-term?`,
      options: [
        'The taxpayer\'s city.',
        'Whether the buyer is GST registered.',
        'The bank account used for settlement.',
        'The applicable holding-period rule for that asset class and the transaction date history.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Capital-gain classification is driven by statutory holding-period rules that vary by asset class, not operational attributes of the payment. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-13',
      type: 'mcq',
      title: 'GST Liability Bridge',
      difficulty: 'hard',
      points: 5,
      prompt: `The chart presents a GST liability bridge.

{{chart}}

Which statement is most accurate?`,
      chart: {
        type: 'bar',
        title: 'GST Liability Bridge (₹ lakh)',
        categories: ['Output GST','Eligible ITC','RCM / Cash-only','Net Cash'],
        series: [{ name: 'Amount', data: [18.4, -13.2, 1.6, 6.8] }]
      },
      options: [
        'All GST liabilities can always be discharged using any available ITC.',
        'Eligible ITC increases the output-tax liability.',
        'A credit balance means GSTR-3B filing is unnecessary.',
        'Net cash liability falls after eligible ITC, but RCM and other cash-only obligations must still be evaluated separately.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The bridge shows ITC reducing the regular output liability, while cash-only or separately payable components still affect the final cash requirement. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-14',
      type: 'mcq',
      title: 'Credit Note Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A customer returns goods after the original taxable invoice was issued.

What is the best tax-control response?`,
      options: [
        'Delete the original invoice from the ERP.',
        'Issue and account for an appropriate credit note, link it to the original supply, and ensure the return impact is reflected in GST reporting within the applicable rules.',
        'Issue a debit note to increase tax.',
        'Ignore the return because tax was already reported.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A credit note preserves the audit trail while adjusting taxable value/tax for qualifying reductions such as returns. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-15',
      type: 'mcq',
      title: 'Tax Filing Dependency',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the filing workflow.

{{diagram}}

Which control is missing if the team files GSTR-3B immediately after preparing the sales and purchase registers?`,
      diagram: `flowchart LR
  A["Close sales & purchase ledgers"] --> B["Prepare GSTR-1 / ITC data"]
  B --> C["???"]
  C --> D["File GSTR-3B & pay tax"]
  D --> E["Archive challans & working papers"]`,
      options: [
        'A payroll appraisal meeting.',
        'A new PAN application every month.',
        'A documented books-to-GSTR-1/GSTR-2B/GSTR-3B reconciliation and reviewer sign-off.',
        'A customs declaration for all local services.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The critical missing step is reconciliation plus review before filing and payment. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-16',
      type: 'mcq',
      title: 'E-Invoicing Process',
      difficulty: 'hard',
      points: 5,
      prompt: `A business is covered by the applicable e-invoicing rules for a B2B invoice.

Which workflow is conceptually correct?`,
      diagram: `flowchart LR
  A["ERP invoice data"] --> B["Invoice Registration process"]
  B --> C["IRN / QR authentication"]
  C --> D["Issue compliant invoice"]
  D --> E["Use data in GST reporting / reconciliation"]`,
      options: [
        'Prepare invoice data, report it through the prescribed e-invoicing process, obtain the IRN/QR information, and issue the compliant invoice.',
        'Issue any invoice first and generate an unrelated IRN months later.',
        'Use the income-tax portal instead of the invoice-registration process.',
        'Treat e-invoicing as a replacement for maintaining sales records.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. E-invoicing authenticates prescribed invoice data through the registration process; it does not eliminate accounting or GST reconciliation. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-17',
      type: 'mcq',
      title: 'Export / Zero-Rated Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A GST-registered exporter plans to make eligible zero-rated supplies without upfront payment of IGST.

Which document/process is commonly relevant, subject to conditions?`,
      options: [
        'Applying for a new PAN for every shipment.',
        'Furnishing a Letter of Undertaking (LUT) before making such supplies.',
        'Issuing only a TDS certificate.',
        'Using a composition-tax challan.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. An LUT is commonly used by eligible exporters to make zero-rated supplies without payment of IGST, subject to the prescribed conditions. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-18',
      type: 'mcq',
      title: 'Return Filing Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `A growing business has GST, TDS, and income-tax obligations handled by three different employees.

Which governance design most reduces filing risk?`,
      options: [
        'Each employee keeps private notes with no common review.',
        'All reconciliations are postponed to year end.',
        'Only payment receipts are stored; workings are discarded.',
        'A monthly tax close checklist with owner, due date, reconciliation evidence, exception ageing, reviewer sign-off, and proof of filing/payment.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. A structured close process creates accountability, evidence, timely exception resolution, and a defensible audit trail across taxes. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-19',
      type: 'mcq',
      title: 'Compliance Root-Cause Analysis',
      difficulty: 'hard',
      points: 5,
      prompt: `Three consecutive months show purchase invoices missing from GSTR-2B for the same key supplier.

What is the strongest response?`,
      options: [
        'Escalate the recurring supplier-reporting issue, quantify exposed ITC, track ageing, and change the vendor follow-up/control process.',
        'Treat every month as an unrelated one-off.',
        'Claim all missing ITC permanently without review.',
        'Stop recording purchases from the supplier.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A repeated exception indicates a control or supplier-compliance pattern; the tax team should manage both the current exposure and the root cause. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not C: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    },
    {
      id: 'ti-20',
      type: 'mcq',
      title: 'Integrated Tax Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A controller wants one control that ties together books, GST, TDS, tax credits, and payment evidence.

Which design is strongest?`,
      diagram: `flowchart TB
  L["Books / subledgers"] --> R["Tax reconciliations"]
  S["GST / TDS / tax-credit statements"] --> R
  C["Challans / payment proofs"] --> R
  R --> X["Exception register"]
  X --> V["Reviewer validation"]
  V --> F["File / close / archive evidence"]`,
      options: [
        'A spreadsheet containing only statutory due dates.',
        'A folder containing only filed PDF returns.',
        'A tax-control dashboard that reconciles ledger balances to returns/statements/challans, highlights exceptions by age and amount, and requires reviewer closure.',
        'A verbal confirmation that all taxes were handled.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The strongest control links source books, external tax data, payment evidence, exception management, and independent review. Why not A: this choice does not follow the strongest compliance treatment for the facts given. Why not B: this choice does not follow the strongest compliance treatment for the facts given. Why not D: this choice does not follow the strongest compliance treatment for the facts given.'
    }
  ],
};
