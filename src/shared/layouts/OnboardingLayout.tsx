import { Outlet, Link } from "react-router-dom";
import Logo from "@/shared/icon/Logo";
import { LanguageToggle } from "@/shared/components/LanguageToggle";
import { ThemeToggle } from "@/shared/components/ThemeToggle";
import { BackIcon } from "../icon";

export const OnboardingLayout = () => {
  return (
    <div className="bg-bg flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="bg-surface w-full max-w-2xl rounded-2xl p-8 shadow-lg">
          {/* Logo + Controls */}
          <div className="mb-6 flex items-center justify-between">
            <Logo className="h-8 w-auto" />

            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="border-border bg-surface text-text-muted hover:bg-surface-alt hover:text-text inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium shadow-sm transition-shadow"
                aria-label="Back to home"
                title="Back to home"
              >
                <BackIcon />
                <span>Home</span>
              </Link>

              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
