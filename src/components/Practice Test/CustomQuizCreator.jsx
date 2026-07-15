import React, { useState } from 'react';
import { 
  Settings2, Sparkles, Clock, Target, 
  Code2, ListChecks, Layers, Brain,
  ChevronRight, ArrowLeft, Zap, Info
} from 'lucide-react';

const CustomQuizCreator = ({ onBack, onCreateQuiz }) => {
  const [config, setConfig] = useState({
    skill: '',
    experience: '3',
    duration: '30',
    type: 'mix', // coding, mcq, mix
    difficulty: 'Medium',
    numQuestions: 10,
    timePerQuestion: '2'
  });

  const skillsList = [
    'SQL & Databases', 'React & Frontend', 'Node.js & Backend', 
    'Python for Data Science', 'System Design', 'Machine Learning', 
    'DevOps & AWS', 'Java Enterprise'
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
            <ArrowLeft size={20} />
          </button>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-1 block">AI Lab</span>
            <h1 className="text-3xl font-black text-slate-900">Build Your Practice.</h1>
          </div>
        </div>
        <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center gap-2 border border-emerald-100">
          <Sparkles size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Talent Sense Powered</span>
        </div>
      </header>

      <div className="grid lg:grid-cols-[1fr,350px] gap-8 items-start">
        
        {/* Configuration Form */}
        <div className="space-y-6">
          
          {/* Skill & Experience */}
          <section className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Brain size={14} /> Skill Focus
                </label>
                <div className="relative">
                  <select 
                    value={config.skill}
                    onChange={(e) => setConfig({...config, skill: e.target.value})}
                    className="w-full h-12 px-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 focus:ring-2 ring-emerald-500/20 outline-none appearance-none"
                  >
                    <option value="">Select a skill...</option>
                    {skillsList.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Layers size={14} /> Experience Level
                </label>
                <div className="flex items-center gap-4 h-12 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                  {['0-2', '3-5', '5-8', '8+'].map(exp => (
                    <button
                      key={exp}
                      onClick={() => setConfig({...config, experience: exp})}
                      className={`flex-1 h-full rounded-lg text-[10px] font-black transition-all ${
                        config.experience === exp 
                          ? 'bg-slate-900 text-white shadow-lg' 
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {exp} Yrs
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Difficulty & Question Type */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Target size={14} /> Difficulty
                </label>
                <div className="flex gap-2">
                  {['Easy', 'Medium', 'Hard'].map(diff => (
                    <button
                      key={diff}
                      onClick={() => setConfig({...config, difficulty: diff})}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                        config.difficulty === diff
                          ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-900/20'
                          : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Code2 size={14} /> Question Type
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'mcq', icon: ListChecks, label: 'MCQ' },
                    { id: 'coding', icon: Code2, label: 'Code' },
                    { id: 'mix', icon: Zap, label: 'Mixed' }
                  ].map(type => (
                    <button
                      key={type.id}
                      onClick={() => setConfig({...config, type: type.id})}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border flex flex-col items-center gap-1 transition-all ${
                        config.type === type.id
                          ? 'bg-slate-900 border-slate-800 text-white shadow-lg'
                          : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      <type.icon size={14} />
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Range Selectors */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Number of Questions</label>
                  <span className="text-lg font-black text-slate-900">{config.numQuestions}</span>
                </div>
                <input 
                  type="range" min="5" max="30" step="5"
                  value={config.numQuestions}
                  onChange={(e) => setConfig({...config, numQuestions: parseInt(e.target.value)})}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Clock size={14} /> Time Per Question
                </label>
                <div className="relative">
                  <select 
                    value={config.timePerQuestion}
                    onChange={(e) => setConfig({...config, timePerQuestion: e.target.value})}
                    className="w-full h-12 px-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-900 outline-none"
                  >
                    <option value="1">1 Minute</option>
                    <option value="2">2 Minutes</option>
                    <option value="5">5 Minutes</option>
                    <option value="10">10 Minutes</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Preview Sidebar */}
        <aside className="sticky top-8 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 mb-6 flex items-center gap-2">
              <Zap size={18} className="text-amber-500" fill="currentColor" /> Quiz Preview
            </h3>
            
            <div className="space-y-4 mb-8">
              <PreviewItem label="Skill" value={config.skill || 'Not Selected'} />
              <PreviewItem label="Difficulty" value={config.difficulty} />
              <PreviewItem label="Questions" value={config.numQuestions} />
              <PreviewItem label="Time Limit" value={`${config.numQuestions * parseInt(config.timePerQuestion)} Mins`} />
              <PreviewItem label="Format" value={config.type.toUpperCase()} />
            </div>

            <button 
              disabled={!config.skill}
              onClick={() => onCreateQuiz(config)}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-100 disabled:text-slate-400 text-white rounded-2xl font-black text-sm shadow-xl shadow-emerald-900/10 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={18} /> Create AI Quiz
            </button>
            <p className="text-[9px] font-bold text-slate-400 text-center mt-4 px-4 uppercase tracking-wider leading-relaxed">
              *AI will generate unique problems based on your specific profile.
            </p>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-6 text-white flex items-start gap-4">
            <Info size={20} className="text-emerald-400 shrink-0" />
            <div className="space-y-2">
              <p className="text-[10px] font-medium text-slate-400 leading-relaxed">
                Your results in AI-generated quizzes contribute to your <strong>Verified Talent Score</strong> and help track your skill growth.
              </p>
              <p className="text-[10px] font-bold text-emerald-400 leading-relaxed">
                Complete the quiz in one focused sitting for the most accurate proficiency report.
              </p>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

const PreviewItem = ({ label, value }) => (
  <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
    <span className="text-xs font-black text-slate-700">{value}</span>
  </div>
);

export default CustomQuizCreator;
