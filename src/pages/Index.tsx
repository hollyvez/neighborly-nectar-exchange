import { Handshake, Leaf, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinForm } from "@/components/JoinForm";
import { Footer } from "@/components/Footer";
import { RecentTradesBanner } from "@/components/RecentTradesBanner";

const ExchangeExample = ({ item1, item2 }: { item1: string; item2: string }) => (
  <div className="flex items-center justify-center space-x-4 animate-fade-in">
    <span className="text-lg">{item1}</span>
    <Handshake className="text-accent-blue animate-pulse" />
    <span className="text-lg">{item2}</span>
  </div>
);

const KPICard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
    <div className="text-3xl font-bold text-accent-blue mb-2">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent-blue text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">TheNEXT</h1>
          <p className="text-2xl md:text-3xl font-cursive mb-8">neighborhood exchange trust</p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Helping neighbors be more neighborly through the power of sharing and exchange
          </p>
          <JoinForm />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:scale-105 transition-transform">
              <Handshake className="w-12 h-12 mx-auto mb-4 text-accent-blue" />
              <h3 className="text-xl font-bold mb-2">Everyone Has Value</h3>
              <p>Every neighbor has something unique to offer our community</p>
            </div>
            <div className="text-center p-6 hover:scale-105 transition-transform">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-accent-green" />
              <h3 className="text-xl font-bold mb-2">Growing Together</h3>
              <p>Building stronger communities through meaningful connections</p>
            </div>
            <div className="text-center p-6 hover:scale-105 transition-transform">
              <Handshake className="w-12 h-12 mx-auto mb-4 text-accent-purple" />
              <h3 className="text-xl font-bold mb-2">Fair Exchange</h3>
              <p>Promoting equitable and friendly neighborhood bartering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Examples Section */}
      <section className="py-20 bg-gradient-to-r from-accent-yellow/10 to-accent-orange/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Can You Exchange?</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <ExchangeExample item1="Kids Soccer Cleats" item2="Bike Helmet" />
            <ExchangeExample item1="Bookcase" item2="Paint my Wall" />
            <ExchangeExample item1="Fresh Basil" item2="Garden Plums" />
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <JoinForm />
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <KPICard value="308" label="Connections Made" />
            <KPICard value="5 miles" label="Trading Radius" />
            <KPICard value="641" label="Hours of Neighborly Service" />
            <KPICard value="972" label="Items Given a Second Life" />
            <KPICard value="114" label="Community Skills Shared" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
