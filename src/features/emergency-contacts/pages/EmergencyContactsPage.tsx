import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { emergencyStore } from "../store/emergencyStore";
import { ContactStats, ContactCard } from "../components";

const EmergencyContactsPage = () => {
  const { t } = useLanguage();
  const s = t.emergency;
  const { contacts } = emergencyStore.getData();

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
          leftIcon={
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          }
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
          <ContactCard key={c.id} contact={c} />
        ))}
      </div>

      {/* Add another (dashed) */}
      <button
        type="button"
        className="border-border text-text-muted hover:border-primary hover:text-primary flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed py-5 text-sm font-medium transition-colors"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        {s.addAnother}
      </button>
    </div>
  );
};

export default EmergencyContactsPage;
