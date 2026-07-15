import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Case Study / Business Problem assessment.
// Free-text cases progress from foundational business diagnostics to advanced
// analytics, experimentation, strategy, operations, risk, and executive decision-making.
export const caseStudyData = {
  id: ASSESSMENT_TYPES.caseStudy,
  title: 'Business Case Study & Analytical Thinking Certification',
  shortTitle: 'Case Study',
  category: 'Business analytics',
  durationMinutes: 120,
  pointsPerQuestion: 50,
  description:
    'Professional case-study assessment covering structured problem solving, business diagnostics, analytics framing, hypothesis building, metric design, trade-off thinking, communication, and executive recommendation skills.',
  instructions:
    'Write a structured answer. There is no single perfect answer. Strong responses define the business problem clearly, identify metrics, segment the issue, form hypotheses, describe analysis steps, consider trade-offs, recommend actions, and communicate clearly to leadership.',
  questions: [
    {
      id: 'case-01',
      type: 'free_text',
      title: 'Sales Drop Diagnosis',
      prompt:
        'A retail company reports that total sales dropped by 14% last quarter compared with the previous quarter. Leadership wants to know what happened and what to do next. Describe your investigation approach and how you would present the findings.',
      expectedOutput:
        'A structured diagnostic plan covering metric definition, baseline comparison, segmentation, hypotheses, data validation, root-cause analysis, business impact, recommendation, and executive communication.',
      rubric: [
        { label: 'Defines the sales metric, baseline, comparison period, and business context', points: 10, keywords: ['sales', 'baseline', 'quarter', 'comparison', 'metric'] },
        { label: 'Segments the decline by product, region, channel, customer type, and funnel stage', points: 10, keywords: ['segment', 'product', 'region', 'channel', 'customer', 'funnel'] },
        { label: 'Builds hypotheses around demand, pricing, competition, seasonality, inventory, and marketing', points: 10, keywords: ['hypothesis', 'demand', 'pricing', 'competition', 'seasonality', 'inventory'] },
        { label: 'Checks data quality, outliers, tracking changes, and external market context', points: 10, keywords: ['data quality', 'outlier', 'tracking', 'external', 'market'] },
        { label: 'Communicates root cause, confidence level, recommendation, and next actions clearly', points: 10, keywords: ['root cause', 'confidence', 'recommendation', 'action', 'leadership'] }
      ]
    },
    {
      id: 'case-02',
      type: 'free_text',
      title: 'First-Year Customer Churn',
      prompt:
        'A subscription business has rising churn among first-year customers, even though new signups are growing. Explain how you would analyze the problem and design a retention improvement plan.',
      expectedOutput:
        'A retention analytics plan covering churn definition, cohort analysis, customer segmentation, churn drivers, product usage, customer feedback, interventions, experiments, and success measurement.',
      rubric: [
        { label: 'Defines churn, retention, renewal, first-year cohort, and baseline performance', points: 10, keywords: ['churn', 'retention', 'renewal', 'cohort', 'baseline'] },
        { label: 'Segments customers by acquisition source, plan, tenure, usage, persona, and support history', points: 10, keywords: ['segment', 'source', 'plan', 'usage', 'persona', 'support'] },
        { label: 'Identifies possible drivers such as onboarding, product fit, price, engagement, and service quality', points: 10, keywords: ['onboarding', 'product fit', 'pricing', 'engagement', 'service'] },
        { label: 'Combines quantitative data with surveys, interviews, cancellation reasons, and feedback themes', points: 10, keywords: ['survey', 'interview', 'feedback', 'reason', 'qualitative'] },
        { label: 'Proposes targeted interventions, experiments, metrics, and monitoring plan', points: 10, keywords: ['intervention', 'experiment', 'metric', 'monitor', 'ltv'] }
      ]
    },
    {
      id: 'case-03',
      type: 'free_text',
      title: 'Checkout Abandonment Spike',
      prompt:
        'An e-commerce company sees checkout abandonment increase from 62% to 74% in two months. Describe how you would diagnose the issue and reduce abandonment.',
      expectedOutput:
        'A funnel diagnostic covering checkout step analysis, segmentation, friction points, technical issues, trust signals, payment failures, experiments, and revenue impact.',
      rubric: [
        { label: 'Defines checkout abandonment and maps each step of the funnel', points: 10, keywords: ['checkout', 'abandonment', 'funnel', 'step', 'conversion'] },
        { label: 'Segments by device, traffic source, geography, payment method, customer type, and cart value', points: 10, keywords: ['device', 'source', 'geography', 'payment', 'cart'] },
        { label: 'Builds hypotheses around friction, shipping cost, payment failure, trust, performance, and UX changes', points: 10, keywords: ['friction', 'shipping', 'payment', 'trust', 'performance', 'ux'] },
        { label: 'Validates with event tracking, error logs, session replay, customer feedback, and release history', points: 10, keywords: ['tracking', 'error', 'logs', 'session', 'release'] },
        { label: 'Recommends experiments, fixes, expected impact, and measurement approach', points: 10, keywords: ['experiment', 'fix', 'impact', 'measure', 'revenue'] }
      ]
    },
    {
      id: 'case-04',
      type: 'free_text',
      title: 'Paid Campaign Underperformance',
      prompt:
        'A paid marketing campaign is generating high clicks but very low conversions. The marketing head wants to know whether to pause, optimize, or scale the campaign. What would you analyze?',
      expectedOutput:
        'A campaign performance framework covering audience quality, intent, creative, landing page, tracking, attribution, funnel conversion, CAC, ROI, and budget recommendation.',
      rubric: [
        { label: 'Defines click-through rate, conversion rate, CAC, ROAS, ROI, and target benchmark', points: 10, keywords: ['ctr', 'conversion', 'cac', 'roas', 'roi', 'benchmark'] },
        { label: 'Segments by audience, channel, keyword, creative, device, landing page, and geography', points: 10, keywords: ['audience', 'channel', 'keyword', 'creative', 'landing', 'device'] },
        { label: 'Tests hypotheses around intent mismatch, weak landing page, offer quality, and funnel friction', points: 10, keywords: ['intent', 'mismatch', 'offer', 'funnel', 'friction'] },
        { label: 'Checks tracking quality, attribution, UTM setup, pixel firing, and conversion definitions', points: 10, keywords: ['tracking', 'attribution', 'utm', 'pixel', 'definition'] },
        { label: 'Recommends budget action, optimization tests, and decision criteria', points: 10, keywords: ['budget', 'pause', 'optimize', 'test', 'decision'] }
      ]
    },
    {
      id: 'case-05',
      type: 'free_text',
      title: 'Support Ticket Backlog',
      prompt:
        'A SaaS company reports that customer support backlog doubled in one month and customer complaints are increasing. How would you identify the root cause and recommend improvements?',
      expectedOutput:
        'A support operations analysis covering ticket volume, SLA, categories, backlog aging, staffing, product defects, routing, automation, knowledge base, and prevention.',
      rubric: [
        { label: 'Defines backlog, SLA, first response time, resolution time, reopen rate, and customer impact', points: 10, keywords: ['backlog', 'sla', 'response', 'resolution', 'reopen', 'customer'] },
        { label: 'Segments tickets by category, priority, product, customer tier, channel, and region', points: 10, keywords: ['category', 'priority', 'product', 'tier', 'channel', 'region'] },
        { label: 'Analyzes demand spike, staffing, routing, process gaps, product defects, and release issues', points: 10, keywords: ['demand', 'staffing', 'routing', 'process', 'defect', 'release'] },
        { label: 'Recommends triage, automation, knowledge base, escalation, staffing, or product fixes', points: 10, keywords: ['triage', 'automation', 'knowledge', 'escalation', 'staffing'] },
        { label: 'Defines monitoring dashboard, prevention plan, and accountability owners', points: 10, keywords: ['monitor', 'dashboard', 'prevent', 'owner', 'alert'] }
      ]
    },
    {
      id: 'case-06',
      type: 'free_text',
      title: 'Inventory Stockout Problem',
      prompt:
        'A retailer is losing sales because popular products are frequently out of stock, while other products have excess inventory. How would you solve this problem?',
      expectedOutput:
        'An inventory analytics approach covering stockout rate, fill rate, demand forecasting, SKU segmentation, replenishment, lead time, supplier performance, safety stock, and financial impact.',
      rubric: [
        { label: 'Defines stockout rate, fill rate, inventory turnover, lost sales, and service level', points: 10, keywords: ['stockout', 'fill rate', 'turnover', 'lost sales', 'service level'] },
        { label: 'Segments by SKU, store, category, supplier, season, region, and demand pattern', points: 10, keywords: ['sku', 'store', 'category', 'supplier', 'season', 'demand'] },
        { label: 'Analyzes forecast accuracy, replenishment rules, lead time, safety stock, and supplier reliability', points: 10, keywords: ['forecast', 'replenishment', 'lead time', 'safety stock', 'supplier'] },
        { label: 'Balances availability, working capital, markdown risk, and storage cost', points: 10, keywords: ['availability', 'capital', 'markdown', 'storage', 'trade-off'] },
        { label: 'Recommends process, forecasting, supplier, and monitoring improvements', points: 10, keywords: ['process', 'forecasting', 'supplier', 'monitor', 'dashboard'] }
      ]
    },
    {
      id: 'case-07',
      type: 'free_text',
      title: 'Pricing Change Evaluation',
      prompt:
        'Your company increased prices by 8% across selected products. Leadership wants to know whether the change was successful. Describe your evaluation approach.',
      expectedOutput:
        'A pricing analytics plan covering revenue, margin, volume, churn, customer segments, price elasticity, control groups, seasonality, competitor effects, and recommendation.',
      rubric: [
        { label: 'Defines success using revenue, margin, unit volume, churn, retention, and customer mix', points: 10, keywords: ['revenue', 'margin', 'volume', 'churn', 'retention'] },
        { label: 'Uses before-after, control group, cohort, or causal comparison carefully', points: 10, keywords: ['before', 'after', 'control', 'cohort', 'causal'] },
        { label: 'Segments impact by product, customer type, region, channel, and price sensitivity', points: 10, keywords: ['product', 'customer', 'region', 'channel', 'sensitivity'] },
        { label: 'Accounts for seasonality, promotions, competitor actions, and external market factors', points: 10, keywords: ['seasonality', 'promotion', 'competitor', 'external', 'market'] },
        { label: 'Recommends keep, rollback, segment-specific pricing, or further experiment with trade-offs', points: 10, keywords: ['recommend', 'rollback', 'experiment', 'elasticity', 'trade-off'] }
      ]
    },
    {
      id: 'case-08',
      type: 'free_text',
      title: 'NPS Decline',
      prompt:
        'Net Promoter Score fell from 48 to 31 over two quarters. The CEO wants a clear diagnosis and action plan. How would you approach this?',
      expectedOutput:
        'A customer experience analysis covering survey validity, segment-level NPS, text feedback, journey mapping, operational drivers, root-cause prioritization, and follow-up measurement.',
      rubric: [
        { label: 'Validates NPS calculation, sample size, survey timing, response bias, and baseline', points: 10, keywords: ['nps', 'sample', 'survey', 'bias', 'baseline'] },
        { label: 'Segments by customer type, product, journey stage, support experience, tenure, and region', points: 10, keywords: ['segment', 'customer', 'product', 'journey', 'support', 'tenure'] },
        { label: 'Analyzes feedback themes, detractor reasons, operational metrics, and recent business changes', points: 10, keywords: ['feedback', 'detractor', 'theme', 'operation', 'change'] },
        { label: 'Prioritizes root causes by customer impact, frequency, severity, and effort', points: 10, keywords: ['root cause', 'impact', 'frequency', 'severity', 'effort'] },
        { label: 'Proposes action plan, owners, timeline, and measurement loop', points: 10, keywords: ['action', 'owner', 'timeline', 'measure', 'follow-up'] }
      ]
    },
    {
      id: 'case-09',
      type: 'free_text',
      title: 'Fraud Spike in Payments',
      prompt:
        'A payments company sees a sudden increase in suspected fraud. Fraud losses are rising, but stricter controls may hurt good customers. Describe your analysis and response plan.',
      expectedOutput:
        'A fraud analytics response covering fraud rate, loss, false positives, segmentation, attack patterns, rules, models, customer friction, monitoring, and operational escalation.',
      rubric: [
        { label: 'Defines fraud rate, fraud loss, false positive rate, approval rate, and customer friction', points: 10, keywords: ['fraud', 'loss', 'false positive', 'approval', 'friction'] },
        { label: 'Segments by merchant, geography, payment method, customer type, device, and time pattern', points: 10, keywords: ['merchant', 'geography', 'payment', 'device', 'time'] },
        { label: 'Investigates attack pattern, rule performance, model drift, anomaly signals, and recent changes', points: 10, keywords: ['pattern', 'rule', 'model', 'drift', 'anomaly'] },
        { label: 'Balances fraud reduction with approval rate, customer experience, and operational workload', points: 10, keywords: ['balance', 'approval', 'experience', 'operation', 'trade-off'] },
        { label: 'Recommends controls, monitoring, escalation, and review cadence', points: 10, keywords: ['control', 'monitor', 'alert', 'escalation', 'review'] }
      ]
    },
    {
      id: 'case-10',
      type: 'free_text',
      title: 'Loan Default Risk',
      prompt:
        'A fintech lender wants to reduce loan defaults without reducing approval volume too aggressively. What would you analyze and recommend?',
      expectedOutput:
        'A credit risk case covering default definition, risk segmentation, approval rate, loss rate, thresholds, policy rules, fairness, compliance, portfolio economics, and monitoring.',
      rubric: [
        { label: 'Defines default, delinquency, approval rate, loss rate, expected loss, and profitability', points: 10, keywords: ['default', 'delinquency', 'approval', 'loss', 'profitability'] },
        { label: 'Segments borrowers by risk score, income, credit history, product, channel, and cohort', points: 10, keywords: ['borrower', 'score', 'income', 'credit', 'cohort'] },
        { label: 'Analyzes model thresholds, policy rules, features, stability, and reject inference limits', points: 10, keywords: ['threshold', 'policy', 'feature', 'model', 'stability'] },
        { label: 'Balances risk reduction, growth, fairness, regulatory compliance, and customer impact', points: 10, keywords: ['risk', 'growth', 'fairness', 'compliance', 'customer'] },
        { label: 'Proposes champion challenger testing, monitoring, and portfolio governance', points: 10, keywords: ['champion', 'challenger', 'monitor', 'portfolio', 'governance'] }
      ]
    },
    {
      id: 'case-11',
      type: 'free_text',
      title: 'New Market Entry Decision',
      prompt:
        'A food delivery company is considering entering a new city. You are asked to recommend whether to launch, delay, or reject the expansion. What analysis would you perform?',
      expectedOutput:
        'A market entry framework covering demand, market size, customer segments, competition, supply, unit economics, operational feasibility, launch risks, pilot plan, and decision criteria.',
      rubric: [
        { label: 'Defines decision criteria, success metrics, investment required, and launch constraints', points: 10, keywords: ['criteria', 'success', 'investment', 'constraint', 'decision'] },
        { label: 'Assesses demand, customer segments, TAM, frequency, willingness to pay, and local behavior', points: 10, keywords: ['demand', 'segment', 'tam', 'frequency', 'willingness'] },
        { label: 'Analyzes competition, differentiation, pricing, market maturity, and acquisition cost', points: 10, keywords: ['competition', 'differentiation', 'pricing', 'market', 'cac'] },
        { label: 'Evaluates supply, operations, delivery capacity, unit economics, and break-even path', points: 10, keywords: ['supply', 'operations', 'capacity', 'unit economics', 'break-even'] },
        { label: 'Recommends launch, pilot, delay, or reject with risks and monitoring plan', points: 10, keywords: ['launch', 'pilot', 'delay', 'risk', 'monitor'] }
      ]
    },
    {
      id: 'case-12',
      type: 'free_text',
      title: 'B2B Pipeline Quality',
      prompt:
        'A B2B sales team has more leads than before, but fewer closed deals. The CRO suspects lead quality is declining. What would you analyze?',
      expectedOutput:
        'A B2B funnel analysis covering lead source, qualification, MQL to SQL conversion, stage conversion, sales cycle, win rate, rep behavior, pricing, objections, and recommendations.',
      rubric: [
        { label: 'Defines funnel stages, MQL, SQL, win rate, cycle time, deal size, and conversion metrics', points: 10, keywords: ['funnel', 'mql', 'sql', 'win rate', 'cycle time'] },
        { label: 'Segments by lead source, industry, company size, region, product, campaign, and sales rep', points: 10, keywords: ['source', 'industry', 'company size', 'region', 'rep'] },
        { label: 'Assesses lead quality, qualification criteria, intent, fit, and handoff process', points: 10, keywords: ['quality', 'qualification', 'intent', 'fit', 'handoff'] },
        { label: 'Identifies issues in sales process, pricing, competition, product fit, or rep enablement', points: 10, keywords: ['process', 'pricing', 'competition', 'product fit', 'enablement'] },
        { label: 'Recommends scoring, routing, campaign changes, sales actions, and measurement plan', points: 10, keywords: ['scoring', 'routing', 'campaign', 'action', 'measure'] }
      ]
    },
    {
      id: 'case-13',
      type: 'free_text',
      title: 'High Performer Attrition',
      prompt:
        'A company notices that attrition is increasing among high-performing employees. HR leadership wants a data-driven retention plan. How would you approach this?',
      expectedOutput:
        'A people analytics case covering attrition definition, high-performer cohort, segmentation, compensation, manager effect, engagement, career growth, qualitative evidence, ethics, privacy, and interventions.',
      rubric: [
        { label: 'Defines attrition, regrettable attrition, high-performer cohort, and baseline', points: 10, keywords: ['attrition', 'regrettable', 'high performer', 'cohort', 'baseline'] },
        { label: 'Segments by role, manager, tenure, location, compensation, performance, and engagement', points: 10, keywords: ['role', 'manager', 'tenure', 'location', 'compensation'] },
        { label: 'Combines HR data with surveys, interviews, exit reasons, and engagement signals', points: 10, keywords: ['survey', 'interview', 'exit', 'engagement', 'feedback'] },
        { label: 'Recommends targeted actions such as career paths, manager coaching, compensation review, and workload fixes', points: 10, keywords: ['career', 'manager', 'compensation', 'workload', 'retention'] },
        { label: 'Addresses privacy, fairness, ethics, measurement, and unintended consequences', points: 10, keywords: ['privacy', 'fairness', 'ethics', 'measure', 'consequence'] }
      ]
    },
    {
      id: 'case-14',
      type: 'free_text',
      title: 'Hospital Emergency Wait Times',
      prompt:
        'A hospital wants to reduce emergency department wait times without compromising patient safety. Explain your diagnostic and improvement approach.',
      expectedOutput:
        'A healthcare operations framework covering wait time metrics, triage, arrival patterns, acuity, staffing, bed capacity, bottlenecks, patient outcomes, safety guardrails, and monitoring.',
      rubric: [
        { label: 'Defines wait time, length of stay, triage time, left-without-being-seen rate, and safety metrics', points: 10, keywords: ['wait time', 'length of stay', 'triage', 'safety', 'metric'] },
        { label: 'Segments by acuity, arrival time, department, patient type, staffing, and bed availability', points: 10, keywords: ['acuity', 'arrival', 'department', 'staffing', 'bed'] },
        { label: 'Identifies bottlenecks in triage, diagnostics, physician availability, discharge, and bed turnover', points: 10, keywords: ['bottleneck', 'diagnostic', 'physician', 'discharge', 'turnover'] },
        { label: 'Recommends process, staffing, routing, fast-track, and capacity improvements', points: 10, keywords: ['process', 'staffing', 'routing', 'fast-track', 'capacity'] },
        { label: 'Includes patient safety guardrails, monitoring, and change management plan', points: 10, keywords: ['safety', 'monitor', 'dashboard', 'change', 'quality'] }
      ]
    },
    {
      id: 'case-15',
      type: 'free_text',
      title: 'Manufacturing Defect Rate',
      prompt:
        'A factory defect rate increased after a new process change. Production leadership wants the root cause and corrective action plan. What would you do?',
      expectedOutput:
        'A manufacturing quality analysis covering defect definition, process timeline, before-after comparison, segmentation, root-cause methods, containment, corrective action, controls, and monitoring.',
      rubric: [
        { label: 'Defines defect rate, severity, process change timeline, baseline, and quality target', points: 10, keywords: ['defect', 'severity', 'process', 'timeline', 'baseline'] },
        { label: 'Segments by defect type, production line, machine, operator, shift, supplier, and batch', points: 10, keywords: ['type', 'line', 'machine', 'operator', 'shift', 'supplier'] },
        { label: 'Uses root-cause tools such as Pareto, 5 Whys, control charts, and before-after analysis', points: 10, keywords: ['pareto', '5 whys', 'control chart', 'before', 'after'] },
        { label: 'Recommends containment, corrective actions, process rollback, training, or supplier fixes', points: 10, keywords: ['containment', 'corrective', 'rollback', 'training', 'supplier'] },
        { label: 'Defines monitoring, prevention controls, accountability, and success metrics', points: 10, keywords: ['monitor', 'prevention', 'control', 'owner', 'metric'] }
      ]
    },
    {
      id: 'case-16',
      type: 'free_text',
      title: 'A/B Test Interpretation',
      prompt:
        'An A/B test shows that the treatment increased conversion from 10.0% to 10.7%, but the sample size is small and the result is not statistically significant. The product manager wants to launch anyway. How would you respond?',
      expectedOutput:
        'An experimentation judgment answer covering hypothesis, sample size, statistical significance, confidence, practical significance, risk, guardrails, decision options, and follow-up testing.',
      rubric: [
        { label: 'Defines hypothesis, control, treatment, conversion metric, sample size, and test duration', points: 10, keywords: ['hypothesis', 'control', 'treatment', 'conversion', 'sample'] },
        { label: 'Explains statistical significance, confidence, power, uncertainty, and risk of false conclusions', points: 10, keywords: ['significance', 'confidence', 'power', 'uncertainty', 'risk'] },
        { label: 'Considers practical significance, business impact, downside risk, and user experience', points: 10, keywords: ['practical', 'impact', 'downside', 'experience', 'business'] },
        { label: 'Recommends a decision path such as continue test, limited rollout, guardrails, or redesign', points: 10, keywords: ['continue', 'rollout', 'guardrail', 'redesign', 'decision'] },
        { label: 'Communicates trade-offs clearly to the product manager and stakeholders', points: 10, keywords: ['trade-off', 'stakeholder', 'communicate', 'recommendation', 'decision'] }
      ]
    },
    {
      id: 'case-17',
      type: 'free_text',
      title: 'GenAI Customer Support ROI',
      prompt:
        'A company wants to deploy a GenAI assistant to reduce customer support cost. Leadership asks whether the project is worth funding. How would you evaluate the business case?',
      expectedOutput:
        'A GenAI ROI case covering use cases, baseline support cost, automation rate, accuracy, escalation, customer experience, risk, compliance, implementation cost, monitoring, and rollout plan.',
      rubric: [
        { label: 'Defines target use cases, baseline support volume, cost per ticket, SLA, and quality metrics', points: 10, keywords: ['use case', 'baseline', 'volume', 'cost', 'sla'] },
        { label: 'Estimates automation rate, deflection, escalation, handle time reduction, and productivity impact', points: 10, keywords: ['automation', 'deflection', 'escalation', 'handle time', 'productivity'] },
        { label: 'Evaluates answer quality, hallucination risk, customer experience, and human-in-the-loop needs', points: 10, keywords: ['quality', 'hallucination', 'experience', 'human', 'review'] },
        { label: 'Considers implementation cost, integration, compliance, privacy, security, and change management', points: 10, keywords: ['cost', 'integration', 'compliance', 'privacy', 'security'] },
        { label: 'Recommends pilot, success metrics, monitoring, guardrails, and rollout decision criteria', points: 10, keywords: ['pilot', 'metric', 'monitor', 'guardrail', 'rollout'] }
      ]
    },
    {
      id: 'case-18',
      type: 'free_text',
      title: 'Cloud Cost Optimization',
      prompt:
        'Cloud infrastructure cost increased by 35% while user growth was flat. The CTO wants a plan to reduce cost without hurting reliability. What would you analyze and recommend?',
      expectedOutput:
        'A cloud cost analytics approach covering cost baseline, usage, unit economics, service breakdown, waste, idle resources, overprovisioning, rightsizing, commitments, governance, monitoring, and reliability trade-offs.',
      rubric: [
        { label: 'Defines total cost, unit cost, usage baseline, budget variance, and business impact', points: 10, keywords: ['cost', 'unit cost', 'usage', 'baseline', 'budget'] },
        { label: 'Segments spend by service, team, environment, workload, region, and resource owner', points: 10, keywords: ['service', 'team', 'environment', 'workload', 'region'] },
        { label: 'Identifies waste such as idle resources, overprovisioning, unused storage, logs, and inefficient scaling', points: 10, keywords: ['idle', 'overprovision', 'storage', 'logs', 'waste'] },
        { label: 'Recommends rightsizing, scheduling, reserved commitments, storage lifecycle, and governance actions', points: 10, keywords: ['rightsizing', 'reserved', 'lifecycle', 'governance', 'schedule'] },
        { label: 'Balances cost reduction with reliability, performance, ownership, alerts, and accountability', points: 10, keywords: ['reliability', 'performance', 'owner', 'alert', 'accountability'] }
      ]
    },
    {
      id: 'case-19',
      type: 'free_text',
      title: 'Legacy Platform Modernization',
      prompt:
        'A company is deciding whether to modernize a legacy internal platform, replace it with a SaaS tool, or keep maintaining it. How would you structure the recommendation?',
      expectedOutput:
        'A build-vs-buy modernization framework covering current-state pain points, total cost of ownership, business requirements, risk, integration complexity, security, migration, change management, and decision criteria.',
      rubric: [
        { label: 'Defines business problem, current-state pain points, users, critical workflows, and success criteria', points: 10, keywords: ['problem', 'current state', 'workflow', 'user', 'success'] },
        { label: 'Compares modernize, replace, and maintain options using cost, value, timeline, and risk', points: 10, keywords: ['modernize', 'replace', 'maintain', 'cost', 'risk'] },
        { label: 'Evaluates integration, data migration, security, compliance, customization, and vendor lock-in', points: 10, keywords: ['integration', 'migration', 'security', 'compliance', 'vendor'] },
        { label: 'Considers operational impact, adoption, training, support model, and change management', points: 10, keywords: ['operation', 'adoption', 'training', 'support', 'change'] },
        { label: 'Provides a clear recommendation with phased roadmap and decision trade-offs', points: 10, keywords: ['recommendation', 'roadmap', 'phase', 'trade-off', 'decision'] }
      ]
    },
    {
      id: 'case-20',
      type: 'free_text',
      title: 'Marketplace Profitability',
      prompt:
        'A two-sided marketplace is growing transactions quickly, but profitability is declining. The CEO wants to know whether the growth is healthy. What would you analyze?',
      expectedOutput:
        'An advanced marketplace economics case covering GMV, take rate, contribution margin, supply-demand balance, incentives, acquisition cost, retention, cohort profitability, liquidity, and strategic trade-offs.',
      rubric: [
        { label: 'Defines GMV, revenue, take rate, contribution margin, CAC, retention, and cohort profitability', points: 10, keywords: ['gmv', 'take rate', 'margin', 'cac', 'retention'] },
        { label: 'Segments by buyer, seller, geography, category, channel, cohort, and transaction size', points: 10, keywords: ['buyer', 'seller', 'geography', 'category', 'cohort'] },
        { label: 'Analyzes supply-demand liquidity, incentives, discounting, acquisition quality, and repeat behavior', points: 10, keywords: ['liquidity', 'incentive', 'discount', 'quality', 'repeat'] },
        { label: 'Evaluates whether growth is profitable, subsidized, scalable, and strategically defensible', points: 10, keywords: ['profitable', 'subsidized', 'scalable', 'defensible', 'strategy'] },
        { label: 'Recommends growth, pricing, incentive, category, or market actions with trade-offs', points: 10, keywords: ['growth', 'pricing', 'incentive', 'category', 'trade-off'] }
      ]
    }
  ]
};