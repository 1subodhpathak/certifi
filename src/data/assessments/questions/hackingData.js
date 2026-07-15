import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const hackingData = {
  id: ASSESSMENT_TYPES.hacking,
  title: "Ethical Hacking & Security Assessment Professional Certification",
  shortTitle: "Ethical Hacking",
  category: "Security",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional ethical hacking assessment covering authorized testing, scope, reconnaissance concepts, vulnerability validation, OWASP risks, access control, security controls, reporting, and remediation judgment.",
  instructions: "Choose the best answer. All scenarios assume authorized, defensive, and ethical security work within approved scope.",
  questions: [
{ id: 'eh-01', type: 'mcq', title: 'Core Concepts', prompt: 'What is the primary goal of an Ethical Hacker?', options: ['To steal data', 'To identify and help fix security vulnerabilities', 'To shut down websites', 'To earn money illegally'], correctIndex: 1, explanation: 'Ethical hackers operate with permission to improve security.' },
        { id: 'eh-02', type: 'mcq', title: 'Reconnaissance', prompt: 'What is the difference between Passive and Active Reconnaissance?', options: ['No difference', 'Passive involves gathering info without direct interaction; Active involves interacting with the target', 'Active is safer', 'Passive is for physical security'], correctIndex: 1, explanation: 'Passive recon (like searching WHOIS) is harder to detect.' },
        { id: 'eh-03', type: 'mcq', title: 'Nmap', prompt: 'Which tool is the industry standard for network scanning and service discovery?', options: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite'], correctIndex: 1, explanation: 'Nmap (Network Mapper) is essential for discovery.' },
        { id: 'eh-04', type: 'mcq', title: 'Vulnerability Scanning', prompt: 'Which of these is a common automated vulnerability scanner?', options: ['Nessus', 'Photoshop', 'Chrome', 'Slack'], correctIndex: 0, explanation: 'Nessus and OpenVAS are widely used for scanning.' },
        { id: 'eh-05', type: 'mcq', title: 'Social Engineering', prompt: 'What is "Phishing"?', options: ['A sport', 'Sending deceptive emails to trick users into revealing sensitive information', 'A type of virus', 'Cracking passwords'], correctIndex: 1, explanation: 'Social engineering targets the human element of security.' },
        { id: 'eh-06', type: 'mcq', title: 'Exploitation', prompt: 'What is a "Buffer Overflow" attack?', options: ['A fast network', 'Sending more data than a buffer can handle to overwrite memory and execute malicious code', 'A database join', 'A type of firewall'], correctIndex: 1, explanation: 'Classic exploit targeting memory management vulnerabilities.' },
        { id: 'eh-07', type: 'mcq', title: 'Metasploit', prompt: 'What is "Metasploit"?', options: ['A type of computer', 'A powerful framework for developing and executing exploit code', 'A browser extension', 'A web server'], correctIndex: 1, explanation: 'Metasploit simplifies the exploitation phase of a pentest.' },
        { id: 'eh-08', type: 'mcq', title: 'SQL Injection', prompt: 'How can you prevent SQL Injection?', options: ['Better CSS', 'Using Parameterized Queries (Prepared Statements)', 'Encryption only', 'Using stronger passwords'], correctIndex: 1, explanation: 'Input validation and parameterized queries are the primary defenses.' },
        { id: 'eh-09', type: 'mcq', title: 'XSS', prompt: 'What does "XSS" stand for?', options: ['Cross-Site Scripting', 'X-ray Security System', 'XML Service Scan', 'Extensible Script Source'], correctIndex: 0, explanation: 'XSS involves injecting malicious scripts into trusted websites.' },
        { id: 'eh-10', type: 'mcq', title: 'Cryptography', prompt: 'What is the difference between Symmetric and Asymmetric encryption?', options: ['No difference', 'Symmetric uses one key; Asymmetric uses a public-private key pair', 'Symmetric is more secure', 'Asymmetric is faster'], correctIndex: 1, explanation: 'Asymmetric encryption is the basis for HTTPS and digital signatures.' },
        { id: 'eh-11', type: 'mcq', title: 'Footprinting', prompt: 'What is "Google Dorking"?', options: ['A search error', 'Using advanced search operators to find hidden information on the web', 'A type of malware', 'Password cracking'], correctIndex: 1, explanation: 'Search engine hacking is a powerful recon technique.' },
        { id: 'eh-12', type: 'mcq', title: 'Sniffing', prompt: 'Which tool is primarily used for packet sniffing and protocol analysis?', options: ['Nmap', 'Wireshark', 'John the Ripper', 'Netcat'], correctIndex: 1, explanation: 'Wireshark allows you to see what is happening on your network at a microscopic level.' },
        { id: 'eh-13', type: 'mcq', title: 'Brute Force', prompt: 'What is a "Dictionary Attack"?', options: ['Reading a book', 'Trying all words in a list as potential passwords', 'A spelling check', 'A social engineering trick'], correctIndex: 1, explanation: 'Dictionary attacks are more efficient than pure brute force.' },
        { id: 'eh-14', type: 'mcq', title: 'Dos/DDoS', prompt: 'What is the goal of a Denial of Service (DoS) attack?', options: ['To steal data', 'To make a service or resource unavailable to its intended users', 'To gain admin access', 'To encrypt files'], correctIndex: 1, explanation: 'Availability is the target of DoS/DDoS.' },
        { id: 'eh-15', type: 'mcq', title: 'Honeypots', prompt: 'What is a "Honeypot" in cybersecurity?', options: ['A prize', 'A decoy system designed to lure and trap attackers', 'A secure server', 'A type of firewall'], correctIndex: 1, explanation: 'Honeypots provide intelligence on attacker behavior.' },
        { id: 'eh-16', type: 'mcq', title: 'Post-Exploitation', prompt: 'What is "Privilege Escalation"?', options: ['Getting a promotion', 'Gaining higher levels of access (e.g., admin/root) after initial compromise', 'Changing passwords', 'Deleting logs'], correctIndex: 1, explanation: 'Attackers move from low-privilege users to system-level access.' },
        { id: 'eh-17', type: 'mcq', title: 'Compliance', prompt: 'Which law regulates the protection of personal data for EU citizens?', options: ['HIPAA', 'GDPR', 'PCI DSS', 'SOX'], correctIndex: 1, explanation: 'GDPR has global implications for data privacy.' },
        { id: 'eh-18', type: 'mcq', title: 'Wi-Fi Hacking', prompt: 'Which tool is commonly used for auditing wireless network security?', options: ['Aircrack-ng', 'Metasploit', 'Nmap', 'Angry IP Scanner'], correctIndex: 0, explanation: 'Aircrack-ng is the suite for Wi-Fi security testing.' },
        { id: 'eh-19', type: 'mcq', title: 'Report Writing', prompt: 'What is the most important part of a Pentest Report?', options: ['The cover page', 'Clear remediation steps and executive summary', 'The list of tools used', 'Technical screenshots only'], correctIndex: 1, explanation: 'The goal of a pentest is to improve security through action.' },
        { id: 'eh-20', type: 'mcq', title: 'Zero Day', prompt: 'What is a "Zero Day" vulnerability?', options: ['A new bug', 'A vulnerability that is unknown to the software vendor and has no patch available', 'A bug with zero impact', 'An old bug'], correctIndex: 1, explanation: 'Zero days are extremely dangerous as there is no immediate defense.' },
    {
          "id": "eh-21",
          "type": "mcq",
          "title": "Authorization",
          "prompt": "What is the most important requirement before any penetration test?",
          "options": [
                "Written authorization and agreed scope",
                "A fast laptop",
                "A social media account",
                "A public exploit list"
          ],
          "correctIndex": 0,
          "explanation": "Ethical testing requires permission, scope, and rules of engagement."
    },
    {
          "id": "eh-22",
          "type": "mcq",
          "title": "Scope",
          "prompt": "Why is scope critical in a penetration test?",
          "options": [
                "It defines allowed targets, methods, timing, and boundaries",
                "It removes the need for permission",
                "It allows testing anything online",
                "It hides findings"
          ],
          "correctIndex": 0,
          "explanation": "Scope protects both the tester and the organization."
    },
    {
          "id": "eh-23",
          "type": "mcq",
          "title": "Rules of Engagement",
          "prompt": "What should rules of engagement include?",
          "options": [
                "Contacts, testing windows, allowed techniques, escalation paths, and stop conditions",
                "Only tester names",
                "Only final report format",
                "Only marketing goals"
          ],
          "correctIndex": 0,
          "explanation": "Rules of engagement define how testing should be conducted safely."
    },
    {
          "id": "eh-24",
          "type": "mcq",
          "title": "CIA Triad",
          "prompt": "What does the CIA triad stand for?",
          "options": [
                "Confidentiality, Integrity, Availability",
                "Code, Internet, Access",
                "Control, Identity, Audit",
                "Cache, Input, API"
          ],
          "correctIndex": 0,
          "explanation": "The CIA triad is a core security model."
    },
    {
          "id": "eh-25",
          "type": "mcq",
          "title": "Risk Rating",
          "prompt": "What factors commonly influence vulnerability risk?",
          "options": [
                "Likelihood, impact, exploitability, exposure, and affected assets",
                "Only the scanner color",
                "Only the finding title",
                "Only the tester preference"
          ],
          "correctIndex": 0,
          "explanation": "Risk combines business impact and technical likelihood."
    },
    {
          "id": "eh-26",
          "type": "mcq",
          "title": "Vulnerability Validation",
          "prompt": "Why validate scanner findings manually?",
          "options": [
                "To reduce false positives and understand real impact",
                "To make reports longer",
                "To ignore critical issues",
                "To avoid evidence"
          ],
          "correctIndex": 0,
          "explanation": "Automated scanners can be wrong or incomplete; validation improves accuracy."
    },
    {
          "id": "eh-27",
          "type": "mcq",
          "title": "OWASP",
          "prompt": "What is the OWASP Top 10 commonly used for?",
          "options": [
                "Understanding common web application security risks",
                "Designing logos",
                "Writing payroll rules",
                "Replacing encryption"
          ],
          "correctIndex": 0,
          "explanation": "OWASP Top 10 is a widely used awareness list for web app risks."
    },
    {
          "id": "eh-28",
          "type": "mcq",
          "title": "Broken Access Control",
          "prompt": "A user can view another user’s invoice by changing an ID in the URL. What is the issue?",
          "options": [
                "Broken access control",
                "Weak CSS",
                "Slow database",
                "Bad image format"
          ],
          "correctIndex": 0,
          "explanation": "Server-side authorization must verify access to each object."
    },
    {
          "id": "eh-29",
          "type": "mcq",
          "title": "MFA",
          "prompt": "Why is MFA important?",
          "options": [
                "It reduces account takeover risk if a password is compromised",
                "It makes passwords public",
                "It disables logging",
                "It replaces authorization"
          ],
          "correctIndex": 0,
          "explanation": "MFA adds another verification factor beyond the password."
    },
    {
          "id": "eh-30",
          "type": "mcq",
          "title": "Password Storage",
          "prompt": "What is the correct approach to password storage?",
          "options": [
                "Store salted, slow hashes using approved password hashing algorithms",
                "Store plain text",
                "Encrypt with a hardcoded key in the code",
                "Email passwords to users"
          ],
          "correctIndex": 0,
          "explanation": "Passwords should be protected with dedicated hashing methods and salts."
    },
    {
          "id": "eh-31",
          "type": "mcq",
          "title": "Least Privilege",
          "prompt": "What does least privilege mean?",
          "options": [
                "Grant only the minimum access needed to perform a role",
                "Give admin access to everyone",
                "Remove all authentication",
                "Use one shared account"
          ],
          "correctIndex": 0,
          "explanation": "Least privilege reduces blast radius when accounts or systems fail."
    },
    {
          "id": "eh-32",
          "type": "mcq",
          "title": "Network Segmentation",
          "prompt": "Why use network segmentation?",
          "options": [
                "To limit lateral movement and isolate sensitive systems",
                "To make every system public",
                "To remove firewalls",
                "To slow all users"
          ],
          "correctIndex": 0,
          "explanation": "Segmentation reduces the spread and impact of compromise."
    },
    {
          "id": "eh-33",
          "type": "mcq",
          "title": "Secure Reporting",
          "prompt": "What should a penetration test report include?",
          "options": [
                "Evidence, business impact, severity, reproduction summary, and remediation guidance",
                "Only jokes",
                "Only exploit names",
                "Only screenshots without context"
          ],
          "correctIndex": 0,
          "explanation": "A useful report helps teams understand and fix risk."
    },
    {
          "id": "eh-34",
          "type": "mcq",
          "title": "Responsible Disclosure",
          "prompt": "What is responsible disclosure?",
          "options": [
                "Reporting vulnerabilities through appropriate channels and giving time to remediate",
                "Posting secrets publicly immediately",
                "Selling access",
                "Ignoring the issue"
          ],
          "correctIndex": 0,
          "explanation": "Responsible disclosure balances user safety and remediation."
    },
    {
          "id": "eh-35",
          "type": "mcq",
          "title": "Phishing Defense",
          "prompt": "Which control helps reduce phishing risk?",
          "options": [
                "User training, email filtering, MFA, and reporting workflows",
                "Ignoring emails",
                "Sharing passwords",
                "Disabling logging"
          ],
          "correctIndex": 0,
          "explanation": "Phishing defense requires people, process, and technical controls."
    },
    {
          "id": "eh-36",
          "type": "mcq",
          "title": "Log Review",
          "prompt": "Why are security logs important?",
          "options": [
                "They support detection, investigation, and evidence preservation",
                "They replace all security controls",
                "They should always be deleted",
                "They only consume disk"
          ],
          "correctIndex": 0,
          "explanation": "Logs help identify and investigate suspicious activity."
    },
    {
          "id": "eh-37",
          "type": "mcq",
          "title": "Patch Management",
          "prompt": "What is the goal of patch management?",
          "options": [
                "Reduce known vulnerabilities by applying tested updates in a controlled way",
                "Install every update blindly instantly",
                "Avoid all updates",
                "Only update user interfaces"
          ],
          "correctIndex": 0,
          "explanation": "Patch management balances security urgency and operational stability."
    },
    {
          "id": "eh-38",
          "type": "mcq",
          "title": "Segregation of Duties",
          "prompt": "Why separate duties in security-sensitive workflows?",
          "options": [
                "To reduce fraud, error, and unchecked privileged actions",
                "To slow down every process for no reason",
                "To remove accountability",
                "To make audits impossible"
          ],
          "correctIndex": 0,
          "explanation": "Segregation of duties is an important control in high-risk processes."
    },
    {
          "id": "eh-39",
          "type": "mcq",
          "title": "Evidence Handling",
          "prompt": "During a security investigation, why preserve evidence carefully?",
          "options": [
                "To support accurate analysis, auditability, and potential legal or compliance needs",
                "To make logs disappear",
                "To edit timestamps",
                "To avoid root cause"
          ],
          "correctIndex": 0,
          "explanation": "Evidence integrity matters for trustworthy investigations."
    },
    {
          "id": "eh-40",
          "type": "mcq",
          "title": "Advanced Ethical Judgment",
          "prompt": "A scan finds a critical vulnerability outside the agreed scope. What is the best response?",
          "options": [
                "Stop testing that target and escalate through the agreed contact path for guidance",
                "Exploit it fully without permission",
                "Publish it immediately",
                "Ignore all scope rules"
          ],
          "correctIndex": 0,
          "explanation": "Ethical testers respect scope and escalate unexpected critical findings safely."
    }
  ]
};
