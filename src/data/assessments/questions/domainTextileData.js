import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainTextileData = {
  id: ASSESSMENT_TYPES.domain_textile,
  title: "Textile Industry Domain Professional Certification",
  shortTitle: "Textile Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional textile industry assessment covering fibers, yarn, fabric construction, dyeing, finishing, apparel manufacturing, quality, sourcing, costing, sustainability, and supply-chain operations.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "dt-01",
      type: "mcq",
      title: "Natural fiber",
      prompt: "In the Textile Industry domain, what does \"Natural fiber\" mean?",
      options: [
        "the process of applying color or design to selected areas of textile material",
        "a fiber obtained from plant, animal, or mineral sources such as cotton, wool, silk, or flax",
        "A payroll-only process unrelated to this domain",
        "dimensional change in fabric or garments after washing, processing, or use",
      ],
      correctIndex: 1,
      explanation: "A fiber obtained from plant, animal, or mineral sources such as cotton, wool, silk, or flax."
    },
    {
      id: "dt-02",
      type: "mcq",
      title: "Synthetic fiber",
      prompt: "In the Textile Industry domain, what does \"Synthetic fiber\" mean?",
      options: [
        "a fiber obtained from plant, animal, or mineral sources such as cotton, wool, silk, or flax",
        "a man-made fiber produced through chemical processes, such as polyester, nylon, acrylic, or spandex",
        "formation of small fiber balls on a fabric surface due to abrasion",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 1,
      explanation: "A man-made fiber produced through chemical processes, such as polyester, nylon, acrylic, or spandex."
    },
    {
      id: "dt-03",
      type: "mcq",
      title: "Spinning",
      prompt: "In the Textile Industry domain, what does \"Spinning\" mean?",
      options: [
        "a treatment that improves cotton luster, strength, and dye affinity",
        "dimensional change in fabric or garments after washing, processing, or use",
        "the process of converting raw fibers into yarn by drawing and twisting them",
        "A temporary file naming convention only",
      ],
      correctIndex: 2,
      explanation: "The process of converting raw fibers into yarn by drawing and twisting them."
    },
    {
      id: "dt-04",
      type: "mcq",
      title: "Weaving",
      prompt: "In the Textile Industry domain, what does \"Weaving\" mean?",
      options: [
        "dimensional change in fabric or garments after washing, processing, or use",
        "A social media caption format",
        "fabric construction by interlacing warp and weft yarns at right angles on a loom",
        "designing textile products and systems for reuse, repair, recycling, or closed-loop material flow",
      ],
      correctIndex: 2,
      explanation: "Fabric construction by interlacing warp and weft yarns at right angles on a loom."
    },
    {
      id: "dt-05",
      type: "mcq",
      title: "Knitting",
      prompt: "In the Textile Industry domain, what does \"Knitting\" mean?",
      options: [
        "the process of applying color or design to selected areas of textile material",
        "a durable cotton twill fabric commonly made with indigo-dyed warp yarns",
        "A customer service greeting script",
        "fabric construction by interlooping yarns, usually creating more stretch than woven fabrics",
      ],
      correctIndex: 3,
      explanation: "Fabric construction by interlooping yarns, usually creating more stretch than woven fabrics."
    },
    {
      id: "dt-06",
      type: "mcq",
      title: "Warp",
      prompt: "In the Textile Industry domain, what does \"Warp\" mean?",
      options: [
        "designing textile products and systems for reuse, repair, recycling, or closed-loop material flow",
        "a manufacturing model where a factory cuts fabric, sews garments, and trims finished pieces",
        "the lengthwise yarns held under tension in weaving",
        "An office administration policy only",
      ],
      correctIndex: 2,
      explanation: "The lengthwise yarns held under tension in weaving."
    },
    {
      id: "dt-07",
      type: "mcq",
      title: "Weft",
      prompt: "In the Textile Industry domain, what does \"Weft\" mean?",
      options: [
        "formation of small fiber balls on a fabric surface due to abrasion",
        "the crosswise yarns inserted over and under the warp in weaving",
        "grams per square meter, a measure of fabric weight and density",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "The crosswise yarns inserted over and under the warp in weaving."
    },
    {
      id: "dt-08",
      type: "mcq",
      title: "GSM",
      prompt: "In the Textile Industry domain, what does \"GSM\" mean?",
      options: [
        "A manual workaround with no control value",
        "a treatment that improves cotton luster, strength, and dye affinity",
        "grams per square meter, a measure of fabric weight and density",
        "designing textile products and systems for reuse, repair, recycling, or closed-loop material flow",
      ],
      correctIndex: 2,
      explanation: "Grams per square meter, a measure of fabric weight and density."
    },
    {
      id: "dt-09",
      type: "mcq",
      title: "Denim",
      prompt: "In the Textile Industry domain, what does \"Denim\" mean?",
      options: [
        "A visual branding element only",
        "the process of converting raw fibers into yarn by drawing and twisting them",
        "a small dyed fabric sample submitted for color approval before bulk production",
        "a durable cotton twill fabric commonly made with indigo-dyed warp yarns",
      ],
      correctIndex: 3,
      explanation: "A durable cotton twill fabric commonly made with indigo-dyed warp yarns."
    },
    {
      id: "dt-10",
      type: "mcq",
      title: "Dyeing",
      prompt: "In the Textile Industry domain, what does \"Dyeing\" mean?",
      options: [
        "a certification indicating textiles have been tested for certain harmful substances",
        "the process of applying color to fiber, yarn, fabric, or garments",
        "a small dyed fabric sample submitted for color approval before bulk production",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "The process of applying color to fiber, yarn, fabric, or garments."
    },
    {
      id: "dt-11",
      type: "mcq",
      title: "Printing",
      prompt: "In the Textile Industry domain, what does \"Printing\" mean?",
      options: [
        "polyester made from recycled materials such as PET bottles or textile waste",
        "a durable cotton twill fabric commonly made with indigo-dyed warp yarns",
        "the process of applying color or design to selected areas of textile material",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 2,
      explanation: "The process of applying color or design to selected areas of textile material."
    },
    {
      id: "dt-12",
      type: "mcq",
      title: "Mercerization",
      prompt: "In the Textile Industry domain, what does \"Mercerization\" mean?",
      options: [
        "a treatment that improves cotton luster, strength, and dye affinity",
        "a small dyed fabric sample submitted for color approval before bulk production",
        "the resistance of dyed or printed textile color to washing, rubbing, light, or perspiration",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 0,
      explanation: "A treatment that improves cotton luster, strength, and dye affinity."
    },
    {
      id: "dt-13",
      type: "mcq",
      title: "Finishing",
      prompt: "In the Textile Industry domain, what does \"Finishing\" mean?",
      options: [
        "A temporary file naming convention only",
        "mechanical or chemical treatments applied after fabric formation to improve performance, appearance, or hand feel",
        "dimensional change in fabric or garments after washing, processing, or use",
        "dyeing technology designed to reduce or eliminate water use in coloration",
      ],
      correctIndex: 1,
      explanation: "Mechanical or chemical treatments applied after fabric formation to improve performance, appearance, or hand feel."
    },
    {
      id: "dt-14",
      type: "mcq",
      title: "Shrinkage",
      prompt: "In the Textile Industry domain, what does \"Shrinkage\" mean?",
      options: [
        "the lengthwise yarns held under tension in weaving",
        "designing textile products and systems for reuse, repair, recycling, or closed-loop material flow",
        "dimensional change in fabric or garments after washing, processing, or use",
        "A social media caption format",
      ],
      correctIndex: 2,
      explanation: "Dimensional change in fabric or garments after washing, processing, or use."
    },
    {
      id: "dt-15",
      type: "mcq",
      title: "Color fastness",
      prompt: "In the Textile Industry domain, what does \"Color fastness\" mean?",
      options: [
        "the resistance of dyed or printed textile color to washing, rubbing, light, or perspiration",
        "A customer service greeting script",
        "formation of small fiber balls on a fabric surface due to abrasion",
        "dyeing technology designed to reduce or eliminate water use in coloration",
      ],
      correctIndex: 0,
      explanation: "The resistance of dyed or printed textile color to washing, rubbing, light, or perspiration."
    },
    {
      id: "dt-16",
      type: "mcq",
      title: "Pilling",
      prompt: "In the Textile Industry domain, what does \"Pilling\" mean?",
      options: [
        "a treatment that improves cotton luster, strength, and dye affinity",
        "An office administration policy only",
        "formation of small fiber balls on a fabric surface due to abrasion",
        "mechanical or chemical treatments applied after fabric formation to improve performance, appearance, or hand feel",
      ],
      correctIndex: 2,
      explanation: "Formation of small fiber balls on a fabric surface due to abrasion."
    },
    {
      id: "dt-17",
      type: "mcq",
      title: "Garment marker",
      prompt: "In the Textile Industry domain, what does \"Garment marker\" mean?",
      options: [
        "a layout plan used to place pattern pieces efficiently on fabric before cutting",
        "A random sales slogan with no technical meaning",
        "a man-made fiber produced through chemical processes, such as polyester, nylon, acrylic, or spandex",
        "a certification indicating textiles have been tested for certain harmful substances",
      ],
      correctIndex: 0,
      explanation: "A layout plan used to place pattern pieces efficiently on fabric before cutting."
    },
    {
      id: "dt-18",
      type: "mcq",
      title: "Cut-make-trim",
      prompt: "In the Textile Industry domain, what does \"Cut-make-trim\" mean?",
      options: [
        "a layout plan used to place pattern pieces efficiently on fabric before cutting",
        "a certification indicating textiles have been tested for certain harmful substances",
        "a manufacturing model where a factory cuts fabric, sews garments, and trims finished pieces",
        "A manual workaround with no control value",
      ],
      correctIndex: 2,
      explanation: "A manufacturing model where a factory cuts fabric, sews garments, and trims finished pieces."
    },
    {
      id: "dt-19",
      type: "mcq",
      title: "Tech pack",
      prompt: "In the Textile Industry domain, what does \"Tech pack\" mean?",
      options: [
        "formation of small fiber balls on a fabric surface due to abrasion",
        "mechanical or chemical treatments applied after fabric formation to improve performance, appearance, or hand feel",
        "A visual branding element only",
        "a detailed product specification document used by factories to manufacture garments correctly",
      ],
      correctIndex: 3,
      explanation: "A detailed product specification document used by factories to manufacture garments correctly."
    },
    {
      id: "dt-20",
      type: "mcq",
      title: "AQL",
      prompt: "In the Textile Industry domain, what does \"AQL\" mean?",
      options: [
        "the resistance of dyed or printed textile color to washing, rubbing, light, or perspiration",
        "A meeting agenda template",
        "acceptable quality limit, a sampling standard used to decide whether a batch passes inspection",
        "dimensional change in fabric or garments after washing, processing, or use",
      ],
      correctIndex: 2,
      explanation: "Acceptable quality limit, a sampling standard used to decide whether a batch passes inspection."
    },
    {
      id: "dt-21",
      type: "mcq",
      title: "Lab dip",
      prompt: "In the Textile Industry domain, what does \"Lab dip\" mean?",
      options: [
        "a detailed product specification document used by factories to manufacture garments correctly",
        "A payroll-only process unrelated to this domain",
        "dimensional change in fabric or garments after washing, processing, or use",
        "a small dyed fabric sample submitted for color approval before bulk production",
      ],
      correctIndex: 3,
      explanation: "A small dyed fabric sample submitted for color approval before bulk production."
    },
    {
      id: "dt-22",
      type: "mcq",
      title: "Strike-off",
      prompt: "In the Textile Industry domain, what does \"Strike-off\" mean?",
      options: [
        "polyester made from recycled materials such as PET bottles or textile waste",
        "a printed fabric sample used to approve print pattern, scale, and color before production",
        "fabric construction by interlooping yarns, usually creating more stretch than woven fabrics",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 1,
      explanation: "A printed fabric sample used to approve print pattern, scale, and color before production."
    },
    {
      id: "dt-23",
      type: "mcq",
      title: "MOQ",
      prompt: "In the Textile Industry domain, what does \"MOQ\" mean?",
      options: [
        "mechanical or chemical treatments applied after fabric formation to improve performance, appearance, or hand feel",
        "minimum order quantity required by a supplier or manufacturer",
        "acceptable quality limit, a sampling standard used to decide whether a batch passes inspection",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Minimum order quantity required by a supplier or manufacturer."
    },
    {
      id: "dt-24",
      type: "mcq",
      title: "Lead time",
      prompt: "In the Textile Industry domain, what does \"Lead time\" mean?",
      options: [
        "formation of small fiber balls on a fabric surface due to abrasion",
        "A social media caption format",
        "the total time required from order placement to delivery or production completion",
        "the process of converting raw fibers into yarn by drawing and twisting them",
      ],
      correctIndex: 2,
      explanation: "The total time required from order placement to delivery or production completion."
    },
    {
      id: "dt-25",
      type: "mcq",
      title: "Organic cotton",
      prompt: "In the Textile Industry domain, what does \"Organic cotton\" mean?",
      options: [
        "cotton grown according to organic standards without synthetic pesticides or fertilizers",
        "the process of applying color or design to selected areas of textile material",
        "A customer service greeting script",
        "a certification indicating textiles have been tested for certain harmful substances",
      ],
      correctIndex: 0,
      explanation: "Cotton grown according to organic standards without synthetic pesticides or fertilizers."
    },
    {
      id: "dt-26",
      type: "mcq",
      title: "Recycled polyester",
      prompt: "In the Textile Industry domain, what does \"Recycled polyester\" mean?",
      options: [
        "An office administration policy only",
        "polyester made from recycled materials such as PET bottles or textile waste",
        "the crosswise yarns inserted over and under the warp in weaving",
        "a small dyed fabric sample submitted for color approval before bulk production",
      ],
      correctIndex: 1,
      explanation: "Polyester made from recycled materials such as PET bottles or textile waste."
    },
    {
      id: "dt-27",
      type: "mcq",
      title: "Oeko-Tex",
      prompt: "In the Textile Industry domain, what does \"Oeko-Tex\" mean?",
      options: [
        "a durable cotton twill fabric commonly made with indigo-dyed warp yarns",
        "a certification indicating textiles have been tested for certain harmful substances",
        "A random sales slogan with no technical meaning",
        "dyeing technology designed to reduce or eliminate water use in coloration",
      ],
      correctIndex: 1,
      explanation: "A certification indicating textiles have been tested for certain harmful substances."
    },
    {
      id: "dt-28",
      type: "mcq",
      title: "ZDHC",
      prompt: "In the Textile Industry domain, what does \"ZDHC\" mean?",
      options: [
        "designing textile products and systems for reuse, repair, recycling, or closed-loop material flow",
        "fabric construction by interlooping yarns, usually creating more stretch than woven fabrics",
        "a program focused on eliminating hazardous chemicals from textile and apparel supply chains",
        "A manual workaround with no control value",
      ],
      correctIndex: 2,
      explanation: "A program focused on eliminating hazardous chemicals from textile and apparel supply chains."
    },
    {
      id: "dt-29",
      type: "mcq",
      title: "Waterless dyeing",
      prompt: "In the Textile Industry domain, what does \"Waterless dyeing\" mean?",
      options: [
        "dyeing technology designed to reduce or eliminate water use in coloration",
        "A visual branding element only",
        "a certification indicating textiles have been tested for certain harmful substances",
        "a treatment that improves cotton luster, strength, and dye affinity",
      ],
      correctIndex: 0,
      explanation: "Dyeing technology designed to reduce or eliminate water use in coloration."
    },
    {
      id: "dt-30",
      type: "mcq",
      title: "Textile circularity",
      prompt: "In the Textile Industry domain, what does \"Textile circularity\" mean?",
      options: [
        "a durable cotton twill fabric commonly made with indigo-dyed warp yarns",
        "A meeting agenda template",
        "the lengthwise yarns held under tension in weaving",
        "designing textile products and systems for reuse, repair, recycling, or closed-loop material flow",
      ],
      correctIndex: 3,
      explanation: "Designing textile products and systems for reuse, repair, recycling, or closed-loop material flow."
    },
    {
      id: "dt-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A buyer complains that T-shirts shrink after the first wash. What should the merchandiser investigate first?",
      options: [
        "Only the color of the care label",
        "The brand logo position only",
        "Fabric shrinkage test results, washing instructions, finishing process, and approved tolerance",
        "The social media campaign",
      ],
      correctIndex: 2,
      explanation: "Shrinkage issues require checking fabric testing, finishing, care instructions, and tolerance agreements."
    },
    {
      id: "dt-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A factory wants to reduce rejected garments caused by shade variation. What is the strongest control?",
      options: [
        "Increase packaging size only",
        "Approve lab dips, control dye lots, inspect shade bands, and segregate rolls before cutting",
        "Ignore roll-wise shade differences",
        "Change only the hanger style",
      ],
      correctIndex: 1,
      explanation: "Shade variation is controlled through color approval, lot control, inspection, and roll segregation."
    },
    {
      id: "dt-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A style has high fabric waste during cutting. What should be reviewed?",
      options: [
        "Only the sewing thread color",
        "Marker efficiency, pattern placement, fabric width, defect zones, and cutting plan",
        "Only the shipping carton",
        "Only the brand tag",
      ],
      correctIndex: 1,
      explanation: "Fabric utilization depends heavily on marker planning and fabric characteristics."
    },
    {
      id: "dt-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A supplier offers a very low price but cannot meet testing requirements. What is the best sourcing decision?",
      options: [
        "Evaluate total cost, quality risk, compliance, delivery reliability, and customer impact before approving",
        "Use the supplier only for premium products",
        "Skip testing for speed",
        "Select the lowest price immediately",
      ],
      correctIndex: 0,
      explanation: "Textile sourcing should balance price with quality, compliance, reliability, and risk."
    },
    {
      id: "dt-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A garment fails rubbing fastness. What is the most relevant corrective area?",
      options: [
        "Carton strength only",
        "Hanger material only",
        "Dyeing/printing chemistry, fixation, washing process, and finishing controls",
        "Store lighting only",
      ],
      correctIndex: 2,
      explanation: "Rubbing fastness relates to coloration and finishing process control."
    },
    {
      id: "dt-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A brand asks for a sustainable fabric option for sportswear. Which evaluation is strongest?",
      options: [
        "Only the cheapest option",
        "Only the marketing name",
        "Performance, recycled content, durability, certifications, cost, and end-of-life impact",
        "Only the green color of the fabric",
      ],
      correctIndex: 2,
      explanation: "Sustainability decisions need performance, certification, cost, and lifecycle evaluation."
    },
    {
      id: "dt-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A production batch has uneven seams and skipped stitches. What should quality check first?",
      options: [
        "Machine settings, needle size, thread tension, fabric behavior, and operator handling",
        "Only the invoice number",
        "Only the warehouse location",
        "Only the retail price",
      ],
      correctIndex: 0,
      explanation: "Sewing defects often come from machine setup, materials, and operator process."
    },
    {
      id: "dt-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A retailer sees high return rates for one apparel SKU. What is the best diagnostic approach?",
      options: [
        "Only change the product photo",
        "Assume customers are wrong",
        "Analyze fit, size grading, fabric performance, customer reviews, defect reports, and return reasons",
        "Stop selling all apparel",
      ],
      correctIndex: 2,
      explanation: "Returns should be diagnosed through fit, quality, product expectation, and customer feedback data."
    },
    {
      id: "dt-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A fabric is visually attractive but fails tensile strength testing. What is the best next step?",
      options: [
        "Only change the product description",
        "Reject or re-engineer the fabric until performance requirements are met",
        "Approve because appearance matters most",
        "Use it without disclosure",
      ],
      correctIndex: 1,
      explanation: "Performance requirements must be met before bulk production approval."
    },
    {
      id: "dt-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A textile company wants better traceability. What should it implement?",
      options: [
        "A larger showroom",
        "Supplier mapping, lot tracking, certification records, chain-of-custody documentation, and audit controls",
        "Only a new logo",
        "Untracked manual notes",
      ],
      correctIndex: 1,
      explanation: "Traceability requires documented material flow and supplier evidence across the supply chain."
    }
  ],
};
