import { useLanguage } from "@/app/useLanguage";
import { ProgressBar } from "./ProgressBar";
import type { Step1WelcomeProps } from "../interface";

export const Step1Welcome = ({ onNext }: Step1WelcomeProps) => {
  const { t } = useLanguage();
  const o = t.onboarding;

  return (
    <>
      <ProgressBar currentStep={1} />

      {/* Title */}
      <h1 className="text-navy dark:text-text mb-4 text-center text-2xl font-bold sm:text-3xl">
        {o.welcome.title}
      </h1>
      <p className="text-text-muted mb-8 text-center text-base">
        {o.welcome.subtitle}
      </p>

      {/* Cover card */}
      <div className="bg-surface-alt mx-auto mb-10 max-w-md rounded-xl p-6">
        <p className="text-text mb-4 font-semibold">{o.welcome.coverTitle}</p>
        <ol className="space-y-3">
          {o.welcome.items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="text-text text-sm">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* CTA */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="bg-primary hover:bg-primary-hover cursor-pointer rounded-xl px-8 py-3 font-semibold text-white transition-colors"
        >
          {o.getStarted}
        </button>
      </div>
    </>
  );
};
