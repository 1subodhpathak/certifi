import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  Database,
  FileText,
  History,
  Layout,
  ListChecks,
  Menu,
  MessageSquare,
  Moon,
  Play,
  RotateCcw,
  Send,
  Sparkles,
  Table2,
  Target,
  ThumbsDown,
  ThumbsUp,
  Trophy,
  Video,
  XCircle,
  Share2,
  ArrowRight,
  Zap,
  Award,
  Shield,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { usePracticeTestStore } from '../../core/stores/practiceTestStore';
import {
  PASS_SCORE,
  SQL_DATABASE,
  SQL_QUESTIONS,
  TEST_DURATION_SECONDS,
  TEST_NAME,
  TOTAL_POINTS,
} from '../../data/sqlPracticeTestData';

const normalizeSql = (sql = '') => sql.toLowerCase().replace(/--.*$/gm, ' ').replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\s+/g, ' ').trim();

const formatDuration = (seconds = 0) => {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

const gradeSqlAnswer = (question, answer) => {
  const normalized = normalizeSql(answer);
  if (!normalized) return { earnedPoints: 0, score: 0, matchedRubric: [], missedRubric: question.rubric.map(i => i.label), feedback: 'No SQL submitted.' };

  const matchedRubric = [];
  const missedRubric = [];
  let earnedPoints = 0;

  question.rubric.forEach((item) => {
    const passed = (item.all ? item.all.every((p) => p.test(normalized)) : true) && (item.any ? item.any.some((p) => p.test(normalized)) : true);
    if (passed) { earnedPoints += item.points; matchedRubric.push(item.label); }
    else { missedRubric.push(item.label); }
  });

  const cappedPoints = Math.min(question.points, earnedPoints);
  const score = Math.round((cappedPoints / question.points) * 100);

  return { earnedPoints: cappedPoints, score, matchedRubric, missedRubric };
};

const createTerminalReport = (question, answer) => {
  const grade = gradeSqlAnswer(question, answer);
  const submitted = normalizeSql(answer).length > 0;
  
  if (!submitted) {
    return {
      questionId: question.id,
      score: 0,
      passed: false,
      rows: ['No code provided. Run code or submit to see results here.']
    };
  }

  const rows = [
    `Running TalentSense SQL Engine...`,
    `> Schema: postgres_15`,
    `> Validating syntax and rubric points...`,
    `> Score: ${grade.score}%`,
    '',
  ];

  if (grade.missedRubric.length > 0) {
    rows.push('Errors/Missing Requirements:');
    grade.missedRubric.forEach(item => rows.push(`- [FAILED] ${item}`));
    rows.push('');
  }

  if (grade.matchedRubric.length > 0) {
    rows.push('Checks Passed:');
    grade.matchedRubric.forEach(item => rows.push(`- [OK] ${item}`));
  }

  rows.push('', 'Expected Shape:', question.expectedOutput);

  return {
    questionId: question.id,
    score: grade.score,
    earnedPoints: grade.earnedPoints,
    passed: grade.score >= 90,
    rows,
  };
};

const PracticeTest = ({ onBack }) => {
  const { attempts, addAttempt } = usePracticeTestStore();
  const [status, setStatus] = useState('lobby');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [remaining, setRemaining] = useState(TEST_DURATION_SECONDS);
  const [result, setResult] = useState(null);
  const [timeByQuestion, setTimeByQuestion] = useState({});
  const [terminalReport, setTerminalReport] = useState(null);
  const [showStartConfirm, setShowStartConfirm] = useState(false);
  
  // Left Panel Tabs
  const [activeTab, setActiveTab] = useState('Question');

  const attemptStartedAtRef = useRef(null);
  const questionStartedAtRef = useRef(null);

  const bestAttempt = useMemo(() => attempts?.reduce((best, attempt) => ((attempt.score || 0) > (best.score || 0) ? attempt : best), attempts[0] || null), [attempts]);
  const recentAttempts = useMemo(() => (attempts || []).slice(0, 5), [attempts]);
  
  const currentQuestion = selectedQuestions[currentIndex];
  const answeredCount = selectedQuestions.filter((q) => normalizeSql(answers[q.id]).length > 0).length;
  const currentTotalPoints = useMemo(() => selectedQuestions.reduce((sum, q) => sum + q.points, 0), [selectedQuestions]);

  const getEffectiveQuestionTimes = useCallback(() => {
    if (status !== 'active' || !questionStartedAtRef.current) return timeByQuestion;
    const currentId = selectedQuestions[currentIndex]?.id;
    const elapsed = Math.floor((Date.now() - questionStartedAtRef.current) / 1000);
    return { ...timeByQuestion, [currentId]: (timeByQuestion[currentId] || 0) + elapsed };
  }, [currentIndex, selectedQuestions, status, timeByQuestion]);

  const handleSubmit = useCallback((timedOut = false) => {
    if (status !== 'active') return;
    const effectiveTimes = getEffectiveQuestionTimes();
    const questionResults = selectedQuestions.map((question) => {
      const candidateAnswer = answers[question.id] || '';
      const grade = gradeSqlAnswer(question, candidateAnswer);
      return { questionId: question.id, title: question.title, points: question.points, officialSolution: question.solution, candidateAnswer, timeSpent: effectiveTimes[question.id] || 0, ...grade };
    });

    const earnedPoints = questionResults.reduce((sum, item) => sum + item.earnedPoints, 0);
    const score = Math.round((earnedPoints / currentTotalPoints) * 100);
    const elapsedSeconds = attemptStartedAtRef.current ? Math.min(TEST_DURATION_SECONDS, Math.max(1, Math.floor((Date.now() - attemptStartedAtRef.current) / 1000))) : TEST_DURATION_SECONDS - remaining;
    
    const attempt = { id: `sql-attempt-${Date.now()}`, testId: 'sql-faang-v1', testName: TEST_NAME, score, passed: score >= PASS_SCORE, earnedPoints, totalPoints: currentTotalPoints, elapsedSeconds, timedOut, answers, questionResults };
    
    addAttempt(attempt);
    setResult(attempt);
    setStatus('result');
  }, [addAttempt, answers, currentTotalPoints, getEffectiveQuestionTimes, remaining, selectedQuestions, status]);

  useEffect(() => {
    if (status !== 'active') return;
    if (remaining <= 0) { handleSubmit(true); return; }
    const interval = setInterval(() => setRemaining((prev) => Math.max(prev - 1, 0)), 1000);
    return () => clearInterval(interval);
  }, [handleSubmit, remaining, status]);

  const startAttempt = () => {
    // Pick 10 random questions
    const shuffled = [...SQL_QUESTIONS].sort(() => 0.5 - Math.random());
    const selection = shuffled.slice(0, 10);
    
    setSelectedQuestions(selection);
    setAnswers({}); 
    setCurrentIndex(0); 
    setRemaining(TEST_DURATION_SECONDS); 
    setResult(null); 
    setTimeByQuestion({}); 
    setTerminalReport(null);
    attemptStartedAtRef.current = Date.now(); 
    questionStartedAtRef.current = Date.now(); 
    setStatus('active');
  };

  const changeQuestion = (dir) => {
    const nextIndex = currentIndex + dir;
    if (nextIndex < 0 || nextIndex >= selectedQuestions.length) return;
    const questionId = selectedQuestions[currentIndex].id;
    const elapsed = Math.floor((Date.now() - questionStartedAtRef.current) / 1000);
    setTimeByQuestion((prev) => ({ ...prev, [questionId]: (prev[questionId] || 0) + elapsed }));
    
    setCurrentIndex(nextIndex);
    questionStartedAtRef.current = Date.now();
    setTerminalReport(null);
  };

  const submitWithConfirmation = () => {
    if (answeredCount < selectedQuestions.length && !window.confirm(`You have answered ${answeredCount} of ${selectedQuestions.length} questions. Submit anyway?`)) return;
    handleSubmit(false);
  };

  const runCurrentChecks = () => setTerminalReport(createTerminalReport(currentQuestion, answers[currentQuestion.id] || ''));

  // --- RENDERS ---

  if (status === 'active') {
    return (
      <div className="flex flex-col h-screen bg-white text-gray-900 font-sans overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="h-14 border-b border-gray-200 flex items-center justify-between px-4 shrink-0 bg-white">
          <div className="flex items-center gap-4">
            <Menu className="text-gray-500 w-5 h-5 cursor-pointer" />
            <div className="flex items-center gap-2">
              <Code2 className="text-emerald-500 w-6 h-6" />
              <div className="flex items-center text-sm font-semibold text-gray-800">
                SQL Coderpad
                <button disabled={currentIndex === 0} onClick={() => changeQuestion(-1)} className="ml-4 p-1 text-gray-400 hover:text-gray-800 disabled:opacity-30"><ChevronLeft size={16} /></button>
                <span className="text-gray-400 font-normal px-2">{currentIndex + 1} / {selectedQuestions.length}</span>
                <button disabled={currentIndex === selectedQuestions.length - 1} onClick={() => changeQuestion(1)} className="p-1 text-gray-400 hover:text-gray-800 disabled:opacity-30"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 text-gray-500">
            <Moon size={18} className="cursor-pointer hover:text-gray-800" />
            <Layout size={18} className="cursor-pointer hover:text-gray-800" />
            <div className="flex items-center gap-1.5 text-sm font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded">
              <Clock size={16} /> {formatDuration(remaining)}
            </div>
            <Video size={18} className="cursor-pointer hover:text-gray-800" />
            <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-xs font-bold">JD</div>
            <button onClick={submitWithConfirmation} className="ml-2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded shadow-sm transition-colors">
              Finish Test
            </button>
          </div>
        </header>

        {/* Two-Pane Workspace */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Pane: Question & Data */}
          <div className="w-1/2 border-r border-gray-200 flex flex-col bg-white overflow-hidden">
            
            {/* Tabs */}
            <div className="flex items-center gap-6 px-6 pt-3 border-b border-gray-200 bg-[#FAFAFA]">
              {['Question', 'Tables'].map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${activeTab === tab ? 'border-emerald-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  {tab === 'Question' && <FileText size={16} className={activeTab === tab ? 'text-emerald-500' : ''}/>}
                  {tab === 'Tables' && <Table2 size={16} />}
                  {tab === 'Discussion' && <MessageSquare size={16} />}
                  {tab === 'Solution' && <BookOpen size={16} />}
                  {tab}
                </button>
              ))}
            </div>

            {/* Left Pane Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'Question' && (
                <div className="space-y-6">
                  <h1 className="text-xl font-bold text-gray-900">{`TSSQL2000${currentIndex + 1}. ${currentQuestion.title}`}</h1>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${currentQuestion.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700' : currentQuestion.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                      {currentQuestion.difficulty}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">{currentQuestion.category}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 flex items-center gap-1"><Clock size={12}/> {currentQuestion.estimatedMinutes} Minutes</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">Marketplace</span>
                  </div>

                  <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                    <p>{currentQuestion.context}</p>
                    
                    <div className="p-4 bg-[#F8FAFC] border-l-4 border-emerald-500 rounded-r-md shadow-sm">
                      <p className="font-semibold text-gray-900">{currentQuestion.prompt}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Data Overview</h3>
                    <div className="border border-gray-200 rounded-md overflow-hidden text-sm">
                      <div className="grid grid-cols-3 bg-gray-50 p-3 border-b border-gray-200 font-semibold text-gray-700">
                        <div className="col-span-1">Table Name</div>
                        <div className="col-span-2">Description</div>
                      </div>
                      {currentQuestion.tables.map((tableName) => {
                        const table = SQL_DATABASE.find(t => t.name === tableName);
                        return table ? (
                          <div key={tableName} className="grid grid-cols-3 p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50">
                            <div className="col-span-1 font-mono text-xs text-blue-600 font-medium">{tableName}</div>
                            <div className="col-span-2 text-gray-600">{table.description}</div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Tables' && (
                <div className="space-y-6">
                  <h3 className="text-base font-semibold text-gray-900">Database Schema</h3>
                  {SQL_DATABASE.map((table) => (
                    <div key={table.name} className="border border-gray-200 rounded-md overflow-hidden mb-6">
                      <div className="bg-gray-50 p-3 border-b border-gray-200">
                        <span className="font-mono text-sm font-bold text-gray-800">{table.name}</span>
                        <p className="text-xs text-gray-500 mt-1">{table.description}</p>
                      </div>
                      <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50/50 text-gray-500 text-xs">
                          <tr><th className="p-2 pl-3 font-medium">Column</th><th className="p-2 font-medium">Type</th><th className="p-2 font-medium">Description</th></tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {table.columns.map(([col, type, desc]) => (
                            <tr key={col}>
                              <td className="p-2 pl-3 font-mono text-xs text-blue-600">{col}</td>
                              <td className="p-2 font-mono text-xs text-gray-500">{type}</td>
                              <td className="p-2 text-gray-600 text-xs">{desc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Left Pane Footer */}
            <div className="h-12 border-t border-gray-200 flex items-center justify-between px-4 text-gray-400 bg-white shrink-0">
              <div className="flex items-center gap-4">
                <ThumbsUp size={16} className="cursor-pointer hover:text-gray-700" />
                <ThumbsDown size={16} className="cursor-pointer hover:text-gray-700" />
                <MessageSquare size={16} className="cursor-pointer hover:text-gray-700" />
                <Share2 size={16} className="cursor-pointer hover:text-gray-700" />
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 241 Online
              </div>
            </div>
          </div>

          {/* Right Pane: Editor & Output */}
          <div className="w-1/2 flex flex-col bg-white">
            
            {/* Editor Header */}
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
              <span className="text-sm font-semibold text-gray-700">PostgreSQL Editor</span>
              <ChevronRight size={16} className="text-gray-400" />
            </div>

            {/* Monaco Editor */}
            <div className="flex-1 relative">
              <Editor
                language="sql"
                theme="light"
                value={answers[currentQuestion.id] || ''}
                onChange={(val) => setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }))}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: 'JetBrains Mono, monospace',
                  padding: { top: 16 },
                  scrollBeyondLastLine: false,
                  overviewRulerLanes: 0,
                  hideCursorInOverviewRuler: true,
                  scrollbar: { vertical: 'hidden' }
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="p-3 border-t border-gray-200 flex justify-end gap-3 bg-white shrink-0">
              <button onClick={runCurrentChecks} className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium rounded shadow-sm flex items-center gap-2 transition-colors">
                <Play size={14} /> Run Code
              </button>
              <button onClick={() => { runCurrentChecks(); changeQuestion(1); }} className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded shadow-sm flex items-center gap-2 transition-colors">
                <Send size={14} /> Submit
              </button>
            </div>

            {/* Output Console */}
            <div className="h-64 border-t border-gray-200 flex flex-col bg-[#FAFAFA] shrink-0">
              <div className="h-10 border-b border-gray-200 flex items-center justify-between px-4 shrink-0 bg-white">
                <span className="text-sm font-semibold text-gray-700">Output</span>
                <ChevronRight size={16} className="text-gray-400 rotate-90" />
              </div>
              <div className="flex-1 p-4 overflow-auto font-mono text-xs text-gray-600 whitespace-pre-wrap">
                {terminalReport ? terminalReport.rows.join('\n') : 'Run code or submit to see results here.'}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // --- RESULT VIEW ---
  if (status === 'result' && result) {
    const proficiency = result.score >= 90 ? { label: 'SQL Guru', color: 'text-indigo-600', bg: 'bg-indigo-50' } :
                        result.score >= 75 ? { label: 'Advanced', color: 'text-emerald-600', bg: 'bg-emerald-50' } :
                        result.score >= 50 ? { label: 'Proficient', color: 'text-blue-600', bg: 'bg-blue-50' } :
                        { label: 'Developing', color: 'text-amber-600', bg: 'bg-amber-50' };

    return (
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
        <header className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition hover:bg-slate-50">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">{TEST_NAME}</h1>
              <p className="text-sm font-medium text-slate-500">Query Performance Analysis</p>
            </div>
          </div>
          <button onClick={startAttempt} className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-600">
            <RotateCcw size={18} /> Retake Test
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Proficiency Card */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-sm">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="space-y-6">
                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest ${proficiency.bg} ${proficiency.color}`}>
                    <Trophy size={14} /> Level: {proficiency.label}
                  </div>
                  <h2 className="text-5xl font-black tracking-tight text-slate-900">Your <span className="text-emerald-600">Query Score</span>.</h2>
                  <p className="max-w-md text-lg font-medium leading-relaxed text-slate-500">
                    You've demonstrated {result.score >= 75 ? 'exceptional' : 'solid'} ability in handling complex {result.testName} challenges.
                  </p>
                </div>
                
                <div className="flex flex-col items-center justify-center rounded-[3rem] bg-slate-900 p-10 text-white shadow-2xl min-w-[240px]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Final Accuracy</p>
                  <div className="relative flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={364.4} strokeDashoffset={364.4 - (364.4 * result.score) / 100} className="text-emerald-500 transition-all duration-1000 ease-out" />
                    </svg>
                    <span className="absolute text-4xl font-black">{result.score}%</span>
                  </div>
                  <p className="mt-6 text-sm font-bold text-slate-300">{result.earnedPoints} / {result.totalPoints} Points</p>
                </div>
              </div>
            </div>

            {/* Detailed Question Review */}
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-3 px-2">
                <div className="w-1.5 h-6 bg-emerald-600 rounded-full" /> Solution Review
              </h3>
              {result.questionResults.map((q, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-md">
                  <div className="flex items-start gap-6">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black ${q.score >= 90 ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
                      {q.score >= 90 ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                    </div>
                    <div className="space-y-4 w-full">
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Problem {idx + 1}</p>
                        <h4 className="text-lg font-bold text-slate-900 leading-snug">{q.title}</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Query</p>
                          <pre className="text-xs font-mono font-bold text-slate-700 overflow-x-auto whitespace-pre-wrap">
                            {q.candidateAnswer || '-- No Code Submitted --'}
                          </pre>
                        </div>
                        <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-900 text-emerald-50">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-2">Optimal Solution</p>
                          <pre className="text-xs font-mono font-bold overflow-x-auto whitespace-pre-wrap">
                            {q.officialSolution}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Stats */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-[2.5rem] bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-black text-slate-900">SQL Metrics</h3>
              <div className="space-y-6">
                {[
                  { label: 'Time Spent', value: formatDuration(result.elapsedSeconds), icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'Avg Speed', value: `${Math.round(result.elapsedSeconds / result.questionResults.length)}s / q`, icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
                  { label: 'Complexity', value: 'FAANG-Level', icon: Database, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { label: 'Status', value: result.passed ? 'Certified' : 'Completed', icon: Award, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</p>
                      <p className="text-base font-black text-slate-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-emerald-600 p-8 text-white shadow-xl">
              <Sparkles className="mb-4 text-emerald-200" size={32} />
              <h3 className="mb-3 text-xl font-black">Become a Data Lead.</h3>
              <p className="text-sm font-medium leading-relaxed text-emerald-100 mb-6">
                Your SQL performance is exceptional. Hiring managers value candidates who can write efficient, readable queries.
              </p>
              <button onClick={onBack} className="w-full py-3 bg-white text-emerald-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-colors">
                Back to Practice Hub
              </button>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  // --- LOBBY VIEW ---
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12 relative">
      <AnimatePresence>
        {showStartConfirm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <Database size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">Start SQL Test?</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  This test cannot be repeated for the next <span className="text-slate-900 font-bold">30 days</span>.
                  Your performance analytics will be shared <span className="text-slate-900 font-bold">directly with the client</span>.
                </p>
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <button 
                  onClick={startAttempt}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg"
                >
                  Yes, Start Now
                </button>
                <button 
                  onClick={() => setShowStartConfirm(false)}
                  className="w-full py-4 bg-slate-50 text-slate-400 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-all"
                >
                  No, Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition hover:bg-slate-50">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{TEST_NAME}</h1>
            <p className="text-sm font-medium text-slate-500">Official TalentSense Database Assessment</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
                <Sparkles size={14} /> Top 1% Efficiency
              </div>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900">Master the <span className="text-emerald-600">SQL Mastery</span> Engine.</h2>
              <p className="mb-8 max-w-xl text-sm font-medium leading-relaxed text-slate-500">
                Evaluate your ability to write production-grade SQL for common analytics and reporting tasks. 
                This assessment picks 10 random questions from our curated database of 50 FAANG-level problems.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowStartConfirm(true)}
                  className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-600 active:scale-[0.98]"
                >
                  Start Assessment <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Real Environment</h3>
              <p className="text-sm font-medium text-slate-500">Live PostgreSQL 15 playground with real-time rubric-based evaluation.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Feedback</h3>
              <p className="text-sm font-medium text-slate-500">Get immediate terminal reports on your query performance and logic requirements.</p>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl">
            <h3 className="mb-8 text-xl font-black">Test Structure</h3>
            <div className="space-y-6">
              {[
                { label: 'Total Questions', value: '10 Items', icon: ListChecks },
                { label: 'Time Required', value: '45 Min', icon: Clock },
                { label: 'Test Logic', value: 'Rubric-Based', icon: Shield },
                { label: 'Result Format', value: 'Full Analytic Report', icon: FileText },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                    <p className="text-sm font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                <Info size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Hiring Signal</h4>
            </div>
            <p className="text-xs font-medium leading-relaxed text-slate-600">
              SQL scores are one of the strongest predictors of technical performance in data-driven roles.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PracticeTest;
