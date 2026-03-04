import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { ProgressBar } from "./ProgressBar";
import { CustomTimeModal } from "./CustomTimeModal";
import {
  SunriseIcon,
  SunMiddayIcon,
  SunsetIcon,
  MoonStarIcon,
  PlusCircleIcon,
  InfoCircleIcon,
  ClockIcon,
  TrashIcon,
} from "@/shared/icon";
import type { PulseData } from "../store/onboardingStore";

interface Step2PulseProps {
  data: PulseData;
  onChange: (data: PulseData) => void;
  onNext: () => void;
  onBack: () => void;
}

const pulseWindows = [
  { key: "morning" as const, icon: SunriseIcon },
  { key: "afternoon" as const, icon: SunMiddayIcon },
  { key: "evening" as const, icon: SunsetIcon },
  { key: "night" as const, icon: MoonStarIcon },
] as const;

export const Step2Pulse = ({
  data,
  onChange,
  onNext,
  onBack,
}: Step2PulseProps) => {
  const { t } = useLanguage();
  const [showCustomModal, setShowCustomModal] = useState(false);

  const toggle = (key: keyof Omit<PulseData, "customTimes">) => {
    onChange({ ...data, [key]: !data[key] });
  };

  const handleAddCustomTime = (custom: {
    label: string;
    startTime: string;
    endTime: string;
  }) => {
    onChange({
      ...data,
      customTimes: [
        ...(data.customTimes || []),
        { ...custom, id: `ct_${Date.now()}` },
      ],
    });
    setShowCustomModal(false);
  };

  const handleRemoveCustomTime = (id: string) => {
    onChange({
      ...data,
      customTimes: (data.customTimes || []).filter((ct) => ct.id !== id),
    });
  };

  const formatTime = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <div className="space-y-6">
      {/* ── Progress ──────────────────────────────────── */}
      <ProgressBar currentStep={2} />

      {/* ── Title ─────────────────────────────────────── */}
      <div>
        <h1 className="text-text text-xl font-bold sm:text-2xl">
          {t.onboarding.step2.title}
        </h1>
        <p className="text-text-muted mt-2 text-sm leading-relaxed">
          {t.onboarding.step2.subtitle}
        </p>
      </div>

      {/* ── Why we ask ────────────────────────────────── */}
      <div className="bg-surface-alt flex items-start gap-2 rounded-lg p-3">
        <InfoCircleIcon className="text-primary mt-0.5 h-4 w-4 shrink-0" />
        <p className="text-text-muted text-xs">{t.onboarding.step2.whyWeAsk}</p>
      </div>

      {/* ── Pulse Toggle Cards ────────────────────────── */}
      <div className="space-y-3">
        {pulseWindows.map(({ key, icon: Icon }) => {
          const active = data[key];
          const label = t.onboarding.step2[key];
          const time =
            t.onboarding.step2[`${key}Time` as keyof typeof t.onboarding.step2];

          return (
            <button
              key={key}
              type="button"
              onClick={() => toggle(key)}
              className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                active
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  active ? "bg-primary/15" : "bg-surface-alt"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    active ? "text-primary" : "text-text-muted"
                  }`}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-text text-sm font-semibold">{label}</p>
                <p className="text-text-muted text-xs">{time}</p>
              </div>

              {/* Visual toggle indicator */}
              <div
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                  active ? "bg-primary" : "bg-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                    active ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Custom time cards ─────────────────────── */}
      {data.customTimes?.length > 0 && (
        <div className="space-y-3">
          {data.customTimes.map((ct) => (
            <div
              key={ct.id}
              className="border-primary bg-primary/5 flex w-full items-center gap-4 rounded-xl border p-4"
            >
              <div className="bg-primary/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <ClockIcon className="text-primary h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-text text-sm font-semibold">{ct.label}</p>
                <p className="text-text-muted text-xs">
                  {formatTime(ct.startTime)} – {formatTime(ct.endTime)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveCustomTime(ct.id)}
                className="text-text-muted hover:text-error shrink-0 p-1"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ── Add custom time ───────────────────────────── */}
      <button
        type="button"
        onClick={() => setShowCustomModal(true)}
        className="text-primary hover:text-primary-hover flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <PlusCircleIcon className="h-4 w-4" />
        {t.onboarding.step2.addCustomTime}
      </button>

      {/* ── Actions ───────────────────────────────────── */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="ghost" onClick={onBack}>
          {t.onboarding.back}
        </Button>
        <Button onClick={onNext}>{t.onboarding.continue}</Button>
      </div>

      {/* ── Custom Time Modal ─────────────────────────── */}
      <CustomTimeModal
        open={showCustomModal}
        onClose={() => setShowCustomModal(false)}
        onAdd={handleAddCustomTime}
      />
    </div>
  );
};
