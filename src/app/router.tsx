import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  DashboardLayout,
  MainLayout,
  OnboardingLayout,
} from "@/shared/layouts";

// Feature page imports (lazy load cho performance)
import { lazy, Suspense } from "react";
import { HomePage } from "@/features/home";

const NotFoundPage = lazy(
  () => import("@/features/not-found/page/NotFoundPage"),
);

const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));
const DashboardPage = lazy(
  () => import("@/features/dashboard/pages/DashboardPage"),
);
const OnboardingPage = lazy(
  () => import("@/features/onboarding/page/OnboardingPage"),
);
const CreateReminderPage = lazy(
  () => import("@/features/reminders/pages/CreateReminderPage"),
);
const SettingsPage = lazy(
  () => import("@/features/dashboard/pages/SettingsPage"),
);
const PersonalInfoPage = lazy(
  () => import("@/features/settings/pages/PersonalInfoPage"),
);
const SecurityPage = lazy(
  () => import("@/features/settings/pages/SecurityPage"),
);
const NotificationsPage = lazy(
  () => import("@/features/settings/pages/NotificationsPage"),
);
const EmergencyContactsPage = lazy(
  () => import("@/features/emergency-contacts/pages/EmergencyContactsPage"),
);
const DigitalVaultPage = lazy(
  () => import("@/features/digital-vault/pages/DigitalVaultPage"),
);
const LifestyleAssistantPage = lazy(
  () => import("@/features/lifestyle/pages/LifestyleAssistantPage"),
);
const FamilyDashboardPage = lazy(
  () => import("@/features/family/pages/FamilyDashboardPage"),
);
const ActivityLogPage = lazy(
  () => import("@/features/activity/pages/ActivityLogPage"),
);
const SubscriptionPage = lazy(
  () => import("@/features/subscription/pages/SubscriptionPage"),
);
const PrivacyCenterPage = lazy(
  () => import("@/features/privacy/pages/PrivacyCenterPage"),
);
const PricingPage = lazy(() => import("@/features/pricing/pages/PricingPage"));
const WellbeingPage = lazy(
  () => import("@/features/wellbeing/pages/WellbeingPage"),
);
const EmergencyAlertPage = lazy(
  () => import("@/features/emergency-alert/pages/EmergencyAlertPage"),
);
const GracePeriodPage = lazy(
  () => import("@/features/grace-period/pages/GracePeriodPage"),
);
const LandingPage = lazy(() => import("@/features/landing/pages/LandingPage"));
const ReferralPage = lazy(
  () => import("@/features/referral/pages/ReferralPage"),
);
const FamilyLinkPage = lazy(
  () => import("@/features/family-link/pages/FamilyLinkPage"),
);
const AiSetupPage = lazy(() => import("@/features/ai-setup/pages/AiSetupPage"));
const SosTriggerPage = lazy(
  () => import("@/features/sos-trigger/pages/SosTriggerPage"),
);

const PageLoader = () => (
  <div className="flex h-screen items-center justify-center">
    <p className="text-gray-500">Loading...</p>
  </div>
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Auth Routes - pages manage their own full-page split-screen layout */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Onboarding Routes - Sử dụng OnboardingLayout */}
          <Route element={<OnboardingLayout />}>
            <Route path="/onboarding" element={<OnboardingPage />} />
          </Route>

          {/* Public Routes - Sử dụng MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/wellbeing" element={<WellbeingPage />} />
            <Route path="/privacy" element={<PrivacyCenterPage />} />
          </Route>

          {/* Protected Routes - Sử dụng DashboardLayout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/settings" element={<SettingsPage />} />
            <Route
              path="/dashboard/account"
              element={<Navigate to="/dashboard/account/personal" replace />}
            />
            <Route
              path="/dashboard/account/personal"
              element={<PersonalInfoPage />}
            />
            <Route
              path="/dashboard/account/security"
              element={<SecurityPage />}
            />
            <Route
              path="/dashboard/account/notifications"
              element={<NotificationsPage />}
            />
            <Route
              path="/dashboard/emergency-contacts"
              element={<EmergencyContactsPage />}
            />
            <Route
              path="/dashboard/digital-vault"
              element={<DigitalVaultPage />}
            />
            <Route
              path="/dashboard/lifestyle"
              element={<LifestyleAssistantPage />}
            />
            <Route path="/dashboard/family" element={<FamilyDashboardPage />} />
            <Route
              path="/dashboard/activity-log"
              element={<ActivityLogPage />}
            />
            <Route
              path="/dashboard/subscription"
              element={<SubscriptionPage />}
            />
            <Route path="/dashboard/referral" element={<ReferralPage />} />
            <Route path="/reminders/new" element={<CreateReminderPage />} />
          </Route>

          {/* Standalone pages – no layout wrapper */}
          <Route path="/emergency-alert" element={<EmergencyAlertPage />} />
          <Route path="/grace-period" element={<GracePeriodPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/family-link" element={<FamilyLinkPage />} />
          <Route path="/ai-setup" element={<AiSetupPage />} />
          <Route path="/sos-trigger" element={<SosTriggerPage />} />

          {/* 404 - Not Found */}
          <Route path="/404" element={<NotFoundPage />} />

          {/* Redirect tất cả route không tồn tại về 404 */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
