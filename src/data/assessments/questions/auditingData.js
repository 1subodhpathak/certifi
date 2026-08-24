import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const auditingData = {
  id: ASSESSMENT_TYPES.auditing,
  title: 'Auditing & Assurance Professional Certification',
  shortTitle: 'Auditing',
  category: 'Accounting & Tax',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical audit judgment across risk assessment, materiality, assertions, internal controls, substantive procedures, audit evidence, sampling, fraud, journal testing, accounting estimates, going concern, subsequent events, IT controls, independence, reporting, and documentation.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Several questions include Mermaid diagrams, audit trails, risk schedules, or evidence scenarios. Read the full scenario before choosing. Options are intentionally close, so select the answer that best reflects audit standards, evidence quality, and professional judgment. No negative marking.',

  questions: [
    {
      id: 'au-01',
      type: 'mcq',
      title: 'Audit Objective',
      difficulty: 'easy',
      points: 5,
      prompt: `A new audit committee member asks what the external auditor is actually trying to achieve.

Which answer is strongest?`,
      options: [
        'Detect every error and fraud in the company.',
        'Provide reasonable assurance that the financial statements are free from material misstatement and express an opinion under the applicable reporting framework.',
        'Prepare the company’s financial statements and approve management estimates.',
        'Guarantee the company will remain solvent for the next year.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The external auditor provides reasonable assurance and expresses an opinion on the financial statements. Why not A: an audit is not designed to detect every error or fraud. Why not C: financial statement preparation is management’s responsibility. Why not D: auditors do not guarantee future solvency.'
    },

    {
      id: 'au-02',
      type: 'mcq',
      title: 'Reasonable Assurance',
      difficulty: 'easy',
      points: 5,
      prompt: `Why can an auditor not provide absolute assurance even after a high-quality audit?`,
      options: [
        'Because auditing standards prohibit detailed testing.',
        'Because management is responsible for choosing the audit opinion.',
        'Because judgment, sampling, estimation uncertainty, collusion, and inherent control limitations mean some detection risk remains.',
        'Because external confirmations are never reliable.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Audit evidence reduces risk to an acceptably low level but does not eliminate it. Why not A: standards require sufficient appropriate evidence. Why not B: the auditor forms the opinion. Why not D: external confirmations can be highly reliable when properly controlled.'
    },

    {
      id: 'au-03',
      type: 'mcq',
      title: 'Professional Skepticism',
      difficulty: 'easy',
      points: 5,
      prompt: `Management explains a $2.8m year-end revenue spike by saying, "December is always strong."

The explanation is not supported by order or shipping data.

What is the strongest audit response?`,
      options: [
        'Accept the explanation because management knows the business best.',
        'Assume fraud occurred and issue a modified opinion immediately.',
        'Ignore the variance if annual revenue is still within budget.',
        'Maintain professional skepticism and obtain corroborating evidence through targeted revenue and cutoff testing.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Skepticism requires a questioning mind and corroboration when explanations are unsupported. Why not A: inquiry alone is weak evidence. Why not B: suspicion requires investigation, not immediate conclusion. Why not C: budget agreement does not validate transaction-level cutoff.'
    },

    {
      id: 'au-04',
      type: 'mcq',
      title: 'Audit Risk Model',
      difficulty: 'easy',
      points: 5,
      prompt: `A client has highly subjective fair-value estimates and weak review controls.

How should the auditor generally respond?`,
      options: [
        'Recognize higher inherent and control risk and reduce acceptable detection risk through stronger audit procedures.',
        'Increase detection risk because the client is already high risk.',
        'Rely more heavily on management representations.',
        'Reduce testing because weak controls make controls testing unnecessary.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Higher inherent/control risk requires more persuasive audit evidence and therefore lower acceptable detection risk. Why not B: increasing detection risk would increase overall audit risk. Why not C: representations cannot replace necessary evidence. Why not D: substantive work generally increases when control reliance is weak.'
    },

    {
      id: 'au-05',
      type: 'mcq',
      title: 'Materiality Judgment',
      difficulty: 'easy',
      points: 5,
      prompt: `A misstatement is only 0.4% of profit, but correcting it would cause a debt covenant breach.

What is the strongest materiality conclusion?`,
      options: [
        'The misstatement is automatically immaterial because it is below 1%.',
        'The misstatement may be material because qualitative consequences can influence financial statement users.',
        'Only fraud-related misstatements can be qualitatively material.',
        'The item is immaterial if it has no cash impact.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Materiality depends on nature and context as well as size. Why not A: there is no universal safe percentage. Why not C: qualitative materiality is broader than fraud. Why not D: non-cash items can still influence users.'
    },

    {
      id: 'au-06',
      type: 'mcq',
      title: 'Existence vs Completeness',
      difficulty: 'medium',
      points: 5,
      prompt: `The auditor is concerned that Accounts Payable may be understated.

Which testing direction is strongest?`,
      options: [
        'Select recorded payables and vouch them back to supplier invoices.',
        'Trace post-year-end disbursements, unmatched receiving reports, and supplier statements into the year-end payable records.',
        'Confirm only customer receivables.',
        'Inspect only the final trial balance.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. To test completeness, the auditor starts with evidence that obligations may exist and traces into the records. Why not A: vouching recorded balances is more directly relevant to existence/occurrence. Why not C: customers do not support payables. Why not D: the trial balance alone cannot identify omitted liabilities.'
    },

    {
      id: 'au-07',
      type: 'mcq',
      title: 'Revenue Cutoff',
      difficulty: 'medium',
      points: 5,
      prompt: `At year-end, the auditor finds:

{{diagram}}

What is the strongest audit concern?`,
      diagram: `flowchart LR
  O["Customer order<br/><b>Dec 29</b>"] --> I["Invoice<br/><b>Dec 30</b>"]
  I --> S["Goods shipped<br/><b>Jan 3</b>"]
  S --> C["Control transfers<br/><b>Jan 3</b>"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class I,S,C warning;`,
      options: [
        'Revenue may be recorded in the wrong period if it was recognized before control transferred.',
        'The invoice date proves December revenue automatically.',
        'The sale should be ignored permanently because shipping happened in January.',
        'Only inventory valuation is affected.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Revenue cutoff depends on when the relevant recognition criteria are met, not simply invoice date. Why not B: invoicing alone is insufficient. Why not C: the sale may be valid in January. Why not D: both revenue and inventory/cost recognition may be affected.'
    },

    {
      id: 'au-08',
      type: 'mcq',
      title: 'Control Reliance',
      difficulty: 'medium',
      points: 5,
      prompt: `The auditor plans to rely on a control requiring independent approval of all purchases above $100,000.

A sample shows the control was frequently bypassed during the year.

What is the strongest response?`,
      options: [
        'Continue relying on the control because the policy exists.',
        'Reduce substantive testing because the control deficiency is already known.',
        'Reassess control reliance and increase or redesign substantive procedures for the affected assertion.',
        'Ignore the bypasses if management says they were urgent.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. If an important control did not operate effectively, planned reliance should be reconsidered and substantive work adjusted. Why not A: documented design is not the same as operating effectiveness. Why not B: weak controls generally require more substantive assurance. Why not D: urgency does not establish control effectiveness.'
    },

    {
      id: 'au-09',
      type: 'mcq',
      title: 'External Confirmation',
      difficulty: 'medium',
      points: 5,
      prompt: `Management asks to receive customer confirmation responses first and forward them to the auditor.

What is the strongest audit response?`,
      options: [
        'Agree because management can help speed up the process.',
        'Allow it only for small balances.',
        'Use management-forwarded responses if they match the ledger.',
        'Maintain auditor control over the confirmation process and receive responses directly from the independent third party where appropriate.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Auditor control over external confirmations protects evidence reliability. Why not A/C: management interception weakens independence of the evidence. Why not B: balance size does not remove the control principle.'
    },

    {
      id: 'au-10',
      type: 'mcq',
      title: 'Inventory Observation',
      difficulty: 'medium',
      points: 5,
      prompt: `During the year-end inventory count, warehouse staff pre-fill count sheets using system quantities and make few independent counts.

What is the strongest auditor concern?`,
      options: [
        'The count procedure may be biased toward recorded quantities and may not provide reliable evidence of actual stock.',
        'The procedure is stronger because it saves time.',
        'There is no issue if inventory is insured.',
        'The auditor should simply accept the final signed count sheet.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Pre-filled quantities can anchor counters and reduce the independence of the physical count. Why not B: efficiency cannot replace control quality. Why not C: insurance does not prove existence. Why not D: the auditor should observe procedures and perform test counts.'
    },

    {
      id: 'au-11',
      type: 'mcq',
      title: 'Substantive Analytical Procedures',
      difficulty: 'medium',
      points: 5,
      prompt: `Gross margin was historically 34%-36%.

This year it falls to 24%, while sales volumes are unchanged.

What is the strongest analytical response?`,
      options: [
        'Conclude there is a material misstatement solely from the ratio.',
        'Develop an expectation, investigate plausible drivers such as pricing, cost, mix, returns, or cutoff, and corroborate explanations with evidence.',
        'Ignore the movement because analytical procedures are optional.',
        'Increase reported margin in the audit working papers to historical levels.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Analytical procedures identify unusual relationships that require investigation and corroboration. Why not A: the variance signals risk but does not itself prove misstatement. Why not C: analytics are valuable audit tools. Why not D: auditors do not adjust reported figures without evidence and client correction.'
    },

    {
      id: 'au-12',
      type: 'mcq',
      title: 'Audit Sampling',
      difficulty: 'medium',
      points: 5,
      prompt: `An expense population contains 50,000 transactions.

A small number of individually material transactions and a large number of routine low-value items are present.

What is the strongest sampling strategy?`,
      options: [
        'Select only the smallest transactions because they are more numerous.',
        'Test every transaction.',
        'Test individually significant/high-risk items and use an appropriate representative sampling approach for the remaining population.',
        'Let management choose the sample because they know where errors are unlikely.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. High-value or high-risk items can be tested separately, while the remaining population may be sampled appropriately. Why not A: that ignores material risk. Why not B: 100% testing is not always necessary. Why not D: management-selected samples introduce bias.'
    },

    {
      id: 'au-13',
      type: 'mcq',
      title: 'Fraud Risk',
      difficulty: 'hard',
      points: 5,
      prompt: `The audit team identifies:

- aggressive earnings targets
- executive bonuses tied to EBITDA
- weak period-end review controls
- unusual manual entries in the final week

What is the strongest audit response?`,
      options: [
        'Increase professional skepticism, assess fraud risks, test relevant controls where appropriate, and perform targeted substantive and journal-entry procedures.',
        'Reduce testing because strong growth lowers fraud risk.',
        'Rely primarily on management representations.',
        'Issue an adverse opinion before completing audit procedures.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The facts indicate pressure, opportunity, and potential management override, requiring a stronger fraud response. Why not B: growth can increase pressure rather than reduce risk. Why not C: representations alone are insufficient. Why not D: an opinion follows evidence, not preliminary risk indicators.'
    },

    {
      id: 'au-14',
      type: 'mcq',
      title: 'Journal Entry Testing',
      difficulty: 'hard',
      points: 5,
      prompt: `The auditor extracts 18,000 manual journals.

Which entries are generally most relevant for targeted fraud-focused testing?`,
      options: [
        'Only journals with round-dollar amounts.',
        'Only journals posted by junior accountants.',
        'Entries with unusual timing, users, accounts, descriptions, combinations, or amounts inconsistent with normal business patterns.',
        'Only recurring depreciation journals.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Journal testing should use risk characteristics rather than simplistic filters. Why not A/B: those may be indicators but are too narrow. Why not D: routine recurring entries may be lower risk unless other factors make them unusual.'
    },

    {
      id: 'au-15',
      type: 'mcq',
      title: 'Accounting Estimate Bias',
      difficulty: 'hard',
      points: 5,
      prompt: `Management has revised several estimates in ways that individually appear reasonable but consistently increase profit.

What is the strongest auditor response?`,
      options: [
        'Accept each estimate separately because none is individually unreasonable.',
        'Evaluate the estimates collectively for possible management bias and consider whether the pattern affects risk assessment and the financial statements.',
        'Reverse all estimates automatically.',
        'Ignore the pattern unless fraud is proven.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A directional pattern across estimates may indicate management bias even when individual estimates fall within reasonable ranges. Why not A: aggregate bias matters. Why not C: auditors do not impose arbitrary reversals. Why not D: risk assessment does not require proof of fraud.'
    },

    {
      id: 'au-16',
      type: 'mcq',
      title: 'Going Concern',
      difficulty: 'hard',
      points: 5,
      prompt: `A client has:

{{diagram}}

Management forecasts continued operation based mainly on a refinancing that has not yet been approved.

What is the strongest audit response?`,
      diagram: `flowchart TB
  C["Cash runway<br/><b>3 months</b>"] --> J["Going concern assessment"]
  D["Debt maturity<br/><b>4 months</b>"] --> J
  L["Operating losses<br/><b>18 months</b>"] --> J
  R["Refinancing<br/><b>Not committed</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class C,D,L,R,J warning;`,
      options: [
        'Conclude there is no going-concern issue because management has a plan.',
        'Evaluate the feasibility of management’s plans, obtain evidence about refinancing and forecasts, assess material uncertainty, and evaluate related disclosures.',
        'Guarantee the refinancing by obtaining a management representation.',
        'Issue a clean opinion immediately because the company is still trading.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The auditor must evaluate management’s assessment and the evidence supporting plans to address liquidity risk. Why not A: a plan without evidence may be insufficient. Why not C: representations do not guarantee funding. Why not D: continued trading does not eliminate material uncertainty.'
    },

    {
      id: 'au-17',
      type: 'mcq',
      title: 'Subsequent Events',
      difficulty: 'hard',
      points: 5,
      prompt: `A major customer was in severe financial difficulty at year-end.

Before the audit report is signed, the customer enters bankruptcy.

What is the strongest audit conclusion?`,
      options: [
        'The bankruptcy may provide additional evidence about conditions existing at year-end and may require adjustment to the financial statements.',
        'It is always a non-adjusting event because the bankruptcy date is after year-end.',
        'The auditor should ignore it because fieldwork was substantially complete.',
        'The event affects only next year’s financial statements.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Subsequent events can provide evidence about conditions existing at the reporting date and may require adjustment. Why not B: classification depends on the underlying condition, not just event date. Why not C: the auditor considers subsequent events through the relevant reporting date. Why not D: some events affect the current period.'
    },

    {
      id: 'au-18',
      type: 'mcq',
      title: 'IT General Controls',
      difficulty: 'hard',
      points: 5,
      prompt: `The financial ERP has automated controls the auditor wants to rely on.

However:
- terminated users remain active
- developers can move code directly to production
- privileged access is not reviewed

What is the strongest audit implication?`,
      options: [
        'Automated controls remain reliable because application logic has not changed.',
        'ITGC weaknesses may undermine reliance on automated controls, so the auditor should reassess control reliance and design alternative procedures.',
        'Only cybersecurity auditors need to consider these issues.',
        'The auditor should ignore access controls if financial totals reconcile.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Weak access and change-management controls can undermine the integrity of automated financial controls. Why not A: application logic can be altered or bypassed. Why not C: financial-statement auditors must consider relevant IT risks. Why not D: reconciliation alone does not establish control reliability.'
    },

    {
      id: 'au-19',
      type: 'mcq',
      title: 'Modified Opinion',
      difficulty: 'hard',
      points: 5,
      prompt: `The auditor concludes inventory is overstated by $6m.

The misstatement is material to the financial statements but confined to inventory and cost of sales and is not pervasive.

Management refuses to correct it.

Which opinion is generally most appropriate?`,
      options: [
        'Unmodified opinion.',
        'Disclaimer of opinion.',
        'Adverse opinion.',
        'Qualified opinion.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. A material but not pervasive misstatement generally leads to a qualified opinion. Why not A: an uncorrected material misstatement prevents an unmodified opinion. Why not B: disclaimer relates primarily to inability to obtain sufficient evidence with potentially pervasive effects. Why not C: adverse opinion is generally for material and pervasive misstatements.'
    },

    {
      id: 'au-20',
      type: 'mcq',
      title: 'Integrated Audit Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `Near audit completion, the engagement partner sees:

{{diagram}}

Which response is strongest?`,
      diagram: `flowchart TB
  R["Revenue cutoff exceptions"] --> J["Final audit judgment"]
  E["Estimate bias indicators"] --> J
  IT["Weak ITGCs"] --> J
  GC["Going-concern uncertainty"] --> J
  U["Uncorrected misstatements"] --> J
  DOC["Incomplete key documentation"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class R,E,IT,GC,U,DOC,J warning;`,
      options: [
        'Issue the report because most planned audit hours are complete.',
        'Evaluate the unresolved issues individually and collectively, obtain sufficient appropriate evidence, assess disclosures and misstatements, complete documentation, and determine the appropriate audit opinion only afterward.',
        'Net all issues into one estimated adjustment.',
        'Rely on the management representation letter to close the remaining gaps.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Audit completion requires resolution of evidence, misstatement, disclosure, going-concern, control, and documentation matters before the opinion is finalized. Why not A: hours completed do not determine audit sufficiency. Why not C: unrelated audit issues cannot simply be netted. Why not D: written representations supplement but do not replace other evidence.'
    },
  ],
};
