import { useState } from 'react';
import { 
  LayoutDashboard, Code2, Database, Cloud, Brain, ArrowRight,
  Clock, BarChart, Lock, BarChart3, Server, LineChart
} from 'lucide-react';

// --- CATEGORIES ---
const CATEGORIES = [
  { id: 'data-analytics', label: 'Data Analytics', icon: BarChart3 },
  { id: 'data-engineering', label: 'Data Engineering', icon: Server },
  { id: 'data-science', label: 'Data Science', icon: LineChart },
  { id: 'frontend', label: 'Frontend Development', icon: LayoutDashboard },
  { id: 'backend', label: 'Backend Engineering', icon: Database },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
  { id: 'ai', label: 'AI & Machine Learning', icon: Brain },
];

// --- FULL DATASET (5 Skills per Category) ---
const AVAILABLE_TESTS = [
  // --- DATA ANALYTICS ---
  {
    id: 'da-sql',
    title: 'SQL for Data Analysis',
    category: 'data-analytics',
    difficulty: 'Intermediate',
    time: '40 mins',
    tags: ['Joins', 'Aggregations', 'Window Functions'],
    color: 'bg-teal-600',
    icon: <Database className="w-6 h-6 text-white" />
  },
  {
    id: 'da-excel',
    title: 'Advanced Excel & Spreadsheets',
    category: 'data-analytics',
    difficulty: 'Intermediate',
    time: '30 mins',
    tags: ['Pivot Tables', 'VLOOKUP', 'Macros'],
    color: 'bg-green-700',
    icon: <BarChart3 className="w-6 h-6 text-white" />
  },
  {
    id: 'da-viz',
    title: 'Data Visualization (Tableau/PowerBI)',
    category: 'data-analytics',
    difficulty: 'Beginner',
    time: '45 mins',
    tags: ['Dashboards', 'Storytelling', 'Charts'],
    color: 'bg-yellow-600',
    icon: <LineChart className="w-6 h-6 text-white" />
  },
  {
    id: 'da-python',
    title: 'Python for Analytics (Pandas)',
    category: 'data-analytics',
    difficulty: 'Intermediate',
    time: '50 mins',
    tags: ['DataFrames', 'Cleaning', 'Matplotlib'],
    color: 'bg-blue-500',
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    id: 'da-stats',
    title: 'Statistical Analysis Basics',
    category: 'data-analytics',
    difficulty: 'Beginner',
    time: '35 mins',
    tags: ['Probability', 'Hypothesis Testing', 'Mean/Median'],
    color: 'bg-purple-500',
    icon: <Brain className="w-6 h-6 text-white" />
  },

  // --- DATA ENGINEERING ---
  {
    id: 'de-pipeline',
    title: 'ETL Pipeline Design',
    category: 'data-engineering',
    difficulty: 'Advanced',
    time: '60 mins',
    tags: ['Airflow', 'Orchestration', 'Batch vs Stream'],
    color: 'bg-slate-700',
    icon: <Server className="w-6 h-6 text-white" />
  },
  {
    id: 'de-spark',
    title: 'Apache Spark & Big Data',
    category: 'data-engineering',
    difficulty: 'Advanced',
    time: '55 mins',
    tags: ['PySpark', 'RDDs', 'Optimization'],
    color: 'bg-orange-600',
    icon: <Database className="w-6 h-6 text-white" />
  },
  {
    id: 'de-warehouse',
    title: 'Data Warehousing (Snowflake)',
    category: 'data-engineering',
    difficulty: 'Intermediate',
    time: '45 mins',
    tags: ['Schemas', 'Normalization', 'Star Schema'],
    color: 'bg-sky-600',
    icon: <Cloud className="w-6 h-6 text-white" />
  },
  {
    id: 'de-nosql',
    title: 'NoSQL Database Design',
    category: 'data-engineering',
    difficulty: 'Intermediate',
    time: '40 mins',
    tags: ['MongoDB', 'Cassandra', 'Sharding'],
    color: 'bg-emerald-600',
    icon: <Database className="w-6 h-6 text-white" />
  },
  {
    id: 'de-kafka',
    title: 'Streaming Architecture (Kafka)',
    category: 'data-engineering',
    difficulty: 'Advanced',
    time: '50 mins',
    tags: ['Pub/Sub', 'Topics', 'Partitions'],
    color: 'bg-neutral-800',
    icon: <Server className="w-6 h-6 text-white" />
  },

  // --- DATA SCIENCE ---
  {
    id: 'ds-ml',
    title: 'Applied Machine Learning',
    category: 'data-science',
    difficulty: 'Advanced',
    time: '60 mins',
    tags: ['Scikit-Learn', 'Regression', 'Classification'],
    color: 'bg-indigo-600',
    icon: <Brain className="w-6 h-6 text-white" />
  },
  {
    id: 'ds-math',
    title: 'Calculus & Linear Algebra',
    category: 'data-science',
    difficulty: 'Intermediate',
    time: '45 mins',
    tags: ['Vectors', 'Matrices', 'Derivatives'],
    color: 'bg-red-600',
    icon: <LineChart className="w-6 h-6 text-white" />
  },
  {
    id: 'ds-feature',
    title: 'Feature Engineering',
    category: 'data-science',
    difficulty: 'Intermediate',
    time: '40 mins',
    tags: ['PCA', 'Encoding', 'Scaling'],
    color: 'bg-violet-600',
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    id: 'ds-nlp',
    title: 'Natural Language Processing',
    category: 'data-science',
    difficulty: 'Advanced',
    time: '55 mins',
    tags: ['Tokenization', 'NLTK', 'Transformers'],
    color: 'bg-yellow-500',
    icon: <Brain className="w-6 h-6 text-white" />
  },
  {
    id: 'ds-ab',
    title: 'A/B Testing & Experimentation',
    category: 'data-science',
    difficulty: 'Intermediate',
    time: '35 mins',
    tags: ['Significance', 'Sample Size', 'Metrics'],
    color: 'bg-pink-600',
    icon: <BarChart3 className="w-6 h-6 text-white" />
  },

  // --- FRONTEND ---
  {
    id: 'fe-react',
    title: 'React Advanced Patterns',
    category: 'frontend',
    difficulty: 'Advanced',
    time: '45 mins',
    tags: ['Hooks', 'Context', 'Performance'],
    color: 'bg-blue-600',
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    id: 'fe-css',
    title: 'Modern CSS & Layouts',
    category: 'frontend',
    difficulty: 'Intermediate',
    time: '30 mins',
    tags: ['Grid', 'Flexbox', 'Tailwind'],
    color: 'bg-indigo-500',
    icon: <LayoutDashboard className="w-6 h-6 text-white" />
  },
  {
    id: 'fe-js',
    title: 'JavaScript Deep Dive',
    category: 'frontend',
    difficulty: 'Advanced',
    time: '50 mins',
    tags: ['Closures', 'Async/Await', 'Event Loop'],
    color: 'bg-yellow-500',
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    id: 'fe-next',
    title: 'Next.js Framework',
    category: 'frontend',
    difficulty: 'Intermediate',
    time: '40 mins',
    tags: ['SSR', 'ISR', 'App Router'],
    color: 'bg-neutral-900',
    icon: <LayoutDashboard className="w-6 h-6 text-white" />
  },
  {
    id: 'fe-a11y',
    title: 'Web Accessibility (a11y)',
    category: 'frontend',
    difficulty: 'Beginner',
    time: '25 mins',
    tags: ['ARIA', 'Semantics', 'WCAG'],
    color: 'bg-teal-500',
    icon: <LayoutDashboard className="w-6 h-6 text-white" />
  },

  // --- BACKEND ---
  {
    id: 'be-node',
    title: 'Node.js Microservices',
    category: 'backend',
    difficulty: 'Advanced',
    time: '50 mins',
    tags: ['Express', 'Event Emitter', 'Streams'],
    color: 'bg-green-600',
    icon: <Server className="w-6 h-6 text-white" />
  },
  {
    id: 'be-api',
    title: 'RESTful API Design',
    category: 'backend',
    difficulty: 'Intermediate',
    time: '35 mins',
    tags: ['Status Codes', 'Auth', 'Versioning'],
    color: 'bg-blue-700',
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    id: 'be-db',
    title: 'PostgreSQL Optimization',
    category: 'backend',
    difficulty: 'Advanced',
    time: '45 mins',
    tags: ['Indexing', 'Transactions', 'ACID'],
    color: 'bg-cyan-700',
    icon: <Database className="w-6 h-6 text-white" />
  },
  {
    id: 'be-sys',
    title: 'System Design Basics',
    category: 'backend',
    difficulty: 'Advanced',
    time: '60 mins',
    tags: ['Scalability', 'Caching', 'Load Balancing'],
    color: 'bg-gray-700',
    icon: <Server className="w-6 h-6 text-white" />
  },
  {
    id: 'be-graph',
    title: 'GraphQL API Development',
    category: 'backend',
    difficulty: 'Intermediate',
    time: '40 mins',
    tags: ['Resolvers', 'Schema', 'Apollo'],
    color: 'bg-pink-700',
    icon: <Database className="w-6 h-6 text-white" />
  },

  // --- CLOUD ---
  {
    id: 'cl-aws',
    title: 'AWS Solutions Architect',
    category: 'cloud',
    difficulty: 'Advanced',
    time: '90 mins',
    tags: ['VPC', 'EC2', 'IAM'],
    color: 'bg-orange-500',
    icon: <Cloud className="w-6 h-6 text-white" />
  },
  {
    id: 'cl-docker',
    title: 'Docker & Containerization',
    category: 'cloud',
    difficulty: 'Intermediate',
    time: '40 mins',
    tags: ['Dockerfile', 'Compose', 'Volumes'],
    color: 'bg-blue-600',
    icon: <Server className="w-6 h-6 text-white" />
  },
  {
    id: 'cl-k8s',
    title: 'Kubernetes Orchestration',
    category: 'cloud',
    difficulty: 'Advanced',
    time: '60 mins',
    tags: ['Pods', 'Services', 'Helm'],
    color: 'bg-blue-800',
    icon: <Cloud className="w-6 h-6 text-white" />
  },
  {
    id: 'cl-terraform',
    title: 'Terraform (IaC)',
    category: 'cloud',
    difficulty: 'Intermediate',
    time: '45 mins',
    tags: ['Modules', 'State', 'Providers'],
    color: 'bg-purple-700',
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    id: 'cl-ci',
    title: 'CI/CD Pipelines (GitHub Actions)',
    category: 'cloud',
    difficulty: 'Beginner',
    time: '30 mins',
    tags: ['Workflows', 'Runners', 'Deployment'],
    color: 'bg-gray-800',
    icon: <Server className="w-6 h-6 text-white" />
  },

  // --- AI & ML ---
  {
    id: 'ai-gen',
    title: 'Generative AI & LLMs',
    category: 'ai',
    difficulty: 'Advanced',
    time: '50 mins',
    tags: ['Prompt Eng', 'RAG', 'Fine-tuning'],
    color: 'bg-emerald-500',
    icon: <Brain className="w-6 h-6 text-white" />
  },
  {
    id: 'ai-vision',
    title: 'Computer Vision',
    category: 'ai',
    difficulty: 'Intermediate',
    time: '45 mins',
    tags: ['OpenCV', 'CNNs', 'Image Processing'],
    color: 'bg-blue-500',
    icon: <Brain className="w-6 h-6 text-white" />
  },
  {
    id: 'ai-pytorch',
    title: 'Deep Learning with PyTorch',
    category: 'ai',
    difficulty: 'Advanced',
    time: '60 mins',
    tags: ['Tensors', 'Autograd', 'Models'],
    color: 'bg-red-500',
    icon: <Code2 className="w-6 h-6 text-white" />
  },
  {
    id: 'ai-ethics',
    title: 'AI Ethics & Bias',
    category: 'ai',
    difficulty: 'Beginner',
    time: '30 mins',
    tags: ['Fairness', 'Transparency', 'Safety'],
    color: 'bg-slate-500',
    icon: <Brain className="w-6 h-6 text-white" />
  },
  {
    id: 'ai-deploy',
    title: 'MLOps & Model Deployment',
    category: 'ai',
    difficulty: 'Intermediate',
    time: '45 mins',
    tags: ['FastAPI', 'Model Registry', 'Monitoring'],
    color: 'bg-indigo-700',
    icon: <Server className="w-6 h-6 text-white" />
  },
];

export default function CuratedLibrary({ onCardClick, isGenerating, searchTerm = '' }) {
  const [activeTab, setActiveTab] = useState('data-analytics'); // Default to first tab
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      

      {/* Filter Tabs */}
      <div className="mb-8 overflow-x-auto hide-scrollbar">
        <div className="inline-flex min-w-full items-center gap-8 border-b border-slate-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 pb-3 text-[15px] whitespace-nowrap transition-colors
              ${activeTab === cat.id 
                ? 'border-b-2 border-slate-900 font-bold text-slate-900' 
                : 'font-semibold text-slate-600 hover:text-slate-900'
              }`}
          >
            <cat.icon className="w-4 h-4" />{cat.label}
          </button>
        ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AVAILABLE_TESTS
          .filter((test) => test.category === activeTab)
          .filter((test) => {
            if (!normalizedSearch) return true;
            return [test.title, test.difficulty, ...(test.tags || [])]
              .filter(Boolean)
              .some((value) => value.toLowerCase().includes(normalizedSearch));
          })
          .map((test) => (
          <div 
            key={test.id} 
            onClick={() => onCardClick(test)} 
            className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded-md border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-lg
              ${isGenerating ? 'pointer-events-none opacity-50' : ''}`}
          >
            <div className="flex items-start justify-between p-5">
              <div className={`rounded-lg p-3 ${test.color}`}>
                {test.icon}
              </div>
              {test.difficulty === 'Advanced' && (
                <span className="rounded-sm bg-purple-100 px-2 py-1 text-[11px] font-bold text-purple-700">Hard</span>
              )}
            </div>
            
            <div className="flex flex-1 flex-col px-5 pb-5">
              <h3 className="mb-3 text-[18px] font-bold leading-snug text-slate-900">
                {test.title}
              </h3>
              
              <div className="mb-4 flex items-center gap-4 text-[13px] text-slate-500">
                <div className="flex items-center gap-1.5"><BarChart className="w-4 h-4" /><span>{test.difficulty}</span></div>
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /><span>{test.time}</span></div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {test.tags.map(tag => (
                  <span key={tag} className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-100 pt-4">
                <button className="inline-flex items-center gap-1 text-[14px] font-bold text-slate-900 transition-colors hover:text-blue-700">
                  Start test <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Locked Placeholder Card */}
        <div className="flex min-h-[240px] flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mb-4 text-slate-400">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-600">Locked Assessments</h3>
          <p className="mt-2 max-w-[200px] text-xs text-slate-400">Complete the foundational certifications to unlock expert-level tests.</p>
        </div>
      </div>
    </div>
  );
}
