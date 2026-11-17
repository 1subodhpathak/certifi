// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext'; // <--- Import Provider

// // Pages
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import AssessmentRoom from './pages/AssessmentRoom';
// import TestReport from './pages/TestReport';
// import Certificate from './pages/Certificate';
// import VerifyCertificate from './pages/VerifyCertificate';
// import LearningPaths from './pages/LearningPaths';
// import Subscription from './pages/Subscription';

// function App() {
//   return (
//     <AuthProvider> {/* <--- Wrap Everything Here */}
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/verify" element={<VerifyCertificate />} />

//           {/* User Routes (In a real app, you'd protect these with a wrapper) */}
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/learning-paths" element={<LearningPaths />} />
//           <Route path="/subscription" element={<Subscription />} />

//           {/* Assessment Flow */}
//           <Route path="/test" element={<AssessmentRoom />} />
//           <Route path="/report" element={<TestReport />} />
//           <Route path="/certificate" element={<Certificate />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import { useCertifiStore } from './store/useCertifiStore';

import Home from './pages/Home';
import VerifyCertificate from './pages/VerifyCertificate';

// Lazy load non-landing pages for code splitting (reduces initial bundle size and solves blank first-load screen)
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const CreateAssessment = lazy(() => import('./pages/CreateAssessment'));
const AssessmentRoom = lazy(() => import('./pages/AssessmentRoom'));
const TestReport = lazy(() => import('./pages/TestReport'));
const Certificate = lazy(() => import('./pages/Certificate'));
const LearningPaths = lazy(() => import('./pages/LearningPaths'));
const Subscription = lazy(() => import('./pages/Subscription'));
const MyCertificates = lazy(() => import('./pages/MyCertificates'));
const MyBadges = lazy(() => import('./pages/MyBadges'));
const MyProfile = lazy(() => import('./pages/MyProfile'));
const UsageBilling = lazy(() => import('./pages/UsageBilling'));
const PracticeHub = lazy(() => import('./pages/PracticeHub'));
const PracticeSession = lazy(() => import('./pages/PracticeSession'));
const PracticeReport = lazy(() => import('./pages/PracticeReport'));
const PublicProfile = lazy(() => import('./pages/PublicProfile'));
const WelcomeTokensModal = lazy(() => import('./components/common/WelcomeTokensModal'));

const PageLoader = () => (
  <div className="flex h-screen items-center justify-center bg-slate-50">
    <div className="h-9 w-9 animate-spin rounded-full border-[3.5px] border-slate-200 border-t-teal-600" />
  </div>
);

function AuthStoreSynchronizer() {
  const { getToken, userId, isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded) {
      window.clerkGetToken = getToken;
      window.clerkUserId = userId || null;
      if (isSignedIn) {
        useCertifiStore.getState().syncWithBackend();
      } else {
        useCertifiStore.getState().clearCache();
      }
    }
  }, [isLoaded, userId, getToken, isSignedIn]);

  return null;
}

import { SignedIn } from '@clerk/clerk-react';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthStoreSynchronizer />
        <SignedIn>
          <Suspense fallback={null}>
            <WelcomeTokensModal />
          </Suspense>
        </SignedIn>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<VerifyCertificate />} />
          <Route path="/verify-certificate" element={<VerifyCertificate />} />
          <Route path="/u/:publicId" element={<Suspense fallback={<PageLoader />}><PublicProfile /></Suspense>} />
          <Route path="/certificate/:certificateId" element={<Suspense fallback={<PageLoader />}><Certificate /></Suspense>} />

          {/* User Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><Dashboard /></Suspense></ProtectedRoute>} />
          <Route path="/create-assessment" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><CreateAssessment /></Suspense></ProtectedRoute>} />
          <Route path="/learning-paths" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><LearningPaths /></Suspense></ProtectedRoute>} />
          <Route path="/subscription" element={<ProtectedRoute><Navigate to="/usage-billing" replace /></ProtectedRoute>} />
          <Route path="/my-profile" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><MyProfile /></Suspense></ProtectedRoute>} />
          <Route path="/usage-billing" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><UsageBilling /></Suspense></ProtectedRoute>} />
          <Route path="/practice-hub" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><PracticeHub /></Suspense></ProtectedRoute>} />
          <Route path="/practice-hub/test/:assessmentId" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><PracticeSession /></Suspense></ProtectedRoute>} />
          <Route path="/practice-hub/report" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><PracticeReport /></Suspense></ProtectedRoute>} />
          
          {/* NEW: Certificate Gallery Route */}
          <Route path="/my-certificates" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><MyCertificates /></Suspense></ProtectedRoute>} />
          <Route path="/my-badges" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><MyBadges /></Suspense></ProtectedRoute>} />

          {/* Assessment Flow */}
          <Route path="/test" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><AssessmentRoom /></Suspense></ProtectedRoute>} />
          <Route path="/report" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><TestReport /></Suspense></ProtectedRoute>} />
          <Route path="/certificate" element={<ProtectedRoute><Suspense fallback={<PageLoader />}><Certificate /></Suspense></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
