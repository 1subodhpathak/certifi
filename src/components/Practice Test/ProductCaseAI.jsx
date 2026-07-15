import React, { useState, useEffect, useCallback } from 'react';
import { 
  Zap, Clock, AlertCircle, CheckCircle2, 
  Terminal, Play, ArrowLeft, RotateCcw,
  Sparkles, Lightbulb, Target, Send, Briefcase, Info, ListChecks
} from 'lucide-react';
import { getGroqCompletion } from '../../core/services/groqService';
import { usePracticeTestStore } from '../../core/stores/practiceTestStore';

const ProductCaseAI = ({ onBack }) => {
  const [status, setStatus] = useState('loading'); // loading, briefing, active, result
  const [scenario, setScenario] = useState(null);
  const [userResponse, setUserResponse] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const generateScenario = useCallback(async () => {
    setStatus('loading');
    try {
      const seed = Date.now();
      const prompt = `Generate a unique product strategy case study scenario.
      Seed: ${seed}.
      
      INSTRUCTIONS:
      1. Choose a domain (e.g., FinTech, SaaS, EdTech, Marketplace, or AI-first product).
      2. Provide a complex situation involving user churn, market entry, or feature prioritization.
      3. Provide: title, context, constraints[], primary_goal, focus_areas[].
      
      Return as JSON.`;
      
      const response = await getGroqCompletion([
        { role: 'system', content: 'You are a Head of Product at a top-tier tech company. Generate challenging and realistic product scenarios that test strategy, user-centricity, and analytical thinking.' },
        { role: 'user', content: prompt }
      ], "llama-3.3-70b-versatile", "json_object", "candidate");
      
      const data = JSON.parse(response);
      setScenario(data);
      setUserResponse(`# Executive Summary\n[Your summary here...]\n\n# User Analysis\n[Who are we building for?]\n\n# Strategy & Roadmap\n[How do we win?]\n\n# Success Metrics\n[How do we measure impact?]`);
      setStatus('briefing');
    } catch (error) {
      console.error('Failed to generate scenario:', error);
      // Fallback
      const fallback = {
        title: "The Retention Pivot",
        context: "A mid-sized SaaS platform for remote teams is seeing a 15% increase in churn after a competitor launched an integrated AI assistant.",
        constraints: ["Limited engineering resources for next 3 months", "Burn rate must stay under $200k/mo"],
        primary_goal: "Develop a strategy to reduce churn and stabilize the user base without a full product rewrite.",
        focus_areas: ["User retention logic", "Competitive differentiation", "Feature prioritization"]
      };
      setScenario(fallback);
      setUserResponse(`# Executive Summary\n[Your summary here...]\n\n# User Analysis\n[Who are we building for?]\n\n# Strategy & Roadmap\n[How do we win?]\n\n# Success Metrics\n[How do we measure impact?]`);
      setStatus('briefing');
    }
  }, []);

  useEffect(() => {
    generateScenario();
  }, [generateScenario]);

  const handleSubmit = async () => {
    setIsEvaluating(true);
    try {
      const prompt = `Evaluate this product strategy response for the scenario: "${scenario.title}".
      Goal: ${scenario.primary_goal}
      Scenario Context: ${scenario.context}
      Candidate's Response: ${userResponse}
      
      Provide a detailed critique focusing on strategic depth, user empathy, and logical consistency.
      Format: JSON { "score": number, "strengths": [], "weaknesses": [], "executive_summary": string }`;
      
      const response = await getGroqCompletion([
        { role: 'system', content: 'You are a Head of Product. Be critical, focus on business impact and user value.' },
        { role: 'user', content: prompt }
      ], "llama-3.3-70b-versatile", "json_object", "candidate");
      
      const result = JSON.parse(response);
      
      const finalResult = {
        id: `product-case-${Date.now()}`,
        testId: 'product-case-ai',
        testName: `Product Strategy: ${scenario.title}`,
        score: result.score || 0,
        critique: result,
        scenario,
        userResponse,
        proficiency: {
          label: (result.score || 0) >= 80 ? 'Strategic' : (result.score || 0) >= 60 ? 'Pragmatic' : 'Learning',
          color: (result.score || 0) >= 80 ? 'text-indigo-600' : (result.score || 0) >= 60 ? 'text-emerald-600' : 'text-blue-600',
          bg: (result.score || 0) >= 80 ? 'bg-indigo-50' : (result.score || 0) >= 60 ? 'bg-emerald-50' : 'bg-blue-50'
        },
        createdAt: new Date().toISOString()
      };

      usePracticeTestStore.getState().addAttempt(finalResult);
      setFeedback(result);
      setStatus('result');
    } catch (error) {
      console.error('Evaluation failed:', error);
    } finally {
      setIsEvaluating(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-slate-200 border-t-amber-500 rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-amber-500">
            <Lightbulb size={32} className="animate-pulse" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-black text-slate-900 mb-2">Consulting Product Strategy AI...</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest animate-pulse">Generating your strategic scenario</p>
        </div>
      </div>
    );
  }

  if (status === 'briefing') {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
        <header className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
            <ArrowLeft size={20} />
          </button>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Strategic Briefing</span>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h1 className="text-3xl font-black text-slate-900">{scenario?.title}</h1>
                  <p className="text-sm font-bold text-amber-600 mt-1 uppercase tracking-widest">Market Strategy Case Study</p>
                </div>
              </div>

              <section className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Context</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">{scenario?.context}</p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Primary Goal</h4>
                  <p className="text-sm font-bold text-slate-900">{scenario?.primary_goal}</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-3xl text-white">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {scenario?.focus_areas?.map(area => (
                      <span key={area} className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-wider">{area}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Constraints</h3>
              <div className="space-y-3">
                {scenario?.constraints?.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100/50">
                    <AlertCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-700">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setStatus('active')}
              className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-sm shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Target size={18} /> Initialize Case Solution
            </button>
          </aside>
        </div>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setStatus('briefing')} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
              <ArrowLeft size={20} />
            </button>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1 block">Strategy Workspace</span>
              <h1 className="text-2xl font-black text-slate-900">{scenario.title}</h1>
            </div>
          </div>
          <button 
            onClick={handleSubmit}
            disabled={isEvaluating}
            className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-sm shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            {isEvaluating ? <RotateCcw className="animate-spin" size={18} /> : <Sparkles size={18} />}
            Submit for AI Review
          </button>
        </header>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-sm overflow-hidden flex flex-col h-[700px]">
          <div className="px-8 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Strategic Response Document (Markdown)</span>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 italic">
              <Info size={12} /> Structure your response clearly
            </div>
          </div>
          <textarea
            value={userResponse}
            onChange={(e) => setUserResponse(e.target.value)}
            className="flex-1 p-12 text-slate-700 font-medium text-lg leading-relaxed outline-none resize-none bg-slate-50/20"
            placeholder="Describe your product strategy..."
          />
        </div>
      </div>
    );
  }

  if (status === 'result' && feedback) {
    return (
      <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setStatus('active')} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-3xl font-black text-slate-900">Strategic Analysis</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-6 py-2 bg-slate-900 text-white rounded-xl font-black text-xl">
              {feedback.score}<span className="text-slate-400 text-sm ml-1">/100</span>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="md:col-span-2 bg-white border-2 border-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-900/10">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Executive Summary</h3>
            <p className="text-xl font-black text-slate-900 leading-relaxed italic">
              "{feedback.executive_summary}"
            </p>
          </section>

          <div className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-8 space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
              <CheckCircle2 size={14} /> Key Strengths
            </h3>
            <div className="space-y-4">
              {feedback.strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Zap size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <RotateCcw size={14} /> Areas for Improvement
            </h3>
            <div className="space-y-4">
              {feedback.weaknesses.map((w, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <p className="text-xs font-bold text-slate-600 leading-relaxed">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 pt-12">
          <button onClick={generateScenario} className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm shadow-2xl hover:scale-105 transition-all">
            New Case Scenario
          </button>
          <button onClick={onBack} className="px-10 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all">
            Return to Hub
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ProductCaseAI;
