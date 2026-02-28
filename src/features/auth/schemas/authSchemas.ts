import { z } from "zod";

// ─── Login schema ─────────────────────────────────────────────────────────────
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "auth.validation.emailRequired")
    .email("auth.validation.emailInvalid"),
  password: z
    .string()
    .min(1, "auth.validation.passwordRequired")
    .min(6, "auth.validation.passwordMin"),
  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// ─── Register schema ──────────────────────────────────────────────────────────
export const registerSchema = z.object({
  name: z.string().min(1, "auth.validation.nameRequired"),
  email: z
    .string()
    .min(1, "auth.validation.emailRequired")
    .email("auth.validation.emailInvalid"),
  password: z
    .string()
    .min(1, "auth.validation.passwordRequired")
    .min(6, "auth.validation.passwordMin"),
  terms: z.boolean().refine((val) => val === true, {
    message: "auth.validation.termsRequired",
  }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
