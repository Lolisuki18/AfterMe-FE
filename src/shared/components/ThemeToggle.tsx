import { useTheme } from "@/app/useTheme";
import { MoonIcon, SunIcon } from "../icon";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="border-border bg-surface fixed right-6 bottom-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-14 md:w-14 lg:bottom-8 lg:left-8"
    >
      {isDark ? (
        <SunIcon className="text-text h-5 w-5 md:h-6 md:w-6" />
      ) : (
        <MoonIcon className="text-text h-5 w-5 md:h-6 md:w-6" />
      )}
    </button>
  );
};
