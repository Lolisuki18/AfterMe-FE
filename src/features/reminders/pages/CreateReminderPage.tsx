import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowLeft, PlusCircle } from "lucide-react";

import { useLanguage } from "@/app/useLanguage";
import { ReminderForm, Toast } from "../components";
import { useReminderActions } from "../hooks/useReminderActions";
import type { ReminderFormValues } from "../types";

// ── Validation schema ─────────────────────────────────────────────────────────
const reminderSchema = z.object({
  title: z.string().min(1, { message: "required" }),
  notes: z.string().optional(),
  date: z.string().min(1),
  time: z.string().min(1),
  frequency: z.enum(["once", "daily", "weekly"]),
  feeling: z.enum(["gentle", "normal", "firm"]),
  safetyCheckin: z.boolean(),
});

// ── Default values ────────────────────────────────────────────────────────────
const defaultValues: ReminderFormValues = {
  title: "",
  notes: "",
  date: format(new Date(), "yyyy-MM-dd"),
  time: "09:00",
  frequency: "once",
  feeling: "normal",
  safetyCheckin: false,
};

// ── Page ──────────────────────────────────────────────────────────────────────
const CreateReminderPage = () => {
  const { t } = useLanguage();
  const r = t.reminders;
  const navigate = useNavigate();

  // ── Custom hook: submit logic + localStorage + toast ──────────────────────
  const { isLoading, toast, clearToast, onSubmit } = useReminderActions({
    successMsg: r.toastSuccess,
    errorMsg: r.toastError,
  });

  const methods = useForm<ReminderFormValues>({
    resolver: zodResolver(reminderSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const { handleSubmit } = methods;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mx-auto w-full max-w-5xl px-2 pb-16 sm:px-0"
      >
        {/* ── Back link ─────────────────────────────────────────────────────── */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-text-muted hover:text-primary mb-6 flex items-center gap-1.5 text-sm transition-colors duration-150"
        >
          <ArrowLeft className="h-4 w-4" />
          {r.backToDashboard}
        </button>

        {/* ── Page title ────────────────────────────────────────────────────── */}
        <div className="mb-8">
          <h1 className="text-text text-3xl font-bold sm:text-4xl">
            {r.createTitle}
          </h1>
          <p className="text-text-muted mt-1 text-sm">{r.createSubtitle}</p>
        </div>

        {/* ── Form ──────────────────────────────────────────────────────────── */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <ReminderForm r={r} />

            {/* ── Action bar ──────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="border-border mt-8 flex flex-col-reverse items-stretch gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <button
                type="button"
                onClick={() => navigate(-1)}
                disabled={isLoading}
                className="border-border text-text-muted hover:bg-surface-alt min-h-[44px] rounded-xl border px-6 text-sm font-medium transition-colors duration-150 disabled:opacity-50 sm:w-auto"
              >
                {r.cancel}
              </button>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={[
                  "bg-primary hover:bg-primary-hover shadow-primary/30 flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold text-white shadow-md transition-all duration-200",
                  isLoading ? "cursor-not-allowed opacity-70" : "",
                ].join(" ")}
              >
                {isLoading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <PlusCircle className="h-4 w-4" />
                )}
                {r.create}
              </motion.button>
            </motion.div>
          </form>
        </FormProvider>
      </motion.div>

      {/* ── Toast notification ──────────────────────────────────────────── */}
      <Toast toast={toast} onClose={clearToast} />
    </>
  );
};

export default CreateReminderPage;
