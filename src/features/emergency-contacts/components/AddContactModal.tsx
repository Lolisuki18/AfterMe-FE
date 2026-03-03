import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Input, Select, Button } from "@/shared/components";
import { PhoneIcon } from "@/shared/icon";
import type { ContactPriority, NotifyMethod } from "../store/emergencyStore";

interface AddContactModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (contact: {
    name: string;
    relationship: string;
    phone: string;
    priority: ContactPriority;
    notifyMethods: NotifyMethod[];
    avatarInitials: string;
  }) => void;
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

export const AddContactModal = ({
  open,
  onClose,
  onAdd,
}: AddContactModalProps) => {
  const { t } = useLanguage();
  const s = t.emergency;

  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [priority, setPriority] = useState<ContactPriority | "">("");
  const [notifyMethods, setNotifyMethods] = useState<NotifyMethod[]>(["sms"]);

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

  const resetForm = () => {
    setName("");
    setRelationship("");
    setPhone("");
    setPriority("");
    setNotifyMethods(["sms"]);
  };

  const handleSubmit = () => {
    if (!name.trim() || !relationship || !phone.trim() || !priority) return;

    onAdd({
      name: name.trim(),
      relationship,
      phone: phone.trim(),
      priority: priority as ContactPriority,
      notifyMethods,
      avatarInitials: getInitials(name),
    });

    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const isValid = name.trim() && relationship && phone.trim() && priority;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={s.addContactTitle}
      size="md"
      footer={
        <>
          <Button variant="ghost" onClick={handleClose}>
            {s.cancel}
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={!isValid}>
            {s.addContactBtn}
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
