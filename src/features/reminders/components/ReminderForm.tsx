import { useFormContext, Controller } from "react-hook-form";
import { motion, type Variants } from "framer-motion";

import { FEELING_OPTIONS, FREQUENCY_OPTIONS } from "../data";
import type { ReminderFormValues } from "../types";
import { FeelingCard } from "./FeelingCard";
import { FrequencyGroup } from "./FrequencyGroup";
import { SafetyToggle } from "./SafetyToggle";
import {
  DatePicker,
  TimePicker,
} from "../../../shared/components/DateTimePicker";

interface ReminderFormProps {
  r: Record<string, string>; // reminders locale namespace
}

// ── Animation variants ────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" },
  }),
};

// ── Section wrapper ───────────────────────────────────────────────────────────
const Section = ({
  children,
  order,
}: {
  children: React.ReactNode;
  order: number;
}) => (
  <motion.div
    custom={order}
    variants={fadeUp}
    initial="hidden"
    animate="visible"
  >
    {children}
  </motion.div>
);

// ── Field label ───────────────────────────────────────────────────────────────
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-text mb-2 text-sm font-semibold">{children}</p>
);

export const ReminderForm = ({ r }: ReminderFormProps) => {
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<ReminderFormValues>();

  const feeling = watch("feeling");
  const frequency = watch("frequency");
  const safetyCheckin = watch("safetyCheckin");
  const dateVal = watch("date");
  const timeVal = watch("time");

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
      {/* ══════════════════════════════════════════
          LEFT — Main form
      ══════════════════════════════════════════ */}
      <div className="flex flex-col gap-5">
        {/* Title */}
        <Section order={0}>
          <Label>{r.titleLabel}</Label>
          <input
            {...register("title")}
            placeholder={r.titlePlaceholder}
            className={[
              "border-border bg-bg text-text placeholder:text-text-muted w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 outline-none",
              "min-h-[44px]",
              "focus:border-primary focus:ring-primary/20 focus:ring-2",
              errors.title ? "border-error focus:ring-error/20" : "",
            ].join(" ")}
          />
          {errors.title && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-error mt-1.5 flex items-center gap-1.5 text-xs"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-red-500 dark:bg-red-900/30">
                !
              </span>
              {r.titleError}
            </motion.p>
          )}
        </Section>

        {/* Notes */}
        <Section order={1}>
          <Label>
            {r.notesLabel}{" "}
            <span className="text-text-muted font-normal">
              {r.notesOptional}
            </span>
          </Label>
          <textarea
            {...register("notes")}
            placeholder={r.notesPlaceholder}
            rows={3}
            className="border-border bg-bg text-text placeholder:text-text-muted focus:border-primary focus:ring-primary/20 w-full resize-none rounded-xl border px-4 py-3 text-sm transition-all duration-200 outline-none focus:ring-2"
          />
        </Section>

        {/* Date & Time */}
        <Section order={2}>
          <Label>{r.whenLabel}</Label>
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Date */}
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value ?? dateVal}
                  onChange={field.onChange}
                />
              )}
            />
            {/* Time */}
            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <TimePicker
                  value={field.value ?? timeVal}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </Section>

        {/* Frequency */}
        <Section order={3}>
          <Label>{r.frequencyLabel}</Label>
          <Controller
            name="frequency"
            control={control}
            render={({ field }) => (
              <FrequencyGroup
                options={FREQUENCY_OPTIONS}
                value={field.value ?? frequency}
                getLabel={(key) => r[key] ?? key}
                onChange={field.onChange}
              />
            )}
          />
        </Section>
      </div>

      {/* ══════════════════════════════════════════
          RIGHT — Sidebar settings
      ══════════════════════════════════════════ */}
      <div className="flex flex-col gap-4">
        {/* Feeling cards */}
        <Section order={0}>
          <Label>{r.feelingLabel}</Label>
          <div className="flex flex-col gap-2.5">
            {FEELING_OPTIONS.map((opt) => (
              <FeelingCard
                key={opt.id}
                option={opt}
                selected={feeling === opt.id}
                label={r[opt.labelKey] ?? opt.id}
                desc={r[opt.descKey] ?? ""}
                onClick={(id) =>
                  setValue("feeling", id, { shouldValidate: true })
                }
              />
            ))}
          </div>
        </Section>

        {/* Safety check-in */}
        <Section order={1}>
          <Controller
            name="safetyCheckin"
            control={control}
            render={({ field }) => (
              <SafetyToggle
                checked={field.value ?? safetyCheckin}
                label={r.safetyLabel}
                desc={r.safetyDesc}
                onChange={field.onChange}
              />
            )}
          />
        </Section>

        {/* Footer note */}
        <p className="text-text-muted text-center text-xs">{r.editNote}</p>
      </div>
    </div>
  );
};
