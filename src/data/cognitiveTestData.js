export const COGNITIVE_DOMAINS = {
  PATTERN: 'Pattern Recognition',
  CRITICAL: 'Critical Thinking',
  ABSTRACT: 'Abstract Reasoning'
};

export const COGNITIVE_QUESTIONS = [
  // --- Pattern Recognition ---
  {
    id: 1,
    domain: 'PATTERN',
    text: "Which number comes next in the series: 2, 6, 12, 20, 30, ...?",
    options: ["36", "40", "42", "48"],
    correct: "42",
    explanation:
      "The differences are 4, 6, 8, 10. The next difference is 12, so 30 + 12 = 42."
  },
  {
    id: 2,
    domain: 'PATTERN',
    text: "Find the missing number: 8, 24, 12, 36, 18, 54, ...?",
    options: ["27", "32", "24", "108"],
    correct: "27",
    explanation:
      "The pattern alternates between multiplying by 3 and dividing by 2: 8 x 3 = 24, 24 / 2 = 12, 12 x 3 = 36, 36 / 2 = 18, 18 x 3 = 54, so 54 / 2 = 27."
  },
  {
    id: 3,
    domain: 'PATTERN',
    text: "If LEMON is coded as ELMON, how is GRAPE coded?",
    options: ["RGAPE", "RGAEP", "RGPAE", "RPAGE"],
    correct: "RGAPE",
    explanation:
      "The first two letters are swapped and the remaining letters stay the same. GRAPE becomes RGAPE."
  },
  {
    id: 4,
    domain: 'PATTERN',
    text: "Which letter comes next: B, D, G, K, P, ...?",
    options: ["S", "U", "V", "W"],
    correct: "V",
    explanation:
      "The letter gaps increase by 1 each time: +2, +3, +4, +5. The next gap is +6. P + 6 = V."
  },
  {
    id: 5,
    domain: 'PATTERN',
    text: "In a code, 256 means you are good, 637 means we are bad, and 358 means good and bad. Which digit represents and?",
    options: ["2", "5", "8", "3"],
    correct: "8",
    explanation:
      "The common digit between 256 and 358 is 5, so 5 means good. The common digit between 637 and 358 is 3, so 3 means bad. The common digit between 256 and 637 is 6, so 6 means are. Therefore, 8 means and."
  },
  {
    id: 6,
    domain: 'PATTERN',
    text: "What is the next number in the series: 3, 9, 18, 30, 45, ...?",
    options: ["54", "60", "63", "72"],
    correct: "63",
    explanation:
      "The differences are 6, 9, 12, 15. The next difference is 18, so 45 + 18 = 63."
  },
  {
    id: 7,
    domain: 'PATTERN',
    text: "What comes next: A, C, F, J, O, ...?",
    options: ["S", "T", "U", "V"],
    correct: "U",
    explanation:
      "The gaps are +2, +3, +4, +5. The next gap is +6. O + 6 = U."
  },
  {
    id: 8,
    domain: 'PATTERN',
    text: "Find the next number: 4, 9, 19, 39, 79, ...?",
    options: ["119", "139", "159", "179"],
    correct: "159",
    explanation:
      "Each number is multiplied by 2 and then 1 is added: 4 x 2 + 1 = 9, 9 x 2 + 1 = 19, 19 x 2 + 1 = 39, 39 x 2 + 1 = 79, so 79 x 2 + 1 = 159."
  },
  {
    id: 9,
    domain: 'PATTERN',
    text: "If MANGO is coded as NBOHP, how is PEAR coded?",
    options: ["QFBS", "QFAR", "OFBS", "QEAR"],
    correct: "QFBS",
    explanation:
      "Each letter is shifted forward by one position: M to N, A to B, N to O, G to H, O to P. PEAR becomes QFBS."
  },
  {
    id: 10,
    domain: 'PATTERN',
    text: "Complete the pattern: 1, 4, 9, 16, 25, ...?",
    options: ["30", "35", "36", "49"],
    correct: "36",
    explanation:
      "The sequence contains square numbers: 1^2, 2^2, 3^2, 4^2, 5^2. The next is 6^2 = 36."
  },
  {
    id: 11,
    domain: 'PATTERN',
    text: "Which number comes next: 81, 27, 9, 3, ...?",
    options: ["0", "1", "2", "6"],
    correct: "1",
    explanation:
      "Each term is divided by 3: 81 / 3 = 27, 27 / 3 = 9, 9 / 3 = 3, so 3 / 3 = 1."
  },
  {
    id: 12,
    domain: 'PATTERN',
    text: "If CAT is coded as DBU, how is DOG coded?",
    options: ["EPH", "EPG", "COF", "FQI"],
    correct: "EPH",
    explanation:
      "Each letter is shifted one step forward in the alphabet: D to E, O to P, G to H. DOG becomes EPH."
  },
  {
    id: 13,
    domain: 'PATTERN',
    text: "Find the missing number: 7, 14, 28, 56, ...?",
    options: ["84", "98", "112", "120"],
    correct: "112",
    explanation:
      "Each number is doubled. 7 x 2 = 14, 14 x 2 = 28, 28 x 2 = 56, so 56 x 2 = 112."
  },
  {
    id: 14,
    domain: 'PATTERN',
    text: "Which pair follows the same pattern as AB:CD?",
    options: ["EF:GH", "EF:GI", "EF:HJ", "EF:IK"],
    correct: "EF:GH",
    explanation:
      "AB is followed by the next two letters CD. Similarly, EF is followed by GH."
  },
  {
    id: 15,
    domain: 'PATTERN',
    text: "What is the next number: 2, 5, 11, 23, 47, ...?",
    options: ["85", "93", "95", "97"],
    correct: "95",
    explanation:
      "Each term is multiplied by 2 and then 1 is added: 2 x 2 + 1 = 5, 5 x 2 + 1 = 11, 11 x 2 + 1 = 23, 23 x 2 + 1 = 47, so 47 x 2 + 1 = 95."
  },

  // --- Critical Thinking ---
  {
    id: 16,
    domain: 'CRITICAL',
    text: "All engineers are logical. Some logical people are poets. Therefore, some engineers are poets.",
    options: ["Necessarily True", "Probably True", "Insufficient Data", "Necessarily False"],
    correct: "Insufficient Data",
    explanation:
      "The logical people who are poets may not overlap with engineers. The conclusion is possible, but not guaranteed."
  },
  {
    id: 17,
    domain: 'CRITICAL',
    text: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?",
    options: ["10 cents", "5 cents", "1 cent", "15 cents"],
    correct: "5 cents",
    explanation:
      "Let the ball cost x. The bat costs x + 1.00. So x + x + 1.00 = 1.10. Therefore, 2x = 0.10 and x = 0.05."
  },
  {
    id: 18,
    domain: 'CRITICAL',
    text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    options: ["100 minutes", "5 minutes", "20 minutes", "1 minute"],
    correct: "5 minutes",
    explanation:
      "Each machine makes one widget in 5 minutes. Therefore, 100 machines can make 100 widgets in the same 5 minutes."
  },
  {
    id: 19,
    domain: 'CRITICAL',
    text: "A patch of lily pads doubles in size every day. If it covers the entire lake on day 48, when did it cover half the lake?",
    options: ["24 days", "47 days", "12 days", "46 days"],
    correct: "47 days",
    explanation:
      "Since the patch doubles daily, it must have been half the lake one day before it became full. That is day 47."
  },
  {
    id: 20,
    domain: 'CRITICAL',
    text: "If you flip a fair coin 5 times and it lands on heads each time, what is the probability of heads on the 6th flip?",
    options: ["1/64", "1/2", "1/32", "Less than 1/2"],
    correct: "1/2",
    explanation:
      "Each coin flip is independent. Previous outcomes do not affect the probability of the next flip."
  },
  {
    id: 21,
    domain: 'CRITICAL',
    text: "A company's revenue increased by 10% in Year 1 and decreased by 10% in Year 2. What is the net change?",
    options: ["0%", "Increased by 1%", "Decreased by 1%", "Decreased by 2%"],
    correct: "Decreased by 1%",
    explanation:
      "Starting from 100, a 10% increase gives 110. A 10% decrease from 110 gives 99. The net change is a 1% decrease."
  },
  {
    id: 22,
    domain: 'CRITICAL',
    text: "If John's son is my son's father, who am I to John?",
    options: ["Father", "Son", "Grandfather", "Brother"],
    correct: "Son",
    explanation:
      "My son's father is me. So John's son is me. Therefore, I am John's son."
  },
  {
    id: 23,
    domain: 'CRITICAL',
    text: "A product has a 25% discount and then a further 20% discount. What is the total discount?",
    options: ["45%", "40%", "50%", "35%"],
    correct: "40%",
    explanation:
      "Start with 100. After 25% off, price is 75. After another 20% off, price is 60. Total discount is 40%."
  },
  {
    id: 24,
    domain: 'CRITICAL',
    text: "A manager says, 'All high performers work late.' Which conclusion is logically valid?",
    options: [
      "Anyone who works late is a high performer",
      "Some high performers may work late",
      "No high performers work early",
      "Working late guarantees performance"
    ],
    correct: "Some high performers may work late",
    explanation:
      "The statement only says high performers work late. It does not prove that everyone who works late is a high performer."
  },
  {
    id: 25,
    domain: 'CRITICAL',
    text: "A survey of only satisfied customers shows 95% satisfaction. What is the main flaw?",
    options: ["Confirmation bias", "Sampling bias", "Arithmetic error", "No flaw"],
    correct: "Sampling bias",
    explanation:
      "The sample excludes dissatisfied customers, so the result is not representative."
  },
  {
    id: 26,
    domain: 'CRITICAL',
    text: "A new training program was launched, and sales increased the next month. What can be concluded?",
    options: [
      "The training definitely caused the increase",
      "The training may have contributed, but causation is not proven",
      "The training had no effect",
      "Sales will keep increasing forever"
    ],
    correct: "The training may have contributed, but causation is not proven",
    explanation:
      "Correlation or timing alone does not prove causation. Other factors may have affected sales."
  },
  {
    id: 27,
    domain: 'CRITICAL',
    text: "If a task takes 12 people 10 days, how long would it take 6 people at the same productivity?",
    options: ["5 days", "10 days", "15 days", "20 days"],
    correct: "20 days",
    explanation:
      "Total work is 12 x 10 = 120 person-days. With 6 people, 120 / 6 = 20 days."
  },
  {
    id: 28,
    domain: 'CRITICAL',
    text: "A doctor says a test is 99% accurate, but the disease is extremely rare. What should you be careful about?",
    options: [
      "Base rate neglect",
      "Alphabetical bias",
      "Overfitting only",
      "Color contrast"
    ],
    correct: "Base rate neglect",
    explanation:
      "Even accurate tests can produce misleading results when the underlying condition is very rare."
  },
  {
    id: 29,
    domain: 'CRITICAL',
    text: "A team chooses an option because they already spent $1M on it, even though another option is better. What bias is this?",
    options: ["Sunk cost fallacy", "Availability bias", "Halo effect", "Anchoring"],
    correct: "Sunk cost fallacy",
    explanation:
      "The sunk cost fallacy occurs when past investment influences a decision even though it cannot be recovered."
  },
  {
    id: 30,
    domain: 'CRITICAL',
    text: "If all roses are flowers and some flowers fade quickly, which conclusion is valid?",
    options: [
      "All roses fade quickly",
      "Some roses fade quickly",
      "No roses fade quickly",
      "Insufficient Data"
    ],
    correct: "Insufficient Data",
    explanation:
      "The flowers that fade quickly may or may not include roses. The information is insufficient."
  },

  // --- Abstract Reasoning ---
  {
    id: 31,
    domain: 'ABSTRACT',
    text: "If a circle is to a sphere, then a square is to a...?",
    options: ["Cube", "Triangle", "Rectangle", "Pyramid"],
    correct: "Cube",
    explanation:
      "A sphere is the 3D counterpart of a circle. A cube is the 3D counterpart of a square."
  },
  {
    id: 32,
    domain: 'ABSTRACT',
    text: "Identify the odd one out: Mercury, Venus, Moon, Mars.",
    options: ["Mercury", "Venus", "Moon", "Mars"],
    correct: "Moon",
    explanation:
      "Mercury, Venus, and Mars are planets. The Moon is a natural satellite."
  },
  {
    id: 33,
    domain: 'ABSTRACT',
    text: "Clock is to Time as Thermometer is to...?",
    options: ["Heat", "Radiation", "Temperature", "Energy"],
    correct: "Temperature",
    explanation:
      "A clock measures time. A thermometer measures temperature."
  },
  {
    id: 34,
    domain: 'ABSTRACT',
    text: "Which of the following is most similar to Iron, Copper, and Zinc?",
    options: ["Sulfur", "Aluminum", "Carbon", "Neon"],
    correct: "Aluminum",
    explanation:
      "Iron, Copper, and Zinc are metals. Aluminum is also a metal."
  },
  {
    id: 35,
    domain: 'ABSTRACT',
    text: "If 1 = 5, 2 = 25, 3 = 125, 4 = 625, then 5 = ?",
    options: ["3125", "1", "25", "5"],
    correct: "1",
    explanation:
      "This is a trick question. The first statement says 1 = 5, so by reversal 5 = 1."
  },
  {
    id: 36,
    domain: 'ABSTRACT',
    text: "Which word does not belong with the others: Index, Glossary, Chapter, Book?",
    options: ["Index", "Glossary", "Chapter", "Book"],
    correct: "Book",
    explanation:
      "Index, Glossary, and Chapter are parts of a book. Book is the whole object."
  },
  {
    id: 37,
    domain: 'ABSTRACT',
    text: "Hand is to Glove as Foot is to...?",
    options: ["Shoe", "Hat", "Sleeve", "Ring"],
    correct: "Shoe",
    explanation:
      "A glove is worn on a hand. A shoe is worn on a foot."
  },
  {
    id: 38,
    domain: 'ABSTRACT',
    text: "Book is to Reading as Fork is to...?",
    options: ["Writing", "Eating", "Cooking", "Cutting"],
    correct: "Eating",
    explanation:
      "A book is used for reading. A fork is used for eating."
  },
  {
    id: 39,
    domain: 'ABSTRACT',
    text: "Which item is the odd one out: Apple, Banana, Carrot, Mango?",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    correct: "Carrot",
    explanation:
      "Apple, Banana, and Mango are fruits. Carrot is a vegetable."
  },
  {
    id: 40,
    domain: 'ABSTRACT',
    text: "Seed is to Tree as Idea is to...?",
    options: ["Book", "Execution", "Plan", "Outcome"],
    correct: "Outcome",
    explanation:
      "A seed can develop into a tree. An idea can develop into an outcome when acted upon."
  }
];

export const COGNITIVE_EVALUATION = {
  high:
    "Exceptional problem-solving capacity. You demonstrate strong pattern recognition, logical discipline, and the ability to synthesize complex information quickly.",
  medium:
    "Solid analytical foundation. You can handle standard reasoning problems well and show good potential for structured analytical work.",
  low:
    "Methodical thinker. You may perform best with structured problems and may benefit from more practice with abstract, time-bound, and multi-step reasoning tasks."
};