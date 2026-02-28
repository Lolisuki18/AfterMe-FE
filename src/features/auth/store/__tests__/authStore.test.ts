import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "../authStore";

// Reset store and localStorage before each test
beforeEach(() => {
  useAuthStore.setState({
    user: null,
    token: null,
    isAuthenticated: false,
  });
  localStorage.clear();
});

describe("authStore", () => {
  // ─── Login ──────────────────────────────────────────────────────────────────

  describe("login", () => {
    it("should login with default mock user when no users exist", async () => {
      const result = await useAuthStore.getState().login({
        email: "admin@afterme.app",
        password: "123456",
      });

      expect(result.success).toBe(true);
      expect(result.messageKey).toBe("auth.login.successMessage");
      expect(result.user).toEqual({
        id: "mock-001",
        name: "Admin",
        email: "admin@afterme.app",
      });

      const state = useAuthStore.getState();
      expect(state.isAuthenticated).toBe(true);
      expect(state.user?.email).toBe("admin@afterme.app");
      expect(state.token).toBeTruthy();
    });

    it("should reject invalid credentials", async () => {
      const result = await useAuthStore.getState().login({
        email: "wrong@email.com",
        password: "wrong",
      });

      expect(result.success).toBe(false);
      expect(result.messageKey).toBe("auth.login.errorInvalidCredentials");

      const state = useAuthStore.getState();
      expect(state.isAuthenticated).toBe(false);
      expect(state.user).toBeNull();
    });

    it("should login with a previously registered user", async () => {
      // Register first
      await useAuthStore.getState().register({
        name: "Test User",
        email: "test@example.com",
        password: "pass123",
      });

      // Then login
      const result = await useAuthStore.getState().login({
        email: "test@example.com",
        password: "pass123",
      });

      expect(result.success).toBe(true);
      expect(result.user?.name).toBe("Test User");
    });

    it("should persist token to localStorage after login", async () => {
      await useAuthStore.getState().login({
        email: "admin@afterme.app",
        password: "123456",
      });

      expect(localStorage.getItem("afterme_token")).toBeTruthy();
      expect(localStorage.getItem("afterme_current_user")).toBeTruthy();
    });
  });

  // ─── Register ───────────────────────────────────────────────────────────────

  describe("register", () => {
    it("should register a new user successfully", async () => {
      const result = await useAuthStore.getState().register({
        name: "New User",
        email: "new@example.com",
        password: "secret",
      });

      expect(result.success).toBe(true);
      expect(result.messageKey).toBe("auth.register.successMessage");
    });

    it("should reject duplicate email", async () => {
      await useAuthStore.getState().register({
        name: "First",
        email: "dup@example.com",
        password: "111",
      });

      const result = await useAuthStore.getState().register({
        name: "Second",
        email: "dup@example.com",
        password: "222",
      });

      expect(result.success).toBe(false);
      expect(result.messageKey).toBe("auth.register.errorEmailTaken");
    });

    it("should be case-insensitive for email duplicate check", async () => {
      await useAuthStore.getState().register({
        name: "First",
        email: "User@Email.COM",
        password: "111",
      });

      const result = await useAuthStore.getState().register({
        name: "Second",
        email: "user@email.com",
        password: "222",
      });

      expect(result.success).toBe(false);
    });
  });

  // ─── Clear session ─────────────────────────────────────────────────────────

  describe("clearSession", () => {
    it("should clear user, token, and localStorage", async () => {
      // Login first
      await useAuthStore.getState().login({
        email: "admin@afterme.app",
        password: "123456",
      });
      expect(useAuthStore.getState().isAuthenticated).toBe(true);

      // Clear
      useAuthStore.getState().clearSession();

      const state = useAuthStore.getState();
      expect(state.user).toBeNull();
      expect(state.token).toBeNull();
      expect(state.isAuthenticated).toBe(false);
      expect(localStorage.getItem("afterme_token")).toBeNull();
      expect(localStorage.getItem("afterme_current_user")).toBeNull();
    });
  });

  // ─── Getters ────────────────────────────────────────────────────────────────

  describe("getters", () => {
    it("getCurrentUser returns null when not logged in", () => {
      expect(useAuthStore.getState().getCurrentUser()).toBeNull();
    });

    it("getToken returns null when not logged in", () => {
      expect(useAuthStore.getState().getToken()).toBeNull();
    });

    it("getCurrentUser returns user after login", async () => {
      await useAuthStore.getState().login({
        email: "admin@afterme.app",
        password: "123456",
      });
      expect(useAuthStore.getState().getCurrentUser()).toEqual({
        id: "mock-001",
        name: "Admin",
        email: "admin@afterme.app",
      });
    });
  });
});
