import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardShell from '../components/DashboardShell';
import { Search, Medal, ArrowRight, ShieldCheck, Download, ExternalLink, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { downloadBadgeImageFile, getStoredBadges } from '../services/badgeRegistry';
import { findCertificateById } from '../services/certificateRegistry';
import { useCertifiStore } from '../store/useCertifiStore';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';

export default function MyBadges() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [badges, setBadges] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBadge, setSelectedBadge] = useState(null);

  const { isSignedIn } = useClerkAuth();
  const isSynced = useCertifiStore((state) => state.isSynced);

  useEffect(() => {
    setBadges(getStoredBadges());
  }, [isSynced]);

  const filteredBadges = useMemo(() => {
    const getBadgeTimestamp = (badge) => {
      if (badge.issuedAt) return new Date(badge.issuedAt).getTime();
      if (badge.date) {
        const parsed = new Date(badge.date).getTime();
        if (!isNaN(parsed)) return parsed;
      }
      return 0;
    };

    // Sort badges newest first (most recently earned at top)
    const sorted = [...badges].reverse().sort((a, b) => {
      const tA = getBadgeTimestamp(a);
      const tB = getBadgeTimestamp(b);
      if (tA && tB && tA !== tB) return tB - tA;
      return 0;
    });

    const query = searchQuery.trim().toLowerCase();
    if (!query) return sorted;
    return sorted.filter((badge) =>
      [badge.skill, badge.badgeTitle, badge.certificateId, badge.designName, badge.paletteName]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query))
    );
  }, [badges, searchQuery]);

  if (isSignedIn && !isSynced) {
    return (
      <DashboardShell
        title="My Badges"
        subtitle="Review and manage your verified credentials."
        activeTab="badges"
        contentClassName="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 bg-slate-50 min-h-screen"
      >
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
          <p className="text-sm font-medium text-slate-500 font-sans">Syncing badges...</p>
        </div>
      </DashboardShell>
    );
  }

  const handleOpenCertificate = (badge) => {
    const relatedCertificate = findCertificateById(badge.certificateId);
    if (relatedCertificate?.id) {
      navigate(`/certificate/${relatedCertificate.id}`, { state: relatedCertificate });
    } else {
      navigate(`/certificate/${badge.certificateId}`);
    }
  };

  const handleDownloadBadge = async (badge) => {
    try {
      await downloadBadgeImageFile(badge, `${badge.badgeTitle || badge.skill || 'badge'}.png`, 'png');
    } catch (err) {
      console.error('Failed to download badge:', err);
    }
  };

  return (
    <DashboardShell
      title="My Badges"
      subtitle="Review and manage your verified credentials."
      activeTab="badges"
      contentClassName="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 bg-slate-50 min-h-screen"
      scrollHeader
    >
      <div className="mx-auto max-w-7xl pt-6 sm:pt-8">

        {/* Search Bar & Header */}
        {badges.length > 0 && (
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Stored Credentials</h2>
              <p className="mt-1 text-sm text-slate-500">{badges.length} badges in your locker</p>
            </div>

            <div className="relative w-full sm:max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, skill, or ID..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
              />
            </div>
          </div>
        )}

        {/* Dynamic Content Area */}
        {badges.length === 0 ? (
          <EmptyStateEmptyLocker navigate={navigate} />
        ) : filteredBadges.length === 0 ? (
          <EmptyStateNoResults searchQuery={searchQuery} />
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {filteredBadges.map((badge) => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                onView={() => setSelectedBadge(badge)}
              />
            ))}
          </div>
        )}

        {/* Footer Promo Banner */}
        {user && badges.length > 0 && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 relative">
            <div className="absolute right-0 top-0 -mr-12 -mt-12 h-40 w-40 rounded-full bg-teal-50/50 pointer-events-none" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4 sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Expand Your Locker</h3>
                  <p className="mt-1 max-w-xl text-sm text-slate-500">
                    Your saved badges act as portable, verifiable proofs of your achievements. View your certificates to store more.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate('/my-certificates')}
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:text-slate-900"
              >
                Go to Certificates
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Badge Zoom Lightbox Modal */}
      {selectedBadge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedBadge(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-700 bg-[#0f172a] shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400">Verified Badge</span>
                <h3 className="text-lg font-bold text-white">{selectedBadge.badgeTitle || selectedBadge.skill}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBadge(null)}
                className="rounded-full bg-slate-800 p-2 text-slate-400 transition hover:bg-slate-700 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Zoomed Badge Image Container */}
            <div className="flex flex-1 items-center justify-center overflow-y-auto p-8 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.1),_transparent_70%)]">
              <img
                src={selectedBadge.imageUrl}
                alt={selectedBadge.badgeTitle || selectedBadge.skill}
                className="max-h-[60vh] max-w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900 px-6 py-4">
              <button
                type="button"
                onClick={() => handleOpenCertificate(selectedBadge)}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition hover:text-teal-400"
              >
                <ExternalLink className="h-4 w-4" />
                View Full Certificate
              </button>

              <button
                type="button"
                onClick={() => handleDownloadBadge(selectedBadge)}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
              >
                <Download className="h-4 w-4" />
                Download Badge
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function BadgeCard({ badge, onView }) {
  return (
    <button
      type="button"
      onClick={onView}
      title={`View record for ${badge.badgeTitle || badge.skill}`}
      className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2rem] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 focus:outline-none focus:ring-4 focus:ring-teal-500/20 sm:p-8"
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.04),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      {/* Badge Image */}
      <img
        src={badge.imageUrl}
        alt={`${badge.badgeTitle || badge.skill} Insignia`}
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.12)] transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_20px_32px_rgba(15,23,42,0.2)]"
      />
    </button>
  );
}

function EmptyStateEmptyLocker({ navigate }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-24">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 text-slate-400 shadow-inner ring-1 ring-slate-200">
          <Medal className="h-10 w-10" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-slate-900">No Badges Stored Yet</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
          Your badge locker is currently empty. Generate and save a badge from any of your existing certificate records to populate this page.
        </p>
        <button
          type="button"
          onClick={() => navigate('/my-certificates')}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-teal-700 shadow-sm"
        >
          View My Certificates
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function EmptyStateNoResults({ searchQuery }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center shadow-sm">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-slate-400 ring-1 ring-slate-200">
        <Search className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900">No matches found</h3>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        We couldn&apos;t find any badges matching &quot;<span className="font-medium text-slate-900">{searchQuery}</span>&quot;. Try adjusting your search terms.
      </p>
    </div>
  );
}