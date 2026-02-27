import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStorage } from "../services/authStorage";
import { MOCK_USER } from "../data/authMockData";
import type { LoginFormData } from "../schemas/authSchemas";
import type { RegisterFormData } from "../schemas/authSchemas";

type AuthStatus = "idle" | "loading" | "success" | "error";

interface AuthState {
  status: AuthStatus;
  message: string;
}

// ─── Simulate network latency ─────────────────────────────────────────────────
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// ─── Simple token generator for mock purposes ─────────────────────────────────
const generateToken = (email: string) => btoa(`${email}:${Date.now()}`);

// ─────────────────────────────────────────────────────────────────────────────
export const useAuth = () => {
  const navigate = useNavigate();
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
    await delay(1000);

    try {
      const users = authStorage.getUsers();
      let matchedUser = users.find(
        (u) =>
          u.email.toLowerCase() === data.email.toLowerCase() &&
          u.password === data.password,
      );

      // Fallback to mock user when registry is empty or no match from registered users
      if (!matchedUser && users.length === 0) {
        if (
          data.email.toLowerCase() === MOCK_USER.email.toLowerCase() &&
          data.password === MOCK_USER.password
        ) {
          matchedUser = MOCK_USER;
        }
      }

      if (!matchedUser) {
        setLoginState({
          status: "error",
          message: "auth.login.errorInvalidCredentials",
        });
        return;
      }

      const token = generateToken(matchedUser.email);
      authStorage.setToken(token);
      authStorage.setCurrentUser({
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
      });

      setLoginState({
        status: "success",
        message: "auth.login.successMessage",
      });

      setTimeout(() => navigate("/dashboard"), 1200);
    } catch {
      setLoginState({
        status: "error",
        message: "auth.login.errorGeneral",
      });
    }
  };

  // ─── REGISTER ──────────────────────────────────────────────────────────────
  const register = async (
    data: Omit<RegisterFormData, "confirmPassword">,
  ): Promise<void> => {
    setRegisterState({ status: "loading", message: "" });
    await delay(1000);

    try {
      const existing = authStorage.findByEmail(data.email);
      if (existing) {
        setRegisterState({
          status: "error",
          message: "auth.register.errorEmailTaken",
        });
        return;
      }

      const newUser = {
        id: `user-${Date.now()}`,
        name: data.name,
        email: data.email,
        password: data.password,
      };
      authStorage.saveUser(newUser);

      setRegisterState({
        status: "success",
        message: "auth.register.successMessage",
      });

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
    authStorage.clearSession();
    navigate("/login");
  };

  return { login, register, logout, loginState, registerState };
};
