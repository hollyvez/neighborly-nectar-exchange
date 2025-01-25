import { JoinForm } from "@/components/JoinForm";
import { Footer } from "@/components/Footer";
import { RecentTradesBanner } from "@/components/RecentTradesBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ExchangeExamplesSection } from "@/components/sections/ExchangeExamplesSection";
import { KPISection } from "@/components/sections/KPISection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Login button removed until app is ready for release */}
      
      {/* Recent Trades Banner */}
      <RecentTradesBanner />

      {/* Main Sections */}
      <HeroSection />
      <ValuesSection />
      <HowItWorksSection />
      <ExchangeExamplesSection />

      {/* Join Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <JoinForm />
        </div>
      </section>

      <KPISection />
      <Footer />
    </div>
  );
};

export default Index;