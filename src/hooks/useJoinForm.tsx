import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = {
        name: formData.name,
        email: formData.email,
        address: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`
      };

      // Submit to Supabase
      const { error } = await supabase
        .from('join_requests')
        .insert([submitData]);

      if (error) throw error;

      // Submit to Netlify forms
      const netlifyFormData = new FormData(e.currentTarget);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString(),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form to Netlify');
      }

      toast.success("Thank you for your interest! We'll be in touch soon.");
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