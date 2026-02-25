import { ThemeToggle } from "@/shared/components/ThemeToggle";
import { AppProviders } from "./providers";
import { AppRouter } from "./router";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
      <ThemeToggle />
    </AppProviders>
  );
};
