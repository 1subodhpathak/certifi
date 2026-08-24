import { ASSESSMENT_TYPES } from '../../assessmentTypes';

export const financialStatementAnalysisData = {
  id: ASSESSMENT_TYPES.financial_statement_analysis,
  title: 'Financial Statement Analysis Professional Certification',
  shortTitle: 'Statement Analysis',
  category: 'Accounting',
  durationMinutes: 55,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Tests practical financial statement analysis across profitability, liquidity, leverage, working capital, cash conversion, quality of earnings, trend analysis, peer comparison, and decision-oriented interpretation.',
  instructions:
    '20 scenario-based questions, 55 minutes, 100 marks. Several questions include Mermaid diagrams, ratio bridges, or financial schedules. Read the full scenario before choosing. Options are intentionally close, so choose the answer that best explains the underlying business signal. No negative marking.',

  questions: [
    {
      id: 'fsa-01',
      type: 'mcq',
      title: 'From Statements to Decisions',
      difficulty: 'easy',
      points: 5,
      prompt: `A company reports:

Revenue: $240 million
Net income: $18 million
Operating cash flow: $7 million
Debt: $120 million

What is the strongest purpose of analyzing these statements together?`,
      options: [
        'To confirm that accounting profit and cash flow always move in the same direction.',
        'To convert accounting outputs into an integrated view of performance, cash generation, financial position, and risk.',
        'To replace management forecasts with historical figures.',
        'To determine tax payable without using tax schedules.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Financial statement analysis is about interpreting relationships across profit, cash flow, balance-sheet strength, and risk. Why not A: profit and cash can diverge materially. Why not C: historical analysis informs forecasts but does not replace them. Why not D: tax payable requires tax-specific information beyond high-level statement analysis.'
    },

    {
      id: 'fsa-02',
      type: 'mcq',
      title: 'Trend Signal',
      difficulty: 'easy',
      points: 5,
      prompt: `A company’s operating margin has moved as follows:

{{diagram}}

What is the strongest interpretation?`,
      diagram: `xychart-beta
  title "Operating Margin Trend"
  x-axis ["Q1","Q2","Q3","Q4"]
  y-axis "Margin %" 0 --> 20
  line [16,14,11,9]`,
      options: [
        'The company is improving because revenue may still be growing.',
        'The downward margin trend deserves investigation into pricing, cost inflation, mix, productivity, or operating leverage.',
        'The trend is irrelevant unless cash has also declined.',
        'The company should immediately cut all discretionary spending.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A sustained decline in operating margin is a directional warning and requires driver analysis. Why not A: growth can coexist with deteriorating economics. Why not C: margin deterioration matters independently of short-term cash movement. Why not D: cost cuts may or may not address the root cause and should follow analysis, not replace it.'
    },

    {
      id: 'fsa-03',
      type: 'mcq',
      title: 'Gross Margin Deterioration',
      difficulty: 'easy',
      points: 5,
      prompt: `Revenue increased 12% year over year, but gross margin fell from 42% to 35%.

Which follow-up is most useful first?`,
      options: [
        'Review pricing, discounting, sales mix, purchase costs, and product-level margins.',
        'Review only administrative payroll because gross margin excludes production economics.',
        'Assume the margin decline is healthy because higher sales volume always lowers margin.',
        'Recalculate depreciation because fixed assets are the main driver of gross margin.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Gross margin is driven primarily by selling price, sales mix, direct cost, sourcing, and discounting. Why not B: administrative payroll usually sits below gross profit. Why not C: volume does not automatically justify lower gross margin. Why not D: depreciation can matter in some cost structures but is not the strongest first explanation without evidence.'
    },

    {
      id: 'fsa-04',
      type: 'mcq',
      title: 'Current Ratio Quality',
      difficulty: 'easy',
      points: 5,
      prompt: `Two companies both report a current ratio of 1.6x.

Company A’s current assets are mostly cash and trade receivables.
Company B’s current assets are mostly slow-moving inventory.

What is the strongest conclusion?`,
      options: [
        'The two companies have identical liquidity because the ratio is the same.',
        'Company B is more liquid because inventory creates future revenue.',
        'Company A may have stronger near-term liquidity because the composition and convertibility of current assets matter.',
        'Current ratios should never be used in financial analysis.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Ratio quality depends on what sits inside the numerator. Cash and collectible receivables generally convert faster than slow-moving inventory. Why not A: equal ratios can hide very different liquidity quality. Why not B: inventory may be difficult to monetize quickly. Why not D: the current ratio is useful when interpreted with composition and context.'
    },

    {
      id: 'fsa-05',
      type: 'mcq',
      title: 'Leverage Under Stress',
      difficulty: 'easy',
      points: 5,
      prompt: `A company has:

{{diagram}}

Which statement is strongest?`,
      diagram: `flowchart LR
  E["EBITDA<br/><b>$30m</b>"] --> L["Leverage review"]
  D["Net Debt<br/><b>$150m</b>"] --> L
  I["Interest Expense<br/><b>$18m</b>"] --> L
  classDef metric fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class E,D,I,L metric;`,
      options: [
        'The company has no leverage risk because EBITDA is positive.',
        'The company should be reviewed for debt-service capacity because leverage is 5.0x and interest consumes a large share of operating earnings.',
        'Debt is irrelevant unless the company is loss-making.',
        'The correct conclusion is that equity must be understated.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Net debt of $150m against EBITDA of $30m implies 5.0x leverage, and $18m of interest creates meaningful debt-service pressure. Why not A: positive EBITDA does not eliminate leverage risk. Why not C: debt can constrain healthy but highly leveraged businesses. Why not D: leverage does not imply an accounting error in equity.'
    },

    {
      id: 'fsa-06',
      type: 'mcq',
      title: 'Profit Without Cash',
      difficulty: 'medium',
      points: 5,
      prompt: `A company reports net income of $24 million but operating cash flow of only $5 million.

{{diagram}}

Which analytical path is strongest?`,
      diagram: `flowchart LR
  NI["Net Income<br/><b>$24m</b>"] --> B["Bridge to CFO"]
  B --> AR["Receivables<br/><b>+12m use of cash</b>"]
  B --> INV["Inventory<br/><b>+7m use of cash</b>"]
  B --> AP["Payables<br/><b>+3m source of cash</b>"]
  B --> CFO["Operating Cash Flow<br/><b>$5m</b>"]
  classDef cash fill:#ecfeff,stroke:#0891b2,color:#164e63;
  class NI,B,AR,INV,AP,CFO cash;`,
      options: [
        'Treat the profit figure as unreliable because profit should always equal operating cash flow.',
        'Investigate working-capital growth and other accrual/non-cash items to understand why earnings are not converting into cash.',
        'Ignore the cash flow statement because the income statement is the primary financial statement.',
        'Conclude that the company must have paid a dividend of $19 million.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Profit and operating cash flow diverge because of working capital and non-cash accounting items. Why not A: the figures can legitimately differ. Why not C: cash conversion is a key part of earnings quality. Why not D: dividends are financing cash flows and do not explain the operating cash-flow bridge shown.'
    },

    {
      id: 'fsa-07',
      type: 'mcq',
      title: 'Receivable Days Warning',
      difficulty: 'medium',
      points: 5,
      prompt: `Revenue grew 18% this year. Receivable days increased from 46 to 79 days, while customer complaints and credit notes also increased.

What is the strongest interpretation?`,
      options: [
        'Growth quality may be weakening, so review collections, customer disputes, credit quality, and revenue-recognition practices.',
        'The increase is automatically positive because more receivables mean more future cash.',
        'Receivable days do not matter if revenue is growing faster than inflation.',
        'The main issue must be excess inventory because receivables and inventory are both current assets.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Slower collections alongside more disputes and credit notes can signal weaker customer quality, operational problems, or aggressive revenue recognition. Why not B: receivables are not cash until collected. Why not C: revenue growth does not neutralize deteriorating collection quality. Why not D: inventory may be unrelated to the receivables issue.'
    },

    {
      id: 'fsa-08',
      type: 'mcq',
      title: 'Inventory Turn Deterioration',
      difficulty: 'medium',
      points: 5,
      prompt: `Inventory increased from $50 million to $88 million while revenue grew only 4%.

Inventory turns fell from 6.2x to 3.8x.

Which explanation should an analyst investigate first?`,
      options: [
        'Possible overstocking, slower sell-through, demand weakness, or obsolete inventory risk.',
        'The company is necessarily preparing for strong future demand.',
        'Inventory growth proves gross margin will improve.',
        'The balance sheet is stronger because more inventory always means more liquidity.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Inventory growing far faster than revenue while turns weaken is a classic signal of slower movement or planning problems. Why not B: that is possible but requires evidence. Why not C: higher inventory does not guarantee margin improvement. Why not D: inventory can become a liquidity problem when slow-moving or obsolete.'
    },

    {
      id: 'fsa-09',
      type: 'mcq',
      title: 'EBITDA Blind Spot',
      difficulty: 'medium',
      points: 5,
      prompt: `Company X reports EBITDA of $80 million and looks highly profitable.

However:
Capital expenditure is $55 million annually.
Interest expense is $20 million.
Cash taxes are $12 million.

What is the strongest conclusion?`,
      options: [
        'EBITDA is enough because all three items are non-operating.',
        'The company has $80 million of free cash flow because EBITDA equals cash generated.',
        'EBITDA is useful, but the business may have much less residual cash after capital intensity, financing cost, and taxes.',
        'Interest and taxes should be added back again to EBITDA to assess cash generation.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. EBITDA excludes capital expenditure, financing cost, and taxes, so it can overstate the cash available to investors in a capital-intensive business. Why not A: all three items affect actual cash economics. Why not B: EBITDA is not free cash flow. Why not D: interest and taxes are already excluded from EBITDA and must be considered when assessing residual cash.'
    },

    {
      id: 'fsa-10',
      type: 'mcq',
      title: 'Free Cash Flow',
      difficulty: 'medium',
      points: 5,
      prompt: `A company reports:

Operating cash flow: $62 million
Capital expenditures: $27 million
Cash acquisitions: $15 million

Using the common operating definition of free cash flow as operating cash flow less capital expenditure, what is free cash flow?`,
      options: [
        '$20 million',
        '$35 million',
        '$47 million',
        '$62 million',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Using the stated definition, free cash flow is $62m - $27m = $35m. Why not A: it also subtracts acquisitions, which are not part of the stated definition. Why not C: it subtracts the acquisition but not capex. Why not D: it ignores capital expenditure entirely.'
    },

    {
      id: 'fsa-11',
      type: 'mcq',
      title: 'Peer Comparison',
      difficulty: 'medium',
      points: 5,
      prompt: `A retailer has an operating margin of 8%, while a software company has an operating margin of 24%.

Which comparison is strongest?`,
      options: [
        'The software company is automatically three times better because its margin is three times higher.',
        'The retailer is necessarily underperforming because every good company should exceed 20% operating margin.',
        'The margins should be interpreted relative to business model, capital intensity, accounting policy, maturity, and industry economics.',
        'Operating margin is not useful for comparing companies under any circumstances.',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Peer analysis is meaningful only when economics are comparable. Software and retail naturally have different margin structures. Why not A: raw ratio magnitude does not translate directly to business quality. Why not B: industry structure matters. Why not D: operating margin remains useful within a thoughtful comparison framework.'
    },

    {
      id: 'fsa-12',
      type: 'mcq',
      title: 'Growth Quality Warning',
      difficulty: 'medium',
      points: 5,
      prompt: `A company reports the following year-over-year changes:

{{diagram}}

Which overall interpretation is strongest?`,
      diagram: `flowchart TB
  R["Revenue<br/><b>+22%</b>"] --> Q["Quality of growth"]
  GM["Gross Margin<br/><b>42% → 34%</b>"] --> Q
  DSO["Receivable Days<br/><b>48 → 76</b>"] --> Q
  CFO["Operating Cash Flow<br/><b>+1%</b>"] --> Q
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class GM,DSO,CFO,Q warning;`,
      options: [
        'Growth is clearly high quality because revenue increased more than 20%.',
        'The company may be buying growth through weaker pricing or customer quality, so margins and cash conversion need deeper review.',
        'The cash flow result proves the revenue is understated.',
        'Gross margin and receivable days are unrelated to revenue quality.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Strong headline growth combined with weaker margins, slower collections, and almost flat operating cash flow is a classic quality-of-growth warning. Why not A: revenue growth alone is incomplete. Why not C: flat cash flow does not prove revenue is understated. Why not D: both margin and collections are central to assessing growth quality.'
    },

    {
      id: 'fsa-13',
      type: 'mcq',
      title: 'One-Time Gain',
      difficulty: 'hard',
      points: 5,
      prompt: `Net income increased from $32 million to $51 million.

The current year includes a $17 million gain from selling a building.

What is the strongest analytical treatment?`,
      options: [
        'Treat all $51 million as recurring earnings because it is reported in net income.',
        'Exclude the gain when assessing normalized recurring performance, while still recognizing it in reported results.',
        'Remove the gain from both net income and cash flow because asset sales are not real transactions.',
        'Add the gain to revenue because it increased total company income.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A one-time disposal gain belongs in reported income but should generally be separated when assessing recurring operating performance. Why not A: this overstates sustainable earnings. Why not C: the transaction is real and affects cash, but it is non-recurring. Why not D: disposal gains are not operating revenue.'
    },

    {
      id: 'fsa-14',
      type: 'mcq',
      title: 'Interest Coverage',
      difficulty: 'hard',
      points: 5,
      prompt: `EBIT is $36 million and annual interest expense is $24 million.

What does an interest coverage ratio of 1.5x most strongly suggest?`,
      options: [
        'The company has substantial debt-service headroom.',
        'The company has a relatively thin cushion before operating earnings become insufficient to cover interest.',
        'The company is insolvent because coverage below 2.0x is always a default.',
        'Interest coverage is irrelevant when EBITDA is positive.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. EBIT of $36m divided by $24m interest gives 1.5x, which is a limited buffer and increases sensitivity to earnings deterioration. Why not A: 1.5x is not substantial headroom. Why not C: no universal default threshold exists. Why not D: debt-service analysis remains relevant even when EBITDA is positive.'
    },

    {
      id: 'fsa-15',
      type: 'mcq',
      title: 'Cash Conversion Cycle',
      difficulty: 'hard',
      points: 5,
      prompt: `A company has:

Days Sales Outstanding = 72
Days Inventory Outstanding = 58
Days Payables Outstanding = 41

{{diagram}}

What is the approximate cash conversion cycle?`,
      diagram: `flowchart LR
  DSO["DSO<br/><b>72 days</b>"] --> CCC["Cash Conversion Cycle"]
  DIO["DIO<br/><b>58 days</b>"] --> CCC
  DPO["Less DPO<br/><b>41 days</b>"] --> CCC
  classDef calc fill:#eff6ff,stroke:#2563eb,color:#0f172a;
  class DSO,DIO,DPO,CCC calc;`,
      options: [
        '31 days',
        '72 days',
        '89 days',
        '171 days',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. CCC = DSO + DIO - DPO = 72 + 58 - 41 = 89 days. Why not A: it subtracts too much. Why not B: it uses only DSO. Why not D: it adds payables rather than subtracting them.'
    },

    {
      id: 'fsa-16',
      type: 'mcq',
      title: 'Working Capital Funding',
      difficulty: 'hard',
      points: 5,
      prompt: `Revenue is growing rapidly, but the company must borrow more each quarter.

Receivables and inventory are both rising faster than sales, while payables remain flat.

What is the strongest explanation?`,
      options: [
        'Growth is consuming cash because more capital is being tied up in receivables and inventory without an offsetting increase in supplier financing.',
        'The company must be loss-making because profitable companies never need working-capital funding.',
        'Borrowing growth proves the business model is becoming more efficient.',
        'The balance sheet cannot explain cash borrowing because only the cash-flow statement matters.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Faster growth in receivables and inventory increases working-capital investment, and flat payables provide no offset. Why not B: profitable growth can still consume cash. Why not C: higher borrowing may reflect worse cash conversion. Why not D: balance-sheet movements are central to understanding operating cash needs.'
    },

    {
      id: 'fsa-17',
      type: 'mcq',
      title: 'Earnings Quality',
      difficulty: 'hard',
      points: 5,
      prompt: `Over four years, net income rises steadily, but operating cash flow remains flat and accruals rise each year.

Which conclusion is strongest?`,
      options: [
        'Earnings quality may be weakening because more reported profit is not converting into operating cash.',
        'The earnings trend is unquestionably strong because profit is increasing.',
        'Cash flow should be ignored because accrual accounting is more advanced than cash accounting.',
        'The company must have lower depreciation each year.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Persistent divergence between rising earnings and flat operating cash flow can indicate weaker earnings quality or increasing reliance on accruals. Why not B: growth in reported profit alone is not enough. Why not C: cash conversion is essential to evaluating earnings quality. Why not D: depreciation could be one factor but is not implied by the facts.'
    },

    {
      id: 'fsa-18',
      type: 'mcq',
      title: 'Debt Maturity Risk',
      difficulty: 'hard',
      points: 5,
      prompt: `A company has strong profitability but $400 million of debt maturing within nine months.

Cash is $70 million, and committed undrawn facilities are $90 million.

What is the strongest analytical concern?`,
      options: [
        'Refinancing and liquidity risk, because near-term contractual funding needs materially exceed immediately available liquidity.',
        'No concern, because profitable companies can always refinance debt.',
        'The debt should be treated as equity because it is large relative to cash.',
        'The main issue is gross margin because debt maturity does not affect solvency analysis.',
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Near-term maturities of $400m versus $160m of cash plus committed facilities create a material funding gap and refinancing risk. Why not B: refinancing access can disappear under stress. Why not C: debt remains a liability. Why not D: debt maturity is directly relevant to liquidity and solvency.'
    },

    {
      id: 'fsa-19',
      type: 'mcq',
      title: 'Management Reporting',
      difficulty: 'hard',
      points: 5,
      prompt: `You are presenting results to the CFO.

Revenue is up 15%.
EBITDA margin is down 4 points.
Receivable days are up 21 days.
Operating cash flow is down 30%.

Which presentation is strongest?`,
      options: [
        '“Revenue increased 15%, so overall performance improved.”',
        '“Four ratios changed this month.”',
        '“Growth accelerated, but margin and cash conversion weakened. Pricing, customer quality, and collections are the key areas to investigate, with working capital now creating liquidity pressure.”',
        '“Operating cash flow declined, so the company should stop growing until cash recovers.”',
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Strong management reporting connects the signal, likely drivers, risk, and action. Why not A: it ignores deterioration beneath revenue growth. Why not B: it reports data without insight. Why not D: stopping growth is an unsupported recommendation before understanding the causes.'
    },

    {
      id: 'fsa-20',
      type: 'mcq',
      title: 'Integrated Analytical Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A business shows:

{{diagram}}

Which overall conclusion is strongest?`,
      diagram: `flowchart TB
  R["Revenue<br/><b>+18%</b>"] --> J["Integrated judgment"]
  GM["Gross Margin<br/><b>-5 pts</b>"] --> J
  DSO["DSO<br/><b>+24 days</b>"] --> J
  INV["Inventory Turns<br/><b>6.0x → 4.1x</b>"] --> J
  FCF["Free Cash Flow<br/><b>+2%</b>"] --> J
  DEBT["Net Debt<br/><b>+28%</b>"] --> J
  classDef warning fill:#fff7ed,stroke:#f97316,color:#9a3412;
  class GM,DSO,INV,DEBT,J warning;`,
      options: [
        'The company is clearly stronger because revenue is growing at double digits.',
        'The business may be sacrificing margin and working-capital efficiency to support growth, with debt increasingly funding the expansion.',
        'Free cash flow growth proves the balance sheet is improving.',
        'Inventory and receivable trends are operational issues only and should not affect financial analysis.',
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The combination of strong sales growth, lower margins, slower collections, weaker inventory turns, limited FCF growth, and higher debt suggests growth is becoming more cash- and capital-intensive. Why not A: revenue growth alone misses the deterioration beneath it. Why not C: FCF is barely growing while debt rises materially. Why not D: working-capital efficiency is central to financial performance and funding needs.'
    },
  ],
};
