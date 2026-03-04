import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { getReminders, deleteReminder } from "../services/storage";
import type { Reminder } from "../types";
import { PlusIcon, TrashIcon, BackIcon } from "@/shared/icon";
import { toast } from "sonner";

const FEELING_EMOJI: Record<string, string> = {
  gentle: "🌿",
  normal: "📌",
  firm: "🔔",
};

const FREQ_BADGE_CLASSES: Record<string, string> = {
  once: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  daily: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  weekly:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

const RemindersListPage = () => {
  const { t } = useLanguage();
  const r = t.reminders;
  const list = t.remindersList;

  const [reminders, setReminders] = useState<Reminder[]>([]);

  const load = useCallback(() => {
    setReminders(getReminders());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = (id: string) => {
    deleteReminder(id);
    load();
    toast.success(list.deleted);
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            to="/dashboard"
            className="text-text-muted hover:text-text mb-2 inline-flex items-center gap-1 text-sm"
          >
            <BackIcon className="h-4 w-4" />
            {r.backToDashboard}
          </Link>
          <h1 className="text-text text-2xl font-bold">{list.title}</h1>
          <p className="text-text-muted mt-1 text-sm">{list.subtitle}</p>
        </div>
        <Link
          to="/reminders/new"
          className="bg-primary hover:bg-primary-hover inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors"
        >
          <PlusIcon className="h-4 w-4" />
          {list.createNew}
        </Link>
      </div>

      {/* Empty state */}
      {reminders.length === 0 && (
        <div className="bg-surface rounded-2xl py-16 text-center">
          <p className="text-text-muted text-5xl">🔔</p>
          <p className="text-text mt-4 font-semibold">{list.empty}</p>
          <p className="text-text-muted mt-1 text-sm">{list.emptyDesc}</p>
          <Link
            to="/reminders/new"
            className="bg-primary hover:bg-primary-hover mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            <PlusIcon className="h-4 w-4" />
            {list.createNew}
          </Link>
        </div>
      )}

      {/* Reminder list */}
      {reminders.length > 0 && (
        <div className="space-y-3">
          {reminders.map((rem) => (
            <div
              key={rem.id}
              className="bg-surface flex items-start gap-4 rounded-2xl px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Feeling emoji */}
              <span className="mt-0.5 text-2xl">
                {FEELING_EMOJI[rem.feeling] ?? "📌"}
              </span>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-text truncate text-base font-semibold">
                  {rem.title}
                </h3>
                {rem.notes && (
                  <p className="text-text-muted mt-0.5 line-clamp-2 text-sm">
                    {rem.notes}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-text-muted">
                    📅 {formatDate(rem.date)}
                  </span>
                  <span className="text-text-muted">🕐 {rem.time}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${FREQ_BADGE_CLASSES[rem.frequency] ?? ""}`}
                  >
                    {r[rem.frequency as keyof typeof r] ?? rem.frequency}
                  </span>
                  {rem.safetyCheckin && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                      {r.safetyLabel}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <button
                type="button"
                onClick={() => handleDelete(rem.id)}
                className="text-text-muted mt-1 shrink-0 rounded-lg p-1.5 transition-colors hover:text-red-500"
                title={list.delete}
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RemindersListPage;
