import { useNavigate } from 'react-router-dom';
import GuidedWorkflowSection from '../components/Landing/GuidedWorkflowSection';
import TestimonialsSection from '../components/Landing/TestimonialsSection';
import LogoShowcaseSection from '../components/Landing/LogoShowcaseSection';
import ExpertSkillsSection from '../components/Landing/ExpertSkillsSection';
import WhyUsSection from '../components/Landing/WhyUsSection';
import FooterSection from '../components/Landing/FooterSection';
import LaptopShowcase from '../components/Landing/LaptopShowcase';
import CertificateAnatomySection from '../components/Landing/CertificateAnatomySection';
import FaqSection from '../components/Landing/FaqSection';
import HomeHeroSection from '../components/Landing/HomeHeroSection';
import HomeNavbar from '../components/Landing/HomeNavbar';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">
      <HomeNavbar />

      <HomeHeroSection
        onStartAssessment={() => navigate('/dashboard')}
        onVerifyCertificate={() => navigate('/verify-certificate')}
      />

      <GuidedWorkflowSection />
      <WhyUsSection />
      <CertificateAnatomySection />
      <ExpertSkillsSection />
      <LogoShowcaseSection />
      <LaptopShowcase isDark={undefined} />
      <TestimonialsSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
