import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/useLanguage";
import { registerSchema, type RegisterFormData } from "../schemas/authSchemas";
import { useAuth } from "../hooks/useAuth";
import { SocialAuth } from "./SocialAuth";
import { resolveKey } from "../utils/authUtils";
import { SpinnerIcon } from "../icon/SpinnerIcon";

// ─── Reusable field wrapper ───────────────────────────────────────────────────
interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const Field = ({ label, error, children }: FieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-text text-sm font-medium">{label}</label>
    {children}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-error flex items-center gap-1 text-xs"
      >
        <AlertCircle className="h-3 w-3 flex-shrink-0" />
        {error}
      </motion.p>
    )}
  </div>
);

// ─── Status banner ────────────────────────────────────────────────────────────
interface StatusBannerProps {
  status: "success" | "error";
  message: string;
}

const StatusBanner = ({ status, message }: StatusBannerProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className={`flex items-center gap-2 rounded-lg p-3 text-sm font-medium ${
      status === "success"
        ? "bg-success/10 text-success"
        : "bg-error/10 text-error"
    }`}
  >
    {status === "success" ? (
      <CheckCircle className="h-4 w-4 flex-shrink-0" />
    ) : (
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
    )}
    {message}
  </motion.div>
);

// ─── Password strength indicator ──────────────────────────────────────────────
const PasswordStrength = ({ password }: { password: string }) => {
  const len = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const score =
    (len >= 6 ? 1 : 0) +
    (len >= 10 ? 1 : 0) +
    (hasUpper ? 1 : 0) +
    (hasNumber ? 1 : 0);

  const levels = [
    { label: "Weak", color: "bg-error" },
    { label: "Fair", color: "bg-warning" },
    { label: "Good", color: "bg-success" },
    { label: "Strong", color: "bg-success" },
  ];

  if (!password) return null;

  const level = levels[Math.min(score, levels.length) - 1] ?? levels[0];

  return (
    <div className="mt-1 flex items-center gap-2">
      <div className="flex flex-1 gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i < score ? level.color : "bg-border"
            }`}
          />
        ))}
      </div>
      <span className="text-text-muted text-xs">{level.label}</span>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
export const RegisterForm = () => {
  const { t } = useLanguage();
  const { register: registerUser, registerState } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const passwordValue = watch("password", "");

  const onSubmit = (data: RegisterFormData) => {
    registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  const isLoading = registerState.status === "loading";

  const resolveError = (key?: string) => (key ? resolveKey(t, key) : undefined);

  const statusMessage = registerState.message
    ? resolveKey(t, registerState.message)
    : "";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      noValidate
    >
      {/* Status banner */}
      {(registerState.status === "success" ||
        registerState.status === "error") && (
        <StatusBanner status={registerState.status} message={statusMessage} />
      )}

      {/* Full name */}
      <Field
        label={t.auth.register.nameLabel}
        error={resolveError(errors.name?.message)}
      >
        <div className="border-border bg-surface focus-within:ring-primary/30 focus-within:border-primary relative flex items-center rounded-lg border transition-all focus-within:ring-2">
          <User className="text-text-muted absolute left-3 h-4 w-4" />
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder={t.auth.register.namePlaceholder}
            className="text-text placeholder:text-text-muted w-full bg-transparent py-2.5 pr-3 pl-10 text-sm outline-none"
          />
        </div>
      </Field>

      {/* Email */}
      <Field
        label={t.auth.register.emailLabel}
        error={resolveError(errors.email?.message)}
      >
        <div className="border-border bg-surface focus-within:ring-primary/30 focus-within:border-primary relative flex items-center rounded-lg border transition-all focus-within:ring-2">
          <Mail className="text-text-muted absolute left-3 h-4 w-4" />
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder={t.auth.register.emailPlaceholder}
            className="text-text placeholder:text-text-muted w-full bg-transparent py-2.5 pr-3 pl-10 text-sm outline-none"
          />
        </div>
      </Field>

      {/* Password */}
      <Field
        label={t.auth.register.passwordLabel}
        error={resolveError(errors.password?.message)}
      >
        <div className="border-border bg-surface focus-within:ring-primary/30 focus-within:border-primary relative flex items-center rounded-lg border transition-all focus-within:ring-2">
          <Lock className="text-text-muted absolute left-3 h-4 w-4" />
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder={t.auth.register.passwordPlaceholder}
            className="text-text placeholder:text-text-muted w-full bg-transparent py-2.5 pr-10 pl-10 text-sm outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="text-text-muted hover:text-text absolute right-3 transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        <PasswordStrength password={passwordValue} />
      </Field>

      {/* Confirm Password */}
      <Field
        label={t.auth.register.confirmPasswordLabel}
        error={resolveError(errors.confirmPassword?.message)}
      >
        <div className="border-border bg-surface focus-within:ring-primary/30 focus-within:border-primary relative flex items-center rounded-lg border transition-all focus-within:ring-2">
          <Lock className="text-text-muted absolute left-3 h-4 w-4" />
          <input
            {...register("confirmPassword")}
            type={showConfirm ? "text" : "password"}
            autoComplete="new-password"
            placeholder={t.auth.register.confirmPasswordPlaceholder}
            className="text-text placeholder:text-text-muted w-full bg-transparent py-2.5 pr-10 pl-10 text-sm outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirm((p) => !p)}
            className="text-text-muted hover:text-text absolute right-3 transition-colors"
            aria-label={showConfirm ? "Hide password" : "Show password"}
          >
            {showConfirm ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </Field>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-primary hover:bg-primary-hover disabled:bg-primary/60 mt-1 flex w-full items-center justify-center rounded-lg py-2.5 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <SpinnerIcon />
            {t.auth.register.submitting}
          </span>
        ) : (
          t.auth.register.submitButton
        )}
      </button>

      {/* Social auth */}
      <SocialAuth mode="register" />

      {/* Switch to login */}
      <p className="text-text-muted text-center text-sm">
        {t.auth.alreadyHaveAccount}{" "}
        <Link
          to="/login"
          className="text-primary hover:text-primary-hover font-semibold transition-colors"
        >
          {t.auth.signInLink}
        </Link>
      </p>
    </form>
  );
};
