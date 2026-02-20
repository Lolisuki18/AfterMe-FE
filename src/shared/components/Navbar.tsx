import { appConfig } from "@/app/config";

/**
 * Navbar — top navigation bar.
 * Hiển thị tên app, user info, notification, v.v.
 */
export const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <h1 className="text-lg font-semibold text-gray-800">
        {appConfig.appName}
      </h1>

      <div className="flex items-center gap-4">
        {/* Placeholder: notification, avatar, dropdown */}
        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
};
