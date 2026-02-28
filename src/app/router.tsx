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
const UserListPage = lazy(() => import("@/features/user/pages/UserListPage"));
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
const PrivacyPage = lazy(() => import("@/features/settings/pages/PrivacyPage"));
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
            {/* Có thể thêm các route public khác: */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
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
              path="/dashboard/account/privacy"
              element={<PrivacyPage />}
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
            <Route path="/users" element={<UserListPage />} />
            <Route path="/reminders/new" element={<CreateReminderPage />} />
          </Route>

          {/* 404 - Not Found */}
          <Route path="/404" element={<NotFoundPage />} />

          {/* Redirect tất cả route không tồn tại về 404 */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
