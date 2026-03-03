import { Link } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { useDocumentTitle } from "@/hooks";
import { AuthLayout } from "../../../shared/layouts/AuthLayout";
import { RegisterForm } from "../components/RegisterForm";
import { RegisterLeftContent } from "../components";

const RegisterPage = () => {
  const { t } = useLanguage();
  useDocumentTitle("Register");

  return (
    <AuthLayout
      leftContent={<RegisterLeftContent />}
      rightContent={<RegisterForm />}
      headerRight={
        <>
          <Link
            to="/"
            className="text-text-muted hover:text-text hidden text-sm transition-colors sm:inline"
          >
            {t.auth.navHome}
          </Link>
          <Link
            to="/about"
            className="text-text-muted hover:text-text hidden text-sm transition-colors sm:inline"
          >
            {t.auth.navAbout}
          </Link>
          <Link
            to="/wellbeing"
            className="text-text-muted hover:text-text hidden text-sm transition-colors sm:inline"
          >
            {t.auth.navSafety}
          </Link>
          <Link
            to="/contact"
            className="text-text-muted hover:text-text hidden text-sm transition-colors sm:inline"
          >
            {t.auth.navContact}
          </Link>
          <Link
            to="/login"
            className="bg-primary hover:bg-primary-hover inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
          >
            {t.auth.logIn}
          </Link>
        </>
      }
    />
  );
};

export default RegisterPage;
