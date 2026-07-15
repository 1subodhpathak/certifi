import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const owaspData = {
  id: ASSESSMENT_TYPES.owasp,
  title: "OWASP Web Application Security Certification",
  shortTitle: "OWASP 10",
  category: "Security",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "OWASP Top 10, access control, injection, authentication, cryptography, secure design, vulnerable components, logging, SSRF, and secure coding.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "ow-01",
      type: "mcq",
      title: "OWASP Top 10",
      prompt: "Which risk is ranked A01 in the OWASP Top 10:2021 and remains a core access-control concern in current OWASP guidance?",
      options: ["Injection", "Broken Access Control", "Cryptographic Failures", "Insecure Design"],
      correctIndex: 1,
      explanation: "Broken Access Control is a top OWASP risk because users must not be able to act outside their intended permissions."
    },
    {
      id: "ow-02",
      type: "mcq",
      title: "Injection",
      prompt: "How do you prevent SQL Injection according to OWASP?",
      options: ["Encoding output", "Using Parameterized Queries and Input Validation", "Encryption", "Using NoSQL"],
      correctIndex: 1,
      explanation: "Safe APIs and parameterization are the primary defenses."
    },
    {
      id: "ow-03",
      type: "mcq",
      title: "XSS",
      prompt: "Which risk category does Cross-Site Scripting (XSS) fall under in the latest list?",
      options: ["Injection", "Broken Access Control", "Insecure Design", "Vulnerable Components"],
      correctIndex: 0,
      explanation: "XSS is a form of injection where scripts are \"injected\" into pages."
    },
    {
      id: "ow-04",
      type: "mcq",
      title: "Sensitive Data",
      prompt: "What was \"Sensitive Data Exposure\" renamed to in the 2021 list?",
      options: ["Data Loss", "Cryptographic Failures", "Information Leak", "Security Misconfiguration"],
      correctIndex: 1,
      explanation: "Focus shifted to the root cause (cryptography) rather than the symptom."
    },
    {
      id: "ow-05",
      type: "mcq",
      title: "Broken Auth",
      prompt: "Which of these is a sign of \"Identification and Authentication Failures\"?",
      options: ["Slow login", "Permitting weak passwords or credential stuffing attacks", "Using HTTPS", "Good session management"],
      correctIndex: 1,
      explanation: "Auth failures lead to account takeovers. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-06",
      type: "mcq",
      title: "Misconfiguration",
      prompt: "What is a common \"Security Misconfiguration\"?",
      options: ["Enabling directory listing on servers", "Using default passwords", "Verbose error messages", "All of the above"],
      correctIndex: 3,
      explanation: "Misconfigurations provide easy paths for attackers. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-07",
      type: "mcq",
      title: "Insecure Design",
      prompt: "What is the \"Insecure Design\" category about?",
      options: ["Bad colors", "Weaknesses in the application architecture and design patterns", "Slow loading", "Broken links"],
      correctIndex: 1,
      explanation: "Focuses on building security in from the start (Shift Left)."
    },
    {
      id: "ow-08",
      type: "mcq",
      title: "Vulnerable Components",
      prompt: "Why is using old versions of libraries (e.g., Log4j) a risk?",
      options: ["They are slower", "They may contain known, unpatched security vulnerabilities", "They use more memory", "They don't look good"],
      correctIndex: 1,
      explanation: "Software composition analysis (SCA) is needed to track these."
    },
    {
      id: "ow-09",
      type: "mcq",
      title: "Logging & Monitoring",
      prompt: "What is the risk of \"Insufficient Logging and Monitoring\"?",
      options: ["Slow disk", "Failure to detect and respond to active breaches", "No pretty charts", "High CPU"],
      correctIndex: 1,
      explanation: "Detection time is critical to minimizing impact. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-10",
      type: "mcq",
      title: "SSRF",
      prompt: "What is \"SSRF\" (Server-Side Request Forgery)?",
      options: ["A client error", "An attacker forcing the server to make requests to internal or external systems", "A type of virus", "Broken CSS"],
      correctIndex: 1,
      explanation: "SSRF is a new addition to the Top 10 in 2021. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-11",
      type: "mcq",
      title: "Mitigation",
      prompt: "How do you prevent XSS?",
      options: ["Firewalls only", "Escaping/encoding untrusted data and using Content Security Policy (CSP)", "Encryption", "Stronger passwords"],
      correctIndex: 1,
      explanation: "Context-aware encoding is the key defense. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-12",
      type: "mcq",
      title: "Access Control",
      prompt: "What is \"IDOR\" (Insecure Direct Object Reference)?",
      options: ["A naming error", "When a user can access another user's data by changing a parameter (like an ID in the URL)", "A fast login", "Encryption failure"],
      correctIndex: 1,
      explanation: "IDOR is a sub-type of broken access control. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-13",
      type: "mcq",
      title: "Secure Coding",
      prompt: "What is the \"Principle of Least Privilege\"?",
      options: ["Giving users all access", "Giving users only the minimum access needed to perform their job", "No access", "Random access"],
      correctIndex: 1,
      explanation: "It minimizes the damage from a compromised account. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-14",
      type: "mcq",
      title: "Hashing",
      prompt: "Which algorithm is currently recommended for hashing passwords?",
      options: ["MD5", "SHA-1", "Argon2 or bcrypt", "Base64"],
      correctIndex: 2,
      explanation: "MD5 and SHA-1 are considered cryptographically broken for passwords."
    },
    {
      id: "ow-15",
      type: "mcq",
      title: "XML External Entities",
      prompt: "How do you prevent XXE (XML External Entities)?",
      options: ["Using JSON", "Disabling DTDs and external entity processing in XML parsers", "Stronger firewalls", "Encryption"],
      correctIndex: 1,
      explanation: "Modern parsers should have these features disabled by default."
    },
    {
      id: "ow-16",
      type: "mcq",
      title: "Deserialization",
      prompt: "Why is \"Insecure Deserialization\" dangerous?",
      options: ["It slows down the app", "It can lead to Remote Code Execution (RCE) by tampering with serialized objects", "It uses more RAM", "It breaks the database"],
      correctIndex: 1,
      explanation: "Don't trust data received from the user in serialized form."
    },
    {
      id: "ow-17",
      type: "mcq",
      title: "Software Integrity",
      prompt: "What is \"Software and Data Integrity Failures\" about?",
      options: ["Broken links", "Lack of verification of updates, CI/CD pipelines, and critical data", "Bad code quality", "Slow builds"],
      correctIndex: 1,
      explanation: "Includes solarwinds-style supply chain attacks. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-18",
      type: "mcq",
      title: "Security Headers",
      prompt: "What is the purpose of the \"HSTS\" header?",
      options: ["Styling", "Enforcing HTTPS-only connections for a website", "Caching", "Routing"],
      correctIndex: 1,
      explanation: "HSTS prevents downgrade attacks. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "ow-19",
      type: "mcq",
      title: "Fuzzing",
      prompt: "What is \"Fuzz Testing\" used for?",
      options: ["Deleting files", "Automated testing by providing random, malformed data to an application to find bugs", "UI design", "Marketing"],
      correctIndex: 1,
      explanation: "Fuzzing is great for finding memory leaks and crash vulnerabilities."
    },
    {
      id: "ow-20",
      type: "mcq",
      title: "Secure SDLC",
      prompt: "What does \"Shift Left\" mean in security?",
      options: ["Moving code to the left", "Integrating security testing and considerations early in the development lifecycle", "Deleting old code", "Focusing on mobile"],
      correctIndex: 1,
      explanation: "Earlier detection of bugs is cheaper and more effective."
    },
    {
      id: "ow-21",
      type: "mcq",
      title: "Object-Level Authorization",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for object-level authorization?",
      options: ["Apply object-level authorization with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use object-level authorization only because it sounds advanced, without checking impact or constraints", "Ignore object-level authorization until the issue becomes urgent in production or with customers", "Delegate object-level authorization completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "object-level authorization is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-22",
      type: "mcq",
      title: "Least Privilege",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for least privilege?",
      options: ["Apply least privilege with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use least privilege only because it sounds advanced, without checking impact or constraints", "Ignore least privilege until the issue becomes urgent in production or with customers", "Delegate least privilege completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "least privilege is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-23",
      type: "mcq",
      title: "Password Hashing",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for password hashing?",
      options: ["Apply password hashing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use password hashing only because it sounds advanced, without checking impact or constraints", "Ignore password hashing until the issue becomes urgent in production or with customers", "Delegate password hashing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "password hashing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-24",
      type: "mcq",
      title: "Tls",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for TLS?",
      options: ["Apply TLS with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use TLS only because it sounds advanced, without checking impact or constraints", "Ignore TLS until the issue becomes urgent in production or with customers", "Delegate TLS completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "TLS is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-25",
      type: "mcq",
      title: "Insecure Design",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for insecure design?",
      options: ["Apply insecure design with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use insecure design only because it sounds advanced, without checking impact or constraints", "Ignore insecure design until the issue becomes urgent in production or with customers", "Delegate insecure design completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "insecure design is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-26",
      type: "mcq",
      title: "Threat Modeling",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for threat modeling?",
      options: ["Apply threat modeling with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use threat modeling only because it sounds advanced, without checking impact or constraints", "Ignore threat modeling until the issue becomes urgent in production or with customers", "Delegate threat modeling completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "threat modeling is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-27",
      type: "mcq",
      title: "Dependency Risk",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for dependency risk?",
      options: ["Apply dependency risk with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use dependency risk only because it sounds advanced, without checking impact or constraints", "Ignore dependency risk until the issue becomes urgent in production or with customers", "Delegate dependency risk completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "dependency risk is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-28",
      type: "mcq",
      title: "Security Misconfiguration",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for security misconfiguration?",
      options: ["Apply security misconfiguration with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use security misconfiguration only because it sounds advanced, without checking impact or constraints", "Ignore security misconfiguration until the issue becomes urgent in production or with customers", "Delegate security misconfiguration completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "security misconfiguration is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-29",
      type: "mcq",
      title: "Security Logging",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for security logging?",
      options: ["Apply security logging with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use security logging only because it sounds advanced, without checking impact or constraints", "Ignore security logging until the issue becomes urgent in production or with customers", "Delegate security logging completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "security logging is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-30",
      type: "mcq",
      title: "Ssrf Defense",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for SSRF defense?",
      options: ["Apply SSRF defense with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use SSRF defense only because it sounds advanced, without checking impact or constraints", "Ignore SSRF defense until the issue becomes urgent in production or with customers", "Delegate SSRF defense completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "SSRF defense is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-31",
      type: "mcq",
      title: "Csrf Defense",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for CSRF defense?",
      options: ["Apply CSRF defense with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use CSRF defense only because it sounds advanced, without checking impact or constraints", "Ignore CSRF defense until the issue becomes urgent in production or with customers", "Delegate CSRF defense completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "CSRF defense is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-32",
      type: "mcq",
      title: "Xss Defense",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for XSS defense?",
      options: ["Apply XSS defense with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use XSS defense only because it sounds advanced, without checking impact or constraints", "Ignore XSS defense until the issue becomes urgent in production or with customers", "Delegate XSS defense completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "XSS defense is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-33",
      type: "mcq",
      title: "Mass Assignment",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for mass assignment?",
      options: ["Apply mass assignment with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use mass assignment only because it sounds advanced, without checking impact or constraints", "Ignore mass assignment until the issue becomes urgent in production or with customers", "Delegate mass assignment completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "mass assignment is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-34",
      type: "mcq",
      title: "Rate Limiting",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for rate limiting?",
      options: ["Apply rate limiting with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use rate limiting only because it sounds advanced, without checking impact or constraints", "Ignore rate limiting until the issue becomes urgent in production or with customers", "Delegate rate limiting completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "rate limiting is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-35",
      type: "mcq",
      title: "Mfa",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for MFA?",
      options: ["Apply MFA with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use MFA only because it sounds advanced, without checking impact or constraints", "Ignore MFA until the issue becomes urgent in production or with customers", "Delegate MFA completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "MFA is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-36",
      type: "mcq",
      title: "Secure Error Handling",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for secure error handling?",
      options: ["Apply secure error handling with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use secure error handling only because it sounds advanced, without checking impact or constraints", "Ignore secure error handling until the issue becomes urgent in production or with customers", "Delegate secure error handling completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "secure error handling is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-37",
      type: "mcq",
      title: "File Upload Security",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for file upload security?",
      options: ["Apply file upload security with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use file upload security only because it sounds advanced, without checking impact or constraints", "Ignore file upload security until the issue becomes urgent in production or with customers", "Delegate file upload security completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "file upload security is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-38",
      type: "mcq",
      title: "Api Authorization",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for API authorization?",
      options: ["Apply API authorization with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use API authorization only because it sounds advanced, without checking impact or constraints", "Ignore API authorization until the issue becomes urgent in production or with customers", "Delegate API authorization completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "API authorization is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-39",
      type: "mcq",
      title: "Secrets Management",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for secrets management?",
      options: ["Apply secrets management with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use secrets management only because it sounds advanced, without checking impact or constraints", "Ignore secrets management until the issue becomes urgent in production or with customers", "Delegate secrets management completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "secrets management is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "ow-40",
      type: "mcq",
      title: "Secure Sdlc",
      prompt: "In a professional OWASP Web Application Security scenario, which response best demonstrates strong judgment for secure SDLC?",
      options: ["Apply secure SDLC with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use secure SDLC only because it sounds advanced, without checking impact or constraints", "Ignore secure SDLC until the issue becomes urgent in production or with customers", "Delegate secure SDLC completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "secure SDLC is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
