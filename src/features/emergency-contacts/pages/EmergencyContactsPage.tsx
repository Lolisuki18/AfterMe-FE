import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { UserAddIcon, PlusIcon } from "@/shared/icon";
import { emergencyStore, type EmergencyContact } from "../store/emergencyStore";
import {
  ContactStats,
  ContactCard,
  AddContactModal,
  EditContactModal,
} from "../components";
import { toast } from "sonner";

const EmergencyContactsPage = () => {
  const { t } = useLanguage();
  const s = t.emergency;
  const [, setRefreshKey] = useState(0);
  const { contacts } = emergencyStore.getData();
  const [showAddContact, setShowAddContact] = useState(false);
  const [editingContact, setEditingContact] = useState<EmergencyContact | null>(
    null,
  );

  const handleAddContact = (
    contact: Parameters<typeof emergencyStore.addContact>[0],
  ) => {
    emergencyStore.addContact(contact);
    setRefreshKey((k) => k + 1);
    toast.success(s.contactAdded);
  };

  const handleEditContact = (contact: EmergencyContact) => {
    emergencyStore.updateContact(contact);
    setEditingContact(null);
    setRefreshKey((k) => k + 1);
    toast.success(s.contactUpdated);
  };

  const handleDeleteContact = (id: string) => {
    emergencyStore.removeContact(id);
    setRefreshKey((k) => k + 1);
    toast.success(s.contactDeleted);
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-text text-2xl font-bold">{s.title}</h1>
          <p className="text-text-muted mt-1 max-w-lg text-sm leading-relaxed">
            {s.subtitle}
          </p>
        </div>
        <Button
          variant="primary"
          rounded
          leftIcon={<UserAddIcon className="h-4 w-4" />}
          onClick={() => setShowAddContact(true)}
        >
          {s.addContact}
        </Button>
      </div>

      {/* Stats */}
      <ContactStats
        totalContacts={contacts.length}
        verifiedPercent="100%"
        activeAlerts="SMS & Call"
      />

      {/* Contact list */}
      <div className="space-y-4">
        {contacts.map((c) => (
          <ContactCard
            key={c.id}
            contact={c}
            onEdit={setEditingContact}
            onDelete={handleDeleteContact}
          />
        ))}
      </div>

      {/* Add another (dashed) */}
      <button
        type="button"
        onClick={() => setShowAddContact(true)}
        className="border-border text-text-muted hover:border-primary hover:text-primary flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed py-5 text-sm font-medium transition-colors"
      >
        <PlusIcon className="h-5 w-5" />
        {s.addAnother}
      </button>

      {/* Add Contact Modal */}
      <AddContactModal
        open={showAddContact}
        onClose={() => setShowAddContact(false)}
        onAdd={handleAddContact}
      />

      {/* Edit Contact Modal */}
      {editingContact && (
        <EditContactModal
          open={true}
          contact={editingContact}
          onClose={() => setEditingContact(null)}
          onEdit={handleEditContact}
        />
      )}
    </div>
  );
};

export default EmergencyContactsPage;
