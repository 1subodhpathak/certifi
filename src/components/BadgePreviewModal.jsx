import React, { useEffect, useState } from 'react';
import { Download, Loader2, X, CheckCircle2, Sparkles, PencilRuler, Palette } from 'lucide-react';
import ReportDownloadModal from './ReportDownloadModal';

/**
 * @typedef {Object} BadgePreviewModalProps
 * @property {boolean} open
 * @property {string} skill
 * @property {string} badgeTitle
 * @property {string} previewUrl
 * @property {Array<{id: string, name: string, description: string, previewUrl: string}>} designOptions
 * @property {Array<{id: string, name: string, colors: {primary: string, secondary: string, accent: string, soft: string}}>} paletteOptions
 * @property {string} selectedDesignId
 * @property {string} selectedPaletteId
 * @property {boolean} isPreparing
 * @property {boolean} isPreviewLoading
 * @property {boolean} storedNotice
 * @property {number} editCareerPoints
 * @property {function(string): void} onSelectDesign
 * @property {function(string): void} onSelectPalette
 * @property {function(): void} onConfirmEditCharge
 * @property {function(): void} onClose
 * @property {function(): void} onStore
 * @property {function(): void} onDownload
 */

export default function BadgePreviewModal({
  open,
  skill,
  badgeTitle,
  previewUrl,
  designOptions = [],
  paletteOptions = [],
  selectedDesignId = '',
  selectedPaletteId = '',
  isPreparing = false,
  isPreviewLoading = false,
  storedNotice = false,
  editCareerPoints = 500,
  onSelectDesign,
  onSelectPalette,
  onConfirmEditCharge,
  onClose,
  onStore,
  onDownload,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditConfirmOpen, setIsEditConfirmOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setIsEditing(false);
      setIsEditConfirmOpen(false);
    }
  }, [open]);

  const handleEditBadgeClick = () => {
    if (isEditing) {
      setIsEditing(false);
      return;
    }
    setIsEditConfirmOpen(true);
  };

  const handleConfirmEdit = () => {
    onConfirmEditCharge?.();
    setIsEditConfirmOpen(false);
    setIsEditing(true);
  };

  const handleDeclineEdit = () => {
    setIsEditConfirmOpen(false);
    setIsEditing(false);
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[145] flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm no-print"
        role="dialog"
        aria-modal="true"
        aria-labelledby="badge-modal-title"
      >
        <div className={`relative flex h-[85vh] max-h-[850px] w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ${isEditing ? 'max-w-6xl' : 'max-w-3xl'}`}>
          
          {/* Top Navbar */}
          <div className="relative flex items-center justify-between overflow-hidden border-b border-slate-800 bg-[#0f172a] px-8 py-6 text-white">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#38bdf8] opacity-10 blur-[100px]" />
            <div className="relative z-10 flex items-center gap-3">
              <img src="/Logo.png" alt="CareerSense Logo" className="h-12 w-12 object-contain" />
              <div className="flex flex-col justify-center">
                <div className="flex items-center -mb-1">
                  <span className="text-2xl font-black tracking-tight text-white">Career</span>
                  <span className="text-2xl font-black tracking-tight text-[#499587]">Sense</span>
                </div>
                <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  CERTIFI.AI PLATFORM
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="relative z-10 rounded-full bg-white/10 p-2 text-slate-300 transition hover:bg-white/15 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Layout Workspace */}
          <div className="flex min-h-0 flex-1 overflow-hidden divide-x divide-slate-200">
            {storedNotice ? (
              <div className="pointer-events-none absolute right-6 top-[96px] z-20">
                <div className="flex items-center gap-2 rounded-xl border border-teal-200 bg-white px-4 py-3 text-sm font-semibold text-teal-800 shadow-lg shadow-teal-100/70">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  Badge saved to profile
                </div>
              </div>
            ) : null}
            
            {/* Left Preview Pane */}
            <div className={`flex min-h-0 flex-col ${isEditing ? 'w-[45%]' : 'w-full'}`}>
              <div className="flex-1 overflow-y-auto px-8 py-8">
              
              {/* Header Metadata Info */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#38bdf8]">Official Credential</span>
                  <h2 id="badge-modal-title" className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {badgeTitle || skill}
                  </h2>
                  <p className="mt-2 text-base font-medium text-slate-500">Skill: {skill}</p>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Badge Preview</p>
                <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_58%),linear-gradient(180deg,_#ffffff,_#f8fafc)] p-6 shadow-inner">
                  {isPreviewLoading || !previewUrl ? (
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                      <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
                      <p className="text-xs font-medium">Rendering badge...</p>
                    </div>
                  ) : (
                    <img
                      src={previewUrl}
                      alt={`${badgeTitle || skill} badge`}
                      className="max-h-[520px] max-w-full object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.18)] transition-transform"
                    />
                  )}
                </div>
              </div>

              {storedNotice && (
                <div className="mb-6 flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  Badge successfully saved to profile
                </div>
              )}
              </div>
              <div className="border-t border-slate-200 bg-slate-50 px-8 py-5">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <button
                    type="button"
                    onClick={handleEditBadgeClick}
                    className={`inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-all ${
                      isEditing
                        ? 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-400'
                    }`}
                  >
                    {isEditing ? <Palette className="h-4 w-4" /> : <PencilRuler className="h-4 w-4" />}
                    {isEditing ? 'Hide Editor' : 'Edit Badge'}
                  </button>

                  <button
                    type="button"
                    onClick={onStore}
                    disabled={isPreparing}
                    className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Save to Profile
                  </button>

                  <button
                    type="button"
                    onClick={onDownload}
                    disabled={isPreparing}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                  >
                    {isPreparing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                    {isPreparing ? 'Preparing Badge...' : 'Download Badge'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Editor Sidepanel (Hidden unless editing active) */}
            <div className={`min-h-0 overflow-y-auto bg-slate-50/50 p-8 ${isEditing ? 'flex-1' : 'hidden'}`}>
              
              {/* Context Prompt */}
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <Sparkles className="h-5 w-5 text-teal-600 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Customization Engine</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Modify parameters dynamically below to live-update your secure credential layout.</p>
                </div>
              </div>

              {/* Color Themes Grid */}
              {paletteOptions.length > 0 && (
                <section className="mb-6">
                  <div className="mb-2.5 flex items-baseline justify-between">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Color Palette</h4>
                    <span className="text-[10px] text-slate-400">{paletteOptions.length} archetypes</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {paletteOptions.map((palette) => {
                      const active = palette.id === selectedPaletteId;
                      return (
                        <button
                          key={palette.id}
                          type="button"
                          onClick={() => onSelectPalette?.(palette.id)}
                          className={`group rounded-lg border p-2 text-left bg-white transition-all ${
                            active
                              ? 'border-teal-500 ring-1 ring-teal-500 bg-teal-50/20'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex overflow-hidden rounded-md border border-slate-100">
                            {[palette.colors.primary, palette.colors.secondary, palette.colors.accent, palette.colors.soft].map((color, index) => (
                              <span key={`${palette.id}-${index}`} className="h-4 flex-1" style={{ backgroundColor: color }} />
                            ))}
                          </div>
                          <p className={`mt-1.5 text-[11px] font-semibold truncate ${active ? 'text-teal-900' : 'text-slate-700'}`}>
                            {palette.name}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Insignia Geometry Styles */}
              <section>
                <div className="mb-2.5 flex items-baseline justify-between">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Insignia Geometry</h4>
                  <span className="text-[10px] text-slate-400">{designOptions.length} design layouts</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {designOptions.map((design) => {
                    const active = design.id === selectedDesignId;
                    return (
                      <button
                        key={design.id}
                        type="button"
                        onClick={() => onSelectDesign?.(design.id)}
                        className={`group flex flex-col rounded-lg border p-2.5 bg-white text-center transition-all ${
                          active
                            ? 'border-teal-500 ring-1 ring-teal-500 bg-teal-50/10'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="mb-2 flex h-20 w-full items-center justify-center overflow-hidden rounded-md bg-slate-50 transition-colors group-hover:bg-slate-100/70">
                          <img
                            src={design.previewUrl}
                            alt={design.name}
                            className={`h-full w-full object-contain p-1.5 transition-transform duration-300 ${active ? 'scale-105' : 'group-hover:scale-102'}`}
                          />
                        </div>
                        <p className={`text-xs font-bold truncate ${active ? 'text-teal-900' : 'text-slate-800'}`}>
                          {design.name}
                        </p>
                        <p className="mt-0.5 text-[10px] leading-snug text-slate-400 line-clamp-2">
                          {design.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <ReportDownloadModal
        open={isEditConfirmOpen}
        eyebrow="Badge Editor Authorization"
        title="Unlock Badge Editor?"
        description="Editing lets you choose any badge design and any color theme before storing or downloading your credential badge."
        sections={[
          'Unlock custom badge design selection',
          'Unlock custom color theme selection',
          'Create your own personalized badge version',
        ]}
        careerPoints={editCareerPoints}
        onClose={handleDeclineEdit}
        onConfirm={handleConfirmEdit}
        confirmLabel="Yes, Edit Badge"
        confirmIcon={PencilRuler}
        zIndexClass="z-[160]"
      />
    </>
  );
}
