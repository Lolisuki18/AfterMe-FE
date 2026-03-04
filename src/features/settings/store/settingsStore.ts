const STORAGE_KEY = "afterme_account_settings";

export interface AccountProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  twoFactorEnabled: boolean;
  passwordLastChanged: string;
}

const defaultProfile: AccountProfile = {
  firstName: "Ninh",
  lastName: "Lê",
  email: "Lolisuki@gmail.com",
  phone: "0982677408",
  twoFactorEnabled: true,
  passwordLastChanged: "3 months ago",
};

function load(): AccountProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as AccountProfile;
  } catch {
    /* ignore */
  }
  return { ...defaultProfile };
}

function persist(data: AccountProfile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const settingsStore = {
  getProfile: (): AccountProfile => load(),

  updateProfile: (updates: Partial<AccountProfile>) => {
    const data = load();
    Object.assign(data, updates);
    persist(data);
    return data;
  },

  toggleTwoFactor: () => {
    const data = load();
    data.twoFactorEnabled = !data.twoFactorEnabled;
    persist(data);
    return data.twoFactorEnabled;
  },

  deleteAccount: () => {
    localStorage.removeItem(STORAGE_KEY);
  },
};
