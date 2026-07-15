import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const ga4Data = {
  id: ASSESSMENT_TYPES.ga4,
  title: "Google Analytics 4 Professional Certification",
  shortTitle: "GA4",
  category: "Marketing",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional GA4 assessment covering event-based analytics, data streams, key events, parameters, explorations, attribution, BigQuery export, consent-aware measurement, e-commerce, and implementation audit.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical GA4 measurement and analytics judgment.",
  questions: [
{ id: 'ga-01', type: 'mcq', title: 'Data Model', prompt: 'What is the primary difference between Universal Analytics (UA) and GA4?', options: ['GA4 is faster', 'UA was session-based; GA4 is event-based', 'UA was better for mobile', 'GA4 is only for web'], correctIndex: 1, explanation: 'Every hit in GA4 is an event.' },
        { id: 'ga-02', type: 'mcq', title: 'Events', prompt: 'Which type of event is automatically collected by GA4 (e.g., page_view)?', options: ['Custom Events', 'Automatically Collected Events', 'Recommended Events', 'Measured Events'], correctIndex: 1, explanation: 'GA4 collects basic interactions without extra setup.' },
        { id: 'ga-03', type: 'mcq', title: 'Conversions', prompt: 'In GA4, how do you track a specific action as a "Conversion"?', options: ['Writing a script', 'Marking an existing event as a conversion in the interface', 'Using a separate tag', 'Creating a goal'], correctIndex: 1, explanation: 'You simply toggle the "Mark as conversion" switch for any event.' },
        { id: 'ga-04', type: 'mcq', title: 'Measurement ID', prompt: 'What is the prefix for a GA4 Measurement ID?', options: ['UA-', 'G-', 'AW-', 'T-'], correctIndex: 1, explanation: 'GA4 IDs look like G-XXXXXXXXXX.' },
        { id: 'ga-05', type: 'mcq', title: 'Explorations', prompt: 'Which feature in GA4 allows for advanced, ad-hoc data analysis beyond standard reports?', options: ['Dashboards', 'Explorations', 'Insights', 'Library'], correctIndex: 1, explanation: 'Explorations provide funnel, path, and cohort analysis.' },
        { id: 'ga-06', type: 'mcq', title: 'Data Streams', prompt: 'What is a "Data Stream" in GA4?', options: ['A live video', 'A source of data (Web, iOS, or Android) that flows into your property', 'A type of filter', 'A backup'], correctIndex: 1, explanation: 'You can have multiple streams (e.g., one for web, one for app) in one property.' },
        { id: 'ga-07', type: 'mcq', title: 'Engagement', prompt: 'What is the "Engagement Rate" in GA4?', options: ['Bounce rate', 'The percentage of engaged sessions (sessions lasting >10s, with a conversion, or 2+ page views)', 'Click-through rate', 'User return rate'], correctIndex: 1, explanation: 'Engagement rate is the inverse of the traditional bounce rate.' },
        { id: 'ga-08', type: 'mcq', title: 'User ID', prompt: 'What is the purpose of the "User ID" feature?', options: ['To name users', 'To track the same user across different devices and sessions', 'For security', 'To see IP addresses'], correctIndex: 1, explanation: 'User ID provides cross-device reporting.' },
        { id: 'ga-09', type: 'mcq', title: 'BigQuery', prompt: 'GA4 offers a free export to which data warehouse?', options: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse'], correctIndex: 1, explanation: 'BigQuery export allows for raw data analysis.' },
        { id: 'ga-10', type: 'mcq', title: 'Attribution', prompt: 'What is the default attribution model for conversions in GA4?', options: ['Last click', 'Data-driven', 'First click', 'Linear'], correctIndex: 1, explanation: 'Data-driven attribution uses ML to assign credit based on user journeys.' },
        { id: 'ga-11', type: 'mcq', title: 'DebugView', prompt: 'What is "DebugView" used for?', options: ['Editing code', 'Real-time validation of events and parameters during testing', 'Checking for bugs in the GA4 script', 'Speeding up reports'], correctIndex: 1, explanation: 'DebugView shows events as they happen on your specific device.' },
        { id: 'ga-12', type: 'mcq', title: 'Identity Spaces', prompt: 'Which of these is NOT one of GA4\'s identity spaces?', options: ['User ID', 'Google Signals', 'Device ID', 'Social Security Number'], correctIndex: 3, explanation: 'GA4 uses User ID, Google Signals, and Device ID to stitch journeys.' },
        { id: 'ga-13', type: 'mcq', title: 'Dimensions', prompt: 'What is the difference between a Dimension and a Metric?', options: ['No difference', 'Dimensions are qualitative attributes (e.g., City); Metrics are quantitative (e.g., Users)', 'Metrics are for mobile', 'Dimensions are for time'], correctIndex: 1, explanation: 'Dimensions describe the data; metrics count it.' },
        { id: 'ga-14', type: 'mcq', title: 'Custom Dimensions', prompt: 'What are the two scopes for custom dimensions in GA4?', options: ['Session and Page', 'Event and User', 'Hits and Sessions', 'Global and Local'], correctIndex: 1, explanation: 'GA4 focuses on Event-scoped and User-scoped dimensions.' },
        { id: 'ga-15', type: 'mcq', title: 'Audiences', prompt: 'What is a "Predictive Audience" in GA4?', options: ['An audience you guess', 'An audience automatically generated based on the likelihood of a future behavior (e.g., likely to churn)', 'A random sample', 'An audience from 2020'], correctIndex: 1, explanation: 'Predictive metrics require a certain volume of data.' },
        { id: 'ga-16', type: 'mcq', title: 'Parameters', prompt: 'How many custom parameters can you send with an event in GA4?', options: ['5', '10', '25', '50'], correctIndex: 2, explanation: 'Each event can carry up to 25 parameters.' },
        { id: 'ga-17', type: 'mcq', title: 'Thresholding', prompt: 'Why might you see a warning triangle (Data Thresholding) in a report?', options: ['Server is down', 'To prevent identifying individual users when data is sparse', 'Calculations are still running', 'Bad internet'], correctIndex: 1, explanation: 'Thresholding protects user privacy when Google Signals is enabled.' },
        { id: 'ga-18', type: 'mcq', title: 'Life Cycle Reports', prompt: 'What are the four stages in the "Life Cycle" reporting collection?', options: ['Start, Middle, End, Repeat', 'Acquisition, Engagement, Monetization, Retention', 'Awareness, Interest, Desire, Action', 'Users, Events, Pages, Sales'], correctIndex: 1, explanation: 'Reflects the standard customer journey.' },
        { id: 'ga-19', type: 'mcq', title: 'Consent Mode', prompt: 'What is "Consent Mode" designed for?', options: ['User agreements', 'Adjusting tag behavior based on user cookie consent for privacy compliance', 'Legalese', 'Security'], correctIndex: 1, explanation: 'It allows for modeling data when users opt out of cookies.' },
        { id: 'ga-20', type: 'mcq', title: 'Property', prompt: 'Can a GA4 property contain multiple websites and apps?', options: ['No', 'Yes, using multiple data streams', 'Only if they share a domain', 'Only with a paid upgrade'], correctIndex: 1, explanation: 'One of the biggest advantages of GA4 is cross-platform measurement.' },
    {
          "id": "ga-21",
          "type": "mcq",
          "title": "Key Events",
          "prompt": "In current GA4 terminology, what is a key event?",
          "options": [
                "An event marked as important for measuring important user actions",
                "Only a page title",
                "Only a user property",
                "A deleted conversion"
          ],
          "correctIndex": 0,
          "explanation": "Key events identify important user actions such as purchases, signups, or leads."
    },
    {
          "id": "ga-22",
          "type": "mcq",
          "title": "Event Parameters",
          "prompt": "What are event parameters used for?",
          "options": [
                "Adding context to events, such as item_id, value, method, or campaign details",
                "Replacing all events",
                "Creating users manually",
                "Deleting streams"
          ],
          "correctIndex": 0,
          "explanation": "Parameters make events more useful for analysis."
    },
    {
          "id": "ga-23",
          "type": "mcq",
          "title": "Recommended Events",
          "prompt": "Why use GA4 recommended event names where possible?",
          "options": [
                "They improve consistency and unlock predefined reporting for common business actions",
                "They hide data",
                "They stop BigQuery export",
                "They only work offline"
          ],
          "correctIndex": 0,
          "explanation": "Recommended events follow Google-defined naming for common measurement scenarios."
    },
    {
          "id": "ga-24",
          "type": "mcq",
          "title": "Custom Dimensions",
          "prompt": "Why register a custom dimension?",
          "options": [
                "To make a custom event parameter available in GA4 reporting",
                "To change the Measurement ID",
                "To delete historical data",
                "To create a new website"
          ],
          "correctIndex": 0,
          "explanation": "Custom dimensions expose selected parameters for reports and explorations."
    },
    {
          "id": "ga-25",
          "type": "mcq",
          "title": "Enhanced Measurement",
          "prompt": "What does Enhanced Measurement help collect?",
          "options": [
                "Common interactions such as scrolls, outbound clicks, site search, and file downloads depending on settings",
                "Only purchases",
                "Only CRM data",
                "Only offline store sales"
          ],
          "correctIndex": 0,
          "explanation": "Enhanced Measurement can collect common web interactions with limited extra tagging."
    },
    {
          "id": "ga-26",
          "type": "mcq",
          "title": "DebugView",
          "prompt": "What is DebugView used for?",
          "options": [
                "Testing and validating events from a debug device or session",
                "Deleting bad users",
                "Changing attribution",
                "Creating invoices"
          ],
          "correctIndex": 0,
          "explanation": "DebugView helps validate GA4 implementation before relying on reports."
    },
    {
          "id": "ga-27",
          "type": "mcq",
          "title": "Data Retention",
          "prompt": "What does GA4 data retention affect?",
          "options": [
                "How long user-level and event-level data is retained for explorations",
                "Whether the website loads",
                "Whether tags fire at all",
                "The color of reports"
          ],
          "correctIndex": 0,
          "explanation": "Retention settings affect historical user/event data available in explorations."
    },
    {
          "id": "ga-28",
          "type": "mcq",
          "title": "BigQuery Export",
          "prompt": "Why use GA4 BigQuery export?",
          "options": [
                "To analyze raw event-level data and join it with other datasets",
                "To create website CSS",
                "To replace consent management",
                "To hide source data"
          ],
          "correctIndex": 0,
          "explanation": "BigQuery export enables advanced analysis beyond the GA4 UI."
    },
    {
          "id": "ga-29",
          "type": "mcq",
          "title": "Attribution",
          "prompt": "Why can GA4 attribution differ from raw last-click reports?",
          "options": [
                "GA4 may use attribution settings and model-based credit across touchpoints",
                "It ignores all campaigns",
                "It only counts direct traffic",
                "It cannot track events"
          ],
          "correctIndex": 0,
          "explanation": "Attribution logic affects how conversion credit is assigned."
    },
    {
          "id": "ga-30",
          "type": "mcq",
          "title": "Consent Mode",
          "prompt": "What is the purpose of consent-aware measurement?",
          "options": [
                "Adjust measurement behavior based on user consent choices",
                "Force users to accept cookies",
                "Remove privacy controls",
                "Disable all analytics forever"
          ],
          "correctIndex": 0,
          "explanation": "Consent-aware measurement helps align tracking with user privacy choices."
    },
    {
          "id": "ga-31",
          "type": "mcq",
          "title": "Data Stream",
          "prompt": "When should multiple data streams be used?",
          "options": [
                "When collecting data from separate web, iOS, or Android sources in one property",
                "For every page title",
                "For every event name",
                "Never"
          ],
          "correctIndex": 0,
          "explanation": "Streams represent sources sending data into a GA4 property."
    },
    {
          "id": "ga-32",
          "type": "mcq",
          "title": "Cross-Domain Tracking",
          "prompt": "Why configure cross-domain measurement?",
          "options": [
                "To preserve user/session continuity across related domains",
                "To block all referrals",
                "To create ads automatically",
                "To remove UTMs"
          ],
          "correctIndex": 0,
          "explanation": "Cross-domain setup helps avoid splitting one journey across multiple users or sessions."
    },
    {
          "id": "ga-33",
          "type": "mcq",
          "title": "Internal Traffic",
          "prompt": "Why define internal traffic rules?",
          "options": [
                "To identify or filter employee/developer traffic from reporting where appropriate",
                "To increase page speed",
                "To change event names",
                "To collect passwords"
          ],
          "correctIndex": 0,
          "explanation": "Internal traffic can distort reporting if not handled."
    },
    {
          "id": "ga-34",
          "type": "mcq",
          "title": "UTM Quality",
          "prompt": "What is a common UTM governance issue?",
          "options": [
                "Inconsistent naming across campaigns and channels",
                "Too much accurate data",
                "No campaign traffic ever",
                "A working Measurement ID"
          ],
          "correctIndex": 0,
          "explanation": "Inconsistent UTMs fragment reports and reduce attribution quality."
    },
    {
          "id": "ga-35",
          "type": "mcq",
          "title": "Explorations",
          "prompt": "Which analysis is especially suited for Explorations?",
          "options": [
                "Path analysis, funnel analysis, cohorts, and custom segment comparisons",
                "Only account billing",
                "Only password reset",
                "Only CSS inspection"
          ],
          "correctIndex": 0,
          "explanation": "Explorations support deeper ad-hoc analysis than standard reports."
    },
    {
          "id": "ga-36",
          "type": "mcq",
          "title": "Funnel Analysis",
          "prompt": "What does funnel analysis help identify?",
          "options": [
                "Where users drop off between defined steps",
                "Only website uptime",
                "Only server CPU",
                "Only page font size"
          ],
          "correctIndex": 0,
          "explanation": "Funnels show conversion progression and drop-off points."
    },
    {
          "id": "ga-37",
          "type": "mcq",
          "title": "Audience",
          "prompt": "What is a GA4 audience used for?",
          "options": [
                "Grouping users based on behavior or attributes for analysis or activation",
                "Creating source code",
                "Deleting events",
                "Replacing consent"
          ],
          "correctIndex": 0,
          "explanation": "Audiences can support remarketing, personalization, and analysis."
    },
    {
          "id": "ga-38",
          "type": "mcq",
          "title": "E-commerce",
          "prompt": "For purchase tracking, why is item-level data important?",
          "options": [
                "It enables product, category, quantity, and revenue analysis",
                "It hides revenue",
                "It only changes colors",
                "It blocks checkout"
          ],
          "correctIndex": 0,
          "explanation": "Item parameters make e-commerce analysis much more actionable."
    },
    {
          "id": "ga-39",
          "type": "mcq",
          "title": "Implementation Audit",
          "prompt": "A site has duplicate page_view events. What should be checked?",
          "options": [
                "Multiple tags, enhanced measurement overlap, SPA routing, and tag firing rules",
                "Only page background",
                "Only browser bookmarks",
                "Only source code comments"
          ],
          "correctIndex": 0,
          "explanation": "Duplicate tracking often comes from overlapping implementations."
    },
    {
          "id": "ga-40",
          "type": "mcq",
          "title": "Advanced GA4 Judgment",
          "prompt": "A dashboard shows traffic growth but leads are flat. What should be investigated?",
          "options": [
                "Traffic quality, channel mix, landing page conversion, event tracking, attribution, and audience intent",
                "Only total users",
                "Only website logo",
                "Nothing because traffic grew"
          ],
          "correctIndex": 0,
          "explanation": "Business analysis requires connecting acquisition, behavior, conversion, and measurement quality."
    }
  ]
};
