import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, pdf } from '@react-pdf/renderer';
import { buildProctoringSummary, buildSkillReportCard } from './assessmentInsights';

// ---------------------------------------------------------------------------
// STYLESHEET: Premium Colorful ATS & Transcript Theme
// ---------------------------------------------------------------------------
const styles = StyleSheet.create({
  // --- Branding / Logo Styles ---
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  brandContainerSmall: {
    marginBottom: 20,
  },
  logoIcon: {
    width: 48,
    height: 48,
    marginRight: 12,
    objectFit: 'contain',
  },
  logoIconSmall: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  brandTextContainer: {
    justifyContent: 'center',
  },
  brandNameRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  brandTextCareer: {
    fontSize: 28,
    fontWeight: 900,
    color: '#0f172a', // Dark for light backgrounds
  },
  brandTextCareerDark: {
    color: '#ffffff', // White for dark backgrounds
  },
  brandTextSense: {
    fontSize: 28,
    fontWeight: 900,
    color: '#499587', // Muted Teal to match screenshot
  },
  brandTextCareerSmall: {
    fontSize: 16,
  },
  brandTextSenseSmall: {
    fontSize: 16,
  },
  brandSubtitle: {
    fontSize: 8.5,
    fontWeight: 700,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 2.5,
  },
  brandSubtitleSmall: {
    fontSize: 5,
    letterSpacing: 1.5,
    marginTop: 1,
  },

  // --- Cover Page Styles ---
  coverPage: {
    padding: 50,
    backgroundColor: '#0f172a', // Slate 900
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    fontFamily: 'Helvetica',
  },
  coverEyebrow: {
    fontSize: 12,
    color: '#38bdf8', // Sky 400
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 10,
    fontWeight: 700,
  },
  coverTitle: {
    fontSize: 32,
    fontWeight: 700,
    color: '#f8fafc',
    marginBottom: 15,
    lineHeight: 1.2,
  },
  coverSubtitle: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 40,
    maxWidth: '85%',
    lineHeight: 1.6,
  },
  scoreCircleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 10,
    borderColor: '#38bdf8', // Vibrant Sky Blue
    marginBottom: 20,
    backgroundColor: '#1e293b', // Slate 800 Inner
  },
  scoreCircleLow: {
    borderColor: '#f43f5e', // Rose for low scores
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 700,
    color: '#ffffff',
  },
  coverFooter: {
    borderTopWidth: 1,
    borderTopColor: '#334155',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coverFooterText: {
    fontSize: 9,
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  coverFooterValue: {
    fontSize: 11,
    color: '#f8fafc',
    fontWeight: 700,
  },

  // --- Internal Page Styles ---
  page: {
    paddingTop: 40,
    paddingBottom: 50,
    paddingHorizontal: 40,
    fontSize: 9,
    color: '#1e293b',
    fontFamily: 'Helvetica',
    lineHeight: 1.4,
    backgroundColor: '#ffffff',
  },
  headerBlock: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
  },
  docEyebrow: {
    fontSize: 12,
    fontWeight: 700,
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  docTitle: {
    fontSize: 10,
    color: '#334155',
    marginBottom: 2,
  },
  docMeta: {
    fontSize: 9,
    color: '#64748b',
  },
  
  // --- Grid Table (Metrics) ---
  metricsTable: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 20,
    borderRadius: 4,
    overflow: 'hidden',
  },
  metricsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  metricsRowLast: {
    flexDirection: 'row',
  },
  metricsHeaderCell: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f8fafc',
    fontSize: 7,
    fontWeight: 700,
    color: '#475569',
    textTransform: 'uppercase',
    borderRightWidth: 1,
    borderRightColor: '#e2e8f0',
  },
  metricsValueCell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
    fontWeight: 700,
    color: '#0f172a',
    borderRightWidth: 1,
    borderRightColor: '#e2e8f0',
  },
  noBorderRight: {
    borderRightWidth: 0,
  },

  // --- Visual Analysis (Progress Bars) ---
  analysisContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 6,
  },
  barWrapper: {
    marginBottom: 10,
  },
  barLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  barLabel: {
    fontSize: 8,
    fontWeight: 700,
    color: '#0f172a',
    textTransform: 'uppercase',
  },
  barValue: {
    fontSize: 8,
    fontWeight: 700,
  },
  barBackground: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    width: '100%',
    overflow: 'hidden',
  },
  barFillTeal: { height: '100%', backgroundColor: '#14b8a6', borderRadius: 3 },
  barFillRose: { height: '100%', backgroundColor: '#f43f5e', borderRadius: 3 },
  barFillIndigo: { height: '100%', backgroundColor: '#6366f1', borderRadius: 3 },

  // --- Sections ---
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#0f172a',
    textTransform: 'uppercase',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    width: 10,
    color: '#38bdf8',
    fontWeight: 700,
  },
  bulletText: {
    flex: 1,
    color: '#334155',
  },
  paragraph: {
    color: '#334155',
    marginBottom: 4,
  },

  // --- Module Table ---
  table: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    alignItems: 'center',
  },
  tableRowLast: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colTopic: { flex: 2, padding: 8, fontSize: 8, fontWeight: 700, color: '#0f172a' },
  colScore: { flex: 1, padding: 8, fontSize: 8, color: '#334155', textAlign: 'center' },
  colSignal: { flex: 1, padding: 8, alignItems: 'center', justifyContent: 'center' },
  colDiff: { flex: 1, padding: 8, fontSize: 8, color: '#64748b', textAlign: 'center', textTransform: 'uppercase' },

  // --- Badges ---
  badgeStrong: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 7,
    fontWeight: 700,
  },
  badgeGap: {
    backgroundColor: '#ffe4e6',
    color: '#9f1239',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 7,
    fontWeight: 700,
  },
  badgePartial: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 7,
    fontWeight: 700,
  },

  // --- Appendix / Question Items ---
  appendixHeader: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
  },
  manifestTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#0f172a',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  questionBlock: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 6,
    backgroundColor: '#fafafa',
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  questionTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: '#0f172a',
    width: '85%',
  },
  questionPrompt: {
    fontSize: 9,
    color: '#334155',
    marginBottom: 10,
  },
  scenarioBlock: {
    padding: 8,
    backgroundColor: '#f1f5f9',
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#94a3b8',
    borderRadius: 2,
  },
  answerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  answerColumn: {
    width: '48%',
    padding: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
  },
  answerLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  answerText: {
    fontSize: 9,
    color: '#0f172a',
    fontWeight: 700,
  },
  optionText: {
    fontSize: 9,
    color: '#475569',
    marginBottom: 3,
  },

  // --- Footer ---
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 7,
    color: '#94a3b8',
    textAlign: 'center',
    textTransform: 'uppercase',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 8,
  },
});

// ---------------------------------------------------------------------------
// UTILITIES
// ---------------------------------------------------------------------------
const saveBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const previewBlob = (blob) => {
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank', 'noopener,noreferrer');
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
};

const safeText = (value, fallback = 'N/A') => {
  if (value === undefined || value === null || value === '') return fallback;
  return String(value);
};

const formatDate = (value) => {
  if (!value) return 'N/A';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return safeText(value);
  return date.toLocaleDateString();
};

const formatPercent = (value, fallback = 'N/A') => {
  if (value === undefined || value === null || value === '') return fallback;
  return `${value}%`;
};

const resolveObjectiveAnswer = (question = {}, answer) => {
  if (answer === undefined || answer === null || answer === '') return 'Not answered';
  if (typeof answer === 'number' && Array.isArray(question.options)) {
    return safeText(question.options[answer], 'Not answered');
  }
  const numericAnswer = Number(answer);
  if (Array.isArray(question.options) && !Number.isNaN(numericAnswer) && question.options[numericAnswer] !== undefined) {
    return safeText(question.options[numericAnswer], 'Not answered');
  }
  return safeText(answer, 'Not answered');
};

const buildExpectedAnswer = (question = {}) => {
  if (question.correctAnswer) return safeText(question.correctAnswer);
  if (question.type === 'free_text') {
    if (question.explanation) return safeText(question.explanation);
    return 'No stored reference answer available.';
  }
  if (Array.isArray(question.options)) {
    if (question.correctIndex !== undefined && question.correctIndex !== null) {
      return safeText(question.options[Number(question.correctIndex)], 'Not available');
    }
    if (question.correct !== undefined) {
      return resolveObjectiveAnswer(question, question.correct);
    }
  }
  return safeText(question.answer, 'Not available');
};

const buildCandidateAnswer = (question = {}) => {
  if (question.type === 'free_text') {
    return safeText(question.candidateAnswer?.trim?.() || question.candidateAnswer, 'Not answered');
  }
  return resolveObjectiveAnswer(question, question.candidateAnswer);
};

const normalizeQuestion = (question = {}, index = 0) => ({
  id: question.id || `question-${index + 1}`,
  type: question.type || 'mcq',
  title: question.title || question.topic || `Question ${index + 1}`,
  prompt: question.prompt || question.question || '',
  scenario: question.scenario || '',
  options: Array.isArray(question.options) ? question.options : [],
  explanation: question.explanation || '',
  isCorrect: Boolean(question.isCorrect),
  difficulty: question.difficulty || 'easy',
  earnedPoints: question.earnedPoints,
  totalPoints: question.totalPoints,
  candidateAnswerText: buildCandidateAnswer(question),
  correctAnswerText: buildExpectedAnswer(question),
});

const buildFallbackReportCard = (questionResults = [], proctoringSummary = {}) => (
  buildSkillReportCard(questionResults, proctoringSummary)
);

// ---------------------------------------------------------------------------
// DATA PAYLOAD COMPILERS
// ---------------------------------------------------------------------------
const getCertificatePayload = ({ certificate, attempt, linkedinSummary }) => {
  const questionSource = certificate?.questionResults?.length ? certificate.questionResults : (attempt?.questionResults || []);
  const proctoringSummary = certificate?.proctoringSummary?.trustScore !== null && certificate?.proctoringSummary?.trustScore !== undefined
    ? certificate.proctoringSummary
    : (attempt?.proctoringSummary || buildProctoringSummary({}));
  const reportCard = certificate?.reportCard?.topics?.length
    ? certificate.reportCard
    : (attempt?.reportCard || buildFallbackReportCard(questionSource, proctoringSummary));

  const scoreNum = parseFloat(certificate?.score || attempt?.score) || 0;
  
  return {
    reportLabel: 'VERIFIED CREDENTIAL TRANSCRIPT',
    title: safeText(certificate?.skill, 'Assessment Target'),
    candidateName: safeText(certificate?.studentName, 'Candidate'),
    generatedAt: certificate?.issuedAt || attempt?.createdAt || new Date().toISOString(),
    scoreNum,
    score: safeText(certificate?.score, attempt?.score !== undefined ? `${attempt.score}%` : 'N/A'),
    earnedPoints: attempt?.earnedPoints || 0,
    totalPoints: attempt?.totalPoints || 0,
    totalQuestions: questionSource.length,
    confidenceScoreNum: parseFloat(reportCard?.confidenceScore) || 0,
    confidenceScore: reportCard?.confidenceScore,
    trustScoreNum: parseFloat(proctoringSummary?.trustScore) || 0,
    trustScore: proctoringSummary?.trustScore || 0,
    questionBankVersion: certificate?.questionBank?.version || attempt?.questionBank?.version || 'V1.0',
    attemptNumber: attempt?.attemptNumber || 1,
    reportCard,
    proctoringSummary,
    linkedinSummary: linkedinSummary || '',
    questionResults: questionSource.map(normalizeQuestion),
    credential: {
      id: certificate?.id || 'Pending',
      issueDate: certificate?.date || certificate?.issuedAt,
      verifyUrl: certificate?.verifyUrl || 'N/A',
      certificateUrl: certificate?.certificateUrl || 'N/A',
      role: certificate?.currentRole || 'Certified Candidate',
      company: certificate?.currentCompany || 'CareerSense Platform',
      email: certificate?.email || 'N/A',
    },
  };
};

// ---------------------------------------------------------------------------
// COMPONENTS
// ---------------------------------------------------------------------------
const ProgressBar = ({ label, percentage, colorStyle, valueColor }) => (
  <View style={styles.barWrapper}>
    <View style={styles.barLabelContainer}>
      <Text style={styles.barLabel}>{label}</Text>
      <Text style={[styles.barValue, { color: valueColor }]}>{percentage}%</Text>
    </View>
    <View style={styles.barBackground}>
      <View style={[colorStyle, { width: `${percentage}%` }]} />
    </View>
  </View>
);

const SignalBadge = ({ text, type }) => {
  let badgeStyle = styles.badgeGap;
  if (type === 'strong') badgeStyle = styles.badgeStrong;
  if (type === 'partial') badgeStyle = styles.badgePartial;
  
  return (
    <View>
      <Text style={badgeStyle}>{text}</Text>
    </View>
  );
};

// ---------------------------------------------------------------------------
// MAIN DOCUMENT COMPONENT
// ---------------------------------------------------------------------------
const TranscriptDocument = ({ payload }) => {
  const topics = payload.reportCard?.topics || [];
  const strengths = payload.reportCard?.strengths || [];
  const weakAreas = payload.reportCard?.weakAreas || [];
  const questions = payload.questionResults || [];

  const isLowScore = payload.scoreNum < 50;

  return (
    <Document>
      {/* PAGE 1: COVER PAGE */}
      <Page size="A4" style={styles.coverPage}>
        <View>
          {/* Dual-Tone Branding Row */}
          <View style={styles.brandContainer}>
            <Image src="/Logo.png" style={styles.logoIcon} />
            <View style={styles.brandTextContainer}>
              <View style={styles.brandNameRow}>
                <Text style={[styles.brandTextCareer, styles.brandTextCareerDark]}>Career</Text>
                <Text style={styles.brandTextSense}>Sense</Text>
              </View>
              <Text style={styles.brandSubtitle}>CERTIFI.AI PLATFORM</Text>
            </View>
          </View>
          
          <Text style={styles.coverEyebrow}>Official Record</Text>
          <Text style={styles.coverTitle}>{payload.title}</Text>
          <Text style={styles.coverSubtitle}>
            This document is a verified academic and professional transcript detailing systemic evaluation metrics, proctoring indexes, and item-level objective analysis.
          </Text>
        </View>

        <View style={{ alignItems: 'center', marginVertical: 40 }}>
          <Text style={[styles.coverEyebrow, { marginBottom: 20, color: '#94a3b8' }]}>Cumulative Score</Text>
          <View style={[styles.scoreCircleContainer, isLowScore && styles.scoreCircleLow]}>
            <Text style={styles.scoreValue}>{payload.score}</Text>
          </View>
        </View>

        <View style={styles.coverFooter}>
          <View>
            <Text style={styles.coverFooterText}>Examinee</Text>
            <Text style={styles.coverFooterValue}>{payload.candidateName}</Text>
          </View>
          <View>
            <Text style={styles.coverFooterText}>Conferral Date</Text>
            <Text style={styles.coverFooterValue}>{formatDate(payload.generatedAt)}</Text>
          </View>
          <View>
            <Text style={styles.coverFooterText}>Registry ID</Text>
            <Text style={styles.coverFooterValue}>{payload.credential?.id}</Text>
          </View>
        </View>
      </Page>

      {/* PAGE 2: OVERVIEW & SUMMARY (Continuous Flow) */}
      <Page size="A4" style={styles.page} wrap>
        
        {/* Dual-Tone Branding Row - Scaled down for internal pages */}
        <View style={[styles.brandContainer, styles.brandContainerSmall]}>
          <Image src="/Logo.png" style={[styles.logoIcon, styles.logoIconSmall]} />
          <View style={styles.brandTextContainer}>
            <View style={styles.brandNameRow}>
              <Text style={[styles.brandTextCareer, styles.brandTextCareerSmall]}>Career</Text>
              <Text style={[styles.brandTextSense, styles.brandTextSenseSmall]}>Sense</Text>
            </View>
            <Text style={[styles.brandSubtitle, styles.brandSubtitleSmall]}>CERTIFI.AI PLATFORM</Text>
          </View>
        </View>

        <View style={styles.headerBlock}>
          <Text style={styles.docEyebrow}>{payload.reportLabel}</Text>
          <Text style={styles.docTitle}>{payload.title}</Text>
          <Text style={styles.docMeta}>
            Examinee: {payload.candidateName} | Reg ID: {payload.credential?.id} | Issued {formatDate(payload.generatedAt)}
          </Text>
        </View>

        {/* METRICS GRID */}
        <View style={styles.metricsTable} wrap={false}>
          <View style={styles.metricsRow}>
            <Text style={styles.metricsHeaderCell}>CUMULATIVE SCORE</Text>
            <Text style={styles.metricsHeaderCell}>POINTS AWARDED</Text>
            <Text style={styles.metricsHeaderCell}>ITEMS EVALUATED</Text>
            <Text style={[styles.metricsHeaderCell, styles.noBorderRight]}>STATISTICAL CONFIDENCE</Text>
          </View>
          <View style={styles.metricsRow}>
            <Text style={styles.metricsValueCell}>{payload.score}</Text>
            <Text style={styles.metricsValueCell}>{payload.earnedPoints}/{payload.totalPoints}</Text>
            <Text style={styles.metricsValueCell}>{payload.totalQuestions}</Text>
            <Text style={[styles.metricsValueCell, styles.noBorderRight]}>{formatPercent(payload.confidenceScore)}</Text>
          </View>
          <View style={styles.metricsRow}>
            <Text style={styles.metricsHeaderCell}>PROCTORING INDEX</Text>
            <Text style={styles.metricsHeaderCell}>CURRICULUM REV.</Text>
            <Text style={styles.metricsHeaderCell}>ATTEMPT ITERATION</Text>
            <Text style={[styles.metricsHeaderCell, styles.noBorderRight]}></Text>
          </View>
          <View style={styles.metricsRowLast}>
            <Text style={styles.metricsValueCell}>{formatPercent(payload.trustScore)}</Text>
            <Text style={styles.metricsValueCell}>{payload.questionBankVersion}</Text>
            <Text style={styles.metricsValueCell}>#{payload.attemptNumber}</Text>
            <Text style={[styles.metricsValueCell, styles.noBorderRight]}></Text>
          </View>
        </View>

        {/* VISUAL DIAGNOSTICS */}
        <View style={styles.analysisContainer} wrap={false}>
          <Text style={styles.sectionTitle}>Diagnostic Matrix</Text>
          <ProgressBar 
            label="Cumulative Proficiency Base" 
            percentage={payload.scoreNum} 
            colorStyle={isLowScore ? styles.barFillRose : styles.barFillTeal} 
            valueColor={isLowScore ? '#f43f5e' : '#14b8a6'} 
          />
          <ProgressBar 
            label="Statistical Confidence Score" 
            percentage={payload.confidenceScoreNum} 
            colorStyle={styles.barFillIndigo} 
            valueColor="#6366f1" 
          />
          <ProgressBar 
            label="Proctoring Integrity Index" 
            percentage={payload.trustScoreNum} 
            colorStyle={styles.barFillTeal} 
            valueColor="#14b8a6" 
          />
        </View>

        {/* EXAM & REGISTRY INFO */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Examination Summary</Text>
          <View style={styles.bulletItem}><Text style={styles.bulletPoint}>•</Text><Text style={styles.bulletText}>Authenticated Examinee: {payload.candidateName}</Text></View>
          <View style={styles.bulletItem}><Text style={styles.bulletPoint}>•</Text><Text style={styles.bulletText}>Declared Role: {payload.credential?.role}</Text></View>
          <View style={styles.bulletItem}><Text style={styles.bulletPoint}>•</Text><Text style={styles.bulletText}>Declared Institution: {payload.credential?.company}</Text></View>
          <View style={styles.bulletItem}><Text style={styles.bulletPoint}>•</Text><Text style={styles.bulletText}>Data verification completed against secure storage endpoints.</Text></View>
        </View>

        {payload.credential && (
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Registry Information</Text>
            <Text style={styles.paragraph}>Registry ID: {payload.credential.id}</Text>
            <Text style={styles.paragraph}>Conferral Date: {formatDate(payload.credential.issueDate)}</Text>
            <Text style={styles.paragraph}>Validation URI: {payload.credential.verifyUrl}</Text>
            <Text style={styles.paragraph}>Document URI: {payload.credential.certificateUrl}</Text>
            <Text style={styles.paragraph}>Contact: {payload.credential.email}</Text>
          </View>
        )}

        {/* COLORED MODULE TABLE */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Module Performance Analysis</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.colTopic}>CURRICULUM TOPIC</Text>
              <Text style={styles.colScore}>RAW SCORE</Text>
              <Text style={styles.colSignal}>SIGNAL</Text>
              <Text style={styles.colDiff}>DIFFICULTY</Text>
            </View>
            {(topics.length ? topics : [{ topic: 'Insufficient modular data.', result: '-', accuracy: '-', difficulty: '-' }]).map((topic, index) => {
              const accuracyNum = parseFloat(topic.accuracy) || 0;
              const isStrong = accuracyNum >= 70;
              const isGap = accuracyNum < 40;
              const signalType = isStrong ? 'strong' : (isGap ? 'gap' : 'partial');
              const signalText = isStrong ? 'STRONG' : (isGap ? 'GAP' : 'PARTIAL');

              return (
                <View key={index} style={[styles.tableRow, index === topics.length - 1 && styles.tableRowLast]}>
                  <Text style={styles.colTopic}>{safeText(topic.topic)}</Text>
                  <Text style={styles.colScore}>
                    {topic.correct !== undefined && topic.total !== undefined ? `${topic.correct}/${topic.total}` : safeText(topic.result, '-')}
                  </Text>
                  <View style={styles.colSignal}>
                    <SignalBadge text={signalText} type={signalType} />
                  </View>
                  <Text style={styles.colDiff}>{safeText(topic.difficulty, 'easy')}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Demonstrated Competencies</Text>
          {strengths.length > 0 ? strengths.map((item, index) => (
            <View key={index} style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>{safeText(item.topic)} ({formatPercent(item.accuracy)})</Text>
            </View>
          )) : <Text style={styles.paragraph}>No standout competencies registered.</Text>}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Suggested Remediation</Text>
          {weakAreas.length > 0 ? weakAreas.map((item, index) => (
            <View key={index} style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>{safeText(item.topic)} ({formatPercent(item.accuracy)})</Text>
            </View>
          )) : <Text style={styles.paragraph}>No critical remediation areas flagged.</Text>}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Academic Integrity & Proctoring Record</Text>
          <Text style={styles.paragraph}>Calculated Integrity Index: {formatPercent(payload.proctoringSummary?.trustScore)}</Text>
          <Text style={styles.paragraph}>Assessed Risk Tier: {safeText(payload.proctoringSummary?.riskLevel, 'Low')}</Text>
          <Text style={styles.paragraph}>Biometric Continuous Visibility: {formatPercent(payload.proctoringSummary?.faceVisibility)}</Text>
          <Text style={styles.paragraph}>Environment Lock Integrity: {formatPercent(payload.proctoringSummary?.fullscreenIntegrity)}</Text>
          <Text style={styles.paragraph}>Context Switches Recorded: {safeText(payload.proctoringSummary?.tabSwitches, 0)}</Text>
          <Text style={[styles.paragraph, { marginTop: 4, fontStyle: 'italic', color: '#64748b' }]}>
            {safeText(payload.proctoringSummary?.suspiciousActivitySummary, 'No suspicious activity detected during the monitored session.')}
          </Text>
        </View>

        {payload.linkedinSummary && (
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Automated Professional Summary</Text>
            <Text style={styles.paragraph}>{payload.linkedinSummary}</Text>
          </View>
        )}

        <Text style={styles.footer} fixed>
          CONFIDENTIAL GENERATED BY INSTITUTIONAL AUTOMATED EVALUATION SERVICES OFFICIAL ACADEMIC RECORD
        </Text>
      </Page>

      {/* PAGE 3+: APPENDIX (Continuous Flow) */}
      {questions.length > 0 && (
        <Page size="A4" style={styles.page} wrap>
          
          <View style={styles.appendixHeader} fixed>
            <Text style={styles.docEyebrow}>ASSESSMENT APPENDIX: ITEM-LEVEL ANALYSIS</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.docTitle}>{payload.title}</Text>
              <Text style={styles.docMeta} render={({ pageNumber, totalPages }) => (
                `Examinee: ${payload.candidateName} | Page ${pageNumber} of ${totalPages}`
              )} />
            </View>
          </View>

          <Text style={[styles.paragraph, { marginBottom: 20 }]} fixed>
            This document serves as the official item-level response record, detailing specific prompts, submitted values, and expected benchmarks.
          </Text>

          <Text style={styles.manifestTitle}>RESPONSE MANIFEST</Text>

          {questions.map((question, index) => {
            const isCorrect = question.isCorrect;
            const signalType = isCorrect ? 'strong' : 'gap';
            const signalText = isCorrect ? 'MATCH' : 'MISMATCH';

            return (
              <View key={question.id || `q-${index}`} style={styles.questionBlock} wrap={false}>
                <View style={styles.questionHeader}>
                  <Text style={styles.questionTitle}>Item {index + 1}: {safeText(question.title)}</Text>
                  <SignalBadge text={signalText} type={signalType} />
                </View>
                
                {question.scenario && (
                  <View style={styles.scenarioBlock}>
                    <Text style={[styles.answerLabel, { marginTop: 0 }]}>Context/Scenario</Text>
                    <Text style={[styles.questionPrompt, { marginBottom: 0 }]}>{safeText(question.scenario)}</Text>
                  </View>
                )}
                
                <Text style={styles.questionPrompt}>{safeText(question.prompt)}</Text>

                <View style={styles.answerBox}>
                  <View style={styles.answerColumn}>
                    <Text style={styles.answerLabel}>SUBMITTED RESPONSE</Text>
                    <Text style={styles.answerText}>{safeText(question.candidateAnswerText)}</Text>
                  </View>
                  <View style={styles.answerColumn}>
                    <Text style={styles.answerLabel}>VERIFIED CORRECT ANSWER</Text>
                    <Text style={styles.answerText}>{safeText(question.correctAnswerText)}</Text>
                  </View>
                </View>

                {question.options && question.options.length > 0 && (
                  <View style={{ marginTop: 6 }}>
                    <Text style={styles.answerLabel}>AVAILABLE OPTIONS</Text>
                    {question.options.map((opt, i) => {
                      const optText = safeText(opt);
                      const isSelected = optText === question.candidateAnswerText;
                      const prefix = isSelected ? '[[X]' : '[ ]'; 
                      return (
                        <Text key={i} style={styles.optionText}>
                          {prefix} {optText}
                        </Text>
                      );
                    })}
                  </View>
                )}
              </View>
            );
          })}

          <Text style={styles.footer} fixed>
            CONFIDENTIAL GENERATED BY INSTITUTIONAL AUTOMATED EVALUATION SERVICES OFFICIAL ACADEMIC RECORD
          </Text>
        </Page>
      )}
    </Document>
  );
};

// ---------------------------------------------------------------------------
// EXPORTS
// ---------------------------------------------------------------------------
const buildBlob = async (payload) => pdf(<TranscriptDocument payload={payload} />).toBlob();

export async function downloadPracticeReportPdf({ result, user, filename }) {
  const payload = getCertificatePayload({ certificate: result, attempt: result, linkedinSummary: '' });
  payload.reportLabel = 'PRACTICE ASSESSMENT TRANSCRIPT';
  const blob = await buildBlob(payload);
  saveBlob(blob, filename || 'Practice_Transcript.pdf');
}

export async function previewPracticeReportPdf({ result, user }) {
  const payload = getCertificatePayload({ certificate: result, attempt: result, linkedinSummary: '' });
  payload.reportLabel = 'PRACTICE ASSESSMENT TRANSCRIPT';
  const blob = await buildBlob(payload);
  previewBlob(blob);
}

export async function downloadAssessmentReportPdf({ attemptRecord, user, skill, learningPath, filename }) {
  const payload = getCertificatePayload({ certificate: attemptRecord, attempt: attemptRecord, linkedinSummary: '' });
  payload.reportLabel = 'OFFICIAL SCORE REPORT';
  payload.title = skill || attemptRecord?.title || 'Standardized Assessment';
  const blob = await buildBlob(payload);
  saveBlob(blob, filename || 'Assessment_Report.pdf');
}

export async function previewAssessmentReportPdf({ attemptRecord, user, skill, learningPath }) {
  const payload = getCertificatePayload({ certificate: attemptRecord, attempt: attemptRecord, linkedinSummary: '' });
  payload.reportLabel = 'OFFICIAL SCORE REPORT';
  payload.title = skill || attemptRecord?.title || 'Standardized Assessment';
  const blob = await buildBlob(payload);
  previewBlob(blob);
}

export async function downloadCertificateScoreReportPdf({ certificate, attempt, linkedinSummary, filename }) {
  const blob = await buildBlob(getCertificatePayload({ certificate, attempt, linkedinSummary }));
  saveBlob(blob, filename || 'Certificate_Transcript.pdf');
}

export async function previewCertificateScoreReportPdf({ certificate, attempt, linkedinSummary }) {
  const blob = await buildBlob(getCertificatePayload({ certificate, attempt, linkedinSummary }));
  previewBlob(blob);
}