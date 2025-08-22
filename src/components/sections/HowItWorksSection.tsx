import { Search, Heart, Star } from "lucide-react";

const StepCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-elegant hover-glow transition-smooth">
    <div className="rounded-full bg-primary/10 p-4 mb-4">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-card-foreground">{title}</h3>
    <p className="text-center text-muted-foreground">{description}</p>
  </div>
);

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            icon={Search}
            title="Browse & Connect"
            description="Find items or skills you need, or share what you have to offer"
          />
          <StepCard
            icon={Heart}
            title="Meet & Exchange"
            description="Connect with neighbors and make fair trades in a safe environment"
          />
          <StepCard
            icon={Star}
            title="Build Trust"
            description="Rate your experience and help build a trusted community"
          />
        </div>
      </div>
    </section>
  );
};