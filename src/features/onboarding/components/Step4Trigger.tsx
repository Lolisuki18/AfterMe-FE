import { useLanguage } from "@/app/useLanguage";
import type { OnboardingFormData } from "../interface";
import { ProgressBar } from "./ProgressBar";

interface Step4TriggerProps {
  data: OnboardingFormData;
  onChange: (field: keyof OnboardingFormData, value: 1 | 3 | 7) => void;
  onNext: () => void;
  onBack: () => void;
}

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

  const sliderPercent = ((data.inactivityDays - MIN) / (MAX - MIN)) * 100;

  const dayLabel = (d: 1 | 3 | 7) => {
    if (d === 1) return tr.day;
    if (d === 3) return tr.days3;
    return tr.days7;
  };

  return (
    <>
      <ProgressBar currentStep={4} />

      <h1 className="text-navy dark:text-text mb-2 text-center text-3xl font-bold">
        {tr.title}
      </h1>
      <p className="text-text-muted mx-auto mb-10 max-w-sm text-center text-sm">
        {tr.subtitle}
      </p>

      {/* Slider */}
      <div className="mb-8 px-4">
        <div className="relative mb-2 flex justify-center">
          <div
            className="bg-primary absolute -top-8 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white shadow"
            style={{
              left: `calc(${sliderPercent}% - 16px + 4px)`,
            }}
          >
            {data.inactivityDays}
          </div>
        </div>

        <p className="text-text-muted mt-4 mb-4 text-center text-sm font-medium">
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
      </div>

      {/* Quick-select chips */}
      <div className="flex justify-center gap-3">
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
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
              <path strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {dayLabel(d)}
          </button>
        ))}
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
