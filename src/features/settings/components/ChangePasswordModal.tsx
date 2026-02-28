import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Button, Input } from "@/shared/components";

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

  const isValid =
    current.trim().length > 0 &&
    newPwd.trim().length >= 6 &&
    newPwd === confirm;

  const handleSubmit = () => {
    if (!isValid) return;
    // Mock: just close — no real backend
    handleClose();
  };

  const handleClose = () => {
    setCurrent("");
    setNewPwd("");
    setConfirm("");
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
