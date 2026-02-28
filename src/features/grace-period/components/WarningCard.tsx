import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { WarningIcon, CheckCircleIcon } from "../icon";
import { CountdownTimer } from "./CountdownTimer";
import { useCountdown } from "../hooks/useCountdown";

export const WarningCard = () => {
  const { t } = useLanguage();
  const g = t.gracePeriod;
  const { hours, mins, secs, cancel } = useCountdown();

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-800/80 shadow-2xl backdrop-blur-sm">
      {/* Top accent gradient bar */}
      <div className="h-1 w-full bg-linear-to-r from-yellow-500 via-orange-400 to-yellow-500" />

      <div className="flex flex-col items-center px-6 py-8 sm:px-10 sm:py-10">
        {/* Warning icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/15">
          <WarningIcon className="h-8 w-8 text-yellow-500" />
        </div>

        <h1 className="text-xl font-extrabold text-white sm:text-2xl">
          {g.title}
        </h1>
        <p className="mt-2 max-w-sm text-center text-sm text-gray-400">
          {g.subtitle}
        </p>

        {/* Countdown */}
        <div className="mt-8 mb-8">
          <CountdownTimer
            hours={hours}
            mins={mins}
            secs={secs}
            labels={{ hours: g.hours, mins: g.mins, secs: g.secs }}
          />
        </div>

        {/* Cancel Alert Button */}
        <Button
          size="lg"
          rounded
          fullWidth
          leftIcon={<CheckCircleIcon className="h-5 w-5" />}
          className="py-4 text-base font-bold"
          onClick={cancel}
        >
          {g.cancelBtn}
        </Button>

        <p className="mt-4 max-w-xs text-center text-xs leading-relaxed text-gray-500">
          {g.noAlerts}
        </p>
      </div>
    </div>
  );
};
