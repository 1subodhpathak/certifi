// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // <--- Import Hook
// import { 
//   Brain, Mail, Lock, ArrowRight, 
//   Github, Chrome, Eye, EyeOff, CheckCircle2 
// } from 'lucide-react';

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth(); // <--- Get login function

//   // Form State
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate Network Request
//     setTimeout(() => {
//       // Call the Context Login
//       login(email, fullName); 
      
//       setIsLoading(false);
//       navigate('/dashboard'); // Redirect to Dashboard
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-white flex font-sans">
      
//       {/* LEFT SIDE: Visuals */}
//       <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12 text-white">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
//         <div className="relative z-10 flex items-center gap-3">
//           <div className="bg-teal-600 p-2 rounded-lg"><Brain className="w-6 h-6 text-white" /></div>
//           <span className="text-xl font-bold tracking-tight">CareerSense</span>
//         </div>

//         <div className="relative z-10 max-w-lg">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-6">
//              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span></span>
//              Trusted by 500+ Companies
//           </div>
//           <h1 className="text-5xl font-bold leading-tight mb-6">Validate your coding skills with AI precision.</h1>
//         </div>

//         <div className="relative z-10 text-sm text-slate-500">© 2026 CareerSense. All rights reserved.</div>
//       </div>

//       {/* RIGHT SIDE: Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50">
//         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
          
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-bold text-slate-900 mb-2">{isLogin ? 'Welcome back' : 'Create an account'}</h2>
//             <p className="text-slate-500 text-sm">{isLogin ? 'Enter your details to access your account' : 'Start your certification journey today'}</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {!isLogin && (
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold text-slate-700 uppercase">Full Name</label>
//                 <input 
//                   type="text" 
//                   required
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   placeholder="John Doe"
//                   className="w-full pl-4 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-sm"
//                 />
//               </div>
//             )}

//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-slate-700 uppercase">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <input 
//                   type="email" 
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="name@company.com"
//                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-sm"
//                 />
//               </div>
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-bold text-slate-700 uppercase">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <input 
//                   type={showPassword ? "text" : "password"} 
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="w-full pl-10 pr-10 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-sm"
//                 />
//                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
//                   {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                 </button>
//               </div>
//             </div>

//             <button type="submit" disabled={isLoading} className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
//               {isLoading ? 'Signing in...' : (isLogin ? 'Sign In' : 'Create Account')} <ArrowRight className="w-4 h-4" />
//             </button>
//           </form>

//           <div className="mt-8 text-center text-sm text-slate-600">
//             {isLogin ? "Don't have an account?" : "Already have an account?"}
//             <button onClick={() => setIsLogin(!isLogin)} className="ml-2 font-bold text-teal-600 hover:underline">{isLogin ? 'Sign up' : 'Log in'}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Brain, ArrowRight, User, Mail, Lock, Loader2 } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // --- FORM STATE ---
  const [name, setName] = useState(''); // <--- New State for Name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic Validation
    if (!name.trim()) {
      alert("Please enter your full name so it appears on your certificate.");
      setLoading(false);
      return;
    }

    // Simulate API delay
    setTimeout(() => {
      // Pass 'name' to the login function
      login(email, password, name); 
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Form Section */}
        <div className="w-full p-8 md:p-12">
          
          <div className="flex items-center gap-2 mb-8 justify-center">
            <div className="bg-teal-600 p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">CareerSense</span>
          </div>

          <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">
            Get Started
          </h2>
          <p className="text-center text-slate-500 mb-8 text-sm">
            Enter your details to access the assessment platform.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* --- NEW FULL NAME INPUT --- */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Smith"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 outline-none font-medium text-slate-800 transition-all placeholder:font-normal"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 outline-none font-medium text-slate-800 transition-all placeholder:font-normal"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 outline-none font-medium text-slate-800 transition-all placeholder:font-normal"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all transform active:scale-95 shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 mt-4"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>Enter Platform <ArrowRight className="w-4 h-4" /></>
              )}
            </button>

          </form>

          <p className="text-center text-xs text-slate-400 mt-8">
            By continuing, you agree to our Terms of Service.
          </p>

        </div>
      </div>
    </div>
  );
}