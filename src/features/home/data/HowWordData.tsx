import {
  AddPersonIcon,
  AlarmIcon,
  DoublePersonIcon,
  VerifyIcon,
} from "@/shared/icon";
import type { Step } from "../interface";

export const STEPS: Step[] = [
  {
    icon: <AddPersonIcon className="text-bg" />,
    title: "Create Profile",
    description:
      "Set up your secure account and store your critical notes, passwords, and digital asset information.",
  },
  {
    icon: <AlarmIcon className="text-bg" />,
    title: "Set Check-ins",
    description:
      "Configure daily or weekly check-ins. We'll remind you to verify you're okay via email or app.",
  },
  {
    icon: <DoublePersonIcon className="text-bg" />,
    title: "Add Contacts",
    description:
      "Designate trusted contacts (family, friends) who should receive your information if you don't respond.",
  },
  {
    icon: <VerifyIcon className="text-bg" />,
    title: "Stay Protected",
    description:
      "If you miss your check-in grace period, we automatically send your pre-set messages to your contacts.",
  },
];
