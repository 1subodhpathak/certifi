import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Activity,
  Award,
  BookOpen,
  CalendarDays,
  Clock3,
  Flame,
  Gauge,
  GraduationCap,
  LineChart,
  Loader2,
  Sparkles,
  Target,
  Trophy,
  Wallet,
  ArrowRight,
  Brain
} from 'lucide-react';
import DashboardShell from '../components/DashboardShell';
import { useAuth } from '../context/AuthContext';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { useCertifiStore } from '../store/useCertifiStore';
import { getStoredAssessmentAttempts } from '../services/attemptRegistry';
import { getStoredCertificates } from '../services/certificateRegistry';
import { getUsageLogs, getUsageSummary } from '../services/usageLedger';
import { getStoredLearningPaths } from '../services/learningPathRegistry';
import { PRACTICE_ASSESSMENTS } from '../data/practiceAssessmentsData';
import { getPassingThreshold } from '../services/assessmentThresholds';

const formatDateLabel = (value) =>
  value.toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const formatTimeLabel = (value) =>
  value.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

const formatShortDate = (value) => {
  if (!value) return 'No activity yet';
  return new Date(value).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const buildDailyStreak = (attempts = []) => {
  const uniqueDays = Array.from(
    new Set(
      attempts
        .map((attempt) => {
          const source = attempt.createdAt || attempt.completedAt;
          if (!source) return null;
          const date = new Date(source);
          if (Number.isNaN(date.getTime())) return null;
          return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        })
        .filter(Boolean),
    ),
  )
    .map((value) => new Date(`${value}T00:00:00`))
    .sort((left, right) => right.getTime() - left.getTime());

  if (uniqueDays.length === 0) return 0;

  let streak = 1;
  for (let index = 1; index < uniqueDays.length; index += 1) {
    const previous = uniqueDays[index - 1];
    const current = uniqueDays[index];
    const diffDays = Math.round((previous.getTime() - current.getTime()) / 86400000);
    if (diffDays === 1) {
      streak += 1;
      continue;
    }
    break;
  }

  return streak;
};

const buildProfileProgress = (user) => {
  if (!user) return 0;

  const checks = [
    Boolean(user.name),
    Boolean(user.email),
    Boolean(user.phone),
    Boolean(user.currentRole),
    Boolean(user.currentCompany),
    Boolean(user.location),
    Boolean(user.bio),
    Array.isArray(user.education) && user.education.length > 0,
    Array.isArray(user.certifications) && user.certifications.length > 0,
    Array.isArray(user.awards) && user.awards.length > 0,
  ];

  const completed = checks.filter(Boolean).length;
  return Math.round((completed / checks.length) * 100);
};

function MetricCard({ icon: Icon, label, value, hint, tone = 'slate' }) {
  const tones = {
    slate: 'bg-slate-50 text-slate-600 ring-slate-200/60',
    teal: 'bg-teal-50/50 text-teal-600 ring-teal-200/60',
    amber: 'bg-amber-50/50 text-amber-600 ring-amber-200/60',
    emerald: 'bg-emerald-50/50 text-emerald-600 ring-emerald-200/60',
    violet: 'bg-violet-50/50 text-violet-600 ring-violet-200/60',
    blue: 'bg-blue-50/50 text-blue-600 ring-blue-200/60',
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200/75 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
        </div>
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${tones[tone] || tones.slate} transition-transform group-hover:scale-105`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">{hint}</p>
    </article>
  );
}

function SectionCard({ title, subtitle, action = null, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-slate-200/75 bg-white shadow-sm ${className}`}>
      <div className="border-b border-slate-100 px-6 py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      </div>
      <div className="p-6">{children}</div>
    </section>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [now, setNow] = useState(new Date());
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, navigate, user]);

  useEffect(() => {
    const sync = () => setRefreshKey((current) => current + 1);
    window.addEventListener('storage', sync);
    window.addEventListener('focus', sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('focus', sync);
    };
  }, []);

  const dashboardData = useMemo(() => {
    const attempts = getStoredAssessmentAttempts();
    const certificates = getStoredCertificates();
    const learningPaths = getStoredLearningPaths();
    const usageSummary = getUsageSummary();
    const usageLogs = getUsageLogs();
    const availableTests = Object.keys(PRACTICE_ASSESSMENTS || {}).length;
    const highestScore = attempts.reduce((best, attempt) => Math.max(best, Number(attempt.score || 0)), 0);
    const passedAttempts = attempts.filter((attempt) => Number(attempt.score || 0) >= getPassingThreshold(attempt.skill || attempt.title, attempt.category)).length;
    const averageScore = attempts.length
      ? Math.round(attempts.reduce((sum, attempt) => sum + Number(attempt.score || 0), 0) / attempts.length)
      : 0;
    const uniqueSkills = new Set(attempts.map((attempt) => attempt.skill || attempt.title).filter(Boolean)).size;
    const streak = buildDailyStreak(attempts);
    const profileProgress = buildProfileProgress(user);
    const latestAttempt = attempts[0] || null;
    const recentActivity = [...usageLogs]
      .sort((left, right) => new Date(right.createdAt || 0).getTime() - new Date(left.createdAt || 0).getTime())
      .slice(0, 5);

    return {
      attempts,
      certificates,
      learningPaths: Array.isArray(learningPaths) ? learningPaths : [],
      usageSummary,
      availableTests,
      highestScore,
      passedAttempts,
      averageScore,
      uniqueSkills,
      streak,
      profileProgress,
      latestAttempt,
      recentActivity,
    };
  }, [refreshKey, user]);

  const { isSignedIn } = useClerkAuth();
  const isSynced = useCertifiStore((state) => state.isSynced);

  if (isSignedIn && !isSynced) {
    return (
      <DashboardShell
        title="Workspace Dashboard"
        subtitle="Welcome back! Here is your professional credentialing summary."
        activeTab="dashboard"
        contentClassName="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 bg-slate-50 min-h-screen"
      >
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
          <p className="text-sm font-medium text-slate-500 font-sans">Syncing platform credentials...</p>
        </div>
      </DashboardShell>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4fafa] font-sans">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white px-6 py-4 text-slate-700 shadow-sm">
          <Loader2 className="h-5 w-5 animate-spin text-teal-600" />
          <span className="text-sm font-medium">Authenticating workspace...</span>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <DashboardShell
      title="Platform Overview"
      subtitle="Your centralized control center for certifications, performance analytics, and usage."
      activeTab="dashboard"
      contentClassName="bg-[#f4fafa] px-4 pb-12 pt-6 sm:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Executive Header */}
        <section className="relative overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-white pointer-events-none" />
          <div className="relative flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between sm:p-8">
            <div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500 mb-3">
                <span className="flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-xs text-teal-700 ring-1 ring-teal-200/50">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  System Active
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {formatDateLabel(now)}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" />
                  {formatTimeLabel(now)}
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Welcome back, {user.name || 'Candidate'}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                Track your certification progress, analyze assessment performance, and monitor active learning paths across your organization's workspace.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate('/practice-hub')}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              >
                Practice Hub
              </button>
              <button
                type="button"
                onClick={() => navigate('/create-assessment')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <Sparkles className="h-4 w-4" />
                Create Assessment
              </button>
            </div>
          </div>
        </section>

        {/* Core Metrics Grid */}
        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard icon={Activity} label="Assessments Completed" value={dashboardData.attempts.length} hint="Total evaluations completed across all skills." tone="teal" />
          <MetricCard icon={Award} label="Verified Credentials" value={dashboardData.certificates.length} hint="Secure certificates generated and stored." tone="emerald" />
          <MetricCard icon={BookOpen} label="Learning Paths" value={dashboardData.learningPaths.length} hint="AI-generated roadmaps currently active." tone="blue" />
          <MetricCard icon={Target} label="Pass Rate" value={`${dashboardData.attempts.length ? Math.round((dashboardData.passedAttempts / dashboardData.attempts.length) * 100) : 0}%`} hint="Percentage of assessments meeting the threshold." tone="violet" />
          
          <MetricCard icon={Gauge} label="Compute Tokens" value={dashboardData.usageSummary.totalCareerPoints.toLocaleString()} hint="Total API points consumed for generations." tone="amber" />
          <MetricCard icon={Wallet} label="Usage Billing" value={`$${dashboardData.usageSummary.totalCostUsd.toFixed(4)}`} hint="Estimated infrastructural cost incurred." tone="teal" />
          <MetricCard icon={Flame} label="Activity Streak" value={`${dashboardData.streak} Day${dashboardData.streak === 1 ? '' : 's'}`} hint="Consecutive days of active platform usage." tone="amber" />
          <MetricCard icon={Trophy} label="Peak Performance" value={`${dashboardData.highestScore}%`} hint="Highest recorded score across all attempts." tone="teal" />
        </section>

        {/* Detailed Panels */}
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Performance Overview */}
          <SectionCard
            title="Performance Analytics"
            subtitle="Aggregate data across your evaluation history."
            className="flex flex-col"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-5">
                <p className="text-xs font-medium text-slate-500">Average Score</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="text-3xl font-semibold text-slate-900">{dashboardData.averageScore}%</p>
                  <span className="text-xs font-medium text-slate-400">across all tests</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-5">
                <p className="text-xs font-medium text-slate-500">Skills Validated</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="text-3xl font-semibold text-slate-900">{dashboardData.uniqueSkills}</p>
                  <span className="text-xs font-medium text-slate-400">distinct domains</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-teal-100 bg-teal-50/30 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-slate-900">Profile Completeness</p>
                    <p className="text-sm font-medium text-teal-700">{dashboardData.profileProgress}%</p>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-teal-100">
                    <div
                      className="h-full rounded-full bg-teal-600 transition-all duration-500 ease-in-out"
                      style={{ width: `${dashboardData.profileProgress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Complete profiles ensure verified credentials map accurately to your professional identity.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/my-profile')}
                  className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
                >
                  Update Profile <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {dashboardData.latestAttempt && (
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs font-medium text-slate-500 mb-3">Latest Assessment Activity</p>
                <div className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
                  <div>
                    <p className="font-medium text-slate-900">{dashboardData.latestAttempt.title || dashboardData.latestAttempt.skill}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{formatShortDate(dashboardData.latestAttempt.createdAt)}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${Number(dashboardData.latestAttempt.score) >= getPassingThreshold(dashboardData.latestAttempt.skill || dashboardData.latestAttempt.title, dashboardData.latestAttempt.category) ? 'text-emerald-600' : 'text-slate-700'}`}>
                      {dashboardData.latestAttempt.score}%
                    </p>
                    <p className="text-xs text-slate-400">Score</p>
                  </div>
                </div>
              </div>
            )}
          </SectionCard>

          {/* Ledger / Recent Activity */}
          <SectionCard
            title="Usage Ledger"
            subtitle="Recent infrastructural computations and transactions."
            action={
              <button
                type="button"
                onClick={() => navigate('/usage-billing')}
                className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
              >
                View Full Ledger
              </button>
            }
            className="flex flex-col"
          >
            {dashboardData.recentActivity.length > 0 ? (
              <div className="flex flex-col gap-3">
                {dashboardData.recentActivity.map((activity) => (
                  <div key={activity.id} className="group flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        activity.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Activity className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-slate-500">{activity.area || 'System'}</span>
                          <span className="text-[10px] text-slate-300">•</span>
                          <span className="text-xs text-slate-400">{formatShortDate(activity.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">{activity.careerPoints} CPs</p>
                      <p className="text-xs text-slate-500 mt-0.5">${Number(activity.costUsd || 0).toFixed(4)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full min-h-[240px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                <Gauge className="h-8 w-8 text-slate-300 mb-3" />
                <p className="text-sm font-medium text-slate-900">No ledger events recorded</p>
                <p className="mt-1 text-xs text-slate-500 max-w-[200px]">
                  Compute events will appear here once you generate content.
                </p>
              </div>
            )}
          </SectionCard>
          
        </section>
      </div>
    </DashboardShell>
  );
}