import { api } from "@/services";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  createdAt: string;
}

/**
 * User API service — skeleton cho các user endpoints.
 */
export const userApi = {
  getAll: () => api.get<User[]>("/users"),

  getById: (id: string) => api.get<User>(`/users/${id}`),

  create: (data: Omit<User, "id" | "createdAt">) =>
    api.post<User>("/users", data),

  update: (id: string, data: Partial<User>) =>
    api.put<User>(`/users/${id}`, data),

  delete: (id: string) => api.delete(`/users/${id}`),
};
