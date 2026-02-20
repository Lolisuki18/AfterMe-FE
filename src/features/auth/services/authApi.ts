import { api } from "@/services";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

/**
 * Auth API service — skeleton cho các auth endpoints.
 */
export const authApi = {
  login: (payload: LoginPayload) =>
    api.post<AuthResponse>("/auth/login", payload),

  logout: () => api.post("/auth/logout"),

  me: () => api.get("/auth/me"),
};
