import { useState } from "react";
import { SecuritySettings, DangerZone } from "../components";
import { ChangePasswordModal } from "../components/ChangePasswordModal";
import { ConfirmDeleteModal } from "../components/ConfirmDeleteModal";

const SecurityPage = () => {
  const [pwdOpen, setPwdOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8">
      <SecuritySettings onChangePassword={() => setPwdOpen(true)} />
      <DangerZone onDelete={() => setDeleteOpen(true)} />
      <ChangePasswordModal open={pwdOpen} onClose={() => setPwdOpen(false)} />
      <ConfirmDeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
      />
    </div>
  );
};

export default SecurityPage;
