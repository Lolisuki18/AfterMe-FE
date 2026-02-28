import { useLanguage } from "@/app/useLanguage";

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
            <svg
              className="h-4 w-4 shrink-0 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <div>
              <p className="text-text text-xs font-semibold">{v.endToEnd}</p>
              <p className="text-text-muted text-[10px]">{v.aes256}</p>
            </div>
          </div>
          {/* Master Key */}
          <div className="flex items-center gap-3 rounded-xl bg-green-500/10 px-3 py-2.5">
            <svg
              className="h-4 w-4 shrink-0 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <div>
              <p className="text-text text-xs font-semibold">{v.masterKey}</p>
              <p className="text-text-muted text-[10px]">{v.storedLocally}</p>
            </div>
          </div>
          {/* Beneficiary Pending */}
          <div className="flex items-center gap-3 rounded-xl bg-amber-500/10 px-3 py-2.5">
            <svg
              className="h-4 w-4 shrink-0 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
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
