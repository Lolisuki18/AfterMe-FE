import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Button, Input } from "@/shared/components";

interface AddMemberModalProps {
  open: boolean;
  onClose: () => void;
}

export const AddMemberModal = ({ open, onClose }: AddMemberModalProps) => {
  const { t } = useLanguage();
  const f = t.family as Record<string, string>;

  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !relationship.trim()) return;
    // Mock: just close — no real backend
    handleClose();
  };

  const handleClose = () => {
    setName("");
    setRelationship("");
    setContact("");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={f.addMemberTitle}
      footer={
        <>
          <Button variant="ghost" size="sm" rounded onClick={handleClose}>
            {f.cancel}
          </Button>
          <Button
            variant="primary"
            size="sm"
            rounded
            onClick={handleSubmit}
            disabled={!name.trim() || !relationship.trim()}
          >
            {f.sendInvite}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <Input
          label={f.fullName}
          placeholder={f.fullNamePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label={f.relationship}
          placeholder={f.relationshipPlaceholder}
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
        <Input
          label={f.emailOrPhone}
          placeholder={f.emailOrPhonePlaceholder}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
    </Modal>
  );
};
