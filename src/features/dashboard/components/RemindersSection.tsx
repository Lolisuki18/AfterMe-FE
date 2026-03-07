import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, TrashIcon, AlarmIcon, PencilEditIcon } from "@/shared/icon";
import { useLanguage } from "@/app/useLanguage";
import {
  getReminders,
  deleteReminder,
  updateReminder,
} from "@/features/reminders/services/storage";
import type { Reminder } from "@/features/reminders/types";
import type { FeelingType } from "@/features/reminders/types";
import { toast } from "sonner";

const FEELING_EMOJI: Record<string, string> = {
  gentle: "🌿",
  normal: "📌",
  firm: "🔔",
};

export const RemindersSection = () => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const navigate = useNavigate();
  const location = useLocation();
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);

  const loadReminders = () => {
    const allReminders = getReminders();
    console.log("📋 All reminders from storage:", allReminders);

    // Sort by date/time (upcoming first, then past by most recent)
    const sortedReminders = [...allReminders].sort((a, b) => {
      const dateA = new Date(a.date + "T" + a.time);
      const dateB = new Date(b.date + "T" + b.time);
      const now = new Date();

      const isPastA = dateA < now;
      const isPastB = dateB < now;

      // Group upcoming first, then past
      if (isPastA && !isPastB) return 1;
      if (!isPastA && isPastB) return -1;

      // Within same group, sort by date
      if (isPastA && isPastB) {
        // Past: most recent first
        return dateB.getTime() - dateA.getTime();
      } else {
        // Upcoming: soonest first
        return dateA.getTime() - dateB.getTime();
      }
    });

    console.log("✅ Sorted reminders:", sortedReminders);
    setReminders(sortedReminders.slice(0, 6)); // Show max 6 reminders
  };

  useEffect(() => {
    loadReminders();

    // Listen for storage changes (when reminder is created)
    const handleStorageChange = () => {
      loadReminders();
    };

    // Listen for window focus (when user returns to tab)
    const handleFocus = () => {
      loadReminders();
    };

    window.addEventListener("storage", handleStorageChange);
    // Custom event for same-tab updates
    window.addEventListener("reminders-updated", handleStorageChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("reminders-updated", handleStorageChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  // Reload when navigating back to dashboard
  useEffect(() => {
    loadReminders();
  }, [location.pathname]);

  const handleDelete = (id: string) => {
    deleteReminder(id);
    loadReminders();
    toast.success(d.reminderDeleted);
    // Trigger custom event
    window.dispatchEvent(new Event("reminders-updated"));
  };

  const handleEdit = (reminder: Reminder) => {
    setEditingReminder({ ...reminder });
  };

  const handleEditSave = () => {
    if (!editingReminder) return;
    updateReminder(editingReminder);
    loadReminders();
    setEditingReminder(null);
    toast.success(d.reminderSaved);
    window.dispatchEvent(new Event("reminders-updated"));
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (date.getTime() === today.getTime()) {
        return "Today";
      } else if (date.getTime() === tomorrow.getTime()) {
        return "Tomorrow";
      }

      return date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const getReminderStatus = (reminder: Reminder) => {
    const now = new Date();
    const reminderDateTime = new Date(reminder.date + "T" + reminder.time);
    const reminderDateOnly = new Date(reminder.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    reminderDateOnly.setHours(0, 0, 0, 0);

    if (reminderDateOnly.getTime() === today.getTime()) {
      return reminderDateTime > now ? "today-upcoming" : "today-past";
    } else if (reminderDateOnly > today) {
      return "upcoming";
    } else {
      return "past";
    }
  };

  return (
    <section className="bg-surface rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-text text-base font-semibold">{d.myReminders}</h2>
        <button
          type="button"
          onClick={() => navigate("/dashboard/reminders")}
          className="text-primary text-sm font-medium hover:underline"
        >
          {d.viewAll}
        </button>
      </div>

      {/* Reminders list */}
      {reminders.length === 0 ? (
        <div className="py-8 text-center">
          <AlarmIcon className="text-text-muted mx-auto mb-3 h-12 w-12 opacity-40" />
          <p className="text-text-muted mb-4 text-sm">{d.noReminders}</p>
          <motion.button
            type="button"
            onClick={() => navigate("/reminders/new")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary hover:bg-primary-hover inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors"
          >
            <PlusIcon className="h-4 w-4" />
            {d.createReminder}
          </motion.button>
        </div>
      ) : (
        <>
          {(() => {
            // Group reminders by status
            const upcomingReminders = reminders.filter((r) => {
              const status = getReminderStatus(r);
              return status === "upcoming" || status === "today-upcoming";
            });
            const pastReminders = reminders.filter((r) => {
              const status = getReminderStatus(r);
              return status === "past" || status === "today-past";
            });

            const renderReminder = (reminder: Reminder) => {
              const status = getReminderStatus(reminder);
              const isPast = status === "past" || status === "today-past";

              return (
                <motion.div
                  key={reminder.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`border-border hover:border-border/80 flex items-start gap-3 rounded-xl border bg-linear-to-br from-transparent to-transparent p-3 transition-all hover:shadow-sm ${
                    isPast ? "opacity-60" : ""
                  }`}
                >
                  {/* Feeling emoji */}
                  <span className="mt-0.5 text-xl">
                    {FEELING_EMOJI[reminder.feeling] ?? "📌"}
                  </span>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-text truncate text-sm font-semibold ${
                        isPast ? "line-through" : ""
                      }`}
                    >
                      {reminder.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-text-muted">
                        {formatDate(reminder.date)} • {reminder.time}
                      </span>
                      {/* Feeling badge */}
                      <span className="rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                        {reminder.feeling === "gentle" && d.feelingGentle}
                        {reminder.feeling === "normal" && d.feelingNormal}
                        {reminder.feeling === "firm" && d.feelingFirm}
                      </span>
                      {reminder.safetyCheckin && (
                        <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                          Safety
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleEdit(reminder)}
                      className="text-text-muted rounded-lg p-1.5 transition-colors hover:text-blue-500"
                      title={d.editReminder}
                    >
                      <PencilEditIcon className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(reminder.id)}
                      className="text-text-muted rounded-lg p-1.5 transition-colors hover:text-red-500"
                      title="Delete"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              );
            };

            return (
              <div className="space-y-4">
                {/* Upcoming Section */}
                {upcomingReminders.length > 0 && (
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="text-text text-xs font-bold tracking-wider uppercase">
                        {d.upcoming}
                      </h3>
                      <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-[10px] font-bold">
                        {upcomingReminders.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {upcomingReminders.map(renderReminder)}
                    </div>
                  </div>
                )}

                {/* Past Section */}
                {pastReminders.length > 0 && (
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="text-text-muted text-xs font-bold tracking-wider uppercase">
                        {d.past}
                      </h3>
                      <span className="bg-text-muted/10 text-text-muted rounded-full px-2 py-0.5 text-[10px] font-bold">
                        {pastReminders.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {pastReminders.map(renderReminder)}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Create button */}
          <motion.button
            type="button"
            onClick={() => navigate("/reminders/new")}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="border-border hover:bg-surface-alt mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed py-2.5 text-sm font-medium transition-colors"
          >
            <PlusIcon className="h-4 w-4" />
            {d.createReminder}
          </motion.button>
        </>
      )}

      {/* ── Edit Reminder Modal ───────────────────────────────────── */}
      <AnimatePresence>
        {editingReminder && (
          <motion.div
            key="edit-reminder-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setEditingReminder(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-surface w-full max-w-sm rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-text mb-4 text-base font-bold">
                {d.editReminder}
              </h3>

              {/* Title */}
              <div className="mb-3">
                <label className="text-text-muted mb-1 block text-xs font-medium">
                  Title
                </label>
                <input
                  type="text"
                  value={editingReminder.title}
                  onChange={(e) =>
                    setEditingReminder((prev) =>
                      prev ? { ...prev, title: e.target.value } : prev,
                    )
                  }
                  className="border-border bg-background text-text focus:border-primary w-full rounded-xl border px-3 py-2 text-sm outline-none"
                />
              </div>

              {/* Date + Time */}
              <div className="mb-3 grid grid-cols-2 gap-2">
                <div>
                  <label className="text-text-muted mb-1 block text-xs font-medium">
                    Date
                  </label>
                  <input
                    type="date"
                    value={editingReminder.date}
                    onChange={(e) =>
                      setEditingReminder((prev) =>
                        prev ? { ...prev, date: e.target.value } : prev,
                      )
                    }
                    className="border-border bg-background text-text focus:border-primary w-full rounded-xl border px-3 py-2 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-text-muted mb-1 block text-xs font-medium">
                    Time
                  </label>
                  <input
                    type="time"
                    value={editingReminder.time}
                    onChange={(e) =>
                      setEditingReminder((prev) =>
                        prev ? { ...prev, time: e.target.value } : prev,
                      )
                    }
                    className="border-border bg-background text-text focus:border-primary w-full rounded-xl border px-3 py-2 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Feeling picker */}
              <div className="mb-5">
                <label className="text-text-muted mb-2 block text-xs font-medium">
                  Feeling
                </label>
                <div className="flex gap-2">
                  {(["gentle", "normal", "firm"] as FeelingType[]).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() =>
                        setEditingReminder((prev) =>
                          prev ? { ...prev, feeling: f } : prev,
                        )
                      }
                      className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl border py-2 text-xs font-medium transition-all ${
                        editingReminder.feeling === f
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-text-muted hover:border-primary/50"
                      }`}
                    >
                      <span>{FEELING_EMOJI[f]}</span>
                      <span>
                        {f === "gentle"
                          ? d.feelingGentle
                          : f === "normal"
                            ? d.feelingNormal
                            : d.feelingFirm}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEditingReminder(null)}
                  className="border-border text-text-muted hover:bg-surface-alt flex-1 rounded-xl border py-2 text-sm font-medium transition-colors"
                >
                  {d.cancelEdit}
                </button>
                <button
                  type="button"
                  onClick={handleEditSave}
                  className="bg-primary hover:bg-primary-hover flex-1 rounded-xl py-2 text-sm font-semibold text-white transition-colors"
                >
                  {d.reminderSaved}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
