import type { OnboardingFormData } from "./onboarding";

export interface Step1WelcomeProps {
  onNext: () => void;
}

export interface Step2ProfileProps {
  data: OnboardingFormData;
  onChange: (field: keyof OnboardingFormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export interface Step3CheckInProps {
  data: OnboardingFormData;
  onChange: (
    field: keyof OnboardingFormData,
    value: string | "daily" | "weekly",
  ) => void;
  onNext: () => void;
  onBack: () => void;
}

export interface Step4TriggerProps {
  data: OnboardingFormData;
  onChange: (field: keyof OnboardingFormData, value: 1 | 3 | 7) => void;
  onNext: () => void;
  onBack: () => void;
}

export interface Step5ContactProps {
  data: OnboardingFormData;
  onChange: (field: keyof OnboardingFormData, value: string | boolean) => void;
  onNext: () => void;
  onBack: () => void;
}
