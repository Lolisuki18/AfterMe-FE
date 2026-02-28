import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import { appConfig } from "@/app/config";
import { useAuthStore } from "@/features/auth/store/authStore";

export const apiClient = axios.create({
  baseURL: appConfig.apiUrl,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().clearSession();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
