import { Outlet } from "react-router-dom";
import Logo from "@/shared/icon/Logo";
import { SettingToggle } from "../components";

export const OnboardingLayout = () => {
  return (
    <div className="bg-bg flex min-h-screen flex-col">
      <main className="flex flex-1 items-start justify-center px-4 py-6 sm:items-center sm:py-8">
        <div className="bg-surface w-full max-w-3xl rounded-2xl p-5 shadow-lg sm:p-8">
          {/* Logo */}
          <div className="mb-4 flex items-center justify-between">
            <Logo className="h-7 w-auto sm:h-8" />
          </div>
          <Outlet />
        </div>
      </main>
      <SettingToggle />
    </div>
  );
};
