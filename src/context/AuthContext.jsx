// import { createContext, useContext, useState, useEffect } from 'react';

// // Create the context
// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   // 1. Initialize user from localStorage (so you stay logged in on refresh)
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem('careerSenseUser');
//     return saved ? JSON.parse(saved) : null;
//   });

//   // 2. Login Function (Mock)
//   const login = (email, fullName = "New User") => {
//     // In a real app, you would validate password with backend here
//     const namePart = fullName || email.split('@')[0];
    
//     const mockUser = {
//       id: Date.now(),
//       name: namePart,
//       email: email,
//       // Generate a consistent avatar based on email
//       avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
//       plan: 'Free Plan', // Default plan
//       streak: 1
//     };

//     setUser(mockUser);
//     localStorage.setItem('careerSenseUser', JSON.stringify(mockUser));
//   };

//   // 3. Logout Function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('careerSenseUser');
//   };

//   // 4. Upgrade Function (For Subscription page)
//   const upgradeToPro = () => {
//     if (user) {
//       const updatedUser = { ...user, plan: 'Pro Plan' };
//       setUser(updatedUser);
//       localStorage.setItem('careerSenseUser', JSON.stringify(updatedUser));
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, upgradeToPro }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Custom hook helper
// export function useAuth() {
//   return useContext(AuthContext);
// }

import { createContext, useContext, useState, useEffect } from 'react';
import { normalizePublicProfileId } from '../services/publicProfiles';
import { useCertifiStore } from '../store/useCertifiStore';
import { useUser } from '@clerk/clerk-react';

const AuthContext = createContext();
const USER_STORAGE_KEY = 'careerSenseUser';
export const DEFAULT_PROFILE_BANNER =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80';

const buildAvatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&background=0d9488&color=fff`;
const MAX_INLINE_AVATAR_LENGTH = 280000;
const MAX_INLINE_BANNER_LENGTH = 420000;

const isInlineImage = (value) => typeof value === 'string' && value.startsWith('data:image/');
const isRemoteImage = (value) => typeof value === 'string' && Boolean(value) && !value.startsWith('data:image/');

const compactTimelineItems = (items = []) => (
  Array.isArray(items)
    ? items.slice(0, 24).map((item) => ({
        id: item?.id || item?.certificateId || '',
        title: String(item?.title || item?.name || '').slice(0, 160),
        subtitle: String(item?.subtitle || item?.issuer || item?.school || '').slice(0, 160),
        start: String(item?.start || item?.date || '').slice(0, 60),
        end: String(item?.end || '').slice(0, 60),
        description: String(item?.description || '').slice(0, 400),
        score: String(item?.score || '').slice(0, 40),
        certificateId: String(item?.certificateId || '').slice(0, 80),
      }))
    : []
);

const sanitizeUserForStorage = (user = {}, options = {}) => {
  const removeAvatar = options.removeAvatar ?? false;
  const minimalMode = options.minimalMode ?? false;
  const nextName = user?.name || 'User';
  const hasInlineAvatar = isInlineImage(user?.avatar) && user.avatar.length <= MAX_INLINE_AVATAR_LENGTH;
  const hasRemoteAvatar = isRemoteImage(user?.avatar);
  const hasInlineBanner = isInlineImage(user?.bannerImage) && user.bannerImage.length <= MAX_INLINE_BANNER_LENGTH;
  const hasRemoteBanner = isRemoteImage(user?.bannerImage);
  const avatarValue = !removeAvatar && (hasInlineAvatar || hasRemoteAvatar)
    ? user.avatar
    : buildAvatar(nextName);
  const bannerValue = hasInlineBanner || hasRemoteBanner
    ? user.bannerImage
    : DEFAULT_PROFILE_BANNER;

  return {
    id: user?.id || '',
    publicProfileId: normalizePublicProfileId(user?.publicProfileId, user),
    name: nextName,
    email: user?.email || '',
    plan: user?.plan || 'Free Plan',
    avatar: avatarValue,
    phone: String(user?.phone || '').slice(0, 80),
    currentRole: String(user?.currentRole || '').slice(0, 120),
    currentCompany: String(user?.currentCompany || '').slice(0, 120),
    profileStatus: String(user?.profileStatus || 'Open to Work').slice(0, 80),
    location: String(user?.location || '').slice(0, 120),
    bio: minimalMode ? '' : String(user?.bio || '').slice(0, 1200),
    bannerImage: bannerValue,
    education: minimalMode ? [] : compactTimelineItems(user?.education),
    certifications: minimalMode ? compactTimelineItems(user?.certifications).slice(0, 8) : compactTimelineItems(user?.certifications),
    awards: minimalMode ? [] : compactTimelineItems(user?.awards),
  };
};

const persistUserToStorage = (user = {}) => {
  const strategies = [
    { removeAvatar: false, minimalMode: false },
    { removeAvatar: false, minimalMode: true },
    { removeAvatar: true, minimalMode: false },
    { removeAvatar: true, minimalMode: true },
  ];

  let lastError = null;

  for (const strategy of strategies) {
    try {
      const sanitized = sanitizeUserForStorage(user, strategy);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(sanitized));
      return sanitized;
    } catch (error) {
      lastError = error;
      if (error?.name !== 'QuotaExceededError') {
        throw error;
      }
    }
  }

  throw lastError || new Error('Failed to persist user profile.');
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const storeProfile = useCertifiStore((state) => state.profile);
  const isSynced = useCertifiStore((state) => state.isSynced);
  const { user: clerkUser, isLoaded: isClerkUserLoaded } = useUser();

  useEffect(() => {
    // Check local storage on load
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const normalizedUser = sanitizeUserForStorage(parsedUser);
      setUser(normalizedUser);

      try {
        persistUserToStorage(normalizedUser);
      } catch (error) {
        console.error('Failed to normalize stored user profile:', error);
      }
    }
    setLoading(false);
  }, []);

  // --- UPDATED LOGIN FUNCTION ---
  // Now accepts 'name' as the third argument
  const login = (email, password, name) => {
    
    // Create the user object with the REAL name provided
    const userData = {
      id: "usr_" + Date.now(),
      name: name || "Anonymous User", // <--- Use the input name
      email: email,
      plan: "Free Plan",
      avatar: buildAvatar(name),
      phone: '',
      currentRole: '',
      currentCompany: '',
      profileStatus: 'Open to Work',
      location: '',
      bio: '',
      bannerImage: DEFAULT_PROFILE_BANNER,
      education: [],
      certifications: [],
      awards: [],
    };

    const persistedUser = persistUserToStorage(userData);
    setUser(persistedUser);
    return true;
  };

  const updateProfile = (profileUpdates) => {
    if (typeof window !== 'undefined' && window.clerkUserId) {
      useCertifiStore.getState().updateProfile(profileUpdates);
      return;
    }

    setUser((currentUser) => {
      if (!currentUser) return currentUser;

      const nextName = profileUpdates.name ?? currentUser.name;
      const nextUser = {
        ...currentUser,
        ...profileUpdates,
        name: nextName,
        avatar: profileUpdates.avatar || buildAvatar(nextName),
      };

      try {
        return persistUserToStorage(nextUser);
      } catch (error) {
        console.error('Failed to persist user profile:', error);
        return sanitizeUserForStorage(nextUser, { removeAvatar: true, minimalMode: true });
      }
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  const activeUser = clerkUser
    ? {
        id: clerkUser.id,
        name: storeProfile?.name || storeProfile?.fullName || clerkUser?.fullName || 'User',
        email: storeProfile?.email || clerkUser?.primaryEmailAddress?.emailAddress || '',
        avatar: storeProfile?.avatar || clerkUser?.imageUrl || '',
        ...storeProfile
      }
    : user;

  if (typeof window !== 'undefined' && activeUser?.email) {
    window.clerkUserEmail = activeUser.email;
  }

  if (!isClerkUserLoaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user: activeUser, login, logout, updateProfile, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
