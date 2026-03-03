import { motion } from "framer-motion";
import type { FrequencyOption } from "../data";
import type { FrequencyType } from "../types";

interface FrequencyGroupProps {
  options: FrequencyOption[];
  value: FrequencyType;
  getLabel: (key: string) => string;
  onChange: (value: FrequencyType) => void;
}

export const FrequencyGroup = ({
  options,
  value,
  getLabel,
  onChange,
}: FrequencyGroupProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <motion.button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={[
              "min-h-[44px] rounded-full px-5 text-sm font-medium transition-all duration-200",
              active
                ? "bg-primary shadow-primary/30 text-white shadow-md"
                : "border-border bg-surface text-text-muted hover:border-primary/50 hover:text-text border",
            ].join(" ")}
            aria-pressed={active}
          >
            {getLabel(opt.labelKey)}
          </motion.button>
        );
      })}
    </div>
  );
};
