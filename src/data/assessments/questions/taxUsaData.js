import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level USA Tax assessment. Current filing and deduction references were checked and rewritten.
export const taxUsaData = {
  id: ASSESSMENT_TYPES.tax_usa,
  title: "USA Taxation Professional Certification",
  shortTitle: "USA Tax",
  category: "Accounting & Tax",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional assessment covering IRS filing concepts, Form 1040, W-2, 1099s, deductions, credits, payroll taxes, business entities, capital gains, estimated tax, sales tax nexus, audits, and tax documentation.",
  instructions: "Choose the best answer. Questions move from US tax basics to practical individual, business, payroll, and compliance judgment.",
  questions: [
    {
      id: "us-01",
      type: "mcq",
      title: "IRS",
      prompt: "What is the IRS?",
      options: ["Internal Revenue Service", "International Revenue System", "Income Reporting Standard", "Investment Registry Service"],
      correctIndex: 0,
      explanation: "The IRS is the US federal agency responsible for administering and collecting federal taxes."
    },
    {
      id: "us-02",
      type: "mcq",
      title: "Form 1040",
      prompt: "Which form is the standard US individual income tax return?",
      options: ["Form W-2", "Form 1040", "Form 1099-NEC", "Form 1120"],
      correctIndex: 1,
      explanation: "Form 1040 is used by individuals to file US federal income tax returns."
    },
    {
      id: "us-03",
      type: "mcq",
      title: "Tax Day",
      prompt: "For the 2025 tax year filed in 2026, what was the standard federal individual filing deadline?",
      options: ["January 31, 2026", "April 15, 2026", "June 30, 2026", "October 15, 2026"],
      correctIndex: 1,
      explanation: "The IRS announced April 15, 2026 as the deadline for most individual 2025 federal returns."
    },
    {
      id: "us-04",
      type: "mcq",
      title: "Extension",
      prompt: "What does a standard federal filing extension generally extend?",
      options: ["Time to file, not time to pay", "Time to pay, not time to file", "Both time to file and time to pay automatically", "Only state taxes"],
      correctIndex: 0,
      explanation: "An extension generally gives more time to file the return, but taxes owed should still be paid by the original due date."
    },
    {
      id: "us-05",
      type: "mcq",
      title: "Standard Deduction",
      prompt: "For tax year 2025, what is the standard deduction for a single filer according to IRS guidance?",
      options: ["$10,000", "$12,000", "$15,750", "$31,500"],
      correctIndex: 2,
      explanation: "The IRS listed $15,750 as the standard deduction for single or married filing separately for tax year 2025."
    },
    {
      id: "us-06",
      type: "mcq",
      title: "Married Filing Jointly",
      prompt: "For tax year 2025, what is the standard deduction for married filing jointly?",
      options: ["$15,750", "$23,625", "$31,500", "$50,000"],
      correctIndex: 2,
      explanation: "The IRS listed $31,500 for married filing jointly or qualifying surviving spouse for tax year 2025."
    },
    {
      id: "us-07",
      type: "mcq",
      title: "Head of Household",
      prompt: "For tax year 2025, what is the standard deduction for head of household?",
      options: ["$15,750", "$23,625", "$31,500", "$7,500"],
      correctIndex: 1,
      explanation: "The IRS listed $23,625 for head of household for tax year 2025."
    },
    {
      id: "us-08",
      type: "mcq",
      title: "W-2",
      prompt: "What is Form W-2 used for?",
      options: ["Reporting wages and taxes withheld for employees", "Reporting independent contractor payments only", "Filing a corporate tax return", "Claiming a sales tax exemption"],
      correctIndex: 0,
      explanation: "Employers provide Form W-2 to employees and report wage and withholding information."
    },
    {
      id: "us-09",
      type: "mcq",
      title: "1099-NEC",
      prompt: "What is Form 1099-NEC commonly used for?",
      options: ["Reporting nonemployee compensation", "Reporting employee salary only", "Reporting corporate dividends only", "Filing sales tax"],
      correctIndex: 0,
      explanation: "Form 1099-NEC is used to report payments to independent contractors and other nonemployees."
    },
    {
      id: "us-10",
      type: "mcq",
      title: "W-4",
      prompt: "What is Form W-4 used for?",
      options: ["Employee withholding elections", "Corporate income tax filing", "Partnership income allocation", "Sales tax remittance"],
      correctIndex: 0,
      explanation: "Employees use Form W-4 to tell employers how much federal income tax to withhold."
    },
    {
      id: "us-11",
      type: "mcq",
      title: "AGI",
      prompt: "What does AGI stand for?",
      options: ["Adjusted Gross Income", "Annual Government Income", "Asset Growth Index", "Accounting Gain Item"],
      correctIndex: 0,
      explanation: "AGI is gross income minus specific adjustments."
    },
    {
      id: "us-12",
      type: "mcq",
      title: "Tax Credit",
      prompt: "How does a tax credit differ from a deduction?",
      options: ["A credit reduces tax owed dollar-for-dollar; a deduction reduces taxable income", "A deduction is always better", "A credit increases income", "They are identical"],
      correctIndex: 0,
      explanation: "Tax credits directly reduce tax liability, while deductions reduce income subject to tax."
    },
    {
      id: "us-13",
      type: "mcq",
      title: "Itemized Deduction",
      prompt: "When should a taxpayer generally itemize deductions?",
      options: ["When itemized deductions exceed the standard deduction", "Always", "Only if they have no income", "Only if they are a corporation"],
      correctIndex: 0,
      explanation: "Taxpayers generally choose the larger benefit between itemized deductions and the standard deduction."
    },
    {
      id: "us-14",
      type: "mcq",
      title: "Schedule A",
      prompt: "What is Schedule A used for?",
      options: ["Itemized deductions", "Business income for sole proprietors", "Corporate return summary", "Payroll tax deposits"],
      correctIndex: 0,
      explanation: "Schedule A supports itemized deductions such as certain medical expenses, taxes, interest, and charitable contributions."
    },
    {
      id: "us-15",
      type: "mcq",
      title: "Schedule C",
      prompt: "What is Schedule C used for?",
      options: ["Reporting profit or loss from a sole proprietorship", "Reporting employee wages", "Reporting corporate income tax", "Reporting partnership K-1 allocations only"],
      correctIndex: 0,
      explanation: "Sole proprietors commonly report business income and expenses on Schedule C."
    },
    {
      id: "us-16",
      type: "mcq",
      title: "Self-Employment Tax",
      prompt: "What does self-employment tax generally cover?",
      options: ["Social Security and Medicare taxes for self-employed individuals", "Only state sales tax", "Only property tax", "Corporate franchise tax"],
      correctIndex: 0,
      explanation: "Self-employed individuals generally pay both employee and employer portions of Social Security and Medicare tax."
    },
    {
      id: "us-17",
      type: "mcq",
      title: "FICA",
      prompt: "What does FICA tax fund?",
      options: ["Social Security and Medicare", "National parks only", "Federal corporate grants", "State income tax refunds"],
      correctIndex: 0,
      explanation: "FICA includes Social Security and Medicare payroll taxes."
    },
    {
      id: "us-18",
      type: "mcq",
      title: "C Corporation",
      prompt: "Which form is commonly used for a C corporation federal income tax return?",
      options: ["Form 1120", "Form 1065", "Form 1040", "Form W-2"],
      correctIndex: 0,
      explanation: "Form 1120 is the US Corporation Income Tax Return."
    },
    {
      id: "us-19",
      type: "mcq",
      title: "S Corporation",
      prompt: "What is a key tax characteristic of an S corporation?",
      options: ["Income generally passes through to shareholders", "It pays no reporting forms", "It can have unlimited foreign shareholders", "It is always tax-exempt"],
      correctIndex: 0,
      explanation: "S corporations generally pass income, losses, deductions, and credits through to shareholders."
    },
    {
      id: "us-20",
      type: "mcq",
      title: "Partnership",
      prompt: "Which form is commonly used for a partnership return?",
      options: ["Form 1065", "Form 1120", "Form 1040-SR", "Form W-4"],
      correctIndex: 0,
      explanation: "Partnerships commonly file Form 1065 and issue Schedule K-1s to partners."
    },
    {
      id: "us-21",
      type: "mcq",
      title: "Schedule K-1",
      prompt: "What is Schedule K-1 used for?",
      options: ["Reporting a partner/shareholder/beneficiary share of income, deductions, credits, and other items", "Reporting only employee wages", "Filing sales tax", "Reporting mortgage interest only"],
      correctIndex: 0,
      explanation: "Pass-through entities use K-1s to report each owner’s allocable tax items."
    },
    {
      id: "us-22",
      type: "mcq",
      title: "Pass-Through Entity",
      prompt: "Which entity is generally treated as pass-through for federal income tax?",
      options: ["Partnership", "C corporation only", "Federal agency", "Payroll bureau"],
      correctIndex: 0,
      explanation: "Partnerships and S corporations generally pass income to owners rather than paying entity-level federal income tax like C corporations."
    },
    {
      id: "us-23",
      type: "mcq",
      title: "Capital Gains",
      prompt: "What is the holding period for long-term capital gains treatment?",
      options: ["More than one year", "More than one month", "Exactly six months", "No holding period"],
      correctIndex: 0,
      explanation: "Assets held more than one year generally qualify for long-term capital gain treatment."
    },
    {
      id: "us-24",
      type: "mcq",
      title: "Wash Sale",
      prompt: "What is a wash sale rule designed to prevent?",
      options: ["Claiming a tax loss while quickly repurchasing substantially identical securities", "Paying payroll taxes", "Buying groceries tax-free", "Reporting W-2 wages"],
      correctIndex: 0,
      explanation: "The wash sale rule may disallow losses when substantially identical securities are repurchased within the rule’s window."
    },
    {
      id: "us-25",
      type: "mcq",
      title: "Estimated Tax",
      prompt: "Who may need to make estimated tax payments?",
      options: ["Taxpayers with income not fully covered by withholding, such as self-employment or investment income", "Only W-2 employees with perfect withholding", "Only minors", "Only tax-exempt nonprofits"],
      correctIndex: 0,
      explanation: "Estimated payments help cover income tax and self-employment tax when withholding is insufficient."
    },
    {
      id: "us-26",
      type: "mcq",
      title: "Safe Harbor",
      prompt: "What is the purpose of estimated tax safe harbor rules?",
      options: ["To avoid underpayment penalties if required payment thresholds are met", "To eliminate all taxes", "To file state sales tax", "To cancel payroll tax"],
      correctIndex: 0,
      explanation: "Safe harbor rules help taxpayers avoid penalties despite final tax liability differences."
    },
    {
      id: "us-27",
      type: "mcq",
      title: "State Income Tax",
      prompt: "Do all US states impose individual wage income tax?",
      options: ["Yes, every state", "No, some states do not tax wage income", "Only coastal states", "Only states with sales tax"],
      correctIndex: 1,
      explanation: "Some states do not impose a state income tax on wages."
    },
    {
      id: "us-28",
      type: "mcq",
      title: "Sales Tax",
      prompt: "Who generally administers sales tax in the United States?",
      options: ["State and local governments", "The IRS as a federal sales tax", "The Federal Reserve", "Only employers"],
      correctIndex: 0,
      explanation: "The US has no federal sales tax; state and local jurisdictions generally administer sales tax."
    },
    {
      id: "us-29",
      type: "mcq",
      title: "Nexus",
      prompt: "What does sales tax nexus mean?",
      options: ["A connection that can require a business to collect/remit sales tax in a state", "A payroll form", "A federal refund type", "A corporate charter"],
      correctIndex: 0,
      explanation: "Nexus can arise from physical presence, economic thresholds, or marketplace rules."
    },
    {
      id: "us-30",
      type: "mcq",
      title: "Depreciation",
      prompt: "What is depreciation for tax purposes?",
      options: ["Recovering the cost of certain assets over time", "Taxing cash twice", "Recording only revenue", "Claiming payroll withholding"],
      correctIndex: 0,
      explanation: "Depreciation allocates asset cost over the recovery period under tax rules."
    },
    {
      id: "us-31",
      type: "mcq",
      title: "Section 179",
      prompt: "What is Section 179 generally used for?",
      options: ["Expensing certain qualifying business property, subject to limits", "Reporting employee tips", "Filing individual tax extension", "Paying sales tax"],
      correctIndex: 0,
      explanation: "Section 179 allows businesses to expense qualifying property rather than depreciating it over many years, subject to limits."
    },
    {
      id: "us-32",
      type: "mcq",
      title: "QBI Deduction",
      prompt: "What is the Qualified Business Income deduction generally associated with?",
      options: ["Certain pass-through business income", "Employee withholding only", "Capital losses only", "Sales tax refunds"],
      correctIndex: 0,
      explanation: "QBI under Section 199A can apply to eligible pass-through business income subject to limitations."
    },
    {
      id: "us-33",
      type: "mcq",
      title: "AMT",
      prompt: "What is the Alternative Minimum Tax designed to do?",
      options: ["Ensure some taxpayers pay at least a minimum amount despite preferences and deductions", "Replace payroll tax", "Tax every sale", "Eliminate itemized deductions for everyone"],
      correctIndex: 0,
      explanation: "AMT is a parallel tax system that limits certain preferences."
    },
    {
      id: "us-34",
      type: "mcq",
      title: "Taxable vs Refundable Credits",
      prompt: "What is a refundable tax credit?",
      options: ["A credit that can generate a refund even if it exceeds tax owed", "A deduction from business revenue only", "A state sales tax exemption", "A penalty waiver"],
      correctIndex: 0,
      explanation: "Refundable credits can exceed tax liability and still produce a refund."
    },
    {
      id: "us-35",
      type: "mcq",
      title: "Payroll Deposit",
      prompt: "What must employers generally do with withheld federal income and FICA taxes?",
      options: ["Deposit them according to IRS deposit schedules", "Keep them as company revenue", "Pay them only at liquidation", "Report them only to employees"],
      correctIndex: 0,
      explanation: "Employers must deposit withheld and employer payroll taxes on required schedules."
    },
    {
      id: "us-36",
      type: "mcq",
      title: "1099-K",
      prompt: "What does Form 1099-K generally report?",
      options: ["Payment card and third-party network transactions", "Employee wages", "Corporate dividend payments only", "Real estate depreciation"],
      correctIndex: 0,
      explanation: "Form 1099-K reports payment settlement transactions from payment cards and third-party networks."
    },
    {
      id: "us-37",
      type: "mcq",
      title: "Audit",
      prompt: "What is an IRS audit?",
      options: ["A review of accounts and financial information to verify correct tax reporting", "A guaranteed penalty", "A tax refund request", "A bank account opening"],
      correctIndex: 0,
      explanation: "Audits verify that returns and records comply with tax law."
    },
    {
      id: "us-38",
      type: "mcq",
      title: "Records",
      prompt: "Why should taxpayers keep supporting documentation?",
      options: ["To substantiate income, deductions, credits, and basis if questioned", "Only for decoration", "To avoid filing returns", "To replace bank accounts"],
      correctIndex: 0,
      explanation: "Good records support tax positions and help resolve notices or audits."
    },
    {
      id: "us-39",
      type: "mcq",
      title: "Notice Response",
      prompt: "What is the best response to an IRS notice that appears incorrect?",
      options: ["Ignore it", "Read the notice, compare it with records, respond by the deadline, and seek professional help if needed", "Delete all records", "File a new W-2"],
      correctIndex: 1,
      explanation: "IRS notices should be reviewed and answered timely with documentation."
    },
    {
      id: "us-40",
      type: "mcq",
      title: "Professional Judgment",
      prompt: "A freelancer receives both 1099-NEC and payment app reports for the same income. What should they do?",
      options: ["Report the income twice without review", "Reconcile forms to books and report actual income once with support for duplicates", "Ignore all 1099s", "Report only cash payments"],
      correctIndex: 1,
      explanation: "Taxpayers should reconcile third-party reports to books and avoid both omission and double-counting."
    },
  ]
};
