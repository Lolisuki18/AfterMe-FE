import { Outlet } from "react-router-dom";
import { Navbar } from "@/shared/components/Navbar";
import { Sidebar } from "@/shared/components/Sidebar";
import { SettingToggle } from "../components";

export const DashboardLayout = () => {
  return (
    <div className="bg-bg flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
      <SettingToggle />
    </div>
  );
};
