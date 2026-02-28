import { useLanguage } from "@/app/useLanguage";
import { ShieldAlertIcon } from "@/shared/icon";

export const SecurityFooter = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  return (
    <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-500">
      <div className="flex items-center gap-1.5">
        <ShieldAlertIcon className="h-3.5 w-3.5" />
        <span className="font-semibold text-gray-400">{a.securityLabel}</span>
      </div>
      <p>
        {a.encryptedConnection} · {a.connectionId}
      </p>
    </div>
  );
};
