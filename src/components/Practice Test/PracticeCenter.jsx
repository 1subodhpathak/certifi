import React, { useState, useEffect, useMemo } from 'react';
import {
  Database, Brain, Zap, Trophy, History as HistoryIcon,
  ArrowRight, Target, Clock as ClockIcon, Star, Play,
  Layout, Search, BookOpen, MessageSquare, Settings2, Users, CheckCircle2,
  FileText, Shield as ShieldIcon, Award, RotateCcw, Globe, Code, Cloud, Cpu, FileSpreadsheet, Layers, Smartphone, PenTool,
  Monitor, Server, ShieldCheck, Terminal, LineChart, BarChart3, PieChart, ShoppingBag, HardDrive, Users2, Heart, Sparkles, Coffee,
  Briefcase, Stethoscope, Truck, Radio, Scissors, Megaphone, Percent, Landmark, Calculator, X, ChevronRight, Download, TrendingUp
} from 'lucide-react';
import { usePracticeTestStore } from '../../core/stores/practiceTestStore';
import { useProfileStore } from '../../core/stores/profileStore';
import { ASSESSMENT_TYPES } from '../../data/practiceAssessmentsData';
import AssessmentReportsPanel from '../shared/AssessmentReportsPanel';
import { formatCertificateDate, getCandidateName } from '../shared/AssessmentCertificate';
import { useCoins } from '../../context/CoinContext';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const STORAGE_KEY_PROGRESS = 'ts_personality_progress';
const STORAGE_KEY_REPORTS = 'ts_personality_reports';
const STORAGE_KEY_COGNITIVE = 'ts_cognitive_reports';
const AI_DRIVEN_TEST_IDS = new Set(['daily-incident', 'build-your-own', 'architecture-sandbox', 'debugging-duel', 'product-case-ai']);
const ASSESSMENT_COVER_KEYS = Object.fromEntries(
  Object.entries(ASSESSMENT_TYPES).map(([key, id]) => [id, key])
);
const TEST_COVER_OVERRIDES = {
  [ASSESSMENT_TYPES.communication]: 'Communication',
};

const getTestCoverSrc = (modeId) => {
  const fileName = TEST_COVER_OVERRIDES[modeId] || ASSESSMENT_COVER_KEYS[modeId] || modeId;
  return `/test-covers/${fileName}.jpg`;
};

const PracticeCenter = ({ onNavigate }) => {
  const { attempts, addCertificate, updateAttemptCertificate } = usePracticeTestStore();
  const profileData = useProfileStore((state) => state.profileData || {});
  const updateProfileField = useProfileStore((state) => state.updateField);
  const { usage } = useCoins();
  const [personalityProgress, setPersonalityProgress] = useState(0);
  const [hasPersonalityReport, setHasPersonalityReport] = useState(false);
  const [hasCognitiveReport, setHasCognitiveReport] = useState(false);
  const [activeTrack, setActiveTrack] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [pendingAiMode, setPendingAiMode] = useState(null);
  const [reviewingAttempt, setReviewingAttempt] = useState(false);

  useEffect(() => {
    const progress = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (progress) {
      try {
        const { currentIndex } = JSON.parse(progress);
        setPersonalityProgress(Math.round((currentIndex / 100) * 100));
      } catch (e) { }
    }
    const reports = localStorage.getItem(STORAGE_KEY_REPORTS);
    if (reports) {
      try {
        const parsed = JSON.parse(reports);
        setHasPersonalityReport(parsed.length > 0);
      } catch (e) { }
    }
    const cognitive = localStorage.getItem(STORAGE_KEY_COGNITIVE);
    if (cognitive) {
      try {
        const parsed = JSON.parse(cognitive);
        setHasCognitiveReport(parsed.length > 0);
      } catch (e) { }
    }
  }, []);

  const bestScore = attempts?.length ? Math.max(...attempts.map(a => a.score)) : 0;

  const practiceModes = [
    { id: ASSESSMENT_TYPES.communication, title: 'Communication / English', description: '20 questions covering grammar, reading comprehension, and client-ready business communication.', icon: MessageSquare, difficulty: 'Medium', duration: '25m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.sjt, title: 'Situational Judgment', description: '20 real workplace scenarios that test judgment, escalation, ownership, and stakeholder handling.', icon: Users, difficulty: 'Insight', duration: '30m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.caseStudy, title: 'Case Study / Business Problem', description: '20 analytics business cases focused on structured thinking, business sense, and communication.', icon: FileText, difficulty: 'Hard', duration: '90m', points: '100', color: 'slate', bg: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300' },
    { id: ASSESSMENT_TYPES.aptitude, title: 'Aptitude / Analytical', description: '20 questions for logic, data interpretation, quantitative ability, probability, ratios, and patterns.', icon: Target, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: 'cognitive-ability', title: 'Cognitive Ability', description: 'Pattern recognition, critical thinking, and abstract reasoning. Mu Sigma style challenge.', icon: Zap, difficulty: 'Hard', duration: '15m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400', isCompleted: hasCognitiveReport },
    { id: 'build-your-own', title: 'Build Your Own Practice', description: 'Configure your own AI-powered quiz. Choose skills, difficulty, and question types.', icon: Settings2, difficulty: 'Custom', duration: 'Flexible', points: 'Var.', color: 'violet', bg: 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300' },
    { id: 'practice-test', title: 'SQL Mastery Engine', description: 'FAANG-level SQL challenges with real-time grading and performance analytics.', icon: Database, difficulty: 'Med-Hard', duration: '45m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: 'daily-incident', title: 'Daily System Incident', description: 'Critical production issues. Can you diagnose and fix them under pressure?', icon: Zap, difficulty: 'Extreme', duration: '15m', points: '150', color: 'violet', bg: 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300' },
    { id: 'debugging-duel', title: 'Debugging Duel AI', description: 'Face off against AI-generated logical bugs. Find the flaw, deploy the fix, and save production.', icon: Zap, difficulty: 'Hard', duration: '15m', points: '120', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: 'product-case-ai', title: 'Product Strategy Case', description: 'Solve complex product scenarios dynamically generated by AI. Test your strategy and prioritization.', icon: Brain, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: 'architecture-sandbox', title: 'Architecture Sandbox', description: 'Design scalable systems and get AI critiques on your bottlenecks and trade-offs.', icon: Layout, difficulty: 'Hard', duration: '30m', points: '80', color: 'violet', bg: 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300' },
    { id: ASSESSMENT_TYPES.numerical, title: 'Numerical Reasoning', description: '20 questions on data interpretation, financial arithmetic, and business scaling calculations.', icon: Target, difficulty: 'Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.culture, title: 'Cultural Alignment', description: 'Ownership, transparency, and bias for action. Mu Sigma/Amazon style values assessment.', icon: Users, difficulty: 'Insight', duration: '20m', points: '100', color: 'purple', bg: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: ASSESSMENT_TYPES.finance, title: 'Financial Modeling', description: 'Advanced Excel logic, financial statements, and core business modeling principles.', icon: Database, difficulty: 'Hard', duration: '45m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.systemDesign, title: 'System Design (Scenario)', description: 'Architecture decisions for scalability, reliability, and high-performance engineering.', icon: Layout, difficulty: 'Hard', duration: '40m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { id: ASSESSMENT_TYPES.ethics, title: 'Ethical Judgment', description: 'Navigating gray areas, data privacy, and workplace conduct with integrity.', icon: ShieldIcon, difficulty: 'Insight', duration: '25m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.product, title: 'Product Thinking', description: 'User-centric design, prioritization frameworks, and product strategy logic.', icon: Brain, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.debugging, title: 'Debugging Logic', description: 'Identifying logical flaws, edge cases, and performance bugs in complex code.', icon: Zap, difficulty: 'Hard', duration: '35m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.french, title: 'French Proficiency', description: 'Test your French fluency across grammar, common phrases, and professional vocabulary.', icon: Globe, difficulty: 'Medium', duration: '20m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.german, title: 'German Proficiency', description: 'Challenge your German skills with a focus on sentence structure and business communication.', icon: Globe, difficulty: 'Med-Hard', duration: '20m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.spanish, title: 'Spanish Proficiency', description: 'Evaluate your Spanish level from basic conjugation to advanced workplace scenarios.', icon: Globe, difficulty: 'Medium', duration: '20m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.japanese, title: 'Japanese Proficiency', description: 'Test your Japanese proficiency including basic Kanji, particles, and polite forms (Keigo).', icon: Globe, difficulty: 'Hard', duration: '20m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { id: ASSESSMENT_TYPES.chinese, title: 'Chinese (Mandarin)', description: 'Comprehensive Mandarin test covering grammar, measure words, and business etiquette.', icon: Globe, difficulty: 'Hard', duration: '20m', points: '100', color: 'red', bg: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
    { id: ASSESSMENT_TYPES.excel, title: 'Advanced Excel', description: 'Master Pivot Tables, Power Query, and complex logical formulas for data analysis.', icon: FileSpreadsheet, difficulty: 'Medium', duration: '30m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.powerbi, title: 'Power BI & DAX', description: 'Data modeling and advanced DAX measures for enterprise business intelligence.', icon: Database, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.tableau, title: 'Tableau Analytics', description: 'LOD expressions, table calculations, and advanced visual storytelling.', icon: Database, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.looker, title: 'Looker Studio', description: 'LookML modeling and high-performance data visualization in Looker.', icon: Database, difficulty: 'Medium', duration: '30m', points: '100', color: 'purple', bg: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: ASSESSMENT_TYPES.aws, title: 'AWS Architect', description: 'Solutions architecture, compute, storage, and networking on AWS.', icon: Cloud, difficulty: 'Hard', duration: '30m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.azure, title: 'Azure Admin', description: 'Managing Azure identities, governance, and hybrid cloud infrastructure.', icon: Cloud, difficulty: 'Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.gcp, title: 'Google Cloud (GCP)', description: 'Designing and managing scalable solutions on Google Cloud Platform.', icon: Cloud, difficulty: 'Hard', duration: '30m', points: '100', color: 'red', bg: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
    { id: ASSESSMENT_TYPES.python, title: 'Python Mastery', description: 'Core syntax, list comprehensions, and data engineering libraries.', icon: Code, difficulty: 'Medium', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.java, title: 'Java Backend', description: 'OOP principles, JVM architecture, and enterprise Java development.', icon: Code, difficulty: 'Hard', duration: '30m', points: '100', color: 'red', bg: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
    { id: ASSESSMENT_TYPES.react, title: 'React Engineering', description: 'Hooks, Virtual DOM, and modern frontend state management patterns.', icon: Layers, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.swift, title: 'iOS Swift / Apple', description: 'SwiftUI, ARC, and native Apple application development.', icon: Smartphone, difficulty: 'Hard', duration: '30m', points: '100', color: 'slate', bg: 'bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300' },
    { id: ASSESSMENT_TYPES.kotlin, title: 'Android / Kotlin', description: 'Coroutines, Jetpack Compose, and native Android architecture.', icon: Smartphone, difficulty: 'Hard', duration: '30m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.asana, title: 'Asana Specialist', description: 'Workflows, portfolio tracking, and project management at scale.', icon: CheckCircle2, difficulty: 'Medium', duration: '25m', points: '100', color: 'rose', bg: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' },
    { id: ASSESSMENT_TYPES.jira, title: 'JIRA Mastery', description: 'Agile workflows, Scrum/Kanban boards, and advanced JQL.', icon: Layers, difficulty: 'Medium', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.trello, title: 'Trello Board Mgmt', description: 'Visual collaboration, Power-Ups, and Butler automation.', icon: Layout, difficulty: 'Easy', duration: '20m', points: '100', color: 'sky', bg: 'bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400' },
    { id: ASSESSMENT_TYPES.pmp, title: 'PMP Certification', description: 'PMBOK Guide, process groups, and global project management standards.', icon: Award, difficulty: 'Hard', duration: '40m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { id: ASSESSMENT_TYPES.prince2, title: 'Prince2 Methods', description: 'Structured project management methodology: Principles, Themes, and Processes.', icon: ShieldIcon, difficulty: 'Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.nexus, title: 'Nexus (Scaled Scrum)', description: 'Scaling Scrum for multiple teams using the Nexus framework.', icon: Users, difficulty: 'Hard', duration: '25m', points: '100', color: 'orange', bg: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: ASSESSMENT_TYPES.aiml, title: 'AI / ML Specialist', description: 'Neural networks, supervised learning, and deep learning architectures.', icon: Cpu, difficulty: 'Hard', duration: '30m', points: '100', color: 'purple', bg: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: ASSESSMENT_TYPES.uiux, title: 'UI / UX Design', description: 'User research, wireframing, accessibility, and interaction design.', icon: PenTool, difficulty: 'Medium', duration: '30m', points: '100', color: 'pink', bg: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' },
    { id: ASSESSMENT_TYPES.angular, title: 'Angular Enterprise', description: 'Dependency injection, RxJS streams, and enterprise Angular architecture.', icon: Monitor, difficulty: 'Hard', duration: '30m', points: '100', color: 'red', bg: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
    { id: ASSESSMENT_TYPES.vue, title: 'Vue.js Progressive', description: 'Composition API, Pinia state, and reactive frontend patterns.', icon: Code, difficulty: 'Medium', duration: '25m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.nodejs, title: 'Node.js Backend', description: 'Event loop, streams, and high-performance Express server design.', icon: Server, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'green', bg: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
    { id: ASSESSMENT_TYPES.django, title: 'Django Python', description: 'MVT architecture, Django ORM, and secure web application development.', icon: Code, difficulty: 'Medium', duration: '30m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.springboot, title: 'Spring Boot Java', description: 'Enterprise Java, Microservices, and Spring Data JPA mastery.', icon: Coffee, difficulty: 'Hard', duration: '30m', points: '100', color: 'green', bg: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
    { id: ASSESSMENT_TYPES.flutter, title: 'Flutter Hybrid', description: 'Dart programming, widget trees, and multi-platform app development.', icon: Smartphone, difficulty: 'Medium', duration: '30m', points: '100', color: 'sky', bg: 'bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400' },
    { id: ASSESSMENT_TYPES.reactnative, title: 'React Native', description: 'Native bridges, mobile styling, and cross-platform React excellence.', icon: Smartphone, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.sql_adv, title: 'Advanced SQL', description: 'Window functions, CTEs, and complex query performance tuning.', icon: Database, difficulty: 'Hard', duration: '30m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
    { id: ASSESSMENT_TYPES.mongodb, title: 'MongoDB NoSQL', description: 'Document modeling, aggregation framework, and sharding strategies.', icon: Database, difficulty: 'Medium', duration: '30m', points: '100', color: 'green', bg: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
    { id: ASSESSMENT_TYPES.postgresql, title: 'PostgreSQL Relational', description: 'JSONB types, MVCC concurrency, and advanced relational design.', icon: Database, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.docker, title: 'Docker Containers', description: 'Image layering, container orchestration, and Dockerfile optimization.', icon: HardDrive, difficulty: 'Medium', duration: '25m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.kubernetes, title: 'Kubernetes (K8s)', description: 'Pod lifecycle, services, and high-availability cluster management.', icon: Cloud, difficulty: 'Hard', duration: '35m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.jenkins, title: 'Jenkins Automation', description: 'CI/CD pipeline as code, Jenkinsfile design, and build automation.', icon: RotateCcw, difficulty: 'Medium', duration: '25m', points: '100', color: 'red', bg: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
    { id: ASSESSMENT_TYPES.terraform, title: 'Terraform IaC', description: 'HCL infrastructure, state management, and provider configuration.', icon: Cloud, difficulty: 'Hard', duration: '30m', points: '100', color: 'purple', bg: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: ASSESSMENT_TYPES.hacking, title: 'Ethical Hacking', description: 'Penetration testing, exploitation techniques, and defensive security.', icon: ShieldCheck, difficulty: 'Expert', duration: '40m', points: '100', color: 'slate', bg: 'bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300' },
    { id: ASSESSMENT_TYPES.security_plus, title: 'CompTIA Security+', description: 'Threats, vulnerabilities, and network security compliance standards.', icon: ShieldCheck, difficulty: 'Hard', duration: '45m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
    { id: ASSESSMENT_TYPES.owasp, title: 'OWASP Top 10', description: 'Web application security risks, injection, and secure coding practices.', icon: ShieldCheck, difficulty: 'Hard', duration: '30m', points: '100', color: 'red', bg: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
    { id: ASSESSMENT_TYPES.ga4, title: 'Google Analytics 4', description: 'Event-based tracking, conversion modeling, and exploration reports.', icon: BarChart3, difficulty: 'Medium', duration: '25m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.meta_ads, title: 'Meta Ads Expert', description: 'Campaign structure, Pixel/CAPI, and conversion optimization.', icon: PieChart, difficulty: 'Medium', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.seo, title: 'SEO Strategy', description: 'On-page optimization, technical SEO audit, and backlink authority.', icon: Search, difficulty: 'Medium', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.content_marketing, title: 'Content Strategy', description: 'Audience personas, content lifecycle, and inbound marketing funnels.', icon: FileText, difficulty: 'Easy', duration: '30m', points: '100', color: 'rose', bg: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' },
    { id: ASSESSMENT_TYPES.copywriting, title: 'Copywriting Skills', description: 'Persuasion psychology, headlines, and conversion-focused copy.', icon: PenTool, difficulty: 'Medium', duration: '25m', points: '100', color: 'orange', bg: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: ASSESSMENT_TYPES.fin_modeling, title: 'Financial Modeling', description: 'Three-statement projections, DCF valuation, and Excel modeling.', icon: FileSpreadsheet, difficulty: 'Hard', duration: '40m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.quickbooks, title: 'QuickBooks Mastery', description: 'Bookkeeping, bank reconciliations, and financial reporting.', icon: LineChart, difficulty: 'Medium', duration: '30m', points: '100', color: 'green', bg: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
    { id: ASSESSMENT_TYPES.ifrs, title: 'IFRS / GAAP Stds', description: 'International accounting standards and revenue recognition rules.', icon: ShieldIcon, difficulty: 'Hard', duration: '30m', points: '100', color: 'slate', bg: 'bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300' },
    { id: ASSESSMENT_TYPES.salesforce, title: 'Salesforce Admin', description: 'CRM objects, flow automation, and security permissions.', icon: Cloud, difficulty: 'Medium', duration: '30m', points: '100', color: 'sky', bg: 'bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400' },
    { id: ASSESSMENT_TYPES.hubspot, title: 'HubSpot Expert', description: 'Inbound automation, contact management, and deal pipelines.', icon: Target, difficulty: 'Medium', duration: '25m', points: '100', color: 'orange', bg: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: ASSESSMENT_TYPES.sap, title: 'SAP ERP Basics', description: 'SAP S/4HANA navigation, module logic, and T-code mastery.', icon: Server, difficulty: 'Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.netsuite, title: 'NetSuite ERP', description: 'Unified cloud ERP, saved searches, and SuiteAnalytics.', icon: Cloud, difficulty: 'Hard', duration: '30m', points: '100', color: 'slate', bg: 'bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300' },
    { id: ASSESSMENT_TYPES.sourcing, title: 'Technical Sourcing', description: 'Boolean search strings, LinkedIn Recruiter, and GitHub talent discovery.', icon: Search, difficulty: 'Medium', duration: '25m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.interviewing, title: 'Behavioral Interviews', description: 'STAR method, bias reduction, and structured evaluation techniques.', icon: Users2, difficulty: 'Medium', duration: '30m', points: '100', color: 'purple', bg: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: ASSESSMENT_TYPES.shrm, title: 'HR Operations', description: 'Employee relations, compliance, and strategic HR management.', icon: ShieldIcon, difficulty: 'Hard', duration: '40m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
    { id: ASSESSMENT_TYPES.conflict, title: 'Conflict Resolution', description: 'De-escalation tactics, active listening, and workplace negotiation.', icon: MessageSquare, difficulty: 'Medium', duration: '25m', points: '100', color: 'rose', bg: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' },
    { id: ASSESSMENT_TYPES.eq, title: 'Emotional Intel.', description: 'Self-awareness, social empathy, and professional relationship management.', icon: Heart, difficulty: 'Medium', duration: '25m', points: '100', color: 'pink', bg: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' },
    { id: ASSESSMENT_TYPES.presentation, title: 'Executive Speaking', description: 'High-stakes presentation, storytelling, and audience persuasion.', icon: Users, difficulty: 'Hard', duration: '30m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
    { id: ASSESSMENT_TYPES.web3, title: 'Web3 & Blockchain', description: 'Decentralized protocols, wallets, and blockchain architecture.', icon: Zap, difficulty: 'Hard', duration: '30m', points: '100', color: 'purple', bg: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: ASSESSMENT_TYPES.smart_contracts, title: 'Solidity Contracts', description: 'Smart contract security, gas optimization, and Ethereum development.', icon: Code, difficulty: 'Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.r_prog, title: 'R for Data Science', description: 'Tidyverse data frames, statistical analysis, and data viz with R.', icon: BarChart3, difficulty: 'Med-Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.spark, title: 'Apache Spark', description: 'Distributed computing, RDDs, and Big Data processing at scale.', icon: Sparkles, difficulty: 'Hard', duration: '30m', points: '100', color: 'orange', bg: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: 'personality-spectrum', title: 'Personality Spectrum', description: 'Discover your professional DNA through a comprehensive 100-question psychometric analysis.', icon: Users, difficulty: 'Insight', duration: '15m', points: '50', color: 'purple', bg: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400', progress: personalityProgress, isCompleted: hasPersonalityReport },
    { id: ASSESSMENT_TYPES.critical_thinking, title: 'Critical Thinking', description: 'Logical reasoning, Identifying assumptions, Fallacies, and systematic Decision making.', icon: Brain, difficulty: 'Hard', duration: '30m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { id: ASSESSMENT_TYPES.domain_finance, title: 'Finance Industry', description: 'Banking operations, Capital markets, and Financial Instruments domain knowledge.', icon: Landmark, difficulty: 'Medium', duration: '30m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.domain_healthcare, title: 'Healthcare Domain', description: 'Clinical operations, Health insurance, MedTech, and HIPAA compliance regulations.', icon: Stethoscope, difficulty: 'Medium', duration: '30m', points: '100', color: 'rose', bg: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' },
    { id: ASSESSMENT_TYPES.domain_procurement, title: 'Procurement Domain', description: 'Supply chain management, Vendor selection, RFP/RFQ, and Contract negotiation.', icon: Truck, difficulty: 'Medium', duration: '30m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.domain_accounting, title: 'Accounting Domain', description: 'Core bookkeeping, General Ledger, Reconciliations, and Financial Statements.', icon: Calculator, difficulty: 'Medium', duration: '30m', points: '100', color: 'slate', bg: 'bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300' },
    { id: ASSESSMENT_TYPES.domain_it_software, title: 'IT Software Domain', description: 'SDLC, SaaS models, Open Source, and Software architecture industry basics.', icon: Monitor, difficulty: 'Medium', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.domain_it_hardware, title: 'IT Hardware Domain', description: 'Computer components, Networking, Data centers, and Hardware lifecycle management.', icon: HardDrive, difficulty: 'Medium', duration: '30m', points: '100', color: 'slate', bg: 'bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300' },
    { id: ASSESSMENT_TYPES.domain_telecom, title: 'Telecom Domain', description: 'Mobile networks (5G), Satellite, Fiber optics, and Regulatory body knowledge.', icon: Radio, difficulty: 'Medium', duration: '30m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { id: ASSESSMENT_TYPES.domain_paper, title: 'Paper & Pulp Domain', description: 'Manufacturing process, Sustainability, Grades of paper, and Industry supply chain.', icon: FileText, difficulty: 'Medium', duration: '30m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.domain_media, title: 'Media & Ent. Domain', description: 'Production, Streaming, AdTech, and Intellectual Property rights in media.', icon: Play, difficulty: 'Medium', duration: '30m', points: '100', color: 'red', bg: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
    { id: ASSESSMENT_TYPES.domain_epc, title: 'EPC Domain', description: 'Engineering, Procurement, and Construction for large-scale industrial projects.', icon: Layout, difficulty: 'Hard', duration: '30m', points: '100', color: 'slate', bg: 'bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300' },
    { id: ASSESSMENT_TYPES.domain_textile, title: 'Textile Domain', description: 'Fibers, Weaving, Dyeing, Apparel manufacturing, and Industry sustainability.', icon: Scissors, difficulty: 'Medium', duration: '30m', points: '100', color: 'rose', bg: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' },
    { id: ASSESSMENT_TYPES.domain_retail, title: 'Retail Domain', description: 'Inventory management, Merchandising, E-commerce, and Customer experience.', icon: ShoppingBag, difficulty: 'Medium', duration: '30m', points: '100', color: 'amber', bg: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
    { id: ASSESSMENT_TYPES.domain_fintech, title: 'Fintech Domain', description: 'Digital payments, Neobanks, Blockchain, Open Banking, and RegTech rules.', icon: Zap, difficulty: 'Hard', duration: '30m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { id: ASSESSMENT_TYPES.domain_pr, title: 'PR Domain', description: 'Media relations, Crisis management, Reputation, and Press release strategy.', icon: Megaphone, difficulty: 'Medium', duration: '25m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.domain_advertising, title: 'Ad Agency Domain', description: 'Agency structure, Creative briefs, Media planning, and Client management.', icon: MessageSquare, difficulty: 'Medium', duration: '30m', points: '100', color: 'orange', bg: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: ASSESSMENT_TYPES.domain_ar, title: 'AR (Accounts Rec.)', description: 'Invoicing, Collections, Credit management, and Cash application workflows.', icon: Calculator, difficulty: 'Medium', duration: '25m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.domain_ap, title: 'AP (Accounts Pay.)', description: 'Procure-to-Pay, Three-way match, Vendor management, and Accrual methods.', icon: Calculator, difficulty: 'Medium', duration: '25m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.domain_fa, title: 'Finance & Accounting', description: 'Integrated F&A, Intercompany, Consolidation, and Reporting standards.', icon: Briefcase, difficulty: 'Hard', duration: '35m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.tax_india, title: 'Taxation India', description: 'GST, Income Tax (Direct), TDS/TCS, and Corporate Tax laws in India.', icon: Percent, difficulty: 'Hard', duration: '30m', points: '100', color: 'orange', bg: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: ASSESSMENT_TYPES.tax_usa, title: 'Taxation USA', description: 'IRS, Federal vs State tax, 1040/1099/W-2, and Corporate Tax (Form 1120).', icon: Percent, difficulty: 'Hard', duration: '30m', points: '100', color: 'blue', bg: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: ASSESSMENT_TYPES.tax_europe, title: 'Taxation Europe', description: 'EU VAT, BEPS, Transfer pricing, and Country-specific European tax rules.', icon: Percent, difficulty: 'Hard', duration: '30m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { id: ASSESSMENT_TYPES.tax_uae, title: 'Taxation UAE', description: 'UAE VAT, New Corporate Tax (9%), FTA, and Free Zone tax regulations.', icon: Percent, difficulty: 'Hard', duration: '30m', points: '100', color: 'emerald', bg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: ASSESSMENT_TYPES.auditing, title: 'Auditing & Assurance', description: 'Internal & External audit, Risk assessment, Evidence, and Auditor ethics.', icon: ShieldCheck, difficulty: 'Hard', duration: '30m', points: '100', color: 'indigo', bg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' }
  ];

  const trackMeta = [
    { id: 'all', label: 'All tests' },
    { id: 'workplace', label: 'Business' },
    { id: 'technical', label: 'Technology' },
    { id: 'coding', label: 'Coding' },
    { id: 'aiGenerated', label: 'AI Generated' },
    { id: 'cloudSecurity', label: 'Cloud & Security' },
    { id: 'tools', label: 'Tools' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'languages', label: 'Languages' },
    { id: 'domains', label: 'Domains' },
  ];

  const modeTrack = {
    [ASSESSMENT_TYPES.communication]: 'languages', [ASSESSMENT_TYPES.sjt]: 'workplace', [ASSESSMENT_TYPES.caseStudy]: 'analytics',
    [ASSESSMENT_TYPES.aptitude]: 'analytics', [ASSESSMENT_TYPES.numerical]: 'analytics', [ASSESSMENT_TYPES.culture]: 'workplace',
    [ASSESSMENT_TYPES.finance]: 'analytics', [ASSESSMENT_TYPES.systemDesign]: 'technical', [ASSESSMENT_TYPES.ethics]: 'workplace',
    [ASSESSMENT_TYPES.product]: 'workplace', [ASSESSMENT_TYPES.debugging]: 'analytics', 'cognitive-ability': 'analytics',
    'practice-test': 'coding', 'daily-incident': 'aiGenerated', 'debugging-duel': 'aiGenerated', 'product-case-ai': 'aiGenerated',
    'architecture-sandbox': 'aiGenerated', 'build-your-own': 'aiGenerated', 'personality-spectrum': 'workplace',
    [ASSESSMENT_TYPES.french]: 'languages', [ASSESSMENT_TYPES.german]: 'languages', [ASSESSMENT_TYPES.spanish]: 'languages',
    [ASSESSMENT_TYPES.japanese]: 'languages', [ASSESSMENT_TYPES.chinese]: 'languages', [ASSESSMENT_TYPES.excel]: 'tools',
    [ASSESSMENT_TYPES.powerbi]: 'tools', [ASSESSMENT_TYPES.tableau]: 'tools', [ASSESSMENT_TYPES.looker]: 'tools',
    [ASSESSMENT_TYPES.aws]: 'cloudSecurity', [ASSESSMENT_TYPES.azure]: 'cloudSecurity', [ASSESSMENT_TYPES.gcp]: 'cloudSecurity',
    [ASSESSMENT_TYPES.python]: 'coding', [ASSESSMENT_TYPES.java]: 'coding', [ASSESSMENT_TYPES.react]: 'coding',
    [ASSESSMENT_TYPES.swift]: 'coding', [ASSESSMENT_TYPES.kotlin]: 'coding', [ASSESSMENT_TYPES.asana]: 'tools',
    [ASSESSMENT_TYPES.jira]: 'tools', [ASSESSMENT_TYPES.trello]: 'tools', [ASSESSMENT_TYPES.pmp]: 'tools',
    [ASSESSMENT_TYPES.prince2]: 'tools', [ASSESSMENT_TYPES.nexus]: 'tools', [ASSESSMENT_TYPES.aiml]: 'technical',
    [ASSESSMENT_TYPES.uiux]: 'technical', [ASSESSMENT_TYPES.angular]: 'coding', [ASSESSMENT_TYPES.vue]: 'coding',
    [ASSESSMENT_TYPES.nodejs]: 'coding', [ASSESSMENT_TYPES.django]: 'coding', [ASSESSMENT_TYPES.springboot]: 'coding',
    [ASSESSMENT_TYPES.flutter]: 'coding', [ASSESSMENT_TYPES.reactnative]: 'coding', [ASSESSMENT_TYPES.sql_adv]: 'coding',
    [ASSESSMENT_TYPES.mongodb]: 'coding', [ASSESSMENT_TYPES.postgresql]: 'coding', [ASSESSMENT_TYPES.docker]: 'cloudSecurity',
    [ASSESSMENT_TYPES.kubernetes]: 'cloudSecurity', [ASSESSMENT_TYPES.jenkins]: 'cloudSecurity', [ASSESSMENT_TYPES.terraform]: 'cloudSecurity',
    [ASSESSMENT_TYPES.hacking]: 'cloudSecurity', [ASSESSMENT_TYPES.security_plus]: 'cloudSecurity', [ASSESSMENT_TYPES.owasp]: 'cloudSecurity',
    [ASSESSMENT_TYPES.ga4]: 'tools', [ASSESSMENT_TYPES.meta_ads]: 'tools', [ASSESSMENT_TYPES.seo]: 'tools',
    [ASSESSMENT_TYPES.content_marketing]: 'tools', [ASSESSMENT_TYPES.copywriting]: 'tools', [ASSESSMENT_TYPES.fin_modeling]: 'tools',
    [ASSESSMENT_TYPES.quickbooks]: 'tools', [ASSESSMENT_TYPES.ifrs]: 'tools', [ASSESSMENT_TYPES.salesforce]: 'tools',
    [ASSESSMENT_TYPES.hubspot]: 'tools', [ASSESSMENT_TYPES.sap]: 'tools', [ASSESSMENT_TYPES.netsuite]: 'tools',
    [ASSESSMENT_TYPES.sourcing]: 'tools', [ASSESSMENT_TYPES.interviewing]: 'workplace', [ASSESSMENT_TYPES.shrm]: 'workplace',
    [ASSESSMENT_TYPES.web3]: 'technical', [ASSESSMENT_TYPES.smart_contracts]: 'technical', [ASSESSMENT_TYPES.r_prog]: 'technical',
    [ASSESSMENT_TYPES.spark]: 'technical', [ASSESSMENT_TYPES.conflict]: 'workplace', [ASSESSMENT_TYPES.eq]: 'workplace',
    [ASSESSMENT_TYPES.presentation]: 'workplace', [ASSESSMENT_TYPES.critical_thinking]: 'workplace', [ASSESSMENT_TYPES.domain_finance]: 'domains',
    [ASSESSMENT_TYPES.domain_healthcare]: 'domains', [ASSESSMENT_TYPES.domain_procurement]: 'domains', [ASSESSMENT_TYPES.domain_accounting]: 'domains',
    [ASSESSMENT_TYPES.domain_it_software]: 'domains', [ASSESSMENT_TYPES.domain_it_hardware]: 'domains', [ASSESSMENT_TYPES.domain_telecom]: 'domains',
    [ASSESSMENT_TYPES.domain_paper]: 'domains', [ASSESSMENT_TYPES.domain_media]: 'domains', [ASSESSMENT_TYPES.domain_epc]: 'domains',
    [ASSESSMENT_TYPES.domain_textile]: 'domains', [ASSESSMENT_TYPES.domain_retail]: 'domains', [ASSESSMENT_TYPES.domain_fintech]: 'domains',
    [ASSESSMENT_TYPES.domain_pr]: 'domains', [ASSESSMENT_TYPES.domain_advertising]: 'domains', [ASSESSMENT_TYPES.domain_ar]: 'domains',
    [ASSESSMENT_TYPES.domain_ap]: 'domains', [ASSESSMENT_TYPES.domain_fa]: 'domains', [ASSESSMENT_TYPES.tax_india]: 'domains',
    [ASSESSMENT_TYPES.tax_usa]: 'domains', [ASSESSMENT_TYPES.tax_europe]: 'domains', [ASSESSMENT_TYPES.tax_uae]: 'domains',
    [ASSESSMENT_TYPES.auditing]: 'domains',
  };

  const enhancedModes = useMemo(() => (
    practiceModes.map((mode) => {
      const attempt = attempts?.find((item) => item.testId === mode.id);
      return {
        ...mode,
        track: modeTrack[mode.id] || 'technical',
        lastScore: attempt?.score,
        isCompleted: mode.isCompleted || Boolean(attempt),
        isAiDriven: AI_DRIVEN_TEST_IDS.has(mode.id),
      };
    })
  ), [attempts, hasCognitiveReport, hasPersonalityReport, personalityProgress]);

  const filteredModes = useMemo(() =>
    enhancedModes.filter((mode) => {
      const matchesTrack = activeTrack === 'all' || mode.track === activeTrack;
      const matchesSearch = !searchQuery || mode.title.toLowerCase().includes(searchQuery.toLowerCase()) || mode.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTrack && matchesSearch;
    }), [enhancedModes, activeTrack, searchQuery]);

  const completedCount = enhancedModes.filter((mode) => mode.isCompleted).length;

  const handleStartMode = (mode, action = 'start') => {
    if (action === 'review') { setReviewingAttempt(true); return; }
    if (mode.isAiDriven) { setPendingAiMode(mode); return; }
    onNavigate(mode.id);
  };

  const handleGenerateAiTest = () => {
    if (!pendingAiMode) return;
    const nextView = pendingAiMode.id;
    setPendingAiMode(null);
    onNavigate(nextView);
  };

  const handleCertificateGenerated = (attempt, certificate) => {
    addCertificate(certificate);
    updateAttemptCertificate(attempt.id, certificate);

    if (!Array.isArray(profileData.certifications) || !profileData.certifications.some((item) => item.certificateId === certificate.id)) {
      updateProfileField('certifications', [
        {
          id: certificate.id,
          certificateId: certificate.id,
          name: `${certificate.testTitle} Certificate`,
          issuer: 'Talent Sense',
          date: formatCertificateDate(certificate.issuedAt),
          score: `${certificate.score}%`,
        },
        ...(profileData.certifications || []),
      ]);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      <div className="max-w-[1400px] mx-auto px-6 py-10 md:px-12">

        {/* Main Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Practice Hub</h1>
            <p className="text-[15px] text-slate-500 mt-1">Operational insights across your skills, proficiency, and readiness.</p>
          </div>
          <button
            onClick={() => setReviewingAttempt(true)}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
          >
            <Download size={16} /> Reports
          </button>
        </header>

        {/* Top 4 Metrics Strip (Restored) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <MetricCard
            title="VERIFIED SKILLS"
            value={completedCount}
            icon={CheckCircle2}
            iconBg="bg-green-50"
            iconColor="text-green-600"
            trendIcon={<TrendingUp size={12} className="text-emerald-500" />}
            trendText="Active benchmarks"
          />
          <MetricCard
            title="HIGHEST SCORE"
            value={`${bestScore}%`}
            icon={Target}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
            trendIcon={<TrendingUp size={12} className="text-slate-400" />}
            trendText="Top performance"
          />
          <MetricCard
            title="AVAILABLE TESTS"
            value={enhancedModes.length}
            icon={Database}
            iconBg="bg-indigo-50"
            iconColor="text-indigo-600"
            trendIcon={<TrendingUp size={12} className="text-slate-400" />}
            trendText="In library"
          />
          <MetricCard
            title="AI INTELLIGENCE"
            value={usage?.candidate?.toLocaleString() || "0"}
            icon={Sparkles}
            iconBg="bg-orange-50"
            iconColor="text-orange-500"
            trendIcon={<CheckCircle2 size={12} className="text-slate-400" />}
            trendText="Tokens consumed"
          />
        </div>

        {/* Secondary Header & Search - LinkedIn Learning style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-4">
          <div>
            <h2 className="text-[22px] font-bold text-slate-900 tracking-tight mb-2">Search any tests from Excel to AI</h2>
            <p className="text-[15px] text-slate-600">From critical skills to technical topics, validate your professional development.</p>
          </div>
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search tests by name or topic..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-8 border-b border-slate-200 mb-8 overflow-x-auto hide-scrollbar">
          {trackMeta.map((track) => (
            <button
              key={track.id}
              onClick={() => setActiveTrack(track.id)}
              className={cn(
                "pb-3 text-[15px] whitespace-nowrap transition-colors",
                activeTrack === track.id
                  ? "border-b-2 border-slate-900 font-bold text-slate-900"
                  : "text-slate-600 font-semibold hover:text-slate-900"
              )}
            >
              {track.label}
            </button>
          ))}
        </div>

        {/* Large Detailed Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredModes.map((mode) => (
            <div
              key={mode.id}
              className="group flex flex-col border border-slate-200 rounded-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 h-full"
            >
              {/* Card Image Area */}
              <div className="relative w-full aspect-[16/9] border-b border-slate-200 overflow-hidden bg-slate-50 shrink-0">
                <img
                  src={getTestCoverSrc(mode.id)}
                  alt={mode.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';
                  }}
                />

                {/* AI Badge Overlay */}
                {mode.isAiDriven && (
                  <div className="absolute top-3 left-3 bg-violet-700 text-white text-[11px] font-bold px-2 py-1 rounded-sm flex items-center gap-1 shadow-sm">
                    <Zap size={12} fill="currentColor" /> AI GENERATED
                  </div>
                )}

                {/* Completed Badge Overlay */}
                {mode.isCompleted && (
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-2 py-1 rounded-sm shadow-sm">
                    COMPLETED
                  </div>
                )}
              </div>

              {/* Card Body Container */}
              <div className="p-5 flex flex-col flex-1">

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-[18px] leading-snug mb-3">
                  {mode.title}
                </h3>

                {/* Detailed Description */}
                <p className="text-[14px] text-slate-600 line-clamp-3 mb-5 flex-1">
                  {mode.description}
                </p>

                {/* Footer Action Area */}
                <div className="flex flex-col mt-auto pt-4 border-t border-slate-100 gap-3">

                  {/* Meta / Score Row */}
                  <div className="flex items-center justify-between">
                    {mode.isCompleted ? (
                      <span className="text-[13px] font-semibold text-emerald-700">Last Score: {mode.lastScore}%</span>
                    ) : (
                      <span className="text-[13px] text-slate-500">{mode.difficulty} • {mode.duration}</span>
                    )}
                  </div>

                  {/* Action Links Row */}
                  <div className="flex items-center gap-4">
                    {mode.isCompleted ? (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleStartMode(mode, 'review'); }}
                          className="text-[14px] font-bold text-blue-700 hover:text-blue-800 transition-colors"
                        >
                          Review Report
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleStartMode(mode, 'start'); }}
                          className="text-[14px] font-bold text-slate-900 hover:text-blue-700 transition-colors"
                        >
                          Retake Test
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={(e) => { e.stopPropagation(); handleStartMode(mode, 'start'); }}
                        className="text-[14px] font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1"
                      >
                        Start test <ChevronRight size={16} />
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredModes.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500 font-medium">No tests found in this category.</p>
          </div>
        )}

      </div>

      {/* Modals */}
      {pendingAiMode && <AiConfirmModal mode={pendingAiMode} onCancel={() => setPendingAiMode(null)} onConfirm={handleGenerateAiTest} />}
      {reviewingAttempt && (
        <ReviewPanel
          attempts={attempts}
          candidateName={getCandidateName(profileData)}
          onCertificateGenerated={handleCertificateGenerated}
          onClose={() => setReviewingAttempt(false)}
        />
      )}
    </div>
  );
};

// Reusable Sub-components
const MetricCard = ({ title, value, icon: Icon, iconBg, iconColor, trendIcon, trendText }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between min-h-[120px]">
    <div className="flex justify-between items-start">
      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{title}</span>
      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", iconBg, iconColor)}>
        <Icon size={16} />
      </div>
    </div>
    <div className="mt-2">
      <h3 className="text-[28px] font-bold text-slate-900 leading-none">{value}</h3>
      <div className="flex items-center gap-1.5 mt-3">
        {trendIcon}
        <span className="text-[11px] font-semibold text-slate-500">{trendText}</span>
      </div>
    </div>
  </div>
);

const AiConfirmModal = ({ mode, onCancel, onConfirm }) => (
  <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4" onClick={onCancel}>
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-100" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 bg-violet-50 text-violet-600 rounded-lg flex items-center justify-center"><Zap size={20} /></div>
        <h3 className="text-[18px] font-bold text-slate-900">Generate {mode.title}?</h3>
      </div>
      <p className="text-[14px] text-slate-500 leading-relaxed mb-6">This AI assessment uses 1 Token. It creates a unique challenge set that cannot be repeated for 30 days.</p>

      <div className="flex gap-3 mt-6">
        <button onClick={onCancel} className="flex-1 py-2.5 text-[14px] font-bold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition">Cancel</button>
        <button onClick={onConfirm} className="flex-1 py-2.5 text-[14px] font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition">Confirm Generation</button>
      </div>
    </div>
  </div>
);

const ReviewPanel = ({ attempts, candidateName, onCertificateGenerated, onClose }) => (
  <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4" onClick={onClose}>
    <div className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col border border-slate-100 shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><Award size={18} /></div>
          <div><h3 className="font-bold text-[15px] text-slate-900">Performance Reports</h3></div>
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-md text-slate-400"><X size={20} /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
        <AssessmentReportsPanel
          candidate={{ name: candidateName || 'Candidate', practiceAssessments: attempts, interviewAssessments: [] }}
          allowCertificateGeneration
          onCertificateGenerated={onCertificateGenerated}
        />
      </div>
    </div>
  </div>
);

export default PracticeCenter;
