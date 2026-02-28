import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { TrashIcon } from "@/shared/icon";

export const DangerZone = () => {
  const { t } = useLanguage();
  const s = t.accountSettings.danger;

  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 sm:p-6">
      <h2 className="text-sm font-bold text-red-500">{s.title}</h2>
      <p className="text-text-muted mt-2 text-sm leading-relaxed">
        {s.description}
      </p>
      <div className="mt-4">
        <Button
          variant="danger"
          size="sm"
          rounded
          leftIcon={<TrashIcon className="h-4 w-4" />}
        >
          {s.deleteAccount}
        </Button>
      </div>
    </div>
  );
};
