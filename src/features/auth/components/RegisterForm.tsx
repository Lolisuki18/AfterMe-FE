import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { registerSchema, type RegisterFormData } from "../schemas/authSchemas";
import { authStore } from "../store/authStore";
import { resolveKey } from "../utils/authUtils";
import { UserIcon } from "../icon/UserIcon";
import { MailIcon } from "../icon/MailIcon";
import { LockIcon } from "../icon/LockIcon";

// ─────────────────────────────────────────────────────────────────────────────
export const RegisterForm = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const resolveError = (key?: string) => (key ? resolveKey(t, key) : undefined);

  const onSubmit = async (data: RegisterFormData) => {
    setStatus("loading");
    const result = await authStore.register({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (result.success) {
      setStatus("success");
      setMessage(resolveKey(t, result.messageKey));
      setTimeout(() => navigate("/login"), 2000);
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
        {t.auth.register.createAccount}
      </h1>
      <p className="text-text-muted mt-1 text-sm break-words whitespace-normal">
        {t.auth.register.subtitle}
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
        {/* Full Name */}
        <Input
          {...register("name")}
          type="text"
          autoComplete="name"
          label={t.auth.register.nameLabel}
          placeholder={t.auth.register.namePlaceholder}
          leftIcon={<UserIcon className="h-4 w-4" />}
          error={resolveError(errors.name?.message)}
        />

        {/* University Email */}
        <Input
          {...register("email")}
          type="email"
          autoComplete="email"
          label={t.auth.register.emailLabel}
          placeholder={t.auth.register.emailPlaceholder}
          leftIcon={<MailIcon className="h-4 w-4" />}
          error={resolveError(errors.email?.message)}
        />

        {/* Password */}
        <Input
          {...register("password")}
          type="password"
          autoComplete="new-password"
          label={t.auth.register.passwordLabel}
          placeholder={t.auth.register.passwordPlaceholder}
          leftIcon={<LockIcon className="h-4 w-4" />}
          error={resolveError(errors.password?.message)}
        />

        {/* Terms checkbox */}
        <div>
          <label className="flex cursor-pointer items-start gap-2">
            <input
              {...register("terms")}
              type="checkbox"
              className="border-border accent-primary mt-0.5 h-4 w-4 rounded"
            />
            <span className="text-text-muted text-sm">
              {t.auth.register.agreeTerms}{" "}
              <Link to="/terms" className="text-primary hover:underline">
                {t.auth.register.termsOfService}
              </Link>{" "}
              {t.auth.register.and}{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                {t.auth.register.privacyPolicy}
              </Link>
              .
            </span>
          </label>
          {errors.terms && (
            <p className="text-error mt-1 text-xs">
              {resolveError(errors.terms.message)}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          rounded
          isLoading={isLoading}
        >
          {isLoading
            ? t.auth.register.submitting
            : t.auth.register.submitButton}
        </Button>
      </form>

      {/* Login link */}
      <p className="text-text-muted mt-6 text-center text-sm">
        {t.auth.alreadyHaveAccount}{" "}
        <Link
          to="/login"
          className="text-primary hover:text-primary-hover font-semibold transition-colors"
        >
          {t.auth.logIn}
        </Link>
      </p>
    </div>
  );
};
