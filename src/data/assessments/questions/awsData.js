import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level AWS Solutions Architect assessment.
// Questions progress from AWS fundamentals to architecture scenarios,
// security, networking, compute, storage, databases, resiliency,
// serverless, observability, cost optimization, migration, and Well-Architected decisions.
export const awsData = {
  id: ASSESSMENT_TYPES.aws,
  title: 'AWS Solutions Architect Professional Certification',
  shortTitle: 'AWS',
  category: 'Cloud & Infrastructure',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  description:
    'Professional AWS assessment covering compute, storage, networking, IAM, databases, serverless, messaging, monitoring, security, resiliency, cost optimization, migration, and Well-Architected architecture decisions.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and are designed to test practical AWS architecture judgment, not only service-name memorization.',
  questions: [
    {
      id: 'aws-01',
      type: 'mcq',
      title: 'Cloud Fundamentals',
      prompt: 'What is the primary value of AWS cloud computing for most organizations?',
      options: [
        'Buying fixed hardware years in advance',
        'Provisioning scalable infrastructure on demand with pay-as-you-go pricing',
        'Avoiding all security responsibilities',
        'Running applications only from a single physical data center'
      ],
      correctIndex: 1,
      explanation:
        'AWS allows organizations to provision compute, storage, networking, and managed services on demand while paying for usage rather than fixed upfront capacity.'
    },
    {
      id: 'aws-02',
      type: 'mcq',
      title: 'Shared Responsibility Model',
      prompt: 'In the AWS Shared Responsibility Model, who is responsible for security OF the cloud?',
      options: ['The customer', 'AWS', 'Both AWS and the customer equally', 'Third-party auditors only'],
      correctIndex: 1,
      explanation:
        'AWS is responsible for security of the cloud, including the global infrastructure. Customers are responsible for security in the cloud, such as IAM, data protection, and configuration.'
    },
    {
      id: 'aws-03',
      type: 'mcq',
      title: 'Compute',
      prompt: 'Which AWS service provides resizable virtual servers in the cloud?',
      options: ['Amazon S3', 'Amazon EC2', 'Amazon RDS', 'Amazon Route 53'],
      correctIndex: 1,
      explanation:
        'Amazon EC2 provides virtual server instances that can be launched, resized, stopped, and terminated based on workload needs.'
    },
    {
      id: 'aws-04',
      type: 'mcq',
      title: 'Object Storage',
      prompt: 'Which AWS service is best suited for highly durable and scalable object storage?',
      options: ['Amazon EBS', 'Amazon EFS', 'Amazon S3', 'Amazon FSx'],
      correctIndex: 2,
      explanation:
        'Amazon S3 is object storage designed for scalable storage of files, backups, logs, images, data lakes, and static assets.'
    },
    {
      id: 'aws-05',
      type: 'mcq',
      title: 'Virtual Networking',
      prompt: 'Which AWS service lets you define an isolated virtual network for your AWS resources?',
      options: ['Amazon VPC', 'AWS Direct Connect', 'Amazon CloudFront', 'AWS Config'],
      correctIndex: 0,
      explanation:
        'Amazon VPC lets you define private IP ranges, subnets, route tables, gateways, and network controls for AWS resources.'
    },
    {
      id: 'aws-06',
      type: 'mcq',
      title: 'Identity and Access',
      prompt: 'Which AWS service is primarily used to manage users, roles, policies, and access permissions?',
      options: ['AWS IAM', 'AWS KMS', 'Amazon Cognito', 'AWS Shield'],
      correctIndex: 0,
      explanation:
        'AWS Identity and Access Management is used to control access to AWS services and resources through users, groups, roles, and policies.'
    },
    {
      id: 'aws-07',
      type: 'mcq',
      title: 'Encryption Keys',
      prompt: 'Which AWS service is primarily used to create and manage encryption keys?',
      options: ['AWS IAM', 'AWS KMS', 'Amazon GuardDuty', 'AWS Artifact'],
      correctIndex: 1,
      explanation:
        'AWS Key Management Service is used to create, manage, rotate, and control access to cryptographic keys.'
    },
    {
      id: 'aws-08',
      type: 'mcq',
      title: 'Serverless Compute',
      prompt: 'Which AWS service allows you to run code without provisioning or managing servers?',
      options: ['Amazon EC2', 'Amazon ECS on EC2', 'AWS Lambda', 'Amazon EBS'],
      correctIndex: 2,
      explanation:
        'AWS Lambda runs code in response to events without requiring you to provision or manage servers.'
    },
    {
      id: 'aws-09',
      type: 'mcq',
      title: 'Managed Relational Database',
      prompt: 'Which AWS service provides managed relational databases such as MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server?',
      options: ['Amazon RDS', 'Amazon DynamoDB', 'Amazon S3', 'Amazon Redshift'],
      correctIndex: 0,
      explanation:
        'Amazon RDS is a managed relational database service that handles common administration tasks such as patching, backups, and replication.'
    },
    {
      id: 'aws-10',
      type: 'mcq',
      title: 'NoSQL Database',
      prompt: 'Which AWS service is a fully managed key-value and document NoSQL database?',
      options: ['Amazon Aurora', 'Amazon Redshift', 'Amazon DynamoDB', 'Amazon Athena'],
      correctIndex: 2,
      explanation:
        'Amazon DynamoDB is a fully managed NoSQL database designed for high-scale, low-latency key-value and document workloads.'
    },
    {
      id: 'aws-11',
      type: 'mcq',
      title: 'Content Delivery',
      prompt: 'Which AWS service is used as a globally distributed content delivery network?',
      options: ['Amazon Route 53', 'Amazon CloudFront', 'AWS Global Accelerator', 'AWS Transit Gateway'],
      correctIndex: 1,
      explanation:
        'Amazon CloudFront is AWS’s CDN service for delivering static and dynamic content through globally distributed edge locations.'
    },
    {
      id: 'aws-12',
      type: 'mcq',
      title: 'DNS',
      prompt: 'Which AWS service provides highly available and scalable DNS?',
      options: ['Amazon Route 53', 'Amazon VPC', 'AWS Direct Connect', 'AWS Cloud Map only'],
      correctIndex: 0,
      explanation:
        'Amazon Route 53 is AWS’s DNS service and supports domain registration, routing policies, and health checks.'
    },
    {
      id: 'aws-13',
      type: 'mcq',
      title: 'Monitoring',
      prompt: 'Which AWS service is commonly used for metrics, alarms, logs, and dashboards?',
      options: ['AWS CloudTrail', 'Amazon CloudWatch', 'AWS Artifact', 'AWS Organizations'],
      correctIndex: 1,
      explanation:
        'Amazon CloudWatch provides monitoring and observability through metrics, logs, alarms, dashboards, and events.'
    },
    {
      id: 'aws-14',
      type: 'mcq',
      title: 'Audit Logging',
      prompt: 'Which AWS service records API activity and account actions for governance and auditing?',
      options: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS Trusted Advisor', 'Amazon Inspector'],
      correctIndex: 1,
      explanation:
        'AWS CloudTrail records AWS API calls and account activity, helping with governance, compliance, and operational auditing.'
    },
    {
      id: 'aws-15',
      type: 'mcq',
      title: 'Load Balancing',
      prompt: 'Which AWS service distributes incoming traffic across multiple targets such as EC2 instances, containers, or IP addresses?',
      options: ['Elastic Load Balancing', 'AWS Config', 'Amazon S3', 'AWS Backup'],
      correctIndex: 0,
      explanation:
        'Elastic Load Balancing distributes application or network traffic across multiple targets to improve availability and scalability.'
    },
    {
      id: 'aws-16',
      type: 'mcq',
      title: 'Auto Scaling',
      prompt: 'Which AWS feature automatically adds or removes EC2 instances based on demand?',
      options: ['AWS Auto Scaling group', 'AWS CloudTrail', 'AWS Artifact', 'AWS Direct Connect'],
      correctIndex: 0,
      explanation:
        'Auto Scaling groups maintain application availability by adjusting EC2 capacity based on demand, health, and scaling policies.'
    },
    {
      id: 'aws-17',
      type: 'mcq',
      title: 'Public and Private Subnets',
      prompt: 'What makes a subnet public in a VPC?',
      options: [
        'It has a route to an internet gateway and resources can use public IPs',
        'It has no route table',
        'It contains only encrypted resources',
        'It is named “public” in the console'
      ],
      correctIndex: 0,
      explanation:
        'A public subnet has routing to an internet gateway. Resources also need public IP addressing or an appropriate public endpoint to be reachable from the internet.'
    },
    {
      id: 'aws-18',
      type: 'mcq',
      title: 'NAT Gateway',
      prompt: 'Instances in a private subnet need outbound internet access for software updates but should not receive inbound internet traffic. What should you use?',
      options: ['Internet Gateway only', 'NAT Gateway', 'VPC Peering', 'AWS WAF'],
      correctIndex: 1,
      explanation:
        'A NAT Gateway allows private subnet resources to initiate outbound internet connections without allowing unsolicited inbound internet traffic.'
    },
    {
      id: 'aws-19',
      type: 'mcq',
      title: 'Security Groups',
      prompt: 'Which statement about security groups is correct?',
      options: [
        'They are stateful virtual firewalls attached to resources such as EC2 instances',
        'They are stateless and apply only at the subnet level',
        'They replace IAM permissions',
        'They can only deny traffic'
      ],
      correctIndex: 0,
      explanation:
        'Security groups are stateful firewalls at the resource level. If inbound traffic is allowed, return traffic is automatically allowed.'
    },
    {
      id: 'aws-20',
      type: 'mcq',
      title: 'Network ACLs',
      prompt: 'Which statement about Network ACLs is correct?',
      options: [
        'They are stateless controls applied at the subnet level',
        'They are stateful controls attached only to IAM users',
        'They can only allow traffic, not deny traffic',
        'They are used to encrypt S3 objects'
      ],
      correctIndex: 0,
      explanation:
        'Network ACLs are stateless subnet-level controls. Both inbound and outbound rules must be explicitly configured.'
    },
    {
      id: 'aws-21',
      type: 'mcq',
      title: 'Application Load Balancer',
      prompt: 'A web application needs path-based routing such as /api to one target group and /images to another. Which load balancer is most appropriate?',
      options: ['Application Load Balancer', 'Network Load Balancer', 'Gateway Load Balancer', 'Classic Load Balancer only'],
      correctIndex: 0,
      explanation:
        'Application Load Balancer operates at Layer 7 and supports HTTP/HTTPS features such as host-based and path-based routing.'
    },
    {
      id: 'aws-22',
      type: 'mcq',
      title: 'Network Load Balancer',
      prompt: 'A workload requires very high performance TCP traffic handling with static IP support. Which load balancer is most appropriate?',
      options: ['Application Load Balancer', 'Network Load Balancer', 'AWS Config', 'Amazon S3 Transfer Acceleration'],
      correctIndex: 1,
      explanation:
        'Network Load Balancer operates at Layer 4 and is suited for high-throughput, low-latency TCP/UDP/TLS workloads.'
    },
    {
      id: 'aws-23',
      type: 'mcq',
      title: 'S3 Storage Classes',
      prompt: 'Which S3 storage class is usually best for long-term archive data that is rarely accessed and can tolerate retrieval time?',
      options: ['S3 Standard', 'S3 Intelligent-Tiering', 'S3 Glacier Deep Archive', 'S3 Express One Zone'],
      correctIndex: 2,
      explanation:
        'S3 Glacier Deep Archive is designed for long-term archival data where retrieval is infrequent and slower access is acceptable.'
    },
    {
      id: 'aws-24',
      type: 'mcq',
      title: 'Block Storage',
      prompt: 'Which AWS storage service provides block storage volumes for EC2 instances?',
      options: ['Amazon S3', 'Amazon EBS', 'Amazon EFS', 'Amazon Glacier'],
      correctIndex: 1,
      explanation:
        'Amazon EBS provides persistent block storage volumes that can be attached to EC2 instances.'
    },
    {
      id: 'aws-25',
      type: 'mcq',
      title: 'Shared File Storage',
      prompt: 'Multiple Linux EC2 instances need shared file storage that can be mounted concurrently. Which service is most appropriate?',
      options: ['Amazon EFS', 'Amazon EBS attached to all instances', 'Amazon S3 Glacier', 'AWS KMS'],
      correctIndex: 0,
      explanation:
        'Amazon EFS provides scalable shared file storage that can be mounted by multiple Linux-based compute resources.'
    },
    {
      id: 'aws-26',
      type: 'mcq',
      title: 'Static Website Hosting',
      prompt: 'A company wants to host a simple static website with HTML, CSS, JavaScript, and images at low cost. Which architecture is most appropriate?',
      options: [
        'Amazon S3 static website hosting with CloudFront',
        'A large EC2 instance running a database',
        'Amazon RDS only',
        'AWS Direct Connect only'
      ],
      correctIndex: 0,
      explanation:
        'Static websites are often hosted cost-effectively using S3 for storage and CloudFront for global delivery.'
    },
    {
      id: 'aws-27',
      type: 'mcq',
      title: 'RDS Multi-AZ',
      prompt: 'What is the primary purpose of Amazon RDS Multi-AZ deployment?',
      options: [
        'High availability and failover',
        'Read scaling for analytics queries only',
        'Replacing database backups',
        'Serving static files'
      ],
      correctIndex: 0,
      explanation:
        'RDS Multi-AZ improves availability by maintaining a standby database in another Availability Zone for failover.'
    },
    {
      id: 'aws-28',
      type: 'mcq',
      title: 'RDS Read Replicas',
      prompt: 'What is the primary purpose of Amazon RDS read replicas?',
      options: [
        'Scaling read-heavy workloads',
        'Providing synchronous failover only',
        'Encrypting IAM users',
        'Replacing application load balancers'
      ],
      correctIndex: 0,
      explanation:
        'Read replicas help offload read traffic from the primary database and improve read scalability.'
    },
    {
      id: 'aws-29',
      type: 'mcq',
      title: 'Aurora',
      prompt: 'Why might an architect choose Amazon Aurora over a self-managed database on EC2?',
      options: [
        'Aurora provides a managed relational database with high availability, replication, backups, and performance-oriented design',
        'Aurora requires manual operating system patching',
        'Aurora can only store unstructured files',
        'Aurora disables encryption'
      ],
      correctIndex: 0,
      explanation:
        'Aurora is a managed relational database engine designed for performance, availability, backups, replication, and operational simplification.'
    },
    {
      id: 'aws-30',
      type: 'mcq',
      title: 'DynamoDB Partition Key',
      prompt: 'A DynamoDB table is receiving uneven traffic because most requests target a small number of partition key values. What is the likely issue?',
      options: ['Hot partition', 'S3 lifecycle expiration', 'VPC route propagation', 'CloudTrail event duplication'],
      correctIndex: 0,
      explanation:
        'A poor partition key can create hot partitions where traffic is concentrated on a small subset of partitions.'
    },
    {
      id: 'aws-31',
      type: 'mcq',
      title: 'SQS',
      prompt: 'Which AWS service is best for decoupling application components using a managed message queue?',
      options: ['Amazon SNS', 'Amazon SQS', 'Amazon Route 53', 'AWS Shield'],
      correctIndex: 1,
      explanation:
        'Amazon SQS provides managed queues that help decouple producers and consumers and buffer workloads.'
    },
    {
      id: 'aws-32',
      type: 'mcq',
      title: 'SNS',
      prompt: 'Which AWS service is best suited for pub/sub fanout messaging to multiple subscribers?',
      options: ['Amazon SNS', 'Amazon SQS only', 'Amazon EBS', 'AWS Config'],
      correctIndex: 0,
      explanation:
        'Amazon SNS supports publish/subscribe messaging and can fan out events to multiple endpoints or queues.'
    },
    {
      id: 'aws-33',
      type: 'mcq',
      title: 'EventBridge',
      prompt: 'A company wants to route application events from SaaS tools and AWS services to different targets based on event patterns. Which service is most appropriate?',
      options: ['Amazon EventBridge', 'Amazon EBS', 'AWS Artifact', 'Amazon Inspector'],
      correctIndex: 0,
      explanation:
        'Amazon EventBridge is an event bus service that routes events from AWS services, custom applications, and SaaS providers to targets.'
    },
    {
      id: 'aws-34',
      type: 'mcq',
      title: 'Step Functions',
      prompt: 'A serverless workflow needs to coordinate multiple Lambda functions with retries, branching, and error handling. Which service should be used?',
      options: ['AWS Step Functions', 'Amazon Route 53', 'Amazon EFS', 'AWS Shield'],
      correctIndex: 0,
      explanation:
        'AWS Step Functions coordinates distributed workflows and supports branching, retries, error handling, and state management.'
    },
    {
      id: 'aws-35',
      type: 'mcq',
      title: 'API Gateway',
      prompt: 'Which AWS service is commonly used to create, secure, throttle, and manage APIs for serverless or backend applications?',
      options: ['Amazon API Gateway', 'Amazon S3 Glacier', 'AWS Backup', 'Amazon Macie'],
      correctIndex: 0,
      explanation:
        'Amazon API Gateway helps create and manage REST, HTTP, and WebSocket APIs, often used with Lambda and backend services.'
    },
    {
      id: 'aws-36',
      type: 'mcq',
      title: 'Containers',
      prompt: 'A team wants to run Docker containers on AWS without managing the underlying EC2 instances. Which option is most appropriate?',
      options: ['Amazon ECS with AWS Fargate', 'Amazon EC2 only', 'Amazon EBS only', 'AWS CloudTrail'],
      correctIndex: 0,
      explanation:
        'AWS Fargate is a serverless compute engine for containers that can be used with ECS and EKS without managing EC2 instances.'
    },
    {
      id: 'aws-37',
      type: 'mcq',
      title: 'Infrastructure as Code',
      prompt: 'Which AWS service lets you define and provision infrastructure using templates?',
      options: ['AWS CloudFormation', 'AWS CloudTrail', 'Amazon CloudWatch', 'AWS Shield'],
      correctIndex: 0,
      explanation:
        'AWS CloudFormation provisions and manages AWS resources using infrastructure-as-code templates.'
    },
    {
      id: 'aws-38',
      type: 'mcq',
      title: 'Cloud Development Kit',
      prompt: 'Why might a team use AWS CDK?',
      options: [
        'To define cloud infrastructure using familiar programming languages',
        'To manually click every resource in the console',
        'To replace all IAM policies',
        'To store object data permanently in memory'
      ],
      correctIndex: 0,
      explanation:
        'AWS CDK lets developers define infrastructure using programming languages such as TypeScript, Python, Java, C#, and Go.'
    },
    {
      id: 'aws-39',
      type: 'mcq',
      title: 'Threat Detection',
      prompt: 'Which AWS service provides intelligent threat detection by analyzing events, logs, and account activity?',
      options: ['Amazon GuardDuty', 'AWS Artifact', 'AWS Budgets', 'Amazon Athena'],
      correctIndex: 0,
      explanation:
        'Amazon GuardDuty is a threat detection service that monitors for malicious or unauthorized activity.'
    },
    {
      id: 'aws-40',
      type: 'mcq',
      title: 'Vulnerability Management',
      prompt: 'Which AWS service helps assess workloads for software vulnerabilities and unintended network exposure?',
      options: ['Amazon Inspector', 'Amazon Route 53', 'AWS Cost Explorer', 'Amazon SQS'],
      correctIndex: 0,
      explanation:
        'Amazon Inspector helps identify software vulnerabilities and network exposure in supported workloads.'
    },
    {
      id: 'aws-41',
      type: 'mcq',
      title: 'Sensitive Data Discovery',
      prompt: 'Which AWS service helps discover and protect sensitive data such as personally identifiable information in S3?',
      options: ['Amazon Macie', 'AWS Shield', 'Amazon ECS', 'AWS DMS'],
      correctIndex: 0,
      explanation:
        'Amazon Macie uses machine learning and pattern matching to help discover sensitive data in Amazon S3.'
    },
    {
      id: 'aws-42',
      type: 'mcq',
      title: 'Web Application Protection',
      prompt: 'A public web application needs protection against common web exploits such as SQL injection and cross-site scripting. Which service is most appropriate?',
      options: ['AWS WAF', 'Amazon EBS', 'AWS Snowball', 'AWS Config only'],
      correctIndex: 0,
      explanation:
        'AWS WAF helps protect web applications by filtering HTTP/S traffic based on rules for common attack patterns.'
    },
    {
      id: 'aws-43',
      type: 'mcq',
      title: 'DDoS Protection',
      prompt: 'Which AWS service provides managed protection against DDoS attacks?',
      options: ['AWS Shield', 'AWS Glue', 'Amazon Athena', 'AWS Backup'],
      correctIndex: 0,
      explanation:
        'AWS Shield provides managed DDoS protection for applications running on AWS.'
    },
    {
      id: 'aws-44',
      type: 'mcq',
      title: 'Cost Analysis',
      prompt: 'Which AWS tool helps visualize, understand, and analyze AWS costs and usage over time?',
      options: ['AWS Cost Explorer', 'AWS CloudTrail', 'Amazon GuardDuty', 'AWS Artifact'],
      correctIndex: 0,
      explanation:
        'AWS Cost Explorer helps analyze cost and usage trends across AWS accounts, services, tags, and time periods.'
    },
    {
      id: 'aws-45',
      type: 'mcq',
      title: 'Budget Alerts',
      prompt: 'A finance team wants alerts when monthly AWS spend is forecasted to exceed a limit. Which service should be used?',
      options: ['AWS Budgets', 'Amazon S3', 'Amazon VPC', 'AWS DMS'],
      correctIndex: 0,
      explanation:
        'AWS Budgets can alert teams when actual or forecasted cost and usage exceed configured thresholds.'
    },
    {
      id: 'aws-46',
      type: 'mcq',
      title: 'Compute Cost Optimization',
      prompt: 'A workload runs continuously with predictable compute usage for the next year. Which pricing option is commonly suitable?',
      options: ['Savings Plans or Reserved Instances', 'On-Demand only forever', 'Spot Instances only for a critical database', 'Free Tier only'],
      correctIndex: 0,
      explanation:
        'Predictable steady-state workloads are strong candidates for Savings Plans or Reserved Instances to reduce compute cost.'
    },
    {
      id: 'aws-47',
      type: 'mcq',
      title: 'Spot Instances',
      prompt: 'Which workload is usually the best fit for EC2 Spot Instances?',
      options: [
        'Fault-tolerant batch processing that can handle interruption',
        'Primary transactional database requiring uninterrupted availability',
        'Single-instance production authentication server',
        'A workload that must never be interrupted'
      ],
      correctIndex: 0,
      explanation:
        'Spot Instances can reduce cost but may be interrupted, so they are best suited for flexible, fault-tolerant workloads.'
    },
    {
      id: 'aws-48',
      type: 'mcq',
      title: 'Disaster Recovery',
      prompt: 'A company needs to minimize downtime and data loss for on-premises servers by continuously replicating them to AWS. Which service is most appropriate?',
      options: ['AWS Elastic Disaster Recovery', 'AWS Artifact', 'Amazon QuickSight', 'Amazon Macie'],
      correctIndex: 0,
      explanation:
        'AWS Elastic Disaster Recovery is the recommended AWS service for disaster recovery to AWS and provides continuous replication and recovery orchestration.'
    },
    {
      id: 'aws-49',
      type: 'mcq',
      title: 'RPO',
      prompt: 'A business says it can tolerate at most 15 minutes of data loss during a disaster. Which metric is being described?',
      options: ['RPO', 'RTO', 'P99 latency', 'Cache hit ratio'],
      correctIndex: 0,
      explanation:
        'Recovery Point Objective is the maximum acceptable amount of data loss measured in time.'
    },
    {
      id: 'aws-50',
      type: 'mcq',
      title: 'RTO',
      prompt: 'A business says an application must be restored within 30 minutes after an outage. Which metric is being described?',
      options: ['RTO', 'RPO', 'Availability Zone', 'Provisioned IOPS'],
      correctIndex: 0,
      explanation:
        'Recovery Time Objective is the maximum acceptable time to restore service after an outage.'
    },
    {
      id: 'aws-51',
      type: 'mcq',
      title: 'Multi-AZ Architecture',
      prompt: 'A production web application must continue running if one Availability Zone fails. What is the strongest architecture?',
      options: [
        'Deploy resources across multiple Availability Zones behind a load balancer',
        'Run everything on one EC2 instance',
        'Store all backups on the same instance',
        'Disable health checks'
      ],
      correctIndex: 0,
      explanation:
        'Multi-AZ deployment improves availability by spreading resources across physically separate Availability Zones.'
    },
    {
      id: 'aws-52',
      type: 'mcq',
      title: 'Cross-Region Resiliency',
      prompt: 'A mission-critical application requires regional disaster recovery. What should the architect consider first?',
      options: [
        'RPO, RTO, cost, data replication, failover process, and operational complexity',
        'Only the color of the dashboard',
        'Only the number of IAM users',
        'Removing all backups'
      ],
      correctIndex: 0,
      explanation:
        'Cross-region disaster recovery is a trade-off decision involving recovery objectives, replication, cost, failover, consistency, and operational maturity.'
    },
    {
      id: 'aws-53',
      type: 'mcq',
      title: 'Route 53 Routing Policy',
      prompt: 'A company wants to route users to the lowest-latency AWS region based on network performance. Which Route 53 routing policy fits best?',
      options: ['Latency-based routing', 'Simple routing only', 'Weighted routing only', 'Failover routing only'],
      correctIndex: 0,
      explanation:
        'Latency-based routing routes users to the region that provides the lowest latency from their location.'
    },
    {
      id: 'aws-54',
      type: 'mcq',
      title: 'Blue-Green Deployment',
      prompt: 'A team wants to deploy a new version while keeping the old version available for fast rollback. Which strategy fits best?',
      options: ['Blue-green deployment', 'Manual server replacement only', 'Single instance patching', 'No deployment strategy'],
      correctIndex: 0,
      explanation:
        'Blue-green deployment keeps two environments so traffic can be shifted to the new version and quickly rolled back if needed.'
    },
    {
      id: 'aws-55',
      type: 'mcq',
      title: 'Canary Release',
      prompt: 'A risky application change should be released to a small percentage of users before full rollout. Which strategy is most appropriate?',
      options: ['Canary release', 'Big-bang release', 'Manual database edit', 'Disable monitoring'],
      correctIndex: 0,
      explanation:
        'Canary releases expose a new version to a small user segment first, reducing blast radius and enabling early issue detection.'
    },
    {
      id: 'aws-56',
      type: 'mcq',
      title: 'Data Warehouse',
      prompt: 'Which AWS service is commonly used as a managed cloud data warehouse for analytics?',
      options: ['Amazon Redshift', 'Amazon RDS for small OLTP only', 'Amazon Route 53', 'Amazon EBS'],
      correctIndex: 0,
      explanation:
        'Amazon Redshift is a managed data warehouse service used for large-scale analytics and SQL-based reporting.'
    },
    {
      id: 'aws-57',
      type: 'mcq',
      title: 'Serverless Query',
      prompt: 'A team wants to run SQL queries directly on files stored in Amazon S3 without managing servers. Which service is most appropriate?',
      options: ['Amazon Athena', 'Amazon EC2', 'Amazon EBS', 'AWS Shield'],
      correctIndex: 0,
      explanation:
        'Amazon Athena is a serverless query service commonly used to analyze data in S3 using SQL.'
    },
    {
      id: 'aws-58',
      type: 'mcq',
      title: 'ETL',
      prompt: 'Which AWS service is commonly used for serverless data integration, cataloging, and ETL jobs?',
      options: ['AWS Glue', 'Amazon Route 53', 'AWS WAF', 'Amazon Inspector'],
      correctIndex: 0,
      explanation:
        'AWS Glue is used for data cataloging, ETL, and serverless data integration workflows.'
    },
    {
      id: 'aws-59',
      type: 'mcq',
      title: 'Database Migration',
      prompt: 'A company wants to migrate an on-premises database to AWS with minimal downtime. Which AWS service is commonly used?',
      options: ['AWS Database Migration Service', 'AWS Artifact', 'Amazon CloudFront', 'AWS Budgets'],
      correctIndex: 0,
      explanation:
        'AWS Database Migration Service helps migrate databases to AWS and supports ongoing replication for reduced downtime migration patterns.'
    },
    {
      id: 'aws-60',
      type: 'mcq',
      title: 'Well-Architected Decision',
      prompt: 'What makes an AWS architecture recommendation credible in a senior design review?',
      options: [
        'Explaining trade-offs across security, reliability, performance, cost, operations, and business constraints',
        'Choosing the most expensive AWS service every time',
        'Copying a famous company architecture exactly',
        'Avoiding all discussion of risks and constraints'
      ],
      correctIndex: 0,
      explanation:
        'Strong AWS architecture decisions are context-aware and balance Well-Architected concerns such as security, reliability, performance, cost, operations, and sustainability.'
    }
  ]
};