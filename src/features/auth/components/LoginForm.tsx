import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { loginSchema, type LoginFormData } from "../schemas/authSchemas";
import { authStore } from "../store/authStore";
import { resolveKey } from "../utils/authUtils";
import { MailIcon } from "../icon/MailIcon";
import { LockIcon } from "../icon/LockIcon";
import { EyeIcon } from "../icon/EyeIcon";
import { EyeOffIcon } from "../icon/EyeOffIcon";
import { ArrowRightIcon } from "../icon/ArrowRightIcon";
import { SocialAuth } from "./SocialAuth";

// ─────────────────────────────────────────────────────────────────────────────
export const LoginForm = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const resolveError = (key?: string) => (key ? resolveKey(t, key) : undefined);

  const onSubmit = async (data: LoginFormData) => {
    setStatus("loading");
    const result = await authStore.login({
      email: data.email,
      password: data.password,
    });

    if (result.success) {
      setStatus("success");
      setMessage(resolveKey(t, result.messageKey));
      setTimeout(() => navigate("/dashboard"), 1200);
    } else {
      setStatus("error");
      setMessage(resolveKey(t, result.messageKey));
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="bg-surface w-full max-w-md rounded-2xl p-6 sm:p-8">
      {/* Header */}
      <h1 className="text-text text-2xl font-bold break-words">
        {t.auth.login.welcomeBack}
      </h1>
      <p className="text-text-muted mt-1 text-sm break-words whitespace-normal">
        {t.auth.login.subtitle}
      </p>

      {/* Status banner */}
      {status === "success" && (
        <div className="bg-success/10 text-success mt-4 rounded-lg p-3 text-sm font-medium">
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="bg-error/10 text-error mt-4 rounded-lg p-3 text-sm font-medium">
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 space-y-5"
        noValidate
      >
        {/* Email */}
        <Input
          {...register("email")}
          type="email"
          autoComplete="email"
          label={t.auth.login.emailLabel}
          placeholder={t.auth.login.emailPlaceholder}
          leftIcon={<MailIcon className="h-4 w-4" />}
          error={resolveError(errors.email?.message)}
        />

        {/* Password */}
        <Input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          label={t.auth.login.passwordLabel}
          placeholder={t.auth.login.passwordPlaceholder}
          leftIcon={<LockIcon className="h-4 w-4" />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="text-text-muted hover:text-text transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
            </button>
          }
          error={resolveError(errors.password?.message)}
        />

        {/* Remember me / Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              {...register("rememberMe")}
              type="checkbox"
              className="border-border accent-primary h-4 w-4 rounded"
            />
            <span className="text-text-muted text-sm">
              {t.auth.login.rememberMe}
            </span>
          </label>
          <Link
            to="/forgot-password"
            className="text-primary hover:text-primary-hover text-sm font-medium transition-colors"
          >
            {t.auth.login.forgotPassword}
          </Link>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          rounded
          isLoading={isLoading}
          rightIcon={
            !isLoading ? <ArrowRightIcon className="h-4 w-4" /> : undefined
          }
        >
          {isLoading ? t.auth.login.submitting : t.auth.login.submitButton}
        </Button>
      </form>

      {/* Social login */}
      <SocialAuth />

      {/* Register link */}
      <p className="text-text-muted mt-6 text-center text-sm">
        {t.auth.dontHaveAccount}{" "}
        <Link
          to="/register"
          className="text-primary hover:text-primary-hover font-semibold transition-colors"
        >
          {t.auth.signUpForFree}
        </Link>
      </p>
    </div>
  );
};
