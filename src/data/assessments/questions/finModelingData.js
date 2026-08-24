import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const finModelingData = {
  id: ASSESSMENT_TYPES.fin_modeling,
  title: 'Financial Modeling & Valuation Professional Certification',
  shortTitle: 'Financial Modeling 2',
  category: 'Finance',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests professional financial modeling and valuation judgment across three-statement models, DCF, WACC, terminal value, comparable companies, precedent transactions, LBOs, accretion/dilution, debt schedules, scenario analysis, sensitivity, and model audit quality.',
  instructions:
    '20 scenario-based questions, 60 minutes, 100 marks. Several questions include Mermaid diagrams, valuation schedules, or model structures. Read the complete scenario before choosing. Options are intentionally close, so select the answer that best reflects sound valuation logic, model integrity, and professional judgment. No negative marking.',

  questions: [
    {
      id: 'fm-01',
      type: 'mcq',
      title: 'Three-Statement Integration',
      difficulty: 'easy',
      points: 5,
      prompt: `A model increases depreciation expense by $2m.

Ignoring tax, what is the strongest three-statement effect?`,
      options: [
        'Net income rises, cash flow rises, and PP&E rises.',
        'Net income falls, depreciation is added back in operating cash flow, and PP&E declines.',
        'Cash falls by $2m because depreciation is an expense.',
        'Debt automatically increases by $2m.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Depreciation reduces earnings, is added back as a non-cash item in operating cash flow, and reduces PP&E carrying value. Why not A: earnings do not rise. Why not C: depreciation itself is not a cash outflow. Why not D: debt does not automatically change.'
    },

    {
      id: 'fm-02',
      type: 'mcq',
      title: 'DCF Cash Flow',
      difficulty: 'easy',
      points: 5,
      prompt: `A company is being valued using an unlevered DCF.

Which cash flow should generally be discounted at WACC?`,
      options: [
        'Net income after dividends.',
        'Gross revenue.',
        'Ending cash balance.',
        'Unlevered free cash flow available to all capital providers.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. An unlevered DCF discounts cash flow available to debt and equity holders at WACC. Why not A: net income includes financing effects. Why not B: revenue is not cash flow. Why not C: cash balance is a balance-sheet item, not a valuation cash-flow stream.'
    },

    {
      id: 'fm-03',
      type: 'mcq',
      title: 'Enterprise Value Bridge',
      difficulty: 'easy',
      points: 5,
      prompt: `A company has:

Equity value: $800m
Debt: $250m
Cash: $90m

Ignoring other adjustments, what is enterprise value?`,
      options: [
        '$960m',
        '$1.05bn',
        '$710m',
        '$550m',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Enterprise value = equity value + debt - cash = 800 + 250 - 90 = $960m. Why not B: it ignores cash. Why not C/D: they incorrectly subtract debt or equity components.'
    },

    {
      id: 'fm-04',
      type: 'mcq',
      title: 'WACC Design',
      difficulty: 'easy',
      points: 5,
      prompt: `Which WACC setup is strongest for valuing a mature operating company?`,
      options: [
        'Use only the company’s historical interest rate.',
        'Use revenue growth as the discount rate.',
        'Combine cost of equity and after-tax cost of debt using a reasonable target capital structure.',
        'Use management’s preferred return regardless of market risk.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. WACC reflects the weighted required returns of debt and equity capital. Why not A: debt cost alone ignores equity risk. Why not B: growth is not a discount rate. Why not D: required return should reflect market and business risk, not preference.'
    },

    {
      id: 'fm-05',
      type: 'mcq',
      title: 'Terminal Growth',
      difficulty: 'easy',
      points: 5,
      prompt: `A DCF for a mature company assumes 12% perpetual growth after the explicit forecast period.

What is the strongest concern?`,
      options: [
        'A perpetual growth rate should be economically sustainable relative to long-run market/economic growth.',
        'Terminal growth should always equal revenue growth in year five.',
        'Terminal growth should always exceed WACC.',
        'Perpetual growth is irrelevant because terminal value does not affect DCF valuation.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A perpetual growth rate must be sustainable over the long run. Why not B: terminal assumptions need not equal the final forecast year mechanically. Why not C: if growth approaches/exceeds WACC, the Gordon Growth formula becomes economically problematic. Why not D: terminal value often represents a major portion of DCF value.'
    },

    {
      id: 'fm-06',
      type: 'mcq',
      title: 'Terminal Value Cross-Check',
      difficulty: 'medium',
      points: 5,
      prompt: `A DCF using the Gordon Growth method implies a terminal EV/EBITDA multiple of 21x.

Comparable mature peers trade at 8x-11x.

What is the strongest response?`,
      options: [
        'Use 21x because DCF outputs should never be compared with market multiples.',
        'Increase WACC until the implied multiple equals exactly 10x.',
        'Investigate whether terminal growth, margins, cash conversion, or discount-rate assumptions are too aggressive and cross-check with an exit-multiple approach.',
        'Ignore the implied multiple because it is not shown in financial statements.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Implied terminal multiples are useful valuation sanity checks. Why not A: DCF and market methods should inform each other. Why not B: assumptions should be supported, not mechanically forced. Why not D: the multiple is a valuable diagnostic even though it is not an accounting metric.'
    },

    {
      id: 'fm-07',
      type: 'mcq',
      title: 'Comparable Companies',
      difficulty: 'medium',
      points: 5,
      prompt: `A target company has 35% EBITDA margins and 25% revenue growth.

The selected peer set has mostly 8%-12% growth and 12%-18% margins.

What is the strongest valuation concern?`,
      options: [
        'The target must automatically trade at the median peer multiple.',
        'The peer set may not be sufficiently comparable, so growth, margin, scale, business model, and risk differences should be considered before applying multiples.',
        'Comparable-company analysis cannot be used for high-growth businesses.',
        'Only P/E should be used because EBITDA margins differ.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Multiples are only meaningful when comparability is understood. Why not A: median application without adjustment can misvalue the target. Why not C: comps can still be useful. Why not D: no single multiple automatically solves comparability issues.'
    },

    {
      id: 'fm-08',
      type: 'mcq',
      title: 'Precedent Transactions',
      difficulty: 'medium',
      points: 5,
      prompt: `Precedent transaction multiples are materially higher than current public-company multiples.

Which explanation is strongest?`,
      options: [
        'Precedent transactions are always wrong.',
        'Public-company multiples should therefore be ignored.',
        'The target must be worth exactly the precedent median.',
        'Precedent deals may include control premiums, synergies, different market conditions, or strategic buyer behavior.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Transaction multiples can exceed public-market multiples because acquisition pricing often includes control and synergy value. Why not A/B: both methods can be informative. Why not C: transaction medians still require comparability and context.'
    },

    {
      id: 'fm-09',
      type: 'mcq',
      title: 'Sensitivity Analysis',
      difficulty: 'medium',
      points: 5,
      prompt: `An analyst wants to show how enterprise value changes across combinations of WACC and perpetual growth.

Which Excel structure is strongest?`,
      options: [
        'A Pivot Table.',
        'Goal Seek.',
        'A two-input Data Table linked to the valuation output.',
        'A manual list of unrelated hardcoded values.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. A two-input Data Table is designed to test one output across combinations of two assumptions. Why not A: Pivot Tables summarize datasets. Why not B: Goal Seek solves for one input to reach a target. Why not D: hardcoded sensitivities are not dynamic or auditable.'
    },

    {
      id: 'fm-10',
      type: 'mcq',
      title: 'Scenario Analysis',
      difficulty: 'medium',
      points: 5,
      prompt: `Management wants downside, base, and upside valuations.

What is the strongest modeling structure?`,
      options: [
        'Use one controlled scenario selector that switches defined assumption sets while preserving consistent formulas.',
        'Build three unrelated workbooks with different formulas.',
        'Hardcode three valuation outputs without changing drivers.',
        'Use different accounting definitions in each case.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Scenarios should change assumptions while keeping the model architecture consistent. Why not B: separate files create drift risk. Why not C: outputs should flow from assumptions. Why not D: changing accounting definitions destroys comparability.'
    },

    {
      id: 'fm-11',
      type: 'mcq',
      title: 'LBO Value Drivers',
      difficulty: 'medium',
      points: 5,
      prompt: `Which combination most directly drives LBO equity returns?`,
      options: [
        'Only revenue growth and tax rate.',
        'Entry valuation, leverage, operating performance, debt paydown, and exit valuation.',
        'Only number of debt tranches.',
        'Only the buyer’s accounting policy.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. LBO returns are driven by purchase price, financing structure, business performance, deleveraging, and exit value. Why not A/C/D: each omits major return drivers.'
    },

    {
      id: 'fm-12',
      type: 'mcq',
      title: 'Debt Circularity',
      difficulty: 'medium',
      points: 5,
      prompt: `Interest expense depends on average debt.
Debt repayment depends on cash flow after interest.

What is the strongest modeling response?`,
      options: [
        'Remove interest expense.',
        'Hardcode ending debt.',
        'Ignore the circularity warning.',
        'Use a transparent circularity solution such as iterative calculation, a circularity switch, or algebraic logic with checks.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Debt-interest circularity should be handled deliberately and transparently. Why not A: economics would be incomplete. Why not B: hardcoding breaks dynamic logic. Why not C: unresolved circularity can destabilize outputs.'
    },

    {
      id: 'fm-13',
      type: 'mcq',
      title: 'LBO Debt Paydown',
      difficulty: 'hard',
      points: 5,
      prompt: `An LBO starts with $400m of debt.

After five years, operating cash generation reduces debt to $180m, with no change in enterprise value.

What is the strongest effect on sponsor equity value?`,
      options: [
        'Equity value generally increases because less debt remains against the same enterprise value.',
        'Equity value falls because debt paydown reduces leverage.',
        'Equity value is unchanged because enterprise value is unchanged.',
        'Equity value becomes zero once leverage falls.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Equity value = enterprise value less net debt, so debt paydown increases equity value if EV is unchanged. Why not B/C/D: they ignore the EV-to-equity bridge.'
    },

    {
      id: 'fm-14',
      type: 'mcq',
      title: 'Accretion / Dilution',
      difficulty: 'hard',
      points: 5,
      prompt: `An acquisition increases the buyer’s pro forma EPS from $4.00 to $4.28.

What is the strongest high-level conclusion?`,
      options: [
        'The transaction is automatically value-creating.',
        'The deal is EPS-accretive, but EPS accretion alone does not prove economic value creation.',
        'The transaction is dilutive because shares may be issued.',
        'The acquisition price must be below book value.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Accretion means pro forma EPS increases, but value creation also depends on purchase price, synergies, financing, risk, and return on invested capital. Why not A: accretion can occur in value-destructive deals. Why not C: issued shares do not automatically make a deal dilutive. Why not D: book value is not implied.'
    },

    {
      id: 'fm-15',
      type: 'mcq',
      title: 'DCF Forecast Consistency',
      difficulty: 'hard',
      points: 5,
      prompt: `A DCF assumes revenue doubles over five years, but:

- capex remains below depreciation
- working capital stays flat
- headcount barely changes
- margins expand sharply

What is the strongest concern?`,
      options: [
        'The model is conservative.',
        'The assumptions are automatically valid because DCF is based on cash flow.',
        'The growth and margin assumptions may be operationally inconsistent with required capacity, working capital, and investment.',
        'Capex should always be exactly equal to depreciation.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Growth must be supported by realistic operating investment and working-capital assumptions. Why not A: underinvestment can make forecasts aggressive, not conservative. Why not B: DCF quality depends on realistic inputs. Why not D: capex and depreciation can differ.'
    },

    {
      id: 'fm-16',
      type: 'mcq',
      title: 'Model Audit',
      difficulty: 'hard',
      points: 5,
      prompt: `The balance sheet is out of balance by $7m.

What is the strongest first diagnostic approach?`,
      options: [
        'Inspect statement linkages, retained earnings, cash flow, debt, working capital, PP&E roll-forwards, and sign conventions before using any plug.',
        'Insert a $7m balancing item into equity.',
        'Increase cash by $7m.',
        'Delete the cash flow statement.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. A balance-sheet break usually indicates a linkage or roll-forward problem. Why not B/C: plugs conceal errors. Why not D: the cash-flow statement is necessary to understand the imbalance.'
    },

    {
      id: 'fm-17',
      type: 'mcq',
      title: 'Exit Multiple Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A model assumes the company will exit at 15x EBITDA in year five.

Current peers trade at 9x-11x, and no structural improvement in growth or margins is forecast.

What is the strongest response?`,
      options: [
        'Keep 15x because exit multiples are subjective.',
        'Challenge the 15x assumption and support the exit multiple using future business quality, peer ranges, transaction evidence, and market conditions.',
        'Use the highest historical multiple automatically.',
        'Remove the exit multiple and use book value instead.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Exit assumptions should be supported by realistic future positioning and market evidence. Why not A: subjectivity does not remove the need for support. Why not C: peak multiples may be inappropriate. Why not D: book value is not a substitute for valuation logic.'
    },

    {
      id: 'fm-18',
      type: 'mcq',
      title: 'Terminal Value Concentration',
      difficulty: 'hard',
      points: 5,
      prompt: `Terminal value represents 82% of total DCF enterprise value.

What is the strongest interpretation?`,
      options: [
        'The model is automatically wrong.',
        'Terminal value should be removed entirely.',
        'The analyst should use the highest terminal value method to compensate for uncertainty.',
        'The valuation is highly dependent on long-duration assumptions, so terminal growth, WACC, exit multiples, and forecast maturity should be stress-tested and cross-checked.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. High terminal-value concentration increases sensitivity to long-term assumptions and calls for stronger validation. Why not A: high concentration is common in some businesses, though risky. Why not B: terminal value is economically necessary for a going concern. Why not C: using the highest value introduces bias.'
    },

    {
      id: 'fm-19',
      type: 'mcq',
      title: 'Valuation Cross-Check',
      difficulty: 'hard',
      points: 5,
      prompt: `A valuation produces:

{{diagram}}

DCF: $1.6bn EV
Comparable companies: $1.0bn-$1.2bn EV
Precedent transactions: $1.15bn-$1.35bn EV

What is the strongest analyst response?`,
      diagram: `flowchart TB
  DCF["DCF<br/><b>$1.6bn</b>"] --> J["Valuation judgment"]
  C["Comps<br/><b>$1.0-1.2bn</b>"] --> J
  P["Precedents<br/><b>$1.15-1.35bn</b>"] --> J
  J --> R["Investigate why DCF is materially higher"]
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class DCF,J,R warning;`,
      options: [
        'Use the DCF because it is the highest method.',
        'Average all endpoints mechanically.',
        'Discard market-based methods because intrinsic value is always superior.',
        'Investigate whether DCF assumptions such as margins, terminal value, or WACC explain the premium before choosing a valuation range.',
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Material differences between valuation methods should be understood, not mechanically ignored. Why not A: selecting the highest method is biased. Why not B: averaging without understanding assumptions can be misleading. Why not C: market evidence is an important cross-check.'
    },

    {
      id: 'fm-20',
      type: 'mcq',
      title: 'Integrated Valuation Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A review of a valuation model finds:

{{diagram}}

Which remediation is strongest?`,
      diagram: `flowchart TB
  H["Hardcoded forecast outputs"] --> J["Model redesign"]
  TV["Terminal value = 78% of EV"] --> J
  W["Unsupported WACC"] --> J
  EX["Aggressive exit multiple"] --> J
  C["Weak comps selection"] --> J
  L["LBO circularity unresolved"] --> J
  CH["No model checks"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class H,TV,W,EX,C,L,CH,J warning;`,
      options: [
        'Improve only formatting because the valuation methods are already present.',
        'Keep all assumptions and add more charts.',
        'Rebuild the model around driver-based forecasts, supported valuation assumptions, cross-method sanity checks, controlled circularity, scenarios, sensitivities, and embedded model checks.',
        'Remove all valuation methods except DCF.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The weaknesses are structural and require better forecasting, valuation support, cross-checking, circularity control, and model governance. Why not A/B: presentation does not fix logic. Why not D: multiple methods provide useful triangulation.'
    },
  ],
};
