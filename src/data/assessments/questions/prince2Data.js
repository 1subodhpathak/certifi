import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import stageDashboardImage from '../../../assets/assessments/prince2/stage_dashboard.png';
import businessCaseImage from '../../../assets/assessments/prince2/business_case.png';
import qualityDashboardImage from '../../../assets/assessments/prince2/quality_dashboard.png';
import riskRegisterImage from '../../../assets/assessments/prince2/risk_register.png';
import peopleDashboardImage from '../../../assets/assessments/prince2/people_dashboard.png';
import processFlowImage from '../../../assets/assessments/prince2/process_flow.png';

export const prince2Data = {
  id: ASSESSMENT_TYPES.prince2,
  title: 'PRINCE2 7 Project Management Foundation Certification',
  shortTitle: 'PRINCE2 7',
  category: 'Project Management',
  durationMinutes: 75,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: 'PRINCE2 7 assessment covering the seven principles, seven practices, seven processes, Business Case, products, stages, tolerances, exceptions, people, sustainability, digital/data management, risk, quality, issues, and governance.',
  instructions: '40 scenario-based questions, 75 minutes, 200 marks. Use the dashboards, charts, tables, image exhibits, and process diagrams. Choose the strongest professional response.',
  questions: [
    {
      id: 'p2-01',
      type: 'mcq',
      title: 'Manage by Exception',
      difficulty: 'hard',
      points: 5,
      prompt: `Review stage status.\n\n{{image}}\n\nWhat should the Project Manager do when time tolerance is forecast to be exceeded?`,
      image: { src: stageDashboardImage, alt: 'PRINCE2 stage status dashboard' },
      options: ['Silently rebaseline the Stage Plan.', 'Raise an exception to the Project Board with impact/options rather than continuing outside delegated tolerance.', 'Ignore it until the stage ends.', 'Ask the Team Manager to change the project tolerance.'],
      correctIndex: 1,
      explanation: 'Correct: B. Forecast tolerance breach triggers exception management. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-02',
      type: 'mcq',
      title: 'Continued Business Justification',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the Business Case.\n\n{{image}}\n\nWhat is the strongest Board question?`,
      image: { src: businessCaseImage, alt: 'PRINCE2 Business Case review' },
      options: ['Can the original business case be kept unchanged for consistency?', 'Can quality criteria be removed to protect benefits?', 'Can the Project Manager approve continuation alone?', 'Does the project still remain desirable, viable, and achievable enough to justify continued investment?'],
      correctIndex: 3,
      explanation: 'Correct: D. Continued business justification must be reassessed as conditions change. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-03',
      type: 'mcq',
      title: 'Quality Practice',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the quality dashboard.\n\n{{image}}\n\nWhat should happen to the API product?`,
      image: { src: qualityDashboardImage, alt: 'PRINCE2 quality dashboard' },
      options: ['Evaluate it against its documented quality specifications/acceptance criteria and resolve nonconformities before acceptance.', 'Accept it because most products passed.', 'Delete the quality criteria.', 'Let schedule performance override quality.'],
      correctIndex: 0,
      explanation: 'Correct: A. Quality is judged against defined product requirements. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-04',
      type: 'mcq',
      title: 'Risk Practice',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the risk register.\n\n{{image}}\n\nWhich item is an opportunity rather than a threat?`,
      image: { src: riskRegisterImage, alt: 'PRINCE2 risk register' },
      options: ['Supplier delay.', 'Low adoption.', 'Earlier launch.', 'Data breach.'],
      correctIndex: 2,
      explanation: 'Correct: C. Earlier launch is a favorable uncertain event. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-05',
      type: 'mcq',
      title: 'People Element',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the people dashboard.\n\n{{image}}\n\nWhat is the strongest project response?`,
      image: { src: peopleDashboardImage, alt: 'PRINCE2 people and change dashboard' },
      options: ['Treat adoption/readiness as a managed project concern: engage resistant operations stakeholders, plan change/training, and track readiness.', 'Focus only on product delivery.', 'Escalate all resistance as misconduct.', 'Remove adoption metrics.'],
      correctIndex: 0,
      explanation: 'Correct: A. PRINCE2 7 explicitly emphasizes people and successful change. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-06',
      type: 'mcq',
      title: 'Seven Principles',
      difficulty: 'easy',
      points: 5,
      prompt: `How many PRINCE2 7 principles are there?`,
      options: ['Five.', 'Nine.', 'Seven.', 'Twelve.'],
      correctIndex: 2,
      explanation: 'Correct: C. PRINCE2 7 retains seven principles. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-07',
      type: 'mcq',
      title: 'Seven Practices',
      difficulty: 'easy',
      points: 5,
      prompt: `What replaced the old 'themes' terminology in PRINCE2 7?`,
      options: ['Five ceremonies.', 'Ten knowledge areas.', 'Three streams.', 'Seven management practices.'],
      correctIndex: 3,
      explanation: 'Correct: D. PRINCE2 7 uses the term practices. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-08',
      type: 'mcq',
      title: 'Seven Processes',
      difficulty: 'easy',
      points: 5,
      prompt: `How many core PRINCE2 processes are retained in Version 7?`,
      options: ['Four.', 'Seven.', 'Eight.', 'Twelve.'],
      correctIndex: 1,
      explanation: 'Correct: B. PRINCE2 7 retains seven processes. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-09',
      type: 'mcq',
      title: 'Starting Up a Project',
      difficulty: 'medium',
      points: 5,
      prompt: `What is the purpose of Starting Up a Project?`,
      options: ['Create every product in detail.', 'Run the final benefits review.', 'Determine whether the project is worthwhile and viable enough to justify initiation.', 'Approve all stage exceptions.'],
      correctIndex: 2,
      explanation: 'Correct: C. Starting Up provides pre-project viability checks. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-10',
      type: 'mcq',
      title: 'Initiating a Project',
      difficulty: 'medium',
      points: 5,
      prompt: `What should Initiating a Project establish?`,
      options: ['A solid foundation for managing the project, including baselines, controls, approaches, and justification.', 'Only team timesheets.', 'Only procurement contracts.', 'Only final acceptance.'],
      correctIndex: 0,
      explanation: 'Correct: A. Initiation establishes how the project will be managed. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-11',
      type: 'mcq',
      title: 'Directing a Project',
      difficulty: 'medium',
      points: 5,
      prompt: `Who primarily performs Directing a Project?`,
      options: ['Only Team Managers.', 'The Project Board.', 'End users.', 'External auditors.'],
      correctIndex: 1,
      explanation: 'Correct: B. The Board provides overall direction and key decisions. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-12',
      type: 'mcq',
      title: 'Controlling a Stage',
      difficulty: 'medium',
      points: 5,
      prompt: `Who is primarily responsible for day-to-day control of a management stage?`,
      options: ['The Executive only.', 'Senior Supplier only.', 'Project Assurance only.', 'The Project Manager.'],
      correctIndex: 3,
      explanation: 'Correct: D. The PM controls work within delegated stage tolerance. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-13',
      type: 'mcq',
      title: 'Managing Product Delivery',
      difficulty: 'medium',
      points: 5,
      prompt: `What is the core link in Managing Product Delivery?`,
      options: ['The Board directly assigns every task.', 'Users approve budgets.', 'The PM does all specialist work.', 'Team Managers/teams accept, execute, and deliver authorized Work Packages to the Project Manager.'],
      correctIndex: 3,
      explanation: 'Correct: D. Work Packages connect project management with delivery. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-14',
      type: 'mcq',
      title: 'Managing a Stage Boundary',
      difficulty: 'hard',
      points: 5,
      prompt: `What is a key purpose of Managing a Stage Boundary?`,
      options: ['Close the project automatically.', 'Review current-stage performance, update Business Case/project plan, and prepare the next Stage Plan for Board decision.', 'Remove tolerances.', 'Skip lessons learned.'],
      correctIndex: 1,
      explanation: 'Correct: B. Stage boundaries support controlled continuation decisions. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-15',
      type: 'mcq',
      title: 'Closing a Project',
      difficulty: 'medium',
      points: 5,
      prompt: `What should controlled closure confirm?`,
      options: ['All future benefits are guaranteed.', 'Every risk is zero.', 'Products are accepted/handed over appropriately, objectives are reviewed, follow-on actions/benefits/lessons are addressed, and closure is authorized.', 'No documentation is needed.'],
      correctIndex: 2,
      explanation: 'Correct: C. Closure is deliberate and controlled. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-16',
      type: 'mcq',
      title: 'Continued Business Justification',
      difficulty: 'medium',
      points: 5,
      prompt: `What does the principle require?`,
      options: ['A valid reason for the project to start and continue throughout its life.', 'A fixed plan that never changes.', 'A benefit only at project end.', 'No sponsor involvement.'],
      correctIndex: 0,
      explanation: 'Correct: A. Justification is continuous. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-17',
      type: 'mcq',
      title: 'Learn from Experience',
      difficulty: 'medium',
      points: 5,
      prompt: `How should lessons be used?`,
      options: ['Capture only failures at closure.', 'Seek previous lessons at startup, record/apply lessons during the project, and pass useful lessons onward.', 'Never change practice mid-project.', 'Keep lessons private.'],
      correctIndex: 1,
      explanation: 'Correct: B. Learning is continuous. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-18',
      type: 'mcq',
      title: 'Defined Roles',
      difficulty: 'medium',
      points: 5,
      prompt: `Why does PRINCE2 define roles/responsibilities?`,
      options: ['To maximize bureaucracy.', 'To eliminate teamwork.', 'To centralize every decision with the PM.', 'To clarify business, user, supplier interests, accountability, and decision rights.'],
      correctIndex: 3,
      explanation: 'Correct: D. Clear accountability is a core governance feature. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-19',
      type: 'mcq',
      title: 'Manage by Stages',
      difficulty: 'medium',
      points: 5,
      prompt: `Why manage by stages?`,
      options: ['It creates decision points where the Board can review viability/performance before committing further resources.', 'To avoid planning.', 'To make every stage the same length.', 'To remove tolerances.'],
      correctIndex: 0,
      explanation: 'Correct: A. Stages support progressive commitment and control. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-20',
      type: 'mcq',
      title: 'Focus on Products',
      difficulty: 'medium',
      points: 5,
      prompt: `What does Focus on Products emphasize?`,
      options: ['Track hours before requirements.', 'Prioritize tasks over outcomes.', 'Define what must be delivered and its quality criteria before focusing on activities.', 'Avoid product descriptions.'],
      correctIndex: 2,
      explanation: 'Correct: C. Product-based focus clarifies outputs and acceptance. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-21',
      type: 'mcq',
      title: 'Tailoring',
      difficulty: 'hard',
      points: 5,
      prompt: `What does tailoring mean in PRINCE2 7?`,
      options: ['Delete principles that are inconvenient.', 'Use every management product at maximum detail.', "Adapt the method's application to project context while preserving the method's intent and effective governance.", 'Ignore project scale.'],
      correctIndex: 2,
      explanation: 'Correct: C. PRINCE2 is designed to be adapted to context. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-22',
      type: 'mcq',
      title: 'Business Case Practice',
      difficulty: 'hard',
      points: 5,
      prompt: `Who is accountable for the Business Case at Project Board level?`,
      options: ['The Executive.', 'Team Manager.', 'Project Support.', 'Senior Supplier alone.'],
      correctIndex: 0,
      explanation: 'Correct: A. The Executive owns the business perspective/justification. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-23',
      type: 'mcq',
      title: 'Organizing Practice',
      difficulty: 'hard',
      points: 5,
      prompt: `What is the strongest Board composition principle?`,
      options: ['Only technical specialists.', 'Only finance.', 'Only the Project Manager.', 'Represent business, user, and supplier interests with clear accountability.'],
      correctIndex: 3,
      explanation: 'Correct: D. PRINCE2 governance balances the three primary interests. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-24',
      type: 'mcq',
      title: 'Plans Practice',
      difficulty: 'hard',
      points: 5,
      prompt: `What should a Stage Plan do?`,
      options: ['Replace the Project Plan permanently.', 'Provide the detailed basis for managing and controlling a specific management stage within delegated tolerances.', 'Serve only as a lessons log.', 'Contain only budget.'],
      correctIndex: 1,
      explanation: 'Correct: B. Stage Plans are detailed control plans. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-25',
      type: 'mcq',
      title: 'Quality Practice',
      difficulty: 'medium',
      points: 5,
      prompt: `What is the value of a Product Description?`,
      options: ['List only activities.', 'Define product purpose, composition/requirements, quality specifications, and acceptance/quality methods as appropriate.', 'Replace the Business Case.', 'Authorize project funding.'],
      correctIndex: 1,
      explanation: 'Correct: B. Product descriptions anchor product quality. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-26',
      type: 'mcq',
      title: 'Risk Practice',
      difficulty: 'medium',
      points: 5,
      prompt: `What is the difference between risk owner and risk actionee?`,
      options: ['They are always the same role.', 'The actionee owns the Business Case.', 'The owner only records the risk.', 'The owner is accountable for managing the risk; an actionee carries out specific response actions.'],
      correctIndex: 3,
      explanation: 'Correct: D. Risk accountability and action execution can be separate. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-27',
      type: 'mcq',
      title: 'Issues Practice',
      difficulty: 'hard',
      points: 5,
      prompt: `A request for change is raised. Strongest response?`,
      options: ['Capture/classify it, assess impact and options, and use delegated change authority/tolerances for a decision.', 'Implement immediately.', 'Reject every change.', 'Ask the team to hide the impact.'],
      correctIndex: 0,
      explanation: 'Correct: A. Change/issues are controlled through analysis and authority. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-28',
      type: 'mcq',
      title: 'Progress Practice',
      difficulty: 'hard',
      points: 5,
      prompt: `What does the progress practice primarily answer?`,
      options: ['Who wrote the most code?', 'What colors should reports use?', 'Where are we now, where are we going, and should we continue or escalate based on performance/tolerances?', 'How many meetings occurred?'],
      correctIndex: 2,
      explanation: 'Correct: C. Progress supports control and exception decisions. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-29',
      type: 'mcq',
      title: 'Tolerance Dimensions',
      difficulty: 'hard',
      points: 5,
      prompt: `Which set reflects PRINCE2 project performance targets including Version 7 emphasis?`,
      options: ['Only time, cost, scope.', 'Only quality and risk.', 'Revenue, headcount, market share.', 'Time, cost, quality, scope, benefits, risk, and sustainability.'],
      correctIndex: 3,
      explanation: 'Correct: D. PRINCE2 7 includes sustainability alongside traditional performance targets. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-30',
      type: 'mcq',
      title: 'Exception Report',
      difficulty: 'hard',
      points: 5,
      prompt: `When is an Exception Report appropriate?`,
      options: ['For every daily status update.', 'When a stage/project tolerance is forecast to be exceeded and higher authority needs impact/options.', 'Only at closure.', 'Whenever a product passes quality.'],
      correctIndex: 1,
      explanation: 'Correct: B. Exception reporting supports manage-by-exception. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-31',
      type: 'mcq',
      title: 'Exception Plan',
      difficulty: 'hard',
      points: 5,
      prompt: `What is an Exception Plan?`,
      options: ['A plan that may replace the plan in exception after approval, showing how recovery/continuation will be managed.', 'A risk register.', 'A daily Team Plan.', 'A quality test script.'],
      correctIndex: 0,
      explanation: 'Correct: A. Exception Plans respond to approved recovery decisions. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-32',
      type: 'mcq',
      title: 'Work Package',
      difficulty: 'medium',
      points: 5,
      prompt: `What should a Work Package communicate?`,
      options: ['Only budget.', 'Only team names.', 'Authorized work/products, constraints, reporting, quality, interfaces, and acceptance expectations for a team.', 'Only risks.'],
      correctIndex: 2,
      explanation: 'Correct: C. Work Packages define delegated delivery expectations. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-33',
      type: 'mcq',
      title: 'Highlight Report',
      difficulty: 'medium',
      points: 5,
      prompt: `Who normally receives Highlight Reports from the Project Manager?`,
      options: ['Only end users.', 'The Project Board.', 'Only suppliers.', 'External auditors only.'],
      correctIndex: 1,
      explanation: 'Correct: B. Highlight Reports provide regular Board-level progress information. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-34',
      type: 'mcq',
      title: 'Checkpoint Report',
      difficulty: 'medium',
      points: 5,
      prompt: `Who typically sends a Checkpoint Report to the Project Manager?`,
      options: ['The Executive.', 'Project Assurance only.', 'A regulator.', 'A Team Manager / delivery team lead.'],
      correctIndex: 3,
      explanation: 'Correct: D. Checkpoint Reports provide delivery-team progress to the PM. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-35',
      type: 'mcq',
      title: 'Sustainability',
      difficulty: 'hard',
      points: 5,
      prompt: `How should sustainability be treated in PRINCE2 7?`,
      options: ['As optional marketing text only.', 'Only after closure.', 'As a project performance consideration integrated into planning, decisions, and whole-life product/project impacts.', 'Only for environmental projects.'],
      correctIndex: 2,
      explanation: 'Correct: C. Version 7 explicitly integrates sustainability. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-36',
      type: 'mcq',
      title: 'Digital and Data',
      difficulty: 'hard',
      points: 5,
      prompt: `What is the strongest PRINCE2 7 approach to digital/data use?`,
      options: ['Use digital/data tools deliberately to improve decisions/control while considering data quality, governance, security, and context.', 'Use AI output as authority.', 'Avoid all digital tools.', 'Collect data without purpose.'],
      correctIndex: 0,
      explanation: 'Correct: A. PRINCE2 7 explicitly addresses digital/data management. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-37',
      type: 'mcq',
      title: 'Process Flow',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the process flow.\n\n{{image}}\n\nWhy are stage boundaries important?`,
      image: { src: processFlowImage, alt: 'PRINCE2 7 process flow' },
      options: ['They eliminate Board decisions.', 'They remove the need for a Business Case.', 'They mean every stage must use waterfall.', 'They create governance points for reviewing performance, justification, risk, and next-stage commitment.'],
      correctIndex: 3,
      explanation: 'Correct: D. Stage boundaries support controlled decision-making. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-38',
      type: 'mcq',
      title: 'Project Board Decision',
      difficulty: 'hard',
      points: 5,
      prompt: `The stage remains within tolerance, but the Business Case is no longer attractive. What should the Board do?`,
      options: ['Continue because tolerance is the only success test.', 'Reassess continued justification and consider stopping or redirecting the project despite stage performance being within tolerance.', 'Ask the PM to hide the Business Case change.', 'Wait until final closure.'],
      correctIndex: 1,
      explanation: 'Correct: B. Continued business justification overrides blind continuation. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-39',
      type: 'mcq',
      title: 'Premature Closure',
      difficulty: 'hard',
      points: 5,
      prompt: `A project is no longer justified. What is the strongest PRINCE2 response?`,
      options: ['Keep spending until the stage ends.', 'Delete all records.', 'Use controlled premature closure: confirm status/products, protect value, document lessons/actions, and close under Board direction.', 'Let the supplier decide alone.'],
      correctIndex: 2,
      explanation: 'Correct: C. PRINCE2 supports controlled early closure when justification ends. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'p2-40',
      type: 'mcq',
      title: 'PRINCE2 7 Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `A stage is near tolerance, adoption is weak, benefits fell, and a digital tool is producing unreliable forecasts. Strongest response?`,
      options: ['Integrate the evidence: reassess Business Case, people/change readiness, risk and digital-data quality, forecast tolerance, and escalate to the Board if authority is exceeded.', 'Focus only on schedule.', 'Continue because products are being built.', 'Replace human judgment with the tool.'],
      correctIndex: 0,
      explanation: 'Correct: A. PRINCE2 7 integrates governance, justification, people, data, risk, and exception management. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    }
  ]
};
