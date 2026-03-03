import { SettingToggle } from "@/shared/components/SettingToggle";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";
import { AppProviders } from "./providers";
import { AppRouter } from "./router";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppRouter />
        <SettingToggle />
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              background: "var(--color-surface)",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
            },
          }}
        />
      </AppProviders>
    </ErrorBoundary>
  );
};
