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
});

export type LoginFormData = z.infer<typeof loginSchema>;

// ─── Register schema ──────────────────────────────────────────────────────────
export const registerSchema = z
  .object({
    name: z.string().min(1, "auth.validation.nameRequired"),
    email: z
      .string()
      .min(1, "auth.validation.emailRequired")
      .email("auth.validation.emailInvalid"),
    password: z
      .string()
      .min(1, "auth.validation.passwordRequired")
      .min(6, "auth.validation.passwordMin"),
    confirmPassword: z
      .string()
      .min(1, "auth.validation.confirmPasswordRequired"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "auth.validation.confirmPasswordMatch",
        path: ["confirmPassword"],
      });
    }
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
