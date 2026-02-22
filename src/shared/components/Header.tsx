import { appConfig } from "@/app/config";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-gray-900">
            {appConfig.appName}
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Trang chủ
            </a>
            <a
              href="/services"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Dịch vụ
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Giới thiệu
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Liên hệ
            </a>
          </nav>
        </div>

        {/* Right side - Auth buttons */}
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Đăng nhập
          </a>
          <a
            href="/register"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Đăng ký
          </a>
        </div>
      </div>
    </header>
  );
};
