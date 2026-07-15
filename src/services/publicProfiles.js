import { getStoredAssessmentAttempts } from './attemptRegistry';
import { getStoredCertificates } from './certificateRegistry';
import { getStoredBadges } from './badgeRegistry';
import { buildPublicProfileLink } from './shareLinks';

const STORAGE_KEY = 'careerSensePublicProfiles';

function slugifyPublicProfilePart(value = '') {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/%[0-9a-f]{2}/gi, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function buildFallbackPublicProfileId(user) {
  const safeUser = user || {};
  const slug = slugifyPublicProfilePart(safeUser.name || 'candidate') || 'candidate';
  const tailSource = slugifyPublicProfilePart(safeUser.id || safeUser.email || Date.now()) || String(Date.now());
  const tail = tailSource.slice(-24) || String(Date.now());
  return `${slug}-${tail}`.slice(0, 96);
}

function compactCertificateForPublicProfile(certificate = {}) {
  return {
    id: certificate.id,
    skill: certificate.skill,
    score: certificate.score,
    date: certificate.date,
    verifyUrl: certificate.verifyUrl,
    questionBank: certificate.questionBank
      ? { version: certificate.questionBank.version }
      : null,
  };
}

function compactBadgeForPublicProfile(badge = {}) {
  return {
    id: badge.id,
    certificateId: badge.certificateId,
    skill: badge.skill,
    badgeTitle: badge.badgeTitle,
    label: badge.label,
    date: badge.date,
    designId: badge.designId,
    paletteId: badge.paletteId,
  };
}

function compactTimelineItems(items = []) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => ({
      id: item.id || item.certificateId || '',
      certificateId: item.certificateId || '',
      title: item.title || item.name || '',
      subtitle: item.subtitle || item.issuer || item.school || '',
      start: item.start || item.date || '',
      end: item.end || '',
      description: item.description || '',
      score: item.score || '',
    }))
    .filter((item) => item.title || item.subtitle || item.description || item.score);
}

function safeParse(value) {
  try {
    const parsed = JSON.parse(value || '{}');
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    console.error('Failed to parse public profiles:', error);
    return {};
  }
}

export function getPublicProfileId(user) {
  const safeUser = user || {};
  return normalizePublicProfileId(safeUser.publicProfileId, safeUser);
}

export function normalizePublicProfileId(value, user) {
  const safeUser = user || {};
  const normalized = slugifyPublicProfilePart(value);
  if (normalized) {
    return normalized.slice(0, 96);
  }
  return buildFallbackPublicProfileId(safeUser);
}

export function buildPublicProfileSnapshot(
  user,
  certificates = getStoredCertificates(),
  attempts = getStoredAssessmentAttempts(),
  badges = getStoredBadges(),
) {
  if (!user) return null;
  const publicProfileId = getPublicProfileId(user);
  const certificateIds = new Set(certificates.map((certificate) => certificate.id).filter(Boolean));
  const relatedBadges = badges.filter((badge) => certificateIds.has(badge.certificateId));
  const bestScoreBySkill = attempts.reduce((accumulator, attempt) => {
    const key = attempt.skill || attempt.title;
    if (!key) return accumulator;
    return {
      ...accumulator,
      [key]: Math.max(accumulator[key] || 0, Number(attempt.score || 0)),
    };
  }, {});

  return {
    id: publicProfileId,
    shareUrl: buildPublicProfileLink(publicProfileId),
    generatedAt: new Date().toISOString(),
    candidate: {
      name: user.name || 'Candidate',
      avatar: user.avatar || '',
      bannerImage: user.bannerImage || '',
      currentRole: user.currentRole || 'Certified Candidate',
      currentCompany: user.currentCompany || 'CareerSense Platform',
      profileStatus: user.profileStatus || 'Open to Work',
      location: user.location || '',
      email: user.email || '',
      phone: user.phone || '',
      bio: user.bio || '',
      education: compactTimelineItems(user.education),
      certifications: compactTimelineItems(user.certifications),
      awards: compactTimelineItems(user.awards),
    },
    verifiedSkills: Array.from(new Set(certificates.map((certificate) => certificate.skill).filter(Boolean))),
    bestScoreBySkill,
    certificates: certificates.map(compactCertificateForPublicProfile).slice(0, 24),
    badges: relatedBadges.map(compactBadgeForPublicProfile).slice(0, 24),
  };
}

export function savePublicProfileSnapshot(
  user,
  certificates = getStoredCertificates(),
  attempts = getStoredAssessmentAttempts(),
  badges = getStoredBadges(),
) {
  const snapshot = buildPublicProfileSnapshot(user, certificates, attempts, badges);
  if (!snapshot) return null;
  const publicProfileId = snapshot.id;

  try {
    const existing = safeParse(localStorage.getItem(STORAGE_KEY));
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ [publicProfileId]: snapshot, ...(existing || {}) }));
  } catch (error) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ [publicProfileId]: snapshot }));
    } catch (finalError) {
      console.error('Failed to save public profile snapshot:', finalError || error);
    }
  }
  return snapshot;
}

export function getPublicProfileSnapshot(publicProfileId) {
  const profiles = safeParse(localStorage.getItem(STORAGE_KEY));
  if (profiles[publicProfileId]) return profiles[publicProfileId];

  const normalizedPublicProfileId = normalizePublicProfileId(publicProfileId);
  if (profiles[normalizedPublicProfileId]) return profiles[normalizedPublicProfileId];

  const matchedEntry = Object.entries(profiles).find(([storedId]) => (
    normalizePublicProfileId(storedId) === normalizedPublicProfileId
  ));

  return matchedEntry?.[1] || null;
}

export function resolvePublicProfileSnapshot(
  publicProfileId,
  user = null,
  certificates = getStoredCertificates(),
  attempts = getStoredAssessmentAttempts(),
  badges = getStoredBadges(),
) {
  const normalizedPublicProfileId = normalizePublicProfileId(publicProfileId, user || {});
  const savedProfile = getPublicProfileSnapshot(normalizedPublicProfileId) || getPublicProfileSnapshot(publicProfileId);
  const matchingUserId = user ? getPublicProfileId(user) : null;
  const certificatesWithMatchingProfile = certificates.filter((certificate) => (
    normalizePublicProfileId(certificate.publicProfileId || '') === normalizedPublicProfileId
  ));

  if (user && matchingUserId === normalizedPublicProfileId) {
    return buildPublicProfileSnapshot(user, certificates, attempts, badges);
  }

  if (savedProfile) {
    const normalizedSavedProfile = {
      ...savedProfile,
      id: normalizedPublicProfileId,
      shareUrl: buildPublicProfileLink(normalizedPublicProfileId),
    };
    const hasSavedData = (savedProfile.certificates || []).length > 0
      || (savedProfile.verifiedSkills || []).length > 0
      || Object.keys(savedProfile.bestScoreBySkill || {}).length > 0;

    if (hasSavedData) {
      return normalizedSavedProfile;
    }

    if (certificatesWithMatchingProfile.length > 0) {
      const inferredUserFromCertificates = {
        name: certificatesWithMatchingProfile[0].studentName || 'Candidate',
        avatar: '',
        bannerImage: '',
        currentRole: certificatesWithMatchingProfile[0].currentRole || 'Certified Candidate',
        currentCompany: certificatesWithMatchingProfile[0].currentCompany || 'CareerSense Platform',
        profileStatus: 'Open to Work',
        location: '',
        email: '',
        phone: '',
        bio: '',
        education: [],
        certifications: [],
        awards: [],
        id: normalizedPublicProfileId,
        publicProfileId: normalizedPublicProfileId,
      };

      const relatedSkillsFromCertificates = new Set(certificatesWithMatchingProfile.map((certificate) => certificate.skill).filter(Boolean));
      const filteredAttemptsFromCertificates = attempts.filter((attempt) => relatedSkillsFromCertificates.has(attempt.skill || attempt.title));
      return buildPublicProfileSnapshot(inferredUserFromCertificates, certificatesWithMatchingProfile, filteredAttemptsFromCertificates, badges);
    }

    return normalizedSavedProfile;
  }

  if (certificatesWithMatchingProfile.length > 0) {
    const inferredUser = {
      name: certificatesWithMatchingProfile[0].studentName || 'Candidate',
      avatar: '',
      bannerImage: '',
      currentRole: certificatesWithMatchingProfile[0].currentRole || 'Certified Candidate',
      currentCompany: certificatesWithMatchingProfile[0].currentCompany || 'CareerSense Platform',
      profileStatus: 'Open to Work',
      location: '',
      email: '',
      phone: '',
      bio: '',
      education: [],
      certifications: [],
      awards: [],
      id: normalizedPublicProfileId,
      publicProfileId: normalizedPublicProfileId,
    };

    const relatedSkills = new Set(certificatesWithMatchingProfile.map((certificate) => certificate.skill).filter(Boolean));
    const filteredAttempts = attempts.filter((attempt) => relatedSkills.has(attempt.skill || attempt.title));
    return buildPublicProfileSnapshot(inferredUser, certificatesWithMatchingProfile, filteredAttempts, badges);
  }

  return null;
}
