import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const jiraData = {
  id: ASSESSMENT_TYPES.jira,
  title: "Jira Agile Project Management Professional Certification",
  shortTitle: "JIRA",
  category: "Project Management",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional Jira assessment covering Scrum, Kanban, issue hierarchy, workflows, JQL, boards, permissions, releases, reports, automation, backlog health, and delivery governance.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical Jira and Agile delivery judgment.",
  questions: [
{ id: 'jr-01', type: 'mcq', title: 'Agile Frameworks', prompt: 'Which board type is best for teams with a continuous flow of work and no fixed sprints?', options: ['Scrum', 'Kanban', 'Business', 'Project'], correctIndex: 1, explanation: 'Kanban boards focus on continuous delivery and work-in-progress limits.' },
        { id: 'jr-02', type: 'mcq', title: 'Issue Types', prompt: 'What is the default issue type for a large piece of work that can be broken down into stories?', options: ['Task', 'Bug', 'Epic', 'Sub-task'], correctIndex: 2, explanation: 'Epics are used to group related user stories and tasks.' },
        { id: 'jr-03', type: 'mcq', title: 'Query Language', prompt: 'What does JQL stand for?', options: ['Jira Query Language', 'Java Quick Link', 'Joint Queue Logic', 'Jira Queue List'], correctIndex: 0, explanation: 'JQL is the flexible language for searching issues in Jira.' },
        { id: 'jr-04', type: 'mcq', title: 'Workflows', prompt: 'In a Jira workflow, what moves an issue from one status to another?', options: ['Status', 'Transition', 'Resolution', 'Assignee'], correctIndex: 1, explanation: 'Transitions are the paths between statuses in a workflow.' },
        { id: 'jr-05', type: 'mcq', title: 'Estimation', prompt: 'What is a common unit for estimating effort in Scrum teams using Jira?', options: ['Hours', 'Story Points', 'Days', 'Complexity Score'], correctIndex: 1, explanation: 'Story points are a relative measure of effort and complexity.' },
        { id: 'jr-06', type: 'mcq', title: 'Backlog', prompt: 'Where do new requirements and tasks wait before being planned into a sprint?', options: ['Sprint', 'Backlog', 'Archive', 'Active Sprints'], correctIndex: 1, explanation: 'The backlog is the ordered list of everything that might be needed in the product.' },
        { id: 'jr-07', type: 'mcq', title: 'Components', prompt: 'What is a "Component" in Jira?', options: ['A user role', 'A subsection of a project (e.g., UI, Database)', 'A plugin', 'A type of comment'], correctIndex: 1, explanation: 'Components are sub-sections of a project used to group issues.' },
        { id: 'jr-08', type: 'mcq', title: 'Versions', prompt: 'Which feature is used to track software releases?', options: ['Labels', 'Components', 'Versions (Fix Version)', 'Epics'], correctIndex: 2, explanation: 'Versions help manage and track releases/milestones.' },
        { id: 'jr-09', type: 'mcq', title: 'Reports', prompt: 'Which report shows the amount of work remaining in a sprint over time?', options: ['Velocity Chart', 'Burndown Chart', 'Sprint Report', 'Cumulative Flow Diagram'], correctIndex: 1, explanation: 'The Burndown Chart shows the remaining work vs. time for the sprint.' },
        { id: 'jr-10', type: 'mcq', title: 'JQL Basics', prompt: 'Write a simple JQL query to find all unresolved bugs in project "PROJ".', options: ['project = PROJ AND type = Bug', 'project = PROJ AND issuetype = Bug AND resolution is EMPTY', 'status = Open AND project = PROJ', 'find Bugs in PROJ'], correctIndex: 1, explanation: 'resolution is EMPTY specifically targets unresolved issues.' },
        { id: 'jr-11', type: 'mcq', title: 'Permissions', prompt: 'What is a "Permission Scheme" in Jira?', options: ['A list of passwords', 'A set of permissions that can be applied to projects', 'A workflow step', 'A security group'], correctIndex: 1, explanation: 'Permission schemes define who can see or edit issues in a project.' },
        { id: 'jr-12', type: 'mcq', title: 'Dashboards', prompt: 'What are the individual widgets on a Jira Dashboard called?', options: ['Add-ons', 'Gadgets', 'Tools', 'Slices'], correctIndex: 1, explanation: 'Gadgets are the configurable blocks that show charts, filters, etc.' },
        { id: 'jr-13', type: 'mcq', title: 'Linking', prompt: 'What does "Issue Linking" allow you to do?', options: ['Delete issues', 'Create a relationship between issues (e.g., "blocks", "relates to")', 'Send emails', 'Change priority'], correctIndex: 1, explanation: 'Linking explains the relationship between different tasks.' },
        { id: 'jr-14', type: 'mcq', title: 'Board Filters', prompt: 'How is the data on a Jira board determined?', options: ['Manual selection', 'A JQL Filter associated with the board', 'Project settings only', 'Randomly'], correctIndex: 1, explanation: 'The Board Filter (saved JQL) defines which issues appear on the board.' },
        { id: 'jr-15', type: 'mcq', title: 'Velocity', prompt: 'What does "Velocity" measure in Jira?', options: ['Average bug count', 'The amount of work (story points) a team completes in a sprint', 'System speed', 'User activity'], correctIndex: 1, explanation: 'Velocity helps teams plan future sprints based on past performance.' },
        { id: 'jr-16', type: 'mcq', title: 'Resolution', prompt: 'What is the difference between Status and Resolution?', options: ['No difference', 'Status is where the issue is in the workflow; Resolution is why it was closed', 'Status is permanent', 'Resolution is for bugs only'], correctIndex: 1, explanation: 'Resolution (Fixed, Duplicate, Won\'t Do) provides the outcome of the task.' },
        { id: 'jr-17', type: 'mcq', title: 'Automation', prompt: 'Which feature allows you to trigger actions based on events (e.g., closing a sub-task when all are done)?', options: ['Rules Engine', 'Jira Automation', 'Webhooks', 'Validators'], correctIndex: 1, explanation: 'Jira Automation uses a no-code rule builder for common tasks.' },
        { id: 'jr-18', type: 'mcq', title: 'Roadmaps', prompt: 'Which feature provides a timeline view of Epics across one or more projects?', options: ['Backlog', 'Advanced Roadmaps', 'Gantt Gadget', 'Sprint Planner'], correctIndex: 1, explanation: 'Advanced Roadmaps (Standard/Premium) help with long-term planning.' },
        { id: 'jr-19', type: 'mcq', title: 'Screens', prompt: 'What is a "Screen" in Jira?', options: ['The monitor', 'The arrangement of fields shown when creating or editing an issue', 'A filter', 'A board view'], correctIndex: 1, explanation: 'Screens define which fields are visible and in what order.' },
        { id: 'jr-20', type: 'mcq', title: 'Admin', prompt: 'What is a "Scheme" generally in Jira (e.g., Notification Scheme)?', options: ['A secret plan', 'A reusable configuration that can be shared across projects', 'A type of issue', 'A user role'], correctIndex: 1, explanation: 'Schemes are the configuration templates that make Jira highly scalable.' },
    {
          "id": "jr-21",
          "type": "mcq",
          "title": "Project Configuration",
          "prompt": "A company wants different workflows for bugs and stories in the same Jira project. What should be configured?",
          "options": [
                "One global status for all issue types",
                "Issue type-specific workflow schemes",
                "Only a new dashboard",
                "Only a board filter"
          ],
          "correctIndex": 1,
          "explanation": "Workflow schemes can map different issue types to different workflows."
    },
    {
          "id": "jr-22",
          "type": "mcq",
          "title": "Board Filter",
          "prompt": "A Scrum board is showing issues from unrelated projects. What should you inspect first?",
          "options": [
                "The board background color",
                "The saved filter used by the board",
                "The user profile photo",
                "The browser zoom level"
          ],
          "correctIndex": 1,
          "explanation": "Boards are driven by filters, so incorrect JQL can pull in the wrong issues."
    },
    {
          "id": "jr-23",
          "type": "mcq",
          "title": "Sprint Planning",
          "prompt": "What should be true before a story is pulled into a sprint?",
          "options": [
                "It has no acceptance criteria",
                "It is understood, sized where appropriate, and ready for delivery",
                "It belongs to every epic",
                "It has no owner"
          ],
          "correctIndex": 1,
          "explanation": "Sprint planning works best when work is refined and ready enough to execute."
    },
    {
          "id": "jr-24",
          "type": "mcq",
          "title": "Definition of Done",
          "prompt": "What is the purpose of a Definition of Done?",
          "options": [
                "To list all company policies",
                "To create a shared quality bar for when work is considered complete",
                "To replace testing",
                "To remove product ownership"
          ],
          "correctIndex": 1,
          "explanation": "A Definition of Done aligns teams on quality, review, testing, and release expectations."
    },
    {
          "id": "jr-25",
          "type": "mcq",
          "title": "JQL Advanced",
          "prompt": "Which JQL finds unresolved issues assigned to the current user?",
          "options": [
                "assignee = currentUser() AND resolution is EMPTY",
                "user = me AND status = Done",
                "assigned = currentUser",
                "resolution = Closed"
          ],
          "correctIndex": 0,
          "explanation": "currentUser() and resolution is EMPTY are commonly used for personal open-work filters."
    },
    {
          "id": "jr-26",
          "type": "mcq",
          "title": "Permissions",
          "prompt": "A user can see a project but cannot transition issues. What is the likely configuration area?",
          "options": [
                "Permission scheme or workflow transition conditions",
                "Issue color only",
                "Board swimlane style",
                "Dashboard gadget layout"
          ],
          "correctIndex": 0,
          "explanation": "Permissions, workflow conditions, and project roles control whether users can perform transitions."
    },
    {
          "id": "jr-27",
          "type": "mcq",
          "title": "Components vs Labels",
          "prompt": "When should Components be preferred over free-text Labels?",
          "options": [
                "When the classification is project-owned and should be consistent",
                "When every user should invent their own values",
                "Only for comments",
                "Never"
          ],
          "correctIndex": 0,
          "explanation": "Components provide structured project-level grouping, while labels are more flexible and less governed."
    },
    {
          "id": "jr-28",
          "type": "mcq",
          "title": "Release Tracking",
          "prompt": "What does Fix Version usually indicate?",
          "options": [
                "The version where the issue is planned to be or was fixed",
                "The issue reporter",
                "The priority only",
                "The sprint goal"
          ],
          "correctIndex": 0,
          "explanation": "Fix Version links work items to releases and supports release reporting."
    },
    {
          "id": "jr-29",
          "type": "mcq",
          "title": "Cumulative Flow",
          "prompt": "What does a widening band in a Cumulative Flow Diagram often indicate?",
          "options": [
                "Possible bottleneck or work accumulating in that status",
                "All work is complete",
                "No workflow exists",
                "The project was deleted"
          ],
          "correctIndex": 0,
          "explanation": "A widening band suggests items are piling up in a workflow state."
    },
    {
          "id": "jr-30",
          "type": "mcq",
          "title": "Velocity",
          "prompt": "What is the safest way to use velocity?",
          "options": [
                "As a planning signal based on historical team throughput",
                "As an individual performance score",
                "As a guarantee for every sprint",
                "As a reason to skip refinement"
          ],
          "correctIndex": 0,
          "explanation": "Velocity is useful for team planning trends, not for individual performance measurement."
    },
    {
          "id": "jr-31",
          "type": "mcq",
          "title": "Automation",
          "prompt": "Which Jira automation is most reasonable?",
          "options": [
                "Auto-close every issue after one day",
                "Notify the owner when a high-priority bug remains blocked for 24 hours",
                "Delete bugs without comments",
                "Move every issue to Done after creation"
          ],
          "correctIndex": 1,
          "explanation": "Good automation reduces manual follow-up without hiding real work."
    },
    {
          "id": "jr-32",
          "type": "mcq",
          "title": "Issue Hierarchy",
          "prompt": "Which hierarchy is most typical in Jira Software?",
          "options": [
                "Epic > Story/Task/Bug > Sub-task",
                "Sub-task > Epic > Project",
                "Comment > Sprint > Epic",
                "Dashboard > Issue > User"
          ],
          "correctIndex": 0,
          "explanation": "Epics usually group stories, tasks, and bugs; sub-tasks break work down further."
    },
    {
          "id": "jr-33",
          "type": "mcq",
          "title": "Kanban WIP",
          "prompt": "Why use WIP limits on a Kanban board?",
          "options": [
                "To reduce multitasking and expose bottlenecks",
                "To prevent work from being completed",
                "To hide blocked work",
                "To make every task equal size"
          ],
          "correctIndex": 0,
          "explanation": "WIP limits encourage flow and reveal capacity constraints."
    },
    {
          "id": "jr-34",
          "type": "mcq",
          "title": "Sprint Scope",
          "prompt": "What should happen when critical unplanned work enters an active sprint?",
          "options": [
                "Ignore it completely",
                "Discuss trade-offs and adjust sprint scope transparently if needed",
                "Add it silently without changing expectations",
                "Close the sprint immediately"
          ],
          "correctIndex": 1,
          "explanation": "Sprint scope changes should be visible and managed through trade-offs."
    },
    {
          "id": "jr-35",
          "type": "mcq",
          "title": "Backlog Health",
          "prompt": "What makes a backlog healthy?",
          "options": [
                "Every item has identical priority",
                "Items are ordered, refined, relevant, and stale work is removed or updated",
                "It contains every idea forever",
                "Only managers can read it"
          ],
          "correctIndex": 1,
          "explanation": "A healthy backlog is prioritized, current, and useful for planning."
    },
    {
          "id": "jr-36",
          "type": "mcq",
          "title": "Dashboards",
          "prompt": "What is a good executive Jira dashboard focused on delivery?",
          "options": [
                "Random gadgets only",
                "Release progress, blockers, high-priority defects, cycle time, and sprint/release health",
                "Only user avatars",
                "Only total comments"
          ],
          "correctIndex": 1,
          "explanation": "Executive views should show progress, risks, and outcomes without excessive noise."
    },
    {
          "id": "jr-37",
          "type": "mcq",
          "title": "Cycle Time",
          "prompt": "What does cycle time measure?",
          "options": [
                "Time from work starting to work completion",
                "Number of team members",
                "Size of the backlog only",
                "Number of comments"
          ],
          "correctIndex": 0,
          "explanation": "Cycle time helps teams understand flow efficiency once work starts."
    },
    {
          "id": "jr-38",
          "type": "mcq",
          "title": "Blocked Work",
          "prompt": "An issue is blocked by another team. What is the best Jira practice?",
          "options": [
                "Leave it in progress without context",
                "Mark/link the blocker, document dependency, and escalate if needed",
                "Delete the issue",
                "Change it to Done"
          ],
          "correctIndex": 1,
          "explanation": "Clear blocker tracking improves coordination and visibility."
    },
    {
          "id": "jr-39",
          "type": "mcq",
          "title": "Agile Reporting Judgment",
          "prompt": "A sprint burndown is flat for most of the sprint and drops on the final day. What might this indicate?",
          "options": [
                "Work may not be broken down or updated continuously",
                "The sprint is definitely perfect",
                "The board is useless",
                "All estimates are illegal"
          ],
          "correctIndex": 0,
          "explanation": "Late burndown movement can signal poor task slicing, delayed updates, or hidden risk."
    },
    {
          "id": "jr-40",
          "type": "mcq",
          "title": "Advanced Jira Judgment",
          "prompt": "A team has too many custom statuses and unclear transitions. What is the strongest improvement?",
          "options": [
                "Add more statuses",
                "Simplify the workflow around real delivery states and define transition rules clearly",
                "Remove all workflows",
                "Use only comments for status"
          ],
          "correctIndex": 1,
          "explanation": "Good workflows balance visibility with simplicity and clear movement rules."
    }
  ]
};
