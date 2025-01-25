import { Input } from "@/components/ui/input";

interface AddressFieldsProps {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  onChange: (field: string, value: string) => void;
}

export const AddressFields = ({
  streetAddress,
  city,
  state,
  zipCode,
  onChange,
}: AddressFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Input
          placeholder="Street Address"
          value={streetAddress}
          onChange={(e) => onChange("streetAddress", e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input
          placeholder="City"
          value={city}
          onChange={(e) => onChange("city", e.target.value)}
          required
        />
        <Input
          placeholder="State"
          value={state}
          onChange={(e) => onChange("state", e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          placeholder="ZIP Code"
          value={zipCode}
          onChange={(e) => onChange("zipCode", e.target.value)}
          required
          pattern="[0-9]{5}"
          title="Please enter a valid 5-digit ZIP code"
        />
      </div>
    </>
  );
};