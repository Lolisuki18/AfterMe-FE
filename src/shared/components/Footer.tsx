import { Link } from "react-router-dom";
import { appConfig } from "@/app/config";
import { useLanguage } from "@/app/useLanguage";
import { CONTACT } from "../constants";

export const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-border bg-surface border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">
              {f.about} {appConfig.appName}
            </h3>
            <p className="text-text-muted text-sm">{f.aboutDesc}</p>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">{f.links}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-text-muted hover:text-text">
                  {f.aboutLink}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-text-muted hover:text-text">
                  {f.services}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-text-muted hover:text-text">
                  {f.pricingLink}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">
              {f.support}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-text-muted hover:text-text">
                  {f.faq}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-muted hover:text-text">
                  {f.contact}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-text-muted hover:text-text"
                >
                  {f.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">
              {f.contactTitle}
            </h3>
            <ul className="text-text-muted space-y-2 text-sm">
              <li>
                {f.email}: {CONTACT.EMAIL}
              </li>
              <li>
                {f.hotline}: {CONTACT.PHONE}
              </li>
              <li>
                {f.address}: {CONTACT.ADDRESS}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-border text-text-muted mt-8 border-t pt-8 text-center text-sm">
          © {new Date().getFullYear()} {appConfig.appName}. {f.rights}
        </div>
      </div>
    </footer>
  );
};
