import { HeartIcon, PlaneIcon, ProfessionalsIcon } from "@/shared/icon";
import type { Audience } from "../interface";

export const AUDIENCES: Audience[] = [
  {
    icon: <PlaneIcon className="text-primary" />,
    title: "Solo Travelers",
    description:
      "Explore the world with confidence. If you don't check in from your hike or trip, local authorities or family get your location and itinerary details immediately.",
  },
  {
    icon: <HeartIcon className="text-accent" />,
    title: "Living Alone",
    description:
      "Maintain your independence while having a safety net. Perfect for elderly individuals or anyone living solo who wants reassurance that someone will know if they need help.",
  },
  {
    icon: <ProfessionalsIcon className="text-secondary" />,
    title: "Professionals",
    description:
      "Secure your business continuity. Ensure critical work passwords and project details are transferred to colleagues if you're incapacitated.",
  },
];
