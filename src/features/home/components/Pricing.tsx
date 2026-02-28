import { useLanguage } from "@/app/useLanguage";
import { CheckIcon } from "@/shared/icon";

export const Pricing = () => {
  const { t } = useLanguage();
  const p = t.homePricing;

  return (
    <section
      id="pricing"
      className="bg-bg relative overflow-hidden py-12 lg:py-24"
    >
      {/* Striped bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(239,122,115,0.08) 48px, rgba(239,122,115,0.08) 96px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-secondary mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            {p.title}
          </h2>
          <p className="text-text-muted text-base lg:text-lg">{p.subtitle}</p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 sm:[&:last-child]:col-span-2 sm:[&:last-child]:mx-auto sm:[&:last-child]:w-1/2 lg:[&:last-child]:col-span-1 lg:[&:last-child]:mx-0 lg:[&:last-child]:w-auto ${
                idx === 1
                  ? "border-primary bg-surface border-2 shadow-xl"
                  : "border-border bg-surface border shadow-sm"
              }`}
            >
              {/* Most Popular badge */}
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent rounded-full px-5 py-1.5 text-sm font-semibold text-white shadow">
                    {p.mostPopular}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p className="text-secondary mb-2 text-base font-semibold">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-2 flex items-end gap-1">
                <span className="text-secondary text-5xl font-extrabold">
                  {plan.price}
                </span>
                {plan.per && (
                  <span className="text-text-muted mb-1 text-base">
                    {plan.per}
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p className="text-text-muted mb-8 text-sm">{plan.tagline}</p>

              {/* Features */}
              <ul className="mb-10 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-text text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto">
                <button
                  type="button"
                  className={`w-full rounded-xl py-3 text-base font-semibold transition-colors ${
                    idx === 1
                      ? "bg-primary hover:bg-primary-hover text-white"
                      : idx === 2
                        ? "bg-navy hover:bg-navy/90 text-white"
                        : "border-border text-secondary hover:bg-surface-alt border bg-transparent"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
