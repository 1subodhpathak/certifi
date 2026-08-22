import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUsageSummary } from '../services/usageLedger';
import { isExemptUser } from '../services/pointsQuota';
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
  Users,
} from 'lucide-react';

function SidebarItem({ icon: Icon, label, active = false, badge, collapsed = false, onClick }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`group mb-1 flex w-full items-center rounded-lg text-xs font-medium transition-all ${
        collapsed ? 'justify-center px-2 py-3' : 'justify-between px-3 py-2.5'
      } ${
        active ? 'border border-teal-500/30 bg-teal-600/20 text-teal-300 font-semibold shadow-2xs' : 'text-slate-300 hover:bg-teal-900/40 hover:text-white'
      }`}
    >
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <Icon className={`h-4 w-4 ${active ? 'text-teal-300' : 'text-slate-400 transition-colors group-hover:text-white'}`} />
        {!collapsed ? label : null}
      </div>
      {badge && !collapsed ? (
        <span className="rounded-full bg-teal-500 px-1.5 py-0.5 text-[9px] font-bold uppercase text-white shadow-sm shadow-teal-500/50">
          {badge}
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
  const [stats, setStats] = useState({ certs: 0, paths: 0 });
  const [usageSummary, setUsageSummary] = useState({ totalCareerPoints: 0, totalCostUsd: 0 });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      const certs = JSON.parse(localStorage.getItem('myCertificates') || '[]');
      const paths = JSON.parse(localStorage.getItem('myLearningPaths') || '[]');
      setStats({ certs: certs.length, paths: paths.length });
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
  const storePaths = useCertifiStore((state) => state.learningPaths);
  const storeUsageLogs = useCertifiStore((state) => state.usageLogs);
  const isSynced = useCertifiStore((state) => state.isSynced);

  const isClerkLoggedIn = typeof window !== 'undefined' && !!window.clerkUserId;

  const displayStats = {
    certs: isClerkLoggedIn ? (isSynced ? storeCerts.length : 0) : stats.certs,
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

  const usageBadges = (
    <>
      <div
        title={pointsTooltip}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm cursor-pointer transition-all hover:border-amber-300 hover:shadow-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500">
          <Zap className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">CareerPoints Used</p>
          <p className="text-sm font-black text-slate-900">{displayStats.totalCareerPoints}</p>
        </div>
      </div>
      <div
        title={billTooltip}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm cursor-pointer transition-all hover:border-emerald-300 hover:shadow-md"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <span className="text-sm font-black">$</span>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Bill</p>
          <p className="text-sm font-black text-slate-900">${displayStats.totalCostUsd.toFixed(4)}</p>
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
        className={`fixed inset-y-0 left-0 z-40 flex w-[88vw] max-w-[320px] flex-col border-r border-[#0e483c] bg-[#04201b] text-slate-300 shadow-2xl transition-transform duration-300 md:static md:z-20 md:max-w-none md:translate-x-0 md:shadow-none ${
          isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
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

        <div className={`custom-scrollbar flex-1 space-y-6 overflow-y-auto py-6 ${isSidebarCollapsed ? 'px-2' : 'px-3'}`}>
          <nav className="space-y-1">
            {!isSidebarCollapsed ? (
              <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-teal-400/70">Menu</p>
            ) : null}

            <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} collapsed={isSidebarCollapsed} onClick={() => handleNavigate('/dashboard')} />
            <SidebarItem icon={Activity} label="Practice Hub" active={activeTab === 'practice-hub'} collapsed={isSidebarCollapsed} onClick={() => handleNavigate('/practice-hub')} />
            <SidebarItem icon={BookOpen} label="Learning Paths" active={activeTab === 'learning-paths'} collapsed={isSidebarCollapsed} onClick={() => handleNavigate('/learning-paths')} />
            <SidebarItem icon={Award} label="Certificates" active={activeTab === 'certificates'} collapsed={isSidebarCollapsed} onClick={() => handleNavigate('/my-certificates')} />
            <SidebarItem icon={Medal} label="Badges" active={activeTab === 'badges'} collapsed={isSidebarCollapsed} onClick={() => handleNavigate('/my-badges')} />
            <SidebarItem icon={Brain} label="Create Assessment" badge="Live" active={activeTab === 'create-assessment'} collapsed={isSidebarCollapsed} onClick={() => handleNavigate('/create-assessment')} />
            <SidebarItem icon={IdCard} label="My Profile" active={activeTab === 'profile'} collapsed={isSidebarCollapsed} onClick={() => handleNavigate('/my-profile')} />
            <SidebarItem icon={DollarSignIcon} label="Usage & Billing" active={activeTab === 'usage-billing'} collapsed={isSidebarCollapsed} onClick={() => handleNavigate('/usage-billing')} />
          </nav>

        </div>

        <div className="border-t border-[#0e483c] bg-[#031913]/90 p-3">
          <div className={`group flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-teal-900/40 ${isSidebarCollapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-teal-700 bg-teal-950">
              {user.avatar ? <img src={user.avatar} alt="Avatar" className="h-full w-full object-cover" /> : <User className="h-4 w-4 text-teal-300" />}
            </div>
            {!isSidebarCollapsed ? (
              <>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-xs font-bold capitalize text-white transition-colors group-hover:text-teal-300">{user.name}</p>
                  <p className="truncate text-[10px] text-slate-400">{userMeta}</p>
                </div>
                <LogOut onClick={handleLogout} className="h-3.5 w-3.5 text-slate-400 transition-colors hover:text-red-400" />
              </>
            ) : (
              <LogOut onClick={handleLogout} className="ml-2 h-3.5 w-3.5 text-slate-400 transition-colors hover:text-red-400" />
            )}
          </div>
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
