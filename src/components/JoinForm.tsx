import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export const JoinForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      <div className="space-y-2">
        <p className="font-semibold text-lg">We're so excited you're here! Your request to join your neighborhood has been sent.</p>
        <p className="text-base">
          In the meantime, be sure to check out the{" "}
          <Link to="/guidelines" className="underline font-medium text-accent-blue hover:text-accent-blue/80">Guidelines</Link> and{" "}
          <Link to="/faq" className="underline font-medium text-accent-blue hover:text-accent-blue/80">FAQs</Link>.
        </p>
        <p className="text-base">
          Are you interested in becoming a neighborhood champion?{" "}
          <a href="mailto:support@thenext.community" className="underline font-medium text-accent-blue hover:text-accent-blue/80">
            Contact support@thenext.community
          </a>
        </p>
      </div>,
      {
        duration: 15000,
        className: "bg-white border-2 border-accent-blue/20 shadow-lg",
      }
    );
    setFormData({ name: "", email: "", address: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full max-w-md mx-auto block bg-gradient-to-r from-accent-green via-emerald-500 to-teal-500 text-white hover:from-accent-green/90 hover:via-emerald-500/90 hover:to-teal-500/90">
          Join Your Neighborhood
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cursive text-center">Join Your Neighborhood</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Home Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-accent-green via-emerald-500 to-teal-500 text-white hover:from-accent-green/90 hover:via-emerald-500/90 hover:to-teal-500/90">
            Join Now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};