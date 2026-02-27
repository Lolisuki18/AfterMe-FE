import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/useLanguage";
import { loginSchema, type LoginFormData } from "../schemas/authSchemas";
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

// ─────────────────────────────────────────────────────────────────────────────
export const LoginForm = () => {
  const { t } = useLanguage();
  const { login, loginState } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: LoginFormData) => login(data);

  const isLoading = loginState.status === "loading";

  // Resolve translation key for zod error messages
  const resolveError = (key?: string) => (key ? resolveKey(t, key) : undefined);

  // Resolve status message
  const statusMessage = loginState.message
    ? resolveKey(t, loginState.message)
    : "";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      {/* Status banner */}
      {(loginState.status === "success" || loginState.status === "error") && (
        <StatusBanner status={loginState.status} message={statusMessage} />
      )}

      {/* Email */}
      <Field
        label={t.auth.login.emailLabel}
        error={resolveError(errors.email?.message)}
      >
        <div className="border-border bg-surface focus-within:ring-primary/30 focus-within:border-primary relative flex items-center rounded-lg border transition-all focus-within:ring-2">
          <Mail className="text-text-muted absolute left-3 h-4 w-4" />
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder={t.auth.login.emailPlaceholder}
            className="text-text placeholder:text-text-muted w-full bg-transparent py-2.5 pr-3 pl-10 text-sm outline-none"
          />
        </div>
      </Field>

      {/* Password */}
      <Field
        label={t.auth.login.passwordLabel}
        error={resolveError(errors.password?.message)}
      >
        <div className="border-border bg-surface focus-within:ring-primary/30 focus-within:border-primary relative flex items-center rounded-lg border transition-all focus-within:ring-2">
          <Lock className="text-text-muted absolute left-3 h-4 w-4" />
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder={t.auth.login.passwordPlaceholder}
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
      </Field>

      {/* Forgot password */}
      <div className="-mt-2 flex justify-end">
        <Link
          to="/forgot-password"
          className="text-primary hover:text-primary-hover text-xs font-medium transition-colors"
        >
          {t.auth.login.forgotPassword}
        </Link>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-primary hover:bg-primary-hover disabled:bg-primary/60 flex w-full items-center justify-center rounded-lg py-2.5 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <SpinnerIcon />
            {t.auth.login.submitting}
          </span>
        ) : (
          t.auth.login.submitButton
        )}
      </button>

      {/* Social auth */}
      <SocialAuth mode="login" />

      {/* Switch to register */}
      <p className="text-text-muted text-center text-sm">
        {t.auth.dontHaveAccount}{" "}
        <Link
          to="/register"
          className="text-primary hover:text-primary-hover font-semibold transition-colors"
        >
          {t.auth.signUpLink}
        </Link>
      </p>
    </form>
  );
};
