import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const interviewingData = {
  id: ASSESSMENT_TYPES.interviewing,
  title: "Behavioral & Technical Interviewing Professional Certification",
  shortTitle: "Interviewing",
  category: "HR & Recruitment",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional interviewing assessment covering STAR, structured interviews, competency mapping, bias reduction, scorecards, technical evaluation, candidate experience, legal risk, and hiring decision quality.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical interviewing and hiring judgment.",
  questions: [
{ id: 'iv-01', type: 'mcq', title: 'STAR Method', prompt: 'What does the "STAR" method stand for?', options: ['Situation, Task, Action, Result', 'Start, Talk, Ask, Reply', 'Strategy, Timing, Analysis, Report', 'Simple, True, Accurate, Real'], correctIndex: 0, explanation: 'The STAR method is the gold standard for behavioral answers.' },
        { id: 'iv-02', type: 'mcq', title: 'Bias', prompt: 'What is "Halo Effect" bias?', options: ['Thinking someone is an angel', 'Letting one positive trait influence your overall perception of a candidate', 'Hiring people with long hair', 'Hiring based on location'], correctIndex: 1, explanation: 'A common cognitive bias in interviewing.' },
        { id: 'iv-03', type: 'mcq', title: 'Competency Mapping', prompt: 'What is a "Competency-Based Interview"?', options: ['An interview for experts', 'An interview focused on specific skills/behaviors needed for the role', 'A quiz', 'A technical test only'], correctIndex: 1, explanation: 'Focuses on "How" tasks were performed in the past.' },
        { id: 'iv-04', type: 'mcq', title: 'Question Types', prompt: 'What is an "Open-Ended Question"?', options: ['A question with a Yes/No answer', 'A question that requires a detailed explanation (e.g., "Tell me about a time...")', 'A question with no answer', 'A question about the future'], correctIndex: 1, explanation: 'Open-ended questions encourage storytelling.' },
        { id: 'iv-05', type: 'mcq', title: 'Structured Interviewing', prompt: 'What is a "Structured Interview"?', options: ['An interview in a building', 'Asking the same set of predetermined questions to every candidate for the same role', 'A long interview', 'A panel interview'], correctIndex: 1, explanation: 'Structured interviews reduce bias and improve reliability.' },
        { id: 'iv-06', type: 'mcq', title: 'Active Listening', prompt: 'What is a key part of "Active Listening" during an interview?', options: ['Interrupting to ask more questions', 'Paraphrasing what the candidate said to ensure understanding', 'Checking your phone', 'Writing down everything verbatim'], correctIndex: 1, explanation: 'Showing you understand the candidate builds rapport and clarity.' },
        { id: 'iv-07', type: 'mcq', title: 'Culture Fit vs Add', prompt: 'What is "Culture Add"?', options: ['Hiring people exactly like the team', 'Hiring people who bring new perspectives and values to the company', 'Buying office snacks', 'A marketing term'], correctIndex: 1, explanation: 'Culture Add promotes diversity; Culture Fit can lead to groupthink.' },
        { id: 'iv-08', type: 'mcq', title: 'Probing', prompt: 'What is the purpose of a "Probing Question"?', options: ['To confuse the candidate', 'To dig deeper into a specific part of an answer to get more detail', 'To end the interview', 'To test memory'], correctIndex: 1, explanation: 'Example: "What exactly was your specific role in that project?"' },
        { id: 'iv-09', type: 'mcq', title: 'Bias - Affinity', prompt: 'What is "Affinity Bias"?', options: ['Hiring people from big companies', 'Favoring candidates who share similar backgrounds, interests, or hobbies with you', 'Hiring based on height', 'A type of technical bias'], correctIndex: 1, explanation: 'The "Me-too" bias.' },
        { id: 'iv-10', type: 'mcq', title: 'Evaluation', prompt: 'What is a "Scorecard" used for in interviewing?', options: ['To keep score of a game', 'A rubric used to rate candidates consistently against specific criteria', 'To track employee performance', 'A list of interviewers'], correctIndex: 1, explanation: 'Scorecards make hiring decisions more data-driven and objective.' },
        { id: 'iv-11', type: 'mcq', title: 'Legal Compliance', prompt: 'Which question is generally illegal/inappropriate to ask in an interview?', options: ['What are your salary expectations?', 'Are you planning to have children soon?', 'Tell me about your technical skills.', 'Why do you want to work here?'], correctIndex: 1, explanation: 'Avoid questions about protected characteristics like family status, religion, or age.' },
        { id: 'iv-12', type: 'mcq', title: 'Panel Interview', prompt: 'What is a "Panel Interview"?', options: ['An interview with a screen', 'An interview where multiple interviewers meet with one candidate simultaneously', 'A group of candidates', 'A series of back-to-back interviews'], correctIndex: 1, explanation: 'Panels save time but can be intimidating for candidates.' },
        { id: 'iv-13', type: 'mcq', title: 'Rapport Building', prompt: 'When should rapport building happen?', options: ['At the end', 'At the beginning of the interview to make the candidate comfortable', 'Never', 'During the technical part'], correctIndex: 1, explanation: 'A relaxed candidate provides more honest and detailed answers.' },
        { id: 'iv-14', type: 'mcq', title: 'Technical Interviewing', prompt: 'What is a "Whiteboard Challenge"?', options: ['Cleaning the board', 'A technical test where a candidate solves a coding or design problem on a whiteboard', 'A type of IQ test', 'A drawing contest'], correctIndex: 1, explanation: 'Tests problem-solving logic and communication under pressure.' },
        { id: 'iv-15', type: 'mcq', title: 'Body Language', prompt: 'Is candidate body language a reliable indicator of job performance?', options: ['Yes, always', 'No, it can be misleading due to nerves or cultural differences', 'Only for sales roles', 'Only for managers'], correctIndex: 1, explanation: 'Don\'t over-rely on non-verbal cues.' },
        { id: 'iv-16', type: 'mcq', title: 'Reverse Interviewing', prompt: 'What is "Reverse Interviewing"?', options: ['The candidate interviewing the company', 'Interviews in a mirror', 'Starting from the end', 'A background check'], correctIndex: 0, explanation: 'When a candidate asks questions to see if the company is a good fit for them.' },
        { id: 'iv-17', type: 'mcq', title: 'Feedback', prompt: 'How soon should interviewers submit their feedback?', options: ['After the hiring decision', 'Within 24 hours of the interview while memories are fresh', 'At the end of the week', 'Only if the candidate is good'], correctIndex: 1, explanation: 'Memory decay leads to biased and vague evaluations.' },
        { id: 'iv-18', type: 'mcq', title: 'Case Interview', prompt: 'What is a "Case Interview"?', options: ['A legal interview', 'An interview where the candidate must solve a hypothetical business problem', 'A portfolio review', 'A psychological test'], correctIndex: 1, explanation: 'Common in consulting and management roles.' },
        { id: 'iv-19', type: 'mcq', title: 'Reference Checks', prompt: 'What is the goal of a "Reference Check"?', options: ['To make friends', 'To verify the candidate\'s past performance and background with former colleagues', 'To find new leads', 'To check social media'], correctIndex: 1, explanation: 'References provide an external perspective on the candidate.' },
        { id: 'iv-20', type: 'mcq', title: 'Closing', prompt: 'What should always happen at the end of an interview?', options: ['Hiring them', 'Explaining the next steps in the process and timeline', 'Saying goodbye only', 'Asking for a discount'], correctIndex: 1, explanation: 'Managing expectations is key to a good candidate experience.' },
    {
          "id": "iv-21",
          "type": "mcq",
          "title": "Structured Scorecard",
          "prompt": "Why use an interview scorecard?",
          "options": [
                "To evaluate candidates consistently against role-specific criteria",
                "To write random notes only",
                "To rank by personality",
                "To avoid evidence"
          ],
          "correctIndex": 0,
          "explanation": "Scorecards improve fairness, consistency, and decision quality."
    },
    {
          "id": "iv-22",
          "type": "mcq",
          "title": "Rubrics",
          "prompt": "What makes a strong interview rubric?",
          "options": [
                "Defined competencies, observable behaviors, rating anchors, and evidence examples",
                "Vague feelings",
                "Only years of experience",
                "Only school name"
          ],
          "correctIndex": 0,
          "explanation": "Rubrics help interviewers assess evidence, not impressions."
    },
    {
          "id": "iv-23",
          "type": "mcq",
          "title": "Calibration",
          "prompt": "Why should interviewers calibrate before hiring?",
          "options": [
                "To align on competencies, rating standards, and evidence expectations",
                "To choose favorites in advance",
                "To skip interviews",
                "To reduce candidate questions"
          ],
          "correctIndex": 0,
          "explanation": "Calibration reduces inconsistent scoring across interviewers."
    },
    {
          "id": "iv-24",
          "type": "mcq",
          "title": "Behavioral Evidence",
          "prompt": "Which answer gives strongest behavioral evidence?",
          "options": [
                "A specific situation, action, decision, trade-off, and measurable result",
                "A vague claim of being hardworking",
                "A list of buzzwords",
                "A joke"
          ],
          "correctIndex": 0,
          "explanation": "Specific examples are more reliable than generic claims."
    },
    {
          "id": "iv-25",
          "type": "mcq",
          "title": "Technical Interview",
          "prompt": "What should a technical interviewer assess beyond final answer correctness?",
          "options": [
                "Problem-solving approach, trade-offs, communication, correctness, and debugging",
                "Only typing speed",
                "Only accent",
                "Only resume format"
          ],
          "correctIndex": 0,
          "explanation": "Technical evaluation should assess reasoning and execution."
    },
    {
          "id": "iv-26",
          "type": "mcq",
          "title": "System Design",
          "prompt": "What is important in a system design interview?",
          "options": [
                "Requirements, constraints, architecture, trade-offs, scaling, reliability, and risks",
                "Only drawing boxes",
                "Only using buzzwords",
                "Only picking a database"
          ],
          "correctIndex": 0,
          "explanation": "System design evaluates structured thinking and architectural judgment."
    },
    {
          "id": "iv-27",
          "type": "mcq",
          "title": "Candidate Experience",
          "prompt": "What improves candidate experience?",
          "options": [
                "Clear expectations, respectful communication, timely feedback, and organized interviews",
                "Surprise delays",
                "Unclear roles",
                "Hostile questioning"
          ],
          "correctIndex": 0,
          "explanation": "Candidate experience affects employer brand and fairness."
    },
    {
          "id": "iv-28",
          "type": "mcq",
          "title": "Bias Mitigation",
          "prompt": "Which practice reduces interview bias?",
          "options": [
                "Structured questions, scorecards, diverse panels, and evidence-based debriefs",
                "Unstructured chats only",
                "Hiring based on similarity",
                "Ignoring notes"
          ],
          "correctIndex": 0,
          "explanation": "Structure and evidence reduce subjective bias."
    },
    {
          "id": "iv-29",
          "type": "mcq",
          "title": "Leading Questions",
          "prompt": "Which is a leading question?",
          "options": [
                "You are good at teamwork, right?",
                "Tell me about a time you handled a team conflict.",
                "What was your role?",
                "What was the result?"
          ],
          "correctIndex": 0,
          "explanation": "Leading questions signal the desired answer."
    },
    {
          "id": "iv-30",
          "type": "mcq",
          "title": "Probing",
          "prompt": "Which probe is strongest?",
          "options": [
                "What was your specific contribution and what changed because of it?",
                "Were you amazing?",
                "Did everyone like you?",
                "Can you say that again but shorter?"
          ],
          "correctIndex": 0,
          "explanation": "Good probes clarify ownership and impact."
    },
    {
          "id": "iv-31",
          "type": "mcq",
          "title": "Legal Risk",
          "prompt": "Which interview question should be avoided?",
          "options": [
                "Are you married or planning to have children?",
                "Tell me about a relevant project.",
                "What tools have you used?",
                "How do you handle deadlines?"
          ],
          "correctIndex": 0,
          "explanation": "Questions about protected personal areas can create legal and ethical risk."
    },
    {
          "id": "iv-32",
          "type": "mcq",
          "title": "Work Sample",
          "prompt": "Why use work-sample exercises?",
          "options": [
                "They assess skills through realistic job-related tasks",
                "They replace all interviews",
                "They test only memory",
                "They are only for designers"
          ],
          "correctIndex": 0,
          "explanation": "Work samples can improve validity when relevant and fairly designed."
    },
    {
          "id": "iv-33",
          "type": "mcq",
          "title": "Take-Home Ethics",
          "prompt": "What makes a take-home assignment fair?",
          "options": [
                "Clear scope, reasonable time, relevance, and no unpaid production work",
                "Unlimited effort",
                "Ambiguous expectations",
                "Use of candidate work in production"
          ],
          "correctIndex": 0,
          "explanation": "Fair assignments respect candidate time and role relevance."
    },
    {
          "id": "iv-34",
          "type": "mcq",
          "title": "Debrief",
          "prompt": "What should happen in an interview debrief?",
          "options": [
                "Discuss evidence against criteria before making a decision",
                "Let the loudest interviewer decide",
                "Talk only about vibes",
                "Ignore scorecards"
          ],
          "correctIndex": 0,
          "explanation": "Evidence-based debriefs improve hiring quality."
    },
    {
          "id": "iv-35",
          "type": "mcq",
          "title": "Reference Checks",
          "prompt": "What is the purpose of reference checks?",
          "options": [
                "Validate work patterns, strengths, risks, and context with consent",
                "Collect gossip",
                "Bypass candidate consent",
                "Ask illegal questions"
          ],
          "correctIndex": 0,
          "explanation": "Reference checks should be structured, relevant, and respectful."
    },
    {
          "id": "iv-36",
          "type": "mcq",
          "title": "Culture Add",
          "prompt": "How is culture add different from culture fit?",
          "options": [
                "Culture add values complementary perspectives instead of sameness",
                "It means lowering standards",
                "It means hiring friends",
                "It ignores values"
          ],
          "correctIndex": 0,
          "explanation": "Culture add helps avoid homogeneity while maintaining standards."
    },
    {
          "id": "iv-37",
          "type": "mcq",
          "title": "Hiring Bar",
          "prompt": "What does maintaining the hiring bar mean?",
          "options": [
                "Hiring based on evidence that the candidate meets role standards",
                "Rejecting everyone",
                "Hiring only from famous companies",
                "Choosing the fastest interview"
          ],
          "correctIndex": 0,
          "explanation": "A hiring bar should be tied to role-relevant evidence."
    },
    {
          "id": "iv-38",
          "type": "mcq",
          "title": "Feedback",
          "prompt": "What is appropriate candidate feedback?",
          "options": [
                "Professional, role-related, and aligned with company policy",
                "Personal criticism",
                "Confidential panel comments",
                "Unverified assumptions"
          ],
          "correctIndex": 0,
          "explanation": "Feedback should be respectful and policy-compliant."
    },
    {
          "id": "iv-39",
          "type": "mcq",
          "title": "Panel Design",
          "prompt": "Why assign interview focus areas?",
          "options": [
                "To reduce duplication and cover competencies more completely",
                "To confuse candidates",
                "To make interviews longer only",
                "To avoid scorecards"
          ],
          "correctIndex": 0,
          "explanation": "Focus areas improve signal coverage and candidate experience."
    },
    {
          "id": "iv-40",
          "type": "mcq",
          "title": "Advanced Interview Judgment",
          "prompt": "A candidate is liked by everyone but has weak evidence on a critical competency. What is the best decision approach?",
          "options": [
                "Return to the rubric and decide based on role-critical evidence, not likability alone",
                "Hire based on vibes",
                "Ignore the gap",
                "Let affinity bias decide"
          ],
          "correctIndex": 0,
          "explanation": "Hiring decisions should prioritize role-critical evidence over likability."
    }
  ]
};
