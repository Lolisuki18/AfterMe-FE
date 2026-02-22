import { appConfig } from "@/app/config";

export const Footer = () => {
  return (
    <footer className="border-border bg-surface border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">
              About {appConfig.appName}
            </h3>
            <p className="text-text-muted text-sm">
              A platform for managing and storing important information for the
              future.
            </p>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-text-muted hover:text-text">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-text-muted hover:text-text">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-text-muted hover:text-text">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="text-text-muted hover:text-text">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-muted hover:text-text">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-text-muted hover:text-text">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">Contact</h3>
            <ul className="text-text-muted space-y-2 text-sm">
              <li>Email: info@afterme.com</li>
              <li>Hotline: 0123456789</li>
              <li>Address: Ho Chi Minh City</li>
            </ul>
          </div>
        </div>
        <div className="border-border text-text-muted mt-8 border-t pt-8 text-center text-sm">
          © {new Date().getFullYear()} {appConfig.appName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
