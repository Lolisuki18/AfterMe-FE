import { appConfig } from "@/app/config";
import { useLanguage } from "@/app/useLanguage";

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
                <a href="/about" className="text-text-muted hover:text-text">
                  {f.aboutLink}
                </a>
              </li>
              <li>
                <a href="/services" className="text-text-muted hover:text-text">
                  {f.services}
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-text-muted hover:text-text">
                  {f.pricingLink}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">
              {f.support}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="text-text-muted hover:text-text">
                  {f.faq}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-muted hover:text-text">
                  {f.contact}
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-text-muted hover:text-text">
                  {f.privacyPolicy}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text mb-4 text-sm font-semibold">
              {f.contactTitle}
            </h3>
            <ul className="text-text-muted space-y-2 text-sm">
              <li>{f.email}: info@afterme.com</li>
              <li>{f.hotline}: 0123456789</li>
              <li>
                {f.address}: {f.addressValue}
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
