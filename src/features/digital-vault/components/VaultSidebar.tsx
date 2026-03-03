import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import {
  LockClosedIcon,
  KeyOutlineIcon,
  AlertWarningIcon,
} from "@/shared/icon";
import { ManageAccessorsModal } from "./ManageAccessorsModal";
import { emergencyStore } from "@/features/emergency-contacts/store/emergencyStore";
import { toast } from "sonner";

const ACCESSOR_STORAGE_KEY = "afterme_vault_accessors";

function getAccessorIds(): string[] {
  try {
    const raw = localStorage.getItem(ACCESSOR_STORAGE_KEY);
    if (raw) return JSON.parse(raw) as string[];
  } catch {
    /* ignore */
  }
  // Default: all emergency contacts are accessors
  const contacts = emergencyStore.getData().contacts;
  return contacts.map((c) => c.id);
}

function saveAccessorIds(ids: string[]) {
  localStorage.setItem(ACCESSOR_STORAGE_KEY, JSON.stringify(ids));
}

export const VaultSidebar = () => {
  const { t } = useLanguage();
  const v = t.vault;

  const [showManage, setShowManage] = useState(false);
  const [accessorIds, setAccessorIds] = useState<string[]>(getAccessorIds);

  const contacts = emergencyStore.getData().contacts;
  const accessors = contacts.filter((c) => accessorIds.includes(c.id));

  const handleSaveAccessors = (selectedIds: string[]) => {
    saveAccessorIds(selectedIds);
    setAccessorIds(selectedIds);
    toast.success(v.saveChanges);
  };

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
            onClick={() => setShowManage(true)}
            className="text-primary text-xs font-semibold hover:underline"
          >
            {v.manage}
          </button>
        </div>

        {/* Avatar stack */}
        <div className="mt-3 flex -space-x-2">
          {accessors.slice(0, 3).map((contact, i) => {
            const colors = [
              "bg-primary/20 text-primary",
              "bg-purple-500/20 text-purple-500",
              "bg-amber-500/20 text-amber-500",
            ];
            return (
              <div
                key={contact.id}
                className={`flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[var(--color-bg)] ${colors[i % colors.length]}`}
              >
                <span className="text-xs font-bold">
                  {contact.avatarInitials}
                </span>
              </div>
            );
          })}
          {accessors.length > 3 && (
            <div className="bg-surface-alt text-text-muted flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[var(--color-bg)]">
              <span className="text-xs font-bold">+{accessors.length - 3}</span>
            </div>
          )}
          {accessors.length === 0 && (
            <p className="text-text-muted text-xs">—</p>
          )}
        </div>

        <p className="text-text-muted mt-3 text-xs leading-relaxed">
          {v.accessorsDesc}
        </p>
      </div>

      {/* Manage Accessors Modal */}
      <ManageAccessorsModal
        open={showManage}
        onClose={() => setShowManage(false)}
        currentAccessorIds={accessorIds}
        onSave={handleSaveAccessors}
      />
    </div>
  );
};
