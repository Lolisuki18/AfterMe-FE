import { Outlet } from "react-router-dom";
import { Navbar } from "@/shared/components/Navbar";
import { Sidebar } from "@/shared/components/Sidebar";

/**
 * DashboardLayout — layout chính cho các trang sau khi đăng nhập.
 * Bao gồm Sidebar bên trái, Navbar trên cùng, và content area.
 */
export const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
