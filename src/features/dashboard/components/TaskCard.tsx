import type { ReactNode } from "react";
import { useLanguage } from "@/app/useLanguage";
import {
  ClockIcon,
  GentleIcon,
  AlarmIcon,
  FirmIcon,
  CheckCircleIcon,
} from "@/shared/icon";
import type { TaskPriority } from "../types";
import type { Task } from "../interface";

/* ── Priority config ──────────────────────────────────────── */
const priorityStyle: Record<TaskPriority, string> = {
  gentle: "bg-gentle/15 text-gentle",
  normal: "bg-primary/15 text-primary",
  firm: "bg-error/15 text-error",
};

const priorityIconMap: Record<TaskPriority, ReactNode> = {
  gentle: <GentleIcon className="h-3.5 w-3.5" />,
  normal: <AlarmIcon className="h-3.5 w-3.5" />,
  firm: <FirmIcon className="h-3.5 w-3.5" />,
};

/* ── Component ────────────────────────────────────────────── */
interface TaskCardProps {
  task: Task;
  overdue?: boolean;
}

export const TaskCard = ({ task, overdue = false }: TaskCardProps) => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const isCompleted = task.status === "completed";

  return (
    <div
      className={`border-border bg-surface flex items-center gap-3 rounded-xl border px-4 py-3 shadow-sm transition-colors sm:gap-4 sm:px-5 sm:py-4 ${
        overdue ? "border-l-error border-l-[3px]" : ""
      }`}
    >
      {/* Checkbox / Completed indicator */}
      <div className="shrink-0">
        {isCompleted ? (
          <CheckCircleIcon className="text-primary h-6 w-6" />
        ) : (
          <span
            className={`block h-6 w-6 rounded-full border-2 ${
              overdue ? "border-error" : "border-border"
            }`}
          />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-semibold sm:text-base ${
            isCompleted ? "text-text-muted line-through" : "text-text"
          }`}
        >
          {task.title}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Time */}
          <span className="text-text-muted flex items-center gap-1 text-xs">
            <ClockIcon className="h-3.5 w-3.5" />
            {task.time}
          </span>

          {/* Priority badge */}
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold sm:text-xs ${priorityStyle[task.priority]}`}
          >
            {priorityIconMap[task.priority]}
            {d.priority[task.priority]}
          </span>
        </div>
      </div>
    </div>
  );
};
