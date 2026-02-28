import { useLanguage } from "@/app/useLanguage";

const CheckIcon = () => (
  <svg
    className="text-primary mt-0.5 h-4 w-4 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

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
              <CheckIcon />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Security guarantee */}
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-500/5 px-4 py-2.5">
        <svg
          className="h-4 w-4 shrink-0 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
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
