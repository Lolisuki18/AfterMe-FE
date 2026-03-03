import type { Translations } from "@/locales";

/**
 * Resolve a dotted key path against the Translations object.
 * e.g. resolveKey(t, "auth.validation.emailRequired") → "Email address is required."
 */
export const resolveKey = (t: Translations, key: string): string => {
  const parts = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = t;
  for (const part of parts) {
    if (current == null) return key;
    current = current[part];
  }
  return typeof current === "string" ? current : key;
};
