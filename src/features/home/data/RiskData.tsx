import { ClockIcon, KeyIcon, ScenariosIcon, WarningIcon } from "@/shared/icon";
import type { RiskCard, RiskItem } from "../interface";

export const RISK_ICONS = [
  <ScenariosIcon className="text-accent h-7 w-7" />,
  <KeyIcon className="text-secondary h-7 w-7" />,
  <WarningIcon className="text-accent h-7 w-7" />,
  <ClockIcon className="text-secondary h-7 w-7" />,
];

export const getRisks = (risks: RiskItem[]): RiskCard[] =>
  risks.map((r, i) => ({ icon: RISK_ICONS[i], ...r }));
