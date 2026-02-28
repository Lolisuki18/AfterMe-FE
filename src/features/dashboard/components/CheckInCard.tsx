import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { CheckIcon } from "../icon";
import { dashboardStore } from "../store/dashboardStore";

export const CheckInCard = () => {
  const { t } = useLanguage();
  const d = t.dashboard;

  const handleCheckIn = () => {
    dashboardStore.checkIn();
  };

  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6">
      <h2 className="text-text text-base font-semibold">{d.checkInTitle}</h2>
      <p className="text-text-muted mt-1 text-sm leading-relaxed">
        {d.checkInDesc}
      </p>

      <div className="mt-4">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          rounded
          leftIcon={<CheckIcon className="h-5 w-5" />}
          onClick={handleCheckIn}
        >
          {d.checkInAction}
        </Button>
      </div>
    </div>
  );
};
