import { useLanguage } from "@/app/useLanguage";
import { Toggle } from "@/shared/components";

interface PricingHeaderProps {
  isYearly: boolean;
  onToggle: (v: boolean) => void;
}

export const PricingHeader = ({ isYearly, onToggle }: PricingHeaderProps) => {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section className="py-8 text-center sm:py-12">
      <h1 className="text-text text-2xl font-bold sm:text-3xl">{p.title}</h1>
      <p className="text-text-muted mx-auto mt-3 max-w-lg text-sm leading-relaxed">
        {p.subtitle}
      </p>

      {/* Monthly / Yearly toggle */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <span
          className={`text-sm font-medium ${!isYearly ? "text-text" : "text-text-muted"}`}
        >
          {p.monthly}
        </span>
        <Toggle checked={isYearly} onChange={onToggle} />
        <span
          className={`text-sm font-medium ${isYearly ? "text-text" : "text-text-muted"}`}
        >
          {p.yearly}
        </span>
        {isYearly && (
          <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-semibold">
            {p.savePercent}
          </span>
        )}
      </div>
    </section>
  );
};
