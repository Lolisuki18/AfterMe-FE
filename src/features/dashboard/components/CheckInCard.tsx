import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { CheckBasicIcon } from "@/shared/icon";
import { dashboardStore } from "../store/dashboardStore";
import { toast } from "sonner";

export const CheckInCard = () => {
  const { t } = useLanguage();
  const d = t.dashboard;

  const data = dashboardStore.getData();
  const [checkedIn, setCheckedIn] = useState(() => {
    if (!data.lastCheckIn) return false;
    // Already checked in today?
    const last = new Date(data.lastCheckIn);
    const now = new Date();
    return (
      last.getFullYear() === now.getFullYear() &&
      last.getMonth() === now.getMonth() &&
      last.getDate() === now.getDate()
    );
  });

  const handleCheckIn = () => {
    dashboardStore.checkIn();
    setCheckedIn(true);
    toast.success(d.checkInSuccess ?? "Check-in recorded! Stay safe.");
  };

  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6">
      <h2 className="text-text text-base font-semibold">{d.checkInTitle}</h2>
      <p className="text-text-muted mt-1 text-sm leading-relaxed">
        {d.checkInDesc}
      </p>

      <div className="mt-4">
        {checkedIn ? (
          <div className="flex items-center justify-center gap-2 rounded-full bg-green-100 px-5 py-3 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
            <CheckBasicIcon className="h-5 w-5" />
            {d.checkedInToday ?? "You've checked in today!"}
          </div>
        ) : (
          <Button
            variant="primary"
            size="lg"
            fullWidth
            rounded
            leftIcon={<CheckBasicIcon className="h-5 w-5" />}
            onClick={handleCheckIn}
          >
            {d.checkInAction}
          </Button>
        )}
      </div>
    </div>
  );
};
