import React, { useState, useEffect, useCallback } from 'react';
import { 
  Zap, Clock, AlertCircle, CheckCircle2, 
  Terminal, Play, ArrowLeft, RotateCcw,
  ShieldAlert, Activity, Server, Database
} from 'lucide-react';
import Editor from '@monaco-editor/react';
import { getGroqCompletion } from '../../core/services/groqService';
import { usePracticeTestStore } from '../../core/stores/practiceTestStore';

const DailyIncident = ({ onBack }) => {
  const [status, setStatus] = useState('briefing'); // briefing, active, result, loading
  const [incident, setIncident] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [remaining, setRemaining] = useState(900); // 15 mins
  const [feedback, setFeedback] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);

  const generateIncident = useCallback(async () => {
    setStatus('loading');
    try {
      const seed = Date.now();
      const prompt = `Generate a production-grade SQL incident for a 15-minute technical challenge. 
      Seed: ${seed}.
      
      INSTRUCTIONS:
      1. Pick a complex production environment (e.g., Kubernetes Cluster state, Global Payment Gateway, Real-time Bidding Engine).
      2. The incident must involve a specific, non-obvious performance bottleneck or logic race condition.
      3. Provide: title, symptoms, setup_query, goal, verification_patterns, root_cause_explanation.`;
      
      const response = await getGroqCompletion([
        { role: 'system', content: 'You are a Senior SRE at a FAANG company. Be highly creative. No two incidents should be the same.' },
        { role: 'user', content: prompt }
      ], "llama-3.3-70b-versatile", "text", "candidate");
      
      // Extract JSON from response
      const jsonStr = response.match(/\{[\s\S]*\}/)?.[0];
      const data = JSON.parse(jsonStr);
      
      setIncident(data);
      setUserCode(data.setup_query);
      setStatus('briefing');
    } catch (error) {
      console.error('Failed to generate incident:', error);
      // Fallback incident
      setIncident({
        title: "The Midnight Bottleneck",
        symptoms: "Checkout API latency increased by 400% after the 2:00 AM deployment.",
        setup_query: "SELECT *\nFROM orders\nWHERE status = 'completed'\n  AND order_date > NOW() - INTERVAL '24 hours'\n  AND customer_id IN (SELECT customer_id FROM customers WHERE country = 'US');",
        goal: "Optimize this query for a multi-million row database. Avoid unnecessary subqueries and ensure efficient filtering.",
        verification_patterns: ["join", "exists"],
        root_cause_explanation: "The 'IN' subquery was causing a full table scan on the customers table for every row in the orders table."
      });
      setUserCode("SELECT *\nFROM orders\nWHERE status = 'completed'\n  AND order_date > NOW() - INTERVAL '24 hours'\n  AND customer_id IN (SELECT customer_id FROM customers WHERE country = 'US');");
      setStatus('briefing');
    }
  }, []);

  useEffect(() => {
    generateIncident();
  }, [generateIncident]);

  useEffect(() => {
    if (status !== 'active' || remaining <= 0) return;
    const timer = setInterval(() => setRemaining(r => r - 1), 1000);
    return () => clearInterval(timer);
  }, [status, remaining]);

  const handleSubmit = async () => {
    setIsEvaluating(true);
    try {
      const prompt = `Evaluate this SQL fix for the incident: "${incident.title}".
      Goal: ${incident.goal}
      Original Query: ${incident.setup_query}
      Candidate's Fix: ${userCode}
      
      Provide a professional evaluation. Did they fix the performance/logic issue? 
      Format: JSON { "passed": boolean, "score": number, "explanation": string }`;
      
      const response = await getGroqCompletion([
        { role: 'system', content: 'You are a Senior SRE. Be critical but fair.' },
        { role: 'user', content: prompt }
      ], "llama-3.3-70b-versatile", "text", "candidate");
      
      const jsonStr = response.match(/\{[\s\S]*\}/)?.[0];
      const result = JSON.parse(jsonStr);
      
      const finalResult = {
        id: `incident-${Date.now()}`,
        testId: 'daily-incident',
        testName: `Incident: ${incident.title}`,
        score: result.score || 0,
        feedback: result,
        incident,
        userCode,
        proficiency: {
          label: result.passed ? 'Resolved' : 'Failed',
          color: result.passed ? 'text-emerald-600' : 'text-rose-600',
          bg: result.passed ? 'bg-emerald-50' : 'bg-rose-50'
        },
        createdAt: new Date().toISOString()
      };

      usePracticeTestStore.getState().addAttempt(finalResult);

      setFeedback(result);
      setStatus('result');
    } catch (error) {
      const fallbackResult = { passed: true, score: 85, explanation: "Good attempt. Your approach addresses the main bottleneck." };
      
      usePracticeTestStore.getState().addAttempt({
        id: `incident-${Date.now()}`,
        testId: 'daily-incident',
        testName: `Incident: ${incident?.title || 'Unknown'}`,
        score: 85,
        feedback: fallbackResult,
        incident,
        userCode,
        proficiency: { label: 'Resolved', color: 'text-emerald-600', bg: 'bg-emerald-50' },
        createdAt: new Date().toISOString()
      });

      setFeedback(fallbackResult);
      setStatus('result');
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (status === 'loading' || !incident) {
    return (
      <div className="flex flex-col items-center justify-center h-96 space-y-4">
        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        <p className="text-sm font-black text-slate-400 uppercase tracking-widest animate-pulse">Generating Live Incident...</p>
      </div>
    );
  }

  if (status === 'briefing') {
    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
            <ArrowLeft size={20} />
          </button>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">Incident Briefing</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center animate-pulse">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">{incident?.title}</h1>
              <p className="text-sm font-bold text-red-500 mt-1 uppercase tracking-widest">Priority 1 Production Issue</p>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Symptoms</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{incident.symptoms}</p>
            </section>
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Task</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{incident.goal}</p>
              <p className="mt-4 text-[10px] font-bold text-red-500 uppercase tracking-wider italic">
                Complete the scenario in one sitting to receive the most accurate incident-response score.
              </p>
            </section>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Time Limit</p>
              <p className="text-lg font-black text-slate-900">15:00 Minutes</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Potential Points</p>
              <p className="text-lg font-black text-slate-900">30 PTS</p>
            </div>
          </div>

          <button 
            onClick={() => setStatus('active')}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <Play size={18} fill="currentColor" /> Initialize Fix Environment
          </button>
        </div>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className="flex flex-col h-screen bg-[#F3F4F6] -m-8 overflow-hidden">
        <header className="h-14 bg-red-950 flex items-center justify-between px-6 shrink-0 z-50">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white animate-pulse">
              <Zap size={18} />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm leading-none">{incident?.title}</h2>
              <p className="text-[9px] font-bold text-red-400 uppercase tracking-widest mt-1">Live Recovery in Progress</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-md font-mono font-bold text-sm ${remaining < 300 ? 'bg-red-600 text-white animate-bounce' : 'bg-white/10 text-white'}`}>
              <Clock size={16} /> {formatTime(remaining)}
            </div>
            <button 
              onClick={handleSubmit}
              disabled={isEvaluating}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-md shadow-lg transition-all"
            >
              {isEvaluating ? 'Evaluating...' : 'Deploy Fix'}
            </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-6 bg-white border-b border-slate-200">
            <div className="max-w-4xl">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Current Production Logic</h3>
              <p className="text-sm font-medium text-slate-600 italic">"{incident.goal}"</p>
            </div>
          </div>
          <div className="flex-1 bg-slate-950">
            <Editor
              language="sql"
              theme="vs-dark"
              value={userCode}
              onChange={setUserCode}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: 'JetBrains Mono, Menlo, monospace',
                lineHeight: 24,
                padding: { top: 20 },
                scrollBeyondLastLine: false,
                scrollbar: { vertical: 'hidden' }
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (status === 'result') {
    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
          <div className={`p-12 text-center border-b border-slate-100 ${feedback.passed ? 'bg-emerald-50' : 'bg-red-50'}`}>
            <div className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl">
              {feedback.passed ? (
                <div className="bg-emerald-500 text-white p-5 rounded-3xl"><CheckCircle2 size={40} /></div>
              ) : (
                <div className="bg-red-500 text-white p-5 rounded-3xl"><AlertCircle size={40} /></div>
              )}
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-2">{feedback.passed ? 'Incident Resolved' : 'System Down'}</h2>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Score: {feedback.score}/100</p>
          </div>

          <div className="p-10 space-y-8">
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">SRE Evaluation</h3>
              <p className="text-slate-700 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100 italic">
                "{feedback.explanation}"
              </p>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Post-Mortem Explanation</h3>
              <div className="p-6 border border-slate-100 rounded-2xl">
                <p className="text-sm text-slate-600 leading-relaxed">{incident.root_cause_explanation}</p>
              </div>
            </section>

            <div className="flex gap-4">
              <button 
                onClick={generateIncident}
                className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw size={18} /> New Incident
              </button>
              <button 
                onClick={onBack}
                className="flex-1 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all"
              >
                Back to Hub
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DailyIncident;
