// ── Feeling / Priority ──────────────────────────────────────────────────────
export type FeelingType = "gentle" | "normal" | "firm";

// ── Frequency ───────────────────────────────────────────────────────────────
export type FrequencyType = "once" | "daily" | "weekly";

// ── Core reminder model ──────────────────────────────────────────────────────
export interface Reminder {
  id: string;
  title: string;
  notes?: string;
  date: string; // ISO date string "YYYY-MM-DD"
  time: string; // "HH:mm"
  frequency: FrequencyType;
  feeling: FeelingType;
  safetyCheckin: boolean;
  createdAt: string;
  completedAt?: string; // ISO timestamp when user marked this done
}

// ── Form schema (used with react-hook-form + zod) ───────────────────────────
export interface ReminderFormValues {
  title: string;
  notes?: string;
  date: string;
  time: string;
  frequency: FrequencyType;
  feeling: FeelingType;
  safetyCheckin: boolean;
}
