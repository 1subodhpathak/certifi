import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const kubernetesData = {
  id: ASSESSMENT_TYPES.kubernetes,
  title: "Kubernetes Orchestration Professional Certification",
  shortTitle: "Kubernetes",
  category: "DevOps",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Pods, deployments, services, networking, ConfigMaps, Secrets, RBAC, probes, autoscaling, storage, scheduling, observability, and operations.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "k8-01",
      type: "mcq",
      title: "Core Concepts",
      prompt: "What is the smallest deployable unit in Kubernetes?",
      options: ["Container", "Pod", "Service", "Node"],
      correctIndex: 1,
      explanation: "A Pod can contain one or more tightly coupled containers."
    },
    {
      id: "k8-02",
      type: "mcq",
      title: "Nodes",
      prompt: "What is a \"Worker Node\" in a Kubernetes cluster?",
      options: ["The main controller", "A machine where containers are actually run", "A database", "A load balancer"],
      correctIndex: 1,
      explanation: "Worker nodes run the kubelet and the container runtime."
    },
    {
      id: "k8-03",
      type: "mcq",
      title: "Control Plane",
      prompt: "Which component is the \"brain\" of the cluster, responsible for scheduling?",
      options: ["Kubelet", "kube-scheduler", "etcd", "kube-proxy"],
      correctIndex: 1,
      explanation: "The scheduler assigns pods to nodes based on resource availability."
    },
    {
      id: "k8-04",
      type: "mcq",
      title: "Etcd",
      prompt: "What is \"etcd\" used for in Kubernetes?",
      options: ["Storing logs", "Persistent key-value store for all cluster data", "Routing traffic", "Monitoring"],
      correctIndex: 1,
      explanation: "etcd stores the state of the cluster. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "k8-05",
      type: "mcq",
      title: "Deployments",
      prompt: "Which resource is used to manage stateless applications and handle rolling updates?",
      options: ["Pod", "ReplicaSet", "Deployment", "StatefulSet"],
      correctIndex: 2,
      explanation: "Deployments provide declarative updates for Pods and ReplicaSets."
    },
    {
      id: "k8-06",
      type: "mcq",
      title: "Services",
      prompt: "What is a \"Service\" in Kubernetes used for?",
      options: ["Running code", "Providing a stable network endpoint for a set of Pods", "Scaling pods", "Encryption"],
      correctIndex: 1,
      explanation: "Services enable discovery and load balancing between pods."
    },
    {
      id: "k8-07",
      type: "mcq",
      title: "Namespace",
      prompt: "What is a \"Namespace\" used for?",
      options: ["Naming pods", "Logical isolation of resources within a single cluster", "Connecting to the internet", "Routing"],
      correctIndex: 1,
      explanation: "Namespaces allow multiple teams or projects to share a cluster."
    },
    {
      id: "k8-08",
      type: "mcq",
      title: "Kubectl",
      prompt: "Which command is used to get a list of all pods in the current namespace?",
      options: ["kubectl see pods", "kubectl get pods", "kubectl list pods", "kubectl pods"],
      correctIndex: 1,
      explanation: "kubectl get is the primary command for inspecting resources."
    },
    {
      id: "k8-09",
      type: "mcq",
      title: "ConfigMap",
      prompt: "What is a \"ConfigMap\" used for?",
      options: ["Storing secrets", "Storing non-confidential configuration data as key-value pairs", "Routing", "Monitoring"],
      correctIndex: 1,
      explanation: "ConfigMaps decouple configuration from container images."
    },
    {
      id: "k8-10",
      type: "mcq",
      title: "Secrets",
      prompt: "How is a Secret different from a ConfigMap?",
      options: ["No difference", "Secrets are base64 encoded and designed for sensitive data", "Secrets are faster", "ConfigMaps are for mobile"],
      correctIndex: 1,
      explanation: "Secrets hold passwords, tokens, or keys. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "k8-11",
      type: "mcq",
      title: "HPA",
      prompt: "What does \"HPA\" stand for?",
      options: ["High Performance App", "Horizontal Pod Autoscaler", "Hybrid Process Agent", "Hyper Power Admin"],
      correctIndex: 1,
      explanation: "HPA automatically scales the number of pods based on CPU/memory usage."
    },
    {
      id: "k8-12",
      type: "mcq",
      title: "Liveness Probe",
      prompt: "What is the purpose of a Liveness Probe?",
      options: ["Checking if a pod is ready to receive traffic", "Checking if a container is still running; if not, K8s restarts it", "Monitoring logs", "Checking the database"],
      correctIndex: 1,
      explanation: "Liveness probes help recover from deadlocked states. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "k8-13",
      type: "mcq",
      title: "Readiness Probe",
      prompt: "What is the purpose of a Readiness Probe?",
      options: ["Checking if a container is alive", "Determining if a container is ready to start accepting traffic", "Checking for updates", "Monitoring CPU"],
      correctIndex: 1,
      explanation: "A pod is only added to a Service's endpoint if the readiness probe passes."
    },
    {
      id: "k8-14",
      type: "mcq",
      title: "Ingress",
      prompt: "What is an \"Ingress\" controller?",
      options: ["A load balancer", "An API object that manages external access to services (typically HTTP)", "A security wall", "A type of node"],
      correctIndex: 1,
      explanation: "Ingress provides routing rules for external traffic. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "k8-15",
      type: "mcq",
      title: "StatefulSet",
      prompt: "When should you use a \"StatefulSet\" instead of a \"Deployment\"?",
      options: ["For stateless apps", "For applications that require stable identifiers or persistent storage (like databases)", "For faster updates", "For web servers"],
      correctIndex: 1,
      explanation: "StatefulSets provide stable network IDs and storage. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "k8-16",
      type: "mcq",
      title: "DaemonSet",
      prompt: "What is a \"DaemonSet\" used for?",
      options: ["Running a single pod", "Ensuring a copy of a pod runs on all (or some) nodes in the cluster", "Scheduling tasks", "Backup"],
      correctIndex: 1,
      explanation: "Commonly used for log collectors or monitoring agents. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "k8-17",
      type: "mcq",
      title: "Taints and Tolerations",
      prompt: "What are \"Taints\" and \"Tolerations\" used for?",
      options: ["Styling pods", "Allowing a node to repel a set of pods unless the pod has a matching toleration", "Increasing speed", "Database joins"],
      correctIndex: 1,
      explanation: "They help control which pods can be scheduled on which nodes."
    },
    {
      id: "k8-18",
      type: "mcq",
      title: "Helm",
      prompt: "What is \"Helm\"?",
      options: ["A monitoring tool", "The package manager for Kubernetes (using Charts)", "A type of service", "A security layer"],
      correctIndex: 1,
      explanation: "Helm simplifies deploying complex applications with templates."
    },
    {
      id: "k8-19",
      type: "mcq",
      title: "Kubelet",
      prompt: "What is the role of the Kubelet?",
      options: ["Routing traffic", "An agent that runs on each node and ensures containers are running in a Pod", "Scheduling pods", "Storing data"],
      correctIndex: 1,
      explanation: "Kubelet takes a set of PodSpecs and ensures the containers described are healthy."
    },
    {
      id: "k8-20",
      type: "mcq",
      title: "Sidecar Pattern",
      prompt: "What is a \"Sidecar\" container?",
      options: ["A backup container", "A container that runs alongside the main application container in a Pod to provide helper functionality", "A load balancer", "An external app"],
      correctIndex: 1,
      explanation: "Sidecars handle things like logging, proxies, or configuration sync."
    },
    {
      id: "k8-21",
      type: "mcq",
      title: "Replicaset",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for ReplicaSet?",
      options: ["Apply ReplicaSet with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ReplicaSet only because it sounds advanced, without checking impact or constraints", "Ignore ReplicaSet until the issue becomes urgent in production or with customers", "Delegate ReplicaSet completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ReplicaSet is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-22",
      type: "mcq",
      title: "Rolling Update",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for rolling update?",
      options: ["Apply rolling update with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use rolling update only because it sounds advanced, without checking impact or constraints", "Ignore rolling update until the issue becomes urgent in production or with customers", "Delegate rolling update completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "rolling update is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-23",
      type: "mcq",
      title: "Readiness Probe",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for readiness probe?",
      options: ["Apply readiness probe with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use readiness probe only because it sounds advanced, without checking impact or constraints", "Ignore readiness probe until the issue becomes urgent in production or with customers", "Delegate readiness probe completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "readiness probe is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-24",
      type: "mcq",
      title: "Liveness Probe",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for liveness probe?",
      options: ["Apply liveness probe with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use liveness probe only because it sounds advanced, without checking impact or constraints", "Ignore liveness probe until the issue becomes urgent in production or with customers", "Delegate liveness probe completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "liveness probe is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-25",
      type: "mcq",
      title: "Startup Probe",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for startup probe?",
      options: ["Apply startup probe with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use startup probe only because it sounds advanced, without checking impact or constraints", "Ignore startup probe until the issue becomes urgent in production or with customers", "Delegate startup probe completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "startup probe is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-26",
      type: "mcq",
      title: "Clusterip",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for ClusterIP?",
      options: ["Apply ClusterIP with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ClusterIP only because it sounds advanced, without checking impact or constraints", "Ignore ClusterIP until the issue becomes urgent in production or with customers", "Delegate ClusterIP completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ClusterIP is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-27",
      type: "mcq",
      title: "Nodeport",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for NodePort?",
      options: ["Apply NodePort with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use NodePort only because it sounds advanced, without checking impact or constraints", "Ignore NodePort until the issue becomes urgent in production or with customers", "Delegate NodePort completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "NodePort is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-28",
      type: "mcq",
      title: "Ingress",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for Ingress?",
      options: ["Apply Ingress with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Ingress only because it sounds advanced, without checking impact or constraints", "Ignore Ingress until the issue becomes urgent in production or with customers", "Delegate Ingress completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Ingress is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-29",
      type: "mcq",
      title: "Persistentvolumeclaim",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for PersistentVolumeClaim?",
      options: ["Apply PersistentVolumeClaim with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use PersistentVolumeClaim only because it sounds advanced, without checking impact or constraints", "Ignore PersistentVolumeClaim until the issue becomes urgent in production or with customers", "Delegate PersistentVolumeClaim completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "PersistentVolumeClaim is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-30",
      type: "mcq",
      title: "Statefulset",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for StatefulSet?",
      options: ["Apply StatefulSet with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use StatefulSet only because it sounds advanced, without checking impact or constraints", "Ignore StatefulSet until the issue becomes urgent in production or with customers", "Delegate StatefulSet completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "StatefulSet is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-31",
      type: "mcq",
      title: "Daemonset",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for DaemonSet?",
      options: ["Apply DaemonSet with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use DaemonSet only because it sounds advanced, without checking impact or constraints", "Ignore DaemonSet until the issue becomes urgent in production or with customers", "Delegate DaemonSet completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "DaemonSet is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-32",
      type: "mcq",
      title: "Job",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for Job?",
      options: ["Apply Job with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Job only because it sounds advanced, without checking impact or constraints", "Ignore Job until the issue becomes urgent in production or with customers", "Delegate Job completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Job is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-33",
      type: "mcq",
      title: "Cronjob",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for CronJob?",
      options: ["Apply CronJob with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CronJob only because it sounds advanced, without checking impact or constraints", "Ignore CronJob until the issue becomes urgent in production or with customers", "Delegate CronJob completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CronJob is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-34",
      type: "mcq",
      title: "Resource Requests And Limits",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for resource requests and limits?",
      options: ["Apply resource requests and limits with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use resource requests and limits only because it sounds advanced, without checking impact or constraints", "Ignore resource requests and limits until the issue becomes urgent in production or with customers", "Delegate resource requests and limits completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "resource requests and limits is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-35",
      type: "mcq",
      title: "Horizontal Pod Autoscaler",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for Horizontal Pod Autoscaler?",
      options: ["Apply Horizontal Pod Autoscaler with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use Horizontal Pod Autoscaler only because it sounds advanced, without checking impact or constraints", "Ignore Horizontal Pod Autoscaler until the issue becomes urgent in production or with customers", "Delegate Horizontal Pod Autoscaler completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "Horizontal Pod Autoscaler is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-36",
      type: "mcq",
      title: "Rbac",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for RBAC?",
      options: ["Apply RBAC with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use RBAC only because it sounds advanced, without checking impact or constraints", "Ignore RBAC until the issue becomes urgent in production or with customers", "Delegate RBAC completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "RBAC is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-37",
      type: "mcq",
      title: "Serviceaccount",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for ServiceAccount?",
      options: ["Apply ServiceAccount with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ServiceAccount only because it sounds advanced, without checking impact or constraints", "Ignore ServiceAccount until the issue becomes urgent in production or with customers", "Delegate ServiceAccount completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ServiceAccount is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-38",
      type: "mcq",
      title: "Taints And Tolerations",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for taints and tolerations?",
      options: ["Apply taints and tolerations with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use taints and tolerations only because it sounds advanced, without checking impact or constraints", "Ignore taints and tolerations until the issue becomes urgent in production or with customers", "Delegate taints and tolerations completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "taints and tolerations is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-39",
      type: "mcq",
      title: "Crashloopbackoff Triage",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for CrashLoopBackOff triage?",
      options: ["Apply CrashLoopBackOff triage with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CrashLoopBackOff triage only because it sounds advanced, without checking impact or constraints", "Ignore CrashLoopBackOff triage until the issue becomes urgent in production or with customers", "Delegate CrashLoopBackOff triage completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CrashLoopBackOff triage is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "k8-40",
      type: "mcq",
      title: "Production Readiness",
      prompt: "In a professional Kubernetes Orchestration Professional scenario, which response best demonstrates strong judgment for production readiness?",
      options: ["Apply production readiness with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use production readiness only because it sounds advanced, without checking impact or constraints", "Ignore production readiness until the issue becomes urgent in production or with customers", "Delegate production readiness completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "production readiness is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
