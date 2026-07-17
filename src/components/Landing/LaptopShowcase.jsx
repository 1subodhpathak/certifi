import React, { useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout, BookOpen, GraduationCap, Plus, Coins, TrendingUp, Award,
  ChevronRight, Clock, Play, Lock, User, History, FileText, Zap,
  Activity, CheckCircle2, AlertCircle, Settings, Camera, Flame, Trophy,
  Monitor, Briefcase, MapPin, Mail, Target, Sparkles
} from 'lucide-react';
import anamikaImage from '../../assets/Anamika.png';

// Import Mobile Screenshots
import dashboardImg from '../../assets/Laptop/Dashboard.png';
import practiceImg from '../../assets/Laptop/Practice.png';
import learningImg from '../../assets/Laptop/Learning.png';
import certificateImg from '../../assets/Laptop/Certificate.png';
import createImg from '../../assets/Laptop/Create.png';
import profileImg from '../../assets/Laptop/MyProfile.png';
import usageImg from '../../assets/Laptop/Usage.png';

const screenImages = [
  dashboardImg,
  practiceImg,
  learningImg,
  certificateImg,
  createImg,
  profileImg,
  usageImg
];

const LaptopShowcase = ({ isDark = false, sceneIndex: controlledIndex = undefined } = {}) => {
  const [localIndex, setLocalIndex] = useState(0);
  const activeIndex = controlledIndex !== undefined ? controlledIndex : localIndex;

  // Track the actual width of the laptop screen to scale the content proportionally on Desktop
  const screenRef = useRef(null);
  const [screenScale, setScreenScale] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // We design the inner UI for a 1024px width. We scale it based on the actual container width.
        setScreenScale(entry.contentRect.width / 1024);
      }
    });

    if (screenRef.current) {
      observer.observe(screenRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (controlledIndex !== undefined) return undefined;

    const sceneCount = 7;
    const intervalId = window.setInterval(() => {
      setLocalIndex((current) => (current + 1) % sceneCount);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [controlledIndex]);

  return (
    <div className="relative flex w-full items-center justify-center bg-[url('/Office.png')] bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      
      <div
        className={`absolute inset-0 backdrop-blur-[6px] transition-colors duration-500 ${
          isDark ? 'bg-slate-950/82' : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(248,250,252,0.68))]'
        }`}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col">
        
        {/* Title */}
        <div className="mx-auto max-w-[580px] pb-6 pt-2 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Certification Engine Workflow In Action
          </div>
        </div>

        {/* Laptop Frame */}
        <div className="relative w-full aspect-[16/10.2]">
          <div className="absolute inset-x-[3.5%] top-0 h-[95.1%] rounded-t-[0.8rem] sm:rounded-t-[1.2rem] bg-[#111215] px-[4px] sm:px-[10px] pb-[8px] sm:pb-[16px] pt-[4px] sm:pt-[10px] shadow-[0_28px_60px_-36px_rgba(0,0,0,0.42)]">
            
            <div className="absolute left-1/2 top-[2px] sm:top-[4px] z-30 h-1 w-1 sm:h-1.5 sm:w-1.5 -translate-x-1/2 rounded-full bg-[#272a33]" />
            
            {/* Screen Content Wrapper */}
            <div 
              ref={screenRef} 
              className="relative h-full w-full overflow-hidden bg-[#0f1523] sm:bg-[#f8fafc] border border-slate-800 rounded-[0.15rem]"
            >
              
              {/* --- MOBILE VIEW: Crisp Image Slideshow with Seamless Crossfade --- */}
              <div className="absolute inset-0 z-50 block md:hidden">
                {/* Removed mode="wait" so images crossfade simultaneously */}
                <AnimatePresence>
                  <motion.img
                    key={activeIndex}
                    src={screenImages[activeIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    alt={`Platform Workflow View ${activeIndex + 1}`}
                  />
                </AnimatePresence>
              </div>

              {/* --- DESKTOP VIEW: Live Scaled HTML Canvas --- */}
              <div 
                className="hidden md:flex absolute left-0 top-0 origin-top-left flex-col bg-[#f8fafc] text-slate-800"
                style={{
                  width: '1024px',
                  // Dynamically invert the height scale so it exactly fills the frame
                  height: `${100 / (screenScale || 1)}%`,
                  transform: `scale(${screenScale})`
                }}
              >
                <div className="flex h-full w-full overflow-hidden">
                  
                  {/* Left Sidebar (Dark) */}
                  <div className="flex flex-col w-[190px] shrink-0 bg-[#0f1523] text-slate-300 justify-between font-sans relative z-20">
                    <div className="p-4 space-y-5">
                      {/* Logo */}
                      <div className="flex items-center gap-2 mb-2 cursor-pointer">
                        <div className="h-6 w-6 rounded bg-[#10b981] flex items-center justify-center text-white">
                          <Zap size={14} className="fill-white" />
                        </div>
                        <span className="text-[0.85rem] font-bold text-white tracking-tight">CareerSense</span>
                        <div className="ml-auto opacity-50"><Layout size={12}/></div>
                      </div>

                      {/* Navigation */}
                      <div className="space-y-0.5">
                        <span className="text-[0.55rem] font-bold text-slate-500 uppercase tracking-widest block px-2 mb-2">Menu</span>
                        {[
                          { label: 'Dashboard', icon: Layout, index: 0 },
                          { label: 'Practice Hub', icon: Activity, index: 1 },
                          { label: 'Learning Paths', icon: BookOpen, index: 2,  },
                          { label: 'Certificates', icon: Award, index: 3 },
                          { label: 'Create Assessment', icon: Target, index: 4 },
                          { label: 'My Profile', icon: Monitor, index: 5 },
                          { label: 'Usage & Billing', icon: Coins, index: 6 }
                        ].map((item) => {
                          const isActive = activeIndex === item.index;
                          return (
                            <div 
                              key={item.label} 
                              onClick={() => setLocalIndex(item.index)}
                              className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[0.7rem] font-medium transition-all cursor-pointer ${
                                isActive ? 'bg-[#1a2b3c] text-[#10b981]' : 'hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <item.icon size={14} className={isActive ? 'text-[#10b981]' : 'text-slate-500'} />
                                <span>{item.label}</span>
                              </div>
                              {item.badge && <span className="bg-[#10b981] text-[0.5rem] font-bold text-white px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="p-3 space-y-3">
                      {/* Pro Plan Box */}
                      <div className="bg-[#1a2332] rounded-xl p-3 border border-slate-700/50">
                        <div className="flex items-center gap-1.5 text-yellow-500 font-bold text-[0.65rem] mb-1">
                          <Zap size={12} className="fill-yellow-500" /> Pro Plan
                        </div>
                        <p className="text-[0.6rem] text-slate-400 mb-2 leading-tight">Unlock unlimited AI tests.</p>
                        <button className="w-full bg-[#10b981] text-white text-[0.65rem] font-bold py-1.5 rounded-md hover:bg-[#059669]">Upgrade</button>
                      </div>

                      {/* Profile Snippet */}
                      <div className="flex items-center gap-2 pt-1 pb-1 cursor-pointer hover:bg-white/5 rounded-lg px-1">
                        <img src={anamikaImage} alt="Profile" className="h-7 w-7 rounded-full object-cover" />
                        <div className="min-w-0">
                          <div className="text-[0.65rem] font-bold text-white truncate leading-tight">Pooja Agarwal</div>
                          <div className="text-[0.55rem] text-slate-500 truncate leading-tight">Senior Manager - BI</div>
                        </div>
                        <ChevronRight size={12} className="ml-auto text-slate-600" />
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 flex flex-col min-w-0 bg-white">
                    
                    {/* Global Top Nav */}
                    <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-6 py-2.5 bg-white">
                      <div>
                        <h1 className="text-[0.95rem] font-bold text-slate-800 leading-tight">
                          {activeIndex === 0 && "Platform Overview"}
                          {activeIndex === 1 && "Practice Hub"}
                          {activeIndex === 2 && "Learning Paths"}
                          {activeIndex === 3 && "My Certificates"}
                          {activeIndex === 4 && "Create Assessment"}
                          {activeIndex === 5 && "My Profile"}
                          {activeIndex === 6 && "Usage & Billing Ledger"}
                        </h1>
                        <p className="text-[0.65rem] text-slate-500">
                          {activeIndex === 0 && "Your centralized control center for certifications, performance, and usage."}
                          {activeIndex === 1 && "Operational insights across your skills, proficiency, and readiness."}
                          {activeIndex === 2 && "Track your structured roadmaps, and monitor skill progression."}
                          {activeIndex === 3 && "View, verify, and share the credentials you have earned."}
                          {activeIndex === 4 && "Configure custom tests using CareerSense AI."}
                          {activeIndex === 5 && "Keep your professional profile updated for certificate details in sync."}
                          {activeIndex === 6 && "Track Career Points, overall billing, and every action across learning paths."}
                        </p>
                      </div>
                      
                      {/* Top Right Global Metrics Box */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm bg-white">
                          <div className="flex items-center gap-1.5 border-r pr-3">
                            <Zap size={12} className="text-yellow-500 fill-yellow-500" />
                            <div className="flex flex-col">
                              <span className="text-[0.45rem] font-bold text-slate-400 uppercase tracking-wider leading-none mb-0.5">CS POINTS USED</span>
                              <span className="text-[0.75rem] font-black text-slate-800 leading-none">4635</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 border-r pr-3">
                            <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500"><Coins size={10} /></div>
                            <div className="flex flex-col">
                              <span className="text-[0.45rem] font-bold text-slate-400 uppercase tracking-wider leading-none mb-0.5">CONSUMED</span>
                              <span className="text-[0.75rem] font-black text-slate-800 leading-none">$0.4635</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 border-r pr-3">
                            <Award size={12} className="text-slate-400" />
                            <div className="flex flex-col">
                              <span className="text-[0.45rem] font-bold text-slate-400 uppercase tracking-wider leading-none mb-0.5">CERTS</span>
                              <span className="text-[0.75rem] font-black text-slate-800 leading-none">4</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp size={12} className="text-blue-500" />
                            <div className="flex flex-col">
                              <span className="text-[0.45rem] font-bold text-slate-400 uppercase tracking-wider leading-none mb-0.5">PATHS</span>
                              <span className="text-[0.75rem] font-black text-slate-800 leading-none">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto bg-[#fafbfc]">
                      {activeIndex === 0 && <DashboardScene />}
                      {activeIndex === 1 && <PracticeHubScene />}
                      {activeIndex === 2 && <LearningPathsScene />}
                      {activeIndex === 3 && <CertificatesScene />}
                      {activeIndex === 4 && <CreateAssessmentScene />}
                      {activeIndex === 5 && <ProfileScene />}
                      {activeIndex === 6 && <BillingScene />}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="absolute bottom-[1px] sm:bottom-[2px] left-1/2 -translate-x-1/2 flex items-center justify-center">
              <span className="whitespace-nowrap text-[0.35rem] sm:text-[0.5rem] font-medium tracking-[0.15em] text-[#81838a]">
                CareerSense Mac Air
              </span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-[2.4%] h-[2.1%] rounded-b-[0.35rem] sm:rounded-b-[0.55rem] rounded-t-[0.08rem] border-t border-white/50 bg-gradient-to-b from-[#fbe3cf] via-[#e5bc9e] to-[#c7926e] shadow-[0_12px_24px_-12px_rgba(0,0,0,0.45)]">
            <div className="absolute left-1/2 top-0 h-[42%] w-[12%] -translate-x-1/2 rounded-b-[0.24rem] bg-gradient-to-b from-[#d4a989] to-[#c39373] shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]" />
          </div>
        </div>

      </div>
    </div>
  );
};

/* --- Helper Hooks --- */
const useCycleIndex = (count, intervalMs = 1600) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!count || count <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [count, intervalMs]);

  return index;
};

const useCountUp = (target, duration = 1400) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let startTime = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(target * progress);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    setValue(0);
    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [target, duration]);

  return value;
};

const useTypewriter = (text, speed = 18, pauseMs = 1600) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const type = () => {
      if (index <= text.length) {
        setVisibleText(text.slice(0, index));
        index += 1;
        timeoutId = window.setTimeout(type, speed);
      } else {
        timeoutId = window.setTimeout(() => {
          index = 0;
          setVisibleText('');
          type();
        }, pauseMs);
      }
    };

    type();

    return () => window.clearTimeout(timeoutId);
  }, [pauseMs, speed, text]);

  return visibleText;
};

const formatInteger = (value) => Math.round(value).toLocaleString();
const formatCurrency = (value) => `$${value.toFixed(4)}`;

/* --- Reusable Card Components --- */
function AnimatedMetricCard({ card }) {
  const rawValue = useCountUp(card.metricTarget, card.duration || 1400);
  const formattedValue = card.formatter ? card.formatter(rawValue) : rawValue;

  return (
    <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[105px]">
      <div className="flex justify-between items-start">
        <span className="text-[0.65rem] font-bold text-slate-500">{card.title}</span>
        <div className={`h-6 w-6 rounded-md flex items-center justify-center ${card.bg} ${card.color}`}>
          {card.overrideIcon ? card.overrideIcon : <card.icon size={14} />}
        </div>
      </div>
      <div>
        <div className="text-lg font-black text-slate-800 leading-none mb-1">{formattedValue}</div>
        <div className="text-[0.55rem] text-slate-400 leading-tight">{card.desc}</div>
      </div>
    </div>
  );
}

function AnimatedStatValue({ label, target, formatter = formatInteger }) {
  const value = useCountUp(target, 1500);

  return (
    <div>
      <div className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-3xl font-black text-slate-800">{formatter(value)}</div>
    </div>
  );
}

/* ==========================================================================
   SCENE 0: DASHBOARD
   ========================================================================== */
const DashboardScene = () => {
  const metricCards = [
    { title: 'Assessments Completed', desc: 'Total evaluations completed across all skills.', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50', metricTarget: 5, formatter: (v) => `${Math.round(v)}` },
    { title: 'Verified Credentials', desc: 'Secure certificates generated and stored.', icon: Award, color: 'text-emerald-500', bg: 'bg-emerald-50', metricTarget: 4, formatter: (v) => `${Math.round(v)}` },
    { title: 'Learning Paths', desc: 'AI-generated roadmaps currently active.', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50', metricTarget: 1, formatter: (v) => `${Math.round(v)}` },
    { title: 'Pass Rate', desc: 'Percentage of assessments meeting the threshold.', icon: Target, color: 'text-purple-500', bg: 'bg-purple-50', metricTarget: 29, formatter: (v) => `${Math.round(v)}%` },
    { title: 'Compute Tokens', desc: 'Total API points consumed for generations.', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', metricTarget: 4635, formatter: formatInteger },
    { title: 'Usage Billing', desc: 'Estimated infrastructural cost incurred.', icon: Coins, color: 'text-teal-500', bg: 'bg-teal-50', metricTarget: 0.4635, formatter: formatCurrency },
    { title: 'Activity Streak', desc: 'Consecutive days of active platform usage.', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50', metricTarget: 1, formatter: (v) => `${Math.round(v)} Day` },
    { title: 'Peak Performance', desc: 'Highest recorded score across all attempts.', icon: Trophy, color: 'text-emerald-500', bg: 'bg-emerald-50', metricTarget: 50, formatter: (v) => `${Math.round(v)}%` },
  ];

  return (
  <div className="p-6 space-y-4">
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2 text-[0.6rem] text-slate-500 mb-1.5">
          <span className="flex items-center gap-1 font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> System Active</span>
          <span>•</span>
          <span>Wednesday, 24 June 2026</span>
          <span>•</span>
          <span>23:58:17</span>
        </div>
        <h2 className="text-xl font-black text-slate-900">Welcome back, Pooja Agarwal</h2>
        <p className="text-[0.7rem] text-slate-500 mt-1 max-w-xl">Track your certification progress, analyze assessment performance, and monitor active learning paths across your organization's workspace.</p>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-[0.7rem] font-bold text-slate-700 hover:bg-slate-50">Practice Hub</button>
        <button className="px-4 py-1.5 bg-[#10b981] rounded-lg text-[0.7rem] font-bold text-white flex items-center gap-1.5 hover:bg-[#059669]"><Activity size={12} /> Create Assessment</button>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-4">
      {metricCards.map((card, i) => (
        <AnimatedMetricCard key={i} card={card} />
      ))}
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] h-40">
        <h3 className="text-[0.8rem] font-bold text-slate-800 mb-1">Performance Analytics</h3>
        <p className="text-[0.6rem] text-slate-500 mb-4">Aggregate data across your evaluation history.</p>
        <div className="flex gap-10 items-end">
          <AnimatedStatValue label="Average Score" target={22} formatter={(v) => `${Math.round(v)}%`} />
          <AnimatedStatValue label="Skills Validated" target={5} formatter={(v) => `${Math.round(v)}`} />
        </div>
      </div>

      <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] h-40 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-[0.8rem] font-bold text-slate-800 mb-1">Usage Ledger</h3>
            <p className="text-[0.6rem] text-slate-500">Recent infrastructural computations and transactions.</p>
          </div>
          <span className="text-[0.65rem] font-bold text-emerald-500 cursor-pointer">View Full Ledger</span>
        </div>
        
        <div className="flex-1 border-t border-slate-50 pt-3 flex justify-between items-center">
           <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500"><Activity size={16}/></div>
             <div>
               <div className="text-[0.7rem] font-bold text-slate-800">Learning Path Generation</div>
               <div className="text-[0.55rem] text-slate-500">Python for Machine Learning • 24 Jun, 23:54</div>
             </div>
           </div>
           <div className="text-right">
             <div className="text-[0.75rem] font-black text-slate-800">438 CPs</div>
             <div className="text-[0.55rem] font-bold text-emerald-500">$0.0438</div>
           </div>
        </div>
      </div>
    </div>
  </div>
  );
};

/* ==========================================================================
   SCENE 1: PRACTICE HUB
   ========================================================================== */
const PracticeHubScene = () => (
  <div className="p-6 space-y-4">
    <div className="flex justify-between items-center bg-white px-4 py-2 border border-slate-100 rounded-lg shadow-sm mb-2">
      <div className="flex gap-1.5 overflow-x-auto">
        {['All Modules', 'Skills', 'Accounting', 'AI/ML', 'Scenario Labs', 'Workplace', 'Analytics', 'Languages', 'Domains', 'Cloud & Security'].map((tab, idx) => (
          <span key={idx} className={`text-[0.65rem] font-bold px-3 py-1.5 rounded-md cursor-pointer whitespace-nowrap ${idx === 0 ? 'bg-emerald-50 text-emerald-600' : 'text-slate-500 hover:bg-slate-50'}`}>
            {tab}
          </span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-4 gap-4">
      {[
        { 
          title: 'Communication /\nEnglish', type: 'WORKPLACE', wm: 'CE', duration: 'Score: 3%', completed: true, 
          desc: 'Professional assessment covering grammar, clarity, tone, reading comprehension, business writing,...', 
          bg: 'from-[#7c3aed] to-[#10b981]' 
        },
        { 
          title: 'Situational\nJudgment', type: 'WORKPLACE', wm: 'SJ', duration: '50 Minutes', completed: false, 
          desc: 'Workplace scenarios covering ownership, communication, escalation, confidentiality, stakeholder...', 
          bg: 'from-[#475569] to-[#94a3b8]' 
        },
        { 
          title: 'Case Study /\nBusiness\nProblem', type: 'SCENARIO LABS', wm: 'CS', duration: '120 Minutes', completed: false, 
          desc: 'Professional case-study assessment covering structured problem solving, business diagnostics, analytics...', 
          bg: 'from-[#334155] to-[#64748b]' 
        },
        { 
          title: 'Aptitude /\nAnalytical', type: 'ANALYTICS', wm: 'AA', duration: '50 Minutes', completed: false, 
          desc: 'Professional assessment covering quantitative aptitude, percentages, ratios, averages, work-rate, probability...', 
          bg: 'from-[#059669] to-[#34d399]' 
        },
      ].map((card, idx) => (
        <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col h-[280px]">
          
          <div className={`relative h-[110px] p-4 flex flex-col justify-between bg-gradient-to-br ${card.bg} overflow-hidden`}>
            <div className="absolute -right-2 top-8 text-7xl font-black text-black/10 select-none leading-none pointer-events-none">{card.wm}</div>
            
            <div className="flex justify-end relative z-10">
              <span className="text-[0.55rem] font-bold text-slate-800 bg-white/90 px-2 py-0.5 rounded shadow-sm tracking-wider uppercase">{card.type}</span>
            </div>
            <h3 className="text-[0.95rem] font-black text-white leading-tight whitespace-pre-line relative z-10">{card.title}</h3>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <h4 className="text-[0.75rem] font-bold text-slate-800 mb-1">{card.title.replace(/\n/g, ' ')}</h4>
            <p className="text-[0.65rem] text-slate-500 leading-relaxed mb-4 line-clamp-3">{card.desc}</p>
            
            <div className="mt-auto">
              <div className="flex items-center gap-1.5 text-[0.65rem] font-medium text-slate-500 mb-3">
                {card.completed ? <><CheckCircle2 size={12} className="text-emerald-500"/> <span className="text-emerald-600 font-bold">Completed</span> {card.duration}</> : <><Clock size={12}/> {card.duration}</>}
              </div>
              <button className={`w-full py-2 rounded-lg text-[0.7rem] font-bold flex justify-center items-center gap-1 transition-colors ${
                card.completed ? 'border border-slate-200 text-slate-700 bg-white hover:bg-slate-50' : 'bg-[#10b981] text-white hover:bg-[#059669]'
              }`}>
                {card.completed ? 'Retake Assessment' : 'Start Assessment'} <ChevronRight size={14}/>
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  </div>
);

/* ==========================================================================
   SCENE 2: LEARNING PATHS
   ========================================================================== */
const LearningPathsScene = () => (
  <div className="p-6 flex flex-row gap-6">
    {/* Left Column */}
    <div className="w-[240px] shrink-0 space-y-3">
      <div className="flex justify-between items-center mb-2 text-[0.65rem] font-bold">
        <span className="text-slate-500">ACTIVE TRACKS (1)</span>
        <span className="text-emerald-500 cursor-pointer">+ New Path</span>
      </div>
      
      <div className="border border-emerald-500 rounded-xl p-3 bg-white shadow-sm relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
        <div className="text-[0.55rem] font-black text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1"><BookOpen size={10}/> PYTHON FOR MACHINE LEARNING</div>
        <h4 className="text-[0.75rem] font-bold text-slate-800 mb-3 leading-tight">Python Machine Learning Engineer</h4>
        <div className="flex justify-between items-center text-[0.6rem] text-slate-500 font-medium pt-2 border-t border-slate-100">
          <span>0% Completed</span>
          <span>4 Modules</span>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-6">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-black text-slate-900">Python Machine Learning Engineer</h2>
          <p className="text-[0.75rem] text-slate-500 mt-1">Advanced Python skills for machine learning applications</p>
        </div>
        <div className="text-right bg-slate-50 border border-slate-100 px-4 py-2 rounded-lg">
          <div className="text-[0.55rem] font-bold text-slate-400 uppercase tracking-wider">OVERALL PROGRESS</div>
          <div className="text-2xl font-black text-emerald-500">0%</div>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-100 ml-5 space-y-8 pb-4">
        
        {/* Module 1 (Active) */}
        <div className="relative pl-8">
          <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-sm">
            <Play size={14} className="ml-0.5 fill-emerald-500" />
          </div>
          <div className="border border-emerald-100 bg-emerald-50/30 rounded-xl p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-[0.85rem] font-bold text-slate-800">Module 1: Python Fundamentals for ML</h4>
              <span className="flex items-center gap-1 text-[0.6rem] text-slate-500 border border-slate-200 bg-white px-2 py-0.5 rounded"><Clock size={10}/> Est. 45m</span>
            </div>
            <p className="text-[0.7rem] text-slate-600 mb-4 leading-relaxed max-w-2xl">Review of Python basics, data structures, file operations, and object-oriented programming</p>
            <button className="bg-[#10b981] text-white px-4 py-2 rounded-lg text-[0.7rem] font-bold flex items-center gap-1.5 hover:bg-[#059669]">Begin Module <ChevronRight size={14}/></button>
          </div>
        </div>

        {/* Module 2 (Locked) */}
        <div className="relative pl-8 opacity-60">
          <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center text-slate-400">
            <Lock size={12} />
          </div>
          <div className="p-2">
            <h4 className="text-[0.85rem] font-bold text-slate-800 mb-1">Module 2: Advanced ML Concepts with Python</h4>
            <p className="text-[0.7rem] text-slate-500 leading-relaxed max-w-2xl">Deep learning, neural networks, natural language processing, and computer vision using Python libraries like TensorFlow and PyTorch</p>
          </div>
        </div>

        {/* Module 3 (Locked) */}
        <div className="relative pl-8 opacity-60">
          <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center text-slate-400">
            <Lock size={12} />
          </div>
          <div className="p-2">
            <h4 className="text-[0.85rem] font-bold text-slate-800 mb-1">Module 3: Data Preprocessing and Visualization</h4>
            <p className="text-[0.7rem] text-slate-500 leading-relaxed max-w-2xl">Data cleaning, feature engineering, and data visualization using libraries like Pandas, NumPy, and Matplotlib</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

/* ==========================================================================
   SCENE 3: CERTIFICATES
   ========================================================================== */
const CertificatesScene = () => {
  const visibleStage = useCycleIndex(3, 1500);
  const visibleCount = visibleStage === 0 ? 1 : visibleStage === 1 ? 2 : 3;
  const certificates = [
      { title: 'PYTHON FOR\nMACHINE LEARNING', id: 'CS-487538', date: '24/06/2026', score: '30%' },
      { title: 'BANKING & TREASURY\nOPERATIONS\nPROFESSIONAL\nCERTIFICATION', id: 'CS-713592', date: '24/06/2026', score: '13%' },
      { title: 'ZOHO BOOKS\nACCOUNTING\nPROFESSIONAL\nCERTIFICATION', id: 'CS-359749', date: '24/06/2026', score: '13%' },
      { title: 'PROFESSIONAL\nCOMMUNICATION &\nBUSINESS ENGLISH\nCERTIFICATION', id: 'CS-966541', date: '24/06/2026', score: '3%' }
    ];

  return (
  <div className="p-6 grid grid-cols-3 gap-5">
    {certificates.slice(0, visibleCount).map((cert, idx) => (
      <div key={idx} className="bg-[#fffdf8] rounded-xl border border-[#fef3c7] shadow-sm flex flex-col p-5 relative overflow-hidden">
        {/* Ribbon Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#111827] text-[#fcd34d] h-8 w-8 rounded-lg flex items-center justify-center shadow-sm">
              <Award size={18} />
            </div>
            <div>
              <div className="text-[0.55rem] font-black text-slate-600 tracking-widest uppercase">CAREERSENSE ACADEMY</div>
              <div className="text-[0.5rem] font-bold text-slate-400 uppercase tracking-widest">Verified Credential</div>
            </div>
          </div>
          <div className="border border-emerald-200 bg-emerald-50 text-emerald-600 font-bold text-[0.6rem] px-2 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 size={10} /> {cert.score}
          </div>
        </div>

        {/* Title Body */}
        <div className="text-center flex-1 flex flex-col justify-center items-center py-4">
          <div className="text-[0.55rem] font-bold text-slate-400 uppercase tracking-widest mb-2">CERTIFICATE OF ACHIEVEMENT</div>
          <h3 className="text-[0.8rem] font-black text-slate-800 uppercase leading-tight whitespace-pre-line">{cert.title}</h3>
          <div className="mt-3 text-[#f59e0b]"><Award size={16}/></div>
        </div>

        {/* Footer info */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 bg-white border border-slate-100 rounded-lg p-2 text-center">
            <div className="text-[0.55rem] font-bold text-slate-400 uppercase">ISSUED ON</div>
            <div className="text-[0.7rem] font-bold text-slate-800">{cert.date}</div>
          </div>
          <div className="flex-1 bg-white border border-slate-100 rounded-lg p-2 text-center">
            <div className="text-[0.55rem] font-bold text-slate-400 uppercase">CREDENTIAL ID</div>
            <div className="text-[0.7rem] font-bold text-slate-800">{cert.id}</div>
          </div>
        </div>

        <div className="border-t border-dashed border-slate-200 pt-3 flex justify-between items-center">
          <div className="flex items-center gap-1 text-[0.6rem] text-slate-500"><Sparkles size={12} className="text-[#f59e0b]"/> Verified mini credential</div>
          <button className="text-[0.65rem] font-bold text-emerald-500 flex items-center gap-1">View Record <ChevronRight size={12}/></button>
        </div>
      </div>
    ))}
  </div>
  );
};

/* ==========================================================================
   SCENE 4: CREATE ASSESSMENT
   ========================================================================== */
const CreateAssessmentScene = () => {
  const configFrames = useMemo(() => ([
    { difficulty: 'Beginner', questions: 10, timePerQuestion: '1 min', ratio: '90% / 10%', mcqCase: '9/1', duration: '10 min', certificate: 'Not Eligible', estimate: '[284 - 510]' },
    { difficulty: 'Intermediate', questions: 15, timePerQuestion: '2 min', ratio: '80% / 20%', mcqCase: '12/3', duration: '30 min', certificate: 'Not Eligible', estimate: '[547 - 984]' },
    { difficulty: 'Advanced', questions: 24, timePerQuestion: '2 min', ratio: '70% / 30%', mcqCase: '17/7', duration: '48 min', certificate: 'Eligible', estimate: '[1040 - 1688]' },
  ]), []);
  const configIndex = useCycleIndex(configFrames.length, 1500);
  const activeConfig = configFrames[configIndex];
  const sliderPercent = ((activeConfig.questions - 5) / (30 - 5)) * 100;

  return (
  <div className="p-6 grid grid-cols-[1fr,240px] gap-6">
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-black text-slate-900">Configure New AI Assessment</h2>
          <p className="text-[0.75rem] text-slate-500">Define parameters and question mix</p>
        </div>
        <button className="flex items-center gap-1 text-[0.65rem] text-emerald-500 border border-emerald-200 bg-emerald-50 px-2 py-1 rounded font-bold"><Settings size={12}/> Configuration</button>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-[0.7rem] font-bold text-slate-700 block mb-2">Assessment Name</label>
          <input type="text" value="React Professional Certification" disabled className="w-full text-[0.8rem] p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-400" />
        </div>

        <div>
          <label className="text-[0.7rem] font-bold text-slate-700 block mb-2">Difficulty</label>
          <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-1 text-[0.75rem] font-bold text-center text-slate-500">
            <div className={`flex-1 py-1.5 rounded-md transition-all ${activeConfig.difficulty === 'Beginner' ? 'bg-white shadow text-slate-900' : 'cursor-pointer hover:bg-slate-100'}`}>Beginner</div>
            <div className={`flex-1 py-1.5 rounded-md transition-all ${activeConfig.difficulty === 'Intermediate' ? 'bg-white shadow text-slate-900' : 'cursor-pointer hover:bg-slate-100'}`}>Intermediate</div>
            <div className={`flex-1 py-1.5 rounded-md transition-all ${activeConfig.difficulty === 'Advanced' ? 'bg-white shadow text-slate-900' : 'cursor-pointer hover:bg-slate-100'}`}>Advanced</div>
            <div className="flex-1 py-1.5 rounded-md cursor-pointer hover:bg-slate-100">Expert</div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[0.7rem] font-bold text-slate-700 mb-3">
            <label>Number of Questions</label>
            <span className="text-slate-900">{activeConfig.questions}</span>
          </div>
          <div className="relative py-2">
            <div className="h-1.5 w-full bg-slate-100 rounded-full relative">
              <div className="absolute left-0 top-0 bottom-0 bg-[#10b981] rounded-full transition-all duration-700" style={{ width: `${sliderPercent}%` }}></div>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-4 w-4 bg-[#10b981] rounded-full border-2 border-white shadow transition-all duration-700" style={{ left: `${sliderPercent}%` }}></div>
            </div>
            <div className="flex justify-between text-[0.6rem] text-slate-400 font-bold mt-2">
              <span>5</span><span>10</span><span>15</span><span>20</span><span>25</span><span>30</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[0.7rem] font-bold text-slate-700 block mb-2">Time per Question</label>
            <div className="border border-slate-200 rounded-lg p-2.5 text-[0.75rem] font-medium text-slate-700 bg-white flex justify-between items-center">
              {activeConfig.timePerQuestion} <ChevronRight size={14} className="rotate-90 text-slate-400" />
            </div>
          </div>
          <div>
            <label className="text-[0.7rem] font-bold text-slate-700 block mb-2">MCQ/Case Study Ratio</label>
            <div className="border border-slate-200 rounded-lg p-2.5 text-[0.75rem] font-medium text-slate-700 bg-white flex justify-between items-center">
              {activeConfig.ratio} <ChevronRight size={14} className="rotate-90 text-slate-400" />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-[0.7rem] text-yellow-700 flex gap-2 items-start">
          <AlertCircle size={14} className="shrink-0 mt-0.5" />
          <p>Certificate rule: only assessments with 20 or more questions can issue a certificate.</p>
        </div>
      </div>
    </div>

    {/* Right Sidebar */}
    <div className="bg-slate-50/50 rounded-xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between text-[0.75rem] text-slate-600 font-medium">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-900">Live Preview</h3>
          <span className="flex items-center gap-1 text-[0.55rem] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded uppercase tracking-wider"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> AI ACTIVE</span>
        </div>
        
        <div className="space-y-3 pb-6 border-b border-slate-200">
          <div className="flex justify-between"><span>Difficulty</span><span className="font-bold text-slate-900">{activeConfig.difficulty}</span></div>
          <div className="flex justify-between"><span>Questions</span><span className="font-bold text-slate-900">{activeConfig.questions}</span></div>
          <div className="flex justify-between"><span>Time/Q</span><span className="font-bold text-slate-900">{activeConfig.timePerQuestion}</span></div>
          <div className="flex justify-between"><span>MCQ/Case</span><span className="font-bold text-slate-900">{activeConfig.mcqCase}</span></div>
          <div className="flex justify-between"><span>Ratio</span><span className="font-bold text-slate-900">{activeConfig.ratio.replace(/\s/g, '')}</span></div>
          <div className="flex justify-between"><span>Est. Duration</span><span className="font-bold text-slate-900">{activeConfig.duration}</span></div>
          <div className="flex justify-between"><span>Certificate</span><span className="font-bold text-slate-900">{activeConfig.certificate}</span></div>
        </div>

        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-emerald-800">
          <div className="text-[0.6rem] font-bold uppercase tracking-wider mb-1 text-emerald-600">CS Points Estimate</div>
          <div className="font-bold">Estimate : {activeConfig.estimate}</div>
        </div>
        <p className="text-[0.6rem] text-slate-500 mt-3 leading-relaxed">
          Increase the question count to 20 or more if you want this assessment to qualify for a certificate.
          <br/><br/>
          Paid Service. CS Points {activeConfig.estimate} required. Confirmed: Custom AI Assessment, {activeConfig.questions} Q, {activeConfig.difficulty}.
        </p>
      </div>

      <button className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 mt-4"><GraduationCap size={16}/> Create Assessment</button>
    </div>
  </div>
  );
};

/* ==========================================================================
   SCENE 5: PROFILE
   ========================================================================== */
const ProfileScene = () => {
  const fullBio = "Passionate about turning raw data into strategic business value, I specialize in building and scaling high-performing BI and analytics teams. With over [Number] years of experience in data modeling, dashboard development, and cloud architecture, I bridge the gap between complex technical metrics and executive decision-making. I thrive on collaborating with cross-functional stakeholders to drive operational efficiency and measurable growth";
  const typedBio = useTypewriter(fullBio, 10, 1400);

  return (
  <div className="p-6 space-y-6">
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-8 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-5">
          <img src={anamikaImage} alt="Profile" className="h-20 w-20 rounded-xl object-cover border border-slate-200" />
          <div>
            <div className="text-[0.6rem] font-bold text-emerald-500 flex items-center gap-1 mb-1"><User size={10}/> PROFILE DETAILS</div>
            <h2 className="text-2xl font-black text-slate-900">Pooja Agarwal</h2>
            <p className="text-[0.75rem] text-slate-500 mb-3">Senior Manager - BI at Google</p>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 text-[0.65rem] font-bold text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50"><Camera size={12}/> Upload Image</button>
              <button className="flex items-center gap-1 text-[0.65rem] font-bold text-slate-500 px-3 py-1.5 rounded-lg hover:bg-slate-50"><AlertCircle size={12}/> Remove</button>
            </div>
          </div>
        </div>
        <button className="bg-[#10b981] text-white px-4 py-2 rounded-lg text-[0.7rem] font-bold hover:bg-[#059669]">Save Profile</button>
      </div>

      {/* Grid Form */}
      <div className="grid grid-cols-3 gap-5 mb-6">
        {[
          { label: 'Full Name', val: 'Pooja Agarwal' },
          { label: 'Email Address', val: 'Pooja@Gmail.com' },
          { label: 'Phone Number', val: '+91 9999999999' },
          { label: 'Current Role / Designation', val: 'Senior Manager - BI' },
          { label: 'Current Company', val: 'Google' },
          { label: 'Location', val: 'Gurgaon', icon: MapPin }
        ].map((f, idx) => (
          <div key={idx}>
            <label className="text-[0.65rem] font-bold text-slate-500 mb-1.5 block">{f.label}</label>
            <div className="border border-slate-200 rounded-lg p-2.5 text-[0.75rem] font-medium text-slate-700 bg-white flex items-center gap-2">
              {f.icon && <f.icon size={12} className="text-slate-400" />} {f.val}
            </div>
          </div>
        ))}
      </div>

      <div>
        <label className="text-[0.65rem] font-bold text-slate-500 mb-1.5 block">Bio / Professional Summary</label>
        <div className="border border-slate-200 rounded-lg p-3 text-[0.75rem] text-slate-600 leading-relaxed bg-white">
          {typedBio}
          <span className="ml-0.5 inline-block h-3 w-[1px] animate-pulse bg-slate-400 align-middle" />
        </div>
      </div>
    </div>

    {/* Education Block */}
    <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><GraduationCap size={16}/></div>
          <div>
            <h3 className="text-[0.85rem] font-bold text-slate-900">Education</h3>
            <p className="text-[0.6rem] text-slate-500">Add items in reverse-chronological order for the best timeline.</p>
          </div>
        </div>
        <button className="text-[0.65rem] font-bold text-slate-500 flex items-center gap-1 border border-slate-200 bg-white px-3 py-1.5 rounded-lg"><Plus size={12}/> Add Entry</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-[0.65rem] font-bold text-slate-500 mb-1.5 block">Title</label>
          <div className="border border-slate-200 rounded-lg p-2.5 text-[0.75rem] font-medium text-slate-700 bg-white">MBA</div>
        </div>
        <div>
          <label className="text-[0.65rem] font-bold text-slate-500 mb-1.5 block">Subtitle</label>
          <div className="border border-slate-200 rounded-lg p-2.5 text-[0.75rem] font-medium text-slate-700 bg-white">IIM - Ahmedabad</div>
        </div>
      </div>
    </div>
  </div>
  );
};

/* ==========================================================================
   SCENE 6: USAGE & BILLING
   ========================================================================== */
const BillingScene = () => {
  const careerPoints = useCountUp(4635, 1500);
  const estimatedCost = useCountUp(0.4635, 1500);
  const loggedActions = useCountUp(6, 1500);
  const successActions = useCountUp(3, 1500);

  return (
  <div className="p-6 space-y-6">
    <div>
      <h3 className="text-[0.85rem] font-bold text-slate-800 mb-1">Platform Metrics</h3>
      <p className="text-[0.65rem] text-slate-500 mb-4">Career Points represent Groq compute usage. Billing is estimated from recorded activity.</p>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest mb-3">
            <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><Activity size={12}/></div>
            CAREER POINTS USED
          </div>
          <div className="text-3xl font-black text-slate-900 mb-1">{formatInteger(careerPoints)}</div>
          <p className="text-[0.65rem] text-slate-500">Total Groq-backed compute consumed</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest mb-3">
            <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><Coins size={12}/></div>
            ESTIMATED COST
          </div>
          <div className="text-3xl font-black text-slate-900 mb-1">{formatCurrency(estimatedCost)}</div>
          <p className="text-[0.65rem] text-slate-500">Aggregate bill across all transactions</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest mb-3">
            <div className="h-6 w-6 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center"><FileText size={12}/></div>
            LOGGED ACTIONS
          </div>
          <div className="text-3xl font-black text-slate-900 mb-1 flex items-baseline gap-2">{Math.round(loggedActions)} <span className="text-[0.7rem] text-emerald-500">{Math.round(successActions)} Success</span></div>
          <p className="text-[0.65rem] text-slate-500">Total operations tracked in ledger</p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-[0.85rem] font-bold text-slate-800 mb-1">Transaction History</h3>
          <p className="text-[0.65rem] text-slate-500">A detailed chronological ledger of Career Points utilization.</p>
        </div>
        <button className="flex items-center gap-1 border border-slate-200 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg text-[0.65rem] font-bold"><FileText size={12}/> SYSTEM LOGS</button>
      </div>

      <div className="w-full text-left text-[0.65rem] border-b border-slate-100 pb-2 mb-4 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] font-bold text-slate-400 uppercase tracking-wider">
        <div>ACTION & DATE</div>
        <div>AREA</div>
        <div>COMPUTE USED</div>
        <div>BILLED COST</div>
        <div>STATUS</div>
      </div>

      <div className="space-y-6">
        {[
          { name: 'Learning Path Generation', date: 'Jun 24, 2026, 11:54 PM', tag: 'Python for Machine Learning', model: 'Model: CareerSense-70b   Modules: 4', cp: '438', cost: '$0.0438', stat: 'COMPLETED' },
          { name: 'Learning Path Generation', date: 'Jun 24, 2026, 11:54 PM', tag: 'Python for Machine Learning', model: 'Model: CareerSense-70b   Modules: 4', cp: '430', cost: '$0.0430', stat: 'COMPLETED' },
          { name: 'Assessment Generation', date: 'Jun 24, 2026, 11:53 PM', tag: 'Python for Machine Learning', model: 'Model: CareerSense-70b   Questions: 27', cp: '3,767', cost: '$0.3767', stat: 'COMPLETED' },
        ].map((row, idx) => (
          <div key={idx} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-start text-[0.75rem]">
            <div>
              <div className="font-bold text-slate-800 mb-0.5">{row.name}</div>
              <div className="text-[0.6rem] text-slate-500 mb-2">{row.date}</div>
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 rounded px-2 py-1 text-[0.6rem] text-slate-500 font-medium">
                <Settings size={10}/> {row.model}
              </div>
            </div>
            <div><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[0.6rem] font-bold">{row.tag}</span></div>
            <div><span className="font-black text-slate-800">{row.cp}</span> <span className="text-[0.6rem] text-slate-400">CPs</span></div>
            <div className="font-black text-slate-800">{row.cost}</div>
            <div><span className="flex w-max items-center gap-1 border border-emerald-200 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-[0.55rem] font-bold tracking-wider"><CheckCircle2 size={10}/> {row.stat}</span></div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default LaptopShowcase;