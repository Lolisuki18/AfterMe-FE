import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { CheckSmIcon, BackIcon, CheckCircleFilledIcon } from "@/shared/icon";
import { subscriptionStore } from "../store/subscriptionStore";

// ─── Plan Card ────────────────────────────────────────────────────────────────

interface PlanCardProps {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: string;
  yearlyPeriod: string;
  description: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  isCurrent?: boolean;
  isYearly: boolean;
  onSelect: () => void;
}

const PlanCard = ({
  title,
  monthlyPrice,
  yearlyPrice,
  period,
  yearlyPeriod,
  description,
  cta,
  features,
  highlighted,
  badge,
  isCurrent,
  isYearly,
  onSelect,
}: PlanCardProps) => {
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const periodLabel = isYearly ? yearlyPeriod : period;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 transition-all sm:p-8 ${
        highlighted
          ? "bg-primary ring-primary text-white shadow-xl ring-2"
          : "bg-surface text-text ring-border ring-1"
      } ${isCurrent ? "ring-2 ring-green-500" : ""}`}
    >
      {badge && !isCurrent && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold ${
            highlighted ? "text-primary bg-white" : "bg-primary text-white"
          }`}
        >
          {badge}
        </span>
      )}
      {isCurrent && (
        <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
          <CheckCircleFilledIcon className="h-3 w-3" />
          Current Plan
        </span>
      )}

      <h3 className="text-lg font-bold">{title}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold">{price}</span>
        {periodLabel && (
          <span className={highlighted ? "text-white/70" : "text-text-muted"}>
            {periodLabel}
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
        {isCurrent ? (
          <button
            disabled
            className="w-full cursor-not-allowed rounded-full bg-green-500/20 py-2.5 text-sm font-bold text-green-600"
          >
            Current Plan
          </button>
        ) : highlighted ? (
          <button
            type="button"
            onClick={onSelect}
            className="bg-bg text-primary hover:bg-surface w-full rounded-full py-2.5 text-sm font-bold transition-colors"
          >
            {cta}
          </button>
        ) : (
          <Button fullWidth rounded variant="outline" onClick={onSelect}>
            {cta}
          </Button>
        )}
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const ManagePlanPage = () => {
  const { t } = useLanguage();
  const p = t.pricing;
  const s = t.subscription;
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);
  const [confirmed, setConfirmed] = useState<{
    name: string;
    price: string;
  } | null>(null);

  const currentData = subscriptionStore.getData();

  const handleSelect = (planName: string, price: string) => {
    subscriptionStore.updatePlan(planName, `${price}/month`);
    setConfirmed({ name: planName, price });
    setTimeout(() => {
      navigate("/dashboard/subscription");
    }, 1500);
  };

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* Success toast */}
      {confirmed && (
        <div className="animate-in fade-in slide-in-from-top-2 fixed top-4 right-4 z-50 flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg">
          <CheckCircleFilledIcon className="h-4 w-4" />
          Switched to {confirmed.name}!
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/dashboard/subscription")}
          className="text-text-muted hover:text-text rounded-lg p-1.5 transition-colors"
        >
          <BackIcon className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-text text-2xl font-bold">{s.managePlanTitle}</h1>
          <p className="text-text-muted mt-0.5 text-sm">
            {s.managePlanSubtitle}
          </p>
        </div>
      </div>

      {/* Monthly / Yearly toggle */}
      <div className="flex items-center justify-center gap-3">
        <span
          className={`text-sm font-medium ${!isYearly ? "text-text" : "text-text-muted"}`}
        >
          {p.monthly}
        </span>
        <button
          onClick={() => setIsYearly((v) => !v)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
            isYearly ? "bg-primary" : "bg-border"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
              isYearly ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${isYearly ? "text-text" : "text-text-muted"}`}
        >
          {p.yearly}
          <span className="text-primary ml-1.5 text-xs font-bold">
            {p.savePercent}
          </span>
        </span>
      </div>

      {/* Plan cards */}
      <div className="grid gap-6 sm:grid-cols-3">
        <PlanCard
          title={p.basicTitle}
          monthlyPrice={p.basicPrice}
          yearlyPrice={p.basicPrice}
          period={p.basicPeriod}
          yearlyPeriod={p.basicPeriod}
          description={p.basicDesc}
          cta={p.basicCta}
          features={p.basicFeatures}
          isCurrent={currentData.planName === p.basicTitle}
          isYearly={isYearly}
          onSelect={() => handleSelect(p.basicTitle, p.basicPrice)}
        />
        <PlanCard
          title={p.standardTitle}
          monthlyPrice={p.standardPriceMonthly}
          yearlyPrice={p.standardPriceYearly}
          period={p.standardPeriod}
          yearlyPeriod={p.standardPeriodYearly}
          description={p.standardDesc}
          cta={p.standardCta}
          features={p.standardFeatures}
          highlighted
          badge={p.standardBadge}
          isCurrent={currentData.planName === p.standardTitle}
          isYearly={isYearly}
          onSelect={() =>
            handleSelect(
              p.standardTitle,
              isYearly ? p.standardPriceYearly : p.standardPriceMonthly,
            )
          }
        />
        <PlanCard
          title={p.premiumTitle}
          monthlyPrice={p.premiumPriceMonthly}
          yearlyPrice={p.premiumPriceYearly}
          period={p.premiumPeriod}
          yearlyPeriod={p.premiumPeriodYearly}
          description={p.premiumDesc}
          cta={p.premiumCta}
          features={p.premiumFeatures}
          isCurrent={currentData.planName === p.premiumTitle}
          isYearly={isYearly}
          onSelect={() =>
            handleSelect(
              p.premiumTitle,
              isYearly ? p.premiumPriceYearly : p.premiumPriceMonthly,
            )
          }
        />
      </div>

      {/* Back link */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          rounded
          leftIcon={<BackIcon className="h-4 w-4" />}
          onClick={() => navigate("/dashboard/subscription")}
        >
          {s.backToSubscription}
        </Button>
      </div>
    </div>
  );
};

export default ManagePlanPage;
