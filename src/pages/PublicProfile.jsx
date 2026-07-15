import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Award,
  BadgeCheck,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Linkedin,
  MapPin,
  ShieldCheck,
  Star,
  Mail,
  Phone,
  FileText
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getStoredAssessmentAttempts } from '../services/attemptRegistry';
import { getStoredCertificates } from '../services/certificateRegistry';
import { getStoredBadges } from '../services/badgeRegistry';
import { getPublicProfileId, normalizePublicProfileId, resolvePublicProfileSnapshot, savePublicProfileSnapshot } from '../services/publicProfiles';
import { buildCertificateLink, buildPublicProfileLinkedInShareUrl } from '../services/shareLinks';
import { DEFAULT_PROFILE_BANNER } from '../context/AuthContext';

export default function PublicProfile() {
  const { publicId } = useParams();
  const { user } = useAuth();
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const refreshProfile = () => setRefreshKey((current) => current + 1);
    window.addEventListener('storage', refreshProfile);
    window.addEventListener('focus', refreshProfile);
    return () => {
      window.removeEventListener('storage', refreshProfile);
      window.removeEventListener('focus', refreshProfile);
    };
  }, []);

  const certificates = useMemo(() => getStoredCertificates(), [refreshKey]);
  const attempts = useMemo(() => getStoredAssessmentAttempts(), [refreshKey]);
  const badges = useMemo(() => getStoredBadges(), [refreshKey]);
  const normalizedRouteProfileId = useMemo(() => normalizePublicProfileId(publicId, user || {}), [publicId, user]);
  const isOwnProfile = Boolean(user && publicId && normalizedRouteProfileId === getPublicProfileId(user));

  useEffect(() => {
    if (!user || !publicId) return;
    if (!isOwnProfile) return;
    savePublicProfileSnapshot(user, certificates, attempts, badges);
  }, [attempts, badges, certificates, isOwnProfile, publicId, user]);

  const [apiSnapshot, setApiSnapshot] = useState(null);
  const [isLoadingApi, setIsLoadingApi] = useState(false);

  const localSnapshot = useMemo(() => {
    if (!publicId) return null;
    return resolvePublicProfileSnapshot(normalizedRouteProfileId, isOwnProfile ? user : null, certificates, attempts, badges);
  }, [attempts, badges, certificates, isOwnProfile, normalizedRouteProfileId, publicId, user]);

  useEffect(() => {
    if (isOwnProfile || localSnapshot) {
      setApiSnapshot(null);
      return;
    }

    let active = true;
    const fetchApiProfile = async () => {
      setIsLoadingApi(true);
      try {
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
        const response = await fetch(`${baseUrl}/careersense/certifi/public-profile/${publicId}`);
        if (response.ok && active) {
          const data = await response.json();
          setApiSnapshot({
            id: publicId,
            shareUrl: `${window.location.protocol}//${window.location.host}/u/${publicId}`,
            candidate: data.candidate,
            certificates: data.certificates,
            badges: data.badges,
            bestScoreBySkill: data.bestScoreBySkill || {}
          });
        }
      } catch (err) {
        console.error('Failed to fetch public profile from API:', err);
      } finally {
        if (active) {
          setIsLoadingApi(false);
        }
      }
    };

    fetchApiProfile();
    return () => {
      active = false;
    };
  }, [publicId, isOwnProfile, localSnapshot, normalizedRouteProfileId]);

  const snapshot = isOwnProfile ? localSnapshot : (localSnapshot || apiSnapshot);

  const candidate = snapshot?.candidate || null;
  const earnedCertificates = snapshot?.certificates || [];
  const earnedBadges = snapshot?.badges || [];
  const profileShareUrl = snapshot?.shareUrl || '';
  const roleDisplay = [candidate?.currentRole, candidate?.currentCompany].filter(Boolean).join(' at ') || 'Certified Professional';
  const profileStatus = candidate?.profileStatus || 'Open to Work';
  const bannerImage = candidate?.bannerImage || DEFAULT_PROFILE_BANNER;
  const certificateLookup = useMemo(
    () => new Map(earnedCertificates.map((certificate) => [String(certificate.id || ''), certificate])),
    [earnedCertificates],
  );

  const linkedInShareUrl = useMemo(
    () => buildPublicProfileLinkedInShareUrl({
      publicProfileId: snapshot?.id,
      name: candidate?.name,
      headline: roleDisplay,
      summary: candidate?.bio,
    }),
    [candidate?.bio, candidate?.name, roleDisplay, snapshot?.id],
  );

  if (isLoadingApi) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center gap-4 text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
        <p className="text-sm font-semibold text-slate-500">Retrieving public credentials profile...</p>
      </div>
    );
  }

  if (!snapshot || !candidate) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
        <div className="max-w-md w-full rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-400">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">Profile Not Found</h1>
          <p className="mt-2 text-sm text-slate-500">
            This public credential page may not exist or hasn't been published yet.
          </p>
          <Link
            to="/my-certificates"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const resolveHonorVerificationLink = (item) => {
    const certificateId = String(item?.certificateId || item?.id || '').trim();
    if (!certificateId) return '';
    const matchingCertificate = certificateLookup.get(certificateId);
    return matchingCertificate?.verifyUrl || buildCertificateLink(certificateId);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pb-24 font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* 1. Immersive Header Banner */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url("${bannerImage}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-[#fafafa]" />
        
        {/* Navigation Bar */}
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2.5 text-white shadow-lg backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20"
          >
            <img src="/Logo1.png" alt="CareerSense" className="h-8 w-8 object-contain brightness-0 invert" />
            <div>
              <p className="text-base font-black tracking-tight">
                Career<span className="text-teal-400">Sense</span>
              </p>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={linkedInShareUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0958a8]"
            >
              <Linkedin className="h-4 w-4" />
              Share on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* 2. Portfolio Grid Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative -mt-24">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          
          {/* ================= LEFT SIDEBAR ================= */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            
            {/* Main Identity Card */}
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 p-6 sm:p-8">
              <div className="relative -mt-16 sm:-mt-20 mb-6 flex justify-center lg:justify-start">
                <div className="rounded-2xl bg-white p-1.5 shadow-md ring-1 ring-slate-100">
                  {candidate.avatar ? (
                    <img 
                      src={candidate.avatar} 
                      alt={candidate.name} 
                      className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-xl"
                    />
                  ) : (
                    <div className="flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center rounded-xl bg-slate-50 text-5xl font-bold text-slate-300 uppercase">
                      {String(candidate.name || 'C').charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                    {candidate.name}
                  </h1>
                  <BadgeCheck className="h-6 w-6 text-teal-500" />
                </div>
                <p className="text-base font-medium text-slate-600 mb-6 leading-relaxed">
                  {roleDisplay}
                </p>

                <div className="space-y-4 text-sm text-slate-600">
                  {candidate.location && (
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <MapPin className="h-4 w-4 text-slate-400" /> 
                      <span>{candidate.location}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <Briefcase className="h-4 w-4 text-slate-400" /> 
                    <span className="font-medium text-slate-900">{profileStatus}</span>
                  </div>
                  {candidate.email && (
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <a
                        href={`mailto:${candidate.email}`}
                        className="break-all transition hover:text-teal-600"
                      >
                        {candidate.email}
                      </a>
                    </div>
                  )}
                  {candidate.phone && (
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <Phone className="h-4 w-4 text-slate-400" />
                      <a
                        href={`tel:${candidate.phone}`}
                        className="transition hover:text-teal-600"
                      >
                        {candidate.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <ShieldCheck className="h-4 w-4 text-teal-500" /> 
                    <span className="break-all font-mono text-xs font-semibold bg-slate-100 px-2 py-1 rounded text-slate-600">
                      ID: {snapshot.id}
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {candidate.email ? (
                    <a
                      href={`mailto:${candidate.email}?subject=${encodeURIComponent(`Hello ${candidate.name}`)}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                    >
                      <Mail className="h-4 w-4" />
                      Contact {candidate.name.split(' ')[0]}
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-500 shadow-sm"
                    >
                      <Mail className="h-4 w-4" />
                      Email Not Available
                    </button>
                  )}
                  {profileShareUrl && (
                    <a
                      href={profileShareUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Public Link
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 p-6 sm:p-8">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
                <FileText className="h-4 w-4 text-slate-400" />
                About Me
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {candidate.bio || 'A verified professional showcasing validated credentials and skills on the CareerSense network.'}
              </p>
            </div>
          </div>


          {/* ================= RIGHT MAIN CONTENT ================= */}
          <div className="lg:col-span-8 space-y-8 mt-4 lg:mt-0">


            {/* Education Timeline */}
            <section className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 mb-8">
                <GraduationCap className="h-6 w-6 text-teal-500" />
                Education & Background
              </h2>
              {candidate.education?.length > 0 ? (
                <div className="relative ml-3 border-l-2 border-slate-100 space-y-8 pb-4">
                  {candidate.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-teal-500 shadow-sm" />
                      <h3 className="text-lg font-bold text-slate-900">{edu.title}</h3>
                      <p className="text-base font-medium text-slate-600 mt-1">{edu.subtitle}</p>
                      <span className="inline-flex items-center rounded-md bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500 ring-1 ring-inset ring-slate-200 mt-3">
                        {[edu.start, edu.end].filter(Boolean).join(' - ') || 'Education Record'}
                      </span>
                      {edu.description && (
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 max-w-2xl">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm text-slate-500">No education details listed yet.</p>
                </div>
              )}
            </section>

            {/* Awards & Honors */}
            {(candidate.awards?.length > 0 || candidate.certifications?.length > 0) && (
              <section className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 mb-8">
                  <Star className="h-6 w-6 text-teal-500" />
                  Awards & External Honors
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[...(candidate.awards || []), ...(candidate.certifications || [])].map((item, idx) => {
                    const verificationLink = resolveHonorVerificationLink(item);

                    return (
                      <div key={idx} className="relative rounded-xl bg-slate-50 p-5 pr-16 ring-1 ring-inset ring-slate-100">
                        {verificationLink ? (
                          <a
                            href={verificationLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open verification for ${item.title}`}
                            title="Open verification page"
                            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-teal-100 bg-white text-teal-600 shadow-sm transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        ) : null}
                        <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                        <p className="mt-1 text-sm font-medium text-slate-600">{item.subtitle}</p>
                        {item.start && <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{item.start}</p>}
                        {item.description && <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p>}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
