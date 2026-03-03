import { useLanguage } from "@/app/useLanguage";
import { ShieldAlertIcon } from "@/shared/icon";

export const SecurityFooter = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  return (
    <div className="text-text-muted flex flex-col items-center gap-1 text-center text-xs">
      <div className="flex items-center gap-1.5">
        <ShieldAlertIcon className="h-3.5 w-3.5" />
        <span className="text-text-muted font-semibold">{a.securityLabel}</span>
      </div>
      <p>
        {a.encryptedConnection} · {a.connectionId}
      </p>
    </div>
  );
};
