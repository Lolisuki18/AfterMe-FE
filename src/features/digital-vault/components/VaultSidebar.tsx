import { useLanguage } from "@/app/useLanguage";
import {
  LockClosedIcon,
  KeyOutlineIcon,
  AlertWarningIcon,
} from "@/shared/icon";

export const VaultSidebar = () => {
  const { t } = useLanguage();
  const v = t.vault;

  return (
    <div className="space-y-5">
      {/* Security Status */}
      <div className="bg-surface rounded-2xl p-5">
        <h3 className="text-text text-sm font-bold">{v.securityStatus}</h3>
        <div className="mt-3 space-y-2.5">
          {/* Encrypted */}
          <div className="flex items-center gap-3 rounded-xl bg-green-500/10 px-3 py-2.5">
            <LockClosedIcon className="h-4 w-4 shrink-0 text-green-500" />
            <div>
              <p className="text-text text-xs font-semibold">{v.endToEnd}</p>
              <p className="text-text-muted text-[10px]">{v.aes256}</p>
            </div>
          </div>
          {/* Master Key */}
          <div className="flex items-center gap-3 rounded-xl bg-green-500/10 px-3 py-2.5">
            <KeyOutlineIcon className="h-4 w-4 shrink-0 text-green-500" />
            <div>
              <p className="text-text text-xs font-semibold">{v.masterKey}</p>
              <p className="text-text-muted text-[10px]">{v.storedLocally}</p>
            </div>
          </div>
          {/* Beneficiary Pending */}
          <div className="flex items-center gap-3 rounded-xl bg-amber-500/10 px-3 py-2.5">
            <AlertWarningIcon className="h-4 w-4 shrink-0 text-amber-500" />
            <div>
              <p className="text-text text-xs font-semibold">
                {v.beneficiaryPending}
              </p>
              <p className="text-text-muted text-[10px]">
                {v.contactNeedsVerify}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vault Access Protocol */}
      <div className="bg-surface rounded-2xl p-5">
        <h3 className="text-text text-sm font-bold">{v.vaultAccessProtocol}</h3>
        <ul className="text-text-muted mt-3 space-y-2 text-xs">
          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-current" />
            {v.inactivityTimer}
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-current" />
            {v.verificationAttempts}
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-current" />
            {v.autoWipe}
          </li>
        </ul>
      </div>

      {/* Vault Accessors */}
      <div className="bg-surface rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-text text-sm font-bold">{v.vaultAccessors}</h3>
          <button
            type="button"
            className="text-primary text-xs font-semibold hover:underline"
          >
            {v.manage}
          </button>
        </div>

        {/* Avatar stack */}
        <div className="mt-3 flex -space-x-2">
          <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[var(--color-bg)]">
            <span className="text-primary text-xs font-bold">SJ</span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 ring-2 ring-[var(--color-bg)]">
            <span className="text-xs font-bold text-purple-500">DC</span>
          </div>
          <div className="bg-surface-alt text-text-muted flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[var(--color-bg)]">
            <span className="text-xs font-bold">+1</span>
          </div>
        </div>

        <p className="text-text-muted mt-3 text-xs leading-relaxed">
          {v.accessorsDesc}
        </p>
      </div>
    </div>
  );
};
