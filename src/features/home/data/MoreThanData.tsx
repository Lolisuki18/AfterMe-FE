import {
  ActivityIcon,
  AiAssistantIcon,
  AlarmIcon,
  DatabaseIcon,
  DoublePersonIcon,
  ShieldIcon,
} from "@/shared/icon";
import type { Feature } from "../interface";
import type { FeatureItem } from "../locales/en";

export const FEATURE_ICONS = [
  { iconBg: "bg-primary", icon: <AlarmIcon className="text-bg h-6 w-6" /> },
  { iconBg: "bg-accent", icon: <ShieldIcon className="text-bg h-6 w-6" /> },
  {
    iconBg: "bg-secondary",
    icon: <DoublePersonIcon className="text-bg h-6 w-6" />,
  },
  {
    iconBg: "bg-slate-500",
    icon: <DatabaseIcon className="text-bg h-6 w-6" />,
  },
  {
    iconBg: "bg-purple-500",
    icon: <AiAssistantIcon className="text-bg h-6 w-6" />,
  },
  {
    iconBg: "bg-green-500",
    icon: <ActivityIcon className="text-bg h-6 w-6" />,
  },
];

export const getFeatures = (features: FeatureItem[]): Feature[] =>
  features.map((f, i) => ({ ...FEATURE_ICONS[i], ...f }));
