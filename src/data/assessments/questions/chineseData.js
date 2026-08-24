import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import businessMessageImage from '../../../assets/assessments/chinese/business_message.png';
import meetingScheduleImage from '../../../assets/assessments/chinese/meeting_schedule.png';
import officeDirectoryImage from '../../../assets/assessments/chinese/office_directory.png';

export const chineseData = {
  id: ASSESSMENT_TYPES.chinese,
  title: 'Chinese (Mandarin) Professional Language Proficiency Certification',
  shortTitle: 'Chinese (Mandarin)',
  category: 'Language Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Interactive professional language assessment covering workplace comprehension, business communication, schedules, charts, tables, grammar in context, professional tone, negotiation, and customer communication.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Questions include message/email exhibits, office visuals, schedules, tables, charts, and Mermaid conversation flows. Read each scenario carefully and choose the most accurate and professional answer. No negative marking.',
  questions: [
    {
      id: 'zh-01',
      type: 'mcq',
      title: '商务邮件',
      difficulty: 'easy',
      points: 5,
      prompt: `阅读邮件。

{{image}}

张伟的主要目的是什么？`,
      image: {
        src: businessMessageImage,
        alt: '请求调整会议时间的商务邮件'
      },
      options: [
        '永久取消会议。',
        '礼貌地调整会议时间，并请对方确认。',
        '发送发票。',
        '投诉客户。'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. 邮件明确提出将会议从14:00改到15:30并请对方确认。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-02',
      type: 'mcq',
      title: '日程理解',
      difficulty: 'easy',
      points: 5,
      prompt: `查看日程。

{{image}}

你只有11:15到12:30有空。哪项活动可以完整参加？`,
      image: {
        src: meetingScheduleImage,
        alt: '工作日程'
      },
      options: [
        '供应商电话。',
        '客户复盘。',
        '预算检查。',
        '市场汇报。'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 市场汇报是11:30到12:15，完全在可用时间内。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-03',
      type: 'mcq',
      title: '礼貌请求',
      difficulty: 'easy',
      points: 5,
      prompt: `第一次联系重要客户时，哪句话最专业？`,
      options: [
        '请问您能确认一下周四上午10点是否方便吗？',
        '周四10点确认。',
        '现在回复我。',
        '周四10点。回复。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. 正确表达礼貌、完整，而且适合商务场景。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-04',
      type: 'mcq',
      title: '条件表达',
      difficulty: 'easy',
      points: 5,
      prompt: `完成句子：

“如果供应商今天确认，我们明天___订单。”`,
      options: [
        '昨天确认了',
        '本来会确认',
        '会确认',
        '正在确认过'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 条件成立后的未来动作，用“会确认”自然。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-05',
      type: 'mcq',
      title: '代词与语序',
      difficulty: 'easy',
      points: 5,
      prompt: `“我把合同发给李女士了。”

哪句接续最自然？`,
      options: [
        '我昨天把它发给她了。',
        '我昨天把她发给它了。',
        '我昨天给它她发了。',
        '我昨天它把她发了。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. “把它发给她”符合自然语序。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-06',
      type: 'mcq',
      title: '图表理解',
      difficulty: 'medium',
      points: 5,
      prompt: `查看图表。

{{chart}}

哪项描述最准确？`,
      chart: {
        type: 'line',
        title: '每周客户请求量',
        xAxis: ['第1周','第2周','第3周','第4周','第5周'],
        series: [{ name: '请求量', data: [42,47,45,58,66] }]
      },
      options: [
        '每周都下降。',
        '完全没有变化。',
        '虽然第3周略有下降，但整体客户请求量上升。',
        '第2周后持续大幅下降。'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 数据总体从42上升到66。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-07',
      type: 'mcq',
      title: '电话沟通',
      difficulty: 'medium',
      points: 5,
      prompt: `阅读对话流程。

{{diagram}}

空白处最合适的是哪句话？`,
      diagram: `flowchart LR
  A["客户：我可以找王女士吗？"] --> B["前台：她开会到15点。"]
  B --> C["客户：______"]
  C --> D["前台：好的，我会转告她。"]`,
      options: [
        '那我挂了。',
        '把她的私人号码给我。',
        '让她现在离开会议。',
        '可以请她给我回个电话吗？'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. “请她回电话”与前台“我会转告她”自然衔接。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-08',
      type: 'mcq',
      title: '客户服务语气',
      difficulty: 'medium',
      points: 5,
      prompt: `客户说：“我的订单已经晚了五天，也没人更新。”

哪种回复最专业？`,
      options: [
        '再等一下。',
        '非常抱歉造成延误。我们正在核查物流，并会在今天16点前给您更新。',
        '这是快递公司的问题。',
        '可能是您地址填错了。'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. 正确回复承认问题、避免推责，并给出具体行动和时间。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-09',
      type: 'mcq',
      title: '办公室词汇',
      difficulty: 'medium',
      points: 5,
      prompt: `查看办公室指南。

{{image}}

新员工应该去哪里提交入职材料？`,
      image: {
        src: officeDirectoryImage,
        alt: '办公室指南'
      },
      options: [
        '前台。',
        '财务部。',
        '人力资源部。',
        '会议室。'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 入职材料通常由人力资源部处理。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-10',
      type: 'mcq',
      title: '表格理解',
      difficulty: 'medium',
      points: 5,
      prompt: `查看表格。

{{table}}

哪家供应商完全按承诺时间交付？`,
      table: {
        headers: ['供应商','承诺','实际'],
        rows: [['A','5天','7天'],['B','8天','8天'],['C','4天','6天'],['D','10天','13天']]
      },
      options: [
        '供应商B。',
        '供应商A。',
        '供应商C。',
        '供应商D。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. B的承诺和实际都是8天。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-11',
      type: 'mcq',
      title: '过去进行',
      difficulty: 'medium',
      points: 5,
      prompt: `完成句子：

“经理打电话时，我___报告。”`,
      options: [
        '昨天会准备',
        '正在准备',
        '准备了明天',
        '正在准备过'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. 在过去某个时间点正在进行的动作，用“正在准备”自然。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-12',
      type: 'mcq',
      title: '正式改写',
      difficulty: 'medium',
      points: 5,
      prompt: `同事写：“今天把数字发给我。”

给外部高管时，哪种表达更合适？`,
      options: [
        '今天发数据。',
        '我现在就要数据。',
        '数据。今天。',
        '麻烦您在今天下班前把数据发给我，可以吗？'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 表达礼貌、清晰，并给出明确时限。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-13',
      type: 'mcq',
      title: '绩效图表',
      difficulty: 'hard',
      points: 5,
      prompt: `查看图表。

{{chart}}

最合理的结论是什么？`,
      chart: {
        type: 'bar',
        title: '客户满意度 (%)',
        categories: ['前台','速度','清晰度','问题解决'],
        series: [{ name: '评分', data: [92,74,88,69] }]
      },
      options: [
        '前台评分最低。',
        '清晰度低于70%。',
        '所有指标都高于85%。',
        '问题解决能力是最需要改进的方面。'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 问题解决只有69%，为最低项。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-14',
      type: 'mcq',
      title: '逻辑连接词',
      difficulty: 'hard',
      points: 5,
      prompt: `完成句子：

“销售额增长了12%。___，由于成本上升，利润率下降了。”`,
      options: [
        '因此',
        '但是',
        '例如',
        '同样'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. “但是”表示前后对比。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-15',
      type: 'mcq',
      title: '谈判语言',
      difficulty: 'hard',
      points: 5,
      prompt: `想在不强硬的情况下提出替代方案，哪句话最好？`,
      options: [
        '您必须接受两批交付。',
        '我们要改变交付计划。',
        '如果您觉得合适，我们可以考虑分两批交付。',
        '把交付分成两批。'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. “可以考虑”使建议更合作、更委婉。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-16',
      type: 'mcq',
      title: '会议理解',
      difficulty: 'hard',
      points: 5,
      prompt: `阅读流程。

{{diagram}}

最终决定是什么？`,
      diagram: `sequenceDiagram
  participant C as 客户
  participant S as 销售
  participant F as 财务
  C->>S: 我们希望8%的折扣
  S->>F: 可以批准8%吗
  F-->>S: 无需升级审批最多5%
  S-->>C: 我们可以马上提供5%
  C-->>S: 可以`,
      options: [
        '销售提出5%的折扣，客户接受了。',
        '财务批准了8%。',
        '客户拒绝所有折扣。',
        '谈判取消。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. 流程最后客户接受5%。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-17',
      type: 'mcq',
      title: '比较表达',
      difficulty: 'hard',
      points: 5,
      prompt: `查看表格。

{{table}}

哪句话正确？`,
      table: {
        headers: ['团队','平均回复时间'],
        rows: [['Paris','2小时10分'],['Lyon','3小时05分'],['Bordeaux','1小时45分'],['Lille','2小时35分']]
      },
      options: [
        'Lyon比Bordeaux更快。',
        'Bordeaux团队回复最快。',
        'Paris最慢。',
        'Lille不比Bordeaux慢。'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. Bordeaux的平均回复时间最短。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-18',
      type: 'mcq',
      title: '指令理解',
      difficulty: 'hard',
      points: 5,
      prompt: `经理写道：

“本月数据没有问题，但在发给客户之前，请先核对标记的两个差异。”

你首先应该做什么？`,
      options: [
        '立即发送报告。',
        '删除差异。',
        '重写整份报告。',
        '先核对两个标记差异。'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 指令明确要求先核对，再对外发送。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-19',
      type: 'mcq',
      title: '专业语气',
      difficulty: 'hard',
      points: 5,
      prompt: `哪句话最专业地说明延误？`,
      options: [
        '很抱歉出现延误。新的完成时间是17点，我们会在15点发送一次进度更新。',
        '晚了，但应该没事。',
        '我们忘了，抱歉。',
        '暂时没有更新。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. 正确表达包含道歉、新时间和后续更新。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'zh-20',
      type: 'mcq',
      title: '综合沟通',
      difficulty: 'hard',
      points: 5,
      prompt: `查看流程。

{{diagram}}

哪种回复最完整？`,
      diagram: `flowchart TB
  I["发现问题"] --> A["承认问题"]
  A --> E["简要说明但不推责"]
  E --> P["说明行动和期限"]
  P --> F["确认后续跟进"]`,
      options: [
        '我们收到您的消息了。',
        '这是供应商的问题。',
        '很抱歉发生了这个问题。我们已确认原因并开始修复，将在今天16点前确认解决结果。',
        '感谢等待。'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 包含承认问题、说明、行动、期限和跟进。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    }
  ],
};
