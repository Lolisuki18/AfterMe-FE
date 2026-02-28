import React from "react";
import { useLanguage } from "@/app/useLanguage";
import type { TodayRoutine, RoutineStatus } from "../store/activityStore";

const STATUS_ICON: Record<RoutineStatus, React.ReactNode> = {
  completed: (
    <svg
      className="h-5 w-5 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  pending: <div className="h-5 w-5 rounded-full border-2 border-amber-400" />,
  missed: (
    <svg
      className="h-5 w-5 text-red-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  locked: (
    <svg
      className="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
};

const STATUS_STYLES: Record<RoutineStatus, string> = {
  completed: "bg-green-500/10",
  pending: "bg-amber-500/10",
  missed: "bg-red-500/10",
  locked: "bg-surface-alt opacity-60",
};

interface TodayRoutineListProps {
  routines: TodayRoutine[];
  onToggle: (id: string) => void;
}

export const TodayRoutineList = ({
  routines,
  onToggle,
}: TodayRoutineListProps) => {
  const { t } = useLanguage();
  const a = t.activity as Record<string, string>;

  return (
    <div className="bg-surface rounded-2xl p-5">
      <h2 className="text-text mb-3 text-base font-bold">{a.todaysRoutines}</h2>
      <div className="space-y-2">
        {routines.map((r) => (
          <button
            key={r.id}
            type="button"
            disabled={r.status === "locked"}
            onClick={() => onToggle(r.id)}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${STATUS_STYLES[r.status]} ${
              r.status === "locked"
                ? "cursor-not-allowed"
                : "hover:ring-border cursor-pointer hover:ring-1"
            }`}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center">
              {STATUS_ICON[r.status]}
            </div>
            <div className="min-w-0 flex-1">
              <p
                className={`text-sm font-semibold ${
                  r.status === "completed"
                    ? "text-text line-through opacity-70"
                    : "text-text"
                }`}
              >
                {a[r.titleKey]}
              </p>
              <p className="text-text-muted text-xs">{a[r.timeKey]}</p>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                r.status === "completed"
                  ? "bg-green-500/10 text-green-600"
                  : r.status === "pending"
                    ? "bg-amber-500/10 text-amber-600"
                    : r.status === "missed"
                      ? "bg-red-500/10 text-red-500"
                      : "bg-gray-500/10 text-gray-500"
              }`}
            >
              {a[r.status]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
