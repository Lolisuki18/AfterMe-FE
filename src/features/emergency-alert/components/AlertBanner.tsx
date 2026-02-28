import { useLanguage } from "@/app/useLanguage";
import { AlertTriangleIcon } from "@/shared/icon";

export const AlertBanner = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  return (
    <section className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
        <AlertTriangleIcon className="h-7 w-7 text-red-500" />
      </div>

      <h1 className="text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
        {a.bannerTitle}
      </h1>
      <p className="mt-1 text-lg font-semibold text-red-400">
        {a.bannerStatus}
      </p>
      <p className="mt-2 max-w-md text-sm text-gray-400">{a.bannerDesc}</p>
    </section>
  );
};
