import { Link } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { useDocumentTitle } from "@/hooks";
import { AuthLayout } from "../../../shared/layouts/AuthLayout";
import { LoginForm } from "../components/LoginForm";
import { ShieldCheckIcon, AuthCheckIcon } from "@/shared/icon";

// ─── Left column: Banner card with lamp + features ────────────────────────────
const LoginLeftContent = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Banner card */}
      <div className="bg-surface overflow-hidden rounded-2xl">
        {/* Image area – replace src with your own asset */}
        <div className="relative h-56 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=500&fit=crop"
            alt="Desk lamp"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content area */}
        <div className="p-6">
          {/* Badge */}
          <div className="bg-primary/15 mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5">
            <ShieldCheckIcon className="text-primary h-4 w-4" />
            <span className="text-primary text-xs font-semibold">
              {t.auth.loginBadge}
            </span>
          </div>

          <h2 className="text-text text-2xl leading-tight font-bold break-words lg:text-3xl">
            {t.auth.loginHeadline}
          </h2>
          <p className="text-text-muted mt-3 text-sm leading-relaxed break-words whitespace-normal">
            {t.auth.loginSubtext}
          </p>
        </div>
      </div>

      {/* Feature checkmarks */}
      <div className="mt-6 flex flex-wrap gap-6">
        {[t.auth.loginFeature1, t.auth.loginFeature2, t.auth.loginFeature3].map(
          (feature) => (
            <div key={feature} className="flex items-center gap-2">
              <AuthCheckIcon className="text-primary h-5 w-5" />
              <span className="text-text text-sm">{feature}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

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
