import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainRetailData = {
  id: ASSESSMENT_TYPES.domain_retail,
  title: "Retail Industry Domain Professional Certification",
  shortTitle: "Retail Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional retail domain assessment covering store operations, merchandising, inventory, pricing, e-commerce, omnichannel, customer experience, supply chain, loyalty, analytics, and profitability.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "dr-01",
      type: "mcq",
      title: "SKU",
      prompt: "In the Retail Industry domain, what does \"SKU\" mean?",
      options: [
        "percentage of sold items returned by customers",
        "A payroll-only process unrelated to this domain",
        "stock keeping unit, a unique identifier for a specific product variant",
        "inventory level at which replenishment should be triggered",
      ],
      correctIndex: 2,
      explanation: "Stock keeping unit, a unique identifier for a specific product variant."
    },
    {
      id: "dr-02",
      type: "mcq",
      title: "Planogram",
      prompt: "In the Retail Industry domain, what does \"Planogram\" mean?",
      options: [
        "a visual layout showing where products should be placed on shelves",
        "a program designed to encourage repeat purchase and customer engagement",
        "inventory level at which replenishment should be triggered",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 0,
      explanation: "A visual layout showing where products should be placed on shelves."
    },
    {
      id: "dr-03",
      type: "mcq",
      title: "Shrinkage",
      prompt: "In the Retail Industry domain, what does \"Shrinkage\" mean?",
      options: [
        "A temporary file naming convention only",
        "managing product categories as strategic business units",
        "inventory loss caused by theft, damage, error, or fraud",
        "stock keeping unit, a unique identifier for a specific product variant",
      ],
      correctIndex: 2,
      explanation: "Inventory loss caused by theft, damage, error, or fraud."
    },
    {
      id: "dr-04",
      type: "mcq",
      title: "BOPIS",
      prompt: "In the Retail Industry domain, what does \"BOPIS\" mean?",
      options: [
        "buy online, pick up in store, an omnichannel fulfillment model",
        "A social media caption format",
        "a reduction in selling price, often used to clear inventory",
        "deciding which products, brands, sizes, and variants to offer",
      ],
      correctIndex: 0,
      explanation: "Buy online, pick up in store, an omnichannel fulfillment model."
    },
    {
      id: "dr-05",
      type: "mcq",
      title: "Markdown",
      prompt: "In the Retail Industry domain, what does \"Markdown\" mean?",
      options: [
        "final delivery step from local facility to the customer",
        "A customer service greeting script",
        "a reduction in selling price, often used to clear inventory",
        "a situation where customer demand cannot be met due to unavailable inventory",
      ],
      correctIndex: 2,
      explanation: "A reduction in selling price, often used to clear inventory."
    },
    {
      id: "dr-06",
      type: "mcq",
      title: "Sell-through",
      prompt: "In the Retail Industry domain, what does \"Sell-through\" mean?",
      options: [
        "An office administration policy only",
        "integrated customer experience across store, web, mobile, and other channels",
        "the percentage of received inventory sold during a period",
        "changing prices based on demand, inventory, competition, or timing",
      ],
      correctIndex: 2,
      explanation: "The percentage of received inventory sold during a period."
    },
    {
      id: "dr-07",
      type: "mcq",
      title: "FIFO",
      prompt: "In the Retail Industry domain, what does \"FIFO\" mean?",
      options: [
        "percentage of sold items returned by customers",
        "number of people entering a physical store",
        "A random sales slogan with no technical meaning",
        "first in, first out inventory rotation method",
      ],
      correctIndex: 3,
      explanation: "First in, first out inventory rotation method."
    },
    {
      id: "dr-08",
      type: "mcq",
      title: "LTV",
      prompt: "In the Retail Industry domain, what does \"LTV\" mean?",
      options: [
        "A manual workaround with no control value",
        "lifetime value, the expected profit from a customer over the relationship",
        "stock keeping unit, a unique identifier for a specific product variant",
        "integrated customer experience across store, web, mobile, and other channels",
      ],
      correctIndex: 1,
      explanation: "Lifetime value, the expected profit from a customer over the relationship."
    },
    {
      id: "dr-09",
      type: "mcq",
      title: "Basket size",
      prompt: "In the Retail Industry domain, what does \"Basket size\" mean?",
      options: [
        "a situation where customer demand cannot be met due to unavailable inventory",
        "the average number of items or value purchased per transaction",
        "buy online, pick up in store, an omnichannel fulfillment model",
        "A visual branding element only",
      ],
      correctIndex: 1,
      explanation: "The average number of items or value purchased per transaction."
    },
    {
      id: "dr-10",
      type: "mcq",
      title: "Gross margin",
      prompt: "In the Retail Industry domain, what does \"Gross margin\" mean?",
      options: [
        "selling price minus cost of goods sold, expressed as value or percentage",
        "A meeting agenda template",
        "point of sale system used to process transactions",
        "retailer-owned brand sold under the retailer's own label",
      ],
      correctIndex: 0,
      explanation: "Selling price minus cost of goods sold, expressed as value or percentage."
    },
    {
      id: "dr-11",
      type: "mcq",
      title: "GMROI",
      prompt: "In the Retail Industry domain, what does \"GMROI\" mean?",
      options: [
        "changing prices based on demand, inventory, competition, or timing",
        "gross margin return on inventory investment, measuring inventory profitability",
        "A payroll-only process unrelated to this domain",
        "selling price minus cost of goods sold, expressed as value or percentage",
      ],
      correctIndex: 1,
      explanation: "Gross margin return on inventory investment, measuring inventory profitability."
    },
    {
      id: "dr-12",
      type: "mcq",
      title: "Omnichannel",
      prompt: "In the Retail Industry domain, what does \"Omnichannel\" mean?",
      options: [
        "integrated customer experience across store, web, mobile, and other channels",
        "a reduction in selling price, often used to clear inventory",
        "A design color choice with no operational meaning",
        "an evaluator who anonymously assesses store service and standards",
      ],
      correctIndex: 0,
      explanation: "Integrated customer experience across store, web, mobile, and other channels."
    },
    {
      id: "dr-13",
      type: "mcq",
      title: "Assortment planning",
      prompt: "In the Retail Industry domain, what does \"Assortment planning\" mean?",
      options: [
        "an evaluator who anonymously assesses store service and standards",
        "online order fulfillment through customer pickup at store or location",
        "A temporary file naming convention only",
        "deciding which products, brands, sizes, and variants to offer",
      ],
      correctIndex: 3,
      explanation: "Deciding which products, brands, sizes, and variants to offer."
    },
    {
      id: "dr-14",
      type: "mcq",
      title: "Category management",
      prompt: "In the Retail Industry domain, what does \"Category management\" mean?",
      options: [
        "the percentage of received inventory sold during a period",
        "inventory loss caused by theft, damage, error, or fraud",
        "A social media caption format",
        "managing product categories as strategic business units",
      ],
      correctIndex: 3,
      explanation: "Managing product categories as strategic business units."
    },
    {
      id: "dr-15",
      type: "mcq",
      title: "Inventory turnover",
      prompt: "In the Retail Industry domain, what does \"Inventory turnover\" mean?",
      options: [
        "how often inventory is sold and replaced during a period",
        "a reduction in selling price, often used to clear inventory",
        "A customer service greeting script",
        "number of people entering a physical store",
      ],
      correctIndex: 0,
      explanation: "How often inventory is sold and replaced during a period."
    },
    {
      id: "dr-16",
      type: "mcq",
      title: "Reorder point",
      prompt: "In the Retail Industry domain, what does \"Reorder point\" mean?",
      options: [
        "inventory level at which replenishment should be triggered",
        "stock keeping unit, a unique identifier for a specific product variant",
        "a visual layout showing where products should be placed on shelves",
        "An office administration policy only",
      ],
      correctIndex: 0,
      explanation: "Inventory level at which replenishment should be triggered."
    },
    {
      id: "dr-17",
      type: "mcq",
      title: "Safety stock",
      prompt: "In the Retail Industry domain, what does \"Safety stock\" mean?",
      options: [
        "inventory level at which replenishment should be triggered",
        "extra inventory kept to reduce stockout risk",
        "buy online, pick up in store, an omnichannel fulfillment model",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "Extra inventory kept to reduce stockout risk."
    },
    {
      id: "dr-18",
      type: "mcq",
      title: "Drop shipping",
      prompt: "In the Retail Industry domain, what does \"Drop shipping\" mean?",
      options: [
        "A manual workaround with no control value",
        "the average number of items or value purchased per transaction",
        "fulfillment model where a third party ships directly to the customer",
        "a situation where customer demand cannot be met due to unavailable inventory",
      ],
      correctIndex: 2,
      explanation: "Fulfillment model where a third party ships directly to the customer."
    },
    {
      id: "dr-19",
      type: "mcq",
      title: "Click-and-collect",
      prompt: "In the Retail Industry domain, what does \"Click-and-collect\" mean?",
      options: [
        "online order fulfillment through customer pickup at store or location",
        "A visual branding element only",
        "inventory loss caused by theft, damage, error, or fraud",
        "number of people entering a physical store",
      ],
      correctIndex: 0,
      explanation: "Online order fulfillment through customer pickup at store or location."
    },
    {
      id: "dr-20",
      type: "mcq",
      title: "Last-mile delivery",
      prompt: "In the Retail Industry domain, what does \"Last-mile delivery\" mean?",
      options: [
        "lifetime value, the expected profit from a customer over the relationship",
        "final delivery step from local facility to the customer",
        "inventory loss caused by theft, damage, error, or fraud",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "Final delivery step from local facility to the customer."
    },
    {
      id: "dr-21",
      type: "mcq",
      title: "Mystery shopper",
      prompt: "In the Retail Industry domain, what does \"Mystery shopper\" mean?",
      options: [
        "an evaluator who anonymously assesses store service and standards",
        "a visual layout showing where products should be placed on shelves",
        "managing product categories as strategic business units",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 0,
      explanation: "An evaluator who anonymously assesses store service and standards."
    },
    {
      id: "dr-22",
      type: "mcq",
      title: "Loyalty program",
      prompt: "In the Retail Industry domain, what does \"Loyalty program\" mean?",
      options: [
        "extra inventory kept to reduce stockout risk",
        "A design color choice with no operational meaning",
        "a program designed to encourage repeat purchase and customer engagement",
        "the average number of items or value purchased per transaction",
      ],
      correctIndex: 2,
      explanation: "A program designed to encourage repeat purchase and customer engagement."
    },
    {
      id: "dr-23",
      type: "mcq",
      title: "POS",
      prompt: "In the Retail Industry domain, what does \"POS\" mean?",
      options: [
        "fulfillment model where a third party ships directly to the customer",
        "point of sale system used to process transactions",
        "display area at the end of a retail aisle used for high-visibility merchandising",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Point of sale system used to process transactions."
    },
    {
      id: "dr-24",
      type: "mcq",
      title: "Return rate",
      prompt: "In the Retail Industry domain, what does \"Return rate\" mean?",
      options: [
        "A social media caption format",
        "percentage of sold items returned by customers",
        "final delivery step from local facility to the customer",
        "a reduction in selling price, often used to clear inventory",
      ],
      correctIndex: 1,
      explanation: "Percentage of sold items returned by customers."
    },
    {
      id: "dr-25",
      type: "mcq",
      title: "Stockout",
      prompt: "In the Retail Industry domain, what does \"Stockout\" mean?",
      options: [
        "a situation where customer demand cannot be met due to unavailable inventory",
        "stock keeping unit, a unique identifier for a specific product variant",
        "fulfillment model where a third party ships directly to the customer",
        "A customer service greeting script",
      ],
      correctIndex: 0,
      explanation: "A situation where customer demand cannot be met due to unavailable inventory."
    },
    {
      id: "dr-26",
      type: "mcq",
      title: "Endcap",
      prompt: "In the Retail Industry domain, what does \"Endcap\" mean?",
      options: [
        "buy online, pick up in store, an omnichannel fulfillment model",
        "display area at the end of a retail aisle used for high-visibility merchandising",
        "the average number of items or value purchased per transaction",
        "An office administration policy only",
      ],
      correctIndex: 1,
      explanation: "Display area at the end of a retail aisle used for high-visibility merchandising."
    },
    {
      id: "dr-27",
      type: "mcq",
      title: "Private label",
      prompt: "In the Retail Industry domain, what does \"Private label\" mean?",
      options: [
        "a visual layout showing where products should be placed on shelves",
        "number of people entering a physical store",
        "retailer-owned brand sold under the retailer's own label",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Retailer-owned brand sold under the retailer's own label."
    },
    {
      id: "dr-28",
      type: "mcq",
      title: "Dynamic pricing",
      prompt: "In the Retail Industry domain, what does \"Dynamic pricing\" mean?",
      options: [
        "inventory loss caused by theft, damage, error, or fraud",
        "percentage of visitors or shoppers who complete a purchase",
        "A manual workaround with no control value",
        "changing prices based on demand, inventory, competition, or timing",
      ],
      correctIndex: 3,
      explanation: "Changing prices based on demand, inventory, competition, or timing."
    },
    {
      id: "dr-29",
      type: "mcq",
      title: "Conversion rate",
      prompt: "In the Retail Industry domain, what does \"Conversion rate\" mean?",
      options: [
        "a reduction in selling price, often used to clear inventory",
        "percentage of visitors or shoppers who complete a purchase",
        "A visual branding element only",
        "inventory loss caused by theft, damage, error, or fraud",
      ],
      correctIndex: 1,
      explanation: "Percentage of visitors or shoppers who complete a purchase."
    },
    {
      id: "dr-30",
      type: "mcq",
      title: "Footfall",
      prompt: "In the Retail Industry domain, what does \"Footfall\" mean?",
      options: [
        "A meeting agenda template",
        "gross margin return on inventory investment, measuring inventory profitability",
        "number of people entering a physical store",
        "inventory level at which replenishment should be triggered",
      ],
      correctIndex: 2,
      explanation: "Number of people entering a physical store."
    },
    {
      id: "dr-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A product has high traffic but low conversion online. What should be analyzed?",
      options: [
        "Only corporate logo",
        "Price, product content, reviews, availability, shipping promise, UX friction, and competitor offers",
        "Only employee attendance",
        "Only the warehouse wall color",
      ],
      correctIndex: 1,
      explanation: "Conversion issues require evaluating offer, experience, availability, and competitive context."
    },
    {
      id: "dr-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A store has strong sales but weak profitability. What should be checked?",
      options: [
        "Only store size",
        "Gross margin, markdowns, shrinkage, labor cost, product mix, and promotion effectiveness",
        "Only music volume",
        "Only total receipts",
      ],
      correctIndex: 1,
      explanation: "Sales alone do not prove profitability."
    },
    {
      id: "dr-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A retailer has frequent stockouts for bestsellers. What is the strongest response?",
      options: [
        "Ignore customer demand",
        "Increase markdowns",
        "Stop selling bestsellers",
        "Review demand forecast, reorder points, safety stock, supplier lead times, and allocation rules",
      ],
      correctIndex: 3,
      explanation: "Stockout reduction requires inventory and replenishment process improvement."
    },
    {
      id: "dr-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A category has too many slow-moving SKUs. What should category managers do?",
      options: [
        "Hide the products",
        "Analyze sell-through, margin, inventory age, customer demand, and rationalize assortment",
        "Add more SKUs immediately",
        "Only change shelf labels",
      ],
      correctIndex: 1,
      explanation: "Assortment should be optimized using performance and customer demand."
    },
    {
      id: "dr-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An omnichannel customer complains that store inventory shown online was unavailable. What is the likely issue?",
      options: [
        "Only product color",
        "Only customer loyalty status",
        "Only ad creative",
        "Inventory accuracy, system sync latency, reservation rules, or store process gaps",
      ],
      correctIndex: 3,
      explanation: "Omnichannel reliability depends on accurate, timely inventory data."
    },
    {
      id: "dr-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Return rate spikes for one apparel item. What should be investigated?",
      options: [
        "Only tax rate",
        "Only POS printer paper",
        "Only store lighting",
        "Size fit, product description, images, quality defects, reviews, and return reasons",
      ],
      correctIndex: 3,
      explanation: "Returns often come from mismatch between expectation, fit, and product quality."
    },
    {
      id: "dr-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A promotion increases revenue but reduces margin sharply. What is the best assessment?",
      options: [
        "Ignore margin",
        "Declare the promotion successful by revenue only",
        "Repeat forever",
        "Evaluate incremental volume, margin dilution, cannibalization, stock impact, and customer acquisition value",
      ],
      correctIndex: 3,
      explanation: "Promotions must be judged by profitable incremental impact."
    },
    {
      id: "dr-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A retailer wants to improve loyalty program performance. What should be analyzed?",
      options: [
        "Enrollment, active usage, repeat purchase, redemption behavior, personalization, and incremental profit",
        "Only receipt length",
        "Only card color",
        "Only store playlist",
      ],
      correctIndex: 0,
      explanation: "Loyalty value depends on behavior change and profitability."
    },
    {
      id: "dr-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Store A and Store B have similar traffic but different sales. What should be compared?",
      options: [
        "Only manager age",
        "Only wall paint",
        "Conversion, basket size, staffing, inventory availability, merchandising, local demand, and service quality",
        "Only store name",
      ],
      correctIndex: 2,
      explanation: "Revenue variation can come from conversion, basket, inventory, and operations."
    },
    {
      id: "dr-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A retailer is launching private label products. What is most important?",
      options: [
        "Only copying national brands",
        "Only cheaper packaging",
        "Customer need, quality, margin, supplier capability, brand trust, and category fit",
        "Only a new shelf tag",
      ],
      correctIndex: 2,
      explanation: "Private label success requires quality, margin, differentiation, and customer trust."
    }
  ],
};
