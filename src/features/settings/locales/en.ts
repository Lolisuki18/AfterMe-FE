export const settingsEn = {
  accountSettings: {
    // ── Navigation ─────────────────────────────────────────────────────
    nav: {
      personalInfo: "Personal Info",
      security: "Security",
      privacy: "Privacy",
      notifications: "Notifications",
    },

    // ── Personal Info ──────────────────────────────────────────────────
    personal: {
      title: "Personal Info",
      subtitle: "Manage your personal details and contact information.",
      firstName: "First Name",
      lastName: "Last Name",
      universityEmail: "University Email",
      emailHelper:
        "We'll use this for account recovery and critical notifications.",
      phoneNumber: "Phone Number",
      saveChanges: "Save Changes",
    },

    // ── Security ───────────────────────────────────────────────────────
    security: {
      title: "Security Settings",
      subtitle: "Update your password and secure your account.",
      password: "Password",
      lastChanged: "Last changed {time}",
      changePassword: "Change Password",
      twoFactor: "Two-Factor Authentication",
      twoFactorDesc: "Add an extra layer of security to your account.",
    },

    // ── Danger Zone ────────────────────────────────────────────────────
    danger: {
      title: "Danger Zone",
      description:
        "Permanently remove your Personal Info and all of its contents from the AfterMe platform. This action is not reversible, so please continue with caution.",
      deleteAccount: "Delete Account & Erase All Data",
    },
  },
};

export type SettingsTranslations = typeof settingsEn;
