import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level domain assessment.
// Updated to test practical industry knowledge, terminology, metrics,
// operating judgment, risk awareness, and business scenario analysis.
export const domainMediaData = {
  id: ASSESSMENT_TYPES.domain_media,
  title: "Media & Entertainment Domain Professional Certification",
  shortTitle: "Media Domain",
  category: "Industry Knowledge",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional media and entertainment assessment covering production, streaming, licensing, distribution, adtech, audience measurement, gaming, music royalties, IP, monetization, and content operations.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical domain understanding, operating judgment, terminology, metrics, controls, and industry scenarios.",
  questions: [
    {
      id: "dm-01",
      type: "mcq",
      title: "SVOD",
      prompt: "In the Media & Entertainment domain, what does \"SVOD\" mean?",
      options: [
        "subscription video on demand where users pay recurring fees for access to content",
        "average revenue per user, a key subscription and platform metric",
        "A payroll-only process unrelated to this domain",
        "downloadable content that extends a game after release",
      ],
      correctIndex: 0,
      explanation: "Subscription video on demand where users pay recurring fees for access to content."
    },
    {
      id: "dm-02",
      type: "mcq",
      title: "AVOD",
      prompt: "In the Media & Entertainment domain, what does \"AVOD\" mean?",
      options: [
        "advertising-supported video on demand where content is free or low-cost and monetized through ads",
        "A design color choice with no operational meaning",
        "automated buying and selling of digital ad inventory using data and real-time systems",
        "stage after filming that includes editing, sound, color, VFX, and final mastering",
      ],
      correctIndex: 0,
      explanation: "Advertising-supported video on demand where content is free or low-cost and monetized through ads."
    },
    {
      id: "dm-03",
      type: "mcq",
      title: "TVOD",
      prompt: "In the Media & Entertainment domain, what does \"TVOD\" mean?",
      options: [
        "performing rights organization that collects and distributes performance royalties",
        "license to use music synchronized with visual media such as film, TV, games, or ads",
        "A temporary file naming convention only",
        "transactional video on demand where users pay per rental or purchase",
      ],
      correctIndex: 3,
      explanation: "Transactional video on demand where users pay per rental or purchase."
    },
    {
      id: "dm-04",
      type: "mcq",
      title: "FAST",
      prompt: "In the Media & Entertainment domain, what does \"FAST\" mean?",
      options: [
        "A social media caption format",
        "free ad-supported streaming television delivered through scheduled digital channels",
        "automated buying and selling of digital ad inventory using data and real-time systems",
        "the ability of media products or services to keep audiences over time",
      ],
      correctIndex: 1,
      explanation: "Free ad-supported streaming television delivered through scheduled digital channels."
    },
    {
      id: "dm-05",
      type: "mcq",
      title: "Post-production",
      prompt: "In the Media & Entertainment domain, what does \"Post-production\" mean?",
      options: [
        "cost per thousand impressions, a common advertising pricing metric",
        "performing rights organization that collects and distributes performance royalties",
        "stage after filming that includes editing, sound, color, VFX, and final mastering",
        "A customer service greeting script",
      ],
      correctIndex: 2,
      explanation: "Stage after filming that includes editing, sound, color, VFX, and final mastering."
    },
    {
      id: "dm-06",
      type: "mcq",
      title: "Pre-production",
      prompt: "In the Media & Entertainment domain, what does \"Pre-production\" mean?",
      options: [
        "An office administration policy only",
        "subscription video on demand where users pay recurring fees for access to content",
        "transactional video on demand where users pay per rental or purchase",
        "planning stage including script, budgeting, casting, locations, scheduling, and production design",
      ],
      correctIndex: 3,
      explanation: "Planning stage including script, budgeting, casting, locations, scheduling, and production design."
    },
    {
      id: "dm-07",
      type: "mcq",
      title: "IP rights",
      prompt: "In the Media & Entertainment domain, what does \"IP rights\" mean?",
      options: [
        "transactional video on demand where users pay per rental or purchase",
        "ecosystem where independent creators monetize content, audience, and communities",
        "legal rights controlling use of creative works, formats, characters, music, or trademarks",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 2,
      explanation: "Legal rights controlling use of creative works, formats, characters, music, or trademarks."
    },
    {
      id: "dm-08",
      type: "mcq",
      title: "Copyright",
      prompt: "In the Media & Entertainment domain, what does \"Copyright\" mean?",
      options: [
        "percentage of ad opportunities successfully filled with an ad",
        "legal protection for original works of authorship such as films, music, books, and art",
        "total time users spend watching content",
        "A manual workaround with no control value",
      ],
      correctIndex: 1,
      explanation: "Legal protection for original works of authorship such as films, music, books, and art."
    },
    {
      id: "dm-09",
      type: "mcq",
      title: "Licensing",
      prompt: "In the Media & Entertainment domain, what does \"Licensing\" mean?",
      options: [
        "legal protection for original works of authorship such as films, music, books, and art",
        "license to use music synchronized with visual media such as film, TV, games, or ads",
        "granting permission to use content, format, music, or IP under defined terms",
        "A visual branding element only",
      ],
      correctIndex: 2,
      explanation: "Granting permission to use content, format, music, or IP under defined terms."
    },
    {
      id: "dm-10",
      type: "mcq",
      title: "Windowing",
      prompt: "In the Media & Entertainment domain, what does \"Windowing\" mean?",
      options: [
        "A meeting agenda template",
        "license to use music synchronized with visual media such as film, TV, games, or ads",
        "releasing content across channels or platforms at different times to maximize value",
        "performing rights organization that collects and distributes performance royalties",
      ],
      correctIndex: 2,
      explanation: "Releasing content across channels or platforms at different times to maximize value."
    },
    {
      id: "dm-11",
      type: "mcq",
      title: "Programmatic advertising",
      prompt: "In the Media & Entertainment domain, what does \"Programmatic advertising\" mean?",
      options: [
        "free ad-supported streaming television delivered through scheduled digital channels",
        "automated buying and selling of digital ad inventory using data and real-time systems",
        "TV audience measurement used as a basis for advertising and programming decisions",
        "A payroll-only process unrelated to this domain",
      ],
      correctIndex: 1,
      explanation: "Automated buying and selling of digital ad inventory using data and real-time systems."
    },
    {
      id: "dm-12",
      type: "mcq",
      title: "CPM",
      prompt: "In the Media & Entertainment domain, what does \"CPM\" mean?",
      options: [
        "A design color choice with no operational meaning",
        "planning stage including script, budgeting, casting, locations, scheduling, and production design",
        "cost per thousand impressions, a common advertising pricing metric",
        "stage after filming that includes editing, sound, color, VFX, and final mastering",
      ],
      correctIndex: 2,
      explanation: "Cost per thousand impressions, a common advertising pricing metric."
    },
    {
      id: "dm-13",
      type: "mcq",
      title: "Fill rate",
      prompt: "In the Media & Entertainment domain, what does \"Fill rate\" mean?",
      options: [
        "average revenue per user, a key subscription and platform metric",
        "the ability of media products or services to keep audiences over time",
        "A temporary file naming convention only",
        "percentage of ad opportunities successfully filled with an ad",
      ],
      correctIndex: 3,
      explanation: "Percentage of ad opportunities successfully filled with an ad."
    },
    {
      id: "dm-14",
      type: "mcq",
      title: "Ad inventory",
      prompt: "In the Media & Entertainment domain, what does \"Ad inventory\" mean?",
      options: [
        "A social media caption format",
        "performing rights organization that collects and distributes performance royalties",
        "available advertising space or impressions that can be sold",
        "free ad-supported streaming television delivered through scheduled digital channels",
      ],
      correctIndex: 2,
      explanation: "Available advertising space or impressions that can be sold."
    },
    {
      id: "dm-15",
      type: "mcq",
      title: "Audience measurement",
      prompt: "In the Media & Entertainment domain, what does \"Audience measurement\" mean?",
      options: [
        "A customer service greeting script",
        "percentage of subscribers who cancel a media subscription",
        "downloadable content that extends a game after release",
        "process of estimating audience size, composition, engagement, or viewership",
      ],
      correctIndex: 3,
      explanation: "Process of estimating audience size, composition, engagement, or viewership."
    },
    {
      id: "dm-16",
      type: "mcq",
      title: "Nielsen ratings",
      prompt: "In the Media & Entertainment domain, what does \"Nielsen ratings\" mean?",
      options: [
        "TV audience measurement used as a basis for advertising and programming decisions",
        "An office administration policy only",
        "ecosystem where independent creators monetize content, audience, and communities",
        "releasing content across channels or platforms at different times to maximize value",
      ],
      correctIndex: 0,
      explanation: "TV audience measurement used as a basis for advertising and programming decisions."
    },
    {
      id: "dm-17",
      type: "mcq",
      title: "Retention",
      prompt: "In the Media & Entertainment domain, what does \"Retention\" mean?",
      options: [
        "the ability of media products or services to keep audiences over time",
        "A random sales slogan with no technical meaning",
        "granting permission to use content, format, music, or IP under defined terms",
        "cost per thousand impressions, a common advertising pricing metric",
      ],
      correctIndex: 0,
      explanation: "The ability of media products or services to keep audiences over time."
    },
    {
      id: "dm-18",
      type: "mcq",
      title: "Churn",
      prompt: "In the Media & Entertainment domain, what does \"Churn\" mean?",
      options: [
        "time period during which a platform has rights to distribute content",
        "A manual workaround with no control value",
        "percentage of subscribers who cancel a media subscription",
        "free ad-supported streaming television delivered through scheduled digital channels",
      ],
      correctIndex: 2,
      explanation: "Percentage of subscribers who cancel a media subscription."
    },
    {
      id: "dm-19",
      type: "mcq",
      title: "ARPU",
      prompt: "In the Media & Entertainment domain, what does \"ARPU\" mean?",
      options: [
        "average revenue per user, a key subscription and platform metric",
        "transactional video on demand where users pay per rental or purchase",
        "A visual branding element only",
        "advertising-supported video on demand where content is free or low-cost and monetized through ads",
      ],
      correctIndex: 0,
      explanation: "Average revenue per user, a key subscription and platform metric."
    },
    {
      id: "dm-20",
      type: "mcq",
      title: "Watch time",
      prompt: "In the Media & Entertainment domain, what does \"Watch time\" mean?",
      options: [
        "A meeting agenda template",
        "total time users spend watching content",
        "the ability of media products or services to keep audiences over time",
        "free ad-supported streaming television delivered through scheduled digital channels",
      ],
      correctIndex: 1,
      explanation: "Total time users spend watching content."
    },
    {
      id: "dm-21",
      type: "mcq",
      title: "Completion rate",
      prompt: "In the Media & Entertainment domain, what does \"Completion rate\" mean?",
      options: [
        "percentage of viewers who finish a video or episode",
        "A payroll-only process unrelated to this domain",
        "subscription video on demand where users pay recurring fees for access to content",
        "legal rights controlling use of creative works, formats, characters, music, or trademarks",
      ],
      correctIndex: 0,
      explanation: "Percentage of viewers who finish a video or episode."
    },
    {
      id: "dm-22",
      type: "mcq",
      title: "UGC",
      prompt: "In the Media & Entertainment domain, what does \"UGC\" mean?",
      options: [
        "free ad-supported streaming television delivered through scheduled digital channels",
        "A design color choice with no operational meaning",
        "user-generated content created by users rather than the platform or professional studio",
        "the ability of media products or services to keep audiences over time",
      ],
      correctIndex: 2,
      explanation: "User-generated content created by users rather than the platform or professional studio."
    },
    {
      id: "dm-23",
      type: "mcq",
      title: "Creator economy",
      prompt: "In the Media & Entertainment domain, what does \"Creator economy\" mean?",
      options: [
        "ecosystem where independent creators monetize content, audience, and communities",
        "A temporary file naming convention only",
        "legal rights controlling use of creative works, formats, characters, music, or trademarks",
        "advertising-supported video on demand where content is free or low-cost and monetized through ads",
      ],
      correctIndex: 0,
      explanation: "Ecosystem where independent creators monetize content, audience, and communities."
    },
    {
      id: "dm-24",
      type: "mcq",
      title: "AAA game",
      prompt: "In the Media & Entertainment domain, what does \"AAA game\" mean?",
      options: [
        "high-budget, high-profile game produced by a major publisher",
        "percentage of subscribers who cancel a media subscription",
        "A social media caption format",
        "free ad-supported streaming television delivered through scheduled digital channels",
      ],
      correctIndex: 0,
      explanation: "High-budget, high-profile game produced by a major publisher."
    },
    {
      id: "dm-25",
      type: "mcq",
      title: "DLC",
      prompt: "In the Media & Entertainment domain, what does \"DLC\" mean?",
      options: [
        "high-budget, high-profile game produced by a major publisher",
        "A customer service greeting script",
        "percentage of subscribers who cancel a media subscription",
        "downloadable content that extends a game after release",
      ],
      correctIndex: 3,
      explanation: "Downloadable content that extends a game after release."
    },
    {
      id: "dm-26",
      type: "mcq",
      title: "PRO",
      prompt: "In the Media & Entertainment domain, what does \"PRO\" mean?",
      options: [
        "free ad-supported streaming television delivered through scheduled digital channels",
        "An office administration policy only",
        "performing rights organization that collects and distributes performance royalties",
        "percentage of viewers who finish a video or episode",
      ],
      correctIndex: 2,
      explanation: "Performing rights organization that collects and distributes performance royalties."
    },
    {
      id: "dm-27",
      type: "mcq",
      title: "Sync license",
      prompt: "In the Media & Entertainment domain, what does \"Sync license\" mean?",
      options: [
        "legal rights controlling use of creative works, formats, characters, music, or trademarks",
        "license to use music synchronized with visual media such as film, TV, games, or ads",
        "available advertising space or impressions that can be sold",
        "A random sales slogan with no technical meaning",
      ],
      correctIndex: 1,
      explanation: "License to use music synchronized with visual media such as film, TV, games, or ads."
    },
    {
      id: "dm-28",
      type: "mcq",
      title: "Content moderation",
      prompt: "In the Media & Entertainment domain, what does \"Content moderation\" mean?",
      options: [
        "time period during which a platform has rights to distribute content",
        "A manual workaround with no control value",
        "subscription video on demand where users pay recurring fees for access to content",
        "reviewing and enforcing rules on user or community content",
      ],
      correctIndex: 3,
      explanation: "Reviewing and enforcing rules on user or community content."
    },
    {
      id: "dm-29",
      type: "mcq",
      title: "Rights window",
      prompt: "In the Media & Entertainment domain, what does \"Rights window\" mean?",
      options: [
        "total time users spend watching content",
        "A visual branding element only",
        "time period during which a platform has rights to distribute content",
        "legal protection for original works of authorship such as films, music, books, and art",
      ],
      correctIndex: 2,
      explanation: "Time period during which a platform has rights to distribute content."
    },
    {
      id: "dm-30",
      type: "mcq",
      title: "Localization",
      prompt: "In the Media & Entertainment domain, what does \"Localization\" mean?",
      options: [
        "adapting content for language, culture, subtitles, dubbing, and regional requirements",
        "user-generated content created by users rather than the platform or professional studio",
        "TV audience measurement used as a basis for advertising and programming decisions",
        "A meeting agenda template",
      ],
      correctIndex: 0,
      explanation: "Adapting content for language, culture, subtitles, dubbing, and regional requirements."
    },
    {
      id: "dm-31",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A streaming platform has high trial signups but high first-month churn. What should be analyzed?",
      options: [
        "Only camera lens brand",
        "Onboarding, content discovery, catalog fit, price, streaming quality, engagement, and cancellation reasons",
        "Only office rent",
        "Only logo size",
      ],
      correctIndex: 1,
      explanation: "Churn requires analysis of value realization, content fit, experience, and pricing."
    },
    {
      id: "dm-32",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A show has high starts but low completion. What metric and analysis matter?",
      options: [
        "Completion rate by episode, drop-off points, audience segment, content pacing, and platform quality",
        "Only actor height",
        "Only poster color",
        "Only payroll timing",
      ],
      correctIndex: 0,
      explanation: "Completion issues require viewer behavior and content experience analysis."
    },
    {
      id: "dm-33",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "An advertiser complains that campaign delivery is below plan. What should ad ops check?",
      options: [
        "Only editing software",
        "Inventory availability, targeting constraints, pacing, fill rate, frequency caps, and creative approval",
        "Only office Wi-Fi",
        "Only wardrobe cost",
      ],
      correctIndex: 1,
      explanation: "Ad delivery depends on inventory, targeting, pacing, and creative readiness."
    },
    {
      id: "dm-34",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A media company wants to monetize older catalog content. What should it evaluate?",
      options: [
        "Only studio furniture",
        "Only actor birthdays",
        "Only the age of the file",
        "Rights availability, windowing, platform fit, localization, audience demand, and licensing value",
      ],
      correctIndex: 3,
      explanation: "Catalog monetization depends on rights, demand, and distribution strategy."
    },
    {
      id: "dm-35",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A platform receives harmful UGC reports. What response is strongest?",
      options: [
        "Ignore reports",
        "Apply moderation policy, review severity, remove violating content, preserve evidence, and improve detection",
        "Remove all users",
        "Promote the content",
      ],
      correctIndex: 1,
      explanation: "UGC platforms need policy enforcement and evidence-based moderation."
    },
    {
      id: "dm-36",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A new game has strong downloads but poor revenue. What should be analyzed?",
      options: [
        "Only keyboard brand",
        "Only box art",
        "Only employee count",
        "Retention, monetization funnel, conversion to payer, ARPDAU, pricing, gameplay economy, and user segments",
      ],
      correctIndex: 3,
      explanation: "Game revenue depends on engagement and monetization design."
    },
    {
      id: "dm-37",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A music track is used in an advertisement. What license is most relevant?",
      options: [
        "Sync license",
        "Warehouse lease",
        "Retail markdown",
        "Insurance deductible",
      ],
      correctIndex: 0,
      explanation: "Sync licensing covers music used with visual media."
    },
    {
      id: "dm-38",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A news publisher wants more subscription conversion. What should be tested?",
      options: [
        "Only printer speed",
        "Only office layout",
        "Paywall strategy, content value, registration flow, pricing, trust, and audience segments",
        "Only headline font",
      ],
      correctIndex: 2,
      explanation: "Subscription conversion depends on value, pricing, and funnel experience."
    },
    {
      id: "dm-39",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A streaming service expands internationally. What operational need grows?",
      options: [
        "Only employee badges",
        "Localization, regional rights, subtitles/dubbing, payment methods, compliance, and catalog strategy",
        "Only a new chair",
        "Only domestic ad sales",
      ],
      correctIndex: 1,
      explanation: "International media expansion requires rights and localization readiness."
    },
    {
      id: "dm-40",
      type: "mcq",
      title: "Applied Scenario",
      prompt: "A PR claim says a show is successful based only on views. What should be added?",
      options: [
        "Only production lunch cost",
        "Only number of posters",
        "Completion, retention, subscriber impact, engagement, cost, and revenue contribution",
        "Only trailer music volume",
      ],
      correctIndex: 2,
      explanation: "Media success should be measured through engagement and business outcomes, not just starts."
    }
  ],
};
