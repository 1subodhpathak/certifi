import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const hubspotData = {
  id: ASSESSMENT_TYPES.hubspot,
  title: "HubSpot CRM & Marketing Operations Professional Certification",
  shortTitle: "HubSpot",
  category: "Business Operations",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional HubSpot assessment covering inbound methodology, CRM objects, lifecycle stages, lists, workflows, lead scoring, forms, landing pages, attribution, dashboards, and marketing operations governance.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical HubSpot CRM and marketing operations judgment.",
  questions: [
{ id: 'hs-01', type: 'mcq', title: 'Core Philosophy', prompt: 'What is the "Inbound Methodology" promoted by HubSpot?', options: ['Buy, Sell, Repeat', 'Attract, Engage, Delight', 'Cold call, Email, Close', 'Spam, Convert, Ignore'], correctIndex: 1, explanation: 'Inbound is about growing by building meaningful, lasting relationships.' },
        { id: 'hs-02', type: 'mcq', title: 'Contacts', prompt: 'What is the core object of the HubSpot CRM?', options: ['Company', 'Deal', 'Contact', 'Ticket'], correctIndex: 2, explanation: 'Contacts are the people you are trying to reach.' },
        { id: 'hs-03', type: 'mcq', title: 'Workflows', prompt: 'What is a "Workflow" in HubSpot?', options: ['A list of tasks', 'An automation tool that triggers actions based on enrollment criteria', 'A type of blog post', 'A user role'], correctIndex: 1, explanation: 'Workflows power marketing automation, lead scoring, and notifications.' },
        { id: 'hs-04', type: 'mcq', title: 'Lifecycle Stages', prompt: 'Which lifecycle stage represents a lead that is ready for a sales conversation?', options: ['Subscriber', 'Lead', 'MQL (Marketing Qualified Lead)', 'SQL (Sales Qualified Lead)'], correctIndex: 3, explanation: 'SQLs have been vetted by sales as having high potential.' },
        { id: 'hs-05', type: 'mcq', title: 'Lists', prompt: 'What is the difference between an "Active List" and a "Static List"?', options: ['No difference', 'Active lists update automatically based on criteria; Static lists are snapshots', 'Static lists are faster', 'Active lists are only for emails'], correctIndex: 1, explanation: 'Active lists are dynamic.' },
        { id: 'hs-06', type: 'mcq', title: 'Forms', prompt: 'What is a "Smart Form" in HubSpot?', options: ['A form that fills itself', 'A form that uses "Progressive Profiling" to ask different questions to returning visitors', 'A form with AI', 'A form that links to SQL'], correctIndex: 1, explanation: 'It helps gather more info over time without repeating questions.' },
        { id: 'hs-07', type: 'mcq', title: 'Landing Pages', prompt: 'What is the primary purpose of a HubSpot Landing Page?', options: ['To show the company history', 'To convert visitors into leads using a form', 'To display the product catalog', 'For SEO only'], correctIndex: 1, explanation: 'Landing pages are designed for conversion.' },
        { id: 'hs-08', type: 'mcq', title: 'Integrations', prompt: 'What is the "HubSpot App Marketplace"?', options: ['A place to buy phones', 'A collection of integrations that connect HubSpot with other tools (e.g., Zoom, Slack)', 'A game store', 'A theme store'], correctIndex: 1, explanation: 'Integrations allow for a "Single Source of Truth".' },
        { id: 'hs-09', type: 'mcq', title: 'Reporting', prompt: 'What is a "Dashboard" in HubSpot?', options: ['A control panel for a car', 'A customizable view of reports and data visualizations', 'A list of emails', 'A user profile'], correctIndex: 1, explanation: 'Dashboards provide an at-a-glance view of performance.' },
        { id: 'hs-10', type: 'mcq', title: 'Flywheel', prompt: 'HubSpot recently replaced the "Funnel" with the ___?', options: ['Circle', 'Flywheel', 'Square', 'Pyramid'], correctIndex: 1, explanation: 'The Flywheel emphasizes that customer success drives growth.' },
        { id: 'hs-11', type: 'mcq', title: 'Property', prompt: 'What is a "Property" in HubSpot?', options: ['A building', 'A data field that stores information about an object (e.g., Phone Number)', 'A user permission', 'A type of deal'], correctIndex: 1, explanation: 'Properties are the fields in the database.' },
        { id: 'hs-12', type: 'mcq', title: 'Deals', prompt: 'What is a "Deal Pipeline"?', options: ['A water pipe', 'A visual representation of the stages in a sales process', 'A list of customers', 'A type of automation'], correctIndex: 1, explanation: 'Pipelines help track revenue through various sales stages.' },
        { id: 'hs-13', type: 'mcq', title: 'Sequences', prompt: 'What is a "Sequence"?', options: ['A math pattern', 'A series of personalized, one-to-one emails and tasks for sales follow-up', 'A marketing blast', 'A blog series'], correctIndex: 1, explanation: 'Sequences are for individual outreach, unlike marketing workflows.' },
        { id: 'hs-14', type: 'mcq', title: 'CTAs', prompt: 'What is a "Smart CTA"?', options: ['An AI button', 'A button that shows different content to different visitors based on their stage/segment', 'A button that clicks itself', 'A high-contrast button'], correctIndex: 1, explanation: 'Personalized CTAs have higher conversion rates.' },
        { id: 'hs-15', type: 'mcq', title: 'Knowledge Base', prompt: 'What is the purpose of the HubSpot "Service Hub"?', options: ['To sell products', 'To provide customer support tools like tickets and a Knowledge Base', 'To manage social media', 'To write blogs'], correctIndex: 1, explanation: 'Service Hub focuses on the "Delight" phase.' },
        { id: 'hs-16', type: 'mcq', title: 'Ads', prompt: 'Can you manage Google/Facebook ads directly in HubSpot?', options: ['No', 'Yes (with the Ads add-on)', 'Only with a plugin', 'Only in the US'], correctIndex: 1, explanation: 'HubSpot allows tracking ad ROI back to specific CRM contacts.' },
        { id: 'hs-17', type: 'mcq', title: 'Marketing Hub', prompt: 'Which feature is unique to HubSpot Marketing Hub "Enterprise"?', options: ['Email marketing', 'Adaptive Testing (AI A/B testing)', 'Contact management', 'Social media scheduling'], correctIndex: 1, explanation: 'Enterprise offers advanced features like adaptive testing and partitioning.' },
        { id: 'hs-18', type: 'mcq', title: 'Personalization Tokens', prompt: 'What is a "Personalization Token"?', options: ['A coin', 'A placeholder that pulls in a property value (e.g., First Name) into an email', 'A password', 'A discount code'], correctIndex: 1, explanation: 'Tokens make automated emails feel personal.' },
        { id: 'hs-19', type: 'mcq', title: 'Tracking Code', prompt: 'What is the "HubSpot Tracking Code" for?', options: ['Debugging', 'Enabling website tracking, chat, and form analytics', 'Security', 'Speeding up the site'], correctIndex: 1, explanation: 'Every site must have the tracking code to sync with HubSpot.' },
        { id: 'hs-20', type: 'mcq', title: 'Lead Scoring', prompt: 'What is "Lead Scoring"?', options: ['Giving leads a grade', 'Assigning points to leads based on their actions and attributes to prioritize sales follow-up', 'Counting leads', 'A type of report'], correctIndex: 1, explanation: 'Lead scoring helps sales teams focus on the most "hot" prospects.' },
    {
          "id": "hs-21",
          "type": "mcq",
          "title": "CRM Objects",
          "prompt": "Which HubSpot object usually represents a revenue opportunity?",
          "options": [
                "Deal",
                "Contact",
                "Ticket",
                "Form"
          ],
          "correctIndex": 0,
          "explanation": "Deals track sales opportunities and pipeline progression."
    },
    {
          "id": "hs-22",
          "type": "mcq",
          "title": "Companies",
          "prompt": "Why associate contacts with companies?",
          "options": [
                "To understand account-level relationships and activity",
                "To delete contact history",
                "To avoid segmentation",
                "To disable reporting"
          ],
          "correctIndex": 0,
          "explanation": "Company associations help with B2B account visibility."
    },
    {
          "id": "hs-23",
          "type": "mcq",
          "title": "Properties",
          "prompt": "What are HubSpot properties?",
          "options": [
                "Fields that store data about CRM records",
                "Only blog themes",
                "Only email templates",
                "Only billing plans"
          ],
          "correctIndex": 0,
          "explanation": "Properties hold structured information such as lifecycle stage, industry, owner, or lead source."
    },
    {
          "id": "hs-24",
          "type": "mcq",
          "title": "Lifecycle Governance",
          "prompt": "Why should lifecycle stages be governed carefully?",
          "options": [
                "They affect reporting, automation, handoffs, and funnel visibility",
                "They only change colors",
                "They are never used",
                "They replace all deals"
          ],
          "correctIndex": 0,
          "explanation": "Poor lifecycle governance creates inaccurate funnel reporting and automation errors."
    },
    {
          "id": "hs-25",
          "type": "mcq",
          "title": "Lead Scoring",
          "prompt": "What is the purpose of lead scoring?",
          "options": [
                "Rank leads based on fit and engagement signals",
                "Delete unqualified contacts automatically",
                "Replace sales judgment entirely",
                "Send every contact to sales"
          ],
          "correctIndex": 0,
          "explanation": "Lead scoring helps prioritize sales-ready or high-fit prospects."
    },
    {
          "id": "hs-26",
          "type": "mcq",
          "title": "MQL to SQL Handoff",
          "prompt": "What should define an MQL-to-SQL handoff?",
          "options": [
                "Clear qualification criteria, owner, SLA, and follow-up process",
                "Only a manual note",
                "Only a random email",
                "No criteria"
          ],
          "correctIndex": 0,
          "explanation": "Defined handoff rules prevent lead leakage and confusion."
    },
    {
          "id": "hs-27",
          "type": "mcq",
          "title": "Workflow Enrollment",
          "prompt": "What is a risk of broad workflow enrollment criteria?",
          "options": [
                "Contacts may receive irrelevant automation or duplicate actions",
                "Workflows stop existing",
                "Forms disappear",
                "Dashboards delete themselves"
          ],
          "correctIndex": 0,
          "explanation": "Workflow criteria should be precise and tested to avoid bad automation."
    },
    {
          "id": "hs-28",
          "type": "mcq",
          "title": "Suppression Lists",
          "prompt": "Why use suppression lists?",
          "options": [
                "To exclude people who should not receive a campaign",
                "To increase email frequency",
                "To overwrite all contacts",
                "To remove dashboards"
          ],
          "correctIndex": 0,
          "explanation": "Suppression protects relevance, compliance, and user experience."
    },
    {
          "id": "hs-29",
          "type": "mcq",
          "title": "Email Health",
          "prompt": "Which metric combination is useful for email health?",
          "options": [
                "Open/click engagement, unsubscribe rate, bounce rate, spam complaints, and conversion",
                "Only total sent",
                "Only font size",
                "Only sender name"
          ],
          "correctIndex": 0,
          "explanation": "Email quality requires engagement, deliverability, and outcome signals."
    },
    {
          "id": "hs-30",
          "type": "mcq",
          "title": "UTM Tracking",
          "prompt": "Why use UTM parameters with HubSpot campaigns?",
          "options": [
                "To attribute traffic and conversions to specific campaigns or channels",
                "To encrypt passwords",
                "To change email design",
                "To create companies automatically"
          ],
          "correctIndex": 0,
          "explanation": "UTMs help campaign attribution across channels."
    },
    {
          "id": "hs-31",
          "type": "mcq",
          "title": "Forms",
          "prompt": "Why use progressive profiling?",
          "options": [
                "To collect additional data over time without repeatedly asking the same questions",
                "To remove all fields",
                "To make forms longer every time",
                "To block returning visitors"
          ],
          "correctIndex": 0,
          "explanation": "Progressive profiling improves data collection while reducing friction."
    },
    {
          "id": "hs-32",
          "type": "mcq",
          "title": "Landing Page Conversion",
          "prompt": "A landing page gets traffic but few submissions. What should be checked?",
          "options": [
                "Offer relevance, form friction, headline clarity, proof, CTA, and traffic intent",
                "Only page background color",
                "Only company size",
                "Only footer links"
          ],
          "correctIndex": 0,
          "explanation": "Conversion issues often come from message mismatch or friction."
    },
    {
          "id": "hs-33",
          "type": "mcq",
          "title": "Automation Quality",
          "prompt": "What should be tested before turning on a critical workflow?",
          "options": [
                "Enrollment criteria, branch logic, actions, delays, exclusions, and rollback plan",
                "Only workflow name",
                "Only icon color",
                "Nothing"
          ],
          "correctIndex": 0,
          "explanation": "Workflow errors can affect many records, so testing is essential."
    },
    {
          "id": "hs-34",
          "type": "mcq",
          "title": "Data Quality",
          "prompt": "What is a common CRM data quality issue?",
          "options": [
                "Duplicate records, missing required fields, inconsistent values, and stale owners",
                "Too many accurate reports",
                "Perfect segmentation",
                "No imports"
          ],
          "correctIndex": 0,
          "explanation": "Data quality directly affects automation and reporting."
    },
    {
          "id": "hs-35",
          "type": "mcq",
          "title": "Attribution",
          "prompt": "Why can marketing attribution be difficult?",
          "options": [
                "Customers interact with multiple channels and assets before conversion",
                "Only one email can ever matter",
                "Attribution is not related to marketing",
                "HubSpot cannot store contacts"
          ],
          "correctIndex": 0,
          "explanation": "Multi-touch journeys make attribution more complex than last interaction alone."
    },
    {
          "id": "hs-36",
          "type": "mcq",
          "title": "Sales Pipeline",
          "prompt": "What makes a sales pipeline stage useful?",
          "options": [
                "Clear exit criteria and probability assumptions",
                "A funny name only",
                "No definition",
                "Only a color"
          ],
          "correctIndex": 0,
          "explanation": "Pipeline stages should reflect real buyer progress and forecasting logic."
    },
    {
          "id": "hs-37",
          "type": "mcq",
          "title": "Tickets",
          "prompt": "What are tickets commonly used for?",
          "options": [
                "Tracking customer service issues or support requests",
                "Replacing all contacts",
                "Building websites only",
                "Storing CSS"
          ],
          "correctIndex": 0,
          "explanation": "Tickets help teams manage support workflows and customer issues."
    },
    {
          "id": "hs-38",
          "type": "mcq",
          "title": "Permissions",
          "prompt": "Why are user permissions important in HubSpot?",
          "options": [
                "To protect data and control who can edit records, workflows, reports, or settings",
                "To make all data public",
                "To remove auditability",
                "To stop all collaboration"
          ],
          "correctIndex": 0,
          "explanation": "Permissions reduce accidental changes and protect sensitive business data."
    },
    {
          "id": "hs-39",
          "type": "mcq",
          "title": "Reporting",
          "prompt": "What makes a HubSpot dashboard executive-ready?",
          "options": [
                "Clear KPIs tied to funnel, pipeline, revenue, campaign performance, and customer health",
                "Every available chart",
                "Only vanity metrics",
                "No date filters"
          ],
          "correctIndex": 0,
          "explanation": "Executive dashboards should show business performance and decisions needed."
    },
    {
          "id": "hs-40",
          "type": "mcq",
          "title": "Advanced HubSpot Judgment",
          "prompt": "A company has messy lifecycle stages, duplicate contacts, and unreliable automation. What should be done first?",
          "options": [
                "Audit data model, lifecycle definitions, duplicates, workflows, ownership, and reporting dependencies before scaling campaigns",
                "Send more emails immediately",
                "Delete all contacts",
                "Disable CRM permanently"
          ],
          "correctIndex": 0,
          "explanation": "Scaling automation on poor data creates bigger operational problems."
    }
  ]
};
