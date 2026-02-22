export interface OnboardingFormData {
  // Step 2 – Profile
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hearAboutUs: string;

  // Step 3 – Check-in
  checkInFrequency: "daily" | "weekly";
  checkInHour: string; // "09"
  checkInMinute: string; // "00"
  checkInPeriod: "AM" | "PM";

  // Step 4 – Inactivity trigger
  inactivityDays: 1 | 3 | 7;

  // Step 5 – Trusted contact
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  skipContact: boolean;
}

export const defaultFormData: OnboardingFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  hearAboutUs: "",
  checkInFrequency: "daily",
  checkInHour: "09",
  checkInMinute: "00",
  checkInPeriod: "AM",
  inactivityDays: 3,
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  skipContact: false,
};

export type OnboardingStep = 1 | 2 | 3 | 4 | 5 | 6;
