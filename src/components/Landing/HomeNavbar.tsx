import { useEffect, useRef, useState } from 'react';
import { ChevronDown, CircleUserRound, CreditCard, LogOut, Menu, Star, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUsageSummary } from '../../services/usageLedger';
import { isExemptUser } from '../../services/pointsQuota';
import { SignedIn, SignedOut, SignInButton, useClerk, useUser } from '@clerk/clerk-react';
import { useCertifiStore } from '../../store/useCertifiStore';

const NAV_SECTIONS = [
  { id: 'process', label: 'How It Works' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'roles', label: 'Explore Skills' },
  { id: 'certificate-verify', label: 'The Certificate' },
  { id: 'faq', label: 'FAQs' },
];

export default function HomeNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useUser();
  const { signOut } = useClerk();
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const [usageSummary, setUsageSummary] = useState({ totalCareerPoints: 0, totalCostUsd: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const storeUsageLogs = useCertifiStore((state) => state.usageLogs);
  const isSynced = useCertifiStore((state) => state.isSynced);

  useEffect(() => {
    const syncUsage = () => setUsageSummary(getUsageSummary());
    syncUsage();
    window.addEventListener('storage', syncUsage);
    window.addEventListener('focus', syncUsage);
    return () => {
      window.removeEventListener('storage', syncUsage);
      window.removeEventListener('focus', syncUsage);
    };
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return undefined;
    }

    const sections = NAV_SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.15, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!accountMenuOpen) return undefined;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!accountMenuRef.current?.contains(event.target as Node)) setAccountMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAccountMenuOpen(false);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [accountMenuOpen]);

  const totalCareerPoints = isSynced
    ? storeUsageLogs.reduce((sum, log) => sum + (log.careerPoints || 0), 0)
    : usageSummary.totalCareerPoints;
  const totalCostUsd = isSynced
    ? storeUsageLogs.reduce((sum, log) => sum + (log.costUsd || 0), 0)
    : usageSummary.totalCostUsd;

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const displayName = user?.fullName || user?.firstName || 'CareerSense member';
  const displayEmail = user?.primaryEmailAddress?.emailAddress || '';
  const initials = displayName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const handleSignOut = async () => {
    setAccountMenuOpen(false);
    closeMobileMenu();
    await signOut({ redirectUrl: '/' });
  };

  const navigateFromAccount = (path: string) => {
    setAccountMenuOpen(false);
    closeMobileMenu();
    navigate(path);
  };
  const homeSectionHref = (section: string) => `${pathname === '/' ? '' : '/'}#${section}`;

  const handleLogoClick = () => {
    closeMobileMenu();
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate('/');
  };

  return (
    <nav className="relative z-50 w-full border-b border-slate-200 bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 py-1.5 sm:px-8 sm:py-2">
          <button type="button" className="flex items-center gap-2 text-left sm:gap-2.5" onClick={handleLogoClick}>
            <img
              src="/Logo.png"
              alt="CareerSense logo"
              className="h-10 w-10 shrink-0 translate-y-1 object-contain sm:h-11 sm:w-11"
            />
            <span className="leading-none">
              <span className="block text-lg font-black tracking-tight text-slate-950 sm:text-xl">
                Career<span className="text-teal-600">Sense</span>
              </span>
              <span className="mt-1 block text-[6px] font-black uppercase tracking-[0.14em] text-teal-700 sm:tracking-[0.16em]">
                Skills Validation & Certification
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-8 text-[13px] font-semibold text-slate-600 md:flex">
            {NAV_SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={homeSectionHref(item.id)}
                  onClick={() => setActiveSection(item.id)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative rounded-md py-2 transition-colors hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40 ${
                    isActive ? 'text-teal-700' : ''
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-teal-500 transition-[transform,opacity] duration-200 motion-reduce:transition-none ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-50 opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <SignedIn>
              {isSynced ? (
                <>
                  <div className="group relative hidden lg:flex cursor-pointer">
                    <div className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 shadow-sm transition-all hover:border-amber-300 hover:shadow-md">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                        <Star className="h-4 w-4" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">CS Points Used</p>
                        <p className="text-[13px] font-black text-slate-900">{totalCareerPoints}</p>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 opacity-0 transition-all duration-150 ease-out group-hover:translate-y-0.5 group-hover:opacity-100">
                      <div className="relative whitespace-nowrap rounded-xl border border-teal-500/30 bg-slate-900/95 px-3 py-1.5 text-xs font-semibold text-teal-300 shadow-xl shadow-slate-950/20 backdrop-blur-md">
                        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-teal-500/30 bg-slate-900/95" />
                        <span className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                          {isExemptUser(user?.primaryEmailAddress?.emailAddress)
                            ? 'Free Account Limit : Unlimited Career Points (Test Account)'
                            : 'Free Account Limit : 15000 Career Points'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="group relative hidden lg:flex cursor-pointer">
                    <div className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <span className="text-[13px] font-black">$</span>
                      </div>
                      <div className="leading-tight">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Bill</p>
                        <p className="text-[13px] font-black text-slate-900">${totalCostUsd.toFixed(4)}</p>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 opacity-0 transition-all duration-150 ease-out group-hover:translate-y-0.5 group-hover:opacity-100">
                      <div className="relative whitespace-nowrap rounded-xl border border-teal-500/30 bg-slate-900/95 px-3 py-1.5 text-xs font-semibold text-teal-300 shadow-xl shadow-slate-950/20 backdrop-blur-md">
                        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-teal-500/30 bg-slate-900/95" />
                        <span className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Free Account : Bill getting paid by Instructor
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="rounded-lg px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-teal-100 hover:text-slate-900"
                >
                  Log in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="h-10 rounded-lg bg-teal-600 px-5 text-sm font-bold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700"
              >
                Dashboard
              </button>
              <div ref={accountMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setAccountMenuOpen((open) => !open)}
                  className="group flex h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-white p-1 pr-2 text-slate-500 shadow-sm transition hover:border-teal-200 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40"
                  aria-label="Open account menu"
                  aria-expanded={accountMenuOpen}
                  aria-haspopup="menu"
                >
                  <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-teal-600 text-xs font-bold text-white">
                    {user?.imageUrl ? <img src={user.imageUrl} alt="" className="h-full w-full object-cover" /> : initials}
                  </span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${accountMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {accountMenuOpen ? (
                  <div role="menu" className="absolute right-0 top-full z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                    <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-teal-600 text-sm font-bold text-white">
                        {user?.imageUrl ? <img src={user.imageUrl} alt="" className="h-full w-full object-cover" /> : initials}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">{displayName}</p>
                        <p className="mt-0.5 truncate text-xs text-slate-500">{displayEmail}</p>
                      </div>
                    </div>
                    <div className="p-2">
                      <button type="button" role="menuitem" onClick={() => navigateFromAccount('/my-profile')} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-800">
                        <CircleUserRound className="h-4 w-4 text-teal-600" /> Manage profile
                      </button>
                      <button type="button" role="menuitem" onClick={() => navigateFromAccount('/usage-billing')} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-amber-50 hover:text-amber-800">
                        <CreditCard className="h-4 w-4 text-amber-600" /> Usage & Billing
                      </button>
                      <div className="my-1 h-px bg-slate-100" />
                      <button type="button" role="menuitem" onClick={handleSignOut} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-rose-600 transition hover:bg-rose-50 hover:text-rose-700">
                        <LogOut className="h-4 w-4" /> Sign out
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </SignedIn>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-200/80 pb-4 pt-4 md:hidden">
            <div className="grid gap-3">
              <div className="grid gap-2 text-[13px] font-semibold text-slate-700">
                {NAV_SECTIONS.map((item) => (
                  <a
                    key={item.id}
                    href={homeSectionHref(item.id)}
                    onClick={() => {
                      setActiveSection(item.id);
                      closeMobileMenu();
                    }}
                    aria-current={activeSection === item.id ? 'location' : undefined}
                    className={`rounded-2xl border px-4 py-3 shadow-sm transition ${
                      activeSection === item.id
                        ? 'border-teal-200 bg-teal-50 text-teal-800'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="grid gap-2 rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-3">
                <SignedIn>
                  {isSynced ? (
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">CS Points</p>
                        <p className="mt-1 text-base font-black text-slate-900">{totalCareerPoints}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Bill</p>
                        <p className="mt-1 text-base font-black text-slate-900">${totalCostUsd.toFixed(4)}</p>
                      </div>
                    </div>
                  ) : null}
                </SignedIn>
                <div className="grid gap-2 sm:grid-cols-2">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button
                        type="button"
                        onClick={closeMobileMenu}
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-100"
                      >
                        Log in
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <button
                      type="button"
                      onClick={() => {
                        closeMobileMenu();
                        navigate('/dashboard');
                      }}
                      className="h-12 w-full rounded-2xl bg-teal-600 px-4 text-sm font-bold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700"
                    >
                      Dashboard
                    </button>
                    <button type="button" onClick={() => navigateFromAccount('/my-profile')} className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100">
                      Manage profile
                    </button>
                    <button type="button" onClick={() => navigateFromAccount('/usage-billing')} className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100">
                      Usage & Billing
                    </button>
                    <button type="button" onClick={handleSignOut} className="h-12 w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 text-sm font-semibold text-rose-700 transition hover:bg-rose-100">
                      Sign out
                    </button>
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        ) : null}
    </nav>
  );
}
