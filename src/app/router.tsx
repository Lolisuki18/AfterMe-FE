import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  DashboardLayout,
  MainLayout,
  AuthLayout,
  OnboardingLayout,
} from "@/shared/layouts";

// Feature page imports (lazy load cho performance)
import { lazy, Suspense } from "react";
import { HomePage } from "@/features/home";

const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const DashboardPage = lazy(
  () => import("@/features/dashboard/pages/DashboardPage"),
);
const UserListPage = lazy(() => import("@/features/user/pages/UserListPage"));
const OnboardingPage = lazy(
  () => import("@/features/onboarding/page/OnboardingPage"),
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
          {/* Auth Routes - Sử dụng AuthLayout */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

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
            <Route path="/users" element={<UserListPage />} />
          </Route>

          {/* Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
