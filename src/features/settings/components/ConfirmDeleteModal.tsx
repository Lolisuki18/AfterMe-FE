import { useLanguage } from "@/app/useLanguage";
import { Modal, Button } from "@/shared/components";
import { WarningIcon } from "@/shared/icon";

interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
}

export const ConfirmDeleteModal = ({
  open,
  onClose,
}: ConfirmDeleteModalProps) => {
  const { t } = useLanguage();
  const s = t.accountSettings.danger;

  const handleDelete = () => {
    // Mock: just close — no real backend
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={s.confirmTitle} size="sm">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
          <WarningIcon className="h-6 w-6 text-red-500" />
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          {s.confirmDescription}
        </p>
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <Button variant="ghost" size="sm" rounded onClick={onClose}>
          {s.cancel}
        </Button>
        <Button variant="danger" size="sm" rounded onClick={handleDelete}>
          {s.confirmButton}
        </Button>
      </div>
    </Modal>
  );
};
