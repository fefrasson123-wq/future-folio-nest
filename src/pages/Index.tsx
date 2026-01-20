import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AssetsSection from "@/components/landing/AssetsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CredibilitySection from "@/components/landing/CredibilitySection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferentialsSection />
      <FeaturesSection />
      <AssetsSection />
      <HowItWorksSection />
      <CredibilitySection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
