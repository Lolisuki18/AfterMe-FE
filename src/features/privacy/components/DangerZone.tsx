import { useLanguage } from "@/app/useLanguage";
import { TrashIcon } from "@/shared/icon";

export const DangerZone = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <section className="flex flex-col items-center gap-3 pt-2 pb-4">
      <button className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-500/10">
        <TrashIcon className="h-4 w-4" />
        {p.deleteAccount}
      </button>
      {/* <p className="text-text-muted text-xs">{p.copyright}</p> */}
    </section>
  );
};
