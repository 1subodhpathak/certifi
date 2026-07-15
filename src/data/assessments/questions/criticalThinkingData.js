import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Critical Thinking & Problem-Solving assessment.
// Questions progress from logic fundamentals to argument evaluation,
// assumptions, fallacies, cognitive biases, evidence quality,
// root-cause analysis, decision-making, trade-offs, and workplace judgment.
export const criticalThinkingData = {
  id: ASSESSMENT_TYPES.critical_thinking,
  title: 'Critical Thinking & Problem-Solving Certification',
  shortTitle: 'Critical Thinking',
  category: 'Workplace & Soft Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional assessment covering logical reasoning, assumptions, fallacies, evidence evaluation, cognitive biases, problem framing, root-cause analysis, decision-making, trade-offs, and workplace problem-solving judgment.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and test practical reasoning quality, not only definitions.',
  questions: [
    {
      id: 'ct-01',
      type: 'mcq',
      title: 'Deductive Reasoning',
      prompt: 'All humans are mortal. Socrates is human. Therefore, Socrates is mortal. This is an example of:',
      options: ['Inductive reasoning', 'Deductive reasoning', 'Abductive reasoning', 'Circular reasoning'],
      correctIndex: 1,
      explanation:
        'Deductive reasoning moves from general premises to a conclusion that must be true if the premises are true.'
    },
    {
      id: 'ct-02',
      type: 'mcq',
      title: 'Inductive Reasoning',
      prompt: '“Most customers who used the onboarding checklist renewed their subscription. This new customer used the checklist, so they are likely to renew.” This is an example of:',
      options: ['Deductive reasoning', 'Inductive reasoning', 'Contradiction', 'False dilemma'],
      correctIndex: 1,
      explanation:
        'Inductive reasoning uses patterns or evidence to reach a probable conclusion, not a guaranteed one.'
    },
    {
      id: 'ct-03',
      type: 'mcq',
      title: 'Abductive Reasoning',
      prompt: 'A dashboard suddenly stopped updating after a data pipeline release. The analyst concludes the release is the most likely cause. This is an example of:',
      options: ['Abductive reasoning', 'Circular reasoning', 'Straw man reasoning', 'Appeal to emotion'],
      correctIndex: 0,
      explanation:
        'Abductive reasoning chooses the most likely explanation based on available evidence.'
    },
    {
      id: 'ct-04',
      type: 'mcq',
      title: 'Argument Structure',
      prompt: 'In an argument, what is the conclusion?',
      options: [
        'The evidence used to support a claim',
        'The claim the author wants the audience to accept',
        'An unrelated example',
        'A question with no answer'
      ],
      correctIndex: 1,
      explanation:
        'The conclusion is the main claim or position that the reasoning is trying to support.'
    },
    {
      id: 'ct-05',
      type: 'mcq',
      title: 'Premise',
      prompt: 'What is a premise in critical thinking?',
      options: [
        'A reason or piece of evidence used to support a conclusion',
        'The final recommendation only',
        'A personal insult',
        'A hidden agenda'
      ],
      correctIndex: 0,
      explanation:
        'Premises are the supporting reasons or evidence behind a conclusion.'
    },
    {
      id: 'ct-06',
      type: 'mcq',
      title: 'Assumptions',
      prompt: 'What is an unspoken assumption?',
      options: [
        'A fact stated clearly',
        'A hidden belief required for an argument to work',
        'A final conclusion',
        'A proven statistic'
      ],
      correctIndex: 1,
      explanation:
        'An assumption is often unstated but necessary for the argument to make sense.'
    },
    {
      id: 'ct-07',
      type: 'mcq',
      title: 'Problem Definition',
      prompt: 'Which step should usually come first in a systematic problem-solving process?',
      options: [
        'Brainstorming random solutions',
        'Evaluating alternatives',
        'Defining the problem clearly',
        'Implementing the first available fix'
      ],
      correctIndex: 2,
      explanation:
        'A poorly defined problem often leads to solving the wrong issue.'
    },
    {
      id: 'ct-08',
      type: 'mcq',
      title: 'Inference',
      prompt: 'What is an inference?',
      options: [
        'A direct observation only',
        'A logical conclusion based on evidence and reasoning',
        'A guaranteed fact without evidence',
        'An emotional reaction'
      ],
      correctIndex: 1,
      explanation:
        'An inference connects available evidence to a reasonable conclusion.'
    },
    {
      id: 'ct-09',
      type: 'mcq',
      title: 'Healthy Skepticism',
      prompt: 'What does healthy skepticism mean?',
      options: [
        'Rejecting every claim automatically',
        'Suspending judgment until enough evidence is available',
        'Arguing with every person',
        'Believing only information that supports your opinion'
      ],
      correctIndex: 1,
      explanation:
        'Healthy skepticism means asking for evidence without becoming cynical or closed-minded.'
    },
    {
      id: 'ct-10',
      type: 'mcq',
      title: 'Evidence Quality',
      prompt: 'Which source is generally the most reliable for a technical claim?',
      options: [
        'An anonymous social media post',
        'A peer-reviewed journal article or authoritative primary source',
        'A random forum comment',
        'A sponsored claim with no evidence'
      ],
      correctIndex: 1,
      explanation:
        'Reliable sources usually have expertise, transparency, evidence, review, and accountability.'
    },
    {
      id: 'ct-11',
      type: 'mcq',
      title: 'Corroboration',
      prompt: 'In critical thinking, what does corroboration mean?',
      options: [
        'Ignoring evidence that conflicts with your view',
        'Confirming facts by comparing multiple credible sources',
        'Writing a shorter summary',
        'Making a claim sound more emotional'
      ],
      correctIndex: 1,
      explanation:
        'Corroboration strengthens confidence by checking whether multiple credible sources support the same point.'
    },
    {
      id: 'ct-12',
      type: 'mcq',
      title: 'Ad Hominem',
      prompt: 'Attacking a person’s character instead of addressing their argument is which fallacy?',
      options: ['Straw Man', 'Ad Hominem', 'Slippery Slope', 'Red Herring'],
      correctIndex: 1,
      explanation:
        'Ad hominem attacks the person rather than the reasoning or evidence.'
    },
    {
      id: 'ct-13',
      type: 'mcq',
      title: 'Straw Man',
      prompt: 'Misrepresenting someone’s argument to make it easier to attack is called:',
      options: ['Straw Man', 'Confirmation Bias', 'False Cause', 'Appeal to Authority'],
      correctIndex: 0,
      explanation:
        'A straw man fallacy distorts the actual argument and attacks the weaker version.'
    },
    {
      id: 'ct-14',
      type: 'mcq',
      title: 'False Dilemma',
      prompt: 'Which statement is an example of a false dilemma?',
      options: [
        'We can either cut all costs or the company will fail.',
        'Costs increased by 8% this quarter.',
        'We need to compare three possible options.',
        'The decision depends on revenue, cost, and risk.'
      ],
      correctIndex: 0,
      explanation:
        'A false dilemma presents only two options when more possibilities may exist.'
    },
    {
      id: 'ct-15',
      type: 'mcq',
      title: 'Slippery Slope',
      prompt: 'Which statement best demonstrates a slippery slope fallacy?',
      options: [
        'If we allow one remote-work exception, soon nobody will ever come to office again.',
        'Remote work has benefits and risks.',
        'We should test the policy with one team first.',
        'Employee preference data should be reviewed.'
      ],
      correctIndex: 0,
      explanation:
        'A slippery slope assumes one small action will inevitably lead to extreme consequences without sufficient evidence.'
    },
    {
      id: 'ct-16',
      type: 'mcq',
      title: 'Red Herring',
      prompt: 'A red herring fallacy occurs when someone:',
      options: [
        'Introduces an irrelevant point to distract from the main issue',
        'Uses strong evidence',
        'Defines the problem clearly',
        'Acknowledges a counterargument'
      ],
      correctIndex: 0,
      explanation:
        'A red herring distracts from the central argument by shifting attention to an unrelated topic.'
    },
    {
      id: 'ct-17',
      type: 'mcq',
      title: 'Circular Reasoning',
      prompt: 'Which statement is circular reasoning?',
      options: [
        'This policy is effective because it works well.',
        'This policy reduced error rates from 8% to 3%.',
        'This policy should be tested with a pilot.',
        'This policy has both benefits and risks.'
      ],
      correctIndex: 0,
      explanation:
        'Circular reasoning repeats the claim as proof instead of providing independent support.'
    },
    {
      id: 'ct-18',
      type: 'mcq',
      title: 'Appeal to Authority',
      prompt: 'When does an appeal to authority become weak reasoning?',
      options: [
        'When the authority is relevant and evidence is provided',
        'When the authority is outside their expertise or no evidence is offered',
        'When a credible expert explains the data',
        'When the source is transparent'
      ],
      correctIndex: 1,
      explanation:
        'Authority alone is not enough, especially if the person is not an expert in the relevant area.'
    },
    {
      id: 'ct-19',
      type: 'mcq',
      title: 'Confirmation Bias',
      prompt: 'Only looking for information that supports your existing belief is called:',
      options: ['Availability Heuristic', 'Confirmation Bias', 'Anchoring Bias', 'Hindsight Bias'],
      correctIndex: 1,
      explanation:
        'Confirmation bias leads people to favor evidence that supports what they already believe.'
    },
    {
      id: 'ct-20',
      type: 'mcq',
      title: 'Anchoring Bias',
      prompt: 'A manager sees the first cost estimate of $1M and judges every later estimate around that number, even when new evidence appears. This is:',
      options: ['Anchoring Bias', 'Recency Bias', 'Halo Effect', 'Survivorship Bias'],
      correctIndex: 0,
      explanation:
        'Anchoring bias happens when the first number or idea overly influences later judgments.'
    },
    {
      id: 'ct-21',
      type: 'mcq',
      title: 'Recency Bias',
      prompt: 'Overweighting the most recent information while ignoring longer-term patterns is called:',
      options: ['Recency Bias', 'Dunning-Kruger Effect', 'Sunk Cost Fallacy', 'Straw Man'],
      correctIndex: 0,
      explanation:
        'Recency bias gives too much importance to newer information even when older evidence is also relevant.'
    },
    {
      id: 'ct-22',
      type: 'mcq',
      title: 'Availability Heuristic',
      prompt: 'A leader overestimates the risk of system failure because one recent outage was highly visible. This is most likely:',
      options: ['Availability Heuristic', 'Transitivity', 'Deduction', 'Root Cause Analysis'],
      correctIndex: 0,
      explanation:
        'The availability heuristic makes people overestimate events that are easy to remember.'
    },
    {
      id: 'ct-23',
      type: 'mcq',
      title: 'Sunk Cost Fallacy',
      prompt: 'What is the sunk cost fallacy?',
      options: [
        'Continuing an effort mainly because of past investment, even when future value is poor',
        'Investing early in a promising project',
        'Choosing the lowest-cost option',
        'Stopping a project after reviewing evidence'
      ],
      correctIndex: 0,
      explanation:
        'Past costs cannot be recovered and should not control future decisions if the project no longer makes sense.'
    },
    {
      id: 'ct-24',
      type: 'mcq',
      title: 'Survivorship Bias',
      prompt: 'A founder studies only successful startups and concludes that all startups should follow their exact strategy. What bias is this?',
      options: ['Survivorship Bias', 'False Dilemma', 'Ad Hominem', 'Recency Bias'],
      correctIndex: 0,
      explanation:
        'Survivorship bias ignores failures and only studies examples that survived or succeeded.'
    },
    {
      id: 'ct-25',
      type: 'mcq',
      title: 'Correlation vs Causation',
      prompt: 'A company finds that customers who attend webinars buy more. It concludes webinars definitely cause purchases. What is the main issue?',
      options: [
        'It may be confusing correlation with causation',
        'It has too much evidence',
        'It proves webinars have no value',
        'It is deductive proof'
      ],
      correctIndex: 0,
      explanation:
        'Customers who attend webinars may already be more interested. The relationship does not automatically prove causation.'
    },
    {
      id: 'ct-26',
      type: 'mcq',
      title: 'Counterargument',
      prompt: 'Why should strong reasoning address counterarguments?',
      options: [
        'To confuse the audience',
        'To identify weaknesses, test the conclusion, and strengthen the final recommendation',
        'To avoid giving evidence',
        'To make the argument longer'
      ],
      correctIndex: 1,
      explanation:
        'Considering counterarguments makes reasoning more balanced and credible.'
    },
    {
      id: 'ct-27',
      type: 'mcq',
      title: 'Root Cause Analysis',
      prompt: 'What is root cause analysis?',
      options: [
        'Fixing only visible symptoms',
        'Finding the fundamental reason a problem occurred so recurrence can be prevented',
        'Assigning blame quickly',
        'Choosing the easiest solution'
      ],
      correctIndex: 1,
      explanation:
        'Root cause analysis aims to solve the underlying issue, not just the symptom.'
    },
    {
      id: 'ct-28',
      type: 'mcq',
      title: 'Five Whys',
      prompt: 'What is the purpose of the Five Whys technique?',
      options: [
        'To ask five people for opinions',
        'To repeatedly ask why in order to move from symptom to underlying cause',
        'To create five action items regardless of evidence',
        'To avoid deeper analysis'
      ],
      correctIndex: 1,
      explanation:
        'Five Whys helps uncover deeper causes behind a problem.'
    },
    {
      id: 'ct-29',
      type: 'mcq',
      title: 'MECE Thinking',
      prompt: 'What does MECE thinking help with?',
      options: [
        'Creating categories that are mutually exclusive and collectively exhaustive',
        'Choosing emotional arguments',
        'Ignoring edge cases',
        'Making all options overlap'
      ],
      correctIndex: 0,
      explanation:
        'MECE structures reduce overlap and gaps when breaking down problems.'
    },
    {
      id: 'ct-30',
      type: 'mcq',
      title: 'Problem Decomposition',
      prompt: 'Revenue declined by 10%. Which decomposition is strongest?',
      options: [
        'Break revenue into price, volume, mix, customer segment, channel, and time period',
        'Assume marketing caused it',
        'Only look at total revenue',
        'Ask one person for their opinion'
      ],
      correctIndex: 0,
      explanation:
        'Decomposing revenue into drivers helps isolate the source of the decline.'
    },
    {
      id: 'ct-31',
      type: 'mcq',
      title: 'Data Quality',
      prompt: 'A dashboard shows a sudden 40% increase in orders overnight. What should an analyst do before declaring success?',
      options: [
        'Validate tracking, duplicates, source changes, segment movement, and business context',
        'Announce growth immediately',
        'Ignore the dashboard',
        'Assume all numbers are correct'
      ],
      correctIndex: 0,
      explanation:
        'Sudden metric changes should be validated before drawing business conclusions.'
    },
    {
      id: 'ct-32',
      type: 'mcq',
      title: 'Decision Criteria',
      prompt: 'When comparing multiple solutions, what is the best approach?',
      options: [
        'Choose the first solution suggested',
        'Define decision criteria such as impact, effort, risk, cost, speed, and strategic fit',
        'Choose the cheapest option every time',
        'Let the loudest stakeholder decide'
      ],
      correctIndex: 1,
      explanation:
        'Clear decision criteria make choices more objective and transparent.'
    },
    {
      id: 'ct-33',
      type: 'mcq',
      title: 'Trade-Off Thinking',
      prompt: 'Which statement shows strong trade-off thinking?',
      options: [
        'This option is perfect and has no downside.',
        'Option A is faster but riskier; Option B takes longer but provides stronger reliability.',
        'All options are the same.',
        'We should avoid comparing options.'
      ],
      correctIndex: 1,
      explanation:
        'Critical thinkers identify benefits, costs, risks, and constraints instead of pretending every option is perfect.'
    },
    {
      id: 'ct-34',
      type: 'mcq',
      title: 'Prioritization',
      prompt: 'A team has ten issues but limited capacity. What is the strongest prioritization method?',
      options: [
        'Fix issues randomly',
        'Rank by customer impact, business value, urgency, risk, and effort',
        'Fix only the easiest issues',
        'Fix only the newest issues'
      ],
      correctIndex: 1,
      explanation:
        'Good prioritization weighs multiple factors rather than relying on one dimension.'
    },
    {
      id: 'ct-35',
      type: 'mcq',
      title: 'Critical Reading',
      prompt: 'When reading an article, identifying tone helps you understand:',
      options: [
        'The font size',
        'The author’s attitude, framing, and possible bias',
        'The page length only',
        'The publication date only'
      ],
      correctIndex: 1,
      explanation:
        'Tone can reveal whether the author is neutral, skeptical, promotional, emotional, or biased.'
    },
    {
      id: 'ct-36',
      type: 'mcq',
      title: 'Persuasion',
      prompt: 'Using emotional appeal to influence an audience is called:',
      options: ['Logos', 'Pathos', 'Ethos', 'Kairos'],
      correctIndex: 1,
      explanation:
        'Pathos appeals to emotion. Logos appeals to logic, and ethos appeals to credibility.'
    },
    {
      id: 'ct-37',
      type: 'mcq',
      title: 'Business Judgment',
      prompt: 'A pilot improved conversion by 3%, but customer complaints also increased. What is the strongest next step?',
      options: [
        'Launch immediately because conversion improved',
        'Reject the pilot permanently',
        'Evaluate conversion lift, complaint severity, long-term retention, and whether the issue can be fixed',
        'Ignore customer complaints'
      ],
      correctIndex: 2,
      explanation:
        'A good decision considers both upside and downside, including long-term business impact.'
    },
    {
      id: 'ct-38',
      type: 'mcq',
      title: 'Uncertainty',
      prompt: 'Which statement communicates uncertainty most professionally?',
      options: [
        'This is definitely the cause, although we have not tested it.',
        'Based on current evidence, pricing appears to be the main driver, but we need segment-level validation before finalizing.',
        'Nobody knows anything.',
        'This is just a guess, so ignore it.'
      ],
      correctIndex: 1,
      explanation:
        'Strong critical thinking communicates evidence, confidence level, and remaining validation.'
    },
    {
      id: 'ct-39',
      type: 'mcq',
      title: 'Advanced Workplace Problem-Solving',
      prompt: 'A team keeps missing deadlines. Which diagnosis is strongest?',
      options: [
        'The team is lazy.',
        'Analyze scope changes, capacity, dependencies, estimation accuracy, approval delays, and prioritization conflicts.',
        'Tell everyone to work harder.',
        'Cancel all meetings.'
      ],
      correctIndex: 1,
      explanation:
        'Recurring deadline misses usually require structured analysis of system, process, capacity, and dependency issues.'
    },
    {
      id: 'ct-40',
      type: 'mcq',
      title: 'Advanced Critical Thinking',
      prompt: 'A leader wants to invest heavily in a product because one major customer requested it. What is the strongest critical thinking response?',
      options: [
        'Build it immediately because one big customer asked.',
        'Reject it because one customer is never useful.',
        'Assess broader customer demand, revenue potential, strategic fit, opportunity cost, implementation effort, and risk before deciding.',
        'Ask engineering to decide without business input.'
      ],
      correctIndex: 2,
      explanation:
        'A single customer request can be valuable, but major investment decisions require broader evidence and trade-off analysis.'
    }
  ]
};