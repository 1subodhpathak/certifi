import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const margErpData = {
  id: ASSESSMENT_TYPES.marg_erp,
  title: 'Marg ERP Inventory & Accounts Professional Certification',
  shortTitle: 'Marg ERP',
  category: 'Accounting',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical Marg ERP judgment across item masters, purchase and sales flows, inventory, batch and expiry control, GST, receivables, payables, margin analysis, dispatch, stock reconciliation, access control, reporting, and month-end close.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Several questions include Mermaid diagrams, inventory flows, margin schedules, or reconciliation views. Read each scenario carefully. Options are intentionally close, so choose the answer that is both technically correct and operationally sound. No negative marking.',

  questions: [
    {
      id: 'mg-01',
      type: 'mcq',
      title: 'ERP Fit',
      difficulty: 'easy',
      points: 5,
      prompt: `A pharma distributor needs billing, purchase tracking, GST, batch control, expiry monitoring, receivables, and inventory reporting in one workflow.

Why is an ERP such as Marg especially useful in this environment?`,
      options: [
        'Because it removes the need for accounting and inventory controls.',
        'Because it links billing, stock, taxation, due balances, and distribution operations in one transaction flow.',
        'Because it is mainly an invoice-printing tool.',
        'Because it eliminates the need for physical stock verification.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Marg ERP is useful in inventory-heavy businesses because operational and accounting flows can be integrated. Why not A: ERP supports controls; it does not eliminate them. Why not C: billing is only one component. Why not D: system stock still needs periodic physical validation.'
    },

    {
      id: 'mg-02',
      type: 'mcq',
      title: 'Item Master Design',
      difficulty: 'easy',
      points: 5,
      prompt: `A distributor has duplicate item codes for the same medicine, inconsistent GST rates, and missing batch/expiry settings.

What is the strongest first action?`,
      options: [
        'Continue billing and clean the items after year-end.',
        'Standardize item masters, tax mapping, units, batch settings, expiry controls, and opening stock before more transactions are processed.',
        'Create more item codes so each salesperson can use their preferred version.',
        'Move all products into one generic stock item.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Item-master quality drives tax, stock, pricing, batch tracking, margins, and reports. Why not A: weak masters create repeated downstream errors. Why not C: duplicates worsen control. Why not D: generic items destroy product-level stock and margin visibility.'
    },

    {
      id: 'mg-03',
      type: 'mcq',
      title: 'Purchase Flow',
      difficulty: 'easy',
      points: 5,
      prompt: `A supplier delivers stock worth ₹600,000 on 30-day credit terms.

What should a clean purchase process achieve?`,
      options: [
        'Increase stock, record the supplier liability, capture tax and cost details, and preserve the purchase trail.',
        'Only increase stock quantity because no cash has been paid.',
        'Only create a bank payment entry.',
        'Record the purchase as customer receivable.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A credit purchase affects inventory/cost records and Accounts Payable even before cash is paid. Why not B: the liability and tax impact would be missing. Why not C: cash has not moved yet. Why not D: a supplier transaction does not create customer receivable.'
    },

    {
      id: 'mg-04',
      type: 'mcq',
      title: 'Sales Invoice Control',
      difficulty: 'easy',
      points: 5,
      prompt: `A sales invoice uses an outdated selling price and the wrong GST rate.

What is the strongest reason to stop and correct it before dispatch?`,
      options: [
        'The invoice may have the wrong font.',
        'The error can affect customer billing, tax compliance, product margin, and stock/accounting records simultaneously.',
        'Only the customer ledger is affected.',
        'The issue can always be fixed at year-end with one journal entry.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Sales transactions can affect tax, receivables, revenue, margin, and stock together. Why not A: formatting is secondary. Why not C: multiple accounting and operational records are affected. Why not D: late correction can create customer and statutory problems.'
    },

    {
      id: 'mg-05',
      type: 'mcq',
      title: 'Batch and Expiry Control',
      difficulty: 'easy',
      points: 5,
      prompt: `A warehouse has two batches of the same medicine:

{{diagram}}

Which dispatch approach is strongest where business policy permits?`,
      diagram: `flowchart LR
  B1["Batch A<br/><b>Expiry: 30 days</b><br/>Qty: 120"] --> D["Dispatch decision"]
  B2["Batch B<br/><b>Expiry: 11 months</b><br/>Qty: 300"] --> D
  D --> F["Prioritize appropriate near-expiry stock<br/>without breaching customer / regulatory rules"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class B1,D,F warning;`,
      options: [
        'Always dispatch the newest batch first so customers receive longer shelf life.',
        'Use controlled FEFO-style logic where appropriate, considering expiry, customer requirements, and regulatory constraints.',
        'Ignore expiry because all stock has the same item code.',
        'Write off Batch A immediately even if it is still saleable.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Expiry-sensitive inventory should be managed by batch and shelf life, often using FEFO principles subject to business and regulatory requirements. Why not A: newest-first can increase expiry losses. Why not C: batch expiry is a key control attribute. Why not D: saleable stock should not be written off without basis.'
    },

    {
      id: 'mg-06',
      type: 'mcq',
      title: 'Margin Erosion',
      difficulty: 'medium',
      points: 5,
      prompt: `Sales increased 15%, but gross margin fell from 18% to 11%.

{{diagram}}

Which review is strongest?`,
      diagram: `flowchart TB
  S["Sales<br/><b>+15%</b>"] --> J["Margin review"]
  P["Purchase cost<br/><b>+9%</b>"] --> J
  D["Discounts<br/><b>+28%</b>"] --> J
  M["Gross margin<br/><b>18% → 11%</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class D,M,J warning;`,
      options: [
        'Conclude performance improved because sales grew.',
        'Investigate purchase-cost changes, discounting, pricing, mix, schemes, and product-level profitability.',
        'Increase sales volume further without reviewing unit economics.',
        'Ignore margin because distributors mainly manage turnover.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Higher revenue with lower margin can indicate weak pricing, adverse mix, higher cost, or excessive discounting. Why not A: sales growth alone can hide weaker economics. Why not C: more volume can worsen profit if margins remain weak. Why not D: margin is central to distribution profitability.'
    },

    {
      id: 'mg-07',
      type: 'mcq',
      title: 'Stock Variance',
      difficulty: 'medium',
      points: 5,
      prompt: `Marg ERP shows 2,480 units of an item.
Physical count shows 2,190 units.

The gap has increased for three months.

What is the strongest response?`,
      options: [
        'Write off the difference immediately each month.',
        'Investigate purchase, sale, return, transfer, breakage, expiry, and user-entry records before posting a controlled adjustment.',
        'Change the physical count sheet to 2,480 units.',
        'Block all sales until year-end.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Recurring inventory variance can indicate process errors, shrinkage, unrecorded movements, or expiry/write-off problems. Why not A: repeated write-offs hide the root cause. Why not C: records must reflect actual stock. Why not D: an indefinite sales block is disproportionate.'
    },

    {
      id: 'mg-08',
      type: 'mcq',
      title: 'GST Reconciliation',
      difficulty: 'medium',
      points: 5,
      prompt: `Marg ERP reports GST payable of ₹3.10m.
The draft statutory return shows ₹2.91m.

What is the strongest next step?`,
      options: [
        'Submit the lower return amount because the portal should override the ERP.',
        'Reconcile the ₹190,000 difference by transaction, item tax setup, return, adjustment, and period before filing.',
        'Post ₹190,000 to Miscellaneous Expense.',
        'Ignore the difference because it is less than 10%.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Tax output should reconcile to source transactions before filing. Why not A: either source may contain errors. Why not C: a plug entry hides the issue. Why not D: statutory differences need investigation regardless of a simplistic percentage threshold.'
    },

    {
      id: 'mg-09',
      type: 'mcq',
      title: 'Collections Aging',
      difficulty: 'medium',
      points: 5,
      prompt: `Receivable aging shows:

Current: ₹18L
31-60 days: ₹9L
61-90 days: ₹6L
90+ days: ₹14L

What is the strongest management action?`,
      options: [
        'Prioritize the 90+ day balances for collection, dispute review, credit-risk assessment, and escalation.',
        'Ignore aging because sales are still growing.',
        'Convert overdue receivables into inventory.',
        'Delete old customer accounts.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Old receivables create working-capital and credit risk and need active follow-up. Why not B: growth does not guarantee collection. Why not C: receivables and inventory are different assets. Why not D: deletion does not resolve dues.'
    },

    {
      id: 'mg-10',
      type: 'mcq',
      title: 'Dispatch vs Billing Mismatch',
      difficulty: 'medium',
      points: 5,
      prompt: `Warehouse dispatch records show 1,000 units shipped.
Sales invoices show only 920 units billed.

Customer claims show shortages of 30 units.

What is the strongest response?`,
      options: [
        'Treat the three numbers as separate issues because different teams own them.',
        'Perform a cross-functional reconciliation across order, picking, dispatch, billing, and customer claims to identify the 80-unit billing gap and the 30-unit shortage claim.',
        'Increase billed quantity to 1,000 without checking documents.',
        'Reduce dispatch quantity in the system to 920.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Distribution issues often span warehouse, billing, and customer-service records and require end-to-end reconciliation. Why not A: siloed review can miss the common cause. Why not C: billing should follow validated shipment evidence. Why not D: changing records to force agreement is not investigation.'
    },

    {
      id: 'mg-11',
      type: 'mcq',
      title: 'Supplier Payable Planning',
      difficulty: 'medium',
      points: 5,
      prompt: `A distributor has limited cash and multiple supplier dues.

Which approach is strongest?`,
      options: [
        'Pay all suppliers strictly by invoice size.',
        'Prioritize due and critical suppliers while considering disputes, available discounts, business continuity, and liquidity.',
        'Delay every payment until customers complain.',
        'Pay disputed invoices before validated invoices.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Payable planning should combine due date, criticality, dispute status, discounts, and liquidity. Why not A: invoice size alone is not enough. Why not C: indiscriminate delay can disrupt supply. Why not D: disputed amounts should be resolved first.'
    },

    {
      id: 'mg-12',
      type: 'mcq',
      title: 'Near-Expiry Inventory',
      difficulty: 'hard',
      points: 5,
      prompt: `A pharma distributor has ₹2.4m of inventory expiring within 60 days.

Average monthly sales for those SKUs are only ₹500k.

What is the strongest interpretation?`,
      options: [
        'There is significant expiry/write-off risk, so management should review batch-wise sell-through, returns, transfers, pricing, and procurement immediately.',
        'The stock is safe because it has not expired yet.',
        'Inventory value should be increased because the goods are becoming scarce.',
        'No action is needed until the exact expiry date.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Near-expiry stock that materially exceeds expected sell-through is a clear loss and working-capital risk. Why not B: waiting can remove the opportunity to act. Why not C: nearing expiry usually reduces economic value. Why not D: control should be proactive.'
    },

    {
      id: 'mg-13',
      type: 'mcq',
      title: 'Scheme and Discount Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A salesperson can manually override selling prices and discount schemes without approval.

One month later, product margin falls sharply.

What is the strongest control improvement?`,
      options: [
        'Ban all discounts permanently.',
        'Use controlled price/discount masters, exception thresholds, approval for material overrides, and reporting on override activity.',
        'Allow larger overrides so salespeople can recover margin through volume.',
        'Review discounts only at year-end.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Pricing flexibility can exist within governed limits, approvals, and exception reporting. Why not A: legitimate commercial discounts may be necessary. Why not C: uncontrolled overrides are the problem. Why not D: year-end review is too late.'
    },

    {
      id: 'mg-14',
      type: 'mcq',
      title: 'User Access',
      difficulty: 'hard',
      points: 5,
      prompt: `One user can create suppliers, alter purchase rates, change bank details, post payments, modify GST settings, and adjust stock.

What is the strongest control concern?`,
      options: [
        'The user may see too many menus.',
        'The role violates least privilege and segregation of duties across sensitive accounting and inventory actions.',
        'Only the stock-adjustment access is problematic.',
        'The user should be permanently removed from every finance system.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The user holds multiple incompatible powers that could enable fraud or conceal errors. Why not A: authority, not interface complexity, is the issue. Why not C: several rights are high-risk. Why not D: access should be redesigned, not necessarily eliminated.'
    },

    {
      id: 'mg-15',
      type: 'mcq',
      title: 'Purchase Cost Error',
      difficulty: 'hard',
      points: 5,
      prompt: `A purchase invoice for 1,000 units was entered at ₹920 per unit instead of ₹290.

The goods have not yet been sold.

What is the strongest likely impact?`,
      options: [
        'Inventory and supplier payable may be materially overstated.',
        'Revenue will be overstated.',
        'Receivables will be understated.',
        'GST must always be unaffected.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A purchase-rate error can overstate stock cost and the supplier liability. Why not B: no sale has occurred. Why not C: customer receivables are unrelated. Why not D: tax may also be affected depending on how the transaction is configured, so it should not be assumed unaffected.'
    },

    {
      id: 'mg-16',
      type: 'mcq',
      title: 'Sales Return',
      difficulty: 'hard',
      points: 5,
      prompt: `A retailer returns ₹180,000 of near-expiry goods to the distributor.

What should a proper return workflow preserve?`,
      options: [
        'Customer balance adjustment, sales/return impact, batch-wise stock movement, GST effect, and traceability to the original transaction.',
        'Only a warehouse stock increase.',
        'Only a customer cash refund.',
        'Deletion of the original sales invoice.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. In an inventory-and-tax ERP, returns affect multiple ledgers and batch records simultaneously. Why not B: accounting and tax would remain wrong. Why not C: the customer may not yet have paid. Why not D: deletion destroys the audit trail.'
    },

    {
      id: 'mg-17',
      type: 'mcq',
      title: 'Management Reporting',
      difficulty: 'hard',
      points: 5,
      prompt: `The managing director wants a weekly distribution dashboard.

Which combination is most useful?`,
      options: [
        'Only total sales.',
        'Sales, gross margin, batch/expiry exposure, stock aging, receivable/payable aging, returns, dispatch exceptions, and cash/collection trends.',
        'Only the number of invoices.',
        'A raw voucher dump with no analysis.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Distribution management requires an integrated view of revenue, margin, stock health, working capital, returns, fulfillment, and cash. Why not A: sales alone hide key risks. Why not C: invoice count is too narrow. Why not D: raw data is not decision-ready.'
    },

    {
      id: 'mg-18',
      type: 'mcq',
      title: 'Stock Reconciliation',
      difficulty: 'hard',
      points: 5,
      prompt: `System stock value is ₹18.6m.
Physical inventory value is ₹17.9m.
Near-expiry stock of ₹420k has not been adjusted.

What is the strongest next step?`,
      options: [
        'Write off the full ₹700k difference immediately.',
        'Reconcile quantity and value by SKU/batch, investigate movement and valuation differences, isolate expiry adjustments, and post only supported corrections.',
        'Increase physical stock records to ₹18.6m.',
        'Ignore the difference because it is below 5%.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Stock reconciliation should separate quantity, valuation, timing, and expiry effects before correction. Why not A: the full difference may have multiple causes. Why not C: physical records must reflect actual stock. Why not D: inventory differences require analysis, not an arbitrary percentage rule.'
    },

    {
      id: 'mg-19',
      type: 'mcq',
      title: 'Month-End Close',
      difficulty: 'hard',
      points: 5,
      prompt: `Before month-end close, finance sees:

{{diagram}}

What is the strongest close sequence?`,
      diagram: `flowchart TB
  B["Bank reconciliation"] --> G["GST / tax reconciliation"]
  G --> AR["Receivable & payable review"]
  AR --> ST["Stock / batch / expiry review"]
  ST --> SR["Sales returns & dispatch exceptions"]
  SR --> V["Review unusual vouchers / adjustments"]
  V --> F["Validate reports and close"]
  classDef step fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class B,G,AR,ST,SR,V,F step;`,
      options: [
        'Close first, then investigate inventory and GST next month.',
        'Complete reconciliations and operational exception reviews, post supported corrections, validate reports, then close.',
        'Delete unresolved stock and customer differences.',
        'Review only sales because revenue is the main business metric.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Distribution close quality depends on both accounting and inventory integrity. Why not A: unresolved issues should not knowingly roll forward. Why not C: deletion is not resolution. Why not D: stock, tax, working capital, and margin are all critical.'
    },

    {
      id: 'mg-20',
      type: 'mcq',
      title: 'Integrated Marg ERP Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A controller reviews a Marg ERP environment and finds:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  I["Duplicate item masters"] --> J["Control redesign"]
  E["Near-expiry stock"] --> J
  G["GST differences"] --> J
  D["Dispatch / billing mismatches"] --> J
  AR["Old receivables"] --> J
  M["Margin erosion"] --> J
  A["Excess user access"] --> J
  C["No formal close"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class I,E,G,D,AR,M,A,C,J warning;`,
      options: [
        'Focus only on billing speed because ERP performance is mainly operational.',
        'Establish a governed operating model covering item masters, batch/expiry control, purchase/sales workflows, GST, stock reconciliation, collections, margins, access, and period-end close.',
        'Create a new ERP database immediately and abandon all historical information.',
        'Move all management reporting into spreadsheets and stop using ERP controls.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The weaknesses are systemic across inventory, tax, distribution, working capital, profitability, access, and close governance. Why not A: billing speed alone does not solve control failures. Why not C: a new database does not fix weak processes and may lose history. Why not D: spreadsheets weaken integrated control.'
    },
  ],
};
