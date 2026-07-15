import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainTelecomData = {
  id: ASSESSMENT_TYPES.domain_telecom,
  title: "Telecom Industry Domain Professional Certification",
  shortTitle: "Telecom Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional telecom industry assessment covering mobile networks, 5G, fiber, spectrum, latency, roaming, OSS/BSS, network operations, satellite, regulation, security, and customer experience.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "dt-01",
      type: "mcq",
      title: "5G",
      prompt: "In the Telecom Industry domain, what does \"5G\" mean?",
      options: [
        "data transmission using light pulses through glass or plastic fiber cables",
        "the fifth generation of mobile network technology designed for higher speed, lower latency, and massive connectivity",
        "A payroll-only process unrelated to this domain",
        "use of a mobile service outside the subscriber's home network through partner networks",
      ],
      correctIndex: 1,
      explanation: "The fifth generation of mobile network technology designed for higher speed, lower latency, and massive connectivity."
    },
    {
      id: "dt-02",
      type: "mcq",
      title: "LTE",
      prompt: "In the Telecom Industry domain, what does \"LTE\" mean?",
      options: [
        "subscriber identity module used to identify and authenticate a mobile subscriber",
        "a 4G mobile broadband standard widely used for high-speed wireless data",
        "quality of service mechanisms used to prioritize or manage network traffic",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 1,
      explanation: "A 4G mobile broadband standard widely used for high-speed wireless data."
    },
    {
      id: "dt-03",
      type: "mcq",
      title: "Fiber optics",
      prompt: "In the Telecom Industry domain, what does \"Fiber optics\" mean?",
      options: [
        "internet connectivity delivered through satellites, often useful in remote areas",
        "business support systems used for billing, customer management, orders, and revenue processes",
        "data transmission using light pulses through glass or plastic fiber cables",
        "A temporary file naming convention only",
      ],
      correctIndex: 2,
      explanation: "Data transmission using light pulses through glass or plastic fiber cables."
    },
    {
      id: "dt-04",
      type: "mcq",
      title: "Bandwidth",
      prompt: "In the Telecom Industry domain, what does \"Bandwidth\" mean?",
      options: [
        "operations support systems used to manage network inventory, faults, performance, and provisioning",
        "A social media caption format",
        "the maximum data transfer capacity of a network path",
        "radio access network connecting user devices to the mobile core through radio equipment",
      ],
      correctIndex: 2,
      explanation: "The maximum data transfer capacity of a network path."
    },
    {
      id: "dt-05",
      type: "mcq",
      title: "Latency",
      prompt: "In the Telecom Industry domain, what does \"Latency\" mean?",
      options: [
        "quality of service mechanisms used to prioritize or manage network traffic",
        "network transport that connects cell sites or access networks to the core network",
        "A customer service greeting script",
        "the delay between sending a request and receiving a response",
      ],
      correctIndex: 3,
      explanation: "The delay between sending a request and receiving a response."
    },
    {
      id: "dt-06",
      type: "mcq",
      title: "Jitter",
      prompt: "In the Telecom Industry domain, what does \"Jitter\" mean?",
      options: [
        "use of a mobile service outside the subscriber's home network through partner networks",
        "fiber to the home, where fiber connectivity reaches residential premises",
        "variation in packet delay that can affect voice, video, and real-time applications",
        "An office administration policy only",
      ],
      correctIndex: 2,
      explanation: "Variation in packet delay that can affect voice, video, and real-time applications."
    },
    {
      id: "dt-07",
      type: "mcq",
      title: "Packet loss",
      prompt: "In the Telecom Industry domain, what does \"Packet loss\" mean?",
      options: [
        "average revenue per user, a key telecom business metric",
        "the percentage of network packets that fail to reach their destination",
        "the delay between sending a request and receiving a response",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "The percentage of network packets that fail to reach their destination."
    },
    {
      id: "dt-08",
      type: "mcq",
      title: "SIM",
      prompt: "In the Telecom Industry domain, what does \"SIM\" mean?",
      options: [
        "A manual workaround with no control value",
        "use of a mobile service outside the subscriber's home network through partner networks",
        "subscriber identity module used to identify and authenticate a mobile subscriber",
        "internet connectivity delivered through satellites, often useful in remote areas",
      ],
      correctIndex: 2,
      explanation: "Subscriber identity module used to identify and authenticate a mobile subscriber."
    },
    {
      id: "dt-09",
      type: "mcq",
      title: "eSIM",
      prompt: "In the Telecom Industry domain, what does \"eSIM\" mean?",
      options: [
        "A visual branding element only",
        "average revenue per user, a key telecom business metric",
        "service level agreement defining service performance commitments such as uptime or response time",
        "an embedded digital SIM that can be provisioned remotely without a physical card",
      ],
      correctIndex: 3,
      explanation: "An embedded digital SIM that can be provisioned remotely without a physical card."
    },
    {
      id: "dt-10",
      type: "mcq",
      title: "Cell site",
      prompt: "In the Telecom Industry domain, what does \"Cell site\" mean?",
      options: [
        "the delay between sending a request and receiving a response",
        "a location with antennas and radio equipment that serves a geographic mobile coverage area",
        "quality of service mechanisms used to prioritize or manage network traffic",
        "A meeting agenda template",
      ],
      correctIndex: 1,
      explanation: "A location with antennas and radio equipment that serves a geographic mobile coverage area."
    },
    {
      id: "dt-11",
      type: "mcq",
      title: "Spectrum",
      prompt: "In the Telecom Industry domain, what does \"Spectrum\" mean?",
      options: [
        "central telecom network functions that handle routing, authentication, mobility, and service control",
        "the rate at which customers discontinue telecom service",
        "radio frequency ranges licensed or allocated for wireless communication",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 2,
      explanation: "Radio frequency ranges licensed or allocated for wireless communication."
    },
    {
      id: "dt-12",
      type: "mcq",
      title: "Roaming",
      prompt: "In the Telecom Industry domain, what does \"Roaming\" mean?",
      options: [
        "use of a mobile service outside the subscriber's home network through partner networks",
        "quality of service mechanisms used to prioritize or manage network traffic",
        "a 4G mobile broadband standard widely used for high-speed wireless data",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 0,
      explanation: "Use of a mobile service outside the subscriber's home network through partner networks."
    },
    {
      id: "dt-13",
      type: "mcq",
      title: "VoIP",
      prompt: "In the Telecom Industry domain, what does \"VoIP\" mean?",
      options: [
        "A temporary file naming convention only",
        "voice over internet protocol, which carries voice calls over IP networks",
        "quality of service mechanisms used to prioritize or manage network traffic",
        "service level agreement defining service performance commitments such as uptime or response time",
      ],
      correctIndex: 1,
      explanation: "Voice over internet protocol, which carries voice calls over IP networks."
    },
    {
      id: "dt-14",
      type: "mcq",
      title: "OTT",
      prompt: "In the Telecom Industry domain, what does \"OTT\" mean?",
      options: [
        "average revenue per user, a key telecom business metric",
        "the fifth generation of mobile network technology designed for higher speed, lower latency, and massive connectivity",
        "internet-based services delivered over telecom networks without traditional carrier control of the application",
        "A social media caption format",
      ],
      correctIndex: 2,
      explanation: "Internet-based services delivered over telecom networks without traditional carrier control of the application."
    },
    {
      id: "dt-15",
      type: "mcq",
      title: "Backhaul",
      prompt: "In the Telecom Industry domain, what does \"Backhaul\" mean?",
      options: [
        "network transport that connects cell sites or access networks to the core network",
        "A customer service greeting script",
        "quality of service mechanisms used to prioritize or manage network traffic",
        "gigabit passive optical network technology used in fiber access networks",
      ],
      correctIndex: 0,
      explanation: "Network transport that connects cell sites or access networks to the core network."
    },
    {
      id: "dt-16",
      type: "mcq",
      title: "Core network",
      prompt: "In the Telecom Industry domain, what does \"Core network\" mean?",
      options: [
        "the percentage of network packets that fail to reach their destination",
        "An office administration policy only",
        "central telecom network functions that handle routing, authentication, mobility, and service control",
        "creating virtual network slices with different performance characteristics on shared infrastructure",
      ],
      correctIndex: 2,
      explanation: "Central telecom network functions that handle routing, authentication, mobility, and service control."
    },
    {
      id: "dt-17",
      type: "mcq",
      title: "RAN",
      prompt: "In the Telecom Industry domain, what does \"RAN\" mean?",
      options: [
        "radio access network connecting user devices to the mobile core through radio equipment",
        "A random sales slogan with no technical meaning",
        "the rate at which customers discontinue telecom service",
        "data transmission using light pulses through glass or plastic fiber cables",
      ],
      correctIndex: 0,
      explanation: "Radio access network connecting user devices to the mobile core through radio equipment."
    },
    {
      id: "dt-18",
      type: "mcq",
      title: "Small cell",
      prompt: "In the Telecom Industry domain, what does \"Small cell\" mean?",
      options: [
        "radio frequency ranges licensed or allocated for wireless communication",
        "network transport that connects cell sites or access networks to the core network",
        "a low-power cellular radio node used to improve capacity and coverage in dense areas",
        "A manual workaround with no control value",
      ],
      correctIndex: 2,
      explanation: "A low-power cellular radio node used to improve capacity and coverage in dense areas."
    },
    {
      id: "dt-19",
      type: "mcq",
      title: "MIMO",
      prompt: "In the Telecom Industry domain, what does \"MIMO\" mean?",
      options: [
        "radio frequency ranges licensed or allocated for wireless communication",
        "subscriber identity module used to identify and authenticate a mobile subscriber",
        "A visual branding element only",
        "multiple-input multiple-output antenna technology used to improve wireless capacity and reliability",
      ],
      correctIndex: 3,
      explanation: "Multiple-input multiple-output antenna technology used to improve wireless capacity and reliability."
    },
    {
      id: "dt-20",
      type: "mcq",
      title: "Network slicing",
      prompt: "In the Telecom Industry domain, what does \"Network slicing\" mean?",
      options: [
        "the fifth generation of mobile network technology designed for higher speed, lower latency, and massive connectivity",
        "A meeting agenda template",
        "creating virtual network slices with different performance characteristics on shared infrastructure",
        "use of a mobile service outside the subscriber's home network through partner networks",
      ],
      correctIndex: 2,
      explanation: "Creating virtual network slices with different performance characteristics on shared infrastructure."
    },
    {
      id: "dt-21",
      type: "mcq",
      title: "OSS",
      prompt: "In the Telecom Industry domain, what does \"OSS\" mean?",
      options: [
        "internet-based services delivered over telecom networks without traditional carrier control of the application",
        "A payroll-only process unrelated to this domain",
        "voice over internet protocol, which carries voice calls over IP networks",
        "operations support systems used to manage network inventory, faults, performance, and provisioning",
      ],
      correctIndex: 3,
      explanation: "Operations support systems used to manage network inventory, faults, performance, and provisioning."
    },
    {
      id: "dt-22",
      type: "mcq",
      title: "BSS",
      prompt: "In the Telecom Industry domain, what does \"BSS\" mean?",
      options: [
        "radio access network connecting user devices to the mobile core through radio equipment",
        "business support systems used for billing, customer management, orders, and revenue processes",
        "a low-power cellular radio node used to improve capacity and coverage in dense areas",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 1,
      explanation: "Business support systems used for billing, customer management, orders, and revenue processes."
    },
    {
      id: "dt-23",
      type: "mcq",
      title: "SLA",
      prompt: "In the Telecom Industry domain, what does \"SLA\" mean?",
      options: [
        "the maximum data transfer capacity of a network path",
        "service level agreement defining service performance commitments such as uptime or response time",
        "gigabit passive optical network technology used in fiber access networks",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Service level agreement defining service performance commitments such as uptime or response time."
    },
    {
      id: "dt-24",
      type: "mcq",
      title: "NOC",
      prompt: "In the Telecom Industry domain, what does \"NOC\" mean?",
      options: [
        "central telecom network functions that handle routing, authentication, mobility, and service control",
        "A social media caption format",
        "network operations center responsible for monitoring and responding to network incidents",
        "network transport that connects cell sites or access networks to the core network",
      ],
      correctIndex: 2,
      explanation: "Network operations center responsible for monitoring and responding to network incidents."
    },
    {
      id: "dt-25",
      type: "mcq",
      title: "FTTH",
      prompt: "In the Telecom Industry domain, what does \"FTTH\" mean?",
      options: [
        "fiber to the home, where fiber connectivity reaches residential premises",
        "use of a mobile service outside the subscriber's home network through partner networks",
        "A customer service greeting script",
        "data transmission using light pulses through glass or plastic fiber cables",
      ],
      correctIndex: 0,
      explanation: "Fiber to the home, where fiber connectivity reaches residential premises."
    },
    {
      id: "dt-26",
      type: "mcq",
      title: "GPON",
      prompt: "In the Telecom Industry domain, what does \"GPON\" mean?",
      options: [
        "An office administration policy only",
        "gigabit passive optical network technology used in fiber access networks",
        "data transmission using light pulses through glass or plastic fiber cables",
        "a 4G mobile broadband standard widely used for high-speed wireless data",
      ],
      correctIndex: 1,
      explanation: "Gigabit passive optical network technology used in fiber access networks."
    },
    {
      id: "dt-27",
      type: "mcq",
      title: "Satellite internet",
      prompt: "In the Telecom Industry domain, what does \"Satellite internet\" mean?",
      options: [
        "an embedded digital SIM that can be provisioned remotely without a physical card",
        "internet connectivity delivered through satellites, often useful in remote areas",
        "A random sales slogan with no technical meaning",
        "the delay between sending a request and receiving a response",
      ],
      correctIndex: 1,
      explanation: "Internet connectivity delivered through satellites, often useful in remote areas."
    },
    {
      id: "dt-28",
      type: "mcq",
      title: "QoS",
      prompt: "In the Telecom Industry domain, what does \"QoS\" mean?",
      options: [
        "business support systems used for billing, customer management, orders, and revenue processes",
        "variation in packet delay that can affect voice, video, and real-time applications",
        "quality of service mechanisms used to prioritize or manage network traffic",
        "A manual workaround with no control value",
      ],
      correctIndex: 2,
      explanation: "Quality of service mechanisms used to prioritize or manage network traffic."
    },
    {
      id: "dt-29",
      type: "mcq",
      title: "Churn",
      prompt: "In the Telecom Industry domain, what does \"Churn\" mean?",
      options: [
        "the rate at which customers discontinue telecom service",
        "A visual branding element only",
        "fiber to the home, where fiber connectivity reaches residential premises",
        "a low-power cellular radio node used to improve capacity and coverage in dense areas",
      ],
      correctIndex: 0,
      explanation: "The rate at which customers discontinue telecom service."
    },
    {
      id: "dt-30",
      type: "mcq",
      title: "ARPU",
      prompt: "In the Telecom Industry domain, what does \"ARPU\" mean?",
      options: [
        "a low-power cellular radio node used to improve capacity and coverage in dense areas",
        "A meeting agenda template",
        "the delay between sending a request and receiving a response",
        "average revenue per user, a key telecom business metric",
      ],
      correctIndex: 3,
      explanation: "Average revenue per user, a key telecom business metric."
    },
    {
      id: "dt-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A city has good coverage but poor video-call quality during peak hours. What should be investigated?",
      options: [
        "Only store signage",
        "Only device color",
        "Cell capacity, backhaul congestion, latency, jitter, packet loss, and traffic mix",
        "Only marketing spend",
      ],
      correctIndex: 2,
      explanation: "Real-time quality issues often come from congestion, latency, jitter, or packet loss."
    },
    {
      id: "dt-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A telco wants to reduce customer churn. What is the strongest analysis?",
      options: [
        "Only count total subscribers",
        "Segment churn by plan, tenure, network quality, complaints, price changes, and competitor offers",
        "Ignore network experience",
        "Ask only sales agents",
      ],
      correctIndex: 1,
      explanation: "Churn requires customer, plan, network, pricing, and service segmentation."
    },
    {
      id: "dt-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A rural area needs broadband but fiber rollout is expensive. Which option should be evaluated?",
      options: [
        "Only premium fiber to every home immediately",
        "Satellite, fixed wireless, fiber economics, subsidy options, demand, and service-level needs",
        "No service because it is rural",
        "Only TV advertising",
      ],
      correctIndex: 1,
      explanation: "Rural connectivity decisions require technology and economics trade-off analysis."
    },
    {
      id: "dt-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Network alarms spike after a configuration change. What should the NOC do first?",
      options: [
        "Correlate alarms with the change window, affected nodes, customer impact, and rollback options",
        "Close all tickets",
        "Reboot every system randomly",
        "Ignore alarms as noise",
      ],
      correctIndex: 0,
      explanation: "NOC triage should connect alarms to changes and customer impact."
    },
    {
      id: "dt-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A mobile operator is planning 5G for a stadium. What matters most?",
      options: [
        "Only tower paint color",
        "Only SIM packaging",
        "High-density capacity, low latency, small cells, backhaul, spectrum, and user demand",
        "Only retail store design",
      ],
      correctIndex: 2,
      explanation: "Venues require dense capacity planning and strong backhaul."
    },
    {
      id: "dt-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Billing complaints increase after a plan migration. What should be checked?",
      options: [
        "Only handset model",
        "Only fiber cuts",
        "BSS rules, rating logic, migrated plan attributes, invoice samples, and affected customer segments",
        "Only radio signal strength",
      ],
      correctIndex: 2,
      explanation: "Billing incidents usually require BSS/rating and customer-segment analysis."
    },
    {
      id: "dt-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A VoIP service has choppy audio. Which metrics are most relevant?",
      options: [
        "Latency, jitter, packet loss, codec behavior, and network path",
        "Only invoice count",
        "Only app store rating",
        "Only screen brightness",
      ],
      correctIndex: 0,
      explanation: "Voice quality is sensitive to delay variation and packet loss."
    },
    {
      id: "dt-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A telecom product team wants to launch eSIM support. What should be planned?",
      options: [
        "Only a longer SIM tray",
        "Only a new product logo",
        "Device compatibility, provisioning flow, security, customer support, carrier integration, and regulatory requirements",
        "Only retail posters",
      ],
      correctIndex: 2,
      explanation: "eSIM launch requires operational, technical, and customer readiness."
    },
    {
      id: "dt-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A fiber outage affects one neighborhood. What is the best response?",
      options: [
        "Change the mobile app icon",
        "Identify physical route, affected customers, restoration ETA, field dispatch, and communication cadence",
        "Wait for customers to stop calling",
        "Replace the billing system",
      ],
      correctIndex: 1,
      explanation: "Fiber incidents require physical fault isolation, dispatch, customer impact tracking, and updates."
    },
    {
      id: "dt-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A business customer asks for guaranteed uptime. What document defines commitments?",
      options: [
        "A personal promise",
        "An SLA with uptime, response time, support process, credits, and exclusions",
        "A social media caption",
        "An untracked chat message",
      ],
      correctIndex: 1,
      explanation: "Enterprise service commitments should be formalized through an SLA."
    }
  ],
};
