import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Trello assessment. Questions were rewritten for practical team workflow and collaboration use.
export const trelloData = {
  id: ASSESSMENT_TYPES.trello,
  title: "Trello Workflow & Collaboration Professional Certification",
  shortTitle: "Trello",
  category: "Project Management",
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional assessment covering Trello workspaces, boards, lists, cards, labels, members, due dates, templates, automation, Power-Ups, views, workflow design, permissions, and team collaboration practices.",
  instructions: "Choose the best answer. Questions move from Trello basics to workflow design, automation, governance, and team operating practices.",
  questions: [
    {
      id: "tr-01",
      type: "mcq",
      title: "Hierarchy",
      prompt: "What is the highest level of organization in Trello?",
      options: ["Card", "List", "Board", "Workspace"],
      correctIndex: 3,
      explanation: "Workspaces contain boards; boards contain lists; lists contain cards."
    },
    {
      id: "tr-02",
      type: "mcq",
      title: "Board",
      prompt: "What does a Trello board usually represent?",
      options: ["A project, workflow, team process, or shared planning space", "Only one user profile", "A payroll account", "A database table"],
      correctIndex: 0,
      explanation: "Boards are the main visual workspace for organizing work."
    },
    {
      id: "tr-03",
      type: "mcq",
      title: "List",
      prompt: "What do lists usually represent on a Trello board?",
      options: ["Workflow stages or categories such as To Do, Doing, and Done", "Only attachments", "Only users", "Billing plans"],
      correctIndex: 0,
      explanation: "Lists organize cards into stages, categories, or priority groups."
    },
    {
      id: "tr-04",
      type: "mcq",
      title: "Card",
      prompt: "What represents an individual task or work item in Trello?",
      options: ["Workspace", "Board", "Card", "Power-Up"],
      correctIndex: 2,
      explanation: "Cards are the core unit of work in Trello."
    },
    {
      id: "tr-05",
      type: "mcq",
      title: "Card Detail",
      prompt: "Which card feature is best for breaking a task into smaller steps?",
      options: ["Checklist", "Board background", "Workspace name", "Visibility setting"],
      correctIndex: 0,
      explanation: "Checklists break a card into trackable sub-tasks."
    },
    {
      id: "tr-06",
      type: "mcq",
      title: "Members",
      prompt: "How do you assign responsibility for a card?",
      options: ["Add the person as a member to the card", "Change board background", "Archive the card", "Create a public link"],
      correctIndex: 0,
      explanation: "Card members indicate owners or participants for that task."
    },
    {
      id: "tr-07",
      type: "mcq",
      title: "Due Dates",
      prompt: "What is the purpose of due dates on cards?",
      options: ["Tracking deadlines and enabling reminders", "Changing the card color only", "Creating a new board", "Locking a workspace"],
      correctIndex: 0,
      explanation: "Due dates help teams manage deadlines and follow-up."
    },
    {
      id: "tr-08",
      type: "mcq",
      title: "Labels",
      prompt: "What are labels mainly used for?",
      options: ["Visual categorization and filtering of cards", "Deleting old cards", "Assigning billing plans", "Replacing checklists"],
      correctIndex: 0,
      explanation: "Labels make cards easier to scan and filter by type, priority, team, or status."
    },
    {
      id: "tr-09",
      type: "mcq",
      title: "Comments",
      prompt: "What is the best use of comments on a card?",
      options: ["Discussing updates and keeping task context with the work item", "Storing passwords", "Replacing all documentation", "Changing board visibility"],
      correctIndex: 0,
      explanation: "Comments create a visible collaboration history around the task."
    },
    {
      id: "tr-10",
      type: "mcq",
      title: "Attachments",
      prompt: "What can attachments be used for?",
      options: ["Adding files, links, designs, documents, or references to a card", "Changing workspace ownership", "Creating automations only", "Setting tax rates"],
      correctIndex: 0,
      explanation: "Attachments keep supporting material connected to the work."
    },
    {
      id: "tr-11",
      type: "mcq",
      title: "Activity",
      prompt: "Where can you see a card’s change history?",
      options: ["Activity section", "Board background", "Workspace billing page", "Power-Up marketplace only"],
      correctIndex: 0,
      explanation: "Activity tracks actions such as moves, comments, due dates, and member changes."
    },
    {
      id: "tr-12",
      type: "mcq",
      title: "Archive",
      prompt: "What happens when a Trello card is archived?",
      options: ["It is hidden from the board but can usually be retrieved", "It is always permanently deleted", "It becomes a new board", "It removes all members from workspace"],
      correctIndex: 0,
      explanation: "Archiving removes completed or inactive work from view without immediate deletion."
    },
    {
      id: "tr-13",
      type: "mcq",
      title: "Visibility",
      prompt: "Which are common Trello board visibility options?",
      options: ["Private, Workspace, Public", "Open, Closed, Hidden", "Draft, Final, Locked", "Gold, Silver, Bronze"],
      correctIndex: 0,
      explanation: "Board visibility controls who can see the board."
    },
    {
      id: "tr-14",
      type: "mcq",
      title: "Power-Ups",
      prompt: "What are Trello Power-Ups?",
      options: ["Integrations and extra board features", "Admin passwords", "Deleted cards", "Only paid invoices"],
      correctIndex: 0,
      explanation: "Power-Ups extend boards with integrations and specialized capabilities."
    },
    {
      id: "tr-15",
      type: "mcq",
      title: "Automation",
      prompt: "What is Trello automation used for?",
      options: ["Automating repetitive workflow actions and rules", "Replacing all team communication", "Deleting boards at random", "Creating tax returns"],
      correctIndex: 0,
      explanation: "Trello automation can move cards, assign members, set dates, create checklists, and more."
    },
    {
      id: "tr-16",
      type: "mcq",
      title: "Butler Rule",
      prompt: "In a rule like “When a card is moved to Done, mark due date complete,” what is “When a card is moved to Done”?",
      options: ["Trigger", "Action", "Board", "Attachment"],
      correctIndex: 0,
      explanation: "A Butler rule has a trigger that starts the automation and actions that follow."
    },
    {
      id: "tr-17",
      type: "mcq",
      title: "Automation Action",
      prompt: "In the same rule, what is “mark due date complete”?",
      options: ["Action", "Trigger", "Workspace", "Label color"],
      correctIndex: 0,
      explanation: "Actions are what automation performs after a trigger condition is met."
    },
    {
      id: "tr-18",
      type: "mcq",
      title: "Card Button",
      prompt: "What is a Trello card button useful for?",
      options: ["Running a repeatable action manually on a card", "Changing browser settings", "Creating a new user account", "Deleting all lists"],
      correctIndex: 0,
      explanation: "Card buttons let users trigger predefined actions on demand."
    },
    {
      id: "tr-19",
      type: "mcq",
      title: "Scheduled Automation",
      prompt: "When is scheduled automation useful?",
      options: ["For recurring actions such as creating weekly planning cards", "For changing tax law", "For shutting down boards", "For replacing all comments"],
      correctIndex: 0,
      explanation: "Scheduled commands support recurring workflows."
    },
    {
      id: "tr-20",
      type: "mcq",
      title: "Templates",
      prompt: "What is the benefit of a card template?",
      options: ["Reusing a standard card structure with descriptions, checklists, labels, and fields", "Making a card uneditable", "Deleting completed tasks", "Changing workspace billing"],
      correctIndex: 0,
      explanation: "Templates reduce setup time and improve process consistency."
    },
    {
      id: "tr-21",
      type: "mcq",
      title: "Board Template",
      prompt: "When is a board template useful?",
      options: ["When teams repeatedly run the same workflow or project structure", "Only when a board is empty", "Only for personal boards", "Never in business use"],
      correctIndex: 0,
      explanation: "Board templates standardize repeatable workflows across teams."
    },
    {
      id: "tr-22",
      type: "mcq",
      title: "Custom Fields",
      prompt: "What are custom fields used for?",
      options: ["Adding structured data such as priority, estimate, cost, status, or owner type to cards", "Changing user passwords", "Replacing all labels", "Deleting comments"],
      correctIndex: 0,
      explanation: "Custom fields make card metadata more consistent and reportable."
    },
    {
      id: "tr-23",
      type: "mcq",
      title: "Advanced Checklists",
      prompt: "What can advanced checklists add beyond basic checklist items?",
      options: ["Members and due dates on individual checklist items in supported plans", "Automatic tax filing", "Full database joins", "Video calls only"],
      correctIndex: 0,
      explanation: "Advanced checklists make sub-task ownership and deadlines more explicit."
    },
    {
      id: "tr-24",
      type: "mcq",
      title: "Calendar View",
      prompt: "What is Calendar View best for?",
      options: ["Seeing cards with due dates on a calendar", "Editing all workspace permissions", "Writing code", "Creating invoices"],
      correctIndex: 0,
      explanation: "Calendar View helps visualize scheduled work."
    },
    {
      id: "tr-25",
      type: "mcq",
      title: "Timeline View",
      prompt: "What is Timeline View useful for?",
      options: ["Planning work across time and spotting schedule overlaps", "Storing passwords", "Writing long documents", "Changing card colors only"],
      correctIndex: 0,
      explanation: "Timeline View helps teams understand timing and dependencies."
    },
    {
      id: "tr-26",
      type: "mcq",
      title: "Table View",
      prompt: "What does Workspace Table View help with?",
      options: ["Viewing cards across multiple boards in one table", "Only changing avatars", "Deleting all archived cards", "Replacing boards"],
      correctIndex: 0,
      explanation: "Table View gives cross-board visibility for planning and tracking."
    },
    {
      id: "tr-27",
      type: "mcq",
      title: "Dashboard View",
      prompt: "What is Dashboard View useful for?",
      options: ["Summarizing cards using charts and metrics", "Sending personal emails", "Writing source code", "Replacing all boards"],
      correctIndex: 0,
      explanation: "Dashboard View helps visualize workload, status, and progress."
    },
    {
      id: "tr-28",
      type: "mcq",
      title: "Map View",
      prompt: "When is Map View useful?",
      options: ["When cards represent locations such as stores, clients, or field work", "When cards are code files", "For payroll calculations", "For database indexing"],
      correctIndex: 0,
      explanation: "Map View supports location-based work planning."
    },
    {
      id: "tr-29",
      type: "mcq",
      title: "Inbox",
      prompt: "What is Trello Inbox designed for?",
      options: ["Capturing tasks and ideas before organizing them into boards", "Deleting old boards", "Changing billing plans", "Replacing all Power-Ups"],
      correctIndex: 0,
      explanation: "Inbox helps collect unstructured work before triage."
    },
    {
      id: "tr-30",
      type: "mcq",
      title: "Planner",
      prompt: "What does Trello Planner help users do?",
      options: ["Plan scheduled work and connect tasks with calendar availability", "Create board passwords", "Run SQL queries", "Calculate VAT"],
      correctIndex: 0,
      explanation: "Planner helps users organize work around time and schedule."
    },
    {
      id: "tr-31",
      type: "mcq",
      title: "Workflow Design",
      prompt: "Which Trello board structure is strongest for a simple delivery workflow?",
      options: ["Backlog, Ready, In Progress, Review, Done", "Random List 1, Random List 2", "Only one list called Everything", "A board with no cards"],
      correctIndex: 0,
      explanation: "Clear workflow stages improve visibility and team coordination."
    },
    {
      id: "tr-32",
      type: "mcq",
      title: "WIP Limits",
      prompt: "Why might a team use work-in-progress limits with Trello?",
      options: ["To prevent too much work from being started at once", "To increase multitasking chaos", "To hide blocked work", "To remove due dates"],
      correctIndex: 0,
      explanation: "WIP limits improve flow by reducing overload and context switching."
    },
    {
      id: "tr-33",
      type: "mcq",
      title: "Blocked Work",
      prompt: "What is the best Trello practice for a blocked card?",
      options: ["Mark it clearly with a label/list/comment and assign follow-up ownership", "Ignore it until the due date", "Archive it immediately", "Move it randomly"],
      correctIndex: 0,
      explanation: "Blocked work should be visible with clear ownership and next action."
    },
    {
      id: "tr-34",
      type: "mcq",
      title: "Priority",
      prompt: "How can Trello make priority visible?",
      options: ["Use labels, custom fields, list ordering, or dedicated priority lists", "Only board backgrounds", "Only profile pictures", "By hiding low-priority cards"],
      correctIndex: 0,
      explanation: "Visual priority cues help teams focus on the most important work."
    },
    {
      id: "tr-35",
      type: "mcq",
      title: "Retrospective Board",
      prompt: "How can Trello support a team retrospective?",
      options: ["Use lists such as Went Well, Needs Improvement, Ideas, and Action Items", "Only upload invoices", "Remove comments", "Create a private board with no access"],
      correctIndex: 0,
      explanation: "Retrospective boards structure feedback and improvement actions."
    },
    {
      id: "tr-36",
      type: "mcq",
      title: "Stakeholder Updates",
      prompt: "What is a good way to use Trello for stakeholder visibility?",
      options: ["Create a clean roadmap/status board with labels, due dates, owners, and high-level progress", "Invite stakeholders to every internal comment thread", "Hide all cards", "Use unclear list names"],
      correctIndex: 0,
      explanation: "A stakeholder-friendly board should provide clear status without overwhelming detail."
    },
    {
      id: "tr-37",
      type: "mcq",
      title: "Permissions",
      prompt: "Why should board permissions be reviewed regularly?",
      options: ["To ensure only appropriate people can view or edit sensitive work", "To make cards move faster", "To delete automations", "To change font size"],
      correctIndex: 0,
      explanation: "Access control matters for confidential projects and client data."
    },
    {
      id: "tr-38",
      type: "mcq",
      title: "Integration",
      prompt: "What is the main value of connecting Trello with tools like Slack, Google Drive, or Jira?",
      options: ["Keeping work updates and artifacts connected across systems", "Replacing all humans", "Making boards public", "Deleting cards automatically"],
      correctIndex: 0,
      explanation: "Integrations reduce context switching and keep relevant information attached to work."
    },
    {
      id: "tr-39",
      type: "mcq",
      title: "Automation Risk",
      prompt: "What is a risk of poorly designed Trello automation?",
      options: ["Cards move or change unexpectedly, causing confusion or missed work", "Cards become impossible to create", "Labels stop existing", "The internet shuts down"],
      correctIndex: 0,
      explanation: "Automation should be simple, documented, and tested to avoid workflow surprises."
    },
    {
      id: "tr-40",
      type: "mcq",
      title: "Professional Trello Judgment",
      prompt: "Which Trello setup is most effective for a growing team?",
      options: ["Clear board purpose, standardized lists, owners, due dates, labels/custom fields, automation for repeatable work, and periodic cleanup", "One board with every company task and no owners", "Public boards for confidential client work", "No lists, no labels, no due dates"],
      correctIndex: 0,
      explanation: "A professional Trello system combines clarity, ownership, visibility, automation, and maintenance."
    },
  ]
};
