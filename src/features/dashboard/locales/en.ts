export const dashboardEn = {
  dashboard: {
    // ── Sidebar ────────────────────────────────────────────────────────
    sidebar: {
      safetyHub: "Safety Hub",
      home: "Home",
      safetySettings: "Safety Settings",
      reminders: "Reminders",
      account: "Account",
      studentPlan: "Student Plan",
    },

    // ── Welcome Header ─────────────────────────────────────────────────
    welcomeBack: "Welcome back, {name}",
    systemStatus: "System Active & Safe",
    checkStatus: "Check Status",

    // ── Check-in Card ──────────────────────────────────────────────────
    checkInTitle: "Ready for a check-in?",
    checkInDesc:
      "Letting us know you're okay keeps your safety circle updated without intruding on your day.",
    checkInAction: "I'm Doing Great",

    // ── Routine Timeline ───────────────────────────────────────────────
    todaysRoutine: "Today's Routine",
    editSchedule: "Edit Schedule",
    now: "NOW",
    timeRemaining: "Time remaining",
    completed: "Completed",
    upcoming: "Upcoming",

    // ── SOS ────────────────────────────────────────────────────────────
    sos: "SOS",
  },
};

export type DashboardTranslations = typeof dashboardEn;
