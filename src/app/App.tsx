import { SettingToggle } from "@/shared/components/SettingToggle";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";
import { AppProviders } from "./providers";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppRouter />
        <SettingToggle />
      </AppProviders>
    </ErrorBoundary>
  );
};
