import { estimateTokensFromText, recordUsage } from './usageLedger';
import { assessmentsMap } from '../data/assessments';
import { skillLibrary } from '../data/skillData';
import { authenticatedFetch } from './api';

// --- CONFIGURATION ---
// Access the key from your .env file
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Safety check to warn you in the console if the key is missing
if (!API_KEY) {
  console.error("CRITICAL ERROR: VITE_GROQ_API_KEY is missing. Please check your .env file.");
}

let groqClient = null;

const getGroqClient = async () => {
  if (typeof window !== 'undefined' && window.clerkUserId) {
    return {
      chat: {
        completions: {
          create: async (params) => {
            const response = await authenticatedFetch('/careersense/certifi/ai/chat-completion', {
              method: 'POST',
              body: JSON.stringify(params),
            });
            if (response && response.ok) {
              return await response.json();
            }
            throw new Error(`AI proxy returned status ${response?.status}`);
          }
        }
      }
    };
  }

  if (!API_KEY) {
    throw new Error('VITE_GROQ_API_KEY is missing. Please add it to your environment configuration.');
  }

  if (!groqClient) {
    const { default: Groq } = await import('groq-sdk');
    groqClient = new Groq({
      apiKey: API_KEY,
      dangerouslyAllowBrowser: true,
    });
  }

  return groqClient;
};

/**
 * HELPER: Clean AI Response
 * Removes markdown code blocks if the AI adds them.
 */
const cleanJSON = (text) => {
  if (!text) return "";
  return text.replace(/```json/g, '').replace(/```/g, '').trim();
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const normalizeTopicText = (value = '') => String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
const SKILL_LIBRARY_INDEX = skillLibrary.map((skill) => ({
  original: skill,
  normalized: normalizeTopicText(skill),
}));

const dedupeOptions = (options = []) => {
  const seen = new Set();
  return options.filter((option) => {
    const normalized = String(option || '').trim().toLowerCase();
    if (!normalized || seen.has(normalized)) {
      return false;
    }
    seen.add(normalized);
    return true;
  });
};

const buildAnswerSlotPlan = (count = 0) => {
  const basePattern = [1, 3, 0, 2];
  return Array.from({ length: count }, (_, index) => basePattern[index % basePattern.length]);
};

const hashString = (value = '') => (
  String(value)
    .split('')
    .reduce((acc, char) => ((acc * 31) + char.charCodeAt(0)) % 1000003, 7)
);

const placeCorrectAnswer = (options = [], correctAnswer = '', desiredSlot = 0) => {
  const safeAnswer = String(correctAnswer || '').trim() || 'Insufficient information';
  const normalizedOptions = dedupeOptions(options.map((option) => String(option).trim()).filter(Boolean));
  const withoutCorrect = normalizedOptions.filter((option) => option.toLowerCase() !== safeAnswer.toLowerCase());
  const finalOptions = [safeAnswer, ...withoutCorrect].slice(0, 4);

  while (finalOptions.length < 4) {
    finalOptions.push(`Alternative option ${finalOptions.length + 1}`);
  }

  const correctOption = finalOptions[0];
  const distractors = finalOptions.slice(1);
  const slot = ((desiredSlot % finalOptions.length) + finalOptions.length) % finalOptions.length;
  const arranged = [...distractors];
  arranged.splice(slot, 0, correctOption);

  return {
    options: arranged,
    answer: correctOption,
  };
};

const buildFallbackOptions = (questionText, answerText = '') => {
  const safeAnswer = String(answerText || 'Insufficient information').trim() || 'Insufficient information';
  const topicHint = String(questionText || 'the topic').trim();
  const distractors = [
    `A partially correct ${topicHint} approach that misses a key decision factor`,
    `An operationally risky ${topicHint} choice with weak evidence`,
    `A common ${topicHint} misconception that sounds plausible but is incorrect`,
  ];

  const options = dedupeOptions([safeAnswer, ...distractors].map((option) => option.trim()).filter(Boolean)).slice(0, 4);

  while (options.length < 4) {
    options.push(`Alternative option ${options.length + 1}`);
  }

  return options;
};

const normalizeGeneratedQuestions = (questions = []) => {
  const slotPlan = buildAnswerSlotPlan(questions.length);

  return questions.map((question, index) => {
    const rawType = String(question.type || '').toLowerCase();
    const normalizedType = rawType.includes('scenario') || rawType.includes('case') ? 'case-study' : 'mcq';
    const prompt = question.question || question.prompt || `Question ${index + 1}`;
    const scenario = normalizedType === 'case-study'
      ? (question.scenario || question.code || question.context || 'Review the business situation and choose the strongest response.')
      : undefined;

    let options = Array.isArray(question.options)
      ? question.options.map((option) => String(option).trim()).filter(Boolean)
      : [];

    if (options.length < 4) {
      options = buildFallbackOptions(prompt, question.answer);
    }

    const answerText = String(question.answer || options[0] || '').trim();
    const desiredSlot = (slotPlan[index] + hashString(`${prompt}-${index}`)) % 4;
    const arrangedQuestion = placeCorrectAnswer(options, answerText, desiredSlot);

    return {
      id: `ai-${index + 1}`,
      type: normalizedType,
      question: prompt,
      ...(scenario ? { scenario } : {}),
      options: arrangedQuestion.options,
      answer: arrangedQuestion.answer,
    };
  });
};

const getAssessmentCatalog = () => (
  Object.entries(assessmentsMap || {}).map(([id, assessment]) => ({
    id,
    title: assessment?.title || id,
    category: assessment?.category || '',
    description: assessment?.description || '',
  }))
);

const buildRecommendedTests = (skill = '', moduleTitle = '', moduleTopics = []) => {
  const tokens = `${skill} ${moduleTitle} ${(moduleTopics || []).join(' ')}`
    .toLowerCase()
    .split(/[^a-z0-9+#.]+/)
    .filter((token) => token && token.length > 2);

  const scored = getAssessmentCatalog()
    .map((assessment) => {
      const haystack = `${assessment.title} ${assessment.category} ${assessment.description}`.toLowerCase();
      const score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
      return { ...assessment, score };
    })
    .filter((assessment) => assessment.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3)
    .map((assessment) => assessment.title);

  return scored.length > 0 ? scored : [`${skill} Practice Assessment`, `${skill} Applied Skills Test`];
};

const buildFallbackModuleBlueprints = (skill = '', weakAreas = [], score = 0) => {
  const focusAreas = weakAreas.length > 0 ? weakAreas : [`${skill} foundations`, `${skill} problem solving`, `${skill} best practices`];
  const intensity = score < 50 ? 'deep rebuild' : score < 75 ? 'targeted improvement' : 'advanced sharpening';

  return [
    {
      title: `${skill} Fundamentals Reset`,
      description: `Rebuild the core concepts required for stronger ${skill} performance with a ${intensity} focus on accuracy and decision-making.`,
      estimatedTime: '4-6 hours',
      topics: focusAreas.slice(0, 3).map((area) => `Master the basics of ${area}`),
    },
    {
      title: `${skill} Concepts In Context`,
      description: `Connect theory to real workplace scenarios so you can recognize when and why to apply the right ${skill} approach.`,
      estimatedTime: '3-5 hours',
      topics: [
        `Map key ${skill} concepts to real use cases`,
        `Study common mistakes and how to avoid them`,
        `Compare correct vs risky approaches in scenarios`,
      ],
    },
    {
      title: `${skill} Execution Practice`,
      description: `Practice applying ${skill} under test conditions with a focus on speed, clarity, and confidence.`,
      estimatedTime: '4-5 hours',
      topics: [
        `Solve timed ${skill} questions`,
        `Review incorrect answers and reasoning gaps`,
        `Practice structured step-by-step problem solving`,
      ],
    },
    {
      title: `${skill} Applied Projects And Casework`,
      description: `Strengthen practical judgment by working through hands-on exercises, mini-projects, or case-style problems related to ${skill}.`,
      estimatedTime: '5-7 hours',
      topics: [
        `Work through role-relevant ${skill} exercises`,
        `Document the reasoning behind each decision`,
        `Translate knowledge into portfolio-ready outcomes`,
      ],
    },
    {
      title: `${skill} Final Review And Re-Assessment`,
      description: `Consolidate your learning, revisit the weak areas from this attempt, and prepare for a stronger retake.`,
      estimatedTime: '2-4 hours',
      topics: [
        `Create a revision checklist for weak topics`,
        `Retake targeted assessments`,
        `Track improvement against your previous score`,
      ],
    },
  ];
};

const normalizeLearningPath = (skill = '', rawPath = {}, score = 0, weakAreas = []) => {
  const fallbackModules = buildFallbackModuleBlueprints(skill, weakAreas, score);
  const rawModules = Array.isArray(rawPath?.modules) ? rawPath.modules : [];
  const targetCount = clamp(rawModules.length || 5, 4, 5);

  const normalizedModules = Array.from({ length: targetCount }, (_, index) => {
    const source = rawModules[index] || fallbackModules[index] || fallbackModules[fallbackModules.length - 1];
    const topics = Array.isArray(source?.topics)
      ? source.topics
      : Array.isArray(source?.learn)
        ? source.learn
        : Array.isArray(source?.skillsToLearn)
          ? source.skillsToLearn
          : String(source?.description || fallbackModules[index]?.description || '')
              .split(/[.;]/)
              .map((item) => item.trim())
              .filter(Boolean)
              .slice(0, 4);

    const cleanedTopics = topics.map((item) => String(item).trim()).filter(Boolean).slice(0, 5);
    const recommendedTests = Array.isArray(source?.recommendedTests)
      ? source.recommendedTests
      : Array.isArray(source?.tests)
        ? source.tests
        : buildRecommendedTests(skill, source?.title || fallbackModules[index]?.title || skill, cleanedTopics);

    return {
      title: source?.title || fallbackModules[index]?.title || `Module ${index + 1}`,
      description: source?.description || fallbackModules[index]?.description || `Progress through the next phase of ${skill}.`,
      estimatedTime: source?.estimatedTime || fallbackModules[index]?.estimatedTime || '3-5 hours',
      topics: cleanedTopics.length > 0 ? cleanedTopics : fallbackModules[index]?.topics || [],
      recommendedTests: recommendedTests.map((item) => String(item).trim()).filter(Boolean).slice(0, 3),
    };
  });

  return {
    role: rawPath?.role || `${skill} Learning Path`,
    description: rawPath?.description || `A structured 4-5 module roadmap to improve your ${skill} capability based on recent performance.`,
    modules: normalizedModules,
  };
};

const MCQ_STEMS = [
  {
    title: 'Foundational concept',
    prompt: (topic) => `Which statement best reflects a strong foundational understanding of ${topic}?`,
    correct: (topic, difficulty) => `${topic} should be applied with clear objectives, context awareness, and a level of depth appropriate for ${difficulty.toLowerCase()} assessments.`,
  },
  {
    title: 'Best practice',
    prompt: (topic) => `What is the strongest best-practice approach when working on ${topic}?`,
    correct: () => 'Define the goal clearly, validate assumptions, compare options, and choose the approach with the strongest evidence.',
  },
  {
    title: 'Decision quality',
    prompt: (topic) => `In a professional ${topic} scenario, what should guide the final decision?`,
    correct: () => 'Business impact, technical feasibility, measurable success criteria, operational risk, and maintainability.',
  },
  {
    title: 'Quality control',
    prompt: (topic) => `Which action most improves quality when evaluating ${topic}?`,
    correct: () => 'Review edge cases, verify the data or assumptions, and confirm the outcome against success criteria.',
  },
  {
    title: 'Stakeholder alignment',
    prompt: (topic) => `Which response best demonstrates stakeholder-ready thinking for ${topic}?`,
    correct: () => 'Summarize the trade-offs, explain the recommendation clearly, and connect it to the desired outcome.',
  },
];

const CASE_STEMS = [
  {
    title: 'Operational scenario',
    scenario: (topic, difficulty) => `A cross-functional team is preparing a ${difficulty.toLowerCase()} certification workflow for ${topic}.
Leadership wants the launch completed this week, but the current design still has validation gaps.
Operations is concerned that rushing forward will create rework and reduce trust in the result.
Stakeholders need a decision that balances quality, speed, and measurable learner outcomes.
You are asked to recommend the strongest next step.`,
    prompt: (topic) => `What is the best decision in this ${topic} scenario?`,
    correct: () => 'Clarify the objective, review the relevant evidence, compare realistic options, and choose the path with the strongest measurable upside.',
  },
  {
    title: 'Delivery trade-off',
    scenario: (topic) => `A project involving ${topic} is moving quickly and senior stakeholders are pushing for visible progress.
The current proposal looks polished, but it has weak validation and unclear execution detail.
One team wants to ship immediately, while another wants to pause everything for a full redesign.
The business needs a response that protects delivery quality without creating avoidable delay.
You need to choose the strongest course of action.`,
    prompt: () => 'Which response shows the strongest judgment?',
    correct: () => 'Pause just long enough to validate assumptions, then move forward with a documented, measurable plan.',
  },
  {
    title: 'Risk handling',
    scenario: (topic) => `A stakeholder asks for a fast decision on ${topic}, but several risks are still unresolved.
The data is incomplete, the team is split on priorities, and the timeline is compressed.
Ignoring the issue could create downstream quality problems, but over-analysis would delay the business.
You need an approach that is practical, defensible, and safe to execute under pressure.
What should you do next?`,
    prompt: () => 'What is the strongest response?',
    correct: () => 'Surface the key risks, propose a controlled path forward, and define what must be monitored after launch.',
  },
  {
    title: 'Evaluation scenario',
    scenario: (topic) => `An expert review panel is evaluating a recommendation related to ${topic}.
They are not only checking whether the answer sounds smart, but whether it is practical to execute.
The panel will look for trade-off awareness, defensible reasoning, and measurable success criteria.
Several options seem plausible on the surface, but only one shows truly professional judgment.
You must identify the highest-scoring choice.`,
    prompt: () => 'Which option would score highest?',
    correct: () => 'The option that balances evidence, feasibility, trade-offs, and clear success metrics.',
  },
  {
    title: 'Execution scenario',
    scenario: (topic) => `A real-world ${topic} decision must be made with limited time, mixed signals, and competing priorities.
Different stakeholders are optimizing for different outcomes, and no option is perfect.
The team needs a next step that can be justified today and adapted if new evidence appears tomorrow.
A weak decision will either create unnecessary risk or stall momentum.
Choose the action that best fits this situation.`,
    prompt: () => 'What is the best next step?',
    correct: () => 'Take the action that is best supported by evidence, can be measured, and can be adjusted safely if needed.',
  },
];

const DISTRACTORS = [
  'Choose the fastest option without validating assumptions or outcomes.',
  'Rely mostly on intuition and avoid documenting trade-offs.',
  'Delay the work indefinitely until every possible uncertainty disappears.',
  'Optimize for appearances instead of measurable quality and long-term impact.',
  'Treat one isolated data point as enough evidence for a final decision.',
  'Ignore stakeholder constraints and assume execution details will resolve themselves.',
];

const buildQuestionOptions = (correctAnswer, questionText, index) => {
  const customDistractors = [
    `A ${questionText.toLowerCase()} response that sounds polished but skips validation`,
    `An overconfident answer to ${questionText.toLowerCase()} that ignores trade-offs`,
    `A reactive choice for ${questionText.toLowerCase()} that solves the symptom, not the cause`,
  ];

  const distractorPool = dedupeOptions([...customDistractors, ...DISTRACTORS]);
  const options = [correctAnswer, ...distractorPool].slice(0, 4);
  return placeCorrectAnswer(options, correctAnswer, buildAnswerSlotPlan(index + 1)[index] ?? (index % 4)).options;
};

const buildLocalFallbackAssessment = (config) => {
  const questions = [];

  for (let index = 0; index < config.mcqCount; index += 1) {
    const stem = MCQ_STEMS[index % MCQ_STEMS.length];
    const correct = stem.correct(config.topic, config.difficulty);
    const questionText = stem.prompt(config.topic, config.difficulty);
    questions.push({
      id: `fallback-mcq-${index + 1}`,
      type: 'mcq',
      question: questionText,
      options: buildQuestionOptions(correct, questionText, index),
      answer: correct,
    });
  }

  for (let index = 0; index < config.caseStudyCount; index += 1) {
    const stem = CASE_STEMS[index % CASE_STEMS.length];
    const correct = stem.correct(config.topic, config.difficulty);
    const questionText = stem.prompt(config.topic, config.difficulty);
    questions.push({
      id: `fallback-case-${index + 1}`,
      type: 'case-study',
      scenario: stem.scenario(config.topic, config.difficulty),
      question: questionText,
      options: buildQuestionOptions(correct, questionText, config.mcqCount + index),
      answer: correct,
    });
  }

  const normalizedQuestions = normalizeGeneratedQuestions(questions);

  return {
    title: config.title,
    skill: config.topic,
    questions: normalizedQuestions,
    questionCount: normalizedQuestions.length,
    durationSeconds: normalizedQuestions.length * config.timePerQuestion * 60,
    timePerQuestion: config.timePerQuestion,
    difficulty: config.difficulty,
    distribution: {
      mcqCount: config.mcqCount,
      caseStudyCount: config.caseStudyCount,
    },
  };
};

const normalizeAssessmentConfig = (input) => {
  if (typeof input === 'string') {
    return {
      topic: input,
      title: `${input} Professional Certification`,
      questionCount: 15,
      difficulty: 'Intermediate',
      timePerQuestion: 2,
      mcqCount: 8,
      caseStudyCount: 7,
      mcqRatioLabel: '53/47',
    };
  }

  const topic = String(input?.topic || input?.title || 'Custom Assessment').trim();
  const questionCount = Math.max(5, Number(input?.questionCount) || 15);
  const timePerQuestion = Math.max(1, Number(input?.timePerQuestion) || 2);
  const difficulty = String(input?.difficulty || 'Intermediate').trim();
  const mcqRatio = Math.min(100, Math.max(0, Number(input?.mcqRatio) || 80));
  const mcqCount = Math.max(0, Math.round((questionCount * mcqRatio) / 100));
  const caseStudyCount = Math.max(0, questionCount - mcqCount);

  return {
    topic,
    title: String(input?.title || topic).trim() || topic,
    questionCount,
    difficulty,
    timePerQuestion,
    mcqCount,
    caseStudyCount,
    mcqRatioLabel: `${mcqRatio}/${100 - mcqRatio}`,
  };
};

const looksLikeGibberish = (topic = '') => {
  const trimmed = normalizeTopicText(topic);
  if (!trimmed || trimmed.length < 2) return true;
  if (/^[a-z]{5,}$/.test(trimmed) && !/[aeiou]/.test(trimmed)) return true;
  if (/^[a-z]{6,}$/.test(trimmed) && /^(abc|qwe|asd|zxc|test|demo)/.test(trimmed)) return true;
  if (/^[a-z]{6,}$/.test(trimmed) && trimmed.split('').every((char, index, array) => index === 0 || char.charCodeAt(0) === array[index - 1].charCodeAt(0) + 1)) return true;
  return false;
};

const getLocalSkillMatches = (topic = '') => {
  const normalizedTopic = normalizeTopicText(topic);
  if (!normalizedTopic) return [];

  return SKILL_LIBRARY_INDEX
    .map((entry) => {
      const exact = entry.normalized === normalizedTopic;
      const starts = entry.normalized.startsWith(normalizedTopic);
      const includes = entry.normalized.includes(normalizedTopic);
      const reverseIncludes = normalizedTopic.includes(entry.normalized);
      const score = exact ? 100 : starts ? 75 : includes ? 55 : reverseIncludes ? 40 : 0;

      return {
        skill: entry.original,
        normalized: entry.normalized,
        score,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || left.skill.localeCompare(right.skill))
    .slice(0, 8);
};

export const validateAssessmentTopic = async (topic = '') => {
  const normalizedTopic = normalizeTopicText(topic);
  const localMatches = getLocalSkillMatches(topic);

  if (localMatches.length > 0) {
    return {
      isValid: true,
      topic: localMatches[0].skill,
      source: 'library',
      message: '',
      suggestions: localMatches.map((entry) => entry.skill).slice(0, 5),
    };
  }

  if (looksLikeGibberish(normalizedTopic)) {
    return {
      isValid: false,
      topic: '',
      source: 'heuristic',
      message: 'The skill does not exist. Please enter a real skill, technology, job domain, or subject.',
      suggestions: [],
    };
  }

  try {
    const groq = await getGroqClient();
    const systemPrompt = `You validate whether a user-entered assessment topic refers to a real-world skill, technology, profession, academic subject, certification domain, tool, language, or business function.

Rules:
1. Reject gibberish, random strings, placeholder text, and made-up nonsense.
2. Accept real skills even if niche, emerging, abbreviated, or multidisciplinary.
3. Do not invent legitimacy when uncertain. If it does not appear to be a real skill/domain, mark it invalid.
4. Return only JSON.

JSON schema:
{
  "isValid": true,
  "canonicalTopic": "Best normalized real-world topic",
  "reason": "Short reason",
  "suggestions": ["Alt 1", "Alt 2", "Alt 3"]
}`;

    const userPrompt = `Check whether this assessment topic is a real-world skill or knowledge domain: "${topic}".

If invalid, explain briefly and suggest up to 3 nearby real alternatives only if they genuinely make sense.`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.1,
      response_format: { type: 'json_object' },
    });

    const rawContent = completion.choices[0]?.message?.content || '{}';
    const parsed = JSON.parse(cleanJSON(rawContent));
    const aiSuggestions = Array.isArray(parsed?.suggestions)
      ? parsed.suggestions.map((item) => String(item).trim()).filter(Boolean).slice(0, 5)
      : [];

    if (!parsed?.isValid) {
      return {
        isValid: false,
        topic: '',
        source: 'ai',
        message: parsed?.reason || 'The skill does not exist. Please enter a real skill, technology, job domain, or subject.',
        suggestions: aiSuggestions,
      };
    }

    return {
      isValid: true,
      topic: String(parsed?.canonicalTopic || topic).trim() || topic,
      source: 'ai',
      message: '',
      suggestions: aiSuggestions,
    };
  } catch (error) {
    console.error('Assessment topic validation failed:', error);
    return {
      isValid: false,
      topic: '',
      source: 'fallback',
      message: 'We could not verify this skill right now. Please enter a more specific real-world skill or choose one from suggestions.',
      suggestions: [],
    };
  }
};

export const generateSkillOverview = async (topic = '') => {
  const validation = await validateAssessmentTopic(topic);
  if (!validation.isValid) {
    throw new Error(validation.message || 'The skill does not exist.');
  }

  const canonicalTopic = validation.topic || String(topic || '').trim();
  const fallbackOverview = {
    skill: canonicalTopic,
    summary: `${canonicalTopic} is a real-world skill domain used in professional learning, execution, and decision-making contexts.`,
    whatYouLearn: [
      `Core concepts and foundations of ${canonicalTopic}`,
      `Practical workflows and real-world use cases in ${canonicalTopic}`,
      `Common mistakes, best practices, and performance expectations`,
    ],
    whereItIsUsed: [
      `${canonicalTopic} projects and role-specific assignments`,
      `Professional assessments, interviews, and applied workplace tasks`,
      `Continuous learning, certification, and execution planning`,
    ],
    whyItMatters: `${canonicalTopic} matters because it helps professionals make better decisions, execute higher-quality work, and demonstrate measurable capability.`,
  };

  try {
    const groq = await getGroqClient();
    const systemPrompt = `You explain professional skills in a clear, practical, user-friendly way.
Return only JSON.

JSON schema:
{
  "skill": "Canonical skill name",
  "summary": "2-3 sentence plain-English overview",
  "whatYouLearn": ["Point 1", "Point 2", "Point 3"],
  "whereItIsUsed": ["Use case 1", "Use case 2", "Use case 3"],
  "whyItMatters": "1-2 sentence explanation"
}`;

    const userPrompt = `Explain this skill for a learner who may want to create an assessment: "${canonicalTopic}".

Requirements:
1. Keep it practical and simple.
2. Mention what the skill is about.
3. Mention what the learner would study or learn.
4. Mention where the skill is commonly used.
5. Mention why the skill matters in careers or execution.
6. Do not use markdown.`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.25,
      response_format: { type: 'json_object' },
    });

    const rawContent = completion.choices[0]?.message?.content || '{}';
    const parsed = JSON.parse(cleanJSON(rawContent));
    const usageTokens = completion.usage?.total_tokens
      || estimateTokensFromText(systemPrompt, userPrompt, rawContent);

    recordUsage({
      action: 'Skill Overview',
      area: canonicalTopic,
      careerPoints: usageTokens,
      metadata: {
        model: completion.model || 'llama-3.3-70b-versatile',
      },
    });

    return {
      skill: String(parsed?.skill || canonicalTopic).trim() || canonicalTopic,
      summary: String(parsed?.summary || fallbackOverview.summary).trim(),
      whatYouLearn: Array.isArray(parsed?.whatYouLearn) && parsed.whatYouLearn.length > 0
        ? parsed.whatYouLearn.map((item) => String(item).trim()).filter(Boolean).slice(0, 5)
        : fallbackOverview.whatYouLearn,
      whereItIsUsed: Array.isArray(parsed?.whereItIsUsed) && parsed.whereItIsUsed.length > 0
        ? parsed.whereItIsUsed.map((item) => String(item).trim()).filter(Boolean).slice(0, 5)
        : fallbackOverview.whereItIsUsed,
      whyItMatters: String(parsed?.whyItMatters || fallbackOverview.whyItMatters).trim(),
    };
  } catch (error) {
    console.error('Skill overview generation failed:', error);
    return fallbackOverview;
  }
};

/**
 * GENERATE ASSESSMENT
 * Creates technical questions using only option-based MCQ/case-study items
 */
export const generateAssessment = async (input) => {
  const validation = await validateAssessmentTopic(input?.topic || input?.title || input);
  if (!validation.isValid) {
    throw new Error(validation.message || 'The skill does not exist.');
  }

  const config = normalizeAssessmentConfig({
    ...(typeof input === 'object' && input ? input : {}),
    topic: validation.topic || input?.topic || input?.title || input,
    title: typeof input === 'object' && input
      ? (input.title || validation.topic || input.topic)
      : (validation.topic || String(input || '').trim()),
  });
  const systemContent = `You are a Senior Technical Architect & Certification Lead.
          
          TASK: Create a rigorous skills assessment for a Senior-level candidate.

          IMPORTANT: EVERY question must be answerable by choosing ONE option from four options.
          DO NOT create coding questions.
          DO NOT ask the candidate to write SQL, code, essays, or free-form responses.
          DO NOT include "code", "starter code", or "reference snippet" fields.
          
          OUTPUT RULES:
          1. Return ONLY valid JSON.
          2. The root object must have a "questions" array.
          3. NO Markdown, NO Explanations outside JSON.
          4. Every question must have exactly 4 answer options.
          5. Allowed types are only "mcq" and "case-study".
          6. Never generate coding, query-writing, free-text, essay, terminal, debugging-by-writing, or snippet-completion questions.
          7. Case-study questions must still be multiple-choice with exactly 4 options.
          8. Each question must test a DIFFERENT concept, scenario, mistake pattern, edge case, or decision point.
          9. Avoid repeating the same wording, same structure, or same distractors across questions.
          10. Distribute the correct answer across options A, B, C, and D instead of always placing it first.
          11. Wrong options must be plausible and topic-specific, not generic filler.
          12. Case-study scenarios must be rich and realistic, written in 4 to 5 lines of context before the question.
          13. Never let most answers cluster into a single option letter.
          
          JSON STRUCTURE:
          {
            "questions": [
              {
                "type": "mcq",
                "question": "Complex analytical question...",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "answer": "Exact text of correct option"
              },
              {
                "type": "case-study",
                "scenario": "A real-world business context (e.g., High-scale banking system)...",
                "question": "What is the best decision or interpretation?",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "answer": "Exact text of correct option"
              }
            ]
          }`;
  const userContent = `Generate a ${config.questionCount}-question assessment for: "${config.topic}".
          
          DISTRIBUTION:
          - ${config.mcqCount} MCQs focused on theory, judgment, edge cases, best practices, and decision quality.
          - ${config.caseStudyCount} case-study questions focused on realistic business scenarios, implementation tradeoffs, and decision-making.

          ASSESSMENT SETTINGS:
          - Candidate-facing title: "${config.title}"
          - Difficulty level: "${config.difficulty}"
          - Time per question target: ${config.timePerQuestion} minute(s)
          - MCQ vs case-study ratio: ${config.mcqRatioLabel}

          VARIETY REQUIREMENTS:
          - Make every question materially different from the others.
          - Cover different sub-topics, decisions, examples, or failure modes within "${config.topic}".
          - Ensure the correct answer is spread across positions A, B, C, and D with no obvious pattern the candidate can exploit.
          - Write distinct, high-quality distractors for each question.
          - For every case-study item, write a proper 4-5 line scenario with realistic business or technical context.

          FINAL REQUIREMENT:
          Every question must be multiple choice with exactly 4 options and a single correct answer.
          Keep the overall difficulty consistent with "${config.difficulty}".
          Make the assessment feel professionally authored and certification-grade.`;

  try {
    const groq = await getGroqClient();
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemContent
        },
        {
          role: "user",
          content: userContent
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      response_format: { type: "json_object" },
    });

    const rawContent = completion.choices[0]?.message?.content || "{}";
    const result = JSON.parse(cleanJSON(rawContent));
    const usageTokens = completion.usage?.total_tokens
      || estimateTokensFromText(systemContent, userContent, rawContent);
    
    // Safety check
    if (!result.questions || !Array.isArray(result.questions)) {
        throw new Error("Invalid JSON structure returned from AI");
    }

    const normalizedQuestions = normalizeGeneratedQuestions(result.questions);

    recordUsage({
      action: 'Assessment Generation',
      area: config.topic,
      careerPoints: usageTokens,
      metadata: {
        model: completion.model || 'llama-3.3-70b-versatile',
        questionCount: normalizedQuestions.length,
        difficulty: config.difficulty,
        mcqCount: config.mcqCount,
        caseStudyCount: config.caseStudyCount,
      },
    });

    return {
      title: config.title,
      skill: config.topic,
      questions: normalizedQuestions,
      questionCount: normalizedQuestions.length,
      durationSeconds: normalizedQuestions.length * config.timePerQuestion * 60,
      timePerQuestion: config.timePerQuestion,
      difficulty: config.difficulty,
      distribution: {
        mcqCount: config.mcqCount,
        caseStudyCount: config.caseStudyCount,
      },
    };

  } catch (error) {
    console.error("Groq Assessment Gen Error:", error);
    recordUsage({
      action: 'Assessment Generation',
      area: config.topic,
      careerPoints: 0,
      status: 'failed',
      metadata: {
        error: error?.message || 'Unknown error',
        fallback: true,
      },
    });
    return buildLocalFallbackAssessment(config);
  }
};

/**
 * GENERATE LEARNING PATH
 */
export const generateLearningPath = async (skill, score, weakAreas = []) => {
  const systemPrompt = `
    You are an Expert Technical Career Coach.
    Output strictly raw JSON without Markdown.
    
    JSON SCHEMA:
    {
      "role": "Specific Job Title",
      "description": "Overview of value.",
      "modules": [
        { 
          "title": "Module Name", 
          "description": "Detailed explanation of what the learner should master in this module.",
          "estimatedTime": "Time duration",
          "topics": ["Specific concept 1", "Specific concept 2", "Specific concept 3"],
          "recommendedTests": ["Relevant practice test 1", "Relevant practice test 2"]
        }
      ]
    }
  `;

  const weakContext = weakAreas.length > 0 
    ? `The user struggled specifically with: ${weakAreas.join(", ")}.` 
    : "The user needs a general advanced roadmap.";

  const userPrompt = `
    Create a remedial learning path for: "${skill}".
    User Score: ${score}%.
    ${weakContext}
    
    Requirements:
    1. Create 4 or 5 distinct modules to bridge the knowledge gap.
    2. Every module must be detailed and practical, not generic.
    3. For each module, include 3 to 5 things the learner should study in "topics".
    4. For each module, include 2 or 3 recommended tests or practice checkpoints in "recommendedTests".
    5. Focus on modern industry trends and role-relevant application.
  `;

  try {
    const groq = await getGroqClient();
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" },
      temperature: 0.5,
    });

    const rawContent = completion.choices[0]?.message?.content;
    if (!rawContent) throw new Error("Empty response from Groq");
    const parsed = JSON.parse(cleanJSON(rawContent));
    const normalizedPath = normalizeLearningPath(skill, parsed, score, weakAreas);
    const usageTokens = completion.usage?.total_tokens
      || estimateTokensFromText(systemPrompt, userPrompt, rawContent);

    recordUsage({
      action: 'Learning Path Generation',
      area: skill,
      careerPoints: usageTokens,
      metadata: {
        model: completion.model || 'llama-3.3-70b-versatile',
        score,
        weakAreas,
        moduleCount: normalizedPath.modules?.length || 0,
      },
    });

    return normalizedPath;

  } catch (error) {
    console.error("Groq Path Error:", error);
    recordUsage({
      action: 'Learning Path Generation',
      area: skill,
      careerPoints: 0,
      status: 'failed',
      metadata: {
        error: error?.message || 'Unknown error',
        score,
        weakAreas,
      },
    });
    return normalizeLearningPath(skill, {
      role: `${skill} Specialist`,
      description: "Focus on fundamentals to rebuild your core knowledge with a structured practical roadmap.",
      modules: [],
    }, score, weakAreas);
  }
};

export const estimateLearningPathCareerPoints = (skill, score = 0, weakAreas = []) => {
  const systemPrompt = `
    You are an Expert Technical Career Coach.
    Output strictly raw JSON without Markdown.
    
    JSON SCHEMA:
    {
      "role": "Specific Job Title",
      "description": "Overview of value.",
      "modules": [
        { 
          "title": "Module Name", 
          "description": "Detailed explanation of what the learner should master in this module.",
          "estimatedTime": "Time duration",
          "topics": ["Specific concept 1", "Specific concept 2", "Specific concept 3"],
          "recommendedTests": ["Relevant practice test 1", "Relevant practice test 2"]
        }
      ]
    }
  `;

  const weakContext = weakAreas.length > 0
    ? `The user struggled specifically with: ${weakAreas.join(", ")}.`
    : "The user needs a general advanced roadmap.";

  const userPrompt = `
    Create a remedial learning path for: "${skill}".
    User Score: ${score}%.
    ${weakContext}
    
    Requirements:
    1. Create 4 or 5 distinct modules to bridge the knowledge gap.
    2. Every module must be detailed and practical, not generic.
    3. For each module, include 3 to 5 things the learner should study in "topics".
    4. For each module, include 2 or 3 recommended tests or practice checkpoints in "recommendedTests".
    5. Focus on modern industry trends and role-relevant application.
  `;

  const inputTokens = estimateTokensFromText(systemPrompt, userPrompt);

  // Learning-path generations consume more than prompt tokens because the model
  // returns a fairly detailed 4-5 module JSON structure with topics and tests.
  const expectedOutputMinTokens = 350;
  const expectedOutputMaxTokens = 950;

  return {
    min: inputTokens + expectedOutputMinTokens,
    max: inputTokens + expectedOutputMaxTokens,
    inputTokens,
  };
};
