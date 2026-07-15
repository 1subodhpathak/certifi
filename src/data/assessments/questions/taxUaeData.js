import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level UAE Tax assessment. Current VAT and Corporate Tax coverage was checked and rewritten.
export const taxUaeData = {
  id: ASSESSMENT_TYPES.tax_uae,
  title: "UAE Taxation Professional Certification",
  shortTitle: "UAE Tax",
  category: "Accounting & Tax",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional assessment covering UAE VAT, Corporate Tax, FTA compliance, EmaraTax, Free Zone tax treatment, input VAT, tax invoices, records, transfer pricing, excise tax, disputes, and tax governance.",
  instructions: "Choose the best answer. Questions move from fundamentals to applied UAE VAT and Corporate Tax scenarios.",
  questions: [
    {
      id: "uae-01",
      type: "mcq",
      title: "FTA",
      prompt: "What is the FTA in the UAE tax system?",
      options: ["Federal Tax Authority", "Foreign Trade Agency", "Financial Transfer Authority", "Federal Treasury Account"],
      correctIndex: 0,
      explanation: "The Federal Tax Authority administers federal taxes such as VAT, excise tax, and corporate tax."
    },
    {
      id: "uae-02",
      type: "mcq",
      title: "VAT Introduction",
      prompt: "When was VAT introduced in the UAE?",
      options: ["2010", "2015", "2018", "2021"],
      correctIndex: 2,
      explanation: "UAE VAT started on 1 January 2018."
    },
    {
      id: "uae-03",
      type: "mcq",
      title: "VAT Rate",
      prompt: "What is the standard VAT rate in the UAE?",
      options: ["0%", "5%", "9%", "15%"],
      correctIndex: 1,
      explanation: "The standard VAT rate in the UAE is 5%."
    },
    {
      id: "uae-04",
      type: "mcq",
      title: "VAT Registration",
      prompt: "What is the mandatory VAT registration threshold for UAE businesses?",
      options: ["AED 50,000", "AED 187,500", "AED 375,000", "AED 1,000,000"],
      correctIndex: 2,
      explanation: "Businesses must register when taxable supplies and imports exceed AED 375,000, subject to rules."
    },
    {
      id: "uae-05",
      type: "mcq",
      title: "Voluntary VAT Registration",
      prompt: "What is the UAE voluntary VAT registration threshold?",
      options: ["AED 187,500", "AED 375,000", "AED 750,000", "AED 1,000,000"],
      correctIndex: 0,
      explanation: "Businesses may voluntarily register once taxable supplies/imports or expenses exceed AED 187,500."
    },
    {
      id: "uae-06",
      type: "mcq",
      title: "VAT Filing",
      prompt: "When are UAE VAT returns and payments generally due after the tax period ends?",
      options: ["Within 7 days", "Within 14 days", "Within 28 days", "Within 90 days"],
      correctIndex: 2,
      explanation: "VAT returns and related payments are generally due within 28 days from the end of the tax period."
    },
    {
      id: "uae-07",
      type: "mcq",
      title: "Tax Invoice",
      prompt: "When must a UAE VAT tax invoice generally be issued?",
      options: ["Within 14 calendar days from date of supply", "Only at year-end", "After the customer complains", "Never for B2B supplies"],
      correctIndex: 0,
      explanation: "UAE VAT rules generally require tax invoices within 14 days from the date of supply."
    },
    {
      id: "uae-08",
      type: "mcq",
      title: "Zero-Rated Supplies",
      prompt: "What is a zero-rated supply under UAE VAT?",
      options: ["No VAT charged and input tax may generally be recoverable if conditions are met", "A 5% taxable supply", "A supply outside accounting records", "A supply where input tax is never recoverable"],
      correctIndex: 0,
      explanation: "Zero-rated supplies are taxed at 0%, but related input tax may be recoverable."
    },
    {
      id: "uae-09",
      type: "mcq",
      title: "Exempt Supplies",
      prompt: "What is the main difference between exempt and zero-rated supplies?",
      options: ["Exempt supplies usually do not allow input tax recovery; zero-rated supplies may allow recovery", "They are exactly the same", "Exempt supplies are charged at 5%", "Zero-rated supplies are illegal"],
      correctIndex: 0,
      explanation: "Exempt supplies usually block related input tax recovery, while zero-rated supplies may permit it."
    },
    {
      id: "uae-10",
      type: "mcq",
      title: "Input VAT",
      prompt: "What does input VAT recovery mean?",
      options: ["Recovering eligible VAT paid on business purchases against output VAT", "Recovering employee salary", "Avoiding registration", "Claiming corporate tax exemption"],
      correctIndex: 0,
      explanation: "Registered businesses may recover eligible input VAT subject to UAE VAT rules."
    },
    {
      id: "uae-11",
      type: "mcq",
      title: "Reverse Charge",
      prompt: "What is reverse charge under UAE VAT?",
      options: ["The recipient accounts for VAT on certain imports or specified supplies", "Supplier pays VAT twice", "VAT is refunded automatically", "Invoices are reversed in accounting software"],
      correctIndex: 0,
      explanation: "Reverse charge shifts VAT accounting to the recipient in specific cases."
    },
    {
      id: "uae-12",
      type: "mcq",
      title: "VAT Group",
      prompt: "What is a VAT group?",
      options: ["Two or more eligible persons treated as a single taxable person for VAT", "A social club of accountants", "A group of customers", "An FTA audit team"],
      correctIndex: 0,
      explanation: "VAT grouping can simplify compliance and avoid VAT on intra-group supplies."
    },
    {
      id: "uae-13",
      type: "mcq",
      title: "Tax Records",
      prompt: "How long must UAE businesses generally keep VAT tax records?",
      options: ["1 year", "3 years", "5 years, with longer periods for some real estate records", "Records are optional"],
      correctIndex: 2,
      explanation: "Most UAE VAT records are kept for at least five years, with longer retention for some real estate cases."
    },
    {
      id: "uae-14",
      type: "mcq",
      title: "EmaraTax",
      prompt: "What is EmaraTax?",
      options: ["The FTA’s integrated digital platform for tax registration, filings, payments, and services", "A customs warehouse", "A bank account type", "A municipal tax"],
      correctIndex: 0,
      explanation: "EmaraTax is the FTA’s online tax services platform."
    },
    {
      id: "uae-15",
      type: "mcq",
      title: "Corporate Tax Effective Date",
      prompt: "UAE Corporate Tax generally applies to financial years starting on or after which date?",
      options: ["1 January 2018", "1 June 2023", "1 January 2020", "1 April 2026"],
      correctIndex: 1,
      explanation: "UAE Corporate Tax became applicable for financial years starting on or after 1 June 2023."
    },
    {
      id: "uae-16",
      type: "mcq",
      title: "Corporate Tax Rate",
      prompt: "What is the standard UAE Corporate Tax treatment for taxable income above AED 375,000?",
      options: ["0%", "5%", "9%", "20%"],
      correctIndex: 2,
      explanation: "A 9% corporate tax rate applies to taxable income above AED 375,000, subject to rules."
    },
    {
      id: "uae-17",
      type: "mcq",
      title: "Corporate Tax Threshold",
      prompt: "What rate applies to taxable income up to AED 375,000 under the standard UAE Corporate Tax regime?",
      options: ["0%", "5%", "9%", "15%"],
      correctIndex: 0,
      explanation: "Taxable income up to AED 375,000 is subject to 0% under the standard regime."
    },
    {
      id: "uae-18",
      type: "mcq",
      title: "CT Registration",
      prompt: "A business already registered for VAT asks whether it must also register for UAE Corporate Tax. What is the best answer?",
      options: ["No, VAT registration replaces CT registration", "Yes, CT registration is separately required where applicable", "Only if it has imports", "Only if it has no employees"],
      correctIndex: 1,
      explanation: "VAT and Corporate Tax are separate registrations/compliance obligations."
    },
    {
      id: "uae-19",
      type: "mcq",
      title: "Taxable Person",
      prompt: "What is UAE Corporate Tax levied on?",
      options: ["Net income or profit of corporations and other businesses", "Employee salaries only", "Only customs value", "Only cash withdrawals"],
      correctIndex: 0,
      explanation: "Corporate Tax is a direct tax on business profits."
    },
    {
      id: "uae-20",
      type: "mcq",
      title: "Free Zone Person",
      prompt: "What is a key corporate tax benefit for a Qualifying Free Zone Person?",
      options: ["0% on qualifying income, subject to conditions", "Automatic exemption from all taxes", "No accounting records required", "No VAT compliance ever"],
      correctIndex: 0,
      explanation: "Qualifying Free Zone Persons may benefit from 0% on qualifying income if conditions are met."
    },
    {
      id: "uae-21",
      type: "mcq",
      title: "Non-Qualifying Income",
      prompt: "What happens if Free Zone income does not meet qualifying conditions?",
      options: ["It may be subject to the normal corporate tax treatment", "It is always tax-free", "It is converted into VAT", "It is ignored"],
      correctIndex: 0,
      explanation: "Free Zone tax benefits depend on meeting qualifying income and compliance conditions."
    },
    {
      id: "uae-22",
      type: "mcq",
      title: "Small Business Relief",
      prompt: "What is the purpose of Small Business Relief under UAE Corporate Tax?",
      options: ["To reduce compliance burden for eligible small businesses", "To remove VAT registration for all businesses", "To tax employees", "To replace accounting records"],
      correctIndex: 0,
      explanation: "Small Business Relief supports eligible small businesses subject to conditions."
    },
    {
      id: "uae-23",
      type: "mcq",
      title: "Transfer Pricing",
      prompt: "Why are transfer pricing rules important under UAE Corporate Tax?",
      options: ["They require related-party transactions to follow arm’s-length pricing", "They set office rent", "They replace VAT invoices", "They apply only to individuals"],
      correctIndex: 0,
      explanation: "Transfer pricing prevents profit shifting through non-market related-party pricing."
    },
    {
      id: "uae-24",
      type: "mcq",
      title: "Related Parties",
      prompt: "A UAE company sells services to a related entity at an artificially low price. What is the main tax concern?",
      options: ["Arm’s-length transfer pricing risk", "VAT registration threshold only", "Office lease violation", "No issue in any case"],
      correctIndex: 0,
      explanation: "Related-party transactions must be priced consistently with arm’s-length principles."
    },
    {
      id: "uae-25",
      type: "mcq",
      title: "Withholding Tax",
      prompt: "What is the current UAE withholding tax rate under the corporate tax framework?",
      options: ["0%", "5%", "9%", "15%"],
      correctIndex: 0,
      explanation: "The UAE withholding tax rate is currently 0%."
    },
    {
      id: "uae-26",
      type: "mcq",
      title: "Pillar Two",
      prompt: "What does Pillar Two generally refer to?",
      options: ["OECD global minimum tax rules for large multinational groups", "A VAT invoice template", "A payroll tax on employees", "A customs inspection process"],
      correctIndex: 0,
      explanation: "Pillar Two aims for a global minimum effective tax rate for large multinational groups."
    },
    {
      id: "uae-27",
      type: "mcq",
      title: "Domestic Minimum Top-Up Tax",
      prompt: "What is the purpose of a domestic minimum top-up tax for large MNE groups?",
      options: ["To help ensure large groups meet a minimum effective tax rate in the UAE", "To replace VAT for all companies", "To tax personal employment income", "To eliminate accounting records"],
      correctIndex: 0,
      explanation: "A DMTT aligns with global minimum tax principles for large multinational groups."
    },
    {
      id: "uae-28",
      type: "mcq",
      title: "Excise Tax",
      prompt: "What are excise goods in the UAE?",
      options: ["Goods harmful to health or environment such as tobacco, energy drinks, carbonated/sweetened drinks depending on category", "All imported goods", "Only gold and jewelry", "All office supplies"],
      correctIndex: 0,
      explanation: "Excise tax applies to specified goods considered harmful to health or environment."
    },
    {
      id: "uae-29",
      type: "mcq",
      title: "Tax Audit",
      prompt: "Can the FTA conduct a tax audit?",
      options: ["Yes, to verify compliance and accuracy of tax filings and records", "No, only courts can review tax", "Only if the taxpayer asks", "Only for banks"],
      correctIndex: 0,
      explanation: "The FTA has authority to review records and verify tax compliance."
    },
    {
      id: "uae-30",
      type: "mcq",
      title: "Voluntary Disclosure",
      prompt: "When is a voluntary disclosure generally used?",
      options: ["To correct errors or omissions in a previously submitted tax return or assessment", "To create a new company logo", "To cancel all tax laws", "To register employees"],
      correctIndex: 0,
      explanation: "Voluntary disclosures help correct reported tax errors through proper channels."
    },
    {
      id: "uae-31",
      type: "mcq",
      title: "Tax Agent",
      prompt: "What is a Tax Agent in the UAE?",
      options: ["A person registered with the FTA to assist taxpayers with tax obligations", "A bank teller", "A customs broker only", "An informal advisor with no approval"],
      correctIndex: 0,
      explanation: "FTA-registered Tax Agents can assist taxable persons in complying with tax obligations."
    },
    {
      id: "uae-32",
      type: "mcq",
      title: "TDRC",
      prompt: "What does TDRC stand for?",
      options: ["Tax Dispute Resolution Committee", "Total Debt Recovery Company", "Tax Data Reporting Code", "Transfer Duty Review Center"],
      correctIndex: 0,
      explanation: "The TDRC handles certain tax dispute resolution matters."
    },
    {
      id: "uae-33",
      type: "mcq",
      title: "Economic Substance",
      prompt: "Why do Economic Substance rules matter in the UAE?",
      options: ["They require certain entities conducting relevant activities to demonstrate adequate substance", "They replace corporate tax returns", "They apply only to tourists", "They remove audit requirements"],
      correctIndex: 0,
      explanation: "Economic Substance rules target entities that earn income from relevant activities without sufficient local substance."
    },
    {
      id: "uae-34",
      type: "mcq",
      title: "Accounting Records",
      prompt: "Why are accounting records important for UAE Corporate Tax?",
      options: ["They support taxable income computation, deductions, elections, and audit defense", "They are optional for all companies", "They only help design invoices", "They replace contracts"],
      correctIndex: 0,
      explanation: "Corporate Tax compliance depends on reliable books and supporting documentation."
    },
    {
      id: "uae-35",
      type: "mcq",
      title: "Deductible Expense",
      prompt: "Which expense is generally more likely to be deductible for Corporate Tax?",
      options: ["A business expense incurred wholly and exclusively for business, subject to limitations", "Owner’s personal vacation", "Undocumented cash gifts", "Penalties for tax violations"],
      correctIndex: 0,
      explanation: "Deductibility depends on business purpose, documentation, and statutory limitations."
    },
    {
      id: "uae-36",
      type: "mcq",
      title: "VAT vs Corporate Tax",
      prompt: "Which statement is correct?",
      options: ["VAT is an indirect tax on supplies; Corporate Tax is a direct tax on business profits", "Both are the same tax", "Corporate Tax is charged on every invoice at 5%", "VAT applies only to salaries"],
      correctIndex: 0,
      explanation: "VAT and Corporate Tax have different tax bases, filing logic, and compliance obligations."
    },
    {
      id: "uae-37",
      type: "mcq",
      title: "Tax Governance",
      prompt: "Which control best improves UAE tax compliance?",
      options: ["A monthly close checklist covering VAT, CT data, reconciliations, invoices, exemptions, and records", "Waiting until audit starts", "Keeping only screenshots", "Relying only on verbal approvals"],
      correctIndex: 0,
      explanation: "Good tax governance relies on periodic review, documentation, and reconciliations."
    },
    {
      id: "uae-38",
      type: "mcq",
      title: "Input Tax Apportionment",
      prompt: "A business has taxable and exempt supplies. What may be required for input VAT?",
      options: ["Input tax apportionment to separate recoverable and non-recoverable VAT", "Claiming all input VAT automatically", "Ignoring exempt activity", "Moving all expenses to payroll"],
      correctIndex: 0,
      explanation: "Mixed supplies may require input VAT apportionment under UAE VAT rules."
    },
    {
      id: "uae-39",
      type: "mcq",
      title: "Late Registration Risk",
      prompt: "What is the best response when a business realizes it crossed the VAT threshold months ago?",
      options: ["Register and assess late registration/payment exposure through the proper FTA process", "Ignore it until next year", "Stop issuing invoices", "Delete past sales"],
      correctIndex: 0,
      explanation: "Late registration should be addressed through proper tax compliance and remediation."
    },
    {
      id: "uae-40",
      type: "mcq",
      title: "Professional Scenario",
      prompt: "A Free Zone company earns income from mainland UAE customers. What should it evaluate first?",
      options: ["Whether the income qualifies for Free Zone 0% treatment or is taxable at the normal CT rate", "Whether VAT disappears", "Whether accounting records can be skipped", "Whether invoices can omit customer details"],
      correctIndex: 0,
      explanation: "Free Zone treatment depends on qualifying income rules, customer type, activity, and compliance conditions."
    },
  ]
};
