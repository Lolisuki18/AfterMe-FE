import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

export type ToastType = "success" | "error";

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
  /** Auto-dismiss delay in ms (default 3500) */
  duration?: number;
}

export const Toast = ({ toast, onClose, duration = 3500 }: ToastProps) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [toast, onClose, duration]);

  const isSuccess = toast?.type === "success";

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-3.5 shadow-xl backdrop-blur-md"
          style={{
            background: isSuccess
              ? "linear-gradient(135deg,rgba(79,182,172,0.95),rgba(34,197,94,0.9))"
              : "linear-gradient(135deg,rgba(239,68,68,0.95),rgba(239,122,115,0.9))",
            minWidth: "260px",
            maxWidth: "90vw",
          }}
          role="alert"
          aria-live="assertive"
        >
          {/* Icon */}
          <span className="shrink-0 text-white">
            {isSuccess ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <XCircle className="h-5 w-5" />
            )}
          </span>

          {/* Message */}
          <p className="flex-1 text-sm font-medium text-white">
            {toast.message}
          </p>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
