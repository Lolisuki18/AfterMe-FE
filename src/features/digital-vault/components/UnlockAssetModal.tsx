import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Input, Button } from "@/shared/components";
import { KeyIcon, EyeIcon, EyeOffIcon, ShieldLockIcon } from "@/shared/icon";
import { vaultStore } from "../store/vaultStore";

interface UnlockAssetModalProps {
  open: boolean;
  onClose: () => void;
  onUnlocked: () => void;
  assetTitle: string;
}

export const UnlockAssetModal = ({
  open,
  onClose,
  onUnlocked,
  assetTitle,
}: UnlockAssetModalProps) => {
  const { t } = useLanguage();
  const v = t.vault;

  const [key, setKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState("");

  const handleUnlock = () => {
    if (!key.trim()) {
      setError(v.keyRequired);
      return;
    }
    if (!vaultStore.verifySecurityKey(key)) {
      setError(v.keyIncorrect);
      setKey("");
      return;
    }
    setError("");
    setKey("");
    onUnlocked();
  };

  const handleClose = () => {
    setKey("");
    setError("");
    setShowKey(false);
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
            <ShieldLockIcon className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="text-text text-base font-bold">
              {v.unlockAssetTitle}
            </h3>
            <p className="text-text-muted text-xs">{assetTitle}</p>
          </div>
        </div>

        <p className="text-text-muted text-sm">{v.unlockAssetDesc}</p>

        {/* Key input */}
        <div className="relative">
          <Input
            type={showKey ? "text" : "password"}
            value={key}
            onChange={(e) => {
              setKey(e.target.value);
              setError("");
            }}
            placeholder={v.enterSecurityKey}
            leftIcon={<KeyIcon className="h-4 w-4" />}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
          />
          <button
            type="button"
            onClick={() => setShowKey((s) => !s)}
            className="text-text-muted hover:text-text absolute top-1/2 right-3 -translate-y-1/2 p-1"
          >
            {showKey ? (
              <EyeOffIcon className="h-4 w-4" />
            ) : (
              <EyeIcon className="h-4 w-4" />
            )}
          </button>
        </div>

        {error && <p className="text-xs font-medium text-red-400">{error}</p>}

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={handleClose}>
            {v.cancel}
          </Button>
          <Button onClick={handleUnlock}>{v.unlockButton}</Button>
        </div>
      </div>
    </Modal>
  );
};
