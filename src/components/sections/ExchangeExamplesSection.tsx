import { Handshake } from "lucide-react";

const ExchangeExample = ({ item1, item2 }: { item1: string; item2: string }) => (
  <div className="flex items-center justify-center space-x-4 animate-fade-in p-4 bg-card rounded-xl hover-glow transition-smooth">
    <span className="text-lg text-card-foreground">{item1}</span>
    <Handshake className="text-primary animate-pulse" />
    <span className="text-lg text-card-foreground">{item2}</span>
  </div>
);

export const ExchangeExamplesSection = () => {
  return (
    <section className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What Can You Exchange?</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          <ExchangeExample item1="Kids Soccer Cleats" item2="Bike Helmet" />
          <ExchangeExample item1="Bookcase" item2="Paint my Wall" />
          <ExchangeExample item1="Fresh Basil" item2="Garden Plums" />
        </div>
      </div>
    </section>
  );
};