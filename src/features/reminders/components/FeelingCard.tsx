import { motion } from "framer-motion";
import { GentleIcon, AlarmIcon, FirmIcon } from "@/shared/icon";
import type { FeelingOption } from "../data";
import type { FeelingType } from "../types";

interface FeelingCardProps {
  option: FeelingOption;
  selected: boolean;
  label: string;
  desc: string;
  onClick: (id: FeelingType) => void;
}

const ICON_MAP: Record<
  FeelingType,
  React.ComponentType<{ className?: string }>
> = {
  gentle: GentleIcon,
  normal: AlarmIcon,
  firm: FirmIcon,
};

export const FeelingCard = ({
  option,
  selected,
  label,
  desc,
  onClick,
}: FeelingCardProps) => {
  const Icon = ICON_MAP[option.id];

  return (
    <motion.button
      type="button"
      onClick={() => onClick(option.id)}
      whileHover={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={[
        "relative flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-xl border-2 bg-gradient-to-br px-4 py-3.5 text-left backdrop-blur-sm transition-all duration-200",
        option.gradient,
        selected
          ? `${option.ring} shadow-lg ring-2`
          : "border-border hover:border-border/80 shadow-sm",
      ].join(" ")}
      aria-pressed={selected}
    >
      {/* Icon */}
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/60 dark:bg-white/10 ${selected ? "shadow-md" : ""}`}
      >
        <Icon className="text-text h-5 w-5" />
      </span>

      {/* Text */}
      <span className="min-w-0 flex-1">
        <span className="text-text block text-sm font-semibold">{label}</span>
        <span className="text-text-muted block truncate text-xs">{desc}</span>
      </span>

      {/* Selected indicator */}
      {selected && (
        <motion.span
          layoutId="feeling-dot"
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${option.dot}`}
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
};
