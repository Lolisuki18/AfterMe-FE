import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { CheckSmIcon } from "@/shared/icon";

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const PlanCard = ({
  title,
  price,
  period,
  description,
  cta,
  features,
  highlighted,
  badge,
}: PlanCardProps) => (
  <div
    className={`relative flex flex-col rounded-2xl p-6 transition-transform sm:p-8 ${
      highlighted
        ? "bg-primary ring-primary text-white shadow-lg ring-2 sm:scale-105"
        : "bg-surface text-text ring-border ring-1"
    }`}
  >
    {badge && (
      <span
        className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold ${
          highlighted ? "text-primary bg-white" : "bg-primary text-white"
        }`}
      >
        {badge}
      </span>
    )}
    <h3 className="text-lg font-bold">{title}</h3>
    <div className="mt-3 flex items-baseline gap-1">
      <span className="text-3xl font-extrabold">{price}</span>
      {period && (
        <span className={highlighted ? "text-white/70" : "text-text-muted"}>
          {period}
        </span>
      )}
    </div>
    <p
      className={`mt-2 text-sm ${highlighted ? "text-white/80" : "text-text-muted"}`}
    >
      {description}
    </p>

    <ul className="mt-6 flex-1 space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm">
          <CheckSmIcon
            className={`mt-0.5 h-4 w-4 shrink-0 ${
              highlighted ? "text-white" : "text-primary"
            }`}
          />
          {f}
        </li>
      ))}
    </ul>

    <div className="mt-6">
      <Button
        fullWidth
        rounded
        variant={highlighted ? "primary" : "outline"}
        className={highlighted ? "text-primary bg-white hover:bg-white/90" : ""}
      >
        {cta}
      </Button>
    </div>
  </div>
);

interface PricingGridProps {
  isYearly: boolean;
}

export const PricingGrid = ({ isYearly }: PricingGridProps) => {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
      <PlanCard
        title={p.basicTitle}
        price={p.basicPrice}
        period={p.basicPeriod}
        description={p.basicDesc}
        cta={p.basicCta}
        features={p.basicFeatures}
      />
      <PlanCard
        title={p.standardTitle}
        price={isYearly ? p.standardPriceYearly : p.standardPriceMonthly}
        period={isYearly ? p.standardPeriodYearly : p.standardPeriod}
        description={p.standardDesc}
        cta={p.standardCta}
        features={p.standardFeatures}
        highlighted
        badge={p.standardBadge}
      />
      <PlanCard
        title={p.premiumTitle}
        price={isYearly ? p.premiumPriceYearly : p.premiumPriceMonthly}
        period={isYearly ? p.premiumPeriodYearly : p.premiumPeriod}
        description={p.premiumDesc}
        cta={p.premiumCta}
        features={p.premiumFeatures}
      />
    </section>
  );
};
