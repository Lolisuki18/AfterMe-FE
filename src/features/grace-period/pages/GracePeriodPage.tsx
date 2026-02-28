import { useLanguage } from "@/app/useLanguage";
import { WarningCard } from "../components";

const GracePeriodPage = () => {
  const { t } = useLanguage();
  const g = t.gracePeriod;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4">
      <WarningCard />

      {/* Trigger SOS link below card */}
      <button className="mt-6 text-sm font-semibold text-red-400 transition-colors hover:text-red-300">
        <span className="mr-1 font-extrabold">SOS</span>
        {g.triggerSos}
      </button>

      {/* Decorative bottom pill */}
      <div className="mt-6 h-1.5 w-16 rounded-full bg-gray-700" />
    </div>
  );
};

export default GracePeriodPage;
