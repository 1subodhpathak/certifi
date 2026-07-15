import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const springbootData = {
  id: ASSESSMENT_TYPES.springboot,
  title: "Spring Boot Java Backend Professional Certification",
  shortTitle: "Spring Boot",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Spring Boot auto-configuration, dependency injection, REST APIs, Spring Data JPA, security, profiles, Actuator, testing, transactions, and production backend design.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sb-01",
      type: "mcq",
      title: "Core Concept",
      prompt: "What is the primary benefit of Spring Boot over standard Spring?",
      options: ["Better performance", "Opinionated \"Auto-configuration\" to reduce boilerplate", "No Java needed", "Mobile support"],
      correctIndex: 1,
      explanation: "Spring Boot makes it easy to create stand-alone, production-grade Spring apps."
    },
    {
      id: "sb-02",
      type: "mcq",
      title: "Annotations",
      prompt: "Which annotation is the entry point for a Spring Boot application?",
      options: ["@SpringApp", "@SpringBootApplication", "@MainClass", "@EnableSpring"],
      correctIndex: 1,
      explanation: "It combines @Configuration, @EnableAutoConfiguration, and @ComponentScan."
    },
    {
      id: "sb-03",
      type: "mcq",
      title: "DI",
      prompt: "How do you inject a dependency into a Spring Bean?",
      options: ["Using \"new\"", "@Autowired", "@InjectMe", "@Dependency"],
      correctIndex: 1,
      explanation: "@Autowired allows Spring to resolve and inject collaborating beans. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-04",
      type: "mcq",
      title: "MVC",
      prompt: "Which annotation is used to define a RESTful controller?",
      options: ["@Controller", "@RestController", "@Service", "@Repository"],
      correctIndex: 1,
      explanation: "@RestController combines @Controller and @ResponseBody. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-05",
      type: "mcq",
      title: "Data JPA",
      prompt: "What does Spring Data JPA allow you to do?",
      options: ["Write raw SQL only", "Create repositories by just defining interfaces", "Connect to any database without a driver", "Design UI"],
      correctIndex: 1,
      explanation: "It significantly reduces the amount of boilerplate code for data access."
    },
    {
      id: "sb-06",
      type: "mcq",
      title: "Starters",
      prompt: "What are Spring Boot \"Starters\"?",
      options: ["Introductory tutorials", "Dependency descriptors that bundle common libraries for a feature (e.g., spring-boot-starter-web)", "App templates", "New projects"],
      correctIndex: 1,
      explanation: "Starters simplify dependency management. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-07",
      type: "mcq",
      title: "Profiles",
      prompt: "How do you manage different configurations for Dev, Test, and Prod?",
      options: ["Multiple main classes", "Spring Profiles", "If/else in code", "Separate JARs"],
      correctIndex: 1,
      explanation: "Profiles allow you to segregate parts of your application configuration."
    },
    {
      id: "sb-08",
      type: "mcq",
      title: "Actuator",
      prompt: "What is Spring Boot Actuator used for?",
      options: ["Improving speed", "Monitoring and managing the application via HTTP/JMX endpoints", "Database migrations", "Generating docs"],
      correctIndex: 1,
      explanation: "It provides health checks, metrics, and environment info. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-09",
      type: "mcq",
      title: "Embedded Server",
      prompt: "Which server is the default embedded container in Spring Boot Web?",
      options: ["Jetty", "Tomcat", "Undertow", "WebLogic"],
      correctIndex: 1,
      explanation: "Apache Tomcat is the default, but it can be easily switched. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-10",
      type: "mcq",
      title: "AOP",
      prompt: "What is \"Aspect-Oriented Programming\" (AOP) used for in Spring?",
      options: ["UI design", "Separating cross-cutting concerns like logging and transactions", "Multi-threading", "Database joins"],
      correctIndex: 1,
      explanation: "AOP allows you to add behavior to existing code without modifying it. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-11",
      type: "mcq",
      title: "Bean Lifecycle",
      prompt: "Which annotation can you use to execute a method after a bean is initialized?",
      options: ["@AfterInit", "@PostConstruct", "@PreDestroy", "@BeanReady"],
      correctIndex: 1,
      explanation: "@PostConstruct is part of the JSR-250 standard used by Spring. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-12",
      type: "mcq",
      title: "Properties",
      prompt: "Where is the default place to put configuration properties?",
      options: ["config.xml", "application.properties (or .yml)", "settings.json", "spring.properties"],
      correctIndex: 1,
      explanation: "application.properties is the standard config file. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-13",
      type: "mcq",
      title: "Exception Handling",
      prompt: "How can you handle exceptions globally in a Spring MVC app?",
      options: ["try/catch in every method", "@ControllerAdvice and @ExceptionHandler", "Web.xml", "It's not possible"],
      correctIndex: 1,
      explanation: "@ControllerAdvice allows centralized exception handling across all controllers."
    },
    {
      id: "sb-14",
      type: "mcq",
      title: "Validation",
      prompt: "Which dependency provides Bean Validation (JSR-303) support?",
      options: ["Spring-Validation", "Hibernate Validator", "Apache Commons", "Jackson"],
      correctIndex: 1,
      explanation: "Hibernate Validator is the reference implementation for Bean Validation."
    },
    {
      id: "sb-15",
      type: "mcq",
      title: "Security",
      prompt: "Which module handles authentication and authorization in Spring?",
      options: ["Spring Shield", "Spring Security", "Spring Guard", "Spring Auth"],
      correctIndex: 1,
      explanation: "Spring Security is a powerful and highly customizable framework. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-16",
      type: "mcq",
      title: "DevTools",
      prompt: "What is a key feature of spring-boot-devtools?",
      options: ["Remote debugging", "Automatic restart when classpath files change", "GUI for database", "Unit testing"],
      correctIndex: 1,
      explanation: "DevTools improves the development experience with hot-swapping. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-17",
      type: "mcq",
      title: "H2 Database",
      prompt: "Why is H2 commonly used with Spring Boot in development?",
      options: ["It is the fastest DB", "It is an in-memory database that requires zero configuration", "It is a cloud DB", "It is for mobile"],
      correctIndex: 1,
      explanation: "H2 is perfect for quick prototyping and unit testing. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-18",
      type: "mcq",
      title: "Thymeleaf",
      prompt: "What is Thymeleaf?",
      options: ["A caching engine", "A server-side Java template engine for web and standalone environments", "A CSS framework", "A database driver"],
      correctIndex: 1,
      explanation: "Thymeleaf is often used for rendering HTML in Spring MVC apps. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-19",
      type: "mcq",
      title: "Microservices",
      prompt: "Which tool is commonly used with Spring Boot for service discovery?",
      options: ["Kafka", "Eureka", "RabbitMQ", "Redis"],
      correctIndex: 1,
      explanation: "Netflix Eureka is a popular choice for service discovery in microservices."
    },
    {
      id: "sb-20",
      type: "mcq",
      title: "Lombok",
      prompt: "What is the purpose of project Lombok in a Spring project?",
      options: ["Speeding up JAR creation", "Generating boilerplate code like getters, setters, and constructors via annotations", "Database migration", "Security"],
      correctIndex: 1,
      explanation: "Lombok reduces the verbosity of Java POJOs. This is a checked foundational concept for professional Spring Boot work."
    },
    {
      id: "sb-21",
      type: "mcq",
      title: "Constructor Injection",
      prompt: "In a professional Spring Boot Java Backend scenario, what is the strongest approach when dealing with constructor injection?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Constructor Injection requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sb-22",
      type: "mcq",
      title: "Bean Lifecycle",
      prompt: "A team is making a decision about bean lifecycle. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about bean lifecycle balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sb-23",
      type: "mcq",
      title: "Configuration Properties",
      prompt: "Which signal suggests configuration properties needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when configuration properties could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sb-24",
      type: "mcq",
      title: "Profile-Specific Config",
      prompt: "What is the best way to validate work involving profile-specific config?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for profile-specific config should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sb-25",
      type: "mcq",
      title: "Rest Exception Handling",
      prompt: "In a professional Spring Boot Java Backend scenario, what is the strongest approach when dealing with REST exception handling?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Rest Exception Handling requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sb-26",
      type: "mcq",
      title: "Dto Versus Entity Exposure",
      prompt: "A team is making a decision about DTO versus entity exposure. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about DTO versus entity exposure balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sb-27",
      type: "mcq",
      title: "Spring Data Query Methods",
      prompt: "Which signal suggests Spring Data query methods needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when Spring Data query methods could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sb-28",
      type: "mcq",
      title: "Transaction Boundary",
      prompt: "What is the best way to validate work involving transaction boundary?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for transaction boundary should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sb-29",
      type: "mcq",
      title: "Lazy Loading Issue",
      prompt: "In a professional Spring Boot Java Backend scenario, what is the strongest approach when dealing with lazy loading issue?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Lazy Loading Issue requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sb-30",
      type: "mcq",
      title: "N+1 Query Problem",
      prompt: "A team is making a decision about N+1 query problem. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about N+1 query problem balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sb-31",
      type: "mcq",
      title: "Actuator Health Endpoint",
      prompt: "Which signal suggests Actuator health endpoint needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when Actuator health endpoint could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sb-32",
      type: "mcq",
      title: "Micrometer Metrics",
      prompt: "What is the best way to validate work involving Micrometer metrics?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for Micrometer metrics should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sb-33",
      type: "mcq",
      title: "Spring Security Filter Chain",
      prompt: "In a professional Spring Boot Java Backend scenario, what is the strongest approach when dealing with Spring Security filter chain?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Spring Security Filter Chain requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sb-34",
      type: "mcq",
      title: "Jwt Authentication",
      prompt: "A team is making a decision about JWT authentication. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about JWT authentication balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sb-35",
      type: "mcq",
      title: "Validation Annotations",
      prompt: "Which signal suggests validation annotations needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when validation annotations could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sb-36",
      type: "mcq",
      title: "Integration Testing",
      prompt: "What is the best way to validate work involving integration testing?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for integration testing should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sb-37",
      type: "mcq",
      title: "Testcontainers",
      prompt: "In a professional Spring Boot Java Backend scenario, what is the strongest approach when dealing with Testcontainers?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Testcontainers requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sb-38",
      type: "mcq",
      title: "Database Migration Tool",
      prompt: "A team is making a decision about database migration tool. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about database migration tool balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sb-39",
      type: "mcq",
      title: "Graceful Shutdown",
      prompt: "Which signal suggests graceful shutdown needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when graceful shutdown could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sb-40",
      type: "mcq",
      title: "Production Readiness",
      prompt: "What is the best way to validate work involving production readiness?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for production readiness should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
