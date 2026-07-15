import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const eqData = {
  id: ASSESSMENT_TYPES.eq,
  title: "Emotional Intelligence & Workplace Effectiveness Certification",
  shortTitle: "EQ",
  category: "Workplace & Soft Skills",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional EQ assessment covering self-awareness, self-management, empathy, active listening, conflict management, feedback, influence, resilience, psychological safety, and leadership behavior.",
  instructions: "Choose the response that reflects the strongest emotional intelligence and professional workplace judgment.",
  questions: [
{ id: 'eq-01', type: 'mcq', title: 'Core Concepts', prompt: 'What are the four components of EQ (Goleman)?', options: ['Self-awareness, Self-mgmt, Social awareness, Relationship mgmt', 'IQ, Skill, Luck, Talent', 'Speed, Accuracy, Memory, Logic', 'None of the above'], correctIndex: 0, explanation: 'EQ is the ability to perceive, understand, and manage emotions.' },
        { id: 'eq-02', type: 'mcq', title: 'Self-Awareness', prompt: 'What is a hallmark of high self-awareness?', options: ['Knowing everything', 'Recognizing how your emotions affect your performance and others', 'Always being right', 'Ignoring feelings'], correctIndex: 1, explanation: 'Self-awareness is the foundation of EQ.' },
        { id: 'eq-03', type: 'mcq', title: 'Self-Management', prompt: 'What is an example of "Self-Management"?', options: ['Managing a team', 'Staying composed and thinking clearly under pressure', 'Managing your schedule', 'Telling others what to do'], correctIndex: 1, explanation: 'Controlling impulsive feelings and behaviors.' },
        { id: 'eq-04', type: 'mcq', title: 'Social Awareness', prompt: 'What is "Empathy" in a professional context?', options: ['Feeling sorry for people', 'The ability to sense others\' emotions and understand their perspective', 'Being nice to everyone', 'Agreeing with everyone'], correctIndex: 1, explanation: 'Empathy allows for better collaboration and leadership.' },
        { id: 'eq-05', type: 'mcq', title: 'Relationship Mgmt', prompt: 'Which of these is a key "Relationship Management" skill?', options: ['Coding', 'Influencing others and managing conflict effectively', 'Data entry', 'Following orders'], correctIndex: 1, explanation: 'Using your awareness of your and others\' emotions to manage interactions.' },
        { id: 'eq-06', type: 'mcq', title: 'Motivation', prompt: 'What is "Intrinsic Motivation"?', options: ['Working for a bonus', 'Working because of internal passion and interest in the task itself', 'Working because of fear', 'Working for a promotion'], correctIndex: 1, explanation: 'High-EQ individuals are often driven by more than just money.' },
        { id: 'eq-07', type: 'mcq', title: 'Social Skills', prompt: 'What is "Active Listening"?', options: ['Listening to music while working', 'Paying full attention, reflecting, and responding thoughtfully', 'Nodding without listening', 'Waiting for your turn to talk'], correctIndex: 1, explanation: 'Active listening is a critical social skill.' },
        { id: 'eq-08', type: 'mcq', title: 'Emotional Regulation', prompt: 'What is the "Pause" technique in EQ?', options: ['Stopping work', 'Taking a moment between a stimulus and your response to choose a wise action', 'Freezing when stressed', 'Stopping a video'], correctIndex: 1, explanation: 'The pause prevents "Emotional Hijacking".' },
        { id: 'eq-09', type: 'mcq', title: 'Feedback', prompt: 'How does someone with high EQ react to critical feedback?', options: ['They get defensive', 'They see it as an opportunity for growth and listen without judgment', 'They ignore it', 'They quit'], correctIndex: 1, explanation: 'Feedback is a "gift" for high-EQ individuals.' },
        { id: 'eq-10', type: 'mcq', title: 'Resilience', prompt: 'What is "Resilience"?', options: ['Being strong physically', 'The ability to bounce back quickly from setbacks or failures', 'Never failing', 'Being stubborn'], correctIndex: 1, explanation: 'Resilience is powered by optimism and self-regulation.' },
        { id: 'eq-11', type: 'mcq', title: 'Influence', prompt: 'How do high-EQ leaders influence others?', options: ['By using their title and power', 'By building trust and appealing to others\' emotions and logic', 'By shouting', 'By giving rewards only'], correctIndex: 1, explanation: 'Influence is about connection, not coercion.' },
        { id: 'eq-12', type: 'mcq', title: 'Vulnerability', prompt: 'Why is showing vulnerability considered a high-EQ trait for leaders?', options: ['It shows they are weak', 'It builds trust and creates a "Psychologically Safe" environment', 'It is a mistake', 'It is for family only'], correctIndex: 1, explanation: 'Authenticity encourages others to be honest as well.' },
        { id: 'eq-13', type: 'mcq', title: 'Conflict', prompt: 'What is the EQ approach to conflict resolution?', options: ['Avoiding it', 'Addressing the underlying emotions and needs of both parties', 'Winning the argument', 'Letting the boss decide'], correctIndex: 1, explanation: 'EQ sees the "person" behind the problem.' },
        { id: 'eq-14', type: 'mcq', title: 'Body Language', prompt: 'Why should you monitor your body language in meetings?', options: ['To look like a model', 'To ensure your non-verbal cues match your verbal message', 'To stay awake', 'To look busy'], correctIndex: 1, explanation: 'Mixed signals create confusion and distrust.' },
        { id: 'eq-15', type: 'mcq', title: 'Self-Care', prompt: 'Is self-care related to EQ?', options: ['No', 'Yes, it is part of self-management to prevent burnout', 'Only for health apps', 'Only on weekends'], correctIndex: 1, explanation: 'You can\'t manage others if you haven\'t managed yourself.' },
        { id: 'eq-16', type: 'mcq', title: 'Perspective Taking', prompt: 'What is "Perspective Taking"?', options: ['Taking pictures', 'The ability to see a situation from another person\'s point of view', 'Changing your mind often', 'A type of drawing'], correctIndex: 1, explanation: 'It is a key part of social awareness.' },
        { id: 'eq-17', type: 'mcq', title: 'Optimism', prompt: 'How does optimism help in EQ?', options: ['It is a blind belief', 'It allows you to see possibilities and persist despite obstacles', 'It is a type of lie', 'It is for kids'], correctIndex: 1, explanation: 'Optimism is an explanatory style that boosts motivation.' },
        { id: 'eq-18', type: 'mcq', title: 'Adaptability', prompt: 'What is "Emotional Adaptability"?', options: ['Being a chameleon', 'The ability to adjust your emotional response to fit a new situation or culture', 'Having no personality', 'A type of yoga'], correctIndex: 1, explanation: 'Crucial for working in diverse or global teams.' },
        { id: 'eq-19', type: 'mcq', title: 'Boundaries', prompt: 'How do boundaries relate to EQ?', options: ['They are rude', 'Healthy boundaries protect your energy and define respect in relationships', 'They are for land only', 'They are hidden'], correctIndex: 1, explanation: 'Knowing where you end and others begin.' },
        { id: 'eq-20', type: 'mcq', title: 'Growth Mindset', prompt: 'What is a "Growth Mindset"?', options: ['Growing taller', 'The belief that abilities can be developed through dedication and hard work', 'Thinking you are already perfect', 'Always being busy'], correctIndex: 1, explanation: 'High-EQ individuals embrace learning and effort.' },
    {
          "id": "eq-21",
          "type": "mcq",
          "title": "Trigger Awareness",
          "prompt": "What is an emotional trigger?",
          "options": [
                "A situation or cue that strongly activates an emotional response",
                "A calendar invite only",
                "A project file",
                "A salary report"
          ],
          "correctIndex": 0,
          "explanation": "Recognizing triggers helps people manage responses before reacting impulsively."
    },
    {
          "id": "eq-22",
          "type": "mcq",
          "title": "Self-Regulation",
          "prompt": "A colleague criticizes your work in a meeting. What is the highest-EQ response?",
          "options": [
                "Pause, ask clarifying questions, and respond to the substance calmly",
                "Attack them back",
                "Leave immediately",
                "Ignore all feedback forever"
          ],
          "correctIndex": 0,
          "explanation": "Self-regulation creates space for a thoughtful response."
    },
    {
          "id": "eq-23",
          "type": "mcq",
          "title": "Empathy",
          "prompt": "What is cognitive empathy?",
          "options": [
                "Understanding another person’s perspective or mental state",
                "Agreeing with everyone",
                "Feeling physically tired",
                "Avoiding conflict"
          ],
          "correctIndex": 0,
          "explanation": "Cognitive empathy helps understand how others see a situation."
    },
    {
          "id": "eq-24",
          "type": "mcq",
          "title": "Active Listening",
          "prompt": "Which behavior shows active listening?",
          "options": [
                "Summarizing what you heard and checking accuracy",
                "Preparing your reply while they speak",
                "Interrupting frequently",
                "Changing the topic"
          ],
          "correctIndex": 0,
          "explanation": "Active listening confirms understanding and reduces miscommunication."
    },
    {
          "id": "eq-25",
          "type": "mcq",
          "title": "Conflict",
          "prompt": "What is a high-EQ first step in conflict?",
          "options": [
                "Understand each person’s interests, emotions, and facts before solving",
                "Choose a winner immediately",
                "Avoid the issue forever",
                "Escalate without context"
          ],
          "correctIndex": 0,
          "explanation": "Good conflict handling starts with understanding before proposing solutions."
    },
    {
          "id": "eq-26",
          "type": "mcq",
          "title": "Feedback",
          "prompt": "Which feedback request shows high EQ?",
          "options": [
                "Can you give me one specific example and what good would look like next time?",
                "Why are you attacking me?",
                "Do not tell me anything",
                "You are wrong"
          ],
          "correctIndex": 0,
          "explanation": "Specific examples turn feedback into actionable learning."
    },
    {
          "id": "eq-27",
          "type": "mcq",
          "title": "Influence",
          "prompt": "What makes influence emotionally intelligent?",
          "options": [
                "Understanding stakeholder needs and connecting ideas to shared goals",
                "Manipulating people with pressure",
                "Ignoring concerns",
                "Using authority only"
          ],
          "correctIndex": 0,
          "explanation": "Influence works best through trust, empathy, and mutual value."
    },
    {
          "id": "eq-28",
          "type": "mcq",
          "title": "Relationship Repair",
          "prompt": "You realize your message sounded dismissive. What should you do?",
          "options": [
                "Acknowledge it, apologize, clarify intent, and invite discussion",
                "Pretend nothing happened",
                "Blame the receiver",
                "Send more dismissive messages"
          ],
          "correctIndex": 0,
          "explanation": "Repairing relationship ruptures builds trust."
    },
    {
          "id": "eq-29",
          "type": "mcq",
          "title": "Motivation",
          "prompt": "Which behavior reflects intrinsic motivation?",
          "options": [
                "Improving a skill because the work matters and is meaningful",
                "Working only when watched",
                "Doing the minimum to avoid punishment",
                "Only chasing titles"
          ],
          "correctIndex": 0,
          "explanation": "Intrinsic motivation comes from internal purpose, mastery, or interest."
    },
    {
          "id": "eq-30",
          "type": "mcq",
          "title": "Stress Management",
          "prompt": "What is a healthy response to sustained stress?",
          "options": [
                "Prioritize, ask for support, recover intentionally, and address root causes",
                "Deny stress exists",
                "Take it out on teammates",
                "Work without sleep indefinitely"
          ],
          "correctIndex": 0,
          "explanation": "EQ includes recognizing stress and managing it sustainably."
    },
    {
          "id": "eq-31",
          "type": "mcq",
          "title": "Perspective Taking",
          "prompt": "Why is perspective taking useful?",
          "options": [
                "It helps reduce assumptions and improves collaboration",
                "It guarantees agreement",
                "It removes accountability",
                "It avoids decisions"
          ],
          "correctIndex": 0,
          "explanation": "Perspective taking improves understanding without requiring agreement."
    },
    {
          "id": "eq-32",
          "type": "mcq",
          "title": "Psychological Safety",
          "prompt": "What does psychological safety enable?",
          "options": [
                "People can speak up about ideas, risks, and mistakes without fear of humiliation",
                "No standards",
                "No feedback",
                "No decisions"
          ],
          "correctIndex": 0,
          "explanation": "Psychological safety supports learning and better team decisions."
    },
    {
          "id": "eq-33",
          "type": "mcq",
          "title": "Nonverbal Cues",
          "prompt": "Why do nonverbal cues matter?",
          "options": [
                "They can signal emotion, engagement, discomfort, or confusion",
                "They replace all words",
                "They are always accurate",
                "They do not matter remotely"
          ],
          "correctIndex": 0,
          "explanation": "Nonverbal cues provide useful signals but should be interpreted carefully."
    },
    {
          "id": "eq-34",
          "type": "mcq",
          "title": "Boundary Setting",
          "prompt": "Which boundary is professionally stated?",
          "options": [
                "I can help with this tomorrow morning; I cannot complete it tonight without dropping the client deadline.",
                "Not my problem.",
                "Stop asking me.",
                "I never help people."
          ],
          "correctIndex": 0,
          "explanation": "Healthy boundaries are clear, respectful, and tied to priorities."
    },
    {
          "id": "eq-35",
          "type": "mcq",
          "title": "Difficult Conversation",
          "prompt": "What should you do before a difficult conversation?",
          "options": [
                "Clarify purpose, facts, emotions, desired outcome, and listening questions",
                "Prepare insults",
                "Avoid all evidence",
                "Send a vague accusation"
          ],
          "correctIndex": 0,
          "explanation": "Preparation improves emotional control and conversation quality."
    },
    {
          "id": "eq-36",
          "type": "mcq",
          "title": "Leadership EQ",
          "prompt": "A leader senses low morale after a reorg. What should they do?",
          "options": [
                "Listen, acknowledge uncertainty, share what is known, and create space for concerns",
                "Ignore morale because work continues",
                "Demand positivity",
                "Avoid all communication"
          ],
          "correctIndex": 0,
          "explanation": "Emotionally intelligent leadership combines honesty, empathy, and clarity."
    },
    {
          "id": "eq-37",
          "type": "mcq",
          "title": "Accountability",
          "prompt": "High EQ accountability means:",
          "options": [
                "Owning impact, not only intent",
                "Explaining why nothing is your fault",
                "Avoiding apologies",
                "Blaming emotions"
          ],
          "correctIndex": 0,
          "explanation": "People experience impact, so accountability requires addressing it."
    },
    {
          "id": "eq-38",
          "type": "mcq",
          "title": "Cultural Awareness",
          "prompt": "How does EQ apply across cultures?",
          "options": [
                "Avoid assumptions and learn communication norms, context, and preferences",
                "Treat everyone exactly based on stereotypes",
                "Ignore differences",
                "Use only your own style"
          ],
          "correctIndex": 0,
          "explanation": "Cultural awareness improves respectful collaboration."
    },
    {
          "id": "eq-39",
          "type": "mcq",
          "title": "Burnout Signals",
          "prompt": "Which may be a sign of burnout?",
          "options": [
                "Persistent exhaustion, cynicism, reduced effectiveness, and emotional depletion",
                "One busy afternoon only",
                "High motivation",
                "Clear priorities"
          ],
          "correctIndex": 0,
          "explanation": "Burnout affects energy, attitude, and performance over time."
    },
    {
          "id": "eq-40",
          "type": "mcq",
          "title": "Advanced EQ Judgment",
          "prompt": "Two high performers are in repeated conflict. What is the strongest manager response?",
          "options": [
                "Understand patterns, clarify expectations, facilitate direct conversation, and agree on working norms",
                "Ignore it because both perform well",
                "Pick the louder person",
                "Move all work away permanently"
          ],
          "correctIndex": 0,
          "explanation": "High EQ management addresses both results and relationship patterns."
    }
  ]
};
