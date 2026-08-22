import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Brain,
  Check,
  Copy,
  Download,
  ExternalLink,
  FileDown,
  Loader2,
  LogOut,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  PlusCircle,
  Share2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
  X,
  Zap,
  Link as LinkIcon,
  Award,
  Users
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import BadgePreviewModal from '../components/BadgePreviewModal';
import ReportDownloadModal from '../components/ReportDownloadModal';
import shagunSignature from '../assets/ShagunSignature.png';
import csSeal from '../assets/CSSeal.png';
import csWatermark from '../assets/CSWatermark4.png';
import {
  buildBadgeDataUrl,
  buildBadgeRecordForCertificate,
  buildBadgeDesignPreviews,
  downloadBadgeImageFile,
  findBadgeByCertificateId,
  getDefaultBadgeDesignId,
  getDefaultBadgePaletteId,
  getBadgeDesigns,
  getBadgePalettes,
  getStoredBadges,
  saveBadgeForCertificate,
} from '../services/badgeRegistry';
import { findCertificateById, getStoredCertificates, normalizeCertificateRecord } from '../services/certificateRegistry';
import { getAssessmentAttemptById } from '../services/attemptRegistry';
import { buildPublicProfileLink, buildQrCodeImageUrl, buildLinkedInShareUrl } from '../services/shareLinks';
import { downloadScoreReport, previewScoreReport } from '../services/credentialDownloads';
import { savePublicProfileSnapshot } from '../services/publicProfiles';
import { estimateLearningPathCareerPoints, generateLearningPath } from '../services/aiService';
import { buildCertificateReportDownloadMeta } from '../services/reportTemplates';
import { getUsageSummary } from '../services/usageLedger';
import { convertPointsToUsd } from '../services/usageLedger';
import { recordUsage } from '../services/usageLedger';
import { getStoredLearningPaths, saveLearningPath } from '../services/learningPathRegistry';
import { getBadgeDisplayName } from '../services/badgeTitles';

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Manrope:wght@400;500;600;700;800&display=swap');

@media print {
  @page {
    size: landscape;
    margin: 0;
  }
  body {
    margin: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: white;
  }
  .no-print { display: none !important; }
  .print-container {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 16px;
    box-sizing: border-box;
  }
  body * { visibility: hidden; }
  .print-container,
  .print-container * { visibility: visible; }

  /* Print alignment adjustments */
  .certificate-print-container {
    aspect-ratio: 1.414/1 !important;
    padding: 2rem !important;
    box-sizing: border-box !important;
  }
  .certificate-inner-border {
    padding: 2.5rem !important;
    border-width: 4px !important;
  }
  .certificate-print-footer {
    grid-template-columns: 1fr auto auto 1fr !important;
    gap: 1.25rem !important;
    padding-top: 2rem !important;
  }
  .certificate-print-seal-wrapper {
    height: 7rem !important;
    width: 7rem !important;
  }
  .certificate-print-seal-img {
    height: 7.5rem !important;
    width: 7.5rem !important;
  }
  .certificate-print-qr-wrapper {
    padding: 0.5rem !important;
  }
  .certificate-print-qr-img {
    height: 6rem !important;
    width: 6rem !important;
  }
  .certificate-print-sig-wrapper {
    height: 3rem !important;
  }
  .certificate-print-sig-img {
    height: 5rem !important;
  }
}
`;

const BADGE_EDIT_CAREER_POINTS = 500;

function getRandomItem(items = [], fallback = '') {
  if (!Array.isArray(items) || items.length === 0) return fallback;
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

export default function Certificate() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { certificateId } = useParams();
  const { user, logout } = useAuth();
  
  // Refs
  const certificateRef = useRef(null);
  const evidenceRef = useRef(null);
  const learningPathRef = useRef(null);

  // State
  const [copied, setCopied] = useState('');
  const [stats, setStats] = useState({ certs: 0, paths: 0 });
  const [usageSummary, setUsageSummary] = useState({ totalCareerPoints: 0, totalCostUsd: 0 });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scoreReportModalOpen, setScoreReportModalOpen] = useState(false);
  const [badgePreviewOpen, setBadgePreviewOpen] = useState(false);
  const [badgeStoredNotice, setBadgeStoredNotice] = useState(false);
  
  const [learningPath, setLearningPath] = useState(null);
  const [isLearningPathSaved, setIsLearningPathSaved] = useState(false);
  const [isGeneratePathModalOpen, setIsGeneratePathModalOpen] = useState(false);
  const [isGeneratingLearningPath, setIsGeneratingLearningPath] = useState(false);
  
  const [badgeDesignOptions, setBadgeDesignOptions] = useState([]);
  const [badgePaletteOptions, setBadgePaletteOptions] = useState([]);
  const [selectedBadgeDesignId, setSelectedBadgeDesignId] = useState('');
  const [selectedBadgePaletteId, setSelectedBadgePaletteId] = useState('');
  const [badgePreviewUrl, setBadgePreviewUrl] = useState('');
  const [isBadgePreviewLoading, setIsBadgePreviewLoading] = useState(false);
  const [isBadgeActionRunning, setIsBadgeActionRunning] = useState(false);
  const [badgeRefreshToken, setBadgeRefreshToken] = useState(0);

  // Derived Data
  const certificate = useMemo(() => {
    const fromRegistry = certificateId ? findCertificateById(certificateId) : null;
    return normalizeCertificateRecord(fromRegistry || state || {
      studentName: user?.name || 'Student Name',
      skill: 'Professional Certification',
      score: 'Pass',
    });
  }, [certificateId, state, user]);

  const attempt = useMemo(
    () => (certificate.attemptId ? getAssessmentAttemptById(certificate.attemptId) : null),
    [certificate.attemptId],
  );
  
  const storedBadge = useMemo(
    () => findBadgeByCertificateId(certificate.id),
    [badgeRefreshToken, certificate.id],
  );
  
  const qrCodeUrl = buildQrCodeImageUrl(certificate.verifyUrl);
  
  const weakAreas = useMemo(
    () => (attempt?.reportCard?.weakAreas || []).map((item) => item.topic).filter(Boolean).slice(0, 6),
    [attempt],
  );
  
  const learningPathEstimate = useMemo(
    () => estimateLearningPathCareerPoints(certificate.skill, Number.parseInt(certificate.score, 10) || attempt?.score || 0, weakAreas),
    [attempt?.score, certificate.score, certificate.skill, weakAreas],
  );
  
  const reportDownloadMeta = useMemo(
    () => buildCertificateReportDownloadMeta(certificate, user),
    [certificate, user],
  );
  
  const badgeTitle = useMemo(
    () => getBadgeDisplayName(certificate.skill),
    [certificate.skill],
  );

  // Effects
  useEffect(() => {
    setSelectedBadgeDesignId(storedBadge?.designId || getDefaultBadgeDesignId(certificate));
    setSelectedBadgePaletteId(storedBadge?.paletteId || getDefaultBadgePaletteId(certificate));
    setBadgePaletteOptions(getBadgePalettes());
  }, [certificate, storedBadge?.designId, storedBadge?.paletteId]);

  useEffect(() => {
    if (!user) return;
    try {
      const certs = JSON.parse(localStorage.getItem('myCertificates') || '[]');
      const paths = getStoredLearningPaths();
      setStats({ certs: certs.length, paths: paths.length });
      setUsageSummary(getUsageSummary());
    } catch (error) {
      console.error('Error loading certificate page stats:', error);
    }
  }, [user]);

  useEffect(() => {
    const syncUsage = () => setUsageSummary(getUsageSummary());
    window.addEventListener('storage', syncUsage);
    window.addEventListener('focus', syncUsage);
    return () => {
      window.removeEventListener('storage', syncUsage);
      window.removeEventListener('focus', syncUsage);
    };
  }, []);

  useEffect(() => {
    if (!badgePreviewOpen) return;
    let cancelled = false;

    const loadBadgePreviews = async () => {
      try {
        const designs = await buildBadgeDesignPreviews(
          certificate,
          selectedBadgePaletteId || getDefaultBadgePaletteId(certificate),
        );
        if (!cancelled) {
          setBadgeDesignOptions(designs);
        }
      } catch (error) {
        console.error('Failed to load badge design previews:', error);
      }
    };

    loadBadgePreviews();
    return () => { cancelled = true; };
  }, [badgePreviewOpen, certificate]);

  useEffect(() => {
    if (!badgePreviewOpen) return;
    let cancelled = false;

    const loadSelectedBadgePreview = async () => {
      const designId = selectedBadgeDesignId || storedBadge?.designId || getDefaultBadgeDesignId(certificate);
      const paletteId = selectedBadgePaletteId || storedBadge?.paletteId || getDefaultBadgePaletteId(certificate);

      if (!designId || !paletteId) {
        setBadgePreviewUrl('');
        return;
      }

      try {
        if (!cancelled) {
          setIsBadgePreviewLoading(true);
        }
        const previewUrl = await buildBadgeDataUrl(certificate, designId, paletteId);
        if (!cancelled) {
          setBadgePreviewUrl(previewUrl);
        }
      } catch (error) {
        console.error('Failed to render selected badge preview:', error);
        if (!cancelled) {
          setBadgePreviewUrl('');
        }
      } finally {
        if (!cancelled) {
          setIsBadgePreviewLoading(false);
        }
      }
    };

    loadSelectedBadgePreview();

    return () => {
      cancelled = true;
    };
  }, [badgePreviewOpen, certificate, selectedBadgeDesignId, selectedBadgePaletteId, storedBadge?.designId, storedBadge?.paletteId]);

  // Handlers
  const copyValue = async (key, value) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    window.setTimeout(() => setCopied(''), 1800);
  };

  const handleDownloadCertificate = () => window.print();

  const handleDownloadReport = () => setScoreReportModalOpen(true);

  const handleConfirmDownloadReport = () => {
    downloadScoreReport(certificate, attempt);
    setScoreReportModalOpen(false);
  };

  const handlePreviewReport = async () => {
    try {
      await previewScoreReport(certificate, attempt);
    } catch (error) {
      console.error('Failed to preview score report PDF:', error);
      alert('We could not preview the PDF report right now. Please try again.');
    }
  };

  const handleShareLinkedIn = () => {
    window.open(buildLinkedInShareUrl(certificate), '_blank', 'noopener,noreferrer');
  };

  const handleOpenBadgePreview = () => {
    const designId = storedBadge?.designId || getDefaultBadgeDesignId(certificate);
    const paletteId = storedBadge?.paletteId || getDefaultBadgePaletteId(certificate);

    setSelectedBadgeDesignId(designId);
    setSelectedBadgePaletteId(paletteId);
    setBadgeStoredNotice(false);
    setBadgePreviewOpen(true);
  };

  const handleConfirmBadgeEditorUnlock = () => {
    recordUsage({
      action: 'Badge editor unlock',
      area: 'Badges',
      careerPoints: BADGE_EDIT_CAREER_POINTS,
      metadata: {
        certificateId: certificate.id,
        skill: certificate.skill,
      },
    });
    setUsageSummary(getUsageSummary());
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGenerateLearningPath = async () => {
    setIsGeneratingLearningPath(true);
    try {
      const generatedPath = await generateLearningPath(
        certificate.skill,
        Number.parseInt(certificate.score, 10) || attempt?.score || 0,
        weakAreas,
      );
      setLearningPath(generatedPath);
      setIsLearningPathSaved(false);
      setIsGeneratePathModalOpen(false);
      
      // Give DOM time to render then scroll
      setTimeout(() => scrollToSection(learningPathRef), 100);
    } catch (error) {
      console.error('Failed to generate learning path from certificate:', error);
      alert('We could not generate a learning path right now. Please try again.');
    } finally {
      setIsGeneratingLearningPath(false);
    }
  };

  const handleStoreLearningPath = () => {
    if (!learningPath) return;

    const newPath = {
      id: `path-${Date.now()}`,
      title: learningPath.role || certificate.skill,
      role: certificate.skill,
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

  const handleDownloadBadge = async () => {
    setIsBadgeActionRunning(true);
    try {
      const badgeRecord = await buildBadgeRecordForCertificate(
        certificate,
        selectedBadgeDesignId || getDefaultBadgeDesignId(certificate),
        selectedBadgePaletteId || getDefaultBadgePaletteId(certificate),
      );
      await downloadBadgeImageFile(badgeRecord, `${certificate.id}-badge.png`, 'png');
    } catch (error) {
      console.error('Failed to download badge:', error);
      alert('We could not prepare the badge right now. Please try again.');
    } finally {
      setIsBadgeActionRunning(false);
    }
  };

  const handleStoreBadge = async () => {
    setIsBadgeActionRunning(true);
    try {
      const savedBadge = await saveBadgeForCertificate(
        certificate,
        selectedBadgeDesignId || getDefaultBadgeDesignId(certificate),
        selectedBadgePaletteId || getDefaultBadgePaletteId(certificate),
      );
      if (user) {
        try {
          const badges = getStoredBadges().map((badge) => (
            badge.certificateId === savedBadge.certificateId ? savedBadge : badge
          ));
          savePublicProfileSnapshot(user, getStoredCertificates(), undefined, badges);
        } catch (profileError) {
          console.error('Badge stored, but public profile snapshot update failed:', profileError);
        }
      }
      setBadgeRefreshToken((value) => value + 1);
      setBadgeStoredNotice(true);
    } catch (error) {
      console.error('Failed to store badge:', error);
      alert('We could not store the badge right now. Please try again.');
    } finally {
      setIsBadgeActionRunning(false);
    }
  };

  const actionItems = [
    { id: 'back', label: 'My Certificates', icon: ArrowLeft, action: () => navigate('/my-certificates') },
    { id: 'score', label: 'Score Report', icon: FileDown, action: handleDownloadReport },
    { id: 'path', label: 'Learning Path', icon: Brain, action: () => learningPath ? scrollToSection(learningPathRef) : setIsGeneratePathModalOpen(true) },
    { id: 'badge', label: 'Download Badge', icon: Award, action: handleOpenBadgePreview },
    { id: 'linkedin', label: 'Share to LinkedIn', icon: Share2, action: handleShareLinkedIn },
    { id: 'evidence', label: 'Public Link & Evidence', icon: ShieldCheck, action: () => scrollToSection(evidenceRef) },
    { id: 'pdf', label: 'Download Certificate', icon: Download, action: handleDownloadCertificate, highlight: true, wide: true },
  ];

  const userMeta = user?.currentRole && user?.currentCompany
    ? `${user.currentRole} at ${user.currentCompany}`
    : user?.currentRole || user?.currentCompany || user?.plan || 'Free Account';

  const handleNavigate = (path) => {
    setIsMobileNavOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setIsMobileNavOpen(false);
    logout();
    navigate('/');
  };

  return (
    <>
      <style>{globalStyles}</style>

      <ReportDownloadModal
        open={isGeneratePathModalOpen}
        eyebrow="Learning Path Authorization"
        title="Generate Learning Path?"
        description={`Create a tailored roadmap for ${certificate.skill} based on this certified skill and its weak areas.`}
        sections={[
          '4-5 tailored learning modules',
          'Skill-focused study topics for each module',
          'Recommended tests aligned to the credential',
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

      <ReportDownloadModal
        open={scoreReportModalOpen}
        title="Prepare Downloadable Score Report?"
        description="This PDF uses the same reusable CareerSense report template as the test-completion flow, with the latest certificate evidence and the full answer sheet."
        sections={reportDownloadMeta.sections}
        careerPoints={reportDownloadMeta.careerPoints}
        isPremium={true}
        onClose={() => setScoreReportModalOpen(false)}
        onPreview={handlePreviewReport}
        onConfirm={handleConfirmDownloadReport}
        previewLabel="Preview Report"
        confirmLabel="Download Score Report"
        confirmIcon={FileDown}
      />
      
      <BadgePreviewModal
        open={badgePreviewOpen}
        skill={certificate.skill}
        badgeTitle={badgeTitle}
        previewUrl={badgePreviewUrl}
        designOptions={badgeDesignOptions}
        paletteOptions={badgePaletteOptions}
        selectedDesignId={selectedBadgeDesignId}
        selectedPaletteId={selectedBadgePaletteId}
        isPreparing={isBadgeActionRunning}
        isPreviewLoading={isBadgePreviewLoading}
        storedNotice={badgeStoredNotice}
        onSelectDesign={setSelectedBadgeDesignId}
        onSelectPalette={setSelectedBadgePaletteId}
        editCareerPoints={BADGE_EDIT_CAREER_POINTS}
        onConfirmEditCharge={handleConfirmBadgeEditorUnlock}
        onClose={() => setBadgePreviewOpen(false)}
        onStore={handleStoreBadge}
        onDownload={handleDownloadBadge}
      />

      <div className="relative flex h-screen overflow-hidden bg-slate-50 font-sans">
        {isMobileNavOpen ? (
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setIsMobileNavOpen(false)}
            className="fixed inset-0 z-30 bg-slate-950/55 backdrop-blur-[2px] md:hidden"
          />
        ) : null}

        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-[88vw] max-w-[320px] flex-col border-r border-[#12584a] bg-[#08332a] text-slate-300 shadow-2xl transition-transform duration-300 md:static md:z-20 md:max-w-none md:translate-x-0 md:shadow-none ${
            isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
          } ${isSidebarCollapsed ? 'md:w-20' : 'md:w-64'}`}
        >
          <div className={`${isSidebarCollapsed ? 'p-4' : 'p-5'} border-b border-[#0e483c]/70`}>
            <div className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
              <div className="flex cursor-pointer items-center gap-3" onClick={() => handleNavigate('/')} title="CareerSense home">
                <img src="/Logo1.png" alt="CareerSense logo" className="h-10 w-10 shrink-0 object-contain" />
                {!isSidebarCollapsed ? (
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-black tracking-tight text-white whitespace-nowrap">
                      Career<span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">Sense</span>
                    </span>
                    <span className="mt-1 text-[7.5px] font-extrabold uppercase tracking-wider text-slate-400 whitespace-nowrap">
                      Skills Validation & Certification
                    </span>
                  </div>
                ) : null}
              </div>

              {!isSidebarCollapsed ? (
                <button
                  type="button"
                  onClick={() => {
                    if (window.innerWidth < 768) setIsMobileNavOpen(false);
                    else setIsSidebarCollapsed(true);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-teal-900/60 bg-teal-950/40 text-slate-400 transition hover:text-white"
                  aria-label={window.innerWidth < 768 ? 'Close sidebar' : 'Collapse sidebar'}
                >
                  {window.innerWidth < 768 ? <X className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                </button>
              ) : null}
            </div>

            {isSidebarCollapsed ? (
              <button
                type="button"
                onClick={() => setIsSidebarCollapsed(false)}
                className="mt-3 flex w-full items-center justify-center rounded-lg border border-slate-700 bg-slate-700/70 py-2 text-slate-300 transition hover:bg-slate-600/80 hover:text-white"
                aria-label="Expand sidebar"
              >
                <PanelLeftOpen className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <div className={`custom-scrollbar flex-1 space-y-6 overflow-y-auto py-6 ${isSidebarCollapsed ? 'px-2' : 'px-3'}`}>
            <nav className="space-y-1">
              {!isSidebarCollapsed ? (
                <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400/90">Actions</p>
              ) : null}

              {actionItems.map((item) => (
                <SidebarActionItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  collapsed={isSidebarCollapsed}
                  highlight={item.highlight}
                  onClick={item.action}
                />
              ))}
            </nav>
          </div>

          <div className="border-t border-[#12584a] bg-[#08332a] p-3">
            <div className={`group flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-teal-900/40 ${isSidebarCollapsed ? 'justify-center' : 'gap-3'}`}>
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-teal-700 bg-teal-950">
                {user?.avatar ? <img src={user.avatar} alt="Avatar" className="h-full w-full object-cover" /> : <User className="h-4 w-4 text-teal-300" />}
              </div>
              {!isSidebarCollapsed ? (
                <>
                  <div className="flex-1 overflow-hidden">
                    <p className="truncate text-xs font-bold capitalize text-white transition-colors group-hover:text-teal-300">{user?.name}</p>
                    <p className="truncate text-[10px] text-slate-400">{userMeta}</p>
                  </div>
                  <LogOut onClick={handleLogout} className="h-3 w-3 text-slate-500 transition-colors hover:text-red-400" />
                </>
              ) : (
                <LogOut onClick={handleLogout} className="ml-2 h-3 w-3 text-slate-500 transition-colors hover:text-red-400" />
              )}
            </div>
          </div>
        </aside>

        <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
          <header className="shrink-0 border-b border-slate-200 bg-white px-4 py-4 sm:px-8 sm:py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => setIsMobileNavOpen(true)}
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
                <div>
                  <h1 className="text-lg font-bold text-slate-900 sm:text-xl">My Certificate</h1>
                  <p className="mt-0.5 max-w-2xl text-xs leading-6 text-slate-500">View, manage, and share your verified credential details in sync.</p>
                </div>
              </div>

              <div className="hidden items-center gap-4 xl:flex">
                <UsagePill
                  label="CS Points Used"
                  value={String(usageSummary.totalCareerPoints)}
                  accent="amber"
                  icon={<Zap className="h-4 w-4" />}
                />
                <UsagePill
                  label="Bill"
                  value={`$${usageSummary.totalCostUsd.toFixed(4)}`}
                  accent="emerald"
                  icon={<span className="text-sm font-black">$</span>}
                />
                <div className="h-8 w-px bg-slate-100" />
                <CounterPill label="Certs" value={String(stats.certs)} icon={<Award className="h-4 w-4" />} accent="teal" />
                <div className="h-8 w-px bg-slate-100" />
                <CounterPill label="Paths" value={String(stats.paths)} icon={<TrendingUp className="h-4 w-4" />} accent="blue" />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:hidden">
                <CompactStat label="Points" value={String(usageSummary.totalCareerPoints)} />
                <CompactStat label="Bill" value={`$${usageSummary.totalCostUsd.toFixed(4)}`} />
                <CompactStat label="Certs" value={String(stats.certs)} />
                <CompactStat label="Paths" value={String(stats.paths)} />
              </div>
            </div>
          </header>

          <div className="custom-scrollbar flex-1 overflow-y-auto bg-[#f4fafa] px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8 scroll-smooth">
            <div className="mx-auto mb-6 max-w-[1180px] rounded-2xl border border-slate-200/75 bg-white p-4 shadow-sm sm:p-5 no-print">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-slate-900">Certificate Actions</h3>
                  <p className="mt-1 text-sm text-slate-500">Use the sidebar for full record actions or download this certificate instantly from here.</p>
                </div>
                <button
                  onClick={handleDownloadCertificate}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <Download className="h-4 w-4 shrink-0" />
                  Download Certificate
                </button>
              </div>
            </div>

            <div className="scroll-smooth">
          <div className="w-full max-w-[1180px] mx-auto rounded-xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
            <div ref={certificateRef} className="print-container certificate-print-container w-full bg-[#FCFAF6] p-2 text-slate-900 select-none sm:p-4 lg:p-8">
              {/* Certificate Inner Border */}
              <div className="certificate-inner-border relative flex h-full flex-col justify-between border-2 border-[#C5A880] bg-[#FCFAF6] p-3 shadow-inner sm:border-4 sm:p-5 lg:p-10">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={csWatermark}
                    alt=""
                    aria-hidden="true"
                    className="h-auto w-[84%] max-w-none select-none opacity-[0.06] mix-blend-multiply [filter:invert(1)_grayscale(1)_contrast(1.15)] sm:w-[66%] sm:opacity-[0.08]"
                  />
                </div>
                {/* Elegant Corner Ornaments */}
                <div className="pointer-events-none absolute inset-1.5 border border-[#C5A880]/40" />
                <div className="absolute left-2.5 top-2.5 h-6 w-6 border-l-2 border-t-2 border-[#0A1D37]/80" />
                <div className="absolute right-2.5 top-2.5 h-6 w-6 border-r-2 border-t-2 border-[#0A1D37]/80" />
                <div className="absolute bottom-2.5 left-2.5 h-6 w-6 border-b-2 border-l-2 border-[#0A1D37]/80" />
                <div className="absolute bottom-2.5 right-2.5 h-6 w-6 border-b-2 border-r-2 border-[#0A1D37]/80" />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between gap-2 sm:gap-4">
                  <div className="flex min-w-0 items-center gap-2.5 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-20 sm:w-20 sm:p-1">
                  <img
                    src="/Logo.png"
                    alt="CareerSense official mark"
                    className="h-full w-full object-contain"
                  />
                </div>
                    <div className="min-w-0">
                      <div className="text-[0.52rem] font-bold uppercase leading-tight tracking-[0.05em] text-[#0A1D37] sm:text-2xl sm:tracking-[0.1em]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                        CareerSense Academy
                      </div>
                      <div className="mt-0.5 text-[4.5px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-[9.5px] sm:tracking-[0.25em]">
                        Board of Verified Skills & Credentials
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[42%] rounded-sm border border-[#C5A880]/20 bg-white/70 p-1.5 text-right sm:max-w-[34%] sm:p-2">
                    <div className="text-[5px] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-[9px] sm:tracking-[0.2em]">Document Control</div>
                    <div className="mt-1 break-words text-[7px] font-bold leading-tight text-slate-800 sm:text-xs">ID: {certificate.id}</div>
                    <div className="mt-0.5 text-[5px] font-semibold tracking-[0.08em] text-[#C5A880] sm:text-[9px] sm:tracking-wider">Secure Transcript Verified</div>
                  </div>
                </div>

                {/* Body */}
                <div className="relative z-10 my-auto flex flex-col items-center px-1 text-center sm:px-4 lg:px-10">
                  <div className="mb-2 text-[4.5px] font-bold uppercase tracking-[0.16em] text-[#C5A880] sm:mb-5 sm:text-[11px] sm:tracking-[0.4em]">
                    Upon recommendation of the executive evaluation engine
                  </div>

                  <h1 className="text-[0.74rem] font-normal leading-tight tracking-wide text-[#0A1D37] sm:text-2xl lg:text-3xl" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    This Certificate of Proficiency is awarded to
                  </h1>

                  <div className="my-2 w-full max-w-2xl sm:my-5">
                    <h2 className="border-y-2 border-[#C5A880]/30 bg-[#C5A880]/5 py-1.5 text-[1rem] font-bold italic leading-none tracking-tight text-[#0A1D37] sm:py-3 sm:text-4xl lg:text-5xl" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                      {certificate.studentName}
                    </h2>
                  </div>

                  <p className="mt-1 max-w-2xl text-[6.3px] font-medium leading-relaxed text-slate-700 sm:mt-2 sm:text-[14px]">
                    who has successfully demonstrated objective industry capability and completed all technical evaluation parameters benchmarked for verified competence in
                  </p>

                  <h3 className="mt-2 text-[0.66rem] font-bold uppercase leading-tight tracking-[0.04em] text-[#0A1D37] sm:mt-4 sm:text-2xl lg:text-3xl" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {certificate.skill}
                  </h3>

                  <div className="mt-3 grid w-full max-w-3xl grid-cols-3 divide-x divide-slate-200/80 border border-[#C5A880]/30 bg-white shadow-sm sm:mt-8">
                    <MetricCell label="Performance Status" value={certificate.score} />
                    <MetricCell label="Confidence" value={certificate.reportCard?.confidenceScore ? `${certificate.reportCard.confidenceScore}%` : 'N/A'} />
                    <MetricCell label="Trust Score" value={certificate.proctoringSummary?.trustScore ? `${certificate.proctoringSummary.trustScore}%` : 'N/A'} />
                  </div>
                </div>

                {/* Footer Signatures & QR */}
                <div className="certificate-print-footer relative z-10 grid grid-cols-4 items-end gap-x-1 sm:gap-4 border-t border-[#C5A880]/40 pt-3 lg:gap-5 lg:pt-8">
                  <div className="min-w-0 text-left">
                    <div className="text-[5px] sm:text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500 truncate">Date of Validation</div>
                    <div className="mt-0.5 sm:mt-1 text-[7px] sm:text-base font-bold text-slate-900 truncate">{certificate.date}</div>
                    <div className="mt-0.5 text-[4.5px] sm:text-[11px] text-slate-500 truncate">Academic Registry Ledger</div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="certificate-print-seal-wrapper relative flex h-8 w-8 sm:h-28 sm:w-28 items-center justify-center">
                      <img
                        src={csSeal}
                        alt="CareerSense official seal"
                        className="certificate-print-seal-img h-10 w-10 sm:h-28 sm:w-28 object-contain"
                      />
                    </div>
                  </div>

                  <div className="certificate-print-qr-wrapper flex flex-col items-center justify-center text-center">
                    <img src={qrCodeUrl} alt="Verification QR code" className="certificate-print-qr-img h-7 w-7 sm:h-24 sm:w-24 rounded-md" />
                  </div>

                  <div className="min-w-0 text-center">
                    <div className="certificate-print-sig-wrapper flex h-5 sm:h-12 items-end justify-center">
                      <img src={shagunSignature} alt="Authorized Signature" className="certificate-print-sig-img h-6 sm:h-20 w-auto object-contain pb-0.5 mix-blend-multiply" />
                    </div>
                    <div className="border-t border-slate-400/60 pt-1">
                      <div className="text-[6px] sm:text-sm font-bold text-[#0A1D37] truncate">Shagun Nagpal</div>
                      <div className="mt-0.5 text-[4px] sm:text-[9px] font-bold uppercase tracking-tighter text-slate-500 truncate">CEO / Director</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard-Style Credential Details Panels */}
          <div className="no-print mt-8 flex w-full max-w-[1180px] mx-auto flex-col gap-6" ref={evidenceRef}>
            
            {/* Verification & Evidence Section */}
            <div className="grid gap-6 lg:grid-cols-2">
              
              {/* Public Links Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                    <LinkIcon className="h-3 w-3" />
                    Public Links
                  </span>
                </div>
                <div className="space-y-4">
                  <LinkRow label="Certificate URL" value={certificate.certificateUrl} copied={copied === 'certificate'} onCopy={() => copyValue('certificate', certificate.certificateUrl)} />
                  <LinkRow label="Verification Link" value={certificate.verifyUrl} copied={copied === 'verify'} onCopy={() => copyValue('verify', certificate.verifyUrl)} />
                  {certificate.publicProfileId ? (
                    <LinkRow
                      label="Public Profile"
                      value={buildPublicProfileLink(certificate.publicProfileId)}
                      copied={copied === 'profile'}
                      onCopy={() => copyValue('profile', buildPublicProfileLink(certificate.publicProfileId))}
                    />
                  ) : null}
                </div>
              </div>

              {/* Evidence Snapshot Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                    <ShieldCheck className="h-3 w-3" />
                    Evidence Snapshot
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <EvidenceCard label="Question Bank" value={certificate.questionBank?.version || 'Not attached'} />
                  <EvidenceCard label="Attempt Date" value={certificate.date} />
                  <EvidenceCard label="Confidence Score" value={certificate.reportCard?.confidenceScore ? `${certificate.reportCard.confidenceScore}%` : 'N/A'} />
                  <EvidenceCard label="Trust Score" value={certificate.proctoringSummary?.trustScore ? `${certificate.proctoringSummary.trustScore}%` : 'N/A'} />
                </div>
              </div>
            </div>

            {/* Learning Path Module Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" ref={learningPathRef}>
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  <Brain className="h-3 w-3" />
                  Post-Certificate Learning Path
                </span>
                
                {learningPath && (
                  <button
                    type="button"
                    onClick={handleStoreLearningPath}
                    disabled={isLearningPathSaved}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                      isLearningPathSaved 
                        ? 'bg-teal-50 text-teal-700 border border-teal-200' 
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}
                  >
                    {isLearningPathSaved ? <Check className="h-4 w-4" /> : <PlusCircle className="h-4 w-4" />}
                    {isLearningPathSaved ? 'Saved to Profile' : 'Save Path'}
                  </button>
                )}
              </div>

              {!learningPath ? (
                <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center md:flex-row md:text-left">
                  <div>
                    <p className="text-sm font-bold text-slate-900">No learning path generated yet</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Create a tailored roadmap for <span className="font-semibold">{certificate.skill}</span> to advance your career.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsGeneratePathModalOpen(true)}
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700 shadow-sm"
                  >
                    <Sparkles className="h-4 w-4" />
                    Generate Learning Path
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-slate-900">{learningPath.role}</h4>
                    <p className="mt-1 text-sm text-slate-600 max-w-3xl">{learningPath.description}</p>
                  </div>
                  {learningPath.modules?.map((module, index) => (
                    <div key={`${module.title}-${index}`} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-black text-slate-700">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-base font-bold text-slate-900">{module.title}</p>
                            <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                              {module.estimatedTime || 'Planned'}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{module.description}</p>

                          {Array.isArray(module.topics) && module.topics.length > 0 && (
                            <div className="mt-5">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">What To Learn</p>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {module.topics.map((topic, topicIndex) => (
                                  <span
                                    key={`${module.title}-topic-${topicIndex}`}
                                    className="rounded-md border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {Array.isArray(module.recommendedTests) && module.recommendedTests.length > 0 && (
                            <div className="mt-5 border-t border-slate-100 pt-4">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Recommended Next Steps</p>
                              <ul className="mt-2 space-y-2">
                                {module.recommendedTests.map((testName, testIndex) => (
                                  <li key={`${module.title}-test-${testIndex}`} className="flex items-center text-sm font-medium text-slate-700">
                                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                                    {testName}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
          </div>
        </main>
      </div>

      <BadgePreviewModal
        open={badgePreviewOpen}
        skill={certificate.skill}
        badgeTitle={badgeTitle}
        previewUrl={badgePreviewUrl}
        designOptions={badgeDesignOptions}
        paletteOptions={badgePaletteOptions}
        selectedDesignId={selectedBadgeDesignId}
        selectedPaletteId={selectedBadgePaletteId}
        isPreparing={isBadgeActionRunning}
        isPreviewLoading={isBadgePreviewLoading}
        storedNotice={badgeStoredNotice}
        isAlreadySaved={Boolean(storedBadge) && storedBadge.designId === selectedBadgeDesignId && storedBadge.paletteId === selectedBadgePaletteId}
        editCareerPoints={BADGE_EDIT_CAREER_POINTS}
        onSelectDesign={(designId) => setSelectedBadgeDesignId(designId)}
        onSelectPalette={(paletteId) => setSelectedBadgePaletteId(paletteId)}
        onConfirmEditCharge={handleConfirmBadgeEditorUnlock}
        onClose={() => setBadgePreviewOpen(false)}
        onStore={handleStoreBadge}
        onDownload={handleDownloadBadge}
      />
    </>
  );
}

function SidebarActionItem({ icon: Icon, label, highlight = false, collapsed = false, onClick }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`group mb-1 flex w-full items-center rounded-lg text-xs font-medium transition-all ${
        collapsed ? 'justify-center px-2 py-3' : 'justify-between px-3 py-2.5'
      } ${
        highlight ? 'border border-teal-500/20 bg-teal-600/10 text-teal-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <Icon className={`h-4 w-4 ${highlight ? 'text-teal-400' : 'text-slate-500 transition-colors group-hover:text-white'}`} />
        {!collapsed ? label : null}
      </div>
    </button>
  );
}

function CompactStat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-slate-900">{value}</p>
    </div>
  );
}

function UsagePill({ label, value, icon, accent }) {
  const tones = {
    amber: 'bg-amber-50 text-amber-500',
    emerald: 'bg-emerald-50 text-emerald-600',
  };

  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${tones[accent]}`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
        <p className="text-sm font-black text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function CounterPill({ label, value, icon, accent }) {
  const tones = {
    teal: 'bg-teal-50 text-teal-600',
    blue: 'bg-blue-50 text-blue-600',
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${tones[accent]}`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase text-slate-400">{label}</p>
        <p className="text-sm font-black text-slate-900">{value}</p>
      </div>
    </div>
  );
}

// Subcomponents
function LinkRow({ label, value, copied, onCopy }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
        <button 
          onClick={onCopy} 
          className="inline-flex w-fit items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-teal-600" /> : <Copy className="h-3.5 w-3.5 text-slate-400" />}
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
      <a href={value} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-between gap-3 text-sm font-medium text-teal-600 transition-colors hover:text-teal-800">
        <span className="truncate">{value}</span>
        <ExternalLink className="h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100" />
      </a>
    </div>
  );
}

function EvidenceCard({ label, value }) {
  return (
    <div className="flex flex-col justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-bold text-slate-900 truncate">{value}</p>
    </div>
  );
}

function MetricCell({ label, value, compact = false }) {
  return (
    <div className="px-4 py-3">
      <div className="text-[8px] font-bold uppercase tracking-wider text-[#C5A880]">{label}</div>
      <div className={`mt-1 font-bold text-[#0A1D37] ${compact ? 'text-xs break-all' : 'text-sm sm:text-base'}`}>{value}</div>
    </div>
  );
}
