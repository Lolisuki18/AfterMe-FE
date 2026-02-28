import { useLanguage } from "@/app/useLanguage";
import Logo from "@/shared/icon/Logo";

export const PublicFooter = () => {
  const { t } = useLanguage();
  const l = t.landing;

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo className="mb-3 h-8 w-auto" />
            <p className="text-xs leading-relaxed text-gray-500">
              {l.footerDesc}
            </p>
            <div className="mt-4 flex gap-3">
              {/* Placeholder social icons */}
              {["𝕏", "▣"].map((icon, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 text-sm font-bold text-gray-900">
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
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-3 text-sm font-bold text-gray-900">
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
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 sm:flex-row">
          <p className="text-xs text-gray-400">{l.footerCopy}</p>
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">
              {l.footerPrivacy}
            </a>
            <a href="#" className="hover:text-gray-600">
              {l.footerTermsShort}
            </a>
            <a href="#" className="hover:text-gray-600">
              {l.footerSitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
