import { useLanguage } from "@/app/useLanguage";
import {
  ClockBasicIcon,
  UserProfileIcon,
  CheckCircleFilledIcon,
} from "@/shared/icon";
import { safetyNetStore } from "@/features/grace-period/store/safetyNetStore";
import { emergencyStore } from "@/features/emergency-contacts/store/emergencyStore";

function formatTime(iso: string | null): string {
  if (!iso) return "--:--";
  return new Date(iso).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const priorityColor: Record<string, string> = {
  primary: "text-red-400 bg-red-500/15",
  secondary: "text-orange-400 bg-orange-500/15",
  backup: "text-yellow-400 bg-yellow-500/15",
};

export const StatusGrid = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  const { alertTriggeredAt } = safetyNetStore.getData();
  const contacts = emergencyStore.getData().contacts;
  const alertTime = formatTime(alertTriggeredAt);

  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {/* Last Check-In / Alert Time Card */}
      <div className="bg-surface rounded-2xl p-5 sm:p-6">
        <div className="text-text-muted mb-3 flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
          <ClockBasicIcon className="text-primary h-4 w-4" />
          {a.lastCheckIn}
        </div>
        <p className="text-text text-3xl font-extrabold">{alertTime}</p>
        <p className="text-text-muted text-sm">{a.today}</p>

        <hr className="border-border my-4" />

        <div className="text-text-muted flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          {a.currentStatus}
        </div>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          {a.unresponsive}
        </span>
      </div>

      {/* Contacts Notified Card */}
      <div className="bg-surface rounded-2xl p-5 sm:p-6">
        <div className="text-text-muted mb-3 flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
          <UserProfileIcon className="text-primary h-4 w-4" />
          Contacts Notified
        </div>

        <div className="space-y-3">
          {contacts.slice(0, 3).map((c) => (
            <div key={c.id} className="flex items-center gap-3">
              {/* Avatar */}
              <div className="bg-surface-alt text-text flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                {c.avatarInitials}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-text truncate text-sm font-semibold">
                  {c.name}
                </p>
                <span
                  className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                    priorityColor[c.priority] ?? "text-text-muted"
                  }`}
                >
                  {c.priority}
                </span>
              </div>

              {/* Notified check */}
              <CheckCircleFilledIcon className="h-4 w-4 shrink-0 text-emerald-400" />
            </div>
          ))}

          {contacts.length === 0 && (
            <p className="text-text-muted text-sm">
              No emergency contacts set.
            </p>
          )}
        </div>

        <p className="text-text-muted mt-4 text-xs">Alert sent • {alertTime}</p>
      </div>
    </section>
  );
};
