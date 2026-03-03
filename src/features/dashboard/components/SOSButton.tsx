import { useLanguage } from "@/app/useLanguage";

export const SOSButton = () => {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      className="fixed right-6 bottom-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
      aria-label={t.dashboard.sos}
    >
      <span className="text-base font-extrabold tracking-wide text-black">
        {t.dashboard.sos}
      </span>
    </button>
  );
};
