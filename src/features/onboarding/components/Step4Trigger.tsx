import { useLanguage } from "@/app/useLanguage";
import type { Step4TriggerProps } from "../interface";
import { ProgressBar } from "./ProgressBar";
import { CalendarDayIcon } from "@/shared/icon";
import { Button } from "@/shared/components";

const DAYS: Array<1 | 3 | 7> = [1, 3, 7];
const MIN = 1;
const MAX = 7;

export const Step4Trigger = ({
  data,
  onChange,
  onNext,
  onBack,
}: Step4TriggerProps) => {
  const { t } = useLanguage();
  const o = t.onboarding;
  const tr = o.trigger;

  // const sliderPercent = ((data.inactivityDays - MIN) / (MAX - MIN)) * 100;

  const dayLabel = (d: 1 | 3 | 7) => {
    if (d === 1) return tr.day;
    if (d === 3) return tr.days3;
    return tr.days7;
  };

  return (
    <>
      <ProgressBar currentStep={4} />

      <h1 className="text-navy dark:text-text mb-2 text-center text-2xl font-bold sm:text-3xl">
        {tr.title}
      </h1>
      <p className="text-text-muted mx-auto mb-10 max-w-sm text-center text-sm">
        {tr.subtitle}
      </p>

      {/* Slider */}
      <div className="mb-8 px-4">
        <p className="text-text-muted mb-4 text-center text-sm font-medium">
          {tr.label}
        </p>

        <input
          type="range"
          min={MIN}
          max={MAX}
          step={1}
          value={data.inactivityDays}
          onChange={(e) =>
            onChange("inactivityDays", Number(e.target.value) as 1 | 3 | 7)
          }
          className="accent-primary w-full cursor-pointer"
        />
        <p className="text-text-muted mb-4 text-center text-sm font-medium">
          {tr.daysChoose} {data.inactivityDays}
        </p>
      </div>

      {/* Quick-select chips */}
      <div className="flex flex-wrap justify-center gap-3">
        {DAYS.map((d) => (
          <button
            key={d}
            onClick={() => onChange("inactivityDays", d)}
            className={`border-border flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all ${
              data.inactivityDays === d
                ? "border-primary text-primary bg-primary/5"
                : "text-text-muted hover:border-primary/40"
            }`}
          >
            <CalendarDayIcon className="h-4 w-4" />
            {dayLabel(d)}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" size="sm">
          {o.back}
        </Button>
        <Button onClick={onNext} variant="primary" size="lg">
          {o.next}
        </Button>
      </div>
    </>
  );
};
