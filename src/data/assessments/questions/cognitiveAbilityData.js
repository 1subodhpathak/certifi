import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Cognitive Ability assessment.
// Questions progress from basic reasoning to advanced numerical logic,
// verbal reasoning, data interpretation, conditional reasoning,
// analytical judgment, and business decision-making.
export const cognitiveAbilityData = {
  id: ASSESSMENT_TYPES.cognitive_ability,
  title: 'Cognitive Ability & Analytical Reasoning Certification',
  shortTitle: 'Cognitive Ability',
  category: 'Analytical reasoning',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional cognitive ability assessment covering pattern recognition, numerical reasoning, logical deduction, verbal reasoning, critical thinking, data interpretation, probability, and business judgment.',
  instructions:
    'Choose the strongest answer. Questions move from easy to hard and are designed to test reasoning quality, analytical thinking, and decision-making under structured constraints.',
  questions: [
    {
      id: 'cog-01',
      type: 'mcq',
      title: 'Number Pattern',
      prompt: 'Find the next number in the sequence: 2, 4, 8, 16, ?',
      options: ['24', '30', '32', '36'],
      correctIndex: 2,
      explanation: 'Each number is doubled. 16 × 2 = 32.'
    },
    {
      id: 'cog-02',
      type: 'mcq',
      title: 'Odd One Out',
      prompt: 'Which word does not belong with the others?',
      options: ['Apple', 'Banana', 'Carrot', 'Mango'],
      correctIndex: 2,
      explanation: 'Apple, Banana, and Mango are fruits. Carrot is a vegetable.'
    },
    {
      id: 'cog-03',
      type: 'mcq',
      title: 'Analogy',
      prompt: 'Book is to Reading as Fork is to:',
      options: ['Cooking', 'Eating', 'Writing', 'Cleaning'],
      correctIndex: 1,
      explanation: 'A book is used for reading. A fork is used for eating.'
    },
    {
      id: 'cog-04',
      type: 'mcq',
      title: 'Basic Arithmetic Reasoning',
      prompt: 'What is 25% of 240?',
      options: ['40', '50', '60', '80'],
      correctIndex: 2,
      explanation: '25% is one-fourth. 240 ÷ 4 = 60.'
    },
    {
      id: 'cog-05',
      type: 'mcq',
      title: 'Logical Deduction',
      prompt: 'All managers approve budgets. Neha is a manager. What must be true?',
      options: [
        'Neha approves budgets',
        'Neha owns the company',
        'Everyone who approves budgets is a manager',
        'No managers approve budgets'
      ],
      correctIndex: 0,
      explanation: 'If all managers approve budgets and Neha is a manager, then Neha approves budgets.'
    },
    {
      id: 'cog-06',
      type: 'mcq',
      title: 'Simple Sequence',
      prompt: 'Find the next number: 3, 7, 15, 31, ?',
      options: ['47', '55', '63', '71'],
      correctIndex: 2,
      explanation: 'Each term is previous × 2 + 1. 31 × 2 + 1 = 63.'
    },
    {
      id: 'cog-07',
      type: 'mcq',
      title: 'Comparison Logic',
      prompt: 'A is greater than B. B is greater than C. Which statement must be true?',
      options: ['A is greater than C', 'C is greater than A', 'A equals C', 'B is less than C'],
      correctIndex: 0,
      explanation: 'If A > B and B > C, then A > C.'
    },
    {
      id: 'cog-08',
      type: 'mcq',
      title: 'Code Pattern',
      prompt: 'If CAT is coded as DBU, how is DOG coded using the same rule?',
      options: ['EPH', 'FQI', 'CNG', 'EOG'],
      correctIndex: 0,
      explanation: 'Each letter moves one step forward: C→D, A→B, T→U. So DOG becomes EPH.'
    },
    {
      id: 'cog-09',
      type: 'mcq',
      title: 'Average',
      prompt: 'The average of 6 numbers is 18. If one number, 12, is removed, what is the new average?',
      options: ['18.5', '19.0', '19.2', '20.0'],
      correctIndex: 2,
      explanation: 'Original total = 6 × 18 = 108. New total = 108 - 12 = 96. New average = 96 ÷ 5 = 19.2.'
    },
    {
      id: 'cog-10',
      type: 'mcq',
      title: 'Work Rate',
      prompt: 'Person A can complete a task in 8 days. Person B can complete it in 12 days. Working together, approximately how long will they take?',
      options: ['4.8 days', '5.5 days', '6 days', '10 days'],
      correctIndex: 0,
      explanation: 'Combined rate = 1/8 + 1/12 = 5/24. Time = 24/5 = 4.8 days.'
    },
    {
      id: 'cog-11',
      type: 'mcq',
      title: 'Probability',
      prompt: 'A bag contains 3 red balls and 2 blue balls. What is the probability of drawing a red ball?',
      options: ['1/5', '2/5', '3/5', '4/5'],
      correctIndex: 2,
      explanation: 'There are 3 red balls out of 5 total balls. Probability = 3/5.'
    },
    {
      id: 'cog-12',
      type: 'mcq',
      title: 'Percentage Change',
      prompt: 'A conversion rate increased from 4% to 5%. What is the relative increase?',
      options: ['1%', '5%', '20%', '25%'],
      correctIndex: 3,
      explanation: 'Relative increase = (5 - 4) / 4 = 1/4 = 25%.'
    },
    {
      id: 'cog-13',
      type: 'mcq',
      title: 'Conditional Reasoning',
      prompt: 'No invoice is approved without review. This invoice was approved. What must be true?',
      options: [
        'The invoice was reviewed',
        'The invoice was rejected',
        'The invoice had errors',
        'The invoice was paid immediately'
      ],
      correctIndex: 0,
      explanation: 'If approval requires review, then an approved invoice must have been reviewed.'
    },
    {
      id: 'cog-14',
      type: 'mcq',
      title: 'Invalid Inference',
      prompt: 'If a campaign passes QA, it is launched. The campaign was not launched. What can be concluded?',
      options: [
        'It definitely failed QA',
        'It definitely passed QA',
        'It may or may not have passed QA',
        'QA was not required'
      ],
      correctIndex: 2,
      explanation: 'The campaign may not have launched for other reasons. Not launched does not prove it failed QA.'
    },
    {
      id: 'cog-15',
      type: 'mcq',
      title: 'Growth Comparison',
      prompt: 'Team A increased output from 120 to 150. Team B increased output from 200 to 230. Which team had the higher percentage increase?',
      options: ['Team A', 'Team B', 'Both are equal', 'Cannot determine'],
      correctIndex: 0,
      explanation: 'Team A increased by 30/120 = 25%. Team B increased by 30/200 = 15%.'
    },
    {
      id: 'cog-16',
      type: 'mcq',
      title: 'Ratio Allocation',
      prompt: 'A bonus pool of 300 is divided in the ratio 2:5:8. How much does the second person receive?',
      options: ['60', '80', '100', '120'],
      correctIndex: 2,
      explanation: 'Total parts = 2 + 5 + 8 = 15. Second person gets 5 parts. 300 × 5/15 = 100.'
    },
    {
      id: 'cog-17',
      type: 'mcq',
      title: 'Weighted Average',
      prompt: 'A team has 40 employees with an average score of 80 and 60 employees with an average score of 70. What is the overall average?',
      options: ['72', '74', '75', '76'],
      correctIndex: 1,
      explanation: 'Weighted average = (40 × 80 + 60 × 70) / 100 = 7400 / 100 = 74.'
    },
    {
      id: 'cog-18',
      type: 'mcq',
      title: 'Fibonacci Pattern',
      prompt: 'Find the next number: 1, 1, 2, 3, 5, 8, ?',
      options: ['11', '12', '13', '15'],
      correctIndex: 2,
      explanation: 'Each number is the sum of the previous two. 5 + 8 = 13.'
    },
    {
      id: 'cog-19',
      type: 'mcq',
      title: 'Critical Assumption',
      prompt: 'A manager says, “Customer satisfaction dropped after delivery times increased, so delivery delays caused the satisfaction drop.” What assumption is being made?',
      options: [
        'No other major factor caused the satisfaction drop',
        'Delivery time always improves satisfaction',
        'Customer satisfaction is impossible to measure',
        'The company has no competitors'
      ],
      correctIndex: 0,
      explanation: 'The argument assumes the satisfaction drop was mainly caused by delivery delays rather than another factor.'
    },
    {
      id: 'cog-20',
      type: 'mcq',
      title: 'Root-Cause Analysis',
      prompt: 'An app crash rate increased after a new release. What is the strongest first analysis?',
      options: [
        'Compare crash rates by app version, device, OS, geography, and release timing',
        'Immediately remove all features',
        'Ask users to stop using the app',
        'Assume the marketing team caused it'
      ],
      correctIndex: 0,
      explanation: 'A structured segmentation by version, device, OS, geography, and release timing helps isolate the likely cause.'
    },
    {
      id: 'cog-21',
      type: 'mcq',
      title: 'Deductive Reasoning',
      prompt: 'A report is published only if it has been reviewed. The report was published. What must be true?',
      options: [
        'The report was reviewed',
        'The report was rejected',
        'The report was not read by anyone',
        'The report contains no mistakes'
      ],
      correctIndex: 0,
      explanation: '“Only if reviewed” means review is required before publishing.'
    },
    {
      id: 'cog-22',
      type: 'mcq',
      title: 'Reasoning Flaw',
      prompt: 'All high-retention customers use Feature X. Therefore, Feature X definitely causes high retention. What is the flaw?',
      options: [
        'It confuses correlation with causation',
        'It uses too much data',
        'It proves the opposite conclusion',
        'It is based on arithmetic only'
      ],
      correctIndex: 0,
      explanation: 'Feature X may be associated with retention, but the statement does not prove that Feature X caused retention.'
    },
    {
      id: 'cog-23',
      type: 'mcq',
      title: 'Advanced Number Pattern',
      prompt: 'Find the next number: 4, 9, 19, 39, 79, ?',
      options: ['119', '139', '159', '179'],
      correctIndex: 2,
      explanation: 'Each term is previous × 2 + 1. 79 × 2 + 1 = 159.'
    },
    {
      id: 'cog-24',
      type: 'mcq',
      title: 'Letter Pattern',
      prompt: 'Find the next letter: A, C, F, J, O, ?',
      options: ['S', 'T', 'U', 'V'],
      correctIndex: 2,
      explanation: 'The letter positions increase by 2, 3, 4, 5, then 6. O is 15, so 15 + 6 = 21, which is U.'
    },
    {
      id: 'cog-25',
      type: 'mcq',
      title: 'Matrix Pattern',
      prompt: 'Find the missing number:\nRow 1: 2, 6, 12\nRow 2: 3, 9, 18\nRow 3: 4, 12, ?',
      options: ['16', '20', '24', '28'],
      correctIndex: 2,
      explanation: 'In each row, the second number is ×3 and the third number is ×2 from the second. 12 × 2 = 24.'
    },
    {
      id: 'cog-26',
      type: 'mcq',
      title: 'Expected Conversion',
      prompt: '60% of users are mobile with a 5% conversion rate. 40% are desktop with a 10% conversion rate. What is the overall conversion rate?',
      options: ['6%', '7%', '8%', '9%'],
      correctIndex: 1,
      explanation: 'Overall conversion = 0.6 × 5% + 0.4 × 10% = 3% + 4% = 7%.'
    },
    {
      id: 'cog-27',
      type: 'mcq',
      title: 'Break-Even Reasoning',
      prompt: 'Fixed cost is 50,000. Price per unit is 100 and variable cost per unit is 60. How many units are needed to break even?',
      options: ['1,000', '1,250', '1,500', '2,000'],
      correctIndex: 1,
      explanation: 'Contribution per unit = 100 - 60 = 40. Break-even units = 50,000 / 40 = 1,250.'
    },
    {
      id: 'cog-28',
      type: 'mcq',
      title: 'Expected Value',
      prompt: 'A project has a 40% chance of earning 200 and a 60% chance of losing 50. What is the expected value?',
      options: ['30', '40', '50', '80'],
      correctIndex: 2,
      explanation: 'Expected value = 0.4 × 200 + 0.6 × (-50) = 80 - 30 = 50.'
    },
    {
      id: 'cog-29',
      type: 'mcq',
      title: 'A/B Test Judgment',
      prompt: 'An A/B test shows control conversion at 10.0% and treatment at 10.4%, but the sample size is small. What is the best conclusion?',
      options: [
        'Launch immediately because treatment is higher',
        'Reject treatment permanently',
        'Treat the result as directional and gather more evidence',
        'Ignore all conversion data'
      ],
      correctIndex: 2,
      explanation: 'A small sample may produce unstable results. The finding is directional until validated with enough data and statistical confidence.'
    },
    {
      id: 'cog-30',
      type: 'mcq',
      title: 'Simpson’s Paradox',
      prompt: 'Campaign A performs better than Campaign B in each customer segment, but worse overall after combining the segments. What is this called?',
      options: ['Overfitting', 'Simpson’s paradox', 'Linear growth', 'Random sampling only'],
      correctIndex: 1,
      explanation: 'Simpson’s paradox occurs when a trend appears in individual groups but reverses when the groups are combined.'
    },
    {
      id: 'cog-31',
      type: 'mcq',
      title: 'Weighted Retention',
      prompt: 'Segment A has 100 users with 90% retention. Segment B has 900 users with 70% retention. What is the overall retention?',
      options: ['70%', '72%', '80%', '85%'],
      correctIndex: 1,
      explanation: 'Overall retention = (100 × 0.9 + 900 × 0.7) / 1000 = 720 / 1000 = 72%.'
    },
    {
      id: 'cog-32',
      type: 'mcq',
      title: 'Invalid Reverse Logic',
      prompt: 'If risk score is above 80, an application goes to manual review. Some applications went to manual review. What can be concluded?',
      options: [
        'All reviewed applications had risk score above 80',
        'Some reviewed applications may have had risk score above 80',
        'No reviewed application had high risk',
        'Manual review is not related to risk'
      ],
      correctIndex: 1,
      explanation: 'Manual review may happen for multiple reasons. The statement does not prove all reviewed applications had scores above 80.'
    },
    {
      id: 'cog-33',
      type: 'mcq',
      title: 'Business Reasoning',
      prompt: 'Revenue per user increased, and a manager concludes the business is healthier. What should be checked before accepting this conclusion?',
      options: [
        'Whether total users, retention, margin, and acquisition cost changed',
        'Only whether the dashboard color changed',
        'Whether the office location changed',
        'Only whether one customer paid more'
      ],
      correctIndex: 0,
      explanation: 'Higher revenue per user can be positive, but business health also depends on user count, retention, margin, and acquisition cost.'
    },
    {
      id: 'cog-34',
      type: 'mcq',
      title: 'Bayesian Reasoning',
      prompt: 'A defect occurs in 1% of items. A test catches 90% of defective items and falsely flags 9% of non-defective items. If an item is flagged, approximately what is the probability it is actually defective?',
      options: ['1.0%', '9.2%', '50.0%', '90.0%'],
      correctIndex: 1,
      explanation:
        'P(defect and flagged) = 0.01 × 0.90 = 0.009. P(non-defect and flagged) = 0.99 × 0.09 = 0.0891. Probability = 0.009 / (0.009 + 0.0891) ≈ 9.2%.'
    },
    {
      id: 'cog-35',
      type: 'mcq',
      title: 'Decomposition',
      prompt: 'Revenue dropped 12%. What is the strongest first decomposition?',
      options: [
        'Break revenue into price, volume, mix, customer segment, channel, and time period',
        'Assume sales team performance declined',
        'Only look at total revenue',
        'Change the report title'
      ],
      correctIndex: 0,
      explanation: 'Revenue changes should be decomposed into drivers such as price, volume, mix, segment, channel, and timing.'
    },
    {
      id: 'cog-36',
      type: 'mcq',
      title: 'Data Interpretation',
      prompt: 'Active users increased by 20%, but total revenue stayed flat. Which explanation is most plausible?',
      options: [
        'Average revenue per user declined',
        'Revenue must have increased',
        'The user count must be wrong',
        'The product has no paying users'
      ],
      correctIndex: 0,
      explanation: 'If users increased but revenue stayed flat, average revenue per user likely decreased, unless other factors offset growth.'
    },
    {
      id: 'cog-37',
      type: 'mcq',
      title: 'Prioritization',
      prompt: 'A team has three problems: one affects 2% of users severely, one affects 40% mildly, and one affects 10% moderately. What is the best prioritization approach?',
      options: [
        'Prioritize only by number of users',
        'Prioritize only by severity',
        'Evaluate impact using reach, severity, business value, effort, and risk',
        'Pick randomly'
      ],
      correctIndex: 2,
      explanation: 'Good prioritization considers multiple dimensions such as reach, severity, value, effort, and risk.'
    },
    {
      id: 'cog-38',
      type: 'mcq',
      title: 'Data Sufficiency',
      prompt: 'A company says profit fell because revenue fell. Which additional information is most important to validate this explanation?',
      options: [
        'Cost trends, margin, revenue by segment, and one-time expenses',
        'Only the company logo',
        'Only office attendance',
        'Only the CEO’s opinion'
      ],
      correctIndex: 0,
      explanation: 'Profit depends on revenue and costs. A revenue decline may not fully explain profit decline without analyzing cost and margin drivers.'
    },
    {
      id: 'cog-39',
      type: 'mcq',
      title: 'Executive Decision-Making',
      prompt: 'An analysis suggests a product change may improve revenue, but confidence is moderate and downside risk exists. What is the strongest recommendation?',
      options: [
        'Launch to everyone immediately without monitoring',
        'Reject the idea permanently',
        'Run a controlled rollout or experiment with success metrics and guardrails',
        'Hide the uncertainty from leadership'
      ],
      correctIndex: 2,
      explanation: 'When upside exists but uncertainty remains, controlled rollout with metrics and guardrails is a strong decision-making approach.'
    },
    {
      id: 'cog-40',
      type: 'mcq',
      title: 'Advanced Analytical Judgment',
      prompt: 'A dashboard shows a sudden 30% increase in orders. What should an analyst do before declaring business growth?',
      options: [
        'Validate tracking, check duplicate orders, segment the increase, compare with revenue, and review recent changes',
        'Immediately announce success',
        'Ignore the increase',
        'Delete the dashboard'
      ],
      correctIndex: 0,
      explanation:
        'Sudden metric movements should be validated for data quality and decomposed by segment before drawing business conclusions.'
    }
  ]
};