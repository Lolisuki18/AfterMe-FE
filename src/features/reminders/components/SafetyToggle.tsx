import { motion } from "framer-motion";
import { ShieldIcon } from "@/shared/icon";

interface SafetyToggleProps {
  checked: boolean;
  label: string;
  desc: string;
  onChange: (val: boolean) => void;
}

export const SafetyToggle = ({
  checked,
  label,
  desc,
  onChange,
}: SafetyToggleProps) => {
  return (
    <div className="border-border bg-surface flex items-start gap-3 rounded-xl border p-4">
      {/* Shield icon */}
      <span className="bg-primary/10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
        <ShieldIcon className="text-primary h-5 w-5" />
      </span>

      {/* Text */}
      <div className="flex-1">
        <p className="text-text text-sm font-semibold">{label}</p>
        <p className="text-text-muted mt-0.5 text-xs leading-relaxed">{desc}</p>
      </div>

      {/* Toggle switch */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={[
          "relative mt-0.5 inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none",
          checked ? "bg-primary" : "bg-surface-alt",
        ].join(" ")}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={[
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm ring-0",
            checked ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        />
      </button>
    </div>
  );
};
