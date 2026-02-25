import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/features/dashboard/components/Sidebar";
import { SettingToggle } from "../components";
import { HamburgerIcon } from "@/shared/icon";
import Logo from "@/shared/icon/Logo";

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-bg flex h-screen">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar with hamburger on mobile */}
        <header className="border-border bg-surface flex h-14 items-center gap-3 border-b px-4 md:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="text-text-muted hover:text-text"
          >
            <HamburgerIcon className="h-6 w-6" />
          </button>
          <Logo className="h-8 w-auto" />
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
      <SettingToggle />
    </div>
  );
};
