import { useLanguage } from "@/app/useLanguage";
import Logo from "@/shared/icon/Logo";

export const PublicFooter = () => {
  const { t } = useLanguage();
  const l = t.aboutUs;

  return (
    <footer className="bg-bg border-border border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo className="mb-3 h-8 w-auto" />
            <p className="text-text-muted text-xs leading-relaxed">
              {l.footerDesc}
            </p>
            <div className="mt-4 flex gap-3">
              {/* Placeholder social icons */}
              {["𝕏", "▣"].map((icon, i) => (
                <span
                  key={i}
                  className="bg-surface-alt text-text-muted flex h-8 w-8 items-center justify-center rounded-full text-sm"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-text mb-3 text-sm font-bold">
              {l.footerProduct}
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                l.footerFeatures,
                l.footerPricing,
                l.footerTestimonials,
                l.footerIntegrations,
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-text">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-text mb-3 text-sm font-bold">
              {l.footerSupport}
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                l.footerTrustCenter,
                l.footerHelpDesk,
                l.footerPrivacyPolicy,
                l.footerTerms,
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-text">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row">
          <p className="text-text-muted text-xs">{l.footerCopy}</p>
          <div className="text-text-muted flex gap-4 text-xs">
            <a href="#" className="hover:text-text">
              {l.footerPrivacy}
            </a>
            <a href="#" className="hover:text-text">
              {l.footerTermsShort}
            </a>
            <a href="#" className="hover:text-text">
              {l.footerSitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
