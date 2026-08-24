import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardShell from '../components/DashboardShell';
import { ArrowRight, Lock, Trophy, Search, CheckCircle2, Loader2 } from 'lucide-react';
import { getStoredCertificates } from '../services/certificateRegistry';
import { useAuth } from '../context/AuthContext';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { getPublicProfileId, savePublicProfileSnapshot } from '../services/publicProfiles';
import { getStoredAssessmentAttempts } from '../services/attemptRegistry';
import { buildPublicProfileLink } from '../services/shareLinks';
import { useCertifiStore } from '../store/useCertifiStore';

// Import your custom watermark
import watermarkImg from '../assets/CSWatermark4.png';

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function MyCertificates() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [certificates, setCertificates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const { isSignedIn } = useClerkAuth();
  const isSynced = useCertifiStore((state) => state.isSynced);

  useEffect(() => {
    const stored = getStoredCertificates();
    setCertificates(stored);
    if (user) {
      savePublicProfileSnapshot(user, stored, getStoredAssessmentAttempts());
    }
  }, [user, isSynced]);

  const publicProfileLink = useMemo(
    () => (user ? buildPublicProfileLink(getPublicProfileId(user)) : ''),
    [user]
  );

  const filteredCertificates = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return certificates;
    return certificates.filter((certificate) =>
      [certificate.skill, certificate.studentName, certificate.id]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query))
    );
  }, [certificates, searchQuery]);

  if (isSignedIn && !isSynced) {
    return (
      <DashboardShell
        title="My Certificates"
        subtitle="View, verify, and share the credentials you have earned."
        activeTab="certificates"
        contentClassName="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 bg-slate-50 min-h-screen"
      >
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
          <p className="text-sm font-medium text-slate-500 font-sans">Syncing certificates...</p>
        </div>
      </DashboardShell>
    );
  }

  const handleViewCertificate = (certificate) => {
    navigate(`/certificate/${certificate.id}`, { state: certificate });
  };

  const handleViewSample = () => {
    navigate('/certificate', {
      state: {
        skill: 'React Advanced (Sample)',
        studentName: 'Demo User',
        date: new Date().toLocaleDateString(),
        id: 'SAMPLE-001-CERT',
        score: '100%',
      },
    });
  };

  return (
    <DashboardShell
      title="My Certificates"
      subtitle="View, verify, and share the credentials you have earned."
      activeTab="certificates"
      contentClassName="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 bg-slate-50 min-h-screen"
      scrollHeader
    >
      <div className="mx-auto max-w-7xl pt-6 sm:pt-8">
        
        {/* Search Bar & Header */}
        {certificates.length > 0 && (
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Earned Credentials</h2>
              <p className="mt-1 text-sm text-slate-500">{certificates.length} certificates issued</p>
            </div>
            
            <div className="relative w-full sm:max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by skill, ID, or name..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10"
              />
            </div>
          </div>
        )}

        {/* Dynamic Content Area */}
        {certificates.length === 0 ? (
          <EmptyStateEmpty navigate={handleViewSample} />
        ) : filteredCertificates.length === 0 ? (
          <EmptyStateNoResults searchQuery={searchQuery} />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {filteredCertificates.map((certificate) => (
              <CertificateCard 
                key={certificate.id} 
                certificate={certificate} 
                onView={() => handleViewCertificate(certificate)} 
              />
            ))}
          </div>
        )}

        {/* Public Profile Banner */}
        {user && certificates.length > 0 && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 relative">
            <div className="absolute right-0 top-0 -mr-12 -mt-12 h-40 w-40 rounded-full bg-teal-50/50 pointer-events-none" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4 sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-200">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Public Profile Ready</h3>
                  <p className="mt-1 max-w-xl text-sm text-slate-500">
                    Your public page is active. It automatically showcases your earned certificates, verified skills, and peak performance scores to potential employers.
                  </p>
                </div>
              </div>
              <a
                href={publicProfileLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:text-slate-900"
              >
                Preview Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/**
 * A highly styled card designed to look like a physical mini-certificate.
 */
function CertificateCard({ certificate, onView }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
      
      {/* Outer Matting */}
      <div className="relative m-2 flex flex-1 flex-col overflow-hidden border border-slate-200 bg-[#fdfcfaf0] p-6 pt-8 text-center shadow-inner">
        
        {/* Adjusted Watermark Background: Higher opacity, no blend mode */}
        <div
          className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.12] transition-opacity group-hover:opacity-[0.18]"
          style={{
            backgroundImage: `url(${watermarkImg})`,
            backgroundSize: '65%',
          }}
        />

        {/* Decorative Corner Accents */}
        <div className="absolute left-2 top-2 h-6 w-6 border-l-2 border-t-2 border-slate-300/60" />
        <div className="absolute right-2 top-2 h-6 w-6 border-r-2 border-t-2 border-slate-300/60" />
        <div className="absolute bottom-2 left-2 h-6 w-6 border-b-2 border-l-2 border-slate-300/60" />
        <div className="absolute bottom-2 right-2 h-6 w-6 border-b-2 border-r-2 border-slate-300/60" />

        {/* Header */}
        <div className="relative z-10 mb-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#9b7a37]">
            CareerSense Academy
          </p>
        </div>

        {/* Typography & Content */}
        <div className="relative z-10 flex-1">
          <p className="font-serif text-xs italic text-slate-500">This certifies that</p>
          <h3 className="mt-2 font-serif text-xl font-bold text-slate-900">
            {certificate.studentName || 'Verified Student'}
          </h3>
          <p className="mt-3 font-serif text-xs italic text-slate-500">has successfully mastered</p>
          
          {/* Reduced font size, capitalized (no caps lock) */}
          <h4 className="mt-2 font-serif text-base font-bold capitalize leading-snug tracking-wide text-[#13233b]">
            {certificate.skill}
          </h4>
        </div>

        {/* Footer Signature Lines & Seal */}
        <div className="relative z-10 mt-8 flex w-full items-end justify-between">
          
          {/* Date Line */}
          <div className="flex w-[30%] flex-col items-center">
            <span className="mb-0.5 text-[10px] font-bold text-slate-800">{certificate.date}</span>
            <div className="h-px w-full bg-slate-300" />
            <span className="mt-1 text-[7.5px] uppercase tracking-widest text-slate-400">Issued On</span>
          </div>
          
          {/* Central Logo Seal (Score) - using Golden.png */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f3e5c8] to-[#d8b25b] shadow-md ring-4 ring-white">
            <img src="/Golden.png" alt="CareerSense Seal" className="h-8 w-8 object-contain drop-shadow-sm" />
            <span className="absolute -bottom-2 flex items-center gap-1 rounded-full bg-slate-900 px-2.5 py-0.5 text-[9px] font-bold text-white shadow-sm ring-1 ring-slate-900">
              <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />
              {certificate.score}
            </span>
          </div>
          
          {/* ID Line - fully visible with break-all so it wraps if it gets too long */}
          <div className="flex w-[30%] flex-col items-center">
            <span className="mb-0.5 text-center font-mono text-[8.5px] font-bold uppercase leading-tight text-slate-800 break-all">
              {certificate.id}
            </span>
            <div className="h-px w-full bg-slate-300" />
            <span className="mt-1 text-[7.5px] uppercase tracking-widest text-slate-400">Credential ID</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <button
        onClick={onView}
        className="flex w-full items-center justify-center gap-2 border-t border-slate-200 bg-white px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-teal-700 transition hover:bg-slate-50 hover:text-teal-800"
      >
        View Official Record <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function EmptyStateEmpty({ navigate }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-24">
      <div className="w-full max-w-md text-center">
        <div className="absolute right-0 top-0 hidden rounded-bl-xl bg-slate-100/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 backdrop-blur-sm md:block">
          Sample View
        </div>
        
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 text-slate-400 shadow-inner ring-1 ring-slate-200">
          <Lock className="h-10 w-10" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-slate-900">No Credentials Yet</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
          Complete an assessment from the Practice Hub with a score of 60% or higher to earn your first verified certificate.
        </p>
        <button
          type="button"
          onClick={navigate}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50 sm:w-auto"
        >
          View Sample Certificate
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
        We couldn&apos;t find any certificates matching &quot;<span className="font-medium text-slate-900">{searchQuery}</span>&quot;.
      </p>
    </div>
  );
}
