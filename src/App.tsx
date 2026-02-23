import { Header } from "./components/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ForWhoSection } from "./components/sections/ForWhoSection";
import { WhyItWorksSection } from "./components/sections/WhyItWorksSection";
import { WhatYouGetSection } from "./components/sections/WhatYouGetSection";
import { SupportSection } from "./components/sections/SupportSection";
import { BioSection } from "./components/sections/BioSection";
import { PricingSection } from "./components/sections/PricingSection";
import { FAQSection } from "./components/sections/FAQSection";
import { FinalCTASection } from "./components/sections/FinalCTASection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <AboutSection />
        <ForWhoSection />
        <WhyItWorksSection />
        <WhatYouGetSection />
        <SupportSection />
        <BioSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

