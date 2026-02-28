import { useLanguage } from "@/app/useLanguage";
import { Modal, Button } from "@/shared/components";
import { MapPinIcon, ClockOutlineIcon } from "@/shared/icon";
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

interface ViewProfileModalProps {
  open: boolean;
  onClose: () => void;
  member: FamilyMember | null;
}

export const ViewProfileModal = ({
  open,
  onClose,
  member,
}: ViewProfileModalProps) => {
  const { t } = useLanguage();
  const f = t.family as Record<string, string>;

  if (!member) return null;

  const name = f[member.nameKey];
  const relation = f[member.relationKey];
  const location = f[member.locationKey];
  const checkIn = f[member.checkInKey];
  const statusLabel = f[member.status];

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={f.profileTitle}
      footer={
        <Button variant="outline" size="sm" rounded onClick={onClose}>
          {f.cancel}
        </Button>
      }
    >
      <div className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold ${AVATAR_COLORS[member.status]}`}
        >
          {member.avatarInitials}
        </div>

        <div className="text-center">
          <h3 className="text-text text-lg font-bold">{name}</h3>
          <p className="text-text-muted text-sm">{relation}</p>
          <span
            className={`mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-bold tracking-wider uppercase ${STATUS_STYLES[member.status]}`}
          >
            {statusLabel}
          </span>
        </div>

        {/* Details */}
        <div className="bg-surface-alt w-full space-y-3 rounded-xl p-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPinIcon className="text-text-muted h-4 w-4 shrink-0" />
            <span className="text-text-muted">{f.location}:</span>
            <span className="text-text font-medium">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ClockOutlineIcon className="text-text-muted h-4 w-4 shrink-0" />
            <span className="text-text-muted">{f.lastCheckIn}:</span>
            <span className="text-text font-medium">{checkIn}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
