import { apiClient } from "./axios";
import type { AxiosRequestConfig } from "axios";

/**
 * Base API service — wrapper gọn cho CRUD operations.
 * Các feature service sẽ extend từ đây.
 *
 * Ví dụ:
 *   const users = await api.get<User[]>("/users");
 *   await api.post("/users", { name: "John" });
 */
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    apiClient.get<T>(url, config).then((res) => res.data),

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiClient.post<T>(url, data, config).then((res) => res.data),

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiClient.put<T>(url, data, config).then((res) => res.data),

  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiClient.patch<T>(url, data, config).then((res) => res.data),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    apiClient.delete<T>(url, config).then((res) => res.data),
};
