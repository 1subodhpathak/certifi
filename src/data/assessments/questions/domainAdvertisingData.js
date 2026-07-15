import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainAdvertisingData = {
  id: ASSESSMENT_TYPES.domain_advertising,
  title: "Advertising Agency Domain Professional Certification",
  shortTitle: "Ad Agency Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional advertising agency assessment covering agency roles, creative briefs, strategy, positioning, media planning, campaign metrics, production, client management, pitches, integrated campaigns, and effectiveness.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "ad-01",
      type: "mcq",
      title: "Account manager",
      prompt: "In the Advertising Agency domain, what does \"Account manager\" mean?",
      options: [
        "cost per thousand impressions",
        "agency role responsible for client relationship, communication, scope, and project coordination",
        "central idea that guides campaign messaging and execution",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 1,
      explanation: "Agency role responsible for client relationship, communication, scope, and project coordination."
    },
    {
      id: "ad-02",
      type: "mcq",
      title: "Creative brief",
      prompt: "In the Advertising Agency domain, what does \"Creative brief\" mean?",
      options: [
        "defined group of people the campaign is designed to reach and influence",
        "cost per thousand impressions",
        "strategic document defining objective, audience, insight, message, deliverables, and constraints",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 2,
      explanation: "Strategic document defining objective, audience, insight, message, deliverables, and constraints."
    },
    {
      id: "ad-03",
      type: "mcq",
      title: "Media planning",
      prompt: "In the Advertising Agency domain, what does \"Media planning\" mean?",
      options: [
        "selecting media channels, timing, reach, frequency, and budget allocation to reach target audiences",
        "click-through rate, clicks divided by impressions",
        "defined group of people the campaign is designed to reach and influence",
        "A temporary file naming convention only",
      ],
      correctIndex: 0,
      explanation: "Selecting media channels, timing, reach, frequency, and budget allocation to reach target audiences."
    },
    {
      id: "ad-04",
      type: "mcq",
      title: "Media buying",
      prompt: "In the Advertising Agency domain, what does \"Media buying\" mean?",
      options: [
        "purchasing advertising inventory based on plan, audience, cost, and performance goals",
        "A social media caption format",
        "strategic document defining objective, audience, insight, message, deliverables, and constraints",
        "measured improvement in awareness, perception, consideration, or intent after campaign exposure",
      ],
      correctIndex: 0,
      explanation: "Purchasing advertising inventory based on plan, audience, cost, and performance goals."
    },
    {
      id: "ad-05",
      type: "mcq",
      title: "Tagline",
      prompt: "In the Advertising Agency domain, what does \"Tagline\" mean?",
      options: [
        "managing client expectations, updates, approvals, and relationship health",
        "short memorable brand phrase used consistently in communication",
        "A customer service greeting script",
        "visual sequence showing planned shots for a video or commercial",
      ],
      correctIndex: 1,
      explanation: "Short memorable brand phrase used consistently in communication."
    },
    {
      id: "ad-06",
      type: "mcq",
      title: "Positioning",
      prompt: "In the Advertising Agency domain, what does \"Positioning\" mean?",
      options: [
        "number of unique people exposed to a campaign",
        "defining how a brand should be perceived relative to competitors in the target audience's mind",
        "An office administration policy only",
        "purchasing advertising inventory based on plan, audience, cost, and performance goals",
      ],
      correctIndex: 1,
      explanation: "Defining how a brand should be perceived relative to competitors in the target audience's mind."
    },
    {
      id: "ad-07",
      type: "mcq",
      title: "Brand strategy",
      prompt: "In the Advertising Agency domain, what does \"Brand strategy\" mean?",
      options: [
        "ongoing fee arrangement between client and agency for continuous services",
        "A random sales slogan with no technical meaning",
        "long-term plan for brand identity, positioning, promise, audience, and differentiation",
        "defining how a brand should be perceived relative to competitors in the target audience's mind",
      ],
      correctIndex: 2,
      explanation: "Long-term plan for brand identity, positioning, promise, audience, and differentiation."
    },
    {
      id: "ad-08",
      type: "mcq",
      title: "Storyboard",
      prompt: "In the Advertising Agency domain, what does \"Storyboard\" mean?",
      options: [
        "prompt telling the audience what to do next",
        "A manual workaround with no control value",
        "visual sequence showing planned shots for a video or commercial",
        "defining how a brand should be perceived relative to competitors in the target audience's mind",
      ],
      correctIndex: 2,
      explanation: "Visual sequence showing planned shots for a video or commercial."
    },
    {
      id: "ad-09",
      type: "mcq",
      title: "Pitch",
      prompt: "In the Advertising Agency domain, what does \"Pitch\" mean?",
      options: [
        "desired user action such as purchase, signup, lead, or download",
        "competitive agency presentation to win new business or campaign approval",
        "A visual branding element only",
        "above-the-line advertising using broad mass media such as TV, radio, outdoor, or print",
      ],
      correctIndex: 1,
      explanation: "Competitive agency presentation to win new business or campaign approval."
    },
    {
      id: "ad-10",
      type: "mcq",
      title: "ATL",
      prompt: "In the Advertising Agency domain, what does \"ATL\" mean?",
      options: [
        "A meeting agenda template",
        "controlled comparison of two variants to identify stronger performance",
        "above-the-line advertising using broad mass media such as TV, radio, outdoor, or print",
        "cost per click",
      ],
      correctIndex: 2,
      explanation: "Above-the-line advertising using broad mass media such as TV, radio, outdoor, or print."
    },
    {
      id: "ad-11",
      type: "mcq",
      title: "BTL",
      prompt: "In the Advertising Agency domain, what does \"BTL\" mean?",
      options: [
        "long-term plan for brand identity, positioning, promise, audience, and differentiation",
        "below-the-line targeted marketing such as direct mail, email, events, or promotions",
        "defining how a brand should be perceived relative to competitors in the target audience's mind",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 1,
      explanation: "Below-the-line targeted marketing such as direct mail, email, events, or promotions."
    },
    {
      id: "ad-12",
      type: "mcq",
      title: "TTL",
      prompt: "In the Advertising Agency domain, what does \"TTL\" mean?",
      options: [
        "prompt telling the audience what to do next",
        "through-the-line approach integrating mass and targeted channels",
        "click-through rate, clicks divided by impressions",
        "A design color choice with no operational meaning",
      ],
      correctIndex: 1,
      explanation: "Through-the-line approach integrating mass and targeted channels."
    },
    {
      id: "ad-13",
      type: "mcq",
      title: "CPM",
      prompt: "In the Advertising Agency domain, what does \"CPM\" mean?",
      options: [
        "selecting media channels, timing, reach, frequency, and budget allocation to reach target audiences",
        "cost per thousand impressions",
        "competitive agency presentation to win new business or campaign approval",
        "A temporary file naming convention only",
      ],
      correctIndex: 1,
      explanation: "Cost per thousand impressions."
    },
    {
      id: "ad-14",
      type: "mcq",
      title: "CPC",
      prompt: "In the Advertising Agency domain, what does \"CPC\" mean?",
      options: [
        "A social media caption format",
        "meaningful understanding of audience behavior, tension, need, or motivation",
        "cost per click",
        "defined group of people the campaign is designed to reach and influence",
      ],
      correctIndex: 2,
      explanation: "Cost per click."
    },
    {
      id: "ad-15",
      type: "mcq",
      title: "CPA",
      prompt: "In the Advertising Agency domain, what does \"CPA\" mean?",
      options: [
        "prompt telling the audience what to do next",
        "A customer service greeting script",
        "cost per acquisition or action",
        "competitive agency presentation to win new business or campaign approval",
      ],
      correctIndex: 2,
      explanation: "Cost per acquisition or action."
    },
    {
      id: "ad-16",
      type: "mcq",
      title: "CTR",
      prompt: "In the Advertising Agency domain, what does \"CTR\" mean?",
      options: [
        "above-the-line advertising using broad mass media such as TV, radio, outdoor, or print",
        "click-through rate, clicks divided by impressions",
        "An office administration policy only",
        "defining how a brand should be perceived relative to competitors in the target audience's mind",
      ],
      correctIndex: 1,
      explanation: "Click-through rate, clicks divided by impressions."
    },
    {
      id: "ad-17",
      type: "mcq",
      title: "Reach",
      prompt: "In the Advertising Agency domain, what does \"Reach\" mean?",
      options: [
        "one served or displayed ad opportunity",
        "number of unique people exposed to a campaign",
        "agency role responsible for client relationship, communication, scope, and project coordination",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "Number of unique people exposed to a campaign."
    },
    {
      id: "ad-18",
      type: "mcq",
      title: "Frequency",
      prompt: "In the Advertising Agency domain, what does \"Frequency\" mean?",
      options: [
        "average number of times reached people are exposed to a message",
        "A manual workaround with no control value",
        "measured improvement in awareness, perception, consideration, or intent after campaign exposure",
        "selecting media channels, timing, reach, frequency, and budget allocation to reach target audiences",
      ],
      correctIndex: 0,
      explanation: "Average number of times reached people are exposed to a message."
    },
    {
      id: "ad-19",
      type: "mcq",
      title: "GRP",
      prompt: "In the Advertising Agency domain, what does \"GRP\" mean?",
      options: [
        "click-through rate, clicks divided by impressions",
        "A visual branding element only",
        "gross rating points, reach multiplied by frequency in media planning",
        "short memorable brand phrase used consistently in communication",
      ],
      correctIndex: 2,
      explanation: "Gross rating points, reach multiplied by frequency in media planning."
    },
    {
      id: "ad-20",
      type: "mcq",
      title: "Impression",
      prompt: "In the Advertising Agency domain, what does \"Impression\" mean?",
      options: [
        "short memorable brand phrase used consistently in communication",
        "visual sequence showing planned shots for a video or commercial",
        "A meeting agenda template",
        "one served or displayed ad opportunity",
      ],
      correctIndex: 3,
      explanation: "One served or displayed ad opportunity."
    },
    {
      id: "ad-21",
      type: "mcq",
      title: "Conversion",
      prompt: "In the Advertising Agency domain, what does \"Conversion\" mean?",
      options: [
        "desired user action such as purchase, signup, lead, or download",
        "cost per acquisition or action",
        "A payroll-only process unrelated to this domain",
        "prompt telling the audience what to do next",
      ],
      correctIndex: 0,
      explanation: "Desired user action such as purchase, signup, lead, or download."
    },
    {
      id: "ad-22",
      type: "mcq",
      title: "Creative concept",
      prompt: "In the Advertising Agency domain, what does \"Creative concept\" mean?",
      options: [
        "central idea that guides campaign messaging and execution",
        "above-the-line advertising using broad mass media such as TV, radio, outdoor, or print",
        "A design color choice with no operational meaning",
        "purchasing advertising inventory based on plan, audience, cost, and performance goals",
      ],
      correctIndex: 0,
      explanation: "Central idea that guides campaign messaging and execution."
    },
    {
      id: "ad-23",
      type: "mcq",
      title: "Campaign objective",
      prompt: "In the Advertising Agency domain, what does \"Campaign objective\" mean?",
      options: [
        "specific business or communication outcome the campaign should achieve",
        "A temporary file naming convention only",
        "central idea that guides campaign messaging and execution",
        "desired user action such as purchase, signup, lead, or download",
      ],
      correctIndex: 0,
      explanation: "Specific business or communication outcome the campaign should achieve."
    },
    {
      id: "ad-24",
      type: "mcq",
      title: "Target audience",
      prompt: "In the Advertising Agency domain, what does \"Target audience\" mean?",
      options: [
        "defined group of people the campaign is designed to reach and influence",
        "selecting media channels, timing, reach, frequency, and budget allocation to reach target audiences",
        "controlled comparison of two variants to identify stronger performance",
        "A social media caption format",
      ],
      correctIndex: 0,
      explanation: "Defined group of people the campaign is designed to reach and influence."
    },
    {
      id: "ad-25",
      type: "mcq",
      title: "Consumer insight",
      prompt: "In the Advertising Agency domain, what does \"Consumer insight\" mean?",
      options: [
        "meaningful understanding of audience behavior, tension, need, or motivation",
        "A customer service greeting script",
        "purchasing advertising inventory based on plan, audience, cost, and performance goals",
        "controlled comparison of two variants to identify stronger performance",
      ],
      correctIndex: 0,
      explanation: "Meaningful understanding of audience behavior, tension, need, or motivation."
    },
    {
      id: "ad-26",
      type: "mcq",
      title: "Call to action",
      prompt: "In the Advertising Agency domain, what does \"Call to action\" mean?",
      options: [
        "cost per thousand impressions",
        "An office administration policy only",
        "ongoing fee arrangement between client and agency for continuous services",
        "prompt telling the audience what to do next",
      ],
      correctIndex: 3,
      explanation: "Prompt telling the audience what to do next."
    },
    {
      id: "ad-27",
      type: "mcq",
      title: "A/B testing",
      prompt: "In the Advertising Agency domain, what does \"A/B testing\" mean?",
      options: [
        "A random sales slogan with no technical meaning",
        "visual sequence showing planned shots for a video or commercial",
        "controlled comparison of two variants to identify stronger performance",
        "through-the-line approach integrating mass and targeted channels",
      ],
      correctIndex: 2,
      explanation: "Controlled comparison of two variants to identify stronger performance."
    },
    {
      id: "ad-28",
      type: "mcq",
      title: "Brand lift",
      prompt: "In the Advertising Agency domain, what does \"Brand lift\" mean?",
      options: [
        "measured improvement in awareness, perception, consideration, or intent after campaign exposure",
        "A manual workaround with no control value",
        "visual sequence showing planned shots for a video or commercial",
        "agency role responsible for client relationship, communication, scope, and project coordination",
      ],
      correctIndex: 0,
      explanation: "Measured improvement in awareness, perception, consideration, or intent after campaign exposure."
    },
    {
      id: "ad-29",
      type: "mcq",
      title: "Client servicing",
      prompt: "In the Advertising Agency domain, what does \"Client servicing\" mean?",
      options: [
        "central idea that guides campaign messaging and execution",
        "A visual branding element only",
        "managing client expectations, updates, approvals, and relationship health",
        "above-the-line advertising using broad mass media such as TV, radio, outdoor, or print",
      ],
      correctIndex: 2,
      explanation: "Managing client expectations, updates, approvals, and relationship health."
    },
    {
      id: "ad-30",
      type: "mcq",
      title: "Retainer",
      prompt: "In the Advertising Agency domain, what does \"Retainer\" mean?",
      options: [
        "A meeting agenda template",
        "competitive agency presentation to win new business or campaign approval",
        "short memorable brand phrase used consistently in communication",
        "ongoing fee arrangement between client and agency for continuous services",
      ],
      correctIndex: 3,
      explanation: "Ongoing fee arrangement between client and agency for continuous services."
    },
    {
      id: "ad-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A client asks for a campaign before clarifying target audience. What should the agency do?",
      options: [
        "Define objective, audience, insight, message, channels, budget, and success metrics in a brief",
        "Skip strategy",
        "Start designing immediately",
        "Buy random media",
      ],
      correctIndex: 0,
      explanation: "Creative work needs a strong brief."
    },
    {
      id: "ad-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A campaign has high impressions but low conversions. What should be analyzed?",
      options: [
        "Agency logo",
        "Audience fit, creative message, landing page, offer, CTA, channel quality, and tracking",
        "Office décor",
        "Impressions only",
      ],
      correctIndex: 1,
      explanation: "High reach does not guarantee action."
    },
    {
      id: "ad-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A client dislikes creative because it misses the business problem. What likely failed?",
      options: [
        "Printer speed",
        "Creative brief alignment and strategy translation",
        "Office seating",
        "Media invoice",
      ],
      correctIndex: 1,
      explanation: "Creative should ladder back to the brief and business objective."
    },
    {
      id: "ad-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A media plan reaches the audience too often with limited new reach. What metric balance matters?",
      options: [
        "Only project duration",
        "Reach and frequency",
        "Only invoice count",
        "Only design software",
      ],
      correctIndex: 1,
      explanation: "Media planning balances unique reach and exposure frequency."
    },
    {
      id: "ad-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An agency pitch is visually strong but lacks business rationale. What should be added?",
      options: [
        "More fonts",
        "No metrics",
        "Client problem, audience insight, strategy, proof, expected impact, and measurement plan",
        "More animations only",
      ],
      correctIndex: 2,
      explanation: "Pitches need strategy and measurable value."
    },
    {
      id: "ad-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A brand campaign improves awareness but not sales immediately. How should success be evaluated?",
      options: [
        "Only comments",
        "Brand lift, consideration, reach quality, long-term funnel impact, and business context",
        "Only last-click sales",
        "Only post count",
      ],
      correctIndex: 1,
      explanation: "Brand campaigns may influence upper-funnel outcomes before sales."
    },
    {
      id: "ad-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A performance ad has strong CTR but weak lead quality. What should be checked?",
      options: [
        "Color palette only",
        "CTR only",
        "Agency headcount",
        "Targeting, promise-message fit, form qualification, offer clarity, and downstream conversion",
      ],
      correctIndex: 3,
      explanation: "Lead quality requires full-funnel evaluation."
    },
    {
      id: "ad-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A client expands scope without budget or timeline changes. What should account management do?",
      options: [
        "Clarify scope change, impact, trade-offs, revised estimate, and approval",
        "Delay without notice",
        "Accept silently",
        "Blame creative team",
      ],
      correctIndex: 0,
      explanation: "Scope control protects quality, timeline, and relationship."
    },
    {
      id: "ad-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A campaign uses celebrity endorsement. What risk should be managed?",
      options: [
        "Only billboard size",
        "Only office gossip",
        "Only celebrity height",
        "Brand fit, audience credibility, contract terms, reputation risk, and disclosure rules",
      ],
      correctIndex: 3,
      explanation: "Endorsements carry brand and compliance risks."
    },
    {
      id: "ad-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A campaign report lists only clicks. What should be added?",
      options: [
        "Only launch date",
        "Only screenshots",
        "Objective-linked KPIs, conversions, cost efficiency, audience quality, creative learning, and business outcome",
        "Only social likes",
      ],
      correctIndex: 2,
      explanation: "Campaign reporting should connect activity to objectives and results."
    }
  ],
};
