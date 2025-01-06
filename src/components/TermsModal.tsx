import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

export const TermsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline">Terms of Service</button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Terms of Service</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Last Updated: January 5, 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="prose prose-sm dark:prose-invert">
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the barter platform (the "Platform") operated by TheNext Company ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Platform.</p>

            <h2>2. Platform Description</h2>
            <p>The Platform is a peer-to-peer marketplace that facilitates barter transactions between users. We provide the technology to list and discover trade opportunities but do not participate in or guarantee any transactions between users.</p>

            <h2>3. Token System</h2>
            <h3>3.1 Monthly Allocation</h3>
            <ul>
              <li>Subscribers receive a monthly allocation of tokens to facilitate trades on the Platform</li>
              <li>Tokens have no cash value and cannot be exchanged for currency</li>
              <li>Tokens may only be transferred between users through the Platform's trading system</li>
            </ul>

            <h3>3.2 Token Expiration</h3>
            <ul>
              <li>Unused tokens roll over for one (1) month from their issue date</li>
              <li>After the rollover period, unused tokens expire automatically</li>
              <li>Expired tokens cannot be recovered or reinstated</li>
              <li>No refunds or compensation will be provided for expired tokens</li>
            </ul>

            <h3>3.3 Subscription Management</h3>
            <ul>
              <li>Users may pause their subscription for up to two (2) consecutive months</li>
              <li>Pausing a subscription does not extend token expiration dates</li>
              <li>Token allocation resumes upon subscription reactivation</li>
            </ul>

            <h2>4. Trading Rules and Guidelines</h2>
            <h3>4.1 Prohibited Items</h3>
            <p>Users may not offer or request:</p>
            <ul>
              <li>Illegal goods or services</li>
              <li>Controlled substances</li>
              <li>Weapons or ammunition</li>
              <li>Any items prohibited by applicable law</li>
            </ul>

            <h3>4.2 User Safety</h3>
            <p>We strongly recommend that users:</p>
            <ul>
              <li>Meet in public places for exchanges</li>
              <li>Bring a companion when meeting for trades</li>
              <li>Verify item condition before completing trades</li>
              <li>Do not share personal financial information</li>
              <li>Trust their instincts if a trade seems suspicious</li>
            </ul>

            <h2>5. Disclaimer of Warranties</h2>
            <p>THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE." THENEXT COMPANY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE PLATFORM OR ANY TRADES CONDUCTED THROUGH IT. WE EXPLICITLY DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:</p>
            <ul>
              <li>MERCHANTABILITY</li>
              <li>FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT</li>
              <li>SAFETY OF TRADES</li>
              <li>RELIABILITY OF USERS</li>
              <li>QUALITY OF ITEMS OR SERVICES TRADED</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <h3>6.1 Platform Liability</h3>
            <p>TheNext Company shall not be liable for:</p>
            <ul>
              <li>Any direct, indirect, incidental, special, consequential, or punitive damages</li>
              <li>Any losses arising from trades between users</li>
              <li>Any disputes between users</li>
              <li>Any personal injury or property damage resulting from trades</li>
              <li>Any misrepresentation by users</li>
              <li>Any loss of tokens or trading opportunities</li>
            </ul>

            <h3>6.2 Transaction Responsibility</h3>
            <p>Users acknowledge that:</p>
            <ul>
              <li>All trades are conducted solely between users</li>
              <li>We do not verify user identity or claims</li>
              <li>We do not guarantee the quality or authenticity of items</li>
              <li>We do not mediate disputes between users</li>
              <li>Users assume all risks associated with using the Platform</li>
            </ul>

            <h2>7. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless TheNext Company, its officers, directors, employees, agents, and affiliates from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with:</p>
            <ul>
              <li>Your access to or use of the Platform</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right</li>
              <li>Any dispute with another user</li>
              <li>Any injury or damage arising from a trade</li>
            </ul>

            <h2>8. User Conduct</h2>
            <p>Users agree to:</p>
            <ul>
              <li>Provide accurate information</li>
              <li>Use the Platform legally and responsibly</li>
              <li>Not manipulate the token system</li>
              <li>Not harass other users</li>
              <li>Not use the Platform for commercial purposes</li>
              <li>Not attempt to circumvent the Platform's trading system</li>
            </ul>

            <h2>9. Termination</h2>
            <p>We reserve the right to:</p>
            <ul>
              <li>Terminate or suspend your access to the Platform</li>
              <li>Cancel outstanding trades</li>
              <li>Void tokens</li>
              <li>Remove listings</li>
              <li>Take any other appropriate action for violations of these Terms</li>
            </ul>

            <h2>10. Modifications to Terms</h2>
            <p>We may modify these Terms at any time. Continued use of the Platform after changes constitutes acceptance of modified Terms.</p>

            <h2>11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Colorado and the city of Boulder, without regard to its conflict of law provisions.</p>

            <h2>12. Contact Information</h2>
            <p>For questions about these Terms, contact us at: support@thenext.community</p>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button type="submit" className="w-full">
            Understood
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};