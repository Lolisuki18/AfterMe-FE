import { useState } from "react";
import { ChevronIcon } from "@/shared/icon";
import { TaskCard } from "./TaskCard";
import type { Task } from "../interface";

interface SectionProps {
  label: string;
  tasks: Task[];
  overdue?: boolean;
}

export const Section = ({ label, tasks, overdue = false }: SectionProps) => {
  const [open, setOpen] = useState(true);
  const count = tasks.length;

  return (
    <div>
      {/* Section header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mb-2 flex w-full items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <ChevronIcon
            className={`text-text-muted h-4 w-4 transition-transform ${
              open ? "rotate-0" : "-rotate-90"
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              overdue ? "text-error" : "text-primary"
            }`}
          >
            {label}
          </span>
        </div>

        <span className="text-text-muted bg-surface-alt rounded-full px-2.5 py-0.5 text-xs font-medium">
          {count} {count === 1 ? "task" : "tasks"}
        </span>
      </button>

      {/* Task list */}
      {open && (
        <div className="flex flex-col gap-2.5">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} overdue={overdue} />
            ))
          ) : (
            <p className="text-text-muted py-3 text-center text-sm italic">—</p>
          )}
        </div>
      )}
    </div>
  );
};
