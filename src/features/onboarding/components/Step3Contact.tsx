import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Input, Select, Button, Toggle } from "@/shared/components";
import { ProgressBar } from "./ProgressBar";
import { ContactCardIcon, UserProfileIcon, RelationshipIcon, PhoneClassicIcon, BellNotifyIcon, ShieldLockAltIcon, CheckCircleFilledIcon } from "@/shared/icon";
import type { ContactData } from "../store/onboardingStore";

interface Step3ContactProps {
  data: ContactData;
  onChange: (data: ContactData) => void;
  onComplete: () => void;
  onBack: () => void;
}

export const Step3Contact = ({
  data,
  onChange,
  onComplete,
  onBack,
}: Step3ContactProps) => {
  const { t } = useLanguage();
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>(
    {},
  );

  const relationshipOptions = Object.entries(
    t.onboarding.step3.relationships,
  ).map(([value, label]) => ({ value, label }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!data.fullName.trim()) newErrors.fullName = "Required";
    if (!data.phone.trim()) newErrors.phone = "Required";
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onComplete();
  };

  return (
    <div className="space-y-6">
      {/* ── Progress ──────────────────────────────────── */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium">
            {t.onboarding.step3.emergencyContact}
          </span>
        </div>
        <ProgressBar currentStep={3} />
      </div>

      {/* ── Card header ───────────────────────────────── */}
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
          <ContactCardIcon className="text-primary h-5 w-5" />
        </div>
        <div>
          <h1 className="text-text text-lg font-bold break-words sm:text-xl">
            {t.onboarding.step3.title}
          </h1>
          <p className="text-text-muted mt-1 text-sm leading-relaxed break-words">
            {t.onboarding.step3.subtitle}
          </p>
        </div>
      </div>

      {/* ── Form ──────────────────────────────────────── */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label={t.onboarding.step3.fullNameLabel}
            placeholder={t.onboarding.step3.fullNamePlaceholder}
            value={data.fullName}
            onChange={(e) => onChange({ ...data, fullName: e.target.value })}
            error={errors.fullName}
            leftIcon={<UserProfileIcon className="h-4 w-4" />}
          />

          <Select
            label={t.onboarding.step3.relationshipLabel}
            placeholder={t.onboarding.step3.relationshipPlaceholder}
            options={relationshipOptions}
            value={data.relationship}
            onChange={(e) =>
              onChange({ ...data, relationship: e.target.value })
            }
            leftIcon={<RelationshipIcon className="h-4 w-4" />}
          />
        </div>

        <Input
          label={t.onboarding.step3.phoneLabel}
          placeholder={t.onboarding.step3.phonePlaceholder}
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          error={errors.phone}
          leftIcon={<PhoneClassicIcon className="h-4 w-4" />}
        />

        {/* Notify toggle */}
        <div className="border-border flex items-center justify-between rounded-lg border p-4">
          <div className="flex items-start gap-3">
            <BellNotifyIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="text-text text-sm font-medium break-words">
                {t.onboarding.step3.notifyTitle}
              </p>
              <p className="text-text-muted text-xs break-words">
                {t.onboarding.step3.notifyDesc}
              </p>
            </div>
          </div>
          <Toggle
            checked={data.notifyContact}
            onChange={(checked) =>
              onChange({ ...data, notifyContact: checked })
            }
          />
        </div>

        {/* Complete button */}
        <Button
          type="submit"
          fullWidth
          rightIcon={<CheckCircleFilledIcon className="h-4 w-4" />}
        >
          {t.onboarding.completeSetup}
        </Button>
      </form>

      {/* ── Encrypted note ────────────────────────────── */}
      <div className="flex items-center justify-center gap-2 pb-2">
        <ShieldLockAltIcon className="text-text-muted h-4 w-4 shrink-0" />
        <p className="text-text-muted text-center text-xs break-words">
          {t.onboarding.dataEncryptedNote}
        </p>
      </div>

      {/* ── Back ──────────────────────────────────────── */}
      <div className="flex justify-start">
        <Button variant="ghost" onClick={onBack}>
          {t.onboarding.back}
        </Button>
      </div>
    </div>
  );
};
