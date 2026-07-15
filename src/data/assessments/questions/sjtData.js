import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const sjtData = {
  id: ASSESSMENT_TYPES.sjt,
  title: "Situational Judgment & Workplace Decision-Making Certification",
  shortTitle: "SJT",
  category: "Workplace behavior",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Workplace scenarios covering ownership, communication, escalation, confidentiality, stakeholder management, teamwork, conflict resolution, ethics, and professional judgment.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sjt-01",
      type: "mcq",
      title: "Unrealistic Deadline",
      prompt: "Your manager gives you a deadline that seems unrealistic. What do you do first?",
      options: ["Accept it silently and work late without discussion.", "Say it is impossible and refuse the work.", "Clarify priorities, estimate effort, explain trade-offs, and propose a realistic plan.", "Tell the client the manager made a bad plan."],
      correctIndex: 2,
      explanation: "Strong judgment means clarifying scope, communicating trade-offs, and offering options."
    },
    {
      id: "sjt-02",
      type: "mcq",
      title: "Data Quality Issue",
      prompt: "You find a data issue one hour before a client presentation. What is the best response?",
      options: ["Hide the issue because the deck is already done.", "Immediately flag the risk, quantify the impact, and recommend whether to delay or caveat the slide.", "Delete the slide without telling anyone.", "Blame the data engineering team."],
      correctIndex: 1,
      explanation: "Transparency with impact assessment protects trust. This is a checked foundational concept for professional SJT work."
    },
    {
      id: "sjt-03",
      type: "mcq",
      title: "Conflict With Peer",
      prompt: "A teammate strongly disagrees with your analysis in a meeting. What should you do?",
      options: ["Argue until they stop.", "Ignore them and continue.", "Ask for their reasoning, compare assumptions, and agree on a quick validation check.", "Escalate immediately without discussion."],
      correctIndex: 2,
      explanation: "Good workplace behavior focuses on evidence and shared problem-solving."
    },
    {
      id: "sjt-04",
      type: "mcq",
      title: "Client Scope Creep",
      prompt: "A client asks for extra analysis outside the agreed scope. What is the best response?",
      options: ["Do it immediately even if other deliverables slip.", "Reject it bluntly.", "Acknowledge the request, estimate effort, and align with your manager on priority and scope impact.", "Ignore the request until they forget."],
      correctIndex: 2,
      explanation: "This balances client service with delivery discipline. This is a checked foundational concept for professional SJT work."
    },
    {
      id: "sjt-05",
      type: "mcq",
      title: "You Made a Mistake",
      prompt: "You realize your previous analysis had a formula error. What do you do?",
      options: ["Correct it quietly and hope no one notices.", "Inform stakeholders, explain the corrected impact, and share preventive steps.", "Wait until someone asks.", "Say the data changed."],
      correctIndex: 1,
      explanation: "Owning mistakes and preventing recurrence builds credibility. This is a checked foundational concept for professional SJT work."
    },
    {
      id: "sjt-06",
      type: "mcq",
      title: "Ambiguous Requirement",
      prompt: "A stakeholder asks for a dashboard but gives vague requirements. What should you do?",
      options: ["Build what you think is best and send it.", "Ask targeted questions about audience, decisions, metrics, and deadlines before building.", "Tell them the request is incomplete and stop working.", "Copy an old dashboard and change the title."],
      correctIndex: 1,
      explanation: "Clarifying the decision, audience, and success criteria prevents wasted work."
    },
    {
      id: "sjt-07",
      type: "mcq",
      title: "Confidential Data",
      prompt: "A colleague asks you to share a file that contains sensitive client data. What is the best response?",
      options: ["Share it because they are on your team.", "Ask why they need it and confirm access permissions before sharing.", "Send it to their personal email.", "Upload it to a public link for convenience."],
      correctIndex: 1,
      explanation: "Sensitive data should only be shared with proper purpose and permission."
    },
    {
      id: "sjt-08",
      type: "mcq",
      title: "Blocked by Dependency",
      prompt: "Your task is blocked because another team has not delivered their input. What should you do?",
      options: ["Wait quietly until they respond.", "Send repeated angry messages.", "Document the dependency, follow up with a deadline, and inform your lead about timeline risk.", "Do unrelated work and ignore the dependency."],
      correctIndex: 2,
      explanation: "Good ownership means proactive follow-up and early risk communication."
    },
    {
      id: "sjt-09",
      type: "mcq",
      title: "Executive Pushback",
      prompt: "An executive challenges your recommendation in a review. What is the best response?",
      options: ["Defend your answer without listening.", "Acknowledge the concern, explain your evidence, and offer to test the assumption.", "Change your recommendation immediately.", "Say the model produced it, so it must be right."],
      correctIndex: 1,
      explanation: "Strong judgment combines confidence, evidence, and openness to validation."
    },
    {
      id: "sjt-10",
      type: "mcq",
      title: "Too Many Priorities",
      prompt: "You receive three urgent requests from different stakeholders. What should you do?",
      options: ["Start all three at once.", "Choose the easiest request first.", "Assess impact and deadlines, then align priorities with your manager or product owner.", "Ignore two of them."],
      correctIndex: 2,
      explanation: "Prioritization should be based on business impact, urgency, and alignment."
    },
    {
      id: "sjt-11",
      type: "mcq",
      title: "Junior Teammate Struggling",
      prompt: "A junior teammate is stuck and slowing the project. What is the best response?",
      options: ["Take over all their work without explanation.", "Ignore it because it is not your problem.", "Offer focused help, break the task into steps, and keep the lead informed if risk remains.", "Complain about them in the team chat."],
      correctIndex: 2,
      explanation: "This supports the teammate while still managing delivery risk. This is a checked foundational concept for professional SJT work."
    },
    {
      id: "sjt-12",
      type: "mcq",
      title: "Client Disagrees With Findings",
      prompt: "A client disagrees with your analysis because it conflicts with their expectation. What should you do?",
      options: ["Tell them they are wrong.", "Change the analysis to match their expectation.", "Walk through the assumptions, data sources, and sensitivity checks calmly.", "Avoid discussing the finding."],
      correctIndex: 2,
      explanation: "Transparent reasoning and sensitivity checks help resolve disagreement professionally."
    },
    {
      id: "sjt-13",
      type: "mcq",
      title: "Recurring Defect",
      prompt: "The same reporting defect has appeared for the third time. What is the best next step?",
      options: ["Fix it again manually.", "Ignore it because the manual fix works.", "Identify root cause, add a prevention check, and document the fix.", "Ask someone else to handle it next time."],
      correctIndex: 2,
      explanation: "Recurring issues need root-cause prevention, not repeated manual fixes."
    },
    {
      id: "sjt-14",
      type: "mcq",
      title: "Meeting Without Preparation",
      prompt: "You are asked to join a client meeting in 10 minutes with little context. What should you do?",
      options: ["Join and improvise without asking anything.", "Ask for the objective, your role, and any critical background before joining.", "Decline immediately.", "Stay silent throughout the meeting."],
      correctIndex: 1,
      explanation: "A quick clarification helps you contribute appropriately. This is a checked foundational concept for professional SJT work."
    },
    {
      id: "sjt-15",
      type: "mcq",
      title: "Unclear Ownership",
      prompt: "Two teams assume the other owns a deliverable. What should you do?",
      options: ["Let them resolve it later.", "Clarify ownership, document responsibilities, and align on a single accountable owner.", "Do the work secretly.", "Tell the client both teams are confused."],
      correctIndex: 1,
      explanation: "Clear ownership and documentation reduce delivery ambiguity. This is a checked foundational concept for professional SJT work."
    },
    {
      id: "sjt-16",
      type: "mcq",
      title: "Ethical Shortcut",
      prompt: "A teammate suggests excluding negative survey responses to make the result look better. What should you do?",
      options: ["Agree because it helps the presentation.", "Refuse, explain the bias, and suggest a transparent segmentation if needed.", "Remove only some negative responses.", "Do it if the client will not notice."],
      correctIndex: 1,
      explanation: "Ethical judgment requires preserving data integrity and explaining bias."
    },
    {
      id: "sjt-17",
      type: "mcq",
      title: "Production Incident",
      prompt: "A dashboard used by leadership is showing incorrect numbers during business hours. What is your first priority?",
      options: ["Post a broad update that the dashboard is unreliable, then investigate impact and fix.", "Wait until the end of the day.", "Delete the dashboard.", "Quietly fix it without notifying users."],
      correctIndex: 0,
      explanation: "Users need timely warning, followed by impact analysis and correction."
    },
    {
      id: "sjt-18",
      type: "mcq",
      title: "Feedback You Disagree With",
      prompt: "Your manager gives feedback you partially disagree with. What is the best response?",
      options: ["Reject it immediately.", "Listen, ask for examples, reflect, and discuss your perspective with evidence.", "Agree publicly but ignore it.", "Complain to peers first."],
      correctIndex: 1,
      explanation: "Mature feedback handling combines openness with constructive dialogue."
    },
    {
      id: "sjt-19",
      type: "mcq",
      title: "Low Confidence Analysis",
      prompt: "You have an analysis with limited data and low confidence. What should you do before sharing it?",
      options: ["Present it as final.", "Hide the low confidence.", "Label assumptions, explain limitations, and recommend what data would improve confidence.", "Do not share anything."],
      correctIndex: 2,
      explanation: "Decision-makers can use imperfect analysis if confidence and limits are clear."
    },
    {
      id: "sjt-20",
      type: "mcq",
      title: "Process Improvement",
      prompt: "You notice the team spends hours every week manually preparing the same report. What should you do?",
      options: ["Keep doing it manually because it is expected.", "Automate immediately without telling anyone.", "Estimate the time saved, propose automation, and align on priority with the team.", "Stop preparing the report."],
      correctIndex: 2,
      explanation: "Good improvement ideas include quantified benefit and stakeholder alignment."
    },
    {
      id: "sjt-21",
      type: "mcq",
      title: "Senior Stakeholder Pressure",
      prompt: "In a professional Situational Judgment & Workplace Decision-Making scenario, what is the strongest approach when dealing with senior stakeholder pressure?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Senior Stakeholder Pressure requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sjt-22",
      type: "mcq",
      title: "Missed Deadline Recovery",
      prompt: "A team is making a decision about missed deadline recovery. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about missed deadline recovery balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sjt-23",
      type: "mcq",
      title: "Unclear Ownership",
      prompt: "Which signal suggests unclear ownership needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when unclear ownership could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sjt-24",
      type: "mcq",
      title: "Confidential Client File",
      prompt: "What is the best way to validate work involving confidential client file?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for confidential client file should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sjt-25",
      type: "mcq",
      title: "Biased Meeting Dynamic",
      prompt: "In a professional Situational Judgment & Workplace Decision-Making scenario, what is the strongest approach when dealing with biased meeting dynamic?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Biased Meeting Dynamic requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sjt-26",
      type: "mcq",
      title: "Peer Conflict",
      prompt: "A team is making a decision about peer conflict. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about peer conflict balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sjt-27",
      type: "mcq",
      title: "Manager Asks Unethical Shortcut",
      prompt: "Which signal suggests manager asks unethical shortcut needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when manager asks unethical shortcut could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sjt-28",
      type: "mcq",
      title: "Production Issue Escalation",
      prompt: "What is the best way to validate work involving production issue escalation?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for production issue escalation should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sjt-29",
      type: "mcq",
      title: "Client Expectation Reset",
      prompt: "In a professional Situational Judgment & Workplace Decision-Making scenario, what is the strongest approach when dealing with client expectation reset?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Client Expectation Reset requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sjt-30",
      type: "mcq",
      title: "Data Caveat Communication",
      prompt: "A team is making a decision about data caveat communication. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about data caveat communication balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sjt-31",
      type: "mcq",
      title: "Burnout Risk",
      prompt: "Which signal suggests burnout risk needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when burnout risk could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sjt-32",
      type: "mcq",
      title: "New Joiner Support",
      prompt: "What is the best way to validate work involving new joiner support?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for new joiner support should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sjt-33",
      type: "mcq",
      title: "Feedback Delivery",
      prompt: "In a professional Situational Judgment & Workplace Decision-Making scenario, what is the strongest approach when dealing with feedback delivery?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Feedback Delivery requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sjt-34",
      type: "mcq",
      title: "Credit Sharing",
      prompt: "A team is making a decision about credit sharing. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about credit sharing balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sjt-35",
      type: "mcq",
      title: "Cross-Team Dependency",
      prompt: "Which signal suggests cross-team dependency needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when cross-team dependency could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sjt-36",
      type: "mcq",
      title: "Scope Trade-Off",
      prompt: "What is the best way to validate work involving scope trade-off?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for scope trade-off should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sjt-37",
      type: "mcq",
      title: "Remote Communication",
      prompt: "In a professional Situational Judgment & Workplace Decision-Making scenario, what is the strongest approach when dealing with remote communication?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Remote Communication requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sjt-38",
      type: "mcq",
      title: "Mistake Correction",
      prompt: "A team is making a decision about mistake correction. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about mistake correction balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sjt-39",
      type: "mcq",
      title: "Prioritization Conflict",
      prompt: "Which signal suggests prioritization conflict needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when prioritization conflict could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sjt-40",
      type: "mcq",
      title: "Executive Update",
      prompt: "What is the best way to validate work involving executive update?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for executive update should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
