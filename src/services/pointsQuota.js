import { getUsageSummary } from './usageLedger';

/**
 * Returns current CS Points & Subscription Tokens usage status
 */
export function getCsPointsQuotaStatus(email = '', userSub = null) {
  const summary = getUsageSummary();
  const usedPoints = summary.totalCareerPoints || 0;
  const tokensRemaining = userSub?.tokensRemaining ?? 10000;
  const plan = userSub?.plan || 'free';
  const isExceeded = tokensRemaining <= 0;

  return {
    used: usedPoints,
    tokensRemaining,
    plan,
    isExceeded,
    message: isExceeded
      ? `Your AI Tokens are exhausted (0 remaining). Please top up or upgrade your CareerSense subscription.`
      : `${tokensRemaining.toLocaleString()} AI Tokens remaining on your ${plan.toUpperCase()} Plan.`,
  };
}

/**
 * Validates if the user has enough AI Tokens before initiating an AI request
 */
export function validateCsPointsQuota(email = '', requestedEstimate = 100, userSub = null) {
  const status = getCsPointsQuotaStatus(email, userSub);
  if (status.isExceeded) {
    return {
      allowed: false,
      status,
      error: `AI Tokens exhausted (0 remaining). Upgrade your plan or top up tokens on CareerSense to continue generating AI assessments.`,
    };
  }

  return { allowed: true, status };
}

