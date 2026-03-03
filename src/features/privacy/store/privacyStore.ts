const STORAGE_KEY = "afterme_privacy";

export interface PrivacySettings {
  usageAnalytics: boolean;
  crashReports: boolean;
  trustedContactsVisibility: boolean;
}

const DEFAULT: PrivacySettings = {
  usageAnalytics: true,
  crashReports: true,
  trustedContactsVisibility: false,
};

export const privacyStore = {
  get(): PrivacySettings {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      /* ignore */
    }
    return DEFAULT;
  },
  save(data: PrivacySettings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
  toggle(key: keyof PrivacySettings) {
    const current = this.get();
    current[key] = !current[key];
    this.save(current);
    return current;
  },
};
