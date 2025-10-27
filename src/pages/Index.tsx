import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorks } from "@/components/HowItWorks";
import { FranchiseSection } from "@/components/FranchiseSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <HowItWorks />
      <FranchiseSection />
      <Footer />
    </div>
  );
};

export default Index;
