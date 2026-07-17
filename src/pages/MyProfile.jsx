import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCertifiStore } from '../store/useCertifiStore';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { authenticatedFetch } from '../services/api';
import DashboardShell from '../components/DashboardShell';
import { Award, Briefcase, GraduationCap, ImagePlus, MapPin, Plus, Save, Trash2, UserRound, CheckCircle2, ExternalLink, Loader2 } from 'lucide-react';
import { getPublicProfileId, savePublicProfileSnapshot } from '../services/publicProfiles';
import { getStoredCertificates } from '../services/certificateRegistry';
import { getStoredAssessmentAttempts } from '../services/attemptRegistry';
import { DEFAULT_PROFILE_BANNER } from '../context/AuthContext';

function createTimelineItem() {
  return {
    title: '',
    subtitle: '',
    start: '',
    end: '',
    description: '',
  };
}

const inputClasses = "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20";
const labelClasses = "mb-1.5 block text-xs font-semibold text-slate-500";
const PROFILE_STATUS_OPTIONS = [
  'Open to Work',
  'Hiring',
  'Not Looking for Job',
  'Learning',
  'Expecting Promotion',
  'Retired',
  'Startup Vibe',
  'Freelancing',
  'Building in Public',
  'Career Switch',
];

function resizeImageFile(file, { maxWidth = 320, maxHeight = 320, quality = 0.82 } = {}) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));

      const context = canvas.getContext('2d');
      if (!context) {
        URL.revokeObjectURL(objectUrl);
        reject(new Error('Canvas is not available.'));
        return;
      }

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(objectUrl);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to process profile image.'));
    };

    image.src = objectUrl;
  });
}

function TimelineSection({ title, icon: Icon, items, onAdd, onChange, onRemove, accent = 'teal' }) {
  const chipClass =
    accent === 'amber'
      ? 'bg-amber-50 text-amber-600 ring-amber-200/50'
      : accent === 'blue'
        ? 'bg-blue-50 text-blue-600 ring-blue-200/50'
        : 'bg-teal-50 text-teal-600 ring-teal-200/50';

  return (
    <section className="rounded-2xl border border-slate-200/75 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${chipClass}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">Add items in reverse-chronological order for the best timeline.</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onAdd}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
        >
          <Plus className="h-4 w-4 text-slate-400" />
          Add Entry
        </button>
      </div>

      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/50 py-8 text-center">
            <Icon className="mb-2 h-6 w-6 text-slate-300" />
            <p className="text-sm font-medium text-slate-500">No entries yet</p>
            <p className="text-xs text-slate-400 mt-1">Click 'Add Entry' to start building your timeline.</p>
          </div>
        ) : null}

        {items.map((item, index) => (
          <div key={`${title}-${index}`} className="group relative rounded-xl border border-slate-100 bg-slate-50/50 p-5 transition-colors hover:border-slate-200 hover:bg-slate-50">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelClasses}>Title</label>
                <input
                  value={item.title}
                  onChange={(e) => onChange(index, 'title', e.target.value)}
                  placeholder={title === 'Education' ? 'Degree / Program' : title === 'Awards' ? 'Award name' : 'Certification name'}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Subtitle</label>
                <input
                  value={item.subtitle}
                  onChange={(e) => onChange(index, 'subtitle', e.target.value)}
                  placeholder={title === 'Education' ? 'School / University' : 'Issuer / Organization'}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Start Date</label>
                <input
                  value={item.start}
                  onChange={(e) => onChange(index, 'start', e.target.value)}
                  placeholder="e.g. Jun 2022"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>End Date</label>
                <input
                  value={item.end}
                  onChange={(e) => onChange(index, 'end', e.target.value)}
                  placeholder="e.g. Present"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className={labelClasses}>Description</label>
              <textarea
                value={item.description}
                onChange={(e) => onChange(index, 'description', e.target.value)}
                rows={3}
                placeholder="Add a short description, highlights, or notes."
                className={inputClasses}
              />
            </div>

            <div className="mt-5 flex justify-end border-t border-slate-200/60 pt-4">
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
                Remove Entry
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MyProfile() {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const { isSignedIn } = useClerkAuth();
  const isSynced = useCertifiStore((state) => state.isSynced);

  const [savedNotice, setSavedNotice] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [isUploadingBanner, setIsUploadingBanner] = useState(false);
  const [form, setForm] = useState(() => ({
    name: user?.name || '',
    avatar: user?.avatar || '',
    email: user?.email || '',
    phone: user?.phone || '',
    currentRole: user?.currentRole || '',
    currentCompany: user?.currentCompany || '',
    profileStatus: user?.profileStatus || 'Open to Work',
    location: user?.location || '',
    bio: user?.bio || '',
    bannerImage: user?.bannerImage || DEFAULT_PROFILE_BANNER,
    education: user?.education || [],
    certifications: user?.certifications || [],
    awards: user?.awards || [],
  }));

  const [hasSyncedForm, setHasSyncedForm] = useState(false);

  useEffect(() => {
    if (user && isSynced && !hasSyncedForm) {
      setForm({
        name: user.name || '',
        avatar: user.avatar || '',
        email: user.email || '',
        phone: user.phone || '',
        currentRole: user.currentRole || '',
        currentCompany: user.currentCompany || '',
        profileStatus: user.profileStatus || 'Open to Work',
        location: user.location || '',
        bio: user.bio || '',
        bannerImage: user.bannerImage || DEFAULT_PROFILE_BANNER,
        education: user.education || [],
        certifications: user.certifications || [],
        awards: user.awards || [],
      });
      setHasSyncedForm(true);
    }
  }, [user, isSynced, hasSyncedForm]);

  const summaryLine = useMemo(() => {
    const role = form.currentRole?.trim();
    const company = form.currentCompany?.trim();
    if (role && company) return `${role} at ${company}`;
    return role || company || 'Add your current role and company to complete your profile.';
  }, [form.currentCompany, form.currentRole]);
  const publicProfileId = useMemo(() => getPublicProfileId(user), [user]);
  const isDirty = useMemo(() => {
    if (!user) return false;
    const isStringDiff =
      (form.name || '') !== (user.name || '') ||
      (form.avatar || '') !== (user.avatar || '') ||
      (form.email || '') !== (user.email || '') ||
      (form.phone || '') !== (user.phone || '') ||
      (form.currentRole || '') !== (user.currentRole || '') ||
      (form.currentCompany || '') !== (user.currentCompany || '') ||
      (form.profileStatus || 'Open to Work') !== (user.profileStatus || 'Open to Work') ||
      (form.location || '') !== (user.location || '') ||
      (form.bio || '') !== (user.bio || '') ||
      (form.bannerImage || DEFAULT_PROFILE_BANNER) !== (user.bannerImage || DEFAULT_PROFILE_BANNER);

    if (isStringDiff) return true;

    const isArrayDiff = (arr1, arr2) => {
      const a1 = arr1 || [];
      const a2 = arr2 || [];
      if (a1.length !== a2.length) return true;
      return JSON.stringify(a1) !== JSON.stringify(a2);
    };

    return (
      isArrayDiff(form.education, user.education) ||
      isArrayDiff(form.certifications, user.certifications) ||
      isArrayDiff(form.awards, user.awards)
    );
  }, [form, user]);

  const avatarPreview = form.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name || user?.name || 'User')}&background=0d9488&color=fff`;

  if (isSignedIn && !isSynced) {
    return (
      <DashboardShell
        title="My Profile"
        subtitle="Keep your professional profile updated for certificates details in sync."
      >
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
          <p className="text-sm font-semibold text-slate-500">Retrieving your profile details...</p>
        </div>
      </DashboardShell>
    );
  }

  if (!user) return null;

  const setField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSavedNotice(false);
  };

  const dataURLtoBlob = (dataurl) => {
    try {
      const arr = dataurl.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    } catch (e) {
      console.error('Failed to parse data URL to Blob:', e);
      return null;
    }
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file.');
      return;
    }

    setIsUploadingAvatar(true);
    resizeImageFile(file, { maxWidth: 320, maxHeight: 320, quality: 0.82 })
      .then(async (resizedImage) => {
        const blob = dataURLtoBlob(resizedImage);
        if (!blob) throw new Error('Blob conversion failed');
        
        const formData = new FormData();
        formData.append('image', blob, file.name);

        const response = await authenticatedFetch('/careersense/certifi/profile/upload-image', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Upload request failed');
        }

        const data = await response.json();
        const apiBase = import.meta.env.VITE_API_URL || '';
        const imageUrl = data.url?.startsWith('/') ? `${apiBase}${data.url}` : data.url;
        setField('avatar', imageUrl);
      })
      .catch((error) => {
        console.error('Failed to upload profile image:', error);
        alert('We could not upload this image. Please try again.');
      })
      .finally(() => {
        setIsUploadingAvatar(false);
      });
  };

  const handleBannerUpload = (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file.');
      return;
    }

    setIsUploadingBanner(true);
    resizeImageFile(file, { maxWidth: 1600, maxHeight: 520, quality: 0.8 })
      .then(async (resizedImage) => {
        const blob = dataURLtoBlob(resizedImage);
        if (!blob) throw new Error('Blob conversion failed');

        const formData = new FormData();
        formData.append('image', blob, file.name);

        const response = await authenticatedFetch('/careersense/certifi/profile/upload-image', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Upload request failed');
        }

        const data = await response.json();
        const apiBase = import.meta.env.VITE_API_URL || '';
        const imageUrl = data.url?.startsWith('/') ? `${apiBase}${data.url}` : data.url;
        setField('bannerImage', imageUrl);
      })
      .catch((error) => {
        console.error('Failed to upload cover image:', error);
        alert('We could not upload this cover image. Please try again.');
      })
      .finally(() => {
        setIsUploadingBanner(false);
      });
  };

  const addTimelineItem = (field) => {
    setForm((current) => ({ ...current, [field]: [...current[field], createTimelineItem()] }));
    setSavedNotice(false);
  };

  const updateTimelineItem = (field, index, key, value) => {
    setForm((current) => ({
      ...current,
      [field]: current[field].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item
      ),
    }));
    setSavedNotice(false);
  };

  const removeTimelineItem = (field, index) => {
    setForm((current) => ({
      ...current,
      [field]: current[field].filter((_, itemIndex) => itemIndex !== index),
    }));
    setSavedNotice(false);
  };

  const handleSave = () => {
    const nextProfile = {
      name: form.name.trim(),
      avatar: form.avatar,
      email: form.email.trim(),
      phone: form.phone.trim(),
      currentRole: form.currentRole.trim(),
      currentCompany: form.currentCompany.trim(),
      profileStatus: form.profileStatus.trim() || 'Open to Work',
      location: form.location.trim(),
      bio: form.bio.trim(),
      bannerImage: form.bannerImage.trim() || DEFAULT_PROFILE_BANNER,
      education: form.education,
      certifications: form.certifications,
      awards: form.awards,
      publicProfileId: publicProfileId
    };

    updateProfile(nextProfile);
    savePublicProfileSnapshot(
      { ...user, ...nextProfile },
      getStoredCertificates(),
      getStoredAssessmentAttempts(),
    );
    setSavedNotice(true);
  };

  return (
    <DashboardShell
      title="My Profile"
      subtitle="Keep your professional profile updated for certificates details in sync."
      activeTab="profile"
      contentClassName="px-8 py-8 pb-12 bg-[#f4fafa]"
    >
      <div className="mx-auto max-w-5xl space-y-6 pb-12">
        <section className="rounded-2xl border border-slate-200/75 bg-white p-6 shadow-sm">
          <div className="mb-8">
            <label className={labelClasses}>Public Profile Cover Image</label>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative">
                <div
                  className="h-44 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url("${form.bannerImage || DEFAULT_PROFILE_BANNER}")` }}
                />
                {isUploadingBanner && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm">
                    <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3 border-t border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">Upload a custom cover image or reset back to the default banner.</p>
                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-1">
                    <ImagePlus className="h-3.5 w-3.5 text-slate-400" />
                    Upload Cover Image
                    <input type="file" accept="image/*" onChange={handleBannerUpload} className="hidden" />
                  </label>
                  <button
                    type="button"
                    onClick={() => setField('bannerImage', DEFAULT_PROFILE_BANNER)}
                    className="inline-flex shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Reset Default
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="relative group shrink-0">
                <img 
                  src={avatarPreview}
                  alt={form.name || 'Profile avatar'} 
                  className="h-24 w-24 rounded-2xl border border-slate-200 bg-slate-50 object-cover shadow-sm ring-4 ring-white" 
                />
                {isUploadingAvatar && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/60 backdrop-blur-sm">
                    <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
                  </div>
                )}
              </div>
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700 ring-1 ring-teal-200/50">
                    <UserRound className="h-3 w-3" />
                    Profile Details
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">{form.name || 'Your Name'}</h2>
                <p className="text-sm text-slate-500 mt-1">{summaryLine}</p>
                <p className="mt-2 inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-200/70">
                  Status: {form.profileStatus || 'Open to Work'}
                </p>
                
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <label className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-1">
                    <ImagePlus className="h-3.5 w-3.5 text-slate-400" />
                    Upload Image
                    <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                  </label>
                  <button
                    type="button"
                    onClick={() => setField('avatar', '')}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              {savedNotice && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/50 animate-in fade-in slide-in-from-right-4">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Saved
                </span>
              )}
              <button
                type="button"
                onClick={() => navigate(`/u/${encodeURIComponent(publicProfileId)}`)}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Public Profile
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={!isDirty}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
              >
                <Save className="h-4 w-4" />
                Save Profile
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 border-t border-slate-100 pt-6 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <label className={labelClasses}>Full Name</label>
              <input value={form.name} onChange={(e) => setField('name', e.target.value)} className={inputClasses} placeholder="John Doe" />
            </div>
            <div>
              <label className={labelClasses}>Email Address</label>
              <input value={form.email} onChange={(e) => setField('email', e.target.value)} type="email" className={inputClasses} placeholder="john@example.com" />
            </div>
            <div>
              <label className={labelClasses}>Phone Number</label>
              <input value={form.phone} onChange={(e) => setField('phone', e.target.value)} type="tel" className={inputClasses} placeholder="+1 (555) 000-0000" />
            </div>
            <div>
              <label className={labelClasses}>Current Role / Designation</label>
              <input value={form.currentRole} onChange={(e) => setField('currentRole', e.target.value)} className={inputClasses} placeholder="Senior Developer" />
            </div>
            <div>
              <label className={labelClasses}>Current Company</label>
              <input value={form.currentCompany} onChange={(e) => setField('currentCompany', e.target.value)} className={inputClasses} placeholder="Acme Corp" />
            </div>
            <div>
              <label className={labelClasses}>Profile Status</label>
              <select value={form.profileStatus} onChange={(e) => setField('profileStatus', e.target.value)} className={inputClasses}>
                {PROFILE_STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClasses}>Location</label>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input value={form.location} onChange={(e) => setField('location', e.target.value)} className={`${inputClasses} pl-10`} placeholder="City, Country" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className={labelClasses}>Bio / Professional Summary</label>
            <textarea
              value={form.bio}
              onChange={(e) => setField('bio', e.target.value)}
              rows={4}
              placeholder="Add a short professional summary, core interests, or anything recruiters should know."
              className={inputClasses}
            />
          </div>
        </section>

        <TimelineSection
          title="Education"
          icon={GraduationCap}
          items={form.education}
          onAdd={() => addTimelineItem('education')}
          onChange={(index, key, value) => updateTimelineItem('education', index, key, value)}
          onRemove={(index) => removeTimelineItem('education', index)}
          accent="blue"
        />

        <TimelineSection
          title="Certifications"
          icon={Briefcase}
          items={form.certifications}
          onAdd={() => addTimelineItem('certifications')}
          onChange={(index, key, value) => updateTimelineItem('certifications', index, key, value)}
          onRemove={(index) => removeTimelineItem('certifications', index)}
        />

        <TimelineSection
          title="Awards"
          icon={Award}
          items={form.awards}
          onAdd={() => addTimelineItem('awards')}
          onChange={(index, key, value) => updateTimelineItem('awards', index, key, value)}
          onRemove={(index) => removeTimelineItem('awards', index)}
          accent="amber"
        />
      </div>
    </DashboardShell>
  );
}
