import { useState, useCallback } from "react";

/**
 * useToggle — simple boolean toggle hook.
 * Dùng cho sidebar open/close, modal, dropdown, v.v.
 *
 * Ví dụ:
 *   const [isOpen, toggle, setIsOpen] = useToggle(false);
 */
export const useToggle = (
  initialValue = false,
): [boolean, () => void, (value: boolean) => void] => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((prev) => !prev), []);
  return [value, toggle, setValue];
};
