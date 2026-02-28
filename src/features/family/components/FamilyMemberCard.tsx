import { useLanguage } from "@/app/useLanguage";
import type { FamilyMember, MemberStatus } from "../store/familyStore";

const STATUS_STYLES: Record<MemberStatus, string> = {
  safe: "bg-green-500/10 text-green-600",
  pending: "bg-amber-500/10 text-amber-600",
  sos: "bg-red-500/10 text-red-600",
  offline: "bg-gray-500/10 text-gray-500",
};

const AVATAR_COLORS: Record<MemberStatus, string> = {
  safe: "bg-green-500/20 text-green-700",
  pending: "bg-amber-500/20 text-amber-700",
  sos: "bg-red-500/20 text-red-700",
  offline: "bg-gray-500/20 text-gray-600",
};

interface FamilyMemberCardProps {
  member: FamilyMember;
}

export const FamilyMemberCard = ({ member }: FamilyMemberCardProps) => {
  const { t } = useLanguage();
  const f = t.family as Record<string, string>;

  const name = f[member.nameKey];
  const relation = f[member.relationKey];
  const location = f[member.locationKey];
  const checkIn = f[member.checkInKey];
  const statusLabel = f[member.status];

  return (
    <div className="bg-surface rounded-2xl p-5">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${AVATAR_COLORS[member.status]}`}
        >
          {member.avatarInitials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-text text-sm font-bold">{name}</h3>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${STATUS_STYLES[member.status]}`}
            >
              {statusLabel}
            </span>
          </div>
          <p className="text-text-muted text-xs">{relation}</p>

          <div className="text-text-muted mt-3 space-y-1 text-xs">
            <div className="flex items-center gap-1.5">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </div>
            <div className="flex items-center gap-1.5">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {f.lastCheckIn}: {checkIn}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="text-primary border-border hover:bg-primary/5 rounded-lg border px-3 py-1.5 text-xs font-semibold"
            >
              {f.sendMessage}
            </button>
            <button
              type="button"
              className="text-text-muted border-border hover:bg-surface-alt rounded-lg border px-3 py-1.5 text-xs font-semibold"
            >
              {f.viewProfile}
            </button>
            {member.status === "sos" && (
              <button
                type="button"
                className="rounded-lg bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600"
              >
                {f.callNow}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
