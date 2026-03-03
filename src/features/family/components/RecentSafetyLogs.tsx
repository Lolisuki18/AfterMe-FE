import { useLanguage } from "@/app/useLanguage";
import type { SafetyLog } from "../store/familyStore";

interface RecentSafetyLogsProps {
  logs: SafetyLog[];
}

const LOG_COLORS = [
  "bg-green-500/20 text-green-700",
  "bg-primary/20 text-primary",
  "bg-amber-500/20 text-amber-700",
  "bg-indigo-500/20 text-indigo-700",
  "bg-red-500/20 text-red-700",
];

export const RecentSafetyLogs = ({ logs }: RecentSafetyLogsProps) => {
  const { t } = useLanguage();
  const f = t.family as Record<string, string>;

  return (
    <div className="bg-surface rounded-2xl p-5">
      <h2 className="text-text text-base font-bold">{f.safetyLogs}</h2>

      <div className="mt-4 space-y-3">
        {logs.map((log, i) => (
          <div key={log.id} className="flex items-start gap-3">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${LOG_COLORS[i % LOG_COLORS.length]}`}
            >
              {log.memberInitials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-text text-sm">{f[log.messageKey]}</p>
              <p className="text-text-muted text-xs">
                {f[log.dayKey]} &middot; {log.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
