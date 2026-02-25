import { useLanguage } from "@/app/useLanguage";

import { ProgressBar } from "./ProgressBar";
import type { Step2ProfileProps } from "../interface";

const inputClass =
  "border-border bg-bg text-text placeholder:text-text-muted w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all";

export const Step2Profile = ({
  data,
  onChange,
  onNext,
  onBack,
}: Step2ProfileProps) => {
  const { t } = useLanguage();
  const o = t.onboarding;
  const p = o.profile;

  const isValid =
    data.firstName.trim() &&
    data.lastName.trim() &&
    data.email.trim() &&
    data.phone.trim();

  return (
    <>
      <ProgressBar currentStep={2} />

      <h1 className="text-navy dark:text-text mb-2 text-center text-2xl font-bold sm:text-3xl">
        {p.title}
      </h1>
      <p className="text-text-muted mb-8 text-center text-sm">{p.subtitle}</p>

      {/* Form grid */}
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              {p.firstName}
              <span className="text-error ml-0.5">{p.required}</span>
            </label>
            <input
              className={inputClass}
              value={data.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
            />
          </div>
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              {p.lastName}
              <span className="text-error ml-0.5">{p.required}</span>
            </label>
            <input
              className={inputClass}
              value={data.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              {p.email}
              <span className="text-error ml-0.5">{p.required}</span>
            </label>
            <input
              type="email"
              className={inputClass}
              value={data.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </div>
          <div>
            <label className="text-text mb-1 block text-sm font-medium">
              {p.phone}
              <span className="text-error ml-0.5">{p.required}</span>
            </label>
            <input
              type="tel"
              className={inputClass}
              value={data.phone}
              onChange={(e) => onChange("phone", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="text-text mb-1 block text-sm font-medium">
            {p.hearAboutUs}{" "}
            <span className="text-text-muted">{p.optional}</span>
          </label>
          <select
            className={inputClass}
            value={data.hearAboutUs}
            onChange={(e) => onChange("hearAboutUs", e.target.value)}
          >
            <option value="">{p.hearAboutUsPlaceholder}</option>
            {p.hearOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
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
