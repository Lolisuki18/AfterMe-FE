import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { CheckCircleSmIcon } from "@/shared/icon";

export const PricingPreview = () => {
  const { t } = useLanguage();
  const l = t.landing;

  return (
    <section id="pricing" className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {l.pricingTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
          {l.pricingSubtitle}
        </p>

        {/* Single pricing card */}
        <div className="mx-auto mt-10 max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
          {/* Badge */}
          <div className="flex justify-center py-3">
            <span className="bg-primary rounded-full px-4 py-1 text-xs font-bold tracking-wider text-white uppercase">
              {l.pricingBadge}
            </span>
          </div>

          <div className="px-6 pb-8">
            <h3 className="text-lg font-bold text-gray-900">{l.planName}</h3>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-extrabold text-gray-900">
                {l.planPrice}
              </span>
              <span className="text-sm text-gray-500">{l.planPeriod}</span>
            </div>

            <Button rounded fullWidth className="mt-6">
              {l.planCta}
            </Button>

            <ul className="mt-6 space-y-3 text-left text-sm">
              {l.planFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-gray-700">
                  <CheckCircleSmIcon className="text-primary h-4 w-4 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
