import React from "react";
import { useJoinForm } from "@/hooks/useJoinForm";
import { AddressFields } from "@/components/form/AddressFields";
import { Input } from "@/components/ui/input";

export const JoinForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const { formData, isSubmitting, handleSubmit, handleFieldChange } = useJoinForm(onSuccess);

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      data-netlify="true"
      name="join-request"
      method="POST"
    >
      <input type="hidden" name="form-name" value="join-request" />
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            className="mt-1"
          />
        </div>

        <AddressFields formData={formData} onFieldChange={handleFieldChange} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Join Your Neighborhood"}
      </button>
    </form>
  );
};