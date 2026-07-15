import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Mandarin Chinese assessment.
// Questions progress from beginner Mandarin to grammar, reading,
// workplace communication, business Chinese, and advanced usage.
export const chineseData = {
  id: ASSESSMENT_TYPES.chinese,
  title: 'Mandarin Chinese Professional Proficiency Certification',
  shortTitle: 'Chinese',
  category: 'Language Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional Mandarin Chinese assessment covering vocabulary, grammar, characters, measure words, sentence structure, reading comprehension, workplace communication, and business Chinese.',
  instructions:
    '请为每个问题选择最佳答案。Questions move from easy to hard and test practical Mandarin understanding for daily and professional communication.',
  questions: [
    {
      id: 'zh-01',
      type: 'mcq',
      title: 'Tones',
      prompt: '“妈” 的声调是？',
      options: ['第一声', '第二声', '第三声', '第四声'],
      correctIndex: 0,
      explanation: '“妈” mā means mother and is pronounced with the first tone.'
    },
    {
      id: 'zh-02',
      type: 'mcq',
      title: 'Basic Greeting',
      prompt: 'Which phrase means “hello” in Mandarin?',
      options: ['谢谢', '你好', '再见', '没关系'],
      correctIndex: 1,
      explanation: '“你好” means hello.'
    },
    {
      id: 'zh-03',
      type: 'mcq',
      title: 'Numbers',
      prompt: '“八” 是多少？',
      options: ['6', '7', '8', '9'],
      correctIndex: 2,
      explanation: '“八” means eight.'
    },
    {
      id: 'zh-04',
      type: 'mcq',
      title: 'Basic Vocabulary',
      prompt: '“水” 的意思是什么？',
      options: ['Water', 'Fire', 'Food', 'Book'],
      correctIndex: 0,
      explanation: '“水” means water.'
    },
    {
      id: 'zh-05',
      type: 'mcq',
      title: 'Pronouns',
      prompt: '“我们” 的意思是什么？',
      options: ['I', 'You', 'We', 'They'],
      correctIndex: 2,
      explanation: '“我们” means we or us.'
    },
    {
      id: 'zh-06',
      type: 'mcq',
      title: 'Basic Sentence',
      prompt: 'Which sentence means “I am a student”?',
      options: ['我是学生。', '我有学生。', '我去学生。', '我在学生。'],
      correctIndex: 0,
      explanation: '“我是学生。” means “I am a student.”'
    },
    {
      id: 'zh-07',
      type: 'mcq',
      title: 'Measure Words',
      prompt: '请选择正确的量词：一 ___ 书。',
      options: ['个', '本', '只', '条'],
      correctIndex: 1,
      explanation: '“本” is the common measure word for books.'
    },
    {
      id: 'zh-08',
      type: 'mcq',
      title: 'Question Words',
      prompt: '“你在哪儿？” 的意思是什么？',
      options: ['Who are you?', 'Where are you?', 'What are you doing?', 'When are you leaving?'],
      correctIndex: 1,
      explanation: '“哪儿” means where.'
    },
    {
      id: 'zh-09',
      type: 'mcq',
      title: 'Negation',
      prompt: '请选择正确答案：我 ___ 知道。',
      options: ['不', '没', '别', '无'],
      correctIndex: 0,
      explanation: '“不知道” means “do not know.” “不” is used for general negation.'
    },
    {
      id: 'zh-10',
      type: 'mcq',
      title: 'Vocabulary',
      prompt: '“电脑” 的意思是什么？',
      options: ['Television', 'Computer', 'Phone', 'Radio'],
      correctIndex: 1,
      explanation: '“电脑” means computer.'
    },
    {
      id: 'zh-11',
      type: 'mcq',
      title: 'Time Words',
      prompt: '“明天” 的意思是什么？',
      options: ['Yesterday', 'Today', 'Tomorrow', 'Every day'],
      correctIndex: 2,
      explanation: '“明天” means tomorrow.'
    },
    {
      id: 'zh-12',
      type: 'mcq',
      title: 'Sentence Order',
      prompt: 'Which sentence correctly means “I am going to the company today”?',
      options: ['我公司今天去。', '今天我去公司。', '公司我今天去。', '去公司今天我。'],
      correctIndex: 1,
      explanation: 'The natural order is time + subject + verb + place/object: “今天我去公司。”'
    },
    {
      id: 'zh-13',
      type: 'mcq',
      title: 'Possession',
      prompt: '“我的手机” 的意思是什么？',
      options: ['My phone', 'Your phone', 'His computer', 'Our company'],
      correctIndex: 0,
      explanation: '“的” is commonly used to show possession. “我的手机” means my phone.'
    },
    {
      id: 'zh-14',
      type: 'mcq',
      title: 'Completed Action',
      prompt: '请选择正确答案：我昨天买 ___ 一本书。',
      options: ['了', '着', '过', '在'],
      correctIndex: 0,
      explanation: '“了” can indicate a completed action. “我昨天买了一本书。” means “I bought a book yesterday.”'
    },
    {
      id: 'zh-15',
      type: 'mcq',
      title: 'Past Negation',
      prompt: 'Which sentence correctly means “I did not go yesterday”?',
      options: ['我昨天不去。', '我昨天没去。', '我昨天别去。', '我昨天无去。'],
      correctIndex: 1,
      explanation: '“没” is commonly used to negate completed past actions.'
    },
    {
      id: 'zh-16',
      type: 'mcq',
      title: 'Ongoing Action',
      prompt: '“我正在开会。” 的意思是什么？',
      options: ['I already had a meeting.', 'I am currently in a meeting.', 'I will cancel the meeting.', 'I do not like meetings.'],
      correctIndex: 1,
      explanation: '“正在” indicates an action in progress.'
    },
    {
      id: 'zh-17',
      type: 'mcq',
      title: 'Comparison',
      prompt: '“他比我高。” 的意思是什么？',
      options: ['He is taller than me.', 'I am taller than him.', 'He is as tall as me.', 'He is not tall.'],
      correctIndex: 0,
      explanation: '“A 比 B + adjective” means A is more adjective than B.'
    },
    {
      id: 'zh-18',
      type: 'mcq',
      title: 'Reason and Result',
      prompt: '请选择正确搭配：___ 今天下雨，___ 我不去公司。',
      options: ['因为 / 所以', '虽然 / 但是', '如果 / 就', '一边 / 一边'],
      correctIndex: 0,
      explanation: '“因为……所以……” means because… therefore…'
    },
    {
      id: 'zh-19',
      type: 'mcq',
      title: 'Contrast',
      prompt: 'Which pair means “although...but...”?',
      options: ['因为……所以……', '虽然……但是……', '如果……就……', '越……越……'],
      correctIndex: 1,
      explanation: '“虽然……但是……” is used to express contrast.'
    },
    {
      id: 'zh-20',
      type: 'mcq',
      title: 'Business Vocabulary',
      prompt: '“公司” 的意思是什么？',
      options: ['School', 'Company', 'Station', 'Restaurant'],
      correctIndex: 1,
      explanation: '“公司” means company.'
    },
    {
      id: 'zh-21',
      type: 'mcq',
      title: 'Business Chinese',
      prompt: '“开会” 是什么意思？',
      options: ['To go home', 'To have or attend a meeting', 'To eat dinner', 'To buy a ticket'],
      correctIndex: 1,
      explanation: '“开会” means to have or attend a meeting.'
    },
    {
      id: 'zh-22',
      type: 'mcq',
      title: 'Workplace Vocabulary',
      prompt: '“报告” 在商务语境中通常是什么意思？',
      options: ['Report', 'Airport', 'Discount', 'Breakfast'],
      correctIndex: 0,
      explanation: '“报告” means report.'
    },
    {
      id: 'zh-23',
      type: 'mcq',
      title: 'Workplace Request',
      prompt: '“请把文件发给我。” 的意思是什么？',
      options: [
        'Please send me the document.',
        'Please delete the document.',
        'Please print the document.',
        'Please translate the document.'
      ],
      correctIndex: 0,
      explanation: '“发给我” means send to me.'
    },
    {
      id: 'zh-24',
      type: 'mcq',
      title: 'Deadline',
      prompt: '“截止日期” 的意思是什么？',
      options: ['Meeting room', 'Deadline', 'Invoice', 'Password'],
      correctIndex: 1,
      explanation: '“截止日期” means deadline.'
    },
    {
      id: 'zh-25',
      type: 'mcq',
      title: 'Polite Expression',
      prompt: 'Which phrase is the most polite way to ask someone to help?',
      options: ['快点！', '你必须做。', '麻烦您帮我一下。', '给我做。'],
      correctIndex: 2,
      explanation: '“麻烦您帮我一下。” is a polite way to ask for help.'
    },
    {
      id: 'zh-26',
      type: 'mcq',
      title: 'Formal Greeting',
      prompt: '初次见面，请多 ___。',
      options: ['关照', '照顾', '说话', '谢谢'],
      correctIndex: 0,
      explanation: '“初次见面，请多关照。” is a polite phrase used when meeting someone for the first time.'
    },
    {
      id: 'zh-27',
      type: 'mcq',
      title: 'Email Communication',
      prompt: 'Which phrase is most appropriate for ending a polite business email?',
      options: ['哈哈哈', '你快回', '谢谢您的帮助。', '我不管'],
      correctIndex: 2,
      explanation: '“谢谢您的帮助。” means “Thank you for your help” and is appropriate in professional communication.'
    },
    {
      id: 'zh-28',
      type: 'mcq',
      title: 'Meeting Schedule',
      prompt: '“会议几点开始？” 的意思是什么？',
      options: [
        'Where is the meeting?',
        'What time does the meeting start?',
        'Who joined the meeting?',
        'Why was the meeting canceled?'
      ],
      correctIndex: 1,
      explanation: '“几点开始” asks what time something starts.'
    },
    {
      id: 'zh-29',
      type: 'mcq',
      title: 'Reading Comprehension',
      prompt: '阅读：小王今天九点到公司，十点开会。小王几点开会？',
      options: ['八点', '九点', '十点', '十二点'],
      correctIndex: 2,
      explanation: 'The sentence says “十点开会,” meaning the meeting is at ten o’clock.'
    },
    {
      id: 'zh-30',
      type: 'mcq',
      title: 'Reading Comprehension',
      prompt: '阅读：李经理今天很忙，因为下午有三个会议。李经理为什么很忙？',
      options: ['因为他要出差', '因为下午有三个会议', '因为他生病了', '因为他没有电脑'],
      correctIndex: 1,
      explanation: 'The passage says he is busy because he has three meetings in the afternoon.'
    },
    {
      id: 'zh-31',
      type: 'mcq',
      title: 'Result Complement',
      prompt: '“我看完了这份报告。” 的意思是什么？',
      options: [
        'I have finished reading this report.',
        'I will start reading this report.',
        'I cannot find this report.',
        'I wrote this report.'
      ],
      correctIndex: 0,
      explanation: '“看完了” means finished reading.'
    },
    {
      id: 'zh-32',
      type: 'mcq',
      title: '把 Structure',
      prompt: 'Which sentence correctly means “Please put the file on the table”?',
      options: [
        '请把文件放在桌子上。',
        '请文件把放桌子上。',
        '请在文件放把桌子。',
        '请桌子把文件放。'
      ],
      correctIndex: 0,
      explanation: '“把” structure often follows: subject + 把 + object + verb + result/location.'
    },
    {
      id: 'zh-33',
      type: 'mcq',
      title: 'Passive Structure',
      prompt: '“文件被删除了。” 的意思是什么？',
      options: [
        'The file was deleted.',
        'The file was created.',
        'The file was printed.',
        'The file was translated.'
      ],
      correctIndex: 0,
      explanation: '“被” is commonly used to form passive meaning.'
    },
    {
      id: 'zh-34',
      type: 'mcq',
      title: 'Comparison of Similarity',
      prompt: '“这个方案跟那个方案一样。” 的意思是什么？',
      options: [
        'This plan is the same as that plan.',
        'This plan is better than that plan.',
        'This plan is cheaper than that plan.',
        'This plan is not related to that plan.'
      ],
      correctIndex: 0,
      explanation: '“跟……一样” means “the same as.”'
    },
    {
      id: 'zh-35',
      type: 'mcq',
      title: 'Except / In Addition',
      prompt: '“除了价格以外，我们还要考虑质量。” 的意思是什么？',
      options: [
        'Besides price, we also need to consider quality.',
        'We only need to consider price.',
        'Price is not important at all.',
        'Quality has already been decided.'
      ],
      correctIndex: 0,
      explanation: '“除了……以外，还……” means besides one thing, also another thing.'
    },
    {
      id: 'zh-36',
      type: 'mcq',
      title: 'Business Metric',
      prompt: '“同比增长” 在商业报告中通常是什么意思？',
      options: [
        'Growth compared with the same period last year',
        'Growth compared with yesterday',
        'A decrease in profit',
        'A canceled meeting'
      ],
      correctIndex: 0,
      explanation: '“同比增长” means year-over-year growth compared with the same period in the previous year.'
    },
    {
      id: 'zh-37',
      type: 'mcq',
      title: 'Business Metric',
      prompt: '“环比下降” 在数据报告中通常是什么意思？',
      options: [
        'Decrease compared with the previous period',
        'Increase compared with last year',
        'No change in performance',
        'Final approval from leadership'
      ],
      correctIndex: 0,
      explanation: '“环比” compares with the immediately previous period, such as previous month or previous quarter.'
    },
    {
      id: 'zh-38',
      type: 'mcq',
      title: 'Professional Communication',
      prompt: 'Which sentence is most appropriate in a professional message?',
      options: [
        '你快点给我。',
        '请您方便的时候把资料发给我，谢谢。',
        '你怎么还没发？',
        '马上发，不然不行。'
      ],
      correctIndex: 1,
      explanation: '“请您方便的时候把资料发给我，谢谢。” is polite and professional.'
    },
    {
      id: 'zh-39',
      type: 'mcq',
      title: 'Advanced Reading',
      prompt: '阅读：由于客户需求增加，我们决定下个月扩大生产规模。这句话说明公司为什么扩大生产？',
      options: [
        '因为客户需求增加',
        '因为员工减少',
        '因为价格下降',
        '因为会议取消'
      ],
      correctIndex: 0,
      explanation: '“由于客户需求增加” means because customer demand increased.'
    },
    {
      id: 'zh-40',
      type: 'mcq',
      title: 'Advanced Business Chinese',
      prompt: 'Which sentence best means “We need to evaluate the risk before making a decision”?',
      options: [
        '我们需要在做决定之前评估风险。',
        '我们已经完成了所有风险。',
        '风险不需要决定。',
        '我们昨天取消了评估。'
      ],
      correctIndex: 0,
      explanation: '“在做决定之前评估风险” means evaluate risk before making a decision.'
    }
  ]
};