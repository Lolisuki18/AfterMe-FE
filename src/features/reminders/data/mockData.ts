/**
 * mockData.ts — Dữ liệu tĩnh cho feature Reminders.
 * Tất cả dữ liệu cấu hình phải được import từ đây.
 */

import type { FeelingType, FrequencyType } from "../types";

// ── Feeling cards ────────────────────────────────────────────────────────────
export interface FeelingOption {
  id: FeelingType;
  labelKey: string;
  descKey: string;
  /** Tailwind gradient classes for the card background */
  gradient: string;
  /** Tailwind border + ring colour when selected */
  ring: string;
  /** Dot indicator colour */
  dot: string;
}

export const FEELING_OPTIONS: FeelingOption[] = [
  {
    id: "gentle",
    labelKey: "gentle",
    descKey: "gentleDesc",
    gradient:
      "from-blue-400/20 via-cyan-300/10 to-sky-200/20 dark:from-blue-500/30 dark:via-cyan-400/20 dark:to-sky-300/20",
    ring: "border-blue-400 ring-blue-400/30",
    dot: "bg-blue-400",
  },
  {
    id: "normal",
    labelKey: "normal",
    descKey: "normalDesc",
    gradient:
      "from-teal-400/20 via-emerald-300/10 to-green-200/20 dark:from-teal-500/30 dark:via-emerald-400/20 dark:to-green-300/20",
    ring: "border-primary ring-primary/30",
    dot: "bg-primary",
  },
  {
    id: "firm",
    labelKey: "firm",
    descKey: "firmDesc",
    gradient:
      "from-orange-400/20 via-red-300/10 to-rose-200/20 dark:from-orange-500/30 dark:via-red-400/20 dark:to-rose-300/20",
    ring: "border-orange-400 ring-orange-400/30",
    dot: "bg-orange-400",
  },
];

// ── Frequency options ────────────────────────────────────────────────────────
export interface FrequencyOption {
  id: FrequencyType;
  labelKey: string;
}

export const FREQUENCY_OPTIONS: FrequencyOption[] = [
  { id: "once", labelKey: "once" },
  { id: "daily", labelKey: "daily" },
  { id: "weekly", labelKey: "weekly" },
];
