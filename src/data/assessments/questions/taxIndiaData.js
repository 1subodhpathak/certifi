import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level India Tax assessment. Current-rule questions were checked and rewritten for cleaner professional coverage.
export const taxIndiaData = {
  id: ASSESSMENT_TYPES.tax_india,
  title: "India Taxation Professional Certification",
  shortTitle: "India Tax",
  category: "Accounting & Tax",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional assessment covering Indian direct tax, GST, TDS/TCS, income tax return concepts, PAN/TAN, AIS/Form 26AS, ITC, GST returns, e-way bills, e-invoicing, capital gains, tax audit, and compliance controls.",
  instructions: "Choose the best answer. Questions move from basic tax terminology to practical compliance scenarios and current professional tax judgment.",
  questions: [
    {
      id: "ti-01",
      type: "mcq",
      title: "Assessment Year",
      prompt: "What is the Assessment Year (AY) in Indian income tax? ",
      options: ["The year in which income is earned", "The year in which income of the previous year is assessed and taxed", "A calendar year only", "The year a company is incorporated"],
      correctIndex: 1,
      explanation: "The previous financial year’s income is assessed in the following assessment year."
    },
    {
      id: "ti-02",
      type: "mcq",
      title: "Financial Year",
      prompt: "Income earned between 1 April 2025 and 31 March 2026 is generally assessed in which AY?",
      options: ["AY 2025-26", "AY 2026-27", "AY 2027-28", "AY 2024-25"],
      correctIndex: 2,
      explanation: "The financial year 2025-26 is assessed in AY 2026-27."
    },
    {
      id: "ti-03",
      type: "mcq",
      title: "GST Basics",
      prompt: "What does GST stand for in India?",
      options: ["Government Sales Tax", "Goods and Services Tax", "Global Standard Tax", "General Supply Transaction"],
      correctIndex: 1,
      explanation: "GST is India’s unified indirect tax on supply of goods and services."
    },
    {
      id: "ti-04",
      type: "mcq",
      title: "Intra-State GST",
      prompt: "For an intra-state taxable supply in India, which GST components normally apply?",
      options: ["IGST only", "CGST and SGST/UTGST", "Customs duty only", "TDS and TCS"],
      correctIndex: 1,
      explanation: "Intra-state supplies usually attract CGST plus SGST or UTGST."
    },
    {
      id: "ti-05",
      type: "mcq",
      title: "Inter-State GST",
      prompt: "Which GST is generally charged on inter-state supplies and imports?",
      options: ["CGST", "SGST", "IGST", "Professional Tax"],
      correctIndex: 2,
      explanation: "IGST applies to inter-state supplies and imports."
    },
    {
      id: "ti-06",
      type: "mcq",
      title: "Input Tax Credit",
      prompt: "What is Input Tax Credit (ITC) under GST?",
      options: ["A bank loan for taxpayers", "Credit of GST paid on eligible purchases against GST payable on outward supplies", "A discount offered by suppliers", "A refund of income tax"],
      correctIndex: 1,
      explanation: "ITC prevents cascading by allowing eligible input tax to offset output tax liability."
    },
    {
      id: "ti-07",
      type: "mcq",
      title: "GSTR-2B",
      prompt: "What is the practical role of GSTR-2B for GST taxpayers?",
      options: ["It replaces all invoices", "It is an auto-drafted ITC statement used to review eligible input tax credit", "It is the annual income tax return", "It is a payroll report"],
      correctIndex: 1,
      explanation: "GSTR-2B helps taxpayers reconcile supplier-reported invoices and ITC eligibility."
    },
    {
      id: "ti-08",
      type: "mcq",
      title: "GSTR-3B",
      prompt: "What is GSTR-3B primarily used for?",
      options: ["Monthly or quarterly summary return for GST liability and ITC claim", "Annual audit report only", "Income tax refund form", "TDS certificate"],
      correctIndex: 0,
      explanation: "GSTR-3B reports GST output tax, eligible ITC, and tax payment."
    },
    {
      id: "ti-09",
      type: "mcq",
      title: "GSTR-1",
      prompt: "What is GSTR-1 used for?",
      options: ["Reporting outward supplies made by the taxpayer", "Reporting personal salary income", "Reporting bank interest only", "Claiming housing loan deduction"],
      correctIndex: 0,
      explanation: "GSTR-1 captures invoice-level outward supply details."
    },
    {
      id: "ti-10",
      type: "mcq",
      title: "E-Way Bill",
      prompt: "When is an e-way bill generally required for inter-state movement of goods?",
      options: ["For every movement regardless of value", "For consignment value exceeding ₹50,000, subject to GST rules", "Only for services", "Only for exports by air"],
      correctIndex: 1,
      explanation: "E-way bills track movement of goods and are generally required above the threshold."
    },
    {
      id: "ti-11",
      type: "mcq",
      title: "E-Invoicing",
      prompt: "What is the key purpose of GST e-invoicing?",
      options: ["To generate payroll slips", "To report specified B2B invoices to the Invoice Registration Portal and obtain an IRN", "To replace all income tax returns", "To avoid maintaining books"],
      correctIndex: 1,
      explanation: "E-invoicing standardizes and authenticates invoice data through the IRP."
    },
    {
      id: "ti-12",
      type: "mcq",
      title: "Reverse Charge",
      prompt: "What is Reverse Charge Mechanism (RCM) under GST?",
      options: ["Supplier pays tax twice", "Recipient pays GST instead of the supplier for specified supplies", "GST is paid only after refund", "Tax is charged backward on old invoices"],
      correctIndex: 1,
      explanation: "Under RCM, the receiver is liable to pay tax for specified categories of supply."
    },
    {
      id: "ti-13",
      type: "mcq",
      title: "Composition Scheme",
      prompt: "What is the GST Composition Scheme designed for?",
      options: ["Large multinational companies only", "Small taxpayers who pay tax at prescribed rates with simplified compliance", "Exporters only", "Tax-free businesses only"],
      correctIndex: 1,
      explanation: "The scheme reduces compliance burden for eligible small taxpayers."
    },
    {
      id: "ti-14",
      type: "mcq",
      title: "Zero-Rated Supply",
      prompt: "Which supply is commonly treated as zero-rated under GST?",
      options: ["Local restaurant service", "Export of goods or services", "Sale to an unregistered local consumer", "Internal branch memo with no supply"],
      correctIndex: 1,
      explanation: "Exports and supplies to SEZs are commonly treated as zero-rated subject to conditions."
    },
    {
      id: "ti-15",
      type: "mcq",
      title: "LUT",
      prompt: "Why does an exporter furnish a Letter of Undertaking (LUT) under GST?",
      options: ["To export without payment of IGST subject to conditions", "To register for PAN", "To file personal income tax", "To avoid issuing invoices"],
      correctIndex: 0,
      explanation: "An LUT allows eligible exporters to make zero-rated supplies without upfront IGST payment."
    },
    {
      id: "ti-16",
      type: "mcq",
      title: "Place of Supply",
      prompt: "Why is place of supply important under GST?",
      options: ["It determines whether CGST/SGST or IGST applies", "It determines employee salary", "It sets corporate tax rate", "It replaces invoicing"],
      correctIndex: 0,
      explanation: "Place of supply helps classify a transaction as intra-state or inter-state."
    },
    {
      id: "ti-17",
      type: "mcq",
      title: "TDS",
      prompt: "What does TDS mean in Indian taxation?",
      options: ["Tax Deducted at Source", "Total Debt Schedule", "Tax Deposit Slip", "Tax Data Service"],
      correctIndex: 0,
      explanation: "TDS requires the payer to deduct tax before making specified payments and deposit it with the government."
    },
    {
      id: "ti-18",
      type: "mcq",
      title: "TAN",
      prompt: "Who generally needs a TAN?",
      options: ["Anyone who deducts or collects tax at source", "Every consumer buying groceries", "Only exporters", "Only GST composition dealers"],
      correctIndex: 0,
      explanation: "TAN is required for entities responsible for TDS/TCS compliance."
    },
    {
      id: "ti-19",
      type: "mcq",
      title: "PAN",
      prompt: "What is PAN used for?",
      options: ["Permanent tax identification for income tax and financial transactions", "GST warehouse address only", "A transport permit", "A customs shipping code"],
      correctIndex: 0,
      explanation: "PAN is a key taxpayer identifier issued by the Income Tax Department."
    },
    {
      id: "ti-20",
      type: "mcq",
      title: "Form 16",
      prompt: "What is Form 16?",
      options: ["Employer-issued certificate showing salary and TDS details", "GST invoice format", "A customs clearance form", "A company incorporation certificate"],
      correctIndex: 0,
      explanation: "Form 16 helps salaried individuals file income tax returns by summarizing salary and TDS."
    },
    {
      id: "ti-21",
      type: "mcq",
      title: "AIS and TIS",
      prompt: "What is the purpose of AIS/TIS in income tax compliance?",
      options: ["To provide summarized taxpayer information such as TDS, interest, dividends, securities transactions, and other reported data", "To replace bank statements", "To calculate GST only", "To issue invoices"],
      correctIndex: 0,
      explanation: "AIS and TIS help taxpayers review information reported to the tax department before filing."
    },
    {
      id: "ti-22",
      type: "mcq",
      title: "Form 26AS",
      prompt: "What does Form 26AS mainly show?",
      options: ["Tax credits such as TDS, TCS, advance tax, and self-assessment tax", "GST outward invoices only", "Inventory valuation", "Company payroll headcount"],
      correctIndex: 0,
      explanation: "Form 26AS is a tax credit statement useful for matching tax deducted and paid."
    },
    {
      id: "ti-23",
      type: "mcq",
      title: "Standard Deduction",
      prompt: "For salaried taxpayers under the current new tax regime, what is the standard deduction limit reflected in AY 2026-27 validation rules?",
      options: ["₹25,000", "₹50,000", "₹75,000", "₹1,50,000"],
      correctIndex: 2,
      explanation: "AY 2026-27 validation rules reflect a ₹75,000 standard deduction for employees under the new regime."
    },
    {
      id: "ti-24",
      type: "mcq",
      title: "Section 80C",
      prompt: "Which deduction section commonly covers eligible investments such as PPF, ELSS, LIC premium, and certain principal repayments under the old regime?",
      options: ["Section 10", "Section 80C", "Section 44AB", "Section 115BAC"],
      correctIndex: 1,
      explanation: "Section 80C is a common deduction section under the old tax regime."
    },
    {
      id: "ti-25",
      type: "mcq",
      title: "Advance Tax",
      prompt: "When is advance tax generally relevant?",
      options: ["When estimated tax liability exceeds ₹10,000 during the financial year", "Only when there is no PAN", "Only for GST-registered businesses", "Only after a tax audit"],
      correctIndex: 0,
      explanation: "Advance tax is paid in installments during the year when liability crosses the threshold."
    },
    {
      id: "ti-26",
      type: "mcq",
      title: "Self-Assessment Tax",
      prompt: "What is self-assessment tax?",
      options: ["Tax paid after computing final tax liability before filing the return", "Tax deducted by employer only", "GST collected by supplier", "A customs penalty"],
      correctIndex: 0,
      explanation: "Self-assessment tax covers unpaid final tax liability before return filing."
    },
    {
      id: "ti-27",
      type: "mcq",
      title: "Capital Gains",
      prompt: "What is a capital gain?",
      options: ["Profit from sale or transfer of a capital asset", "Monthly salary", "GST output liability", "Bank overdraft"],
      correctIndex: 0,
      explanation: "Capital gains arise when a capital asset is sold or transferred for a gain."
    },
    {
      id: "ti-28",
      type: "mcq",
      title: "STCG vs LTCG",
      prompt: "What primarily determines whether a capital gain is short-term or long-term?",
      options: ["The holding period and asset class", "The taxpayer’s city", "Whether GST was paid", "The bank used for payment"],
      correctIndex: 0,
      explanation: "Holding period thresholds vary by asset class and determine STCG or LTCG treatment."
    },
    {
      id: "ti-29",
      type: "mcq",
      title: "MAT",
      prompt: "What is Minimum Alternate Tax (MAT) intended to do?",
      options: ["Ensure certain companies with book profits pay a minimum tax", "Replace GST for exporters", "Tax only salaried individuals", "Eliminate all deductions"],
      correctIndex: 0,
      explanation: "MAT prevents companies from paying very low tax despite reporting book profits."
    },
    {
      id: "ti-30",
      type: "mcq",
      title: "Tax Audit",
      prompt: "What is a tax audit under Section 44AB?",
      options: ["Mandatory audit for eligible businesses/professionals crossing specified limits", "Voluntary bank reconciliation", "GST registration certificate", "A payroll return"],
      correctIndex: 0,
      explanation: "Section 44AB requires audit in specified cases depending on turnover, receipts, and other conditions."
    },
    {
      id: "ti-31",
      type: "mcq",
      title: "Presumptive Taxation",
      prompt: "What is the purpose of presumptive taxation under sections such as 44AD/44ADA?",
      options: ["Simplified taxation for eligible small businesses and professionals", "Tax exemption for all income", "GST refund mechanism", "Audit of foreign companies only"],
      correctIndex: 0,
      explanation: "Presumptive schemes reduce compliance by allowing income to be computed at prescribed rates."
    },
    {
      id: "ti-32",
      type: "mcq",
      title: "TCS",
      prompt: "What does TCS mean?",
      options: ["Tax Collected at Source", "Total Credit Summary", "Tax Computation Sheet", "Trade Compliance System"],
      correctIndex: 0,
      explanation: "TCS requires specified sellers/collectors to collect tax from buyers on specified transactions."
    },
    {
      id: "ti-33",
      type: "mcq",
      title: "ITR-V",
      prompt: "What is ITR-V used for?",
      options: ["Verification acknowledgement for electronically filed income tax returns in specified cases", "GST annual return", "TDS challan", "Tax audit form"],
      correctIndex: 0,
      explanation: "ITR-V is used to verify certain returns when e-verification is not completed otherwise."
    },
    {
      id: "ti-34",
      type: "mcq",
      title: "Belated Return",
      prompt: "What is a belated return?",
      options: ["A return filed after the original due date but within the permitted statutory timeline", "A return filed before the year starts", "A GST invoice revision", "A customs declaration"],
      correctIndex: 0,
      explanation: "Belated returns allow filing after the due date, subject to restrictions and late fee/interest."
    },
    {
      id: "ti-35",
      type: "mcq",
      title: "Revised Return",
      prompt: "When is a revised return used?",
      options: ["To correct omissions or wrong statements in an already filed return within the permitted time", "To cancel PAN", "To change GST rate", "To file payroll tax only"],
      correctIndex: 0,
      explanation: "A revised return corrects errors in the original or belated return."
    },
    {
      id: "ti-36",
      type: "mcq",
      title: "GST Registration",
      prompt: "When must a business consider GST registration?",
      options: ["When aggregate turnover or transaction type crosses applicable GST thresholds or requires compulsory registration", "Only if it has employees", "Only if it sells shares", "Only after income tax audit"],
      correctIndex: 0,
      explanation: "GST registration depends on turnover, nature of supply, state, and compulsory registration rules."
    },
    {
      id: "ti-37",
      type: "mcq",
      title: "Credit Note",
      prompt: "What is a GST credit note used for?",
      options: ["Reducing taxable value or tax due for reasons such as returns, discounts, or overbilling", "Increasing employee salary", "Creating PAN", "Paying advance tax"],
      correctIndex: 0,
      explanation: "Credit notes adjust outward supply value/tax when originally invoiced amount needs reduction."
    },
    {
      id: "ti-38",
      type: "mcq",
      title: "Debit Note",
      prompt: "What is a GST debit note used for?",
      options: ["Increasing taxable value or tax when the original invoice understated value or tax", "Cancelling a bank account", "Claiming 80C deduction", "Filing TDS return"],
      correctIndex: 0,
      explanation: "Debit notes adjust tax/value upward for deficiencies in original invoices."
    },
    {
      id: "ti-39",
      type: "mcq",
      title: "Professional Judgment",
      prompt: "A taxpayer claims ITC, but the supplier invoice is missing from GSTR-2B. What is the strongest compliance response?",
      options: ["Claim it blindly", "Reconcile purchase register with GSTR-2B, follow up with supplier, and claim only as permitted by GST rules", "Delete all purchase invoices", "Move it to income tax return"],
      correctIndex: 1,
      explanation: "ITC should be reconciled and claimed based on legal eligibility and reporting status."
    },
    {
      id: "ti-40",
      type: "mcq",
      title: "Tax Compliance Control",
      prompt: "Which control best reduces tax filing risk for a growing Indian business?",
      options: ["Year-end rush only", "Monthly reconciliation of GST returns, TDS, AIS/26AS, ledgers, and challans with documented review", "Relying only on memory", "Avoiding all tax registrations"],
      correctIndex: 1,
      explanation: "Regular reconciliations and documented reviews prevent mismatches, interest, penalties, and audit issues."
    },
  ]
};
