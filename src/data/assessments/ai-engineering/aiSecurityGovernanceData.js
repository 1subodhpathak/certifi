import { ASSESSMENT_TYPES } from '../assessmentTypes';

// Level 15 of 15 - AI Security, Safety and Governance
// 20 questions - 30 minutes - 100 marks - pass at 70%.
// Marks are tiered 6x3 (easy) + 8x5 (medium) + 6x7 (hard). `pointsPerQuestion`
// is 5 so a flat scorer also totals 100; read `points` for the tiered score.
// Questions with a `diagram` field carry a Mermaid definition and a
// {{diagram}} placeholder in the prompt. Render the Mermaid and substitute.

export const aiSecurityGovernanceData = {
  id: ASSESSMENT_TYPES.aiSecurityGovernance,
  level: 15,
  title: "AI Security, Safety and Governance",
  shortTitle: "AI Security",
  category: "AI Engineering",
  durationMinutes: 30,
  pointsPerQuestion: 5,
  passingPercentage: 70,
  description: "The senior bar: direct and indirect prompt injection, the confused deputy problem, sandboxing model-generated code, egress control and semantic exfiltration, supply chain risk in tools and models, data governance and deletion, auditability, and incident response when the failing component is a model.",
  instructions: "20 questions, 30 minutes, 100 marks. Pass mark is 70. Several distractors are controls that work against a careless user and fail against a deliberate attacker. Distinguishing a mitigation from a boundary is the skill being tested. No negative marking.",
  questions: [
    {
      id: "aiSecurityGovernance-01",
      type: "mcq",
      title: "Why Injection Works",
      difficulty: "easy",
      points: 3,
      prompt: "Why is prompt injection possible at all?",
      options: [
        "Because system prompts are weighted lower than user messages, so a later instruction naturally overrides an earlier one in the same context.",
        "Because most applications fail to escape special characters in user input, allowing crafted text to terminate the prompt template early.",
        "Because models are trained to be helpful, and helpfulness makes them comply with instructions they encounter regardless of the source.",
        "Because instructions and data arrive as one token sequence with no structural distinction, so the model cannot reliably tell them apart.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. There is no privileged channel. Your instructions, the user's message and a scraped web page all arrive as tokens, and nothing in the architecture marks which ones carry authority. That is why injection is a structural property rather than a bug to be patched. Why not A: system prompts are generally weighted higher, and the problem persists anyway. Why not B: escaping helps against naive attacks and there is no syntax to escape in the first place. Why not C: helpfulness training makes exploitation easier and is not the mechanism."
    },
    {
      id: "aiSecurityGovernance-02",
      type: "mcq",
      title: "Indirect Injection",
      difficulty: "easy",
      points: 3,
      prompt: "What makes indirect prompt injection more dangerous than the direct kind?",
      options: [
        "The instruction arrives through content the system fetched itself, so no user needs to be malicious and the injected text is trusted by default.",
        "It cannot be detected by input filtering, since the malicious text arrives after the request has already passed through the application's checks.",
        "It targets the model's training data rather than its context, so the effect persists across sessions and cannot be removed by clearing the conversation.",
        "It requires no knowledge of the system prompt, so an attacker can craft an effective payload without any information about the target application.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. In direct injection the attacker must be the user. In indirect injection the payload sits in a document, a web page, an email or a code comment that your system retrieves on behalf of an innocent user, so the attack surface becomes everything your agent can read. Why not B: it is a real consequence and follows from where the content enters. Why not C: injection targets the context window, not the weights. Why not D: true and equally true of many direct attacks."
    },
    {
      id: "aiSecurityGovernance-03",
      type: "mcq",
      title: "Least Privilege for Tools",
      difficulty: "easy",
      points: 3,
      prompt: "How does least privilege apply to an agent's tools?",
      options: [
        "Each agent should hold only the tools its role requires, and each tool only the permissions its function needs on the systems it touches.",
        "Tools should be granted broadly during development and narrowed before launch, since restricting early slows iteration without improving the final posture.",
        "Every tool should require human approval before executing, so no privilege is exercised without a person confirming it is appropriate in context.",
        "Tools should be scoped by user rather than by agent, so an agent's capabilities always match exactly what the requesting user could do manually.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Least privilege operates at both levels: which tools an agent holds, and what each tool's credential can reach. An agent with a database tool whose connection can read every table has least privilege at neither level. Why not B: broad-then-narrow reliably ships with the broad version still in place. Why not C: approval is a control on top of privilege and does not reduce what is possible. Why not D: user-scoped credentials are an important part of the answer and are not the whole of it, since the agent should hold less than the user in most cases."
    },
    {
      id: "aiSecurityGovernance-04",
      type: "mcq",
      title: "Sandboxing Generated Code",
      difficulty: "easy",
      points: 3,
      prompt: "An agent generates and runs Python. What is the minimum acceptable execution boundary?",
      options: [
        "A restricted interpreter with dangerous modules removed and a static check rejecting imports the policy does not allow before anything executes.",
        "An isolated ephemeral environment per run, with no network egress, resource quotas, only the required inputs mounted, and teardown at the end.",
        "A separate process running as an unprivileged user on the same host, with limits on CPU time and memory to bound the damage a bad script can do.",
        "Human review of each generated script before execution, since a reviewer can judge intent in a way that no automated boundary is able to.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Model-generated code is untrusted code, so it needs a real isolation boundary. Ephemeral means no state carries between runs, no egress means an injected script cannot exfiltrate what it reads, and quotas stop a runaway loop taking the host down. Why not A: restricted interpreters and static import checks are repeatedly bypassed and do nothing about network access. Why not C: an unprivileged process is an improvement and still runs on your host with your network reachable. Why not D: review does not scale and is a complement rather than a boundary."
    },
    {
      id: "aiSecurityGovernance-05",
      type: "mcq",
      title: "Secrets and Prompts",
      difficulty: "easy",
      points: 3,
      prompt: "Why must API keys and tokens never be placed in a prompt?",
      options: [
        "Because prompt tokens are billed, and secrets are long strings that add measurable cost when included on every request to the model.",
        "Because the model may misinterpret a secret as an instruction, causing unpredictable behaviour that is hard to reproduce and diagnose.",
        "Because the model cannot use a credential anyway, so including it provides no benefit while making the prompt harder to cache effectively.",
        "Because anything in a prompt is transmitted to the provider, stored in traces and logs, and can be repeated by the model in its output.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. A secret in a prompt has been disclosed: to the provider, to your own observability stack, and potentially to anyone who can persuade the model to repeat its context. Credentials belong in the tool execution layer, read from a secret store at call time and never rendered into text the model sees. Why not A: cost is trivial and beside the point. Why not B: misinterpretation is a minor side issue. Why not C: it is true that the model cannot use it, which understates a disclosure as an inefficiency."
    },
    {
      id: "aiSecurityGovernance-06",
      type: "mcq",
      title: "What an Audit Trail Needs",
      difficulty: "easy",
      points: 3,
      prompt: "A regulated deployment must be able to explain any past decision. What does the record need?",
      options: [
        "The full input including retrieved context, the model version and parameters, every tool call and result, and the output, kept immutably.",
        "A hash of the request and response pair, which proves the record has not been altered while avoiding the storage cost of retaining full content.",
        "Aggregate statistics on decision outcomes by category, which demonstrate the system behaved consistently without retaining individual records.",
        "The user's request and the system's final response, timestamped and immutable, which together document what was asked and what was answered.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Explaining a decision means reconstructing what the system knew and how it acted. That requires the retrieved context, because a different document would give a different answer, the exact model version, because aliases move, the parameters, and every tool call, because those are the actions taken. Why not B: a hash proves integrity and explains nothing. Why not C: aggregates cannot answer a question about one decision. Why not D: request and response record the outcome and not the basis for it."
    },
    {
      id: "aiSecurityGovernance-07",
      type: "mcq",
      title: "Confused Deputy",
      difficulty: "medium",
      points: 5,
      prompt: "An agent holds a service credential with broad access and acts on requests from low-privilege users. Its system prompt restricts what it may reveal. Why is this unsound?",
      options: [
        "The audit trail records the service account rather than the end user, so actions cannot be attributed to the person who actually requested them.",
        "The service credential may expire or be rotated, leaving the agent unable to serve any user until an operator intervenes to restore access.",
        "Broad credentials make the agent a high-value target, so an attacker who compromises the service gains access to everything the credential can reach.",
        "The agent wields authority the requester lacks, separated only by an instruction. Any prompt that talks it past that grants the requester the agent's privilege.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. This is the confused deputy: a privileged intermediary acting for an unprivileged principal, with a text instruction as the boundary. Because instructions are not boundaries, any successful injection or persuasive phrasing escalates the requester to the agent's privilege. The fix is to execute under the requester's identity, or to scope the credential per request. Why not A: attribution is a genuine consequence of the same design and not the core unsoundness. Why not B: rotation is an availability concern. Why not C: credential concentration is a real and secondary risk, since the primary problem needs no compromise at all."
    },
    {
      id: "aiSecurityGovernance-08",
      type: "mcq",
      title: "Trust Boundaries in a Pipeline",
      difficulty: "medium",
      points: 5,
      prompt: "An agent browses the web, summarises what it finds, and writes the summary to an internal wiki. Where is the trust boundary?",
      options: [
        "Between fetching untrusted web content and everything downstream. What crosses must be treated as data, and the component that reads it must not hold write privilege.",
        "At the model call, since the model is where untrusted content and privileged instructions are combined and therefore where the risk materialises.",
        "There is no boundary, since summarisation is a read-only transformation and a summary of untrusted content carries no more risk than the content itself.",
        "At the wiki write, since that is the only point where the system makes a persistent change and therefore the only place a control is needed.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. The boundary is where untrusted content enters, and it must be a privilege boundary rather than only a conceptual one. The component that reads the web should not be the component that writes to the wiki, and what crosses between them should be sanitised content, not instructions. Why not B: the model call is where they mix, and placing the control there means controlling text with text. Why not C: a summary of injected content can carry the injection to the next reader of the wiki. Why not D: by the time you are at the write, the injected instruction has already decided what is being written."
    },
    {
      id: "aiSecurityGovernance-09",
      type: "mcq",
      title: "Egress Control",
      difficulty: "medium",
      points: 5,
      prompt: "An agent has a tool that can post to arbitrary URLs. Why is that dangerous even with no sensitive tools attached?",
      options: [
        "Anything in the agent's context, including the system prompt and retrieved content, can go anywhere, so arbitrary egress is an exfiltration channel.",
        "The receiving server can respond with content that is injected into the agent's context, turning an outbound request into an inbound attack path.",
        "The requests carry the service's own network identity, so a malicious post appears to originate from the organisation and can damage its reputation.",
        "The agent may post to an unreachable or malicious endpoint and hang, consuming worker capacity until the request eventually times out.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Any capability that moves bytes outward is an exfiltration channel, and the agent's context routinely contains retrieved documents, user data and your own prompts. The control is an allowlist of destinations enforced at the network layer, not a prompt instruction about where to post. Why not B: it is a real second-order path and the primary exposure is what leaves. Why not C: attribution is a consequence of the same capability. Why not D: hanging is an availability issue."
    },
    {
      id: "aiSecurityGovernance-10",
      type: "mcq",
      title: "Filtering Is Not a Boundary",
      difficulty: "medium",
      points: 5,
      prompt: "A team adds a classifier that blocks prompts containing injection patterns. What is the correct expectation?",
      options: [
        "It will be effective against direct injection but not indirect, since retrieved content bypasses the classifier that sits on the user's input path.",
        "It will produce so many false positives on legitimate technical content that the practical effect is to block valid requests without stopping real attacks.",
        "It stops opportunistic attempts and not a determined attacker, so it belongs in a layered defence and must never be a control anything rests on.",
        "It will be effective as long as the pattern list is updated regularly, since injection techniques are well catalogued and new variants are rare in practice.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. A detector raises the cost of an attack, which has value, and it can be paraphrased around, encoded around, or split across turns. That makes it a useful layer and a poor foundation, so the architecture must still hold if it fails. Why not A: correct in itself and a scoping gap you would fix by also filtering retrieved content, rather than the general limitation. Why not B: false positives are a real cost and the reason to be careful, not the reason not to rely on it. Why not D: injection is open-ended natural language, so pattern coverage is never complete."
    },
    {
      id: "aiSecurityGovernance-11",
      type: "mcq",
      title: "Model Supply Chain",
      difficulty: "medium",
      points: 5,
      prompt: "A team pulls an open-weights model and a set of community tool integrations from public repositories. What is the security concern?",
      options: [
        "Public model weights may have been fine-tuned to behave differently on specific inputs, which no standard evaluation would detect before deployment.",
        "Community integrations may be unmaintained, so vulnerabilities in their dependencies will go unpatched and accumulate over the deployment's lifetime.",
        "Open-weights models cannot be audited for training data provenance, so the deployment carries unquantifiable legal risk around the content it may reproduce.",
        "Model files can execute code on load depending on the format, and integrations run with your service's privileges, so both are untrusted code.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The immediate and concrete risk is code execution. Some model serialisation formats can execute arbitrary code during deserialisation, which is why safe tensor formats exist, and a tool integration is simply a dependency that runs with your service's privileges and credentials. Treat both as untrusted code: pin versions, verify checksums, prefer safe formats, and review integrations. Why not A: backdoored weights are a real and much rarer concern than the loading path. Why not B: unmaintained dependencies are a real slower-moving risk. Why not C: provenance is a genuine legal question rather than a security control."
    },
    {
      id: "aiSecurityGovernance-12",
      type: "mcq",
      title: "Training on Production Data",
      difficulty: "medium",
      points: 5,
      prompt: "A team wants to fine-tune on production conversations. What governance questions must be settled first?",
      options: [
        "Whether the resulting model can be evaluated against the same benchmarks as the base model, so the effect of the fine-tuning can be measured objectively.",
        "Whether the data volume is sufficient and the label quality is high enough, since a model trained on inconsistent conversations will learn inconsistent behaviour.",
        "Whether users consented to this use, whether personal data can be removed, whether one customer's data may shape another's model, and how deletion works once data is in the weights.",
        "Whether the conversations are representative of current traffic, since training on historical data risks encoding behaviour that no longer matches how the product is used.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Training changes the legal character of the data. Consent has to cover this use, personal data must be removable before training rather than after, cross-customer contamination must be prevented, and deletion becomes genuinely hard because a request cannot be honoured by deleting a row once the content is in the weights. That last point often decides the whole question. Why not A: comparable benchmarking measures the result rather than the right to produce it. Why not B: data volume and label quality are engineering questions about whether training will work, not about whether you may train. Why not D: representativeness is a quality concern on the same footing."
    },
    {
      id: "aiSecurityGovernance-13",
      type: "mcq",
      title: "Jailbreak Versus Injection",
      difficulty: "medium",
      points: 5,
      prompt: "What distinguishes a jailbreak from a prompt injection?",
      options: [
        "A jailbreak exploits a weakness in the provider's safety layer; an injection exploits a weakness in the application's input validation before the prompt is built.",
        "A jailbreak targets the model's safety training, so a user makes it do what it should refuse; an injection targets the application, so an attacker makes the system act for someone else.",
        "A jailbreak is performed by a legitimate user against their own session; an injection is performed by an unauthenticated third party against the service.",
        "A jailbreak affects the model's output only; an injection affects the model's tool calls, which is why injection matters in agents and jailbreaks do not.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. The distinction is who is harmed and what is subverted. A jailbreak subverts the model's own guardrails, and the person doing it is usually the person harmed. An injection subverts your application's control flow, and the victim is typically a different user whose agent read the attacker's content. They need different defences and different threat models. Why not A: injection needs no validation weakness, since there is no syntax to validate. Why not C: it is often true and describes a correlation rather than the definition. Why not D: jailbreaks can absolutely influence tool calls."
    },
    {
      id: "aiSecurityGovernance-14",
      type: "mcq",
      title: "Incident Response",
      difficulty: "medium",
      points: 5,
      prompt: "An agent took a harmful action in production. What does the response require that a conventional incident does not?",
      options: [
        "A full replay of the incident in a staging environment, so the exact conditions can be reproduced and a fix verified before returning the agent to production.",
        "A rollback of the model to a previous version, since the harmful behaviour originated in the model and reverting it is the fastest containment step available.",
        "Containment through capability, not code: revoke or narrow the tool used, since no patch makes the model reliably refuse and the run cannot be reproduced.",
        "A retraining cycle incorporating the incident as a negative example, so the model learns not to repeat the behaviour in comparable situations.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Two things differ from a normal incident. There is no deterministic fix, since the model may behave differently on the same input, so you cannot patch and verify in the usual sense. And the run is not reproducible, so the trace is the only evidence. That pushes containment toward capability: take the tool away, narrow its credential, or add a gate, because reducing what is possible is verifiable in a way that changing a prompt is not. Why not A: replay cannot reproduce a non-deterministic run. Why not B: a version rollback may help and does not address a capability that remains available. Why not D: retraining is slow and probabilistic."
    },
    {
      id: "aiSecurityGovernance-15",
      type: "mcq",
      title: "The Injection Chain",
      difficulty: "hard",
      points: 7,
      prompt: `A support agent handles a ticket. The ticket body, submitted by a customer, contains hidden text instructing the agent to look up the requester's account and email the details to an external address.

{{diagram}}

What is the correct fix?`,
      diagram: `flowchart LR
  T["Ticket body<br/><small>untrusted · contains hidden instruction</small>"] --> A["SUPPORT AGENT"]
  A --> S["search_tickets"]
  A --> G["get_account<br/><small>sensitive data</small>"]
  A --> E["send_email<br/><small>outbound to any address</small>"]
  classDef danger fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef safe fill:#ecfdf5,stroke:#10b981,color:#065f46;
  class T danger;
  class A agent;
  class S safe;
  class G,E danger;`,
      options: [
        "Instruct the agent in its system prompt that ticket content is untrusted data and must never be treated as instructions, and repeat the rule after the ticket body.",
        "Sanitise the ticket body before it ever reaches the model, stripping hidden and zero-width characters along with any text that reads as an instruction directed at the agent.",
        "Separate the privileges: whatever reads untrusted tickets must not hold both account lookup and outbound email, and recipients must be allowlisted.",
        "Add an approval gate on send_email so that a human reviews every outbound message, which stops the exfiltration attempt at the last step before any data actually leaves.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. The agent holds every capability the attack needs: read untrusted input, read sensitive data, send it outward. Breaking that chain is what removes the attack rather than making it harder. Split the roles so the reader of untrusted content cannot both fetch accounts and email, and enforce recipient allowlisting outside the model's control. Why not A: prompt rules are not boundaries against an attacker writing the surrounding text. Why not B: sanitisation catches the hidden-text variant and not a plainly worded instruction. Why not D: a gate is a genuinely strong layer here and depends on a reviewer catching a plausible-looking email every time."
    },
    {
      id: "aiSecurityGovernance-16",
      type: "mcq",
      title: "Exfiltration Without a Network Tool",
      difficulty: "hard",
      points: 7,
      prompt: "An agent has no network tools. It reads sensitive internal documents and renders its answer as markdown in a web UI. How could data still leave?",
      options: [
        "Through the conversation history, since a later user of a shared session would see the sensitive documents that remain in the context window.",
        "It cannot. Without a tool that makes outbound requests, the agent has no mechanism to transmit anything beyond the response shown to the authorised user.",
        "Through the model provider, since the sensitive documents are transmitted as part of every prompt and are retained under the provider's data policy.",
        "Through rendered content: a markdown image or link whose URL embeds the data causes the user's browser to make the request when the answer is displayed.",
      ],
      correctIndex: 3,
      explanation: "Correct: D. The rendering surface is an egress channel. If the UI renders markdown images, an injected instruction can produce a reference to an attacker-controlled host with the data encoded in the path or query, and the victim's own browser makes the request the moment the answer renders. The controls are a content security policy, refusing to auto-load remote images, and sanitising links in model output. Why not A: shared sessions are a separate access control failure. Why not B: it is the assumption the question exists to break. Why not C: provider transmission is a real data-handling consideration governed by contract rather than an exfiltration path."
    },
    {
      id: "aiSecurityGovernance-17",
      type: "mcq",
      title: "Defence in Depth That Is Not",
      difficulty: "hard",
      points: 7,
      prompt: `A team lists their injection defences.

{{diagram}}

What is the structural weakness?`,
      diagram: `flowchart TB
  D([Injection defences])
  D --> L1["1 · System prompt says to ignore<br/><small>instructions in retrieved content</small>"]
  D --> L2["2 · A model classifies input<br/><small>for injection attempts</small>"]
  D --> L3["3 · Agent instructed to confirm<br/><small>before destructive actions</small>"]
  D --> L4["4 · Responses checked by a model<br/><small>for policy violations</small>"]
  classDef agent fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#0f172a;
  classDef warning fill:#fff7ed,stroke:#f97316,stroke-width:1.5px,color:#9a3412;
  class D agent;
  class L1,L2,L3,L4 warning;`,
      options: [
        "All four are probabilistic model-mediated controls an attacker addresses with text. Nothing limits what the agent can do, so one bypass yields full capability.",
        "The layers are ordered incorrectly, since output checking should precede input classification to catch attacks that only become visible in the model's response.",
        "The layers run sequentially, so an attack that passes the first is likely to pass the others, and the total protection is no better than the strongest single layer.",
        "The layers are all detective rather than preventive, so they identify an attack in progress without stopping it, and none of them reduces the damage once it succeeds.",
      ],
      correctIndex: 0,
      explanation: "Correct: A. Four layers made of the same material are one layer. Every item is a model reading text and deciding, so every item is in scope for the same attack, and none of them changes what the agent is capable of if persuaded. Real depth requires controls of a different kind: scoped credentials, tool allowlists, network egress restrictions, and privilege separation, which hold whether or not the model was fooled. Why not B: reordering identical-material controls changes nothing. Why not C: correlation is the right instinct, and the deeper issue is that capability is unbounded. Why not D: item 3 is preventive in intent, so the detective framing is not quite right."
    },
    {
      id: "aiSecurityGovernance-18",
      type: "mcq",
      title: "Deletion Once Data Has Spread",
      difficulty: "hard",
      points: 7,
      prompt: "A customer invokes their deletion rights. Their data has been through a retrieval index, conversation logs, an evaluation dataset, a fine-tuning run, and the model provider. What is the honest position?",
      options: [
        "Deletion applies to identifiable records, and once data has been used for training it is aggregate statistical information rather than personal data, so the weights fall outside the request.",
        "The fine-tuned model can be repaired by training it further on corrective examples that override the customer's data, which achieves the practical effect of removal without the cost of a full retrain.",
        "Index entries, logs and evaluation data can be deleted, and provider retention is contractual, but content absorbed into weights needs retraining to remove, which is why training on customer data must be decided in advance.",
        "All copies can be deleted by removing the original source records and then re-running the derived pipelines, since every downstream artifact is ultimately regenerated from that source data.",
      ],
      correctIndex: 2,
      explanation: "Correct: C. Most surfaces are deletable with effort. Weights are the exception: content is diffused across parameters with no record to remove, so honouring the request means retraining from a cleaned dataset. That is expensive enough that it has to be decided before you train, not after a request arrives, which is the practical governance point. Why not A: this is a convenient argument that regulators have not generally accepted, and models can reproduce memorised training content. Why not B: corrective training suppresses behaviour without removing the information and is not deletion. Why not D: weights are not regenerated from source on demand."
    },
    {
      id: "aiSecurityGovernance-19",
      type: "mcq",
      title: "Threat Modelling an Agent",
      difficulty: "hard",
      points: 7,
      prompt: "You are threat modelling a new agent. Which question most efficiently bounds the risk?",
      options: [
        "How is untrusted input detected and filtered before it reaches the model, since preventing malicious content from entering the context is what stops attacks at the source.",
        "What is the worst thing this agent can do if every instruction it follows is chosen by an attacker, and what limits that regardless of what the model decides?",
        "What is the probability that an injection attempt succeeds against this model, so the risk can be quantified as likelihood multiplied by impact in the usual way.",
        "Which model is being used and what safety training has the provider applied, since the model's own refusal behaviour is the first line of defence against misuse.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Assume the model is fully controlled by an attacker and ask what remains possible. That reframes the analysis from likelihood, which is unknowable for an open-ended text attack, to capability, which is enumerable: the tools, their credentials, the data reachable, and where output can travel. Everything that survives that assumption is a real control. Why not A: filtering is a useful layer whose failure the model must survive. Why not C: assigning a probability to a creative adversarial attack is guessing dressed as rigour. Why not D: provider safety training is worth knowing and is not a boundary you own."
    },
    {
      id: "aiSecurityGovernance-20",
      type: "mcq",
      title: "Approving a Design for Production",
      difficulty: "hard",
      points: 7,
      prompt: "An agent will process customer emails, query a customer database, and draft replies for human sending. Which set of controls should a reviewer require before approval?",
      options: [
        "A strong system prompt covering the handling of untrusted email, an injection classifier on all inbound mail, human review of every generated draft, and full logging of prompts and responses.",
        "Per-request credentials scoped to the customer in question, no outbound network capability, an allowlist on rendered links and images, human send with the source data shown, and traces of records accessed.",
        "A dedicated model fine-tuned on the company's own email corpus so that it follows house policy reliably, plus an approval gate on sending and full retention of all correspondence.",
        "Isolation of the agent in its own network segment, encryption of all data at rest and in transit, and an access review confirming the agent's service account follows least privilege.",
      ],
      correctIndex: 1,
      explanation: "Correct: B. Every item removes a capability rather than asking the model to behave. Per-request scoped credentials prevent one customer's email from reaching another's records, no outbound capability closes the direct exfiltration path, link and image allowlisting closes the rendering path, human send with the source data shown makes the reviewer able to catch a wrong draft rather than only approve it, and record-level traces make an incident investigable. Why not A: every control is text-mediated and the credential remains broad. Why not C: fine-tuning shapes behaviour and grants no boundary. Why not D: sound infrastructure hygiene that leaves the agent's application-level capabilities untouched."
    }
  ]
};
