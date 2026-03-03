import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { BoltIcon, PhoneIcon, ShieldAlertIcon, ShareIcon } from "@/shared/icon";

export const ActionCenter = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  return (
    <section className="bg-surface rounded-2xl p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <BoltIcon className="h-5 w-5 text-yellow-400" />
        <div>
          <h2 className="text-text text-base font-bold">{a.actionTitle}</h2>
          <p className="text-text-muted text-xs">{a.actionSubtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button
          size="lg"
          rounded
          fullWidth
          leftIcon={<PhoneIcon className="h-5 w-5" />}
          className="py-4 text-base font-bold"
        >
          {a.callContact}
        </Button>
        <Button
          variant="outline"
          size="lg"
          rounded
          fullWidth
          leftIcon={<ShieldAlertIcon className="h-5 w-5" />}
          className="border-border text-text hover:bg-surface-alt py-4 text-base font-bold"
        >
          {a.callEmergency}
        </Button>
      </div>

      <button className="text-text-muted hover:text-text mt-4 flex w-full items-center justify-center gap-1.5 text-sm transition-colors">
        <ShareIcon className="h-4 w-4" />
        {a.shareLocation}
      </button>
    </section>
  );
};
