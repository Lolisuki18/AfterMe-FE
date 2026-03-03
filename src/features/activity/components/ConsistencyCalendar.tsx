import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";

interface ConsistencyCalendarProps {
  activeDays: number[];
}

type ViewMode = "month" | "week";

export const ConsistencyCalendar = ({
  activeDays,
}: ConsistencyCalendarProps) => {
  const { t } = useLanguage();
  const a = t.activity;
  const dayLabels = [a.mon, a.tue, a.wed, a.thu, a.fri, a.sat, a.sun];
  const [view, setView] = useState<ViewMode>("month");

  // Current week: figure out which days of the month fall in this week
  const now = new Date();
  const todayDate = now.getDate();
  const todayDow = now.getDay(); // 0=Sun
  // Convert to Mon=0 … Sun=6
  const todayMon = todayDow === 0 ? 6 : todayDow - 1;
  const weekStart = todayDate - todayMon;
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = weekStart + i;
    return d >= 1 && d <= daysInMonth ? d : null;
  });

  // Mock: render a 5-row × 7-col grid for ~30 days
  const totalCells = 35;

  return (
    <div className="bg-surface rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-text text-base font-bold">
          {a.consistencyCalendar}
        </h2>
        <div className="text-text-muted flex gap-2 text-xs font-semibold">
          <button
            type="button"
            className={view === "month" ? "text-primary underline" : ""}
            onClick={() => setView("month")}
          >
            {a.month}
          </button>
          <button
            type="button"
            className={view === "week" ? "text-primary underline" : ""}
            onClick={() => setView("week")}
          >
            {a.week}
          </button>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {dayLabels.map((d) => (
          <span
            key={d}
            className="text-text-muted pb-1 text-[10px] font-semibold uppercase"
          >
            {d}
          </span>
        ))}
      </div>

      {view === "month" ? (
        /* Month grid */
        <div className="mt-1 grid grid-cols-7 gap-1">
          {Array.from({ length: totalCells }, (_, i) => {
            const day = i + 1;
            if (day > 30) return <span key={i} />;
            const isActive = activeDays.includes(day);
            const isToday = day === todayDate;
            return (
              <div
                key={i}
                className={`flex h-8 w-full items-center justify-center rounded-md text-xs font-medium ${
                  isActive
                    ? "bg-primary/20 text-primary font-bold"
                    : "text-text-muted"
                } ${isToday ? "ring-primary ring-2" : ""}`}
              >
                {day}
              </div>
            );
          })}
        </div>
      ) : (
        /* Week grid */
        <div className="mt-1 grid grid-cols-7 gap-1">
          {weekDays.map((day, i) => {
            if (day === null) return <span key={i} />;
            const isActive = activeDays.includes(day);
            const isToday = day === todayDate;
            return (
              <div
                key={i}
                className={`flex h-12 w-full flex-col items-center justify-center rounded-md text-xs font-medium ${
                  isActive
                    ? "bg-primary/20 text-primary font-bold"
                    : "text-text-muted"
                } ${isToday ? "ring-primary ring-2" : ""}`}
              >
                <span className="text-sm">{day}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
