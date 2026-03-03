import { useState, useEffect } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Button } from "@/shared/components";
import { emergencyStore } from "@/features/emergency-contacts/store/emergencyStore";
import type { EmergencyContact } from "@/features/emergency-contacts/store/emergencyStore";

interface ManageAccessorsModalProps {
  open: boolean;
  onClose: () => void;
  currentAccessorIds: string[];
  onSave: (selectedIds: string[]) => void;
}

export const ManageAccessorsModal = ({
  open,
  onClose,
  currentAccessorIds,
  onSave,
}: ManageAccessorsModalProps) => {
  const { t } = useLanguage();
  const v = t.vault;

  const [contacts, setContacts] = useState<EmergencyContact[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    if (open) {
      const data = emergencyStore.getData();
      setContacts(data.contacts);
      setSelectedIds([...currentAccessorIds]);
    }
  }, [open, currentAccessorIds]);

  const toggleContact = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleSave = () => {
    onSave(selectedIds);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={v.manageAccessors}
      size="md"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            {v.close}
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {v.saveChanges}
          </Button>
        </>
      }
    >
      <p className="text-text-muted mb-4 text-sm">{v.manageAccessorsDesc}</p>

      {contacts.length === 0 ? (
        <p className="text-text-muted py-6 text-center text-sm">
          {v.noContactsAvailable}
        </p>
      ) : (
        <div className="space-y-2">
          {contacts.map((contact) => {
            const isSelected = selectedIds.includes(contact.id);
            return (
              <button
                key={contact.id}
                type="button"
                onClick={() => toggleContact(contact.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
                  isSelected
                    ? "bg-primary/10 border-primary border"
                    : "bg-surface-alt border-border hover:bg-surface-alt/80 border"
                }`}
              >
                {/* Avatar */}
                <div className="bg-primary/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <span className="text-primary text-sm font-bold">
                    {contact.avatarInitials}
                  </span>
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-text text-sm font-semibold">
                    {contact.name}
                  </p>
                  <p className="text-text-muted text-xs">{contact.phone}</p>
                </div>
                {/* Checkbox indicator */}
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                    isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-border"
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </Modal>
  );
};
