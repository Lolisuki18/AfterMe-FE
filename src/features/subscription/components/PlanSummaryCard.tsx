import { useLanguage } from "@/app/useLanguage";
import { CheckIcon, ShieldCheckIcon } from "@/shared/icon";

interface PlanSummaryCardProps {
  planName: string;
  planPrice: string;
}

export const PlanSummaryCard = ({
  planName,
  planPrice,
}: PlanSummaryCardProps) => {
  const { t } = useLanguage();
  const s = t.subscription;

  const features = [
    "Digital Vault (5 GB)",
    "Smart Routine Tracking",
    "Priority SOS Alerts",
    "Family Dashboard",
    "AI Lifestyle Assistant",
  ];

  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6">
      <h2 className="text-text text-base font-bold">{s.planSummary}</h2>

      {/* Selected plan badge */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-text-muted text-xs font-medium tracking-wider uppercase">
            {s.selectedPlan}
          </p>
          <p className="text-text mt-1 text-lg font-bold">{planName}</p>
        </div>
        <span className="text-primary text-xl font-extrabold">{planPrice}</span>
      </div>

      {/* Features */}
      <div className="mt-4">
        <p className="text-text-muted text-xs font-medium">{s.planFeatures}</p>
        <ul className="mt-2 space-y-2">
          {features.map((f, i) => (
            <li key={i} className="text-text flex items-start gap-2 text-sm">
              <CheckIcon className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Security guarantee */}
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-500/5 px-4 py-2.5">
        <ShieldCheckIcon className="h-4 w-4 shrink-0 text-green-600" />
        <span className="text-xs font-medium text-green-700">
          {s.securityGuarantee}
        </span>
      </div>

      {/* Total */}
      <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
        <span className="text-text text-sm font-semibold">{s.totalToday}</span>
        <div className="text-right">
          <span className="text-primary text-lg font-extrabold">{s.free}</span>
          <p className="text-text-muted text-xs">
            {s.then} {planPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
