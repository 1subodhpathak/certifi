import { useCertifiStore } from '../store/useCertifiStore';

const STORAGE_KEY = 'careerSenseAssessmentAttempts';
const MAX_ATTEMPTS = 24;

function compactQuestionResults(questionResults = []) {
  return (questionResults || []).map((question, index) => ({
    id: question.id ?? `question_${index + 1}`,
    type: question.type || 'mcq',
    title: question.title || question.topic || `Question ${index + 1}`,
    prompt: question.prompt || question.question || '',
    scenario: question.scenario || '',
    options: Array.isArray(question.options) ? question.options.slice(0, 6) : [],
    candidateAnswer: question.candidateAnswer ?? '',
    correctAnswer: question.correctAnswer ?? question.answer ?? '',
    explanation: question.explanation || '',
    isCorrect: Boolean(question.isCorrect),
  }));
}

function safeParse(value) {
  try {
    const parsed = JSON.parse(value || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse assessment attempts:', error);
    return [];
  }
}

export function getStoredAssessmentAttempts() {
  if (typeof window !== 'undefined' && window.clerkUserId) {
    return useCertifiStore.getState().assessmentAttempts;
  }
  return safeParse(localStorage.getItem(STORAGE_KEY));
}

function compactAttempt(attempt = {}) {
  return {
    id: attempt.id,
    skill: attempt.skill,
    title: attempt.title,
    score: attempt.score,
    earnedPoints: attempt.earnedPoints,
    totalPoints: attempt.totalPoints,
    createdAt: attempt.createdAt,
    attemptNumber: attempt.attemptNumber,
    reportCard: attempt.reportCard
      ? {
          confidenceScore: attempt.reportCard.confidenceScore,
          strengths: attempt.reportCard.strengths || [],
          weakAreas: attempt.reportCard.weakAreas || [],
          topics: (attempt.reportCard.topics || []).slice(0, 8),
        }
      : null,
    proctoringSummary: attempt.proctoringSummary
      ? {
          trustScore: attempt.proctoringSummary.trustScore,
          riskLevel: attempt.proctoringSummary.riskLevel,
          faceVisibility: attempt.proctoringSummary.faceVisibility,
          fullscreenIntegrity: attempt.proctoringSummary.fullscreenIntegrity,
          tabSwitches: attempt.proctoringSummary.tabSwitches,
          suspiciousActivitySummary: attempt.proctoringSummary.suspiciousActivitySummary,
        }
      : null,
    questionBank: attempt.questionBank || null,
    questionResults: compactQuestionResults(attempt.questionResults),
  };
}

export function saveAssessmentAttempt(attempt) {
  const compact = compactAttempt(attempt);

  if (typeof window !== 'undefined' && window.clerkUserId) {
    useCertifiStore.getState().addAssessmentAttempt(compact);
    return compact;
  }

  const compactExisting = getStoredAssessmentAttempts().map(compactAttempt);
  let next = [compact, ...compactExisting.filter((item) => item.id !== compact.id)].slice(0, MAX_ATTEMPTS);

  while (next.length > 0) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return compact;
    } catch (error) {
      next = next.slice(0, -1);
      if (next.length === 0) {
        console.error('Failed to save assessment attempt:', error);
        return compact;
      }
    }
  }

  return compact;
}

export function getAssessmentAttemptsForSkill(skill) {
  const normalized = String(skill || '').trim().toLowerCase();
  return getStoredAssessmentAttempts()
    .filter((attempt) => String(attempt.skill || attempt.title || '').trim().toLowerCase() === normalized)
    .sort((left, right) => new Date(right.createdAt || 0).getTime() - new Date(left.createdAt || 0).getTime());
}

export function getAssessmentAttemptById(attemptId) {
  return getStoredAssessmentAttempts().find((attempt) => attempt.id === attemptId) || null;
}
