const STORAGE_KEY = "afterme_digital_vault";

export type AssetCategory = "banking" | "social" | "document";

export interface DigitalAsset {
  id: string;
  title: string;
  category: AssetCategory;
  addedDate: string;
  username?: string;
  password?: string;
  location?: string;
}

export interface VaultData {
  assets: DigitalAsset[];
  finalMessage: string;
}

const defaultData: VaultData = {
  assets: [
    {
      id: "a1",
      title: "Chase Bank Login",
      category: "banking",
      addedDate: "Oct 24",
      username: "alex.morgan",
      password: "••••••••••",
    },
    {
      id: "a2",
      title: "Instagram Account",
      category: "social",
      addedDate: "Nov 02",
      password: "••••••••••",
    },
    {
      id: "a3",
      title: "Lease Agreement",
      category: "document",
      addedDate: "Yesterday",
      location: "Google Drive / Documents",
    },
  ],
  finalMessage: "",
};

function load(): VaultData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as VaultData;
  } catch {
    /* ignore */
  }
  return JSON.parse(JSON.stringify(defaultData));
}

function persist(data: VaultData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const vaultStore = {
  getData: (): VaultData => load(),

  addAsset: (asset: Omit<DigitalAsset, "id">) => {
    const data = load();
    data.assets.push({ ...asset, id: `a${Date.now()}` });
    persist(data);
  },

  removeAsset: (id: string) => {
    const data = load();
    data.assets = data.assets.filter((a) => a.id !== id);
    persist(data);
  },

  saveFinalMessage: (msg: string) => {
    const data = load();
    data.finalMessage = msg;
    persist(data);
  },
};
