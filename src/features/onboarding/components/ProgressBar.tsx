import { useLanguage } from "@/app/useLanguage";

interface ProgressBarProps {
  currentStep: number; // 1-3
  totalSteps?: number;
}

export const ProgressBar = ({
  currentStep,
  totalSteps = 3,
}: ProgressBarProps) => {
  const { t } = useLanguage();
  const percent = Math.round((currentStep / totalSteps) * 100);

  const stepLabel = t.onboarding.stepOf
    .replace("{current}", String(currentStep))
    .replace("{total}", String(totalSteps));

  const percentLabel = t.onboarding.percentCompleted.replace(
    "{percent}",
    String(percent),
  );

  return (
    <div className="mb-6">
      <div className="text-text-muted mb-2 flex items-center justify-between text-xs font-medium">
        <span className="tracking-wider uppercase">{stepLabel}</span>
        <span>{percentLabel}</span>
      </div>
      <div className="bg-border h-1.5 w-full overflow-hidden rounded-full">
        <div
          className="bg-primary h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
