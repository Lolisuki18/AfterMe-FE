import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { ProgressBar } from "./ProgressBar";
import {
  ContactCardIcon,
  UserProfileIcon,
  PhoneClassicIcon,
  ShieldLockAltIcon,
  CheckCircleFilledIcon,
} from "@/shared/icon";
import type { ContactData } from "../store/onboardingStore";

interface Step3ContactProps {
  data: ContactData;
  onChange: (data: ContactData) => void;
  onComplete: () => void;
  onBack: () => void;
  loading?: boolean;
}

export const Step3Contact = ({
  data,
  onChange,
  onComplete,
  onBack,
  loading,
}: Step3ContactProps) => {
  const { t } = useLanguage();
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactData, string>>
  >({});

  const set = <K extends keyof ContactData>(key: K, value: ContactData[K]) => {
    onChange({ ...data, [key]: value });
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!data.fullName.trim()) e.fullName = t.onboarding.step3.required;
    if (!data.relationship) e.relationship = t.onboarding.step3.required;
    if (!data.phone.trim()) e.phone = t.onboarding.step3.required;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onComplete();
  };

  const relationships: { value: string; label: string }[] = [
    { value: "parent", label: t.onboarding.step3.relationships.parent },
    { value: "sibling", label: t.onboarding.step3.relationships.sibling },
    { value: "spouse", label: t.onboarding.step3.relationships.spouse },
    { value: "friend", label: t.onboarding.step3.relationships.friend },
    { value: "roommate", label: t.onboarding.step3.relationships.roommate },
    { value: "other", label: t.onboarding.step3.relationships.other },
  ];

  return (
    <div className="space-y-6">
      {/* ── Progress ──────────────────────────────────── */}
      <ProgressBar currentStep={3} />

      {/* ── Icon header ───────────────────────────────── */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-2xl">
          <ContactCardIcon className="text-primary h-8 w-8" />
        </div>
        <div>
          <h1 className="text-text text-xl font-bold sm:text-2xl">
            {t.onboarding.step3.title}
          </h1>
          <p className="text-text-muted mt-1 text-sm">
            {t.onboarding.step3.subtitle}
          </p>
        </div>
      </div>

      {/* ── Form ──────────────────────────────────────── */}
      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="text-text mb-1.5 flex items-center gap-2 text-sm font-medium">
            <UserProfileIcon className="text-text-muted h-4 w-4" />
            {t.onboarding.step3.fullNameLabel}
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder={t.onboarding.step3.fullNamePlaceholder}
            className={`border-border bg-surface text-text placeholder:text-text-muted w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.fullName
                ? "border-red-400 focus:ring-red-300"
                : "focus:border-primary focus:ring-primary/30"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Relationship */}
        <div>
          <label className="text-text mb-1.5 flex items-center gap-2 text-sm font-medium">
            <span className="text-text-muted h-4 w-4 text-center text-xs">
              ♥
            </span>
            {t.onboarding.step3.relationshipLabel}
          </label>
          <select
            value={data.relationship}
            onChange={(e) => set("relationship", e.target.value)}
            className={`border-border bg-surface text-text w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.relationship
                ? "border-red-400 focus:ring-red-300"
                : "focus:border-primary focus:ring-primary/30"
            }`}
          >
            <option value="">
              {t.onboarding.step3.relationshipPlaceholder}
            </option>
            {relationships.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
          {errors.relationship && (
            <p className="mt-1 text-xs text-red-500">{errors.relationship}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-text mb-1.5 flex items-center gap-2 text-sm font-medium">
            <PhoneClassicIcon className="text-text-muted h-4 w-4" />
            {t.onboarding.step3.phoneLabel}
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder={t.onboarding.step3.phonePlaceholder}
            className={`border-border bg-surface text-text placeholder:text-text-muted w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.phone
                ? "border-red-400 focus:ring-red-300"
                : "focus:border-primary focus:ring-primary/30"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Notify Toggle */}
        <div className="bg-surface-alt flex items-center justify-between rounded-xl p-4">
          <div>
            <p className="text-text text-sm font-medium">
              {t.onboarding.step3.notifyLabel}
            </p>
            <p className="text-text-muted text-xs">
              {t.onboarding.step3.notifyDescription}
            </p>
          </div>
          <button
            type="button"
            onClick={() => set("notifyContact", !data.notifyContact)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
              data.notifyContact ? "bg-primary" : "bg-border"
            }`}
            aria-checked={data.notifyContact}
            role="switch"
          >
            <span
              className={`absolute top-0.5 left-0.5 inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                data.notifyContact ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Submit ────────────────────────────────────── */}
      <div className="space-y-3 pt-2">
        <Button
          onClick={handleSubmit}
          isLoading={loading}
          className="flex w-full items-center justify-center gap-2"
        >
          <CheckCircleFilledIcon className="h-4 w-4" />
          {t.onboarding.step3.completeButton}
        </Button>

        <p className="text-text-muted flex items-center justify-center gap-1.5 text-center text-xs">
          <ShieldLockAltIcon className="h-3.5 w-3.5" />
          {t.onboarding.step3.encryptedNote}
        </p>
      </div>

      {/* ── Back ──────────────────────────────────────── */}
      <div className="flex justify-center">
        <Button variant="ghost" onClick={onBack} className="text-sm">
          {t.onboarding.back}
        </Button>
      </div>
    </div>
  );
};
