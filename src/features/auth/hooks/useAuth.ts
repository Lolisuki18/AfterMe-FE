import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authStore } from "../store/authStore";
import type { LoginFormData } from "../schemas/authSchemas";
import type { RegisterFormData } from "../schemas/authSchemas";

type AuthStatus = "idle" | "loading" | "success" | "error";

interface AuthState {
  status: AuthStatus;
  message: string;
}

// ─────────────────────────────────────────────────────────────────────────────
export const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginState, setLoginState] = useState<AuthState>({
    status: "idle",
    message: "",
  });
  const [registerState, setRegisterState] = useState<AuthState>({
    status: "idle",
    message: "",
  });

  // ─── LOGIN ─────────────────────────────────────────────────────────────────
  const login = async (data: LoginFormData): Promise<void> => {
    setLoginState({ status: "loading", message: "" });

    try {
      const result = await authStore.login({
        email: data.email,
        password: data.password,
      });

      if (!result.success) {
        setLoginState({ status: "error", message: result.messageKey });
        return;
      }

      setLoginState({ status: "success", message: result.messageKey });

      // Redirect to the page they were trying to visit, or /dashboard
      const from =
        (location.state as { from?: { pathname: string } })?.from?.pathname ??
        "/dashboard";
      setTimeout(() => navigate(from, { replace: true }), 1200);
    } catch {
      setLoginState({ status: "error", message: "auth.login.errorGeneral" });
    }
  };

  // ─── REGISTER ──────────────────────────────────────────────────────────────
  const register = async (
    data: Omit<RegisterFormData, "confirmPassword">,
  ): Promise<void> => {
    setRegisterState({ status: "loading", message: "" });

    try {
      const result = await authStore.register({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (!result.success) {
        setRegisterState({ status: "error", message: result.messageKey });
        return;
      }

      setRegisterState({ status: "success", message: result.messageKey });
      setTimeout(() => navigate("/login"), 1500);
    } catch {
      setRegisterState({
        status: "error",
        message: "auth.register.errorGeneral",
      });
    }
  };

  // ─── LOGOUT ────────────────────────────────────────────────────────────────
  const logout = () => {
    authStore.clearSession();
    navigate("/login");
  };

  return { login, register, logout, loginState, registerState };
};
