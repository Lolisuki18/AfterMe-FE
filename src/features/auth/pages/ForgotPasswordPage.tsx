import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { useDocumentTitle } from "@/hooks";
import { AuthLayout } from "@/shared/layouts/AuthLayout";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { MailIcon, ArrowRightIcon } from "@/shared/icon";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
  const { t } = useLanguage();
  const f = t.auth.forgotPassword;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setError("");

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));

    // Always show success (in real app, check if email exists)
    setStatus("success");
    toast.success(f.successMessage);
  };

  const isLoading = status === "loading";

  return (
    <div className="bg-surface w-full max-w-md rounded-2xl p-6 sm:p-8">
      <h1 className="text-text text-2xl font-bold">{f.title}</h1>
      <p className="text-text-muted mt-1 text-sm">{f.subtitle}</p>

      {status === "success" && (
        <div className="bg-success/10 text-success mt-4 rounded-lg p-3 text-sm font-medium">
          {f.successMessage}
        </div>
      )}

      {error && (
        <div className="bg-error/10 text-error mt-4 rounded-lg p-3 text-sm font-medium">
          {error}
        </div>
      )}

      {status !== "success" && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
          <Input
            type="email"
            autoComplete="email"
            label={f.emailLabel}
            placeholder={f.emailPlaceholder}
            leftIcon={<MailIcon className="h-4 w-4" />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            {isLoading ? f.submitting : f.submitButton}
          </Button>
        </form>
      )}

      <p className="text-text-muted mt-6 text-center text-sm">
        <Link
          to="/login"
          className="text-primary hover:text-primary-hover font-semibold transition-colors"
        >
          {f.backToLogin}
        </Link>
      </p>
    </div>
  );
};

const ForgotPasswordLeftContent = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col justify-center gap-6 p-8">
      <div>
        <h2 className="text-text text-3xl leading-tight font-bold italic">
          {t.auth.forgotPassword.title}
        </h2>
        <p className="text-text-muted mt-3 text-base leading-relaxed">
          {t.auth.forgotPassword.subtitle}
        </p>
      </div>
    </div>
  );
};

const ForgotPasswordPage = () => {
  const { t } = useLanguage();
  useDocumentTitle("Forgot Password");

  return (
    <AuthLayout
      leftContent={<ForgotPasswordLeftContent />}
      rightContent={<ForgotPasswordForm />}
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

export default ForgotPasswordPage;
