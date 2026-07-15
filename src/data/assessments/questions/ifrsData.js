import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const ifrsData = {
  id: ASSESSMENT_TYPES.ifrs,
  title: "IFRS & GAAP Financial Reporting Professional Certification",
  shortTitle: "IFRS",
  category: "Finance",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional finance assessment covering IFRS, US GAAP, revenue recognition, leases, financial instruments, fair value, impairment, consolidation, inventory, provisions, tax, and reporting judgment.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical financial reporting judgment.",
  questions: [
{ id: 'if-01', type: 'mcq', title: 'Core Concepts', prompt: 'What does "IFRS" stand for?', options: ['International Financial Reporting Standards', 'Internal Fund Reporting System', 'Integrated Finance Research Suite', 'International Federation of Revenue Standards'], correctIndex: 0, explanation: 'IFRS is the global standard for accounting outside the US.' },
        { id: 'if-02', type: 'mcq', title: 'GAAP', prompt: 'What is "US GAAP"?', options: ['General Accounting and Audit Principles', 'Generally Accepted Accounting Principles (used in the USA)', 'Global Assets and Accounts Process', 'Government Audit and Analysis Plan'], correctIndex: 1, explanation: 'GAAP is the set of standards overseen by FASB in the United States.' },
        { id: 'if-03', type: 'mcq', title: 'IFRS 15', prompt: 'What is the focus of IFRS 15?', options: ['Leases', 'Revenue from Contracts with Customers', 'Financial Instruments', 'Insurance Contracts'], correctIndex: 1, explanation: 'It provides a 5-step model for revenue recognition.' },
        { id: 'if-04', type: 'mcq', title: 'Asset Valuation', prompt: 'Under IFRS, what is "Fair Value"?', options: ['The original cost', 'The price that would be received to sell an asset in an orderly transaction between market participants', 'The tax value', 'The liquidation value'], correctIndex: 1, explanation: 'Fair value is a market-based measurement.' },
        { id: 'if-05', type: 'mcq', title: 'Inventory', prompt: 'Which inventory valuation method is allowed under GAAP but prohibited under IFRS?', options: ['FIFO (First-In, First-Out)', 'LIFO (Last-In, First-Out)', 'Weighted Average Cost', 'Specific Identification'], correctIndex: 1, explanation: 'LIFO is not allowed under IFRS because it often distorts inventory values.' },
        { id: 'if-06', type: 'mcq', title: 'IFRS 16', prompt: 'What major change did IFRS 16 bring to Leases?', options: ['Leases are no longer tracked', 'Nearly all leases must be recognized on the balance sheet as a Right-of-Use (ROU) asset', 'Only large leases are tracked', 'Leases are now considered revenue'], correctIndex: 1, explanation: 'It removed the "Off-balance sheet" operating lease distinction for lessees.' },
        { id: 'if-07', type: 'mcq', title: 'Matching Principle', prompt: 'What is the "Matching Principle"?', options: ['Matching colors in reports', 'Expenses should be recognized in the same period as the revenue they helped generate', 'Matching assets to liabilities', 'Matching receipts to bills'], correctIndex: 1, explanation: 'A core concept of accrual accounting.' },
        { id: 'if-08', type: 'mcq', title: 'Materiality', prompt: 'What does "Materiality" mean in accounting?', options: ['Using physical materials', 'An item is material if omitting or misstating it could influence the decisions of users', 'Being serious', 'Counting every cent'], correctIndex: 1, explanation: ' materiality is a matter of professional judgment.' },
        { id: 'if-09', type: 'mcq', title: 'Going Concern', prompt: 'What is the "Going Concern" assumption?', options: ['A business is in trouble', 'The assumption that a company will continue to operate for the foreseeable future', 'A business is for sale', 'A business is growing fast'], correctIndex: 1, explanation: 'Financial statements are prepared under this assumption unless liquidation is imminent.' },
        { id: 'if-10', type: 'mcq', title: 'Intangible Assets', prompt: 'Which of these is an "Intangible Asset"?', options: ['Land', 'Goodwill', 'Inventory', 'Cash'], correctIndex: 1, explanation: 'Intangibles have no physical substance (e.g., patents, brands).' },
        { id: 'if-11', type: 'mcq', title: 'Provision vs Contingent Liability', prompt: 'What is a "Provision" under IFRS?', options: ['A type of tax', 'A liability of uncertain timing or amount that is probable and estimable', 'A backup fund', 'A credit note'], correctIndex: 1, explanation: 'Provisions are recognized on the balance sheet; contingent liabilities are usually just disclosed.' },
        { id: 'if-12', type: 'mcq', title: 'R&D', prompt: 'How does IFRS treat Research and Development costs?', options: ['Both are expensed', 'Research is expensed; Development can be capitalized if certain criteria are met', 'Both are capitalized', 'Both are ignored'], correctIndex: 1, explanation: 'GAAP usually expenses both, but IFRS allows capitalization of development.' },
        { id: 'if-13', type: 'mcq', title: 'Historical Cost', prompt: 'What is "Historical Cost"?', options: ['The future value', 'The original nominal value of an asset when it was acquired', 'The adjusted value for inflation', 'The current market price'], correctIndex: 1, explanation: 'A traditional basis for valuation.' },
        { id: 'if-14', type: 'mcq', title: 'IASB', prompt: 'Who issues the IFRS standards?', options: ['FASB', 'IASB (International Accounting Standards Board)', 'SEC', 'The UN'], correctIndex: 1, explanation: 'The IASB is based in London.' },
        { id: 'if-15', type: 'mcq', title: 'Components of Fin Stats', prompt: 'Which of these is NOT a required component of IFRS financial statements?', options: ['Statement of Financial Position', 'Statement of Comprehensive Income', 'Management Discussion and Analysis (MD&A)', 'Statement of Cash Flows'], correctIndex: 2, explanation: 'MD&A is often included but is not a core primary financial statement under IFRS itself.' },
        { id: 'if-16', type: 'mcq', title: 'Revenue Recognition', prompt: 'What is the first step in the IFRS 15 revenue model?', options: ['Determine price', 'Identify the contract with the customer', 'Identify performance obligations', 'Recognize revenue'], correctIndex: 1, explanation: 'Step 1 is identifying the contract.' },
        { id: 'if-17', type: 'mcq', title: 'Foreign Currency', prompt: 'How are foreign currency transactions translated at the date of the transaction?', options: ['At the end-of-year rate', 'At the spot exchange rate at the date of the transaction', 'At an average rate', 'At a fixed rate'], correctIndex: 1, explanation: 'Standard treatment for initial recognition.' },
        { id: 'if-18', type: 'mcq', title: 'Impairment', prompt: 'What is an "Impairment Loss"?', options: ['A mistake', 'The amount by which the carrying amount of an asset exceeds its recoverable amount', 'A physical break', 'A decrease in revenue'], correctIndex: 1, explanation: 'Assets must be written down if they are no longer worth their book value.' },
        { id: 'if-19', type: 'mcq', title: 'Consolidation', prompt: 'When must a company "Consolidate" its financial statements?', options: ['Every month', 'When it has control over one or more other entities (subsidiaries)', 'When it has a lot of cash', 'When it goes public'], correctIndex: 1, explanation: 'Consolidation presents the parent and subsidiaries as a single economic entity.' },
        { id: 'if-20', type: 'mcq', title: 'Events after Reporting Period', prompt: 'What is an "Adjusting Event"?', options: ['A birthday', 'An event that provides evidence of conditions that existed at the end of the reporting period', 'A new sale', 'A change in management'], correctIndex: 1, explanation: 'Adjusting events require changes to the financial statements for that period.' },
    {
          "id": "if-21",
          "type": "mcq",
          "title": "IFRS 15",
          "prompt": "What are performance obligations under IFRS 15?",
          "options": [
                "Distinct promises to transfer goods or services to a customer",
                "Only payment dates",
                "Only tax filings",
                "Only lease assets"
          ],
          "correctIndex": 0,
          "explanation": "Revenue recognition requires identifying performance obligations in the contract."
    },
    {
          "id": "if-22",
          "type": "mcq",
          "title": "IFRS 15",
          "prompt": "When is revenue recognized under IFRS 15?",
          "options": [
                "When control of the promised good or service transfers to the customer",
                "Only when cash is received",
                "Only when an invoice is printed",
                "At contract signature in every case"
          ],
          "correctIndex": 0,
          "explanation": "IFRS 15 focuses on transfer of control."
    },
    {
          "id": "if-23",
          "type": "mcq",
          "title": "IFRS 16",
          "prompt": "What does a lessee generally recognize under IFRS 16?",
          "options": [
                "A right-of-use asset and lease liability",
                "Only rent expense with no balance sheet impact",
                "Only inventory",
                "Only goodwill"
          ],
          "correctIndex": 0,
          "explanation": "Most leases are recognized on the lessee balance sheet as an ROU asset and lease liability."
    },
    {
          "id": "if-24",
          "type": "mcq",
          "title": "IFRS 9",
          "prompt": "What is IFRS 9 mainly associated with?",
          "options": [
                "Financial instruments",
                "Agriculture only",
                "Employee benefits only",
                "Inventory costing only"
          ],
          "correctIndex": 0,
          "explanation": "IFRS 9 covers classification, measurement, impairment, and hedge accounting for financial instruments."
    },
    {
          "id": "if-25",
          "type": "mcq",
          "title": "Expected Credit Loss",
          "prompt": "What does the expected credit loss model address?",
          "options": [
                "Recognition of credit losses based on expected losses, not only incurred losses",
                "Depreciation of buildings",
                "Inventory counting",
                "Lease term only"
          ],
          "correctIndex": 0,
          "explanation": "IFRS 9 uses expected credit loss principles for impairment of financial assets."
    },
    {
          "id": "if-26",
          "type": "mcq",
          "title": "IAS 36",
          "prompt": "When is an impairment test required?",
          "options": [
                "When indicators suggest an asset may be impaired, and annually for certain assets like goodwill",
                "Only when cash increases",
                "Only after every sale",
                "Never"
          ],
          "correctIndex": 0,
          "explanation": "IAS 36 requires impairment assessment when indicators exist, with special annual requirements for some assets."
    },
    {
          "id": "if-27",
          "type": "mcq",
          "title": "Cash-Generating Unit",
          "prompt": "What is a cash-generating unit?",
          "options": [
                "The smallest group of assets generating largely independent cash inflows",
                "A bank account only",
                "A tax form",
                "A payroll department"
          ],
          "correctIndex": 0,
          "explanation": "CGUs are used when impairment cannot be tested for an individual asset alone."
    },
    {
          "id": "if-28",
          "type": "mcq",
          "title": "IAS 12",
          "prompt": "What is a deferred tax liability?",
          "options": [
                "Tax payable in future periods due to taxable temporary differences",
                "A supplier invoice",
                "A marketing expense",
                "A cash donation"
          ],
          "correctIndex": 0,
          "explanation": "Deferred tax liabilities arise from temporary differences between accounting and tax bases."
    },
    {
          "id": "if-29",
          "type": "mcq",
          "title": "OCI",
          "prompt": "What is Other Comprehensive Income?",
          "options": [
                "Items of income and expense not recognized in profit or loss under specific standards",
                "Cash revenue only",
                "Accounts payable only",
                "Sales tax collected"
          ],
          "correctIndex": 0,
          "explanation": "OCI captures certain gains/losses outside profit or loss."
    },
    {
          "id": "if-30",
          "type": "mcq",
          "title": "Consolidation",
          "prompt": "What is the core principle for consolidating a subsidiary?",
          "options": [
                "Control by the parent over the investee",
                "Only supplier relationship",
                "Only shared office space",
                "Only same industry"
          ],
          "correctIndex": 0,
          "explanation": "Control is central to consolidation under IFRS."
    },
    {
          "id": "if-31",
          "type": "mcq",
          "title": "Fair Value Hierarchy",
          "prompt": "What is Level 1 fair value input?",
          "options": [
                "Quoted prices in active markets for identical assets or liabilities",
                "Management guess only",
                "Unobservable internal estimate only",
                "Historical cost"
          ],
          "correctIndex": 0,
          "explanation": "Level 1 inputs are the most observable fair value inputs."
    },
    {
          "id": "if-32",
          "type": "mcq",
          "title": "Provisions",
          "prompt": "When should a provision be recognized?",
          "options": [
                "Present obligation, probable outflow, and reliable estimate",
                "Any possible future idea",
                "Only when cash is paid",
                "Never"
          ],
          "correctIndex": 0,
          "explanation": "Provisions require obligation, probability, and reliable measurement."
    },
    {
          "id": "if-33",
          "type": "mcq",
          "title": "Contingent Liability",
          "prompt": "How is a contingent liability usually treated?",
          "options": [
                "Disclosed unless remote; recognized only when provision criteria are met",
                "Always recognized as revenue",
                "Always ignored",
                "Recorded as equity"
          ],
          "correctIndex": 0,
          "explanation": "Contingent liabilities are typically disclosed, not recognized, unless provision criteria apply."
    },
    {
          "id": "if-34",
          "type": "mcq",
          "title": "Inventory NRV",
          "prompt": "Under IFRS, inventory is measured at:",
          "options": [
                "Lower of cost and net realizable value",
                "Highest of cost and selling price",
                "Market price only",
                "Original invoice forever"
          ],
          "correctIndex": 0,
          "explanation": "Inventories are carried at the lower of cost and NRV."
    },
    {
          "id": "if-35",
          "type": "mcq",
          "title": "Development Costs",
          "prompt": "When can development costs be capitalized under IFRS?",
          "options": [
                "When specific technical and commercial feasibility criteria are met",
                "Always",
                "Never",
                "Only if paid in cash"
          ],
          "correctIndex": 0,
          "explanation": "IFRS allows capitalization of development costs when recognition criteria are satisfied."
    },
    {
          "id": "if-36",
          "type": "mcq",
          "title": "Goodwill",
          "prompt": "How is goodwill generally treated after acquisition under IFRS?",
          "options": [
                "Not amortized, but tested for impairment",
                "Amortized over one month",
                "Recorded as inventory",
                "Ignored after acquisition"
          ],
          "correctIndex": 0,
          "explanation": "Goodwill is subject to impairment testing rather than routine amortization under IFRS."
    },
    {
          "id": "if-37",
          "type": "mcq",
          "title": "IFRS vs GAAP",
          "prompt": "Which is a common IFRS/US GAAP difference?",
          "options": [
                "IFRS prohibits LIFO, while US GAAP permits it",
                "IFRS has no revenue rules",
                "GAAP uses no financial statements",
                "IFRS never uses fair value"
          ],
          "correctIndex": 0,
          "explanation": "LIFO is allowed under US GAAP but not under IFRS."
    },
    {
          "id": "if-38",
          "type": "mcq",
          "title": "Materiality Judgment",
          "prompt": "What makes an item material?",
          "options": [
                "It could reasonably influence decisions of financial statement users",
                "It is always above $1",
                "It is always cash",
                "It appears in a spreadsheet"
          ],
          "correctIndex": 0,
          "explanation": "Materiality depends on size, nature, and user decision impact."
    },
    {
          "id": "if-39",
          "type": "mcq",
          "title": "Disclosure Quality",
          "prompt": "What makes financial statement disclosures useful?",
          "options": [
                "Clear, entity-specific information about judgments, risks, estimates, and policies",
                "Generic boilerplate only",
                "Hiding assumptions",
                "Removing footnotes"
          ],
          "correctIndex": 0,
          "explanation": "Useful disclosures explain key judgments and risks in context."
    },
    {
          "id": "if-40",
          "type": "mcq",
          "title": "Advanced Reporting Judgment",
          "prompt": "A company changes an accounting estimate due to new information. How should it generally be treated?",
          "options": [
                "Prospectively, unless a standard requires otherwise",
                "Always as fraud",
                "Always restate all prior periods",
                "Never disclose"
          ],
          "correctIndex": 0,
          "explanation": "Changes in estimates are generally accounted for prospectively."
    }
  ]
};
