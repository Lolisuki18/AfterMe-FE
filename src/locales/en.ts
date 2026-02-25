import { sharedEn } from "@/shared/locales/en";
import { homeEn } from "@/features/home/locales/en";
import { onboardingEn } from "@/features/onboarding/locales/en";

export const en = {
  ...sharedEn,
  ...homeEn,
  ...onboardingEn,
};

export type Translations = typeof en;

// Re-export per-item interfaces so data files can import from here if needed
export type {
  StepItem,
  FeatureItem,
  RiskItem,
  AudienceItem,
  PlanItem,
} from "@/features/home/interface";
