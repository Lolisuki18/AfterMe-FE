import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authStore } from "@/features/auth/store/authStore";

/**
 * ProtectedRoute — redirects unauthenticated users to /login.
 * If authenticated but not onboarded, redirects to /onboarding.
 * Preserves the intended destination via `state.from` so we can
 * redirect back after login.
 */
export const ProtectedRoute = () => {
  const location = useLocation();

  if (!authStore.isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!authStore.isOnboarded()) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
};

/**
 * OnboardingRoute — requires auth but NOT onboarding completion.
 * If already onboarded, redirect to dashboard.
 */
export const OnboardingRoute = () => {
  const location = useLocation();

  if (!authStore.isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (authStore.isOnboarded()) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
