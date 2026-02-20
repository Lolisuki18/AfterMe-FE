import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/shared/layouts/DashboardLayout";

// Feature page imports (lazy load cho performance)
import { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const DashboardPage = lazy(
  () => import("@/features/dashboard/pages/DashboardPage"),
);
const UserListPage = lazy(() => import("@/features/user/pages/UserListPage"));

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
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes — wrapped in DashboardLayout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UserListPage />} />
          </Route>

          {/* Redirect */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
