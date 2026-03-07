import { useLanguage } from "@/app/useLanguage";
import { AlertTriangleIcon, BoltIcon } from "@/shared/icon";
import { safetyNetStore } from "@/features/grace-period/store/safetyNetStore";
import { emergencyStore } from "@/features/emergency-contacts/store/emergencyStore";

function formatTime(iso: string | null): string {
  if (!iso) return "--:--";
  return new Date(iso).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export const AlertBanner = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  const { triggeredBy, alertTriggeredAt } = safetyNetStore.getData();
  const contacts = emergencyStore.getData().contacts;
  const primary = contacts[0];
  // Get current user from localStorage
  let userName = "";
  try {
    const userRaw = localStorage.getItem("afterme_current_user");
    if (userRaw) {
      const userObj = JSON.parse(userRaw);
      userName = userObj.fullName || userObj.name || "";
    }
  } catch {
    /* empty */
  }
  // Prefer userName, fallback to contact name
  const name = userName || primary?.name || "User";

  const isSOS = triggeredBy === "sos";
  const time = formatTime(alertTriggeredAt);

  return (
    <section className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
        {isSOS ? (
          <BoltIcon className="h-7 w-7 text-red-500" />
        ) : (
          <AlertTriangleIcon className="h-7 w-7 text-red-500" />
        )}
      </div>

      <h1 className="text-text text-2xl font-extrabold tracking-wide sm:text-3xl">
        {a.bannerTitle}
      </h1>

      <p className="mt-1 text-lg font-semibold text-red-400">
        {isSOS
          ? `SOS activated by ${name}`
          : `${name} ${a.bannerStatus.replace(/^[A-Za-z]+ /, "")}`}
      </p>

      <p className="text-text-muted mt-2 max-w-md text-sm">
        {isSOS
          ? `${name} manually activated an SOS emergency alert at ${time}.`
          : `${a.bannerDesc.replace("Sarah", name)} Alert time: ${time}.`}
      </p>

      {/* Trigger badge */}
      <span
        className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
          isSOS
            ? "bg-red-600/20 text-red-400"
            : "bg-orange-500/20 text-orange-400"
        }`}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
        {isSOS ? "Manual SOS Trigger" : "Missed Check-in"}
      </span>
    </section>
  );
};
