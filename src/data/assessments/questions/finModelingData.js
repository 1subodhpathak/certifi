import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const finModelingData = {
  id: ASSESSMENT_TYPES.fin_modeling,
  title: "Financial Modeling & Valuation Professional Certification",
  shortTitle: "Fin Modeling",
  category: "Finance",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional financial modeling assessment covering three-statement models, DCF, WACC, terminal value, LBO, comparable companies, precedent transactions, sensitivity analysis, and model audit quality.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical finance modeling and valuation judgment.",
  questions: [
{ id: 'fm-01', type: 'mcq', title: 'Core Concepts', prompt: 'What are the three core financial statements in a model?', options: ['P&L, Balance Sheet, Cash Flow', 'Revenue, Costs, Profit', 'Assets, Liabilities, Equity', 'Income, Taxes, Dividends'], correctIndex: 0, explanation: 'A 3-statement model links these three reports.' },
        { id: 'fm-02', type: 'mcq', title: 'DCF', prompt: 'What does "DCF" stand for?', options: ['Direct Cash Flow', 'Discounted Cash Flow', 'Deferred Cost Function', 'Divided Capital Fund'], correctIndex: 1, explanation: 'DCF values a company based on the present value of its future cash flows.' },
        { id: 'fm-03', type: 'mcq', title: 'WACC', prompt: 'What does "WACC" represent?', options: ['Weekly Average Cost of Capital', 'Weighted Average Cost of Capital', 'World Assets and Capital Class', 'Working Assets Cash Control'], correctIndex: 1, explanation: 'WACC is the average rate a company pays to finance its assets.' },
        { id: 'fm-04', type: 'mcq', title: 'Excel', prompt: 'Which Excel function is commonly used for sensitivity analysis?', options: ['VLOOKUP', 'Data Tables', 'Pivot Tables', 'CONCATENATE'], correctIndex: 1, explanation: 'Data tables show how changes in inputs affect the final output.' },
        { id: 'fm-05', type: 'mcq', title: 'Valuation', prompt: 'What is "Terminal Value"?', options: ['The end of a company', 'The value of a company beyond the explicit forecast period', 'The final profit', 'The total debt'], correctIndex: 1, explanation: 'Usually calculated using the Gordon Growth or Exit Multiple method.' },
        { id: 'fm-06', type: 'mcq', title: 'EBITDA', prompt: 'What does EBITDA stand for?', options: ['Earnings Before Interest, Taxes, Depreciation, and Amortization', 'Estimated Business Income Total During Analysis', 'Earnings Before Internal Taxes and Debt Accounts', 'Every Business Income Total During Audit'], correctIndex: 0, explanation: 'EBITDA is a common proxy for operating cash flow.' },
        { id: 'fm-07', type: 'mcq', title: 'Leverage', prompt: 'What is an "LBO" (Leveraged Buyout)?', options: ['Buying a company with cash', 'The acquisition of another company using a significant amount of borrowed money', 'A large bank loan', 'Liquidating a business'], correctIndex: 1, explanation: 'LBOs use the acquired company\'s assets as collateral.' },
        { id: 'fm-08', type: 'mcq', title: 'Forecasting', prompt: 'What is a "Top-Down" revenue forecast?', options: ['Starting with unit sales', 'Starting with the total market size and estimating a percentage of market share', 'Asking sales teams', 'Looking at last year'], correctIndex: 1, explanation: 'Opposite of "Bottom-Up", which builds from specific sales activities.' },
        { id: 'fm-09', type: 'mcq', title: 'NPV', prompt: 'What is "Net Present Value" (NPV)?', options: ['Total cash received', 'The difference between the present value of cash inflows and outflows', 'Current bank balance', 'Future value of a dollar'], correctIndex: 1, explanation: 'A positive NPV indicates a profitable investment.' },
        { id: 'fm-10', type: 'mcq', title: 'IRR', prompt: 'What is "Internal Rate of Return" (IRR)?', options: ['Annual growth rate', 'The discount rate that makes the NPV of all cash flows equal to zero', 'Interest rate on debt', 'Internal tax rate'], correctIndex: 1, explanation: 'IRR measures the profitability of potential investments.' },
        { id: 'fm-11', type: 'mcq', title: 'Excel - Formatting', prompt: 'In professional financial modeling, what color are hard-coded inputs usually?', options: ['Black', 'Blue', 'Green', 'Red'], correctIndex: 1, explanation: 'Blue for inputs, Black for formulas is the industry standard.' },
        { id: 'fm-12', type: 'mcq', title: 'Statement Linking', prompt: 'Where does Net Income from the P&L flow to on the Balance Sheet?', options: ['Cash', 'Retained Earnings', 'Accounts Receivable', 'Long-term Debt'], correctIndex: 1, explanation: 'Net Income increases Equity through Retained Earnings.' },
        { id: 'fm-13', type: 'mcq', title: 'Capex', prompt: 'What is "CAPEX"?', options: ['Operating expenses', 'Capital Expenditure - funds used by a company to acquire or upgrade physical assets', 'Monthly rent', 'Sales commissions'], correctIndex: 1, explanation: 'Capex is capitalized on the balance sheet, not expensed on the P&L.' },
        { id: 'fm-14', type: 'mcq', title: 'Depreciation', prompt: 'How does Depreciation affect the Cash Flow Statement?', options: ['It is a cash outflow', 'It is a non-cash expense added back to Net Income', 'It is ignored', 'It is a cash inflow'], correctIndex: 1, explanation: 'Depreciation reduces taxable income but doesn\'t involve actual cash leaving.' },
        { id: 'fm-15', type: 'mcq', title: 'Enterprise Value', prompt: 'How do you calculate Enterprise Value (EV)?', options: ['Market Cap only', 'Market Cap + Debt - Cash', 'Assets + Liabilities', 'Revenue x 10'], correctIndex: 1, explanation: 'EV represents the total value of the business, regardless of capital structure.' },
        { id: 'fm-16', type: 'mcq', title: 'Sensitivity', prompt: 'What is the purpose of a "Monte Carlo" simulation in modeling?', options: ['To gamble', 'To understand the impact of risk and uncertainty in financial forecasting by running thousands of scenarios', 'To predict stock prices', 'To calculate tax'], correctIndex: 1, explanation: 'It uses probability distributions for inputs.' },
        { id: 'fm-17', type: 'mcq', title: 'Working Capital', prompt: 'What is "Net Working Capital"?', options: ['Current Assets minus Current Liabilities', 'Total Cash', 'Fixed Assets', 'Equity'], correctIndex: 0, explanation: 'Measures a company\'s short-term liquidity.' },
        { id: 'fm-18', type: 'mcq', title: 'Debt Schedule', prompt: 'What is an "Amortization Schedule"?', options: ['A list of assets', 'A table detailing each periodic payment on an amortizing loan', 'A tax form', 'A sales forecast'], correctIndex: 1, explanation: 'Shows principal vs interest for each payment.' },
        { id: 'fm-19', type: 'mcq', title: 'Multiples', prompt: 'What is a "Price-to-Earnings" (P/E) ratio?', options: ['Revenue / Employees', 'Market Price per Share / Earnings per Share', 'Debt / Equity', 'Total Profit / Assets'], correctIndex: 1, explanation: 'A common metric for valuing a company relative to its peers.' },
        { id: 'fm-20', type: 'mcq', title: 'Error Checking', prompt: 'What is a "Circ" (Circular Reference) in Excel modeling?', options: ['A round table', 'When a formula refers to its own cell, either directly or indirectly', 'A perfect model', 'A type of chart'], correctIndex: 1, explanation: 'Often used intentionally in interest expense calculations, but requires iterative calculation settings.' },
    {
          "id": "fm-21",
          "type": "mcq",
          "title": "Three-Statement Linkage",
          "prompt": "How does net income link into the cash flow statement?",
          "options": [
                "It is the starting point for operating cash flow under the indirect method",
                "It is ignored",
                "It only affects debt",
                "It only changes share count"
          ],
          "correctIndex": 0,
          "explanation": "The indirect cash flow statement starts with net income and adjusts to cash flow."
    },
    {
          "id": "fm-22",
          "type": "mcq",
          "title": "Balance Sheet Linkage",
          "prompt": "Why must the balance sheet balance in a model?",
          "options": [
                "Assets must equal liabilities plus equity",
                "Revenue must equal expenses",
                "Cash must equal EBITDA",
                "Debt must equal inventory"
          ],
          "correctIndex": 0,
          "explanation": "A balanced balance sheet validates core statement linkage."
    },
    {
          "id": "fm-23",
          "type": "mcq",
          "title": "Working Capital",
          "prompt": "What does an increase in inventory usually do to cash flow?",
          "options": [
                "Uses cash",
                "Creates cash",
                "Has no effect ever",
                "Increases revenue automatically"
          ],
          "correctIndex": 0,
          "explanation": "More inventory ties up cash."
    },
    {
          "id": "fm-24",
          "type": "mcq",
          "title": "Capex",
          "prompt": "Where does capital expenditure appear?",
          "options": [
                "Cash flow statement and fixed asset schedule",
                "Only income statement as revenue",
                "Only equity schedule",
                "Only tax schedule"
          ],
          "correctIndex": 0,
          "explanation": "Capex is a cash outflow and increases PP&E before depreciation."
    },
    {
          "id": "fm-25",
          "type": "mcq",
          "title": "Depreciation",
          "prompt": "How does depreciation affect the three statements?",
          "options": [
                "Reduces EBIT/net income, is added back in cash flow, and reduces PP&E",
                "Increases cash directly",
                "Only affects debt",
                "Only affects revenue"
          ],
          "correctIndex": 0,
          "explanation": "Depreciation is non-cash but reduces book value and earnings."
    },
    {
          "id": "fm-26",
          "type": "mcq",
          "title": "DCF Cash Flow",
          "prompt": "Which cash flow is commonly discounted in an unlevered DCF?",
          "options": [
                "Unlevered free cash flow",
                "Net income after dividends only",
                "Gross revenue",
                "Cash balance"
          ],
          "correctIndex": 0,
          "explanation": "Unlevered DCF values the firm before financing effects."
    },
    {
          "id": "fm-27",
          "type": "mcq",
          "title": "WACC Components",
          "prompt": "What inputs are commonly needed for WACC?",
          "options": [
                "Cost of equity, after-tax cost of debt, and target capital structure",
                "Only revenue growth",
                "Only inventory days",
                "Only share count"
          ],
          "correctIndex": 0,
          "explanation": "WACC weights debt and equity costs by capital structure."
    },
    {
          "id": "fm-28",
          "type": "mcq",
          "title": "Terminal Growth",
          "prompt": "What should be true about a perpetual growth rate in a DCF?",
          "options": [
                "It should be reasonable relative to long-term economic growth",
                "It should always exceed 20%",
                "It should be negative always",
                "It is unrelated to valuation"
          ],
          "correctIndex": 0,
          "explanation": "Terminal growth assumptions must be economically sustainable."
    },
    {
          "id": "fm-29",
          "type": "mcq",
          "title": "Exit Multiple",
          "prompt": "What is an exit multiple method?",
          "options": [
                "Estimating terminal value using a valuation multiple applied to a terminal-year metric",
                "Calculating depreciation",
                "Forecasting inventory only",
                "Setting tax rate"
          ],
          "correctIndex": 0,
          "explanation": "Exit multiples often use EBITDA or revenue multiples."
    },
    {
          "id": "fm-30",
          "type": "mcq",
          "title": "Sensitivity Table",
          "prompt": "Why use sensitivity tables?",
          "options": [
                "To show valuation impact from changes in key assumptions",
                "To hide assumptions",
                "To delete formulas",
                "To replace forecasts"
          ],
          "correctIndex": 0,
          "explanation": "Sensitivity analysis reveals which assumptions matter most."
    },
    {
          "id": "fm-31",
          "type": "mcq",
          "title": "Scenario Model",
          "prompt": "What is the purpose of downside/base/upside cases?",
          "options": [
                "Compare outcomes under different operating assumptions",
                "Create three logos",
                "Avoid analysis",
                "Make the workbook larger only"
          ],
          "correctIndex": 0,
          "explanation": "Scenarios help decision-makers understand risk and range of outcomes."
    },
    {
          "id": "fm-32",
          "type": "mcq",
          "title": "Circular Debt Model",
          "prompt": "What can create a circular reference in a model?",
          "options": [
                "Interest expense based on debt balance while debt depends on cash flow after interest",
                "Revenue based on units",
                "COGS based on margin",
                "Taxes based on EBT only"
          ],
          "correctIndex": 0,
          "explanation": "Debt-interest calculations can create circularity."
    },
    {
          "id": "fm-33",
          "type": "mcq",
          "title": "LBO Returns",
          "prompt": "What mainly drives LBO equity returns?",
          "options": [
                "Entry valuation, leverage, EBITDA growth, debt paydown, and exit multiple",
                "Only company logo",
                "Only tax name",
                "Only number of tabs"
          ],
          "correctIndex": 0,
          "explanation": "LBO returns depend on operations, financing, and exit assumptions."
    },
    {
          "id": "fm-34",
          "type": "mcq",
          "title": "Accretion Dilution",
          "prompt": "What does accretion/dilution analysis evaluate?",
          "options": [
                "Impact of an acquisition on acquirer EPS",
                "Only cash balance",
                "Only inventory levels",
                "Only website traffic"
          ],
          "correctIndex": 0,
          "explanation": "Accretion/dilution compares pro forma EPS to standalone EPS."
    },
    {
          "id": "fm-35",
          "type": "mcq",
          "title": "Comparable Companies",
          "prompt": "What is comparable company analysis based on?",
          "options": [
                "Valuation multiples of similar publicly traded companies",
                "Random share prices",
                "Only book value",
                "Only tax rates"
          ],
          "correctIndex": 0,
          "explanation": "Comps infer value from market pricing of similar companies."
    },
    {
          "id": "fm-36",
          "type": "mcq",
          "title": "Precedent Transactions",
          "prompt": "What does precedent transaction analysis use?",
          "options": [
                "Multiples paid in past M&A transactions",
                "Only current inventory",
                "Only payroll",
                "Only debt covenants"
          ],
          "correctIndex": 0,
          "explanation": "Transaction comps reflect acquisition pricing and control premiums."
    },
    {
          "id": "fm-37",
          "type": "mcq",
          "title": "Model Formatting",
          "prompt": "Why color-code inputs, formulas, and links?",
          "options": [
                "To improve auditability and model usability",
                "To make formulas hidden",
                "To increase file size",
                "To avoid checks"
          ],
          "correctIndex": 0,
          "explanation": "Consistent formatting helps reviewers understand model logic."
    },
    {
          "id": "fm-38",
          "type": "mcq",
          "title": "Error Checks",
          "prompt": "Which is a strong error check?",
          "options": [
                "Balance sheet balance check and cash flow roll-forward check",
                "Only sheet color",
                "Only author name",
                "Only zoom level"
          ],
          "correctIndex": 0,
          "explanation": "Error checks catch broken links and incorrect statement integration."
    },
    {
          "id": "fm-39",
          "type": "mcq",
          "title": "Hardcoding",
          "prompt": "Why avoid hardcoding inside formulas?",
          "options": [
                "It hides assumptions and makes audit difficult",
                "It always improves flexibility",
                "It is required for all models",
                "It prevents errors forever"
          ],
          "correctIndex": 0,
          "explanation": "Hardcoded numbers should be clearly separated as inputs."
    },
    {
          "id": "fm-40",
          "type": "mcq",
          "title": "Advanced Modeling Judgment",
          "prompt": "A valuation is extremely sensitive to terminal value. What should the analyst do?",
          "options": [
                "Stress-test terminal assumptions, compare methods, and clearly disclose sensitivity",
                "Hide the sensitivity",
                "Use the highest value only",
                "Ignore terminal value"
          ],
          "correctIndex": 0,
          "explanation": "Terminal value often drives DCF results and must be tested carefully."
    }
  ]
};
