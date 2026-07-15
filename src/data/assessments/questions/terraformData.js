import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Terraform assessment. Questions were rewritten for modern IaC workflows and production readiness.
export const terraformData = {
  id: ASSESSMENT_TYPES.terraform,
  title: "Terraform Infrastructure as Code Professional Certification",
  shortTitle: "Terraform",
  category: "DevOps",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional assessment covering Terraform IaC, HCL, providers, state, backends, locking, variables, outputs, modules, dependencies, lifecycle rules, import, drift, CI/CD plan review, and production governance.",
  instructions: "Choose the best answer. Questions move from Terraform fundamentals to production-grade infrastructure-as-code judgment.",
  questions: [
    {
      id: "tf-01",
      type: "mcq",
      title: "Infrastructure as Code",
      prompt: "What is Terraform primarily used for?",
      options: ["Writing frontend UI", "Provisioning and managing infrastructure as code", "Compiling Java applications", "Monitoring employee productivity"],
      correctIndex: 1,
      explanation: "Terraform lets teams define, version, plan, and apply infrastructure changes through configuration."
    },
    {
      id: "tf-02",
      type: "mcq",
      title: "HCL",
      prompt: "What language is commonly used for Terraform configuration?",
      options: ["HCL", "SQL", "HTML", "Bash only"],
      correctIndex: 0,
      explanation: "Terraform configuration is commonly written in HashiCorp Configuration Language."
    },
    {
      id: "tf-03",
      type: "mcq",
      title: "Declarative Model",
      prompt: "Terraform is best described as which type of tool?",
      options: ["Declarative", "Manual-only", "Spreadsheet-based", "Imperative shell script only"],
      correctIndex: 0,
      explanation: "Terraform describes the desired end state and determines the actions needed to reach it."
    },
    {
      id: "tf-04",
      type: "mcq",
      title: "Provider",
      prompt: "What is a Terraform provider?",
      options: ["A plugin that lets Terraform interact with APIs such as AWS, Azure, GCP, GitHub, or Kubernetes", "A billing report", "A local database only", "A manual runbook"],
      correctIndex: 0,
      explanation: "Providers translate Terraform configuration into API calls for target platforms."
    },
    {
      id: "tf-05",
      type: "mcq",
      title: "Required Providers",
      prompt: "Why should required providers be declared with version constraints?",
      options: ["To improve reproducibility and avoid unexpected provider changes", "To remove state", "To make resources public", "To disable init"],
      correctIndex: 0,
      explanation: "Version constraints make provider behavior more predictable across environments and teams."
    },
    {
      id: "tf-06",
      type: "mcq",
      title: "terraform init",
      prompt: "What does terraform init do?",
      options: ["Initializes a working directory and installs required providers/modules", "Applies infrastructure changes", "Destroys resources", "Imports all cloud resources automatically"],
      correctIndex: 0,
      explanation: "init prepares the directory, downloads providers/modules, and configures the backend."
    },
    {
      id: "tf-07",
      type: "mcq",
      title: "terraform plan",
      prompt: "What does terraform plan show?",
      options: ["The proposed execution plan before changes are applied", "The final bill only", "A list of developer names", "Only state file size"],
      correctIndex: 0,
      explanation: "plan previews create, update, replace, or destroy actions before apply."
    },
    {
      id: "tf-08",
      type: "mcq",
      title: "terraform apply",
      prompt: "What does terraform apply do?",
      options: ["Executes changes needed to reach the desired state", "Only formats files", "Only validates syntax", "Deletes the state file"],
      correctIndex: 0,
      explanation: "apply performs the actions described by the plan after approval or auto-approval."
    },
    {
      id: "tf-09",
      type: "mcq",
      title: "terraform destroy",
      prompt: "What does terraform destroy do?",
      options: ["Destroys infrastructure managed by the current configuration/state", "Only removes local cache", "Only deletes variables", "Only updates outputs"],
      correctIndex: 0,
      explanation: "destroy is used to tear down managed resources and should be carefully controlled."
    },
    {
      id: "tf-10",
      type: "mcq",
      title: "State",
      prompt: "What is Terraform state used for?",
      options: ["Mapping real-world resources to configuration and tracking metadata", "Storing application logs only", "Encrypting source code", "Managing browser cache"],
      correctIndex: 0,
      explanation: "State is critical for Terraform to understand what it manages and how resources relate."
    },
    {
      id: "tf-11",
      type: "mcq",
      title: "Remote Backend",
      prompt: "Why use a remote backend?",
      options: ["To store state centrally and support team collaboration, locking, and recovery", "To avoid writing configuration", "To make every resource public", "To remove provider versions"],
      correctIndex: 0,
      explanation: "Remote backends keep state outside local machines and can support locking."
    },
    {
      id: "tf-12",
      type: "mcq",
      title: "State Locking",
      prompt: "Why is state locking important?",
      options: ["It prevents concurrent Terraform operations from corrupting state", "It makes resources cheaper", "It disables drift", "It replaces IAM"],
      correctIndex: 0,
      explanation: "Locking helps avoid two users or pipelines writing state at the same time."
    },
    {
      id: "tf-13",
      type: "mcq",
      title: "Sensitive State",
      prompt: "Why must Terraform state be protected?",
      options: ["It can contain sensitive values such as secrets or resource attributes", "It is always public", "It contains only comments", "It cannot be read"],
      correctIndex: 0,
      explanation: "State can expose sensitive infrastructure data and should be encrypted and access-controlled."
    },
    {
      id: "tf-14",
      type: "mcq",
      title: "Variables",
      prompt: "What are input variables used for?",
      options: ["Parameterizing configuration without hardcoding values", "Storing compiled binaries", "Replacing providers", "Skipping validation"],
      correctIndex: 0,
      explanation: "Variables make modules and configurations reusable across environments."
    },
    {
      id: "tf-15",
      type: "mcq",
      title: "Outputs",
      prompt: "What are Terraform output values used for?",
      options: ["Exposing selected infrastructure values such as URLs, IDs, or IPs", "Deleting resources", "Installing providers", "Changing state manually"],
      correctIndex: 0,
      explanation: "Outputs expose useful values to users, modules, or downstream automation."
    },
    {
      id: "tf-16",
      type: "mcq",
      title: "Locals",
      prompt: "When are locals useful?",
      options: ["For naming or intermediate expressions reused within a module", "For storing remote state only", "For encrypting databases", "For creating cloud accounts"],
      correctIndex: 0,
      explanation: "locals reduce repetition and improve readability for computed expressions."
    },
    {
      id: "tf-17",
      type: "mcq",
      title: "Data Source",
      prompt: "What is a Terraform data source?",
      options: ["A way to read information from existing infrastructure or external systems", "A resource to always create a new VM", "A state lock", "A provider installation file"],
      correctIndex: 0,
      explanation: "Data sources allow configuration to reference existing objects without managing their lifecycle."
    },
    {
      id: "tf-18",
      type: "mcq",
      title: "Resource Block",
      prompt: "What does a resource block represent?",
      options: ["An infrastructure object Terraform manages", "Only a comment", "A terminal command", "A billing invoice"],
      correctIndex: 0,
      explanation: "Resources are the primary objects Terraform creates, updates, or deletes."
    },
    {
      id: "tf-19",
      type: "mcq",
      title: "Modules",
      prompt: "What is a Terraform module?",
      options: ["A container for related configuration that can be reused", "A cloud account password", "A local state backup only", "A provider binary"],
      correctIndex: 0,
      explanation: "Modules package resources, variables, outputs, and logic for reusable infrastructure patterns."
    },
    {
      id: "tf-20",
      type: "mcq",
      title: "Root vs Child Module",
      prompt: "What is the root module?",
      options: ["The configuration in the current working directory where Terraform is run", "Only a registry module", "A provider alias", "A state lock file"],
      correctIndex: 0,
      explanation: "The root module is the entry point; it can call child modules."
    },
    {
      id: "tf-21",
      type: "mcq",
      title: "count",
      prompt: "When is count useful?",
      options: ["Creating multiple similar resources indexed by number", "Encrypting state", "Importing resources automatically", "Creating provider plugins"],
      correctIndex: 0,
      explanation: "count creates a specified number of resource instances."
    },
    {
      id: "tf-22",
      type: "mcq",
      title: "for_each",
      prompt: "When is for_each usually better than count?",
      options: ["When each instance has a stable key such as a map key or set value", "When no resource is needed", "Only for comments", "When resources must be public"],
      correctIndex: 0,
      explanation: "for_each avoids index-shift problems and gives each instance a stable key."
    },
    {
      id: "tf-23",
      type: "mcq",
      title: "depends_on",
      prompt: "When should depends_on be used?",
      options: ["When Terraform cannot infer a dependency from references", "For every resource by default", "To bypass state", "To disable provider installation"],
      correctIndex: 0,
      explanation: "Terraform infers most dependencies, but explicit depends_on helps when dependency is operational rather than data-based."
    },
    {
      id: "tf-24",
      type: "mcq",
      title: "Implicit Dependency",
      prompt: "How does Terraform usually infer resource creation order?",
      options: ["From references between resources and expressions", "From alphabetical order", "From file order only", "Randomly"],
      correctIndex: 0,
      explanation: "Terraform builds a dependency graph from references and metadata."
    },
    {
      id: "tf-25",
      type: "mcq",
      title: "Lifecycle prevent_destroy",
      prompt: "What does lifecycle prevent_destroy do?",
      options: ["Prevents Terraform from destroying a resource unless the protection is removed", "Deletes resources faster", "Skips state refresh", "Creates backups automatically"],
      correctIndex: 0,
      explanation: "prevent_destroy protects critical resources from accidental deletion."
    },
    {
      id: "tf-26",
      type: "mcq",
      title: "create_before_destroy",
      prompt: "Why use create_before_destroy?",
      options: ["To reduce downtime by creating the replacement before destroying the old resource when possible", "To skip resource creation", "To force immediate deletion", "To disable dependencies"],
      correctIndex: 0,
      explanation: "It can help maintain availability during replacement, depending on resource constraints."
    },
    {
      id: "tf-27",
      type: "mcq",
      title: "ignore_changes",
      prompt: "When might ignore_changes be appropriate?",
      options: ["When external systems intentionally manage certain attributes", "When all drift should be ignored", "To hide broken code", "To avoid declaring providers"],
      correctIndex: 0,
      explanation: "ignore_changes should be used carefully for attributes legitimately managed outside Terraform."
    },
    {
      id: "tf-28",
      type: "mcq",
      title: "Drift",
      prompt: "What is infrastructure drift?",
      options: ["Real-world infrastructure differs from Terraform configuration or state", "A fast deployment", "A provider upgrade", "A module output"],
      correctIndex: 0,
      explanation: "Drift happens when resources change outside Terraform or state becomes stale."
    },
    {
      id: "tf-29",
      type: "mcq",
      title: "Refresh",
      prompt: "What does state refresh do in modern Terraform workflows?",
      options: ["Reads real infrastructure to update Terraform’s understanding before planning", "Deletes all resources", "Creates modules", "Formats files"],
      correctIndex: 0,
      explanation: "Terraform refreshes state information to compare real-world objects with configuration."
    },
    {
      id: "tf-30",
      type: "mcq",
      title: "Import",
      prompt: "What does terraform import do?",
      options: ["Associates an existing real-world resource with a Terraform resource address in state", "Generates perfect code for every resource automatically", "Deletes unmanaged infrastructure", "Runs unit tests"],
      correctIndex: 0,
      explanation: "Import brings existing infrastructure under Terraform state, but configuration still needs to be written or generated."
    },
    {
      id: "tf-31",
      type: "mcq",
      title: "Moved Blocks",
      prompt: "What are moved blocks used for?",
      options: ["Recording resource address refactors without destroying and recreating resources", "Moving cloud regions physically", "Copying variables", "Encrypting secrets"],
      correctIndex: 0,
      explanation: "moved blocks preserve resource identity during address changes."
    },
    {
      id: "tf-32",
      type: "mcq",
      title: "replace",
      prompt: "What is the purpose of the -replace option?",
      options: ["Force replacement of a specific managed resource during apply", "Replace the Terraform CLI", "Replace all providers", "Delete the backend"],
      correctIndex: 0,
      explanation: "-replace is used when a resource must be recreated intentionally."
    },
    {
      id: "tf-33",
      type: "mcq",
      title: "Validation",
      prompt: "What does terraform validate check?",
      options: ["Whether configuration is syntactically valid and internally consistent", "Whether cloud resources are cheap", "Whether every app test passes", "Whether users are trained"],
      correctIndex: 0,
      explanation: "validate checks Terraform configuration structure without applying changes."
    },
    {
      id: "tf-34",
      type: "mcq",
      title: "Formatting",
      prompt: "What command formats Terraform configuration consistently?",
      options: ["terraform fmt", "terraform clean", "terraform pretty", "terraform style"],
      correctIndex: 0,
      explanation: "terraform fmt applies canonical formatting."
    },
    {
      id: "tf-35",
      type: "mcq",
      title: "Plan Review",
      prompt: "Why should Terraform plans be reviewed in CI/CD before apply?",
      options: ["To catch unintended changes such as destructive replacements or security exposure", "To slow down every deployment only", "To eliminate all cloud costs", "To avoid version control"],
      correctIndex: 0,
      explanation: "Plan review is a key governance step for safe infrastructure changes."
    },
    {
      id: "tf-36",
      type: "mcq",
      title: "Secrets",
      prompt: "What is the safest practice for secrets in Terraform?",
      options: ["Use secret managers and avoid hardcoding secrets in code or exposing them in state/outputs", "Commit secrets to Git", "Print secrets in outputs", "Store passwords in resource names"],
      correctIndex: 0,
      explanation: "Secrets should be injected securely and outputs/state access should be controlled."
    },
    {
      id: "tf-37",
      type: "mcq",
      title: "Provider Alias",
      prompt: "When is a provider alias useful?",
      options: ["Managing resources across multiple regions/accounts/subscriptions with different provider configurations", "Creating comments", "Skipping authentication", "Destroying resources"],
      correctIndex: 0,
      explanation: "Aliases allow multiple configurations of the same provider."
    },
    {
      id: "tf-38",
      type: "mcq",
      title: "Workspaces",
      prompt: "What are Terraform CLI workspaces commonly used for?",
      options: ["Maintaining separate state instances for the same configuration", "Editing code together in real time", "Creating modules in the registry", "Skipping backends"],
      correctIndex: 0,
      explanation: "Workspaces can separate states, though environment isolation often benefits from separate configurations too."
    },
    {
      id: "tf-39",
      type: "mcq",
      title: "Module Versioning",
      prompt: "Why pin module versions?",
      options: ["To make infrastructure behavior reproducible and upgrades controlled", "To prevent module reuse", "To delete state locks", "To make code secret"],
      correctIndex: 0,
      explanation: "Pinned versions reduce surprise changes from upstream module updates."
    },
    {
      id: "tf-40",
      type: "mcq",
      title: "Production Judgment",
      prompt: "Which Terraform practice is most production-ready?",
      options: ["Remote encrypted state with locking, version constraints, plan review, least-privilege credentials, modules, and drift monitoring", "Local state on one laptop only", "Applying directly from unreviewed branches", "Hardcoding secrets in tf files"],
      correctIndex: 0,
      explanation: "Production Terraform requires collaboration safety, security, reproducibility, and change governance."
    },
  ]
};
