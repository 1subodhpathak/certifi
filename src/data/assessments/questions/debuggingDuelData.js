import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Debugging Duel assessment.
// Questions progress from rapid reproduction and fault isolation to advanced
// production diagnostics, telemetry judgment, rollback decisions, flaky tests,
// dependency failures, performance regressions, ownership, and durable fixes.
export const debuggingDuelData = {
  id: ASSESSMENT_TYPES.debugging_duel,
  title: 'Debugging Duel: Engineering Diagnostics Certification',
  shortTitle: 'Debugging Duel',
  category: 'Engineering diagnostics',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional rapid-debugging assessment covering fault isolation, reproduction, logs, traces, hypothesis testing, flaky tests, performance regressions, production triage, ownership, mitigation, regression testing, and durable engineering judgment.',
  instructions:
    'Choose the strongest debugging move for each scenario. Questions move from easy to hard and test practical engineering judgment under ambiguity and time pressure.',
  questions: [
    {
      id: 'duel-01',
      type: 'mcq',
      title: 'Reproduction',
      prompt: 'A bug appears only in production for one customer segment. What is the best first debugging step?',
      options: [
        'Refactor the codebase immediately',
        'Reproduce the issue with the same inputs, flags, account type, region, and environment conditions',
        'Delete the feature toggle',
        'Assume the customer data is wrong'
      ],
      correctIndex: 1,
      explanation:
        'Effective debugging starts by narrowing the exact conditions that trigger the defect.'
    },
    {
      id: 'duel-02',
      type: 'mcq',
      title: 'Minimal Failing Case',
      prompt: 'A complex workflow fails after several steps. What is the strongest way to make debugging easier?',
      options: [
        'Keep testing the full workflow only',
        'Create the smallest reliable failing case that still reproduces the issue',
        'Rewrite every related module',
        'Ignore the workflow and wait for more tickets'
      ],
      correctIndex: 1,
      explanation:
        'A minimal failing case removes noise and makes it easier to isolate the root cause.'
    },
    {
      id: 'duel-03',
      type: 'mcq',
      title: 'Signal Isolation',
      prompt: 'Several systems changed this week. How do you isolate the likely cause fastest?',
      options: [
        'Investigate every service equally',
        'Compare the failure window with deploys, config changes, feature flags, data changes, and dependency shifts',
        'Ask one engineer for a guess and follow it',
        'Restart production repeatedly'
      ],
      correctIndex: 1,
      explanation:
        'Timeline correlation is one of the fastest ways to narrow likely causes.'
    },
    {
      id: 'duel-04',
      type: 'mcq',
      title: 'Recent Change Bias',
      prompt: 'The last deployment is suspicious, but there was also a database configuration change. What should the debugger do?',
      options: [
        'Assume the deployment is definitely the cause',
        'Test both hypotheses against evidence such as timing, metrics, logs, and rollback safety',
        'Ignore the database because code changed',
        'Pick the theory that is easiest to explain'
      ],
      correctIndex: 1,
      explanation:
        'Strong debugging avoids tunnel vision and compares multiple plausible causes against evidence.'
    },
    {
      id: 'duel-05',
      type: 'mcq',
      title: 'Logging Strategy',
      prompt: 'Existing logs are too vague to explain a failing workflow. What should you add?',
      options: [
        'Random console logs across the entire app',
        'Structured logs around inputs, decision branches, correlation IDs, and output state for the failing path',
        'Only success logs',
        'Remove all logs to improve performance'
      ],
      correctIndex: 1,
      explanation:
        'Useful logs capture state transitions and identifiers that explain why a specific path failed.'
    },
    {
      id: 'duel-06',
      type: 'mcq',
      title: 'Correlation ID',
      prompt: 'A request passes through five services, but logs are hard to connect. What would improve traceability most?',
      options: [
        'Add a shared correlation ID or trace ID across service boundaries',
        'Rename all services',
        'Log only at application startup',
        'Remove timestamps from logs'
      ],
      correctIndex: 0,
      explanation:
        'Correlation IDs make it possible to follow one request across distributed systems.'
    },
    {
      id: 'duel-07',
      type: 'mcq',
      title: 'Binary Search Debugging',
      prompt: 'A long data pipeline breaks somewhere between ingestion and reporting. What is the strongest approach?',
      options: [
        'Review the final dashboard only',
        'Check intermediate outputs stage by stage to find where expected behavior first diverges',
        'Assume the first stage is broken',
        'Replace the entire pipeline immediately'
      ],
      correctIndex: 1,
      explanation:
        'Breaking the system into checkpoints is a practical way to isolate the failing stage.'
    },
    {
      id: 'duel-08',
      type: 'mcq',
      title: 'Boundary Testing',
      prompt: 'A discount calculation works for most orders but fails for a few edge cases. What should you test first?',
      options: [
        'Only average order values',
        'Boundary values such as zero, minimum, maximum, null, empty cart, and threshold amounts',
        'Only the most expensive order',
        'Only orders created by employees'
      ],
      correctIndex: 1,
      explanation:
        'Many logic bugs appear at boundaries, thresholds, null states, and unusual input combinations.'
    },
    {
      id: 'duel-09',
      type: 'mcq',
      title: 'Flaky Test',
      prompt: 'A flaky test passes locally but fails in CI. Which cause is most worth checking first?',
      options: [
        'Whether the developer changed laptops',
        'Timing assumptions, shared state, test order dependency, or environment-specific behavior',
        'The company Wi-Fi password',
        'Whether the README is outdated'
      ],
      correctIndex: 1,
      explanation:
        'Flaky tests often point to race conditions, state leakage, timing issues, or environment differences.'
    },
    {
      id: 'duel-10',
      type: 'mcq',
      title: 'State Leakage',
      prompt: 'A test passes when run alone but fails when the full test suite runs. What is the most likely class of issue?',
      options: [
        'State leakage or order dependency between tests',
        'The test is too short',
        'The code editor is wrong',
        'The application has no bugs'
      ],
      correctIndex: 0,
      explanation:
        'Tests that depend on prior state or leave state behind often fail only when run with other tests.'
    },
    {
      id: 'duel-11',
      type: 'mcq',
      title: 'Customer Impact',
      prompt: 'A non-critical UI alignment bug is easy to fix, but a severe billing defect is harder to diagnose. What should be prioritized?',
      options: [
        'The easier fix',
        'The issue with higher customer, financial, compliance, or business impact',
        'Whichever engineer complains louder',
        'The issue with fewer logs'
      ],
      correctIndex: 1,
      explanation:
        'Debugging work should be prioritized by impact and risk, not convenience.'
    },
    {
      id: 'duel-12',
      type: 'mcq',
      title: 'Severity Judgment',
      prompt: 'Which scenario should generally receive the highest priority?',
      options: [
        'A spelling issue in an internal page',
        'A production bug causing duplicate customer charges',
        'A dashboard filter label is slightly misaligned',
        'A low-traffic marketing image fails to load'
      ],
      correctIndex: 1,
      explanation:
        'Customer financial harm and trust impact should be treated as high-priority.'
    },
    {
      id: 'duel-13',
      type: 'mcq',
      title: 'Patch Quality',
      prompt: 'Which debugging outcome is strongest after finding the root cause?',
      options: [
        'Hotfix only, with no validation',
        'A fix plus a regression test, monitoring, and clear verification steps',
        'Document the bug but skip the fix',
        'Close the task because the issue is understood'
      ],
      correctIndex: 1,
      explanation:
        'A durable fix includes validation and protection against recurrence.'
    },
    {
      id: 'duel-14',
      type: 'mcq',
      title: 'Regression Test',
      prompt: 'Why should a regression test be added after fixing a bug?',
      options: [
        'To prove the bug never existed',
        'To prevent the same bug from returning unnoticed',
        'To make the codebase larger only',
        'To replace all manual QA forever'
      ],
      correctIndex: 1,
      explanation:
        'A regression test captures the failing case so future changes do not reintroduce the issue.'
    },
    {
      id: 'duel-15',
      type: 'mcq',
      title: 'Performance Regression',
      prompt: 'API latency doubled after a release, but functionality still works. What is the best next move?',
      options: [
        'Treat it as normal because errors are low',
        'Compare traces, query plans, dependency calls, and recent code paths to identify the new bottleneck',
        'Rewrite the frontend',
        'Delete historical dashboards'
      ],
      correctIndex: 1,
      explanation:
        'Performance debugging relies on comparing degraded paths with the previous baseline.'
    },
    {
      id: 'duel-16',
      type: 'mcq',
      title: 'Trace Analysis',
      prompt: 'A distributed trace shows one downstream service consuming 85% of request time after a release. What should you investigate first?',
      options: [
        'The slow downstream call, its inputs, recent changes, retry behavior, and dependency health',
        'The company website footer',
        'Only the frontend button color',
        'Whether the project name changed'
      ],
      correctIndex: 0,
      explanation:
        'Traces help identify where time is spent, so the slow dependency path should be investigated first.'
    },
    {
      id: 'duel-17',
      type: 'mcq',
      title: 'Database Query Regression',
      prompt: 'A page became slow after adding a new filter. Database CPU is high. What is the strongest debugging move?',
      options: [
        'Remove all filters permanently',
        'Inspect query plan, indexes, cardinality, generated SQL, and data volume for the new filter',
        'Assume the browser is slow',
        'Increase frontend timeout only'
      ],
      correctIndex: 1,
      explanation:
        'Filter changes can create inefficient queries. Query plans and indexes are key signals.'
    },
    {
      id: 'duel-18',
      type: 'mcq',
      title: 'Memory Leak',
      prompt: 'Memory usage grows steadily after users navigate between pages, but never drops. What should you check?',
      options: [
        'Unreleased event listeners, timers, subscriptions, caches, and retained object references',
        'Only the CSS file',
        'Whether the logo is too large',
        'The number of comments in the code'
      ],
      correctIndex: 0,
      explanation:
        'Memory leaks often come from retained references such as listeners, timers, subscriptions, or unbounded caches.'
    },
    {
      id: 'duel-19',
      type: 'mcq',
      title: 'Assumption Check',
      prompt: 'Why is it risky to debug only from memory or intuition?',
      options: [
        'It is never risky',
        'Debugging without evidence can reinforce false assumptions and prolong the issue',
        'Documentation is illegal',
        'Logs always tell the full story'
      ],
      correctIndex: 1,
      explanation:
        'Strong debugging is evidence-driven. Intuition can guide hypotheses, but evidence should test them.'
    },
    {
      id: 'duel-20',
      type: 'mcq',
      title: 'Ownership',
      prompt: 'Multiple teams may be involved in a bug, but ownership is unclear. What should happen?',
      options: [
        'Wait for teams to volunteer',
        'Assign a clear owner to coordinate triage, evidence, decisions, and next actions',
        'Open a new team structure discussion immediately',
        'Pause all engineering work'
      ],
      correctIndex: 1,
      explanation:
        'Clear ownership is essential to keep debugging coordinated and fast.'
    },
    {
      id: 'duel-21',
      type: 'mcq',
      title: 'Production Mitigation',
      prompt: 'A production bug is actively blocking purchases. Engineers believe they know the root cause, but a safe feature flag can restore checkout immediately. What is best?',
      options: [
        'Keep investigating until the exact root cause is fully proven',
        'Use the safe feature flag to restore checkout, then continue root-cause analysis',
        'Wait for the next sprint',
        'Ignore the bug because the team has a theory'
      ],
      correctIndex: 1,
      explanation:
        'During active customer impact, safe mitigation should usually happen before perfect root-cause certainty.'
    },
    {
      id: 'duel-22',
      type: 'mcq',
      title: 'Rollback Decision',
      prompt: 'A release likely caused failures, and rollback is safe. What is the strongest move?',
      options: [
        'Rollback to restore service and investigate after stabilization',
        'Debug in production for several hours first',
        'Disable monitoring',
        'Close the incident because someone is looking'
      ],
      correctIndex: 0,
      explanation:
        'If rollback is safe and likely to reduce customer impact, restoration should be prioritized.'
    },
    {
      id: 'duel-23',
      type: 'mcq',
      title: 'Rollback Risk',
      prompt: 'When should rollback be handled carefully rather than automatically?',
      options: [
        'When the release involved irreversible data migrations or changed external contracts',
        'Whenever rollback is available',
        'Only when the UI changed color',
        'Never, rollback has no risk'
      ],
      correctIndex: 0,
      explanation:
        'Rollback can be risky when data, schemas, or external contracts have changed.'
    },
    {
      id: 'duel-24',
      type: 'mcq',
      title: 'Feature Flag Bug',
      prompt: 'A bug affects only customers with a new feature flag enabled. What is the most practical mitigation?',
      options: [
        'Disable the flag for affected customers while investigating',
        'Delete the entire feature branch',
        'Ignore unaffected customers',
        'Restart every service repeatedly'
      ],
      correctIndex: 0,
      explanation:
        'Feature flags allow targeted mitigation while preserving service for unaffected users.'
    },
    {
      id: 'duel-25',
      type: 'mcq',
      title: 'Configuration Drift',
      prompt: 'The same code works in staging but fails in production. What should be checked?',
      options: [
        'Environment variables, secrets, feature flags, data shape, network rules, dependency versions, and permissions',
        'Only the developer’s local theme',
        'The office internet speed',
        'Whether the ticket title is clear'
      ],
      correctIndex: 0,
      explanation:
        'Environment-specific bugs often come from configuration, permissions, data, or dependency differences.'
    },
    {
      id: 'duel-26',
      type: 'mcq',
      title: 'Data Shape Bug',
      prompt: 'A UI crashes for enterprise customers only. Logs show undefined fields in the customer payload. What is the best next step?',
      options: [
        'Assume enterprise customers are using the app wrong',
        'Compare payload schemas by customer type and add defensive handling or contract validation',
        'Remove enterprise customers from reports',
        'Hardcode one customer’s data'
      ],
      correctIndex: 1,
      explanation:
        'Segment-specific crashes often come from different data shapes, missing fields, or contract mismatch.'
    },
    {
      id: 'duel-27',
      type: 'mcq',
      title: 'Contract Mismatch',
      prompt: 'Frontend expects status = "active", but backend now returns status = "ACTIVE". What kind of bug is this?',
      options: [
        'API contract mismatch',
        'Memory leak',
        'CSS issue',
        'Authentication success'
      ],
      correctIndex: 0,
      explanation:
        'A change in expected values between systems is an API contract mismatch.'
    },
    {
      id: 'duel-28',
      type: 'mcq',
      title: 'Dependency Failure',
      prompt: 'A third-party API starts returning intermittent 503 errors. What should the team check first?',
      options: [
        'Retry strategy, timeout settings, circuit breaker behavior, provider status, and customer impact',
        'Only the product logo',
        'Whether the homepage headline changed',
        'The number of comments in the code'
      ],
      correctIndex: 0,
      explanation:
        'Dependency failures require investigation of resilience behavior, provider health, and user impact.'
    },
    {
      id: 'duel-29',
      type: 'mcq',
      title: 'Retry Storm',
      prompt: 'A failing dependency becomes more overloaded because callers keep retrying aggressively. What is the likely issue?',
      options: [
        'Retry storm',
        'Successful caching',
        'Correct pagination',
        'Strong rate limiting'
      ],
      correctIndex: 0,
      explanation:
        'Aggressive retries can amplify downstream failure and create a retry storm.'
    },
    {
      id: 'duel-30',
      type: 'mcq',
      title: 'Caching Bug',
      prompt: 'Users keep seeing old pricing after a pricing update. What should be investigated?',
      options: [
        'Cache invalidation, CDN TTL, browser cache, backend cache keys, and deployment timing',
        'Only the font size',
        'Only the number of engineers on the team',
        'Whether users like the new price'
      ],
      correctIndex: 0,
      explanation:
        'Stale data issues often come from cache invalidation, TTLs, cache keys, or CDN/browser caching behavior.'
    },
    {
      id: 'duel-31',
      type: 'mcq',
      title: 'Timezone Bug',
      prompt: 'A report shows transactions on the wrong day for users in India and Australia. What is the likely debugging area?',
      options: [
        'Timezone conversion, UTC storage, local display logic, and date boundaries',
        'Image compression',
        'Button hover states',
        'Unused CSS classes'
      ],
      correctIndex: 0,
      explanation:
        'Date bugs often come from timezone conversion, storage format, and boundary handling.'
    },
    {
      id: 'duel-32',
      type: 'mcq',
      title: 'Pagination Bug',
      prompt: 'A customer report misses records after page 1. What should be checked?',
      options: [
        'Pagination cursor, offset logic, sorting stability, filters, and API response handling',
        'Only the page title',
        'Only the navbar color',
        'The team’s sprint name'
      ],
      correctIndex: 0,
      explanation:
        'Missing paginated data often comes from cursor/offset errors, unstable sorting, or filter mismatch.'
    },
    {
      id: 'duel-33',
      type: 'mcq',
      title: 'Concurrency Bug',
      prompt: 'Two users edit the same record and one user’s changes disappear. What should be investigated?',
      options: [
        'Lost update due to concurrency control issue',
        'CSS specificity',
        'Image loading',
        'Typo in a label'
      ],
      correctIndex: 0,
      explanation:
        'Concurrent writes can overwrite changes without locking, version checks, or conflict resolution.'
    },
    {
      id: 'duel-34',
      type: 'mcq',
      title: 'Idempotency',
      prompt: 'A payment retry sometimes charges the customer twice. What concept is most relevant?',
      options: [
        'Idempotency keys',
        'Dark mode',
        'CSS reset',
        'Static typing only'
      ],
      correctIndex: 0,
      explanation:
        'Idempotency prevents duplicate side effects when the same operation is retried.'
    },
    {
      id: 'duel-35',
      type: 'mcq',
      title: 'Security Bug',
      prompt: 'A user can access another customer’s invoice by changing an ID in the URL. What is the likely issue?',
      options: [
        'Broken object-level authorization',
        'Slow frontend rendering',
        'Wrong button text',
        'Bad image optimization'
      ],
      correctIndex: 0,
      explanation:
        'The server must verify authorization for each object, not trust client-provided IDs.'
    },
    {
      id: 'duel-36',
      type: 'mcq',
      title: 'Observability Gap',
      prompt: 'A bug occurs in production, but there are no useful logs, metrics, or traces. What is the best long-term fix?',
      options: [
        'Add targeted observability around critical workflows and failure points',
        'Accept that production bugs cannot be understood',
        'Turn off alerts',
        'Only ask users to send screenshots'
      ],
      correctIndex: 0,
      explanation:
        'Durable debugging requires observability designed around important workflows and failure modes.'
    },
    {
      id: 'duel-37',
      type: 'mcq',
      title: 'Verification',
      prompt: 'After applying a fix, what is the strongest way to verify it?',
      options: [
        'Assume it worked because the code looks correct',
        'Re-run the original failing case, check relevant metrics, and confirm no related regression',
        'Close the ticket immediately',
        'Ask only one person if it feels better'
      ],
      correctIndex: 1,
      explanation:
        'A fix should be verified against the original failure and monitored for unintended side effects.'
    },
    {
      id: 'duel-38',
      type: 'mcq',
      title: 'Post-Fix Monitoring',
      prompt: 'A hotfix has been deployed for an intermittent production bug. What should happen next?',
      options: [
        'Monitor the specific failure rate, customer impact metrics, logs, and any new error patterns',
        'Delete all dashboards',
        'Stop watching because a fix was deployed',
        'Remove the regression test'
      ],
      correctIndex: 0,
      explanation:
        'Hotfixes need monitoring to confirm the issue is resolved and no new problem was introduced.'
    },
    {
      id: 'duel-39',
      type: 'mcq',
      title: 'Blameless Debugging',
      prompt: 'A bug was introduced by a code change that passed review. What is the best post-fix response?',
      options: [
        'Blame the engineer publicly',
        'Identify why the review, tests, or monitoring missed it and improve the system',
        'Never allow that engineer to ship again',
        'Ignore the failure because it is fixed'
      ],
      correctIndex: 1,
      explanation:
        'Strong teams improve the system that allowed the bug, rather than relying on blame.'
    },
    {
      id: 'duel-40',
      type: 'mcq',
      title: 'Advanced Debugging Judgment',
      prompt: 'A critical bug has multiple possible causes: recent deployment, data migration, cache change, and third-party API failures. What is the strongest debugging strategy?',
      options: [
        'Pick the most recent change and ignore all other signals',
        'Stabilize customer impact, build a timeline, test hypotheses against evidence, isolate variables, and verify the fix with monitoring',
        'Restart every service until the problem disappears',
        'Wait until the next sprint planning meeting'
      ],
      correctIndex: 1,
      explanation:
        'Advanced debugging requires mitigation, evidence-based hypothesis testing, variable isolation, and verified recovery.'
    }
  ]
};