import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Individual practice assessment data. Add or edit questions in this file.
export const securityPlusData = {
  id: ASSESSMENT_TYPES.security_plus,
  title: 'CompTIA Security+ SY0-701',
  shortTitle: 'Security+',
  category: 'Security',
  durationMinutes: 45,
  pointsPerQuestion: 5,
  description: 'Security concepts, Threats, Vulnerabilities, and Response.',
  questions: [
    { id: 'sp-01', type: 'mcq', title: 'CIA Triad', prompt: 'What are the three pillars of the CIA Triad?', options: ['Control, Identity, Access', 'Confidentiality, Integrity, Availability', 'Cloud, Information, Analytics', 'Compliance, Inspection, Audit'], correctIndex: 1, explanation: 'The CIA triad is the foundation of information security.' },
    { id: 'sp-02', type: 'mcq', title: 'Threat Actors', prompt: 'Which threat actor is motivated by political or social causes?', options: ['Script Kiddie', 'Hacktivist', 'Insider Threat', 'State-Sponsored Actor'], correctIndex: 1, explanation: 'Hacktivists use hacking to promote a cause.' },
    { id: 'sp-03', type: 'mcq', title: 'Malware', prompt: 'Which type of malware encrypts files and demands payment?', options: ['Trojan', 'Spyware', 'Ransomware', 'Adware'], correctIndex: 2, explanation: 'Ransomware is a major global security threat.' },
    { id: 'sp-04', type: 'mcq', title: 'IAM', prompt: 'What is "Multi-Factor Authentication" (MFA)?', options: ['Using two passwords', 'Requiring two or more different types of credentials to verify identity', 'Changing passwords often', 'Biometrics only'], correctIndex: 1, explanation: 'Something you know, have, or are.' },
    { id: 'sp-05', type: 'mcq', title: 'Access Control', prompt: 'Which model gives the resource owner control over permissions?', options: ['MAC (Mandatory)', 'DAC (Discretionary)', 'RBAC (Role-based)', 'ABAC (Attribute-based)'], correctIndex: 1, explanation: 'In DAC, owners decide who can access their files.' },
    { id: 'sp-06', type: 'mcq', title: 'Networking', prompt: 'Which protocol is the secure version of HTTP?', options: ['SSH', 'HTTPS', 'SFTP', 'SNMP'], correctIndex: 1, explanation: 'HTTPS uses TLS to encrypt communication.' },
    { id: 'sp-07', type: 'mcq', title: 'Firewalls', prompt: 'What is a "Next-Generation Firewall" (NGFW) capable of that a traditional one isn\'t?', options: ['Filtering by IP', 'Deep Packet Inspection and Application-level awareness', 'Closing ports', 'Blocking viruses only'], correctIndex: 1, explanation: 'NGFWs operate at the application layer.' },
    { id: 'sp-08', type: 'mcq', title: 'Cryptography', prompt: 'What is "Hashing" used for?', options: ['Encryption', 'Ensuring Data Integrity', 'Storing passwords in plain text', 'Speeding up the internet'], correctIndex: 1, explanation: 'A hash is a one-way representation of data; any change results in a different hash.' },
    { id: 'sp-09', type: 'mcq', title: 'PKI', prompt: 'What is the role of a Certificate Authority (CA)?', options: ['To write code', 'To issue and manage digital certificates', 'To encrypt hard drives', 'To manage firewalls'], correctIndex: 1, explanation: 'CAs act as trusted third parties in the PKI ecosystem.' },
    { id: 'sp-10', type: 'mcq', title: 'Physical Security', prompt: 'What is a "Mantrap"?', options: ['A type of bug', 'A physical security access control system involving two interlocking doors', 'A social engineering trick', 'A network bridge'], correctIndex: 1, explanation: 'Mantraps prevent tailgating and unauthorized access.' },
    { id: 'sp-11', type: 'mcq', title: 'Incident Response', prompt: 'What is the first step in the Incident Response cycle?', options: ['Detection and Analysis', 'Containment', 'Preparation', 'Post-incident activity'], correctIndex: 2, explanation: 'Preparation ensures the team is ready before an event occurs.' },
    { id: 'sp-12', type: 'mcq', title: 'Risk Management', prompt: 'What is "Risk Mitigation"?', options: ['Ignoring the risk', 'Implementing controls to reduce the likelihood or impact of a risk', 'Transferring the risk to insurance', 'Accepting the risk'], correctIndex: 1, explanation: 'Mitigation is the most common risk treatment strategy.' },
    { id: 'sp-13', type: 'mcq', title: 'Vulnerabilities', prompt: 'What is a "Zero-Day Exploit"?', options: ['An exploit for a known bug', 'An exploit that attacks a previously unknown vulnerability', 'A fast attack', 'An attack at midnight'], correctIndex: 1, explanation: 'Zero days have no existing patches.' },
    { id: 'sp-14', type: 'mcq', title: 'Social Engineering', prompt: 'What is "Tailgating"?', options: ['Driving too close', 'Following an authorized person into a secure area without their knowledge', 'Email deception', 'Cracking passwords'], correctIndex: 1, explanation: 'Tailgating is a common physical security breach.' },
    { id: 'sp-15', type: 'mcq', title: 'Cloud Security', prompt: 'What is a "CASB"?', options: ['Cloud Access Security Broker', 'Centralized App Security Board', 'Cloud Audit System Backup', 'Computer Analytics Service'], correctIndex: 0, explanation: 'CASBs enforce security policies between cloud users and cloud providers.' },
    { id: 'sp-16', type: 'mcq', title: 'Wireless Security', prompt: 'Which WPA version is the most secure current standard?', options: ['WPA', 'WPA2', 'WPA3', 'WEP'], correctIndex: 2, explanation: 'WPA3 provides stronger encryption and individualized data protection.' },
    { id: 'sp-17', type: 'mcq', title: 'Scanning', prompt: 'What is the difference between a Vulnerability Scan and a Pentest?', options: ['No difference', 'Scanning is automated and identifies known issues; Pentesting is active and tests defenses', 'Pentesting is cheaper', 'Scanning is more thorough'], correctIndex: 1, explanation: 'Scanning is the "what", Pentesting is the "how".' },
    { id: 'sp-18', type: 'mcq', title: 'Compliance', prompt: 'What is "DLP"?', options: ['Data Loss Prevention', 'Digital Link Protocol', 'Direct Login Portal', 'Database Lock Policy'], correctIndex: 0, explanation: 'DLP tools prevent sensitive data from leaving the network.' },
    { id: 'sp-19', type: 'mcq', title: 'Virtualization Security', prompt: 'What is "VM Escape"?', options: ['Deleting a VM', 'An attack where an attacker breaks out of a VM to access the host OS', 'A backup strategy', 'Closing the browser'], correctIndex: 1, explanation: 'VM escape is a critical failure of virtualization isolation.' },
    { id: 'sp-20', type: 'mcq', title: 'Training', prompt: 'What is the most effective way to prevent social engineering attacks?', options: ['Firewalls', 'Antivirus', 'User Awareness Training', 'Strong passwords'], correctIndex: 2, explanation: 'Informed users are the best defense against social engineering.' }
  ]
};
