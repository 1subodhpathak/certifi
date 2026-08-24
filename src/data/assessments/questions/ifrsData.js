import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const ifrsData = {
  id: ASSESSMENT_TYPES.ifrs,
  title: 'IFRS & GAAP Financial Reporting Professional Certification',
  shortTitle: 'IFRS',
  category: 'Finance',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical financial reporting judgment across IFRS and US GAAP, revenue recognition, leases, financial instruments, impairment, fair value, provisions, inventory, development costs, deferred tax, consolidation, goodwill, OCI, subsequent events, materiality, and disclosure quality.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Several questions include Mermaid diagrams, financial schedules, or reporting scenarios. Read the full scenario before choosing. Options are intentionally close, so select the answer that best reflects the applicable reporting principle and professional judgment. No negative marking.',

  questions: [
    {
      id: 'if-01',
      type: 'mcq',
      title: 'IFRS 15 — Identifying Performance Obligations',
      difficulty: 'easy',
      points: 5,
      prompt: `A software company signs a contract for:

- software license
- implementation service
- one year of technical support

The customer can benefit from the license separately, implementation does not significantly modify the software, and support is separately identifiable.

What is the strongest IFRS 15 conclusion?`,
      options: [
        'Treat the entire contract as one performance obligation because there is one contract.',
        'Recognize all revenue when the contract is signed.',
        'Identify the distinct promises as separate performance obligations and allocate consideration appropriately.',
        'Recognize only the support element as revenue because it is delivered over time.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. IFRS 15 requires distinct promises to be identified as separate performance obligations. Why not A: one contract can contain multiple performance obligations. Why not B: contract signing alone does not establish revenue recognition. Why not D: the license and implementation may also create revenue when their respective obligations are satisfied.'
    },

    {
      id: 'if-02',
      type: 'mcq',
      title: 'IFRS 15 — Revenue Timing',
      difficulty: 'easy',
      points: 5,
      prompt: `A company invoices a customer $600,000 on December 28.

The goods remain in the seller's warehouse and control transfers to the customer on January 4 under the contract.

When should revenue generally be recognized?`,
      options: [
        'In January, when control transfers to the customer.',
        'In December because the invoice was issued.',
        'In December because the customer signed the contract.',
        'Half in December and half in January.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. IFRS 15 focuses on transfer of control, not merely billing or contract signature. Why not B: invoicing does not by itself prove control transfer. Why not C: contract existence is only the starting point. Why not D: there is no basis for arbitrary split recognition.'
    },

    {
      id: 'if-03',
      type: 'mcq',
      title: 'IFRS 16 — Lessee Accounting',
      difficulty: 'easy',
      points: 5,
      prompt: `A company enters a five-year office lease with fixed payments and no qualifying short-term or low-value exemption.

What should the lessee generally recognize at commencement under IFRS 16?`,
      options: [
        'Only straight-line rent expense with no balance-sheet impact.',
        'A right-of-use asset and a lease liability.',
        'Inventory and deferred revenue.',
        'A contingent liability only.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. IFRS 16 generally requires lessees to recognize a right-of-use asset and lease liability for such leases. Why not A: that is not the general IFRS 16 lessee model. Why not C: leases do not create inventory/deferred revenue for the lessee. Why not D: the lease obligation is recognized, not merely disclosed as contingent.'
    },

    {
      id: 'if-04',
      type: 'mcq',
      title: 'Inventory — Lower of Cost and NRV',
      difficulty: 'easy',
      points: 5,
      prompt: `Inventory has a carrying cost of $1.20m.

Because of damage, expected selling price falls to $1.05m and estimated selling costs are $70k.

What is the inventory's approximate net realizable value?`,
      options: [
        '$1.20m',
        '$1.12m',
        '$1.05m',
        '$980k',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. NRV is estimated selling price less estimated costs to complete and sell: $1.05m - $0.07m = $0.98m. Why not A: cost is not NRV. Why not B: the arithmetic is incorrect. Why not C: it ignores selling costs.'
    },

    {
      id: 'if-05',
      type: 'mcq',
      title: 'Provision vs Contingent Liability',
      difficulty: 'easy',
      points: 5,
      prompt: `A company is defending a lawsuit.

Legal counsel concludes:
- a present obligation exists from a past event
- an outflow is probable
- the amount can be estimated reliably

What is the strongest IFRS treatment?`,
      options: [
        'Recognize a provision and provide appropriate disclosure.',
        'Disclose only; never recognize until cash is paid.',
        'Record the amount as an asset.',
        'Ignore the matter until the court issues a final judgment.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A present obligation with probable outflow and reliable estimate meets provision recognition criteria. Why not B: waiting for payment would be too late. Why not C: this is a liability, not an asset. Why not D: recognition can be required before final legal settlement.'
    },

    {
      id: 'if-06',
      type: 'mcq',
      title: 'Development Costs',
      difficulty: 'medium',
      points: 5,
      prompt: `A technology company spends $8m on a new product.

The first $3m is research to explore alternatives.
After technical feasibility, intention to complete, resources, and probable future benefits are demonstrated, another $5m is spent on development.

Under IFRS, what is the strongest treatment?`,
      options: [
        'Capitalize the full $8m because the project eventually became viable.',
        'Expense the full $8m because all R&D must be expensed.',
        'Expense the $3m research phase and capitalize qualifying development expenditure from the point recognition criteria are met.',
        'Capitalize only the research phase because uncertainty is highest there.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Research is expensed, while development expenditure can be capitalized only after the specified recognition criteria are satisfied. Why not A: costs before criteria are met are not retrospectively capitalized. Why not B: that more closely resembles US GAAP treatment for many internally developed R&D costs, but not the IFRS rule here. Why not D: research is specifically expensed.'
    },

    {
      id: 'if-07',
      type: 'mcq',
      title: 'IFRS 9 — Expected Credit Loss',
      difficulty: 'medium',
      points: 5,
      prompt: `A lender has a portfolio of performing loans.

Economic conditions deteriorate sharply, but few borrowers have defaulted yet.

Why can IFRS 9 require a higher impairment allowance before actual defaults occur?`,
      options: [
        'Because expected credit loss incorporates forward-looking expected losses rather than waiting only for incurred defaults.',
        'Because all loans must be written off whenever GDP declines.',
        'Because interest income must always be suspended immediately.',
        'Because IFRS 9 measures all loans at fair value through profit or loss.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. IFRS 9 uses expected credit-loss principles and incorporates forward-looking information. Why not B: deterioration does not automatically mean write-off. Why not C: interest recognition depends on the asset and credit stage. Why not D: classification depends on business model and contractual cash-flow characteristics.'
    },

    {
      id: 'if-08',
      type: 'mcq',
      title: 'IAS 36 — Impairment',
      difficulty: 'medium',
      points: 5,
      prompt: `A cash-generating unit has:

{{diagram}}

Carrying amount: $42m
Value in use: $35m
Fair value less costs of disposal: $37m

What is the impairment loss?`,
      diagram: `flowchart LR
  CA["Carrying amount<br/><b>$42m</b>"] --> T["Impairment test"]
  VIU["Value in use<br/><b>$35m</b>"] --> T
  FVLCD["FVLCD<br/><b>$37m</b>"] --> T
  T --> RA["Recoverable amount<br/><b>Higher of VIU / FVLCD</b>"]
  classDef calc fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class CA,VIU,FVLCD,T,RA calc;`,
      options: [
        '$5m',
        '$7m',
        '$42m',
        '$2m',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Recoverable amount is the higher of $35m and $37m = $37m. Impairment is $42m - $37m = $5m. Why not B: that uses value in use instead of recoverable amount. Why not C: that is the carrying amount. Why not D: the arithmetic is incorrect.'
    },

    {
      id: 'if-09',
      type: 'mcq',
      title: 'Goodwill Impairment',
      difficulty: 'medium',
      points: 5,
      prompt: `A company recognizes goodwill in an acquisition.

Which subsequent accounting treatment is generally appropriate under IFRS?`,
      options: [
        'Amortize goodwill over ten years and do not test for impairment.',
        'Keep goodwill unchanged unless the acquired subsidiary is sold.',
        'Do not routinely amortize goodwill; allocate it appropriately for impairment testing and test as required.',
        'Revalue goodwill upward each year based on management expectations.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Under IFRS, goodwill is not amortized but is subject to impairment testing. Why not A: routine amortization is not the IFRS model. Why not B: impairment testing is required before disposal if indicators/annual requirements apply. Why not D: internally generated increases in goodwill are not recognized through upward revaluation.'
    },

    {
      id: 'if-10',
      type: 'mcq',
      title: 'Fair Value Hierarchy',
      difficulty: 'medium',
      points: 5,
      prompt: `A company owns publicly traded shares with an unadjusted quoted price in an active market at the measurement date.

Which fair-value input level is strongest?`,
      options: [
        'Level 3, because management still chooses when to sell.',
        'Level 2, because shares are financial instruments.',
        'Historical cost, because active-market prices are too volatile.',
        'Level 1, because an unadjusted quoted price exists for an identical asset in an active market.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Level 1 inputs are quoted prices in active markets for identical assets or liabilities. Why not A: Level 3 relies on significant unobservable inputs. Why not B: Level 2 uses observable inputs other than Level 1 quoted prices. Why not C: fair value hierarchy is not historical-cost hierarchy.'
    },

    {
      id: 'if-11',
      type: 'mcq',
      title: 'IAS 12 — Deferred Tax',
      difficulty: 'medium',
      points: 5,
      prompt: `An asset has:

Accounting carrying amount: $10m
Tax base: $7m
Tax rate: 25%

Assume the difference creates a taxable temporary difference.

What deferred tax liability arises?`,
      options: [
        '$750k',
        '$2.5m',
        '$1.75m',
        '$3.0m',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Taxable temporary difference = $10m - $7m = $3m. At 25%, the deferred tax liability is $750k. Why not B: that applies the tax rate to the full carrying amount. Why not C: that applies 25% to the tax base. Why not D: that is the temporary difference before tax effect.'
    },

    {
      id: 'if-12',
      type: 'mcq',
      title: 'Consolidation — Control',
      difficulty: 'medium',
      points: 5,
      prompt: `Investor P owns 48% of Company S.

The remaining shares are widely dispersed, P has substantive rights over relevant activities, and in practice P directs key operating and financing decisions.

What is the strongest IFRS conclusion?`,
      options: [
        'P can never control S because ownership is below 50%.',
        'Control may exist even below 50% if P has power, exposure to variable returns, and ability to use power to affect those returns.',
        'S must be accounted for only as inventory.',
        'Control exists only when P receives dividends.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. IFRS 10 control is not based solely on majority ownership; power, returns, and the linkage between them matter. Why not A: de facto control can exist below 50%. Why not C: the investment classification is unrelated to inventory. Why not D: dividend receipt alone does not establish control.'
    },

    {
      id: 'if-13',
      type: 'mcq',
      title: 'Intercompany Elimination',
      difficulty: 'hard',
      points: 5,
      prompt: `Parent sells inventory to Subsidiary for $1.5m.

The inventory cost Parent $1.0m.
At year-end, 40% of the inventory remains unsold by Subsidiary.

What unrealized profit should generally be eliminated on consolidation?`,
      options: [
        '$500k',
        '$200k',
        '$600k',
        '$1.5m',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Intercompany profit is $500k. Forty percent remains unrealized externally, so $500k × 40% = $200k should be eliminated. Why not A: that eliminates profit on all inventory, including items sold externally. Why not C: that exceeds total intercompany profit. Why not D: that eliminates revenue rather than unrealized profit.'
    },

    {
      id: 'if-14',
      type: 'mcq',
      title: 'Events After Reporting Period',
      difficulty: 'hard',
      points: 5,
      prompt: `At December 31, a major customer was already in severe financial difficulty.

On January 20, before financial statements are authorized, the customer enters bankruptcy and confirms the receivable was impaired at year-end.

What is the strongest treatment?`,
      options: [
        'Treat it only as a non-adjusting event because bankruptcy happened after year-end.',
        'Ignore it because the customer had not defaulted by December 31.',
        'Adjust the year-end financial statements because the bankruptcy provides additional evidence about conditions existing at the reporting date.',
        'Recognize the loss in the next reporting period only.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The subsequent bankruptcy provides evidence of a condition already existing at year-end, making it an adjusting event. Why not A: timing alone does not determine classification. Why not B: financial difficulty already existed. Why not D: the impairment belongs to the year-end period if the evidence relates to conditions then.'
    },

    {
      id: 'if-15',
      type: 'mcq',
      title: 'Materiality',
      difficulty: 'hard',
      points: 5,
      prompt: `A classification error is only 0.3% of profit.

However, correcting it would cause a regulated capital ratio to fall below a required threshold.

What is the strongest materiality conclusion?`,
      options: [
        'The item is automatically immaterial because it is below 1% of profit.',
        'Materiality depends only on absolute dollar value.',
        'The error should be ignored because it does not affect cash.',
        'The error may be material because qualitative consequences can influence users even when the amount is quantitatively small.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Materiality depends on nature and context as well as size. Why not A: there is no universal percentage threshold. Why not B: qualitative factors matter. Why not C: non-cash misstatements can still influence decisions.'
    },

    {
      id: 'if-16',
      type: 'mcq',
      title: 'OCI vs Profit or Loss',
      difficulty: 'hard',
      points: 5,
      prompt: `A finance team proposes sending every unrealized fair-value movement to OCI.

What is the strongest response?`,
      options: [
        'Correct, because OCI is designed for all unrealized gains and losses.',
        'Incorrect; whether an item goes to OCI or profit or loss depends on the specific IFRS classification and measurement requirements.',
        'Correct only when management prefers lower earnings volatility.',
        'Incorrect because OCI is used only for cash-flow statements.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Presentation in OCI versus profit or loss is determined by applicable standards, not simply whether a gain/loss is unrealized. Why not A: many unrealized items still go through profit or loss. Why not C: management preference does not determine classification. Why not D: OCI is part of comprehensive income reporting, not the cash-flow statement.'
    },

    {
      id: 'if-17',
      type: 'mcq',
      title: 'IFRS vs US GAAP — Inventory',
      difficulty: 'hard',
      points: 5,
      prompt: `A multinational uses LIFO for a US reporting package and wants to use the same inventory-costing method in its IFRS financial statements.

What is the strongest conclusion?`,
      options: [
        'LIFO is permitted under both IFRS and US GAAP.',
        'LIFO is prohibited under US GAAP but permitted under IFRS.',
        'LIFO is prohibited under IFRS even though it may be permitted under US GAAP.',
        'Inventory-costing methods are never governed by accounting standards.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. IFRS does not permit LIFO, while US GAAP does. Why not A or B: they reverse or ignore the key difference. Why not D: inventory-costing methods are explicitly governed by accounting standards.'
    },

    {
      id: 'if-18',
      type: 'mcq',
      title: 'Change in Accounting Estimate',
      difficulty: 'hard',
      points: 5,
      prompt: `A machine was originally expected to have a 10-year useful life.

After three years, new engineering information indicates the remaining useful life should be only four years.

What is the strongest treatment?`,
      options: [
        'Treat the change prospectively as a change in estimate and update depreciation for current and future periods.',
        'Restate all prior periods as an error automatically.',
        'Ignore the new information until the asset is disposed.',
        'Reverse all historical depreciation.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Changes in estimates resulting from new information are generally accounted for prospectively. Why not B: this is not necessarily an error. Why not C: ignoring reliable new information would misstate depreciation. Why not D: prior depreciation based on the earlier reasonable estimate is not simply reversed.'
    },

    {
      id: 'if-19',
      type: 'mcq',
      title: 'Disclosure Quality',
      difficulty: 'hard',
      points: 5,
      prompt: `A company has significant estimation uncertainty over impairment, litigation, and valuation of private investments.

Its draft notes contain only generic boilerplate language.

What is the strongest reporting improvement?`,
      options: [
        'Remove the disclosures because uncertainty may confuse investors.',
        'Provide entity-specific information about key judgments, assumptions, estimation uncertainty, sensitivity where relevant, and the nature of significant risks.',
        'Repeat the accounting-policy wording from the standards without tailoring it.',
        'Disclose only the final numbers and omit assumptions.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Useful disclosures explain entity-specific judgments and uncertainty rather than merely repeating generic language. Why not A: significant uncertainty often increases disclosure importance. Why not C: boilerplate does not help users understand the entity. Why not D: assumptions can be essential to interpreting reported amounts.'
    },

    {
      id: 'if-20',
      type: 'mcq',
      title: 'Integrated Reporting Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `Before financial statements are finalized, the controller sees:

{{diagram}}

Which response is strongest?`,
      diagram: `flowchart TB
  REV["Revenue cutoff issue<br/><b>$3.2m</b>"] --> J["Reporting judgment"]
  IMP["Potential CGU impairment<br/><b>$5.0m</b>"] --> J
  ECL["ECL model not refreshed"] --> J
  TAX["Deferred-tax difference<br/><b>$1.1m</b>"] --> J
  PROV["Legal provision unsupported"] --> J
  IC["Intercompany profit not eliminated"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class REV,IMP,ECL,TAX,PROV,IC,J warning;`,
      options: [
        'Finalize the statements because no single issue necessarily changes the audit opinion.',
        'Resolve the revenue, impairment, ECL, tax, provision, and consolidation issues using appropriate evidence and accounting requirements before treating the statements as complete.',
        'Post one net journal for the combined estimated impact.',
        'Move all uncertain items to OCI.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The issues arise under different standards and require separate, evidence-based resolution before final reporting. Why not A: unresolved material issues cannot be ignored merely because audit consequences are uncertain. Why not C: netting unrelated issues hides their accounting treatment. Why not D: OCI classification is not a catch-all for uncertainty.'
    },
  ],
};
