import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { BoltIcon, PhoneIcon, ShieldAlertIcon, ShareIcon } from "@/shared/icon";

export const ActionCenter = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  return (
    <section className="rounded-2xl bg-gray-800/70 p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <BoltIcon className="h-5 w-5 text-yellow-400" />
        <div>
          <h2 className="text-base font-bold text-white">{a.actionTitle}</h2>
          <p className="text-xs text-gray-400">{a.actionSubtitle}</p>
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
          className="border-gray-600 py-4 text-base font-bold text-white hover:bg-gray-700"
        >
          {a.callEmergency}
        </Button>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white">
        <ShareIcon className="h-4 w-4" />
        {a.shareLocation}
      </button>
    </section>
  );
};
