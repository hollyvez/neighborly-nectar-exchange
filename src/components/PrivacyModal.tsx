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
import { X } from "lucide-react";

export const PrivacyModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline">Privacy Policy</button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Last Updated: January 5, 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="prose prose-sm dark:prose-invert">
            <h2 className="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
            <p className="mb-4">TheNext Company ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our barter platform (the "Platform"). Please read this Privacy Policy carefully. By using the Platform, you consent to our collection and use of your data as described in this Privacy Policy.</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium mt-4 mb-3">2.1 Information You Provide</h3>
            <p className="mb-2">We collect information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Account information (email address, username, password)</li>
              <li>Profile information</li>
              <li>Physical location data (address and neighborhood)</li>
              <li>Transaction and trading history</li>
              <li>Communications with other users</li>
              <li>Customer service communications</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">2.2 Information Automatically Collected</h3>
            <p className="mb-2">When you use our Platform, we automatically collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Device information (IP address, browser type, device type)</li>
              <li>Usage data (pages visited, time spent, clicks)</li>
              <li>Location data (based on IP address or GPS, if enabled)</li>
              <li>Log data</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">2.3 Analytics and Tracking</h3>
            <p className="mb-2">We use third-party analytics services including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Analytics</li>
              <li>Hotjar</li>
            </ul>
            <p className="mb-4">These services may collect information about your use of the Platform through cookies and similar technologies.</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and maintaining the Platform</li>
              <li>Processing your trades and transactions</li>
              <li>Communicating with you about your account</li>
              <li>Sending marketing communications (subject to your preferences)</li>
              <li>Improving our Platform and user experience</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Preventing fraud and ensuring Platform security</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4">4. Marketing Communications</h2>
            <h3 className="text-lg font-medium mt-4 mb-3">4.1 Opt-Out Rights</h3>
            <p className="mb-2">You may opt out of marketing communications at any time by:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Using the "unsubscribe" link in our emails</li>
              <li>Adjusting your communication preferences in your account settings</li>
              <li>Contacting us at support@thenext.community</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">4.2 Essential Communications</h3>
            <p className="mb-4">You cannot opt out of service-related communications (such as transaction confirmations and security alerts).</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">5. Information Sharing</h2>
            <h3 className="text-lg font-medium mt-4 mb-3">5.1 Legal Requirements</h3>
            <p className="mb-4">We may disclose your information if required by law, regulation, legal process, or governmental request.</p>

            <h3 className="text-lg font-medium mt-4 mb-3">5.2 Third-Party Service Providers</h3>
            <p className="mb-4">We do not share your personal information with third parties except:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>When required by law</li>
              <li>With service providers who assist in Platform operations and are bound by confidentiality obligations</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">5.3 Business Transfers</h3>
            <p className="mb-4">If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">6. Data Security</h2>
            <p className="mb-2">We implement appropriate technical and organizational measures to protect your information, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls</li>
              <li>Secure data storage</li>
            </ul>
            <p className="mb-4">However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

            <h3 className="text-lg font-medium mt-4 mb-3">6.1 Data Retention</h3>
            <p className="mb-2">We retain your data according to the following schedule:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Standard transactions and related data: 1 year from date of transaction</li>
              <li>Flagged transactions and related data: 5 years from date of transaction</li>
              <li>Account information: Until account deletion or "right to be forgotten" request</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">6.2 Security Certifications</h3>
            <p className="mb-4">We are committed to maintaining the highest standards of data security and are actively pursuing:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>SOC 2 Certification</li>
              <li>HITRUST Certification</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4">7. Your Privacy Rights</h2>
            <h3 className="text-lg font-medium mt-4 mb-3">7.1 Access and Control</h3>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">7.2 Data Deletion</h3>
            <p className="mb-2">You may request to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Delete your account</li>
              <li>Be "forgotten" (complete erasure of all personal data)</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">7.3 California Privacy Rights (CCPA)</h3>
            <p className="mb-2">California residents have additional rights, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to know what personal information is collected</li>
              <li>The right to know whether personal information is sold or disclosed</li>
              <li>The right to opt out of the sale of personal information</li>
              <li>The right to access personal information</li>
              <li>The right to equal service and price</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">7.4 European Privacy Rights (GDPR)</h3>
            <p className="mb-2">If you are in the European Economic Area (EEA), you have additional rights under GDPR, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to be informed</li>
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
              <li>Rights related to automated decision-making</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4">8. Cookies and Tracking Technologies</h2>
            <h3 className="text-lg font-medium mt-4 mb-3">8.1 Use of Cookies</h3>
            <p className="mb-4">We use cookies and similar tracking technologies solely through our analytics providers (Google Analytics and Hotjar) to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Analyze Platform usage</li>
              <li>Improve user experience</li>
              <li>Track user preferences</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-3">8.2 Cookie Controls</h3>
            <p className="mb-4">You can control cookies through your browser settings. However, disabling cookies may limit Platform functionality.</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">9. Children's Privacy</h2>
            <p className="mb-4">We do not knowingly collect information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">10. International Data Transfers</h2>
            <p className="mb-4">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">11. Changes to Privacy Policy</h2>
            <p className="mb-2">We may update this Privacy Policy periodically. We will notify you of any material changes by:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Posting the new Privacy Policy on the Platform</li>
              <li>Sending you an email notification</li>
              <li>Displaying a notice on the Platform</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4">12. Contact Us</h2>
            <p className="mb-4">For questions about this Privacy Policy or our privacy practices, contact us at:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: support@thenext.community</li>
              <li>Address: 1298 Nonaham Lane, Boulder County</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4">13. Data Protection Officer</h2>
            <p className="mb-4">For EU data protection matters, contact our Data Protection Officer at: support@thenext.community</p>
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