import React from 'react';
import { X, Download, Lock, Crown, Sparkles } from 'lucide-react';

/**
 * @typedef {Object} ReportDownloadModalProps
 * @property {boolean} open
 * @property {string} eyebrow
 * @property {string} title
 * @property {string} description
 * @property {Array<string>} sections
 * @property {number} careerPoints
 * @property {boolean} [isPremium]
 * @property {function(): void} onClose
 * @property {function(): void} [onConfirm]
 * @property {string} [confirmLabel]
 * @property {React.ComponentType<{className?: string}>} [confirmIcon]
 * @property {function(): void} [onPreview]
 * @property {string} [zIndexClass]
 */

export default function ReportDownloadModal({
  open,
  eyebrow = "Document Requisition",
  title = "Prepare Downloadable Score Report?",
  description,
  sections = [],
  careerPoints = 0,
  isPremium = false,
  onClose,
  onConfirm,
  confirmLabel = "Download Score Report",
  confirmIcon: ConfirmIcon = Download,
  onPreview,
  zIndexClass = "z-[160]"
}) {
  if (!open) return null;

  const handlePremiumClick = () => {
    alert("PDF Score Report Download is a Premium Feature. Subscription plans & full report downloads are coming soon!");
  };

  return (
    <div
      className={`fixed inset-0 ${zIndexClass} flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm no-print`}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Card Box */}
      <div className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Deep Navy Top Navbar */}
        <div className="relative flex items-center justify-between border-b border-slate-800 bg-[#0f172a] px-6 py-4 text-white">
          <div className="flex items-center gap-2.5">
            <img src="/Logo.png" alt="CareerSense Logo" className="h-7 w-7 object-contain" />
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1">
                <span className="text-base font-black tracking-tight text-white">Career</span>
                <span className="text-base font-black tracking-tight text-[#499587]">Sense</span>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Skills Validation & Certification
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white/10 p-1.5 text-slate-300 transition hover:bg-white/15 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Workspace Body Content Area */}
        <div className="relative bg-white px-8 pt-8 pb-6 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_55%)]">
          
          {/* Eyebrow & Main Headings */}
          <div className="flex items-center justify-between">
            <span className={`text-xs font-bold uppercase tracking-widest ${isPremium ? 'text-amber-600 flex items-center gap-1.5' : 'text-[#38bdf8]'}`}>
              {isPremium ? (
                <>
                  <Crown className="h-3.5 w-3.5 text-amber-500" />
                  Premium Feature
                </>
              ) : eyebrow}
            </span>
            {isPremium && (
              <span className="rounded-full bg-amber-100 border border-amber-200 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-amber-800">
                Coming Soon
              </span>
            )}
          </div>

          <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            {isPremium ? "Detailed PDF Score Report" : title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {isPremium
              ? "Downloading complete PDF score reports with question breakdown and detailed answer keys is reserved for Premium subscribers. PDF Report Downloads will be unlocked soon with our upcoming Subscription Plans!"
              : description}
          </p>

          {/* Appended Document Modules Box */}
          {sections.length > 0 && (
            <div className="mt-6 rounded-xl border border-slate-150 bg-white p-5 shadow-sm">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Appended Document Modules
              </h4>
              
              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {sections.map((section, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    <p className="text-xs font-medium leading-relaxed text-slate-700">
                      {section}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Required Resource Allocation / Premium Lock Box */}
          <div className="mt-4 flex items-center justify-between rounded-xl border border-amber-100 bg-amber-50/40 p-4">
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                {isPremium ? (
                  <>
                    <Lock className="h-4 w-4 text-amber-600" />
                    Access Tier: Premium Subscription
                  </>
                ) : (
                  "Required Resource Allocation"
                )}
              </h4>
              <p className="mt-0.5 text-xs text-slate-500">
                {isPremium
                  ? "Full report PDF export with answer keys will be enabled for Pro & Enterprise tiers."
                  : `Estimated processing surcharge: ${careerPoints > 0 ? `$${(careerPoints * 0.0001).toFixed(4)} USD` : '$0.0000 USD'}`}
              </p>
            </div>

            {isPremium ? (
              <span className="rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-xs font-bold text-amber-800 shadow-sm whitespace-nowrap">
                🔒 Locked (Coming Soon)
              </span>
            ) : (
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3.5 py-2 shadow-sm">
                <span className="text-xl font-black text-slate-900 leading-none">
                  {careerPoints}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                  Pts
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Call to Actions Control Bar */}
        <div className="flex items-center justify-end gap-2 border-t border-slate-100 bg-slate-50/50 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Close
          </button>

          {onPreview && !isPremium && (
            <button
              type="button"
              onClick={onPreview}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 shadow-sm"
            >
              Preview Report
            </button>
          )}

          {isPremium ? (
            <button
              type="button"
              onClick={handlePremiumClick}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700 shadow-md"
            >
              <Lock className="h-4 w-4 text-amber-100" />
              Premium Feature — Coming Soon
            </button>
          ) : (
            <button
              type="button"
              onClick={onConfirm}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 shadow-md"
            >
              {ConfirmIcon && <ConfirmIcon className="h-4 w-4" />}
              {confirmLabel}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}