import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainPrData = {
  id: ASSESSMENT_TYPES.domain_pr,
  title: "Public Relations Domain Professional Certification",
  shortTitle: "PR Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional PR assessment covering media relations, press releases, crisis communication, reputation, stakeholder messaging, PESO strategy, thought leadership, spokesperson preparation, measurement, and ethics.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "pr-01",
      type: "mcq",
      title: "Public relations",
      prompt: "In the Public Relations domain, what does \"Public relations\" mean?",
      options: [
        "a tailored story suggestion sent to a journalist or outlet",
        "managing relationships, reputation, trust, and communication between an organization and its stakeholders",
        "tracking media coverage, sentiment, mentions, and emerging issues",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 1,
      explanation: "Managing relationships, reputation, trust, and communication between an organization and its stakeholders."
    },
    {
      id: "pr-02",
      type: "mcq",
      title: "Press release",
      prompt: "In the Public Relations domain, what does \"Press release\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "communication strategy used to protect stakeholders and reputation during a serious issue",
        "advertising or sponsored placement purchased to reach an audience",
        "an official written statement issued to media about news or an announcement",
      ],
      correctIndex: 3,
      explanation: "An official written statement issued to media about news or an announcement."
    },
    {
      id: "pr-03",
      type: "mcq",
      title: "Media pitch",
      prompt: "In the Public Relations domain, what does \"Media pitch\" mean?",
      options: [
        "a tailored story suggestion sent to a journalist or outlet",
        "A temporary file naming convention only",
        "standard organization description included at the end of a press release",
        "advertising or sponsored placement purchased to reach an audience",
      ],
      correctIndex: 0,
      explanation: "A tailored story suggestion sent to a journalist or outlet."
    },
    {
      id: "pr-04",
      type: "mcq",
      title: "Earned media",
      prompt: "In the Public Relations domain, what does \"Earned media\" mean?",
      options: [
        "coverage gained through editorial interest rather than paid placement",
        "A social media caption format",
        "brief initial statement acknowledging a situation before all facts are known",
        "a clear, consistent core point the organization wants audiences to understand",
      ],
      correctIndex: 0,
      explanation: "Coverage gained through editorial interest rather than paid placement."
    },
    {
      id: "pr-05",
      type: "mcq",
      title: "Owned media",
      prompt: "In the Public Relations domain, what does \"Owned media\" mean?",
      options: [
        "structured messaging framework with core message, pillars, proof points, and audience needs",
        "brand-controlled channels such as website, blog, newsletter, or newsroom",
        "A customer service greeting script",
        "an official written statement issued to media about news or an announcement",
      ],
      correctIndex: 1,
      explanation: "Brand-controlled channels such as website, blog, newsletter, or newsroom."
    },
    {
      id: "pr-06",
      type: "mcq",
      title: "Shared media",
      prompt: "In the Public Relations domain, what does \"Shared media\" mean?",
      options: [
        "prepared answers to likely stakeholder or media questions",
        "An office administration policy only",
        "tracking media coverage, sentiment, mentions, and emerging issues",
        "social and community channels where content can be shared and discussed",
      ],
      correctIndex: 3,
      explanation: "Social and community channels where content can be shared and discussed."
    },
    {
      id: "pr-07",
      type: "mcq",
      title: "Paid media",
      prompt: "In the Public Relations domain, what does \"Paid media\" mean?",
      options: [
        "brand-controlled channels such as website, blog, newsletter, or newsroom",
        "advertising or sponsored placement purchased to reach an audience",
        "A random sales slogan with no technical meaning",
        "standard organization description included at the end of a press release",
      ],
      correctIndex: 1,
      explanation: "Advertising or sponsored placement purchased to reach an audience."
    },
    {
      id: "pr-08",
      type: "mcq",
      title: "PESO model",
      prompt: "In the Public Relations domain, what does \"PESO model\" mean?",
      options: [
        "integrated communications framework combining paid, earned, shared, and owned media",
        "a clear, consistent core point the organization wants audiences to understand",
        "A manual workaround with no control value",
        "positioning an organization or executive as a credible authority through insight and expertise",
      ],
      correctIndex: 0,
      explanation: "Integrated communications framework combining paid, earned, shared, and owned media."
    },
    {
      id: "pr-09",
      type: "mcq",
      title: "Crisis communication",
      prompt: "In the Public Relations domain, what does \"Crisis communication\" mean?",
      options: [
        "cross-functional response group coordinating facts, decisions, messaging, and updates",
        "truthful, transparent communication that avoids manipulation, hidden conflicts, and misleading claims",
        "communication strategy used to protect stakeholders and reputation during a serious issue",
        "A visual branding element only",
      ],
      correctIndex: 2,
      explanation: "Communication strategy used to protect stakeholders and reputation during a serious issue."
    },
    {
      id: "pr-10",
      type: "mcq",
      title: "Holding statement",
      prompt: "In the Public Relations domain, what does \"Holding statement\" mean?",
      options: [
        "identification of audiences affected by or influential to a communication issue",
        "brief initial statement acknowledging a situation before all facts are known",
        "A meeting agenda template",
        "information shared with a journalist under agreed restrictions on attribution or use",
      ],
      correctIndex: 1,
      explanation: "Brief initial statement acknowledging a situation before all facts are known."
    },
    {
      id: "pr-11",
      type: "mcq",
      title: "Golden hour",
      prompt: "In the Public Relations domain, what does \"Golden hour\" mean?",
      options: [
        "an official written statement issued to media about news or an announcement",
        "A payroll-only process unrelated to this domain",
        "the early period of a crisis when timely response strongly shapes perception",
        "managing relationships, reputation, trust, and communication between an organization and its stakeholders",
      ],
      correctIndex: 2,
      explanation: "The early period of a crisis when timely response strongly shapes perception."
    },
    {
      id: "pr-12",
      type: "mcq",
      title: "Spokesperson",
      prompt: "In the Public Relations domain, what does \"Spokesperson\" mean?",
      options: [
        "authorized representative who communicates on behalf of an organization",
        "A design color choice with no operational meaning",
        "positioning an organization or executive as a credible authority through insight and expertise",
        "tracking media coverage, sentiment, mentions, and emerging issues",
      ],
      correctIndex: 0,
      explanation: "Authorized representative who communicates on behalf of an organization."
    },
    {
      id: "pr-13",
      type: "mcq",
      title: "Key message",
      prompt: "In the Public Relations domain, what does \"Key message\" mean?",
      options: [
        "social and community channels where content can be shared and discussed",
        "coverage gained through editorial interest rather than paid placement",
        "A temporary file naming convention only",
        "a clear, consistent core point the organization wants audiences to understand",
      ],
      correctIndex: 3,
      explanation: "A clear, consistent core point the organization wants audiences to understand."
    },
    {
      id: "pr-14",
      type: "mcq",
      title: "Message house",
      prompt: "In the Public Relations domain, what does \"Message house\" mean?",
      options: [
        "authorized representative who communicates on behalf of an organization",
        "A social media caption format",
        "social and community channels where content can be shared and discussed",
        "structured messaging framework with core message, pillars, proof points, and audience needs",
      ],
      correctIndex: 3,
      explanation: "Structured messaging framework with core message, pillars, proof points, and audience needs."
    },
    {
      id: "pr-15",
      type: "mcq",
      title: "Boilerplate",
      prompt: "In the Public Relations domain, what does \"Boilerplate\" mean?",
      options: [
        "standard organization description included at the end of a press release",
        "agreement that information will not be published before a specified time",
        "brief initial statement acknowledging a situation before all facts are known",
        "A customer service greeting script",
      ],
      correctIndex: 0,
      explanation: "Standard organization description included at the end of a press release."
    },
    {
      id: "pr-16",
      type: "mcq",
      title: "Embargo",
      prompt: "In the Public Relations domain, what does \"Embargo\" mean?",
      options: [
        "agreement that information will not be published before a specified time",
        "brand-controlled channels such as website, blog, newsletter, or newsroom",
        "managing relationships, reputation, trust, and communication between an organization and its stakeholders",
        "An office administration policy only",
      ],
      correctIndex: 0,
      explanation: "Agreement that information will not be published before a specified time."
    },
    {
      id: "pr-17",
      type: "mcq",
      title: "Off the record",
      prompt: "In the Public Relations domain, what does \"Off the record\" mean?",
      options: [
        "A random sales slogan with no technical meaning",
        "authorized representative who communicates on behalf of an organization",
        "standard organization description included at the end of a press release",
        "information shared with a journalist under agreed restrictions on attribution or use",
      ],
      correctIndex: 3,
      explanation: "Information shared with a journalist under agreed restrictions on attribution or use."
    },
    {
      id: "pr-18",
      type: "mcq",
      title: "Reputation management",
      prompt: "In the Public Relations domain, what does \"Reputation management\" mean?",
      options: [
        "protecting and improving how an organization is perceived by stakeholders",
        "assessment of whether coverage or conversation is positive, negative, or neutral",
        "tracking media coverage, sentiment, mentions, and emerging issues",
        "A manual workaround with no control value",
      ],
      correctIndex: 0,
      explanation: "Protecting and improving how an organization is perceived by stakeholders."
    },
    {
      id: "pr-19",
      type: "mcq",
      title: "Thought leadership",
      prompt: "In the Public Relations domain, what does \"Thought leadership\" mean?",
      options: [
        "A visual branding element only",
        "positioning an organization or executive as a credible authority through insight and expertise",
        "structured messaging framework with core message, pillars, proof points, and audience needs",
        "a tailored story suggestion sent to a journalist or outlet",
      ],
      correctIndex: 1,
      explanation: "Positioning an organization or executive as a credible authority through insight and expertise."
    },
    {
      id: "pr-20",
      type: "mcq",
      title: "Media monitoring",
      prompt: "In the Public Relations domain, what does \"Media monitoring\" mean?",
      options: [
        "brand-controlled channels such as website, blog, newsletter, or newsroom",
        "A meeting agenda template",
        "agreement that information will not be published before a specified time",
        "tracking media coverage, sentiment, mentions, and emerging issues",
      ],
      correctIndex: 3,
      explanation: "Tracking media coverage, sentiment, mentions, and emerging issues."
    },
    {
      id: "pr-21",
      type: "mcq",
      title: "Sentiment analysis",
      prompt: "In the Public Relations domain, what does \"Sentiment analysis\" mean?",
      options: [
        "assessment of whether coverage or conversation is positive, negative, or neutral",
        "A payroll-only process unrelated to this domain",
        "protecting and improving how an organization is perceived by stakeholders",
        "identification of audiences affected by or influential to a communication issue",
      ],
      correctIndex: 0,
      explanation: "Assessment of whether coverage or conversation is positive, negative, or neutral."
    },
    {
      id: "pr-22",
      type: "mcq",
      title: "Share of voice",
      prompt: "In the Public Relations domain, what does \"Share of voice\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "the early period of a crisis when timely response strongly shapes perception",
        "assessment of whether coverage or conversation is positive, negative, or neutral",
        "a measure of brand visibility compared with competitors in media or conversation",
      ],
      correctIndex: 3,
      explanation: "A measure of brand visibility compared with competitors in media or conversation."
    },
    {
      id: "pr-23",
      type: "mcq",
      title: "Stakeholder map",
      prompt: "In the Public Relations domain, what does \"Stakeholder map\" mean?",
      options: [
        "A temporary file naming convention only",
        "communication strategy used to protect stakeholders and reputation during a serious issue",
        "identification of audiences affected by or influential to a communication issue",
        "potential harm to trust, credibility, public perception, or stakeholder confidence",
      ],
      correctIndex: 2,
      explanation: "Identification of audiences affected by or influential to a communication issue."
    },
    {
      id: "pr-24",
      type: "mcq",
      title: "Crisis war room",
      prompt: "In the Public Relations domain, what does \"Crisis war room\" mean?",
      options: [
        "A social media caption format",
        "identification of audiences affected by or influential to a communication issue",
        "assessment of whether coverage or conversation is positive, negative, or neutral",
        "cross-functional response group coordinating facts, decisions, messaging, and updates",
      ],
      correctIndex: 3,
      explanation: "Cross-functional response group coordinating facts, decisions, messaging, and updates."
    },
    {
      id: "pr-25",
      type: "mcq",
      title: "Q&A document",
      prompt: "In the Public Relations domain, what does \"Q&A document\" mean?",
      options: [
        "A customer service greeting script",
        "prepared answers to likely stakeholder or media questions",
        "truthful, transparent communication that avoids manipulation, hidden conflicts, and misleading claims",
        "advertising or sponsored placement purchased to reach an audience",
      ],
      correctIndex: 1,
      explanation: "Prepared answers to likely stakeholder or media questions."
    },
    {
      id: "pr-26",
      type: "mcq",
      title: "Reputation risk",
      prompt: "In the Public Relations domain, what does \"Reputation risk\" mean?",
      options: [
        "prepared answers to likely stakeholder or media questions",
        "protecting and improving how an organization is perceived by stakeholders",
        "potential harm to trust, credibility, public perception, or stakeholder confidence",
        "An office administration policy only",
      ],
      correctIndex: 2,
      explanation: "Potential harm to trust, credibility, public perception, or stakeholder confidence."
    },
    {
      id: "pr-27",
      type: "mcq",
      title: "Media training",
      prompt: "In the Public Relations domain, what does \"Media training\" mean?",
      options: [
        "preparing spokespeople to communicate clearly, accurately, and calmly under questioning",
        "structured messaging framework with core message, pillars, proof points, and audience needs",
        "a measure of brand visibility compared with competitors in media or conversation",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 0,
      explanation: "Preparing spokespeople to communicate clearly, accurately, and calmly under questioning."
    },
    {
      id: "pr-28",
      type: "mcq",
      title: "Correction",
      prompt: "In the Public Relations domain, what does \"Correction\" mean?",
      options: [
        "truthful, transparent communication that avoids manipulation, hidden conflicts, and misleading claims",
        "A manual workaround with no control value",
        "coverage gained through editorial interest rather than paid placement",
        "a formal request or update to fix inaccurate published information",
      ],
      correctIndex: 3,
      explanation: "A formal request or update to fix inaccurate published information."
    },
    {
      id: "pr-29",
      type: "mcq",
      title: "PR measurement",
      prompt: "In the Public Relations domain, what does \"PR measurement\" mean?",
      options: [
        "integrated communications framework combining paid, earned, shared, and owned media",
        "evaluating communication outcomes such as coverage quality, message pull-through, sentiment, reach, and business impact",
        "social and community channels where content can be shared and discussed",
        "A visual branding element only",
      ],
      correctIndex: 1,
      explanation: "Evaluating communication outcomes such as coverage quality, message pull-through, sentiment, reach, and business impact."
    },
    {
      id: "pr-30",
      type: "mcq",
      title: "Ethical PR",
      prompt: "In the Public Relations domain, what does \"Ethical PR\" mean?",
      options: [
        "A meeting agenda template",
        "a formal request or update to fix inaccurate published information",
        "managing relationships, reputation, trust, and communication between an organization and its stakeholders",
        "truthful, transparent communication that avoids manipulation, hidden conflicts, and misleading claims",
      ],
      correctIndex: 3,
      explanation: "Truthful, transparent communication that avoids manipulation, hidden conflicts, and misleading claims."
    },
    {
      id: "pr-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A product safety issue breaks on social media before all facts are known. What should PR do first?",
      options: [
        "Stay silent for a week",
        "Publish unverified details",
        "Issue a holding statement, confirm known facts, coordinate with legal/ops, and set update cadence",
        "Blame customers",
      ],
      correctIndex: 2,
      explanation: "Early crisis response should acknowledge, coordinate, and avoid speculation."
    },
    {
      id: "pr-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A journalist asks for comment on an allegation. What is the best response?",
      options: [
        "Ignore the journalist",
        "Share confidential documents casually",
        "Attack the journalist",
        "Confirm receipt, verify facts internally, provide an accurate statement within deadline, and avoid speculation",
      ],
      correctIndex: 3,
      explanation: "Media response should be timely, factual, and controlled."
    },
    {
      id: "pr-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A press release has no clear news value. What should be improved?",
      options: [
        "Only boilerplate length",
        "Audience relevance, news angle, proof points, quote quality, and business context",
        "Only email signature",
        "Only font size",
      ],
      correctIndex: 1,
      explanation: "Press releases need a newsworthy angle and clear audience value."
    },
    {
      id: "pr-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A CEO is doing a sensitive interview. What preparation is most useful?",
      options: [
        "Only a new suit",
        "No preparation",
        "Memorize jargon",
        "Media training, message house, likely questions, bridge statements, and approved proof points",
      ],
      correctIndex: 3,
      explanation: "Sensitive interviews need message discipline and scenario practice."
    },
    {
      id: "pr-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "Negative coverage contains a factual error. What should PR do?",
      options: [
        "Ignore all coverage",
        "Post insults online",
        "Threaten publicly immediately",
        "Document the error, contact the outlet respectfully, provide evidence, and request correction",
      ],
      correctIndex: 3,
      explanation: "Corrections require evidence and professional engagement."
    },
    {
      id: "pr-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A campaign gets high reach but poor sentiment. What should be analyzed?",
      options: [
        "Message fit, audience reaction, sentiment drivers, channel context, and stakeholder concerns",
        "Reach only",
        "Number of press contacts only",
        "Logo size only",
      ],
      correctIndex: 0,
      explanation: "Reach alone does not show reputation success."
    },
    {
      id: "pr-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A company wants thought leadership. What content is strongest?",
      options: [
        "Copying competitors",
        "Only executive photos",
        "Generic promotional copy",
        "Distinct point of view backed by expertise, data, proof, and relevance to industry problems",
      ],
      correctIndex: 3,
      explanation: "Thought leadership requires credible insight, not just promotion."
    },
    {
      id: "pr-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A PR team uses selective facts to mislead stakeholders. What is the concern?",
      options: [
        "No concern",
        "Higher media trust",
        "Better transparency",
        "Ethical and reputation risk from spin or manipulation",
      ],
      correctIndex: 3,
      explanation: "Misleading communication damages credibility and trust."
    },
    {
      id: "pr-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A crisis involves legal, customer, employee, and regulator impact. What is needed?",
      options: [
        "Only one social post",
        "Only a graphic design change",
        "Only a sales email",
        "Cross-functional war room, stakeholder map, approved messages, decisions, and update cadence",
      ],
      correctIndex: 3,
      explanation: "Complex crises require coordinated stakeholder management."
    },
    {
      id: "pr-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A PR report counts only total mentions. What should be added?",
      options: [
        "Only intern comments",
        "Only more screenshots",
        "Sentiment, message pull-through, outlet quality, share of voice, audience relevance, and business context",
        "Only word count",
      ],
      correctIndex: 2,
      explanation: "PR measurement should evaluate quality and outcome, not only volume."
    }
  ],
};
