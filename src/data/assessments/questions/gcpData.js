import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const gcpData = {
  id: ASSESSMENT_TYPES.gcp,
  title: "Google Cloud Architect Professional Certification",
  shortTitle: "GCP",
  category: "Cloud & Infrastructure",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional Google Cloud assessment covering compute, storage, networking, IAM, serverless, containers, databases, analytics, security, observability, CI/CD, cost, and cloud architecture judgment.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical Google Cloud architecture judgment.",
  questions: [
{ id: 'gcp-01', type: 'mcq', title: 'Compute', prompt: 'What is GCP\'s primary service for virtual machine instances?', options: ['App Engine', 'Compute Engine', 'Cloud Run', 'Cloud Functions'], correctIndex: 1, explanation: 'Compute Engine provides VMs running on Google\'s infrastructure.' },
        { id: 'gcp-02', type: 'mcq', title: 'Serverless', prompt: 'Which service allows you to run stateless containers in a fully managed environment?', options: ['Compute Engine', 'Google Kubernetes Engine (GKE)', 'Cloud Run', 'Cloud Build'], correctIndex: 2, explanation: 'Cloud Run is the serverless container platform.' },
        { id: 'gcp-03', type: 'mcq', title: 'Storage', prompt: 'What is the unified object storage service in GCP?', options: ['Persistent Disk', 'Cloud Storage', 'Filestore', 'Local SSD'], correctIndex: 1, explanation: 'Cloud Storage is for storing large amounts of unstructured data.' },
        { id: 'gcp-04', type: 'mcq', title: 'Database', prompt: 'Which GCP database service is a fully managed, globally scalable, and strongly consistent relational database?', options: ['Cloud SQL', 'Cloud Spanner', 'Cloud Bigtable', 'Firestore'], correctIndex: 1, explanation: 'Cloud Spanner is the unique globally distributed relational database.' },
        { id: 'gcp-05', type: 'mcq', title: 'Networking', prompt: 'What is the global virtual network that provides connectivity for your GCP resources?', options: ['VPC', 'Cloud Interconnect', 'Cloud Router', 'Cloud Load Balancing'], correctIndex: 0, explanation: 'VPC (Virtual Private Cloud) is the global network in GCP.' },
        { id: 'gcp-06', type: 'mcq', title: 'Big Data', prompt: 'What is GCP\'s serverless, highly scalable, and cost-effective multi-cloud data warehouse?', options: ['BigQuery', 'Dataflow', 'Dataproc', 'Pub/Sub'], correctIndex: 0, explanation: 'BigQuery is the primary analytics warehouse in GCP.' },
        { id: 'gcp-07', type: 'mcq', title: 'Kubernetes', prompt: 'What is the managed environment for deploying, managing, and scaling containerized applications using Kubernetes?', options: ['Compute Engine', 'GKE', 'Cloud Run', 'App Engine'], correctIndex: 1, explanation: 'GKE (Google Kubernetes Engine) is the managed Kubernetes service.' },
        { id: 'gcp-08', type: 'mcq', title: 'Identity', prompt: 'What service is used for managing users, groups, and permissions in GCP?', options: ['Cloud Identity', 'IAM', 'Resource Manager', 'Cloud Audit Logs'], correctIndex: 1, explanation: 'IAM (Identity and Access Management) manages authorization.' },
        { id: 'gcp-09', type: 'mcq', title: 'Monitoring', prompt: 'Which suite of tools provides visibility into the performance, uptime, and overall health of cloud-powered apps?', options: ['Cloud Logging', 'Cloud Monitoring', 'Google Cloud Observability (Stackdriver)', 'Error Reporting'], correctIndex: 2, explanation: 'Google Cloud Observability includes monitoring, logging, and tracing.' },
        { id: 'gcp-10', type: 'mcq', title: 'API Management', prompt: 'Which platform allows you to develop, manage, and secure APIs?', options: ['Apigee', 'Cloud Endpoints', 'API Gateway', 'Pub/Sub'], correctIndex: 0, explanation: 'Apigee is the full-lifecycle API management platform.' },
        { id: 'gcp-11', type: 'mcq', title: 'Data Integration', prompt: 'Which service is a fully managed, serverless real-time messaging service?', options: ['Dataflow', 'Dataprep', 'Pub/Sub', 'Data Fusion'], correctIndex: 2, explanation: 'Pub/Sub is the messaging backbone for GCP.' },
        { id: 'gcp-12', type: 'mcq', title: 'AI/ML', prompt: 'What is the unified AI platform for building, deploying, and scaling machine learning models?', options: ['AutoML', 'Vertex AI', 'BigQuery ML', 'Cloud Vision'], correctIndex: 1, explanation: 'Vertex AI is the unified platform for ML on GCP.' },
        { id: 'gcp-13', type: 'mcq', title: 'Infrastructure as Code', prompt: 'Which tool allows you to automate the creation and management of GCP resources using configuration files?', options: ['Deployment Manager', 'Terraform', 'Cloud Build', 'Cloud Shell'], correctIndex: 0, explanation: 'Deployment Manager is the native GCP IaC service.' },
        { id: 'gcp-14', type: 'mcq', title: 'NoSQL Database', prompt: 'Which service is a high-performance NoSQL database service for large analytical and operational workloads?', options: ['Cloud SQL', 'Cloud Spanner', 'Cloud Bigtable', 'MemoryStore'], correctIndex: 2, explanation: 'Cloud Bigtable is the NoSQL database for large scale data.' },
        { id: 'gcp-15', type: 'mcq', title: 'PaaS', prompt: 'Which service is a regional, managed platform for developing and hosting web applications at scale?', options: ['Compute Engine', 'App Engine', 'Cloud Run', 'GKE'], correctIndex: 1, explanation: 'App Engine was the original PaaS offering from Google.' },
        { id: 'gcp-16', type: 'mcq', title: 'CDN', prompt: 'What is the GCP service that uses Google\'s global network to serve content closer to users?', options: ['Cloud CDN', 'Cloud Load Balancing', 'Cloud DNS', 'Interconnect'], correctIndex: 0, explanation: 'Cloud CDN accelerates content delivery.' },
        { id: 'gcp-17', type: 'mcq', title: 'Security', prompt: 'Which service provides centralized security management and threat detection?', options: ['Cloud Armor', 'Security Command Center', 'VPC Service Controls', 'Identity-Aware Proxy'], correctIndex: 1, explanation: 'Security Command Center is the security platform for GCP.' },
        { id: 'gcp-18', type: 'mcq', title: 'Cost Tools', prompt: 'Where can you get an estimate for the cost of running your workload on GCP?', options: ['Billing Reports', 'Pricing Calculator', 'Cost Table', 'Budgets'], correctIndex: 1, explanation: 'The Pricing Calculator helps estimate infrastructure costs.' },
        { id: 'gcp-19', type: 'mcq', title: 'Hybrid Connectivity', prompt: 'Which service provides a high-speed, dedicated connection between your on-premises network and GCP?', options: ['Cloud VPN', 'Cloud Interconnect', 'Partner Interconnect', 'Direct Peering'], correctIndex: 1, explanation: 'Interconnect provides the highest performance hybrid connectivity.' },
        { id: 'gcp-20', type: 'mcq', title: 'Resource Hierarchy', prompt: 'What is the top-level container in the GCP resource hierarchy?', options: ['Folders', 'Projects', 'Organization', 'Billing Account'], correctIndex: 2, explanation: 'The Organization node is the root of the hierarchy.' },
    {
          "id": "gcp-21",
          "type": "mcq",
          "title": "Resource Hierarchy",
          "prompt": "What is the correct high-level Google Cloud resource hierarchy?",
          "options": [
                "Organization > Folder > Project > Resources",
                "Project > Organization > Folder > Resources",
                "VM > Project > Folder > Organization",
                "Bucket > VM > Folder > Project"
          ],
          "correctIndex": 0,
          "explanation": "Google Cloud resources are organized using organization, folders, projects, and resources."
    },
    {
          "id": "gcp-22",
          "type": "mcq",
          "title": "IAM Principle",
          "prompt": "What is the best IAM practice?",
          "options": [
                "Grant least privilege using roles at the narrowest practical scope",
                "Give Owner to every user",
                "Use shared admin accounts",
                "Disable audit logs"
          ],
          "correctIndex": 0,
          "explanation": "Least privilege limits risk and accidental changes."
    },
    {
          "id": "gcp-23",
          "type": "mcq",
          "title": "Service Accounts",
          "prompt": "What are service accounts used for?",
          "options": [
                "Non-human identities used by workloads and services",
                "Personal Gmail accounts",
                "Billing contacts only",
                "Cloud Storage folders"
          ],
          "correctIndex": 0,
          "explanation": "Service accounts allow applications and services to authenticate securely."
    },
    {
          "id": "gcp-24",
          "type": "mcq",
          "title": "VPC",
          "prompt": "What is a Google Cloud VPC?",
          "options": [
                "A global virtual network for Google Cloud resources",
                "A physical router only",
                "A storage bucket",
                "A billing export"
          ],
          "correctIndex": 0,
          "explanation": "VPCs provide network connectivity and isolation."
    },
    {
          "id": "gcp-25",
          "type": "mcq",
          "title": "Subnets",
          "prompt": "What is a subnet in Google Cloud?",
          "options": [
                "A regional IP range within a VPC",
                "A project folder",
                "A database table",
                "A load balancer rule only"
          ],
          "correctIndex": 0,
          "explanation": "Subnets are regional in Google Cloud."
    },
    {
          "id": "gcp-26",
          "type": "mcq",
          "title": "Load Balancing",
          "prompt": "Why use Cloud Load Balancing?",
          "options": [
                "Distribute traffic across backends for availability, scale, and performance",
                "Store files",
                "Create IAM users",
                "Run SQL queries"
          ],
          "correctIndex": 0,
          "explanation": "Load balancing improves reliability and traffic distribution."
    },
    {
          "id": "gcp-27",
          "type": "mcq",
          "title": "Cloud Armor",
          "prompt": "What is Cloud Armor used for?",
          "options": [
                "DDoS protection and web application firewall capabilities",
                "Object storage",
                "VM startup scripts",
                "BI reporting"
          ],
          "correctIndex": 0,
          "explanation": "Cloud Armor helps protect applications at the edge."
    },
    {
          "id": "gcp-28",
          "type": "mcq",
          "title": "GKE",
          "prompt": "When is GKE a strong fit?",
          "options": [
                "When you need managed Kubernetes for container orchestration",
                "When you only need a static file",
                "When you have no containers",
                "When you need a spreadsheet"
          ],
          "correctIndex": 0,
          "explanation": "GKE is Google Cloud’s managed Kubernetes platform."
    },
    {
          "id": "gcp-29",
          "type": "mcq",
          "title": "Cloud Run",
          "prompt": "What is Cloud Run best suited for?",
          "options": [
                "Stateless containers with serverless scaling",
                "Stateful VM-only workloads requiring manual patching",
                "Raw block storage only",
                "Manual DNS records only"
          ],
          "correctIndex": 0,
          "explanation": "Cloud Run runs stateless containers with managed autoscaling."
    },
    {
          "id": "gcp-30",
          "type": "mcq",
          "title": "Pub/Sub",
          "prompt": "What is Pub/Sub used for?",
          "options": [
                "Asynchronous messaging and event-driven integration",
                "Relational joins only",
                "Serving images only",
                "Managing user passwords"
          ],
          "correctIndex": 0,
          "explanation": "Pub/Sub decouples producers and consumers through messaging."
    },
    {
          "id": "gcp-31",
          "type": "mcq",
          "title": "Dataflow",
          "prompt": "What is Dataflow commonly used for?",
          "options": [
                "Managed batch and streaming data processing",
                "VM image storage",
                "Manual ticketing",
                "Static websites only"
          ],
          "correctIndex": 0,
          "explanation": "Dataflow is a managed service for Apache Beam pipelines."
    },
    {
          "id": "gcp-32",
          "type": "mcq",
          "title": "BigQuery Cost",
          "prompt": "How can BigQuery query cost be controlled?",
          "options": [
                "Partitioning, clustering, selecting only needed columns, and dry-run estimates",
                "Querying SELECT * always",
                "Duplicating all tables",
                "Removing filters"
          ],
          "correctIndex": 0,
          "explanation": "BigQuery cost is often tied to data scanned."
    },
    {
          "id": "gcp-33",
          "type": "mcq",
          "title": "Cloud Storage Classes",
          "prompt": "Why choose different Cloud Storage classes?",
          "options": [
                "To balance access frequency, availability needs, and storage cost",
                "To change object names only",
                "To run containers",
                "To create VPCs"
          ],
          "correctIndex": 0,
          "explanation": "Storage classes support different cost/access patterns."
    },
    {
          "id": "gcp-34",
          "type": "mcq",
          "title": "Cloud SQL",
          "prompt": "What is Cloud SQL?",
          "options": [
                "Managed relational database service for engines like PostgreSQL, MySQL, and SQL Server",
                "A NoSQL document database only",
                "An object storage service",
                "A Kubernetes node"
          ],
          "correctIndex": 0,
          "explanation": "Cloud SQL manages relational database operations."
    },
    {
          "id": "gcp-35",
          "type": "mcq",
          "title": "Spanner",
          "prompt": "When is Cloud Spanner a strong fit?",
          "options": [
                "Globally scalable relational workloads needing strong consistency",
                "Tiny local-only spreadsheets",
                "Static website hosting only",
                "Single-user notes"
          ],
          "correctIndex": 0,
          "explanation": "Spanner combines relational semantics with horizontal scale and strong consistency."
    },
    {
          "id": "gcp-36",
          "type": "mcq",
          "title": "Secret Manager",
          "prompt": "Why use Secret Manager?",
          "options": [
                "Store and access secrets securely with IAM and audit controls",
                "Hardcode passwords",
                "Create VM images",
                "Replace all databases"
          ],
          "correctIndex": 0,
          "explanation": "Secret Manager centralizes secret storage and access control."
    },
    {
          "id": "gcp-37",
          "type": "mcq",
          "title": "Cloud Build",
          "prompt": "What is Cloud Build used for?",
          "options": [
                "Building, testing, and deploying software through CI/CD pipelines",
                "Only billing reports",
                "Only image editing",
                "Only DNS hosting"
          ],
          "correctIndex": 0,
          "explanation": "Cloud Build automates build and deployment workflows."
    },
    {
          "id": "gcp-38",
          "type": "mcq",
          "title": "Observability",
          "prompt": "Which signals matter for production troubleshooting?",
          "options": [
                "Logs, metrics, traces, errors, alerts, and audit logs",
                "Only project names",
                "Only theme colors",
                "Only code comments"
          ],
          "correctIndex": 0,
          "explanation": "Observability helps identify performance, reliability, and security issues."
    },
    {
          "id": "gcp-39",
          "type": "mcq",
          "title": "Architecture Judgment",
          "prompt": "A workload has unpredictable traffic and must scale to zero. Which service is often a good fit?",
          "options": [
                "Cloud Run",
                "A permanently oversized VM",
                "Cloud Storage Nearline only",
                "Manual FTP server"
          ],
          "correctIndex": 0,
          "explanation": "Cloud Run can scale stateless containers down to zero."
    },
    {
          "id": "gcp-40",
          "type": "mcq",
          "title": "Advanced GCP Judgment",
          "prompt": "A production architecture handles sensitive customer data. What should be prioritized?",
          "options": [
                "Least privilege IAM, encryption, network controls, audit logging, backup/DR, monitoring, and compliance requirements",
                "Only lowest cost",
                "Public buckets for simplicity",
                "Shared admin keys"
          ],
          "correctIndex": 0,
          "explanation": "Secure cloud architecture requires layered controls and operational readiness."
    }
  ]
};
