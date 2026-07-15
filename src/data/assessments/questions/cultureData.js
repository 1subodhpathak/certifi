import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Cultural Alignment assessment.
// Questions progress from ownership and transparency to advanced workplace judgment,
// customer focus, standards, accountability, inclusion, feedback, decision-making,
// ethics, collaboration, and leadership behavior.
export const cultureData = {
  id: ASSESSMENT_TYPES.culture,
  title: 'Cultural Alignment & Workplace Excellence Certification',
  shortTitle: 'Culture',
  category: 'Organizational Values',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional assessment covering ownership, transparency, customer focus, bias for action, high standards, feedback, collaboration, accountability, learning mindset, inclusion, ethics, decision-making, and leadership behavior.',
  instructions:
    'Select the response that best reflects professional values, sound judgment, and organizational excellence. Questions move from easy to hard and test practical workplace behavior.',
  questions: [
    {
      id: 'cul-01',
      type: 'mcq',
      title: 'Ownership',
      prompt: 'A project misses a deadline because a dependency was identified too late. What is the best professional response?',
      options: [
        'Blame the dependency owner in the project channel',
        'Acknowledge the late escalation, explain the impact, propose a recovery plan, and improve dependency tracking',
        'Say “I told you so” because the risk was obvious',
        'Ignore the issue and move to the next project'
      ],
      correctIndex: 1,
      explanation:
        'Ownership means acknowledging your role, solving the immediate problem, and improving the system to prevent recurrence.'
    },
    {
      id: 'cul-02',
      type: 'mcq',
      title: 'Transparency',
      prompt: 'You have a high-stakes leadership meeting, but the data has known quality issues. What should you do?',
      options: [
        'Present the data as final to avoid concern',
        'Share the current findings with clear caveats, known limitations, and a validation plan',
        'Cancel the meeting without explanation',
        'Wait until the data is perfect, even if leadership needs a timely update'
      ],
      correctIndex: 1,
      explanation:
        'Professional transparency means being honest about limitations while still helping stakeholders make informed decisions.'
    },
    {
      id: 'cul-03',
      type: 'mcq',
      title: 'Bias for Action',
      prompt: 'You are 70% confident in a low-risk, reversible decision. What is the most aligned response?',
      options: [
        'Wait until you are 100% certain',
        'Make the decision, communicate the assumptions, monitor results, and adjust if needed',
        'Ask every stakeholder to approve before moving',
        'Avoid making the decision'
      ],
      correctIndex: 1,
      explanation:
        'Bias for action favors thoughtful speed for reversible decisions, while still tracking outcomes and learning.'
    },
    {
      id: 'cul-04',
      type: 'mcq',
      title: 'High-Stakes Judgment',
      prompt: 'A decision is irreversible, expensive, and affects customer data security. What should you do?',
      options: [
        'Move fast because all decisions need speed',
        'Pause for deeper review, risk assessment, and approval from the right stakeholders',
        'Let the newest team member decide',
        'Ignore security concerns if the deadline is near'
      ],
      correctIndex: 1,
      explanation:
        'Bias for action does not mean recklessness. High-impact irreversible decisions require stronger evidence and governance.'
    },
    {
      id: 'cul-05',
      type: 'mcq',
      title: 'Customer Focus',
      prompt: 'A feature is easier for the internal team but creates extra work for customers. What should guide the decision?',
      options: [
        'Internal convenience only',
        'Customer impact, usability, business value, and long-term trust',
        'The fastest engineering shortcut',
        'Whichever option avoids discussion'
      ],
      correctIndex: 1,
      explanation:
        'Customer-focused cultures prioritize customer outcomes while balancing feasibility and business context.'
    },
    {
      id: 'cul-06',
      type: 'mcq',
      title: 'Disagree and Commit',
      prompt: 'You strongly disagreed with a strategy, but the team made a final decision after discussion. What should you do?',
      options: [
        'Quietly work against the plan',
        'Support the decision fully, execute professionally, and help make it successful',
        'Keep reminding the team that you disagreed',
        'Stop contributing to the project'
      ],
      correctIndex: 1,
      explanation:
        'After healthy debate and a final decision, professionals commit to execution rather than undermine the team.'
    },
    {
      id: 'cul-07',
      type: 'mcq',
      title: 'Constructive Disagreement',
      prompt: 'What is the best way to disagree with a senior stakeholder?',
      options: [
        'Avoid disagreement completely',
        'Use evidence, explain the risk, offer an alternative, and stay respectful',
        'Say they are wrong in front of everyone',
        'Complain privately but stay silent in the meeting'
      ],
      correctIndex: 1,
      explanation:
        'Strong cultures encourage respectful disagreement supported by facts, risks, and alternatives.'
    },
    {
      id: 'cul-08',
      type: 'mcq',
      title: 'Earn Trust',
      prompt: 'You accidentally broke a minor feature in production. What should you do?',
      options: [
        'Hope no one notices',
        'Inform the team, fix it, explain the impact, and document the prevention step',
        'Blame a system update',
        'Only fix it if a customer complains'
      ],
      correctIndex: 1,
      explanation:
        'Trust is built by owning mistakes quickly, communicating clearly, and preventing repeat issues.'
    },
    {
      id: 'cul-09',
      type: 'mcq',
      title: 'Accountability',
      prompt: 'A commitment is at risk. What is the strongest update to your manager?',
      options: [
        'It might be delayed. I will let you know later.',
        'The API dependency is delayed by two days. I am escalating today and can either ship a partial version Friday or the full version Monday.',
        'The other team caused the issue.',
        'No update until I know everything.'
      ],
      correctIndex: 1,
      explanation:
        'Strong accountability communicates the issue, impact, action taken, and decision options.'
    },
    {
      id: 'cul-10',
      type: 'mcq',
      title: 'High Standards',
      prompt: 'A client report is mostly correct but has formatting errors and unclear labels. What is the best response?',
      options: [
        'Send it because the data is mostly correct',
        'Fix the errors and improve clarity before sending',
        'Wait for the client to point out the issues',
        'Tell a junior teammate to fix it next time'
      ],
      correctIndex: 1,
      explanation:
        'High standards apply to accuracy, clarity, presentation, and customer trust.'
    },
    {
      id: 'cul-11',
      type: 'mcq',
      title: 'Deep Dive',
      prompt: 'A dashboard shows a perfect 100% success rate. What is the best instinct?',
      options: [
        'Celebrate immediately',
        'Validate tracking, definitions, sample size, and edge cases',
        'Ignore the metric',
        'Remove the dashboard'
      ],
      correctIndex: 1,
      explanation:
        'Exceptional professionals investigate unusually perfect or surprising metrics before accepting them.'
    },
    {
      id: 'cul-12',
      type: 'mcq',
      title: 'Data Integrity',
      prompt: 'A metric improved dramatically after a tracking change. What should you do before claiming business success?',
      options: [
        'Announce the improvement immediately',
        'Check whether the change is real or caused by instrumentation, duplicate events, or definition changes',
        'Ignore the improvement',
        'Delete the old data'
      ],
      correctIndex: 1,
      explanation:
        'Metric changes must be validated for data quality before being interpreted as business performance changes.'
    },
    {
      id: 'cul-13',
      type: 'mcq',
      title: 'Learn and Be Curious',
      prompt: 'A new technology is introduced that you do not understand. What is the best response?',
      options: [
        'Ignore it because it is outside your comfort zone',
        'Learn the fundamentals, understand use cases, and identify where it may or may not help',
        'Reject it immediately as hype',
        'Ask others to handle everything'
      ],
      correctIndex: 1,
      explanation:
        'A learning mindset combines curiosity with practical evaluation.'
    },
    {
      id: 'cul-14',
      type: 'mcq',
      title: 'Growth Mindset',
      prompt: 'A peer gives you direct but fair feedback. What is the best reaction?',
      options: [
        'Defend yourself immediately',
        'Thank them, ask for specific examples, reflect, and decide what to improve',
        'Avoid the peer in the future',
        'Give them negative feedback in return'
      ],
      correctIndex: 1,
      explanation:
        'Growth cultures depend on receiving feedback with maturity and converting it into improvement.'
    },
    {
      id: 'cul-15',
      type: 'mcq',
      title: 'Humility',
      prompt: 'You are proven wrong in a technical debate by better evidence. What should you do?',
      options: [
        'Continue arguing to protect your image',
        'Acknowledge the better evidence and update your view',
        'Stop participating in the project',
        'Make the debate personal'
      ],
      correctIndex: 1,
      explanation:
        'Being effective requires intellectual humility and willingness to change your mind when evidence improves.'
    },
    {
      id: 'cul-16',
      type: 'mcq',
      title: 'Frugality',
      prompt: 'Your team needs a new tool. What is the best approach?',
      options: [
        'Buy the most expensive enterprise plan immediately',
        'Evaluate existing tools, open-source options, total cost, security, and actual requirements before buying',
        'Ask for the largest possible budget',
        'Delay the project until someone else decides'
      ],
      correctIndex: 1,
      explanation:
        'Frugality means resourcefulness, not cheapness. The best choice balances value, cost, risk, and fit.'
    },
    {
      id: 'cul-17',
      type: 'mcq',
      title: 'Invent and Simplify',
      prompt: 'A recurring manual process takes four hours every week. What is the strongest response?',
      options: [
        'Continue doing it manually forever',
        'Simplify or automate the process if the time saved justifies the effort',
        'Ask for more people before understanding the process',
        'Document that the process is painful and stop there'
      ],
      correctIndex: 1,
      explanation:
        'Innovation often means simplifying repeated work, but the solution should be worth the investment.'
    },
    {
      id: 'cul-18',
      type: 'mcq',
      title: 'Think Big',
      prompt: 'A teammate suggests a small fix for a recurring issue. What should you add?',
      options: [
        'Agree and avoid further analysis',
        'Consider whether a scalable process, automation, or system improvement can prevent the issue long term',
        'Say it is too much work without checking',
        'Keep the issue manual because it is familiar'
      ],
      correctIndex: 1,
      explanation:
        'Thinking big means solving repeated problems at the right level, not just patching symptoms.'
    },
    {
      id: 'cul-19',
      type: 'mcq',
      title: 'Deliver Results',
      prompt: 'You face several obstacles before a deadline. What is most important?',
      options: [
        'Explaining why delivery is impossible',
        'Reprioritizing, escalating blockers early, making trade-offs, and delivering the most valuable outcome possible',
        'Blaming the obstacles',
        'Waiting until the deadline to mention the risks'
      ],
      correctIndex: 1,
      explanation:
        'Delivering results requires proactive risk management, prioritization, and communication.'
    },
    {
      id: 'cul-20',
      type: 'mcq',
      title: 'No Task Beneath You',
      prompt: 'You notice a small issue in a shared team artifact that is not technically your responsibility. What is the best response?',
      options: [
        'Ignore it because it is not your job',
        'Fix it if you can or notify the owner clearly',
        'Complain about the owner',
        'Wait for leadership to notice'
      ],
      correctIndex: 1,
      explanation:
        'Ownership means caring about the team outcome, not only your assigned task list.'
    },
    {
      id: 'cul-21',
      type: 'mcq',
      title: 'Psychological Safety',
      prompt: 'A junior teammate seems hesitant to disagree in a meeting. What should a leader do?',
      options: [
        'Assume silence means agreement',
        'Invite their perspective, make disagreement safe, and avoid punishing honest input',
        'Move on quickly to save time',
        'Only ask senior people for opinions'
      ],
      correctIndex: 1,
      explanation:
        'High-performance cultures need psychological safety so people can raise concerns before problems grow.'
    },
    {
      id: 'cul-22',
      type: 'mcq',
      title: 'Inclusion',
      prompt: 'A few voices dominate every meeting. What is the best team behavior?',
      options: [
        'Let the loudest people decide',
        'Create space for quieter participants and ask for input from people closest to the work',
        'End the meeting immediately',
        'Assume quiet people have no ideas'
      ],
      correctIndex: 1,
      explanation:
        'Inclusive teams access better information by making space for diverse perspectives.'
    },
    {
      id: 'cul-23',
      type: 'mcq',
      title: 'Respectful Workplace',
      prompt: 'A high performer repeatedly behaves disrespectfully toward teammates. What should leadership do?',
      options: [
        'Ignore it because their output is strong',
        'Address the behavior, set clear expectations, document the pattern, and hold them accountable',
        'Promote them to keep them satisfied',
        'Tell the team to tolerate it'
      ],
      correctIndex: 1,
      explanation:
        'High performance does not excuse behavior that damages trust, safety, and team effectiveness.'
    },
    {
      id: 'cul-24',
      type: 'mcq',
      title: 'Feedback Culture',
      prompt: 'What makes feedback most useful?',
      options: [
        'It is vague and delayed',
        'It is specific, timely, behavior-based, and tied to impact',
        'It focuses on personality labels',
        'It is shared only as gossip'
      ],
      correctIndex: 1,
      explanation:
        'Useful feedback helps people understand what happened, why it matters, and what to improve.'
    },
    {
      id: 'cul-25',
      type: 'mcq',
      title: 'Performance Feedback',
      prompt: 'Which feedback statement is strongest?',
      options: [
        'You are careless.',
        'The last two client updates missed the risk section, which made it harder for stakeholders to understand launch readiness.',
        'Everyone is frustrated with your work.',
        'You need to be better.'
      ],
      correctIndex: 1,
      explanation:
        'Strong feedback focuses on observable behavior and business impact, not personal judgment.'
    },
    {
      id: 'cul-26',
      type: 'mcq',
      title: 'Collaboration',
      prompt: 'Two teams disagree about ownership of a recurring task. What is the best resolution?',
      options: [
        'Let both teams keep arguing',
        'Clarify ownership, handoff criteria, SLA, escalation path, and documentation',
        'Assign blame to one team',
        'Avoid the topic'
      ],
      correctIndex: 1,
      explanation:
        'Recurring ownership conflict is often a process design issue that needs clarity and documentation.'
    },
    {
      id: 'cul-27',
      type: 'mcq',
      title: 'Cross-Functional Work',
      prompt: 'A cross-functional project is delayed because each team optimized only for its own goals. What value is missing?',
      options: [
        'Local optimization over company outcomes',
        'Shared ownership and alignment around the broader customer/business outcome',
        'Avoiding communication',
        'Competing for credit'
      ],
      correctIndex: 1,
      explanation:
        'Cross-functional excellence requires optimizing for the shared outcome, not only individual team metrics.'
    },
    {
      id: 'cul-28',
      type: 'mcq',
      title: 'Ethics',
      prompt: 'You discover a metric is being presented in a misleading way to make results look better. What should you do?',
      options: [
        'Ignore it because the result looks good',
        'Raise the concern, correct the interpretation, and ensure stakeholders see the full context',
        'Use the metric because leadership likes it',
        'Delete the evidence'
      ],
      correctIndex: 1,
      explanation:
        'Ethical cultures require accurate representation of data, especially when decisions depend on it.'
    },
    {
      id: 'cul-29',
      type: 'mcq',
      title: 'Integrity',
      prompt: 'A customer asks whether a feature is available today. It is still in development. What is the best answer?',
      options: [
        'Say yes to avoid losing the customer',
        'Explain honestly that it is in development and share the expected timeline or alternative if available',
        'Avoid answering',
        'Blame the product team'
      ],
      correctIndex: 1,
      explanation:
        'Trust is built through honest, accurate communication, not overpromising.'
    },
    {
      id: 'cul-30',
      type: 'mcq',
      title: 'Confidentiality',
      prompt: 'You receive confidential customer data by mistake. What should you do?',
      options: [
        'Forward it to teammates for curiosity',
        'Stop using it, notify the appropriate owner/security process, and follow data handling policy',
        'Save a local copy just in case',
        'Discuss it casually with others'
      ],
      correctIndex: 1,
      explanation:
        'Confidential data must be handled according to policy and need-to-know principles.'
    },
    {
      id: 'cul-31',
      type: 'mcq',
      title: 'Decision Quality',
      prompt: 'What makes a decision memo strong?',
      options: [
        'A single preferred opinion without context',
        'Clear problem framing, options, trade-offs, risks, evidence, recommendation, and decision owner',
        'A long document with no conclusion',
        'Only screenshots'
      ],
      correctIndex: 1,
      explanation:
        'Strong decision documents make reasoning explicit and help stakeholders align.'
    },
    {
      id: 'cul-32',
      type: 'mcq',
      title: 'Escalation',
      prompt: 'When is escalation healthy?',
      options: [
        'When used to punish another team',
        'When a decision, blocker, risk, or dependency cannot be resolved at the current level and needs timely support',
        'Whenever someone disagrees with you',
        'Never, because escalation is always political'
      ],
      correctIndex: 1,
      explanation:
        'Healthy escalation is about unblocking outcomes, not blaming people.'
    },
    {
      id: 'cul-33',
      type: 'mcq',
      title: 'Meeting Culture',
      prompt: 'What is the best way to run an effective decision meeting?',
      options: [
        'Invite everyone and discuss without an agenda',
        'Define the decision needed, share context beforehand, focus discussion, assign actions, and document outcomes',
        'Let the meeting continue until everyone is tired',
        'Avoid writing down decisions'
      ],
      correctIndex: 1,
      explanation:
        'Good meeting culture respects time and turns discussion into decisions and actions.'
    },
    {
      id: 'cul-34',
      type: 'mcq',
      title: 'Remote Work Culture',
      prompt: 'In a remote team, what behavior best supports alignment?',
      options: [
        'Keeping decisions only in private chats',
        'Writing clear updates, documenting decisions, clarifying owners, and using async communication thoughtfully',
        'Assuming everyone heard everything',
        'Avoiding written communication'
      ],
      correctIndex: 1,
      explanation:
        'Remote teams depend heavily on clarity, documentation, ownership, and thoughtful communication.'
    },
    {
      id: 'cul-35',
      type: 'mcq',
      title: 'Recognition',
      prompt: 'What is the healthiest way to recognize team success?',
      options: [
        'Take credit as the project lead',
        'Credit the people who contributed and explain the behaviors that created the outcome',
        'Ignore the team and move on',
        'Praise only the most senior person'
      ],
      correctIndex: 1,
      explanation:
        'Recognition reinforces the right behaviors and builds trust when credit is shared fairly.'
    },
    {
      id: 'cul-36',
      type: 'mcq',
      title: 'Resilience',
      prompt: 'A launch fails despite strong effort. What is the best cultural response?',
      options: [
        'Find someone to blame immediately',
        'Run a blameless review, identify lessons, fix systemic issues, and apply learning to the next launch',
        'Hide the failure',
        'Avoid future launches'
      ],
      correctIndex: 1,
      explanation:
        'Resilient cultures learn from failure without ignoring accountability.'
    },
    {
      id: 'cul-37',
      type: 'mcq',
      title: 'Sustainable Performance',
      prompt: 'A teammate appears burned out and is making mistakes. What is the best peer response?',
      options: [
        'Ignore it because it is not your issue',
        'Check in respectfully, offer support, encourage prioritization, and escalate workload concerns if needed',
        'Tell others they are weak',
        'Give them more work'
      ],
      correctIndex: 1,
      explanation:
        'High-performance cultures should be sustainable. Supporting teammates helps protect quality and well-being.'
    },
    {
      id: 'cul-38',
      type: 'mcq',
      title: 'Hiring Bar',
      prompt: 'You need to hire quickly, but the candidate is only a weak fit for the role. What is the best response?',
      options: [
        'Hire them just to fill the seat',
        'Keep the bar high and continue searching or adjust the plan transparently',
        'Hire and hope the problems disappear',
        'Lower the expectations for the role permanently'
      ],
      correctIndex: 1,
      explanation:
        'A rushed weak hire can create long-term performance and culture costs.'
    },
    {
      id: 'cul-39',
      type: 'mcq',
      title: 'Advanced Cultural Judgment',
      prompt: 'A team is moving fast but repeatedly creates rework because decisions are poorly documented. What is the strongest improvement?',
      options: [
        'Slow every decision dramatically',
        'Keep speed but add lightweight decision records, clear owners, assumptions, and review checkpoints',
        'Stop documenting completely',
        'Blame individuals for every rework cycle'
      ],
      correctIndex: 1,
      explanation:
        'High-performance culture balances speed with enough structure to reduce repeated mistakes.'
    },
    {
      id: 'cul-40',
      type: 'mcq',
      title: 'Executive-Level Cultural Alignment',
      prompt: 'A leader must choose between a short-term revenue win that may damage customer trust and a slower path that protects long-term credibility. What is the strongest cultural decision?',
      options: [
        'Choose short-term revenue no matter what',
        'Evaluate the trade-off transparently and prioritize long-term customer trust if the short-term win creates meaningful ethical or reputational risk',
        'Avoid making a decision',
        'Hide the risk from stakeholders'
      ],
      correctIndex: 1,
      explanation:
        'Strong cultures do not sacrifice long-term trust, ethics, and credibility for short-term gains without transparent evaluation.'
    }
  ]
};