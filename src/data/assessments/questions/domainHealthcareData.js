import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainHealthcareData = {
  id: ASSESSMENT_TYPES.domain_healthcare,
  title: "Healthcare Industry Domain Professional Certification",
  shortTitle: "Healthcare Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional healthcare domain assessment covering clinical operations, EHR, insurance, claims, revenue cycle, public health, clinical trials, telemedicine, privacy, regulations, quality, and patient experience.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "dh-01",
      type: "mcq",
      title: "EHR",
      prompt: "In the Healthcare Industry domain, what does \"EHR\" mean?",
      options: [
        "protected health information that identifies a patient and relates to health, care, or payment",
        "A payroll-only process unrelated to this domain",
        "care model that rewards outcomes, quality, and cost management rather than volume alone",
        "electronic health record, a digital record of patient health information and care history",
      ],
      correctIndex: 3,
      explanation: "Electronic health record, a digital record of patient health information and care history."
    },
    {
      id: "dh-02",
      type: "mcq",
      title: "EMR",
      prompt: "In the Healthcare Industry domain, what does \"EMR\" mean?",
      options: [
        "remote delivery of clinical services using telecommunications technology",
        "A design color choice with no operational meaning",
        "payer approval required before certain services, drugs, or procedures are covered",
        "electronic medical record, a digital record used within a specific provider organization",
      ],
      correctIndex: 3,
      explanation: "Electronic medical record, a digital record used within a specific provider organization."
    },
    {
      id: "dh-03",
      type: "mcq",
      title: "HIPAA",
      prompt: "In the Healthcare Industry domain, what does \"HIPAA\" mean?",
      options: [
        "US law focused on privacy and security protections for protected health information",
        "A temporary file naming convention only",
        "standard healthcare quality performance measures used by many payers",
        "healthcare professional or organization delivering care",
      ],
      correctIndex: 0,
      explanation: "US law focused on privacy and security protections for protected health information."
    },
    {
      id: "dh-04",
      type: "mcq",
      title: "PHI",
      prompt: "In the Healthcare Industry domain, what does \"PHI\" mean?",
      options: [
        "procedure or service code used for billing and reporting medical services",
        "A social media caption format",
        "remote delivery of clinical services using telecommunications technology",
        "protected health information that identifies a patient and relates to health, care, or payment",
      ],
      correctIndex: 3,
      explanation: "Protected health information that identifies a patient and relates to health, care, or payment."
    },
    {
      id: "dh-05",
      type: "mcq",
      title: "Deductible",
      prompt: "In the Healthcare Industry domain, what does \"Deductible\" mean?",
      options: [
        "electronic medical record, a digital record used within a specific provider organization",
        "research study involving people to evaluate medical interventions",
        "A customer service greeting script",
        "amount a patient pays before insurance begins paying covered costs",
      ],
      correctIndex: 3,
      explanation: "Amount a patient pays before insurance begins paying covered costs."
    },
    {
      id: "dh-06",
      type: "mcq",
      title: "Copay",
      prompt: "In the Healthcare Industry domain, what does \"Copay\" mean?",
      options: [
        "fixed amount a patient pays for a covered healthcare service",
        "organizing patient care activities across providers and settings",
        "entity responsible for paying healthcare claims, such as insurer or government program",
        "An office administration policy only",
      ],
      correctIndex: 0,
      explanation: "Fixed amount a patient pays for a covered healthcare service."
    },
    {
      id: "dh-07",
      type: "mcq",
      title: "Coinsurance",
      prompt: "In the Healthcare Industry domain, what does \"Coinsurance\" mean?",
      options: [
        "increase in disease cases above expected levels in a population or area",
        "A random sales slogan with no technical meaning",
        "research study involving people to evaluate medical interventions",
        "percentage of covered cost a patient pays after deductible requirements",
      ],
      correctIndex: 3,
      explanation: "Percentage of covered cost a patient pays after deductible requirements."
    },
    {
      id: "dh-08",
      type: "mcq",
      title: "Claim",
      prompt: "In the Healthcare Industry domain, what does \"Claim\" mean?",
      options: [
        "A manual workaround with no control value",
        "request for payment submitted by provider or member to an insurer",
        "procedure or service code used for billing and reporting medical services",
        "electronic health record, a digital record of patient health information and care history",
      ],
      correctIndex: 1,
      explanation: "Request for payment submitted by provider or member to an insurer."
    },
    {
      id: "dh-09",
      type: "mcq",
      title: "Prior authorization",
      prompt: "In the Healthcare Industry domain, what does \"Prior authorization\" mean?",
      options: [
        "fixed amount a patient pays for a covered healthcare service",
        "A visual branding element only",
        "epidemic spread across countries or continents",
        "payer approval required before certain services, drugs, or procedures are covered",
      ],
      correctIndex: 3,
      explanation: "Payer approval required before certain services, drugs, or procedures are covered."
    },
    {
      id: "dh-10",
      type: "mcq",
      title: "RCM",
      prompt: "In the Healthcare Industry domain, what does \"RCM\" mean?",
      options: [
        "procedure or service code used for billing and reporting medical services",
        "prevention of harm to patients during healthcare delivery",
        "revenue cycle management from registration through claim submission, payment, denial, and collections",
        "A meeting agenda template",
      ],
      correctIndex: 2,
      explanation: "Revenue cycle management from registration through claim submission, payment, denial, and collections."
    },
    {
      id: "dh-11",
      type: "mcq",
      title: "ICD code",
      prompt: "In the Healthcare Industry domain, what does \"ICD code\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "research study involving people to evaluate medical interventions",
        "diagnosis code used for reporting diseases and medical conditions",
        "care model that rewards outcomes, quality, and cost management rather than volume alone",
      ],
      correctIndex: 2,
      explanation: "Diagnosis code used for reporting diseases and medical conditions."
    },
    {
      id: "dh-12",
      type: "mcq",
      title: "CPT code",
      prompt: "In the Healthcare Industry domain, what does \"CPT code\" mean?",
      options: [
        "electronic medical record, a digital record used within a specific provider organization",
        "US law focused on privacy and security protections for protected health information",
        "A design color choice with no operational meaning",
        "procedure or service code used for billing and reporting medical services",
      ],
      correctIndex: 3,
      explanation: "Procedure or service code used for billing and reporting medical services."
    },
    {
      id: "dh-13",
      type: "mcq",
      title: "HEDIS",
      prompt: "In the Healthcare Industry domain, what does \"HEDIS\" mean?",
      options: [
        "amount a patient pays before insurance begins paying covered costs",
        "standard healthcare quality performance measures used by many payers",
        "A temporary file naming convention only",
        "organizing patient care activities across providers and settings",
      ],
      correctIndex: 1,
      explanation: "Standard healthcare quality performance measures used by many payers."
    },
    {
      id: "dh-14",
      type: "mcq",
      title: "Value-based care",
      prompt: "In the Healthcare Industry domain, what does \"Value-based care\" mean?",
      options: [
        "care model that rewards outcomes, quality, and cost management rather than volume alone",
        "increase in disease cases above expected levels in a population or area",
        "A social media caption format",
        "prevention of harm to patients during healthcare delivery",
      ],
      correctIndex: 0,
      explanation: "Care model that rewards outcomes, quality, and cost management rather than volume alone."
    },
    {
      id: "dh-15",
      type: "mcq",
      title: "Fee-for-service",
      prompt: "In the Healthcare Industry domain, what does \"Fee-for-service\" mean?",
      options: [
        "payer approval required before certain services, drugs, or procedures are covered",
        "A customer service greeting script",
        "rate at which patients return to hospital within a defined period after discharge",
        "payment model where providers are paid for each service delivered",
      ],
      correctIndex: 3,
      explanation: "Payment model where providers are paid for each service delivered."
    },
    {
      id: "dh-16",
      type: "mcq",
      title: "Telemedicine",
      prompt: "In the Healthcare Industry domain, what does \"Telemedicine\" mean?",
      options: [
        "An office administration policy only",
        "remote delivery of clinical services using telecommunications technology",
        "care model that rewards outcomes, quality, and cost management rather than volume alone",
        "standard healthcare quality performance measures used by many payers",
      ],
      correctIndex: 1,
      explanation: "Remote delivery of clinical services using telecommunications technology."
    },
    {
      id: "dh-17",
      type: "mcq",
      title: "Outpatient care",
      prompt: "In the Healthcare Industry domain, what does \"Outpatient care\" mean?",
      options: [
        "standard healthcare quality performance measures used by many payers",
        "research study involving people to evaluate medical interventions",
        "medical services provided without overnight hospital admission",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Medical services provided without overnight hospital admission."
    },
    {
      id: "dh-18",
      type: "mcq",
      title: "Inpatient care",
      prompt: "In the Healthcare Industry domain, what does \"Inpatient care\" mean?",
      options: [
        "standard healthcare quality performance measures used by many payers",
        "care requiring admission to a hospital or facility",
        "A manual workaround with no control value",
        "fixed amount a patient pays for a covered healthcare service",
      ],
      correctIndex: 1,
      explanation: "Care requiring admission to a hospital or facility."
    },
    {
      id: "dh-19",
      type: "mcq",
      title: "Clinical trial",
      prompt: "In the Healthcare Industry domain, what does \"Clinical trial\" mean?",
      options: [
        "amount a patient pays before insurance begins paying covered costs",
        "A visual branding element only",
        "research study involving people to evaluate medical interventions",
        "procedure or service code used for billing and reporting medical services",
      ],
      correctIndex: 2,
      explanation: "Research study involving people to evaluate medical interventions."
    },
    {
      id: "dh-20",
      type: "mcq",
      title: "Randomized controlled trial",
      prompt: "In the Healthcare Industry domain, what does \"Randomized controlled trial\" mean?",
      options: [
        "A meeting agenda template",
        "study design assigning participants randomly to treatment or control groups",
        "undesirable medical occurrence during treatment or clinical study",
        "remote delivery of clinical services using telecommunications technology",
      ],
      correctIndex: 1,
      explanation: "Study design assigning participants randomly to treatment or control groups."
    },
    {
      id: "dh-21",
      type: "mcq",
      title: "Adverse event",
      prompt: "In the Healthcare Industry domain, what does \"Adverse event\" mean?",
      options: [
        "undesirable medical occurrence during treatment or clinical study",
        "revenue cycle management from registration through claim submission, payment, denial, and collections",
        "A payroll-only process unrelated to this domain",
        "protected health information that identifies a patient and relates to health, care, or payment",
      ],
      correctIndex: 0,
      explanation: "Undesirable medical occurrence during treatment or clinical study."
    },
    {
      id: "dh-22",
      type: "mcq",
      title: "Epidemic",
      prompt: "In the Healthcare Industry domain, what does \"Epidemic\" mean?",
      options: [
        "fixed amount a patient pays for a covered healthcare service",
        "A design color choice with no operational meaning",
        "US federal health coverage program mainly for people 65+ or certain disabled individuals",
        "increase in disease cases above expected levels in a population or area",
      ],
      correctIndex: 3,
      explanation: "Increase in disease cases above expected levels in a population or area."
    },
    {
      id: "dh-23",
      type: "mcq",
      title: "Pandemic",
      prompt: "In the Healthcare Industry domain, what does \"Pandemic\" mean?",
      options: [
        "amount a patient pays before insurance begins paying covered costs",
        "care requiring admission to a hospital or facility",
        "epidemic spread across countries or continents",
        "A temporary file naming convention only",
      ],
      correctIndex: 2,
      explanation: "Epidemic spread across countries or continents."
    },
    {
      id: "dh-24",
      type: "mcq",
      title: "Medicare",
      prompt: "In the Healthcare Industry domain, what does \"Medicare\" mean?",
      options: [
        "US federal health coverage program mainly for people 65+ or certain disabled individuals",
        "standard healthcare quality performance measures used by many payers",
        "increase in disease cases above expected levels in a population or area",
        "A social media caption format",
      ],
      correctIndex: 0,
      explanation: "US federal health coverage program mainly for people 65+ or certain disabled individuals."
    },
    {
      id: "dh-25",
      type: "mcq",
      title: "Medicaid",
      prompt: "In the Healthcare Industry domain, what does \"Medicaid\" mean?",
      options: [
        "request for payment submitted by provider or member to an insurer",
        "organizing patient care activities across providers and settings",
        "A customer service greeting script",
        "US public program providing health coverage for eligible low-income individuals",
      ],
      correctIndex: 3,
      explanation: "US public program providing health coverage for eligible low-income individuals."
    },
    {
      id: "dh-26",
      type: "mcq",
      title: "Provider",
      prompt: "In the Healthcare Industry domain, what does \"Provider\" mean?",
      options: [
        "care requiring admission to a hospital or facility",
        "electronic medical record, a digital record used within a specific provider organization",
        "healthcare professional or organization delivering care",
        "An office administration policy only",
      ],
      correctIndex: 2,
      explanation: "Healthcare professional or organization delivering care."
    },
    {
      id: "dh-27",
      type: "mcq",
      title: "Payer",
      prompt: "In the Healthcare Industry domain, what does \"Payer\" mean?",
      options: [
        "entity responsible for paying healthcare claims, such as insurer or government program",
        "A random sales slogan with no technical meaning",
        "healthcare professional or organization delivering care",
        "undesirable medical occurrence during treatment or clinical study",
      ],
      correctIndex: 0,
      explanation: "Entity responsible for paying healthcare claims, such as insurer or government program."
    },
    {
      id: "dh-28",
      type: "mcq",
      title: "Care coordination",
      prompt: "In the Healthcare Industry domain, what does \"Care coordination\" mean?",
      options: [
        "percentage of covered cost a patient pays after deductible requirements",
        "A manual workaround with no control value",
        "care model that rewards outcomes, quality, and cost management rather than volume alone",
        "organizing patient care activities across providers and settings",
      ],
      correctIndex: 3,
      explanation: "Organizing patient care activities across providers and settings."
    },
    {
      id: "dh-29",
      type: "mcq",
      title: "Patient safety",
      prompt: "In the Healthcare Industry domain, what does \"Patient safety\" mean?",
      options: [
        "electronic health record, a digital record of patient health information and care history",
        "medical services provided without overnight hospital admission",
        "prevention of harm to patients during healthcare delivery",
        "A visual branding element only",
      ],
      correctIndex: 2,
      explanation: "Prevention of harm to patients during healthcare delivery."
    },
    {
      id: "dh-30",
      type: "mcq",
      title: "Readmission rate",
      prompt: "In the Healthcare Industry domain, what does \"Readmission rate\" mean?",
      options: [
        "A meeting agenda template",
        "US public program providing health coverage for eligible low-income individuals",
        "rate at which patients return to hospital within a defined period after discharge",
        "prevention of harm to patients during healthcare delivery",
      ],
      correctIndex: 2,
      explanation: "Rate at which patients return to hospital within a defined period after discharge."
    },
    {
      id: "dh-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A hospital has rising claim denials. What should revenue cycle teams analyze?",
      options: [
        "Only room paint",
        "Denial reasons, coding accuracy, prior authorization, eligibility checks, documentation, and payer rules",
        "Only parking fees",
        "Only cafeteria sales",
      ],
      correctIndex: 1,
      explanation: "Denials usually require end-to-end RCM root-cause analysis."
    },
    {
      id: "dh-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A clinic wants to launch telemedicine. What must be planned?",
      options: [
        "Only logo redesign",
        "Only video background",
        "Clinical workflow, licensure, privacy, consent, technology access, documentation, and reimbursement",
        "Only waiting room chairs",
      ],
      correctIndex: 2,
      explanation: "Telemedicine requires clinical, compliance, operational, and technology readiness."
    },
    {
      id: "dh-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A patient record was sent to the wrong person. What type of issue is this?",
      options: [
        "Privacy/security incident involving PHI",
        "Inventory shrinkage",
        "Sales promotion",
        "A merchandising issue",
      ],
      correctIndex: 0,
      explanation: "Wrong disclosure of identifiable health information can be a PHI privacy incident."
    },
    {
      id: "dh-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A hospital wants to reduce readmissions. What should be analyzed?",
      options: [
        "Only hospital logo",
        "Only staff uniforms",
        "Discharge planning, follow-up care, medication adherence, patient risk, care coordination, and social factors",
        "Only phone model",
      ],
      correctIndex: 2,
      explanation: "Readmissions often relate to care transition and follow-up quality."
    },
    {
      id: "dh-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A payer moves from fee-for-service to value-based care. What changes?",
      options: [
        "Only claims font changes",
        "Focus shifts toward outcomes, quality metrics, cost control, and risk-sharing",
        "Providers are paid only in cash",
        "No quality metrics matter",
      ],
      correctIndex: 1,
      explanation: "Value-based care rewards outcomes and efficiency."
    },
    {
      id: "dh-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A clinical trial reports more adverse events in treatment group. What should be reviewed?",
      options: [
        "Only trial logo",
        "Only site parking",
        "Only brochure design",
        "Severity, causality, frequency, reporting obligations, patient safety, and protocol rules",
      ],
      correctIndex: 3,
      explanation: "Adverse events require safety and compliance review."
    },
    {
      id: "dh-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A patient complains about surprise bills. What should be inspected?",
      options: [
        "Only appointment color",
        "Eligibility, network status, benefits, authorization, coding, patient estimates, and communication",
        "Only office lighting",
        "Only doctor handwriting",
      ],
      correctIndex: 1,
      explanation: "Billing issues often involve coverage, coding, and communication."
    },
    {
      id: "dh-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A healthcare dashboard shows perfect compliance. What should analysts verify?",
      options: [
        "Delete the dashboard",
        "Celebrate without review",
        "Ignore data lineage",
        "Measure definition, data completeness, exclusions, numerator/denominator, and source quality",
      ],
      correctIndex: 3,
      explanation: "Quality measures should be validated before accepting perfect results."
    },
    {
      id: "dh-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A provider wants to improve patient experience. What should be measured?",
      options: [
        "Only TV channels",
        "Access, wait times, communication, care coordination, outcomes, complaints, and survey themes",
        "Only badge color",
        "Only wall art",
      ],
      correctIndex: 1,
      explanation: "Patient experience is multi-dimensional."
    },
    {
      id: "dh-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A healthcare vendor handles PHI. What should procurement require?",
      options: [
        "Only vendor logo",
        "Only office location",
        "Security review, data protection terms, access controls, breach obligations, and compliance evidence",
        "Only lowest price",
      ],
      correctIndex: 2,
      explanation: "Healthcare vendors handling PHI need strong privacy and security controls."
    }
  ],
};
