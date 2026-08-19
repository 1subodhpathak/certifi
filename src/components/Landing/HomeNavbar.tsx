import { useEffect, useState } from 'react';
import { Menu, Star, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUsageSummary } from '../../services/usageLedger';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';
import { useCertifiStore } from '../../store/useCertifiStore';

export default function HomeNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [usageSummary, setUsageSummary] = useState({ totalCareerPoints: 0, totalCostUsd: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const totalCareerPoints = isSynced
    ? storeUsageLogs.reduce((sum, log) => sum + (log.careerPoints || 0), 0)
    : usageSummary.totalCareerPoints;
  const totalCostUsd = isSynced
    ? storeUsageLogs.reduce((sum, log) => sum + (log.costUsd || 0), 0)
    : usageSummary.totalCostUsd;

  const closeMobileMenu = () => setMobileMenuOpen(false);
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
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 py-2 sm:px-8 sm:py-3">
          <button type="button" className="flex items-center gap-3 text-left sm:gap-4" onClick={handleLogoClick}>
            <img
              src="/Logo.png"
              alt="CareerSense logo"
              className="h-16 w-16 shrink-0 object-contain sm:h-18 sm:w-18"
            />
            <span className="leading-none">
              <span className="block text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                Career<span className="text-teal-600">Sense</span>
              </span>
              <span className="mt-1 block text-[7px] font-black uppercase tracking-[0.26em] text-slate-500 sm:text-[8px] sm:tracking-[0.3em]">
                Certifi.AI Platform
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
            <a href={homeSectionHref('process')} className="rounded-md transition-colors hover:text-teal-600">How it Works</a>
            <a href={homeSectionHref('why-us')} className="rounded-md transition-colors hover:text-teal-600">Why Us</a>
            <a href={homeSectionHref('roles')} className="rounded-md transition-colors hover:text-teal-600">Top Skills</a>
            <a href={homeSectionHref('testimonials')} className="rounded-md transition-colors hover:text-teal-600">Testimony</a>
            <button
              type="button"
              onClick={() => navigate('/subscription')}
              className={`rounded-md transition-colors hover:text-teal-600 ${pathname === '/subscription' ? 'text-teal-600' : ''}`}
            >
              Pricing
            </button>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <SignedIn>
              {isSynced ? (
                <>
                  <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm lg:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                      <Star className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">CS Points Used</p>
                      <p className="text-sm font-black text-slate-900">{totalCareerPoints}</p>
                    </div>
                  </div>
                  <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm lg:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <span className="text-sm font-black">$</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Bill</p>
                      <p className="text-sm font-black text-slate-900">${totalCostUsd.toFixed(4)}</p>
                    </div>
                  </div>
                </>
              ) : null}
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="rounded-lg px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  Log in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700"
              >
                Dashboard
              </button>
              <UserButton afterSignOutUrl="/" />
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
              <div className="grid gap-2 text-sm font-bold text-slate-700">
                <a href={homeSectionHref('process')} onClick={closeMobileMenu} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:bg-slate-50">How it Works</a>
                <a href={homeSectionHref('why-us')} onClick={closeMobileMenu} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:bg-slate-50">Why Us</a>
                <a href={homeSectionHref('roles')} onClick={closeMobileMenu} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:bg-slate-50">Top Skills</a>
                <a href={homeSectionHref('testimonials')} onClick={closeMobileMenu} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:bg-slate-50">Testimony</a>
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    navigate('/subscription');
                  }}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm transition hover:bg-slate-50"
                >
                  Pricing
                </button>
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
                    <div className="flex items-center justify-center h-12 w-full">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        ) : null}
    </nav>
  );
}
