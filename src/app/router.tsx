import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout, MainLayout, AuthLayout } from "@/shared/layouts";

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

// Temporary HomePage component
const HomePage = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">
        Chào mừng đến với AfterMe
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        Nền tảng quản lý và lưu trữ thông tin quan trọng cho tương lai
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/login"
          className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Đăng nhập
        </a>
        <a
          href="/register"
          className="rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50"
        >
          Đăng ký ngay
        </a>
      </div>
    </div>
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
            {/* Có thể thêm các route auth khác: */}
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
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
