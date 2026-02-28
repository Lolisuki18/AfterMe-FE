import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { appConfig } from "@/app/config";
import { DatabaseIcon } from "@/shared/icon/DatabaseIcon";

interface AuthLayoutProps {
  /** Content for the left column (hidden on mobile) */
  leftContent: ReactNode;
  /** Content for the right column (form card) */
  rightContent: ReactNode;
  /** Navigation elements rendered in the header's right side */
  headerRight?: ReactNode;
}

export const AuthLayout = ({
  leftContent,
  rightContent,
  headerRight,
}: AuthLayoutProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-bg flex min-h-screen flex-col">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <DatabaseIcon className="text-primary h-7 w-7" />
          <span className="text-text text-lg font-bold tracking-tight">
            {appConfig.appName}
          </span>
        </Link>

        {headerRight && (
          <nav className="flex items-center gap-3 lg:gap-4">{headerRight}</nav>
        )}
      </header>

      {/* ── Main: Two-column layout ──────────────────────────────────────── */}
      <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center xl:gap-16">
          {/* Left column — banner / marketing (hidden on mobile/tablet) */}
          <div className="hidden lg:flex">{leftContent}</div>

          {/* Right column — form */}
          <div className="flex w-full justify-center">{rightContent}</div>
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="px-4 py-4 text-center sm:px-6 lg:px-10">
        <p className="text-text-muted text-xs">{t.auth.footer}</p>
      </footer>
    </div>
  );
};
