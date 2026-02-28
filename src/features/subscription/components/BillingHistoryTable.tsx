import { useLanguage } from "@/app/useLanguage";
import type { BillingEntry, BillingStatus } from "../store/subscriptionStore";

const STATUS_STYLES: Record<BillingStatus, string> = {
  paid: "bg-green-500/10 text-green-600",
  pending: "bg-amber-500/10 text-amber-600",
  failed: "bg-red-500/10 text-red-600",
};

interface BillingHistoryTableProps {
  entries: BillingEntry[];
}

export const BillingHistoryTable = ({ entries }: BillingHistoryTableProps) => {
  const { t } = useLanguage();
  const s = t.subscription;

  return (
    <div className="bg-surface rounded-2xl p-5">
      <h2 className="text-text mb-4 text-base font-bold">{s.billingHistory}</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-border border-b">
              <th className="text-text-muted pr-4 pb-2 text-xs font-semibold tracking-wider uppercase">
                {s.date}
              </th>
              <th className="text-text-muted pr-4 pb-2 text-xs font-semibold tracking-wider uppercase">
                {s.description}
              </th>
              <th className="text-text-muted pr-4 pb-2 text-xs font-semibold tracking-wider uppercase">
                {s.amount}
              </th>
              <th className="text-text-muted pb-2 text-xs font-semibold tracking-wider uppercase">
                {s.status}
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr
                key={entry.id}
                className="border-border border-b last:border-0"
              >
                <td className="text-text-muted py-3 pr-4 text-xs whitespace-nowrap">
                  {entry.date}
                </td>
                <td className="text-text py-3 pr-4 text-xs font-medium whitespace-nowrap">
                  {entry.description}
                </td>
                <td className="text-text py-3 pr-4 text-xs font-semibold whitespace-nowrap">
                  {entry.amount}
                </td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${STATUS_STYLES[entry.status]}`}
                  >
                    {s[entry.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
