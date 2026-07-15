import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Asana project management assessment.
// Questions progress from core task/project usage to advanced workflow design,
// automation, portfolio tracking, capacity planning, reporting, governance,
// permissions, and enterprise operating practices.
export const asanaData = {
  id: ASSESSMENT_TYPES.asana,
  title: 'Asana Project Management Certification',
  shortTitle: 'Asana',
  category: 'Project Management',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional Asana assessment covering task management, projects, views, dependencies, forms, custom fields, automation, templates, portfolios, goals, workload, reporting, permissions, governance, and enterprise workflow design.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and test practical Asana project management judgment, not just tool memorization.',
  questions: [
    {
      id: 'as-01',
      type: 'mcq',
      title: 'Task Basics',
      prompt: 'In Asana, what is the core unit of work?',
      options: ['Project', 'Portfolio', 'Task', 'Workspace'],
      correctIndex: 2,
      explanation:
        'Tasks are the fundamental building blocks of work in Asana. They represent specific pieces of work that can have owners, due dates, comments, attachments, subtasks, and custom fields.'
    },
    {
      id: 'as-02',
      type: 'mcq',
      title: 'Task Ownership',
      prompt: 'What is the best practice for assigning ownership of an Asana task?',
      options: [
        'Assign one clear task owner whenever possible',
        'Assign every task to the entire team',
        'Leave all tasks unassigned until the deadline',
        'Use comments instead of assignees'
      ],
      correctIndex: 0,
      explanation:
        'A clear task owner improves accountability. Collaborators can still follow and contribute, but one assignee should usually be responsible for completion.'
    },
    {
      id: 'as-03',
      type: 'mcq',
      title: 'Due Dates',
      prompt: 'Why should important tasks have due dates in Asana?',
      options: [
        'To make work visible in timelines, calendars, My Tasks, and workload planning',
        'To prevent comments from being added',
        'To automatically complete the task',
        'To hide the task from project members'
      ],
      correctIndex: 0,
      explanation:
        'Due dates help teams plan, prioritize, and track work across views such as List, Calendar, Timeline, My Tasks, and Workload.'
    },
    {
      id: 'as-04',
      type: 'mcq',
      title: 'Subtasks',
      prompt: 'When should subtasks be used?',
      options: [
        'When a larger task needs smaller actionable steps or contributors',
        'When a project should be deleted',
        'When work should be hidden from everyone',
        'When a task has no owner'
      ],
      correctIndex: 0,
      explanation:
        'Subtasks help break down larger tasks into smaller steps. They should still have clear owners and due dates when they represent real work.'
    },
    {
      id: 'as-05',
      type: 'mcq',
      title: 'Projects',
      prompt: 'What is the primary purpose of an Asana project?',
      options: [
        'To organize related tasks around a workflow, initiative, campaign, or deliverable',
        'To store only personal notes',
        'To replace all team communication tools',
        'To create user passwords'
      ],
      correctIndex: 0,
      explanation:
        'Projects organize related tasks and give teams shared visibility into the work required to complete an initiative or workflow.'
    },
    {
      id: 'as-06',
      type: 'mcq',
      title: 'Sections',
      prompt: 'How are sections typically used inside an Asana project?',
      options: [
        'To group tasks by phase, status, category, sprint, or workflow stage',
        'To create a new organization',
        'To replace task assignees',
        'To archive completed projects automatically'
      ],
      correctIndex: 0,
      explanation:
        'Sections help organize tasks inside project views. Common examples include To Do, In Progress, Review, Blocked, and Done.'
    },
    {
      id: 'as-07',
      type: 'mcq',
      title: 'Project Views',
      prompt: 'Which Asana view is best for managing work as cards moving through workflow stages?',
      options: ['Board view', 'Calendar view', 'Files view', 'Inbox'],
      correctIndex: 0,
      explanation:
        'Board view is useful for Kanban-style workflows where tasks move across stages such as Backlog, In Progress, Review, and Complete.'
    },
    {
      id: 'as-08',
      type: 'mcq',
      title: 'List View',
      prompt: 'When is List view usually the strongest choice?',
      options: [
        'When you need a structured task list with fields, sections, owners, and due dates',
        'When you want to remove all project data',
        'When you only need image previews',
        'When you want to prevent sorting and filtering'
      ],
      correctIndex: 0,
      explanation:
        'List view is useful for structured project execution because tasks can be organized with sections, custom fields, assignees, dates, and statuses.'
    },
    {
      id: 'as-09',
      type: 'mcq',
      title: 'Calendar View',
      prompt: 'Which use case is Calendar view best suited for?',
      options: [
        'Seeing tasks and deliverables by date',
        'Managing billing settings',
        'Writing automation code',
        'Changing organization permissions'
      ],
      correctIndex: 0,
      explanation:
        'Calendar view helps teams understand when tasks, launches, content, campaigns, or milestones are scheduled.'
    },
    {
      id: 'as-10',
      type: 'mcq',
      title: 'Timeline View',
      prompt: 'Which Asana view is most useful for visualizing a project schedule, task duration, and dependencies?',
      options: ['Timeline view', 'Inbox', 'My Tasks only', 'Search results'],
      correctIndex: 0,
      explanation:
        'Timeline view helps teams plan and visualize how tasks fit together over time, including dependencies and schedule risks.'
    },
    {
      id: 'as-11',
      type: 'mcq',
      title: 'Gantt View',
      prompt: 'What is the main value of Gantt view in Asana?',
      options: [
        'It helps plan complex project schedules with task duration, dependencies, and timeline structure',
        'It sends direct messages to all employees',
        'It stores passwords for integrations',
        'It removes the need for task owners'
      ],
      correctIndex: 0,
      explanation:
        'Gantt view is useful for structured project planning where duration, sequencing, dependencies, and schedule visibility matter.'
    },
    {
      id: 'as-12',
      type: 'mcq',
      title: 'Dependencies',
      prompt: 'How do you show that one task cannot start until another task is complete?',
      options: ['Task dependencies', 'Task likes', 'Project color', 'Inbox archive'],
      correctIndex: 0,
      explanation:
        'Task dependencies allow teams to show that one task is waiting on another, making schedule risks easier to identify.'
    },
    {
      id: 'as-13',
      type: 'mcq',
      title: 'Blocked Work',
      prompt: 'A designer cannot start the landing page until the copy is approved. What is the best Asana setup?',
      options: [
        'Create a dependency between the design task and the copy approval task',
        'Delete the design task',
        'Assign the task to nobody',
        'Move the project to Inbox'
      ],
      correctIndex: 0,
      explanation:
        'A dependency clearly shows that the design task is waiting on the copy approval task.'
    },
    {
      id: 'as-14',
      type: 'mcq',
      title: 'Milestones',
      prompt: 'What is a milestone in Asana?',
      options: [
        'A significant checkpoint or achievement in a project timeline',
        'A recurring comment',
        'A private password',
        'A task that cannot have a due date'
      ],
      correctIndex: 0,
      explanation:
        'Milestones mark important progress points such as launch date, design approval, beta release, or executive review.'
    },
    {
      id: 'as-15',
      type: 'mcq',
      title: 'Critical Path',
      prompt: 'What does the critical path help a project manager identify?',
      options: [
        'The dependent tasks that directly affect the project completion date',
        'The tasks with the most comments only',
        'The oldest completed tasks',
        'The members who use Asana least often'
      ],
      correctIndex: 0,
      explanation:
        'The critical path highlights tasks that are crucial to the final delivery date, helping teams spot schedule risks.'
    },
    {
      id: 'as-16',
      type: 'mcq',
      title: 'Multi-Homing',
      prompt: 'What does multi-homing a task mean in Asana?',
      options: [
        'Adding the same task to multiple projects without duplicating it',
        'Assigning one task to every employee',
        'Creating multiple duplicate tasks manually',
        'Deleting a task from all projects'
      ],
      correctIndex: 0,
      explanation:
        'Multi-homing allows one task to appear in multiple projects while remaining a single source of truth.'
    },
    {
      id: 'as-17',
      type: 'mcq',
      title: 'Avoiding Duplicate Work',
      prompt: 'A legal review task is relevant to both a product launch project and a compliance project. What is the best approach?',
      options: [
        'Multi-home the same task into both projects',
        'Create two duplicate tasks and update them separately',
        'Keep the task only in private notes',
        'Assign the task to no one'
      ],
      correctIndex: 0,
      explanation:
        'Multi-homing avoids duplicate work and keeps comments, status, files, and completion state in one task.'
    },
    {
      id: 'as-18',
      type: 'mcq',
      title: 'Task Comments',
      prompt: 'Where is the best place to discuss decisions related to a specific task?',
      options: ['Task comments', 'Project color settings', 'Billing page', 'Workspace logo'],
      correctIndex: 0,
      explanation:
        'Task comments keep discussion, decisions, questions, and updates attached to the work itself.'
    },
    {
      id: 'as-19',
      type: 'mcq',
      title: 'Collaborators',
      prompt: 'What is the purpose of adding collaborators to a task?',
      options: [
        'To notify relevant people about updates, comments, and progress on that task',
        'To make everyone the task owner',
        'To hide the task from the assignee',
        'To convert the task into a portfolio'
      ],
      correctIndex: 0,
      explanation:
        'Collaborators follow task activity and receive relevant updates, while the assignee remains responsible for completion.'
    },
    {
      id: 'as-20',
      type: 'mcq',
      title: 'My Tasks',
      prompt: 'What does My Tasks show?',
      options: [
        'Tasks assigned to you across projects',
        'Only archived projects',
        'Only organization billing data',
        'Only tasks assigned to guests'
      ],
      correctIndex: 0,
      explanation:
        'My Tasks is a personalized view of work assigned to the user across Asana.'
    },
    {
      id: 'as-21',
      type: 'mcq',
      title: 'Inbox',
      prompt: 'What is the primary purpose of Asana Inbox?',
      options: [
        'A notification center for updates on work you follow',
        'A place to store database backups',
        'A replacement for project timelines',
        'A tool used only by admins'
      ],
      correctIndex: 0,
      explanation:
        'Inbox helps users keep track of comments, mentions, task updates, status updates, and other relevant activity.'
    },
    {
      id: 'as-22',
      type: 'mcq',
      title: 'Forms',
      prompt: 'What is the best way to collect standardized work requests from stakeholders into Asana?',
      options: ['Forms', 'Random direct messages', 'Manual screenshots', 'Unstructured email threads only'],
      correctIndex: 0,
      explanation:
        'Forms standardize intake by collecting required information and turning submissions into actionable tasks inside a project.'
    },
    {
      id: 'as-23',
      type: 'mcq',
      title: 'Intake Workflow',
      prompt: 'A marketing team receives incomplete campaign requests from multiple departments. What Asana setup would improve intake quality?',
      options: [
        'Use a Form with required questions mapped to useful task fields',
        'Ask requesters to send informal chat messages',
        'Create one blank task for every request',
        'Remove all due dates from the project'
      ],
      correctIndex: 0,
      explanation:
        'Forms can require key information upfront and route submissions into a structured project workflow.'
    },
    {
      id: 'as-24',
      type: 'mcq',
      title: 'Custom Fields',
      prompt: 'What are custom fields used for in Asana?',
      options: [
        'Adding structured data such as priority, status, budget, effort, department, or stage',
        'Changing only the app theme',
        'Creating user passwords',
        'Deleting completed work automatically'
      ],
      correctIndex: 0,
      explanation:
        'Custom fields add structured information to tasks and projects, making work easier to filter, sort, report, and standardize.'
    },
    {
      id: 'as-25',
      type: 'mcq',
      title: 'Global vs Local Fields',
      prompt: 'When should a global custom field be preferred?',
      options: [
        'When the same field should be reused consistently across multiple projects or teams',
        'When the field should exist in only one private project',
        'When the field is not important for reporting',
        'When the team wants inconsistent naming'
      ],
      correctIndex: 0,
      explanation:
        'Global custom fields help maintain consistency across projects, especially for reporting and standardized processes.'
    },
    {
      id: 'as-26',
      type: 'mcq',
      title: 'Rules',
      prompt: 'What is the purpose of Rules in Asana?',
      options: [
        'To automate repetitive actions based on triggers and conditions',
        'To replace all project owners',
        'To prevent task comments',
        'To manually export every task'
      ],
      correctIndex: 0,
      explanation:
        'Rules automate workflow steps such as assigning tasks, moving tasks to sections, setting fields, adding collaborators, or triggering actions.'
    },
    {
      id: 'as-27',
      type: 'mcq',
      title: 'Automation Design',
      prompt: 'A task should automatically move to the Review section when its status field changes to Ready for Review. Which Asana feature should be used?',
      options: ['Rule', 'Portfolio', 'Inbox', 'Workspace logo'],
      correctIndex: 0,
      explanation:
        'A rule can automate this workflow by using a trigger, such as a field value change, and an action, such as moving the task to a section.'
    },
    {
      id: 'as-28',
      type: 'mcq',
      title: 'Project Templates',
      prompt: 'Why would a team use a project template?',
      options: [
        'To standardize repeatable workflows and quickly create projects with predefined tasks, sections, and structure',
        'To hide project work from the organization',
        'To remove the need for owners and due dates',
        'To turn all tasks into emails'
      ],
      correctIndex: 0,
      explanation:
        'Project templates help teams launch repeatable workflows consistently, such as campaigns, onboarding, launches, audits, and client projects.'
    },
    {
      id: 'as-29',
      type: 'mcq',
      title: 'Task Templates',
      prompt: 'When are task templates useful?',
      options: [
        'When recurring task types need a consistent checklist, fields, description, and collaborators',
        'When every task must be unique and unstructured',
        'When a project has no repeatable work',
        'When the team wants to avoid process consistency'
      ],
      correctIndex: 0,
      explanation:
        'Task templates are useful for repeatable work items such as design requests, content briefs, approvals, onboarding steps, or QA reviews.'
    },
    {
      id: 'as-30',
      type: 'mcq',
      title: 'Approvals',
      prompt: 'What is the purpose of an approval task?',
      options: [
        'To let an approver approve, reject, or request changes on work',
        'To permanently delete task comments',
        'To remove task ownership',
        'To make a task invisible'
      ],
      correctIndex: 0,
      explanation:
        'Approval tasks make review decisions explicit and trackable, which is useful for creative, legal, compliance, and stakeholder sign-offs.'
    },
    {
      id: 'as-31',
      type: 'mcq',
      title: 'Project Status Updates',
      prompt: 'What is the best use of project status updates?',
      options: [
        'Communicating project health, progress, risks, blockers, and next steps to stakeholders',
        'Changing user passwords',
        'Replacing every task comment',
        'Deleting old milestones'
      ],
      correctIndex: 0,
      explanation:
        'Status updates help project owners communicate whether a project is on track, at risk, or off track, along with key context.'
    },
    {
      id: 'as-32',
      type: 'mcq',
      title: 'Dashboards',
      prompt: 'Why would a project manager use dashboards or reporting in Asana?',
      options: [
        'To visualize project data such as task status, workload, priority, completion, or risks',
        'To store only personal passwords',
        'To prevent stakeholders from seeing progress',
        'To replace all task assignees'
      ],
      correctIndex: 0,
      explanation:
        'Dashboards help convert project data into useful insights for decision-making and stakeholder reporting.'
    },
    {
      id: 'as-33',
      type: 'mcq',
      title: 'Portfolios',
      prompt: 'What is the primary purpose of an Asana portfolio?',
      options: [
        'To track multiple related projects at a higher level',
        'To create subtasks inside one task only',
        'To replace every project with a private note',
        'To store browser cookies'
      ],
      correctIndex: 0,
      explanation:
        'Portfolios give leaders and managers a high-level view of progress, health, ownership, timelines, and risks across multiple projects.'
    },
    {
      id: 'as-34',
      type: 'mcq',
      title: 'Portfolio Reporting',
      prompt: 'A director wants to track 12 active launch projects and quickly identify which are at risk. What Asana feature is most appropriate?',
      options: ['Portfolio', 'Single task comment', 'Personal scratchpad', 'Archived project'],
      correctIndex: 0,
      explanation:
        'A portfolio is designed to monitor many projects together and surface project health, ownership, status, and progress.'
    },
    {
      id: 'as-35',
      type: 'mcq',
      title: 'Workload',
      prompt: 'What is the main purpose of Workload in Asana?',
      options: [
        'To visualize team capacity and understand how work is distributed across people',
        'To create random task names',
        'To permanently hide overdue tasks',
        'To replace project timelines'
      ],
      correctIndex: 0,
      explanation:
        'Workload helps managers understand capacity, balance work, and spot over-allocation across projects.'
    },
    {
      id: 'as-36',
      type: 'mcq',
      title: 'Capacity Planning',
      prompt: 'A manager sees one designer is overloaded while another has available capacity. What is the best Asana-based response?',
      options: [
        'Use Workload insights to rebalance assignments or adjust due dates',
        'Ignore the imbalance until deadlines are missed',
        'Delete all design tasks',
        'Move every task to Inbox'
      ],
      correctIndex: 0,
      explanation:
        'Workload visibility should be used to rebalance work, adjust priorities, or revise timelines before overload becomes a delivery risk.'
    },
    {
      id: 'as-37',
      type: 'mcq',
      title: 'Goals',
      prompt: 'What is the purpose of Asana Goals?',
      options: [
        'To connect high-level objectives to the work that supports them',
        'To create only personal reminders',
        'To replace all project tasks',
        'To remove executive visibility'
      ],
      correctIndex: 0,
      explanation:
        'Goals help organizations connect strategy to execution by linking objectives with supporting work.'
    },
    {
      id: 'as-38',
      type: 'mcq',
      title: 'Strategy to Execution',
      prompt: 'A company wants to connect quarterly objectives to the projects and portfolios delivering those outcomes. What should they use?',
      options: ['Goals linked to supporting work', 'Only individual task comments', 'Unstructured chat messages', 'Archived templates'],
      correctIndex: 0,
      explanation:
        'Goals provide a way to connect company or team objectives with the projects, portfolios, and work that drive progress.'
    },
    {
      id: 'as-39',
      type: 'mcq',
      title: 'Bundles',
      prompt: 'What is an Asana Bundle?',
      options: [
        'A reusable combination of rules, fields, sections, and task templates that can be applied across multiple projects',
        'A group discount code',
        'A private user password',
        'A mobile-only notification'
      ],
      correctIndex: 0,
      explanation:
        'Bundles help teams apply consistent processes across many projects by grouping reusable workflow elements.'
    },
    {
      id: 'as-40',
      type: 'mcq',
      title: 'Process Governance',
      prompt: 'A program team manages 30 similar client onboarding projects and wants consistent stages, fields, rules, and task templates across all of them. What is the strongest approach?',
      options: [
        'Create and apply a Bundle to standardize the workflow across projects',
        'Ask every project owner to manually recreate the workflow from memory',
        'Avoid custom fields and automation completely',
        'Use a different naming convention for every project'
      ],
      correctIndex: 0,
      explanation:
        'Bundles are useful for governance because they help standardize project structure and workflow behavior across many projects.'
    }
  ]
};