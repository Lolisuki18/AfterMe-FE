import type { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* 
          Thêm providers khác tại đây, ví dụ:
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              {children}
            </AuthProvider>
          </QueryClientProvider>
        */}
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
};
