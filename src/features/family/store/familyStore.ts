export type MemberStatus = "safe" | "pending" | "sos" | "offline";

export interface FamilyMember {
  id: string;
  nameKey: string;
  relationKey: string;
  locationKey: string;
  checkInKey: string;
  status: MemberStatus;
  avatarInitials: string;
}

export interface SafetyLog {
  id: string;
  memberInitials: string;
  messageKey: string;
  time: string;
  dayKey: string;
}

export interface FamilyData {
  members: FamilyMember[];
  logs: SafetyLog[];
}

const STORAGE_KEY = "afterme_family";

const DEFAULT_DATA: FamilyData = {
  members: [
    {
      id: "fm1",
      nameKey: "sarahName",
      relationKey: "sarahRelation",
      locationKey: "sarahLocation",
      checkInKey: "sarahCheckIn",
      status: "safe",
      avatarInitials: "SJ",
    },
    {
      id: "fm2",
      nameKey: "davidName",
      relationKey: "davidRelation",
      locationKey: "davidLocation",
      checkInKey: "davidCheckIn",
      status: "pending",
      avatarInitials: "DJ",
    },
    {
      id: "fm3",
      nameKey: "emmaName",
      relationKey: "emmaRelation",
      locationKey: "emmaLocation",
      checkInKey: "emmaCheckIn",
      status: "safe",
      avatarInitials: "EJ",
    },
  ],
  logs: [
    {
      id: "l1",
      memberInitials: "SJ",
      messageKey: "logCheckIn",
      time: "10:30 AM",
      dayKey: "today",
    },
    {
      id: "l2",
      memberInitials: "DJ",
      messageKey: "logArrivedHome",
      time: "9:15 AM",
      dayKey: "today",
    },
    {
      id: "l3",
      memberInitials: "EJ",
      messageKey: "logSOSCleared",
      time: "8:00 AM",
      dayKey: "today",
    },
    {
      id: "l4",
      memberInitials: "SJ",
      messageKey: "logLeftSchool",
      time: "4:30 PM",
      dayKey: "yesterday",
    },
    {
      id: "l5",
      memberInitials: "DJ",
      messageKey: "logBatteryLow",
      time: "11:00 PM",
      dayKey: "yesterday",
    },
  ],
};

export const familyStore = {
  getData(): FamilyData {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      /* ignore */
    }
    return DEFAULT_DATA;
  },

  removeMember(id: string): void {
    const data = this.getData();
    data.members = data.members.filter((m) => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
};
