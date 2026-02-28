import { useLanguage } from "../../../app/useLanguage";
import { ChevronRightIcon } from "../icon";

const statusColor: Record<string, string> = {
  subscribed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  pending:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  joined: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

const statusLabel = (status: string, t: Record<string, string>) => {
  if (status === "subscribed") return t.statusSubscribed;
  if (status === "pending") return t.statusPending;
  return t.statusJoined;
};

const ReferralHistory = () => {
  const { t } = useLanguage();
  const r = t.referral;

  return (
    <div className="border-border bg-surface rounded-2xl border p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-text text-lg font-semibold">{r.historyTitle}</h2>
        <button
          type="button"
          className="text-primary inline-flex items-center gap-0.5 text-sm font-medium hover:underline"
        >
          {r.viewAll}
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      {/* List */}
      <ul className="divide-border mt-4 divide-y">
        {r.referrals.map((ref, idx) => (
          <li key={idx} className="flex items-center gap-3 py-3">
            {/* Avatar */}
            <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
              {ref.initials}
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <p className="text-text truncate text-sm font-medium">
                {ref.name}
              </p>
              <p className="text-text-muted text-xs">{ref.date}</p>
            </div>

            {/* Status badge */}
            <span
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                statusColor[ref.status] ?? statusColor.joined
              }`}
            >
              {statusLabel(ref.status, r as unknown as Record<string, string>)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferralHistory;
