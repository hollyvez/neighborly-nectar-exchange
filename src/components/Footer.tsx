import { Link } from "react-router-dom";
import { ContactModal } from "./ContactModal";
import { TermsModal } from "./TermsModal";
import { PrivacyModal } from "./PrivacyModal";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-cursive text-2xl mb-4">TheNEXT</h3>
            <p className="text-sm">Connecting Communities, One Neighbor at a Time</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><TermsModal /></li>
              <li><PrivacyModal /></li>
              <li><Link to="/guidelines" className="hover:underline">Community Guidelines</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><ContactModal /></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/company/thenextcommunity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TheNEXT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};