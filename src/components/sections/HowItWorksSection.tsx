import { Search, Package, Coins, Clock } from "lucide-react";

const StepCard = ({ icon: Icon, title, description, details }: { icon: any; title: string; description: string; details: string[] }) => (
  <div className="flex flex-col p-6 bg-card rounded-xl shadow-elegant hover-glow transition-smooth">
    <div className="rounded-full bg-primary/10 p-4 mb-4 self-center">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-card-foreground text-center">{title}</h3>
    <p className="text-center text-muted-foreground mb-4">{description}</p>
    <ul className="space-y-2 text-sm text-muted-foreground">
      {details.map((detail, index) => (
        <li key={index} className="flex items-start">
          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard
            icon={Search}
            title="Search & Discover"
            description="Find what you need in your neighborhood"
            details={[
              "Browse items and services nearby",
              "Filter by category and distance",
              "See what neighbors are offering",
              "Connect directly with owners"
            ]}
          />
          <StepCard
            icon={Package}
            title="List Your Items"
            description="Share what you have to offer"
            details={[
              "Post items you want to trade",
              "Offer services and skills",
              "Set your preferred exchanges",
              "Manage your active listings"
            ]}
          />
          <StepCard
            icon={Coins}
            title="Use Community Tokens"
            description="Fair exchange without perfect matches"
            details={[
              "Earn tokens when you give",
              "Spend tokens when you receive",
              "No need for direct item swaps",
              "Track your community contribution"
            ]}
          />
          <StepCard
            icon={Clock}
            title="Timebound Alerts"
            description="Get help when you need it most"
            details={[
              "Set urgent 'butter alerts' for baking emergencies",
              "Get notified of time-sensitive offers",
              "Help neighbors with immediate needs",
              "Build stronger community bonds"
            ]}
          />
        </div>
      </div>
    </section>
  );
};