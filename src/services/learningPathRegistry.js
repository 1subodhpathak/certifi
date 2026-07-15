import { useCertifiStore } from '../store/useCertifiStore';

const STORAGE_KEY = 'myLearningPaths';

export function getStoredLearningPaths() {
  if (typeof window !== 'undefined' && window.clerkUserId) {
    return useCertifiStore.getState().learningPaths;
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to read learning paths:', error);
    return [];
  }
}

export function saveLearningPath(newPath) {
  if (typeof window !== 'undefined' && window.clerkUserId) {
    useCertifiStore.getState().addLearningPath(newPath);
    return newPath;
  }
  const existing = getStoredLearningPaths();
  const next = [newPath, ...existing.filter(p => p.id !== newPath.id)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return newPath;
}

export function saveLearningPathsList(paths) {
  if (typeof window !== 'undefined' && window.clerkUserId) {
    useCertifiStore.getState().setLearningPaths(paths);
    return paths;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(paths));
  return paths;
}
