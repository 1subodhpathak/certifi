import { getUsageSummary } from './usageLedger';

export const DEFAULT_CS_POINTS_LIMIT = 15000;
export const EXEMPT_TEST_EMAILS = ['pathaksubodh945@gmail.com'];

/**
 * Checks if a given email is exempt from CS points limits (e.g. test accounts)
 */
export function isExemptUser(email = '') {
  const normalized = String(email || window?.clerkUserEmail || '').trim().toLowerCase();
  return EXEMPT_TEST_EMAILS.includes(normalized);
}

/**
 * Gets the total CS Points limit for a user email
 */
export function getUserCsPointsLimit(email = '') {
  if (isExemptUser(email)) {
    return Infinity;
  }
  return DEFAULT_CS_POINTS_LIMIT;
}

/**
 * Returns current CS Points usage status
 */
export function getCsPointsQuotaStatus(email = '') {
  const summary = getUsageSummary();
  const usedPoints = summary.totalCareerPoints || 0;
  const exempt = isExemptUser(email);
  const limit = getUserCsPointsLimit(email);

  if (exempt) {
    return {
      used: usedPoints,
      limit: Infinity,
      remaining: Infinity,
      percentUsed: 0,
      isExempt: true,
      isExceeded: false,
      message: 'Test Account — Unlimited CS Points',
    };
  }

  const remaining = Math.max(0, limit - usedPoints);
  const percentUsed = Math.min(100, Math.round((usedPoints / limit) * 100));
  const isExceeded = usedPoints >= limit;

  return {
    used: usedPoints,
    limit,
    remaining,
    percentUsed,
    isExempt: false,
    isExceeded,
    message: isExceeded
      ? `You have reached your free account limit of ${limit.toLocaleString()} CS Points. Upgrade your plan or contact support to continue generating AI assessments.`
      : `${remaining.toLocaleString()} CS Points remaining out of ${limit.toLocaleString()} free allowance.`,
  };
}

/**
 * Validates if the user has enough CS Points before initiating an AI request
 */
export function validateCsPointsQuota(email = '', requestedEstimate = 100) {
  const status = getCsPointsQuotaStatus(email);
  if (status.isExempt) {
    return { allowed: true, status };
  }

  if (status.used + requestedEstimate > status.limit) {
    return {
      allowed: false,
      status,
      error: `CS Points limit reached (${status.used.toLocaleString()} / ${status.limit.toLocaleString()} points used). Upgrade your plan to generate more AI assessments.`,
    };
  }

  return { allowed: true, status };
}
