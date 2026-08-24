import { buildCertificateLink, buildVerifyLink } from './shareLinks';
import { useCertifiStore } from '../store/useCertifiStore';

const STORAGE_KEY = 'myCertificates';
const MAX_CERTIFICATES = 36;
const PUBLIC_PROFILES_KEY = 'careerSensePublicProfiles';
const PRACTICE_ATTEMPTS_KEY = 'careerSensePracticeAttempts';
const ASSESSMENT_ATTEMPTS_KEY = 'careerSenseAssessmentAttempts';

function trimArrayStorage(key, limit) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || '[]');
    if (Array.isArray(parsed) && parsed.length > limit) {
      localStorage.setItem(key, JSON.stringify(parsed.slice(0, limit)));
    }
  } catch (error) {
    console.error(`Failed to trim storage for ${key}:`, error);
  }
}

function freeStorageForCertificates() {
  try {
    localStorage.removeItem(PUBLIC_PROFILES_KEY);
  } catch (error) {
    console.error('Failed to clear public profiles storage:', error);
  }

  trimArrayStorage(PRACTICE_ATTEMPTS_KEY, 8);
  trimArrayStorage(ASSESSMENT_ATTEMPTS_KEY, 8);
}

export function generateCertificateId() {
  return `CS-${Math.floor(100000 + Math.random() * 900000)}`;
}

export function cleanCertificateId(value) {
  return String(value || '')
    .replace(/^(id:|id|#)\s*/i, '')
    .trim()
    .toUpperCase();
}

function compactQuestionBank(questionBank) {
  if (!questionBank) return null;
  return {
    version: questionBank.version || null,
    assessedOn: questionBank.assessedOn || null,
    questionCount: questionBank.questionCount || 0,
    difficultyBreakdown: questionBank.difficultyBreakdown || null,
  };
}

function compactReportCard(reportCard) {
  if (!reportCard) return null;
  return {
    accuracy: reportCard.accuracy ?? null,
    confidenceScore: reportCard.confidenceScore ?? null,
    strengths: (reportCard.strengths || []).slice(0, 3).map((item) => ({
      topic: item.topic,
      accuracy: item.accuracy,
      correct: item.correct,
      total: item.total,
      difficulty: item.difficulty,
    })),
    weakAreas: (reportCard.weakAreas || []).slice(0, 3).map((item) => ({
      topic: item.topic,
      accuracy: item.accuracy,
      correct: item.correct,
      total: item.total,
      difficulty: item.difficulty,
    })),
    topics: (reportCard.topics || []).slice(0, 8).map((item) => ({
      topic: item.topic,
      accuracy: item.accuracy,
      correct: item.correct,
      total: item.total,
      difficulty: item.difficulty,
    })),
  };
}

function compactProctoringSummary(proctoringSummary) {
  if (!proctoringSummary) return null;
  return {
    trustScore: proctoringSummary.trustScore ?? null,
    riskLevel: proctoringSummary.riskLevel || null,
    faceVisibility: proctoringSummary.faceVisibility ?? null,
    fullscreenIntegrity: proctoringSummary.fullscreenIntegrity ?? null,
    tabSwitches: proctoringSummary.tabSwitches ?? 0,
    fullscreenExits: proctoringSummary.fullscreenExits ?? 0,
    cameraInterruptions: proctoringSummary.cameraInterruptions ?? 0,
    suspiciousActivitySummary: proctoringSummary.suspiciousActivitySummary || '',
  };
}

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

export function normalizeCertificateRecord(certificate = {}) {
  const id = cleanCertificateId(certificate.id || certificate.certificateId || generateCertificateId());
  const rawScore = certificate.score ?? certificate.percentage ?? certificate.resultScore ?? '';
  const score = typeof rawScore === 'string'
    ? rawScore.includes('%') ? rawScore : `${rawScore}%`
    : `${rawScore}%`;
  const issuedAt = certificate.issuedAt || new Date().toISOString();
  const date = certificate.date || new Date(issuedAt).toLocaleDateString();

  return {
    id,
    certificateId: id,
    skill: certificate.skill || certificate.courseName || certificate.course || certificate.title || certificate.testTitle || 'Professional Certification',
    title: certificate.title || certificate.skill || certificate.courseName || certificate.course || certificate.testTitle || 'Professional Certification',
    date,
    issuedAt,
    score,
    studentName: certificate.studentName || certificate.userName || certificate.candidateName || 'Student',
    currentRole: certificate.currentRole || certificate.assessedTitle || 'Certified Candidate',
    currentCompany: certificate.currentCompany || certificate.company || certificate.organization || 'CareerSense Platform',
    email: certificate.email || certificate.candidateEmail || '',
    status: certificate.status || 'Active',
    attemptId: certificate.attemptId || null,
    questionBank: compactQuestionBank(certificate.questionBank),
    reportCard: compactReportCard(certificate.reportCard),
    proctoringSummary: compactProctoringSummary(certificate.proctoringSummary),
    questionResults: compactQuestionResults(certificate.questionResults),
    publicProfileId: certificate.publicProfileId || null,
    certificateUrl: certificate.certificateUrl || buildCertificateLink(id),
    verifyUrl: certificate.verifyUrl || buildVerifyLink(id),
  };
}

export function getStoredCertificates() {
  const getCertTime = (cert) => {
    if (cert.issuedAt) return new Date(cert.issuedAt).getTime();
    if (cert.date) {
      const parsed = new Date(cert.date).getTime();
      if (!isNaN(parsed)) return parsed;
    }
    return 0;
  };

  let list = [];
  if (typeof window !== 'undefined' && window.clerkUserId) {
    list = useCertifiStore.getState().certificates.map(normalizeCertificateRecord);
  } else {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      list = Array.isArray(stored) ? stored.map(normalizeCertificateRecord) : [];
    } catch (error) {
      console.error('Failed to read certificates:', error);
      list = [];
    }
  }

  return [...list].reverse().sort((a, b) => {
    const tA = getCertTime(a);
    const tB = getCertTime(b);
    if (tA && tB && tA !== tB) return tB - tA;
    return 0;
  });
}

export function saveCertificate(certificate) {
  const normalized = normalizeCertificateRecord(certificate);

  if (typeof window !== 'undefined' && window.clerkUserId) {
    useCertifiStore.getState().addCertificate(normalized);
    return {
      certificate: normalized,
      saved: true,
    };
  }

  let next = [normalized, ...getStoredCertificates().filter((item) => cleanCertificateId(item.id) !== normalized.id)].slice(0, MAX_CERTIFICATES);
  let attemptedCleanup = false;

  while (next.length > 0) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return {
        certificate: normalized,
        saved: true,
      };
    } catch (error) {
      if (!attemptedCleanup) {
        attemptedCleanup = true;
        freeStorageForCertificates();
        continue;
      }
      next = next.slice(0, -1);
      if (next.length === 0) {
        console.error('Failed to save certificate:', error);
        break;
      }
    }
  }
  return {
    certificate: normalized,
    saved: false,
  };
}

export function findCertificateById(id) {
  const target = cleanCertificateId(id);
  if (!target) return null;
  return getStoredCertificates().find((certificate) => cleanCertificateId(certificate.id) === target) || null;
}

export function findCertificateByAttemptId(attemptId) {
  if (!attemptId) return null;
  return getStoredCertificates().find((certificate) => certificate.attemptId === attemptId) || null;
}
