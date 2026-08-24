import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import euVatFlowImage from '../../../assets/assessments/tax_europe/eu_vat_flow.png';
import ossReviewImage from '../../../assets/assessments/tax_europe/oss_review.png';
import reverseChargeReviewImage from '../../../assets/assessments/tax_europe/reverse_charge_review.png';

export const taxEuropeData = {
  id: ASSESSMENT_TYPES.tax_europe,
  title: 'Europe Taxation Professional Certification',
  shortTitle: 'Europe Tax',
  category: 'Accounting & Tax',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Professional European taxation assessment focused on EU VAT, intra-Community supplies and acquisitions, place of taxation, imports, B2B services, OSS, cross-border evidence, Member-State reporting, and VAT governance.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Use the exhibits, charts, tables, and process diagrams. Select the strongest tax treatment or control response for the facts given. Questions emphasize professional judgment and reconciliation rather than isolated memorization. No negative marking.',
  questions: [
    {
      id: 'eu-01',
      type: 'mcq',
      title: 'Intra-EU Goods Flow',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the cross-border exhibit.

{{image}}

A German business dispatches goods to a French VAT-registered business for use in France. What is the strongest VAT analysis?`,
      image: {
        src: euVatFlowImage,
        alt: 'EU cross-border VAT transaction review'
      },
      options: [
        'Treat it as a domestic German consumer sale automatically.',
        'Treat it as an intra-EU supply/acquisition flow and evaluate the supplier exemption and customer acquisition VAT under the applicable conditions.',
        'Ignore VAT because both countries use the euro.',
        'Charge the same VAT rate in every Member State.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. EU VAT distinguishes intra-Community supply and acquisition treatment for goods moving between Member States. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-02',
      type: 'mcq',
      title: 'Place of Taxation',
      difficulty: 'medium',
      points: 5,
      prompt: `Why is place-of-supply analysis critical in EU VAT?`,
      options: [
        'It sets one single EU corporate-income-tax rate.',
        'It replaces invoice documentation.',
        'It means every transaction is taxed where the supplier\'s bank is located.',
        'It determines which Member State\'s VAT rules may apply to the transaction.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. EU VAT rules use place-of-taxation rules to determine the relevant jurisdiction; rates and invoicing can vary by Member State. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-03',
      type: 'mcq',
      title: 'Intra-EU Acquisition',
      difficulty: 'medium',
      points: 5,
      prompt: `A French company acquires goods from Germany and the goods arrive in France.

Who generally accounts for acquisition VAT, subject to the rules?`,
      options: [
        'The French customer as the acquirer.',
        'The customer\'s bank.',
        'The European Commission directly on the invoice.',
        'No one, because intra-EU acquisitions are outside VAT.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. For a taxable intra-EU acquisition, the acquirer is generally liable to account for the VAT. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-04',
      type: 'mcq',
      title: 'Import VAT',
      difficulty: 'medium',
      points: 5,
      prompt: `Goods enter the EU from a non-EU country and are imported into the Netherlands.

What should the tax team determine first?`,
      options: [
        'The supplier\'s home-country income-tax rate.',
        'The euro exchange rate only.',
        'The importation jurisdiction/procedure and the resulting import VAT and customs treatment.',
        'Whether the goods can be treated as payroll.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Import VAT is linked to the place/procedure of importation; customs and VAT processes must be aligned. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-05',
      type: 'mcq',
      title: 'EU VAT Classification',
      difficulty: 'medium',
      points: 5,
      prompt: `A business has domestic sales, intra-EU goods, B2B services, and imports.

What is the strongest close control?`,
      options: [
        'Classify each transaction type before applying place-of-supply, liability, rate, and reporting rules.',
        'Apply one VAT code to every transaction.',
        'Use corporate tax treatment to decide VAT.',
        'Ignore destination country information.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. EU VAT treatment depends heavily on transaction classification and place-of-taxation rules. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-06',
      type: 'mcq',
      title: 'Cross-border Exceptions',
      difficulty: 'medium',
      points: 5,
      prompt: `Study the chart.

{{chart}}

What is the strongest conclusion?`,
      chart: {
        type: 'line',
        title: 'Open Cross-border VAT Exceptions',
        xAxis: ['Jan','Feb','Mar','Apr','May'],
        series: [{ name: 'Exceptions', data: [7,9,8,18,27] }]
      },
      options: [
        'The close is improving every month.',
        'Exceptions are flat.',
        'Cross-border VAT exceptions are increasing and require root-cause remediation.',
        'May has no issues.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The number of unresolved exceptions rises materially by April and May. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-07',
      type: 'mcq',
      title: 'OSS Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the B2C/OSS exhibit.

{{image}}

Which market is the clearest filing exception?`,
      image: {
        src: ossReviewImage,
        alt: 'EU One Stop Shop cross-border sales review'
      },
      options: [
        'France, because VAT is mapped.',
        'Germany, because VAT is mapped.',
        'Spain, because VAT is mapped.',
        'Italy, because VAT capture is only partial.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. A destination market with incomplete VAT capture should be investigated before OSS reporting. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-08',
      type: 'mcq',
      title: 'Destination-country Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A retailer sells to consumers in several EU Member States.

What is the strongest data control?`,
      options: [
        'Store only total EU sales with no country detail.',
        'Capture customer destination, transaction value, VAT treatment, and reporting scheme consistently at transaction level.',
        'Use the seller\'s domestic VAT rate for every customer automatically.',
        'Ignore returns and credit notes.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Destination-country reporting depends on reliable country-level transaction data. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-09',
      type: 'mcq',
      title: 'Reverse Charge / Acquisition Review',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the acquisition exhibit.

{{image}}

Which transaction is clearly different from the intra-EU acquisitions?`,
      image: {
        src: reverseChargeReviewImage,
        alt: 'EU intra-community acquisition review'
      },
      options: [
        'The German supplier.',
        'The Belgian supplier.',
        'The local French supplier transaction, which is a domestic purchase rather than an intra-EU acquisition.',
        'All foreign suppliers are always identical.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Domestic purchases and intra-EU acquisitions follow different VAT mechanics and should not be coded identically. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-10',
      type: 'mcq',
      title: 'VAT Number Validation',
      difficulty: 'hard',
      points: 5,
      prompt: `A supplier intends to apply exempt intra-EU supply treatment to goods shipped to a business customer in another Member State.

What control is strongest?`,
      options: [
        'Validate customer VAT details and retain transport/transaction evidence supporting the conditions for the treatment.',
        'Assume every foreign customer qualifies.',
        'Use the customer\'s website as the only evidence.',
        'Ignore goods movement evidence.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Cross-border VAT treatments depend on statutory conditions and supporting evidence, not foreign address alone. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-11',
      type: 'mcq',
      title: 'B2B Service Review',
      difficulty: 'hard',
      points: 5,
      prompt: `A consulting service is provided cross-border between VAT-registered businesses in different Member States.

What should the tax team analyze first?`,
      options: [
        'Only the supplier\'s domestic VAT rate.',
        'The B2B place-of-supply rule and whether reverse-charge accounting applies to the customer.',
        'The customer\'s payroll tax.',
        'The EU customs tariff for goods.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Services require place-of-supply analysis; B2B services often place tax responsibility with the customer under reverse charge, subject to rules. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-12',
      type: 'mcq',
      title: 'Member-State Differences',
      difficulty: 'hard',
      points: 5,
      prompt: `Why should a 'Europe Tax' assessment avoid assuming one VAT rate and one corporate tax rate across all EU countries?`,
      options: [
        'The EU has no VAT framework.',
        'All Member States use identical tax legislation.',
        'Only customs duties differ.',
        'Member States can have different VAT rates, invoicing rules, and direct-tax systems even under common EU frameworks.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. EU law harmonizes important VAT principles, but Member States retain differences in rates and many implementation/direct-tax rules. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-13',
      type: 'mcq',
      title: 'VAT Reporting Bridge',
      difficulty: 'hard',
      points: 5,
      prompt: `Study the chart.

{{chart}}

What is the strongest interpretation?`,
      chart: {
        type: 'bar',
        title: 'EU VAT Reporting Bridge (€000)',
        categories: ['Domestic Output','Destination VAT','Acquisition VAT','Recoverable Input','Net'],
        series: [{ name: 'Amount', data: [84,31,22,-96,41] }]
      },
      options: [
        'A low net VAT balance means classifications do not matter.',
        'All intra-EU transactions are zero tax with no reporting.',
        'Input VAT can always be claimed without conditions.',
        'Destination VAT and acquisition/reverse-charge amounts must be correctly classified even when the overall net VAT position appears manageable.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Classification drives jurisdictional reporting even when the net group cash position is modest. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-14',
      type: 'mcq',
      title: 'Credit Note Across Borders',
      difficulty: 'hard',
      points: 5,
      prompt: `A cross-border B2B goods sale is partially returned.

What is the strongest control response?`,
      options: [
        'Delete the original invoice.',
        'Issue the appropriate credit-note adjustment, link it to the original transaction, and update the relevant cross-border VAT reporting/evidence.',
        'Ignore the return because the original supply crossed a border.',
        'Record it only in corporate income tax.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Returns should preserve the audit trail and flow into the relevant VAT reporting rather than erasing history. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-15',
      type: 'mcq',
      title: 'EU VAT Close Workflow',
      difficulty: 'hard',
      points: 5,
      prompt: `What belongs in the missing step?

{{diagram}}`,
      diagram: `flowchart LR
  A["Close transaction ledgers"] --> B["Extract VAT data by country"]
  B --> C["???"]
  C --> D["Submit local / OSS VAT reports"]
  D --> E["Archive evidence"]`,
      options: [
        'Apply one EU-wide VAT percentage.',
        'Prepare payroll tax only.',
        'Classify domestic/intra-EU/import/service flows, reconcile by Member State, review exceptions, and sign off.',
        'Ignore destination-country data.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Cross-border VAT close requires classification, jurisdictional reconciliation, and review before filing. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-16',
      type: 'mcq',
      title: 'Intra-EU Goods Process',
      difficulty: 'hard',
      points: 5,
      prompt: `Which controlled process is strongest?`,
      diagram: `flowchart LR
  V["Validate VAT/customer"] --> M["Confirm movement"]
  M --> C["Classify supply/acquisition"]
  C --> R["VAT reporting"]
  R --> E["Retain evidence"]`,
      options: [
        'Validate customer/VAT status → confirm goods movement → classify intra-EU treatment → report supplier/customer VAT consequences → retain evidence.',
        'Use destination country only after filing.',
        'Assume exemption whenever customer is foreign.',
        'Ignore proof of transport.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The process ties legal conditions to transaction evidence and reporting. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-17',
      type: 'mcq',
      title: 'VAT Audit Trail',
      difficulty: 'hard',
      points: 5,
      prompt: `A group has entities in six Member States.

What is the strongest audit-trail design?`,
      options: [
        'Keep only consolidated EU totals.',
        'Maintain transaction-level mapping from source invoices to country VAT returns/OSS reports, adjustments, and payment/refund evidence.',
        'Store only filed PDFs.',
        'Let each entity use undocumented manual codes.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Cross-border compliance needs traceability from transaction to jurisdictional filing. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-18',
      type: 'mcq',
      title: 'EU Tax Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `Which governance model is strongest for a pan-European group?`,
      options: [
        'One calendar entry called \'EU tax\'.',
        'Use only the parent company\'s domestic rules.',
        'Rely on local memory with no group oversight.',
        'A jurisdiction matrix covering VAT registrations, local returns, OSS/IOSS where relevant, customs interfaces, owners, deadlines, and reconciliations.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. EU operations combine common frameworks with Member-State obligations, so explicit jurisdictional governance is essential. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-19',
      type: 'mcq',
      title: 'Recurring Destination Error',
      difficulty: 'hard',
      points: 5,
      prompt: `Three periods show Italian B2C sales incorrectly coded to the seller's domestic VAT rate.

What is the strongest response?`,
      options: [
        'Correct current reporting and redesign the tax-engine/customer-destination mapping that caused the repeated error.',
        'Treat each month as unrelated.',
        'Stop selling to Italy immediately.',
        'Ignore the error because both countries are in the EU.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Repeated miscoding indicates a system/control issue requiring root-cause remediation. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not C: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    },
    {
      id: 'eu-20',
      type: 'mcq',
      title: 'Integrated EU VAT Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `Which dashboard gives the best oversight?`,
      diagram: `flowchart TB
  T["Transaction data"] --> C["Country / flow classification"]
  C --> R["Local VAT / OSS reports"]
  P["Payments / refunds"] --> X["Reconciliation"]
  R --> X
  X --> E["Exception register"]
  E --> V["Reviewer closure"]`,
      options: [
        'One total called \'Europe VAT\'.',
        'A list of country VAT rates only.',
        'A dashboard by Member State linking domestic VAT, intra-EU acquisitions/supplies, imports, OSS sales, payments/refunds, exceptions, and reviewer closure.',
        'A dashboard showing only revenue.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The strongest design provides jurisdictional traceability and exception governance. Why not A: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not B: it does not best fit the tax facts, control objective, or reporting treatment in this scenario. Why not D: it does not best fit the tax facts, control objective, or reporting treatment in this scenario.'
    }
  ],
};
