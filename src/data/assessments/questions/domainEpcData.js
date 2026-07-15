import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainEpcData = {
  id: ASSESSMENT_TYPES.domain_epc,
  title: "EPC Industry Domain Professional Certification",
  shortTitle: "EPC Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional EPC assessment covering engineering, procurement, construction, FEED, contracts, project controls, schedule, cost, HSE, quality, risk, commissioning, claims, and large-project delivery.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "ep-01",
      type: "mcq",
      title: "EPC",
      prompt: "In the EPC Industry domain, what does \"EPC\" mean?",
      options: [
        "assessment of whether design can be built efficiently and safely",
        "A payroll-only process unrelated to this domain",
        "engineering, procurement, and construction delivery model for large projects",
        "list of incomplete or defective items to resolve before final acceptance",
      ],
      correctIndex: 2,
      explanation: "Engineering, procurement, and construction delivery model for large projects."
    },
    {
      id: "ep-02",
      type: "mcq",
      title: "FEED",
      prompt: "In the EPC Industry domain, what does \"FEED\" mean?",
      options: [
        "documentation package provided at project completion for operations and compliance",
        "pre-agreed damages for delay or failure to meet contract obligations",
        "A design color choice with no operational meaning",
        "front-end engineering design that defines technical scope before EPC execution",
      ],
      correctIndex: 3,
      explanation: "Front-end engineering design that defines technical scope before EPC execution."
    },
    {
      id: "ep-03",
      type: "mcq",
      title: "LSTK contract",
      prompt: "In the EPC Industry domain, what does \"LSTK contract\" mean?",
      options: [
        "lump sum turnkey contract where contractor delivers a ready facility for fixed price",
        "sequence of tasks that determines the minimum project duration",
        "company hired to perform part of the project work",
        "A temporary file naming convention only",
      ],
      correctIndex: 0,
      explanation: "Lump sum turnkey contract where contractor delivers a ready facility for fixed price."
    },
    {
      id: "ep-04",
      type: "mcq",
      title: "EPCM",
      prompt: "In the EPC Industry domain, what does \"EPCM\" mean?",
      options: [
        "A social media caption format",
        "engineering, procurement, and construction management model where contractor manages but may not build directly",
        "testing and verifying systems before handover to operations",
        "setting up resources, facilities, equipment, and teams at construction site",
      ],
      correctIndex: 1,
      explanation: "Engineering, procurement, and construction management model where contractor manages but may not build directly."
    },
    {
      id: "ep-05",
      type: "mcq",
      title: "Long-lead item",
      prompt: "In the EPC Industry domain, what does \"Long-lead item\" mean?",
      options: [
        "engineering, procurement, and construction delivery model for large projects",
        "A customer service greeting script",
        "portion of payment held until project completion or defect period requirements",
        "equipment or material requiring early ordering due to long manufacturing or delivery time",
      ],
      correctIndex: 3,
      explanation: "Equipment or material requiring early ordering due to long manufacturing or delivery time."
    },
    {
      id: "ep-06",
      type: "mcq",
      title: "Commissioning",
      prompt: "In the EPC Industry domain, what does \"Commissioning\" mean?",
      options: [
        "engineering, procurement, and construction management model where contractor manages but may not build directly",
        "An office administration policy only",
        "testing and verifying systems before handover to operations",
        "document describing how construction work will be performed safely and correctly",
      ],
      correctIndex: 2,
      explanation: "Testing and verifying systems before handover to operations."
    },
    {
      id: "ep-07",
      type: "mcq",
      title: "Mechanical completion",
      prompt: "In the EPC Industry domain, what does \"Mechanical completion\" mean?",
      options: [
        "stage when installation is complete and systems are ready for commissioning checks",
        "hazard and operability study used to identify process safety risks",
        "A random sales slogan with no technical meaning",
        "lump sum turnkey contract where contractor delivers a ready facility for fixed price",
      ],
      correctIndex: 0,
      explanation: "Stage when installation is complete and systems are ready for commissioning checks."
    },
    {
      id: "ep-08",
      type: "mcq",
      title: "Punch list",
      prompt: "In the EPC Industry domain, what does \"Punch list\" mean?",
      options: [
        "coordination between disciplines, contractors, packages, and systems",
        "list of incomplete or defective items to resolve before final acceptance",
        "request for information used to clarify technical or contract issues",
        "A manual workaround with no control value",
      ],
      correctIndex: 1,
      explanation: "List of incomplete or defective items to resolve before final acceptance."
    },
    {
      id: "ep-09",
      type: "mcq",
      title: "Gantt chart",
      prompt: "In the EPC Industry domain, what does \"Gantt chart\" mean?",
      options: [
        "visual schedule showing tasks, timing, and dependencies",
        "company hired to perform part of the project work",
        "formal change to project scope, cost, schedule, or contract terms",
        "A visual branding element only",
      ],
      correctIndex: 0,
      explanation: "Visual schedule showing tasks, timing, and dependencies."
    },
    {
      id: "ep-10",
      type: "mcq",
      title: "Critical path",
      prompt: "In the EPC Industry domain, what does \"Critical path\" mean?",
      options: [
        "A meeting agenda template",
        "setting up resources, facilities, equipment, and teams at construction site",
        "quantification of materials required from engineering drawings",
        "sequence of tasks that determines the minimum project duration",
      ],
      correctIndex: 3,
      explanation: "Sequence of tasks that determines the minimum project duration."
    },
    {
      id: "ep-11",
      type: "mcq",
      title: "EVM",
      prompt: "In the EPC Industry domain, what does \"EVM\" mean?",
      options: [
        "request for information used to clarify technical or contract issues",
        "engineering, procurement, and construction delivery model for large projects",
        "earned value management, integrating scope, schedule, and cost performance",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 2,
      explanation: "Earned value management, integrating scope, schedule, and cost performance."
    },
    {
      id: "ep-12",
      type: "mcq",
      title: "Change order",
      prompt: "In the EPC Industry domain, what does \"Change order\" mean?",
      options: [
        "work breakdown structure dividing project scope into manageable components",
        "A design color choice with no operational meaning",
        "list of incomplete or defective items to resolve before final acceptance",
        "formal change to project scope, cost, schedule, or contract terms",
      ],
      correctIndex: 3,
      explanation: "Formal change to project scope, cost, schedule, or contract terms."
    },
    {
      id: "ep-13",
      type: "mcq",
      title: "Force majeure",
      prompt: "In the EPC Industry domain, what does \"Force majeure\" mean?",
      options: [
        "A temporary file naming convention only",
        "front-end engineering design that defines technical scope before EPC execution",
        "contract clause covering extraordinary events beyond party control",
        "company hired to perform part of the project work",
      ],
      correctIndex: 2,
      explanation: "Contract clause covering extraordinary events beyond party control."
    },
    {
      id: "ep-14",
      type: "mcq",
      title: "Expediting",
      prompt: "In the EPC Industry domain, what does \"Expediting\" mean?",
      options: [
        "monitoring suppliers to ensure timely manufacturing and delivery",
        "stage when installation is complete and systems are ready for commissioning checks",
        "engineering, procurement, and construction delivery model for large projects",
        "A social media caption format",
      ],
      correctIndex: 0,
      explanation: "Monitoring suppliers to ensure timely manufacturing and delivery."
    },
    {
      id: "ep-15",
      type: "mcq",
      title: "Inspection test plan",
      prompt: "In the EPC Industry domain, what does \"Inspection test plan\" mean?",
      options: [
        "A customer service greeting script",
        "work breakdown structure dividing project scope into manageable components",
        "documentation package provided at project completion for operations and compliance",
        "document defining quality inspections, tests, hold points, and acceptance criteria",
      ],
      correctIndex: 3,
      explanation: "Document defining quality inspections, tests, hold points, and acceptance criteria."
    },
    {
      id: "ep-16",
      type: "mcq",
      title: "HSE",
      prompt: "In the EPC Industry domain, what does \"HSE\" mean?",
      options: [
        "health, safety, and environment",
        "pre-agreed damages for delay or failure to meet contract obligations",
        "sequence of tasks that determines the minimum project duration",
        "An office administration policy only",
      ],
      correctIndex: 0,
      explanation: "Health, safety, and environment."
    },
    {
      id: "ep-17",
      type: "mcq",
      title: "Permit to work",
      prompt: "In the EPC Industry domain, what does \"Permit to work\" mean?",
      options: [
        "testing and verifying systems before handover to operations",
        "visual schedule showing tasks, timing, and dependencies",
        "formal authorization for high-risk work under defined controls",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Formal authorization for high-risk work under defined controls."
    },
    {
      id: "ep-18",
      type: "mcq",
      title: "Method statement",
      prompt: "In the EPC Industry domain, what does \"Method statement\" mean?",
      options: [
        "A manual workaround with no control value",
        "document describing how construction work will be performed safely and correctly",
        "company hired to perform part of the project work",
        "method for quantifying completed work against planned scope",
      ],
      correctIndex: 1,
      explanation: "Document describing how construction work will be performed safely and correctly."
    },
    {
      id: "ep-19",
      type: "mcq",
      title: "HAZOP",
      prompt: "In the EPC Industry domain, what does \"HAZOP\" mean?",
      options: [
        "hazard and operability study used to identify process safety risks",
        "A visual branding element only",
        "sequence of tasks that determines the minimum project duration",
        "health, safety, and environment",
      ],
      correctIndex: 0,
      explanation: "Hazard and operability study used to identify process safety risks."
    },
    {
      id: "ep-20",
      type: "mcq",
      title: "Constructability review",
      prompt: "In the EPC Industry domain, what does \"Constructability review\" mean?",
      options: [
        "quantification of materials required from engineering drawings",
        "assessment of whether design can be built efficiently and safely",
        "equipment or material requiring early ordering due to long manufacturing or delivery time",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "Assessment of whether design can be built efficiently and safely."
    },
    {
      id: "ep-21",
      type: "mcq",
      title: "RFI",
      prompt: "In the EPC Industry domain, what does \"RFI\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "monitoring suppliers to ensure timely manufacturing and delivery",
        "request for information used to clarify technical or contract issues",
        "equipment or material requiring early ordering due to long manufacturing or delivery time",
      ],
      correctIndex: 2,
      explanation: "Request for information used to clarify technical or contract issues."
    },
    {
      id: "ep-22",
      type: "mcq",
      title: "Subcontractor",
      prompt: "In the EPC Industry domain, what does \"Subcontractor\" mean?",
      options: [
        "formal change to project scope, cost, schedule, or contract terms",
        "company hired to perform part of the project work",
        "A design color choice with no operational meaning",
        "sequence of tasks that determines the minimum project duration",
      ],
      correctIndex: 1,
      explanation: "Company hired to perform part of the project work."
    },
    {
      id: "ep-23",
      type: "mcq",
      title: "WBS",
      prompt: "In the EPC Industry domain, what does \"WBS\" mean?",
      options: [
        "visual schedule showing tasks, timing, and dependencies",
        "request for information used to clarify technical or contract issues",
        "work breakdown structure dividing project scope into manageable components",
        "A temporary file naming convention only",
      ],
      correctIndex: 2,
      explanation: "Work breakdown structure dividing project scope into manageable components."
    },
    {
      id: "ep-24",
      type: "mcq",
      title: "Progress measurement",
      prompt: "In the EPC Industry domain, what does \"Progress measurement\" mean?",
      options: [
        "A social media caption format",
        "earned value management, integrating scope, schedule, and cost performance",
        "lump sum turnkey contract where contractor delivers a ready facility for fixed price",
        "method for quantifying completed work against planned scope",
      ],
      correctIndex: 3,
      explanation: "Method for quantifying completed work against planned scope."
    },
    {
      id: "ep-25",
      type: "mcq",
      title: "Liquidated damages",
      prompt: "In the EPC Industry domain, what does \"Liquidated damages\" mean?",
      options: [
        "A customer service greeting script",
        "pre-agreed damages for delay or failure to meet contract obligations",
        "monitoring suppliers to ensure timely manufacturing and delivery",
        "company hired to perform part of the project work",
      ],
      correctIndex: 1,
      explanation: "Pre-agreed damages for delay or failure to meet contract obligations."
    },
    {
      id: "ep-26",
      type: "mcq",
      title: "Retention",
      prompt: "In the EPC Industry domain, what does \"Retention\" mean?",
      options: [
        "documentation package provided at project completion for operations and compliance",
        "portion of payment held until project completion or defect period requirements",
        "sequence of tasks that determines the minimum project duration",
        "An office administration policy only",
      ],
      correctIndex: 1,
      explanation: "Portion of payment held until project completion or defect period requirements."
    },
    {
      id: "ep-27",
      type: "mcq",
      title: "Material takeoff",
      prompt: "In the EPC Industry domain, what does \"Material takeoff\" mean?",
      options: [
        "coordination between disciplines, contractors, packages, and systems",
        "sequence of tasks that determines the minimum project duration",
        "quantification of materials required from engineering drawings",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Quantification of materials required from engineering drawings."
    },
    {
      id: "ep-28",
      type: "mcq",
      title: "Site mobilization",
      prompt: "In the EPC Industry domain, what does \"Site mobilization\" mean?",
      options: [
        "A manual workaround with no control value",
        "assessment of whether design can be built efficiently and safely",
        "setting up resources, facilities, equipment, and teams at construction site",
        "hazard and operability study used to identify process safety risks",
      ],
      correctIndex: 2,
      explanation: "Setting up resources, facilities, equipment, and teams at construction site."
    },
    {
      id: "ep-29",
      type: "mcq",
      title: "Interface management",
      prompt: "In the EPC Industry domain, what does \"Interface management\" mean?",
      options: [
        "work breakdown structure dividing project scope into manageable components",
        "A visual branding element only",
        "visual schedule showing tasks, timing, and dependencies",
        "coordination between disciplines, contractors, packages, and systems",
      ],
      correctIndex: 3,
      explanation: "Coordination between disciplines, contractors, packages, and systems."
    },
    {
      id: "ep-30",
      type: "mcq",
      title: "Handover dossier",
      prompt: "In the EPC Industry domain, what does \"Handover dossier\" mean?",
      options: [
        "sequence of tasks that determines the minimum project duration",
        "A meeting agenda template",
        "documentation package provided at project completion for operations and compliance",
        "quantification of materials required from engineering drawings",
      ],
      correctIndex: 2,
      explanation: "Documentation package provided at project completion for operations and compliance."
    },
    {
      id: "ep-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A long-lead turbine order is delayed. What should project controls evaluate?",
      options: [
        "Only office furniture",
        "Critical path impact, float, expediting options, supplier recovery plan, and client communication",
        "Only worker uniforms",
        "Only logo color",
      ],
      correctIndex: 1,
      explanation: "Long-lead delays can affect schedule and require recovery planning."
    },
    {
      id: "ep-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Engineering issues many late design changes during construction. What risk increases?",
      options: [
        "Lower complexity",
        "No impact",
        "Rework, claims, schedule delay, cost overrun, and field confusion",
        "Automatic savings",
      ],
      correctIndex: 2,
      explanation: "Late design changes can significantly disrupt construction."
    },
    {
      id: "ep-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A site has repeated safety violations. What should leadership do?",
      options: [
        "Remove safety reporting",
        "Speed up work",
        "Stop unsafe work, investigate causes, reinforce controls, retrain, and hold accountable parties responsible",
        "Ignore until completion",
      ],
      correctIndex: 2,
      explanation: "HSE issues require immediate action and systemic correction."
    },
    {
      id: "ep-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A contractor claims extra cost due to scope change. What should be reviewed?",
      options: [
        "Contract terms, change order records, baseline scope, evidence, schedule impact, and approvals",
        "Only weather photos",
        "Only the contractor logo",
        "Only invoice font",
      ],
      correctIndex: 0,
      explanation: "Claims require contract and evidence-based evaluation."
    },
    {
      id: "ep-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Commissioning reveals a system does not meet design requirements. What should happen?",
      options: [
        "Delete commissioning records",
        "Document defect, identify responsibility, fix/test, update punch list, and verify acceptance criteria",
        "Handover anyway",
        "Ignore tests",
      ],
      correctIndex: 1,
      explanation: "Commissioning validates readiness before operations."
    },
    {
      id: "ep-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Procurement selects a cheaper equipment vendor with weak quality history. What should be considered?",
      options: [
        "Lifecycle cost, inspection plan, performance risk, warranty, schedule impact, and compliance",
        "Brochure design",
        "Price only",
        "Supplier office size",
      ],
      correctIndex: 0,
      explanation: "EPC equipment decisions need cost, quality, and schedule risk assessment."
    },
    {
      id: "ep-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A project is behind schedule but progress reports show green. What should be checked?",
      options: [
        "Progress measurement method, critical path, earned value, forecast accuracy, and reporting integrity",
        "Only meeting count",
        "Only slide colors",
        "Only team mood",
      ],
      correctIndex: 0,
      explanation: "Schedule health needs objective progress and critical path analysis."
    },
    {
      id: "ep-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Multiple contractors blame each other for interface gaps. What should be strengthened?",
      options: [
        "Interface matrix, owners, RFIs, coordination meetings, design freeze, and responsibility boundaries",
        "More blame",
        "No documentation",
        "Separate all teams completely",
      ],
      correctIndex: 0,
      explanation: "Interface management prevents gaps between packages and disciplines."
    },
    {
      id: "ep-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A client wants a fixed-price EPC contract for unclear scope. What is the risk?",
      options: [
        "Lower need for FEED",
        "High risk of claims, contingency pricing, scope disputes, and schedule/cost uncertainty",
        "No risk",
        "Automatic faster delivery",
      ],
      correctIndex: 1,
      explanation: "LSTK works best when scope is well-defined."
    },
    {
      id: "ep-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A large project closes without complete documentation. What is the risk?",
      options: [
        "Handover, operations, maintenance, compliance, warranty, and audit problems",
        "Lower compliance need",
        "Better operations",
        "No future issue",
      ],
      correctIndex: 0,
      explanation: "Handover documentation is essential for operations and compliance."
    }
  ],
};
