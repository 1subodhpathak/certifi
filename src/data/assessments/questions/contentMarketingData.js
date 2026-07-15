import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Content Marketing Strategy assessment.
// Questions progress from content fundamentals to audience strategy, SEO,
// funnel mapping, distribution, editorial planning, analytics, conversion,
// lifecycle management, governance, and advanced business impact measurement.
export const contentMarketingData = {
  id: ASSESSMENT_TYPES.content_marketing,
  title: 'Content Marketing Strategy Professional Certification',
  shortTitle: 'Content Mkt',
  category: 'Marketing',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional content marketing assessment covering strategy, audience research, buyer personas, funnel mapping, SEO, editorial planning, distribution, conversion, analytics, content lifecycle, governance, and business impact.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and test practical content marketing judgment, not only terminology.',
  questions: [
    {
      id: 'cm-01',
      type: 'mcq',
      title: 'Core Concept',
      prompt: 'What is the primary goal of content marketing?',
      options: [
        'To push immediate sales messages in every channel',
        'To attract, engage, and retain a clearly defined audience by creating valuable and relevant content',
        'To replace the sales team completely',
        'To post as frequently as possible without a strategy'
      ],
      correctIndex: 1,
      explanation:
        'Content marketing builds trust and demand by consistently delivering useful content to a defined audience.'
    },
    {
      id: 'cm-02',
      type: 'mcq',
      title: 'Audience Strategy',
      prompt: 'What should a content strategy start with?',
      options: [
        'Choosing random trending topics',
        'Understanding the audience, their problems, decision journey, and business goals',
        'Publishing as many posts as possible',
        'Copying competitors word for word'
      ],
      correctIndex: 1,
      explanation:
        'Strong content strategy starts with audience needs, business objectives, and the role content will play in the customer journey.'
    },
    {
      id: 'cm-03',
      type: 'mcq',
      title: 'Buyer Persona',
      prompt: 'What is a buyer persona?',
      options: [
        'A fictional celebrity used in ads',
        'A semi-fictional profile of an ideal customer based on research, data, and real customer insight',
        'A list of all employees in a company',
        'A social media username'
      ],
      correctIndex: 1,
      explanation:
        'Buyer personas help shape content topics, tone, objections, channels, and calls to action.'
    },
    {
      id: 'cm-04',
      type: 'mcq',
      title: 'Customer Pain Points',
      prompt: 'Why are customer pain points important in content marketing?',
      options: [
        'They help create content that answers real problems and builds relevance',
        'They make content longer automatically',
        'They are useful only for paid ads',
        'They replace the need for research'
      ],
      correctIndex: 0,
      explanation:
        'Content performs better when it addresses real problems, questions, risks, and goals of the target audience.'
    },
    {
      id: 'cm-05',
      type: 'mcq',
      title: 'Marketing Funnel',
      prompt: 'What does TOFU stand for in marketing?',
      options: [
        'Top of Funnel',
        'Target of Frequency Unit',
        'Total Outcome for Users',
        'Technically Optimized for Usability'
      ],
      correctIndex: 0,
      explanation:
        'Top of Funnel content focuses on awareness, education, and problem discovery.'
    },
    {
      id: 'cm-06',
      type: 'mcq',
      title: 'Funnel Mapping',
      prompt: 'Which content type is usually best for top-of-funnel awareness?',
      options: [
        'Introductory educational blog post or guide',
        'Detailed pricing comparison for final decision',
        'Contract renewal form',
        'Customer invoice'
      ],
      correctIndex: 0,
      explanation:
        'Top-of-funnel content helps people understand a problem or opportunity before they are ready to buy.'
    },
    {
      id: 'cm-07',
      type: 'mcq',
      title: 'Middle of Funnel',
      prompt: 'Which content is most suitable for middle-of-funnel consideration?',
      options: [
        'Generic inspirational quote',
        'Comparison guide, case study, webinar, or solution explainer',
        'Company holiday calendar',
        'Random meme unrelated to the product'
      ],
      correctIndex: 1,
      explanation:
        'Middle-of-funnel content helps prospects evaluate possible solutions and understand why one approach may be better.'
    },
    {
      id: 'cm-08',
      type: 'mcq',
      title: 'Bottom of Funnel',
      prompt: 'Which content is most suitable for bottom-of-funnel decision-making?',
      options: [
        'Beginner industry awareness post',
        'Product demo, ROI calculator, pricing page, customer proof, or buyer checklist',
        'Unrelated lifestyle article',
        'General news summary'
      ],
      correctIndex: 1,
      explanation:
        'Bottom-of-funnel content helps prospects validate the purchase decision and reduce buying risk.'
    },
    {
      id: 'cm-09',
      type: 'mcq',
      title: 'Content Positioning',
      prompt: 'What makes content positioning strong?',
      options: [
        'It clearly connects audience pain, differentiated insight, and the brand’s point of view',
        'It uses the longest possible headline',
        'It avoids mentioning the audience',
        'It copies competitor messaging exactly'
      ],
      correctIndex: 0,
      explanation:
        'Strong positioning makes content memorable, useful, and clearly connected to the brand’s expertise.'
    },
    {
      id: 'cm-10',
      type: 'mcq',
      title: 'Owned Media',
      prompt: 'What is owned media?',
      options: [
        'Paid advertisements',
        'Channels controlled by the brand, such as website, blog, newsletter, or app',
        'Press coverage from journalists',
        'Organic mentions by customers only'
      ],
      correctIndex: 1,
      explanation:
        'Owned media includes channels the company controls and can use to build long-term audience assets.'
    },
    {
      id: 'cm-11',
      type: 'mcq',
      title: 'Earned Media',
      prompt: 'Which is an example of earned media?',
      options: [
        'A paid LinkedIn ad',
        'A customer review, journalist mention, or organic social share',
        'A company blog post',
        'An internal content calendar'
      ],
      correctIndex: 1,
      explanation:
        'Earned media is exposure gained through reputation, customer advocacy, PR, or organic sharing.'
    },
    {
      id: 'cm-12',
      type: 'mcq',
      title: 'Paid Distribution',
      prompt: 'When is paid distribution useful in content marketing?',
      options: [
        'When a high-value content asset needs targeted reach beyond existing organic audience',
        'Only when the content has no value',
        'Only after deleting owned channels',
        'When the goal is to avoid measuring performance'
      ],
      correctIndex: 0,
      explanation:
        'Paid distribution can accelerate reach for high-value content when audience targeting and conversion paths are clear.'
    },
    {
      id: 'cm-13',
      type: 'mcq',
      title: 'SEO and Content',
      prompt: 'What is the relationship between SEO and content marketing?',
      options: [
        'They are unrelated',
        'SEO helps identify search demand, while content satisfies that demand with useful answers',
        'SEO only matters for developers',
        'Content marketing replaces keyword research'
      ],
      correctIndex: 1,
      explanation:
        'SEO and content work together: research reveals audience intent, and content provides useful, findable answers.'
    },
    {
      id: 'cm-14',
      type: 'mcq',
      title: 'Search Intent',
      prompt: 'What does search intent mean?',
      options: [
        'The reason behind a user’s search query',
        'The number of characters in a headline',
        'The color of search results',
        'The total number of blog posts published'
      ],
      correctIndex: 0,
      explanation:
        'Search intent explains what the user is trying to accomplish, such as learning, comparing, buying, or navigating.'
    },
    {
      id: 'cm-15',
      type: 'mcq',
      title: 'Keyword Strategy',
      prompt: 'Which keyword is usually most valuable for high purchase intent?',
      options: [
        'What is project management?',
        'Best project management software for agencies',
        'History of project management',
        'Funny project management quotes'
      ],
      correctIndex: 1,
      explanation:
        'Comparison and “best software” queries often indicate that the user is actively evaluating solutions.'
    },
    {
      id: 'cm-16',
      type: 'mcq',
      title: 'Pillar Page',
      prompt: 'What is a pillar page?',
      options: [
        'A short announcement post',
        'A comprehensive page on a core topic that links to related cluster content',
        'A page used only for legal disclaimers',
        'A landing page without internal links'
      ],
      correctIndex: 1,
      explanation:
        'Pillar pages organize broad topics and connect related articles, improving user experience and topical authority.'
    },
    {
      id: 'cm-17',
      type: 'mcq',
      title: 'Topic Cluster',
      prompt: 'What is the purpose of a topic cluster?',
      options: [
        'To group related content around a central topic and build topical authority',
        'To publish unrelated content faster',
        'To remove all internal links',
        'To avoid SEO research'
      ],
      correctIndex: 0,
      explanation:
        'Topic clusters connect related content around a main subject, helping both users and search engines understand expertise.'
    },
    {
      id: 'cm-18',
      type: 'mcq',
      title: 'Evergreen Content',
      prompt: 'What is evergreen content?',
      options: [
        'Content about plants',
        'Content that remains relevant and useful over a long period',
        'A one-day sale announcement',
        'Breaking news coverage only'
      ],
      correctIndex: 1,
      explanation:
        'Evergreen content continues to attract value over time because the topic remains relevant.'
    },
    {
      id: 'cm-19',
      type: 'mcq',
      title: 'Timely Content',
      prompt: 'When is timely or trend-based content most useful?',
      options: [
        'When the goal is to respond to current events, product launches, industry news, or seasonal demand',
        'When the content should never expire',
        'When SEO does not matter',
        'When the brand has no clear audience'
      ],
      correctIndex: 0,
      explanation:
        'Timely content can capture current demand and relevance, but usually has a shorter shelf life than evergreen content.'
    },
    {
      id: 'cm-20',
      type: 'mcq',
      title: 'Content Calendar',
      prompt: 'What is a content calendar?',
      options: [
        'A list of public holidays only',
        'A publishing plan that defines what content will be published, when, by whom, and on which channels',
        'A folder of old images',
        'A personal diary'
      ],
      correctIndex: 1,
      explanation:
        'A content calendar improves consistency, accountability, planning, and alignment with campaigns.'
    },
    {
      id: 'cm-21',
      type: 'mcq',
      title: 'Editorial Governance',
      prompt: 'Why is editorial governance important?',
      options: [
        'It creates standards for quality, voice, review, approval, compliance, and publishing consistency',
        'It makes every article sound robotic',
        'It removes the need for editors',
        'It prevents content from being measured'
      ],
      correctIndex: 0,
      explanation:
        'Governance ensures content is accurate, consistent, compliant, and aligned with brand standards.'
    },
    {
      id: 'cm-22',
      type: 'mcq',
      title: 'Tone of Voice',
      prompt: 'Why is tone of voice important in content marketing?',
      options: [
        'It creates consistent brand personality and trust across touchpoints',
        'It allows the brand to avoid audience research',
        'It means every post must sound formal',
        'It is useful only for social media captions'
      ],
      correctIndex: 0,
      explanation:
        'A consistent voice helps audiences recognize and trust the brand.'
    },
    {
      id: 'cm-23',
      type: 'mcq',
      title: 'CTA',
      prompt: 'What is a CTA?',
      options: [
        'Content Timing Algorithm',
        'Call To Action',
        'Customer Target Area',
        'Click Tracking API'
      ],
      correctIndex: 1,
      explanation:
        'A Call To Action tells the audience what to do next, such as download, subscribe, book a demo, or read more.'
    },
    {
      id: 'cm-24',
      type: 'mcq',
      title: 'CTA Quality',
      prompt: 'Which CTA is strongest for a bottom-of-funnel product page?',
      options: [
        'Learn random things',
        'Book a product demo',
        'Maybe click here',
        'Read our company history'
      ],
      correctIndex: 1,
      explanation:
        'A bottom-of-funnel CTA should guide a high-intent visitor toward a buying or sales conversation.'
    },
    {
      id: 'cm-25',
      type: 'mcq',
      title: 'Gated Content',
      prompt: 'What is gated content?',
      options: [
        'Content that requires a user to provide information before access',
        'Content about physical gates',
        'Content that cannot be measured',
        'Any content posted on social media'
      ],
      correctIndex: 0,
      explanation:
        'Gated content is often used for lead generation, such as reports, templates, whitepapers, or webinars.'
    },
    {
      id: 'cm-26',
      type: 'mcq',
      title: 'Lead Magnet',
      prompt: 'Which asset is usually a strong B2B lead magnet?',
      options: [
        'A vague motivational quote',
        'An industry benchmark report, ROI calculator, checklist, template, or practical guide',
        'A random meme',
        'A press release with no audience value'
      ],
      correctIndex: 1,
      explanation:
        'Strong lead magnets offer specific value that helps the buyer solve a problem or make a decision.'
    },
    {
      id: 'cm-27',
      type: 'mcq',
      title: 'Content Repurposing',
      prompt: 'What is content repurposing?',
      options: [
        'Deleting old content',
        'Adapting one strong content asset into multiple formats and channels',
        'Copying competitors’ content',
        'Publishing the same post without changes everywhere'
      ],
      correctIndex: 1,
      explanation:
        'Repurposing extends the value of content by adapting it into formats such as video, social posts, newsletters, webinars, or infographics.'
    },
    {
      id: 'cm-28',
      type: 'mcq',
      title: 'Content Audit',
      prompt: 'What is the goal of a content audit?',
      options: [
        'To evaluate existing content performance, quality, relevance, SEO value, and business impact',
        'To count words only',
        'To delete all older content',
        'To check only spelling mistakes'
      ],
      correctIndex: 0,
      explanation:
        'A content audit identifies what to keep, update, consolidate, redirect, repurpose, or remove.'
    },
    {
      id: 'cm-29',
      type: 'mcq',
      title: 'Content Refresh',
      prompt: 'When should content be refreshed?',
      options: [
        'When it has declining traffic, outdated information, weak conversion, or ranking opportunity',
        'Only when the brand changes its logo',
        'Never, because published content should not change',
        'Only after every competitor has copied it'
      ],
      correctIndex: 0,
      explanation:
        'Refreshing content can recover rankings, improve accuracy, increase conversion, and extend content lifespan.'
    },
    {
      id: 'cm-30',
      type: 'mcq',
      title: 'Content Pruning',
      prompt: 'What is content pruning?',
      options: [
        'Improving, consolidating, redirecting, or removing low-value content',
        'Adding more keywords to every sentence',
        'Publishing more low-quality posts',
        'Changing all article images'
      ],
      correctIndex: 0,
      explanation:
        'Content pruning improves overall site quality by addressing outdated, duplicate, thin, or underperforming pages.'
    },
    {
      id: 'cm-31',
      type: 'mcq',
      title: 'B2B Content',
      prompt: 'How does B2B content marketing typically differ from B2C content marketing?',
      options: [
        'B2B usually focuses more on education, logic, ROI, stakeholder alignment, and longer buying cycles',
        'B2B content never uses emotion',
        'B2B content only works on LinkedIn',
        'B2B content does not need measurement'
      ],
      correctIndex: 0,
      explanation:
        'B2B buying often involves multiple stakeholders, higher risk, longer cycles, and a stronger need for proof and business justification.'
    },
    {
      id: 'cm-32',
      type: 'mcq',
      title: 'Case Studies',
      prompt: 'What makes a customer case study strong?',
      options: [
        'It clearly explains the customer problem, solution, measurable outcome, and proof',
        'It only praises the company',
        'It avoids numbers and business context',
        'It hides the customer challenge'
      ],
      correctIndex: 0,
      explanation:
        'Strong case studies show credible transformation through context, solution, results, and evidence.'
    },
    {
      id: 'cm-33',
      type: 'mcq',
      title: 'Thought Leadership',
      prompt: 'What makes thought leadership content credible?',
      options: [
        'A clear point of view supported by evidence, experience, data, or expert insight',
        'Using complicated words without evidence',
        'Posting opinions without relevance',
        'Repeating what everyone already says'
      ],
      correctIndex: 0,
      explanation:
        'Credible thought leadership provides a differentiated, useful perspective backed by substance.'
    },
    {
      id: 'cm-34',
      type: 'mcq',
      title: 'Content Quality Metric',
      prompt: 'Which metric best helps evaluate whether readers are meaningfully consuming a long-form article?',
      options: [
        'Average engagement time, scroll depth, and relevant conversion behavior',
        'Number of posts published',
        'Total employees in the company',
        'Number of stock images used'
      ],
      correctIndex: 0,
      explanation:
        'Engagement and conversion signals show whether the audience is actually consuming and acting on content.'
    },
    {
      id: 'cm-35',
      type: 'mcq',
      title: 'Vanity Metrics',
      prompt: 'Which is a vanity metric if used alone?',
      options: [
        'Pageviews without engagement, conversion, or business context',
        'Pipeline influenced by content',
        'Trial signups from content',
        'Qualified leads from a webinar'
      ],
      correctIndex: 0,
      explanation:
        'Pageviews alone may not show whether content is attracting the right audience or driving business outcomes.'
    },
    {
      id: 'cm-36',
      type: 'mcq',
      title: 'Attribution',
      prompt: 'Why is attribution difficult in content marketing?',
      options: [
        'Buyers often interact with multiple content pieces and channels before converting',
        'Content never influences buyers',
        'Only one page can ever affect a sale',
        'Attribution is unrelated to marketing'
      ],
      correctIndex: 0,
      explanation:
        'Content often contributes across the journey, making single-touch attribution incomplete.'
    },
    {
      id: 'cm-37',
      type: 'mcq',
      title: 'Content ROI',
      prompt: 'Which is the strongest way to evaluate content marketing ROI?',
      options: [
        'Measure business outcomes such as qualified leads, pipeline, revenue influence, retention, or cost efficiency against content investment',
        'Count how many words were written',
        'Track only likes and comments',
        'Ask the team if the content looks nice'
      ],
      correctIndex: 0,
      explanation:
        'Content ROI should connect investment to meaningful business outcomes, not only activity or reach.'
    },
    {
      id: 'cm-38',
      type: 'mcq',
      title: 'Distribution Strategy',
      prompt: 'A strong content asset is published but gets little traction. What is the best next step?',
      options: [
        'Assume the content failed and delete it immediately',
        'Build a distribution plan across SEO, email, social, communities, sales enablement, partnerships, and paid channels where relevant',
        'Publish more random content',
        'Stop measuring results'
      ],
      correctIndex: 1,
      explanation:
        'Even strong content needs intentional distribution to reach the right audience.'
    },
    {
      id: 'cm-39',
      type: 'mcq',
      title: 'Content and Sales Alignment',
      prompt: 'How can content support the sales team most effectively?',
      options: [
        'By creating assets that answer buyer objections, explain value, prove ROI, and support each sales stage',
        'By avoiding all product-related content',
        'By publishing only brand slogans',
        'By ignoring sales feedback'
      ],
      correctIndex: 0,
      explanation:
        'Sales-aligned content helps buyers move through evaluation and helps sales teams handle objections with useful proof.'
    },
    {
      id: 'cm-40',
      type: 'mcq',
      title: 'Advanced Strategy Judgment',
      prompt: 'A company publishes 20 blog posts per month, but organic traffic, leads, and engagement are flat. What is the strongest strategic recommendation?',
      options: [
        'Publish 40 posts per month with the same process',
        'Pause volume-led publishing and audit content quality, search intent, topic strategy, distribution, conversion paths, and business alignment',
        'Stop content marketing permanently',
        'Change only the blog font'
      ],
      correctIndex: 1,
      explanation:
        'Flat results despite high output suggest the issue may be strategy, quality, intent, distribution, or conversion, not just publishing volume.'
    }
  ]
};