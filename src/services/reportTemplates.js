export const REPORT_TEMPLATE_TOKEN_COST = 0;

export function buildPracticeReportDownloadMeta(result, user) {
  return {
    title: result?.assessmentTitle || 'Practice Report',
    filename: `${(result?.assessmentTitle || 'practice-report').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-report.pdf`,
    careerPoints: REPORT_TEMPLATE_TOKEN_COST,
    sections: [
      'Candidate and attempt summary',
      'Final score, total marks, and timing details',
      'Objective and subjective performance breakdown',
      'Full response sheet with your answers and correct answers',
      'Explanations included where available',
    ],
    userName: user?.name || 'Guest User',
  };
}

export function buildAssessmentReportDownloadMeta(attemptRecord, user, skill) {
  return {
    title: attemptRecord?.title || skill || 'Assessment Report',
    filename: `${(attemptRecord?.title || skill || 'assessment-report').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-report.pdf`,
    careerPoints: REPORT_TEMPLATE_TOKEN_COST,
    sections: [
      'Candidate, attempt number, and overall score summary',
      'Confidence score, trust score, and question bank details',
      'Topic-wise skill report card with strengths and weak areas',
      'Advanced proctoring trust signals',
      'Recommended roadmap snapshot if available',
      'Full response sheet with every question and correct answer',
    ],
    userName: user?.name || 'Guest User',
  };
}

export function buildCertificateReportDownloadMeta(certificate, user) {
  return {
    title: certificate?.skill || 'Certificate Score Report',
    filename: `${(certificate?.skill || certificate?.id || 'certificate-score-report').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-report.pdf`,
    careerPoints: REPORT_TEMPLATE_TOKEN_COST,
    sections: [
      'Candidate, credential ID, and verified score summary',
      'Confidence score, trust score, and question bank details',
      'Topic-wise skill report card with strengths and weak areas',
      'Advanced proctoring trust signals',
      'Full response sheet with every question and correct answer',
    ],
    userName: user?.name || certificate?.studentName || 'Guest User',
  };
}
