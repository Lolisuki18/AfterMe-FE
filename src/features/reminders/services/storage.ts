/**
 * storage.ts — Tầng persistence cho feature Reminders.
 * Mọi thao tác đọc/ghi LocalStorage đều tập trung tại đây.
 */

import type { Reminder } from "../types";

const STORAGE_KEY = "afterme_reminders";

/** Sample data mẫu để demo */
const SAMPLE_REMINDERS: Reminder[] = [
  {
    id: "sample-1",
    title: "Gọi điện cho gia đình",
    notes: "Hỏi thăm sức khỏe ba mẹ",
    date: "2026-03-10",
    time: "18:00",
    frequency: "weekly",
    feeling: "gentle",
    safetyCheckin: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "sample-2",
    title: "Uống thuốc buổi sáng",
    notes: "Vitamin D + Omega 3",
    date: "2026-03-08",
    time: "08:00",
    frequency: "daily",
    feeling: "firm",
    safetyCheckin: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "sample-3",
    title: "Tập thể dục",
    notes: "30 phút chạy bộ hoặc yoga",
    date: "2026-03-09",
    time: "07:00",
    frequency: "daily",
    feeling: "normal",
    safetyCheckin: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "sample-4",
    title: "Nộp báo cáo tuần",
    notes: "Gửi email cho giảng viên",
    date: "2026-03-06",
    time: "16:00",
    frequency: "once",
    feeling: "firm",
    safetyCheckin: false,
    createdAt: new Date().toISOString(),
  },
];

/** Đọc toàn bộ danh sách reminder từ localStorage. */
export const getReminders = (): Reminder[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Lần đầu dùng app → seed sample data
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_REMINDERS));
      return SAMPLE_REMINDERS;
    }
    return JSON.parse(raw) as Reminder[];
  } catch {
    return [];
  }
};

/** Lưu một reminder mới vào mảng trong localStorage. */
export const saveReminder = (reminder: Reminder): void => {
  const existing = getReminders();
  const updated = [reminder, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  // Dispatch event để các component khác có thể listen
  window.dispatchEvent(new Event("reminders-updated"));
};

/** Xoá một reminder theo id. */
export const deleteReminder = (id: string): void => {
  const updated = getReminders().filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

/** Cập nhật một reminder đã tồn tại. */
export const updateReminder = (updated: Reminder): void => {
  const list = getReminders().map((r) => (r.id === updated.id ? updated : r));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
};

/** Đánh dấu một reminder là đã hoàn thành. */
export const completeReminder = (id: string): void => {
  const list = getReminders().map((r) =>
    r.id === id ? { ...r, completedAt: new Date().toISOString() } : r,
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("reminders-updated"));
};
