import { useLanguage } from "@/app/useLanguage";
import { Modal, Button } from "@/shared/components";
import { AlertTriangleIcon } from "@/shared/icon";

interface DeleteConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  assetTitle: string;
}

export const DeleteConfirmModal = ({
  open,
  onClose,
  onConfirm,
  assetTitle,
}: DeleteConfirmModalProps) => {
  const { t } = useLanguage();
  const v = t.vault;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="space-y-5">
        {/* Warning icon */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
            <AlertTriangleIcon className="h-6 w-6 text-red-500" />
          </div>
          <h3 className="text-text text-base font-bold">
            {v.deleteConfirmTitle}
          </h3>
          <p className="text-text-muted text-sm">
            {v.deleteConfirmDesc.replace("{asset}", assetTitle)}
          </p>
        </div>

        {/* Warning box */}
        <div className="rounded-lg bg-red-500/5 px-4 py-3">
          <p className="text-center text-xs font-medium text-red-400">
            {v.deleteWarning}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>
            {v.cancel}
          </Button>
          <Button
            variant="primary"
            onClick={onConfirm}
            className="!bg-red-500 hover:!bg-red-600"
          >
            {v.deleteConfirmButton}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
