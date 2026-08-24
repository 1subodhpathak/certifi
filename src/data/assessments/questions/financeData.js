import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const financeData = {
  id: ASSESSMENT_TYPES.finance,
  title: 'Financial Modeling & Excel Analytics Certification',
  shortTitle: 'Financial Modeling 1',
  category: 'Business Analytics',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical financial modeling and Excel judgment across three-statement models, revenue drivers, working capital, debt, valuation, NPV, IRR, scenario and sensitivity analysis, model architecture, formula design, forecasting, and model controls.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Several questions include Mermaid diagrams, model schedules, sensitivity tables, or Excel scenarios. Read each scenario carefully. Options are intentionally close, so choose the answer that best reflects robust modeling logic, financial reasoning, and spreadsheet control. No negative marking.',

  questions: [
    {
      id: 'fin-01',
      type: 'mcq',
      title: 'Model Architecture',
      difficulty: 'easy',
      points: 5,
      prompt: `A new analyst builds a model with assumptions, formulas, and outputs mixed randomly across the same worksheet.

What is the strongest redesign?`,
      options: [
        'Separate inputs, calculations, schedules, and outputs with clear labeling and consistent formula conventions.',
        'Hide all formulas so reviewers focus only on outputs.',
        'Hardcode forecast results directly into the income statement.',
        'Use one worksheet only because fewer tabs always mean a better model.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Strong financial models separate assumptions, calculations, and outputs to improve auditability and maintainability. Why not B: hidden logic weakens review. Why not C: hardcoding forecast results breaks model integrity. Why not D: simplicity matters, but one-sheet design is not inherently superior.'
    },

    {
      id: 'fin-02',
      type: 'mcq',
      title: 'Revenue Driver Model',
      difficulty: 'easy',
      points: 5,
      prompt: `A SaaS company wants a forecast that responds realistically to operational performance.

Which revenue build is strongest?`,
      options: [
        'Prior-year revenue multiplied by an arbitrary 20% every year.',
        'Forecast revenue using customer count, new bookings, churn, expansion, and ARPU assumptions.',
        'Use office rent growth as the main driver of revenue.',
        'Set revenue equal to management’s target and solve backward for every operating driver.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Driver-based forecasting links revenue to measurable operational assumptions. Why not A: a flat growth rate may ignore business mechanics. Why not C: rent does not drive SaaS revenue. Why not D: forcing drivers to match a target can hide unrealistic assumptions.'
    },

    {
      id: 'fin-03',
      type: 'mcq',
      title: 'Gross Margin',
      difficulty: 'easy',
      points: 5,
      prompt: `Revenue is $12.0m and COGS is $7.2m.

What is gross margin?`,
      options: [
        '60%',
        '24%',
        '40%',
        '66.7%',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Gross profit is $4.8m, so gross margin = $4.8m / $12.0m = 40%. Why not A: that is COGS as a percentage of revenue. Why not B or D: the arithmetic is incorrect.'
    },

    {
      id: 'fin-04',
      type: 'mcq',
      title: 'Working Capital',
      difficulty: 'easy',
      points: 5,
      prompt: `Accounts Receivable increases by $2.5m during the year, with no offsetting change in revenue recognition.

What is the general cash-flow effect?`,
      options: [
        'Operating cash flow increases by $2.5m.',
        'Financing cash flow decreases by $2.5m.',
        'There is no cash-flow impact.',
        'Operating cash flow decreases by $2.5m.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. An increase in A/R means more revenue remains uncollected, reducing operating cash flow. Why not A: the direction is opposite. Why not B: A/R is an operating working-capital item. Why not C: working-capital changes affect cash.'
    },

    {
      id: 'fin-05',
      type: 'mcq',
      title: 'Three-Statement Linkage',
      difficulty: 'easy',
      points: 5,
      prompt: `A model increases depreciation expense by $1.0m.

Ignoring tax for simplicity, what should happen across the three statements?`,
      options: [
        'Net income falls, depreciation is added back in operating cash flow, and PP&E carrying value declines.',
        'Net income rises because depreciation is non-cash.',
        'Cash flow falls by the full $1.0m because depreciation is an expense.',
        'Debt automatically increases by $1.0m.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Depreciation reduces accounting earnings, is added back as a non-cash item in cash flow, and reduces PP&E carrying value. Why not B: non-cash does not mean non-expense. Why not C: the expense itself is not a direct cash outflow. Why not D: debt does not automatically change.'
    },

    {
      id: 'fin-06',
      type: 'mcq',
      title: 'Excel Lookup Design',
      difficulty: 'medium',
      points: 5,
      prompt: `A model must retrieve a product price using a product ID.

The return column may move during future model updates.

Which formula design is strongest in modern Excel?`,
      options: [
        'Use a hardcoded cell reference to the current price row.',
        'Use XLOOKUP with explicit lookup and return ranges plus not-found handling.',
        'Use VLOOKUP with a fixed numeric column index and approximate match.',
        'Use LOOKUP on an unsorted table.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. XLOOKUP is robust to left/right lookup needs and avoids hardcoded return-column index logic. Why not A: hardcoded cell references are fragile. Why not C: fixed column indices can break if columns move, and approximate match is unsafe here. Why not D: unsorted LOOKUP logic can return incorrect results.'
    },

    {
      id: 'fin-07',
      type: 'mcq',
      title: 'Debt Schedule',
      difficulty: 'medium',
      points: 5,
      prompt: `Opening debt is $20m.
Scheduled repayment is $4m.
New borrowing is $2m.

What is ending debt before any optional sweep?`,
      options: [
        '$26m',
        '$18m',
        '$14m',
        '$22m',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Ending debt = $20m - $4m + $2m = $18m. Why not A/D: they add repayments incorrectly. Why not C: it ignores new borrowing.'
    },

    {
      id: 'fin-08',
      type: 'mcq',
      title: 'Circularity',
      difficulty: 'medium',
      points: 5,
      prompt: `Interest expense depends on average debt.

Debt repayment depends on free cash flow after interest.

This creates a circular reference.

What is the strongest modeling response?`,
      options: [
        'Delete interest expense from the model.',
        'Hardcode ending debt every year.',
        'Use a deliberate circularity solution such as iterative calculation, a circularity switch, or an algebraic approach with clear controls.',
        'Ignore the Excel warning if the model still opens.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Circularity should be handled intentionally and transparently. Why not A: removing interest breaks economics. Why not B: hardcoding ending debt weakens dynamic behavior. Why not D: unresolved circularity can make outputs unstable.'
    },

    {
      id: 'fin-09',
      type: 'mcq',
      title: 'Free Cash Flow',
      difficulty: 'medium',
      points: 5,
      prompt: `A simplified unlevered cash flow schedule shows:

EBIT: $10m
Cash taxes: $2m
D&A: $1.5m
Capex: $3m
Increase in NWC: $1m

What is approximate UFCF?`,
      options: [
        '$5.5m',
        '$8.5m',
        '$7.0m',
        '$4.0m',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. UFCF ≈ EBIT - taxes + D&A - capex - increase in NWC = 10 - 2 + 1.5 - 3 - 1 = $5.5m. Why not B/C/D: they omit or mis-handle one or more cash-flow adjustments.'
    },

    {
      id: 'fin-10',
      type: 'mcq',
      title: 'NPV Judgment',
      difficulty: 'medium',
      points: 5,
      prompt: `A project has an NPV of +$4.2m using a discount rate that appropriately reflects its risk.

What is the strongest interpretation?`,
      options: [
        'The project is guaranteed to earn $4.2m in cash.',
        'The project is expected to create value above the required return, assuming the cash-flow and discount-rate assumptions are reasonable.',
        'The project has no risk because NPV is positive.',
        'The IRR must equal zero.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Positive NPV indicates expected value creation relative to the required return. Why not A: NPV is a present-value measure, not guaranteed cash profit. Why not C: positive NPV does not eliminate risk. Why not D: NPV equals zero at the IRR, not necessarily at the chosen discount rate.'
    },

    {
      id: 'fin-11',
      type: 'mcq',
      title: 'IRR Limitation',
      difficulty: 'medium',
      points: 5,
      prompt: `Two mutually exclusive projects have different scale and timing of cash flows.

Project A has a higher IRR, but Project B has a much higher NPV at the company’s cost of capital.

Which conclusion is strongest?`,
      options: [
        'Always choose the project with higher IRR.',
        'IRR should be ignored in all capital budgeting.',
        'NPV may provide the better value-creation signal for mutually exclusive projects when IRR rankings conflict.',
        'Choose the project with lower initial investment regardless of NPV.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. IRR can produce misleading rankings for mutually exclusive projects with different scale/timing. Why not A: higher IRR does not always maximize value. Why not B: IRR remains useful when interpreted properly. Why not D: initial investment alone is insufficient.'
    },

    {
      id: 'fin-12',
      type: 'mcq',
      title: 'Sensitivity Analysis',
      difficulty: 'medium',
      points: 5,
      prompt: `An analyst wants to see how valuation changes across different WACC and terminal-growth assumptions.

Which Excel tool is strongest?`,
      options: [
        'Goal Seek.',
        'Pivot Table.',
        'Conditional Formatting only.',
        'A two-input Data Table.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. A two-input Data Table is designed to show one output across combinations of two changing assumptions. Why not A: Goal Seek solves for one input to reach a target output. Why not B: Pivot Tables summarize data rather than run model sensitivities. Why not C: formatting does not calculate scenarios.'
    },

    {
      id: 'fin-13',
      type: 'mcq',
      title: 'Scenario Analysis',
      difficulty: 'hard',
      points: 5,
      prompt: `Management wants base, upside, and downside forecasts.

Which structure is strongest?`,
      options: [
        'Create a controlled scenario selector that switches defined assumption sets while keeping calculation logic consistent.',
        'Build three unrelated workbooks with different formulas.',
        'Change outputs directly without changing assumptions.',
        'Use different accounting definitions in each scenario.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Good scenario analysis changes assumptions while preserving model logic. Why not B: separate uncontrolled files increase drift risk. Why not C: outputs should result from assumptions. Why not D: scenarios should remain comparable.'
    },

    {
      id: 'fin-14',
      type: 'mcq',
      title: 'Break-Even Analysis',
      difficulty: 'hard',
      points: 5,
      prompt: `Selling price per unit: $50
Variable cost per unit: $30
Annual fixed costs: $2.4m

What is break-even volume?`,
      options: [
        '80,000 units',
        '120,000 units',
        '48,000 units',
        '200,000 units',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Contribution margin per unit = $20. Break-even volume = $2.4m / $20 = 120,000 units. Why not A/C/D: the calculations are incorrect.'
    },

    {
      id: 'fin-15',
      type: 'mcq',
      title: 'Forecast Consistency',
      difficulty: 'hard',
      points: 5,
      prompt: `A five-year model forecasts revenue doubling, but:
- Accounts Receivable remains flat
- inventory remains flat
- Capex remains near zero
- headcount barely changes

What is the strongest concern?`,
      options: [
        'The model is conservative because working capital is stable.',
        'The model may be internally inconsistent because growth often requires supporting working capital, capacity, and operating investment.',
        'Revenue growth never affects balance-sheet accounts.',
        'Capex should always equal depreciation exactly.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Forecast assumptions should be operationally and financially coherent. Why not A: flat supporting investment can make the forecast unrealistic. Why not C: revenue often drives working capital. Why not D: capex and depreciation can differ materially.'
    },

    {
      id: 'fin-16',
      type: 'mcq',
      title: 'Balance Sheet Check',
      difficulty: 'hard',
      points: 5,
      prompt: `The projected balance sheet is out of balance by $3.6m.

{{diagram}}

What is the strongest first diagnostic approach?`,
      diagram: `flowchart TB
  IS["Income Statement"] --> RE["Retained Earnings"]
  IS --> CF["Cash Flow Statement"]
  WC["Working Capital"] --> CF
  DEBT["Debt Schedule"] --> CF
  CAPEX["Capex / D&A"] --> PPE["PP&E"]
  CF --> CASH["Ending Cash"]
  CASH --> BS["Balance Sheet"]
  RE --> BS
  PPE --> BS
  DEBT --> BS
  classDef calc fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class IS,RE,CF,WC,DEBT,CAPEX,PPE,CASH,BS calc;`,
      options: [
        'Insert a plug into equity immediately.',
        'Inspect statement linkages, signs, retained earnings, cash-flow bridges, debt, working capital, PP&E, and opening/closing balance roll-forwards.',
        'Change total assets until Assets = Liabilities + Equity.',
        'Delete the cash-flow statement.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Balance-sheet imbalances usually come from broken statement linkages or roll-forwards. Why not A/C: plugs hide errors rather than diagnose them. Why not D: the cash-flow statement is part of the linkage, not the problem by definition.'
    },

    {
      id: 'fin-17',
      type: 'mcq',
      title: 'Formula Audit',
      difficulty: 'hard',
      points: 5,
      prompt: `A forecast row contains formulas across 12 months.

One month has a hardcoded number while the surrounding cells use consistent formulas.

What is the strongest review response?`,
      options: [
        'Assume the hardcode is intentional.',
        'Replace every cell with the same value.',
        'Investigate the hardcode, compare formula consistency, trace precedents, and confirm whether an explicit override is supported and documented.',
        'Hide the row from reviewers.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Unexpected hardcodes in formula ranges are common model-risk indicators. Why not A: unexplained exceptions require review. Why not B: blanket replacement may destroy valid logic. Why not D: hiding reduces transparency.'
    },

    {
      id: 'fin-18',
      type: 'mcq',
      title: 'Model Control Design',
      difficulty: 'hard',
      points: 5,
      prompt: `Which control set is strongest for a production financial model?`,
      options: [
        'Hidden formulas and password protection only.',
        'More formatting and chart colors.',
        'Manual review of outputs only.',
        'Balance checks, cash-flow checks, debt roll-forward checks, formula consistency checks, input validation, scenario controls, and clear error flags.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Strong models contain embedded checks that detect broken logic and inconsistent assumptions. Why not A: access controls alone do not validate calculations. Why not B: presentation is not control. Why not C: output review alone may miss hidden formula errors.'
    },

    {
      id: 'fin-19',
      type: 'mcq',
      title: 'Valuation Sensitivity',
      difficulty: 'hard',
      points: 5,
      prompt: `A DCF valuation shows:

{{diagram}}

What is the strongest interpretation?`,
      diagram: `flowchart TB
  W["WACC<br/><b>8% → 10%</b>"] --> V["Enterprise Value"]
  G["Terminal Growth<br/><b>4% → 2%</b>"] --> V
  V --> D["Valuation falls materially"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class W,G,V,D warning;`,
      options: [
        'The model is wrong because valuation should not change with discount-rate assumptions.',
        'The business has no intrinsic value.',
        'The valuation is sensitive to long-duration assumptions, so WACC and terminal growth should be carefully supported and disclosed.',
        'The terminal value should be hardcoded to remove volatility.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. DCF valuations can be highly sensitive to WACC and terminal-growth assumptions. Why not A: sensitivity is expected. Why not B: lower value does not imply zero value. Why not D: hardcoding masks rather than manages model sensitivity.'
    },

    {
      id: 'fin-20',
      type: 'mcq',
      title: 'Integrated Modeling Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A CFO receives a model with:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  H["Hardcoded forecast outputs"] --> J["Model redesign"]
  C["Broken statement links"] --> J
  W["No working-capital drivers"] --> J
  D["Debt circularity unresolved"] --> J
  S["No downside scenario"] --> J
  K["No model checks"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class H,C,W,D,S,K,J warning;`,
      options: [
        'Keep the model and improve only the dashboard design.',
        'Rebuild the model around clear inputs, driver-based schedules, three-statement linkages, controlled circularity, scenarios, sensitivities, and embedded error checks.',
        'Replace formulas with more hardcodes so outputs stop moving.',
        'Use only the income statement and remove the balance sheet and cash flow.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The issues are structural and require a controlled, linked, driver-based model architecture. Why not A: presentation does not fix model integrity. Why not C: more hardcodes worsen reliability. Why not D: removing statements destroys integrated financial logic.'
    },
  ],
};
