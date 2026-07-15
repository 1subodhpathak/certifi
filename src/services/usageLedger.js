import { useCertifiStore } from '../store/useCertifiStore';

const STORAGE_KEY = 'careerSenseUsageLedger';
const USD_PER_TOKEN = 1 / 10000;

export function estimateTokensFromText(...texts) {
  const totalChars = texts.filter(Boolean).join(' ').length;
  return Math.max(1, Math.ceil(totalChars / 4));
}

export function convertPointsToUsd(careerPoints) {
  return careerPoints * USD_PER_TOKEN;
}

export function recordUsage({
  action,
  area,
  careerPoints,
  status = 'completed',
  metadata = {},
}) {
  const numericPoints = Number.isFinite(careerPoints) ? careerPoints : 0;

  const entry = {
    id: `usage_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    action,
    area,
    careerPoints: numericPoints,
    costUsd: convertPointsToUsd(numericPoints),
    status,
    metadata,
    createdAt: new Date().toISOString(),
  };

  if (typeof window !== 'undefined' && window.clerkUserId) {
    useCertifiStore.getState().addUsageLog(entry);
    return entry;
  }

  const currentLogs = getUsageLogs();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...currentLogs]));
  return entry;
}

export function getUsageLogs() {
  if (typeof window !== 'undefined' && window.clerkUserId) {
    return useCertifiStore.getState().usageLogs;
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to read usage ledger:', error);
    return [];
  }
}

export function getUsageSummary() {
  const logs = getUsageLogs();
  const totalCareerPoints = logs.reduce((sum, log) => sum + (log.careerPoints || 0), 0);
  const totalCostUsd = logs.reduce((sum, log) => sum + (log.costUsd || 0), 0);

  return {
    totalCareerPoints,
    totalCostUsd,
    totalActions: logs.length,
  };
}
