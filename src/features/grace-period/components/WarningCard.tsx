import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import {
  WarningTriangleIcon,
  CheckCircleOutlineIcon,
  BoltIcon,
} from "@/shared/icon";
import { CountdownTimer } from "./CountdownTimer";
import { useCountdown } from "../hooks/useCountdown";

export const WarningCard = () => {
  const { t } = useLanguage();
  const g = t.gracePeriod;
  const { hours, mins, secs, cancel, escalate } = useCountdown();

  return (
    <div className="bg-surface border-border relative w-full max-w-md overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-sm">
      {/* Top accent gradient bar */}
      <div className="h-1 w-full bg-linear-to-r from-yellow-500 via-orange-400 to-yellow-500" />

      <div className="flex flex-col items-center px-6 py-8 sm:px-10 sm:py-10">
        {/* Warning icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/15">
          <WarningTriangleIcon className="h-8 w-8 text-yellow-500" />
        </div>

        <h1 className="text-text text-xl font-extrabold sm:text-2xl">
          {g.title}
        </h1>
        <p className="text-text-muted mt-2 max-w-sm text-center text-sm">
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

        {/* I'm Safe button */}
        <Button
          size="lg"
          rounded
          fullWidth
          leftIcon={<CheckCircleOutlineIcon className="h-5 w-5" />}
          className="py-4 text-base font-bold"
          onClick={cancel}
        >
          {g.cancelBtn}
        </Button>

        <p className="text-text-muted mt-4 max-w-xs text-center text-xs leading-relaxed">
          {g.noAlerts}
        </p>

        {/* Divider */}
        <div className="border-border mt-6 mb-4 w-full border-t" />

        {/* SOS escalation button */}
        <button
          type="button"
          onClick={escalate}
          className="flex items-center gap-1.5 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
        >
          <BoltIcon className="h-4 w-4" />
          <span className="font-extrabold">SOS</span>
          {g.triggerSos}
        </button>
      </div>
    </div>
  );
};
