// ─── Auth Store: Mock authentication with localStorage ────────────────────────

const STORAGE_KEYS = {
  TOKEN: "afterme_token",
  USER: "afterme_current_user",
  USERS: "afterme_users",
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────

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
  messageKey: string; // translation key for i18n
  user?: AuthUser;
}

// ─── Default mock user (when no one has registered yet) ───────────────────────

const MOCK_USER: StoredUser = {
  id: "mock-001",
  name: "Admin",
  email: "admin@afterme.app",
  password: "123456",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const generateToken = (email: string) => btoa(`${email}:${Date.now()}`);

// ─── LocalStorage helpers ─────────────────────────────────────────────────────

const getUsers = (): StoredUser[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USERS);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
};

const saveUser = (user: StoredUser): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

const findByEmail = (email: string): StoredUser | undefined =>
  getUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());

const setToken = (token: string): void =>
  localStorage.setItem(STORAGE_KEYS.TOKEN, token);

const getToken = (): string | null => localStorage.getItem(STORAGE_KEYS.TOKEN);

const removeToken = (): void => localStorage.removeItem(STORAGE_KEYS.TOKEN);

const setCurrentUser = (user: AuthUser): void =>
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));

const getCurrentUser = (): AuthUser | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
};

const clearSession = (): void => {
  removeToken();
  localStorage.removeItem(STORAGE_KEYS.USER);
};

// ─── Mock Auth Actions ────────────────────────────────────────────────────────

const login = async (payload: LoginPayload): Promise<AuthResult> => {
  await delay(1000);

  const users = getUsers();
  let matched = users.find(
    (u) =>
      u.email.toLowerCase() === payload.email.toLowerCase() &&
      u.password === payload.password,
  );

  // Fallback to built-in mock user when nobody has registered yet
  if (!matched && users.length === 0) {
    if (
      payload.email.toLowerCase() === MOCK_USER.email.toLowerCase() &&
      payload.password === MOCK_USER.password
    ) {
      matched = MOCK_USER;
    }
  }

  if (!matched) {
    return { success: false, messageKey: "auth.login.errorInvalidCredentials" };
  }

  const token = generateToken(matched.email);
  setToken(token);

  const authUser: AuthUser = {
    id: matched.id,
    name: matched.name,
    email: matched.email,
  };
  setCurrentUser(authUser);

  return {
    success: true,
    messageKey: "auth.login.successMessage",
    user: authUser,
  };
};

const register = async (payload: RegisterPayload): Promise<AuthResult> => {
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

  saveUser(newUser);

  return { success: true, messageKey: "auth.register.successMessage" };
};

// ─── Public API ───────────────────────────────────────────────────────────────

export const authStore = {
  login,
  register,
  getToken,
  getCurrentUser,
  clearSession,
  isAuthenticated: () => !!getToken(),
};
