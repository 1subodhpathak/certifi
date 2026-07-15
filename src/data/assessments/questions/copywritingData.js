import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Copywriting for Conversion assessment.
// Questions progress from copywriting fundamentals to persuasion psychology,
// offer strategy, headline writing, landing pages, email, ads, UX microcopy,
// conversion optimization, editing, ethics, and advanced messaging judgment.
export const copywritingData = {
  id: ASSESSMENT_TYPES.copywriting,
  title: 'Copywriting for Conversion Professional Certification',
  shortTitle: 'Copywriting',
  category: 'Marketing',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional copywriting assessment covering persuasion, headlines, offers, benefits, positioning, landing pages, CTAs, email copy, ad copy, UX microcopy, objection handling, editing, conversion psychology, and ethical messaging.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and test practical conversion copywriting judgment, not only terminology.',
  questions: [
    {
      id: 'cw-01',
      type: 'mcq',
      title: 'Core Concept',
      prompt: 'What is the main goal of conversion-focused copywriting?',
      options: [
        'To sound clever and entertaining',
        'To persuade a specific audience to take a specific action',
        'To fill empty space on a page',
        'To use as many persuasive words as possible'
      ],
      correctIndex: 1,
      explanation:
        'Conversion copywriting is written to move a defined audience toward a clear action, such as signing up, buying, booking, or downloading.'
    },
    {
      id: 'cw-02',
      type: 'mcq',
      title: 'Audience Understanding',
      prompt: 'What should strong copy start with?',
      options: [
        'A clever headline before research',
        'A clear understanding of the audience, their problem, desire, objections, and decision stage',
        'A long list of product features',
        'A discount code'
      ],
      correctIndex: 1,
      explanation:
        'Copy works best when it reflects the audience’s real pains, goals, language, objections, and buying context.'
    },
    {
      id: 'cw-03',
      type: 'mcq',
      title: 'AIDA Formula',
      prompt: 'What does the AIDA formula stand for?',
      options: [
        'Action, Interest, Data, Analysis',
        'Attention, Interest, Desire, Action',
        'Awareness, Inform, Decide, Apply',
        'Audience, Insight, Design, Appeal'
      ],
      correctIndex: 1,
      explanation:
        'AIDA is a classic persuasive structure: Attention, Interest, Desire, and Action.'
    },
    {
      id: 'cw-04',
      type: 'mcq',
      title: 'PAS Formula',
      prompt: 'What does the PAS copywriting formula stand for?',
      options: [
        'Problem, Agitate, Solution',
        'Product, Audience, Sales',
        'Persuade, Act, Succeed',
        'Plan, Apply, Scale'
      ],
      correctIndex: 0,
      explanation:
        'PAS identifies the problem, intensifies the cost or urgency of the problem, and presents the solution.'
    },
    {
      id: 'cw-05',
      type: 'mcq',
      title: 'Feature vs Benefit',
      prompt: 'What is the difference between a feature and a benefit?',
      options: [
        'There is no difference',
        'A feature describes what the product has; a benefit explains why it matters to the customer',
        'A benefit is always technical',
        'A feature is always emotional'
      ],
      correctIndex: 1,
      explanation:
        'Features describe the product. Benefits translate those features into customer value.'
    },
    {
      id: 'cw-06',
      type: 'mcq',
      title: 'Benefit Translation',
      prompt: 'Which option best turns the feature “automated weekly reports” into a benefit?',
      options: [
        'Our tool has automated weekly reports.',
        'Reports are sent weekly.',
        'Save hours every week by getting client-ready reports automatically.',
        'Weekly reports are available in the dashboard.'
      ],
      correctIndex: 2,
      explanation:
        'The best option explains the customer outcome: saving time and getting reports ready automatically.'
    },
    {
      id: 'cw-07',
      type: 'mcq',
      title: 'The You Rule',
      prompt: 'Why is “you” powerful in copywriting?',
      options: [
        'It is short and easy to spell',
        'It makes the reader the focus of the message',
        'It makes copy more formal',
        'It replaces the need for proof'
      ],
      correctIndex: 1,
      explanation:
        'Good copy focuses on the reader’s goals, problems, and outcomes rather than only talking about the company.'
    },
    {
      id: 'cw-08',
      type: 'mcq',
      title: 'Clarity',
      prompt: 'Which copy is clearest?',
      options: [
        'Unlock next-generation transformation with innovative excellence.',
        'Create invoices in under 60 seconds and get paid faster.',
        'Our solution is robust, scalable, and dynamic.',
        'Experience the future of operational empowerment.'
      ],
      correctIndex: 1,
      explanation:
        'Clear copy explains the action and outcome in simple, specific language.'
    },
    {
      id: 'cw-09',
      type: 'mcq',
      title: 'Jargon',
      prompt: 'Why should jargon usually be avoided in conversion copy?',
      options: [
        'It is always illegal',
        'It can confuse readers and create friction',
        'It always improves trust',
        'It makes every offer premium'
      ],
      correctIndex: 1,
      explanation:
        'Clear language usually converts better because readers understand the value quickly.'
    },
    {
      id: 'cw-10',
      type: 'mcq',
      title: 'Active Voice',
      prompt: 'Which sentence uses active voice?',
      options: [
        'The report was created by our platform.',
        'Our platform creates the report automatically.',
        'The report is being created automatically by the platform.',
        'Reports are created after processing is completed.'
      ],
      correctIndex: 1,
      explanation:
        'In active voice, the subject performs the action: “Our platform creates...”'
    },
    {
      id: 'cw-11',
      type: 'mcq',
      title: 'Headline Quality',
      prompt: 'Which headline is strongest for a productivity app?',
      options: [
        'Welcome to Our App',
        'A Better Way to Work',
        'Cut Weekly Admin Work by 5 Hours Without Hiring More Staff',
        'Productivity, Reinvented'
      ],
      correctIndex: 2,
      explanation:
        'The strongest headline is specific, outcome-driven, and clearly tied to a valuable result.'
    },
    {
      id: 'cw-12',
      type: 'mcq',
      title: '4 U Formula',
      prompt: 'What are the 4 U’s of effective headlines?',
      options: [
        'Unique, Useful, Urgent, Ultra-specific',
        'Universal, Understood, Upbeat, Unusual',
        'User-centric, Useful, Unique, Updated',
        'Urgent, Useful, Unified, Unlimited'
      ],
      correctIndex: 0,
      explanation:
        'A strong headline is often useful, urgent, unique, and ultra-specific.'
    },
    {
      id: 'cw-13',
      type: 'mcq',
      title: 'Curiosity Gap',
      prompt: 'What is the curiosity gap?',
      options: [
        'A headline with no useful information',
        'The space between what the reader knows and what they want to know',
        'A pricing strategy',
        'A legal disclaimer'
      ],
      correctIndex: 1,
      explanation:
        'The curiosity gap creates interest by making the reader want to close the knowledge gap.'
    },
    {
      id: 'cw-14',
      type: 'mcq',
      title: 'Curiosity Ethics',
      prompt: 'When does curiosity-based copy become weak or harmful?',
      options: [
        'When it creates interest and delivers on the promise',
        'When it uses misleading clickbait and fails to satisfy the reader',
        'When it is specific',
        'When it is relevant to the offer'
      ],
      correctIndex: 1,
      explanation:
        'Curiosity works only when the content delivers. Misleading clickbait damages trust.'
    },
    {
      id: 'cw-15',
      type: 'mcq',
      title: 'Unique Selling Proposition',
      prompt: 'What is a USP?',
      options: [
        'A temporary discount',
        'The specific reason a customer should choose your product over alternatives',
        'A generic slogan',
        'A company mission statement only'
      ],
      correctIndex: 1,
      explanation:
        'A USP clearly communicates what makes the product meaningfully different and valuable.'
    },
    {
      id: 'cw-16',
      type: 'mcq',
      title: 'Positioning',
      prompt: 'Which statement is strongest positioning?',
      options: [
        'We help everyone do everything better.',
        'We provide software solutions.',
        'Project management software for agencies that need client approvals, timelines, and billing in one place.',
        'We are an innovative platform for the future.'
      ],
      correctIndex: 2,
      explanation:
        'Strong positioning identifies the audience, category, use case, and differentiated value.'
    },
    {
      id: 'cw-17',
      type: 'mcq',
      title: 'Offer Strategy',
      prompt: 'What makes an offer strong?',
      options: [
        'A clear outcome, relevant value, reduced risk, urgency when real, and a simple next step',
        'A vague promise and many conditions',
        'A long paragraph with no CTA',
        'A discount without explaining value'
      ],
      correctIndex: 0,
      explanation:
        'Strong offers make the value clear, reduce hesitation, and tell the reader exactly what to do next.'
    },
    {
      id: 'cw-18',
      type: 'mcq',
      title: 'Social Proof',
      prompt: 'Which is the strongest example of social proof?',
      options: [
        'We think our product is great.',
        'Trusted by 3,200 finance teams, with a 4.8/5 average rating from verified users.',
        'Our company has a blue logo.',
        'This product has many features.'
      ],
      correctIndex: 1,
      explanation:
        'Specific, verifiable customer evidence is stronger than vague claims.'
    },
    {
      id: 'cw-19',
      type: 'mcq',
      title: 'Specificity',
      prompt: 'Which sentence is most specific?',
      options: [
        'Our customers get great results.',
        'Teams improve productivity quickly.',
        'Customers reduce invoice processing time by an average of 37% in the first 60 days.',
        'Our product is very useful.'
      ],
      correctIndex: 2,
      explanation:
        'Specific numbers, timeframes, and outcomes make claims more credible.'
    },
    {
      id: 'cw-20',
      type: 'mcq',
      title: 'Objection Handling',
      prompt: 'What is objection handling in copy?',
      options: [
        'Arguing with customers',
        'Addressing doubts, risks, and concerns before they stop the reader from taking action',
        'Ignoring negative feedback',
        'Hiding pricing information forever'
      ],
      correctIndex: 1,
      explanation:
        'Good copy anticipates objections such as price, time, trust, complexity, and risk.'
    },
    {
      id: 'cw-21',
      type: 'mcq',
      title: 'Risk Reversal',
      prompt: 'Which copy uses risk reversal?',
      options: [
        'Buy now because we said so.',
        'Try it for 14 days. Cancel anytime before billing.',
        'This product is advanced.',
        'We have many customers.'
      ],
      correctIndex: 1,
      explanation:
        'Risk reversal reduces fear by making the action feel safer.'
    },
    {
      id: 'cw-22',
      type: 'mcq',
      title: 'Urgency',
      prompt: 'Which phrase creates genuine urgency?',
      options: [
        'Available whenever',
        'Enrollment closes Friday at 11:59 PM',
        'We have a website',
        'Quality service since 2020'
      ],
      correctIndex: 1,
      explanation:
        'Genuine urgency is specific and based on a real deadline or constraint.'
    },
    {
      id: 'cw-23',
      type: 'mcq',
      title: 'Scarcity',
      prompt: 'Which is an ethical use of scarcity?',
      options: [
        'Only 10 seats are available because live feedback is limited to 10 participants.',
        'Only 2 left forever, even though inventory is unlimited.',
        'Everyone must buy now.',
        'This offer may or may not exist.'
      ],
      correctIndex: 0,
      explanation:
        'Scarcity should be truthful and tied to a real constraint.'
    },
    {
      id: 'cw-24',
      type: 'mcq',
      title: 'Loss Aversion',
      prompt: 'What is loss aversion in copywriting?',
      options: [
        'The idea that people are often more motivated to avoid losses than to achieve equivalent gains',
        'The fear of writing short copy',
        'A discounting method',
        'A design principle only'
      ],
      correctIndex: 0,
      explanation:
        'Loss aversion explains why avoiding a negative outcome can be a strong motivator.'
    },
    {
      id: 'cw-25',
      type: 'mcq',
      title: 'CTA Quality',
      prompt: 'Which CTA is strongest for a lead magnet?',
      options: [
        'Submit',
        'Click here',
        'Get My Free Checklist',
        'Continue'
      ],
      correctIndex: 2,
      explanation:
        'The strongest CTA communicates the value the user receives.'
    },
    {
      id: 'cw-26',
      type: 'mcq',
      title: 'CTA Placement',
      prompt: 'Where should CTAs usually appear on a landing page?',
      options: [
        'Only once at the very bottom',
        'At relevant decision points after value, proof, or objection handling',
        'Only in the footer',
        'Only before the headline'
      ],
      correctIndex: 1,
      explanation:
        'CTAs should appear where the reader has enough context to take the next step.'
    },
    {
      id: 'cw-27',
      type: 'mcq',
      title: 'Landing Page Structure',
      prompt: 'Which landing page flow is strongest for conversion?',
      options: [
        'Headline, problem, value proposition, proof, offer, objection handling, CTA',
        'Logo, random paragraph, legal text, unrelated blog links',
        'Feature list only',
        'Testimonials before explaining the product'
      ],
      correctIndex: 0,
      explanation:
        'A strong landing page guides the reader from attention to understanding, trust, and action.'
    },
    {
      id: 'cw-28',
      type: 'mcq',
      title: 'Hero Section',
      prompt: 'What should a strong hero section usually communicate?',
      options: [
        'Who it is for, what it helps them do, why it matters, and what to do next',
        'Only the company founding story',
        'Only a vague tagline',
        'Every detail about the product'
      ],
      correctIndex: 0,
      explanation:
        'A hero section should quickly answer relevance, value, differentiation, and next action.'
    },
    {
      id: 'cw-29',
      type: 'mcq',
      title: 'Email Subject Line',
      prompt: 'Which subject line is strongest for a business report download?',
      options: [
        'Newsletter 42',
        'Important Update',
        '2026 SaaS Retention Benchmarks: What Changed and Why',
        'Hello'
      ],
      correctIndex: 2,
      explanation:
        'The strongest subject line is specific, relevant, and promises clear value.'
    },
    {
      id: 'cw-30',
      type: 'mcq',
      title: 'Email Copy',
      prompt: 'What is the best first line for a re-engagement email?',
      options: [
        'We have not seen you in a while, so buy now.',
        'Still trying to reduce manual reporting time?',
        'Our company has many features.',
        'This is a reminder email.'
      ],
      correctIndex: 1,
      explanation:
        'A strong re-engagement opening reconnects with the reader’s problem or goal.'
    },
    {
      id: 'cw-31',
      type: 'mcq',
      title: 'Ad Copy',
      prompt: 'Which ad copy is strongest?',
      options: [
        'Best platform for everyone.',
        'Automate client reports in minutes, not hours. Start free.',
        'We are innovative and scalable.',
        'Click this ad now.'
      ],
      correctIndex: 1,
      explanation:
        'Strong ad copy is specific, benefit-led, and action-oriented.'
    },
    {
      id: 'cw-32',
      type: 'mcq',
      title: 'Microcopy',
      prompt: 'What is microcopy?',
      options: [
        'Tiny text that does not matter',
        'Small UX text such as buttons, form hints, error messages, tooltips, and confirmation text',
        'Only short social posts',
        'A type of legal contract'
      ],
      correctIndex: 1,
      explanation:
        'Microcopy guides users through actions and can strongly affect trust, clarity, and conversion.'
    },
    {
      id: 'cw-33',
      type: 'mcq',
      title: 'Error Message Copy',
      prompt: 'Which error message is best?',
      options: [
        'Error.',
        'Invalid.',
        'Please enter a valid email address, like name@company.com.',
        'You did this wrong.'
      ],
      correctIndex: 2,
      explanation:
        'A good error message explains the problem and helps the user fix it.'
    },
    {
      id: 'cw-34',
      type: 'mcq',
      title: 'Form Copy',
      prompt: 'Which form label is clearest?',
      options: [
        'Info',
        'Stuff',
        'Work Email',
        'Data Point'
      ],
      correctIndex: 2,
      explanation:
        'Clear labels reduce friction and help users understand what information is required.'
    },
    {
      id: 'cw-35',
      type: 'mcq',
      title: 'Readability',
      prompt: 'How do you improve readability for digital copy?',
      options: [
        'Use long paragraphs and complex sentences',
        'Use short sentences, clear headings, bullets, white space, and simple language',
        'Use small fonts to fit more copy',
        'Avoid formatting completely'
      ],
      correctIndex: 1,
      explanation:
        'Digital readers scan. Clear structure and simple language improve comprehension and conversion.'
    },
    {
      id: 'cw-36',
      type: 'mcq',
      title: 'Editing',
      prompt: 'What is the most important step after writing a first draft?',
      options: [
        'Publish immediately',
        'Edit aggressively to remove fluff, sharpen the message, and improve clarity',
        'Add more adjectives',
        'Make every sentence longer'
      ],
      correctIndex: 1,
      explanation:
        'Strong copy usually comes from editing: cutting weak words, clarifying value, and improving flow.'
    },
    {
      id: 'cw-37',
      type: 'mcq',
      title: 'Voice of Customer',
      prompt: 'What is voice-of-customer research used for?',
      options: [
        'Finding the exact language customers use to describe pains, goals, objections, and outcomes',
        'Replacing all copywriting with random reviews',
        'Writing only technical documentation',
        'Avoiding audience research'
      ],
      correctIndex: 0,
      explanation:
        'Voice-of-customer research helps copy sound relevant, specific, and credible.'
    },
    {
      id: 'cw-38',
      type: 'mcq',
      title: 'A/B Testing Copy',
      prompt: 'What is the best way to test two headlines?',
      options: [
        'Change the headline and five other elements at the same time',
        'Run a controlled A/B test with one major variable changed and a clear success metric',
        'Ask only one employee which headline they like',
        'Launch the longer headline because longer is always better'
      ],
      correctIndex: 1,
      explanation:
        'A valid copy test should isolate the variable and measure a meaningful outcome.'
    },
    {
      id: 'cw-39',
      type: 'mcq',
      title: 'Ethical Copywriting',
      prompt: 'Which copywriting practice is most ethical?',
      options: [
        'Exaggerating results to increase conversions',
        'Using truthful claims, clear terms, real urgency, and evidence-backed proof',
        'Hiding cancellation terms',
        'Inventing testimonials'
      ],
      correctIndex: 1,
      explanation:
        'Ethical copy persuades without misleading, manipulating, or hiding important information.'
    },
    {
      id: 'cw-40',
      type: 'mcq',
      title: 'Advanced Conversion Judgment',
      prompt: 'A landing page has high traffic but low conversion. What is the strongest copywriting diagnosis approach?',
      options: [
        'Rewrite everything immediately based on personal preference',
        'Analyze audience-message fit, headline clarity, offer strength, proof, objections, CTA, page friction, and traffic intent',
        'Add more exclamation marks',
        'Change only the button color'
      ],
      correctIndex: 1,
      explanation:
        'Low conversion can come from weak message match, unclear value, poor offer, lack of proof, unresolved objections, CTA friction, or mismatched traffic intent.'
    }
  ]
};