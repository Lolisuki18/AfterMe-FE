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
      universityEmail: "Email",
      emailHelper:
        "We'll use this for account recovery and critical notifications.",
      phoneNumber: "Phone Number",
      saveChanges: "Save Changes",
      familyMembers: "Family Members",
      viewAll: "View All",
      noFamilyMembers: "No family members added yet.",
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
      changePasswordTitle: "Change Password",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm New Password",
      updatePassword: "Update Password",
      cancel: "Cancel",
      allFieldsRequired: "All fields are required.",
      passwordMinLength: "Password must be at least 6 characters.",
      passwordMismatch: "Passwords do not match.",
      passwordUpdated: "Password updated successfully!",
      // Email change
      email: "Email Address",
      currentEmail: "Current email",
      changeEmail: "Change Email",
      changeEmailTitle: "Change Email Address",
      newEmail: "New Email Address",
      confirmEmail: "Confirm New Email",
      updateEmail: "Update Email",
      emailInvalid: "Please enter a valid email address.",
      emailMismatch: "Email addresses do not match.",
      emailUpdated: "Email updated successfully!",
    },

    // ── Danger Zone ────────────────────────────────────────────────────
    danger: {
      title: "Danger Zone",
      description:
        "Permanently remove your Personal Info and all of its contents from the AfterMe platform. This action is not reversible, so please continue with caution.",
      deleteAccount: "Delete Account & Erase All Data",
      confirmTitle: "Delete Account?",
      confirmDescription:
        "This will permanently delete your account and all associated data. This action cannot be undone.",
      confirmButton: "Yes, Delete My Account",
      cancel: "Cancel",
    },
  },
};

export type SettingsTranslations = typeof settingsEn;
