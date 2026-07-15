import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Daily Incident Response assessment.
// Questions progress from first response and triage to advanced incident command,
// rollback judgment, observability, customer communication, dependency failures,
// graceful degradation, post-incident review, prevention, and operational maturity.
export const dailyIncidentMcqData = {
  id: ASSESSMENT_TYPES.daily_incident,
  title: 'Production Incident Response Professional Certification',
  shortTitle: 'Daily Incident',
  category: 'Production operations',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional production operations assessment covering incident triage, severity assessment, incident command, rollback decisions, stakeholder communication, observability, escalation, graceful degradation, customer protection, postmortems, and service recovery.',
  instructions:
    'Choose the best response for each production incident scenario. Questions move from easy to hard and test practical incident judgment, not only definitions.',
  questions: [
    {
      id: 'inc-01',
      type: 'mcq',
      title: 'First Response',
      prompt: 'Checkout errors spike across multiple regions immediately after a deployment. What should the on-call lead do first?',
      options: [
        'Start rewriting the payment service',
        'Acknowledge the incident, assess customer impact, assign roles, and begin stabilization',
        'Wait for more customer tickets before acting',
        'Write a full retrospective before mitigation starts'
      ],
      correctIndex: 1,
      explanation:
        'The first response should establish coordination, assess blast radius, and start mitigation quickly.'
    },
    {
      id: 'inc-02',
      type: 'mcq',
      title: 'Incident Priority',
      prompt: 'Which factor is most important when determining incident severity?',
      options: [
        'How senior the engineer is',
        'Customer impact, business impact, scope, and urgency',
        'How long the service name is',
        'Whether the incident happens during a meeting'
      ],
      correctIndex: 1,
      explanation:
        'Severity should be based on impact and urgency, not internal politics or convenience.'
    },
    {
      id: 'inc-03',
      type: 'mcq',
      title: 'Incident Commander',
      prompt: 'What is the primary responsibility of an incident commander?',
      options: [
        'Personally debug every log line',
        'Coordinate response, assign owners, maintain focus, and drive decisions',
        'Write the final postmortem during the outage',
        'Approve every code change in the company'
      ],
      correctIndex: 1,
      explanation:
        'The incident commander owns coordination and decision flow so responders can focus on investigation and mitigation.'
    },
    {
      id: 'inc-04',
      type: 'mcq',
      title: 'Role Clarity',
      prompt: 'During a major incident, why should roles be clearly assigned?',
      options: [
        'To make the incident look formal',
        'To reduce confusion, duplicate work, and missed responsibilities',
        'To prevent engineers from communicating',
        'To delay mitigation until titles are finalized'
      ],
      correctIndex: 1,
      explanation:
        'Clear roles such as commander, technical lead, communications owner, and scribe improve coordination under pressure.'
    },
    {
      id: 'inc-05',
      type: 'mcq',
      title: 'Rollback Judgment',
      prompt: 'A recent release is the likely cause of elevated 500 errors, and rollback is low risk. What is the best decision?',
      options: [
        'Keep debugging in production for two hours',
        'Rollback the change and continue root-cause analysis after stabilization',
        'Scale the database randomly',
        'Close the incident because an owner is investigating'
      ],
      correctIndex: 1,
      explanation:
        'When rollback is safe and likely to restore service, recovery should usually come before deep root-cause analysis.'
    },
    {
      id: 'inc-06',
      type: 'mcq',
      title: 'Rollback Risk',
      prompt: 'When should a rollback be treated cautiously?',
      options: [
        'When the release includes database migrations, irreversible data changes, or dependency contract changes',
        'Whenever rollback is faster than debugging',
        'Only when the product manager is offline',
        'Never; rollback is always risk-free'
      ],
      correctIndex: 0,
      explanation:
        'Some rollbacks can create data or compatibility issues and need careful evaluation before execution.'
    },
    {
      id: 'inc-07',
      type: 'mcq',
      title: 'Customer Protection',
      prompt: 'Payment latency is rising, but the site is still available. What is the best customer-protection move?',
      options: [
        'Do nothing until the site fails completely',
        'Disable non-critical dependent features or degrade gracefully while preserving core checkout',
        'Remove all monitoring alerts',
        'Announce maintenance without checking impact'
      ],
      correctIndex: 1,
      explanation:
        'Graceful degradation protects the most important customer journey while reducing pressure on unstable components.'
    },
    {
      id: 'inc-08',
      type: 'mcq',
      title: 'Graceful Degradation',
      prompt: 'Which is the best example of graceful degradation?',
      options: [
        'Disabling product recommendations while keeping search and checkout working',
        'Taking the entire website offline because one widget failed',
        'Ignoring all errors',
        'Deleting the deployment pipeline'
      ],
      correctIndex: 0,
      explanation:
        'Graceful degradation allows lower-priority functionality to fail while preserving critical user flows.'
    },
    {
      id: 'inc-09',
      type: 'mcq',
      title: 'Stakeholder Update',
      prompt: 'Which stakeholder update is strongest during an active incident?',
      options: [
        'Something is broken. We are checking.',
        'We are seeing elevated API failures affecting checkout in EU and US. Mitigation is in progress, and the next update will be shared in 15 minutes.',
        'The engineering team caused an outage.',
        'No update until the incident is fully resolved.'
      ],
      correctIndex: 1,
      explanation:
        'Strong incident communication includes impact, affected area, current action, and next update time.'
    },
    {
      id: 'inc-10',
      type: 'mcq',
      title: 'Communication Cadence',
      prompt: 'Why is a regular update cadence important during an incident?',
      options: [
        'It gives stakeholders confidence and reduces repeated interruptions',
        'It replaces mitigation work',
        'It guarantees the incident will end faster',
        'It allows responders to hide uncertainty'
      ],
      correctIndex: 0,
      explanation:
        'Predictable updates keep stakeholders informed and allow responders to focus between updates.'
    },
    {
      id: 'inc-11',
      type: 'mcq',
      title: 'Uncertainty Communication',
      prompt: 'What is the best way to communicate uncertainty during an incident?',
      options: [
        'Pretend the root cause is known',
        'State what is known, what is unknown, what is being investigated, and when the next update will come',
        'Say nothing until everything is certain',
        'Blame the most recent deployer'
      ],
      correctIndex: 1,
      explanation:
        'Transparent uncertainty builds trust and prevents premature or misleading conclusions.'
    },
    {
      id: 'inc-12',
      type: 'mcq',
      title: 'Metrics to Watch',
      prompt: 'During a login incident, which metric pairing is most useful?',
      options: [
        'Office attendance and sprint velocity',
        'Login error rate and authentication latency',
        'Team mood and story points',
        'CPU brand and laptop model'
      ],
      correctIndex: 1,
      explanation:
        'Incident metrics should directly reflect the affected customer-facing journey.'
    },
    {
      id: 'inc-13',
      type: 'mcq',
      title: 'Golden Signals',
      prompt: 'Which set best represents useful production health signals?',
      options: [
        'Latency, traffic, errors, and saturation',
        'Meeting count, story points, and slide count',
        'Office location and laptop model',
        'Team seniority and project name length'
      ],
      correctIndex: 0,
      explanation:
        'Latency, traffic, errors, and saturation are common operational signals for service health.'
    },
    {
      id: 'inc-14',
      type: 'mcq',
      title: 'Blast Radius',
      prompt: 'What does blast radius mean in incident response?',
      options: [
        'The number of engineers in the incident channel',
        'The scope of customer, system, region, or business impact',
        'The size of the code repository',
        'The number of meetings scheduled that day'
      ],
      correctIndex: 1,
      explanation:
        'Blast radius describes how widely the incident impact spreads across users, systems, regions, or workflows.'
    },
    {
      id: 'inc-15',
      type: 'mcq',
      title: 'Segmentation',
      prompt: 'A spike in API failures appears only for mobile users in one country. What should responders do?',
      options: [
        'Declare a full global outage immediately',
        'Segment impact by platform, geography, version, endpoint, and customer journey',
        'Ignore it because it is not global',
        'Disable all APIs permanently'
      ],
      correctIndex: 1,
      explanation:
        'Segmentation helps identify the affected population and avoid over- or under-reacting.'
    },
    {
      id: 'inc-16',
      type: 'mcq',
      title: 'Root Cause Discipline',
      prompt: 'Why should the incident commander avoid locking onto a single theory too early?',
      options: [
        'Incidents never have real causes',
        'Early tunnel vision can hide conflicting signals and delay the right mitigation path',
        'It makes status meetings longer',
        'Logs are never useful'
      ],
      correctIndex: 1,
      explanation:
        'Incident teams should test hypotheses against evidence instead of assuming the first explanation is correct.'
    },
    {
      id: 'inc-17',
      type: 'mcq',
      title: 'Hypothesis Testing',
      prompt: 'Which investigation approach is strongest?',
      options: [
        'Pick the first theory and ignore contradictory evidence',
        'List likely causes, check evidence for each, and update the working theory as signals emerge',
        'Ask only the most senior person to guess',
        'Wait until users stop complaining'
      ],
      correctIndex: 1,
      explanation:
        'Structured hypothesis testing reduces tunnel vision and improves the chance of finding the real cause.'
    },
    {
      id: 'inc-18',
      type: 'mcq',
      title: 'Data Quality in Incidents',
      prompt: 'The dashboard shows traffic dropped to zero, but customer reports suggest the service is still being used. What should the team do?',
      options: [
        'Assume all customers are wrong',
        'Check telemetry pipeline health, instrumentation, logs, and independent data sources',
        'Close the incident immediately',
        'Delete the dashboard'
      ],
      correctIndex: 1,
      explanation:
        'Incident telemetry can fail too. Cross-checking sources prevents bad decisions based on broken monitoring.'
    },
    {
      id: 'inc-19',
      type: 'mcq',
      title: 'Alert Noise',
      prompt: 'A flood of duplicate alerts is slowing triage. What is the best response?',
      options: [
        'Ignore alerts permanently',
        'Consolidate or suppress duplicate noise while preserving critical signal for the active incident',
        'Turn off logging for the whole platform',
        'Reopen old incidents to compare severity'
      ],
      correctIndex: 1,
      explanation:
        'The goal is to reduce noise while keeping meaningful signal available to responders.'
    },
    {
      id: 'inc-20',
      type: 'mcq',
      title: 'Escalation Judgment',
      prompt: 'When should a cross-functional escalation happen?',
      options: [
        'Only after the issue resolves',
        'When the incident spans multiple systems, owners, or business-critical dependencies',
        'Never, because it creates noise',
        'Only if finance asks for it'
      ],
      correctIndex: 1,
      explanation:
        'Escalation is appropriate when coordination across teams materially improves recovery.'
    },
    {
      id: 'inc-21',
      type: 'mcq',
      title: 'Dependency Failure',
      prompt: 'A third-party payment provider is intermittently failing. What is the strongest response?',
      options: [
        'Wait silently for the provider to fix it',
        'Assess impact, contact the provider, activate fallback or retry strategy if safe, and communicate customer impact',
        'Disable all checkout permanently',
        'Blame the provider in public updates'
      ],
      correctIndex: 1,
      explanation:
        'Third-party incidents still require active ownership of customer impact, fallback options, and communication.'
    },
    {
      id: 'inc-22',
      type: 'mcq',
      title: 'Retry Storm',
      prompt: 'A failing downstream service is receiving aggressive retries and becoming more overloaded. What should responders consider?',
      options: [
        'Increasing retries without limit',
        'Backoff, circuit breakers, rate limiting, queueing, or temporarily disabling non-critical traffic',
        'Removing all timeout settings',
        'Ignoring saturation metrics'
      ],
      correctIndex: 1,
      explanation:
        'Uncontrolled retries can amplify failure. Backoff and circuit-breaking patterns protect systems under stress.'
    },
    {
      id: 'inc-23',
      type: 'mcq',
      title: 'Circuit Breaker',
      prompt: 'What is the purpose of a circuit breaker in production systems?',
      options: [
        'To prevent repeated calls to a failing dependency and allow graceful fallback',
        'To delete incident logs',
        'To restart every service every minute',
        'To replace all monitoring'
      ],
      correctIndex: 0,
      explanation:
        'Circuit breakers reduce cascading failures by stopping repeated calls to unhealthy dependencies.'
    },
    {
      id: 'inc-24',
      type: 'mcq',
      title: 'Rate Limiting',
      prompt: 'A sudden traffic surge is overloading an API. What mitigation may protect service availability?',
      options: [
        'Rate limiting or shedding low-priority traffic',
        'Turning off all health checks',
        'Removing authentication',
        'Increasing database queries per request'
      ],
      correctIndex: 0,
      explanation:
        'Rate limiting and load shedding can protect core service availability during overload.'
    },
    {
      id: 'inc-25',
      type: 'mcq',
      title: 'Database Saturation',
      prompt: 'Database CPU and connection count are saturated during an incident. Which action is most reasonable?',
      options: [
        'Ignore the database because the app is the only possible cause',
        'Reduce load, identify expensive queries, scale safely if appropriate, and protect critical paths',
        'Restart random services continuously',
        'Disable backups permanently'
      ],
      correctIndex: 1,
      explanation:
        'Database saturation requires load reduction, query investigation, controlled scaling, and customer-impact protection.'
    },
    {
      id: 'inc-26',
      type: 'mcq',
      title: 'Feature Flag Mitigation',
      prompt: 'A new recommendation feature causes high latency but is not required for checkout. What is the best mitigation?',
      options: [
        'Disable the feature using a feature flag while preserving checkout',
        'Take the entire site offline',
        'Continue debugging without mitigation',
        'Delete all recommendation data'
      ],
      correctIndex: 0,
      explanation:
        'Feature flags allow fast mitigation of non-critical functionality without requiring a full deployment.'
    },
    {
      id: 'inc-27',
      type: 'mcq',
      title: 'Canary Failure',
      prompt: 'A canary deployment shows elevated error rate in the new version. What should happen?',
      options: [
        'Proceed to 100% rollout because only a few users are affected',
        'Stop or rollback the canary and investigate before expanding',
        'Disable monitoring to avoid noise',
        'Ignore the canary because production is not fully impacted'
      ],
      correctIndex: 1,
      explanation:
        'Canaries are designed to catch problems early. A failing canary should not be promoted.'
    },
    {
      id: 'inc-28',
      type: 'mcq',
      title: 'Blue-Green Failure',
      prompt: 'Traffic was shifted to a green environment and errors increased immediately. The blue environment is still healthy. What is the best action?',
      options: [
        'Shift traffic back to blue and investigate green',
        'Keep traffic on green to collect more failures',
        'Delete both environments',
        'Declare the issue resolved'
      ],
      correctIndex: 0,
      explanation:
        'Blue-green deployment enables fast rollback by shifting traffic back to the known-good environment.'
    },
    {
      id: 'inc-29',
      type: 'mcq',
      title: 'Security Incident',
      prompt: 'An alert indicates possible unauthorized access to customer data. What should the responder do?',
      options: [
        'Treat it like a normal UI bug',
        'Follow security incident process, preserve evidence, restrict access if needed, and escalate to security/privacy owners',
        'Delete logs to reduce risk',
        'Discuss customer details in a public channel'
      ],
      correctIndex: 1,
      explanation:
        'Security incidents require evidence preservation, controlled communication, and escalation through the correct process.'
    },
    {
      id: 'inc-30',
      type: 'mcq',
      title: 'Data Incident',
      prompt: 'A batch job may have sent incorrect invoices to customers. What is the best first response?',
      options: [
        'Ignore it unless customers complain',
        'Stop further sends if possible, assess affected customers, preserve evidence, and coordinate correction communication',
        'Delete the invoice records',
        'Blame the finance team publicly'
      ],
      correctIndex: 1,
      explanation:
        'Data-impacting incidents require containment, scope assessment, evidence preservation, and careful correction.'
    },
    {
      id: 'inc-31',
      type: 'mcq',
      title: 'Customer Communication',
      prompt: 'What should customer-facing communication avoid during an active incident?',
      options: [
        'Clear impact and mitigation status',
        'Speculation, blame, unsupported root cause claims, and overpromising resolution times',
        'Update timestamps',
        'Acknowledging the issue'
      ],
      correctIndex: 1,
      explanation:
        'External communication should be accurate, calm, factual, and avoid speculation or blame.'
    },
    {
      id: 'inc-32',
      type: 'mcq',
      title: 'Internal vs External Updates',
      prompt: 'Why might internal incident updates contain more detail than external customer updates?',
      options: [
        'Customers should never receive updates',
        'Internal teams need technical detail for mitigation, while external updates should be clear, accurate, and customer-impact focused',
        'External updates should include all private logs',
        'Internal updates should avoid facts'
      ],
      correctIndex: 1,
      explanation:
        'Different audiences need different levels of detail. Customer updates should focus on impact and recovery without exposing sensitive details.'
    },
    {
      id: 'inc-33',
      type: 'mcq',
      title: 'Resolution Criteria',
      prompt: 'When should an incident be declared resolved?',
      options: [
        'As soon as customer complaints slow down',
        'Once customer impact is mitigated, key metrics are stable, and ownership for remaining follow-up work is clear',
        'After a manager goes offline',
        'Once a workaround is mentioned in chat'
      ],
      correctIndex: 1,
      explanation:
        'Resolution requires service stability, customer-impact mitigation, and clear follow-up ownership.'
    },
    {
      id: 'inc-34',
      type: 'mcq',
      title: 'Monitoring After Mitigation',
      prompt: 'A rollback appears to have restored service. What should the team do next?',
      options: [
        'Immediately close everything and leave',
        'Monitor key metrics for stability, confirm customer impact is resolved, and document the timeline',
        'Delete the incident channel',
        'Restart all systems again'
      ],
      correctIndex: 1,
      explanation:
        'Recovery should be verified through metrics and customer-impact signals before closure.'
    },
    {
      id: 'inc-35',
      type: 'mcq',
      title: 'Post-Incident Review',
      prompt: 'Which post-incident follow-up is most valuable?',
      options: [
        'Assign blame to the deployer',
        'Document timeline, root cause, contributing factors, customer impact, and prevention actions with owners',
        'Archive the channel and move on',
        'Rewrite every service immediately'
      ],
      correctIndex: 1,
      explanation:
        'Good retrospectives focus on learning, accountability, prevention, and clear action ownership.'
    },
    {
      id: 'inc-36',
      type: 'mcq',
      title: 'Blameless Postmortem',
      prompt: 'What does a blameless postmortem mean?',
      options: [
        'No one is accountable for follow-up work',
        'The review focuses on system, process, and decision improvements rather than personal blame',
        'The root cause should be hidden',
        'No difficult questions should be asked'
      ],
      correctIndex: 1,
      explanation:
        'Blameless does not mean accountability disappears; it means the team learns without scapegoating.'
    },
    {
      id: 'inc-37',
      type: 'mcq',
      title: 'Action Item Quality',
      prompt: 'Which post-incident action item is strongest?',
      options: [
        'Be more careful next time',
        'Add payment API error-rate alert at 5% for 5 minutes, owner: Ravi, due Friday',
        'Improve reliability someday',
        'Do better monitoring'
      ],
      correctIndex: 1,
      explanation:
        'Strong action items are specific, owned, measurable, and time-bound.'
    },
    {
      id: 'inc-38',
      type: 'mcq',
      title: 'Prevention',
      prompt: 'A similar incident has happened three times in two months. What is the strongest response?',
      options: [
        'Treat each incident as unrelated',
        'Identify recurring systemic causes and prioritize prevention work such as tests, alerts, automation, ownership, or architectural fixes',
        'Lower incident severity to reduce noise',
        'Stop writing postmortems'
      ],
      correctIndex: 1,
      explanation:
        'Repeated incidents indicate systemic weakness and require preventive investment.'
    },
    {
      id: 'inc-39',
      type: 'mcq',
      title: 'Operational Maturity',
      prompt: 'Which practice best improves incident readiness before an outage happens?',
      options: [
        'Relying only on individual heroics',
        'Runbooks, ownership maps, alert tuning, game days, rollback plans, and tested communication paths',
        'Avoiding documentation',
        'Turning off alerts after every incident'
      ],
      correctIndex: 1,
      explanation:
        'Operational readiness is built before incidents through preparation, testing, documentation, and clear ownership.'
    },
    {
      id: 'inc-40',
      type: 'mcq',
      title: 'Advanced Incident Judgment',
      prompt: 'A critical outage is active. One team wants to keep debugging for root cause, while another proposes a safe mitigation that restores 90% of customer functionality. What is the best decision?',
      options: [
        'Continue debugging until the exact root cause is known',
        'Apply the safe mitigation to restore most customer functionality, then continue investigation',
        'Pause all action until the next meeting',
        'Ignore the mitigation because it is not a perfect fix'
      ],
      correctIndex: 1,
      explanation:
        'During active incidents, restoring customer functionality usually comes before perfect root-cause certainty when mitigation is safe.'
    }
  ]
};