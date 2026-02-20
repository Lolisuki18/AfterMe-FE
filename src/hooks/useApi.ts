import { useState, useCallback } from "react";
import type { AxiosError } from "axios";

interface UseApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * useApi — generic hook cho API calls với loading/error state.
 *
 * Ví dụ:
 *   const { data, isLoading, error, execute } = useApi(userApi.getAll);
 *   useEffect(() => { execute(); }, []);
 */
export const useApi = <T, Args extends unknown[] = []>(
  apiFunc: (...args: Args) => Promise<T>,
) => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const execute = useCallback(
    async (...args: Args) => {
      setState({ data: null, isLoading: true, error: null });
      try {
        const data = await apiFunc(...args);
        setState({ data, isLoading: false, error: null });
        return data;
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        const message =
          error.response?.data?.message || error.message || "Unknown error";
        setState({ data: null, isLoading: false, error: message });
        throw err;
      }
    },
    [apiFunc],
  );

  return { ...state, execute };
};
