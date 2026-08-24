import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import businessEmailImage from '../../../assets/assessments/english/business_email.png';
import meetingScheduleImage from '../../../assets/assessments/english/meeting_schedule.png';
import officeSignsImage from '../../../assets/assessments/english/office_signs.png';

export const englishData = {
  id: ASSESSMENT_TYPES.english,
  title: 'English Professional Language Proficiency Certification',
  shortTitle: 'English',
  category: 'Language Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Interactive professional English assessment covering workplace comprehension, grammar in context, business email, meetings, schedules, charts, tables, tone, negotiation, customer communication, and professional writing.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Questions include business-email exhibits, office visuals, schedules, tables, charts, and Mermaid conversation flows. Read each exhibit carefully and choose the most accurate and professional response. No negative marking.',
  questions: [
    {
      id: 'en-01',
      type: 'mcq',
      title: 'Professional Email',
      difficulty: 'easy',
      points: 5,
      prompt: `Review the email exhibit.

{{image}}

What is Daniel's main purpose?`,
      image: {
        src: businessEmailImage,
        alt: 'Professional email requesting a meeting time change'
      },
      options: [
        'To cancel the meeting permanently.',
        'To politely request a new meeting time and ask for confirmation.',
        'To complain about the client.',
        'To send a payment reminder.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The email asks to move the meeting and requests confirmation. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-02',
      type: 'mcq',
      title: 'Schedule Comprehension',
      difficulty: 'easy',
      points: 5,
      prompt: `Review the schedule.

{{image}}

You are available only from 11:15 AM to 12:30 PM. Which activity can you attend in full?`,
      image: {
        src: meetingScheduleImage,
        alt: 'Workday meeting schedule'
      },
      options: [
        'The supplier call.',
        'The client review.',
        'The budget check.',
        'The marketing presentation.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The marketing presentation runs from 11:30 AM to 12:15 PM, fully inside the available window. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-03',
      type: 'mcq',
      title: 'Polite Request',
      difficulty: 'easy',
      points: 5,
      prompt: `You are contacting a senior client for the first time.

Which sentence is most professional?`,
      options: [
        'Could you please confirm whether Thursday at 10 AM works for you?',
        'Confirm Thursday 10 AM.',
        'You need to confirm now.',
        'Thursday at 10. Reply.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The correct sentence is polite, complete, and appropriately formal. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-04',
      type: 'mcq',
      title: 'Grammar in Context',
      difficulty: 'easy',
      points: 5,
      prompt: `Complete the sentence:

'If the supplier confirms today, we ___ the order tomorrow.'`,
      options: [
        'released',
        'would release',
        'will release',
        'release'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. A real future condition uses if + present, followed by will + base verb. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-05',
      type: 'mcq',
      title: 'Pronoun Reference',
      difficulty: 'easy',
      points: 5,
      prompt: `A colleague says: 'I sent the revised contract to Maria.'

Which follow-up sentence is correct?`,
      options: [
        'I sent it to her yesterday.',
        'I sent her it yesterday.',
        'I sent it to she yesterday.',
        'I sent them to her yesterday.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The object pronoun \'it\' refers to the contract and \'her\' follows the preposition \'to\'. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-06',
      type: 'mcq',
      title: 'Chart Interpretation',
      difficulty: 'medium',
      points: 5,
      prompt: `Study the chart.

{{chart}}

Which statement best describes the trend?`,
      chart: {
        type: 'line',
        title: 'Customer Requests by Week',
        xAxis: ['W1', 'W2', 'W3', 'W4', 'W5'],
        series: [{ name: 'Requests', data: [42, 47, 45, 58, 66] }]
      },
      options: [
        'Requests declined every week.',
        'Requests stayed exactly flat.',
        'Requests rose overall, despite a small decline in Week 3.',
        'Requests peaked in Week 2 and then collapsed.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The series rises from 42 to 66 overall, with only a slight dip in Week 3. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-07',
      type: 'mcq',
      title: 'Telephone Conversation',
      difficulty: 'medium',
      points: 5,
      prompt: `Read the conversation flow.

{{diagram}}

Which line best completes the customer's response?`,
      diagram: `flowchart LR
  A["Customer: May I speak to Ms Brown?"] --> B["Reception: She is in a meeting until 3 PM."]
  B --> C["Customer: ______"]
  C --> D["Reception: Certainly, I will pass on your message."]`,
      options: [
        'I am hanging up now.',
        'Give me her personal number.',
        'She must leave the meeting now.',
        'Could you ask her to call me back, please?'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The request naturally leads to the receptionist agreeing to pass on a message. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-08',
      type: 'mcq',
      title: 'Customer Service Register',
      difficulty: 'medium',
      points: 5,
      prompt: `A customer writes: 'My order is five days late and nobody has updated me.'

Which response is strongest?`,
      options: [
        'Please wait a little longer.',
        'We apologize for the delay. We are checking the shipment now and will update you by 4 PM today.',
        'That is the courier\'s problem.',
        'You must have entered the wrong address.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. A strong response acknowledges the issue, avoids blame, and gives a clear action and deadline. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-09',
      type: 'mcq',
      title: 'Office Vocabulary',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the office directory.

{{image}}

Where should a new employee go to submit onboarding documents?`,
      image: {
        src: officeSignsImage,
        alt: 'Office directory showing Reception, Meeting Rooms, Finance and Human Resources'
      },
      options: [
        'Reception.',
        'Finance.',
        'Human Resources.',
        'Meeting Rooms.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. Onboarding documents are normally handled by Human Resources. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-10',
      type: 'mcq',
      title: 'Table Comprehension',
      difficulty: 'medium',
      points: 5,
      prompt: `Review the delivery table.

{{table}}

Which supplier met the promised lead time exactly?`,
      table: {
        headers: ['Supplier', 'Promised', 'Actual'],
        rows: [
          ['A', '5 days', '7 days'],
          ['B', '8 days', '8 days'],
          ['C', '4 days', '6 days'],
          ['D', '10 days', '13 days']
        ]
      },
      options: [
        'Supplier B.',
        'Supplier A.',
        'Supplier C.',
        'Supplier D.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Supplier B\'s actual delivery time exactly matches the promised 8 days. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-11',
      type: 'mcq',
      title: 'Past Continuous vs Past Simple',
      difficulty: 'medium',
      points: 5,
      prompt: `Complete the sentence:

'I ___ the report when the director ___. '`,
      options: [
        'prepared / was calling',
        'was preparing / called',
        'prepare / called',
        'will prepare / called'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. The ongoing background action takes past continuous, while the interrupting event takes past simple. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-12',
      type: 'mcq',
      title: 'Formal Rewrite',
      difficulty: 'medium',
      points: 5,
      prompt: `A colleague wrote: 'Send me the numbers today.'

Which version is best for an external director?`,
      options: [
        'Send the figures today.',
        'I want the figures now.',
        'Figures. Today.',
        'Could you please send me the figures by the end of today?'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The correct version is precise, courteous, and suitable for a senior external recipient. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-13',
      type: 'mcq',
      title: 'Performance Reading',
      difficulty: 'hard',
      points: 5,
      prompt: `Study the chart.

{{chart}}

What is the strongest conclusion?`,
      chart: {
        type: 'bar',
        title: 'Customer Satisfaction (%)',
        categories: ['Reception', 'Speed', 'Clarity', 'Resolution'],
        series: [{ name: 'Score', data: [92, 74, 88, 69] }]
      },
      options: [
        'Reception is the weakest area.',
        'Clarity is below 70%.',
        'Every measure exceeds 85%.',
        'Problem resolution is the clearest area for improvement.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. Resolution has the lowest score at 69%. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-14',
      type: 'mcq',
      title: 'Logical Connector',
      difficulty: 'hard',
      points: 5,
      prompt: `Complete the sentence:

'Sales increased by 12%. ___, gross margin declined because input costs rose.'`,
      options: [
        'Therefore',
        'However',
        'For example',
        'Similarly'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. \'However\' correctly signals contrast between stronger sales and weaker margin. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-15',
      type: 'mcq',
      title: 'Negotiation Language',
      difficulty: 'hard',
      points: 5,
      prompt: `You want to suggest an alternative without sounding forceful.

Which sentence is best?`,
      options: [
        'You must accept two deliveries.',
        'We are changing the delivery plan.',
        'We could consider splitting the delivery into two phases, if that works for you.',
        'Split the delivery into two parts.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The modal \'could\' and conditional phrase make the proposal collaborative and professional. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-16',
      type: 'mcq',
      title: 'Meeting Interpretation',
      difficulty: 'hard',
      points: 5,
      prompt: `Read the sequence.

{{diagram}}

What was the final decision?`,
      diagram: `sequenceDiagram
  participant C as Client
  participant S as Sales
  participant F as Finance
  C->>S: We are requesting an 8% discount
  S->>F: Can we approve 8%?
  F-->>S: Maximum without escalation is 5%
  S-->>C: We can offer 5% immediately
  C-->>S: Agreed`,
      options: [
        'The sales team offered 5%, and the client accepted it.',
        'Finance approved 8%.',
        'The client rejected all discounts.',
        'The negotiation was cancelled.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The sequence ends with the client accepting the 5% offer. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-17',
      type: 'mcq',
      title: 'Comparative Language',
      difficulty: 'hard',
      points: 5,
      prompt: `Review the response-time table.

{{table}}

Which statement is both grammatically and factually correct?`,
      table: {
        headers: ['Team', 'Average Response Time'],
        rows: [
          ['Paris', '2 h 10'],
          ['Lyon', '3 h 05'],
          ['Bordeaux', '1 h 45'],
          ['Lille', '2 h 35']
        ]
      },
      options: [
        'Lyon responds faster than Bordeaux.',
        'Bordeaux responds the fastest.',
        'Paris is the slowest team.',
        'Lille responds less slowly than Bordeaux.'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Bordeaux has the shortest average response time. Why not A / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-18',
      type: 'mcq',
      title: 'Instruction Interpretation',
      difficulty: 'hard',
      points: 5,
      prompt: `A manager writes:

'The monthly figures are correct, but please verify the two flagged variances before sending the report to the client.'

What should you do first?`,
      options: [
        'Send the report immediately.',
        'Delete the variances.',
        'Rewrite the entire report.',
        'Verify the two flagged variances before external distribution.'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. The manager explicitly requires verification before sending the report. Why not A / B / C: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-19',
      type: 'mcq',
      title: 'Tone and Clarity',
      difficulty: 'hard',
      points: 5,
      prompt: `Which sentence communicates a delay most professionally?`,
      options: [
        'We are sorry for the delay. The revised completion time is 5 PM, and we will send a progress update at 3 PM.',
        'It is late, but it should be fine.',
        'We forgot. Sorry.',
        'No update yet.'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. The sentence acknowledges the issue and provides a concrete revised timeline and follow-up. Why not B / C / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    },
    {
      id: 'en-20',
      type: 'mcq',
      title: 'Integrated Communication',
      difficulty: 'hard',
      points: 5,
      prompt: `Use the process below.

{{diagram}}

Which response follows the strongest customer-communication pattern?`,
      diagram: `flowchart TB
  I["Incident identified"] --> A["Acknowledge the issue"]
  A --> E["Explain briefly without blame"]
  E --> P["State action and deadline"]
  P --> F["Confirm follow-up"]`,
      options: [
        'We received your message.',
        'The vendor caused the problem.',
        'We\'re sorry for the incident. We identified the cause, started the fix, and will confirm resolution by 4 PM today.',
        'Thank you for waiting.'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. The answer covers acknowledgment, concise explanation, action, deadline, and follow-up. Why not A / B / D: the other choices are less accurate, less professional, grammatically incorrect, or inconsistent with the exhibit.'
    }
  ],
};
