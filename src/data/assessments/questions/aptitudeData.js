import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Aptitude and Analytical Reasoning assessment.
// Questions progress from arithmetic fundamentals to business analytics,
// data interpretation, probability, statistics, logical reasoning, and decision-making.
export const aptitudeData = {
  id: ASSESSMENT_TYPES.aptitude,
  title: 'Aptitude & Analytical Reasoning Certification',
  shortTitle: 'Aptitude',
  category: 'Analytics hiring screen',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional assessment covering quantitative aptitude, percentages, ratios, averages, work-rate, probability, business metrics, data interpretation, logical reasoning, analytical judgment, and statistics.',
  instructions:
    'Choose the best answer. The test moves from easy to hard and is designed for analytics, consulting, business analyst, and data analyst certification screening.',
  questions: [
    {
      id: 'apt-01',
      type: 'mcq',
      title: 'Percentage Increase',
      prompt: 'Revenue increased from 80 to 100. What is the percentage increase?',
      options: ['20%', '25%', '30%', '125%'],
      correctIndex: 1,
      explanation: 'Percentage increase = (100 - 80) / 80 = 20 / 80 = 25%.'
    },
    {
      id: 'apt-02',
      type: 'mcq',
      title: 'Reverse Percentage',
      prompt: 'After a 20% discount, the selling price of a product is 800. What was the original price?',
      options: ['900', '1,000', '1,100', '1,200'],
      correctIndex: 1,
      explanation: 'After 20% discount, price becomes 80% of original. Original price = 800 / 0.8 = 1,000.'
    },
    {
      id: 'apt-03',
      type: 'mcq',
      title: 'Ratio',
      prompt: 'A:B = 2:3 and B:C = 4:5. What is A:C?',
      options: ['8:15', '2:5', '4:15', '3:10'],
      correctIndex: 0,
      explanation: 'Make B common. A:B = 8:12 and B:C = 12:15, so A:C = 8:15.'
    },
    {
      id: 'apt-04',
      type: 'mcq',
      title: 'Average',
      prompt: 'The average of five numbers is 18. Four numbers are 10, 20, 15, and 25. What is the fifth number?',
      options: ['15', '20', '25', '30'],
      correctIndex: 1,
      explanation: 'Total = 18 × 5 = 90. Known sum = 10 + 20 + 15 + 25 = 70. Fifth number = 20.'
    },
    {
      id: 'apt-05',
      type: 'mcq',
      title: 'Median',
      prompt: 'Find the median of the numbers: 12, 7, 20, 15, 9.',
      options: ['9', '12', '15', '20'],
      correctIndex: 1,
      explanation: 'Sorted values are 7, 9, 12, 15, 20. The middle value is 12.'
    },
    {
      id: 'apt-06',
      type: 'mcq',
      title: 'Profit Margin',
      prompt: 'A product sells for 500 and costs 350. What is the profit margin?',
      options: ['20%', '25%', '30%', '42.9%'],
      correctIndex: 2,
      explanation: 'Profit = 500 - 350 = 150. Profit margin = 150 / 500 = 30%.'
    },
    {
      id: 'apt-07',
      type: 'mcq',
      title: 'Markup',
      prompt: 'A product costs 400 and is sold for 500. What is the markup percentage on cost?',
      options: ['20%', '25%', '30%', '40%'],
      correctIndex: 1,
      explanation: 'Markup = (Selling price - Cost) / Cost = 100 / 400 = 25%.'
    },
    {
      id: 'apt-08',
      type: 'mcq',
      title: 'Work Rate',
      prompt: 'One analyst can complete a task in 6 hours. How long will 3 analysts take if they work at the same rate?',
      options: ['1 hour', '2 hours', '3 hours', '18 hours'],
      correctIndex: 1,
      explanation: 'If work is equally divided, time = 6 / 3 = 2 hours.'
    },
    {
      id: 'apt-09',
      type: 'mcq',
      title: 'Speed, Distance, Time',
      prompt: 'A consultant travels 150 km in 3 hours. What is the average speed?',
      options: ['45 km/h', '50 km/h', '55 km/h', '60 km/h'],
      correctIndex: 1,
      explanation: 'Average speed = Distance / Time = 150 / 3 = 50 km/h.'
    },
    {
      id: 'apt-10',
      type: 'mcq',
      title: 'Basic Probability',
      prompt: 'A fair coin is tossed twice. What is the probability of getting exactly one head?',
      options: ['1/4', '1/2', '3/4', '1/3'],
      correctIndex: 1,
      explanation: 'Possible outcomes are HH, HT, TH, TT. Exactly one head occurs in HT and TH, so probability = 2/4 = 1/2.'
    },
    {
      id: 'apt-11',
      type: 'mcq',
      title: 'Number Pattern',
      prompt: 'Find the next term: 2, 5, 11, 23, ?',
      options: ['35', '41', '47', '51'],
      correctIndex: 2,
      explanation: 'Each term is previous × 2 + 1. So 23 × 2 + 1 = 47.'
    },
    {
      id: 'apt-12',
      type: 'mcq',
      title: 'Weighted Average',
      prompt: 'Segment A has 100 users with 80% retention. Segment B has 200 users with 50% retention. What is the overall retention?',
      options: ['55%', '60%', '65%', '70%'],
      correctIndex: 1,
      explanation: 'Overall retention = (100 × 0.8 + 200 × 0.5) / 300 = 180 / 300 = 60%.'
    },
    {
      id: 'apt-13',
      type: 'mcq',
      title: 'Compounding Growth',
      prompt: 'Sales by month are 100, 120, 144, and 173. Which trend best describes the data?',
      options: ['Flat trend', 'Linear decline', 'Compounding growth', 'Random movement only'],
      correctIndex: 2,
      explanation: 'The values grow by roughly 20% each period, which indicates compounding growth.'
    },
    {
      id: 'apt-14',
      type: 'mcq',
      title: 'Break-even Analysis',
      prompt: 'Fixed cost is 10,000 and profit contribution per unit is 50. How many units are needed to break even?',
      options: ['100', '150', '200', '250'],
      correctIndex: 2,
      explanation: 'Break-even units = Fixed cost / Contribution per unit = 10,000 / 50 = 200.'
    },
    {
      id: 'apt-15',
      type: 'mcq',
      title: 'Growth Comparison',
      prompt: 'Product A sales increased from 50 to 75. Product B sales increased from 80 to 88. Which product grew faster by percentage?',
      options: ['Product A', 'Product B', 'Same growth rate', 'Cannot determine'],
      correctIndex: 0,
      explanation: 'Product A growth = 25 / 50 = 50%. Product B growth = 8 / 80 = 10%. Product A grew faster.'
    },
    {
      id: 'apt-16',
      type: 'mcq',
      title: 'Logical Deduction',
      prompt: 'All analysts use dashboards. Priya is an analyst. What must be true?',
      options: [
        'Priya uses dashboards',
        'Priya builds dashboards',
        'All dashboard users are analysts',
        'No analysts use dashboards'
      ],
      correctIndex: 0,
      explanation: 'If all analysts use dashboards and Priya is an analyst, then Priya must use dashboards.'
    },
    {
      id: 'apt-17',
      type: 'mcq',
      title: 'Correlation vs Causation',
      prompt: 'If ad spend and leads both rise together, what can you conclude?',
      options: [
        'Ad spend definitely causes leads',
        'There is positive association, but causation needs more evidence',
        'There is negative association',
        'No relationship exists'
      ],
      correctIndex: 1,
      explanation: 'Correlation shows association, but it does not prove causation without additional evidence or experimental design.'
    },
    {
      id: 'apt-18',
      type: 'mcq',
      title: 'Forecasting',
      prompt: 'If monthly users grow by 10% from a base of 1,000, expected users next month are:',
      options: ['1,010', '1,100', '1,200', '900'],
      correctIndex: 1,
      explanation: 'Expected users = 1,000 × 1.10 = 1,100.'
    },
    {
      id: 'apt-19',
      type: 'mcq',
      title: 'Algebra',
      prompt: 'If x + 20% of x = 120, what is x?',
      options: ['80', '90', '100', '110'],
      correctIndex: 2,
      explanation: 'x + 0.2x = 120, so 1.2x = 120. Therefore, x = 100.'
    },
    {
      id: 'apt-20',
      type: 'mcq',
      title: 'Percentage Points vs Relative Change',
      prompt: 'A conversion rate increased from 5% to 6%. Which statement is correct?',
      options: [
        'It increased by 1% only',
        'It increased by 6 percentage points',
        'It increased by 20 percentage points',
        'It increased by 1 percentage point and 20% relatively'
      ],
      correctIndex: 3,
      explanation: 'The absolute increase is 1 percentage point. Relative increase = (6 - 5) / 5 = 20%.'
    },
    {
      id: 'apt-21',
      type: 'mcq',
      title: 'Weighted Business Metric',
      prompt: 'Segment A has 500 customers with 80% retention. Segment B has 1,500 customers with 60% retention. What is the overall retention?',
      options: ['60%', '62.5%', '65%', '70%'],
      correctIndex: 2,
      explanation: 'Overall retention = (500 × 0.8 + 1,500 × 0.6) / 2,000 = 1,300 / 2,000 = 65%.'
    },
    {
      id: 'apt-22',
      type: 'mcq',
      title: 'Data Interpretation',
      prompt: 'Q1 sales were: A = 50, B = 80, C = 70. Q2 sales were: A = 75, B = 88, C = 77. What was the total sales growth from Q1 to Q2?',
      options: ['10%', '20%', '25%', '30%'],
      correctIndex: 1,
      explanation: 'Q1 total = 50 + 80 + 70 = 200. Q2 total = 75 + 88 + 77 = 240. Growth = 40 / 200 = 20%.'
    },
    {
      id: 'apt-23',
      type: 'mcq',
      title: 'Ratio Allocation',
      prompt: 'A bonus pool of 360 is divided among A, B, and C in the ratio 2:3:4. How much does B receive?',
      options: ['80', '120', '160', '180'],
      correctIndex: 1,
      explanation: 'Total ratio parts = 2 + 3 + 4 = 9. B gets 3 parts, so B = 360 × 3 / 9 = 120.'
    },
    {
      id: 'apt-24',
      type: 'mcq',
      title: 'Dice Probability',
      prompt: 'Two fair dice are rolled. What is the probability that the sum is 7?',
      options: ['1/12', '1/6', '1/9', '1/3'],
      correctIndex: 1,
      explanation: 'There are 6 favorable outcomes: 1-6, 2-5, 3-4, 4-3, 5-2, 6-1. Total outcomes = 36. Probability = 6/36 = 1/6.'
    },
    {
      id: 'apt-25',
      type: 'mcq',
      title: 'Card Probability',
      prompt: 'A card is drawn from a standard 52-card deck. What is the probability that it is not an ace?',
      options: ['12/13', '1/13', '4/13', '3/4'],
      correctIndex: 0,
      explanation: 'There are 4 aces, so non-aces = 48. Probability = 48 / 52 = 12/13.'
    },
    {
      id: 'apt-26',
      type: 'mcq',
      title: 'Permutations',
      prompt: 'A manager needs to assign 3 different tasks to 3 people selected from a team of 5. How many ways can this be done?',
      options: ['10', '15', '60', '125'],
      correctIndex: 2,
      explanation: 'This is a permutation because roles/tasks are distinct. Number of ways = 5P3 = 5 × 4 × 3 = 60.'
    },
    {
      id: 'apt-27',
      type: 'mcq',
      title: 'Combinations',
      prompt: 'How many ways can 2 analysts be selected from a team of 6?',
      options: ['12', '10', '15', '30'],
      correctIndex: 2,
      explanation: 'Selection order does not matter. Number of ways = 6C2 = 6 × 5 / 2 = 15.'
    },
    {
      id: 'apt-28',
      type: 'mcq',
      title: 'Data Sufficiency',
      prompt: 'A metric increased by 25% and reached 250. Can the original value be determined?',
      options: [
        'Yes, it was 200',
        'Yes, it was 225',
        'No, percentage growth is not enough',
        'No, unless the metric is revenue'
      ],
      correctIndex: 0,
      explanation: 'If original value is x, then 1.25x = 250. Therefore, x = 250 / 1.25 = 200.'
    },
    {
      id: 'apt-29',
      type: 'mcq',
      title: 'Combined Work Rate',
      prompt: 'Analyst A can finish a report in 10 days. Analyst B can finish it in 15 days. How long will they take working together?',
      options: ['5 days', '6 days', '7.5 days', '12.5 days'],
      correctIndex: 1,
      explanation: 'Combined rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. They finish in 6 days.'
    },
    {
      id: 'apt-30',
      type: 'mcq',
      title: 'Blended Average',
      prompt: 'A campaign has 20 leads with an average score of 50. Another 10 leads with an average score of 80 are added. What is the new average score?',
      options: ['55', '58', '60', '65'],
      correctIndex: 2,
      explanation: 'Total score = 20 × 50 + 10 × 80 = 1,800. Total leads = 30. Average = 1,800 / 30 = 60.'
    },
    {
      id: 'apt-31',
      type: 'mcq',
      title: 'Discount and Margin',
      prompt: 'A product has an MRP of 1,000. It is sold at a 10% discount and costs 700. What is the profit margin on selling price?',
      options: ['20%', '22.2%', '25%', '28.6%'],
      correctIndex: 1,
      explanation: 'Selling price = 900. Profit = 900 - 700 = 200. Margin = 200 / 900 = 22.2%.'
    },
    {
      id: 'apt-32',
      type: 'mcq',
      title: 'Expected Value',
      prompt: 'A campaign has a 70% chance of earning 100 and a 30% chance of losing 50. What is the expected value?',
      options: ['35', '50', '55', '70'],
      correctIndex: 2,
      explanation: 'Expected value = 0.7 × 100 + 0.3 × (-50) = 70 - 15 = 55.'
    },
    {
      id: 'apt-33',
      type: 'mcq',
      title: 'Indexing',
      prompt: 'A metric is indexed to a base value of 80. If the current value is 100, what is the index value?',
      options: ['80', '100', '125', '180'],
      correctIndex: 2,
      explanation: 'Index = Current value / Base value × 100 = 100 / 80 × 100 = 125.'
    },
    {
      id: 'apt-34',
      type: 'mcq',
      title: 'Weighted Decision Score',
      prompt: 'A vendor score is calculated as 70% quality score + 30% speed score. Vendor A: Quality 80, Speed 90. Vendor B: Quality 85, Speed 70. Vendor C: Quality 78, Speed 95. Which vendor has the highest score?',
      options: ['Vendor A', 'Vendor B', 'Vendor C', 'All are equal'],
      correctIndex: 2,
      explanation: 'A = 0.7×80 + 0.3×90 = 83. B = 80.5. C = 0.7×78 + 0.3×95 = 83.1. Vendor C is highest.'
    },
    {
      id: 'apt-35',
      type: 'mcq',
      title: 'Conditional Probability',
      prompt: 'A fraud model flags 90% of fraud cases and incorrectly flags 5% of non-fraud cases. If 1% of all transactions are fraud, what is the approximate probability that a flagged transaction is actually fraud?',
      options: ['5.0%', '9.0%', '15.4%', '90.0%'],
      correctIndex: 2,
      explanation:
        'P(Fraud and Flagged) = 0.01 × 0.90 = 0.009. P(Non-fraud and Flagged) = 0.99 × 0.05 = 0.0495. Probability = 0.009 / (0.009 + 0.0495) ≈ 15.4%.'
    },
    {
      id: 'apt-36',
      type: 'mcq',
      title: 'Simpson’s Paradox',
      prompt: 'A campaign performs better than another campaign in each individual customer segment, but worse overall after combining the segments. What is this situation called?',
      options: ['Overfitting', 'Simpson’s paradox', 'Linear regression', 'Seasonality'],
      correctIndex: 1,
      explanation:
        'Simpson’s paradox occurs when a trend appears in separate groups but reverses or disappears when the groups are combined.'
    },
    {
      id: 'apt-37',
      type: 'mcq',
      title: 'A/B Test Lift',
      prompt: 'Control conversion rate is 10%. Treatment conversion rate is 12%. What is the relative lift?',
      options: ['2%', '10%', '20%', '120%'],
      correctIndex: 2,
      explanation: 'Relative lift = (12% - 10%) / 10% = 2% / 10% = 20%.'
    },
    {
      id: 'apt-38',
      type: 'mcq',
      title: 'Analytical Judgment',
      prompt: 'An A/B test shows Treatment is better than Control, but the sample size is extremely small. What is the best conclusion?',
      options: [
        'Immediately launch Treatment to all users',
        'Ignore the result completely because small samples are always wrong',
        'Treat the result as directional and collect more data before making a major decision',
        'Declare the test statistically conclusive'
      ],
      correctIndex: 2,
      explanation:
        'Small samples can produce unstable results. The right approach is to treat the finding as directional and gather more evidence.'
    },
    {
      id: 'apt-39',
      type: 'mcq',
      title: 'Outlier Impact',
      prompt: 'Which measure is generally less affected by extreme outliers?',
      options: ['Mean', 'Median', 'Range', 'Maximum'],
      correctIndex: 1,
      explanation:
        'The median depends on the middle value after sorting and is usually more robust to extreme outliers than the mean.'
    },
    {
      id: 'apt-40',
      type: 'mcq',
      title: 'Business Data Leakage',
      prompt: 'A churn model uses a field called “cancellation_date” to predict whether a customer will churn next month. Why is this a serious issue?',
      options: [
        'It may introduce data leakage because cancellation_date would not be known before churn happens',
        'It is always a valid predictive feature',
        'It makes the model unsupervised',
        'It only affects chart formatting'
      ],
      correctIndex: 0,
      explanation:
        'Using information that becomes available only after the outcome has occurred creates data leakage and leads to unrealistic model performance.'
    }
  ]
};