import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const gstIndiaProData = {
  id: ASSESSMENT_TYPES.gst_india_pro,
  title: 'GST India Professional Certification',
  shortTitle: 'GST India',
  category: 'Accounting',
  durationMinutes: 55,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical GST India judgment across registration, tax invoices, place of supply, HSN/SAC, input tax credit, reverse charge, credit notes, return preparation, reconciliation, vendor compliance, documentation, audit readiness, and GST control.',
  instructions:
    '20 scenario-based questions, 55 minutes, 100 marks. Several questions include Mermaid diagrams, GST transaction flows, reconciliation schedules, or compliance scenarios. Read each scenario carefully. Options are intentionally close, so choose the answer that best addresses the underlying GST, documentation, and compliance issue. No negative marking.',

  questions: [
    {
      id: 'gstp-01',
      type: 'mcq',
      title: 'GST Structure',
      difficulty: 'easy',
      points: 5,
      prompt: `A business sells goods and services across multiple Indian states.

Which statement best describes the GST framework it operates under?`,
      options: [
        'GST is primarily a direct tax on company profits.',
        'GST is a destination-based indirect tax on supplies of goods and services, with tax jurisdiction influenced by location and place-of-supply rules.',
        'GST is only a customs duty on imports.',
        'GST applies only to payroll and employee benefits.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GST is an indirect, destination-based tax framework on supplies. Why not A: company profits are subject to direct taxation, not GST. Why not C: customs and import GST are only part of the broader framework. Why not D: payroll is not the core GST tax base.'
    },

    {
      id: 'gstp-02',
      type: 'mcq',
      title: 'Registration Status',
      difficulty: 'easy',
      points: 5,
      prompt: `A business begins operations under a new GST registration but continues issuing invoices using the GSTIN of another branch.

What is the strongest concern?`,
      options: [
        'The invoice layout may look inconsistent.',
        'Transactions may be reported under the wrong registration, affecting tax liability, place-of-supply treatment, returns, and customer records.',
        'Only payroll reporting is affected.',
        'No issue exists as long as both GSTINs belong to the same group.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GST registrations operate as distinct compliance units, so using the wrong GSTIN can distort reporting and customer documentation. Why not A: the issue is statutory, not cosmetic. Why not C: payroll is unrelated. Why not D: group ownership does not remove registration-level compliance requirements.'
    },

    {
      id: 'gstp-03',
      type: 'mcq',
      title: 'Tax Invoice Accuracy',
      difficulty: 'easy',
      points: 5,
      prompt: `A tax invoice contains the correct amount but uses the wrong customer GSTIN and place of supply.

What is the strongest response?`,
      options: [
        'Leave the invoice unchanged because the tax amount is correct.',
        'Correct the invoice/documentation because GSTIN and place of supply affect tax treatment, customer ITC support, and return reporting.',
        'Change only the invoice PDF file name.',
        'Wait until year-end and adjust the return without correcting source documents.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GST invoice data must support the correct tax treatment and buyer records. Why not A: correct tax amount alone is not sufficient. Why not C: file naming does not fix statutory data. Why not D: source-document accuracy should not be deferred unnecessarily.'
    },

    {
      id: 'gstp-04',
      type: 'mcq',
      title: 'Place of Supply',
      difficulty: 'easy',
      points: 5,
      prompt: `A supplier located in Karnataka makes a taxable B2B supply to a customer in Maharashtra, and the applicable place of supply is Maharashtra.

What is the strongest high-level tax conclusion?`,
      options: [
        'The transaction is generally inter-state and IGST treatment should be evaluated.',
        'The transaction must always use CGST and SGST because the supplier is in Karnataka.',
        'No GST applies because the customer is in another state.',
        'Place of supply is irrelevant once both parties are registered.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. When supplier location and place of supply are in different states, the supply is generally inter-state and IGST treatment is relevant. Why not B: intra-state treatment requires the relevant locations to align under GST rules. Why not C: cross-state supplies can still be taxable. Why not D: place of supply remains fundamental.'
    },

    {
      id: 'gstp-05',
      type: 'mcq',
      title: 'HSN/SAC Mapping',
      difficulty: 'easy',
      points: 5,
      prompt: `A company creates a new service code but maps it to an HSN intended for goods and applies an incorrect GST rate.

What is the strongest risk?`,
      options: [
        'Incorrect classification can systematically distort invoice tax, tax liability, and return reporting.',
        'Only invoice formatting is affected.',
        'The error cannot affect GST if the customer pays the invoice.',
        'HSN/SAC mapping matters only for exports.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Classification drives tax treatment and reporting, so a master-data error can propagate across many transactions. Why not B: this is not a cosmetic issue. Why not C: payment does not cure tax misclassification. Why not D: classification applies more broadly.'
    },

    {
      id: 'gstp-06',
      type: 'mcq',
      title: 'Input Tax Credit Eligibility',
      difficulty: 'medium',
      points: 5,
      prompt: `A company has a supplier invoice for ₹590,000 including GST.

The invoice is valid and the goods were received, but the purchase relates entirely to a blocked-credit category.

What is the strongest treatment?`,
      options: [
        'Claim full ITC because the invoice is valid.',
        'Do not claim the blocked portion merely because documentation exists; eligibility conditions still need to be satisfied.',
        'Claim half the ITC as a conservative estimate.',
        'Claim the ITC and reverse it only if an auditor asks.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Valid documentation is necessary but not sufficient when a category is ineligible or blocked. Why not A: eligibility rules still apply. Why not C: arbitrary partial claims are unsupported. Why not D: compliance should be correct at the time of claim.'
    },

    {
      id: 'gstp-07',
      type: 'mcq',
      title: 'ITC Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `Purchase register eligible ITC: ₹4.80m
System-generated supplier-linked eligible credit available for reconciliation: ₹4.42m

{{diagram}}

What is the strongest next step?`,
      diagram: `flowchart LR
  PR["Purchase register<br/><b>₹4.80m</b>"] --> R["ITC reconciliation"]
  AV["Supplier-linked eligible credit<br/><b>₹4.42m</b>"] --> R
  R --> D["Difference<br/><b>₹380k</b>"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class R,D warning;`,
      options: [
        'Claim ₹4.80m because internal books should always override external data.',
        'Investigate the ₹380k by invoice, supplier, eligibility, timing, amendments, and filing status before claiming unsupported credit.',
        'Write off the ₹380k to Miscellaneous Expense immediately.',
        'Ignore the difference if it is less than 10%.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. ITC should be supported through invoice-level reconciliation and eligibility review. Why not A: books alone do not establish recoverability. Why not C: an unexplained difference should first be investigated. Why not D: compliance differences should not be dismissed by an arbitrary percentage.'
    },

    {
      id: 'gstp-08',
      type: 'mcq',
      title: 'Vendor Compliance Risk',
      difficulty: 'medium',
      points: 5,
      prompt: `A major supplier repeatedly issues valid invoices, but its transactions frequently fail to appear in the recipient’s GST reconciliation data.

What is the strongest finance response?`,
      options: [
        'Ignore the issue because supplier compliance is the supplier’s responsibility only.',
        'Track the mismatch, follow up with the supplier, assess ITC recoverability/timing risk, and consider the issue in vendor governance.',
        'Stop paying every invoice from the supplier immediately.',
        'Claim ITC regardless of reconciliation status because commercial supply occurred.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Supplier compliance can affect recipient credit timing and recoverability, so it should be monitored. Why not A: the recipient may bear practical tax/cash-flow consequences. Why not C: payment action should follow policy and facts. Why not D: commercial supply alone does not establish every ITC condition.'
    },

    {
      id: 'gstp-09',
      type: 'mcq',
      title: 'Credit Note',
      difficulty: 'medium',
      points: 5,
      prompt: `A supplier originally invoiced goods at ₹1.2m plus GST.

After a quality issue, it agrees to a ₹200,000 price reduction.

What is the strongest GST/accounting approach?`,
      options: [
        'Use the appropriate credit-note process so commercial value and related tax treatment are adjusted consistently.',
        'Delete the original invoice.',
        'Ignore the GST effect and adjust only inventory quantity.',
        'Record ₹200,000 as unrelated income.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A credit note preserves the original audit trail while adjusting commercial and tax values. Why not B: deletion can destroy source history. Why not C: price reductions can affect tax as well as accounting. Why not D: the adjustment is linked to the original purchase.'
    },

    {
      id: 'gstp-10',
      type: 'mcq',
      title: 'Reverse Charge',
      difficulty: 'medium',
      points: 5,
      prompt: `A transaction falls under an applicable reverse-charge provision.

What is the strongest control objective?`,
      options: [
        'Identify the transaction correctly, account for the tax liability as required, assess eligible credit separately, and ensure return reporting is consistent.',
        'Ask the supplier to collect tax in every case.',
        'Ignore the transaction until year-end.',
        'Treat reverse charge as a payroll deduction.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Reverse charge shifts tax responsibility and requires controlled liability, credit, and return treatment. Why not B: that may contradict the applicable rule. Why not C: waiting creates compliance risk. Why not D: reverse charge is not payroll taxation.'
    },

    {
      id: 'gstp-11',
      type: 'mcq',
      title: 'Return Preparation',
      difficulty: 'medium',
      points: 5,
      prompt: `Before filing, the GST return shows output tax ₹8.20m.

The sales register supports ₹8.56m.

What is the strongest response?`,
      options: [
        'File ₹8.20m because the return system should be treated as authoritative.',
        'Reconcile the ₹360k difference by invoice, amendment, credit note, tax rate, registration, and period before submission.',
        'Average the two values.',
        'Ignore the difference if cash collected from customers is lower than sales.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GST return figures should reconcile to source accounting and transaction records before filing. Why not A: either source can be incomplete or wrong. Why not C: averaging has no statutory basis. Why not D: GST liability is not determined simply by customer collection.'
    },

    {
      id: 'gstp-12',
      type: 'mcq',
      title: 'B2B Invoice Mismatch',
      difficulty: 'hard',
      points: 5,
      prompt: `A customer reports that three invoices are missing from its GST reconciliation even though they appear in the seller’s books.

What is the strongest investigation?`,
      options: [
        'Check whether the invoices were included in the correct return period, with correct GSTIN, invoice number, tax values, and amendment status.',
        'Tell the customer to claim the credit anyway.',
        'Delete the invoices and recreate them in the next financial year.',
        'Change the customer GSTIN without checking source documents.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Missing B2B invoice visibility often requires checking return inclusion and key invoice fields. Why not B: unsupported claims can create compliance risk. Why not C: deletion/recreation can distort period reporting. Why not D: source data should be validated before changes.'
    },

    {
      id: 'gstp-13',
      type: 'mcq',
      title: 'Unexpected GST Spike',
      difficulty: 'hard',
      points: 5,
      prompt: `Monthly GST payable rises from ₹5.1m to ₹8.7m while revenue increases only 6%.

{{diagram}}

What is the strongest first analytical review?`,
      diagram: `flowchart TB
  R["Revenue<br/><b>+6%</b>"] --> J["GST spike review"]
  T["GST payable<br/><b>₹5.1m → ₹8.7m</b>"] --> J
  J --> A["Check rate / mix changes"]
  J --> C["Check credit notes / reversals"]
  J --> ITC["Check ITC movement"]
  J --> E["Check posting / classification exceptions"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class T,J warning;`,
      options: [
        'Assume the system is correct because the liability came from the ERP.',
        'Investigate output-tax mix/rates, credit notes, reversals, ITC changes, classification, and unusual transactions before concluding.',
        'Reduce GST payable manually until it matches revenue growth.',
        'Ignore the change until annual reconciliation.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A tax movement far larger than revenue growth needs driver analysis. Why not A: configuration and postings can be wrong. Why not C: liability should never be forced to a target. Why not D: waiting can compound compliance errors.'
    },

    {
      id: 'gstp-14',
      type: 'mcq',
      title: 'Documentation Discipline',
      difficulty: 'hard',
      points: 5,
      prompt: `A business claims ITC on a high-value purchase.

The accounting entry exists, but the team cannot produce the supporting tax invoice or receipt evidence.

What is the strongest control conclusion?`,
      options: [
        'Accounting entry alone is sufficient.',
        'The tax position is weak because eligibility must be supported by appropriate documentation and evidence, not only by a ledger posting.',
        'The supplier name in the ledger is enough.',
        'Documentation matters only during litigation.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GST positions should be supportable with proper underlying documents and evidence. Why not A: ledger entries do not replace statutory support. Why not C: supplier identity alone is incomplete evidence. Why not D: documentation is part of routine compliance control.'
    },

    {
      id: 'gstp-15',
      type: 'mcq',
      title: 'Place-of-Supply Error at Scale',
      difficulty: 'hard',
      points: 5,
      prompt: `A system configuration error causes hundreds of inter-state B2B invoices to be treated as intra-state for two months.

What is the strongest response?`,
      options: [
        'Correct only future invoices because historical customers already paid.',
        'Identify the affected population, quantify tax impact, determine the correction/amendment path, fix configuration, and reconcile returns and customer documents.',
        'Change invoice dates so the transactions fall into the current month.',
        'Move the tax difference to Miscellaneous Expense.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A systemic place-of-supply error requires population-level remediation, configuration correction, and compliant return/document handling. Why not A: past errors remain. Why not C: changing dates creates another compliance problem. Why not D: accounting plugs do not solve tax classification.'
    },

    {
      id: 'gstp-16',
      type: 'mcq',
      title: 'Blocked vs Eligible Credit',
      difficulty: 'hard',
      points: 5,
      prompt: `A purchase ledger includes:
- eligible raw-material GST
- blocked personal-use vehicle expense
- common input used partly for exempt activity

What is the strongest ITC-control approach?`,
      options: [
        'Claim all GST because every item appears in the purchase register.',
        'Classify credits by eligibility, exclude blocked amounts, and apply appropriate apportionment/reversal logic to common inputs where required.',
        'Claim only the largest invoices.',
        'Claim nothing to avoid compliance risk.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. ITC control requires transaction-level eligibility and appropriate treatment of blocked/common credits. Why not A: purchase-register presence alone is insufficient. Why not C: invoice size is irrelevant to eligibility. Why not D: valid eligible credit should not be abandoned unnecessarily.'
    },

    {
      id: 'gstp-17',
      type: 'mcq',
      title: 'Audit Readiness',
      difficulty: 'hard',
      points: 5,
      prompt: `A GST audit asks for support for a material credit claim.

Which evidence set is strongest?`,
      options: [
        'A screenshot of the GST summary.',
        'Tax invoice, purchase record, receipt evidence, supplier details, ITC reconciliation support, accounting entry, and documented adjustments where applicable.',
        'A management email stating the credit is valid.',
        'A spreadsheet prepared only after the audit request with no source links.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong audit support is traceable from source document through accounting and reconciliation. Why not A: a summary screenshot is incomplete. Why not C: assertion is not evidence. Why not D: unsupported retrospective spreadsheets are weaker.'
    },

    {
      id: 'gstp-18',
      type: 'mcq',
      title: 'Return Control Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `Before filing, the tax manager sees:

{{diagram}}

What is the strongest conclusion?`,
      diagram: `flowchart TB
  S["Sales vs return difference<br/><b>₹420k tax</b>"] --> J["Filing judgment"]
  P["Purchase / ITC mismatch<br/><b>₹310k</b>"] --> J
  V["Vendor exceptions<br/><b>27 invoices</b>"] --> J
  CN["Unposted credit notes<br/><b>₹180k tax impact</b>"] --> J
  R["RCM items pending review<br/><b>9</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class S,P,V,CN,R,J warning;`,
      options: [
        'File immediately because each issue is individually manageable.',
        'Material reconciliation and classification issues remain, so filing should wait until they are resolved or formally controlled and documented.',
        'Only the sales difference matters because output tax is more important than ITC.',
        'Post one net adjustment equal to all differences and file.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Filing quality depends on resolving or formally controlling material output, ITC, credit-note, vendor, and reverse-charge exceptions. Why not A: several issues can interact and affect liability. Why not C: both output and input-side compliance matter. Why not D: netting unrelated differences hides root causes.'
    },

    {
      id: 'gstp-19',
      type: 'mcq',
      title: 'GST and Accounting Integration',
      difficulty: 'hard',
      points: 5,
      prompt: `Finance treats GST as a separate filing exercise.

The accounting team closes books before tax reconciliations are complete, and tax adjustments are later posted manually.

What is the strongest concern?`,
      options: [
        'This is acceptable because GST belongs only to the tax team.',
        'Separating GST from accounting creates recurring reconciliation breaks, late corrections, and weaker period-close integrity.',
        'The only issue is that the tax team needs a larger spreadsheet.',
        'Manual tax adjustments are always preferable to integrated transaction controls.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. GST should be integrated into transaction processing and period-end finance control. Why not A: accounting and tax records are interdependent. Why not C: a larger spreadsheet does not fix process design. Why not D: manual fixes are more error-prone than controlled upstream setup.'
    },

    {
      id: 'gstp-20',
      type: 'mcq',
      title: 'Integrated GST Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A GST health review finds:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  REG["Registration / GSTIN errors"] --> J["GST control redesign"]
  INV["Invoice master-data issues"] --> J
  POS["Place-of-supply errors"] --> J
  ITC["ITC mismatches / blocked credits"] --> J
  VEN["Vendor compliance issues"] --> J
  RCM["RCM gaps"] --> J
  REC["Book-to-return differences"] --> J
  DOC["Weak documentation"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class REG,INV,POS,ITC,VEN,RCM,REC,DOC,J warning;`,
      options: [
        'Focus only on filing deadlines because timeliness is the primary GST control.',
        'Redesign the end-to-end GST process across registration, transaction setup, invoicing, classification, ITC, vendor controls, reconciliations, documentation, and return review.',
        'Move all GST adjustments into one manual journal at month-end.',
        'Rely only on ERP tax summaries and stop transaction-level review.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The weaknesses are systemic and require integrated transaction, accounting, reconciliation, and compliance controls. Why not A: timely filing of wrong data is still poor compliance. Why not C: manual net adjustments conceal causes. Why not D: summaries are not a substitute for source-level control.'
    },
  ],
};
