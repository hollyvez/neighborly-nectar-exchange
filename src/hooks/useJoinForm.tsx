import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
};

export const useJoinForm = (onSuccess: () => void) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('join_requests')
        .insert([{
          name: formData.name,
          email: formData.email,
          address: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`
        }]);

      if (error) throw error;

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
      setFormData(initialFormData);
      onSuccess();
    } catch (error) {
      console.error('Error submitting join request:', error);
      toast.error("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    isSubmitting,
    handleSubmit,
    handleFieldChange
  };
};