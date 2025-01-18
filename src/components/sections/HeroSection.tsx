import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinForm } from "@/components/JoinForm";

export const HeroSection = () => {
  return (
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
  );
};