import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import projectHealthImage from '../../../assets/assessments/pmp/project_health.png';
import evmImage from '../../../assets/assessments/pmp/evm.png';
import agileTeamImage from '../../../assets/assessments/pmp/agile_team.png';
import stakeholdersImage from '../../../assets/assessments/pmp/stakeholders.png';
import riskDashboardImage from '../../../assets/assessments/pmp/risk_dashboard.png';
import deliveryFlowImage from '../../../assets/assessments/pmp/delivery_flow.png';

export const pmpData = {
  id: ASSESSMENT_TYPES.pmp,
  title: 'PMP Project Management Professional Certification',
  shortTitle: 'PMP',
  category: 'Project Management',
  durationMinutes: 75,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: 'Current professional PMP assessment aligned to real-world people, process, business environment, adaptive/hybrid delivery, value, AI, sustainability, risk, stakeholder, schedule, cost, quality, procurement, and governance scenarios.',
  instructions: '40 scenario-based questions, 75 minutes, 200 marks. Use the dashboards, charts, tables, image exhibits, and process diagrams. Choose the strongest professional response.',
  questions: [
    {
      id: 'pm-01',
      type: 'mcq',
      title: 'Change Request',
      difficulty: 'hard',
      points: 5,
      prompt: `Review project health.\n\n{{image}}\n\nThe sponsor requests a major feature before launch. What should the PM do first?`,
      image: { src: projectHealthImage, alt: 'Project health dashboard' },
      options: ['Implement immediately because the sponsor asked.', 'Assess value, scope/schedule/cost/risk impact and route the change through the agreed decision process.', 'Reject it because the project is late.', 'Ask the team to work overtime before analysis.'],
      correctIndex: 1,
      explanation: 'Correct: B. A significant change requires impact and value analysis before authorization. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-02',
      type: 'mcq',
      title: 'EVM Interpretation',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the earned-value exhibit.\n\n{{image}}\n\nWhich statement is strongest?`,
      image: { src: evmImage, alt: 'Earned value snapshot' },
      options: ['The project is under budget and ahead.', 'Only schedule is a problem.', 'Only cost is a problem.', 'The project is both over budget and behind schedule because CPI and SPI are below 1.'],
      correctIndex: 3,
      explanation: 'Correct: D. CPI=850/1020<1 and SPI=850/1000<1. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-03',
      type: 'mcq',
      title: 'Agile Flow',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the agile dashboard.\n\n{{image}}\n\nWhat is the strongest concern?`,
      image: { src: agileTeamImage, alt: 'Agile delivery dashboard' },
      options: ['Rising WIP and escaped defects suggest flow/quality instability despite stable velocity.', 'Stable velocity proves the system is healthy.', 'Velocity should be doubled immediately.', 'Defects are irrelevant in agile.'],
      correctIndex: 0,
      explanation: 'Correct: A. Velocity alone does not represent quality or flow health. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-04',
      type: 'mcq',
      title: 'Stakeholder Engagement',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the matrix.\n\n{{image}}\n\nWho needs the most deliberate engagement plan?`,
      image: { src: stakeholdersImage, alt: 'Stakeholder engagement matrix' },
      options: ['Sponsor, because supportive stakeholders need no communication.', 'End users only, because power never matters.', 'Operations VP, because they have high power, high interest, and are resistant.', 'Regulator can be ignored until launch.'],
      correctIndex: 2,
      explanation: 'Correct: C. High-power resistance can threaten adoption and project outcomes. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-05',
      type: 'mcq',
      title: 'Risk Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the risk dashboard.\n\n{{image}}\n\nWhat should the PM address first?`,
      image: { src: riskDashboardImage, alt: 'Project risk dashboard' },
      options: ['High risks lacking funded response actions and overdue ownership commitments.', 'Low risks with complete plans.', 'The dashboard color.', 'Close the risk register because risks are uncomfortable.'],
      correctIndex: 0,
      explanation: 'Correct: A. Unfunded high-exposure responses create immediate delivery risk. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-06',
      type: 'mcq',
      title: 'Project Charter',
      difficulty: 'easy',
      points: 5,
      prompt: `What is the primary purpose of the project charter?`,
      options: ['Define every work package in detail.', 'Replace the business case.', 'Formally authorize the project and establish high-level authority/objectives.', 'Serve as the final lessons learned report.'],
      correctIndex: 2,
      explanation: 'Correct: C. The charter formally initiates/authorizes the project. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-07',
      type: 'mcq',
      title: 'People Domain',
      difficulty: 'medium',
      points: 5,
      prompt: `A high-performing technical expert is undermining team trust. What should the PM prioritize?`,
      options: ['Promote the expert immediately.', 'Remove team retrospectives.', 'Focus only on schedule metrics.', 'Address behavior, team norms, psychological safety, and collaboration rather than ignoring it because output is high.'],
      correctIndex: 3,
      explanation: 'Correct: D. People leadership includes team culture and conflict. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-08',
      type: 'mcq',
      title: 'Servant Leadership',
      difficulty: 'medium',
      points: 5,
      prompt: `What is servant leadership in an agile context?`,
      options: ['Command every task detail.', 'Enable the team, remove impediments, coach, and create conditions for ownership.', 'Avoid decisions entirely.', 'Measure success only by overtime.'],
      correctIndex: 1,
      explanation: 'Correct: B. Servant leadership supports empowered teams. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-09',
      type: 'mcq',
      title: 'Conflict',
      difficulty: 'medium',
      points: 5,
      prompt: `Two leads disagree strongly on architecture. Strongest first approach?`,
      options: ['Escalate immediately without discussion.', 'Choose the louder person.', 'Facilitate collaborative problem solving around requirements, evidence, constraints, and shared goals.', 'Delay until conflict disappears.'],
      correctIndex: 2,
      explanation: 'Correct: C. Collaboration seeks a durable win-win solution. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-10',
      type: 'mcq',
      title: 'Team Development',
      difficulty: 'medium',
      points: 5,
      prompt: `A new cross-functional team has unclear roles. Strongest action?`,
      options: ['Clarify goals, responsibilities, working agreements, decision rights, and communication norms.', 'Let ambiguity resolve itself.', 'Assign every decision to the sponsor.', 'Avoid documenting responsibilities.'],
      correctIndex: 0,
      explanation: 'Correct: A. Role clarity reduces conflict and rework. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-11',
      type: 'mcq',
      title: 'Stakeholder Communication',
      difficulty: 'medium',
      points: 5,
      prompt: `An executive wants weekly outcomes; engineers need daily operational detail. Strongest plan?`,
      options: ['Send everyone the same 60-page report.', 'Tailor communication content, format, cadence, and channel by stakeholder need.', 'Send no status until milestones.', 'Only communicate through email.'],
      correctIndex: 1,
      explanation: 'Correct: B. Communication should be stakeholder-specific. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-12',
      type: 'mcq',
      title: 'Predictive vs Adaptive',
      difficulty: 'hard',
      points: 5,
      prompt: `Requirements are highly uncertain but regulatory milestones are fixed. Strongest delivery approach?`,
      options: ['Pure predictive regardless of uncertainty.', 'Pure agile with no milestone controls.', 'No planning until requirements stabilize.', 'Use a hybrid approach: adaptive discovery/delivery within fixed governance and regulatory milestones.'],
      correctIndex: 3,
      explanation: 'Correct: D. Hybrid can combine adaptive delivery with fixed constraints. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-13',
      type: 'mcq',
      title: 'Value Delivery',
      difficulty: 'hard',
      points: 5,
      prompt: `A feature is on schedule but evidence shows customers do not use it. What should the PM emphasize?`,
      options: ['Keep building because the baseline says so.', 'Measure only budget variance.', 'Avoid stakeholder feedback.', 'Reassess value/outcomes and adapt scope or priorities rather than treating schedule completion as success.'],
      correctIndex: 3,
      explanation: 'Correct: D. Modern project success emphasizes outcomes and value. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-14',
      type: 'mcq',
      title: 'Benefits Realization',
      difficulty: 'hard',
      points: 5,
      prompt: `Who should care about benefits after delivery?`,
      options: ['No one after handover.', 'Project leadership and business owners should define transition/benefits ownership so value is measured beyond output completion.', 'Only developers.', 'Only procurement.'],
      correctIndex: 1,
      explanation: 'Correct: B. Benefits realization extends beyond producing deliverables. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-15',
      type: 'mcq',
      title: 'Business Environment',
      difficulty: 'hard',
      points: 5,
      prompt: `A new regulation changes project requirements mid-delivery. Strongest response?`,
      options: ['Ignore it until audit.', 'Ask the team to hide noncompliance.', 'Assess compliance impact, update risks/requirements/plans, engage governance, and adapt delivery.', 'Freeze the project plan.'],
      correctIndex: 2,
      explanation: 'Correct: C. Business-environment changes must be integrated into project decisions. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-16',
      type: 'mcq',
      title: 'AI in Projects',
      difficulty: 'hard',
      points: 5,
      prompt: `A team proposes an AI tool for schedule-risk prediction. Strongest PM response?`,
      options: ['Evaluate data quality, bias, privacy, explainability, validation, human oversight, and whether it improves decisions.', 'Adopt because AI is modern.', 'Ban AI entirely.', 'Use AI output as final authority.'],
      correctIndex: 0,
      explanation: 'Correct: A. AI should be governed as decision support. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-17',
      type: 'mcq',
      title: 'Sustainability',
      difficulty: 'hard',
      points: 5,
      prompt: `A cheaper project option has materially higher long-term environmental cost. Strongest response?`,
      options: ['Ignore sustainability if capital cost is lower.', 'Include sustainability and lifecycle impacts in value/trade-off analysis and governance decisions.', 'Always choose the most expensive option.', 'Treat sustainability as marketing only.'],
      correctIndex: 1,
      explanation: 'Correct: B. Current project success increasingly includes sustainability outcomes. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-18',
      type: 'mcq',
      title: 'Risk Response',
      difficulty: 'medium',
      points: 5,
      prompt: `A supplier-delay threat can be shifted contractually to a vendor with insurance/performance terms. Which strategy?`,
      options: ['Accept.', 'Exploit.', 'Enhance.', 'Transfer.'],
      correctIndex: 3,
      explanation: 'Correct: D. Transfer shifts ownership/financial consequence of a threat to a third party. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-19',
      type: 'mcq',
      title: 'Opportunity Response',
      difficulty: 'medium',
      points: 5,
      prompt: `An opportunity has high probability and could accelerate benefits. The team increases resources to raise the probability further. Which strategy?`,
      options: ['Enhance.', 'Avoid.', 'Transfer.', 'Mitigate.'],
      correctIndex: 0,
      explanation: 'Correct: A. Enhance increases probability or impact of an opportunity. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-20',
      type: 'mcq',
      title: 'Risk Residual',
      difficulty: 'hard',
      points: 5,
      prompt: `After mitigation, some risk remains. What is it called?`,
      options: ['Secondary risk only.', 'Issue log.', 'Residual risk.', 'Scope creep.'],
      correctIndex: 2,
      explanation: 'Correct: C. Residual risk remains after planned response. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-21',
      type: 'mcq',
      title: 'Critical Path',
      difficulty: 'medium',
      points: 5,
      prompt: `What defines the critical path?`,
      options: ['The shortest path.', 'The path with the most resources.', 'The longest-duration path through the schedule network that determines minimum project duration.', 'Only milestones.'],
      correctIndex: 2,
      explanation: 'Correct: C. Critical-path activities drive project completion date. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-22',
      type: 'mcq',
      title: 'Schedule Compression',
      difficulty: 'hard',
      points: 5,
      prompt: `The deadline cannot move and critical-path work is late. What should the PM evaluate?`,
      options: ['Crashing and/or fast-tracking with explicit cost, risk, and rework analysis.', 'Add people to every task blindly.', 'Remove quality controls.', 'Ignore dependencies.'],
      correctIndex: 0,
      explanation: 'Correct: A. Schedule compression has trade-offs that must be assessed. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-23',
      type: 'mcq',
      title: 'Cost Performance',
      difficulty: 'medium',
      points: 5,
      prompt: `CPI=0.82. What does that mean?`,
      options: ['The project is 18% under budget.', 'The project is ahead of schedule.', 'CPI measures only scope.', 'The project is getting $0.82 of earned value for each $1.00 spent and is over budget.'],
      correctIndex: 3,
      explanation: 'Correct: D. CPI below 1 indicates unfavorable cost efficiency. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-24',
      type: 'mcq',
      title: 'Schedule Performance',
      difficulty: 'medium',
      points: 5,
      prompt: `SPI=1.08. What does it indicate?`,
      options: ['Over budget.', 'Earned value is ahead of planned value on the schedule performance measure.', 'Behind schedule.', 'No conclusion is possible.'],
      correctIndex: 1,
      explanation: 'Correct: B. SPI above 1 is favorable schedule performance. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-25',
      type: 'mcq',
      title: 'Forecasting',
      difficulty: 'hard',
      points: 5,
      prompt: `If current cost performance is expected to continue, which EAC pattern is commonly considered?`,
      options: ['AC - EV.', 'BAC / CPI.', 'PV / EV.', 'BAC * SPI.'],
      correctIndex: 1,
      explanation: 'Correct: B. BAC/CPI is a common forecast when cost efficiency is expected to persist. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-26',
      type: 'mcq',
      title: 'Quality Cost',
      difficulty: 'medium',
      points: 5,
      prompt: `Training reviewers to prevent defects is what type of quality cost?`,
      options: ['Internal failure.', 'External failure.', 'Warranty cost only.', 'Prevention cost.'],
      correctIndex: 3,
      explanation: 'Correct: D. Prevention costs aim to avoid defects. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-27',
      type: 'mcq',
      title: 'Definition of Done',
      difficulty: 'medium',
      points: 5,
      prompt: `Why is Definition of Done important?`,
      options: ['It creates a shared quality/completion standard for increments.', 'It replaces acceptance criteria.', 'It is written only by the sponsor.', 'It eliminates testing.'],
      correctIndex: 0,
      explanation: 'Correct: A. DoD establishes consistent completion quality. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-28',
      type: 'mcq',
      title: 'Backlog Prioritization',
      difficulty: 'hard',
      points: 5,
      prompt: `What should drive backlog priority?`,
      options: ['Who shouts loudest.', 'Task size only.', 'Value, risk, dependencies, learning, urgency, and stakeholder/customer outcomes.', 'Alphabetical order.'],
      correctIndex: 2,
      explanation: 'Correct: C. Adaptive prioritization maximizes value and risk reduction. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-29',
      type: 'mcq',
      title: 'Mid-Sprint Change',
      difficulty: 'hard',
      points: 5,
      prompt: `A stakeholder repeatedly inserts urgent work into an active sprint. Strongest response?`,
      options: ['Accept every request silently.', 'Lock stakeholders out.', 'Increase velocity target.', 'Protect the sprint goal, use an agreed urgent-work/change policy, and route new priorities into backlog/replanning unless truly exceptional.'],
      correctIndex: 3,
      explanation: 'Correct: D. Uncontrolled mid-sprint insertion harms predictability and focus. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-30',
      type: 'mcq',
      title: 'Procurement',
      difficulty: 'hard',
      points: 5,
      prompt: `Requirements are stable and buyer wants price certainty. Which contract type often fits best?`,
      options: ['Open-ended cost reimbursable by default.', 'Firm-fixed-price / fixed-price structure, with clear scope and risk allocation.', 'No contract.', 'Time-and-materials with no cap.'],
      correctIndex: 1,
      explanation: 'Correct: B. Stable requirements support fixed-price risk transfer. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-31',
      type: 'mcq',
      title: 'Vendor Performance',
      difficulty: 'hard',
      points: 5,
      prompt: `A critical vendor repeatedly misses milestones. Strongest PM action?`,
      options: ['Use contract/governance mechanisms, performance evidence, corrective action, risk responses, and escalation as defined.', 'Threaten the vendor informally only.', 'Ignore until final delivery.', 'Pay extra without analysis.'],
      correctIndex: 0,
      explanation: 'Correct: A. Vendor issues should be managed through evidence and agreed mechanisms. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-32',
      type: 'mcq',
      title: 'Change Control',
      difficulty: 'hard',
      points: 5,
      prompt: `A change improves value but impacts budget and timeline. What should happen?`,
      options: ['Implement first.', 'Reject all changes.', 'Analyze impact and route it through the agreed governance/change authority before implementation.', 'Hide impact from stakeholders.'],
      correctIndex: 2,
      explanation: 'Correct: C. Integrated change control protects baselines and decision rights. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-33',
      type: 'mcq',
      title: 'Issue vs Risk',
      difficulty: 'medium',
      points: 5,
      prompt: `A supplier has already missed a committed delivery date. What is it now?`,
      options: ['Only a future risk.', 'An issue that may also create additional risks.', 'An opportunity.', 'A quality metric.'],
      correctIndex: 1,
      explanation: 'Correct: B. Issues are events that have occurred. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-34',
      type: 'mcq',
      title: 'Lessons Learned',
      difficulty: 'medium',
      points: 5,
      prompt: `When should lessons learned be captured?`,
      options: ['Only after failure.', 'Only at kickoff.', 'Never in agile.', 'Continuously throughout the project and consolidated at closure.'],
      correctIndex: 3,
      explanation: 'Correct: D. Continuous learning improves current and future delivery. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-35',
      type: 'mcq',
      title: 'Hybrid Delivery Flow',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the flow.\n\n{{image}}\n\nWhat makes the model hybrid rather than purely agile or predictive?`,
      image: { src: deliveryFlowImage, alt: 'Hybrid project delivery flow' },
      options: ['There are no iterations.', 'There is no governance.', 'Iterative delivery is combined with roadmap/release governance and benefits/outcome controls.', 'The project has only one fixed plan.'],
      correctIndex: 2,
      explanation: 'Correct: C. Hybrid combines adaptive delivery with structured governance. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-36',
      type: 'mcq',
      title: 'Escalation',
      difficulty: 'hard',
      points: 5,
      prompt: `When should a PM escalate?`,
      options: ['When an issue exceeds delegated authority/tolerance or requires decisions/resources the PM cannot resolve.', 'Every minor disagreement.', 'Never.', 'Only after project failure.'],
      correctIndex: 0,
      explanation: 'Correct: A. Escalation should follow decision rights and thresholds. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-37',
      type: 'mcq',
      title: 'Project Success',
      difficulty: 'hard',
      points: 5,
      prompt: `Which success definition is strongest?`,
      options: ['On time only.', 'On budget only.', 'All scope delivered even if unused.', 'Delivery of intended outcomes/value with acceptable performance, stakeholder adoption, quality, risk, and sustainable transition.'],
      correctIndex: 3,
      explanation: 'Correct: D. Modern success is outcome-oriented. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-38',
      type: 'mcq',
      title: 'PMP Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A project is on budget but late, adoption is weak, AI-generated forecasts are unvalidated, and a regulation changed. Strongest PM response?`,
      options: ['Report budget as green and continue unchanged.', 'Reassess outcomes/value, validate AI evidence, address regulatory impact, engage resistant stakeholders, update risks/plans, and use governance to reprioritize.', 'Focus only on schedule compression.', 'Ignore AI and regulatory issues until closure.'],
      correctIndex: 1,
      explanation: 'Correct: B. Professional project leadership integrates people, process, business environment, technology, and value. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'pm-39',
      type: 'mcq',
      title: 'Outcome Recovery Plan',
      difficulty: 'hard',
      points: 5,
      prompt: `A transformation project is technically on budget, but adoption is 35%, the expected benefit has fallen, and operations leaders are resisting the change.

What should the Project Manager do first?`,
      options: ['Reassess the intended outcomes and benefits with business owners, identify adoption barriers, update stakeholder/risk plans, and use governance to reprioritize recovery actions.', 'Declare success because the budget is green.', 'Increase the number of status meetings without changing the plan.', 'Close the project immediately without assessing transition options.'],
      correctIndex: 0,
      explanation: 'Correct: A. Project success is outcome- and value-oriented, so weak adoption and declining benefits require coordinated stakeholder, risk, and governance action. Why not B: budget performance alone does not establish success. Why not C: more meetings do not solve the underlying value/adoption problem. Why not D: closure may become appropriate, but only after impact and options are assessed.'
    },
    {
      id: 'pm-40',
      type: 'mcq',
      title: '2026 PMP Integrated Scenario',
      difficulty: 'hard',
      points: 5,
      prompt: `A hybrid project uses an AI forecasting tool. The tool predicts a two-month delay, but its training data is incomplete. A new sustainability requirement also changes supplier selection while a powerful stakeholder opposes the new sourcing approach.

What is the strongest Project Manager response?`,
      options: ['Accept the AI forecast as fact and escalate the delay immediately.', 'Ignore the AI result and keep the original supplier plan.', 'Validate the forecast and data quality, assess sustainability/value and supplier impacts, engage the resistant stakeholder, update risks/options, and take the evidence through the appropriate governance process.', 'Replace the project team with the AI tool for future planning.'],
      correctIndex: 2,
      explanation: 'Correct: C. The scenario requires integrated judgment across AI validation, sustainability, stakeholder engagement, risk, value, and governance. Why not A: unvalidated AI output should not become authoritative evidence. Why not B: ignoring new evidence and requirements creates compliance and delivery risk. Why not D: AI supports project decisions; it does not replace accountable leadership.'
    }
  ]
};
