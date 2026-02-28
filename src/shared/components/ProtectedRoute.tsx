import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authStore } from "@/features/auth/store/authStore";

/**
 * ProtectedRoute — redirects unauthenticated users to /login.
 * Preserves the intended destination via `state.from` so we can
 * redirect back after login.
 */
export const ProtectedRoute = () => {
  const location = useLocation();

  if (!authStore.isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
