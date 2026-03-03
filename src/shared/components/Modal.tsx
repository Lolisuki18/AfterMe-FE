import { useEffect, type ReactNode } from "react";
import { XIcon } from "@/shared/icon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  /** Optional footer (action buttons) */
  footer?: ReactNode;
  /** Max-width class — default "max-w-md" */
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export const Modal = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
}: ModalProps) => {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <div
        className={`bg-surface relative w-full ${SIZE_MAP[size]} rounded-2xl p-6 shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-text text-lg font-bold">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-text-muted hover:text-text rounded-lg p-1 transition-colors"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Body */}
        <div>{children}</div>

        {/* Footer */}
        {footer && <div className="mt-5 flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  );
};
