import { ClockIcon, KeyIcon, ScenariosIcon, WarningIcon } from "@/shared/icon";
import type { RiskCard } from "../interface";

export const RISKS: RiskCard[] = [
  {
    icon: <ScenariosIcon className="text-accent h-7 w-7" />,
    title: "Unresponsive Scenarios",
    description:
      "Accidents or sudden illness can happen to anyone. If you live alone or travel, who will know if you stop responding?",
  },
  {
    icon: <KeyIcon className="text-secondary h-7 w-7" />,
    title: "Inaccessible Data",
    description:
      "Financial accounts, passwords, and digital assets are often lost forever because family members cannot access them.",
  },
  {
    icon: <WarningIcon className="text-accent h-7 w-7" />,
    title: "Delayed Response",
    description:
      "In emergencies, every hour counts. Traditional methods often mean days pass before anyone realizes something is wrong.",
  },
  {
    icon: <ClockIcon className="text-secondary h-7 w-7" />,
    title: "Daily Management",
    description:
      "Basic reminder apps handle tasks but fail to prepare you for the 'what if' scenarios of life.",
  },
];
