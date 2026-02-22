import { Outlet } from "react-router-dom";
import { appConfig } from "@/app/config";
import { LanguageToggle } from "@/shared/components/LanguageToggle";
import { ThemeToggle } from "@/shared/components/ThemeToggle";

export const AuthLayout = () => {
  return (
    <div className="bg-bg flex min-h-screen flex-col">
      {/* Simple Header */}
      <header className="border-border bg-surface border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <a href="/" className="text-text text-xl font-bold">
            {appConfig.appName}
          </a>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <a
              href="/"
              className="text-text-muted hover:text-text ml-2 text-sm font-medium"
            >
              ← Về trang chủ
            </a>
          </div>
        </div>
      </header>

      {/* Main Content - Centered Auth Forms */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card wrapper */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <Outlet />
          </div>

          {/* Additional info below card */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Bằng việc tiếp tục, bạn đồng ý với{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Điều khoản dịch vụ
              </a>{" "}
              và{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Chính sách bảo mật
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-200 bg-white py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {appConfig.appName}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
