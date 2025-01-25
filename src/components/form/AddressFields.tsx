import { Input } from "@/components/ui/input";

interface FormData {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

interface AddressFieldsProps {
  formData: FormData;
  onFieldChange: (field: keyof FormData, value: string) => void;
}

export const AddressFields = ({
  formData,
  onFieldChange,
}: AddressFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Input
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={(e) => onFieldChange("streetAddress", e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input
          placeholder="City"
          value={formData.city}
          onChange={(e) => onFieldChange("city", e.target.value)}
          required
        />
        <Input
          placeholder="State"
          value={formData.state}
          onChange={(e) => onFieldChange("state", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          placeholder="ZIP Code"
          value={formData.zipCode}
          onChange={(e) => onFieldChange("zipCode", e.target.value)}
          required
          pattern="[0-9]{5}"
          title="Please enter a valid 5-digit ZIP code"
        />
      </div>
    </>
  );
};