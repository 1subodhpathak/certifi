import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Azure Administrator assessment.
// Questions progress from Azure fundamentals to identity, governance,
// storage, compute, networking, monitoring, security, backup, migration,
// cost management, and architecture decision-making.
export const azureData = {
  id: ASSESSMENT_TYPES.azure,
  title: 'Azure Administrator Professional Certification',
  shortTitle: 'Azure',
  category: 'Cloud & Infrastructure',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  description:
    'Professional Azure assessment covering Microsoft Entra ID, subscriptions, RBAC, governance, storage, virtual machines, App Service, containers, virtual networks, load balancing, monitoring, backup, security, migration, cost management, and operational administration.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and are designed to test practical Azure administration and architecture judgment, not only service-name memorization.',
  questions: [
    {
      id: 'az-01',
      type: 'mcq',
      title: 'Azure Fundamentals',
      prompt: 'What is Microsoft Azure primarily used for?',
      options: [
        'Provisioning and managing cloud services such as compute, storage, networking, databases, security, and analytics',
        'Only creating local desktop applications',
        'Replacing all operating systems',
        'Managing only physical datacenter cabling'
      ],
      correctIndex: 0,
      explanation:
        'Azure is Microsoft’s cloud platform for provisioning and managing infrastructure, platforms, applications, data services, security, and operations.'
    },
    {
      id: 'az-02',
      type: 'mcq',
      title: 'Azure Virtual Machines',
      prompt: 'Which Azure service provides on-demand virtualized compute similar to a traditional server?',
      options: ['Azure Container Instances', 'Azure Virtual Machines', 'Azure Blob Storage', 'Azure DNS'],
      correctIndex: 1,
      explanation:
        'Azure Virtual Machines provide configurable virtual servers for workloads that require operating system-level control.'
    },
    {
      id: 'az-03',
      type: 'mcq',
      title: 'Cloud Identity',
      prompt: 'What is Microsoft’s cloud-based identity and access management service?',
      options: ['Active Directory Domain Services only', 'Microsoft Entra ID', 'Azure Policy', 'Azure Monitor'],
      correctIndex: 1,
      explanation:
        'Microsoft Entra ID, formerly Azure Active Directory, provides cloud identity and access management for users, applications, devices, and resources.'
    },
    {
      id: 'az-04',
      type: 'mcq',
      title: 'Object Storage',
      prompt: 'Which Azure storage service is optimized for storing massive amounts of unstructured object data?',
      options: ['Azure Files', 'Azure Blob Storage', 'Azure Queue Storage', 'Azure Table Storage'],
      correctIndex: 1,
      explanation:
        'Azure Blob Storage is object storage designed for unstructured data such as images, documents, backups, logs, and data lake files.'
    },
    {
      id: 'az-05',
      type: 'mcq',
      title: 'Virtual Networking',
      prompt: 'What is the fundamental building block for a private network in Azure?',
      options: ['Azure Virtual Network', 'Azure VPN Gateway', 'Azure ExpressRoute', 'Azure DNS'],
      correctIndex: 0,
      explanation:
        'Azure Virtual Network allows Azure resources to communicate privately with each other, the internet, and on-premises networks.'
    },
    {
      id: 'az-06',
      type: 'mcq',
      title: 'Serverless Compute',
      prompt: 'Which Azure service allows you to run event-triggered code without explicitly provisioning servers?',
      options: ['Azure Batch', 'Azure Functions', 'Azure Service Bus', 'Azure Virtual Machines'],
      correctIndex: 1,
      explanation:
        'Azure Functions is a serverless compute service that runs code in response to events, schedules, HTTP requests, queues, and other triggers.'
    },
    {
      id: 'az-07',
      type: 'mcq',
      title: 'Managed Relational Database',
      prompt: 'Which Azure service provides a fully managed relational database based on SQL Server technology?',
      options: ['Azure Cosmos DB', 'Azure SQL Database', 'Azure Blob Storage', 'Azure Queue Storage'],
      correctIndex: 1,
      explanation:
        'Azure SQL Database is a managed relational database service that handles many administrative tasks such as patching, backups, and high availability.'
    },
    {
      id: 'az-08',
      type: 'mcq',
      title: 'Resource Groups',
      prompt: 'What is the main purpose of an Azure resource group?',
      options: [
        'To logically group related Azure resources for management, access control, deployment, and lifecycle operations',
        'To replace Microsoft Entra ID',
        'To store only billing invoices',
        'To create physical datacenters'
      ],
      correctIndex: 0,
      explanation:
        'Resource groups are logical containers used to manage related Azure resources together.'
    },
    {
      id: 'az-09',
      type: 'mcq',
      title: 'Subscriptions',
      prompt: 'What is an Azure subscription primarily used for?',
      options: [
        'Providing a billing, access control, and resource management boundary',
        'Replacing virtual networks',
        'Running only one virtual machine',
        'Storing only user passwords'
      ],
      correctIndex: 0,
      explanation:
        'An Azure subscription acts as a boundary for billing, quotas, policies, access control, and resource organization.'
    },
    {
      id: 'az-10',
      type: 'mcq',
      title: 'Management Groups',
      prompt: 'What are Azure management groups used for?',
      options: [
        'Managing access, policy, and compliance across multiple subscriptions',
        'Creating virtual machine disks',
        'Replacing all resource groups',
        'Encrypting only one storage account'
      ],
      correctIndex: 0,
      explanation:
        'Management groups provide a governance scope above subscriptions and help manage policies and access consistently across an organization.'
    },
    {
      id: 'az-11',
      type: 'mcq',
      title: 'Role-Based Access Control',
      prompt: 'What is Azure RBAC used for?',
      options: [
        'Granting permissions to Azure resources based on roles, scopes, and assignments',
        'Creating DNS records only',
        'Replacing all network security groups',
        'Encrypting virtual machine disks only'
      ],
      correctIndex: 0,
      explanation:
        'Azure RBAC controls access to Azure resources by assigning roles to users, groups, service principals, or managed identities at specific scopes.'
    },
    {
      id: 'az-12',
      type: 'mcq',
      title: 'Least Privilege',
      prompt: 'A user only needs to restart virtual machines but should not manage networking or delete resources. What is the best access approach?',
      options: [
        'Assign the least privileged built-in or custom role at the correct scope',
        'Make the user subscription Owner',
        'Share the global administrator account',
        'Disable RBAC for the subscription'
      ],
      correctIndex: 0,
      explanation:
        'Least privilege means granting only the permissions required for the task and only at the necessary scope.'
    },
    {
      id: 'az-13',
      type: 'mcq',
      title: 'Azure Policy',
      prompt: 'Which Azure service helps enforce organizational standards and assess compliance at scale?',
      options: ['Azure Policy', 'Azure Monitor', 'Azure Bastion', 'Azure Load Balancer'],
      correctIndex: 0,
      explanation:
        'Azure Policy is used to define, assign, and evaluate rules for resource compliance, such as allowed regions, required tags, or security requirements.'
    },
    {
      id: 'az-14',
      type: 'mcq',
      title: 'Resource Locks',
      prompt: 'What is the purpose of an Azure resource lock?',
      options: [
        'To prevent accidental deletion or modification of important resources',
        'To encrypt all network traffic automatically',
        'To replace backup policies',
        'To create a virtual network'
      ],
      correctIndex: 0,
      explanation:
        'Resource locks such as CanNotDelete or ReadOnly help protect critical resources from accidental changes or deletion.'
    },
    {
      id: 'az-15',
      type: 'mcq',
      title: 'Tags',
      prompt: 'Why are tags commonly used in Azure?',
      options: [
        'To add metadata for cost tracking, ownership, environment, compliance, and operations',
        'To replace access control',
        'To automatically patch all servers',
        'To create encrypted passwords'
      ],
      correctIndex: 0,
      explanation:
        'Tags help organize resources and support reporting for cost, ownership, environment, application, or compliance classification.'
    },
    {
      id: 'az-16',
      type: 'mcq',
      title: 'Storage Account',
      prompt: 'What is an Azure storage account?',
      options: [
        'A namespace that contains Azure storage services such as blobs, files, queues, and tables',
        'A user identity account only',
        'A virtual machine operating system',
        'A DNS routing rule'
      ],
      correctIndex: 0,
      explanation:
        'A storage account provides a unique namespace and configuration boundary for Azure Storage services.'
    },
    {
      id: 'az-17',
      type: 'mcq',
      title: 'Blob Access Tiers',
      prompt: 'A company stores data that is accessed frequently and requires low-latency access. Which Blob Storage tier is most appropriate?',
      options: ['Hot tier', 'Cool tier', 'Archive tier', 'Delete tier'],
      correctIndex: 0,
      explanation:
        'The Hot tier is designed for frequently accessed data. Cool and Archive tiers are generally used for less frequently accessed data.'
    },
    {
      id: 'az-18',
      type: 'mcq',
      title: 'Archive Storage',
      prompt: 'A company must retain compliance records for seven years, and retrieval can take hours. Which Blob Storage tier is usually most cost-effective?',
      options: ['Hot tier', 'Cool tier', 'Archive tier', 'Premium block blob only'],
      correctIndex: 2,
      explanation:
        'Archive tier is designed for rarely accessed data that can tolerate longer retrieval times.'
    },
    {
      id: 'az-19',
      type: 'mcq',
      title: 'Storage Redundancy',
      prompt: 'Which storage redundancy option replicates data synchronously across availability zones within a region?',
      options: ['LRS', 'ZRS', 'GRS', 'RA-GRS'],
      correctIndex: 1,
      explanation:
        'Zone-redundant storage replicates data across multiple availability zones within the same region.'
    },
    {
      id: 'az-20',
      type: 'mcq',
      title: 'Geo-Redundant Storage',
      prompt: 'A business needs storage replication to a secondary region for disaster recovery. Which redundancy option is most appropriate?',
      options: ['LRS', 'ZRS', 'GRS or GZRS', 'Premium SSD only'],
      correctIndex: 2,
      explanation:
        'GRS and GZRS replicate data to a secondary region, supporting regional disaster recovery scenarios.'
    },
    {
      id: 'az-21',
      type: 'mcq',
      title: 'Shared Access Signature',
      prompt: 'What is a Shared Access Signature used for?',
      options: [
        'Granting limited, time-bound access to Azure Storage resources',
        'Creating a virtual network',
        'Replacing Microsoft Entra ID',
        'Running SQL queries'
      ],
      correctIndex: 0,
      explanation:
        'A SAS token grants delegated access to storage resources with defined permissions, expiry, and scope.'
    },
    {
      id: 'az-22',
      type: 'mcq',
      title: 'Azure Files',
      prompt: 'Which Azure service provides managed file shares accessible over SMB or NFS?',
      options: ['Azure Files', 'Azure Blob Storage only', 'Azure Queue Storage', 'Azure Table Storage'],
      correctIndex: 0,
      explanation:
        'Azure Files provides managed file shares that can be mounted by cloud or on-premises systems.'
    },
    {
      id: 'az-23',
      type: 'mcq',
      title: 'Storage Lifecycle Management',
      prompt: 'A company wants old blob data to automatically move from Hot to Cool and later to Archive. What should be configured?',
      options: ['Lifecycle management policy', 'Network security group', 'Azure Bastion', 'Virtual machine scale set'],
      correctIndex: 0,
      explanation:
        'Lifecycle management policies can automatically transition blob data between tiers or delete data based on age and rules.'
    },
    {
      id: 'az-24',
      type: 'mcq',
      title: 'Virtual Machine Availability',
      prompt: 'A production application should remain available if one Azure datacenter in a region fails. What should be used?',
      options: [
        'Availability Zones',
        'One virtual machine with a larger size',
        'A single unmanaged disk',
        'A public IP address only'
      ],
      correctIndex: 0,
      explanation:
        'Availability Zones are physically separate locations within a region and help protect against datacenter-level failures.'
    },
    {
      id: 'az-25',
      type: 'mcq',
      title: 'Availability Sets',
      prompt: 'What do availability sets primarily protect against?',
      options: [
        'Host-level failures and planned maintenance events within a datacenter',
        'Global DNS outages only',
        'Storage account naming conflicts',
        'Application code bugs'
      ],
      correctIndex: 0,
      explanation:
        'Availability sets distribute virtual machines across fault domains and update domains to reduce impact from hardware failure and maintenance.'
    },
    {
      id: 'az-26',
      type: 'mcq',
      title: 'Virtual Machine Scale Sets',
      prompt: 'Which Azure service helps deploy and manage a group of identical auto-scaling virtual machines?',
      options: ['Virtual Machine Scale Sets', 'Azure DNS', 'Azure Key Vault', 'Azure Policy'],
      correctIndex: 0,
      explanation:
        'Virtual Machine Scale Sets provide scalable groups of VMs for workloads that need automatic scaling and consistent configuration.'
    },
    {
      id: 'az-27',
      type: 'mcq',
      title: 'App Service',
      prompt: 'Which Azure service is best for hosting a managed web application without managing the underlying VM operating system?',
      options: ['Azure App Service', 'Azure Virtual Machine only', 'Azure Disk Storage', 'Azure Route Table'],
      correctIndex: 0,
      explanation:
        'Azure App Service is a managed platform for hosting web apps, APIs, and backend services without directly managing servers.'
    },
    {
      id: 'az-28',
      type: 'mcq',
      title: 'Deployment Slots',
      prompt: 'What is the main benefit of deployment slots in Azure App Service?',
      options: [
        'They allow staging and production environments with controlled swaps and easier rollback',
        'They replace all databases',
        'They create VPN tunnels',
        'They delete old logs automatically'
      ],
      correctIndex: 0,
      explanation:
        'Deployment slots support safer releases by allowing testing in a staging slot and swapping traffic with production.'
    },
    {
      id: 'az-29',
      type: 'mcq',
      title: 'Containers',
      prompt: 'Which Azure service can run a container quickly without managing servers or orchestrators?',
      options: ['Azure Container Instances', 'Azure DNS', 'Azure Policy', 'Azure Backup'],
      correctIndex: 0,
      explanation:
        'Azure Container Instances is useful for quickly running containers without managing VM infrastructure or Kubernetes clusters.'
    },
    {
      id: 'az-30',
      type: 'mcq',
      title: 'Managed Kubernetes',
      prompt: 'What is Azure’s managed Kubernetes service?',
      options: ['AKS', 'ACR', 'ACI', 'Azure Batch'],
      correctIndex: 0,
      explanation:
        'Azure Kubernetes Service simplifies deployment, management, and scaling of Kubernetes clusters on Azure.'
    },
    {
      id: 'az-31',
      type: 'mcq',
      title: 'Container Registry',
      prompt: 'Which Azure service is used to store and manage private container images?',
      options: ['Azure Container Registry', 'Azure Key Vault', 'Azure Service Bus', 'Azure Front Door'],
      correctIndex: 0,
      explanation:
        'Azure Container Registry stores and manages container images for use with AKS, App Service, Container Apps, and other container platforms.'
    },
    {
      id: 'az-32',
      type: 'mcq',
      title: 'Subnets',
      prompt: 'Why are subnets used inside an Azure virtual network?',
      options: [
        'To segment address space and organize resources for security, routing, and service placement',
        'To replace Microsoft Entra ID',
        'To store database backups only',
        'To create billing invoices'
      ],
      correctIndex: 0,
      explanation:
        'Subnets divide a virtual network into smaller address ranges and support segmentation, routing, and security policies.'
    },
    {
      id: 'az-33',
      type: 'mcq',
      title: 'Network Security Groups',
      prompt: 'What is the purpose of a Network Security Group?',
      options: [
        'To filter inbound and outbound network traffic using security rules',
        'To assign Azure RBAC permissions',
        'To encrypt Key Vault secrets',
        'To create application source code'
      ],
      correctIndex: 0,
      explanation:
        'Network Security Groups control inbound and outbound traffic to network interfaces or subnets using allow and deny rules.'
    },
    {
      id: 'az-34',
      type: 'mcq',
      title: 'Application Security Groups',
      prompt: 'What is the purpose of Application Security Groups?',
      options: [
        'To group virtual machines logically for easier NSG rule management',
        'To store application passwords',
        'To create global DNS records',
        'To replace storage accounts'
      ],
      correctIndex: 0,
      explanation:
        'Application Security Groups help simplify NSG rules by grouping resources based on application roles such as web, app, or database tiers.'
    },
    {
      id: 'az-35',
      type: 'mcq',
      title: 'User-Defined Routes',
      prompt: 'When would you use a user-defined route?',
      options: [
        'To control traffic flow, such as routing traffic through a firewall or network virtual appliance',
        'To reset a user password',
        'To rotate a Key Vault key only',
        'To create an App Service deployment slot'
      ],
      correctIndex: 0,
      explanation:
        'User-defined routes let administrators override default Azure routing and direct traffic through specific next hops.'
    },
    {
      id: 'az-36',
      type: 'mcq',
      title: 'VNet Peering',
      prompt: 'What does virtual network peering allow?',
      options: [
        'Private connectivity between Azure virtual networks using Microsoft’s backbone network',
        'Public internet-only communication',
        'Automatic deletion of unused disks',
        'Replacing all VPN gateways'
      ],
      correctIndex: 0,
      explanation:
        'VNet peering connects virtual networks so resources can communicate privately over Microsoft’s network.'
    },
    {
      id: 'az-37',
      type: 'mcq',
      title: 'VPN Gateway',
      prompt: 'Which Azure service is used to create encrypted site-to-site connectivity between an on-premises network and Azure over the public internet?',
      options: ['Azure VPN Gateway', 'Azure DNS', 'Azure Monitor', 'Azure Advisor'],
      correctIndex: 0,
      explanation:
        'Azure VPN Gateway provides encrypted connectivity between Azure virtual networks and on-premises networks over the internet.'
    },
    {
      id: 'az-38',
      type: 'mcq',
      title: 'ExpressRoute',
      prompt: 'A company needs private dedicated connectivity from its datacenter to Azure without traversing the public internet. What should it use?',
      options: ['ExpressRoute', 'Azure DNS only', 'Public IP only', 'Azure Monitor only'],
      correctIndex: 0,
      explanation:
        'ExpressRoute provides private connectivity between on-premises environments and Microsoft cloud services through a connectivity provider.'
    },
    {
      id: 'az-39',
      type: 'mcq',
      title: 'Private Endpoint',
      prompt: 'A storage account should be accessed privately from a virtual network without using the public internet. What should be configured?',
      options: ['Private Endpoint', 'Public IP address', 'Basic SKU load balancer', 'Azure Advisor only'],
      correctIndex: 0,
      explanation:
        'Private Endpoint gives an Azure service a private IP address in a virtual network and enables private connectivity through Azure Private Link.'
    },
    {
      id: 'az-40',
      type: 'mcq',
      title: 'Azure Bastion',
      prompt: 'What is Azure Bastion used for?',
      options: [
        'Secure browser-based RDP/SSH access to virtual machines without exposing public IPs',
        'Storing unstructured object data',
        'Creating SQL indexes',
        'Replacing all backup policies'
      ],
      correctIndex: 0,
      explanation:
        'Azure Bastion allows secure RDP and SSH access to VMs through the Azure portal without exposing VMs directly to the public internet.'
    },
    {
      id: 'az-41',
      type: 'mcq',
      title: 'Azure Load Balancer',
      prompt: 'Which Azure service provides Layer 4 TCP/UDP load balancing?',
      options: ['Azure Load Balancer', 'Azure Application Gateway', 'Azure Front Door', 'Azure Traffic Manager'],
      correctIndex: 0,
      explanation:
        'Azure Load Balancer operates at Layer 4 and distributes TCP/UDP traffic across healthy backend resources.'
    },
    {
      id: 'az-42',
      type: 'mcq',
      title: 'Application Gateway',
      prompt: 'Which Azure service provides Layer 7 HTTP/HTTPS load balancing and can include a web application firewall?',
      options: ['Azure Application Gateway', 'Azure Load Balancer', 'Azure Route Table', 'Azure Files'],
      correctIndex: 0,
      explanation:
        'Azure Application Gateway is a Layer 7 load balancer and can use Web Application Firewall capabilities for HTTP/S applications.'
    },
    {
      id: 'az-43',
      type: 'mcq',
      title: 'Azure Front Door',
      prompt: 'A global web application needs edge-based routing, acceleration, TLS termination, and web application protection. Which service is most appropriate?',
      options: ['Azure Front Door', 'Azure Disk Storage', 'Azure Batch', 'Azure Table Storage'],
      correctIndex: 0,
      explanation:
        'Azure Front Door is used for globally distributed web applications that need edge routing, acceleration, TLS, and WAF capabilities.'
    },
    {
      id: 'az-44',
      type: 'mcq',
      title: 'Traffic Manager',
      prompt: 'Which Azure service provides DNS-based traffic routing across regions or endpoints?',
      options: ['Azure Traffic Manager', 'Azure Load Balancer only', 'Azure Key Vault', 'Azure Files'],
      correctIndex: 0,
      explanation:
        'Azure Traffic Manager uses DNS-based routing methods to direct users to endpoints based on performance, priority, geography, or other policies.'
    },
    {
      id: 'az-45',
      type: 'mcq',
      title: 'Azure Firewall',
      prompt: 'What is Azure Firewall used for?',
      options: [
        'Centralized, managed network security and traffic filtering for Azure virtual networks',
        'Creating storage blobs',
        'Running serverless functions',
        'Managing user profile pictures'
      ],
      correctIndex: 0,
      explanation:
        'Azure Firewall is a managed firewall service that provides centralized network traffic filtering and policy enforcement.'
    },
    {
      id: 'az-46',
      type: 'mcq',
      title: 'Key Vault',
      prompt: 'Which Azure service is used to securely store and access secrets, keys, and certificates?',
      options: ['Azure Key Vault', 'Azure Storage Queue', 'Azure Monitor', 'Azure DevTest Labs'],
      correctIndex: 0,
      explanation:
        'Azure Key Vault stores and manages secrets, encryption keys, and certificates with access control and auditing.'
    },
    {
      id: 'az-47',
      type: 'mcq',
      title: 'Managed Identity',
      prompt: 'Why would you use a managed identity for an Azure resource?',
      options: [
        'To let the resource authenticate to Azure services without storing credentials in code',
        'To create a public IP address',
        'To replace virtual networks',
        'To manually type passwords into scripts'
      ],
      correctIndex: 0,
      explanation:
        'Managed identities provide an identity for Azure resources so they can securely access other services without embedded secrets.'
    },
    {
      id: 'az-48',
      type: 'mcq',
      title: 'Defender for Cloud',
      prompt: 'Which service provides cloud security posture management and workload protection recommendations across Azure and hybrid environments?',
      options: ['Microsoft Defender for Cloud', 'Azure Cost Management', 'Azure DNS', 'Azure Data Box'],
      correctIndex: 0,
      explanation:
        'Microsoft Defender for Cloud helps assess security posture, provide recommendations, and protect cloud and hybrid workloads.'
    },
    {
      id: 'az-49',
      type: 'mcq',
      title: 'Microsoft Sentinel',
      prompt: 'Which Azure service is a cloud-native SIEM and SOAR solution for security monitoring and response?',
      options: ['Microsoft Sentinel', 'Azure Blob Storage', 'Azure Logic Apps only', 'Azure App Service'],
      correctIndex: 0,
      explanation:
        'Microsoft Sentinel is used for security information and event management, analytics, detection, investigation, and automated response.'
    },
    {
      id: 'az-50',
      type: 'mcq',
      title: 'Azure Monitor',
      prompt: 'Which Azure service collects and analyzes metrics, logs, and telemetry from Azure resources and applications?',
      options: ['Azure Monitor', 'Azure Policy', 'Azure Migrate', 'Azure DNS'],
      correctIndex: 0,
      explanation:
        'Azure Monitor provides observability through metrics, logs, alerts, dashboards, workbooks, and integrations.'
    },
    {
      id: 'az-51',
      type: 'mcq',
      title: 'Log Analytics',
      prompt: 'What is a Log Analytics workspace commonly used for?',
      options: [
        'Collecting, querying, and analyzing log data using Kusto Query Language',
        'Hosting virtual machines',
        'Creating storage account names',
        'Replacing network security groups'
      ],
      correctIndex: 0,
      explanation:
        'A Log Analytics workspace stores log data and enables querying and analysis, commonly using Kusto Query Language.'
    },
    {
      id: 'az-52',
      type: 'mcq',
      title: 'Application Insights',
      prompt: 'Which Azure service is commonly used to monitor application performance, failures, dependencies, and user behavior?',
      options: ['Application Insights', 'Azure Policy', 'Azure Storage Explorer only', 'Azure Data Box'],
      correctIndex: 0,
      explanation:
        'Application Insights is part of Azure Monitor and provides application performance monitoring for web apps, APIs, and services.'
    },
    {
      id: 'az-53',
      type: 'mcq',
      title: 'Alerts',
      prompt: 'A team wants to notify on-call engineers when CPU usage on a VM exceeds a threshold for 10 minutes. What should be configured?',
      options: ['Azure Monitor alert rule and action group', 'Azure Resource Lock only', 'Azure DNS zone', 'Storage lifecycle policy'],
      correctIndex: 0,
      explanation:
        'Azure Monitor alerts evaluate metrics or logs and can notify teams through action groups.'
    },
    {
      id: 'az-54',
      type: 'mcq',
      title: 'Network Watcher',
      prompt: 'Which Azure service helps diagnose network connectivity, packet flow, and network performance issues?',
      options: ['Azure Network Watcher', 'Azure Key Vault', 'Azure Cost Management', 'Azure Data Factory'],
      correctIndex: 0,
      explanation:
        'Azure Network Watcher provides tools for monitoring and troubleshooting Azure network connectivity and traffic flow.'
    },
    {
      id: 'az-55',
      type: 'mcq',
      title: 'Azure Backup',
      prompt: 'Which Azure service is used to back up Azure VMs, files, and supported workloads?',
      options: ['Azure Backup', 'Azure Firewall', 'Azure DNS', 'Azure App Configuration'],
      correctIndex: 0,
      explanation:
        'Azure Backup provides centralized backup and recovery for Azure and supported hybrid workloads.'
    },
    {
      id: 'az-56',
      type: 'mcq',
      title: 'Site Recovery',
      prompt: 'Which Azure service is used for disaster recovery replication and failover of workloads?',
      options: ['Azure Site Recovery', 'Azure Policy', 'Azure Storage Queue', 'Azure Cost Management'],
      correctIndex: 0,
      explanation:
        'Azure Site Recovery helps replicate workloads and orchestrate failover and failback for disaster recovery.'
    },
    {
      id: 'az-57',
      type: 'mcq',
      title: 'Azure Migrate',
      prompt: 'Which Azure service provides a centralized hub to discover, assess, and migrate on-premises servers, apps, and data?',
      options: ['Azure Migrate', 'Azure Bastion', 'Azure Load Balancer', 'Azure Advisor only'],
      correctIndex: 0,
      explanation:
        'Azure Migrate helps organizations discover, assess, and migrate workloads from on-premises or other environments to Azure.'
    },
    {
      id: 'az-58',
      type: 'mcq',
      title: 'Cost Management',
      prompt: 'Which Azure tool helps analyze cloud spending, budgets, and cost optimization opportunities?',
      options: ['Microsoft Cost Management', 'Azure DNS', 'Azure Functions', 'Azure Table Storage'],
      correctIndex: 0,
      explanation:
        'Microsoft Cost Management helps track, analyze, allocate, and optimize Azure cloud spending.'
    },
    {
      id: 'az-59',
      type: 'mcq',
      title: 'Azure Advisor',
      prompt: 'What is Azure Advisor used for?',
      options: [
        'Providing recommendations for cost, security, reliability, operational excellence, and performance',
        'Replacing all monitoring data',
        'Creating only virtual networks',
        'Writing application source code'
      ],
      correctIndex: 0,
      explanation:
        'Azure Advisor analyzes resource configuration and usage to provide recommendations across operational and architecture categories.'
    },
    {
      id: 'az-60',
      type: 'mcq',
      title: 'Architecture Judgment',
      prompt: 'What makes an Azure administration or architecture recommendation credible in a professional design review?',
      options: [
        'Explaining trade-offs across security, reliability, performance, cost, operations, compliance, and business constraints',
        'Choosing the most expensive Azure service every time',
        'Copying another company’s architecture exactly',
        'Avoiding all discussion of risks and constraints'
      ],
      correctIndex: 0,
      explanation:
        'Strong Azure recommendations are context-aware and balance security, reliability, performance, cost, governance, operations, and business requirements.'
    }
  ]
};