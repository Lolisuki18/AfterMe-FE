import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { appConfig } from "@/app/config";
import { useLanguage } from "@/app/useLanguage";

export const AuthLayout = () => {
  const { t } = useLanguage();
  const al = t.authLayout;

  return (
    <div className="bg-bg flex min-h-screen flex-col">
      {/* Simple Header */}
      <header className="border-border bg-surface border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="text-text text-xl font-bold">
            {appConfig.appName}
          </Link>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-text-muted hover:text-text ml-2 text-sm font-medium"
            >
              {al.backToHome}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content - Centered Auth Forms */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card wrapper */}
          <div className="bg-surface rounded-lg p-8 shadow-md">
            <Outlet />
          </div>

          {/* Additional info below card */}
          <div className="mt-6 text-center">
            <p className="text-text-muted text-xs">
              {al.termsNotice}{" "}
              <Link to="/terms" className="text-primary hover:underline">
                {al.termsOfService}
              </Link>{" "}
              {al.and}{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                {al.privacyPolicy}
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-border bg-surface border-t py-6">
        <div className="text-text-muted container mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} {appConfig.appName}. {al.rights}
        </div>
      </footer>
    </div>
  );
};
