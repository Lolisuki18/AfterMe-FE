import { useLanguage } from "@/app/useLanguage";
import type { OnboardingFormData } from "../interface";
import { ProgressBar } from "./ProgressBar";

interface Step5ContactProps {
  data: OnboardingFormData;
  onChange: (field: keyof OnboardingFormData, value: string | boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

const inputClass =
  "border-border bg-bg text-text placeholder:text-text-muted w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50";

export const Step5Contact = ({
  data,
  onChange,
  onNext,
  onBack,
}: Step5ContactProps) => {
  const { t } = useLanguage();
  const o = t.onboarding;
  const c = o.contact;

  const isValid =
    data.skipContact ||
    (data.contactName.trim() &&
      data.contactEmail.trim() &&
      data.contactPhone.trim());

  return (
    <>
      <ProgressBar currentStep={5} />

      <h1 className="text-navy dark:text-text mb-2 text-center text-2xl font-bold sm:text-3xl">
        {c.title}
      </h1>
      <p className="text-text-muted mx-auto mb-8 max-w-sm text-center text-sm">
        {c.subtitle}
      </p>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="text-text mb-1 block text-sm font-medium">
            {c.name}
            <span className="text-error ml-0.5">{c.required}</span>
          </label>
          <input
            className={inputClass}
            disabled={data.skipContact}
            value={data.contactName}
            onChange={(e) => onChange("contactName", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              {c.email}
              <span className="text-error ml-0.5">{c.required}</span>
            </label>
            <input
              type="email"
              className={inputClass}
              disabled={data.skipContact}
              value={data.contactEmail}
              onChange={(e) => onChange("contactEmail", e.target.value)}
            />
          </div>
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              {c.phone}
              <span className="text-error ml-0.5">{c.required}</span>
            </label>
            <input
              type="tel"
              className={inputClass}
              disabled={data.skipContact}
              value={data.contactPhone}
              onChange={(e) => onChange("contactPhone", e.target.value)}
            />
          </div>
        </div>

        {/* Note + Skip */}
        <div className="flex items-start justify-between gap-4 pt-1">
          <p className="text-text-muted max-w-xs text-xs">{c.note}</p>
          <label className="flex shrink-0 cursor-pointer items-center gap-2 text-sm">
            <input
              type="radio"
              checked={data.skipContact}
              onChange={() => onChange("skipContact", !data.skipContact)}
              className="accent-primary"
            />
            <span className="text-text-muted">{c.skip}</span>
          </label>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-text-muted hover:text-text cursor-pointer text-sm transition-colors"
        >
          {o.back}
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className="bg-primary hover:bg-primary-hover disabled:bg-border cursor-pointer rounded-xl px-8 py-3 font-semibold text-white transition-colors disabled:cursor-not-allowed"
        >
          {o.next}
        </button>
      </div>
    </>
  );
};
