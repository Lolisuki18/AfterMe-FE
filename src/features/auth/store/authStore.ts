import { create } from "zustand";

// ─── Types ────────────────────────────────────────────────────────────────────

const STORAGE_KEYS = {
  TOKEN: "afterme_token",
  USER: "afterme_current_user",
  USERS: "afterme_users",
} as const;

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  messageKey: string;
  user?: AuthUser;
}

// ─── Default mock user ────────────────────────────────────────────────────────

const MOCK_USER: StoredUser = {
  id: "mock-001",
  name: "Admin",
  email: "admin@afterme.app",
  password: "123456",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const generateToken = (email: string) => btoa(`${email}:${Date.now()}`);

// ─── localStorage helpers ─────────────────────────────────────────────────────

const getUsers = (): StoredUser[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USERS);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
};

const saveUserToStorage = (user: StoredUser): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

const findByEmail = (email: string): StoredUser | undefined =>
  getUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());

// ─── Zustand store ────────────────────────────────────────────────────────────

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;

  // Actions
  login: (payload: LoginPayload) => Promise<AuthResult>;
  register: (payload: RegisterPayload) => Promise<AuthResult>;
  getCurrentUser: () => AuthUser | null;
  getToken: () => string | null;
  clearSession: () => void;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  // ─── Initial state (hydrate from localStorage) ────────────────────────────
  token: localStorage.getItem(STORAGE_KEYS.TOKEN),
  user: (() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER);
      return raw ? (JSON.parse(raw) as AuthUser) : null;
    } catch {
      return null;
    }
  })(),
  isAuthenticated: !!localStorage.getItem(STORAGE_KEYS.TOKEN),

  // ─── Login ────────────────────────────────────────────────────────────────
  login: async (payload) => {
    await delay(1000);

    const users = getUsers();
    let matched = users.find(
      (u) =>
        u.email.toLowerCase() === payload.email.toLowerCase() &&
        u.password === payload.password,
    );

    if (!matched && users.length === 0) {
      if (
        payload.email.toLowerCase() === MOCK_USER.email.toLowerCase() &&
        payload.password === MOCK_USER.password
      ) {
        matched = MOCK_USER;
      }
    }

    if (!matched) {
      return {
        success: false,
        messageKey: "auth.login.errorInvalidCredentials",
      };
    }

    const token = generateToken(matched.email);
    const authUser: AuthUser = {
      id: matched.id,
      name: matched.name,
      email: matched.email,
    };

    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(authUser));

    set({ token, user: authUser, isAuthenticated: true });

    return {
      success: true,
      messageKey: "auth.login.successMessage",
      user: authUser,
    };
  },

  // ─── Register ─────────────────────────────────────────────────────────────
  register: async (payload) => {
    await delay(1000);

    const existing = findByEmail(payload.email);
    if (existing) {
      return { success: false, messageKey: "auth.register.errorEmailTaken" };
    }

    const newUser: StoredUser = {
      id: `user-${Date.now()}`,
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };

    saveUserToStorage(newUser);
    return { success: true, messageKey: "auth.register.successMessage" };
  },

  // ─── Getters ──────────────────────────────────────────────────────────────
  getCurrentUser: () => get().user,
  getToken: () => get().token,

  // ─── Clear session ────────────────────────────────────────────────────────
  clearSession: () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    set({ token: null, user: null, isAuthenticated: false });
  },
}));

// ─── Backwards-compatible object API ──────────────────────────────────────────
// Lets existing code (e.g. ProtectedRoute, axios interceptor) call
// `authStore.isAuthenticated()` without refactoring everything at once.

export const authStore = {
  login: (payload: LoginPayload) => useAuthStore.getState().login(payload),
  register: (payload: RegisterPayload) =>
    useAuthStore.getState().register(payload),
  getToken: () => useAuthStore.getState().token,
  getCurrentUser: () => useAuthStore.getState().user,
  clearSession: () => useAuthStore.getState().clearSession(),
  isAuthenticated: () => useAuthStore.getState().isAuthenticated,
};
