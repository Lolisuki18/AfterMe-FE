import type { ReactNode } from "react";

/**
 * AppProviders — nơi wrap tất cả global providers.
 * Khi thêm state management (Redux, Zustand, React Query...),
 * wrap provider tại đây để giữ App.tsx clean.
 */
interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <>
      {/* 
        Ví dụ khi cần thêm:
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </QueryClientProvider>
      */}
      {children}
    </>
  );
};
