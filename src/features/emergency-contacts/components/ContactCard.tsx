import React from "react";
import { useLanguage } from "@/app/useLanguage";
import { ChatBubbleIcon, PhoneIcon, MapPinIcon, BanIcon } from "@/shared/icon";
import type { EmergencyContact, NotifyMethod } from "../store/emergencyStore";

interface ContactCardProps {
  contact: EmergencyContact;
}

const PRIORITY_STYLES = {
  primary: "bg-primary text-white",
  secondary: "bg-amber-500 text-white",
  backup: "bg-surface-alt text-text-muted",
};

const METHOD_STYLES: Record<NotifyMethod, { color: string }> = {
  sms: { color: "bg-primary/10 text-primary border-primary/20" },
  "voice-call": { color: "bg-surface-alt text-text border-border" },
  "live-location": { color: "bg-surface-alt text-text border-border" },
  "no-call": {
    color: "bg-surface-alt text-text-muted border-border line-through",
  },
};

const METHOD_ICONS: Record<NotifyMethod, React.ReactNode> = {
  sms: <ChatBubbleIcon className="h-3 w-3" />,
  "voice-call": <PhoneIcon className="h-3 w-3" />,
  "live-location": <MapPinIcon className="h-3 w-3" />,
  "no-call": <BanIcon className="h-3 w-3" />,
};

const METHOD_LABELS: Record<NotifyMethod, string> = {
  sms: "SMS",
  "voice-call": "Voice Call",
  "live-location": "Live Location",
  "no-call": "No Call",
};

export const ContactCard = ({ contact }: ContactCardProps) => {
  const { t } = useLanguage();
  const s = t.emergency;

  const relationLabel =
    (s as Record<string, string>)[contact.relationship] ?? contact.relationship;

  return (
    <div className="bg-surface rounded-2xl p-5">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-2xl sm:h-20 sm:w-20">
            <span className="text-primary text-xl font-bold sm:text-2xl">
              {contact.avatarInitials}
            </span>
          </div>
          <span
            className={`absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-[10px] font-bold ${PRIORITY_STYLES[contact.priority]}`}
          >
            {(s as Record<string, string>)[contact.priority]}
          </span>
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-text text-base font-semibold">
              {contact.name}
            </h3>
            <span className="bg-surface-alt text-text-muted rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
              {relationLabel}
            </span>
          </div>
          <p className="text-text-muted mt-1 flex items-center gap-1.5 text-sm">
            <PhoneIcon className="h-3.5 w-3.5 shrink-0" />
            {contact.phone}
          </p>

          {/* Notify methods */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-text-muted text-xs">{s.notifyVia}</span>
            {contact.notifyMethods.map((m) => (
              <span
                key={m}
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${METHOD_STYLES[m].color}`}
              >
                {METHOD_ICONS[m]}
                {METHOD_LABELS[m]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
