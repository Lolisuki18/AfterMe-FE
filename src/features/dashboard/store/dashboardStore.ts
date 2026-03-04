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
      time: "8:00 AM",
      status: "completed",
      iconType: "coffee",
    },
    {
      id: "r2",
      title: "Study Session",
      time: "10:00 AM",
      endTime: "12:00 PM",
      status: "active",
      iconType: "book",
    },
    {
      id: "r3",
      title: "Lunch Break",
      time: "12:30 PM",
      status: "upcoming",
      iconType: "fork-knife",
    },
    {
      id: "r4",
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

  clear: () => localStorage.removeItem(STORAGE_KEY),
};
