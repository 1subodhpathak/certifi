import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainItHardwareData = {
  id: ASSESSMENT_TYPES.domain_it_hardware,
  title: "IT Hardware Industry Domain Professional Certification",
  shortTitle: "Hardware Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional IT hardware assessment covering computer components, servers, storage, networking, data centers, power, cooling, lifecycle, asset management, security, procurement, and operational reliability.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "ih-01",
      type: "mcq",
      title: "CPU",
      prompt: "In the IT Hardware Industry domain, what does \"CPU\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "central processing unit that executes instructions and coordinates computation",
        "mean time between failures, a reliability metric",
        "firmware interface used to initialize hardware and boot systems",
      ],
      correctIndex: 1,
      explanation: "Central processing unit that executes instructions and coordinates computation."
    },
    {
      id: "ih-02",
      type: "mcq",
      title: "GPU",
      prompt: "In the IT Hardware Industry domain, what does \"GPU\" mean?",
      options: [
        "network device that forwards packets between networks",
        "network interface card used to connect a device to a network",
        "A design color choice with no operational meaning",
        "graphics processing unit used for graphics, parallel computing, AI, and high-throughput workloads",
      ],
      correctIndex: 3,
      explanation: "Graphics processing unit used for graphics, parallel computing, AI, and high-throughput workloads."
    },
    {
      id: "ih-03",
      type: "mcq",
      title: "RAM",
      prompt: "In the IT Hardware Industry domain, what does \"RAM\" mean?",
      options: [
        "volatile high-speed memory used by active programs and the CPU",
        "A temporary file naming convention only",
        "systems such as fans, heatsinks, and airflow design used to manage heat",
        "storage technique combining disks for redundancy, performance, or both",
      ],
      correctIndex: 0,
      explanation: "Volatile high-speed memory used by active programs and the CPU."
    },
    {
      id: "ih-04",
      type: "mcq",
      title: "SSD",
      prompt: "In the IT Hardware Industry domain, what does \"SSD\" mean?",
      options: [
        "solid-state drive using flash memory for fast persistent storage",
        "software or firmware that runs and manages virtual machines",
        "A social media caption format",
        "storage area network providing block-level storage to servers",
      ],
      correctIndex: 0,
      explanation: "Solid-state drive using flash memory for fast persistent storage."
    },
    {
      id: "ih-05",
      type: "mcq",
      title: "HDD",
      prompt: "In the IT Hardware Industry domain, what does \"HDD\" mean?",
      options: [
        "A customer service greeting script",
        "low-level software embedded in hardware devices",
        "systems such as fans, heatsinks, and airflow design used to manage heat",
        "hard disk drive using spinning magnetic disks for persistent storage",
      ],
      correctIndex: 3,
      explanation: "Hard disk drive using spinning magnetic disks for persistent storage."
    },
    {
      id: "ih-06",
      type: "mcq",
      title: "NIC",
      prompt: "In the IT Hardware Industry domain, what does \"NIC\" mean?",
      options: [
        "network interface card used to connect a device to a network",
        "An office administration policy only",
        "discarded electronic equipment requiring responsible disposal or recycling",
        "firmware interface used to initialize hardware and boot systems",
      ],
      correctIndex: 0,
      explanation: "Network interface card used to connect a device to a network."
    },
    {
      id: "ih-07",
      type: "mcq",
      title: "Switch",
      prompt: "In the IT Hardware Industry domain, what does \"Switch\" mean?",
      options: [
        "A random sales slogan with no technical meaning",
        "standard height measurement for rack equipment",
        "storage technique combining disks for redundancy, performance, or both",
        "network device that connects devices within a LAN and forwards frames",
      ],
      correctIndex: 3,
      explanation: "Network device that connects devices within a LAN and forwards frames."
    },
    {
      id: "ih-08",
      type: "mcq",
      title: "Router",
      prompt: "In the IT Hardware Industry domain, what does \"Router\" mean?",
      options: [
        "systems such as fans, heatsinks, and airflow design used to manage heat",
        "remote management path independent of the main operating system or network",
        "A manual workaround with no control value",
        "network device that forwards packets between networks",
      ],
      correctIndex: 3,
      explanation: "Network device that forwards packets between networks."
    },
    {
      id: "ih-09",
      type: "mcq",
      title: "Firewall appliance",
      prompt: "In the IT Hardware Industry domain, what does \"Firewall appliance\" mean?",
      options: [
        "hardware or virtual device that filters network traffic based on security rules",
        "firmware interface used to initialize hardware and boot systems",
        "facility containing computing, storage, networking, power, and cooling infrastructure",
        "A visual branding element only",
      ],
      correctIndex: 0,
      explanation: "Hardware or virtual device that filters network traffic based on security rules."
    },
    {
      id: "ih-10",
      type: "mcq",
      title: "UPS",
      prompt: "In the IT Hardware Industry domain, what does \"UPS\" mean?",
      options: [
        "power distribution unit used to distribute electricity to rack-mounted equipment",
        "planning, procurement, deployment, maintenance, refresh, and disposal of hardware assets",
        "uninterruptible power supply providing backup power during outages",
        "A meeting agenda template",
      ],
      correctIndex: 2,
      explanation: "Uninterruptible power supply providing backup power during outages."
    },
    {
      id: "ih-11",
      type: "mcq",
      title: "PDU",
      prompt: "In the IT Hardware Industry domain, what does \"PDU\" mean?",
      options: [
        "standard frame for mounting servers and data center equipment",
        "power distribution unit used to distribute electricity to rack-mounted equipment",
        "storage technique combining disks for redundancy, performance, or both",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 1,
      explanation: "Power distribution unit used to distribute electricity to rack-mounted equipment."
    },
    {
      id: "ih-12",
      type: "mcq",
      title: "Server rack",
      prompt: "In the IT Hardware Industry domain, what does \"Server rack\" mean?",
      options: [
        "planning, procurement, deployment, maintenance, refresh, and disposal of hardware assets",
        "component that can be replaced without shutting down the system",
        "A design color choice with no operational meaning",
        "standard frame for mounting servers and data center equipment",
      ],
      correctIndex: 3,
      explanation: "Standard frame for mounting servers and data center equipment."
    },
    {
      id: "ih-13",
      type: "mcq",
      title: "Rack unit",
      prompt: "In the IT Hardware Industry domain, what does \"Rack unit\" mean?",
      options: [
        "systems such as fans, heatsinks, and airflow design used to manage heat",
        "standard height measurement for rack equipment",
        "discarded electronic equipment requiring responsible disposal or recycling",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Standard height measurement for rack equipment."
    },
    {
      id: "ih-14",
      type: "mcq",
      title: "RAID",
      prompt: "In the IT Hardware Industry domain, what does \"RAID\" mean?",
      options: [
        "A social media caption format",
        "remote management path independent of the main operating system or network",
        "storage area network providing block-level storage to servers",
        "storage technique combining disks for redundancy, performance, or both",
      ],
      correctIndex: 3,
      explanation: "Storage technique combining disks for redundancy, performance, or both."
    },
    {
      id: "ih-15",
      type: "mcq",
      title: "NAS",
      prompt: "In the IT Hardware Industry domain, what does \"NAS\" mean?",
      options: [
        "network device that connects devices within a LAN and forwards frames",
        "low-level software embedded in hardware devices",
        "network-attached storage providing file-level storage over a network",
        "A customer service greeting script",
      ],
      correctIndex: 2,
      explanation: "Network-attached storage providing file-level storage over a network."
    },
    {
      id: "ih-16",
      type: "mcq",
      title: "SAN",
      prompt: "In the IT Hardware Industry domain, what does \"SAN\" mean?",
      options: [
        "An office administration policy only",
        "volatile high-speed memory used by active programs and the CPU",
        "hardware or virtual device that filters network traffic based on security rules",
        "storage area network providing block-level storage to servers",
      ],
      correctIndex: 3,
      explanation: "Storage area network providing block-level storage to servers."
    },
    {
      id: "ih-17",
      type: "mcq",
      title: "Hypervisor",
      prompt: "In the IT Hardware Industry domain, what does \"Hypervisor\" mean?",
      options: [
        "software or firmware that runs and manages virtual machines",
        "material improving heat transfer between processor and heatsink",
        "power distribution unit used to distribute electricity to rack-mounted equipment",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 0,
      explanation: "Software or firmware that runs and manages virtual machines."
    },
    {
      id: "ih-18",
      type: "mcq",
      title: "Firmware",
      prompt: "In the IT Hardware Industry domain, what does \"Firmware\" mean?",
      options: [
        "network-attached storage providing file-level storage over a network",
        "A manual workaround with no control value",
        "low-level software embedded in hardware devices",
        "storage technique combining disks for redundancy, performance, or both",
      ],
      correctIndex: 2,
      explanation: "Low-level software embedded in hardware devices."
    },
    {
      id: "ih-19",
      type: "mcq",
      title: "BIOS/UEFI",
      prompt: "In the IT Hardware Industry domain, what does \"BIOS/UEFI\" mean?",
      options: [
        "A visual branding element only",
        "hardware or virtual device that filters network traffic based on security rules",
        "network device that forwards packets between networks",
        "firmware interface used to initialize hardware and boot systems",
      ],
      correctIndex: 3,
      explanation: "Firmware interface used to initialize hardware and boot systems."
    },
    {
      id: "ih-20",
      type: "mcq",
      title: "Thermal paste",
      prompt: "In the IT Hardware Industry domain, what does \"Thermal paste\" mean?",
      options: [
        "A meeting agenda template",
        "systems such as fans, heatsinks, and airflow design used to manage heat",
        "storage area network providing block-level storage to servers",
        "material improving heat transfer between processor and heatsink",
      ],
      correctIndex: 3,
      explanation: "Material improving heat transfer between processor and heatsink."
    },
    {
      id: "ih-21",
      type: "mcq",
      title: "Cooling",
      prompt: "In the IT Hardware Industry domain, what does \"Cooling\" mean?",
      options: [
        "A payroll-only process unrelated to this domain",
        "systems such as fans, heatsinks, and airflow design used to manage heat",
        "protecting laptops, desktops, servers, and devices from threats and unauthorized access",
        "return merchandise authorization for returning defective hardware",
      ],
      correctIndex: 1,
      explanation: "Systems such as fans, heatsinks, and airflow design used to manage heat."
    },
    {
      id: "ih-22",
      type: "mcq",
      title: "Data center",
      prompt: "In the IT Hardware Industry domain, what does \"Data center\" mean?",
      options: [
        "central processing unit that executes instructions and coordinates computation",
        "A design color choice with no operational meaning",
        "storage technique combining disks for redundancy, performance, or both",
        "facility containing computing, storage, networking, power, and cooling infrastructure",
      ],
      correctIndex: 3,
      explanation: "Facility containing computing, storage, networking, power, and cooling infrastructure."
    },
    {
      id: "ih-23",
      type: "mcq",
      title: "Asset lifecycle",
      prompt: "In the IT Hardware Industry domain, what does \"Asset lifecycle\" mean?",
      options: [
        "storage technique combining disks for redundancy, performance, or both",
        "A temporary file naming convention only",
        "power distribution unit used to distribute electricity to rack-mounted equipment",
        "planning, procurement, deployment, maintenance, refresh, and disposal of hardware assets",
      ],
      correctIndex: 3,
      explanation: "Planning, procurement, deployment, maintenance, refresh, and disposal of hardware assets."
    },
    {
      id: "ih-24",
      type: "mcq",
      title: "E-waste",
      prompt: "In the IT Hardware Industry domain, what does \"E-waste\" mean?",
      options: [
        "component that can be replaced without shutting down the system",
        "discarded electronic equipment requiring responsible disposal or recycling",
        "A social media caption format",
        "systems such as fans, heatsinks, and airflow design used to manage heat",
      ],
      correctIndex: 1,
      explanation: "Discarded electronic equipment requiring responsible disposal or recycling."
    },
    {
      id: "ih-25",
      type: "mcq",
      title: "MTBF",
      prompt: "In the IT Hardware Industry domain, what does \"MTBF\" mean?",
      options: [
        "A customer service greeting script",
        "return merchandise authorization for returning defective hardware",
        "storage area network providing block-level storage to servers",
        "mean time between failures, a reliability metric",
      ],
      correctIndex: 3,
      explanation: "Mean time between failures, a reliability metric."
    },
    {
      id: "ih-26",
      type: "mcq",
      title: "RMA",
      prompt: "In the IT Hardware Industry domain, what does \"RMA\" mean?",
      options: [
        "An office administration policy only",
        "return merchandise authorization for returning defective hardware",
        "network device that forwards packets between networks",
        "material improving heat transfer between processor and heatsink",
      ],
      correctIndex: 1,
      explanation: "Return merchandise authorization for returning defective hardware."
    },
    {
      id: "ih-27",
      type: "mcq",
      title: "Hot-swappable",
      prompt: "In the IT Hardware Industry domain, what does \"Hot-swappable\" mean?",
      options: [
        "uninterruptible power supply providing backup power during outages",
        "A random sales slogan with no technical meaning",
        "component that can be replaced without shutting down the system",
        "hardware or virtual device that filters network traffic based on security rules",
      ],
      correctIndex: 2,
      explanation: "Component that can be replaced without shutting down the system."
    },
    {
      id: "ih-28",
      type: "mcq",
      title: "Redundancy",
      prompt: "In the IT Hardware Industry domain, what does \"Redundancy\" mean?",
      options: [
        "duplicate components or systems that improve availability",
        "network-attached storage providing file-level storage over a network",
        "A manual workaround with no control value",
        "firmware interface used to initialize hardware and boot systems",
      ],
      correctIndex: 0,
      explanation: "Duplicate components or systems that improve availability."
    },
    {
      id: "ih-29",
      type: "mcq",
      title: "Out-of-band management",
      prompt: "In the IT Hardware Industry domain, what does \"Out-of-band management\" mean?",
      options: [
        "A visual branding element only",
        "solid-state drive using flash memory for fast persistent storage",
        "hard disk drive using spinning magnetic disks for persistent storage",
        "remote management path independent of the main operating system or network",
      ],
      correctIndex: 3,
      explanation: "Remote management path independent of the main operating system or network."
    },
    {
      id: "ih-30",
      type: "mcq",
      title: "Endpoint security",
      prompt: "In the IT Hardware Industry domain, what does \"Endpoint security\" mean?",
      options: [
        "storage area network providing block-level storage to servers",
        "network device that connects devices within a LAN and forwards frames",
        "A meeting agenda template",
        "protecting laptops, desktops, servers, and devices from threats and unauthorized access",
      ],
      correctIndex: 3,
      explanation: "Protecting laptops, desktops, servers, and devices from threats and unauthorized access."
    },
    {
      id: "ih-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A server randomly shuts down under high load. What should be checked?",
      options: [
        "Only office Wi-Fi name",
        "Thermals, power supply, logs, firmware, workload, and hardware health",
        "Only monitor size",
        "Only keyboard color",
      ],
      correctIndex: 1,
      explanation: "Load-related shutdowns often involve power, heat, or failing hardware."
    },
    {
      id: "ih-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A data center rack has repeated power trips. What should be investigated?",
      options: [
        "Power draw, PDU capacity, circuit load, redundancy design, and faulty equipment",
        "Only cable color",
        "Only rack label font",
        "Only ticket title",
      ],
      correctIndex: 0,
      explanation: "Power events require electrical load and equipment checks."
    },
    {
      id: "ih-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A company needs resilient storage for critical data. What should be evaluated?",
      options: [
        "RAID level, backups, replication, recovery objectives, disk failure risk, and monitoring",
        "Only disk brand logo",
        "Only office chairs",
        "Only desktop wallpaper",
      ],
      correctIndex: 0,
      explanation: "Storage resilience needs redundancy plus backup and recovery planning."
    },
    {
      id: "ih-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A laptop refresh program is delayed by supply issues. What should operations track?",
      options: [
        "Supplier lead times, inventory, device standards, deployment schedule, and risk mitigation",
        "Only cafeteria menu",
        "Only employee photos",
        "Only badge colors",
      ],
      correctIndex: 0,
      explanation: "Hardware lifecycle programs need supply and deployment planning."
    },
    {
      id: "ih-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A network switch shows frequent port errors. What should be checked?",
      options: [
        "Cables, transceivers, port configuration, duplex/speed, firmware, and device logs",
        "Only user profile photo",
        "Only invoice logo",
        "Only office plants",
      ],
      correctIndex: 0,
      explanation: "Port errors can come from physical, config, or firmware issues."
    },
    {
      id: "ih-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A device is being retired. What is most important?",
      options: [
        "Only moving it to a closet",
        "Only removing stickers",
        "Only changing wallpaper",
        "Data wiping, asset records, secure disposal, warranty status, and e-waste compliance",
      ],
      correctIndex: 3,
      explanation: "Hardware disposal needs data security and compliance controls."
    },
    {
      id: "ih-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A server component failed but the system stayed online. What design enabled this?",
      options: [
        "No monitoring",
        "Unlabeled cables",
        "Single point of failure",
        "Redundancy such as dual power supplies, RAID, clustering, or failover",
      ],
      correctIndex: 3,
      explanation: "Redundancy helps systems continue after component failures."
    },
    {
      id: "ih-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A company buys cheaper laptops that fail often. What should be evaluated?",
      options: [
        "Total cost of ownership, warranty, downtime, support cost, performance, and user needs",
        "Purchase price only",
        "Keyboard sound only",
        "Box color only",
      ],
      correctIndex: 0,
      explanation: "Hardware decisions should include lifecycle cost and reliability."
    },
    {
      id: "ih-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A remote server is unreachable through the OS. What may still allow access?",
      options: [
        "Out-of-band management such as iDRAC, iLO, IPMI, or similar tools",
        "A printed brochure",
        "A software shortcut",
        "A local mouse only",
      ],
      correctIndex: 0,
      explanation: "Out-of-band management supports recovery when the OS path fails."
    },
    {
      id: "ih-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "AI workloads are slow on CPU-only hardware. What hardware may help?",
      options: [
        "Only a larger monitor",
        "GPU acceleration and appropriate memory/storage/network design",
        "Only printer upgrades",
        "Only a new desk",
      ],
      correctIndex: 1,
      explanation: "AI workloads often benefit from GPUs and balanced system architecture."
    }
  ],
};
