import React from "react";
import { useLanguage } from "@/app/useLanguage";
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
  sms: (
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  ),
  "voice-call": (
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  "live-location": (
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  "no-call": (
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  ),
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
            <svg
              className="h-3.5 w-3.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
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
