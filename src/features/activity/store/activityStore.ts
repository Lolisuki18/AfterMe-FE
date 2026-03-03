export type RoutineStatus = "completed" | "missed" | "locked" | "pending";

export interface TodayRoutine {
  id: string;
  titleKey: string;
  timeKey: string;
  status: RoutineStatus;
}

export interface InsightsData {
  currentStreak: number;
  bestStreak: number;
  weekCompletionRate: number;
  averageSleep: number;
}

export interface ActivityData {
  todayRoutines: TodayRoutine[];
  insights: InsightsData;
  /** 1-indexed day numbers that are "active" in the calendar mock */
  calendarActiveDays: number[];
}

const STORAGE_KEY = "afterme_activity";

const DEFAULT_DATA: ActivityData = {
  todayRoutines: [
    {
      id: "tr1",
      titleKey: "morningMeditation",
      timeKey: "morningMeditationTime",
      status: "completed",
    },
    {
      id: "tr2",
      titleKey: "healthyBreakfast",
      timeKey: "healthyBreakfastTime",
      status: "completed",
    },
    {
      id: "tr3",
      titleKey: "workoutSession",
      timeKey: "workoutSessionTime",
      status: "completed",
    },
    {
      id: "tr4",
      titleKey: "lunchBreak",
      timeKey: "lunchBreakTime",
      status: "pending",
    },
    {
      id: "tr5",
      titleKey: "eveningWalk",
      timeKey: "eveningWalkTime",
      status: "locked",
    },
    {
      id: "tr6",
      titleKey: "sleepMeditation",
      timeKey: "sleepMeditationTime",
      status: "locked",
    },
  ],
  insights: {
    currentStreak: 12,
    bestStreak: 21,
    weekCompletionRate: 87,
    averageSleep: 7.2,
  },
  calendarActiveDays: [
    1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24, 25,
  ],
};

export const activityStore = {
  getData(): ActivityData {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      /* ignore */
    }
    return DEFAULT_DATA;
  },

  toggleRoutineStatus(id: string): void {
    const data = this.getData();
    data.todayRoutines = data.todayRoutines.map((r) => {
      if (r.id !== id) return r;
      if (r.status === "pending") return { ...r, status: "completed" as const };
      if (r.status === "completed") return { ...r, status: "pending" as const };
      return r;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
};
