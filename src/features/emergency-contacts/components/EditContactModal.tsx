import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Input, Select, Button } from "@/shared/components";
import { PhoneIcon } from "@/shared/icon";
import type {
  ContactPriority,
  EmergencyContact,
  NotifyMethod,
} from "../store/emergencyStore";

interface EditContactModalProps {
  open: boolean;
  contact: EmergencyContact;
  onClose: () => void;
  onEdit: (contact: EmergencyContact) => void;
}

const NOTIFY_METHODS: { value: NotifyMethod; labelKey: string }[] = [
  { value: "sms", labelKey: "sms" },
  { value: "voice-call", labelKey: "voiceCall" },
  { value: "live-location", labelKey: "liveLocation" },
];

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export const EditContactModal = ({
  open,
  contact,
  onClose,
  onEdit,
}: EditContactModalProps) => {
  const { t } = useLanguage();
  const s = t.emergency;

  const [name, setName] = useState(contact.name);
  const [relationship, setRelationship] = useState(contact.relationship);
  const [phone, setPhone] = useState(contact.phone);
  const [priority, setPriority] = useState<ContactPriority>(contact.priority);
  const [notifyMethods, setNotifyMethods] = useState<NotifyMethod[]>(
    contact.notifyMethods,
  );

  const relationshipOptions = [
    { value: "mother", label: s.mother },
    { value: "father", label: s.father },
    { value: "sister", label: s.sister },
    { value: "brother", label: s.brother },
    { value: "roommate", label: s.roommate },
    { value: "friend", label: s.friend },
    { value: "spouse", label: s.spouse },
    { value: "partner", label: s.partner },
    { value: "colleague", label: s.colleague },
    { value: "other", label: s.other },
  ];

  const priorityOptions = [
    { value: "primary", label: s.primary },
    { value: "secondary", label: s.secondary },
    { value: "backup", label: s.backup },
  ];

  const toggleMethod = (method: NotifyMethod) => {
    setNotifyMethods((prev) =>
      prev.includes(method)
        ? prev.filter((m) => m !== method)
        : [...prev, method],
    );
  };

  const handleSubmit = () => {
    if (!name.trim() || !relationship || !phone.trim() || !priority) return;

    onEdit({
      ...contact,
      name: name.trim(),
      relationship,
      phone: phone.trim(),
      priority,
      notifyMethods,
      avatarInitials: getInitials(name),
    });

    onClose();
  };

  const isValid = name.trim() && relationship && phone.trim() && priority;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={s.editContactTitle}
      size="md"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            {s.cancel}
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={!isValid}>
            {s.editContactBtn}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        {/* Name */}
        <Input
          label={s.contactName}
          placeholder={s.contactNamePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Relationship */}
        <Select
          label={s.relationship}
          options={relationshipOptions}
          placeholder={s.selectRelationship}
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />

        {/* Phone */}
        <Input
          label={s.phone}
          placeholder={s.phonePlaceholder}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          leftIcon={<PhoneIcon className="h-4 w-4" />}
        />

        {/* Priority */}
        <Select
          label={s.priority}
          options={priorityOptions}
          placeholder={s.selectPriority}
          value={priority}
          onChange={(e) => setPriority(e.target.value as ContactPriority)}
        />

        {/* Notification Methods */}
        <div>
          <label className="text-text mb-1.5 block text-sm font-semibold">
            {s.notificationMethods}
          </label>
          <div className="flex flex-wrap gap-2">
            {NOTIFY_METHODS.map(({ value, labelKey }) => {
              const isActive = notifyMethods.includes(value);
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => toggleMethod(value)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary border-primary/30"
                      : "bg-surface-alt text-text-muted border-border hover:bg-surface-alt/80"
                  }`}
                >
                  {(s as Record<string, string>)[labelKey]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
};
