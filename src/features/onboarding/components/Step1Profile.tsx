import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Input, Textarea, Button } from "@/shared/components";
import { ProgressBar } from "./ProgressBar";
import {
  ShieldLockAltIcon,
  CriticalInfoIcon,
  EncryptedIcon,
  UserProfileIcon,
  NoteIcon,
  SunriseIcon,
  MoonStarIcon,
  ArrowRightIcon,
} from "@/shared/icon";
import type { ProfileData } from "../store/onboardingStore";

interface Step1ProfileProps {
  data: ProfileData;
  onChange: (data: ProfileData) => void;
  onNext: () => void;
  onSkip: () => void;
}

export const Step1Profile = ({
  data,
  onChange,
  onNext,
  onSkip,
}: Step1ProfileProps) => {
  const { t } = useLanguage();
  const [errors, setErrors] = useState<{ fullName?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.fullName.trim()) {
      setErrors({ fullName: "Required" });
      return;
    }
    setErrors({});
    onNext();
  };

  const setPreference = (pref: "morning" | "evening") => {
    onChange({ ...data, checkInPreference: pref });
  };

  return (
    <div className="space-y-6">
      {/* ── Header ─────────────────────────────────────── */}
      <div className="text-center">
        <div className="bg-primary/10 mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full">
          <ShieldLockAltIcon className="text-primary h-6 w-6" />
        </div>
        <h1 className="text-text text-xl font-bold sm:text-2xl">
          {t.onboarding.welcomeTitle}
        </h1>
        <p className="text-text-muted mt-1 text-sm">
          {t.onboarding.welcomeSubtitle}
        </p>
      </div>

      {/* ── Progress + Step badge ──────────────────────── */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="text-text text-sm font-semibold">
            {t.onboarding.step1.title}
          </span>
          <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium">
            <ShieldLockAltIcon className="h-3 w-3" />
            {t.onboarding.privacyFirst}
          </span>
        </div>
        <ProgressBar currentStep={1} />
      </div>

      {/* ── Two-Column Content ─────────────────────────── */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left – Why this info? (hidden on mobile) */}
        <div className="hidden space-y-4 lg:block">
          <h3 className="text-text text-sm font-semibold">
            {t.onboarding.step1.whyTitle}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            {t.onboarding.step1.whyDescription}
          </p>

          {/* Feature cards */}
          <div className="space-y-3">
            <div className="border-border flex items-start gap-3 rounded-lg border p-3">
              <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                <CriticalInfoIcon className="text-primary h-4 w-4" />
              </div>
              <div>
                <p className="text-text text-sm font-medium">
                  {t.onboarding.step1.criticalInfoTitle}
                </p>
                <p className="text-text-muted text-xs">
                  {t.onboarding.step1.criticalInfoDesc}
                </p>
              </div>
            </div>

            <div className="border-border flex items-start gap-3 rounded-lg border p-3">
              <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                <EncryptedIcon className="text-primary h-4 w-4" />
              </div>
              <div>
                <p className="text-text text-sm font-medium">
                  {t.onboarding.step1.encryptedTitle}
                </p>
                <p className="text-text-muted text-xs">
                  {t.onboarding.step1.encryptedDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <blockquote className="border-primary/30 border-l-2 pl-4">
            <p className="text-text-muted text-sm italic">
              {t.onboarding.step1.testimonialQuote}
            </p>
            <footer className="text-text-muted mt-1 text-xs">
              — {t.onboarding.step1.testimonialAuthor}
            </footer>
          </blockquote>
        </div>

        {/* Right – Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label={`${t.onboarding.step1.fullNameLabel} ${t.onboarding.step1.fullNameRequired}`}
            placeholder={t.onboarding.step1.fullNamePlaceholder}
            value={data.fullName}
            onChange={(e) => onChange({ ...data, fullName: e.target.value })}
            error={errors.fullName}
            leftIcon={<UserProfileIcon className="h-4 w-4" />}
          />

          <Textarea
            label={t.onboarding.step1.medicalNoteLabel}
            labelHint={t.onboarding.step1.medicalNoteOptional}
            placeholder={t.onboarding.step1.medicalNotePlaceholder}
            helperText={t.onboarding.step1.medicalNoteHelper}
            value={data.medicalNote}
            onChange={(e) => onChange({ ...data, medicalNote: e.target.value })}
            leftIcon={<NoteIcon className="h-4 w-4" />}
          />

          {/* Check-in Preferences */}
          <div className="space-y-3">
            <p className="text-text text-sm font-semibold">
              {t.onboarding.step1.checkInPreferences}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPreference("morning")}
                className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                  data.checkInPreference === "morning"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    data.checkInPreference === "morning"
                      ? "bg-primary/15"
                      : "bg-surface-alt"
                  }`}
                >
                  <SunriseIcon
                    className={`h-5 w-5 ${
                      data.checkInPreference === "morning"
                        ? "text-primary"
                        : "text-text-muted"
                    }`}
                  />
                </div>
                <span className="text-text text-sm font-medium">
                  {t.onboarding.step1.morning}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPreference("evening")}
                className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                  data.checkInPreference === "evening"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    data.checkInPreference === "evening"
                      ? "bg-primary/15"
                      : "bg-surface-alt"
                  }`}
                >
                  <MoonStarIcon
                    className={`h-5 w-5 ${
                      data.checkInPreference === "evening"
                        ? "text-primary"
                        : "text-text-muted"
                    }`}
                  />
                </div>
                <span className="text-text text-sm font-medium">
                  {t.onboarding.step1.evening}
                </span>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={onSkip}
              className="text-text-muted hover:text-text text-sm font-medium transition-colors"
            >
              {t.onboarding.skipForNow}
            </button>
            <Button
              type="submit"
              rightIcon={<ArrowRightIcon className="h-4 w-4" />}
            >
              {t.onboarding.next}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
