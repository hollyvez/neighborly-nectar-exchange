import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  AboutCommunity,
  TradingAndTokens,
  ProblemSolving,
  AccountManagement,
  GettingStarted,
  EnvironmentalImpact
} from "@/components/faq";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
            
            <div className="space-y-12">
              <AboutCommunity />
              <TradingAndTokens />
              <ProblemSolving />
              <AccountManagement />
              <GettingStarted />
              <EnvironmentalImpact />
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
                <p>
                  We're here to help! Contact us at{" "}
                  <a href="mailto:support@thenext.community" className="text-blue-600 hover:underline">
                    support@thenext.community
                  </a>
                  {" "}with any other questions about our platform or community.
                </p>
                <p className="mt-4 italic">
                  This FAQ is regularly updated based on community feedback and questions. Check back for new information!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;