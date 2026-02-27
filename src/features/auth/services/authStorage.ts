// ─── LocalStorage service for auth token & user persistence ──────────────────

const STORAGE_KEYS = {
  TOKEN: "afterme_token",
  USER: "afterme_current_user",
  USERS: "afterme_users",
} as const;

// ─── Stored user shape ────────────────────────────────────────────────────────
export interface StoredUser {
  id: string;
  name: string;
  email: string;
  password: string; // stored as plain text for mock purposes
}

// ─── Users registry ──────────────────────────────────────────────────────────
export const authStorage = {
  /** Retrieve all registered users from LocalStorage */
  getUsers(): StoredUser[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USERS);
      return raw ? (JSON.parse(raw) as StoredUser[]) : [];
    } catch {
      return [];
    }
  },

  /** Persist a newly registered user */
  saveUser(user: StoredUser): void {
    const users = authStorage.getUsers();
    users.push(user);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },

  /** Find a user by email */
  findByEmail(email: string): StoredUser | undefined {
    return authStorage
      .getUsers()
      .find((u) => u.email.toLowerCase() === email.toLowerCase());
  },

  // ─── Token helpers ──────────────────────────────────────────────────────────
  setToken(token: string): void {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
  },

  getToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
  },

  removeToken(): void {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  },

  // ─── Current user session ───────────────────────────────────────────────────
  setCurrentUser(user: Omit<StoredUser, "password">): void {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  getCurrentUser(): Omit<StoredUser, "password"> | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER);
      return raw ? (JSON.parse(raw) as Omit<StoredUser, "password">) : null;
    } catch {
      return null;
    }
  },

  clearSession(): void {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
  },
};
