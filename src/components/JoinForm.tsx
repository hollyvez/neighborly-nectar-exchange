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
import { AddressFields } from "./form/AddressFields";
import { useJoinForm } from "@/hooks/useJoinForm";

export const JoinForm = () => {
  const [open, setOpen] = useState(false);
  const { formData, isSubmitting, handleSubmit, handleFieldChange } = useJoinForm(() => setOpen(false));

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
              onChange={(e) => handleFieldChange("name", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
              required
            />
          </div>
          <AddressFields
            streetAddress={formData.streetAddress}
            city={formData.city}
            state={formData.state}
            zipCode={formData.zipCode}
            onChange={handleFieldChange}
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-accent-green via-emerald-500 to-teal-500 text-white hover:from-accent-green/90 hover:via-emerald-500/90 hover:to-teal-500/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};