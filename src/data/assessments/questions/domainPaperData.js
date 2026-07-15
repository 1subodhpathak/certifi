import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainPaperData = {
  id: ASSESSMENT_TYPES.domain_paper,
  title: "Paper & Pulp Industry Domain Professional Certification",
  shortTitle: "Paper Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional paper and pulp assessment covering raw materials, pulping, papermaking, grades, converting, quality, recycling, energy, sustainability, supply chain, and mill operations.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "dp-01",
      type: "mcq",
      title: "Wood pulp",
      prompt: "In the Paper & Pulp Industry domain, what does \"Wood pulp\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "cellulosic fiber material produced from wood and used as a primary raw material for paper",
        "spent chemical liquor from kraft pulping that can be burned for energy and chemical recovery",
        "low-cost paper traditionally used for newspapers",
      ],
      correctIndex: 1,
      explanation: "Cellulosic fiber material produced from wood and used as a primary raw material for paper."
    },
    {
      id: "dp-02",
      type: "mcq",
      title: "Pulping",
      prompt: "In the Paper & Pulp Industry domain, what does \"Pulping\" mean?",
      options: [
        "processing parent rolls into finished products such as sheets, boxes, bags, or tissue rolls",
        "A design color choice with no operational meaning",
        "breaking down raw material into individual fibers through mechanical, chemical, or recycled processes",
        "low-cost paper traditionally used for newspapers",
      ],
      correctIndex: 2,
      explanation: "Breaking down raw material into individual fibers through mechanical, chemical, or recycled processes."
    },
    {
      id: "dp-03",
      type: "mcq",
      title: "Kraft process",
      prompt: "In the Paper & Pulp Industry domain, what does \"Kraft process\" mean?",
      options: [
        "cellulosic fiber material produced from wood and used as a primary raw material for paper",
        "chemical pulping process that produces strong pulp and enables chemical recovery",
        "lightweight absorbent paper used for hygiene products",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Chemical pulping process that produces strong pulp and enables chemical recovery."
    },
    {
      id: "dp-04",
      type: "mcq",
      title: "Mechanical pulping",
      prompt: "In the Paper & Pulp Industry domain, what does \"Mechanical pulping\" mean?",
      options: [
        "pulping method that separates fibers mechanically and retains more lignin",
        "A social media caption format",
        "grams per square meter, a measure of paper weight",
        "processing parent rolls into finished products such as sheets, boxes, bags, or tissue rolls",
      ],
      correctIndex: 0,
      explanation: "Pulping method that separates fibers mechanically and retains more lignin."
    },
    {
      id: "dp-05",
      type: "mcq",
      title: "Bleaching",
      prompt: "In the Paper & Pulp Industry domain, what does \"Bleaching\" mean?",
      options: [
        "A customer service greeting script",
        "documentation tracking certified material through the supply chain",
        "standard measure of paper weight for a defined sheet size and quantity",
        "process used to brighten pulp and remove or alter lignin and impurities",
      ],
      correctIndex: 3,
      explanation: "Process used to brighten pulp and remove or alter lignin and impurities."
    },
    {
      id: "dp-06",
      type: "mcq",
      title: "Lignin",
      prompt: "In the Paper & Pulp Industry domain, what does \"Lignin\" mean?",
      options: [
        "An office administration policy only",
        "pulping method that separates fibers mechanically and retains more lignin",
        "natural polymer in wood that can darken or weaken paper if not managed",
        "low-cost paper traditionally used for newspapers",
      ],
      correctIndex: 2,
      explanation: "Natural polymer in wood that can darken or weaken paper if not managed."
    },
    {
      id: "dp-07",
      type: "mcq",
      title: "Black liquor",
      prompt: "In the Paper & Pulp Industry domain, what does \"Black liquor\" mean?",
      options: [
        "smoothing or finishing paper by passing it through rollers",
        "strong paper made from kraft pulp, often used for bags and packaging",
        "A random sales slogan with no technical meaning",
        "spent chemical liquor from kraft pulping that can be burned for energy and chemical recovery",
      ],
      correctIndex: 3,
      explanation: "Spent chemical liquor from kraft pulping that can be burned for energy and chemical recovery."
    },
    {
      id: "dp-08",
      type: "mcq",
      title: "Paper machine",
      prompt: "In the Paper & Pulp Industry domain, what does \"Paper machine\" mean?",
      options: [
        "applying materials such as clay or calcium carbonate to improve surface properties",
        "spent chemical liquor from kraft pulping that can be burned for energy and chemical recovery",
        "industrial machine that forms, presses, dries, and reels paper from pulp slurry",
        "A manual workaround with no control value",
      ],
      correctIndex: 2,
      explanation: "Industrial machine that forms, presses, dries, and reels paper from pulp slurry."
    },
    {
      id: "dp-09",
      type: "mcq",
      title: "Headbox",
      prompt: "In the Paper & Pulp Industry domain, what does \"Headbox\" mean?",
      options: [
        "paper property describing resistance to show-through from the other side",
        "paper machine component that distributes pulp slurry evenly onto the forming section",
        "paper machine section that removes water mechanically through pressure",
        "A visual branding element only",
      ],
      correctIndex: 1,
      explanation: "Paper machine component that distributes pulp slurry evenly onto the forming section."
    },
    {
      id: "dp-10",
      type: "mcq",
      title: "Press section",
      prompt: "In the Paper & Pulp Industry domain, what does \"Press section\" mean?",
      options: [
        "spent chemical liquor from kraft pulping that can be burned for energy and chemical recovery",
        "A meeting agenda template",
        "paper machine section that removes water mechanically through pressure",
        "documentation tracking certified material through the supply chain",
      ],
      correctIndex: 2,
      explanation: "Paper machine section that removes water mechanically through pressure."
    },
    {
      id: "dp-11",
      type: "mcq",
      title: "Dryer section",
      prompt: "In the Paper & Pulp Industry domain, what does \"Dryer section\" mean?",
      options: [
        "standard measure of paper weight for a defined sheet size and quantity",
        "A payroll-only process unrelated to this domain",
        "paper machine section that removes water using heated cylinders or drying systems",
        "post-consumer recycled material used in new paper products",
      ],
      correctIndex: 2,
      explanation: "Paper machine section that removes water using heated cylinders or drying systems."
    },
    {
      id: "dp-12",
      type: "mcq",
      title: "Calendering",
      prompt: "In the Paper & Pulp Industry domain, what does \"Calendering\" mean?",
      options: [
        "smoothing or finishing paper by passing it through rollers",
        "A design color choice with no operational meaning",
        "documentation tracking certified material through the supply chain",
        "packaging board made from fluted medium between linerboards",
      ],
      correctIndex: 0,
      explanation: "Smoothing or finishing paper by passing it through rollers."
    },
    {
      id: "dp-13",
      type: "mcq",
      title: "Coating",
      prompt: "In the Paper & Pulp Industry domain, what does \"Coating\" mean?",
      options: [
        "A temporary file naming convention only",
        "applying materials such as clay or calcium carbonate to improve surface properties",
        "lightweight absorbent paper used for hygiene products",
        "documentation tracking certified material through the supply chain",
      ],
      correctIndex: 1,
      explanation: "Applying materials such as clay or calcium carbonate to improve surface properties."
    },
    {
      id: "dp-14",
      type: "mcq",
      title: "GSM",
      prompt: "In the Paper & Pulp Industry domain, what does \"GSM\" mean?",
      options: [
        "measure of how much light paper reflects under standard conditions",
        "A social media caption format",
        "cellulosic fiber material produced from wood and used as a primary raw material for paper",
        "grams per square meter, a measure of paper weight",
      ],
      correctIndex: 3,
      explanation: "Grams per square meter, a measure of paper weight."
    },
    {
      id: "dp-15",
      type: "mcq",
      title: "Basis weight",
      prompt: "In the Paper & Pulp Industry domain, what does \"Basis weight\" mean?",
      options: [
        "standard measure of paper weight for a defined sheet size and quantity",
        "A customer service greeting script",
        "documentation tracking certified material through the supply chain",
        "amount of water in paper, important for quality and converting performance",
      ],
      correctIndex: 0,
      explanation: "Standard measure of paper weight for a defined sheet size and quantity."
    },
    {
      id: "dp-16",
      type: "mcq",
      title: "Opacity",
      prompt: "In the Paper & Pulp Industry domain, what does \"Opacity\" mean?",
      options: [
        "industrial machine that forms, presses, dries, and reels paper from pulp slurry",
        "paper property describing resistance to show-through from the other side",
        "An office administration policy only",
        "strong paper made from kraft pulp, often used for bags and packaging",
      ],
      correctIndex: 1,
      explanation: "Paper property describing resistance to show-through from the other side."
    },
    {
      id: "dp-17",
      type: "mcq",
      title: "Brightness",
      prompt: "In the Paper & Pulp Industry domain, what does \"Brightness\" mean?",
      options: [
        "spent chemical liquor from kraft pulping that can be burned for energy and chemical recovery",
        "measure of how much light paper reflects under standard conditions",
        "paper property describing resistance to show-through from the other side",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "Measure of how much light paper reflects under standard conditions."
    },
    {
      id: "dp-18",
      type: "mcq",
      title: "Moisture content",
      prompt: "In the Paper & Pulp Industry domain, what does \"Moisture content\" mean?",
      options: [
        "amount of water in paper, important for quality and converting performance",
        "low-cost paper traditionally used for newspapers",
        "forest certification indicating responsible forest management and chain-of-custody controls",
        "A manual workaround with no control value",
      ],
      correctIndex: 0,
      explanation: "Amount of water in paper, important for quality and converting performance."
    },
    {
      id: "dp-19",
      type: "mcq",
      title: "Kraft paper",
      prompt: "In the Paper & Pulp Industry domain, what does \"Kraft paper\" mean?",
      options: [
        "smoothing or finishing paper by passing it through rollers",
        "A visual branding element only",
        "low-cost paper traditionally used for newspapers",
        "strong paper made from kraft pulp, often used for bags and packaging",
      ],
      correctIndex: 3,
      explanation: "Strong paper made from kraft pulp, often used for bags and packaging."
    },
    {
      id: "dp-20",
      type: "mcq",
      title: "Containerboard",
      prompt: "In the Paper & Pulp Industry domain, what does \"Containerboard\" mean?",
      options: [
        "natural polymer in wood that can darken or weaken paper if not managed",
        "paperboard used to manufacture corrugated boxes",
        "wastewater discharged from industrial processes after treatment requirements",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "Paperboard used to manufacture corrugated boxes."
    },
    {
      id: "dp-21",
      type: "mcq",
      title: "Corrugated board",
      prompt: "In the Paper & Pulp Industry domain, what does \"Corrugated board\" mean?",
      options: [
        "chemical pulping process that produces strong pulp and enables chemical recovery",
        "A payroll-only process unrelated to this domain",
        "wastewater discharged from industrial processes after treatment requirements",
        "packaging board made from fluted medium between linerboards",
      ],
      correctIndex: 3,
      explanation: "Packaging board made from fluted medium between linerboards."
    },
    {
      id: "dp-22",
      type: "mcq",
      title: "Tissue paper",
      prompt: "In the Paper & Pulp Industry domain, what does \"Tissue paper\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "lightweight absorbent paper used for hygiene products",
        "applying materials such as clay or calcium carbonate to improve surface properties",
        "standard measure of paper weight for a defined sheet size and quantity",
      ],
      correctIndex: 1,
      explanation: "Lightweight absorbent paper used for hygiene products."
    },
    {
      id: "dp-23",
      type: "mcq",
      title: "Newsprint",
      prompt: "In the Paper & Pulp Industry domain, what does \"Newsprint\" mean?",
      options: [
        "amount of usable pulp obtained from raw material",
        "A temporary file naming convention only",
        "processing parent rolls into finished products such as sheets, boxes, bags, or tissue rolls",
        "low-cost paper traditionally used for newspapers",
      ],
      correctIndex: 3,
      explanation: "Low-cost paper traditionally used for newspapers."
    },
    {
      id: "dp-24",
      type: "mcq",
      title: "PCR content",
      prompt: "In the Paper & Pulp Industry domain, what does \"PCR content\" mean?",
      options: [
        "measure of how much light paper reflects under standard conditions",
        "post-consumer recycled material used in new paper products",
        "strong paper made from kraft pulp, often used for bags and packaging",
        "A social media caption format",
      ],
      correctIndex: 1,
      explanation: "Post-consumer recycled material used in new paper products."
    },
    {
      id: "dp-25",
      type: "mcq",
      title: "Deinking",
      prompt: "In the Paper & Pulp Industry domain, what does \"Deinking\" mean?",
      options: [
        "strong paper made from kraft pulp, often used for bags and packaging",
        "low-cost paper traditionally used for newspapers",
        "A customer service greeting script",
        "process of removing ink from recycled paper fibers",
      ],
      correctIndex: 3,
      explanation: "Process of removing ink from recycled paper fibers."
    },
    {
      id: "dp-26",
      type: "mcq",
      title: "FSC certification",
      prompt: "In the Paper & Pulp Industry domain, what does \"FSC certification\" mean?",
      options: [
        "An office administration policy only",
        "standard measure of paper weight for a defined sheet size and quantity",
        "forest certification indicating responsible forest management and chain-of-custody controls",
        "processing parent rolls into finished products such as sheets, boxes, bags, or tissue rolls",
      ],
      correctIndex: 2,
      explanation: "Forest certification indicating responsible forest management and chain-of-custody controls."
    },
    {
      id: "dp-27",
      type: "mcq",
      title: "Chain of custody",
      prompt: "In the Paper & Pulp Industry domain, what does \"Chain of custody\" mean?",
      options: [
        "breaking down raw material into individual fibers through mechanical, chemical, or recycled processes",
        "lightweight absorbent paper used for hygiene products",
        "documentation tracking certified material through the supply chain",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Documentation tracking certified material through the supply chain."
    },
    {
      id: "dp-28",
      type: "mcq",
      title: "Effluent",
      prompt: "In the Paper & Pulp Industry domain, what does \"Effluent\" mean?",
      options: [
        "industrial machine that forms, presses, dries, and reels paper from pulp slurry",
        "A manual workaround with no control value",
        "wastewater discharged from industrial processes after treatment requirements",
        "post-consumer recycled material used in new paper products",
      ],
      correctIndex: 2,
      explanation: "Wastewater discharged from industrial processes after treatment requirements."
    },
    {
      id: "dp-29",
      type: "mcq",
      title: "Fiber yield",
      prompt: "In the Paper & Pulp Industry domain, what does \"Fiber yield\" mean?",
      options: [
        "A visual branding element only",
        "processing parent rolls into finished products such as sheets, boxes, bags, or tissue rolls",
        "paperboard used to manufacture corrugated boxes",
        "amount of usable pulp obtained from raw material",
      ],
      correctIndex: 3,
      explanation: "Amount of usable pulp obtained from raw material."
    },
    {
      id: "dp-30",
      type: "mcq",
      title: "Converting",
      prompt: "In the Paper & Pulp Industry domain, what does \"Converting\" mean?",
      options: [
        "measure of how much light paper reflects under standard conditions",
        "processing parent rolls into finished products such as sheets, boxes, bags, or tissue rolls",
        "A meeting agenda template",
        "process used to brighten pulp and remove or alter lignin and impurities",
      ],
      correctIndex: 1,
      explanation: "Processing parent rolls into finished products such as sheets, boxes, bags, or tissue rolls."
    },
    {
      id: "dp-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A paper mill sees frequent sheet breaks on the machine. What should be investigated?",
      options: [
        "Fiber quality, moisture, basis weight variation, machine tension, defects, and process stability",
        "Only truck color",
        "Only office seating",
        "Only invoice format",
      ],
      correctIndex: 0,
      explanation: "Sheet breaks require checking material and machine process variables."
    },
    {
      id: "dp-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A customer complains that print shows through the page. Which property is most relevant?",
      options: [
        "Supplier logo",
        "Truck capacity",
        "Opacity",
        "Payroll cycle",
      ],
      correctIndex: 2,
      explanation: "Show-through is related to paper opacity."
    },
    {
      id: "dp-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A packaging customer needs stronger boxes. What should be evaluated?",
      options: [
        "Only delivery route",
        "Only warehouse lights",
        "Containerboard grade, burst strength, ring crush, moisture, flute type, and converting quality",
        "Only package color",
      ],
      correctIndex: 2,
      explanation: "Packaging performance depends on board grade and converting quality."
    },
    {
      id: "dp-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A recycled paper batch has dirt spots and ink residue. What process should be reviewed?",
      options: [
        "Only operator uniforms",
        "Sorting, screening, cleaning, deinking, and recycled fiber quality controls",
        "Only company website",
        "Only final invoice",
      ],
      correctIndex: 1,
      explanation: "Recycled paper quality depends on contaminant removal and deinking."
    },
    {
      id: "dp-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A buyer asks for responsible sourcing evidence. What documents matter?",
      options: [
        "FSC/PEFC certificates, chain-of-custody records, supplier audits, and material traceability",
        "Only brochure colors",
        "Only driver names",
        "Only product photos",
      ],
      correctIndex: 0,
      explanation: "Certified paper sourcing requires chain-of-custody and audit evidence."
    },
    {
      id: "dp-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A mill wants to reduce energy cost. What should be analyzed?",
      options: [
        "Only packaging artwork",
        "Only receptionist schedule",
        "Dryer efficiency, steam use, black liquor recovery, machine downtime, and heat recovery",
        "Only local weather headlines",
      ],
      correctIndex: 2,
      explanation: "Paper mills consume major energy in drying and chemical recovery systems."
    },
    {
      id: "dp-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Paper curls after printing. What should be checked?",
      options: [
        "Moisture balance, storage conditions, coating, fiber orientation, and converting process",
        "Only sales region",
        "Only printer brand logo",
        "Only carton label",
      ],
      correctIndex: 0,
      explanation: "Curl is often driven by moisture and sheet structure imbalance."
    },
    {
      id: "dp-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A product fails thickness specification. What metric/process should be reviewed?",
      options: [
        "Caliper control, basis weight, calendering pressure, moisture, and machine settings",
        "Only social media comments",
        "Only HR policy",
        "Only tax rate",
      ],
      correctIndex: 0,
      explanation: "Thickness depends on machine settings and finishing process."
    },
    {
      id: "dp-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A mill has high wastewater compliance risk. What should be prioritized?",
      options: [
        "Only marketing campaign",
        "Only worker uniforms",
        "Only customer logo",
        "Effluent treatment, chemical use, monitoring, permits, and discharge controls",
      ],
      correctIndex: 3,
      explanation: "Environmental compliance requires process and discharge controls."
    },
    {
      id: "dp-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A converter receives damaged parent rolls. What should be inspected?",
      options: [
        "Only product slogan",
        "Only final receipt format",
        "Only sales discount",
        "Roll handling, moisture, edge damage, wrapping, transport conditions, and storage",
      ],
      correctIndex: 3,
      explanation: "Roll damage can happen during handling, transport, and storage."
    }
  ],
};
