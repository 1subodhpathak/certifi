import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainFintechData = {
  id: ASSESSMENT_TYPES.domain_fintech,
  title: "Fintech Industry Domain Professional Certification",
  shortTitle: "Fintech Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional fintech assessment covering digital payments, open banking, neobanks, lending, wallets, risk, compliance, RegTech, fraud, KYC, blockchain, embedded finance, and financial product operations.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "ft-01",
      type: "mcq",
      title: "Fintech",
      prompt: "In the Fintech Industry domain, what does \"Fintech\" mean?",
      options: [
        "platform-based lending between individuals or businesses without traditional bank intermediation",
        "A payroll-only process unrelated to this domain",
        "digital-first banking provider operating primarily without physical branches",
        "use of technology to improve, automate, or transform financial services",
      ],
      correctIndex: 3,
      explanation: "Use of technology to improve, automate, or transform financial services."
    },
    {
      id: "ft-02",
      type: "mcq",
      title: "Open banking",
      prompt: "In the Fintech Industry domain, what does \"Open banking\" mean?",
      options: [
        "secure API-based sharing of financial data with authorized third-party providers",
        "A design color choice with no operational meaning",
        "security standard for organizations handling cardholder data",
        "know your customer process used to verify customer identity",
      ],
      correctIndex: 0,
      explanation: "Secure API-based sharing of financial data with authorized third-party providers."
    },
    {
      id: "ft-03",
      type: "mcq",
      title: "Neobank",
      prompt: "In the Fintech Industry domain, what does \"Neobank\" mean?",
      options: [
        "automated investment advisory platform using algorithms",
        "digital-first banking provider operating primarily without physical branches",
        "decentralized finance applications built on blockchain networks",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Digital-first banking provider operating primarily without physical branches."
    },
    {
      id: "ft-04",
      type: "mcq",
      title: "Payment gateway",
      prompt: "In the Fintech Industry domain, what does \"Payment gateway\" mean?",
      options: [
        "expanding access to useful and affordable financial products and services",
        "revenue, cost, risk, and margin economics at a customer or transaction level",
        "A social media caption format",
        "service that authorizes and processes digital payments for merchants",
      ],
      correctIndex: 3,
      explanation: "Service that authorizes and processes digital payments for merchants."
    },
    {
      id: "ft-05",
      type: "mcq",
      title: "Payment processor",
      prompt: "In the Fintech Industry domain, what does \"Payment processor\" mean?",
      options: [
        "entity that routes payment transactions between merchant, network, issuer, and acquirer",
        "crypto asset designed to maintain stable value relative to an asset such as fiat currency",
        "decentralized finance applications built on blockchain networks",
        "A customer service greeting script",
      ],
      correctIndex: 0,
      explanation: "Entity that routes payment transactions between merchant, network, issuer, and acquirer."
    },
    {
      id: "ft-06",
      type: "mcq",
      title: "Acquirer",
      prompt: "In the Fintech Industry domain, what does \"Acquirer\" mean?",
      options: [
        "financial institution that processes card payments on behalf of a merchant",
        "An office administration policy only",
        "reversal of a card transaction initiated through the cardholder's issuing bank",
        "business model where services are exposed and consumed through APIs",
      ],
      correctIndex: 0,
      explanation: "Financial institution that processes card payments on behalf of a merchant."
    },
    {
      id: "ft-07",
      type: "mcq",
      title: "Issuer",
      prompt: "In the Fintech Industry domain, what does \"Issuer\" mean?",
      options: [
        "bank or institution that issues payment cards to customers",
        "identifying suspicious or unauthorized financial activity",
        "A random sales slogan with no technical meaning",
        "assessment of borrower risk and repayment ability",
      ],
      correctIndex: 0,
      explanation: "Bank or institution that issues payment cards to customers."
    },
    {
      id: "ft-08",
      type: "mcq",
      title: "Interchange fee",
      prompt: "In the Fintech Industry domain, what does \"Interchange fee\" mean?",
      options: [
        "fee paid between banks during card transactions, usually from acquirer to issuer",
        "security standard for organizations handling cardholder data",
        "technology applied to improve insurance distribution, underwriting, claims, or customer experience",
        "A manual workaround with no control value",
      ],
      correctIndex: 0,
      explanation: "Fee paid between banks during card transactions, usually from acquirer to issuer."
    },
    {
      id: "ft-09",
      type: "mcq",
      title: "Digital wallet",
      prompt: "In the Fintech Industry domain, what does \"Digital wallet\" mean?",
      options: [
        "application or service that stores payment credentials and enables digital payments",
        "A visual branding element only",
        "revenue, cost, risk, and margin economics at a customer or transaction level",
        "digital-first banking provider operating primarily without physical branches",
      ],
      correctIndex: 0,
      explanation: "Application or service that stores payment credentials and enables digital payments."
    },
    {
      id: "ft-10",
      type: "mcq",
      title: "KYC",
      prompt: "In the Fintech Industry domain, what does \"KYC\" mean?",
      options: [
        "buy now pay later financing allowing consumers to split payments over time",
        "non-traditional data used in financial decisioning, such as cash flow or device signals",
        "A meeting agenda template",
        "know your customer process used to verify customer identity",
      ],
      correctIndex: 3,
      explanation: "Know your customer process used to verify customer identity."
    },
    {
      id: "ft-11",
      type: "mcq",
      title: "AML",
      prompt: "In the Fintech Industry domain, what does \"AML\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "fee paid between banks during card transactions, usually from acquirer to issuer",
        "automated investment advisory platform using algorithms",
        "anti-money laundering controls to detect and prevent illicit financial activity",
      ],
      correctIndex: 3,
      explanation: "Anti-money laundering controls to detect and prevent illicit financial activity."
    },
    {
      id: "ft-12",
      type: "mcq",
      title: "RegTech",
      prompt: "In the Fintech Industry domain, what does \"RegTech\" mean?",
      options: [
        "technology used to manage regulatory compliance processes",
        "A design color choice with no operational meaning",
        "service that authorizes and processes digital payments for merchants",
        "financial institution that processes card payments on behalf of a merchant",
      ],
      correctIndex: 0,
      explanation: "Technology used to manage regulatory compliance processes."
    },
    {
      id: "ft-13",
      type: "mcq",
      title: "Fraud detection",
      prompt: "In the Fintech Industry domain, what does \"Fraud detection\" mean?",
      options: [
        "A temporary file naming convention only",
        "reversal of a card transaction initiated through the cardholder's issuing bank",
        "financial services integrated into non-financial platforms or user journeys",
        "identifying suspicious or unauthorized financial activity",
      ],
      correctIndex: 3,
      explanation: "Identifying suspicious or unauthorized financial activity."
    },
    {
      id: "ft-14",
      type: "mcq",
      title: "Chargeback",
      prompt: "In the Fintech Industry domain, what does \"Chargeback\" mean?",
      options: [
        "A social media caption format",
        "fee paid between banks during card transactions, usually from acquirer to issuer",
        "reversal of a card transaction initiated through the cardholder's issuing bank",
        "assessment of borrower risk and repayment ability",
      ],
      correctIndex: 2,
      explanation: "Reversal of a card transaction initiated through the cardholder's issuing bank."
    },
    {
      id: "ft-15",
      type: "mcq",
      title: "P2P lending",
      prompt: "In the Fintech Industry domain, what does \"P2P lending\" mean?",
      options: [
        "A customer service greeting script",
        "platform-based lending between individuals or businesses without traditional bank intermediation",
        "financial institution that processes card payments on behalf of a merchant",
        "expanding access to useful and affordable financial products and services",
      ],
      correctIndex: 1,
      explanation: "Platform-based lending between individuals or businesses without traditional bank intermediation."
    },
    {
      id: "ft-16",
      type: "mcq",
      title: "BNPL",
      prompt: "In the Fintech Industry domain, what does \"BNPL\" mean?",
      options: [
        "buy now pay later financing allowing consumers to split payments over time",
        "An office administration policy only",
        "platform-based lending between individuals or businesses without traditional bank intermediation",
        "anti-money laundering controls to detect and prevent illicit financial activity",
      ],
      correctIndex: 0,
      explanation: "Buy now pay later financing allowing consumers to split payments over time."
    },
    {
      id: "ft-17",
      type: "mcq",
      title: "Credit underwriting",
      prompt: "In the Fintech Industry domain, what does \"Credit underwriting\" mean?",
      options: [
        "A random sales slogan with no technical meaning",
        "use of technology to improve, automate, or transform financial services",
        "assessment of borrower risk and repayment ability",
        "entity that routes payment transactions between merchant, network, issuer, and acquirer",
      ],
      correctIndex: 2,
      explanation: "Assessment of borrower risk and repayment ability."
    },
    {
      id: "ft-18",
      type: "mcq",
      title: "Alternative data",
      prompt: "In the Fintech Industry domain, what does \"Alternative data\" mean?",
      options: [
        "expanding access to useful and affordable financial products and services",
        "A manual workaround with no control value",
        "security standard for organizations handling cardholder data",
        "non-traditional data used in financial decisioning, such as cash flow or device signals",
      ],
      correctIndex: 3,
      explanation: "Non-traditional data used in financial decisioning, such as cash flow or device signals."
    },
    {
      id: "ft-19",
      type: "mcq",
      title: "Robo-advisor",
      prompt: "In the Fintech Industry domain, what does \"Robo-advisor\" mean?",
      options: [
        "non-traditional data used in financial decisioning, such as cash flow or device signals",
        "automated investment advisory platform using algorithms",
        "identifying suspicious or unauthorized financial activity",
        "A visual branding element only",
      ],
      correctIndex: 1,
      explanation: "Automated investment advisory platform using algorithms."
    },
    {
      id: "ft-20",
      type: "mcq",
      title: "InsurTech",
      prompt: "In the Fintech Industry domain, what does \"InsurTech\" mean?",
      options: [
        "bank or institution that issues payment cards to customers",
        "technology applied to improve insurance distribution, underwriting, claims, or customer experience",
        "A meeting agenda template",
        "business model where services are exposed and consumed through APIs",
      ],
      correctIndex: 1,
      explanation: "Technology applied to improve insurance distribution, underwriting, claims, or customer experience."
    },
    {
      id: "ft-21",
      type: "mcq",
      title: "DeFi",
      prompt: "In the Fintech Industry domain, what does \"DeFi\" mean?",
      options: [
        "crypto asset designed to maintain stable value relative to an asset such as fiat currency",
        "bank or institution that issues payment cards to customers",
        "A payroll-only process unrelated to this domain",
        "decentralized finance applications built on blockchain networks",
      ],
      correctIndex: 3,
      explanation: "Decentralized finance applications built on blockchain networks."
    },
    {
      id: "ft-22",
      type: "mcq",
      title: "Stablecoin",
      prompt: "In the Fintech Industry domain, what does \"Stablecoin\" mean?",
      options: [
        "crypto asset designed to maintain stable value relative to an asset such as fiat currency",
        "A design color choice with no operational meaning",
        "buy now pay later financing allowing consumers to split payments over time",
        "know your customer process used to verify customer identity",
      ],
      correctIndex: 0,
      explanation: "Crypto asset designed to maintain stable value relative to an asset such as fiat currency."
    },
    {
      id: "ft-23",
      type: "mcq",
      title: "Smart contract",
      prompt: "In the Fintech Industry domain, what does \"Smart contract\" mean?",
      options: [
        "non-traditional data used in financial decisioning, such as cash flow or device signals",
        "self-executing code on a blockchain that enforces rules or transactions",
        "multi-factor authentication requirement used in certain digital payment contexts",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Self-executing code on a blockchain that enforces rules or transactions."
    },
    {
      id: "ft-24",
      type: "mcq",
      title: "Embedded finance",
      prompt: "In the Fintech Industry domain, what does \"Embedded finance\" mean?",
      options: [
        "assessment of borrower risk and repayment ability",
        "A social media caption format",
        "financial services integrated into non-financial platforms or user journeys",
        "security standard for organizations handling cardholder data",
      ],
      correctIndex: 2,
      explanation: "Financial services integrated into non-financial platforms or user journeys."
    },
    {
      id: "ft-25",
      type: "mcq",
      title: "API economy",
      prompt: "In the Fintech Industry domain, what does \"API economy\" mean?",
      options: [
        "A customer service greeting script",
        "business model where services are exposed and consumed through APIs",
        "assessment of borrower risk and repayment ability",
        "know your customer process used to verify customer identity",
      ],
      correctIndex: 1,
      explanation: "Business model where services are exposed and consumed through APIs."
    },
    {
      id: "ft-26",
      type: "mcq",
      title: "Tokenization",
      prompt: "In the Fintech Industry domain, what does \"Tokenization\" mean?",
      options: [
        "fee paid between banks during card transactions, usually from acquirer to issuer",
        "An office administration policy only",
        "platform-based lending between individuals or businesses without traditional bank intermediation",
        "replacing sensitive payment data with a non-sensitive token",
      ],
      correctIndex: 3,
      explanation: "Replacing sensitive payment data with a non-sensitive token."
    },
    {
      id: "ft-27",
      type: "mcq",
      title: "PCI DSS",
      prompt: "In the Fintech Industry domain, what does \"PCI DSS\" mean?",
      options: [
        "business model where services are exposed and consumed through APIs",
        "A random sales slogan with no technical meaning",
        "decentralized finance applications built on blockchain networks",
        "security standard for organizations handling cardholder data",
      ],
      correctIndex: 3,
      explanation: "Security standard for organizations handling cardholder data."
    },
    {
      id: "ft-28",
      type: "mcq",
      title: "Strong customer authentication",
      prompt: "In the Fintech Industry domain, what does \"Strong customer authentication\" mean?",
      options: [
        "multi-factor authentication requirement used in certain digital payment contexts",
        "technology applied to improve insurance distribution, underwriting, claims, or customer experience",
        "A manual workaround with no control value",
        "service that authorizes and processes digital payments for merchants",
      ],
      correctIndex: 0,
      explanation: "Multi-factor authentication requirement used in certain digital payment contexts."
    },
    {
      id: "ft-29",
      type: "mcq",
      title: "Financial inclusion",
      prompt: "In the Fintech Industry domain, what does \"Financial inclusion\" mean?",
      options: [
        "expanding access to useful and affordable financial products and services",
        "technology used to manage regulatory compliance processes",
        "A visual branding element only",
        "revenue, cost, risk, and margin economics at a customer or transaction level",
      ],
      correctIndex: 0,
      explanation: "Expanding access to useful and affordable financial products and services."
    },
    {
      id: "ft-30",
      type: "mcq",
      title: "Unit economics",
      prompt: "In the Fintech Industry domain, what does \"Unit economics\" mean?",
      options: [
        "secure API-based sharing of financial data with authorized third-party providers",
        "revenue, cost, risk, and margin economics at a customer or transaction level",
        "A meeting agenda template",
        "financial services integrated into non-financial platforms or user journeys",
      ],
      correctIndex: 1,
      explanation: "Revenue, cost, risk, and margin economics at a customer or transaction level."
    },
    {
      id: "ft-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A fintech app sees high onboarding drop-off during identity verification. What should be analyzed?",
      options: [
        "Only office rent",
        "KYC friction, document failure reasons, fraud risk, compliance requirements, UX, and support paths",
        "Only social media likes",
        "Only app icon color",
      ],
      correctIndex: 1,
      explanation: "KYC must balance compliance, fraud prevention, and conversion."
    },
    {
      id: "ft-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A merchant has rising chargebacks. What should payment teams inspect?",
      options: [
        "Fraud patterns, dispute reasons, authorization data, fulfillment evidence, customer communication, and refund policy",
        "Only homepage font",
        "Only employee count",
        "Only bank logo",
      ],
      correctIndex: 0,
      explanation: "Chargebacks require payment, fraud, operations, and customer analysis."
    },
    {
      id: "ft-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A BNPL lender wants faster approvals without more defaults. What should be optimized?",
      options: [
        "Underwriting signals, affordability checks, fraud controls, approval thresholds, and portfolio monitoring",
        "Only redesign the card",
        "Ignore repayment data",
        "Approve everyone",
      ],
      correctIndex: 0,
      explanation: "Credit speed must be balanced against repayment and compliance risk."
    },
    {
      id: "ft-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An open banking integration fails intermittently. What should be checked?",
      options: [
        "Only branch signage",
        "API errors, consent status, token refresh, provider uptime, rate limits, and data mapping",
        "Only phone wallpaper",
        "Only brand slogan",
      ],
      correctIndex: 1,
      explanation: "Open banking depends on API reliability, consent, and data handling."
    },
    {
      id: "ft-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A wallet stores card data. What control is most important?",
      options: [
        "Tokenization, encryption, PCI controls, access management, and secure key handling",
        "Plain text storage",
        "Emailing credentials",
        "Sharing card numbers in logs",
      ],
      correctIndex: 0,
      explanation: "Payment data needs strict security controls."
    },
    {
      id: "ft-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A fintech launches embedded lending inside an e-commerce app. What should be considered?",
      options: [
        "Only checkout music",
        "Customer journey, underwriting, compliance disclosures, partner integration, repayment, and unit economics",
        "Only warehouse shelves",
        "Only product color",
      ],
      correctIndex: 1,
      explanation: "Embedded finance requires product, risk, compliance, and partner readiness."
    },
    {
      id: "ft-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Fraud rules reduce losses but reject many good users. What should be optimized?",
      options: [
        "Fraud loss only",
        "False positives, fraud loss, approval rate, friction, customer value, and model/rule performance",
        "Approval rate only",
        "Ignore customer impact",
      ],
      correctIndex: 1,
      explanation: "Fraud programs must balance risk reduction with customer experience."
    },
    {
      id: "ft-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A robo-advisor recommends portfolios. What governance matters?",
      options: [
        "Only UI colors",
        "Only social posts",
        "Only office name",
        "Suitability, risk profile, disclosures, model oversight, rebalancing logic, and compliance",
      ],
      correctIndex: 3,
      explanation: "Investment advice technology needs suitability and compliance controls."
    },
    {
      id: "ft-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A crypto product uses smart contracts. What risk should be reviewed?",
      options: [
        "Only celebrity endorsements",
        "Only community memes",
        "Only token logo",
        "Code vulnerabilities, audit quality, custody, regulatory exposure, and user loss scenarios",
      ],
      correctIndex: 3,
      explanation: "Smart contract products need technical and regulatory risk review."
    },
    {
      id: "ft-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A fintech product has strong transaction growth but losses increase. What should be measured?",
      options: [
        "App downloads only",
        "Website traffic only",
        "Unit economics, fraud, credit losses, servicing cost, take rate, and customer profitability",
        "Transaction count only",
      ],
      correctIndex: 2,
      explanation: "Growth must be evaluated against risk-adjusted profitability."
    }
  ],
};
