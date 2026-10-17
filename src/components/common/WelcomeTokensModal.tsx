import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useUser } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Sparkles,
  FileCheck2,
  FilePenLine,
  ScrollText,
  Award,
  Compass,
  ArrowRight,
  X,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  shape: 'rect' | 'circle' | 'star';
  decay: number;
}

// Full-screen high-performance confetti canvas for the party popper burst
function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      '#10B981', '#34D399', '#059669', '#6EE7B7', // Emeralds & Greens
      '#F59E0B', '#FBBF24', '#EAB308',             // Champagne & Golds
      '#06B6D4', '#38BDF8',                         // Cyan & Sky
      '#F43F5E', '#FB7185',                         // Coral & Rose
      '#8B5CF6', '#A78BFA'                          // Violet
    ];

    const particles: Particle[] = [];

    const createBurst = (originX: number, originY: number, count = 75) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 7 + Math.random() * 18;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 5, // upward boost
          size: 6 + Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 16,
          opacity: 1,
          shape: Math.random() > 0.45 ? 'rect' : (Math.random() > 0.4 ? 'circle' : 'star'),
          decay: 0.009 + Math.random() * 0.013,
        });
      }
    };

    // Wave 1: Immediate central burst
    createBurst(width / 2, height / 2, 90);

    // Wave 2: Left & right party poppers firing inward 200ms later
    const timer2 = setTimeout(() => {
      createBurst(width * 0.2, height * 0.65, 55);
      createBurst(width * 0.8, height * 0.65, 55);
    }, 200);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.38; // gravity
        p.vx *= 0.96; // air drag
        p.vy *= 0.96;
        p.rotation += p.rotationSpeed;
        p.opacity -= p.decay;

        if (p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // 4-point sparkle star
          ctx.beginPath();
          for (let s = 0; s < 4; s++) {
            ctx.rotate(Math.PI / 4);
            ctx.rect(-p.size / 6, -p.size / 2, p.size / 3, p.size);
          }
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      clearTimeout(timer2);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100000] h-full w-full"
    />
  );
}

export default function WelcomeTokensModal() {
  const { user, isLoaded } = useUser();
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dismissing, setDismissing] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!isLoaded || !user?.id) return;
    if (hasTriggeredRef.current) return;

    let isMounted = true;
    const apiBase =
      import.meta.env.VITE_API_URL ||
      import.meta.env.VITE_BACKEND_URL ||
      import.meta.env.VITE_API_BASE_URL ||
      'https://server.datasenseai.com';

    fetch(`${apiBase}/careersense/subscription/status?clerkId=${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data?.success && data.hasSeenWelcomeModal === false && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          // Step 1: Start 2s celebration with party poppers and green text only
          setIsCelebrating(true);
        }
      })
      .catch((err) => {
        console.warn('Error checking welcome modal status:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [isLoaded, user?.id]);

  // Transition from celebration to welcome modal after 2 seconds
  useEffect(() => {
    if (!isCelebrating) return;

    const timer = setTimeout(() => {
      setIsCelebrating(false);
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isCelebrating]);

  // Allow clicking anywhere during celebration to immediately view the modal
  const handleSkipCelebration = () => {
    setIsCelebrating(false);
    setIsModalOpen(true);
  };

  const handleDismiss = async () => {
    if (dismissing) return;
    setDismissing(true);
    setIsModalOpen(false);
    if (user?.id) {
      try {
        const apiBase =
          import.meta.env.VITE_API_URL ||
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_API_BASE_URL ||
          'https://server.datasenseai.com';
        await fetch(`${apiBase}/careersense/subscription/dismiss-welcome-modal`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ clerkId: user.id }),
        });
      } catch (err) {
        console.warn('Error dismissing welcome modal:', err);
      }
    }
    setDismissing(false);
  };

  const handleExploreSuite = async () => {
    handleDismiss();
    window.open('https://careersenseai.com/#career-tools', '_blank', 'noopener,noreferrer');
  };

  if (!isCelebrating && !isModalOpen) return null;

  const careerTools = [
    {
      name: 'Certifi (Skill Validation)',
      desc: 'Take industry capability tests & earn verified credential badges.',
      icon: Award,
      isCurrent: true,
      tag: 'You are here',
    },
    {
      name: 'AI Resume Builder',
      url: 'https://resume.careersenseai.com/',
      desc: 'Import your verified certificates & badges into an executive ATS resume.',
      icon: FilePenLine,
      tag: 'Career Tool',
    },
    {
      name: 'ATS Score Checker',
      url: 'https://ats.careersenseai.com/',
      desc: 'Check your skill keyword coverage against target job descriptions.',
      icon: FileCheck2,
      tag: 'Career Tool',
    },
    {
      name: 'Cover Letter Builder',
      url: 'https://coverletter.careersenseai.com/',
      desc: 'Highlight certified accomplishments in tailored application letters.',
      icon: ScrollText,
      tag: 'Career Tool',
    },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
      <AnimatePresence mode="wait">
        {/* ========================================================= */}
        {/* STAGE 1: CONFETTI POPPER & PURE GREEN TEXT (NO POPUP CARD) */}
        {/* ========================================================= */}
        {isCelebrating && (
          <div
            key="celebration-screen"
            onClick={handleSkipCelebration}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 cursor-pointer select-none"
          >
            {/* Confetti Particle Streamers */}
            <ConfettiCanvas />

            {/* ONLY this text coming out from the centre of the screen */}
            <motion.h1
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 20,
                mass: 0.8
              }}
              className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#10B981] drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)] filter drop-shadow-[0_0_35px_rgba(16,185,129,0.75)] text-center px-4"
            >
              Free 30,000 AI Tokens
            </motion.h1>
          </div>
        )}

        {/* ========================================================= */}
        {/* STAGE 2: WELCOME POPUP MODAL (TRANSITIONS IN AFTER POPPER) */}
        {/* ========================================================= */}
        {isModalOpen && (
          <div key="welcome-dialog-screen" className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* High-trust Slate Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
              onClick={handleDismiss}
              aria-hidden="true"
            />

            {/* Modal Dialog Card in Clean Academic Slate & Teal Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white border border-teal-500/25 p-6 sm:p-8 shadow-2xl transition-all my-auto text-slate-900"
              role="dialog"
              aria-modal="true"
              aria-labelledby="welcome-modal-title"
            >
              {/* Subtle Teal Aura */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-teal-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

              {/* Close Button */}
              <button
                type="button"
                onClick={handleDismiss}
                className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition"
                aria-label="Close welcome modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Top Badge & Header */}
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-900 px-3.5 py-1 text-xs font-bold text-teal-300 shadow-xs">
                  <Zap className="h-3.5 w-3.5 fill-teal-300 text-teal-300 animate-pulse" />
                  <span className="tracking-wide">UNIVERSAL AI ACCESS PASS</span>
                  <span className="h-1 w-1 rounded-full bg-teal-300" />
                  <span className="text-white">30,000 FREE TOKENS</span>
                </div>

                <h2
                  id="welcome-modal-title"
                  className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-slate-950"
                >
                  Welcome to CareerSense AI!
                </h2>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  You’ve unlocked <strong className="text-slate-950 font-bold">30,000 Universal AI Tokens</strong>. Your balance is shared across all <strong className="text-slate-950 font-bold">4 Career Tools</strong> in our ecosystem:
                </p>
              </div>

              {/* 4 Career Tools Grid */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className={`group relative flex flex-col justify-between rounded-2xl border p-4 transition-all duration-200 ${tool.isCurrent
                          ? 'bg-gradient-to-br from-teal-900 to-teal-950 text-white border-teal-500/50 shadow-md'
                          : 'bg-slate-50/80 hover:bg-slate-100/70 border-slate-200 hover:border-teal-500/40 text-slate-900'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${tool.isCurrent
                                ? 'bg-teal-500/20 text-teal-300'
                                : 'bg-teal-50 text-teal-700'
                              }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <span
                            className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold tracking-wide uppercase ${tool.isCurrent
                                ? 'bg-teal-400 text-teal-950'
                                : 'bg-slate-200 text-slate-700'
                              }`}
                          >
                            {tool.tag}
                          </span>
                        </div>

                        <h3
                          className={`mt-2.5 text-sm font-bold tracking-tight ${tool.isCurrent ? 'text-white' : 'text-slate-900'
                            }`}
                        >
                          {tool.name}
                        </h3>

                        <p
                          className={`mt-1 text-xs leading-normal ${tool.isCurrent ? 'text-teal-100/90' : 'text-slate-600'
                            }`}
                        >
                          {tool.desc}
                        </p>
                      </div>

                      {!tool.isCurrent && (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 hover:text-teal-900 transition"
                        >
                          <span>Visit Tool</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {tool.isCurrent && (
                        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-teal-300">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>Skill hub ready for assessment</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Free Career GPS Highlight Banner */}
              <div className="mt-4 rounded-2xl border border-teal-200/80 bg-gradient-to-r from-teal-50/50 to-slate-50 p-3.5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                  <Compass className="h-5 w-5 text-teal-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">Career GPS (Roadmap & Career Score)</span>
                    <span className="rounded bg-emerald-100 text-emerald-800 font-extrabold text-[9px] px-1.5 py-0.2 uppercase tracking-wide">
                      100% Free
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Available to all users on the main landing page without spending any tokens.
                  </p>
                </div>
                <a
                  href="https://careersenseai.com/career-gps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-extrabold text-teal-700 hover:text-teal-950 underline underline-offset-2 flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              {/* Action Controls */}
              <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleExploreSuite}
                  className="w-full sm:w-auto text-xs font-bold text-slate-600 hover:text-slate-900 transition py-2 px-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1"
                >
                  <span>View All Tools on CareerSense</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleDismiss}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 hover:bg-teal-800 px-6 py-2.5 text-xs font-extrabold text-white shadow-md shadow-teal-900/15 transition active:scale-95"
                >
                  <Sparkles className="h-4 w-4 text-teal-200" />
                  <span>Got It — Start Skill Assessment</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
}
