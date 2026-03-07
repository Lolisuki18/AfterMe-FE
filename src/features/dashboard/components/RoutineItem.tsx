import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import type { RoutineItem as RoutineItemData } from "../store/dashboardStore";
import { dashboardStore } from "../store/dashboardStore";
import {
  CoffeeIcon,
  BookIcon,
  ForkKnifeIcon,
  MoonIcon,
  RunIcon,
  HeartSmIcon,
  CheckCircleSmFilledIcon,
  ClockSmIcon,
  PencilEditIcon,
  TrashIcon,
} from "@/shared/icon";
import type { ComponentType } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface RoutineItemProps {
  item: RoutineItemData;
  isLast?: boolean;
  onStatusChange?: () => void;
  onEdit?: (item: RoutineItemData) => void;
  onDelete?: (id: string) => void;
}

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  coffee: CoffeeIcon,
  book: BookIcon,
  "fork-knife": ForkKnifeIcon,
  moon: MoonIcon,
  run: RunIcon,
  heart: HeartSmIcon,
};

export const RoutineItem = ({
  item,
  isLast = false,
  onStatusChange,
  onEdit,
  onDelete,
}: RoutineItemProps) => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const Icon = ICON_MAP[item.iconType] ?? CoffeeIcon;
  const [hovered, setHovered] = useState(false);

  const isCompleted = item.status === "completed";
  const isActive = item.status === "active";

  const handleComplete = () => {
    dashboardStore.updateRoutineStatus(item.id, "completed");
    dashboardStore.checkIn(); // Implicitly confirm safety
    toast.success(d.taskCompleted);
    onStatusChange?.();
  };

  /* ── Status dot ─────────────────────────────────────────────────── */
  const statusDot = isCompleted ? (
    <CheckCircleSmFilledIcon className="h-5 w-5 text-green-500" />
  ) : isActive ? (
    <span className="bg-primary h-3.5 w-3.5 rounded-full ring-4 ring-indigo-500/20" />
  ) : (
    <ClockSmIcon className="text-text-muted h-5 w-5" />
  );

  /* ── Time display ──────────────────────────────────────────────── */
  const timeText = item.endTime ? `${item.time} – ${item.endTime}` : item.time;

  return (
    <div
      className="relative flex gap-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Vertical connector line */}
      {!isLast && (
        <div className="border-border absolute top-6 bottom-0 left-[9px] border-l-2" />
      )}

      {/* Dot column */}
      <div className="z-10 flex h-5 w-5 shrink-0 items-center justify-center">
        {statusDot}
      </div>

      {/* Content */}
      <div
        className={`flex min-w-0 flex-1 items-center gap-3 rounded-xl px-3 py-2.5 ${
          isActive ? "bg-surface-alt" : ""
        }`}
      >
        {/* Activity icon */}
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
            isCompleted
              ? "bg-green-500/10 text-green-500"
              : isActive
                ? "bg-primary/10 text-primary"
                : "bg-surface-alt text-text-muted"
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>

        {/* Title + time */}
        <div className="min-w-0 flex-1">
          <p
            className={`text-sm font-medium ${
              isCompleted ? "text-text-muted line-through" : "text-text"
            }`}
          >
            {item.title}
          </p>
          <p className="text-text-muted text-xs">{timeText}</p>
        </div>

        {/* Badges & Actions */}
        {isActive && !isCompleted && (
          <>
            <span className="bg-primary shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white">
              {d.now}
            </span>
            <motion.button
              type="button"
              onClick={handleComplete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-hover shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors"
              title={d.completeTask}
            >
              ✓ {d.completeTask}
            </motion.button>
          </>
        )}
        {isCompleted && (
          <span className="text-text-muted shrink-0 text-xs">
            {d.completed}
          </span>
        )}

        {/* Edit / Delete hover actions */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.12 }}
              className="flex shrink-0 items-center gap-1"
            >
              <button
                type="button"
                onClick={() => onEdit?.(item)}
                className="text-text-muted hover:text-primary rounded-md p-1.5 transition-colors"
                title={d.editRoutine}
              >
                <PencilEditIcon className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onDelete?.(item.id)}
                className="text-text-muted rounded-md p-1.5 transition-colors hover:text-red-500"
                title={d.deleteRoutine}
              >
                <TrashIcon className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
