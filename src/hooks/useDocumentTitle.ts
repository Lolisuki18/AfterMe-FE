import { useEffect } from "react";
import { appConfig } from "@/app/config";

/**
 * useDocumentTitle — sets `document.title` reactively.
 *
 * @param title  Page-specific title (e.g. "Dashboard").
 *               The final title will be "Dashboard | AfterMe".
 *               Pass empty string to show just the app name.
 */
export const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    document.title = title
      ? `${title} | ${appConfig.appName}`
      : appConfig.appName;
  }, [title]);
};
