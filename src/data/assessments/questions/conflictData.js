import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Conflict Resolution assessment.
// Questions progress from core concepts to difficult workplace scenarios,
// de-escalation, negotiation, power dynamics, feedback, boundaries,
// mediation, documentation, and leadership judgment.
export const conflictData = {
  id: ASSESSMENT_TYPES.conflict,
  title: 'Conflict Resolution & Workplace Communication Certification',
  shortTitle: 'Conflict Res',
  category: 'Workplace & Soft Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional assessment covering workplace conflict resolution, emotional regulation, active listening, de-escalation, feedback, negotiation, mediation, boundaries, documentation, power dynamics, and leadership judgment.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and test practical workplace judgment, not just definitions.',
  questions: [
    {
      id: 'cr-01',
      type: 'mcq',
      title: 'Core Concepts',
      prompt: 'What is the first step in resolving most workplace conflicts?',
      options: [
        'Avoid the person until the issue disappears',
        'Identify the root cause and understand the perspectives of everyone involved',
        'Immediately report the person to HR',
        'Focus on winning the argument'
      ],
      correctIndex: 1,
      explanation:
        'Effective conflict resolution starts with understanding the issue, context, and perspectives before jumping to solutions.'
    },
    {
      id: 'cr-02',
      type: 'mcq',
      title: 'Active Listening',
      prompt: 'What is active listening in conflict resolution?',
      options: [
        'Waiting quietly until it is your turn to speak',
        'Listening to understand, reflecting back what you heard, and asking clarifying questions',
        'Writing down every word without responding',
        'Agreeing with everything the other person says'
      ],
      correctIndex: 1,
      explanation:
        'Active listening shows respect, reduces defensiveness, and helps clarify the real issue.'
    },
    {
      id: 'cr-03',
      type: 'mcq',
      title: 'I-Statements',
      prompt: 'Which sentence is the best example of an I-statement?',
      options: [
        'You never listen during meetings.',
        'You are always careless with deadlines.',
        'I felt concerned when the report was delayed because it affected the client timeline.',
        'Everyone knows you caused this issue.'
      ],
      correctIndex: 2,
      explanation:
        'I-statements focus on impact and perception without attacking the other person.'
    },
    {
      id: 'cr-04',
      type: 'mcq',
      title: 'Neutral Language',
      prompt: 'Which phrase uses the most neutral language?',
      options: [
        'You were lazy with the report.',
        'The report was submitted three days after the agreed deadline.',
        'You clearly do not care about the team.',
        'This was a complete mess because of you.'
      ],
      correctIndex: 1,
      explanation:
        'Neutral language describes observable facts without blame or judgment.'
    },
    {
      id: 'cr-05',
      type: 'mcq',
      title: 'Emotional Regulation',
      prompt: 'What does emotional regulation mean during a conflict?',
      options: [
        'Pretending you have no emotions',
        'Monitoring and managing your emotional response so the discussion stays constructive',
        'Ignoring the issue completely',
        'Making the other person calm down first'
      ],
      correctIndex: 1,
      explanation:
        'Emotional regulation helps prevent escalation and supports clearer thinking.'
    },
    {
      id: 'cr-06',
      type: 'mcq',
      title: 'Empathy',
      prompt: 'What is empathy in a workplace conflict?',
      options: [
        'Feeling sorry for the other person only',
        'Understanding the other person’s perspective and feelings without necessarily agreeing',
        'Letting the other person make every decision',
        'Avoiding difficult conversations'
      ],
      correctIndex: 1,
      explanation:
        'Empathy helps people feel heard and often makes problem-solving easier.'
    },
    {
      id: 'cr-07',
      type: 'mcq',
      title: 'Professional Boundary',
      prompt: 'What is a professional boundary?',
      options: [
        'A physical wall between teams',
        'A clear expectation about acceptable workplace behavior, communication, and responsibility',
        'A rule that prevents collaboration',
        'A way to avoid all feedback'
      ],
      correctIndex: 1,
      explanation:
        'Professional boundaries help prevent confusion, overreach, disrespect, and repeated conflict.'
    },
    {
      id: 'cr-08',
      type: 'mcq',
      title: 'De-escalation',
      prompt: 'A colleague starts raising their voice during a disagreement. What is the best first response?',
      options: [
        'Raise your voice so they understand the seriousness',
        'Stay calm, lower your voice, acknowledge the concern, and suggest continuing respectfully',
        'Walk away without saying anything',
        'Immediately accuse them of being unprofessional'
      ],
      correctIndex: 1,
      explanation:
        'Staying calm and setting a respectful tone can reduce escalation.'
    },
    {
      id: 'cr-09',
      type: 'mcq',
      title: 'Timing',
      prompt: 'When is usually the best time to address a conflict?',
      options: [
        'Immediately while emotions are high',
        'When both parties are calm enough to discuss the issue constructively',
        'Only during annual performance reviews',
        'Never, because conflict should always be ignored'
      ],
      correctIndex: 1,
      explanation:
        'A short cooling-off period can help, but the issue should still be addressed before it grows.'
    },
    {
      id: 'cr-10',
      type: 'mcq',
      title: 'Root Cause',
      prompt: 'What is the Five Whys technique used for?',
      options: [
        'Asking five people for their opinion',
        'Asking why repeatedly to move from symptoms to the underlying cause',
        'Repeating the same complaint five times',
        'Creating a survey with five questions'
      ],
      correctIndex: 1,
      explanation:
        'The Five Whys technique helps identify the deeper cause behind a visible problem.'
    },
    {
      id: 'cr-11',
      type: 'mcq',
      title: 'Interests vs Positions',
      prompt: 'In negotiation, what is the difference between a position and an interest?',
      options: [
        'There is no difference',
        'A position is what someone says they want; an interest is why they want it',
        'An interest is always a job title',
        'A position is always more important than an interest'
      ],
      correctIndex: 1,
      explanation:
        'Understanding interests often reveals more flexible and constructive solutions.'
    },
    {
      id: 'cr-12',
      type: 'mcq',
      title: 'Win-Win Outcome',
      prompt: 'What is a win-win outcome?',
      options: [
        'One person wins and the other loses',
        'Both parties find a solution that addresses their core needs',
        'Both people give up everything they wanted',
        'Nobody gets a clear outcome'
      ],
      correctIndex: 1,
      explanation:
        'A win-win outcome focuses on core needs, not just fixed positions.'
    },
    {
      id: 'cr-13',
      type: 'mcq',
      title: 'Compromise',
      prompt: 'When is compromise most appropriate?',
      options: [
        'When time is limited and both parties can reasonably give up something',
        'When one side must win completely',
        'When the issue involves serious ethics violations',
        'When the facts are not understood yet'
      ],
      correctIndex: 0,
      explanation:
        'Compromise can work when speed matters and both sides can accept a partial solution.'
    },
    {
      id: 'cr-14',
      type: 'mcq',
      title: 'Collaboration',
      prompt: 'When is collaboration usually better than compromise?',
      options: [
        'When the issue is important and both parties need a durable solution',
        'When no one cares about the outcome',
        'When speed is the only priority',
        'When one person has already decided the answer'
      ],
      correctIndex: 0,
      explanation:
        'Collaboration is stronger for important issues because it seeks a solution that addresses deeper interests.'
    },
    {
      id: 'cr-15',
      type: 'mcq',
      title: 'Mediation',
      prompt: 'What is the role of a mediator?',
      options: [
        'To decide who is right and punish the wrong person',
        'To act as a neutral third party who helps people reach their own agreement',
        'To represent only the manager’s opinion',
        'To replace company policy'
      ],
      correctIndex: 1,
      explanation:
        'A mediator facilitates dialogue and resolution without taking sides or imposing a decision.'
    },
    {
      id: 'cr-16',
      type: 'mcq',
      title: 'Feedback',
      prompt: 'How should critical feedback be delivered during a workplace conflict?',
      options: [
        'Publicly, so others can learn from the mistake',
        'Privately, using specific examples and focusing on behavior and impact',
        'Through a sarcastic email',
        'By discussing the person with everyone except them'
      ],
      correctIndex: 1,
      explanation:
        'Private, specific, behavior-based feedback is more constructive and less humiliating.'
    },
    {
      id: 'cr-17',
      type: 'mcq',
      title: 'Non-Verbal Cues',
      prompt: 'Which non-verbal cue is most likely to escalate a conflict?',
      options: [
        'Open posture',
        'Nodding while listening',
        'Crossing arms, rolling eyes, and looking away',
        'Maintaining a calm facial expression'
      ],
      correctIndex: 2,
      explanation:
        'Dismissive or defensive body language can signal disrespect and increase tension.'
    },
    {
      id: 'cr-18',
      type: 'mcq',
      title: 'Power Dynamics',
      prompt: 'Why do power dynamics matter in conflict resolution?',
      options: [
        'They do not matter if everyone is professional',
        'A person with more authority may unintentionally silence or pressure others',
        'Power always makes conflict easier',
        'Only junior employees create power dynamics'
      ],
      correctIndex: 1,
      explanation:
        'Managers and senior stakeholders must create psychological safety so others can speak honestly.'
    },
    {
      id: 'cr-19',
      type: 'mcq',
      title: 'Documentation',
      prompt: 'When should a workplace conflict be documented?',
      options: [
        'Only when physical violence occurs',
        'When it is repeated, impacts performance, involves policy concerns, or requires formal follow-up',
        'Every time two people disagree',
        'Never, because documentation always makes things worse'
      ],
      correctIndex: 1,
      explanation:
        'Documentation helps clarify facts, patterns, actions taken, and compliance responsibilities.'
    },
    {
      id: 'cr-20',
      type: 'mcq',
      title: 'Self-Awareness',
      prompt: 'Why is self-awareness important in conflict resolution?',
      options: [
        'It helps you recognize your triggers, assumptions, and biases before reacting',
        'It helps you prove the other person is wrong',
        'It removes the need to listen',
        'It makes conflict disappear automatically'
      ],
      correctIndex: 0,
      explanation:
        'Self-awareness helps you respond intentionally rather than react emotionally.'
    },
    {
      id: 'cr-21',
      type: 'mcq',
      title: 'Conflict Style',
      prompt: 'According to the Thomas-Kilmann model, which style is low assertiveness and high cooperation?',
      options: ['Competing', 'Accommodating', 'Avoiding', 'Collaborating'],
      correctIndex: 1,
      explanation:
        'Accommodating means prioritizing the other person’s needs over your own.'
    },
    {
      id: 'cr-22',
      type: 'mcq',
      title: 'Avoiding Style',
      prompt: 'When can avoiding be an appropriate conflict style?',
      options: [
        'When the issue is minor, emotions are too high, or more information is needed before discussion',
        'When the issue is serious harassment',
        'When avoidance will damage trust',
        'When a decision must be made immediately'
      ],
      correctIndex: 0,
      explanation:
        'Avoiding can be useful temporarily, but it should not become a way to ignore important issues.'
    },
    {
      id: 'cr-23',
      type: 'mcq',
      title: 'Competing Style',
      prompt: 'When may a competing style be appropriate?',
      options: [
        'When urgent action is needed or a non-negotiable policy/safety issue is involved',
        'Whenever you want to win',
        'When the other person has a valid concern',
        'When collaboration would create a better long-term solution'
      ],
      correctIndex: 0,
      explanation:
        'Competing can be appropriate in urgent, safety-critical, or policy-driven situations, but it should not be overused.'
    },
    {
      id: 'cr-24',
      type: 'mcq',
      title: 'Difficult Feedback Scenario',
      prompt: 'A teammate repeatedly misses deadlines and becomes defensive when asked about it. What is the best response?',
      options: [
        'Stop assigning them work without explanation',
        'Discuss the pattern privately, share specific examples, explain impact, and agree on a plan',
        'Complain about them to the whole team',
        'Ignore the issue to avoid discomfort'
      ],
      correctIndex: 1,
      explanation:
        'A private, specific, impact-based conversation is the strongest first step for repeated performance-related conflict.'
    },
    {
      id: 'cr-25',
      type: 'mcq',
      title: 'Assumption Checking',
      prompt: 'Which question best checks assumptions during a conflict?',
      options: [
        'Why are you always difficult?',
        'Can you help me understand what led to that decision?',
        'Do you even know what you are doing?',
        'Why did you ignore everyone?'
      ],
      correctIndex: 1,
      explanation:
        'Curious, non-judgmental questions help uncover context without escalating blame.'
    },
    {
      id: 'cr-26',
      type: 'mcq',
      title: 'Reframing',
      prompt: 'A teammate says, “Your team keeps blocking us.” Which response best reframes the issue?',
      options: [
        'Your team is the real problem.',
        'It sounds like the approval process is slowing delivery. Let’s identify where the handoff is breaking down.',
        'That is not true.',
        'You should stop complaining.'
      ],
      correctIndex: 1,
      explanation:
        'Reframing moves the conversation from blame to process improvement.'
    },
    {
      id: 'cr-27',
      type: 'mcq',
      title: 'Escalation Judgment',
      prompt: 'When should a conflict be escalated to a manager, HR, or the appropriate formal channel?',
      options: [
        'Whenever someone disagrees with you',
        'When there is harassment, discrimination, threats, policy violation, safety risk, or repeated unresolved behavior',
        'Only after one year',
        'Never, because escalation is always unprofessional'
      ],
      correctIndex: 1,
      explanation:
        'Formal escalation is appropriate when the issue involves safety, policy, repeated harm, or serious misconduct.'
    },
    {
      id: 'cr-28',
      type: 'mcq',
      title: 'Safety and Threats',
      prompt: 'A coworker makes a threatening comment during an argument. What is the best response?',
      options: [
        'Treat it as a joke and continue the meeting',
        'Prioritize safety, disengage if needed, and follow the organization’s escalation or security process',
        'Threaten them back',
        'Post about it publicly'
      ],
      correctIndex: 1,
      explanation:
        'Threats should be handled as a safety concern and escalated through appropriate channels.'
    },
    {
      id: 'cr-29',
      type: 'mcq',
      title: 'Remote Conflict',
      prompt: 'Two remote teammates are misinterpreting each other’s short chat messages. What is the best next step?',
      options: [
        'Continue the argument in chat',
        'Move to a short call, clarify intent, summarize agreements, and document next steps',
        'Add more people to the chat immediately',
        'Stop communicating completely'
      ],
      correctIndex: 1,
      explanation:
        'Tone is often unclear in chat. A call can reduce misunderstanding, and written follow-up preserves clarity.'
    },
    {
      id: 'cr-30',
      type: 'mcq',
      title: 'Cultural Awareness',
      prompt: 'Why is cultural awareness important in conflict resolution?',
      options: [
        'It helps avoid assumptions about communication style, hierarchy, directness, and disagreement norms',
        'It means avoiding all difficult conversations',
        'It means every conflict is caused by culture',
        'It removes the need for clear expectations'
      ],
      correctIndex: 0,
      explanation:
        'Cultural awareness helps people interpret behavior more carefully and avoid unfair assumptions.'
    },
    {
      id: 'cr-31',
      type: 'mcq',
      title: 'Psychological Safety',
      prompt: 'A junior employee disagrees with a senior leader but seems hesitant to speak. What should the leader do?',
      options: [
        'Assume silence means agreement',
        'Invite their perspective, make it safe to disagree, and avoid punishing honest feedback',
        'Tell them to speak only if they are completely sure',
        'Move on quickly to save time'
      ],
      correctIndex: 1,
      explanation:
        'Leaders must actively create space for honest disagreement, especially when power differences exist.'
    },
    {
      id: 'cr-32',
      type: 'mcq',
      title: 'Accountability',
      prompt: 'After a conflict discussion, what should be done to prevent the same issue from recurring?',
      options: [
        'Assume everyone remembers the discussion',
        'Document agreed actions, owners, timelines, and follow-up checkpoints',
        'Avoid discussing it again',
        'Let each person interpret the outcome differently'
      ],
      correctIndex: 1,
      explanation:
        'Clear agreements and follow-up prevent ambiguity and repeated conflict.'
    },
    {
      id: 'cr-33',
      type: 'mcq',
      title: 'Negotiation Preparation',
      prompt: 'Before entering a negotiation, what should you clarify?',
      options: [
        'Only what you want to demand',
        'Your goals, interests, constraints, alternatives, and acceptable trade-offs',
        'How to make the other side lose',
        'How to avoid all concessions'
      ],
      correctIndex: 1,
      explanation:
        'Preparation improves negotiation quality by clarifying priorities, limits, and options.'
    },
    {
      id: 'cr-34',
      type: 'mcq',
      title: 'BATNA',
      prompt: 'In negotiation, what does BATNA mean?',
      options: [
        'Best Alternative to a Negotiated Agreement',
        'Basic Agreement Task Negotiation Action',
        'Business Approval Team Network Analysis',
        'Balanced Assessment of Team Needs'
      ],
      correctIndex: 0,
      explanation:
        'BATNA is your best alternative if no agreement is reached. It helps you negotiate from a realistic position.'
    },
    {
      id: 'cr-35',
      type: 'mcq',
      title: 'Repeated Conflict',
      prompt: 'Two teams repeatedly argue about unclear handoffs. What is the strongest long-term solution?',
      options: [
        'Ask people to be nicer',
        'Define ownership, handoff criteria, SLAs, communication norms, and escalation paths',
        'Tell both teams to stop discussing the issue',
        'Move all work to one person'
      ],
      correctIndex: 1,
      explanation:
        'Repeated conflict often indicates a system or process issue, not just a personality issue.'
    },
    {
      id: 'cr-36',
      type: 'mcq',
      title: 'Client Conflict',
      prompt: 'A client is angry because a deliverable does not meet expectations. What is the best response?',
      options: [
        'Tell the client they should have explained better',
        'Acknowledge the concern, clarify the gap, align on acceptance criteria, and agree on a recovery plan',
        'Avoid the client until the issue is fixed',
        'Blame the internal team'
      ],
      correctIndex: 1,
      explanation:
        'Client conflict should be handled with ownership, clarification, alignment, and recovery planning.'
    },
    {
      id: 'cr-37',
      type: 'mcq',
      title: 'Performance vs Personality',
      prompt: 'Which feedback statement is most constructive?',
      options: [
        'You are careless.',
        'The last two reports had missing validation notes, which delayed review by one day.',
        'You are not detail-oriented.',
        'Everyone is frustrated with you.'
      ],
      correctIndex: 1,
      explanation:
        'Constructive feedback focuses on observable behavior and impact, not personality labels.'
    },
    {
      id: 'cr-38',
      type: 'mcq',
      title: 'Team Meeting Conflict',
      prompt: 'During a meeting, two people start arguing and interrupting each other. What should the facilitator do?',
      options: [
        'Let them continue until one gives up',
        'Pause the discussion, restate the shared goal, give each person time to speak, and move toward next steps',
        'Take sides immediately',
        'End the meeting permanently'
      ],
      correctIndex: 1,
      explanation:
        'A facilitator should restore structure, fairness, and focus.'
    },
    {
      id: 'cr-39',
      type: 'mcq',
      title: 'Advanced Leadership Judgment',
      prompt: 'A high-performing employee is disrespectful to teammates, but leadership values their output. What is the best response?',
      options: [
        'Ignore the behavior because results matter most',
        'Address the behavior clearly, set expectations, document the pattern, and hold them accountable like everyone else',
        'Promote them to keep them happy',
        'Ask the team to tolerate it'
      ],
      correctIndex: 1,
      explanation:
        'High performance does not excuse harmful behavior. Leaders must protect team culture and accountability.'
    },
    {
      id: 'cr-40',
      type: 'mcq',
      title: 'Advanced Conflict Resolution',
      prompt: 'A conflict has become emotional, repeated, and tied to unclear ownership between teams. What is the strongest resolution approach?',
      options: [
        'Hold a structured conversation with both teams, separate facts from assumptions, define ownership, agree on process changes, document decisions, and schedule follow-up',
        'Tell both teams to solve it themselves',
        'Pick one team to blame',
        'Ignore the emotional side and only update the project tracker'
      ],
      correctIndex: 0,
      explanation:
        'Complex recurring conflicts need both interpersonal repair and structural fixes such as ownership, process, documentation, and follow-up.'
    }
  ]
};