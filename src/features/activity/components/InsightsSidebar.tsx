import { useLanguage } from "@/app/useLanguage";
import type { InsightsData } from "../store/activityStore";

interface InsightsSidebarProps {
  insights: InsightsData;
}

export const InsightsSidebar = ({ insights }: InsightsSidebarProps) => {
  const { t } = useLanguage();
  const a = t.activity;

  return (
    <div className="space-y-5">
      {/* Streak Cards */}
      <div className="bg-surface rounded-2xl p-5">
        <h3 className="text-text text-sm font-bold">{a.personalInsights}</h3>

        <div className="mt-4 space-y-4">
          {/* Current streak */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
              <svg
                className="text-primary h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </div>
            <div>
              <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
                {a.currentStreak}
              </p>
              <p className="text-text text-lg font-bold">
                {insights.currentStreak} {a.days}
              </p>
            </div>
          </div>

          {/* Best streak */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
              <svg
                className="h-5 w-5 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div>
              <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
                {a.bestStreak}
              </p>
              <p className="text-text text-lg font-bold">
                {insights.bestStreak} {a.days}
              </p>
            </div>
          </div>

          {/* Completion rate */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
                {a.thisWeek}
              </p>
              <p className="text-text text-lg font-bold">
                {insights.weekCompletionRate}%
              </p>
            </div>
          </div>

          {/* Sleep */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
              <svg
                className="h-5 w-5 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <div>
              <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
                {a.averageSleep}
              </p>
              <p className="text-text text-lg font-bold">
                {insights.averageSleep} {a.hours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mood Tracker mini */}
      <div className="bg-surface rounded-2xl p-5">
        <h3 className="text-text text-sm font-bold">{a.moodTracker}</h3>
        <p className="text-text-muted mt-1 text-xs">{a.moodToday}</p>
        <div className="mt-3 flex gap-2">
          {["😊", "😐", "😔", "😤", "😴"].map((emoji) => (
            <button
              key={emoji}
              type="button"
              className="hover:bg-surface-alt flex h-10 w-10 items-center justify-center rounded-xl text-xl transition"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Daily Tip */}
      <div className="bg-primary/5 rounded-2xl p-5">
        <h3 className="text-primary text-sm font-bold">{a.dailyTip}</h3>
        <p className="text-text-muted mt-2 text-xs leading-relaxed">
          {a.tipText}
        </p>
      </div>
    </div>
  );
};
