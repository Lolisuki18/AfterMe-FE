// ─── Onboarding Store (localStorage mock) ────────────────────────────────────

const STORAGE_KEY = "afterme_onboarding";

export interface ProfileData {
  fullName: string;
  medicalNote: string;
  checkInPreference: "morning" | "evening" | "";
}

export interface PulseData {
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
  night: boolean;
}

export interface ContactData {
  fullName: string;
  relationship: string;
  phone: string;
  notifyContact: boolean;
}

export interface OnboardingData {
  profile: ProfileData;
  pulse: PulseData;
  contact: ContactData;
  completedAt?: string;
}

const defaultData: OnboardingData = {
  profile: { fullName: "", medicalNote: "", checkInPreference: "" },
  pulse: { morning: false, afternoon: true, evening: true, night: false },
  contact: { fullName: "", relationship: "", phone: "", notifyContact: false },
};

function load(): OnboardingData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as OnboardingData;
  } catch {
    /* ignore corrupt data */
  }
  return { ...defaultData };
}

function persist(data: OnboardingData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const onboardingStore = {
  /** Get the full onboarding data from localStorage */
  getData: (): OnboardingData => load(),

  /** Save Step 1 – Basic Profile */
  saveProfile: (profile: ProfileData) => {
    const data = load();
    data.profile = profile;
    persist(data);
  },

  /** Save Step 2 – Check-in Pulse */
  savePulse: (pulse: PulseData) => {
    const data = load();
    data.pulse = pulse;
    persist(data);
  },

  /** Save Step 3 – Emergency Contact */
  saveContact: (contact: ContactData) => {
    const data = load();
    data.contact = contact;
    data.completedAt = new Date().toISOString();
    persist(data);
  },

  /** Check if onboarding was already completed */
  isCompleted: (): boolean => {
    const data = load();
    return !!data.completedAt;
  },

  /** Clear all onboarding data */
  clear: () => {
    localStorage.removeItem(STORAGE_KEY);
  },
};
