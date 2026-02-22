import type { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider>
      {/* 
        Thêm providers khác tại đây, ví dụ:
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </QueryClientProvider>
      */}
      {children}
    </ThemeProvider>
  );
};
