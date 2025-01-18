import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      {/* Login Icon */}
      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" size="icon" className="hover:bg-accent-blue/10">
          <LogIn className="h-6 w-6 text-accent-blue" />
        </Button>
      </div>

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