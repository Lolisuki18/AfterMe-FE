import { useRef, useState, type KeyboardEvent } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { LockIcon } from "../icon";

export const SecureVaultUnlock = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;

  const [pin, setPin] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (idx: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...pin];
    next[idx] = value;
    setPin(next);
    if (value && idx < 3) inputRefs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !pin[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  return (
    <section className="rounded-2xl bg-gray-800/70 p-5 sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <LockIcon className="h-5 w-5 text-gray-400" />
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-white">{a.vaultTitle}</h2>
          <span className="bg-primary/20 text-primary rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
            {a.vaultBadge}
          </span>
        </div>
      </div>
      <p className="mb-6 text-sm text-gray-400">{a.vaultDesc}</p>

      {/* PIN Entry box */}
      <div className="mx-auto max-w-xs rounded-xl bg-gray-900/60 p-6 text-center">
        <p className="mb-1 text-sm font-semibold text-white">{a.pinTitle}</p>
        <p className="text-primary mb-5 text-xs">{a.pinHint}</p>

        <div className="flex justify-center gap-3">
          {pin.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="focus:border-primary focus:ring-primary h-12 w-12 rounded-lg border border-gray-600 bg-gray-800 text-center text-lg font-bold text-white transition-colors outline-none focus:ring-1"
            />
          ))}
        </div>

        <Button rounded fullWidth className="mt-5 py-3 text-sm font-bold">
          {a.unlockVault}
        </Button>
      </div>
    </section>
  );
};
