import { create } from 'zustand';
import { authenticatedFetch } from '../services/api';

interface CertifiState {
  profile: any;
  assessmentAttempts: any[];
  certificates: any[];
  badges: any[];
  usageLogs: any[];
  learningPaths: any[];
  isSynced: boolean;
  
  syncWithBackend: () => Promise<void>;
  updateProfile: (newProfile: any) => Promise<void>;
  addAssessmentAttempt: (attempt: any) => Promise<void>;
  addCertificate: (certificate: any) => Promise<void>;
  addBadge: (badge: any) => Promise<void>;
  addUsageLog: (log: any) => Promise<void>;
  addLearningPath: (path: any) => Promise<void>;
  setLearningPaths: (paths: any[]) => Promise<void>;
  clearCache: () => void;
}

export const useCertifiStore = create<CertifiState>((set, get) => ({
  profile: null,
  assessmentAttempts: [],
  certificates: [],
  badges: [],
  usageLogs: [],
  learningPaths: [],
  isSynced: false,

  syncWithBackend: async () => {
    try {
      const response = await authenticatedFetch('/careersense/certifi/all');
      if (response && response.ok) {
        const data = await response.json();
        set({
          profile: data.profile || null,
          assessmentAttempts: data.assessmentAttempts || [],
          certificates: data.certificates || [],
          badges: data.badges || [],
          usageLogs: data.usageLedger || [],
          learningPaths: data.learningPaths || [],
          isSynced: true
        });
      }
    } catch (error) {
      console.error('[Zustand] Sync failed:', error);
    }
  },

  updateProfile: async (newProfile: any) => {
    set((state) => ({
      profile: { ...state.profile, ...newProfile }
    }));

    if (window.clerkUserId) {
      try {
        await authenticatedFetch('/careersense/certifi/profile', {
          method: 'PUT',
          body: JSON.stringify({ profile: newProfile })
        });
      } catch (error) {
        console.error('[Zustand] Update profile failed:', error);
      }
    }
  },

  addAssessmentAttempt: async (attempt: any) => {
    set((state) => {
      const existingIndex = state.assessmentAttempts.findIndex((a) => a.id === attempt.id);
      const updated = [...state.assessmentAttempts];
      if (existingIndex > -1) {
        updated[existingIndex] = attempt;
      } else {
        updated.push(attempt);
      }
      return { assessmentAttempts: updated };
    });

    if (window.clerkUserId) {
      try {
        await authenticatedFetch('/careersense/certifi/attempts', {
          method: 'POST',
          body: JSON.stringify(attempt)
        });
      } catch (error) {
        console.error('[Zustand] Save attempt failed:', error);
      }
    }
  },

  addCertificate: async (certificate: any) => {
    set((state) => {
      const existingIndex = state.certificates.findIndex((c) => c.id === certificate.id);
      const updated = [...state.certificates];
      if (existingIndex > -1) {
        updated[existingIndex] = certificate;
      } else {
        updated.push(certificate);
      }
      return { certificates: updated };
    });

    if (window.clerkUserId) {
      try {
        await authenticatedFetch('/careersense/certifi/certificates', {
          method: 'POST',
          body: JSON.stringify(certificate)
        });
      } catch (error) {
        console.error('[Zustand] Save certificate failed:', error);
      }
    }
  },

  addBadge: async (badge: any) => {
    set((state) => {
      const existingIndex = state.badges.findIndex((b) => (b.certificateId && badge.certificateId && b.certificateId === badge.certificateId) || b.id === badge.id);
      const updated = [...state.badges];
      if (existingIndex > -1) {
        updated[existingIndex] = badge;
      } else {
        updated.push(badge);
      }
      return { badges: updated };
    });

    if (window.clerkUserId) {
      try {
        await authenticatedFetch('/careersense/certifi/badges', {
          method: 'POST',
          body: JSON.stringify(badge)
        });
      } catch (error) {
        console.error('[Zustand] Save badge failed:', error);
      }
    }
  },

  addLearningPath: async (path: any) => {
    set((state) => {
      const existingIndex = state.learningPaths.findIndex((p) => p.id === path.id);
      const updated = [...state.learningPaths];
      if (existingIndex > -1) {
        updated[existingIndex] = path;
      } else {
        updated.push(path);
      }
      return { learningPaths: updated };
    });

    if (window.clerkUserId) {
      try {
        await authenticatedFetch('/careersense/certifi/learning-paths', {
          method: 'POST',
          body: JSON.stringify(path)
        });
      } catch (error) {
        console.error('[Zustand] Save learning path failed:', error);
      }
    }
  },

  setLearningPaths: async (paths: any[]) => {
    set({ learningPaths: paths });

    if (window.clerkUserId) {
      try {
        await authenticatedFetch('/careersense/certifi/learning-paths', {
          method: 'PUT',
          body: JSON.stringify({ paths })
        });
      } catch (error) {
        console.error('[Zustand] Save learning paths list failed:', error);
      }
    }
  },

  addUsageLog: async (log: any) => {
    set((state) => ({
      usageLogs: [log, ...state.usageLogs]
    }));

    if (window.clerkUserId) {
      try {
        await authenticatedFetch('/careersense/certifi/usage', {
          method: 'POST',
          body: JSON.stringify(log)
        });
      } catch (error) {
        console.error('[Zustand] Save usage log failed:', error);
      }
    }
  },

  clearCache: () => {
    set({
      profile: null,
      assessmentAttempts: [],
      certificates: [],
      badges: [],
      usageLogs: [],
      learningPaths: [],
      isSynced: false
    });
  }
}));

declare global {
  interface Window {
    clerkGetToken?: () => Promise<string | null>;
    clerkUserId?: string | null;
  }
}
