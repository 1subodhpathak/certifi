import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const ethicsData = {
  id: ASSESSMENT_TYPES.ethics,
  title: "Ethical Judgment & Workplace Integrity Certification",
  shortTitle: "Ethics",
  category: "Workplace Integrity",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional ethics assessment covering privacy, conflicts of interest, harassment, AI fairness, whistleblowing, IP, transparency, inclusion, corporate resources, security disclosure, and professional judgment.",
  instructions: "Choose the response that upholds the highest ethical and professional standards.",
  questions: [
{ id: 'eth-01', type: 'mcq', title: 'Data Privacy', prompt: 'You notice sensitive customer PII is logged in plain text in the debug logs. What is your priority?', options: ['Ignore it', 'Inform your manager and lead engineer to sanitize the logs immediately', 'Tell the customer', 'Delete the logs yourself without telling anyone'], correctIndex: 1, explanation: 'Data privacy issues must be escalated and fixed systematically through proper channels.' },
        { id: 'eth-02', type: 'mcq', title: 'Conflict of Interest', prompt: 'Your brother\'s software company is bidding for a contract with your employer. What do you do?', options: ['Recommend them', 'Recuse yourself from the decision and disclose the relationship', 'Help them write the bid', 'Ignore it'], correctIndex: 1, explanation: 'Disclosure and recusal are the standard ways to handle conflicts of interest.' },
        { id: 'eth-03', type: 'mcq', title: 'Harassment', prompt: 'You overhear a senior leader making inappropriate comments to a junior. What is the best action?', options: ['Ignore it', 'Report it to HR or use the anonymous whistleblowing line', 'Join in to fit in', 'Confront the leader publicly'], correctIndex: 1, explanation: 'Maintaining a safe environment is a shared responsibility; use official channels to report misconduct.' },
        { id: 'eth-04', type: 'mcq', title: 'Algorithmic Bias', prompt: 'You find your hiring algorithm is discriminating against a specific demographic. What is the ethical step?', options: ['Keep using it if it works', 'Stop the rollout and investigate/retrain the model', 'Hide the findings', 'Say it is "just math"'], correctIndex: 1, explanation: 'Ethical AI requires identifying and mitigating bias even if it delays a launch.' },
        { id: 'eth-05', type: 'mcq', title: 'Whistleblowing', prompt: 'You discover the company is intentionally overbilling a client. What do you do?', options: ['Keep quiet to keep your job', 'Report it internally, and if not resolved, use external legal channels', 'Ask for a share of the money', 'Quit silently'], correctIndex: 1, explanation: 'Fraud must be reported through proper ethical or legal channels.' },
        { id: 'eth-06', type: 'mcq', title: 'Intellectual Property', prompt: 'Can you use code you wrote for a previous employer in your new role?', options: ['Yes, always', 'Only if it is open source or you have explicit permission', 'Yes, if no one finds out', 'Only the parts you like'], correctIndex: 1, explanation: 'Most work-for-hire contracts assign IP ownership to the employer.' },
        { id: 'eth-07', type: 'mcq', title: 'Transparency', prompt: 'A bug caused a minor loss for 10 users. Manager says "don\'t tell them". What do you do?', options: ['Obey the manager', 'Advocate for transparency and a refund/fix communication', 'Post it on Twitter', 'Quit'], correctIndex: 1, explanation: 'Professional ethics often require advocating for the right thing even when it contradicts a direct order.' },
        { id: 'eth-08', type: 'mcq', title: 'Inclusivity', prompt: 'A teammate is consistently talked over in meetings. What is your role?', options: ['Ignore it', 'Intervene and say "I\'d like to hear what they were saying"', 'Talk over them too', 'Complain later'], correctIndex: 1, explanation: 'Being an ally means active intervention to ensure all voices are heard.' },
        { id: 'eth-09', type: 'mcq', title: 'Corporate Resources', prompt: 'Is it acceptable to use company servers to mine cryptocurrency on weekends?', options: ['Yes, if it does not affect performance', 'No, using corporate resources for personal gain is unethical and often a fireable offense', 'Yes, if you use your own code', 'Only if the company makes a profit'], correctIndex: 1, explanation: 'Misuse of corporate resources is a clear ethical and policy violation.' },
        { id: 'eth-10', type: 'mcq', title: 'Safety', prompt: 'You find a safety flaw in a product but it will cost $1M to fix. What is the stance?', options: ['Hide it', 'Prioritize safety and report the risk immediately', 'Ignore it for now', 'Only fix if someone dies'], correctIndex: 1, explanation: 'Human safety always outweighs financial cost in professional ethics.' },
        { id: 'eth-11', type: 'mcq', title: 'Fairness', prompt: 'You are friends with one candidate for a role. Can you interview them?', options: ['Yes, easy pass', 'No, ask to be removed to ensure an unbiased process', 'Yes, but be extra hard on them', 'Yes, but don\'t tell anyone'], correctIndex: 1, explanation: 'Unbiased hiring requires removing personal connections from the interview loop.' },
        { id: 'eth-12', type: 'mcq', title: 'Honesty', prompt: 'You missed a deadline. What is the best update?', options: ['Lie and say the system was down', 'Be honest about why and provide a new delivery date', 'Avoid the stakeholder', 'Say it was someone else\'s fault'], correctIndex: 1, explanation: 'Integrity is more valuable than a "perfect" record.' },
        { id: 'eth-13', type: 'mcq', title: 'Environment', prompt: 'Is sustainability a professional responsibility?', options: ['No, only profit matters', 'Yes, professionals should consider environmental impact in their work', 'Only for PR', 'Only if the law requires it'], correctIndex: 1, explanation: 'Modern professional standards include social and environmental responsibility.' },
        { id: 'eth-14', type: 'mcq', title: 'Security', prompt: 'A vendor offers you a gift for a contract. Is this okay?', options: ['Yes, always', 'Usually no, as it can be seen as a bribe or influencing favor', 'Yes, if it is expensive', 'Only if no one sees'], correctIndex: 1, explanation: 'Most companies have strict "no-gift" or "limited-gift" policies to prevent bribery.' },
        { id: 'eth-15', type: 'mcq', title: 'Credit', prompt: 'A junior did 90% of the work on a deck. Who presents?', options: ['The Senior', 'The Junior, with the Senior supporting', 'The Senior, without mentioning the Junior', 'The Manager'], correctIndex: 1, explanation: 'Ethical leadership means giving credit where it is due.' },
        { id: 'eth-16', type: 'mcq', title: 'Public Interest', prompt: 'If your project harms the public interest, what is your duty?', options: ['Follow orders', 'Speak up and advocate for the public good', 'Ignore it', 'Ask for a bonus'], correctIndex: 1, explanation: 'Professional codes (like IEEE or ACM) emphasize duty to the public.' },
        { id: 'eth-17', type: 'mcq', title: 'Confidentiality', prompt: 'Can you discuss client details at a bar with friends?', options: ['Yes, it\'s private', 'No, professional confidentiality applies everywhere', 'Yes, if you use code names', 'Only if it\'s interesting'], correctIndex: 1, explanation: 'Confidentiality is absolute and not restricted to the office.' },
        { id: 'eth-18', type: 'mcq', title: 'Accuracy', prompt: 'You are asked to "tweak" a chart to show a trend that isn\'t there. What do you do?', options: ['Tweak it', 'Refuse and explain the importance of data integrity', 'Only tweak it a little', 'Let the manager do it'], correctIndex: 1, explanation: 'Data integrity is the foundation of trust in analytics.' },
        { id: 'eth-19', type: 'mcq', title: 'Accountability', prompt: 'Who is responsible if your AI model makes an ethical error?', options: ['The AI', 'The team that built and deployed it', 'No one', 'The user'], correctIndex: 1, explanation: 'Humans are always accountable for the systems they create.' },
        { id: 'eth-20', type: 'mcq', title: 'Professionalism', prompt: 'Is badmouthing a competitor ethical?', options: ['Yes, it helps you win', 'No, professional conduct requires respect and focus on your own value', 'Only if they are bad', 'Only in private'], correctIndex: 1, explanation: 'Professionalism means winning on merit, not by disparaging others.' },
    {
          "id": "eth-21",
          "type": "mcq",
          "title": "PII Handling",
          "prompt": "What is the ethical response when customer PII appears in analytics exports?",
          "options": [
                "Restrict access, report through proper channels, remediate, and prevent recurrence",
                "Download it for later",
                "Share it broadly",
                "Ignore it if useful"
          ],
          "correctIndex": 0,
          "explanation": "Sensitive data exposure requires containment, escalation, and remediation."
    },
    {
          "id": "eth-22",
          "type": "mcq",
          "title": "Data Minimization",
          "prompt": "What does data minimization mean?",
          "options": [
                "Collect and retain only data needed for a legitimate purpose",
                "Collect everything forever",
                "Store all passwords in reports",
                "Avoid privacy review"
          ],
          "correctIndex": 0,
          "explanation": "Data minimization reduces privacy and security risk."
    },
    {
          "id": "eth-23",
          "type": "mcq",
          "title": "Consent",
          "prompt": "Why is user consent important in data collection?",
          "options": [
                "It supports transparency, user choice, and lawful processing where required",
                "It is only a design preference",
                "It slows marketing so ignore it",
                "It replaces security"
          ],
          "correctIndex": 0,
          "explanation": "Consent and transparency are core privacy principles in many contexts."
    },
    {
          "id": "eth-24",
          "type": "mcq",
          "title": "Algorithmic Fairness",
          "prompt": "An AI model performs worse for one demographic. What should happen?",
          "options": [
                "Investigate bias, measure impact, mitigate, and document limitations before deployment",
                "Hide the result",
                "Ship because average accuracy is high",
                "Blame the users"
          ],
          "correctIndex": 0,
          "explanation": "Ethical AI requires subgroup performance and impact analysis."
    },
    {
          "id": "eth-25",
          "type": "mcq",
          "title": "Explainability",
          "prompt": "Why is explainability important for high-impact automated decisions?",
          "options": [
                "Users and reviewers need understandable reasons, accountability, and recourse",
                "It makes models always perfect",
                "It removes all bias",
                "It replaces validation"
          ],
          "correctIndex": 0,
          "explanation": "Explainability supports trust, review, and challenge mechanisms."
    },
    {
          "id": "eth-26",
          "type": "mcq",
          "title": "Conflict of Interest",
          "prompt": "What is the best response to a potential conflict of interest?",
          "options": [
                "Disclose it early and recuse yourself where appropriate",
                "Hide it if no one asks",
                "Influence the decision secretly",
                "Destroy related records"
          ],
          "correctIndex": 0,
          "explanation": "Disclosure protects fairness and trust."
    },
    {
          "id": "eth-27",
          "type": "mcq",
          "title": "Gifts",
          "prompt": "A vendor offers an expensive personal gift during procurement. What should you do?",
          "options": [
                "Follow company policy, disclose it, and decline or route it appropriately",
                "Accept it privately",
                "Ask for a bigger gift",
                "Change the vendor score"
          ],
          "correctIndex": 0,
          "explanation": "Vendor gifts can create real or perceived conflicts."
    },
    {
          "id": "eth-28",
          "type": "mcq",
          "title": "Financial Misstatement",
          "prompt": "You are asked to shift expenses to make results look better. What should you do?",
          "options": [
                "Refuse, document concerns, and escalate through finance/compliance channels",
                "Do it if requested by a senior person",
                "Hide the journal entry",
                "Delete the evidence"
          ],
          "correctIndex": 0,
          "explanation": "Misstating financial results is unethical and potentially illegal."
    },
    {
          "id": "eth-29",
          "type": "mcq",
          "title": "Whistleblowing",
          "prompt": "When internal reporting fails for serious misconduct, what may be appropriate?",
          "options": [
                "Use protected external legal or regulatory channels where applicable",
                "Post confidential data publicly immediately",
                "Do nothing forever",
                "Threaten coworkers"
          ],
          "correctIndex": 0,
          "explanation": "Whistleblowing should follow lawful, protected channels."
    },
    {
          "id": "eth-30",
          "type": "mcq",
          "title": "Retaliation",
          "prompt": "What is retaliation in an ethics context?",
          "options": [
                "Punishing someone for raising a good-faith concern",
                "Giving normal performance feedback",
                "Following policy",
                "Investigating misconduct"
          ],
          "correctIndex": 0,
          "explanation": "Retaliation undermines ethical reporting and is often prohibited."
    },
    {
          "id": "eth-31",
          "type": "mcq",
          "title": "Harassment",
          "prompt": "What matters most when evaluating harassment concerns?",
          "options": [
                "Impact, pattern, power dynamics, policy, and safety",
                "Only whether the person claims it was a joke",
                "Only seniority",
                "Only whether it happened online"
          ],
          "correctIndex": 0,
          "explanation": "Harassment evaluation should consider impact and context, not only intent."
    },
    {
          "id": "eth-32",
          "type": "mcq",
          "title": "Inclusive Conduct",
          "prompt": "What is the ethical response when someone is repeatedly interrupted?",
          "options": [
                "Create space for them to finish and address the pattern respectfully",
                "Join the interruption",
                "Ignore it",
                "Tell them to speak louder later"
          ],
          "correctIndex": 0,
          "explanation": "Inclusive conduct helps ensure fair participation."
    },
    {
          "id": "eth-33",
          "type": "mcq",
          "title": "IP Ownership",
          "prompt": "Why should you avoid reusing proprietary code from a previous employer?",
          "options": [
                "It may violate intellectual property and confidentiality obligations",
                "It is always public",
                "It improves speed so it is fine",
                "No one owns code"
          ],
          "correctIndex": 0,
          "explanation": "Employer-owned proprietary work cannot be reused without permission."
    },
    {
          "id": "eth-34",
          "type": "mcq",
          "title": "Open Source",
          "prompt": "What is an ethical open-source practice?",
          "options": [
                "Follow license obligations, attribution, and usage restrictions",
                "Remove licenses",
                "Claim authorship of others’ code",
                "Ignore dependency terms"
          ],
          "correctIndex": 0,
          "explanation": "Open-source licenses create obligations that must be respected."
    },
    {
          "id": "eth-35",
          "type": "mcq",
          "title": "Security Disclosure",
          "prompt": "What should you do if you discover a vulnerability in a partner system?",
          "options": [
                "Report it through approved security channels without exploiting beyond authorization",
                "Post it online",
                "Use it for leverage",
                "Ignore scope"
          ],
          "correctIndex": 0,
          "explanation": "Responsible disclosure protects users and respects authorization boundaries."
    },
    {
          "id": "eth-36",
          "type": "mcq",
          "title": "Customer Transparency",
          "prompt": "A bug caused small financial harm to customers. What is ethical?",
          "options": [
                "Escalate, correct the harm, and communicate transparently according to policy",
                "Hide it to protect metrics",
                "Only fix future cases",
                "Delete logs"
          ],
          "correctIndex": 0,
          "explanation": "Customer-impacting harm requires remediation and honest handling."
    },
    {
          "id": "eth-37",
          "type": "mcq",
          "title": "Use of Company Resources",
          "prompt": "Why is mining cryptocurrency on company servers unethical?",
          "options": [
                "It uses company resources for personal gain and may create cost/security risk",
                "It improves utilization",
                "It is always allowed after hours",
                "It has no impact"
          ],
          "correctIndex": 0,
          "explanation": "Company resources should be used for authorized business purposes."
    },
    {
          "id": "eth-38",
          "type": "mcq",
          "title": "Document Integrity",
          "prompt": "What is the ethical issue with backdating approval documents?",
          "options": [
                "It misrepresents the timing and integrity of the approval process",
                "It makes filing easier only",
                "It is required for audits",
                "It is harmless"
          ],
          "correctIndex": 0,
          "explanation": "Records must accurately reflect what happened and when."
    },
    {
          "id": "eth-39",
          "type": "mcq",
          "title": "Professional Judgment",
          "prompt": "What should you do if a legal but harmful practice is proposed?",
          "options": [
                "Raise ethical concerns, impacts, and alternatives through appropriate channels",
                "Assume legal means ethical",
                "Stay silent always",
                "Publicly attack colleagues"
          ],
          "correctIndex": 0,
          "explanation": "Ethical judgment can require going beyond minimum legality."
    },
    {
          "id": "eth-40",
          "type": "mcq",
          "title": "Advanced Ethics Judgment",
          "prompt": "A senior leader pressures you to hide a risk from a client before contract signing. What is the strongest response?",
          "options": [
                "Refuse to mislead, document the concern, and escalate through appropriate governance channels",
                "Comply because they are senior",
                "Delete the risk assessment",
                "Tell the client confidential details without process"
          ],
          "correctIndex": 0,
          "explanation": "Integrity requires truthful representation and proper escalation under pressure."
    }
  ]
};
