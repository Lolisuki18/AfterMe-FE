import {
  AddPersonIcon,
  AlarmIcon,
  DoublePersonIcon,
  VerifyIcon,
} from "@/shared/icon";
import type { Step } from "../interface";
import type { StepItem } from "@/locales/en";

export const STEP_ICONS = [
  <AddPersonIcon className="text-bg h-6 w-6" />,
  <AlarmIcon className="text-bg h-6 w-6" />,
  <DoublePersonIcon className="text-bg h-6 w-6" />,
  <VerifyIcon className="text-bg h-6 w-6" />,
];

export const getSteps = (steps: StepItem[]): Step[] =>
  steps.map((s, i) => ({ icon: STEP_ICONS[i], ...s }));
