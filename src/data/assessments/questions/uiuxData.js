import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level UI/UX Design Strategy assessment.
// Questions cover research, information architecture, interaction design,
// accessibility, design systems, usability testing, product metrics,
// responsive design, ethics, and practical design judgment.
export const uiuxData = {
  id: ASSESSMENT_TYPES.uiux,
  title: 'UI/UX Design Strategy Professional Certification',
  shortTitle: 'UI/UX',
  category: 'Design & Creative',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Professional UI/UX assessment covering user research, information architecture, wireframing, prototyping, accessibility, interaction design, visual hierarchy, usability testing, design systems, responsive design, product metrics, and ethical design judgment.',
  instructions:
    'Choose the best answer for each design scenario. Questions move from fundamentals to practical product-design judgment and accessibility-aware decision-making.',
  questions: [
    {
      id: 'ui-01',
      type: 'mcq',
      title: 'User Persona',
      prompt: 'What is the primary goal of a user persona?',
      options: [
        'To design a logo for the product',
        'To create a research-informed representation of a target user group',
        'To replace usability testing',
        'To write final marketing copy'
      ],
      correctIndex: 1,
      explanation:
        'Personas help teams stay focused on user goals, needs, behaviors, and context rather than designing only from internal opinion.'
    },
    {
      id: 'ui-02',
      type: 'mcq',
      title: 'Visual Hierarchy',
      prompt: 'What does visual hierarchy refer to in UI design?',
      options: [
        'The company reporting structure',
        'The arrangement of elements to show importance and guide attention',
        'The folder structure of a design file',
        'Font size only'
      ],
      correctIndex: 1,
      explanation:
        'Visual hierarchy uses size, spacing, contrast, placement, typography, and color to help users understand what matters first.'
    },
    {
      id: 'ui-03',
      type: 'mcq',
      title: 'Accessibility Standard',
      prompt: 'What does WCAG stand for?',
      options: [
        'Web Color Accessibility Guide',
        'Web Content Accessibility Guidelines',
        'Website Component Audit Group',
        'Wireframe Compliance and Grid'
      ],
      correctIndex: 1,
      explanation:
        'WCAG stands for Web Content Accessibility Guidelines and provides a widely used standard for accessible digital experiences.'
    },
    {
      id: 'ui-04',
      type: 'mcq',
      title: 'Affordance',
      prompt: 'What is an affordance in interaction design?',
      options: [
        'The price of a design project',
        'A property of an object that suggests how it can be used',
        'A type of animation library',
        'A project management workflow'
      ],
      correctIndex: 1,
      explanation:
        'A button that looks clickable or a handle that suggests dragging are examples of affordances.'
    },
    {
      id: 'ui-05',
      type: 'mcq',
      title: 'Low-Fidelity Wireframe',
      prompt: 'What is the main purpose of a low-fidelity wireframe?',
      options: [
        'To finalize color and brand identity',
        'To explore layout, structure, and flow before visual polish',
        'To produce the final production UI',
        'To test server performance'
      ],
      correctIndex: 1,
      explanation:
        'Low-fidelity wireframes keep attention on structure, content priority, and task flow while remaining fast to change.'
    },
    {
      id: 'ui-06',
      type: 'mcq',
      title: 'Typography',
      prompt: 'What is kerning?',
      options: [
        'The space between lines of text',
        'The spacing between individual characters',
        'The thickness of a font',
        'The size of a paragraph'
      ],
      correctIndex: 1,
      explanation:
        'Kerning adjusts spacing between specific character pairs to improve readability and visual balance.'
    },
    {
      id: 'ui-07',
      type: 'mcq',
      title: 'Color Theory',
      prompt: 'What is a complementary color scheme?',
      options: [
        'Colors next to each other on the color wheel',
        'Colors opposite each other on the color wheel',
        'Different shades of one color',
        'Only black and white'
      ],
      correctIndex: 1,
      explanation:
        'Complementary colors create high contrast because they sit opposite each other on the color wheel.'
    },
    {
      id: 'ui-08',
      type: 'mcq',
      title: 'A/B Testing',
      prompt: 'What is A/B testing used for in product design?',
      options: [
        'Testing two versions to compare performance against a defined metric',
        'Testing only with two users',
        'Testing visual design without measuring behavior',
        'Replacing all user research'
      ],
      correctIndex: 0,
      explanation:
        'A/B testing compares variants using real behavior and a clear success metric.'
    },
    {
      id: 'ui-09',
      type: 'mcq',
      title: 'Information Architecture',
      prompt: 'What is a sitemap in UX design?',
      options: [
        'A physical map of an office',
        'A representation of a website or product structure and hierarchy',
        'A list of image files',
        'A button style guide'
      ],
      correctIndex: 1,
      explanation:
        'Sitemaps help teams organize content and navigation before detailed screen design.'
    },
    {
      id: 'ui-10',
      type: 'mcq',
      title: 'Fitts Law',
      prompt: 'What is Fitts Law primarily concerned with?',
      options: [
        'Color contrast between foreground and background',
        'The time required to reach a target based on its size and distance',
        'The number of words in a heading',
        'The loading speed of an image'
      ],
      correctIndex: 1,
      explanation:
        'Important actions should be easy to reach and large enough to interact with comfortably.'
    },
    {
      id: 'ui-11',
      type: 'mcq',
      title: 'Microinteraction',
      prompt: 'What is a microinteraction?',
      options: [
        'A small task-specific feedback moment such as a like animation or save confirmation',
        'A very short meeting',
        'A user interview under five minutes',
        'A hidden admin setting'
      ],
      correctIndex: 0,
      explanation:
        'Microinteractions provide feedback, communicate state, and make interfaces feel responsive.'
    },
    {
      id: 'ui-12',
      type: 'mcq',
      title: 'Responsive Design',
      prompt: 'What is a breakpoint in responsive design?',
      options: [
        'A point where an app crashes',
        'A screen width where the layout changes to better fit the device',
        'A pause in the user journey',
        'A disabled button state'
      ],
      correctIndex: 1,
      explanation:
        'Breakpoints help layouts adapt across mobile, tablet, desktop, and other screen sizes.'
    },
    {
      id: 'ui-13',
      type: 'mcq',
      title: 'Gestalt Principle',
      prompt: 'Which Gestalt principle states that objects close to each other are perceived as related?',
      options: [
        'Similarity',
        'Proximity',
        'Continuity',
        'Closure'
      ],
      correctIndex: 1,
      explanation:
        'Proximity is a core grouping principle and is especially important for forms, cards, and dashboards.'
    },
    {
      id: 'ui-14',
      type: 'mcq',
      title: 'Design Systems',
      prompt: 'What is the main purpose of a design system?',
      options: [
        'To make every screen look identical with no flexibility',
        'To provide reusable patterns, components, guidelines, and tokens for consistent product design',
        'To replace designers with templates',
        'To store only logos and brand colors'
      ],
      correctIndex: 1,
      explanation:
        'A design system improves consistency, speed, accessibility, and collaboration across teams.'
    },
    {
      id: 'ui-15',
      type: 'mcq',
      title: 'Dark Patterns',
      prompt: 'What is a dark pattern in UX?',
      options: [
        'A dark visual theme',
        'A deceptive interface pattern that manipulates users into actions they did not intend',
        'A broken link on a website',
        'A high-contrast accessibility mode'
      ],
      correctIndex: 1,
      explanation:
        'Dark patterns harm trust and can create legal, ethical, and brand risk.'
    },
    {
      id: 'ui-16',
      type: 'mcq',
      title: 'Mental Model',
      prompt: 'What is a mental model in UX?',
      options: [
        'A machine learning model',
        'A user’s internal understanding of how a system works based on prior experience',
        'A design sketch',
        'A research database'
      ],
      correctIndex: 1,
      explanation:
        'Designs that align with user mental models are easier to learn and use.'
    },
    {
      id: 'ui-17',
      type: 'mcq',
      title: 'White Space',
      prompt: 'What is white space or negative space?',
      options: [
        'An error in the background',
        'The empty space between design elements',
        'A blank page with no purpose',
        'Unused source code'
      ],
      correctIndex: 1,
      explanation:
        'White space improves focus, scanning, grouping, hierarchy, and perceived quality.'
    },
    {
      id: 'ui-18',
      type: 'mcq',
      title: 'Double Diamond',
      prompt: 'What does the Double Diamond model represent?',
      options: [
        'Two expensive design tools',
        'A process of discovering, defining, developing, and delivering solutions',
        'A type of grid system',
        'A luxury brand design pattern'
      ],
      correctIndex: 1,
      explanation:
        'The Double Diamond visualizes divergent and convergent thinking during problem discovery and solution development.'
    },
    {
      id: 'ui-19',
      type: 'mcq',
      title: 'Heuristic Evaluation',
      prompt: 'What is a heuristic evaluation?',
      options: [
        'A usability expert review of an interface against established principles',
        'A marketing campaign review',
        'A database performance test',
        'A survey sent only after launch'
      ],
      correctIndex: 0,
      explanation:
        'Heuristic evaluations help identify usability issues before or alongside user testing.'
    },
    {
      id: 'ui-20',
      type: 'mcq',
      title: 'Empathy Map',
      prompt: 'What is an empathy map used for?',
      options: [
        'Mapping physical store locations',
        'Synthesizing what users say, think, do, and feel',
        'Tracking cursor movement only',
        'Writing production code'
      ],
      correctIndex: 1,
      explanation:
        'Empathy maps help teams convert research into a shared understanding of user needs and emotions.'
    },
    {
      id: 'ui-21',
      type: 'mcq',
      title: 'Problem Framing',
      prompt: 'A stakeholder says, “Add a chatbot to reduce support tickets.” What should a UX designer do first?',
      options: [
        'Immediately design a chatbot screen',
        'Clarify the support problem, user intent, ticket categories, and success metrics',
        'Reject the request because chatbots are overused',
        'Copy a competitor chatbot'
      ],
      correctIndex: 1,
      explanation:
        'Strong UX starts by validating the problem before committing to a solution.'
    },
    {
      id: 'ui-22',
      type: 'mcq',
      title: 'Research Method Choice',
      prompt: 'You need to understand why users abandon checkout. Which approach is strongest?',
      options: [
        'Only ask the CEO',
        'Combine funnel analytics with session review, usability testing, and user interviews',
        'Change the button color immediately',
        'Ignore checkout because traffic is high'
      ],
      correctIndex: 1,
      explanation:
        'Behavioral data shows where drop-off happens, while qualitative research helps explain why.'
    },
    {
      id: 'ui-23',
      type: 'mcq',
      title: 'Usability Testing',
      prompt: 'What is the best instruction during a moderated usability test?',
      options: [
        'Tell users exactly where to click',
        'Give users realistic tasks and ask them to think aloud without leading them',
        'Explain the correct design first',
        'Ask only whether they like the colors'
      ],
      correctIndex: 1,
      explanation:
        'Good usability testing observes natural behavior and avoids leading the participant.'
    },
    {
      id: 'ui-24',
      type: 'mcq',
      title: 'Task Success',
      prompt: 'Which metric best measures whether users can complete a key workflow?',
      options: [
        'Task completion rate',
        'Number of brand colors',
        'Designer confidence level',
        'Total number of icons'
      ],
      correctIndex: 0,
      explanation:
        'Task completion rate directly measures whether users can achieve the intended outcome.'
    },
    {
      id: 'ui-25',
      type: 'mcq',
      title: 'Accessibility Contrast',
      prompt: 'A primary button uses light gray text on a white background. What is the likely accessibility issue?',
      options: [
        'Insufficient color contrast',
        'Too much animation',
        'Wrong layout grid',
        'Too many icons'
      ],
      correctIndex: 0,
      explanation:
        'Low contrast can make text difficult or impossible to read for many users.'
    },
    {
      id: 'ui-26',
      type: 'mcq',
      title: 'Keyboard Accessibility',
      prompt: 'Which design choice best supports keyboard users?',
      options: [
        'Only allow mouse clicks',
        'Ensure all interactive elements can be reached and operated with visible focus states',
        'Hide focus outlines for cleaner visuals',
        'Use hover-only menus for key actions'
      ],
      correctIndex: 1,
      explanation:
        'Keyboard accessibility requires reachable controls, logical focus order, and visible focus indicators.'
    },
    {
      id: 'ui-27',
      type: 'mcq',
      title: 'Form Design',
      prompt: 'Which form design pattern is usually strongest for reducing user errors?',
      options: [
        'Hide labels after typing begins',
        'Use clear labels, helpful constraints, inline validation, and specific error messages',
        'Use vague placeholder-only instructions',
        'Show all errors only after final submission'
      ],
      correctIndex: 1,
      explanation:
        'Clear labels and contextual validation help users prevent and fix mistakes.'
    },
    {
      id: 'ui-28',
      type: 'mcq',
      title: 'Error Message',
      prompt: 'Which error message is most helpful?',
      options: [
        'Invalid',
        'Something went wrong',
        'Password must be at least 12 characters and include one number',
        'Error code UX-8921'
      ],
      correctIndex: 2,
      explanation:
        'Useful errors explain what happened and how the user can fix it.'
    },
    {
      id: 'ui-29',
      type: 'mcq',
      title: 'Progressive Disclosure',
      prompt: 'What is progressive disclosure?',
      options: [
        'Showing advanced information only when users need it',
        'Displaying every option on the first screen',
        'Hiding all settings permanently',
        'Changing colors as users scroll'
      ],
      correctIndex: 0,
      explanation:
        'Progressive disclosure reduces cognitive load by revealing complexity gradually.'
    },
    {
      id: 'ui-30',
      type: 'mcq',
      title: 'Cognitive Load',
      prompt: 'A dashboard has 25 metrics, six colors, and no clear priority. What is the most likely UX problem?',
      options: [
        'Too little data',
        'High cognitive load and weak visual hierarchy',
        'Too much accessibility',
        'Insufficient animation'
      ],
      correctIndex: 1,
      explanation:
        'Too many competing elements make it harder for users to understand what matters.'
    },
    {
      id: 'ui-31',
      type: 'mcq',
      title: 'Design Handoff',
      prompt: 'What should a strong design handoff include?',
      options: [
        'Only a screenshot',
        'Specs, states, responsive behavior, accessibility notes, assets, and interaction details',
        'Only the designer’s verbal explanation',
        'Only final colors'
      ],
      correctIndex: 1,
      explanation:
        'Detailed handoff reduces implementation ambiguity and helps engineering build the intended experience.'
    },
    {
      id: 'ui-32',
      type: 'mcq',
      title: 'Component States',
      prompt: 'Which button states should typically be defined in a design system?',
      options: [
        'Default, hover, focus, active, disabled, loading, and error where relevant',
        'Only default',
        'Only hover',
        'Only disabled'
      ],
      correctIndex: 0,
      explanation:
        'Complete states help create consistent, accessible, and predictable interactions.'
    },
    {
      id: 'ui-33',
      type: 'mcq',
      title: 'Design Tokens',
      prompt: 'What are design tokens?',
      options: [
        'Cryptocurrency used by designers',
        'Named design decisions such as color, spacing, typography, radius, and elevation values',
        'Only icons',
        'User research notes'
      ],
      correctIndex: 1,
      explanation:
        'Design tokens help maintain consistency across design tools, code, and platforms.'
    },
    {
      id: 'ui-34',
      type: 'mcq',
      title: 'Mobile UX',
      prompt: 'What is a strong mobile UX practice for primary actions?',
      options: [
        'Place key actions where users can comfortably reach and identify them',
        'Use tiny touch targets to save space',
        'Put every action behind hover menus',
        'Require users to zoom before tapping'
      ],
      correctIndex: 0,
      explanation:
        'Mobile design should account for thumb reach, touch target size, and quick recognition.'
    },
    {
      id: 'ui-35',
      type: 'mcq',
      title: 'Empty State',
      prompt: 'What should a good empty state do?',
      options: [
        'Show a blank page',
        'Explain what is missing, why it matters, and what the user can do next',
        'Show only an error icon',
        'Hide the feature permanently'
      ],
      correctIndex: 1,
      explanation:
        'Empty states are guidance opportunities that help users take the next meaningful action.'
    },
    {
      id: 'ui-36',
      type: 'mcq',
      title: 'Onboarding',
      prompt: 'A complex product has low activation because new users feel overwhelmed. What should the design team consider?',
      options: [
        'Add more pop-ups on every screen',
        'Use guided onboarding focused on the first value moment and progressive learning',
        'Force users to read a long PDF',
        'Hide all features forever'
      ],
      correctIndex: 1,
      explanation:
        'Effective onboarding helps users reach value quickly without overwhelming them with everything at once.'
    },
    {
      id: 'ui-37',
      type: 'mcq',
      title: 'UX Metrics',
      prompt: 'Which metric best indicates that onboarding is creating early product value?',
      options: [
        'Activation rate tied to a meaningful first success action',
        'Total number of screens',
        'Number of fonts used',
        'Number of mockups created'
      ],
      correctIndex: 0,
      explanation:
        'Activation should be tied to a behavior that reflects real user value, not just account creation.'
    },
    {
      id: 'ui-38',
      type: 'mcq',
      title: 'Ethical Design',
      prompt: 'A business asks you to make cancellation hard to find to reduce churn. What is the best response?',
      options: [
        'Hide cancellation behind confusing navigation',
        'Recommend a transparent cancellation flow and investigate the real reasons users cancel',
        'Disable account settings',
        'Use misleading button labels'
      ],
      correctIndex: 1,
      explanation:
        'Ethical UX protects user trust while helping the business learn why users leave.'
    },
    {
      id: 'ui-39',
      type: 'mcq',
      title: 'Design Critique',
      prompt: 'What is the strongest way to give design feedback?',
      options: [
        'Say “I do not like it” with no reasoning',
        'Tie feedback to user goals, evidence, constraints, and design principles',
        'Redesign everything during the meeting',
        'Focus only on personal taste'
      ],
      correctIndex: 1,
      explanation:
        'Effective critique evaluates design decisions against goals, evidence, and constraints rather than preference alone.'
    },
    {
      id: 'ui-40',
      type: 'mcq',
      title: 'Advanced UX Judgment',
      prompt: 'A redesign improves visual appeal but reduces task completion for the main workflow. What should the team do?',
      options: [
        'Keep it because it looks modern',
        'Investigate the task failure, prioritize usability, and iterate before full rollout',
        'Ignore the metric because users dislike change',
        'Launch immediately to protect the timeline'
      ],
      correctIndex: 1,
      explanation:
        'A polished UI is not successful if it makes key user tasks harder. Usability and outcomes should guide iteration.'
    }
  ]
};