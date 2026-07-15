import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const jenkinsData = {
  id: ASSESSMENT_TYPES.jenkins,
  title: "Jenkins CI/CD Automation Professional Certification",
  shortTitle: "Jenkins",
  category: "DevOps",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional Jenkins assessment covering pipelines, Jenkinsfile, agents, credentials, triggers, plugins, artifacts, shared libraries, security, quality gates, and production CI/CD operations.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical Jenkins automation and CI/CD judgment.",
  questions: [
{ id: 'jn-01', type: 'mcq', title: 'Core Concepts', prompt: 'What is Jenkins primarily used for?', options: ['Writing code', 'Continuous Integration and Continuous Delivery (CI/CD)', 'Storing data', 'Graphic design'], correctIndex: 1, explanation: 'Jenkins automates the build, test, and deploy stages of software development.' },
        { id: 'jn-02', type: 'mcq', title: 'Pipelines', prompt: 'What is a "Jenkins Pipeline"?', options: ['A list of users', 'A suite of plugins that supports implementing and integrating continuous delivery pipelines', 'A database connection', 'A type of server'], correctIndex: 1, explanation: 'Pipelines are defined using a Jenkinsfile.' },
        { id: 'jn-03', type: 'mcq', title: 'Jenkinsfile', prompt: 'What is a "Jenkinsfile"?', options: ['A text file that contains the definition of a Jenkins Pipeline and is checked into source control', 'A log file', 'An executable', 'A configuration file for the OS'], correctIndex: 0, explanation: 'Configuration as code is a best practice in Jenkins.' },
        { id: 'jn-04', type: 'mcq', title: 'Plugins', prompt: 'How is Jenkins extended with additional functionality?', options: ['By writing Java code', 'Using Plugins', 'By editing the core', 'Using external APIs only'], correctIndex: 1, explanation: 'The vast plugin ecosystem is Jenkins\' greatest strength.' },
        { id: 'jn-05', type: 'mcq', title: 'Nodes', prompt: 'What is a "Jenkins Agent"?', options: ['A security guard', 'A machine that offloads build projects from the Jenkins controller', 'A software developer', 'A type of job'], correctIndex: 1, explanation: 'Agents do the actual work assigned by the controller.' },
        { id: 'jn-06', type: 'mcq', title: 'Triggers', prompt: 'How can a Jenkins job be triggered automatically?', options: ['Poll SCM', 'Webhooks from GitHub/GitLab', 'Scheduled (Cron)', 'All of the above'], correctIndex: 3, explanation: 'Jenkins supports many ways to start a build automatically.' },
        { id: 'jn-07', type: 'mcq', title: 'Credentials', prompt: 'Where should you store sensitive information like API keys in Jenkins?', options: ['In the Jenkinsfile', 'In the Credentials Provider', 'In a public repo', 'In the build logs'], correctIndex: 1, explanation: 'The Credentials store encrypts and safely manages secrets.' },
        { id: 'jn-08', type: 'mcq', title: 'Declarative vs Scripted', prompt: 'What is the modern, more structured way to write Jenkins Pipelines?', options: ['Scripted Pipeline', 'Declarative Pipeline', 'XML Pipeline', 'Manual steps'], correctIndex: 1, explanation: 'Declarative pipelines offer a simpler, more opinionated syntax.' },
        { id: 'jn-09', type: 'mcq', title: 'Workspace', prompt: 'What is a "Workspace" in Jenkins?', options: ['An office', 'A directory where the build job performs its tasks', 'A user role', 'A type of plugin'], correctIndex: 1, explanation: 'Each job has its own workspace on the agent.' },
        { id: 'jn-10', type: 'mcq', title: 'Blue Ocean', prompt: 'What was "Blue Ocean" designed for?', options: ['Speeding up builds', 'A modern, visual user interface for Jenkins Pipelines', 'Encryption', 'Cloud deployment'], correctIndex: 1, explanation: 'Blue Ocean provides a more intuitive UX for pipeline monitoring.' },
        { id: 'jn-11', type: 'mcq', title: 'Multibranch Pipeline', prompt: 'What is a "Multibranch Pipeline" project?', options: ['A project for many apps', 'A project that automatically creates a pipeline for each branch in a repository', 'A branching strategy', 'A type of server'], correctIndex: 1, explanation: 'It ensures every branch gets tested automatically.' },
        { id: 'jn-12', type: 'mcq', title: 'Artifacts', prompt: 'What is a "Build Artifact"?', options: ['A bug', 'A file generated during the build process (e.g., a JAR, WAR, or ZIP)', 'A source file', 'A developer'], correctIndex: 1, explanation: 'Artifacts are the output of a successful build.' },
        { id: 'jn-13', type: 'mcq', title: 'Stages', prompt: 'In a pipeline, what is a "Stage"?', options: ['A performance', 'A logical grouping of steps (e.g., "Build", "Test", "Deploy")', 'A physical location', 'A type of agent'], correctIndex: 1, explanation: 'Stages help visualize the pipeline progress.' },
        { id: 'jn-14', type: 'mcq', title: 'Shared Libraries', prompt: 'What is the purpose of "Shared Libraries"?', options: ['Sharing books', 'Reusing Groovy code across multiple Jenkins Pipelines', 'Public plugins', 'Database sharing'], correctIndex: 1, explanation: 'Shared libraries reduce duplication in complex enterprise pipelines.' },
        { id: 'jn-15', type: 'mcq', title: 'Post-build Actions', prompt: 'What is a common "Post-build Action"?', options: ['Archiving artifacts', 'Sending email notifications', 'Publishing test results', 'All of the above'], correctIndex: 3, explanation: 'Post actions run after the main build steps are finished.' },
        { id: 'jn-16', type: 'mcq', title: 'Master/Slave (Controller/Agent)', prompt: 'Why should you avoid running builds on the "Master" (Controller) node?', options: ['It is slower', 'For security and performance; builds should be offloaded to agents', 'It doesn\'t have Java', 'It is for Windows only'], correctIndex: 1, explanation: 'The controller should focus on orchestration, not execution.' },
        { id: 'jn-17', type: 'mcq', title: 'Global Tool Configuration', prompt: 'What do you configure in "Global Tool Configuration"?', options: ['User passwords', 'Paths to tools like JDK, Maven, Git, and Docker', 'UI colors', 'Plugins'], correctIndex: 1, explanation: 'It tells Jenkins where to find the binaries needed for builds.' },
        { id: 'jn-18', type: 'mcq', title: 'Groovy', prompt: 'What is the scripting language used in Jenkins Pipelines?', options: ['Python', 'Bash', 'Groovy', 'JavaScript'], correctIndex: 2, explanation: 'Jenkins pipelines are based on the Groovy DSL.' },
        { id: 'jn-19', type: 'mcq', title: 'Environment Variables', prompt: 'How do you access build numbers in a Jenkins script?', options: ['env.BUILD_NUMBER', 'get(BUILD)', 'system.number', 'var.build'], correctIndex: 0, explanation: 'Jenkins provides many built-in environment variables.' },
        { id: 'jn-20', type: 'mcq', title: 'Distributed Builds', prompt: 'What is the main advantage of "Distributed Builds"?', options: ['Security', 'Parallelism and better resource utilization across multiple machines', 'Easier setup', 'Faster UI'], correctIndex: 1, explanation: 'It allows running many builds simultaneously without overloading one server.' },
    {
          "id": "jn-21",
          "type": "mcq",
          "title": "Declarative Pipeline",
          "prompt": "Where are stages typically defined in a declarative Jenkins Pipeline?",
          "options": [
                "Inside the stages block",
                "Inside package.json only",
                "Inside credentials only",
                "Inside the agent label only"
          ],
          "correctIndex": 0,
          "explanation": "Declarative pipelines use a structured stages block for pipeline steps."
    },
    {
          "id": "jn-22",
          "type": "mcq",
          "title": "Agent Selection",
          "prompt": "Why use agent labels in Jenkins?",
          "options": [
                "To choose where a job should run based on available capabilities",
                "To change the UI color",
                "To rename builds",
                "To disable source control"
          ],
          "correctIndex": 0,
          "explanation": "Labels route work to agents with the required tools, OS, or capacity."
    },
    {
          "id": "jn-23",
          "type": "mcq",
          "title": "Credentials Binding",
          "prompt": "What is the safest way to use an API token in a pipeline?",
          "options": [
                "Hardcode it in the Jenkinsfile",
                "Use Jenkins credentials binding and avoid printing it in logs",
                "Commit it to Git",
                "Send it in a public Slack message"
          ],
          "correctIndex": 1,
          "explanation": "Credentials should be injected securely and masked where possible."
    },
    {
          "id": "jn-24",
          "type": "mcq",
          "title": "Artifacts",
          "prompt": "What are build artifacts?",
          "options": [
                "Outputs from a build such as binaries, packages, reports, or archives",
                "Only plugin files",
                "Only user passwords",
                "Jenkins controller logs only"
          ],
          "correctIndex": 0,
          "explanation": "Artifacts are build outputs that may be archived, tested, or deployed."
    },
    {
          "id": "jn-25",
          "type": "mcq",
          "title": "Post Actions",
          "prompt": "What is a common use of the post block in a declarative pipeline?",
          "options": [
                "Run actions after pipeline completion such as cleanup or notifications",
                "Create a new Git branch",
                "Install Jenkins itself",
                "Edit user permissions"
          ],
          "correctIndex": 0,
          "explanation": "post handles conditions like success, failure, always, changed, and cleanup."
    },
    {
          "id": "jn-26",
          "type": "mcq",
          "title": "Parallel Stages",
          "prompt": "Why use parallel stages?",
          "options": [
                "To run independent tasks at the same time and reduce feedback time",
                "To make logs impossible to read",
                "To skip testing",
                "To disable agents"
          ],
          "correctIndex": 0,
          "explanation": "Parallelization helps speed up independent build, test, or analysis work."
    },
    {
          "id": "jn-27",
          "type": "mcq",
          "title": "Quality Gate",
          "prompt": "A pipeline should stop if tests fail. Which principle is this?",
          "options": [
                "Fail fast",
                "Ignore failures",
                "Deploy first",
                "Manual-only delivery"
          ],
          "correctIndex": 0,
          "explanation": "Failing fast prevents bad changes from moving further through delivery."
    },
    {
          "id": "jn-28",
          "type": "mcq",
          "title": "Shared Library",
          "prompt": "What is a Jenkins shared library used for?",
          "options": [
                "Reusing pipeline code across multiple Jenkinsfiles",
                "Storing production customer data",
                "Replacing all agents",
                "Editing CSS"
          ],
          "correctIndex": 0,
          "explanation": "Shared libraries reduce duplication and standardize pipeline patterns."
    },
    {
          "id": "jn-29",
          "type": "mcq",
          "title": "SCM Webhook",
          "prompt": "Why are SCM webhooks preferred over frequent polling?",
          "options": [
                "They trigger builds when changes occur and reduce unnecessary polling load",
                "They make commits slower",
                "They disable branch builds",
                "They replace testing"
          ],
          "correctIndex": 0,
          "explanation": "Webhooks provide event-driven builds and avoid wasteful polling."
    },
    {
          "id": "jn-30",
          "type": "mcq",
          "title": "Workspace Cleanup",
          "prompt": "Why clean workspaces between builds when needed?",
          "options": [
                "To reduce stale files affecting future builds",
                "To delete Jenkins itself",
                "To hide logs",
                "To remove source control"
          ],
          "correctIndex": 0,
          "explanation": "Stale workspace files can cause non-reproducible or flaky builds."
    },
    {
          "id": "jn-31",
          "type": "mcq",
          "title": "Controller Load",
          "prompt": "What work should generally not run heavily on the Jenkins controller?",
          "options": [
                "Build and test workloads",
                "Authentication checks",
                "Queue coordination",
                "Pipeline scheduling"
          ],
          "correctIndex": 0,
          "explanation": "Agents should perform heavy build work so the controller remains stable."
    },
    {
          "id": "jn-32",
          "type": "mcq",
          "title": "Plugin Risk",
          "prompt": "Why should Jenkins plugins be managed carefully?",
          "options": [
                "Plugins can introduce compatibility, security, or stability risks",
                "Plugins never change behavior",
                "Plugins replace all code review",
                "Plugins only affect colors"
          ],
          "correctIndex": 0,
          "explanation": "Plugin sprawl and outdated plugins can create operational and security risk."
    },
    {
          "id": "jn-33",
          "type": "mcq",
          "title": "Pipeline as Code",
          "prompt": "Why store Jenkinsfile in source control?",
          "options": [
                "To version, review, and reproduce pipeline behavior with the application code",
                "To hide the deployment process",
                "To prevent audits",
                "To make builds manual"
          ],
          "correctIndex": 0,
          "explanation": "Pipeline-as-code improves traceability, reviewability, and consistency."
    },
    {
          "id": "jn-34",
          "type": "mcq",
          "title": "Build Parameters",
          "prompt": "When are build parameters useful?",
          "options": [
                "When a pipeline needs controlled runtime choices such as environment or version",
                "When secrets need to be printed",
                "When every build should be random",
                "When source control is not used"
          ],
          "correctIndex": 0,
          "explanation": "Parameters allow controlled variation without editing the Jenkinsfile."
    },
    {
          "id": "jn-35",
          "type": "mcq",
          "title": "Matrix Builds",
          "prompt": "What is a matrix build useful for?",
          "options": [
                "Testing combinations such as multiple JDK versions or operating systems",
                "Deleting multiple branches",
                "Encrypting all logs",
                "Renaming jobs"
          ],
          "correctIndex": 0,
          "explanation": "Matrix builds validate software across combinations of environments."
    },
    {
          "id": "jn-36",
          "type": "mcq",
          "title": "Timeouts",
          "prompt": "Why add timeouts to pipelines?",
          "options": [
                "To prevent stuck builds from consuming agents indefinitely",
                "To make builds fail randomly",
                "To hide slow tests",
                "To disable notifications"
          ],
          "correctIndex": 0,
          "explanation": "Timeouts protect build infrastructure from hung steps."
    },
    {
          "id": "jn-37",
          "type": "mcq",
          "title": "Approval Gates",
          "prompt": "When is a manual approval gate appropriate?",
          "options": [
                "Before a sensitive production deployment where human review is required",
                "Before every unit test",
                "Before every code checkout",
                "Never"
          ],
          "correctIndex": 0,
          "explanation": "Approval gates can protect production while keeping earlier CI stages automated."
    },
    {
          "id": "jn-38",
          "type": "mcq",
          "title": "Secret Leakage",
          "prompt": "A build log accidentally prints a token. What should happen?",
          "options": [
                "Rotate the token and remove exposure from the pipeline/logs according to policy",
                "Ignore it because it was only one build",
                "Share the token to debug faster",
                "Commit the token to Git"
          ],
          "correctIndex": 0,
          "explanation": "Leaked credentials should be treated as compromised and rotated."
    },
    {
          "id": "jn-39",
          "type": "mcq",
          "title": "Flaky Pipeline",
          "prompt": "A test fails randomly in Jenkins but not locally. What should be investigated?",
          "options": [
                "Timing, environment differences, shared state, test order, and dependencies",
                "Only the Jenkins logo",
                "Only the job description",
                "Nothing"
          ],
          "correctIndex": 0,
          "explanation": "CI-only failures often come from environment or timing differences."
    },
    {
          "id": "jn-40",
          "type": "mcq",
          "title": "Advanced Jenkins Judgment",
          "prompt": "A deployment pipeline is slow, flaky, and manually edited in the UI. What is the strongest improvement?",
          "options": [
                "Move pipeline definition to source control, stabilize tests, add clear stages, use agents properly, and measure failure causes",
                "Restart Jenkins every hour",
                "Disable all tests",
                "Deploy manually forever"
          ],
          "correctIndex": 0,
          "explanation": "Production CI/CD should be versioned, observable, reliable, and automated where safe."
    }
  ]
};
