import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";
import { PrivacyIntroduction } from "./privacy/PrivacyIntroduction";
import { PrivacyInformationCollection } from "./privacy/PrivacyInformationCollection";
import { PrivacyDataUsage } from "./privacy/PrivacyDataUsage";
import { PrivacyRightsAndControls } from "./privacy/PrivacyRightsAndControls";
import { PrivacyContact } from "./privacy/PrivacyContact";

export const PrivacyModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline">Privacy Policy</button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Shield className="h-6 w-6" />
            Privacy Policy
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Last Updated: January 5, 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <PrivacyIntroduction />
            <PrivacyInformationCollection />
            <PrivacyDataUsage />
            <PrivacyRightsAndControls />
            <PrivacyContact />
          </div>
        </ScrollArea>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" className="w-full">
              Understood
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};