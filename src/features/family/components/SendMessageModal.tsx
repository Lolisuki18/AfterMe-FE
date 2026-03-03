import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Button, Textarea } from "@/shared/components";
import type { FamilyMember } from "../store/familyStore";

interface SendMessageModalProps {
  open: boolean;
  onClose: () => void;
  member: FamilyMember | null;
}

export const SendMessageModal = ({
  open,
  onClose,
  member,
}: SendMessageModalProps) => {
  const { t } = useLanguage();
  const f = t.family as Record<string, string>;
  const [message, setMessage] = useState("");

  if (!member) return null;

  const name = f[member.nameKey];

  const handleSend = () => {
    if (!message.trim()) return;
    // Mock: just close — no real backend
    setMessage("");
    onClose();
  };

  const handleClose = () => {
    setMessage("");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={f.sendMessageTitle}
      footer={
        <>
          <Button variant="ghost" size="sm" rounded onClick={handleClose}>
            {f.cancel}
          </Button>
          <Button
            variant="primary"
            size="sm"
            rounded
            onClick={handleSend}
            disabled={!message.trim()}
          >
            {f.send}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        {/* Recipient */}
        <div>
          <p className="text-text-muted text-xs font-semibold">{f.messageTo}</p>
          <div className="mt-1 flex items-center gap-2">
            <div className="bg-primary/20 text-primary flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
              {member.avatarInitials}
            </div>
            <span className="text-text text-sm font-semibold">{name}</span>
          </div>
        </div>

        <Textarea
          label={f.messageLabel}
          placeholder={f.messagePlaceholder}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </Modal>
  );
};
