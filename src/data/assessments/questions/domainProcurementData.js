import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainProcurementData = {
  id: ASSESSMENT_TYPES.domain_procurement,
  title: "Procurement & Strategic Sourcing Professional Certification",
  shortTitle: "Procurement Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional procurement assessment covering sourcing strategy, RFP/RFQ, supplier management, contracts, TCO, negotiation, purchase orders, risk, ethics, compliance, and procure-to-pay operations.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "dp-01",
      type: "mcq",
      title: "Procurement",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Procurement\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "acquiring goods or services at the best total value while meeting quality, risk, compliance, and delivery needs",
        "a performance tool tracking supplier quality, cost, delivery, service, risk, and compliance",
        "comparison of purchase order, goods receipt, and invoice before payment",
      ],
      correctIndex: 1,
      explanation: "Acquiring goods or services at the best total value while meeting quality, risk, compliance, and delivery needs."
    },
    {
      id: "dp-02",
      type: "mcq",
      title: "Strategic sourcing",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Strategic sourcing\" mean?",
      options: [
        "end-to-end process from requisition and purchase order to receipt, invoice, and payment",
        "A design color choice with no operational meaning",
        "a structured, data-driven approach to selecting suppliers and improving purchasing value over time",
        "process of validating, approving, and setting up a new supplier for transactions",
      ],
      correctIndex: 2,
      explanation: "A structured, data-driven approach to selecting suppliers and improving purchasing value over time."
    },
    {
      id: "dp-03",
      type: "mcq",
      title: "RFP",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"RFP\" mean?",
      options: [
        "standard trade terms defining buyer and seller responsibilities in international shipments",
        "request for proposal, used when suppliers must propose a solution, approach, pricing, and capabilities",
        "contractual remedies owed by a supplier when service levels are not met",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Request for proposal, used when suppliers must propose a solution, approach, pricing, and capabilities."
    },
    {
      id: "dp-04",
      type: "mcq",
      title: "RFQ",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"RFQ\" mean?",
      options: [
        "request for quotation, used when requirements are clear and price comparison is the main objective",
        "A social media caption format",
        "estimating what a product or service should cost based on materials, labor, overhead, margin, and market factors",
        "a structured, data-driven approach to selecting suppliers and improving purchasing value over time",
      ],
      correctIndex: 0,
      explanation: "Request for quotation, used when requirements are clear and price comparison is the main objective."
    },
    {
      id: "dp-05",
      type: "mcq",
      title: "RFI",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"RFI\" mean?",
      options: [
        "A customer service greeting script",
        "acquiring goods or services at the best total value while meeting quality, risk, compliance, and delivery needs",
        "competitive sourcing event where suppliers bid down price under defined requirements",
        "request for information, used to gather supplier capabilities or market information before sourcing",
      ],
      correctIndex: 3,
      explanation: "Request for information, used to gather supplier capabilities or market information before sourcing."
    },
    {
      id: "dp-06",
      type: "mcq",
      title: "TCO",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"TCO\" mean?",
      options: [
        "An office administration policy only",
        "estimating what a product or service should cost based on materials, labor, overhead, margin, and market factors",
        "total cost of ownership, including purchase price plus operating, maintenance, logistics, switching, and disposal costs",
        "including environmental, social, and governance factors in purchasing decisions",
      ],
      correctIndex: 2,
      explanation: "Total cost of ownership, including purchase price plus operating, maintenance, logistics, switching, and disposal costs."
    },
    {
      id: "dp-07",
      type: "mcq",
      title: "Purchase order",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Purchase order\" mean?",
      options: [
        "contractual remedies owed by a supplier when service levels are not met",
        "best alternative to a negotiated agreement, the fallback option if negotiation fails",
        "A random sales slogan with no technical meaning",
        "a formal buyer document authorizing a supplier to provide goods or services under specified terms",
      ],
      correctIndex: 3,
      explanation: "A formal buyer document authorizing a supplier to provide goods or services under specified terms."
    },
    {
      id: "dp-08",
      type: "mcq",
      title: "SLA",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"SLA\" mean?",
      options: [
        "best alternative to a negotiated agreement, the fallback option if negotiation fails",
        "total cost of ownership, including purchase price plus operating, maintenance, logistics, switching, and disposal costs",
        "service level agreement defining expected service performance, responsibilities, and remedies",
        "A manual workaround with no control value",
      ],
      correctIndex: 2,
      explanation: "Service level agreement defining expected service performance, responsibilities, and remedies."
    },
    {
      id: "dp-09",
      type: "mcq",
      title: "BATNA",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"BATNA\" mean?",
      options: [
        "service level agreement defining expected service performance, responsibilities, and remedies",
        "best alternative to a negotiated agreement, the fallback option if negotiation fails",
        "review of purchasing data to identify savings, consolidation, leakage, and sourcing opportunities",
        "A visual branding element only",
      ],
      correctIndex: 1,
      explanation: "Best alternative to a negotiated agreement, the fallback option if negotiation fails."
    },
    {
      id: "dp-10",
      type: "mcq",
      title: "Supplier scorecard",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Supplier scorecard\" mean?",
      options: [
        "end-to-end process from requisition and purchase order to receipt, invoice, and payment",
        "A meeting agenda template",
        "a performance tool tracking supplier quality, cost, delivery, service, risk, and compliance",
        "supplier discount offered when invoices are paid before the standard due date",
      ],
      correctIndex: 2,
      explanation: "A performance tool tracking supplier quality, cost, delivery, service, risk, and compliance."
    },
    {
      id: "dp-11",
      type: "mcq",
      title: "Vendor master",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Vendor master\" mean?",
      options: [
        "using more than one supplier to reduce supply risk or improve competitiveness",
        "A payroll-only process unrelated to this domain",
        "central supplier record containing tax, payment, banking, address, and compliance data",
        "managing spend categories strategically based on demand, market, supplier, and business needs",
      ],
      correctIndex: 2,
      explanation: "Central supplier record containing tax, payment, banking, address, and compliance data."
    },
    {
      id: "dp-12",
      type: "mcq",
      title: "Three-way match",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Three-way match\" mean?",
      options: [
        "comparison of purchase order, goods receipt, and invoice before payment",
        "A design color choice with no operational meaning",
        "end-to-end process from requisition and purchase order to receipt, invoice, and payment",
        "including environmental, social, and governance factors in purchasing decisions",
      ],
      correctIndex: 0,
      explanation: "Comparison of purchase order, goods receipt, and invoice before payment."
    },
    {
      id: "dp-13",
      type: "mcq",
      title: "Maverick spend",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Maverick spend\" mean?",
      options: [
        "A temporary file naming convention only",
        "purchases made outside approved procurement processes or contracts",
        "competitive sourcing event where suppliers bid down price under defined requirements",
        "potential disruption or loss from supplier financial, operational, geopolitical, compliance, or quality issues",
      ],
      correctIndex: 1,
      explanation: "Purchases made outside approved procurement processes or contracts."
    },
    {
      id: "dp-14",
      type: "mcq",
      title: "Spend analysis",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Spend analysis\" mean?",
      options: [
        "combining similar demand across business units to improve buying power",
        "A social media caption format",
        "time between order placement and receipt or service completion",
        "review of purchasing data to identify savings, consolidation, leakage, and sourcing opportunities",
      ],
      correctIndex: 3,
      explanation: "Review of purchasing data to identify savings, consolidation, leakage, and sourcing opportunities."
    },
    {
      id: "dp-15",
      type: "mcq",
      title: "Category management",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Category management\" mean?",
      options: [
        "managing spend categories strategically based on demand, market, supplier, and business needs",
        "A customer service greeting script",
        "competitive sourcing event where suppliers bid down price under defined requirements",
        "central supplier record containing tax, payment, banking, address, and compliance data",
      ],
      correctIndex: 0,
      explanation: "Managing spend categories strategically based on demand, market, supplier, and business needs."
    },
    {
      id: "dp-16",
      type: "mcq",
      title: "Supplier risk",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Supplier risk\" mean?",
      options: [
        "standard trade terms defining buyer and seller responsibilities in international shipments",
        "potential disruption or loss from supplier financial, operational, geopolitical, compliance, or quality issues",
        "An office administration policy only",
        "service level agreement defining expected service performance, responsibilities, and remedies",
      ],
      correctIndex: 1,
      explanation: "Potential disruption or loss from supplier financial, operational, geopolitical, compliance, or quality issues."
    },
    {
      id: "dp-17",
      type: "mcq",
      title: "Dual sourcing",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Dual sourcing\" mean?",
      options: [
        "managing spend categories strategically based on demand, market, supplier, and business needs",
        "using more than one supplier to reduce supply risk or improve competitiveness",
        "lost value when purchases do not follow negotiated terms or preferred suppliers",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "Using more than one supplier to reduce supply risk or improve competitiveness."
    },
    {
      id: "dp-18",
      type: "mcq",
      title: "Sole sourcing",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Sole sourcing\" mean?",
      options: [
        "selecting one supplier because only that supplier can meet the requirement or strategic need",
        "total cost of ownership, including purchase price plus operating, maintenance, logistics, switching, and disposal costs",
        "estimating what a product or service should cost based on materials, labor, overhead, margin, and market factors",
        "A manual workaround with no control value",
      ],
      correctIndex: 0,
      explanation: "Selecting one supplier because only that supplier can meet the requirement or strategic need."
    },
    {
      id: "dp-19",
      type: "mcq",
      title: "Lead time",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Lead time\" mean?",
      options: [
        "a formal buyer document authorizing a supplier to provide goods or services under specified terms",
        "A visual branding element only",
        "estimating what a product or service should cost based on materials, labor, overhead, margin, and market factors",
        "time between order placement and receipt or service completion",
      ],
      correctIndex: 3,
      explanation: "Time between order placement and receipt or service completion."
    },
    {
      id: "dp-20",
      type: "mcq",
      title: "Incoterms",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Incoterms\" mean?",
      options: [
        "acquiring goods or services at the best total value while meeting quality, risk, compliance, and delivery needs",
        "standard trade terms defining buyer and seller responsibilities in international shipments",
        "using more than one supplier to reduce supply risk or improve competitiveness",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "Standard trade terms defining buyer and seller responsibilities in international shipments."
    },
    {
      id: "dp-21",
      type: "mcq",
      title: "Contract compliance",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Contract compliance\" mean?",
      options: [
        "request for information, used to gather supplier capabilities or market information before sourcing",
        "A payroll-only process unrelated to this domain",
        "central supplier record containing tax, payment, banking, address, and compliance data",
        "ensuring purchases follow negotiated contract terms, pricing, and obligations",
      ],
      correctIndex: 3,
      explanation: "Ensuring purchases follow negotiated contract terms, pricing, and obligations."
    },
    {
      id: "dp-22",
      type: "mcq",
      title: "Early payment discount",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Early payment discount\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "supplier discount offered when invoices are paid before the standard due date",
        "service level agreement defining expected service performance, responsibilities, and remedies",
        "comparison of purchase order, goods receipt, and invoice before payment",
      ],
      correctIndex: 1,
      explanation: "Supplier discount offered when invoices are paid before the standard due date."
    },
    {
      id: "dp-23",
      type: "mcq",
      title: "Sustainable procurement",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Sustainable procurement\" mean?",
      options: [
        "request for information, used to gather supplier capabilities or market information before sourcing",
        "A temporary file naming convention only",
        "request for quotation, used when requirements are clear and price comparison is the main objective",
        "including environmental, social, and governance factors in purchasing decisions",
      ],
      correctIndex: 3,
      explanation: "Including environmental, social, and governance factors in purchasing decisions."
    },
    {
      id: "dp-24",
      type: "mcq",
      title: "Supplier onboarding",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Supplier onboarding\" mean?",
      options: [
        "ensuring purchases follow negotiated contract terms, pricing, and obligations",
        "process of validating, approving, and setting up a new supplier for transactions",
        "review of purchasing data to identify savings, consolidation, leakage, and sourcing opportunities",
        "A social media caption format",
      ],
      correctIndex: 1,
      explanation: "Process of validating, approving, and setting up a new supplier for transactions."
    },
    {
      id: "dp-25",
      type: "mcq",
      title: "Should-cost analysis",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Should-cost analysis\" mean?",
      options: [
        "competitive sourcing event where suppliers bid down price under defined requirements",
        "a performance tool tracking supplier quality, cost, delivery, service, risk, and compliance",
        "A customer service greeting script",
        "estimating what a product or service should cost based on materials, labor, overhead, margin, and market factors",
      ],
      correctIndex: 3,
      explanation: "Estimating what a product or service should cost based on materials, labor, overhead, margin, and market factors."
    },
    {
      id: "dp-26",
      type: "mcq",
      title: "Reverse auction",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Reverse auction\" mean?",
      options: [
        "An office administration policy only",
        "best alternative to a negotiated agreement, the fallback option if negotiation fails",
        "competitive sourcing event where suppliers bid down price under defined requirements",
        "service level agreement defining expected service performance, responsibilities, and remedies",
      ],
      correctIndex: 2,
      explanation: "Competitive sourcing event where suppliers bid down price under defined requirements."
    },
    {
      id: "dp-27",
      type: "mcq",
      title: "Service credits",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Service credits\" mean?",
      options: [
        "managing spend categories strategically based on demand, market, supplier, and business needs",
        "standard trade terms defining buyer and seller responsibilities in international shipments",
        "contractual remedies owed by a supplier when service levels are not met",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Contractual remedies owed by a supplier when service levels are not met."
    },
    {
      id: "dp-28",
      type: "mcq",
      title: "Demand aggregation",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Demand aggregation\" mean?",
      options: [
        "comparison of purchase order, goods receipt, and invoice before payment",
        "A manual workaround with no control value",
        "combining similar demand across business units to improve buying power",
        "review of purchasing data to identify savings, consolidation, leakage, and sourcing opportunities",
      ],
      correctIndex: 2,
      explanation: "Combining similar demand across business units to improve buying power."
    },
    {
      id: "dp-29",
      type: "mcq",
      title: "Contract leakage",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Contract leakage\" mean?",
      options: [
        "A visual branding element only",
        "review of purchasing data to identify savings, consolidation, leakage, and sourcing opportunities",
        "competitive sourcing event where suppliers bid down price under defined requirements",
        "lost value when purchases do not follow negotiated terms or preferred suppliers",
      ],
      correctIndex: 3,
      explanation: "Lost value when purchases do not follow negotiated terms or preferred suppliers."
    },
    {
      id: "dp-30",
      type: "mcq",
      title: "Procure-to-pay",
      prompt: "In the Procurement & Strategic Sourcing domain, what does \"Procure-to-pay\" mean?",
      options: [
        "competitive sourcing event where suppliers bid down price under defined requirements",
        "end-to-end process from requisition and purchase order to receipt, invoice, and payment",
        "A meeting agenda template",
        "managing spend categories strategically based on demand, market, supplier, and business needs",
      ],
      correctIndex: 1,
      explanation: "End-to-end process from requisition and purchase order to receipt, invoice, and payment."
    },
    {
      id: "dp-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A supplier has the lowest price but poor delivery performance. What should procurement evaluate?",
      options: [
        "Total cost, delivery risk, quality, SLA history, business impact, and alternatives",
        "Only salesperson relationship",
        "Price only",
        "Supplier logo",
      ],
      correctIndex: 0,
      explanation: "Lowest price is not always best value when delivery risk creates business cost."
    },
    {
      id: "dp-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A business unit buys outside the preferred contract. What is this called and why does it matter?",
      options: [
        "Depreciation; it reduces asset value",
        "Good sourcing; it always saves money",
        "Maverick spend; it creates compliance risk and contract value leakage",
        "Inventory turnover; it improves stock",
      ],
      correctIndex: 2,
      explanation: "Maverick spend undermines controls and negotiated value."
    },
    {
      id: "dp-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A critical component has a single supplier in a high-risk region. What is the best sourcing response?",
      options: [
        "Only renegotiate payment terms",
        "Cancel the product",
        "Assess supplier risk and consider dual sourcing, safety stock, contingency plans, or redesign options",
        "Ignore because the supplier is cheap",
      ],
      correctIndex: 2,
      explanation: "Critical supply risk needs mitigation beyond price negotiation."
    },
    {
      id: "dp-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An RFP response is cheap but vague on implementation. What should be done?",
      options: [
        "Compare font style only",
        "Clarify scope, implementation plan, assumptions, service levels, risks, and references before award",
        "Skip due diligence",
        "Award immediately",
      ],
      correctIndex: 1,
      explanation: "Complex sourcing decisions need capability and delivery validation."
    },
    {
      id: "dp-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A supplier repeatedly misses SLA targets. What should contract management do?",
      options: [
        "Review evidence, apply remedies if appropriate, agree corrective actions, and assess escalation or replacement",
        "Ignore service failures",
        "Remove SLA tracking",
        "Pay faster without discussion",
      ],
      correctIndex: 0,
      explanation: "Supplier performance must be managed with evidence, remedies, and corrective action."
    },
    {
      id: "dp-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Procurement wants to reduce cost in a fragmented category. What analysis helps most?",
      options: [
        "Buy from the first supplier",
        "Only ask for a bigger budget",
        "Spend analysis, supplier consolidation, demand aggregation, specification review, and sourcing strategy",
        "Stop tracking purchase orders",
      ],
      correctIndex: 2,
      explanation: "Category savings come from understanding spend, demand, specs, and supplier market."
    },
    {
      id: "dp-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A buyer is offered an expensive gift by a bidder during sourcing. What is the right action?",
      options: [
        "Follow ethics policy, disclose the offer, and avoid conflicts of interest",
        "Let it influence the award",
        "Accept it privately",
        "Ask for a larger gift",
      ],
      correctIndex: 0,
      explanation: "Procurement integrity requires conflict-of-interest controls."
    },
    {
      id: "dp-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A vendor master change request updates bank details. What control is important?",
      options: [
        "Independent verification, approval workflow, audit trail, and segregation of duties",
        "Remove all reviews",
        "Approve immediately by email only",
        "Use any bank account provided",
      ],
      correctIndex: 0,
      explanation: "Vendor bank changes are fraud-sensitive and need strong controls."
    },
    {
      id: "dp-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A global shipment has unclear responsibility for insurance and freight. What should be checked?",
      options: [
        "Only product color",
        "Only order size",
        "Only warehouse name",
        "Applicable Incoterms and contract shipping terms",
      ],
      correctIndex: 3,
      explanation: "Incoterms clarify shipment responsibility and cost/risk transfer."
    },
    {
      id: "dp-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A company wants procurement to be more strategic. What shift is needed?",
      options: [
        "Only process invoices faster",
        "Avoid supplier data",
        "Buy everything at lowest upfront price",
        "Move from transactional buying to category strategy, supplier partnerships, risk management, and value creation",
      ],
      correctIndex: 3,
      explanation: "Strategic procurement balances cost, risk, quality, innovation, and business outcomes."
    }
  ],
};
