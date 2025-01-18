import { Search, Heart, Star } from "lucide-react";

const StepCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="rounded-full bg-accent-blue/10 p-4 mb-4">
      <Icon className="w-8 h-8 text-accent-blue" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How it Works</h2>
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