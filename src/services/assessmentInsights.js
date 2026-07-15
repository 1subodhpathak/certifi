const STOP_WORDS = new Set([
  'the',
  'and',
  'for',
  'with',
  'from',
  'that',
  'this',
  'into',
  'your',
  'what',
  'which',
  'when',
  'where',
  'would',
  'should',
  'could',
  'about',
  'using',
  'have',
  'been',
  'will',
  'best',
]);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function inferDifficulty(question = {}) {
  if (question.difficulty) return String(question.difficulty).toLowerCase();
  if (question.type === 'coding' || question.type === 'scenario-coding') return 'hard';
  if (question.type === 'case-study') return 'medium';
  return 'easy';
}

export function extractTopicLabel(question = {}, index = 0) {
  const seed = question.topic || question.title || question.question || question.prompt || `Topic ${index + 1}`;
  const cleaned = String(seed).replace(/[^\w\s/-]/g, ' ');
  const tokens = cleaned
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token && !STOP_WORDS.has(token.toLowerCase()));

  if (!tokens.length) return `Topic ${index + 1}`;
  return tokens.slice(0, 4).join(' ');
}

function buildExpectedKeywords(question = {}) {
  const source = `${question.answer || ''} ${question.question || ''} ${question.prompt || ''}`;
  return Array.from(
    new Set(
      source
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter((word) => word.length > 4 && !STOP_WORDS.has(word))
        .slice(0, 8),
    ),
  );
}

export function scoreQuestion(question = {}, answer, index = 0) {
  const totalPoints = Number(question.points) || 20;
  const topic = extractTopicLabel(question, index);
  const difficulty = inferDifficulty(question);
  const candidateAnswer = typeof answer === 'string' ? answer.trim() : answer;

  if (question.type === 'mcq' || question.type === 'case-study') {
    const expected = question.correct ?? question.answer ?? '';
    const normalizedActual = String(candidateAnswer ?? '').trim().toLowerCase();
    const normalizedExpected = String(expected ?? '').trim().toLowerCase();
    const isCorrect = Boolean(normalizedActual) && normalizedActual === normalizedExpected;

    return {
      ...question,
      topic,
      difficulty,
      candidateAnswer,
      correctAnswer: expected,
      totalPoints,
      earnedPoints: isCorrect ? totalPoints : 0,
      isCorrect,
    };
  }

  const responseText = String(candidateAnswer || '');
  const expectedKeywords = buildExpectedKeywords(question);
  const matchedKeywords = expectedKeywords.filter((word) => responseText.toLowerCase().includes(word));
  const keywordRatio = expectedKeywords.length ? matchedKeywords.length / expectedKeywords.length : 0;
  const effortRatio = clamp(responseText.length / 240, 0, 1);
  const qualityRatio = Math.max(keywordRatio, effortRatio * 0.75);
  const earnedPoints = Math.round(totalPoints * qualityRatio);
  const isCorrect = responseText.length >= 80 || matchedKeywords.length >= Math.min(2, expectedKeywords.length || 1);

  return {
    ...question,
    topic,
    difficulty,
    candidateAnswer: responseText,
    correctAnswer: question.answer || '',
    totalPoints,
    earnedPoints: clamp(earnedPoints, 0, totalPoints),
    isCorrect,
    matchedKeywords,
  };
}

export function buildProctoringSummary(proctoring = {}) {
  const tabSwitches = Number(proctoring.tabSwitches || 0);
  const fullscreenExits = Number(proctoring.fullscreenExits || 0);
  const cameraInterruptions = Number(proctoring.cameraInterruptions || 0);
  const faceVisibility = clamp(Number(proctoring.faceVisibility ?? 98), 0, 100);
  const fullscreenIntegrity = clamp(Number(proctoring.fullscreenIntegrity ?? (fullscreenExits === 0 ? 100 : 100 - fullscreenExits * 18)), 0, 100);
  const suspiciousEvents = [
    ...(proctoring.tabSwitchLog || []).map((item) => ({ type: 'tab_switch', ...item })),
    ...(proctoring.fullscreenExitLog || []).map((item) => ({ type: 'fullscreen_exit', ...item })),
    ...(proctoring.cameraInterruptionsLog || []).map((item) => ({ type: 'camera_interrupt', ...item })),
  ];

  const trustScore = clamp(
    Math.round(
      100 - tabSwitches * 12 - fullscreenExits * 10 - cameraInterruptions * 15 - Math.max(0, 90 - faceVisibility) * 0.6,
    ),
    0,
    100,
  );

  const riskLevel = trustScore >= 85 ? 'Low' : trustScore >= 65 ? 'Moderate' : 'High';
  const suspiciousActivitySummary = suspiciousEvents.length
    ? `${suspiciousEvents.length} integrity events logged across visibility, fullscreen, or camera monitoring.`
    : 'No suspicious activity detected during the monitored session.';

  return {
    trustScore,
    riskLevel,
    faceVisibility,
    fullscreenIntegrity,
    tabSwitches,
    fullscreenExits,
    cameraInterruptions,
    suspiciousEvents,
    suspiciousActivitySummary,
  };
}

export function buildQuestionBank(skill, questions = []) {
  const difficultyBreakdown = questions.reduce((accumulator, question) => {
    const difficulty = inferDifficulty(question);
    return {
      ...accumulator,
      [difficulty]: (accumulator[difficulty] || 0) + 1,
    };
  }, {});

  return {
    version: `QB-${slugify(skill || 'assessment')}-${questions.length}-${new Date().toISOString().slice(0, 10)}`,
    assessedOn: new Date().toISOString(),
    questionCount: questions.length,
    difficultyBreakdown,
  };
}

export function buildSkillReportCard(questionResults = [], proctoringSummary = {}) {
  const topicMap = new Map();
  let answeredCount = 0;

  questionResults.forEach((question, index) => {
    const topic = question.topic || extractTopicLabel(question, index);
    const current = topicMap.get(topic) || {
      topic,
      correct: 0,
      total: 0,
      answered: 0,
      pointsEarned: 0,
      totalPoints: 0,
      difficulties: new Set(),
    };

    current.total += 1;
    current.totalPoints += Number(question.totalPoints || 0);
    current.pointsEarned += Number(question.earnedPoints || 0);
    current.difficulties.add(question.difficulty || inferDifficulty(question));

    if (question.candidateAnswer !== undefined && String(question.candidateAnswer).trim() !== '') {
      current.answered += 1;
      answeredCount += 1;
    }

    if (question.isCorrect) current.correct += 1;
    topicMap.set(topic, current);
  });

  const topics = Array.from(topicMap.values()).map((item) => {
    const accuracy = item.total ? Math.round((item.correct / item.total) * 100) : 0;
    return {
      topic: item.topic,
      accuracy,
      correct: item.correct,
      total: item.total,
      answered: item.answered,
      pointsEarned: item.pointsEarned,
      totalPoints: item.totalPoints,
      difficulty: Array.from(item.difficulties).join(', '),
    };
  });

  topics.sort((left, right) => right.accuracy - left.accuracy);

  const totalQuestions = questionResults.length || 1;
  const totalCorrect = questionResults.filter((question) => question.isCorrect).length;
  const accuracy = Math.round((totalCorrect / totalQuestions) * 100);
  const completionRatio = answeredCount / totalQuestions;
  const trustScore = Number(proctoringSummary.trustScore ?? 100);
  const confidenceScore = clamp(Math.round(accuracy * 0.55 + completionRatio * 100 * 0.2 + trustScore * 0.25), 0, 100);

  return {
    accuracy,
    confidenceScore,
    topics,
    strengths: topics.filter((item) => item.accuracy >= 70).slice(0, 3),
    weakAreas: topics.filter((item) => item.accuracy < 60).slice(0, 3),
  };
}
