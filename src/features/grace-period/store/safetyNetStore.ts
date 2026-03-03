const STORAGE_KEY = "afterme_safety_net";

/** Duration of the grace period countdown in seconds (5 minutes). */
export const GRACE_DURATION_SECONDS = 5 * 60;

export type SafetyStatus = "safe" | "grace_period" | "alert_active";
export type TriggerSource = "missed_checkin" | "sos";

export interface SafetyNetData {
  /** Current safety state. */
  status: SafetyStatus;
  /** How the current alert was triggered. */
  triggeredBy: TriggerSource | null;
  /** ISO timestamp when the grace period countdown ends (null if not in grace period). */
  gracePeriodEndsAt: string | null;
  /** ISO timestamp when the emergency alert officially fired. */
  alertTriggeredAt: string | null;
  /** 4-digit vault unlock PIN (default 1234 for demo). */
  vaultPin: string;
  /** Whether the digital vault has been unlocked by an emergency contact. */
  vaultUnlocked: boolean;
}

const defaultData: SafetyNetData = {
  status: "safe",
  triggeredBy: null,
  gracePeriodEndsAt: null,
  alertTriggeredAt: null,
  vaultPin: "1234",
  vaultUnlocked: false,
};

function load(): SafetyNetData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<SafetyNetData>;
      return {
        ...defaultData,
        ...parsed,
      };
    }
  } catch {
    /* ignore corrupt data */
  }
  return { ...defaultData };
}

function persist(data: SafetyNetData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const safetyNetStore = {
  /** Read the full safety net state. */
  getData: (): SafetyNetData => load(),

  /**
   * Path 1: Missed check-in → start grace period countdown.
   * Stores the end timestamp so CountdownTimer survives page reloads.
   */
  triggerGracePeriod: () => {
    const data = load();
    const endsAt = new Date(
      Date.now() + GRACE_DURATION_SECONDS * 1000,
    ).toISOString();
    data.status = "grace_period";
    data.triggeredBy = "missed_checkin";
    data.gracePeriodEndsAt = endsAt;
    data.alertTriggeredAt = null;
    data.vaultUnlocked = false;
    persist(data);
  },

  /**
   * Path 2: SOS button pressed → immediate emergency alert (no grace period).
   */
  triggerSOS: () => {
    const data = load();
    data.status = "alert_active";
    data.triggeredBy = "sos";
    data.gracePeriodEndsAt = null;
    data.alertTriggeredAt = new Date().toISOString();
    data.vaultUnlocked = false;
    persist(data);
  },

  /**
   * Grace period expired without user confirmation → escalate to emergency alert.
   * Called automatically when the countdown reaches zero.
   */
  escalateToAlert: () => {
    const data = load();
    data.status = "alert_active";
    data.alertTriggeredAt = new Date().toISOString();
    persist(data);
  },

  /**
   * User confirms they are safe → cancel everything, reset to safe.
   */
  resolve: () => {
    const data = load();
    data.status = "safe";
    data.triggeredBy = null;
    data.gracePeriodEndsAt = null;
    data.alertTriggeredAt = null;
    data.vaultUnlocked = false;
    persist(data);
  },

  /**
   * Emergency contact successfully entered the PIN → unlock the digital vault.
   */
  unlockVault: () => {
    const data = load();
    data.vaultUnlocked = true;
    persist(data);
  },

  /**
   * Update the vault decryption PIN.
   */
  setVaultPin: (pin: string) => {
    const data = load();
    data.vaultPin = pin;
    persist(data);
  },

  /**
   * Number of seconds remaining in the grace period.
   * Returns 0 if not in grace period or already expired.
   */
  getSecondsRemaining: (): number => {
    const data = load();
    if (!data.gracePeriodEndsAt) return GRACE_DURATION_SECONDS;
    const diff = Math.floor(
      (new Date(data.gracePeriodEndsAt).getTime() - Date.now()) / 1000,
    );
    return Math.max(diff, 0);
  },
};
