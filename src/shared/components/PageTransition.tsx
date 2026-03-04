import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Transition } from "framer-motion";

interface PageTransitionProps {
  routeKey: string;
  children: ReactNode;
  /** "page" = full-page fade+slide (public/auth), "panel" = subtle for dashboard inner content */
  variant?: "page" | "panel";
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const transitions: Record<"page" | "panel", Transition> = {
  page: { duration: 0.28, ease: EASE },
  panel: { duration: 0.22, ease: EASE },
};

const initial = { page: { opacity: 0, y: 14 }, panel: { opacity: 0, y: 8 } };
const animate = { opacity: 1, y: 0 };
const exit = { page: { opacity: 0, y: -8 }, panel: { opacity: 0, y: -4 } };

export const PageTransition = ({
  routeKey,
  children,
  variant = "page",
}: PageTransitionProps) => (
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={routeKey}
      initial={initial[variant]}
      animate={animate}
      exit={exit[variant]}
      transition={transitions[variant]}
      style={{ height: "100%", width: "100%" }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
