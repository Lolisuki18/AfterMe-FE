/**
 * storage.ts — Tầng persistence cho feature Reminders.
 * Mọi thao tác đọc/ghi LocalStorage đều tập trung tại đây.
 */

import type { Reminder } from "../types";

const STORAGE_KEY = "afterme_reminders";

/** Đọc toàn bộ danh sách reminder từ localStorage. */
export const getReminders = (): Reminder[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
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
