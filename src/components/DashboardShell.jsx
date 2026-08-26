import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUsageSummary } from '../services/usageLedger';
import { isExemptUser } from '../services/pointsQuota';
import { getStoredBadges } from '../services/badgeRegistry';
import { getStoredCertificates } from '../services/certificateRegistry';
import { getStoredLearningPaths } from '../services/learningPathRegistry';
import { useCertifiStore } from '../store/useCertifiStore';
import {
  Award,
  BookOpen,
  Zap,
  Brain,
  LayoutDashboard,
  LogOut,
  TrendingUp,
  Activity,
  User,
  IdCard,
  DollarSignIcon,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  X,
  Medal,
  ChevronDown,
} from 'lucide-react';

function SidebarItem({ icon: Icon, label, active = false, badge, collapsed = false, iconClass = 'text-slate-400', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-current={active ? 'page' : undefined}
      className={`group relative flex w-full items-center rounded-xl text-xs transition-[background-color,color,transform] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none ${collapsed ? 'justify-center px-2 py-3' : 'justify-between px-3 py-2.5'
        } ${active ? 'bg-teal-800/65 font-semibold text-white' : 'font-medium text-slate-300 hover:bg-white/[0.07] hover:text-white active:scale-[0.98] motion-reduce:active:scale-100'
        }`}
    >
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <Icon className={`h-[18px] w-[18px] shrink-0 ${active ? 'text-teal-300' : `${iconClass} transition-colors group-hover:brightness-125`}`} />
        {!collapsed ? label : null}
      </div>
      {badge !== undefined && badge !== null && !collapsed ? (
        <span className="rounded-full bg-teal-800 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-teal-200 ring-1 ring-inset ring-teal-700">
          {badge}
        </span>
      ) : null}
      {collapsed ? (
        <span className="pointer-events-none absolute left-full z-50 ml-3 -translate-x-1 whitespace-nowrap rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-xl transition-[opacity,transform] duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
          {label}
        </span>
      ) : null}
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

export default function DashboardShell({
  title,
  subtitle,
  activeTab = 'dashboard',
  topBar = null,
  children,
  contentClassName = 'px-4 pb-10 sm:px-8 sm:pb-12',
  scrollHeader = false,
}) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({ certs: 0, badges: 0, paths: 0 });
  const [usageSummary, setUsageSummary] = useState({ totalCareerPoints: 0, totalCostUsd: 0 });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => (
    typeof window !== 'undefined' && localStorage.getItem('careerSenseSidebarCollapsed') === 'true'
  ));
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      setStats({
        certs: getStoredCertificates().length,
        badges: getStoredBadges().length,
        paths: getStoredLearningPaths().length,
      });
      setUsageSummary(getUsageSummary());
    } catch (error) {
      console.error('Error loading dashboard stats:', error);
    }
  }, [user, navigate]);

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
    localStorage.setItem('careerSenseSidebarCollapsed', String(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

  useEffect(() => {
    if (!isUserMenuOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!userMenuRef.current?.contains(event.target)) setIsUserMenuOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsUserMenuOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isUserMenuOpen]);

  if (!user) return null;

  const handleLogout = () => {
    setIsMobileNavOpen(false);
    logout();
    navigate('/');
  };

  const handleNavigate = (path) => {
    setIsMobileNavOpen(false);
    navigate(path);
  };

  const storeCerts = useCertifiStore((state) => state.certificates);
  const storeBadges = useCertifiStore((state) => state.badges);
  const storePaths = useCertifiStore((state) => state.learningPaths);
  const storeUsageLogs = useCertifiStore((state) => state.usageLogs);
  const isSynced = useCertifiStore((state) => state.isSynced);

  const isClerkLoggedIn = typeof window !== 'undefined' && !!window.clerkUserId;

  const displayStats = {
    certs: isClerkLoggedIn ? (isSynced ? storeCerts.length : 0) : stats.certs,
    badges: isClerkLoggedIn ? (isSynced ? storeBadges.length : 0) : stats.badges,
    paths: isClerkLoggedIn ? (isSynced ? storePaths.length : 0) : stats.paths,
    totalCareerPoints: isClerkLoggedIn ? (isSynced ? storeUsageLogs.reduce((sum, log) => sum + (log.careerPoints || 0), 0) : 0) : usageSummary.totalCareerPoints,
    totalCostUsd: isClerkLoggedIn ? (isSynced ? storeUsageLogs.reduce((sum, log) => sum + (log.costUsd || 0), 0) : 0) : usageSummary.totalCostUsd,
  };

  const userMeta = user.currentRole && user.currentCompany
    ? `${user.currentRole} at ${user.currentCompany}`
    : user.currentRole || user.currentCompany || user.plan || 'Free Account';

  const pointsTooltip = isExemptUser(user?.email)
    ? 'Free Account Limit : Unlimited Career Points (Test Account)'
    : 'Free Account Limit : 15000 Career Points';
  const billTooltip = 'Free Account : Bill getting paid by Instructor';
  const pointsLimit = isExemptUser(user?.email) ? null : 15000;
  const pointsProgress = pointsLimit
    ? Math.min(100, Math.round((displayStats.totalCareerPoints / pointsLimit) * 100))
    : 100;
  const profileCompletionChecks = [
    Boolean(user?.name?.trim()),
    Boolean(user?.email?.trim()),
    Boolean(user?.avatar && !user.avatar.includes('ui-avatars.com')),
    Boolean(user?.phone?.trim()),
    Boolean(user?.currentRole?.trim()),
    Boolean(user?.currentCompany?.trim()),
    Boolean(user?.location?.trim()),
    Boolean(user?.bio?.trim()),
    Boolean(user?.education?.length),
    Boolean(user?.certifications?.length || user?.awards?.length),
  ];
  const profileCompletion = Math.round(
    (profileCompletionChecks.filter(Boolean).length / profileCompletionChecks.length) * 100,
  );

  const navigationSections = [
    {
      label: 'Workspace',
      iconClass: 'text-cyan-400',
      items: [
        { icon: IdCard, label: 'My Profile', tab: 'profile', path: '/my-profile', badge: `${profileCompletion}%` },
        { icon: LayoutDashboard, label: 'Dashboard', tab: 'dashboard', path: '/dashboard' },
        { icon: Activity, label: 'Practice Hub', tab: 'practice-hub', path: '/practice-hub' },
        { icon: BookOpen, label: 'Learning Paths', tab: 'learning-paths', path: '/learning-paths', badge: displayStats.paths },
      ],
    },
    {
      label: 'Achievements',
      iconClass: 'text-violet-400',
      items: [
        { icon: Award, label: 'Certificates', tab: 'certificates', path: '/my-certificates', badge: displayStats.certs },
        { icon: Medal, label: 'Badges', tab: 'badges', path: '/my-badges', badge: displayStats.badges },
      ],
    },
    {
      label: 'Tools',
      iconClass: 'text-amber-400',
      items: [
        { icon: Brain, label: 'Create Assessment', tab: 'create-assessment', path: '/create-assessment', badge: 'Live' },
      ],
    },
    {
      label: 'Account',
      iconClass: 'text-rose-400',
      items: [
        { icon: DollarSignIcon, label: 'Usage & Billing', tab: 'usage-billing', path: '/usage-billing' },
      ],
    },
  ];

  const usageBadges = (
    <>
      <div className="group relative cursor-pointer">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition-all hover:border-amber-300 hover:shadow-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500">
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">CS Points Used</p>
            <p className="text-sm font-black text-slate-900">{displayStats.totalCareerPoints}</p>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 opacity-0 transition-all duration-150 ease-out group-hover:translate-y-0.5 group-hover:opacity-100">
          <div className="relative whitespace-nowrap rounded-xl border border-teal-500/30 bg-slate-900/95 px-3 py-1.5 text-xs font-semibold text-teal-300 shadow-xl shadow-slate-950/20 backdrop-blur-md">
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-teal-500/30 bg-slate-900/95" />
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              {pointsTooltip}
            </span>
          </div>
        </div>
      </div>

      <div className="group relative cursor-pointer">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <span className="text-sm font-black">$</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Bill</p>
            <p className="text-sm font-black text-slate-900">${displayStats.totalCostUsd.toFixed(4)}</p>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 opacity-0 transition-all duration-150 ease-out group-hover:translate-y-0.5 group-hover:opacity-100">
          <div className="relative whitespace-nowrap rounded-xl border border-teal-500/30 bg-slate-900/95 px-3 py-1.5 text-xs font-semibold text-teal-300 shadow-xl shadow-slate-950/20 backdrop-blur-md">
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-teal-500/30 bg-slate-900/95" />
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {billTooltip}
            </span>
          </div>
        </div>
      </div>
    </>
  );

  const metricsPanel = (
    <>
      <div className="hidden items-center gap-4 xl:flex">
        {usageBadges}
        <div className="h-8 w-px bg-slate-100" />
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <Award className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-400">Certs</p>
            <p className="text-sm font-black text-slate-900">{displayStats.certs}</p>
          </div>
        </div>
        <div className="h-8 w-px bg-slate-100" />
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-400">Paths</p>
            <p className="text-sm font-black text-slate-900">{displayStats.paths}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:hidden">
        <CompactStat label="Points" value={String(displayStats.totalCareerPoints)} />
        <CompactStat label="Bill" value={`$${displayStats.totalCostUsd.toFixed(4)}`} />
        <CompactStat label="Certs" value={String(displayStats.certs)} />
        <CompactStat label="Paths" value={String(displayStats.paths)} />
      </div>
    </>
  );

  return (
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
        className={`fixed inset-y-0 left-0 z-40 flex w-[88vw] max-w-[320px] flex-col border-r border-[#0e483c] bg-[#04201b] text-slate-300 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none md:static md:z-20 md:max-w-none md:translate-x-0 md:shadow-none ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
          } ${isSidebarCollapsed ? 'md:w-20' : 'md:w-64'}`}
      >
        <div className={`${isSidebarCollapsed ? 'p-4' : 'p-5'} border-b border-[#0e483c]/70`}>
          <div className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
            <div className="flex cursor-pointer items-center gap-3" onClick={() => handleNavigate('/')} title="CareerSense home">
              <img
                src="/Logo1.png"
                alt="CareerSense logo"
                className="h-10 w-10 shrink-0 object-contain"
              />
              {!isSidebarCollapsed ? (
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-black tracking-tight text-white whitespace-nowrap">
                    Career<span className="text-teal-300">Sense</span>
                  </span>
                  {/* <span className="mt-1 text-[7.5px] font-extrabold uppercase tracking-wider text-slate-400 whitespace-nowrap">
                    Skills Validation & Certification
                  </span> */}
                </div>
              ) : null}
            </div>

            {!isSidebarCollapsed ? (
              <button
                type="button"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setIsMobileNavOpen(false);
                  } else {
                    setIsSidebarCollapsed(true);
                  }
                }}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-teal-900/60 bg-teal-950/40 text-slate-400 transition hover:text-white"
                aria-label={window.innerWidth < 768 ? 'Close sidebar' : 'Collapse sidebar'}
                title={window.innerWidth < 768 ? 'Close sidebar' : 'Collapse sidebar'}
              >
                {window.innerWidth < 768 ? <X className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
              </button>
            ) : null}
          </div>

          {isSidebarCollapsed ? (
            <button
              type="button"
              onClick={() => setIsSidebarCollapsed(false)}
              className="mt-3 flex w-full items-center justify-center rounded-lg border border-teal-900/60 bg-teal-950/40 py-2 text-slate-400 transition hover:text-white"
              aria-label="Expand sidebar"
              title="Expand sidebar"
            >
              <PanelLeftOpen className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <div className={`custom-scrollbar flex-1 overflow-y-auto py-5 ${isSidebarCollapsed ? 'px-2' : 'px-3'}`}>
          <nav className="space-y-5" aria-label="Dashboard navigation">
            {navigationSections.map((section) => (
              <div key={section.label}>
                {!isSidebarCollapsed ? (
                  <p className="mb-1.5 px-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-teal-300/55">
                    {section.label}
                  </p>
                ) : (
                  <div className="mx-2 mb-2 h-px bg-teal-900/70" aria-hidden="true" />
                )}
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <SidebarItem
                      key={item.tab}
                      icon={item.icon}
                      label={item.label}
                      badge={item.badge}
                      iconClass={section.iconClass}
                      active={activeTab === item.tab}
                      collapsed={isSidebarCollapsed}
                      onClick={() => handleNavigate(item.path)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {!isSidebarCollapsed ? (
            <div className="mt-6 rounded-xl bg-white/[0.055] p-3 ring-1 ring-inset ring-white/[0.07]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Career points</p>
                <p className="text-[10px] font-semibold tabular-nums text-teal-300">
                  {pointsLimit ? `${pointsProgress}%` : 'Unlimited'}
                </p>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-950/45">
                <div
                  className="h-full origin-left rounded-full bg-teal-400 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none"
                  style={{ transform: `scaleX(${pointsProgress / 100})` }}
                />
              </div>
              <p className="mt-2 text-[10px] text-slate-400">
                {displayStats.totalCareerPoints.toLocaleString()}{pointsLimit ? ` of ${pointsLimit.toLocaleString()} used` : ' points used'}
              </p>
            </div>
          ) : null}
        </div>

        <div ref={userMenuRef} className="relative border-t border-[#0e483c] bg-[#031913]/90 p-3">
          {isUserMenuOpen ? (
            <div className={`absolute bottom-full mb-2 overflow-hidden rounded-xl border border-teal-900/80 bg-[#071f1a] p-1.5 shadow-2xl shadow-black/30 ${isSidebarCollapsed ? 'left-2 w-52' : 'inset-x-3'}`}>
              <button
                type="button"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  handleNavigate('/my-profile');
                }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.07] hover:text-white"
              >
                <IdCard className="h-4 w-4 text-cyan-400" />
                Manage profile
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  handleNavigate('/usage-billing');
                }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.07] hover:text-white"
              >
                <DollarSignIcon className="h-4 w-4 text-amber-400" />
                Usage & Billing
              </button>
              <div className="my-1 h-px bg-teal-900/70" />
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-semibold text-rose-300 transition-colors hover:bg-rose-950/45 hover:text-rose-200"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setIsUserMenuOpen((open) => !open)}
            className={`group flex w-full items-center rounded-xl p-2 text-left transition-colors hover:bg-white/[0.07] ${isSidebarCollapsed ? 'justify-center' : 'gap-3'}`}
            aria-label="Open account menu"
            aria-expanded={isUserMenuOpen}
          >
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-teal-700 bg-teal-950">
              {user.avatar ? <img src={user.avatar} alt="Avatar" className="h-full w-full object-cover" /> : <User className="h-4 w-4 text-teal-300" />}
            </div>
            {!isSidebarCollapsed ? (
              <>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold capitalize text-white transition-colors group-hover:text-teal-300">{user.name}</p>
                  <p className="truncate text-[10px] text-slate-400">{userMeta}</p>
                </div>
                <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </>
            ) : null}
          </button>
        </div>
      </aside>

      <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
        {scrollHeader ? (
          <div className={`custom-scrollbar flex-1 overflow-y-auto ${contentClassName}`}>
            <header className="mx-[-1rem] mb-6 border-b border-slate-200 bg-white px-4 py-4 sm:mx-[-2rem] sm:px-8 sm:py-5">
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
                    <h1 className="text-lg font-bold text-slate-900 sm:text-xl">{title}</h1>
                    {subtitle ? <p className="mt-0.5 max-w-2xl text-xs leading-6 text-slate-500">{subtitle}</p> : null}
                  </div>
                </div>
                {metricsPanel}
              </div>
            </header>

            {topBar ? <div>{topBar}</div> : null}
            {children}
          </div>
        ) : (
          <>
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
                    <h1 className="text-lg font-bold text-slate-900 sm:text-xl">{title}</h1>
                    {subtitle ? <p className="mt-0.5 text-xs leading-6 text-slate-500">{subtitle}</p> : null}
                  </div>
                </div>
                {metricsPanel}
              </div>
            </header>

            {topBar ? <div className="shrink-0">{topBar}</div> : null}

            <div className={`custom-scrollbar flex-1 overflow-y-auto ${contentClassName}`}>
              {children}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
