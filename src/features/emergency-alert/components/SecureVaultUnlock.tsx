import { useRef, useState, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import {
  LockIcon,
  CheckCircleFilledIcon,
  EyeIcon,
  EyeOffIcon,
} from "@/shared/icon";
import { safetyNetStore } from "@/features/grace-period/store/safetyNetStore";

export const SecureVaultUnlock = () => {
  const { t } = useLanguage();
  const a = t.emergencyAlert;
  const navigate = useNavigate();

  const [pin, setPin] = useState(["", "", "", ""]);
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(
    safetyNetStore.getData().vaultUnlocked,
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (idx: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...pin];
    next[idx] = value;
    setPin(next);
    setError("");
    if (value && idx < 3) inputRefs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !pin[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleUnlock = () => {
    const entered = pin.join("");
    const correct = safetyNetStore.getData().vaultPin;

    if (entered.length < 4) {
      setError("Please enter all 4 digits.");
      return;
    }

    if (entered !== correct) {
      setError("Incorrect PIN. Check your SMS for the code.");
      setPin(["", "", "", ""]);
      inputRefs.current[0]?.focus();
      return;
    }

    safetyNetStore.unlockVault();
    setUnlocked(true);
    setTimeout(() => navigate("/dashboard/digital-vault"), 1200);
  };

  return (
    <section className="bg-surface rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <LockIcon className="text-text-muted h-5 w-5" />
        <div className="flex items-center gap-2">
          <h2 className="text-text text-base font-bold">{a.vaultTitle}</h2>
          <span className="bg-primary/20 text-primary rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
            {a.vaultBadge}
          </span>
        </div>
      </div>
      <p className="text-text-muted mb-6 text-sm">{a.vaultDesc}</p>

      {unlocked ? (
        /* Success state */
        <div className="flex flex-col items-center gap-3 py-4 text-center">
          <CheckCircleFilledIcon className="h-10 w-10 text-emerald-400" />
          <p className="text-text font-semibold">Vault Unlocked</p>
          <p className="text-text-muted text-sm">
            Redirecting to Digital Vault…
          </p>
        </div>
      ) : (
        /* PIN Entry box */
        <div className="bg-surface-alt mx-auto max-w-xs rounded-xl p-6 text-center">
          <p className="text-text mb-1 text-sm font-semibold">{a.pinTitle}</p>
          <p className="text-primary mb-5 text-xs">{a.pinHint}</p>

          <div className="flex justify-center gap-3">
            {pin.map((digit, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                type={showPin ? "text" : "password"}
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`focus:border-primary border-border bg-surface text-text h-12 w-12 rounded-lg border text-center text-xl font-bold tracking-widest transition-all outline-none focus:ring-2 ${
                  error
                    ? "border-red-400 focus:ring-red-400/40"
                    : "focus:ring-primary/40"
                } ${digit ? "border-primary/60" : ""}`}
              />
            ))}
          </div>

          {/* Show/hide PIN toggle */}
          <button
            type="button"
            onClick={() => setShowPin((v) => !v)}
            className="text-text-muted hover:text-text mx-auto mt-3 flex items-center gap-1.5 text-xs transition-colors"
          >
            {showPin ? (
              <EyeOffIcon className="h-3.5 w-3.5" />
            ) : (
              <EyeIcon className="h-3.5 w-3.5" />
            )}
            {showPin ? "Ẩn mã PIN" : "Hiện mã PIN"}
          </button>

          {error && (
            <p className="mt-3 text-xs font-medium text-red-400">{error}</p>
          )}

          <Button
            rounded
            fullWidth
            className="mt-5 py-3 text-sm font-bold"
            onClick={handleUnlock}
          >
            {a.unlockVault}
          </Button>

          <p className="text-text-muted mt-3 text-[10px]">
            Demo PIN: <span className="font-mono font-bold">1234</span>
          </p>
        </div>
      )}
    </section>
  );
};
