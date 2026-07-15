import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Auditing & Assurance assessment.
// Questions progress from audit fundamentals to risk assessment, evidence,
// internal controls, substantive procedures, fraud, ethics, reporting,
// IT controls, going concern, and audit judgment.
export const auditingData = {
  id: ASSESSMENT_TYPES.auditing,
  title: 'Auditing & Assurance Professional Certification',
  shortTitle: 'Auditing',
  category: 'Accounting & Tax',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  description:
    'Professional assessment covering external audit, internal audit, audit risk, materiality, assertions, internal controls, audit evidence, substantive procedures, fraud, ethics, independence, reporting, going concern, and audit documentation.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and are designed to test practical audit judgment, not only terminology.',
  questions: [
    {
      id: 'au-01',
      type: 'mcq',
      title: 'External Audit Objective',
      prompt: 'What is the primary objective of an external audit of financial statements?',
      options: [
        'To find every error and fraud in the company',
        'To provide reasonable assurance and express an opinion on whether the financial statements are prepared fairly, in all material respects',
        'To manage the company’s accounting department',
        'To reduce the company’s tax liability'
      ],
      correctIndex: 1,
      explanation:
        'An external audit provides reasonable assurance that the financial statements are free from material misstatement, whether due to fraud or error.'
    },
    {
      id: 'au-02',
      type: 'mcq',
      title: 'Reasonable Assurance',
      prompt: 'Why does an audit provide reasonable assurance rather than absolute assurance?',
      options: [
        'Because auditors do not perform any testing',
        'Because audits involve judgment, sampling, evidence limitations, and inherent limitations of internal control',
        'Because auditors are not required to follow standards',
        'Because management prepares the audit report'
      ],
      correctIndex: 1,
      explanation:
        'Audits provide a high but not absolute level of assurance because of judgment, sampling, possible collusion, estimates, and other inherent limitations.'
    },
    {
      id: 'au-03',
      type: 'mcq',
      title: 'Management Responsibility',
      prompt: 'Who is primarily responsible for preparing the financial statements?',
      options: [
        'External auditors',
        'Company management',
        'Tax authorities',
        'Audit committee only'
      ],
      correctIndex: 1,
      explanation:
        'Management is responsible for preparing the financial statements and maintaining internal control. The auditor is responsible for expressing an opinion.'
    },
    {
      id: 'au-04',
      type: 'mcq',
      title: 'Auditor Independence',
      prompt: 'Why is auditor independence essential?',
      options: [
        'It helps the auditor complete the audit faster',
        'It supports objectivity, credibility, and public trust in the audit opinion',
        'It allows the auditor to manage the company',
        'It eliminates the need for audit evidence'
      ],
      correctIndex: 1,
      explanation:
        'Independence is fundamental because users rely on the auditor’s objective and unbiased opinion.'
    },
    {
      id: 'au-05',
      type: 'mcq',
      title: 'Professional Skepticism',
      prompt: 'What does professional skepticism require from an auditor?',
      options: [
        'Assuming management is always dishonest',
        'Accepting all explanations from management without challenge',
        'Maintaining a questioning mind and critically evaluating audit evidence',
        'Avoiding difficult audit areas'
      ],
      correctIndex: 2,
      explanation:
        'Professional skepticism means the auditor critically assesses evidence and remains alert to conditions that may indicate misstatement.'
    },
    {
      id: 'au-06',
      type: 'mcq',
      title: 'Professional Judgment',
      prompt: 'Which situation most clearly requires professional judgment?',
      options: [
        'Choosing the font size of the audit report',
        'Determining materiality and assessing whether misstatements are significant',
        'Printing audit working papers',
        'Renaming audit files'
      ],
      correctIndex: 1,
      explanation:
        'Professional judgment is required in areas such as materiality, risk assessment, evidence evaluation, estimates, and forming the audit opinion.'
    },
    {
      id: 'au-07',
      type: 'mcq',
      title: 'Audit Risk',
      prompt: 'What is audit risk?',
      options: [
        'The risk that the audit firm loses the client',
        'The risk that the auditor expresses an inappropriate opinion when the financial statements are materially misstated',
        'The risk that the client pays audit fees late',
        'The risk that the auditor works overtime'
      ],
      correctIndex: 1,
      explanation:
        'Audit risk is the risk of giving an inappropriate audit opinion when the financial statements contain a material misstatement.'
    },
    {
      id: 'au-08',
      type: 'mcq',
      title: 'Audit Risk Model',
      prompt: 'Which formula best represents the audit risk model?',
      options: [
        'Audit Risk = Revenue × Expenses',
        'Audit Risk = Inherent Risk × Control Risk × Detection Risk',
        'Audit Risk = Assets - Liabilities',
        'Audit Risk = Materiality + Profit'
      ],
      correctIndex: 1,
      explanation:
        'The audit risk model considers inherent risk, control risk, and detection risk.'
    },
    {
      id: 'au-09',
      type: 'mcq',
      title: 'Inherent Risk',
      prompt: 'Which example indicates high inherent risk?',
      options: [
        'A simple cash sale recorded automatically',
        'A complex fair value estimate requiring significant assumptions',
        'A prepaid rent invoice with clear documentation',
        'A fixed salary payment'
      ],
      correctIndex: 1,
      explanation:
        'Complex estimates involving assumptions and uncertainty usually have higher inherent risk.'
    },
    {
      id: 'au-10',
      type: 'mcq',
      title: 'Control Risk',
      prompt: 'What is control risk?',
      options: [
        'The risk that internal controls fail to prevent, detect, or correct a material misstatement',
        'The risk that the auditor uses the wrong audit software',
        'The risk that management refuses to sign the audit report',
        'The risk that the audit team is overstaffed'
      ],
      correctIndex: 0,
      explanation:
        'Control risk relates to whether the client’s internal controls are effective in preventing or detecting material misstatements.'
    },
    {
      id: 'au-11',
      type: 'mcq',
      title: 'Detection Risk',
      prompt: 'What is detection risk?',
      options: [
        'The risk that auditor procedures fail to detect a material misstatement',
        'The risk that employees detect the auditor’s work',
        'The risk that a company detects too many errors',
        'The risk that the audit report is published late'
      ],
      correctIndex: 0,
      explanation:
        'Detection risk is the risk that audit procedures will not identify an existing material misstatement.'
    },
    {
      id: 'au-12',
      type: 'mcq',
      title: 'Materiality',
      prompt: 'What does materiality mean in auditing?',
      options: [
        'Any error, regardless of size, is automatically material',
        'Information is material if its omission or misstatement could reasonably influence users’ decisions',
        'Only fraud can be material',
        'Only cash balances can be material'
      ],
      correctIndex: 1,
      explanation:
        'Materiality focuses on whether misstatements could influence the economic decisions of users of the financial statements.'
    },
    {
      id: 'au-13',
      type: 'mcq',
      title: 'Performance Materiality',
      prompt: 'What is performance materiality?',
      options: [
        'The auditor’s productivity target',
        'An amount set below overall materiality to reduce the risk that uncorrected and undetected misstatements exceed overall materiality',
        'The company’s profit target',
        'The minimum audit fee'
      ],
      correctIndex: 1,
      explanation:
        'Performance materiality is set below overall materiality to provide a margin of safety when designing audit procedures.'
    },
    {
      id: 'au-14',
      type: 'mcq',
      title: 'Financial Statement Assertions',
      prompt: 'What are financial statement assertions?',
      options: [
        'Claims made by competitors',
        'Representations by management about recognition, measurement, presentation, and disclosure of financial statement items',
        'Only verbal statements made by auditors',
        'Legal guarantees from tax authorities'
      ],
      correctIndex: 1,
      explanation:
        'Assertions are management representations that auditors test, such as existence, completeness, accuracy, valuation, rights and obligations, and cut-off.'
    },
    {
      id: 'au-15',
      type: 'mcq',
      title: 'Existence Assertion',
      prompt: 'Which procedure best tests the existence of inventory?',
      options: [
        'Agreeing inventory records to purchase orders only',
        'Physically observing or inspecting inventory items',
        'Checking whether inventory is mentioned in the annual report',
        'Asking management if inventory exists'
      ],
      correctIndex: 1,
      explanation:
        'Physical inspection or observation provides evidence that recorded inventory exists.'
    },
    {
      id: 'au-16',
      type: 'mcq',
      title: 'Completeness Assertion',
      prompt: 'Which procedure is most directly associated with testing completeness?',
      options: [
        'Tracing source documents to accounting records',
        'Vouching from accounting records to source documents',
        'Reading only the financial statement notes',
        'Comparing logos on invoices'
      ],
      correctIndex: 0,
      explanation:
        'Tracing from source documents to accounting records helps test whether transactions that should be recorded were recorded.'
    },
    {
      id: 'au-17',
      type: 'mcq',
      title: 'Vouching',
      prompt: 'What is vouching?',
      options: [
        'Testing from accounting records back to supporting source documents',
        'Testing from source documents forward to accounting records',
        'Selecting employees for interviews only',
        'Approving management’s accounting policy'
      ],
      correctIndex: 0,
      explanation:
        'Vouching starts with recorded amounts and checks supporting documents, often testing occurrence or existence.'
    },
    {
      id: 'au-18',
      type: 'mcq',
      title: 'Tracing',
      prompt: 'What is tracing?',
      options: [
        'Testing from source documents forward to accounting records',
        'Testing from financial statements back to source documents only',
        'Following the audit partner around the office',
        'Reviewing only board minutes'
      ],
      correctIndex: 0,
      explanation:
        'Tracing starts with source documents and follows them into the accounting records, often testing completeness.'
    },
    {
      id: 'au-19',
      type: 'mcq',
      title: 'Internal Control',
      prompt: 'What is the purpose of internal control over financial reporting?',
      options: [
        'To guarantee the company will be profitable',
        'To help ensure reliable financial reporting and reduce the risk of material misstatement',
        'To replace the need for external audit',
        'To eliminate all business risk'
      ],
      correctIndex: 1,
      explanation:
        'Internal controls are designed to support reliable reporting, compliance, safeguarding of assets, and effective operations.'
    },
    {
      id: 'au-20',
      type: 'mcq',
      title: 'Walkthrough',
      prompt: 'What is a walkthrough in auditing?',
      options: [
        'Following a transaction through the process from initiation to recording to understand control design and implementation',
        'A tour of the client’s building only',
        'A final meeting with the audit committee',
        'A method for calculating tax payable'
      ],
      correctIndex: 0,
      explanation:
        'A walkthrough helps the auditor understand how a process works and whether key controls are designed and implemented.'
    },
    {
      id: 'au-21',
      type: 'mcq',
      title: 'Test of Controls',
      prompt: 'When would an auditor perform tests of controls?',
      options: [
        'When the auditor plans to rely on controls or is required to test them',
        'Only when no financial statements exist',
        'Only after the audit opinion is issued',
        'Only for companies with no employees'
      ],
      correctIndex: 0,
      explanation:
        'Tests of controls evaluate whether relevant controls are operating effectively.'
    },
    {
      id: 'au-22',
      type: 'mcq',
      title: 'Substantive Procedures',
      prompt: 'What is the purpose of substantive procedures?',
      options: [
        'To test whether financial statement balances and disclosures are materially misstated',
        'To design the company’s internal policies',
        'To replace audit planning',
        'To train the client’s accounting team'
      ],
      correctIndex: 0,
      explanation:
        'Substantive procedures are designed to detect material misstatements at the assertion level.'
    },
    {
      id: 'au-23',
      type: 'mcq',
      title: 'Analytical Procedures',
      prompt: 'Which is the best example of an analytical procedure?',
      options: [
        'Comparing gross margin trends with prior periods and investigating unexpected changes',
        'Counting every fixed asset manually',
        'Signing the engagement letter',
        'Preparing the client’s bank reconciliation'
      ],
      correctIndex: 0,
      explanation:
        'Analytical procedures evaluate financial information by studying relationships, trends, ratios, and unusual fluctuations.'
    },
    {
      id: 'au-24',
      type: 'mcq',
      title: 'Audit Evidence',
      prompt: 'What does sufficient appropriate audit evidence mean?',
      options: [
        'Evidence that is both enough in quantity and reliable/relevant in quality',
        'Evidence collected only from management interviews',
        'Evidence that supports management no matter what',
        'Evidence that is easiest to obtain'
      ],
      correctIndex: 0,
      explanation:
        'Sufficiency refers to quantity of evidence. Appropriateness refers to quality, including relevance and reliability.'
    },
    {
      id: 'au-25',
      type: 'mcq',
      title: 'Reliability of Evidence',
      prompt: 'Which evidence is generally more reliable?',
      options: [
        'Independent external confirmation received directly by the auditor',
        'An informal verbal explanation from management',
        'An unsigned internal memo',
        'A spreadsheet prepared by the client with no supporting documentation'
      ],
      correctIndex: 0,
      explanation:
        'Evidence from independent external sources obtained directly by the auditor is generally more reliable.'
    },
    {
      id: 'au-26',
      type: 'mcq',
      title: 'External Confirmations',
      prompt: 'What is a common use of external confirmations?',
      options: [
        'Confirming receivable balances directly with customers or bank balances directly with banks',
        'Choosing the client’s accounting system',
        'Preparing payroll entries',
        'Approving management bonuses'
      ],
      correctIndex: 0,
      explanation:
        'External confirmations provide evidence directly from independent third parties.'
    },
    {
      id: 'au-27',
      type: 'mcq',
      title: 'Inventory Observation',
      prompt: 'Why does an auditor attend a physical inventory count?',
      options: [
        'To observe management’s count procedures and perform test counts',
        'To purchase inventory for the client',
        'To set inventory selling prices',
        'To approve warehouse staffing'
      ],
      correctIndex: 0,
      explanation:
        'Attendance at inventory count helps the auditor gather evidence about existence and the effectiveness of count procedures.'
    },
    {
      id: 'au-28',
      type: 'mcq',
      title: 'Cut-off Testing',
      prompt: 'What is the main purpose of revenue cut-off testing?',
      options: [
        'To ensure revenue transactions are recorded in the correct accounting period',
        'To check whether customers like the product',
        'To calculate employee bonuses',
        'To estimate market share'
      ],
      correctIndex: 0,
      explanation:
        'Cut-off testing checks whether transactions around period-end are recorded in the correct period.'
    },
    {
      id: 'au-29',
      type: 'mcq',
      title: 'Audit Sampling',
      prompt: 'What is audit sampling?',
      options: [
        'Testing less than 100% of a population and drawing conclusions about the population',
        'Testing only one item regardless of risk',
        'Testing only items selected by management',
        'Testing every transaction in every audit'
      ],
      correctIndex: 0,
      explanation:
        'Audit sampling allows auditors to apply procedures to selected items and draw conclusions about the population.'
    },
    {
      id: 'au-30',
      type: 'mcq',
      title: 'Sampling Risk',
      prompt: 'What is sampling risk?',
      options: [
        'The risk that the sample conclusion differs from the conclusion that would be reached by testing the entire population',
        'The risk that the auditor chooses a large sample',
        'The risk that management prepares financial statements',
        'The risk that the audit report is too long'
      ],
      correctIndex: 0,
      explanation:
        'Sampling risk exists because conclusions are based on a sample rather than the full population.'
    },
    {
      id: 'au-31',
      type: 'mcq',
      title: 'Fraud Triangle',
      prompt: 'Which three elements are commonly associated with the fraud triangle?',
      options: [
        'Pressure, opportunity, and rationalization',
        'Assets, liabilities, and equity',
        'Planning, testing, and reporting',
        'Revenue, expenses, and profit'
      ],
      correctIndex: 0,
      explanation:
        'The fraud triangle consists of pressure or incentive, opportunity, and rationalization.'
    },
    {
      id: 'au-32',
      type: 'mcq',
      title: 'Management Override',
      prompt: 'Why is management override of controls considered a significant audit concern?',
      options: [
        'Management may bypass otherwise effective controls to manipulate financial results',
        'Management cannot access accounting systems',
        'Management override only affects marketing data',
        'It always means fraud has already occurred'
      ],
      correctIndex: 0,
      explanation:
        'Management override is a fraud risk because senior personnel may bypass controls, post unusual journals, or influence estimates.'
    },
    {
      id: 'au-33',
      type: 'mcq',
      title: 'Journal Entry Testing',
      prompt: 'Why do auditors often test journal entries?',
      options: [
        'To address the risk of management override and identify unusual or inappropriate entries',
        'To replace all other audit procedures',
        'To prepare the client’s trial balance',
        'To approve the company’s dividend policy'
      ],
      correctIndex: 0,
      explanation:
        'Journal entry testing is commonly used to identify unusual, unsupported, or inappropriate entries, especially related to override risk.'
    },
    {
      id: 'au-34',
      type: 'mcq',
      title: 'Related Parties',
      prompt: 'Why are related party transactions higher risk?',
      options: [
        'They may not be conducted at arm’s length and may be used to hide obligations or manipulate results',
        'They are always illegal',
        'They never require disclosure',
        'They are easier to audit than normal sales'
      ],
      correctIndex: 0,
      explanation:
        'Related party transactions can involve conflicts of interest, unusual terms, incomplete disclosure, or non-arm’s-length pricing.'
    },
    {
      id: 'au-35',
      type: 'mcq',
      title: 'Accounting Estimates',
      prompt: 'Which audit area usually requires significant judgment because it depends on assumptions about the future?',
      options: [
        'Accounting estimates such as impairment, provisions, fair value, or expected credit losses',
        'Counting the number of pages in the audit file',
        'Checking the company logo',
        'Agreeing the company address to the website'
      ],
      correctIndex: 0,
      explanation:
        'Accounting estimates often involve uncertainty, assumptions, models, and management judgment, making them higher-risk audit areas.'
    },
    {
      id: 'au-36',
      type: 'mcq',
      title: 'Going Concern',
      prompt: 'What is the auditor’s responsibility regarding going concern?',
      options: [
        'Evaluate whether management’s use of the going concern basis is appropriate and whether material uncertainty exists',
        'Guarantee that the company will never fail',
        'Prepare the company’s business plan',
        'Provide funding to the company'
      ],
      correctIndex: 0,
      explanation:
        'The auditor evaluates management’s going concern assessment and considers whether disclosures are appropriate.'
    },
    {
      id: 'au-37',
      type: 'mcq',
      title: 'Subsequent Events',
      prompt: 'What are subsequent events in an audit context?',
      options: [
        'Events occurring after the reporting date but before the financial statements are issued or available to be issued',
        'Events that happened only before company incorporation',
        'Events unrelated to the financial statements',
        'Events that auditors are never required to consider'
      ],
      correctIndex: 0,
      explanation:
        'Auditors consider subsequent events because they may require adjustment or disclosure in the financial statements.'
    },
    {
      id: 'au-38',
      type: 'mcq',
      title: 'Written Representations',
      prompt: 'What is the purpose of a management representation letter?',
      options: [
        'To provide written confirmation from management about key responsibilities, assertions, and information provided to the auditor',
        'To replace all substantive testing',
        'To transfer audit responsibility from auditor to management',
        'To guarantee that no fraud exists'
      ],
      correctIndex: 0,
      explanation:
        'Written representations support audit evidence but do not replace other necessary audit procedures.'
    },
    {
      id: 'au-39',
      type: 'mcq',
      title: 'Audit Documentation',
      prompt: 'What are audit working papers?',
      options: [
        'The record of audit procedures performed, evidence obtained, and conclusions reached',
        'The company’s sales brochures',
        'Blank forms used by management',
        'Only the final signed audit opinion'
      ],
      correctIndex: 0,
      explanation:
        'Audit documentation provides evidence of the work performed and supports the auditor’s conclusions.'
    },
    {
      id: 'au-40',
      type: 'mcq',
      title: 'Documentation Quality',
      prompt: 'Which statement best describes good audit documentation?',
      options: [
        'It should allow an experienced auditor with no previous connection to the audit to understand the work performed, evidence obtained, and conclusions reached',
        'It should contain only informal notes',
        'It should be prepared only after the audit report is signed',
        'It should avoid documenting difficult judgments'
      ],
      correctIndex: 0,
      explanation:
        'Good documentation clearly shows what was done, why it was done, what evidence was obtained, and how conclusions were reached.'
    },
    {
      id: 'au-41',
      type: 'mcq',
      title: 'Internal vs External Audit',
      prompt: 'Which statement best describes the difference between internal audit and external audit?',
      options: [
        'Internal audit often focuses on risk management, controls, governance, and operational improvement; external audit focuses on the financial statement opinion',
        'There is no difference',
        'Internal audit is always performed by tax authorities',
        'External audit is only used to detect employee attendance issues'
      ],
      correctIndex: 0,
      explanation:
        'Internal audit supports the organization’s governance, risk, and control processes, while external audit provides an independent opinion on financial statements.'
    },
    {
      id: 'au-42',
      type: 'mcq',
      title: 'Management Letter',
      prompt: 'What is a management letter?',
      options: [
        'A communication from the auditor to management or those charged with governance about control deficiencies and recommendations',
        'A sales contract',
        'A tax refund notice',
        'A replacement for the audit report'
      ],
      correctIndex: 0,
      explanation:
        'A management letter typically communicates internal control weaknesses, process issues, and recommendations for improvement.'
    },
    {
      id: 'au-43',
      type: 'mcq',
      title: 'Unmodified Opinion',
      prompt: 'What does an unmodified audit opinion indicate?',
      options: [
        'The financial statements are presented fairly, in all material respects, in accordance with the applicable reporting framework',
        'The company has no errors of any kind',
        'The company is guaranteed to remain profitable',
        'The auditor tested every transaction'
      ],
      correctIndex: 0,
      explanation:
        'An unmodified opinion means the auditor concluded that the financial statements are fairly presented in all material respects.'
    },
    {
      id: 'au-44',
      type: 'mcq',
      title: 'Qualified Opinion',
      prompt: 'When is a qualified opinion generally appropriate?',
      options: [
        'When there is a material but not pervasive misstatement, or a material but not pervasive limitation on audit evidence',
        'When the financial statements are perfect',
        'When the auditor wants to praise management',
        'When the company has high revenue growth'
      ],
      correctIndex: 0,
      explanation:
        'A qualified opinion is an “except for” opinion used when the issue is material but not pervasive.'
    },
    {
      id: 'au-45',
      type: 'mcq',
      title: 'Adverse Opinion',
      prompt: 'When is an adverse opinion appropriate?',
      options: [
        'When misstatements are both material and pervasive',
        'When there is a minor classification error',
        'When the auditor cannot obtain enough evidence but does not know whether misstatements exist',
        'When management provides all requested records'
      ],
      correctIndex: 0,
      explanation:
        'An adverse opinion is issued when the financial statements as a whole are materially and pervasively misstated.'
    },
    {
      id: 'au-46',
      type: 'mcq',
      title: 'Disclaimer of Opinion',
      prompt: 'When is a disclaimer of opinion generally issued?',
      options: [
        'When the auditor cannot obtain sufficient appropriate audit evidence and the possible effects could be material and pervasive',
        'When the auditor finds a small error',
        'When the company is profitable',
        'When all audit evidence supports the financial statements'
      ],
      correctIndex: 0,
      explanation:
        'A disclaimer is issued when the auditor is unable to obtain enough appropriate evidence and the possible effect is material and pervasive.'
    },
    {
      id: 'au-47',
      type: 'mcq',
      title: 'Emphasis of Matter',
      prompt: 'What is an Emphasis of Matter paragraph used for?',
      options: [
        'To draw attention to a matter properly presented or disclosed in the financial statements that is fundamental to users’ understanding',
        'To modify the audit opinion automatically',
        'To hide a material misstatement',
        'To replace management disclosures'
      ],
      correctIndex: 0,
      explanation:
        'An Emphasis of Matter paragraph highlights an important matter already appropriately presented or disclosed without necessarily modifying the opinion.'
    },
    {
      id: 'au-48',
      type: 'mcq',
      title: 'Key Audit Matters',
      prompt: 'What are Key Audit Matters?',
      options: [
        'Matters that, in the auditor’s professional judgment, were of most significance in the audit of the current period financial statements',
        'All minor audit file notes',
        'Only matters requested by management',
        'Only tax planning items'
      ],
      correctIndex: 0,
      explanation:
        'Key Audit Matters communicate areas of most significance in the audit, often including high-risk or significant judgment areas.'
    },
    {
      id: 'au-49',
      type: 'mcq',
      title: 'IT General Controls',
      prompt: 'Which is an example of an IT general control?',
      options: [
        'User access management over financial systems',
        'A sales invoice amount',
        'A customer purchase order only',
        'A manual signature on a shipping note'
      ],
      correctIndex: 0,
      explanation:
        'IT general controls include access management, change management, operations controls, backups, and system security.'
    },
    {
      id: 'au-50',
      type: 'mcq',
      title: 'Advanced Audit Judgment',
      prompt: 'A client has strong revenue growth, aggressive management bonuses, unusual manual journal entries near year-end, and weak review controls. What is the strongest audit response?',
      options: [
        'Increase professional skepticism, assess fraud risk, test relevant controls, perform targeted substantive procedures, and examine unusual journal entries',
        'Reduce audit testing because revenue is growing',
        'Rely only on management’s explanation',
        'Issue an unmodified opinion immediately'
      ],
      correctIndex: 0,
      explanation:
        'The facts indicate elevated fraud and misstatement risk. The auditor should respond with stronger risk assessment, skepticism, controls testing where relevant, and targeted substantive work.'
    }
  ]
};