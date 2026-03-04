import { useLanguage } from "@/app/useLanguage";
import { useNavigate } from "react-router-dom";
import {
  familyStore,
  type FamilyMember,
  type MemberStatus,
} from "@/features/family/store/familyStore";
import { UsersOutlineIcon, ChevronRightIcon } from "@/shared/icon";

/* ── Status colors ────────────────────────────────────────────── */
const STATUS_COLORS: Record<MemberStatus, string> = {
  safe: "bg-green-500",
  pending: "bg-yellow-400",
  sos: "bg-red-500",
  offline: "bg-gray-400",
};

const STATUS_RING: Record<MemberStatus, string> = {
  safe: "ring-green-500/20",
  pending: "ring-yellow-400/20",
  sos: "ring-red-500/20",
  offline: "ring-gray-400/20",
};

export const FamilyMembersSection = () => {
  const { t } = useLanguage();
  const f = t.family;
  const s = t.accountSettings.personal;
  const navigate = useNavigate();
  const data = familyStore.getData();

  const getStatusLabel = (status: MemberStatus): string => {
    const labels: Record<MemberStatus, string> = {
      safe: f.safe,
      pending: f.pending,
      sos: f.sos,
      offline: f.offline,
    };
    return labels[status];
  };

  return (
    <div className="mt-8">
      {/* Section header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UsersOutlineIcon className="text-primary h-5 w-5" />
          <h3 className="text-text text-base font-bold">{s.familyMembers}</h3>
        </div>
        <button
          type="button"
          onClick={() => navigate("/dashboard/family")}
          className="text-primary flex items-center gap-1 text-sm font-medium hover:underline"
        >
          {s.viewAll}
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Members list */}
      {data.members.length === 0 ? (
        <div className="bg-surface-alt rounded-xl p-6 text-center">
          <p className="text-text-muted text-sm">{s.noFamilyMembers}</p>
          <button
            type="button"
            onClick={() => navigate("/dashboard/family")}
            className="text-primary mt-2 text-sm font-medium hover:underline"
          >
            {f.addMember}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {data.members.map((member: FamilyMember) => {
            const name = f[member.nameKey as keyof typeof f] as string;
            const relation = f[member.relationKey as keyof typeof f] as string;
            const checkIn = f[member.checkInKey as keyof typeof f] as string;

            return (
              <div
                key={member.id}
                className="border-border bg-surface hover:bg-surface-alt flex items-center gap-3 rounded-xl border p-3 transition-colors"
              >
                {/* Avatar */}
                <div className="relative">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                    {member.avatarInitials}
                  </div>
                  {/* Status dot */}
                  <span
                    className={`absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white ring-2 ${STATUS_COLORS[member.status]} ${STATUS_RING[member.status]}`}
                  />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-text text-sm font-medium">{name}</p>
                  <p className="text-text-muted text-xs">
                    {relation} · {checkIn}
                  </p>
                </div>

                {/* Status badge */}
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold text-white ${STATUS_COLORS[member.status]}`}
                >
                  {getStatusLabel(member.status)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
