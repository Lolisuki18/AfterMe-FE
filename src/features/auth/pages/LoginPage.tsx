import { Link } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { useDocumentTitle } from "@/hooks";
import { AuthLayout } from "../../../shared/layouts/AuthLayout";
import { LoginForm } from "../components/LoginForm";
import { LoginLeftContent } from "../components";

// ─── Page ───────────────────────────────────────────────────────────────────────
const LoginPage = () => {
  const { t } = useLanguage();
  useDocumentTitle("Login");
  return (
    <AuthLayout
      leftContent={<LoginLeftContent />}
      rightContent={<LoginForm />}
      headerRight={
        <>
          <Link
            to="/register"
            className="text-text hover:text-primary hidden text-sm font-medium transition-colors sm:inline"
          >
            {t.auth.signUp}
          </Link>
          <Link
            to="/"
            className="bg-primary hover:bg-primary-hover inline-flex min-h-[44px] items-center rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
          >
            {t.auth.getHelp}
          </Link>
        </>
      }
    />
  );
};

export default LoginPage;
