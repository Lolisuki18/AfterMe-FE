import { useLanguage } from "@/app/useLanguage";
import {
  FireIcon,
  StarOutlineIcon,
  ChartIcon,
  MoonCrescentIcon,
} from "@/shared/icon";
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
              <FireIcon className="text-primary h-5 w-5" />
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
              <StarOutlineIcon className="h-5 w-5 text-amber-500" />
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
              <ChartIcon className="h-5 w-5 text-green-500" />
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
              <MoonCrescentIcon className="h-5 w-5 text-indigo-500" />
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
