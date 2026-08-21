import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MermaidDiagram from '../components/shared/MermaidDiagram';
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Loader2,
  ShieldCheck,
  Sparkles,
  Target,
  XCircle,
} from 'lucide-react';
import DashboardShell from '../components/DashboardShell';
import ReportDownloadModal from '../components/ReportDownloadModal';
import { useAuth } from '../context/AuthContext';
import { getPassingThreshold, getCertificateIneligibilityMessage } from '../services/assessmentThresholds';
import { generateCertificateId, getStoredCertificates, saveCertificate } from '../services/certificateRegistry';
import { buildProctoringSummary, buildQuestionBank, buildSkillReportCard } from '../services/assessmentInsights';
import { savePublicProfileSnapshot } from '../services/publicProfiles';
import { generateLearningPath, estimateLearningPathCareerPoints } from '../services/aiService';
import { convertPointsToUsd } from '../services/usageLedger';
import { buildPracticeReportDownloadMeta } from '../services/reportTemplates';
import { downloadPracticeReportPdf, previewPracticeReportPdf } from '../services/reportPdf';
import { saveLearningPath } from '../services/learningPathRegistry';

const formatDuration = (seconds) => {
  const safe = Math.max(seconds, 0);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const remainder = safe % 60;
  
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
};

const formatObjectiveOption = (question, optionIndex) => {
  if (!Array.isArray(question.options)) return 'Not available';
  if (optionIndex === undefined || optionIndex === null || Number.isNaN(Number(optionIndex))) return 'Not answered';
  const normalizedIndex = Number(optionIndex);
  const option = question.options[normalizedIndex];
  return option !== undefined ? option : 'Not available';
};

const formatExpectedAnswer = (question) => {
  if (question.type !== 'free_text') {
    return formatObjectiveOption(question, question.correctIndex);
  }

  if (question.explanation) return question.explanation;
  if (Array.isArray(question.rubric) && question.rubric.length > 0) {
    return question.rubric
      .map((item) => item.label || item.title || (item.keywords || []).join(', '))
      .filter(Boolean)
      .join(' | ');
  }

  return 'No stored reference answer available.';
};

const formatCandidateAnswer = (question) => {
  if (question.type === 'free_text') {
    return question.candidateAnswer?.trim() || 'Not answered';
  }

  return formatObjectiveOption(question, question.candidateAnswer);
};

export default function PracticeReport() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user, updateProfile } = useAuth();
  const [certificateClaimed, setCertificateClaimed] = useState(false);
  const [learningPath, setLearningPath] = useState(null);
  const [isLearningPathSaved, setIsLearningPathSaved] = useState(false);
  const [isGeneratePathModalOpen, setIsGeneratePathModalOpen] = useState(false);
  const [isGeneratingLearningPath, setIsGeneratingLearningPath] = useState(false);
  const [isDownloadReportModalOpen, setIsDownloadReportModalOpen] = useState(false);
  const [isPreparingReportPdf, setIsPreparingReportPdf] = useState(false);

  const result = state;

  useEffect(() => {
    if (!result) {
      navigate('/practice-hub');
    }
  }, [result, navigate]);

  if (!result) return null;

  const requiredPassingThreshold = getPassingThreshold(result.assessmentId || result.assessmentTitle, result.category);
  const passed = (result.score || 0) >= requiredPassingThreshold;
  const canClaimCertificate = passed;
  const weakAreas = useMemo(
    () => result.questionResults.filter((question) => !question.isCorrect).map((question) => question.title).slice(0, 6),
    [result.questionResults],
  );
  const learningPathEstimate = useMemo(
    () => estimateLearningPathCareerPoints(result.assessmentTitle, result.score, weakAreas),
    [result.assessmentTitle, result.score, weakAreas],
  );
  const reportDownloadMeta = useMemo(
    () => buildPracticeReportDownloadMeta(result, user),
    [result, user],
  );

  const summary = useMemo(() => {
    const objectiveQuestions = result.questionResults.filter((question) => question.type !== 'free_text');
    const writtenQuestions = result.questionResults.filter((question) => question.type === 'free_text');

    return {
      objectiveTotal: objectiveQuestions.length,
      objectiveCorrect: objectiveQuestions.filter((question) => question.isCorrect).length,
      writtenTotal: writtenQuestions.length,
      writtenQualified: writtenQuestions.filter((question) => question.isCorrect).length,
    };
  }, [result.questionResults]);

  const buildProfileWithCertificate = (certificate) => {
    if (!user || !certificate) return null;

    const existingCertifications = Array.isArray(user.certifications) ? user.certifications : [];
    if (existingCertifications.some((item) => item.certificateId === certificate.id)) {
      return { ...user, certifications: existingCertifications };
    }

    return {
      ...user,
      certifications: [
        {
          id: certificate.id,
          certificateId: certificate.id,
          title: certificate.skill || result.assessmentTitle || 'Claimed Certificate',
          subtitle: 'CareerSense Verified Certificate',
          start: certificate.date || new Date(certificate.issuedAt || Date.now()).toLocaleDateString(),
          end: '',
          description: `Score: ${certificate.score}. Credential ID: ${certificate.id}.`,
        },
        ...existingCertifications,
      ],
    };
  };

  const handleClaimCertificate = () => {
    const proctoringSummary = buildProctoringSummary({ faceVisibility: 100, fullscreenIntegrity: 100 });
    const reportCard = buildSkillReportCard(result.questionResults, proctoringSummary);
    const questionBank = buildQuestionBank(result.assessmentTitle, result.questionResults);
    let snapshot = null;
    const saveResult = saveCertificate({
      id: generateCertificateId(),
      skill: result.assessmentTitle,
      date: new Date().toLocaleDateString(),
      score: `${result.score}%`,
      studentName: user?.name || 'Student',
      currentRole: user?.currentRole || 'Certified Candidate',
      currentCompany: user?.currentCompany || 'CareerSense Platform',
      email: user?.email || '',
      issuedAt: new Date().toISOString(),
      attemptId: result.id,
      questionBank,
      reportCard,
      proctoringSummary,
      questionResults: result.questionResults || [],
      publicProfileId: null,
    });
    const newCertificate = saveResult.certificate;
    if (!saveResult.saved) {
      alert('We could not store this certificate in browser storage. Please clear old browser data and try again.');
      return;
    }
    const nextProfile = buildProfileWithCertificate(newCertificate);
    if (nextProfile) {
      updateProfile({ certifications: nextProfile.certifications });
      snapshot = savePublicProfileSnapshot(nextProfile, getStoredCertificates());
    }
    const routedCertificate = snapshot ? { ...newCertificate, publicProfileId: snapshot.id } : newCertificate;
    setCertificateClaimed(true);
    navigate(`/certificate/${newCertificate.id}`, { state: routedCertificate });
  };

  const handleGenerateLearningPath = async () => {
    setIsGeneratingLearningPath(true);
    try {
      const generatedPath = await generateLearningPath(result.assessmentTitle, result.score, weakAreas);
      setLearningPath(generatedPath);
      setIsLearningPathSaved(false);
      setIsGeneratePathModalOpen(false);
    } catch (error) {
      console.error('Failed to generate learning path:', error);
      alert('We could not generate a learning path right now. Please try again.');
    } finally {
      setIsGeneratingLearningPath(false);
    }
  };

  const handleStoreLearningPath = () => {
    if (!learningPath) return;

    const newPath = {
      id: `path-${Date.now()}`,
      title: learningPath.role || result.assessmentTitle,
      role: result.assessmentTitle,
      description: learningPath.description,
      progress: 0,
      totalModules: learningPath.modules?.length || 0,
      modules: (learningPath.modules || []).map((module, index) => ({
        id: `mod-${Date.now()}-${index}`,
        title: module.title,
        description: module.description,
        estimatedTime: module.estimatedTime,
        topics: Array.isArray(module.topics) ? module.topics : [],
        recommendedTests: Array.isArray(module.recommendedTests) ? module.recommendedTests : [],
        status: index === 0 ? 'current' : 'open',
        quizId: module.title,
      })),
    };

    saveLearningPath(newPath);
    setIsLearningPathSaved(true);
  };

  const handleDownloadReport = async () => {
    setIsPreparingReportPdf(true);
    try {
      await downloadPracticeReportPdf({
        result,
        user,
        filename: reportDownloadMeta.filename,
      });
      setIsDownloadReportModalOpen(false);
    } catch (error) {
      console.error('Failed to prepare practice report PDF:', error);
      alert('We could not prepare the PDF report right now. Please try again.');
    } finally {
      setIsPreparingReportPdf(false);
    }
  };

  const handlePreviewReport = async () => {
    setIsPreparingReportPdf(true);
    try {
      await previewPracticeReportPdf({
        result,
        user,
      });
    } catch (error) {
      console.error('Failed to preview practice report PDF:', error);
      alert('We could not preview the PDF report right now. Please try again.');
    } finally {
      setIsPreparingReportPdf(false);
    }
  };

  return (
    <DashboardShell
      title="Performance Report"
      subtitle="Detailed analysis of your assessment attempt."
      activeTab="practice-hub"
      contentClassName="px-8 pb-12 bg-slate-50"
    >
      <div className="mx-auto max-w-5xl pt-6 font-sans">
        {isGeneratePathModalOpen ? (
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">Generate Learning Path?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Do you want to generate a learning path related to the test you just took? This will create a
                    tailored roadmap for <span className="font-semibold text-slate-900">{result.assessmentTitle}</span>.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-teal-100 bg-teal-50/70 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-teal-700">Required CareerSense Points</p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  {learningPathEstimate.min.toLocaleString()}-{learningPathEstimate.max.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Estimated usage cost: ${convertPointsToUsd(learningPathEstimate.min).toFixed(4)}-${convertPointsToUsd(learningPathEstimate.max).toFixed(4)}
                </p>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsGeneratePathModalOpen(false)}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  No
                </button>
                <button
                  type="button"
                  onClick={handleGenerateLearningPath}
                  disabled={isGeneratingLearningPath}
                  className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {isGeneratingLearningPath ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  {isGeneratingLearningPath ? 'Generating...' : 'Yes, Generate'}
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {isDownloadReportModalOpen ? (
          <ReportDownloadModal
            open={isDownloadReportModalOpen}
            title="Prepare Downloadable Report?"
            description="This PDF uses a reusable CareerSense report template with the latest attempt data. No AI generation is needed before you confirm."
            sections={reportDownloadMeta.sections}
            careerPoints={reportDownloadMeta.careerPoints}
            onClose={() => setIsDownloadReportModalOpen(false)}
            onPreview={handlePreviewReport}
            onConfirm={handleDownloadReport}
            previewLabel="Preview Report"
            confirmLabel="Prepare & Download PDF"
            confirmIcon={Download}
            isProcessing={isPreparingReportPdf}
          />
        ) : null}
        
        {/* Actions Header */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-300 pb-4">
          <button
            type="button"
            onClick={() => navigate('/practice-hub')}
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Practice Hub
          </button>
          <span className="text-sm font-medium text-slate-500">
            Generated on: {new Date(result.issuedAt).toLocaleString()}
          </span>
        </div>

        {/* Official Score Card Section */}
        <section className="mb-8 overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm">
          <div className="border-b border-slate-300 bg-blue-900 px-6 py-4 text-white">
            <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="h-4 w-4" /> Official Score Card
            </div>
            <h2 className="text-xl font-bold tracking-wide">{result.assessmentTitle}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-slate-50 border-b border-slate-300 text-sm">
            <div className="p-4">
              <div className="text-slate-500 font-medium mb-1">Candidate</div>
              <div className="font-semibold text-slate-900">{user?.name || 'Guest User'}</div>
            </div>
            <div className="p-4">
              <div className="text-slate-500 font-medium mb-1">Attempt ID</div>
              <div className="font-mono text-slate-900 text-xs mt-1.5">{result.id.split('-').pop()}</div>
            </div>
            <div className="p-4">
              <div className="text-slate-500 font-medium mb-1">Time Taken</div>
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-slate-400" /> {formatDuration(result.elapsedSeconds)}
              </div>
            </div>
            <div className="p-4">
              <div className="text-slate-500 font-medium mb-1">Evaluation Mode</div>
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Target className="h-4 w-4 text-slate-400" /> Standard (No AI)
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className={`rounded-md border p-5 text-center shadow-sm ${passed ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Final Score</p>
              <div className="text-5xl font-bold text-slate-900">{result.score}%</div>
              <div className={`mt-2 font-bold ${passed ? 'text-green-700' : 'text-red-700'}`}>
                {passed ? 'QUALIFIED' : 'NOT QUALIFIED'}
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-5 text-center shadow-sm flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Total Marks</p>
              <div className="text-3xl font-bold text-slate-900">{result.earnedPoints} <span className="text-lg text-slate-400">/ {result.totalPoints}</span></div>
              <div className="mt-2 text-sm font-medium text-slate-500 flex items-center justify-center gap-1">
                <FileText className="h-4 w-4" /> {result.totalQuestions} Questions Attempted
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-center gap-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-600">Objective (MCQ)</span>
                  <span className="font-bold text-slate-900">{summary.objectiveCorrect}/{summary.objectiveTotal}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: `${(summary.objectiveCorrect / Math.max(summary.objectiveTotal, 1)) * 100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-600">Subjective (Written)</span>
                  <span className="font-bold text-slate-900">{summary.writtenQualified}/{summary.writtenTotal}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: `${(summary.writtenQualified / Math.max(summary.writtenTotal, 1)) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Action */}
        <section className={`mb-8 flex flex-col md:flex-row items-center justify-between rounded-md border p-6 shadow-sm ${
          passed ? 'border-blue-200 bg-blue-50' : 'border-red-200 bg-red-50'
        }`}>
          <div className="mb-4 md:mb-0">
            <h3 className={`text-lg font-bold ${passed ? 'text-blue-900' : 'text-red-900'}`}>Certification Outcome</h3>
            <p className={`mt-1 text-sm font-medium ${passed ? 'text-blue-800' : 'text-red-800'}`}>
              {passed
                ? `Congratulations! You scored ${result.score}% and are eligible to claim your official certificate.`
                : getCertificateIneligibilityMessage(requiredPassingThreshold)}
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => navigate(`/practice-hub/test/${result.assessmentId}`)}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 shadow-sm"
            >
              <Download className="h-4 w-4" />
              Retake Test
            </button>
            <button
              type="button"
              onClick={() => setIsDownloadReportModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 shadow-sm"
            >
              <FileText className="h-4 w-4" />
              Download Report
            </button>
            <button
              type="button"
              onClick={handleClaimCertificate}
              disabled={!canClaimCertificate || certificateClaimed}
              className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
            >
              <Award className="h-4 w-4" />
              {certificateClaimed
                ? 'Certificate Claimed'
                : passed
                ? 'Claim Certificate'
                : `Locked (Min ${requiredPassingThreshold}%)`}
            </button>
          </div>
        </section>

        <section className="mb-8 rounded-md border border-teal-200 bg-white shadow-sm">
          <div className="border-b border-teal-100 bg-teal-50/60 px-6 py-4">
            <h3 className="text-base font-bold text-slate-900">Post-Test Learning Path</h3>
            <p className="mt-1 text-sm text-slate-600">
              Generate a tailored roadmap from this test result only if you want one.
            </p>
          </div>

          <div className="p-6">
            {!learningPath ? (
              <div className="flex flex-col gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">No learning path generated yet</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Create a personalized learning path for {result.assessmentTitle} after reviewing your performance.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGeneratePathModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  <Sparkles className="h-4 w-4" />
                  Generate Learning Path
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-700">Generated Roadmap</p>
                    <h4 className="mt-1 text-xl font-bold tracking-tight text-slate-900">{learningPath.role || result.assessmentTitle}</h4>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{learningPath.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleStoreLearningPath}
                    disabled={isLearningPathSaved}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-200 bg-white px-4 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400"
                  >
                    <BookOpen className="h-4 w-4" />
                    {isLearningPathSaved ? 'Stored in Learning Paths' : 'Store This Learning Path'}
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {(learningPath.modules || []).map((module, index) => (
                    <div key={`${module.title}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-bold text-slate-900">Module {index + 1}</p>
                        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                          {module.estimatedTime || 'Planned'}
                        </span>
                      </div>
                      <h5 className="mt-2 text-base font-semibold text-slate-900">{module.title}</h5>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{module.description}</p>

                      {Array.isArray(module.topics) && module.topics.length > 0 ? (
                        <div className="mt-4">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">What To Learn</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <span
                                key={`${module.title}-topic-${topicIndex}`}
                                className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {Array.isArray(module.recommendedTests) && module.recommendedTests.length > 0 ? (
                        <div className="mt-4">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Recommended Tests</p>
                          <ul className="mt-2 space-y-1.5">
                            {module.recommendedTests.map((testName, testIndex) => (
                              <li key={`${module.title}-test-${testIndex}`} className="text-sm text-slate-600">
                                {testName}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Response Sheet */}
        <section className="rounded-md border border-slate-300 bg-white shadow-sm">
          <div className="border-b border-slate-300 bg-slate-100 px-6 py-4">
            <h3 className="text-base font-bold text-slate-800">Response Sheet</h3>
          </div>
          
          <div className="divide-y divide-slate-200">
            {result.questionResults.map((question, index) => (
              <div key={question.id} className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-500">Q{index + 1}.</span>
                    <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                      {question.type === 'free_text' ? 'Subjective' : 'Objective'}
                    </span>
                  </div>
                  <div className={`inline-flex items-center gap-1.5 text-sm font-bold ${
                    question.isCorrect ? 'text-green-700' : 'text-red-600'
                  }`}>
                    {question.isCorrect ? (
                      <><CheckCircle2 className="h-4 w-4" /> Correct</>
                    ) : (
                      <><XCircle className="h-4 w-4" /> Incorrect</>
                    )}
                  </div>
                </div>
                
                {question.prompt?.includes('{{diagram}}') && question.diagram ? (
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">
                    {question.prompt.split('{{diagram}}').map((part, idx, arr) => (
                      <Fragment key={idx}>
                        <span className="whitespace-pre-wrap">{part}</span>
                        {idx < arr.length - 1 && (
                          <MermaidDiagram chart={question.diagram} />
                        )}
                      </Fragment>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-600">{question.prompt}</p>
                    {question.diagram && (
                      <MermaidDiagram chart={question.diagram} />
                    )}
                  </div>
                )}

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Your Answer</p>
                    <p className="mt-2 text-sm font-medium text-slate-900 whitespace-pre-wrap">
                      {formatCandidateAnswer(question)}
                    </p>
                  </div>
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      {question.type === 'free_text' ? 'Expected Answer' : 'Correct Answer'}
                    </p>
                    <p className="mt-2 text-sm font-medium text-emerald-900 whitespace-pre-wrap">
                      {formatExpectedAnswer(question)}
                    </p>
                  </div>
                </div>

                {question.type !== 'free_text' && Array.isArray(question.options) ? (
                  <div className="mt-4 rounded-md border border-slate-200 bg-white p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Options</p>
                    <div className="mt-3 grid gap-2">
                      {question.options.map((option, optionIndex) => {
                        const isCorrectOption = optionIndex === question.correctIndex;
                        const isSelectedOption = Number(question.candidateAnswer) === optionIndex;

                        return (
                          <div
                            key={`${question.id}-option-${optionIndex}`}
                            className={`rounded-md border px-3 py-2 text-sm ${
                              isCorrectOption
                                ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                                : isSelectedOption
                                  ? 'border-amber-300 bg-amber-50 text-amber-900'
                                  : 'border-slate-200 bg-slate-50 text-slate-700'
                            }`}
                          >
                            {option}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {question.explanation ? (
                  <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700">Explanation</p>
                    <p className="mt-2 text-sm leading-relaxed text-blue-900">{question.explanation}</p>
                  </div>
                ) : null}
                
                {/* Optional: Show earned marks per question */}
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded border border-slate-200">
                  Marks Awarded: <span className={question.isCorrect ? "text-green-700" : "text-slate-700"}>{question.earnedPoints} / {question.totalPoints}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
