import { appConfig } from "@/app/config";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <header className="border-border bg-surface flex h-16 items-center justify-between border-b px-6">
      <h1 className="text-text text-lg font-semibold">{appConfig.appName}</h1>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <LanguageToggle />
        {/* Placeholder: notification, avatar, dropdown */}
        <div className="bg-surface-alt h-8 w-8 rounded-full" />
      </div>
    </header>
  );
};
