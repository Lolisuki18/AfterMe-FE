import { useLanguage } from "@/app/useLanguage";
import { AuthLayout } from "../components/AuthLayout";
import { RegisterForm } from "../components/RegisterForm";

const RegisterPage = () => {
  const { t } = useLanguage();

  return (
    <AuthLayout>
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-navy text-3xl font-black tracking-tight">
          {t.auth.register.createAccount}
        </h1>
        <p className="text-text-muted mt-2 text-sm">
          {t.auth.register.subtitle}
        </p>
      </div>

      {/* Form */}
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
