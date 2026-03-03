import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { useDocumentTitle } from "@/hooks";
import { AuthLayout } from "@/shared/layouts/AuthLayout";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { LockIcon, ArrowRightIcon, EyeIcon, EyeOffIcon } from "@/shared/icon";
import { toast } from "sonner";

const ResetPasswordForm = () => {
  const { t } = useLanguage();
  const r = t.auth.resetPassword;
  const v = t.auth.validation;
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 6) {
      setError(v.passwordMin);
      return;
    }
    if (newPassword !== confirmPassword) {
      setError(v.passwordMismatch);
      return;
    }

    setStatus("loading");

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));

    setStatus("success");
    toast.success(r.successMessage);
    setTimeout(() => navigate("/login"), 2000);
  };

  const isLoading = status === "loading";

  return (
    <div className="bg-surface w-full max-w-md rounded-2xl p-6 sm:p-8">
      <h1 className="text-text text-2xl font-bold">{r.title}</h1>
      <p className="text-text-muted mt-1 text-sm">{r.subtitle}</p>

      {status === "success" && (
        <div className="bg-success/10 text-success mt-4 rounded-lg p-3 text-sm font-medium">
          {r.successMessage}
        </div>
      )}

      {error && (
        <div className="bg-error/10 text-error mt-4 rounded-lg p-3 text-sm font-medium">
          {error}
        </div>
      )}

      {status !== "success" && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
          {/* New Password */}
          <Input
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            label={r.newPasswordLabel}
            placeholder={r.newPasswordPlaceholder}
            leftIcon={<LockIcon className="h-4 w-4" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="text-text-muted hover:text-text transition-colors"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            }
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          {/* Confirm Password */}
          <Input
            type={showConfirm ? "text" : "password"}
            autoComplete="new-password"
            label={r.confirmPasswordLabel}
            placeholder={r.confirmPasswordPlaceholder}
            leftIcon={<LockIcon className="h-4 w-4" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirm((p) => !p)}
                className="text-text-muted hover:text-text transition-colors"
              >
                {showConfirm ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            }
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

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
            {isLoading ? r.submitting : r.submitButton}
          </Button>
        </form>
      )}

      <p className="text-text-muted mt-6 text-center text-sm">
        <Link
          to="/login"
          className="text-primary hover:text-primary-hover font-semibold transition-colors"
        >
          {r.backToLogin}
        </Link>
      </p>
    </div>
  );
};

const ResetPasswordLeftContent = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col justify-center gap-6 p-8">
      <div>
        <h2 className="text-text text-3xl leading-tight font-bold italic">
          {t.auth.resetPassword.title}
        </h2>
        <p className="text-text-muted mt-3 text-base leading-relaxed">
          {t.auth.resetPassword.subtitle}
        </p>
      </div>
    </div>
  );
};

const ResetPasswordPage = () => {
  const { t } = useLanguage();
  useDocumentTitle("Reset Password");

  return (
    <AuthLayout
      leftContent={<ResetPasswordLeftContent />}
      rightContent={<ResetPasswordForm />}
      headerRight={
        <>
          <Link
            to="/login"
            className="text-text-muted hover:text-text hidden text-sm transition-colors sm:inline"
          >
            {t.auth.logIn}
          </Link>
          <Link
            to="/register"
            className="bg-primary hover:bg-primary-hover inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
          >
            {t.auth.signUp}
          </Link>
        </>
      }
    />
  );
};

export default ResetPasswordPage;
