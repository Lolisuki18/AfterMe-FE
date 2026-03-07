// ─── Dashboard Store (localStorage mock) ─────────────────────────────────────

const STORAGE_KEY = "afterme_dashboard";

export type RoutineStatus = "completed" | "active" | "upcoming";
export type RoutineIconType =
  | "coffee"
  | "book"
  | "fork-knife"
  | "moon"
  | "run"
  | "heart";

export interface RoutineItem {
  id: string;
  title: string;
  time: string;
  endTime?: string;
  status: RoutineStatus;
  iconType: RoutineIconType;
}

export interface DashboardUser {
  name: string;
  plan: string;
  avatarUrl?: string;
}

export interface DashboardData {
  user: DashboardUser;
  routines: RoutineItem[];
  lastCheckIn?: string;
}

const defaultData: DashboardData = {
  user: { name: "Ninh", plan: "Student Plan" },
  routines: [
    {
      id: "r1",
      title: "Morning Coffee",
      time: "7:00 AM",
      status: "completed",
      iconType: "coffee",
    },
    {
      id: "r2",
      title: "Morning Run",
      time: "7:30 AM",
      endTime: "8:00 AM",
      status: "completed",
      iconType: "run",
    },
    {
      id: "r3",
      title: "Study Session",
      time: "10:00 AM",
      endTime: "12:00 PM",
      status: "active",
      iconType: "book",
    },
    {
      id: "r4",
      title: "Lunch Break",
      time: "12:30 PM",
      status: "upcoming",
      iconType: "fork-knife",
    },
    {
      id: "r5",
      title: "Workout",
      time: "5:00 PM",
      endTime: "6:00 PM",
      status: "upcoming",
      iconType: "heart",
    },
    {
      id: "r6",
      title: "Wind Down",
      time: "10:00 PM",
      status: "upcoming",
      iconType: "moon",
    },
  ],
};

function load(): DashboardData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as DashboardData;
  } catch {
    /* ignore corrupt data */
  }
  return { ...defaultData };
}

function persist(data: DashboardData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const dashboardStore = {
  getData: (): DashboardData => load(),

  checkIn: () => {
    const data = load();
    data.lastCheckIn = new Date().toISOString();
    persist(data);
  },

  updateRoutineStatus: (id: string, status: RoutineStatus) => {
    const data = load();
    const item = data.routines.find((r) => r.id === id);
    if (item) {
      item.status = status;
      persist(data);
    }
  },

  /** Replace entire routines array */
  setRoutines: (routines: RoutineItem[]) => {
    const data = load();
    data.routines = routines;
    persist(data);
  },

  /** Add a new routine item */
  addRoutine: (item: Omit<RoutineItem, "id">) => {
    const data = load();
    data.routines.push({ ...item, id: `r${Date.now()}` });
    persist(data);
  },

  /** Update an existing routine item */
  updateRoutine: (updated: RoutineItem) => {
    const data = load();
    data.routines = data.routines.map((r) =>
      r.id === updated.id ? updated : r,
    );
    persist(data);
  },

  /** Delete a routine by id */
  deleteRoutine: (id: string) => {
    const data = load();
    data.routines = data.routines.filter((r) => r.id !== id);
    persist(data);
  },

  clear: () => localStorage.removeItem(STORAGE_KEY),
};
