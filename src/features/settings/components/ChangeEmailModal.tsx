import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Button, Input } from "@/shared/components";
import { settingsStore } from "../store/settingsStore";
import { toast } from "sonner";

interface ChangeEmailModalProps {
  open: boolean;
  onClose: () => void;
}

export const ChangeEmailModal = ({ open, onClose }: ChangeEmailModalProps) => {
  const { t } = useLanguage();
  const s = t.accountSettings.security;
  const profile = settingsStore.getProfile();

  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(newEmail) && newEmail === confirmEmail;

  const handleSubmit = () => {
    setError("");
    if (!emailRegex.test(newEmail)) {
      setError(s.emailInvalid);
      return;
    }
    if (newEmail !== confirmEmail) {
      setError(s.emailMismatch);
      return;
    }
    // Simulate email change
    settingsStore.updateProfile({ email: newEmail });
    toast.success(s.emailUpdated);
    handleClose();
  };

  const handleClose = () => {
    setNewEmail("");
    setConfirmEmail("");
    setError("");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={s.changeEmailTitle}
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
            {s.updateEmail}
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

        <div>
          <p className="text-text-muted text-xs font-medium">
            {s.currentEmail}
          </p>
          <p className="text-text mt-1 text-sm font-semibold">
            {profile.email}
          </p>
        </div>

        <Input
          label={s.newEmail}
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="new@example.com"
        />
        <Input
          label={s.confirmEmail}
          type="email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          placeholder="new@example.com"
        />
      </div>
    </Modal>
  );
};
