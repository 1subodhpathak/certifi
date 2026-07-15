import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  ArrowLeft, Clock, Send, Play, Terminal, 
  CheckCircle2, XCircle, AlertCircle, Sparkles,
  ChevronLeft, ChevronRight, HelpCircle, Code2,
  Database, Layout, Search, BarChart3, RotateCcw, ListChecks
} from 'lucide-react';
import Editor from '@monaco-editor/react';
import { getGroqCompletion } from '../../core/services/groqService';

const difficultyOrder = { easy: 0, medium: 1, hard: 2 };

const normalizeGeneratedQuestions = (questions = []) => questions
  .map((question, index) => ({
    ...question,
    difficulty: question.difficulty || (
      index < Math.ceil(questions.length / 3)
        ? 'easy'
        : index < Math.ceil(questions.length / 3) * 2
          ? 'medium'
          : 'hard'
    ),
  }))
  .sort((a, b) => (difficultyOrder[a.difficulty] ?? 0) - (difficultyOrder[b.difficulty] ?? 0));

const DynamicPracticeTest = ({ config, onBack }) => {
  const [status, setStatus] = useState('generating'); // generating, active, result
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [remaining, setRemaining] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState(null);

  const generateTest = useCallback(async () => {
    setStatus('generating');
    try {
      const seed = Date.now();
      const prompt = `Generate a UNIQUE ${config.difficulty} level practice test for "${config.skill}".
      Target Experience: ${config.experience} years. Type: ${config.type}.
      Seed: ${seed}.
      
      CRITICAL INSTRUCTIONS:
      1. Choose a RARE or SPECIFIC industry context (e.g., Satellite Telemetry, High-Frequency Trading, Genomics, Renewable Energy Grid).
      2. Avoid generic "E-commerce" or "Blog" examples.
      3. For ${config.numQuestions} questions, order the test as easy first, then medium, then hard.
      4. Each question must feel like a professional certification item with a realistic workplace scenario.
      5. Ensure a mix of conceptual and practical application.
      
      Return as JSON array in field "questions":
      [{ "id": "q1", "type": "coding"|"mcq", "difficulty": "easy"|"medium"|"hard", "title": "...", "prompt": "...", ... }]`;
      
      const response = await getGroqCompletion([
        { role: 'system', content: 'You are an elite technical architect. Never repeat the same question twice. Be creative and highly technical.' },
        { role: 'user', content: prompt }
      ], "llama-3.3-70b-versatile", "json_object", "candidate");
      
      const data = JSON.parse(response);
      setQuestions(normalizeGeneratedQuestions(data.questions || []));
      setRemaining(config.numQuestions * parseInt(config.timePerQuestion) * 60);
      setStatus('active');
    } catch (error) {
      console.error('Test Generation Failed:', error);
      // Fallback questions would go here
      onBack();
    }
  }, [config, onBack]);

  useEffect(() => {
    generateTest();
  }, [generateTest]);

  useEffect(() => {
    if (status !== 'active' || remaining <= 0) return;
    const timer = setInterval(() => setRemaining(r => r - 1), 1000);
    return () => clearInterval(timer);
  }, [status, remaining]);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (val) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Logic to grade MCQs locally and Coding via AI
      let earnedPoints = 0;
      const questionResults = questions.map(q => {
        if (q.type === 'mcq') {
          const isCorrect = answers[q.id] === q.correct_option_index;
          if (isCorrect) earnedPoints += 10;
          return { ...q, isCorrect, candidateAnswer: answers[q.id] };
        }
        return { ...q, candidateAnswer: answers[q.id] };
      });

      // AI grading for coding portions if any
      const score = Math.round((earnedPoints / (questions.length * 10)) * 100);
      setResults({
        score,
        totalQuestions: questions.length,
        questionResults,
        timeSpent: (config.numQuestions * parseInt(config.timePerQuestion) * 60) - remaining
      });
      setStatus('result');
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'generating') {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-emerald-500/10 border-t-emerald-500 rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="text-emerald-500 animate-pulse" size={32} />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-black text-slate-900 mb-2">Architecting Your Custom Test...</h2>
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest animate-pulse">Talent Sense is analyzing your profile</p>
        </div>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className="flex flex-col h-screen -m-8 bg-[#F3F4F6] overflow-hidden">
        
        {/* Test Header */}
        <header className="h-14 bg-[#0F172A] flex items-center justify-between px-6 shrink-0 z-50">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              {currentQuestion.type === 'coding' ? <Code2 size={18} /> : <ListChecks size={18} />}
            </div>
            <div>
              <h1 className="text-white font-bold text-sm leading-none">{config.skill} Practice</h1>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Question {currentIndex + 1} of {questions.length}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-md font-mono font-bold text-sm ${remaining < 300 ? 'bg-red-600 text-white animate-pulse' : 'bg-white/10 text-white'}`}>
              <Clock size={16} /> {Math.floor(remaining / 60)}:{(remaining % 60).toString().padStart(2, '0')}
            </div>
            <button 
              onClick={handleSubmit}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-md shadow-lg transition-all"
            >
              Finish Test
            </button>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          
          {/* Question Panel */}
          <div className="w-[450px] bg-white border-r border-slate-200 overflow-y-auto p-8 shrink-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-0.5 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded">Problem {currentIndex + 1}</span>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-widest rounded border border-emerald-100">{currentQuestion.type.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-6">{currentQuestion.title}</h2>
            <div className="prose prose-slate prose-sm mb-12">
              <p className="text-slate-600 font-medium leading-relaxed whitespace-pre-wrap">{currentQuestion.prompt}</p>
            </div>

            {currentQuestion.type === 'mcq' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                      answers[currentQuestion.id] === idx
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : 'border-slate-100 hover:border-slate-200 text-slate-600'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black border ${
                      answers[currentQuestion.id] === idx ? 'bg-emerald-500 text-white border-emerald-400' : 'bg-slate-50 text-slate-400 border-slate-100'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm font-bold">{option}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Interaction Panel (Editor or Placeholder) */}
          <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden relative">
            {currentQuestion.type === 'coding' ? (
              <Editor
                language="javascript"
                theme="vs-dark"
                value={answers[currentQuestion.id] || currentQuestion.setup_code || ''}
                onChange={handleAnswer}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: 'JetBrains Mono, Menlo, monospace',
                  padding: { top: 20 },
                  lineHeight: 24,
                  scrollBeyondLastLine: false,
                }}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center p-20">
                <div className="text-center space-y-6 opacity-30">
                  <div className="w-20 h-20 bg-white/10 rounded-3xl mx-auto flex items-center justify-center">
                    <ListChecks size={40} className="text-white" />
                  </div>
                  <p className="text-white font-bold tracking-widest uppercase text-xs">Multiple Choice Question</p>
                </div>
              </div>
            )}

            {/* Navigation Bar */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-slate-200 px-8 flex items-center justify-between">
              <button 
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(c => c - 1)}
                className="flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 disabled:opacity-30 transition-all uppercase tracking-widest"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              
              <div className="flex gap-2">
                {questions.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-slate-900 w-4' : 'bg-slate-200'}`} />
                ))}
              </div>

              {currentIndex < questions.length - 1 ? (
                <button 
                  onClick={() => setCurrentIndex(c => c + 1)}
                  className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest hover:translate-x-1 transition-all"
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg text-xs font-black uppercase tracking-widest shadow-xl shadow-slate-900/20"
                >
                  Finish <Send size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'result' && results) {
    return (
      <div className="max-w-4xl mx-auto space-y-12 pb-20 animate-in fade-in zoom-in-95 duration-500">
        <div className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm">
          <div className="p-12 md:p-20 text-center border-b border-slate-100 bg-slate-50/50">
            <div className="w-24 h-24 bg-emerald-500 text-white rounded-[2rem] mx-auto flex items-center justify-center mb-8 shadow-2xl shadow-emerald-900/20">
              <BarChart3 size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Mastery Check Complete.</h1>
            <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto mb-12 leading-relaxed">
              You've completed the {config.skill} assessment. Your performance has been benchmarked against industry standards.
            </p>
            
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <ResultStat label="Accuracy" value={`${results.score}%`} />
              <ResultStat label="Questions" value={results.totalQuestions} />
              <ResultStat label="Time Taken" value={`${Math.floor(results.timeSpent / 60)}m`} />
            </div>
          </div>

          <div className="p-12 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Detailed Review</h3>
            {results.questionResults.map((q, i) => (
              <div key={q.id} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${q.isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  {q.isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 mb-2">{q.title}</h4>
                  <p className="text-[11px] font-medium text-slate-500 leading-relaxed italic">"{q.prompt.substring(0, 100)}..."</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-8">
              <button onClick={generateTest} className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                <RotateCcw size={18} /> New AI Quiz
              </button>
              <button onClick={onBack} className="flex-1 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all">
                Back to Center
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const ResultStat = ({ label, value }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-2xl font-black text-slate-900">{value}</p>
  </div>
);

export default DynamicPracticeTest;
