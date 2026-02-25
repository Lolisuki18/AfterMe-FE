import { Outlet, Link } from "react-router-dom";
import Logo from "@/shared/icon/Logo";
import { BackIcon } from "../icon";
import { SettingToggle } from "../components";

export const OnboardingLayout = () => {
  return (
    <div className="bg-bg flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="bg-surface w-full max-w-2xl rounded-2xl p-8 shadow-lg">
          {/* Logo + Controls */}
          <div className="mb-6 flex items-center justify-between">
            <Logo className="hidden h-8 w-auto sm:block" />

            <div className="ml-auto flex items-center gap-3 sm:ml-0">
              <Link
                to="/"
                className="border-border bg-surface text-text-muted hover:bg-surface-alt hover:text-text inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium shadow-sm transition-shadow"
                aria-label="Back to home"
                title="Back to home"
              >
                <BackIcon />
                <span>Home</span>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      </main>
      <SettingToggle />
    </div>
  );
};
