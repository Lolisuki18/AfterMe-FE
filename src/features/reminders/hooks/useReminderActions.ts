/**
 * useReminderActions.ts — Custom hook xử lý toàn bộ logic Submit & Persistence
 * cho Create Reminder. Tách biệt UI khỏi logic nghiệp vụ.
 */

import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { saveReminder } from "../services/storage";
import type { ReminderFormValues, Reminder } from "../types";
import type { ToastMessage } from "../components/Toast";

interface UseReminderActionsOptions {
  /** Locale strings for success/error messages */
  successMsg: string;
  errorMsg: string;
  /** Delay (ms) trước khi navigate sau khi thành công (default 1200) */
  redirectDelay?: number;
}

interface UseReminderActionsReturn {
  isLoading: boolean;
  toast: ToastMessage | null;
  clearToast: () => void;
  onSubmit: (data: ReminderFormValues) => Promise<void>;
}

export const useReminderActions = ({
  successMsg,
  errorMsg,
  redirectDelay = 1200,
}: UseReminderActionsOptions): UseReminderActionsReturn => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const clearToast = useCallback(() => setToast(null), []);

  const onSubmit = useCallback(
    async (data: ReminderFormValues) => {
      setIsLoading(true);
      try {
        // ── Mô phỏng độ trễ mạng 1 giây ──────────────────────────────────
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // ── Build Reminder object ─────────────────────────────────────────
        const newReminder: Reminder = {
          id: `reminder_${Date.now()}`,
          ...data,
          createdAt: new Date().toISOString(),
        };

        // ── Lưu vào LocalStorage ─────────────────────────────────────────
        saveReminder(newReminder);

        // ── Trigger custom event để update dashboard ──────────────────────
        window.dispatchEvent(new Event("reminders-updated"));

        // ── Hiển thị toast thành công ─────────────────────────────────────
        setToast({
          id: newReminder.id,
          type: "success",
          message: successMsg,
        });

        // ── Redirect về dashboard sau khi toast hiển thị ──────────────────
        setTimeout(() => navigate("/dashboard"), redirectDelay);
      } catch {
        setToast({
          id: `error_${Date.now()}`,
          type: "error",
          message: errorMsg,
        });
        setIsLoading(false);
      }
    },
    [successMsg, errorMsg, redirectDelay, navigate],
  );

  return { isLoading, toast, clearToast, onSubmit };
};
