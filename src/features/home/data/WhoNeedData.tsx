import { HeartIcon, PlaneIcon, ProfessionalsIcon } from "@/shared/icon";
import type { Audience } from "../interface";
import type { AudienceItem } from "@/locales/en";

export const AUDIENCE_ICONS = [
  <PlaneIcon className="text-primary h-7 w-7" />,
  <HeartIcon className="text-accent h-7 w-7" />,
  <ProfessionalsIcon className="text-secondary h-7 w-7" />,
];

export const getAudiences = (audiences: AudienceItem[]): Audience[] =>
  audiences.map((a, i) => ({ icon: AUDIENCE_ICONS[i], ...a }));
