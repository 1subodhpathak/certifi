import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Communication / English assessment.
// Questions progress from grammar and clarity to business writing,
// client communication, executive summaries, escalation, stakeholder management,
// data storytelling, and consulting-style communication judgment.
export const communicationData = {
  id: ASSESSMENT_TYPES.communication,
  title: 'Professional Communication & Business English Certification',
  shortTitle: 'Communication',
  category: 'Client-facing readiness',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional assessment covering grammar, clarity, tone, reading comprehension, business writing, client emails, stakeholder communication, executive summaries, escalation, data storytelling, and consulting-style communication.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and focus on professional clarity, tone, structure, business meaning, and client-facing judgment.',
  questions: [
    {
      id: 'comm-01',
      type: 'mcq',
      title: 'Grammar: Tense',
      prompt: 'Choose the grammatically correct sentence.',
      options: [
        'We have completed the analysis yesterday.',
        'We completed the analysis yesterday.',
        'We had complete the analysis yesterday.',
        'We completing the analysis yesterday.'
      ],
      correctIndex: 1,
      explanation:
        'Use simple past with a completed time marker such as “yesterday.”'
    },
    {
      id: 'comm-02',
      type: 'mcq',
      title: 'Subject-Verb Agreement',
      prompt: 'Choose the correct sentence.',
      options: [
        'The analysis show a decline in renewals.',
        'The analysis shows a decline in renewals.',
        'The analysis showing a decline in renewals.',
        'The analysis have shown a decline in renewals.'
      ],
      correctIndex: 1,
      explanation:
        '“Analysis” is singular, so it takes the singular verb “shows.”'
    },
    {
      id: 'comm-03',
      type: 'mcq',
      title: 'Basic Clarity',
      prompt: 'Which sentence is clearest?',
      options: [
        'There are some things that are not good in the report.',
        'The report has three data quality issues that need review.',
        'The report is kind of problematic in some places.',
        'There may be many things in the report.'
      ],
      correctIndex: 1,
      explanation:
        'The clearest sentence identifies the issue specifically and avoids vague wording.'
    },
    {
      id: 'comm-04',
      type: 'mcq',
      title: 'Professional Word Choice',
      prompt: 'Choose the most professional replacement for “a lot of problems.”',
      options: ['Huge mess', 'Several issues', 'Bad stuff', 'Many troubles'],
      correctIndex: 1,
      explanation:
        '“Several issues” is professional, neutral, and specific enough for business communication.'
    },
    {
      id: 'comm-05',
      type: 'mcq',
      title: 'Punctuation',
      prompt: 'Choose the correctly punctuated sentence.',
      options: [
        'After reviewing the dashboard we found three issues.',
        'After reviewing the dashboard, we found three issues.',
        'After, reviewing the dashboard we found three issues.',
        'After reviewing, the dashboard we found three issues.'
      ],
      correctIndex: 1,
      explanation:
        'An introductory phrase is usually followed by a comma.'
    },
    {
      id: 'comm-06',
      type: 'mcq',
      title: 'Modifier Clarity',
      prompt: 'Choose the clearest sentence.',
      options: [
        'Reviewing the dashboard, the trend was unusual.',
        'While reviewing the dashboard, I noticed an unusual trend.',
        'The dashboard reviewing had unusual trend.',
        'I noticed while unusual trend reviewing dashboard.'
      ],
      correctIndex: 1,
      explanation:
        'The sentence clearly shows who performed the action.'
    },
    {
      id: 'comm-07',
      type: 'mcq',
      title: 'Parallel Structure',
      prompt: 'Choose the sentence with correct parallel structure.',
      options: [
        'The role requires analyzing data, building dashboards, and stakeholder communication.',
        'The role requires data analysis, dashboard building, and communicating with stakeholders.',
        'The role requires analyzing data, building dashboards, and communicating with stakeholders.',
        'The role requires analysis data, dashboards building, and communicate stakeholders.'
      ],
      correctIndex: 2,
      explanation:
        'The sentence keeps all three items in the same -ing structure: analyzing, building, and communicating.'
    },
    {
      id: 'comm-08',
      type: 'mcq',
      title: 'Concise Grammar',
      prompt: 'Choose the grammatically correct sentence.',
      options: [
        'Neither the analyst nor the managers was available.',
        'Neither the analyst nor the managers were available.',
        'Neither the analysts nor the manager were available.',
        'Neither the analyst or the managers were available.'
      ],
      correctIndex: 1,
      explanation:
        'With “neither/nor,” the verb usually agrees with the noun closest to it. “Managers” is plural, so “were” is correct.'
    },
    {
      id: 'comm-09',
      type: 'mcq',
      title: 'Formal Request',
      prompt: 'Choose the most professional version.',
      options: [
        'Can you guys check this?',
        'Could your team please review this by Friday?',
        'Look at this quickly.',
        'Need this checked ASAP.'
      ],
      correctIndex: 1,
      explanation:
        'The best option is polite, specific, and includes a clear deadline.'
    },
    {
      id: 'comm-10',
      type: 'mcq',
      title: 'Clear Action Request',
      prompt: 'Which sentence gives the clearest action request?',
      options: [
        'Please look into this.',
        'Can someone help?',
        'Please confirm the final revenue number for Q2 by 5 PM today.',
        'This needs attention.'
      ],
      correctIndex: 2,
      explanation:
        'A clear action request names the task, metric, owner expectation, and deadline.'
    },
    {
      id: 'comm-11',
      type: 'mcq',
      title: 'Client Email Tone',
      prompt: 'A client asks for an update before the team has final numbers. Which response is best?',
      options: [
        'We do not have it yet. Please wait.',
        'We are still checking, so there is nothing to share.',
        'We are validating the final numbers and will share the confirmed update by 4 PM today.',
        'The team delayed the work, but I will try to get it.'
      ],
      correctIndex: 2,
      explanation:
        'The best response is transparent, specific, professional, and gives a clear next step.'
    },
    {
      id: 'comm-12',
      type: 'mcq',
      title: 'Polite Follow-Up',
      prompt: 'Which phrase is most appropriate when asking a stakeholder for delayed input?',
      options: [
        'You have still not sent this.',
        'Please send it immediately.',
        'Could you please share the input by noon so we can keep the timeline on track?',
        'This is blocked because of you.'
      ],
      correctIndex: 2,
      explanation:
        'The best option is polite, deadline-driven, and explains the business reason.'
    },
    {
      id: 'comm-13',
      type: 'mcq',
      title: 'Client Apology',
      prompt: 'Which apology is most effective after a delayed report?',
      options: [
        'Sorry, but the delay was not my fault.',
        'Apologies for the delay. We found a data quality issue, corrected it, and will share the validated report by 3 PM.',
        'The report is delayed.',
        'Please understand delays happen.'
      ],
      correctIndex: 1,
      explanation:
        'A strong apology owns the issue, explains the cause briefly, and provides a recovery plan.'
    },
    {
      id: 'comm-14',
      type: 'mcq',
      title: 'Professional Escalation',
      prompt: 'A dependency is delayed and may impact launch. Which message is most professional?',
      options: [
        'The other team is delaying everything.',
        'We are blocked because they did not finish their work.',
        'The legal approval is still pending, which may move the launch by two days. We have escalated and will confirm the revised timeline by noon.',
        'Launch will probably be late. Not sure what to do.'
      ],
      correctIndex: 2,
      explanation:
        'The best message states the blocker, impact, action taken, and next update time without blaming others.'
    },
    {
      id: 'comm-15',
      type: 'mcq',
      title: 'Meeting Update',
      prompt: 'Which is the best opening line for a client status update?',
      options: [
        'Here is everything we did.',
        'Sharing the current status, key risk, and next milestone for the migration workstream.',
        'There are a lot of updates.',
        'Please read below.'
      ],
      correctIndex: 1,
      explanation:
        'The sentence frames the update and tells the client what to expect.'
    },
    {
      id: 'comm-16',
      type: 'mcq',
      title: 'Executive Summary',
      prompt: 'Which sentence is clearest for an executive summary?',
      options: [
        'The numbers are kind of bad because there are issues.',
        'Sales declined 12% because enterprise renewals were lower than forecast.',
        'There are many things happening in the sales line.',
        'The sales situation was not looking very good.'
      ],
      correctIndex: 1,
      explanation:
        'A strong executive summary gives the metric, direction, magnitude, and likely driver.'
    },
    {
      id: 'comm-17',
      type: 'mcq',
      title: 'Business Recommendation',
      prompt: 'Which recommendation is strongest?',
      options: [
        'Maybe we should try something.',
        'The dashboard is not ideal.',
        'Prioritize the top three defect categories first because they account for 72% of failed checks.',
        'All defects should be fixed whenever possible.'
      ],
      correctIndex: 2,
      explanation:
        'The strongest recommendation is specific, action-oriented, and supported by evidence.'
    },
    {
      id: 'comm-18',
      type: 'mcq',
      title: 'Risk Summary',
      prompt: 'Which sentence is best for summarizing risk?',
      options: [
        'There is risk.',
        'The key risk is delayed data ingestion, which could push the dashboard launch by two days.',
        'Risk is present in the dashboard project.',
        'Things may go wrong.'
      ],
      correctIndex: 1,
      explanation:
        'The best sentence identifies the risk and explains the business impact.'
    },
    {
      id: 'comm-19',
      type: 'mcq',
      title: 'Reading Comprehension',
      prompt: 'A memo says: “Churn rose in March, but expansion revenue offset the net impact.” What does this mean?',
      options: [
        'Total revenue definitely declined.',
        'Customer loss increased, but upsell revenue reduced or balanced the damage.',
        'No customers left in March.',
        'Expansion revenue caused churn.'
      ],
      correctIndex: 1,
      explanation:
        'Churn increased, but expansion revenue helped reduce or offset the overall revenue impact.'
    },
    {
      id: 'comm-20',
      type: 'mcq',
      title: 'Business Meaning',
      prompt: 'What does “mitigate risk” mean?',
      options: ['Ignore risk', 'Increase risk', 'Reduce risk', 'Transfer ownership only'],
      correctIndex: 2,
      explanation:
        'To mitigate risk means to reduce its likelihood, impact, or both.'
    },
    {
      id: 'comm-21',
      type: 'mcq',
      title: 'Reading Inference',
      prompt: 'A project note says: “The launch is dependent on legal approval.” What can you infer?',
      options: [
        'The launch is already complete.',
        'Legal approval is a blocker or prerequisite.',
        'Legal approval is irrelevant.',
        'The team cancelled the launch.'
      ],
      correctIndex: 1,
      explanation:
        '“Dependent on” means the launch requires legal approval before it can proceed.'
    },
    {
      id: 'comm-22',
      type: 'mcq',
      title: 'Executive Reading',
      prompt: 'If a report says “Margin improved despite flat revenue,” what likely changed?',
      options: [
        'Costs may have decreased or product/customer mix improved.',
        'Revenue doubled.',
        'Margin declined.',
        'No business metric changed.'
      ],
      correctIndex: 0,
      explanation:
        'Margin can improve even when revenue is flat if costs decline or the sales mix becomes more profitable.'
    },
    {
      id: 'comm-23',
      type: 'mcq',
      title: 'Clarifying Ambiguity',
      prompt: 'A client says, “Can you send the report soon?” Which response is best?',
      options: [
        'Sure.',
        'Soon is not clear.',
        'Absolutely. To confirm expectations, would 3 PM today work for the first version?',
        'We will send it whenever it is ready.'
      ],
      correctIndex: 2,
      explanation:
        'The best response is professional and converts vague timing into a clear commitment.'
    },
    {
      id: 'comm-24',
      type: 'mcq',
      title: 'Managing Expectations',
      prompt: 'You know a deadline is at risk. Which message is best?',
      options: [
        'We may miss it, but let’s see.',
        'The timeline is at risk because source data arrived late. We can either share a partial version today or the validated version tomorrow morning.',
        'The delay happened because another team was slow.',
        'No update right now.'
      ],
      correctIndex: 1,
      explanation:
        'The best message gives the reason, impact, and decision options.'
    },
    {
      id: 'comm-25',
      type: 'mcq',
      title: 'Diplomatic Disagreement',
      prompt: 'A stakeholder suggests a flawed interpretation of data. Which response is most professional?',
      options: [
        'That is wrong.',
        'You misunderstood the data.',
        'That is one possible interpretation. One concern is that the sample excludes enterprise customers, so the conclusion may not generalize.',
        'No, we cannot use that.'
      ],
      correctIndex: 2,
      explanation:
        'The best response is respectful, evidence-based, and explains the limitation clearly.'
    },
    {
      id: 'comm-26',
      type: 'mcq',
      title: 'Client-Friendly Explanation',
      prompt: 'Which explanation is best for a non-technical client?',
      options: [
        'The model had multicollinearity and heteroscedasticity issues.',
        'The model is bad.',
        'Some input variables overlap heavily, which makes the model less stable. We are simplifying the inputs to improve reliability.',
        'The algorithm did not work because math is complicated.'
      ],
      correctIndex: 2,
      explanation:
        'The best explanation is accurate but easy for a non-technical stakeholder to understand.'
    },
    {
      id: 'comm-27',
      type: 'mcq',
      title: 'Data Storytelling',
      prompt: 'Which sentence best communicates a data insight?',
      options: [
        'The chart has many values.',
        'Revenue changed in some regions.',
        'North region revenue fell 18%, mainly due to a 25% drop in enterprise renewals.',
        'There is a downward-looking thing in the dashboard.'
      ],
      correctIndex: 2,
      explanation:
        'A strong insight names the metric, segment, magnitude, and likely driver.'
    },
    {
      id: 'comm-28',
      type: 'mcq',
      title: 'MECE Communication',
      prompt: 'Which structure is most suitable for explaining why revenue declined?',
      options: [
        'Talk about everything randomly.',
        'Break the issue into price, volume, mix, customer segment, and channel.',
        'Only mention one customer complaint.',
        'Start with the smallest chart first.'
      ],
      correctIndex: 1,
      explanation:
        'A structured breakdown helps make the explanation clear, complete, and easier to follow.'
    },
    {
      id: 'comm-29',
      type: 'mcq',
      title: 'Meeting Facilitation',
      prompt: 'A meeting is going off-topic. Which response is best?',
      options: [
        'Can everyone stop talking?',
        'That is irrelevant.',
        'This is useful context. To stay on time, I suggest we park it and return to the launch decision first.',
        'Let’s cancel the meeting.'
      ],
      correctIndex: 2,
      explanation:
        'The best response acknowledges the input while guiding the group back to the objective.'
    },
    {
      id: 'comm-30',
      type: 'mcq',
      title: 'Action-Oriented Minutes',
      prompt: 'Which meeting note is most useful?',
      options: [
        'We discussed many things.',
        'Data topic came up.',
        'Amit will validate Q2 revenue by Friday 5 PM; Priya will update the client deck by Monday noon.',
        'Everyone had questions.'
      ],
      correctIndex: 2,
      explanation:
        'Useful meeting notes include owner, action, deliverable, and deadline.'
    },
    {
      id: 'comm-31',
      type: 'mcq',
      title: 'Sensitive Update',
      prompt: 'A client’s requested scope cannot be completed within the current timeline. Which response is best?',
      options: [
        'That is impossible.',
        'We cannot do it.',
        'The additional scope is feasible, but not within the current timeline. We can either extend delivery by one week or prioritize the highest-impact items for this release.',
        'This was not part of the original plan, so we will ignore it.'
      ],
      correctIndex: 2,
      explanation:
        'The best response is honest, solution-oriented, and presents trade-off options.'
    },
    {
      id: 'comm-32',
      type: 'mcq',
      title: 'Prioritization Communication',
      prompt: 'Which message best explains prioritization to leadership?',
      options: [
        'We picked these items because they looked important.',
        'We prioritized the three fixes that affect the largest customer segments and can be delivered before launch.',
        'Everything is important, so nothing can be prioritized.',
        'We selected items randomly.'
      ],
      correctIndex: 1,
      explanation:
        'The strongest message explains prioritization using impact and feasibility.'
    },
    {
      id: 'comm-33',
      type: 'mcq',
      title: 'Handling Uncertainty',
      prompt: 'Which sentence communicates uncertainty professionally?',
      options: [
        'I am guessing this is true.',
        'This is definitely the reason, even though we have not checked.',
        'Based on the current data, pricing appears to be the main driver, but we need channel-level validation before finalizing the conclusion.',
        'Nobody knows what happened.'
      ],
      correctIndex: 2,
      explanation:
        'The best sentence states the current evidence, level of confidence, and what validation remains.'
    },
    {
      id: 'comm-34',
      type: 'mcq',
      title: 'Bad News Communication',
      prompt: 'Which message is best when sharing bad news with a client?',
      options: [
        'There is bad news.',
        'The dashboard release will move from Tuesday to Thursday because source data validation found duplicate records. We have fixed the issue and added an additional quality check.',
        'The team had some issues.',
        'The timeline moved. Please check later.'
      ],
      correctIndex: 1,
      explanation:
        'Bad news should be clear, specific, accountable, and paired with corrective action.'
    },
    {
      id: 'comm-35',
      type: 'mcq',
      title: 'Professional Brevity',
      prompt: 'Which sentence is the most concise without losing meaning?',
      options: [
        'At this point in time, we are currently in the process of validating the numbers.',
        'We are validating the numbers.',
        'The numbers are undergoing a validation-type process.',
        'Validation of the numbers is something we are doing currently at this moment.'
      ],
      correctIndex: 1,
      explanation:
        'The best sentence is short, direct, and complete.'
    },
    {
      id: 'comm-36',
      type: 'mcq',
      title: 'Client Confidence',
      prompt: 'Which sentence builds the most confidence in a status update?',
      options: [
        'Things are mostly fine.',
        'We are working on it.',
        'The migration is on track. Data extraction is complete, validation is 80% complete, and the only open risk is legal approval for the final data-sharing agreement.',
        'There are some updates but nothing major.'
      ],
      correctIndex: 2,
      explanation:
        'The best update gives progress, evidence, and the remaining risk.'
    },
    {
      id: 'comm-37',
      type: 'mcq',
      title: 'Consulting-Style Answer',
      prompt: 'A client asks, “Why did conversion decline?” Which answer is strongest?',
      options: [
        'It declined because users did not convert.',
        'We are seeing a 9% conversion decline, concentrated on mobile checkout after the latest release. The likely drivers are page latency and payment errors, which we are validating now.',
        'The conversion number went down.',
        'Marketing probably caused it.'
      ],
      correctIndex: 1,
      explanation:
        'A consulting-style answer gives the size of impact, location of issue, likely drivers, and next validation step.'
    },
    {
      id: 'comm-38',
      type: 'mcq',
      title: 'Stakeholder Alignment',
      prompt: 'Different stakeholders disagree on the project priority. What is the best communication approach?',
      options: [
        'Choose the loudest stakeholder’s request.',
        'Avoid the discussion.',
        'Align on decision criteria such as customer impact, revenue impact, risk, effort, and deadline before ranking priorities.',
        'Work on everything at once.'
      ],
      correctIndex: 2,
      explanation:
        'When stakeholders disagree, decision criteria help make prioritization objective and transparent.'
    },
    {
      id: 'comm-39',
      type: 'mcq',
      title: 'Advanced Reading Judgment',
      prompt: 'A report says: “Although acquisition volume increased, the new cohort has lower activation and higher early churn.” What is the best interpretation?',
      options: [
        'Growth is clearly healthy.',
        'The company acquired more users, but user quality or onboarding effectiveness may have declined.',
        'Churn has no relationship with acquisition.',
        'Activation improved for the new cohort.'
      ],
      correctIndex: 1,
      explanation:
        'The statement means the business gained more users, but those users are less likely to activate and more likely to churn early.'
    },
    {
      id: 'comm-40',
      type: 'mcq',
      title: 'Executive Communication Judgment',
      prompt: 'Which executive update is strongest?',
      options: [
        'We found many things in the data and are still checking.',
        'Revenue is down, but there are many reasons.',
        'Revenue declined 8% month-over-month, mainly due to lower enterprise renewals in the West region. We recommend prioritizing renewal outreach for the top 40 at-risk accounts this week, which represents 65% of the revenue gap.',
        'The dashboard explains the problem if you look at it carefully.'
      ],
      correctIndex: 2,
      explanation:
        'The strongest executive update gives the metric, driver, segment, recommendation, urgency, and business impact.'
    }
  ]
};