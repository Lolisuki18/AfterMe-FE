import {
  ActivityIcon,
  AiAssistantIcon,
  AlarmIcon,
  DatabaseIcon,
  DoublePersonIcon,
  ShieldIcon,
} from "@/shared/icon";
import type { Feature } from "../interface";

export const FEATURES: Feature[] = [
  {
    iconBg: "bg-primary",
    icon: <AlarmIcon className="text-bg h-6 w-6" />,
    title: "Smart Reminders",
    description:
      "Go beyond basic alarms. Set recurring reminders for medication, health routines, and life admin tasks.",
  },
  {
    iconBg: "bg-accent",
    icon: <ShieldIcon className="text-bg h-6 w-6" />,
    title: "Dead Man Switch",
    description:
      "The core safety net. If you don't check in within your specified timeframe, your emergency protocol activates.",
  },
  {
    iconBg: "bg-secondary",
    icon: <DoublePersonIcon className="text-bg h-6 w-6" />,
    title: "Emergency Contacts",
    description:
      "Manage who gets notified. Assign different information to different people based on trust levels.",
  },
  {
    iconBg: "bg-slate-500",
    icon: <DatabaseIcon className="text-bg h-6 w-6" />,
    title: "Secure Vault",
    description:
      "Military-grade encryption for your passwords, documents, and personal notes. Only decrypted by your recipients.",
  },
  {
    iconBg: "bg-purple-500",
    icon: <AiAssistantIcon className="text-bg h-6 w-6" />,
    title: "AI Assistant",
    description:
      "Get intelligent suggestions for what information to store and help drafting difficult messages to loved ones.",
  },
  {
    iconBg: "bg-green-500",
    icon: <ActivityIcon className="text-bg h-6 w-6" />,
    title: "Activity Monitoring",
    description:
      "Passive activity monitoring options to reduce the need for manual check-ins while maintaining privacy.",
  },
];
