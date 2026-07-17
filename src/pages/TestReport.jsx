import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Award,
  BarChart3,
  Brain,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Home,
  Loader2,
  PlusCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { estimateLearningPathCareerPoints, generateLearningPath } from '../services/aiService';
import { useAuth } from '../context/AuthContext';
import ReportDownloadModal from '../components/ReportDownloadModal';
import {
  findCertificateByAttemptId,
  generateCertificateId,
  getStoredCertificates,
  saveCertificate,
} from '../services/certificateRegistry';
import {
  buildProctoringSummary,
  buildQuestionBank,
  buildSkillReportCard,
  scoreQuestion,
} from '../services/assessmentInsights';
import {
  getAssessmentAttemptsForSkill,
  saveAssessmentAttempt,
} from '../services/attemptRegistry';
import { savePublicProfileSnapshot } from '../services/publicProfiles';
import { buildAssessmentReportDownloadMeta } from '../services/reportTemplates';
import { downloadAssessmentReportPdf, previewAssessmentReportPdf } from '../services/reportPdf';
import { saveLearningPath, getStoredLearningPaths, saveLearningPathsList } from '../services/learningPathRegistry';
import { convertPointsToUsd } from '../services/usageLedger';

const PASSING_SCORE = 60;

export default function TestReport() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [learningPath, setLearningPath] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [certificateClaimed, setCertificateClaimed] = useState(false);
  const [issuedCertificate, setIssuedCertificate] = useState(null);
  const [attemptRecord, setAttemptRecord] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [isDownloadReportModalOpen, setIsDownloadReportModalOpen] = useState(false);
  const [isPreparingReportPdf, setIsPreparingReportPdf] = useState(false);
  const [isGeneratePathModalOpen, setIsGeneratePathModalOpen] = useState(false);
  const [isGeneratingLearningPath, setIsGeneratingLearningPath] = useState(false);

  useEffect(() => {
    if (!state) navigate('/dashboard');
  }, [state, navigate]);

  const skill = state?.skill || state?.title;

  useEffect(() => {
    if (!state || attemptRecord) return;

    const questionResults = (state.questions || []).map((question, index) =>
      scoreQuestion(question, state.answers?.[question.id ?? index], index),
    );
    const earnedPoints = questionResults.reduce((sum, question) => sum + (question.earnedPoints || 0), 0);
    const totalPoints = questionResults.reduce((sum, question) => sum + (question.totalPoints || 0), 0);
    const score = totalPoints ? Math.round((earnedPoints / totalPoints) * 100) : 0;
    const proctoringSummary = buildProctoringSummary(state.proctoring);
    const reportCard = buildSkillReportCard(questionResults, proctoringSummary);
    const questionBank = buildQuestionBank(skill, state.questions || []);
    const previousAttempts = getAssessmentAttemptsForSkill(skill);
    const attempt = saveAssessmentAttempt({
      id: state.attemptId || `attempt_${Date.now()}`,
      skill,
      title: state.title || skill,
      answers: state.answers || {},
      questions: state.questions || [],
      questionResults,
      earnedPoints,
      totalPoints,
      score,
      reportCard,
      proctoringSummary,
      questionBank,
      createdAt: state.completedAt || new Date().toISOString(),
      attemptNumber: previousAttempts.length + 1,
    });

    // Auto-complete matching learning path modules
    try {
      const learningPaths = getStoredLearningPaths();
      let pathsChanged = false;
      const sourceLearningPathId = state.sourceLearningPathId;
      const sourceModuleId = state.sourceModuleId;

      const updatedPaths = (learningPaths || []).map((path) => {
        let pathChanged = false;
        const isTargetLearningPath = sourceLearningPathId && path.id === sourceLearningPathId;

        const updatedModules = (path.modules || []).map((module) => {
          const isTargetModule = isTargetLearningPath
            ? (sourceModuleId && module.id === sourceModuleId)
            : (module.title && module.title.toLowerCase() === skill.toLowerCase());

          if (isTargetModule) {
            pathChanged = true;
            pathsChanged = true;
            return {
              ...module,
              status: 'completed',
              score: score
            };
          }
          return module;
        });

        if (pathChanged) {
          const completedCount = updatedModules.filter((m) => m.status === 'completed').length;
          const progress = Math.round((completedCount / updatedModules.length) * 100);
          return {
            ...path,
            modules: updatedModules,
            progress: progress
          };
        }
        return path;
      });

      if (pathsChanged) {
        saveLearningPathsList(updatedPaths);
      }
    } catch (err) {
      console.error('Failed to auto-complete learning path module:', err);
    }

    setAttemptRecord(attempt);
  }, [attemptRecord, skill, state]);

  const improvement = useMemo(() => {
    if (!attemptRecord) return null;
    const previousAttempts = getAssessmentAttemptsForSkill(skill).filter((attempt) => attempt.id !== attemptRecord.id);
    const latestPrevious = previousAttempts[0] || null;
    const bestPreviousScore = previousAttempts.reduce((best, attempt) => Math.max(best, Number(attempt.score || 0)), 0);
    return {
      latestPrevious,
      bestPreviousScore,
      deltaFromLatest: latestPrevious ? attemptRecord.score - Number(latestPrevious.score || 0) : null,
      deltaFromBest: previousAttempts.length ? attemptRecord.score - bestPreviousScore : null,
    };
  }, [attemptRecord, skill]);
  const passed = attemptRecord ? attemptRecord.score >= PASSING_SCORE : false;
  const certificateEligible = Boolean(state?.certificateEligible);
  const reportDownloadMeta = useMemo(
    () => (attemptRecord ? buildAssessmentReportDownloadMeta(attemptRecord, user, skill) : null),
    [attemptRecord, skill, user],
  );
  const weakAreas = useMemo(
    () => (attemptRecord?.reportCard?.weakAreas || []).map((item) => item.topic).filter(Boolean).slice(0, 6),
    [attemptRecord],
  );
  const learningPathEstimate = useMemo(
    () => estimateLearningPathCareerPoints(skill, attemptRecord?.score || 0, weakAreas),
    [attemptRecord?.score, skill, weakAreas],
  );
  const certificateQuestionResults = useMemo(
    () => (state?.questions || []).map((question, index) => scoreQuestion(question, state.answers?.[question.id ?? index], index)),
    [state],
  );

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
          title: certificate.skill || skill || attemptRecord?.title || 'Claimed Certificate',
          subtitle: 'CareerSense Verified Certificate',
          start: certificate.date || new Date(certificate.issuedAt || Date.now()).toLocaleDateString(),
          end: '',
          description: `Score: ${certificate.score}. Credential ID: ${certificate.id}.`,
        },
        ...existingCertifications,
      ],
    };
  };

  const issueCertificate = ({ openAfterSave = false } = {}) => {
    if (!attemptRecord) return null;

    const existingCertificate = findCertificateByAttemptId(attemptRecord.id);
    if (existingCertificate) {
      const existingProfile = buildProfileWithCertificate(existingCertificate);
      if (existingProfile) {
        updateProfile({ certifications: existingProfile.certifications });
      }
      setIssuedCertificate(existingCertificate);
      setCertificateClaimed(true);
      if (openAfterSave) {
        navigate(`/certificate/${existingCertificate.id}`, { state: existingCertificate });
      }
      return existingCertificate;
    }

    let snapshot = null;
    const saveResult = saveCertificate({
      id: generateCertificateId(),
      skill,
      date: new Date(attemptRecord.createdAt).toLocaleDateString(),
      score: `${attemptRecord.score}%`,
      studentName: user?.name || 'Student',
      currentRole: user?.currentRole || 'Certified Candidate',
      currentCompany: user?.currentCompany || 'CareerSense Platform',
      email: user?.email || '',
      issuedAt: attemptRecord.createdAt,
      attemptId: attemptRecord.id,
      questionBank: attemptRecord.questionBank,
      reportCard: attemptRecord.reportCard,
      proctoringSummary: attemptRecord.proctoringSummary,
      questionResults: attemptRecord.questionResults?.length ? attemptRecord.questionResults : certificateQuestionResults,
      publicProfileId: null,
    });

    if (!saveResult.saved) {
      alert('We could not store this certificate in browser storage. Please clear old browser data and try again.');
      return null;
    }

    let nextCertificate = saveResult.certificate;

    const nextProfile = buildProfileWithCertificate(nextCertificate);
    if (nextProfile) {
      updateProfile({ certifications: nextProfile.certifications });
      snapshot = savePublicProfileSnapshot(nextProfile, getStoredCertificates());
      if (snapshot?.id) {
        const profileLinkedResult = saveCertificate({
          ...nextCertificate,
          publicProfileId: snapshot.id,
        });
        nextCertificate = profileLinkedResult.certificate;
      }
    }

    setIssuedCertificate(nextCertificate);
    setCertificateClaimed(true);

    if (openAfterSave) {
      navigate(`/certificate/${nextCertificate.id}`, {
        state: snapshot ? { ...nextCertificate, publicProfileId: snapshot.id } : nextCertificate,
      });
    }

    return nextCertificate;
  };

  useEffect(() => {
    if (!attemptRecord) return;
    const existingCertificate = findCertificateByAttemptId(attemptRecord.id);
    if (!existingCertificate) return;
    setIssuedCertificate(existingCertificate);
    setCertificateClaimed(true);
  }, [attemptRecord]);

  if (!state || !attemptRecord) return null;

  const handleSavePath = () => {
    if (!learningPath) return;
    const newPath = {
      id: `path-${Date.now()}`,
      title: learningPath.role,
      role: skill,
      description: learningPath.description,
      progress: 0,
      totalModules: learningPath.modules.length,
      modules: learningPath.modules.map((module, index) => ({
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
    setIsSaved(true);
  };

  const handleGenerateLearningPath = async () => {
    if (!skill) return;

    setIsGeneratingLearningPath(true);
    try {
      const pathData = await generateLearningPath(skill, attemptRecord?.score || 0, weakAreas);
      setLearningPath(pathData);
      setIsSaved(false);
      setIsGeneratePathModalOpen(false);
    } catch (error) {
      console.error('Failed to generate learning path:', error);
      alert('We could not generate a learning path right now. Please try again.');
    } finally {
      setIsGeneratingLearningPath(false);
    }
  };

  const handleClaimCertificate = () => {
    if (!certificateEligible) {
      alert('This custom assessment is not certificate eligible. Only assessments with 20 or more questions can issue a certificate.');
      return;
    }
    issueCertificate({ openAfterSave: true });
  };

  const handleCopySummary = async () => {
    const summary = `${skill}: ${attemptRecord.score}% score, confidence ${attemptRecord.reportCard.confidenceScore}%, trust ${attemptRecord.proctoringSummary.trustScore}%`;
    await navigator.clipboard.writeText(summary);
    setShareCopied(true);
    window.setTimeout(() => setShareCopied(false), 1800);
  };

  const handleDownloadReport = async () => {
    if (!attemptRecord || !reportDownloadMeta) return;

    setIsPreparingReportPdf(true);
    try {
      await downloadAssessmentReportPdf({
        attemptRecord,
        user,
        skill,
        learningPath,
        filename: reportDownloadMeta.filename,
      });
      setIsDownloadReportModalOpen(false);
    } catch (error) {
      console.error('Failed to prepare assessment report PDF:', error);
      alert('We could not prepare the PDF report right now. Please try again.');
    } finally {
      setIsPreparingReportPdf(false);
    }
  };

  const handlePreviewReport = async () => {
    if (!attemptRecord) return;

    setIsPreparingReportPdf(true);
    try {
      await previewAssessmentReportPdf({
        attemptRecord,
        user,
        skill,
        learningPath,
      });
    } catch (error) {
      console.error('Failed to preview assessment report PDF:', error);
      alert('We could not preview the PDF report right now. Please try again.');
    } finally {
      setIsPreparingReportPdf(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">
      <ReportDownloadModal
        open={isGeneratePathModalOpen}
        eyebrow="Learning Path Authorization"
        title="Generate Learning Path?"
        description={`Create a tailored roadmap for ${skill} based on this completed assessment and its weak areas.`}
        sections={[
          '4-5 tailored learning modules',
          'Skill-focused study topics for each module',
          'Recommended tests aligned to the assessment',
          'Optional save-to-learning-paths after generation',
        ]}
        careerPoints={learningPathEstimate.max}
        careerPointsDisplay={`${learningPathEstimate.min.toLocaleString()}-${learningPathEstimate.max.toLocaleString()}`}
        costDisplay={`$${convertPointsToUsd(learningPathEstimate.min).toFixed(4)}-$${convertPointsToUsd(learningPathEstimate.max).toFixed(4)} USD`}
        onClose={() => setIsGeneratePathModalOpen(false)}
        onConfirm={handleGenerateLearningPath}
        confirmLabel={isGeneratingLearningPath ? 'Generating...' : 'Yes, Generate'}
        confirmIcon={isGeneratingLearningPath ? Loader2 : Brain}
        isProcessing={isGeneratingLearningPath}
      />
      {isDownloadReportModalOpen && reportDownloadMeta ? (
        <ReportDownloadModal
          open={isDownloadReportModalOpen}
          title="Prepare Downloadable Report?"
          description="This PDF uses a reusable CareerSense report template with the latest assessment data. No AI generation is needed before you confirm."
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
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Assessment Report</h1>
            <p className="mt-1 text-sm text-slate-500">{attemptRecord.title}</p>
          </div>
          <button onClick={() => navigate('/dashboard')} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900">
            <Home className="h-4 w-4" /> Dashboard
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full border-8 border-slate-50 text-center">
                <div>
                  <div className="text-4xl font-black text-slate-900">{attemptRecord.score}%</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Overall Score</div>
                </div>
              </div>

              <h2 className={`text-center text-2xl font-bold ${passed ? 'text-teal-600' : 'text-amber-600'}`}>
                {certificateEligible
                  ? (passed ? 'Certification Ready' : 'Assessment Completed')
                  : 'Assessment Completed'}
              </h2>
              <p className="mt-3 text-center text-sm leading-7 text-slate-500">
                {!certificateEligible
                  ? 'This assessment does not qualify for certificate issuance because it contains 20 questions or fewer.'
                  : passed
                    ? `You cleared the ${PASSING_SCORE}% threshold and can issue your verified credential now.`
                    : 'You can still claim a completion certificate for this final assessment attempt and keep it in your credential history.'}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <StatCard label="Confidence Score" value={`${attemptRecord.reportCard.confidenceScore}%`} icon={BarChart3} tone="blue" />
                <StatCard label="Trust Score" value={`${attemptRecord.proctoringSummary.trustScore}%`} icon={ShieldCheck} tone="emerald" />
                <StatCard label="Attempt Number" value={`#${attemptRecord.attemptNumber}`} icon={RotateCcw} tone="amber" />
                <StatCard label="Question Bank" value={attemptRecord.questionBank.version} icon={Brain} tone="slate" compact />
              </div>

              <div className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
                certificateEligible
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-amber-200 bg-amber-50 text-amber-800'
              }`}>
                {certificateEligible
                  ? 'Certificate unlocked: this assessment has 20 or more questions.'
                  : 'Certificate locked: increase question count to 20 or more in Create Assessment to enable certificate issuance.'}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  <RotateCcw className="h-4 w-4" />
                  Retake Later
                </button>
                <button
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  {shareCopied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  {shareCopied ? 'Copied' : 'Copy Summary'}
                </button>
                <button
                  onClick={() => setIsDownloadReportModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Download className="h-4 w-4" />
                  Download Report
                </button>
                <button
                  onClick={handleClaimCertificate}
                  disabled={!certificateEligible}
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-teal-200 hover:bg-teal-700 disabled:opacity-60"
                >
                  <Award className="h-4 w-4" />
                  {certificateEligible
                    ? (certificateClaimed ? 'View Certificate' : 'Claim Certificate')
                    : 'Certificate Locked'}
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-teal-600" />
                <h3 className="text-lg font-bold text-slate-900">Retake Policy & Improvement Tracking</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <p>Every attempt is saved. Your latest result can be compared against your previous attempt and your historical best score for the same skill.</p>
                <p>Public proof favors your strongest credential outcome, while recruiters can still review attempt-date history and question-bank versioning.</p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <MetricPill label="Vs Previous Attempt" value={formatDelta(improvement?.deltaFromLatest)} />
                <MetricPill label="Vs Best Previous" value={formatDelta(improvement?.deltaFromBest)} />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-bold text-slate-900">Skill Report Card</h3>
              </div>
              <div className="space-y-3">
                {attemptRecord.reportCard.topics.map((topic) => (
                  <div key={topic.topic} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-900">{topic.topic}</p>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{topic.difficulty}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-slate-900">{topic.accuracy}%</p>
                        <p className="text-xs text-slate-500">{topic.correct}/{topic.total} correct</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <SummaryList title="Strengths" items={attemptRecord.reportCard.strengths.map((item) => `${item.topic} (${item.accuracy}%)`)} positive />
                <SummaryList title="Weak Areas" items={attemptRecord.reportCard.weakAreas.map((item) => `${item.topic} (${item.accuracy}%)`)} />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Advanced Proctoring Trust Signals</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <MetricPill label="Face Visibility" value={`${attemptRecord.proctoringSummary.faceVisibility}%`} />
                <MetricPill label="Fullscreen Integrity" value={`${attemptRecord.proctoringSummary.fullscreenIntegrity}%`} />
                <MetricPill label="Tab Switches" value={`${attemptRecord.proctoringSummary.tabSwitches}`} />
                <MetricPill label="Risk Level" value={attemptRecord.proctoringSummary.riskLevel} />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-500">{attemptRecord.proctoringSummary.suspiciousActivitySummary}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-slate-900">Post-Assessment Learning Path</h3>
                </div>
                {learningPath ? (
                  <button
                    onClick={handleSavePath}
                    disabled={isSaved}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold ${
                      isSaved ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {isSaved ? <Check className="h-4 w-4" /> : <PlusCircle className="h-4 w-4" />}
                    {isSaved ? 'Saved' : 'Save Path'}
                  </button>
                ) : null}
              </div>

              {!learningPath ? (
                <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">No learning path generated yet</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Create a personalized learning path for {skill} only if you want one. This helps reduce token usage at the start.
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
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{learningPath.role}</h4>
                    <p className="text-sm text-slate-500">{learningPath.description}</p>
                  </div>
                  {learningPath.modules?.map((module, index) => (
                    <div key={`${module.title}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-500">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="font-bold text-slate-800">{module.title}</p>
                            <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                              {module.estimatedTime || 'Planned'}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-slate-500">{module.description}</p>

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
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, tone = 'slate', compact = false }) {
  const tones = {
    blue: 'bg-blue-50 text-blue-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
    slate: 'bg-slate-100 text-slate-700',
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${tones[tone]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className={`mt-3 font-black text-slate-900 ${compact ? 'text-sm break-all' : 'text-2xl'}`}>{value}</p>
    </div>
  );
}

function MetricPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-1 text-lg font-black text-slate-900">{value ?? 'N/A'}</p>
    </div>
  );
}

function SummaryList({ title, items, positive = false }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
      <p className={`text-sm font-bold ${positive ? 'text-emerald-700' : 'text-amber-700'}`}>{title}</p>
      <div className="mt-3 space-y-2">
        {(items.length ? items : ['No standout signals yet.']).map((item) => (
          <div key={item} className="text-sm text-slate-600">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDelta(value) {
  if (value === null || value === undefined) return 'No baseline yet';
  if (value === 0) return 'No change';
  return `${value > 0 ? '+' : ''}${value}%`;
}
