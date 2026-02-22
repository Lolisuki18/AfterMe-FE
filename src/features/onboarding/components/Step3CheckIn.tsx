import { useLanguage } from "@/app/useLanguage";
import type { OnboardingFormData } from "../interface";
import { ProgressBar } from "./ProgressBar";
import { SunIcon, CalendarIcon } from "@/shared/icon";

interface Step3CheckInProps {
  data: OnboardingFormData;
  onChange: (
    field: keyof OnboardingFormData,
    value: string | "daily" | "weekly",
  ) => void;
  onNext: () => void;
  onBack: () => void;
}

const timeBoxClass =
  "border-border bg-bg text-text w-14 rounded-lg border px-2 py-2.5 text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-primary/50";

export const Step3CheckIn = ({
  data,
  onChange,
  onNext,
  onBack,
}: Step3CheckInProps) => {
  const { t } = useLanguage();
  const o = t.onboarding;
  const c = o.checkin;

  return (
    <>
      <ProgressBar currentStep={3} />

      <h1 className="text-navy dark:text-text mb-2 text-center text-2xl font-bold sm:text-3xl">
        {c.title}
      </h1>
      <p className="text-text-muted mb-10 text-center text-sm">{c.subtitle}</p>

      {/* Frequency selector */}
      <div className="mb-8 flex flex-col items-center gap-4">
        <p className="text-primary font-semibold">{c.frequency}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {(["daily", "weekly"] as const).map((freq) => (
            <button
              key={freq}
              onClick={() => onChange("checkInFrequency", freq)}
              className={`border-border flex h-20 w-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 text-sm font-medium transition-all ${
                data.checkInFrequency === freq
                  ? "border-primary text-primary bg-primary/5"
                  : "text-text-muted hover:border-primary/40"
              }`}
            >
              {freq === "daily" ? (
                <SunIcon className="text-text-muted h-6 w-6" />
              ) : (
                <CalendarIcon className="text-text-muted h-6 w-6" />
              )}
              {freq === "daily" ? c.daily : c.weekly}
            </button>
          ))}
        </div>
      </div>

      {/* Time picker */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-text-muted text-sm font-medium">{c.time}</span>
        <div className="flex items-center gap-2 sm:gap-3">
          <input
            type="number"
            min={1}
            max={12}
            className={timeBoxClass}
            value={data.checkInHour}
            onChange={(e) =>
              onChange("checkInHour", e.target.value.padStart(2, "0"))
            }
          />
          <span className="text-text text-xl font-bold">:</span>
          <input
            type="number"
            min={0}
            max={59}
            className={timeBoxClass}
            value={data.checkInMinute}
            onChange={(e) =>
              onChange("checkInMinute", e.target.value.padStart(2, "0"))
            }
          />
          {/* AM / PM */}
          <div className="border-primary flex flex-col overflow-hidden rounded-lg border-2">
            {(["AM", "PM"] as const).map((period) => (
              <button
                key={period}
                onClick={() => onChange("checkInPeriod", period)}
                className={`cursor-pointer px-3 py-1 text-sm font-bold transition-colors ${
                  data.checkInPeriod === period
                    ? "bg-primary text-white"
                    : "text-text-muted hover:bg-primary/10"
                }`}
              >
                {period === "AM" ? c.am : c.pm}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-text-muted hover:text-text cursor-pointer text-sm transition-colors"
        >
          {o.back}
        </button>
        <button
          onClick={onNext}
          className="bg-primary hover:bg-primary-hover cursor-pointer rounded-xl px-8 py-3 font-semibold text-white transition-colors"
        >
          {o.next}
        </button>
      </div>
    </>
  );
};
