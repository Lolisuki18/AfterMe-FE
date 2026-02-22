import { useLanguage } from "@/app/useLanguage";

interface ProgressBarProps {
  currentStep: number; // 1-5 (steps 1–5; step 6 is completion)
  totalSteps?: number;
}

export const ProgressBar = ({
  currentStep,
  totalSteps = 5,
}: ProgressBarProps) => {
  const { t } = useLanguage();
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="mb-8">
      <div className="text-text-muted mb-2 flex items-center justify-between text-sm">
        <span>
          {t.onboarding.step} {currentStep} {t.onboarding.of} {totalSteps}
        </span>
        <span>
          {percent}
          {t.onboarding.percentComplete}
        </span>
      </div>
      <div className="bg-border h-1.5 w-full rounded-full">
        <div
          className="bg-primary h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
