import { sharedEn } from "@/shared/locales/en";
import { homeEn } from "@/features/home/locales/en";
import { onboardingEn } from "@/features/onboarding/locales/en";
import { dashboardEn } from "@/features/dashboard/locales/en";
import { remindersEn } from "@/features/reminders/locales/en";
import { authEn } from "@/features/auth/locales/en";
import { settingsEn } from "@/features/settings/locales/en";
import { emergencyEn } from "@/features/emergency-contacts/locales/en";
import { vaultEn } from "@/features/digital-vault/locales/en";
import { lifestyleEn } from "@/features/lifestyle/locales/en";
import { familyEn } from "@/features/family/locales/en";
import { activityEn } from "@/features/activity/locales/en";
import { subscriptionEn } from "@/features/subscription/locales/en";
import { privacyEn } from "@/features/privacy/locales/en";
import { pricingEn } from "@/features/pricing/locales/en";
import { wellbeingEn } from "@/features/wellbeing/locales/en";
import { emergencyAlertEn } from "@/features/emergency-alert/locales/en";
import { gracePeriodEn } from "@/features/grace-period/locales/en";
import { landingEn } from "@/features/landing/locales/en";
import { referralEn } from "@/features/referral/locales/en";
import { familyLinkEn } from "@/features/family-link/locales/en";

export const en = {
  ...sharedEn,
  ...homeEn,
  ...onboardingEn,
  ...dashboardEn,
  ...remindersEn,
  ...authEn,
  ...settingsEn,
  ...emergencyEn,
  ...vaultEn,
  ...lifestyleEn,
  ...familyEn,
  ...activityEn,
  ...subscriptionEn,
  ...privacyEn,
  ...pricingEn,
  ...wellbeingEn,
  ...emergencyAlertEn,
  ...gracePeriodEn,
  ...landingEn,
  ...referralEn,
  ...familyLinkEn,
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
