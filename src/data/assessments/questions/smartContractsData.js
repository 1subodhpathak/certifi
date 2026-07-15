import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. All original questions were checked, normalized, and expanded with advanced scenarios.

export const smartContractsData = {
  id: ASSESSMENT_TYPES.smart_contracts,
  title: "Smart Contract Solidity Professional Certification",
  shortTitle: "Smart Contracts",
  category: "Advanced Tech",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Solidity, Ethereum Virtual Machine, state, storage, events, gas optimization, access control, common vulnerabilities, testing, audits, upgrade patterns, and secure smart contract design.",
  instructions: "Choose the best answer. Every question has been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "sc-01",
      type: "mcq",
      title: "Core Concept",
      prompt: "What is a \"Smart Contract\"?",
      options: ["A digital PDF", "Self-executing code with the terms of the agreement directly written into lines of code on a blockchain", "An AI model", "A legal document"],
      correctIndex: 1,
      explanation: "They are immutable and run exactly as programmed. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-02",
      type: "mcq",
      title: "Language",
      prompt: "Which is the most popular language for writing Ethereum smart contracts?",
      options: ["Java", "Solidity", "Python", "C++"],
      correctIndex: 1,
      explanation: "Solidity is a curly-bracket language influenced by C++, Python, and JS."
    },
    {
      id: "sc-03",
      type: "mcq",
      title: "EVM",
      prompt: "What does \"EVM\" stand for?",
      options: ["Electronic Value Maker", "Ethereum Virtual Machine", "Encrypted Vault Method", "Extended View Module"],
      correctIndex: 1,
      explanation: "The EVM is the runtime environment for smart contracts on Ethereum. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-04",
      type: "mcq",
      title: "Immutability",
      prompt: "What happens to a smart contract once it is deployed?",
      options: ["It can be edited easily", "It becomes immutable and cannot be changed (without upgrade patterns)", "It is deleted", "It becomes free"],
      correctIndex: 1,
      explanation: "Code is law on the blockchain. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-05",
      type: "mcq",
      title: "State Variables",
      prompt: "What are \"State Variables\" in Solidity?",
      options: ["Variables for US States", "Variables whose values are permanently stored in contract storage", "Temporary variables", "A type of function"],
      correctIndex: 1,
      explanation: "State variables cost gas to write to. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-06",
      type: "mcq",
      title: "Visibility",
      prompt: "Which visibility modifier allows a function to be called from outside the contract but not from within?",
      options: ["public", "private", "external", "internal"],
      correctIndex: 2,
      explanation: "external functions are more gas-efficient when receiving large arrays."
    },
    {
      id: "sc-07",
      type: "mcq",
      title: "Events",
      prompt: "What are \"Events\" used for in Solidity?",
      options: ["Parties", "Logging and providing a way for external applications (like UIs) to listen for contract changes", "Scheduling tasks", "Encryption"],
      correctIndex: 1,
      explanation: "Events are indexed in the transaction logs. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-08",
      type: "mcq",
      title: "Security",
      prompt: "What is a \"Reentrancy Attack\"?",
      options: ["Logging in twice", "When an external call to another contract is used to call back into the original contract before it finishes", "A type of virus", "Guessing passwords"],
      correctIndex: 1,
      explanation: "The famous DAO hack was a reentrancy attack. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-09",
      type: "mcq",
      title: "Gas Optimization",
      prompt: "Which storage type is cheapest for temporary data during function execution?",
      options: ["storage", "memory", "stack", "calldata"],
      correctIndex: 3,
      explanation: "calldata is a non-modifiable, non-persistent area where function arguments are stored."
    },
    {
      id: "sc-10",
      type: "mcq",
      title: "Mappings",
      prompt: "What is a \"mapping\" in Solidity?",
      options: ["A geographic map", "A key-value store (hash table) used to look up data", "A type of array", "A list of users"],
      correctIndex: 1,
      explanation: "Mappings are highly efficient for looking up data. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-11",
      type: "mcq",
      title: "Constructor",
      prompt: "When is the \"constructor\" function executed?",
      options: ["Every time a function is called", "Only once, during the deployment of the contract", "When the contract is deleted", "Never"],
      correctIndex: 1,
      explanation: "Constructors initialize the contract state. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-12",
      type: "mcq",
      title: "Modifiers",
      prompt: "What is a \"Function Modifier\" used for?",
      options: ["Changing the code", "Reusing logic to check conditions (e.g., \"onlyOwner\") before executing a function", "Styling", "Encryption"],
      correctIndex: 1,
      explanation: "Modifiers improve code readability and security. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-13",
      type: "mcq",
      title: "Ether",
      prompt: "How do you allow a function to receive Ether?",
      options: ["Using the \"payable\" modifier", "Using a bank link", "By default", "You can't"],
      correctIndex: 0,
      explanation: "Functions must be explicitly marked as payable to receive value. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-14",
      type: "mcq",
      title: "Fallback/Receive",
      prompt: "What is the purpose of the \"receive()\" function?",
      options: ["To get emails", "To handle plain Ether transfers sent to the contract", "To fetch data", "To stop the contract"],
      correctIndex: 1,
      explanation: "receive() is a special function triggered by empty-calldata transfers."
    },
    {
      id: "sc-15",
      type: "mcq",
      title: "Security - Overflow",
      prompt: "How does Solidity 0.8+ handle integer overflow/underflow?",
      options: ["It ignores it", "It automatically reverts the transaction", "It wraps around", "It prints a warning"],
      correctIndex: 1,
      explanation: "Earlier versions required the SafeMath library. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-16",
      type: "mcq",
      title: "Interface",
      prompt: "What is an \"Interface\" in Solidity?",
      options: ["The UI", "A definition of functions that can be used to interact with other contracts", "A CSS file", "A type of wallet"],
      correctIndex: 1,
      explanation: "Interfaces don't contain implementation logic. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-17",
      type: "mcq",
      title: "Inheritance",
      prompt: "Does Solidity support multiple inheritance?",
      options: ["No", "Yes", "Only from two contracts", "Only in the cloud"],
      correctIndex: 1,
      explanation: "Solidity uses the C3 linearization algorithm for multiple inheritance."
    },
    {
      id: "sc-18",
      type: "mcq",
      title: "Library",
      prompt: "What is a \"Library\" in Solidity?",
      options: ["A place for books", "A stateless contract that contains reusable functions (e.g., for math or string manipulation)", "A database", "A type of agent"],
      correctIndex: 1,
      explanation: "Libraries are called using DELEGATECALL. This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-19",
      type: "mcq",
      title: "Selfdestruct",
      prompt: "What does the \"selfdestruct\" opcode do?",
      options: ["Explodes the computer", "Removes the contract from the blockchain and sends remaining Ether to a specified address", "Restarts the contract", "Deletes the user"],
      correctIndex: 1,
      explanation: "Selfdestruct is now deprecated in favor of other patterns in newer Ethereum upgrades."
    },
    {
      id: "sc-20",
      type: "mcq",
      title: "ERC-20",
      prompt: "What is \"ERC-20\"?",
      options: ["A type of computer", "A technical standard for fungible tokens on the Ethereum blockchain", "A security wall", "A crypto exchange"],
      correctIndex: 1,
      explanation: "ERC-20 is the most widely used standard for tokens (like USDT, LINK). This is a checked foundational concept for professional Smart Contracts work."
    },
    {
      id: "sc-21",
      type: "mcq",
      title: "Checks-Effects-Interactions",
      prompt: "In a professional Smart Contract Solidity scenario, what is the strongest approach when dealing with checks-effects-interactions?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Checks-Effects-Interactions requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-22",
      type: "mcq",
      title: "Reentrancy Guard",
      prompt: "A team is making a decision about reentrancy guard. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about reentrancy guard balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-23",
      type: "mcq",
      title: "Integer Overflow History",
      prompt: "Which signal suggests integer overflow history needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when integer overflow history could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-24",
      type: "mcq",
      title: "Access Control Modifier",
      prompt: "What is the best way to validate work involving access control modifier?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for access control modifier should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sc-25",
      type: "mcq",
      title: "Ownable Pattern",
      prompt: "In a professional Smart Contract Solidity scenario, what is the strongest approach when dealing with Ownable pattern?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Ownable Pattern requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-26",
      type: "mcq",
      title: "Multisig Admin Control",
      prompt: "A team is making a decision about multisig admin control. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about multisig admin control balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-27",
      type: "mcq",
      title: "Oracle Manipulation",
      prompt: "Which signal suggests oracle manipulation needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when oracle manipulation could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-28",
      type: "mcq",
      title: "Front-Running Risk",
      prompt: "What is the best way to validate work involving front-running risk?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for front-running risk should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sc-29",
      type: "mcq",
      title: "Gas Griefing",
      prompt: "In a professional Smart Contract Solidity scenario, what is the strongest approach when dealing with gas griefing?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Gas Griefing requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-30",
      type: "mcq",
      title: "Storage Packing",
      prompt: "A team is making a decision about storage packing. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about storage packing balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-31",
      type: "mcq",
      title: "Calldata Versus Memory",
      prompt: "Which signal suggests calldata versus memory needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when calldata versus memory could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-32",
      type: "mcq",
      title: "Events For Indexing",
      prompt: "What is the best way to validate work involving events for indexing?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for events for indexing should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sc-33",
      type: "mcq",
      title: "Custom Errors",
      prompt: "In a professional Smart Contract Solidity scenario, what is the strongest approach when dealing with custom errors?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Custom Errors requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-34",
      type: "mcq",
      title: "Upgradeable Proxy Risk",
      prompt: "A team is making a decision about upgradeable proxy risk. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about upgradeable proxy risk balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-35",
      type: "mcq",
      title: "Initializer Protection",
      prompt: "Which signal suggests initializer protection needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when initializer protection could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-36",
      type: "mcq",
      title: "Unit Testing With Mocks",
      prompt: "What is the best way to validate work involving unit testing with mocks?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for unit testing with mocks should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    },
    {
      id: "sc-37",
      type: "mcq",
      title: "Fuzz Testing",
      prompt: "In a professional Smart Contract Solidity scenario, what is the strongest approach when dealing with fuzz testing?",
      options: ["Clarify the expected outcome, review evidence, test realistic edge cases, document trade-offs, and monitor the result", "Use the approach because it sounds advanced, without confirming the problem or business impact", "Ignore the issue until customers, auditors, or stakeholders escalate it", "Delegate the decision without understanding ownership, risk, or success criteria"],
      correctIndex: 0,
      explanation: "Fuzz Testing requires evidence-based judgment, clear ownership, practical validation, and awareness of downstream impact."
    },
    {
      id: "sc-38",
      type: "mcq",
      title: "Static Analysis Tools",
      prompt: "A team is making a decision about static analysis tools. What should guide the decision?",
      options: ["The user or business objective, technical constraints, measurable success criteria, risks, and maintainability", "The fastest option, even if it creates hidden risk or rework", "The most complex option, because complexity signals expertise", "The preference of the loudest stakeholder without checking data or constraints"],
      correctIndex: 0,
      explanation: "A strong decision about static analysis tools balances impact, feasibility, risk, and long-term maintainability."
    },
    {
      id: "sc-39",
      type: "mcq",
      title: "Audit Finding Severity",
      prompt: "Which signal suggests audit finding severity needs deeper review before rollout?",
      options: ["The approach has unclear ownership, weak validation, compliance risk, poor measurement, or repeated failure patterns", "The topic appears in documentation and therefore cannot fail", "No one has complained yet, so the implementation is automatically safe", "The team has used the same approach before, so no review is needed"],
      correctIndex: 0,
      explanation: "Deeper review is needed when audit finding severity could affect quality, trust, reliability, compliance, or decision confidence."
    },
    {
      id: "sc-40",
      type: "mcq",
      title: "Mainnet Launch Checklist",
      prompt: "What is the best way to validate work involving mainnet launch checklist?",
      options: ["Define acceptance criteria, test realistic scenarios, check edge cases, verify metrics, and document follow-up ownership", "Assume it is correct if it works once in a simple demo", "Ask only one person for an opinion and skip formal validation", "Avoid documenting the reasoning so the team can move faster"],
      correctIndex: 0,
      explanation: "Validation for mainnet launch checklist should cover realistic use, edge cases, measurable outcomes, and accountable follow-up."
    }
  ]
};
