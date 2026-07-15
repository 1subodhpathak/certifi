import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const financeData = {
  id: ASSESSMENT_TYPES.finance,
  title: "Financial Modeling & Excel Analytics Certification",
  shortTitle: "Finance",
  category: "Business Analytics",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional finance and Excel assessment covering advanced formulas, financial statements, working capital, margins, NPV, IRR, scenario analysis, forecasting, model controls, and business analytics judgment.",
  instructions: "Choose the correct Excel formula or financial concept for each business scenario. Questions move from easy to hard.",
  questions: [
{ id: 'fin-01', type: 'mcq', title: 'Lookup Logic', prompt: 'Which formula is best for looking up a price in a non-sorted table where the price is to the left of the ID?', options: ['VLOOKUP', 'INDEX/MATCH', 'HLOOKUP', 'LOOKUP'], correctIndex: 1, explanation: 'VLOOKUP cannot look left. INDEX/MATCH is more flexible and safer for non-sorted data.' },
        { id: 'fin-02', type: 'mcq', title: 'Logical Check', prompt: 'What does =IF(AND(A1>10, B1<5), "Yes", "No") return if A1=12 and B1=6?', options: ['Yes', 'No', '#VALUE!', 'Error'], correctIndex: 1, explanation: 'B1<5 is false (6<5), so the AND condition fails.' },
        { id: 'fin-03', type: 'mcq', title: 'EBITDA', prompt: 'Which of the following is NOT removed when calculating EBITDA from Net Income?', options: ['Interest', 'Taxes', 'COGS', 'Depreciation'], correctIndex: 2, explanation: 'EBITDA = Earnings Before Interest, Taxes, Depreciation, and Amortization. COGS is part of Earnings.' },
        { id: 'fin-04', type: 'mcq', title: 'Fixed vs Variable', prompt: 'A company pays $5k rent plus $2 per unit shipped. If units grow, what happens to unit cost?', options: ['Increases', 'Decreases', 'Stays same', 'Goes to zero'], correctIndex: 1, explanation: 'Fixed cost ($5k) is spread over more units, reducing total cost per unit.' },
        { id: 'fin-05', type: 'mcq', title: 'Working Capital', prompt: 'Which of these is a Current Liability?', options: ['Accounts Receivable', 'Inventory', 'Accounts Payable', 'Prepaid Expenses'], correctIndex: 2, explanation: 'Accounts Payable is money owed to suppliers, hence a liability.' },
        { id: 'fin-06', type: 'mcq', title: 'SUMIFS', prompt: 'Which Excel formula sums Sales where Region="West" and Month="Jan"?', options: ['=SUMIF(A:A, "West", C:C)', '=SUMIFS(C:C, A:A, "West", B:B, "Jan")', '=SUM(C:C, "West", "Jan")', '=COUNTIFS(C:C, A:A, "West")'], correctIndex: 1, explanation: 'SUMIFS allows for multiple criteria.' },
        { id: 'fin-07', type: 'mcq', title: 'NPV', prompt: 'If the Net Present Value (NPV) of a project is positive at a 10% discount rate, the project is:', options: ['Profitable', 'Unprofitable', 'Risky', 'Breaking even'], correctIndex: 0, explanation: 'Positive NPV means the present value of cash inflows exceeds outflows.' },
        { id: 'fin-08', type: 'mcq', title: 'Gross Profit', prompt: 'Revenue $1,000, COGS $600, OpEx $200. What is Gross Profit?', options: ['$200', '$400', '$800', '$1,000'], correctIndex: 1, explanation: 'Gross Profit = Revenue - COGS. 1000 - 600 = 400.' },
        { id: 'fin-09', type: 'mcq', title: 'Pivot Tables', prompt: 'You want to see total sales by category and month. Which tool is fastest?', options: ['Manual Filter', 'Pivot Table', 'VLOOKUP', 'IF statements'], correctIndex: 1, explanation: 'Pivot Tables are designed for multi-dimensional aggregation.' },
        { id: 'fin-10', type: 'mcq', title: 'Absolute Reference', prompt: 'How do you lock cell A1 in an Excel formula so it doesn\'t change when copied?', options: ['A1', '$A1', 'A$1', '$A$1'], correctIndex: 3, explanation: '$ signs lock both column and row.' },
        { id: 'fin-11', type: 'mcq', title: 'Cash Flow', prompt: 'If Accounts Receivable increases by $10k, what is the impact on Cash Flow?', options: ['Increase $10k', 'Decrease $10k', 'No impact', 'Double impact'], correctIndex: 1, explanation: 'Increase in assets (AR) means cash is tied up, hence a decrease in cash flow.' },
        { id: 'fin-12', type: 'mcq', title: 'IRR', prompt: 'What is the Internal Rate of Return?', options: ['Fixed bank rate', 'Discount rate where NPV = 0', 'Total profit divided by years', 'Initial investment'], correctIndex: 1, explanation: 'IRR is the break-even discount rate.' },
        { id: 'fin-13', type: 'mcq', title: 'Financial Ratios', prompt: 'Net Income / Equity is the formula for:', options: ['ROI', 'ROA', 'ROE', 'ROS'], correctIndex: 2, explanation: 'ROE = Return on Equity.' },
        { id: 'fin-14', type: 'mcq', title: 'Excel Error', prompt: 'What does #REF! usually mean in Excel?', options: ['Divide by zero', 'Invalid cell reference (deleted)', 'Value too large', 'Formula is missing'], correctIndex: 1, explanation: '#REF! occurs when a cell reference is no longer valid.' },
        { id: 'fin-15', type: 'mcq', title: 'Debt-to-Equity', prompt: 'Company has $2M debt and $1M equity. Debt-to-Equity ratio?', options: ['0.5', '1.0', '1.5', '2.0'], correctIndex: 3, explanation: '2M / 1M = 2.0.' },
        { id: 'fin-16', type: 'mcq', title: 'WACC', prompt: 'What does WACC stand for?', options: ['Weighted Average Capital Cost', 'Weekly Account Cash Check', 'Western Area Capital Center', 'Weighted Asset Cash Cloud'], correctIndex: 0, explanation: 'Weighted Average Cost of Capital.' },
        { id: 'fin-17', type: 'mcq', title: 'Sensitivity Analysis', prompt: 'Which Excel tool is best for seeing how changing two variables impacts a result?', options: ['Goal Seek', 'Data Table (2-input)', 'Scenario Manager', 'Solver'], correctIndex: 1, explanation: 'Data Tables are perfect for 2-variable sensitivity grids.' },
        { id: 'fin-18', type: 'mcq', title: 'Balance Sheet', prompt: 'Assets = ?', options: ['Liabilities - Equity', 'Liabilities + Equity', 'Equity - Liabilities', 'Revenue - Expenses'], correctIndex: 1, explanation: 'The fundamental accounting equation is Assets = Liabilities + Equity.' },
        { id: 'fin-19', type: 'mcq', title: 'Excel: Goal Seek', prompt: 'You know the target result but not the input. Which tool do you use?', options: ['Data Table', 'Goal Seek', 'VLOOKUP', 'Pivot'], correctIndex: 1, explanation: 'Goal Seek finds the input needed for a specific output.' },
        { id: 'fin-20', type: 'mcq', title: 'Liquidity', prompt: 'Which asset is most liquid?', options: ['Real Estate', 'Inventory', 'Accounts Receivable', 'Cash'], correctIndex: 3, explanation: 'Cash is the definition of liquidity.' },
    {
          "id": "fin-21",
          "type": "mcq",
          "title": "XLOOKUP",
          "prompt": "Why is XLOOKUP often preferred over VLOOKUP?",
          "options": [
                "It can look left/right, has clearer defaults, and supports not-found handling",
                "It only works on sorted data",
                "It cannot return text",
                "It replaces all formulas"
          ],
          "correctIndex": 0,
          "explanation": "XLOOKUP is more flexible and safer than traditional VLOOKUP in many cases."
    },
    {
          "id": "fin-22",
          "type": "mcq",
          "title": "Scenario Analysis",
          "prompt": "What is scenario analysis used for?",
          "options": [
                "Testing outcomes under different sets of assumptions",
                "Formatting cells only",
                "Deleting formulas",
                "Replacing financial statements"
          ],
          "correctIndex": 0,
          "explanation": "Scenario analysis compares cases such as base, upside, and downside."
    },
    {
          "id": "fin-23",
          "type": "mcq",
          "title": "Sensitivity Analysis",
          "prompt": "What does sensitivity analysis show?",
          "options": [
                "How model output changes when one or two inputs change",
                "Only historical totals",
                "Only chart colors",
                "Only audit comments"
          ],
          "correctIndex": 0,
          "explanation": "Sensitivity analysis helps identify key value drivers."
    },
    {
          "id": "fin-24",
          "type": "mcq",
          "title": "Free Cash Flow",
          "prompt": "Which item is typically subtracted when calculating unlevered free cash flow?",
          "options": [
                "Capital expenditures",
                "Interest expense after debt schedule only",
                "Dividends only",
                "Share price"
          ],
          "correctIndex": 0,
          "explanation": "Capex is a cash outflow required to maintain or grow operations."
    },
    {
          "id": "fin-25",
          "type": "mcq",
          "title": "Working Capital",
          "prompt": "An increase in accounts receivable usually has what cash flow effect?",
          "options": [
                "Cash outflow",
                "Cash inflow",
                "No possible effect",
                "Always increases debt"
          ],
          "correctIndex": 0,
          "explanation": "Higher AR means revenue recognized but cash not yet collected."
    },
    {
          "id": "fin-26",
          "type": "mcq",
          "title": "Debt Schedule",
          "prompt": "What does a debt schedule model?",
          "options": [
                "Borrowings, repayments, interest expense, and ending debt balance",
                "Only revenue",
                "Only headcount",
                "Only inventory count"
          ],
          "correctIndex": 0,
          "explanation": "Debt schedules link financing assumptions to interest and cash flow."
    },
    {
          "id": "fin-27",
          "type": "mcq",
          "title": "Circularity",
          "prompt": "What is a circular reference in financial modeling?",
          "options": [
                "A formula depends on its own result directly or indirectly",
                "A chart is round",
                "A formula references another workbook only",
                "A pivot table refreshes"
          ],
          "correctIndex": 0,
          "explanation": "Circularity can occur in interest/debt calculations and must be handled carefully."
    },
    {
          "id": "fin-28",
          "type": "mcq",
          "title": "Model Audit",
          "prompt": "Which is a good model audit practice?",
          "options": [
                "Trace precedents/dependents, check signs, test outputs, and reconcile statements",
                "Hide all formulas",
                "Hardcode totals",
                "Delete assumptions"
          ],
          "correctIndex": 0,
          "explanation": "Model audits test formula logic, structure, and consistency."
    },
    {
          "id": "fin-29",
          "type": "mcq",
          "title": "Operating Margin",
          "prompt": "How is operating margin calculated?",
          "options": [
                "Operating income divided by revenue",
                "Revenue divided by assets",
                "Cash divided by debt",
                "Net income plus dividends"
          ],
          "correctIndex": 0,
          "explanation": "Operating margin measures operating profitability as a percentage of revenue."
    },
    {
          "id": "fin-30",
          "type": "mcq",
          "title": "Gross Margin",
          "prompt": "If revenue is 1,000 and COGS is 600, gross margin is:",
          "options": [
                "40%",
                "60%",
                "20%",
                "100%"
          ],
          "correctIndex": 0,
          "explanation": "Gross margin = (Revenue - COGS) / Revenue = 400 / 1000 = 40%."
    },
    {
          "id": "fin-31",
          "type": "mcq",
          "title": "Break-Even",
          "prompt": "What is break-even volume?",
          "options": [
                "Fixed costs divided by contribution margin per unit",
                "Revenue minus cash",
                "Debt divided by assets",
                "Inventory divided by sales"
          ],
          "correctIndex": 0,
          "explanation": "Break-even volume shows units needed to cover fixed costs."
    },
    {
          "id": "fin-32",
          "type": "mcq",
          "title": "Contribution Margin",
          "prompt": "What is contribution margin?",
          "options": [
                "Revenue minus variable costs",
                "Revenue minus all assets",
                "Cash minus debt",
                "COGS minus revenue"
          ],
          "correctIndex": 0,
          "explanation": "Contribution margin helps evaluate profitability after variable costs."
    },
    {
          "id": "fin-33",
          "type": "mcq",
          "title": "Forecast Driver",
          "prompt": "Which is a better revenue forecast driver for a SaaS model?",
          "options": [
                "Customers, ARPU, churn, expansion, and new bookings",
                "Only office rent",
                "Only logo color",
                "Only tax rate"
          ],
          "correctIndex": 0,
          "explanation": "SaaS revenue should be driven by customer and pricing dynamics."
    },
    {
          "id": "fin-34",
          "type": "mcq",
          "title": "Churn",
          "prompt": "Why does churn matter in financial modeling?",
          "options": [
                "It reduces recurring revenue and affects customer lifetime value",
                "It only affects office supplies",
                "It always increases revenue",
                "It has no business impact"
          ],
          "correctIndex": 0,
          "explanation": "Churn is a key driver of recurring revenue businesses."
    },
    {
          "id": "fin-35",
          "type": "mcq",
          "title": "Discount Rate",
          "prompt": "What does a discount rate reflect?",
          "options": [
                "Required return and risk of future cash flows",
                "Only inflation forever",
                "Only tax rate",
                "Only historical revenue"
          ],
          "correctIndex": 0,
          "explanation": "Discount rates convert future cash flows into present value."
    },
    {
          "id": "fin-36",
          "type": "mcq",
          "title": "NPV Rule",
          "prompt": "What does a positive NPV generally indicate?",
          "options": [
                "Expected value creation above the required return",
                "Guaranteed no risk",
                "Project must be illegal",
                "Cash flows are all negative"
          ],
          "correctIndex": 0,
          "explanation": "Positive NPV means discounted inflows exceed outflows at the chosen discount rate."
    },
    {
          "id": "fin-37",
          "type": "mcq",
          "title": "IRR Limitation",
          "prompt": "What is a limitation of IRR?",
          "options": [
                "It can be misleading for non-conventional cash flows or mutually exclusive projects",
                "It never uses cash flows",
                "It cannot be calculated in Excel",
                "It always equals WACC"
          ],
          "correctIndex": 0,
          "explanation": "IRR can produce multiple or misleading results in some cases."
    },
    {
          "id": "fin-38",
          "type": "mcq",
          "title": "Excel Control",
          "prompt": "Why separate inputs, calculations, and outputs?",
          "options": [
                "To improve auditability, usability, and error detection",
                "To make models harder to read",
                "To hide assumptions",
                "To avoid documentation"
          ],
          "correctIndex": 0,
          "explanation": "Clear model structure improves maintainability and review."
    },
    {
          "id": "fin-39",
          "type": "mcq",
          "title": "Error Check",
          "prompt": "A balance sheet does not balance. What should you inspect first?",
          "options": [
                "Links among net income, cash flow, debt, working capital, equity, and retained earnings",
                "Only chart colors",
                "Only row height",
                "Only company logo"
          ],
          "correctIndex": 0,
          "explanation": "A balance sheet imbalance usually comes from statement linkage errors."
    },
    {
          "id": "fin-40",
          "type": "mcq",
          "title": "Advanced Finance Judgment",
          "prompt": "A model shows aggressive growth but no increase in working capital or capex. What is the concern?",
          "options": [
                "Assumptions may be internally inconsistent with growth needs",
                "The model is automatically correct",
                "Growth never requires investment",
                "Working capital is unrelated to revenue"
          ],
          "correctIndex": 0,
          "explanation": "Growth forecasts should be supported by realistic investment and working capital assumptions."
    }
  ]
};
