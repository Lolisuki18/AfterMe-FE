export type RoutineTime = "sunup" | "midday" | "sleeptime";

export interface RoutineItem {
  id: string;
  titleKey: string;
  timeKey: string;
  enabled: boolean;
  /** Direct title for user-created items (bypasses i18n lookup) */
  customTitle?: string;
  /** Direct time for user-created items (bypasses i18n lookup) */
  customTime?: string;
}

export interface LifestyleData {
  sunup: RoutineItem[];
  midday: RoutineItem[];
  sleeptime: RoutineItem[];
}

const STORAGE_KEY = "afterme_lifestyle";

const DEFAULT_DATA: LifestyleData = {
  sunup: [
    {
      id: "s1",
      titleKey: "morningMeditation",
      timeKey: "morningMeditationTime",
      enabled: true,
    },
    {
      id: "s2",
      titleKey: "healthyBreakfast",
      timeKey: "healthyBreakfastTime",
      enabled: true,
    },
    {
      id: "s3",
      titleKey: "morningExercise",
      timeKey: "morningExerciseTime",
      enabled: false,
    },
  ],
  midday: [
    {
      id: "m1",
      titleKey: "lunchBreak",
      timeKey: "lunchBreakTime",
      enabled: true,
    },
    {
      id: "m2",
      titleKey: "walkOutdoors",
      timeKey: "walkOutdoorsTime",
      enabled: true,
    },
    {
      id: "m3",
      titleKey: "hydrationReminder",
      timeKey: "hydrationReminderTime",
      enabled: true,
    },
  ],
  sleeptime: [
    {
      id: "n1",
      titleKey: "digitalDetox",
      timeKey: "digitalDetoxTime",
      enabled: true,
    },
    {
      id: "n2",
      titleKey: "skinCareRoutine",
      timeKey: "skinCareRoutineTime",
      enabled: false,
    },
    {
      id: "n3",
      titleKey: "sleepMeditation",
      timeKey: "sleepMeditationTime",
      enabled: true,
    },
  ],
};

export const lifestyleStore = {
  getData(): LifestyleData {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      /* ignore */
    }
    return DEFAULT_DATA;
  },

  toggleItem(section: RoutineTime, id: string): void {
    const data = this.getData();
    data[section] = data[section].map((item) =>
      item.id === id ? { ...item, enabled: !item.enabled } : item,
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  addItem(section: RoutineTime, name: string, time: string): void {
    const data = this.getData();
    const id = `${section[0]}${Date.now()}`;
    data[section].push({
      id,
      titleKey: "",
      timeKey: "",
      enabled: true,
      customTitle: name,
      customTime: time,
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
};
