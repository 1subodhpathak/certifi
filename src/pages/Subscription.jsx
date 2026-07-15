import { useState } from 'react';
import { 
  Check, X, Shield, HelpCircle 
} from 'lucide-react';
import HomeNavbar from '../components/Landing/HomeNavbar';

export default function Subscription() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      <HomeNavbar />

      <div className="px-6 pb-16 pt-40 sm:pt-44">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-black text-slate-900 mb-4">
              Unlock your full potential with <span className="text-teal-600">Pro</span>
            </h1>
            <p className="text-xl text-slate-500 mb-8">
              Get unlimited access to premium assessments, detailed AI feedback, and verified certificates.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Yearly <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded uppercase">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">Basic</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Free</h2>
              <p className="text-slate-500 mb-6">Perfect for getting started.</p>
              <div className="text-4xl font-black text-slate-900 mb-8">$0<span className="text-lg font-medium text-slate-400">/mo</span></div>
              
              <div className="space-y-4 mb-8 flex-1">
                <FeatureItem text="3 Practice Assessments / Month" />
                <FeatureItem text="Basic Score Breakdown" />
                <FeatureItem text="Certificate Verification Access" />
                <FeatureItem text="Public Profile Preview" />
                <FeatureItem text="Custom AI Assessment Creation" active={false} />
                <FeatureItem text="Verified Certificates & Score Reports" active={false} />
              </div>

              <button className="w-full py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                Current Plan
              </button>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-2xl shadow-teal-900/20 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-white/10 text-teal-400 rounded-full text-xs font-bold uppercase tracking-wider">Pro</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Professional</h2>
              <p className="text-slate-400 mb-6">For serious developers.</p>
              <div className="text-4xl font-black text-white mb-8">
                ${billingCycle === 'monthly' ? '29' : '24'}
                <span className="text-lg font-medium text-slate-500">/mo</span>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                <FeatureItem text="Unlimited Practice Assessments" dark />
                <FeatureItem text="Detailed AI Feedback & Skill Report Cards" dark />
                <FeatureItem text="Verified Certificates + Downloadable Score Reports" dark />
                <FeatureItem text="Public Credential Profile & LinkedIn Sharing" dark />
                <FeatureItem text="Retake Tracking + Improvement History" dark />
                <FeatureItem text="Access to Learning Paths" dark />
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all">
                Upgrade to Pro
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">7-day money-back guarantee</p>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-bold uppercase tracking-wider">Teams</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Enterprise</h2>
              <p className="text-slate-500 mb-6">For hiring managers.</p>
              <div className="text-4xl font-black text-slate-900 mb-8">$99<span className="text-lg font-medium text-slate-400">/mo</span></div>
              
              <div className="space-y-4 mb-8 flex-1">
                <FeatureItem text="Everything in Pro" />
                <FeatureItem text="Team Workspace & Admin Dashboard" />
                <FeatureItem text="Invite Candidates & Manage Attempts" />
                <FeatureItem text="Custom AI Assessment Builder" />
                <FeatureItem text="Cheat Detection & Proctoring Trust Signals" />
                <FeatureItem text="Verification URLs, QR/Barcode Validation & Credential Logs" />
                <FeatureItem text="Usage Billing Visibility" />
              </div>

              <button className="w-full py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                Contact Sales
              </button>
            </div>

          </div>

          {/* Trust/FAQ Section */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto border-t border-slate-200 pt-12">
             <div>
               <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <Shield className="w-5 h-5 text-teal-600" /> Secure Payment
               </h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                 All payments are processed securely via Stripe. We never store your credit card information. 
                 You can cancel your subscription at any time with one click from your settings dashboard.
               </p>
             </div>
             <div>
               <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <HelpCircle className="w-5 h-5 text-teal-600" /> Need Help?
               </h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                 Have questions about which plan is right for you? Our support team is available 24/7 to assist.
                 Email us at <a href="#" className="text-teal-600 font-medium underline">support@careersenseai.com</a>.
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function FeatureItem({ text, active = true, dark = false }) {
  return (
    <div className={`flex items-center gap-3 ${!active ? 'opacity-50' : ''}`}>
      <div className={`p-0.5 rounded-full ${active ? (dark ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-700') : 'bg-slate-100 text-slate-400'}`}>
        {active ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
      </div>
      <span className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</span>
    </div>
  );
}
