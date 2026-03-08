const STORAGE_KEY = "afterme_emergency_contacts";

export type ContactPriority = "primary" | "secondary" | "backup";
export type NotifyMethod = "sms" | "voice-call" | "live-location" | "no-call";

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  priority: ContactPriority;
  notifyMethods: NotifyMethod[];
  avatarInitials: string;
}

export interface EmergencyData {
  contacts: EmergencyContact[];
}

const defaultData: EmergencyData = {
  contacts: [
    {
      id: "c1",
      name: "Yoshino Himekawa",
      relationship: "mother",
      phone: "1231231232",
      priority: "primary",
      notifyMethods: ["sms", "voice-call", "live-location"],
      avatarInitials: "SJ",
    },
    {
      id: "c2",
      name: "Hikygaya Hachiman",
      relationship: "roommate",
      phone: "0982677408",
      priority: "secondary",
      notifyMethods: ["sms", "no-call"],
      avatarInitials: "DC",
    },
    {
      id: "c3",
      name: "Menma",
      relationship: "sister",
      phone: "1231231231",
      priority: "backup",
      notifyMethods: ["sms", "live-location"],
      avatarInitials: "EL",
    },
  ],
};

function load(): EmergencyData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as EmergencyData;
  } catch {
    /* ignore */
  }
  return JSON.parse(JSON.stringify(defaultData));
}

function persist(data: EmergencyData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const emergencyStore = {
  getData: (): EmergencyData => load(),

  addContact: (contact: Omit<EmergencyContact, "id">) => {
    const data = load();
    data.contacts.push({ ...contact, id: `c${Date.now()}` });
    persist(data);
  },

  removeContact: (id: string) => {
    const data = load();
    data.contacts = data.contacts.filter((c) => c.id !== id);
    persist(data);
  },

  updateContact: (contact: EmergencyContact) => {
    const data = load();
    const idx = data.contacts.findIndex((c) => c.id === contact.id);
    if (idx !== -1) {
      data.contacts[idx] = contact;
      persist(data);
    }
  },
};
