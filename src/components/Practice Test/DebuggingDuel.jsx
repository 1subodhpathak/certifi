import React, { useState, useEffect, useCallback } from 'react';
import { 
  Zap, Clock, AlertCircle, CheckCircle2, 
  Terminal, Play, ArrowLeft, RotateCcw,
  ShieldAlert, Activity, Bug, Code, Send, Sparkles
} from 'lucide-react';
import Editor from '@monaco-editor/react';
import { getGroqCompletion } from '../../core/services/groqService';
import { usePracticeTestStore } from '../../core/stores/practiceTestStore';

const DebuggingDuel = ({ onBack }) => {
  const [status, setStatus] = useState('loading'); // loading, briefing, active, result
  const [challenge, setChallenge] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [remaining, setRemaining] = useState(900); // 15 mins
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const generateChallenge = useCallback(async () => {
    setStatus('loading');
    try {
      const seed = Date.now();
      const prompt = `Generate a high-level software debugging challenge. 
      Seed: ${seed}.
      
      INSTRUCTIONS:
      1. Provide a title and a description of a subtle logical bug in a piece of code.
      2. Choose a language: JavaScript, Python, or SQL.
      3. Provide: buggy_code, goal, difficulty, expected_fix_logic, hints[].
      
      Return as JSON.`;
      
      const response = await getGroqCompletion([
        { role: 'system', content: 'You are a Senior Software Engineer. Generate realistic, non-obvious bugs (e.g., race conditions, off-by-one errors, improper closure usage, or inefficient complexity).' },
        { role: 'user', content: prompt }
      ], "llama-3.3-70b-versatile", "json_object", "candidate");
      
      const data = JSON.parse(response);
      setChallenge(data);
      setUserCode(data.buggy_code);
      setStatus('briefing');
    } catch (error) {
      console.error('Failed to generate challenge:', error);
      // Fallback
      const fallback = {
        title: "The Async Trap",
        description: "A data fetching function is returning results out of order due to improper async handling in a loop.",
        buggy_code: "async function fetchAll(ids) {\n  let results = [];\n  ids.forEach(async (id) => {\n    const data = await api.get(id);\n    results.push(data);\n  });\n  return results;\n}",
        goal: "Ensure the results are returned in the correct order and the function waits for all requests to complete.",
        difficulty: "Medium",
        expected_fix_logic: "Use Promise.all with map instead of forEach."
      };
      setChallenge(fallback);
      setUserCode(fallback.buggy_code);
      setStatus('briefing');
    }
  }, []);

  useEffect(() => {
    generateChallenge();
  }, [generateChallenge]);

  useEffect(() => {
    if (status !== 'active' || remaining <= 0) return;
    const timer = setInterval(() => setRemaining(r => r - 1), 1000);
    return () => clearInterval(timer);
  }, [status, remaining]);

  const handleSubmit = async () => {
    setIsEvaluating(true);
    try {
      const prompt = `Evaluate this code fix for the debugging challenge: "${challenge.title}".
      Goal: ${challenge.goal}
      Original Buggy Code: ${challenge.buggy_code}
      Candidate's Submission: ${userCode}
      
      Format: JSON { "passed": boolean, "score": number, "explanation": string, "feedback": string }`;
      
      const response = await getGroqCompletion([
        { role: 'system', content: 'You are a Principal Engineer. Be critical but fair.' },
        { role: 'user', content: prompt }
      ], "llama-3.3-70b-versatile", "json_object", "candidate");
      
      const result = JSON.parse(response);
      
      const finalResult = {
        id: `debug-${Date.now()}`,
        testId: 'debugging-duel',
        testName: `Debugging: ${challenge.title}`,
        score: result.score || 0,
        feedback: result,
        userCode,
        challenge,
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
      console.error('Evaluation failed:', error);
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-slate-200 border-t-emerald-500 rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-emerald-500">
            <Bug size={32} className="animate-pulse" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-black text-slate-900 mb-2">Injecting Bugs into Production...</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest animate-pulse">Generating your debugging challenge</p>
        </div>
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
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">Bug Briefing</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Zap size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">{challenge?.title}</h1>
              <p className="text-sm font-bold text-emerald-600 mt-1 uppercase tracking-widest">Complexity: {challenge?.difficulty}</p>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">The Incident</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{challenge?.description}</p>
            </section>
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Mission</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{challenge?.goal}</p>
            </section>
          </div>

          <button 
            onClick={() => setStatus('active')}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <Code size={18} /> Enter Debugging Duel
          </button>
        </div>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className="flex flex-col h-screen bg-[#F3F4F6] -m-8 overflow-hidden">
        <header className="h-14 bg-slate-900 flex items-center justify-between px-6 shrink-0 z-50">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
              <Bug size={18} />
            </div>
            <div>
              <h2 className="text-white font-bold text-sm leading-none">{challenge?.title}</h2>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Live Debugging Session</p>
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
          <div className="p-4 bg-white border-b border-slate-200">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Challenge Goal</h3>
            <p className="text-xs font-bold text-slate-600 italic">"{challenge.goal}"</p>
          </div>
          <div className="flex-1 bg-slate-950">
            <Editor
              language="javascript"
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
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (status === 'result' && feedback) {
    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
        <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
          <div className={`p-12 text-center border-b border-slate-100 ${feedback.passed ? 'bg-emerald-50' : 'bg-red-50'}`}>
            <div className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl">
              {feedback.passed ? (
                <div className="bg-emerald-500 text-white p-5 rounded-3xl"><CheckCircle2 size={40} /></div>
              ) : (
                <div className="bg-red-500 text-white p-5 rounded-3xl"><AlertCircle size={40} /></div>
              )}
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-2">{feedback.passed ? 'Bug Squashed' : 'System Failed'}</h2>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Score: {feedback.score}/100</p>
          </div>

          <div className="p-10 space-y-8">
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Senior Engineer Review</h3>
              <p className="text-slate-700 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100 italic">
                "{feedback.explanation}"
              </p>
            </section>

            <div className="flex gap-4">
              <button 
                onClick={generateChallenge}
                className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw size={18} /> New Duel
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

export default DebuggingDuel;
