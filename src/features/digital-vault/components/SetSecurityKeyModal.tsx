import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Input, Button } from "@/shared/components";
import { KeyIcon, EyeIcon, EyeOffIcon, ShieldCheckIcon } from "@/shared/icon";
import { vaultStore } from "../store/vaultStore";
import { toast } from "sonner";

interface SetSecurityKeyModalProps {
  open: boolean;
  onClose: () => void;
}

export const SetSecurityKeyModal = ({
  open,
  onClose,
}: SetSecurityKeyModalProps) => {
  const { t } = useLanguage();
  const v = t.vault;

  const [newKey, setNewKey] = useState("");
  const [confirmKey, setConfirmKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (newKey.length < 4) {
      setError(v.keyMinLength);
      return;
    }
    if (newKey !== confirmKey) {
      setError(v.keyMismatch);
      return;
    }
    vaultStore.setSecurityKey(newKey);
    toast.success(v.keySetSuccess);
    setNewKey("");
    setConfirmKey("");
    setError("");
    onClose();
  };

  const handleClose = () => {
    setNewKey("");
    setConfirmKey("");
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
            <ShieldCheckIcon className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="text-text text-base font-bold">
              {v.setSecurityKeyTitle}
            </h3>
            <p className="text-text-muted text-xs">{v.setSecurityKeyDesc}</p>
          </div>
        </div>

        {/* New key */}
        <div className="space-y-3">
          <div className="relative">
            <Input
              type={showKey ? "text" : "password"}
              value={newKey}
              onChange={(e) => {
                setNewKey(e.target.value);
                setError("");
              }}
              placeholder={v.newKeyPlaceholder}
              leftIcon={<KeyIcon className="h-4 w-4" />}
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

          {/* Confirm key */}
          <Input
            type={showKey ? "text" : "password"}
            value={confirmKey}
            onChange={(e) => {
              setConfirmKey(e.target.value);
              setError("");
            }}
            placeholder={v.confirmKeyPlaceholder}
            leftIcon={<KeyIcon className="h-4 w-4" />}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
        </div>

        {error && <p className="text-xs font-medium text-red-400">{error}</p>}

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={handleClose}>
            {v.cancel}
          </Button>
          <Button onClick={handleSave}>{v.saveKey}</Button>
        </div>
      </div>
    </Modal>
  );
};
