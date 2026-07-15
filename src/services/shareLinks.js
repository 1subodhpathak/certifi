const FALLBACK_BASE_URL = 'https://careersense.local';

export function getAppBaseUrl() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return FALLBACK_BASE_URL;
}

export function buildVerifyLink(certificateId) {
  return `${getAppBaseUrl()}/verify-certificate?id=${encodeURIComponent(String(certificateId || ''))}`;
}

export function buildCertificateLink(certificateId) {
  return `${getAppBaseUrl()}/certificate/${encodeURIComponent(String(certificateId || ''))}`;
}

export function buildPublicProfileLink(publicProfileId) {
  return `${getAppBaseUrl()}/u/${encodeURIComponent(String(publicProfileId || ''))}`;
}

export function buildPublicProfileLinkedInShareUrl({ publicProfileId, name, headline, summary } = {}) {
  const profileUrl = buildPublicProfileLink(publicProfileId);
  const text = [
    name ? `View ${name}'s verified CareerSense public profile.` : 'View this verified CareerSense public profile.',
    headline || '',
    summary || '',
    profileUrl,
  ]
    .filter(Boolean)
    .join(' ');

  return `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`;
}

export function buildQrCodeImageUrl(targetUrl) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(targetUrl)}`;
}

export function buildLinkedInShareText(certificate) {
  return `I earned the ${certificate.skill} credential on CareerSense with a verified score of ${certificate.score}. Certificate: ${certificate.certificateUrl} Verify: ${certificate.verifyUrl}`;
}

export function buildLinkedInShareUrl(certificate) {
  return `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(buildLinkedInShareText(certificate))}`;
}
