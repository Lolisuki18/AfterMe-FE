import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Button, Input } from "@/shared/components";
import { settingsStore } from "../store/settingsStore";
import { toast } from "sonner";

interface ChangePasswordModalProps {
  open: boolean;
  onClose: () => void;
}

export const ChangePasswordModal = ({
  open,
  onClose,
}: ChangePasswordModalProps) => {
  const { t } = useLanguage();
  const s = t.accountSettings.security;

  const [current, setCurrent] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const isValid =
    current.trim().length > 0 &&
    newPwd.trim().length >= 6 &&
    newPwd === confirm;

  const handleSubmit = () => {
    setError("");
    if (!current.trim()) {
      setError(s.allFieldsRequired);
      return;
    }
    if (newPwd.length < 6) {
      setError(s.passwordMinLength);
      return;
    }
    if (newPwd !== confirm) {
      setError(s.passwordMismatch);
      return;
    }
    // Simulate password change
    settingsStore.updateProfile({ passwordLastChanged: "Just now" });
    toast.success(s.passwordUpdated);
    handleClose();
  };

  const handleClose = () => {
    setCurrent("");
    setNewPwd("");
    setConfirm("");
    setError("");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={s.changePasswordTitle}
      footer={
        <>
          <Button variant="ghost" size="sm" rounded onClick={handleClose}>
            {s.cancel}
          </Button>
          <Button
            variant="primary"
            size="sm"
            rounded
            onClick={handleSubmit}
            disabled={!isValid}
          >
            {s.updatePassword}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </p>
        )}
        <Input
          label={s.currentPassword}
          type="password"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <Input
          label={s.newPassword}
          type="password"
          value={newPwd}
          onChange={(e) => setNewPwd(e.target.value)}
        />
        <Input
          label={s.confirmPassword}
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </div>
    </Modal>
  );
};
