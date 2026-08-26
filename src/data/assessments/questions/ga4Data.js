import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import acquisitionDashboardImage from '../../../assets/assessments/ga4/acquisition_dashboard.png';
import funnelDashboardImage from '../../../assets/assessments/ga4/funnel_dashboard.png';
import eventAuditImage from '../../../assets/assessments/ga4/event_audit.png';
import bigqueryCompareImage from '../../../assets/assessments/ga4/bigquery_compare.png';
import utmAuditImage from '../../../assets/assessments/ga4/utm_audit.png';
import measurementFlowImage from '../../../assets/assessments/ga4/measurement_flow.png';

export const ga4Data = {
  id: ASSESSMENT_TYPES.ga4,
  title: 'Google Analytics 4 Professional Certification',
  shortTitle: 'GA4',
  category: 'Marketing',
  durationMinutes: 75,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: 'Professional GA4 assessment covering event-based measurement, key events, parameters, funnels, attribution, consent-aware measurement, BigQuery, e-commerce, acquisition quality, implementation QA, and analytics governance.',
  instructions: '40 scenario-based questions, 75 minutes, 200 marks. Use the dashboards, charts, tables, image exhibits, and process diagrams. Choose the strongest professional response.',
  questions: [
    {
      id: 'ga-01',
      type: 'mcq',
      title: 'Acquisition Quality',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the dashboard.\n\n{{image}}\n\nTraffic grew strongly but leads barely moved. Which channel deserves the first quality review?`,
      image: { src: acquisitionDashboardImage, alt: 'GA4 acquisition dashboard' },
      options: ['Email, because it has the strongest key-event rate.', 'Social, because it has the lowest engagement and key-event rate.', 'Organic, because it has high engagement.', 'All channels are equally healthy.'],
      correctIndex: 1,
      explanation: 'Correct: B. Social combines weak engagement and the lowest key-event rate. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-02',
      type: 'mcq',
      title: 'Funnel Drop-off',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the checkout funnel.\n\n{{image}}\n\nWhere is the strongest optimization opportunity?`,
      image: { src: funnelDashboardImage, alt: 'GA4 checkout funnel dashboard' },
      options: ['Desktop, because it converts better.', 'View Item, because every funnel starts there.', 'Remove purchase tracking.', 'Mobile checkout completion, because mobile conversion is materially lower and checkout abandonment is highlighted.'],
      correctIndex: 3,
      explanation: 'Correct: D. The exhibit identifies mobile checkout as the largest abandonment area. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-03',
      type: 'mcq',
      title: 'Duplicate Events',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the event audit.\n\n{{image}}\n\nWhat is the strongest diagnosis for page_view?`,
      image: { src: eventAuditImage, alt: 'GA4 event implementation audit' },
      options: ['Two implementations are firing the same event and should be deduplicated at the tagging layer.', 'GA4 always doubles page_view automatically.', 'Purchases should be removed.', 'Enhanced measurement duplicates every event type.'],
      correctIndex: 0,
      explanation: 'Correct: A. The note shows Google tag plus custom GTM tag firing page_view. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-04',
      type: 'mcq',
      title: 'BigQuery Comparison',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the comparison dashboard.\n\n{{image}}\n\nIs a 2.7% difference automatically proof of broken tracking?`,
      image: { src: bigqueryCompareImage, alt: 'GA4 UI vs BigQuery comparison' },
      options: ['Yes, GA4 and BigQuery must always match exactly.', 'Delete the BigQuery export.', 'No. Verify stream/event exclusions and settings, then recognize that small UI-vs-raw-export differences can occur.', 'Change the timezone until values match.'],
      correctIndex: 2,
      explanation: 'Correct: C. Raw BigQuery events can differ from processed GA4 reporting. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-05',
      type: 'mcq',
      title: 'UTM Governance',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the campaign audit.\n\n{{image}}\n\nWhat is the strongest correction?`,
      image: { src: utmAuditImage, alt: 'GA4 UTM governance audit' },
      options: ['Standardize source/medium/campaign naming conventions and enforce them before campaign launch.', 'Leave casing inconsistent because GA4 normalizes everything.', 'Remove all UTMs.', 'Use campaign names only in ad copy.'],
      correctIndex: 0,
      explanation: 'Correct: A. Inconsistent casing and delimiters fragment acquisition dimensions. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-06',
      type: 'mcq',
      title: 'Event-Based Model',
      difficulty: 'easy',
      points: 5,
      prompt: `What is the core GA4 data-model concept?`,
      options: ['Everything is stored only as pageviews.', 'GA4 has no sessions.', 'User interactions are collected primarily as events with parameters.', 'Metrics are stored only in cookies.'],
      correctIndex: 2,
      explanation: 'Correct: C. GA4 is event-based. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-07',
      type: 'mcq',
      title: 'Key Events',
      difficulty: 'easy',
      points: 5,
      prompt: `What is a key event in current GA4 terminology?`,
      options: ['Every automatically collected event.', 'Only a page title.', 'A deleted audience.', 'An event marked as especially important to business measurement.'],
      correctIndex: 3,
      explanation: 'Correct: D. Key events represent important actions such as leads or purchases. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-08',
      type: 'mcq',
      title: 'Event Parameters',
      difficulty: 'medium',
      points: 5,
      prompt: `Why add parameters such as value, method, item_id, or plan_type?`,
      options: ['They replace the event name.', 'They provide context that makes events analyzable and segmentable.', 'They create new properties automatically.', 'They only change report colors.'],
      correctIndex: 1,
      explanation: 'Correct: B. Parameters enrich event meaning. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-09',
      type: 'mcq',
      title: 'Recommended Events',
      difficulty: 'medium',
      points: 5,
      prompt: `Why prefer recommended event names when they fit the business action?`,
      options: ['They prevent BigQuery export.', 'They hide events from reports.', 'They improve implementation consistency and align with predefined GA4 semantics.', 'They are mandatory for every custom action.'],
      correctIndex: 2,
      explanation: 'Correct: C. Recommended event naming improves consistency. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-10',
      type: 'mcq',
      title: 'Custom Dimensions',
      difficulty: 'medium',
      points: 5,
      prompt: `A custom event parameter is being sent but cannot be used easily in GA4 reports. What should be considered?`,
      options: ['Register an appropriate custom dimension/metric for reporting.', 'Change the Measurement ID.', 'Create a new website.', 'Delete the event.'],
      correctIndex: 0,
      explanation: 'Correct: A. Registration exposes custom parameters in GA4 reporting surfaces. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-11',
      type: 'mcq',
      title: 'Enhanced Measurement',
      difficulty: 'medium',
      points: 5,
      prompt: `What should be checked before separately tagging scroll or outbound_click events?`,
      options: ['Whether the website uses CSS.', 'Whether Enhanced Measurement already collects the interaction, to avoid duplication.', 'Whether users have accounts.', 'Whether BigQuery is enabled.'],
      correctIndex: 1,
      explanation: 'Correct: B. Overlapping auto and custom collection can duplicate events. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-12',
      type: 'mcq',
      title: 'DebugView',
      difficulty: 'medium',
      points: 5,
      prompt: `What is DebugView best for?`,
      options: ['Changing attribution models.', 'Deleting users.', 'Creating invoices.', 'Validating events and parameters from a debug device/session before trusting production reports.'],
      correctIndex: 3,
      explanation: 'Correct: D. DebugView provides implementation-level validation. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-13',
      type: 'mcq',
      title: 'Data Streams',
      difficulty: 'easy',
      points: 5,
      prompt: `What does a GA4 data stream represent?`,
      options: ['A dashboard tab.', 'A user role.', 'A campaign.', 'A web, iOS, or Android source sending data into a property.'],
      correctIndex: 3,
      explanation: 'Correct: D. Streams are collection sources. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-14',
      type: 'mcq',
      title: 'Cross-Domain Measurement',
      difficulty: 'hard',
      points: 5,
      prompt: `A checkout occurs on a second related domain and journeys split into separate sessions. Strongest fix?`,
      options: ['Remove all referral data.', 'Configure cross-domain measurement so linker/client identity persists appropriately across the related domains.', 'Create a second property only.', 'Mark every page_view as a key event.'],
      correctIndex: 1,
      explanation: 'Correct: B. Cross-domain measurement preserves journey continuity. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-15',
      type: 'mcq',
      title: 'Internal Traffic',
      difficulty: 'medium',
      points: 5,
      prompt: `Why define internal/developer traffic?`,
      options: ['To improve page speed.', 'To generate ad campaigns.', 'To identify and optionally filter traffic that would otherwise distort business reporting.', 'To collect employee passwords.'],
      correctIndex: 2,
      explanation: 'Correct: C. Internal usage can bias acquisition and engagement metrics. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-16',
      type: 'mcq',
      title: 'Consent-Aware Measurement',
      difficulty: 'hard',
      points: 5,
      prompt: `What is the strongest role of consent-aware measurement?`,
      options: ['Adjust tag behavior/data collection based on user consent choices while supporting privacy-aware measurement.', 'Force users to accept cookies.', 'Bypass regional privacy requirements.', 'Collect all identifiers regardless of consent.'],
      correctIndex: 0,
      explanation: 'Correct: A. Consent-aware measurement aligns collection behavior with consent state. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-17',
      type: 'mcq',
      title: 'Attribution',
      difficulty: 'hard',
      points: 5,
      prompt: `Why can a GA4 attributed channel result differ from a raw last-click warehouse report?`,
      options: ['GA4 ignores campaigns.', 'The GA4 reporting model can assign credit using configured/model-based attribution rather than simple last click.', 'GA4 counts only direct traffic.', 'BigQuery cannot contain events.'],
      correctIndex: 1,
      explanation: 'Correct: B. Attribution methodology changes conversion credit. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-18',
      type: 'mcq',
      title: 'Explorations',
      difficulty: 'medium',
      points: 5,
      prompt: `Which question is best suited to Explorations?`,
      options: ['What is the property name?', 'What is the Measurement ID format?', 'How to edit website CSS.', 'Where users drop out of a multi-step signup funnel by device and channel.'],
      correctIndex: 3,
      explanation: 'Correct: D. Explorations support flexible funnel/path/segment analysis. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-19',
      type: 'mcq',
      title: 'Path Exploration',
      difficulty: 'medium',
      points: 5,
      prompt: `What does path analysis help answer?`,
      options: ['What users do before or after a selected event/page node.', 'How much server RAM is available.', 'How to change consent text.', 'How to edit a Google Ads bid.'],
      correctIndex: 0,
      explanation: 'Correct: A. Path analysis explores sequences of user actions. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-20',
      type: 'mcq',
      title: 'Cohort Analysis',
      difficulty: 'hard',
      points: 5,
      prompt: `What business question fits a cohort analysis?`,
      options: ['Which page has the most pixels?', 'Which campaign name is longest?', 'Do users acquired in different weeks retain or purchase at different rates over time?', 'How many GTM containers exist?'],
      correctIndex: 2,
      explanation: 'Correct: C. Cohorts compare groups across time since acquisition/behavior. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-21',
      type: 'mcq',
      title: 'Funnel Interpretation',
      difficulty: 'hard',
      points: 5,
      prompt: `Study the funnel.\n\n{{chart}}\n\nWhich transition has the largest proportional loss?`,
      chart: { type: 'bar', title: 'Funnel Users', categories: ['View Item','Add to Cart','Checkout','Purchase'], series: [{ name: 'Users', data: [92000,31000,18000,8200] }] },
      options: ['Add to Cart → Checkout.', 'Checkout → Purchase.', 'View Item → Add to Cart.', 'All steps lose the same percentage.'],
      correctIndex: 2,
      explanation: 'Correct: C. The first transition loses the greatest share of users. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-22',
      type: 'mcq',
      title: 'Audience Strategy',
      difficulty: 'medium',
      points: 5,
      prompt: `A retailer wants users who viewed a product 3+ times but have not purchased. Strongest GA4 feature?`,
      options: ['Create a behavioral audience using inclusion and exclusion conditions.', 'Create a new data stream.', 'Change property timezone.', 'Delete purchase events.'],
      correctIndex: 0,
      explanation: 'Correct: A. Audiences group users by behavior/attributes. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-23',
      type: 'mcq',
      title: 'E-commerce Items',
      difficulty: 'hard',
      points: 5,
      prompt: `Why is item-level purchase data essential?`,
      options: ['It replaces transaction_id.', 'It prevents refunds.', 'It makes attribution unnecessary.', 'It supports product/category/quantity/item revenue analysis instead of only transaction totals.'],
      correctIndex: 3,
      explanation: 'Correct: D. Item arrays power product-level e-commerce analysis. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-24',
      type: 'mcq',
      title: 'transaction_id',
      difficulty: 'hard',
      points: 5,
      prompt: `Why is transaction_id important in purchase measurement?`,
      options: ['It must equal user_id.', 'It helps identify unique transactions and reduce duplicate purchase processing/reporting.', 'It sets campaign attribution.', 'It controls consent.'],
      correctIndex: 1,
      explanation: 'Correct: B. Transaction identity is critical to purchase deduplication. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-25',
      type: 'mcq',
      title: 'BigQuery Export',
      difficulty: 'medium',
      points: 5,
      prompt: `What is the main value of GA4 BigQuery export?`,
      options: ['Replace website tagging.', 'Access raw event-level data for SQL analysis and joining with other business data.', 'Create CSS.', 'Avoid all privacy controls.'],
      correctIndex: 1,
      explanation: 'Correct: B. BigQuery enables raw-event analytical workflows. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-26',
      type: 'mcq',
      title: 'Raw vs UI Data',
      difficulty: 'hard',
      points: 5,
      prompt: `Why should analysts document differences between GA4 UI metrics and BigQuery calculations?`,
      options: ['BigQuery randomly deletes events.', 'The UI never contains events.', 'GA4 uses only sampled data.', 'The UI may apply processing, identity, attribution, modeling, and reporting logic not present in raw exports.'],
      correctIndex: 3,
      explanation: 'Correct: D. Raw and modeled/reporting layers are not always identical. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-27',
      type: 'mcq',
      title: 'Retention',
      difficulty: 'medium',
      points: 5,
      prompt: `What does GA4 data retention mainly affect?`,
      options: ['Availability of user/event-level data for explorations and certain analyses over time.', 'Whether tags fire.', 'Website uptime.', 'Campaign naming.'],
      correctIndex: 0,
      explanation: 'Correct: A. Retention settings affect detailed historical analysis. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-28',
      type: 'mcq',
      title: 'Thresholding',
      difficulty: 'hard',
      points: 5,
      prompt: `Why can privacy thresholding affect a report?`,
      options: ['Because the website is offline.', 'Because the Measurement ID expired.', 'To reduce risk of identifying individuals when data is sparse under certain reporting identities/settings.', 'Because BigQuery is full.'],
      correctIndex: 2,
      explanation: 'Correct: C. Thresholding is a privacy-protection mechanism. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-29',
      type: 'mcq',
      title: 'Session Quality',
      difficulty: 'medium',
      points: 5,
      prompt: `Sessions rise 40% but engaged sessions rise 5%. What should be investigated?`,
      options: ['Only total users.', 'Nothing, because sessions are higher.', 'Delete engagement metrics.', 'Traffic-source quality, landing pages, bot/internal traffic, tagging changes, and engagement definition impacts.'],
      correctIndex: 3,
      explanation: 'Correct: D. Volume without engagement may indicate lower-quality traffic or measurement changes. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-30',
      type: 'mcq',
      title: 'Landing Page Analysis',
      difficulty: 'medium',
      points: 5,
      prompt: `A paid campaign has many sessions but weak lead rate. Strongest next analysis?`,
      options: ['Increase the campaign budget immediately.', 'Compare landing-page engagement, funnel progression, device mix, and campaign intent.', 'Ignore lead rate.', 'Remove UTMs.'],
      correctIndex: 1,
      explanation: 'Correct: B. Acquisition quality must be connected to on-site behavior. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-31',
      type: 'mcq',
      title: 'Measurement Plan',
      difficulty: 'hard',
      points: 5,
      prompt: `What should a strong GA4 measurement plan define?`,
      options: ['Business questions, events, parameters, key events, naming rules, owners, validation, privacy requirements, and reporting use.', 'Only the Measurement ID.', 'Only page_view.', 'Only dashboard colors.'],
      correctIndex: 0,
      explanation: 'Correct: A. Measurement design must connect business goals to implementation and governance. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-32',
      type: 'mcq',
      title: 'Event Naming',
      difficulty: 'hard',
      points: 5,
      prompt: `What is strongest for custom event naming?`,
      options: ['Use random names per developer.', 'Rename events every sprint.', 'Use stable, documented, lower-case conventions aligned to business semantics and avoid unnecessary event proliferation.', 'Put all context into event_name.'],
      correctIndex: 2,
      explanation: 'Correct: C. Governed event taxonomies improve reliability. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-33',
      type: 'mcq',
      title: 'SPA Tracking',
      difficulty: 'hard',
      points: 5,
      prompt: `A single-page application changes routes without full page loads. What should be tested?`,
      options: ['Whether cookies are disabled globally.', 'Whether page_view/history-change logic records route transitions exactly once with correct page parameters.', 'Whether every click is a purchase.', 'Whether BigQuery is in the same region.'],
      correctIndex: 1,
      explanation: 'Correct: B. SPA navigation often requires deliberate page-view handling. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-34',
      type: 'mcq',
      title: 'Server-Side Measurement',
      difficulty: 'hard',
      points: 5,
      prompt: `What is a key reason to consider server-side/event ingestion patterns?`,
      options: ['Bypass consent.', 'Guarantee perfect attribution.', 'Eliminate client-side validation.', 'Improve control over measurement flows and integration, while still enforcing consent/privacy and deduplication.'],
      correctIndex: 3,
      explanation: 'Correct: D. Server-side collection changes architecture, not governance obligations. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-35',
      type: 'mcq',
      title: 'Anomaly Investigation',
      difficulty: 'hard',
      points: 5,
      prompt: `Key-event rate doubles overnight with no business change. Strongest response?`,
      options: ['Celebrate immediately.', "Delete yesterday's data.", 'Check release history, tag changes, duplicate firing, event definitions, traffic mix, and raw event evidence before declaring success.', 'Change attribution model until rate returns to normal.'],
      correctIndex: 2,
      explanation: 'Correct: C. Sudden KPI shifts often come from implementation changes. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-36',
      type: 'mcq',
      title: 'Measurement Flow',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the flow.\n\n{{image}}\n\nWhere should implementation QA happen?`,
      image: { src: measurementFlowImage, alt: 'GA4 measurement flow' },
      options: ['Between event collection and business reporting, validating names, parameters, counts, and key-event logic.', 'Only after executive decisions are made.', 'Never if tags fire.', 'Only in advertising platforms.'],
      correctIndex: 0,
      explanation: 'Correct: A. Measurement QA should occur before reported metrics are trusted. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-37',
      type: 'mcq',
      title: 'Executive GA4 Dashboard',
      difficulty: 'hard',
      points: 5,
      prompt: `Which dashboard design is strongest?`,
      options: ['Only Users and Sessions.', 'Every available GA4 metric on one page.', 'Only real-time events.', 'Acquisition quality, engagement, funnel/key-event outcomes, revenue/value, attribution context, and data-quality indicators tied to business questions.'],
      correctIndex: 3,
      explanation: 'Correct: D. Executive reporting should connect traffic to outcomes and measurement health. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-38',
      type: 'mcq',
      title: 'GA4 Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `Multiple teams create events independently and definitions conflict. Strongest response?`,
      options: ['Let each team keep private definitions.', 'Create a governed event dictionary, naming standards, ownership, release QA, and change-control process.', 'Rename events after collection with no documentation.', 'Use dashboards to hide inconsistencies.'],
      correctIndex: 1,
      explanation: 'Correct: B. Governance prevents taxonomy drift. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not C: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-39',
      type: 'mcq',
      title: 'Advanced GA4 Judgment',
      difficulty: 'hard',
      points: 5,
      prompt: `Traffic is up, leads are flat, purchase value is down, and page_view doubled after a release. Strongest response?`,
      options: ['Assume marketing improved because traffic rose.', 'Optimize only the homepage.', 'Separate measurement defects from real behavior: audit duplicate events, validate key events/e-commerce, analyze channel/funnel quality, and reconcile with raw/business data.', 'Ignore measurement and focus on total users.'],
      correctIndex: 2,
      explanation: 'Correct: C. Business interpretation must first distinguish tracking change from user-behavior change. Why not A: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not B: it does not best fit the scenario, measurement/governance logic, or professional practice. Why not D: it does not best fit the scenario, measurement/governance logic, or professional practice.'
    },
    {
      id: 'ga-40',
      type: 'mcq',
      title: 'GA4 Measurement Governance',
      difficulty: 'hard',
      points: 5,
      prompt: `A company has three websites, two apps, multiple agencies, and no shared event dictionary. The same business action is tracked under four different event names.

What is the strongest remediation?`,
      options: ['Create a governed measurement specification covering event names, parameters, key-event rules, streams, ownership, QA, privacy, and change control across teams.', 'Let each agency keep its own taxonomy and reconcile manually each quarter.', 'Mark all four event names as key events and add them together.', 'Move every property into a separate account and avoid shared standards.'],
      correctIndex: 0,
      explanation: 'Correct: A. A cross-platform measurement program needs shared taxonomy, ownership, QA, and change governance. Why not B: independent taxonomies create permanent reconciliation and attribution problems. Why not C: summing differently defined events can double-count or mix semantics. Why not D: account separation does not solve inconsistent measurement design.'
    }
  ]
};
