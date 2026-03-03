import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { UserAddIcon } from "@/shared/icon";
import { familyStore, type FamilyMember } from "../store/familyStore";
import { FamilyMemberCard, RecentSafetyLogs } from "../components";
import { AddMemberModal } from "../components/AddMemberModal";
import { ViewProfileModal } from "../components/ViewProfileModal";
import { SendMessageModal } from "../components/SendMessageModal";

const FamilyDashboardPage = () => {
  const { t } = useLanguage();
  const f = t.family;
  const data = familyStore.getData();

  const [addOpen, setAddOpen] = useState(false);
  const [profileMember, setProfileMember] = useState<FamilyMember | null>(null);
  const [messageMember, setMessageMember] = useState<FamilyMember | null>(null);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-text text-2xl font-bold">{f.title}</h1>
          <p className="text-text-muted mt-1 max-w-xl text-sm leading-relaxed">
            {f.subtitle}
          </p>
        </div>
        <Button
          variant="primary"
          rounded
          leftIcon={<UserAddIcon className="h-4 w-4" />}
          onClick={() => setAddOpen(true)}
        >
          {f.addMember}
        </Button>
      </div>

      {/* Members */}
      <section className="space-y-4">
        <h2 className="text-text text-base font-bold">{f.members}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.members.map((member) => (
            <FamilyMemberCard
              key={member.id}
              member={member}
              onSendMessage={setMessageMember}
              onViewProfile={setProfileMember}
            />
          ))}
        </div>
      </section>

      {/* Safety Logs */}
      <section>
        <RecentSafetyLogs logs={data.logs} />
      </section>

      {/* Modals */}
      <AddMemberModal open={addOpen} onClose={() => setAddOpen(false)} />
      <ViewProfileModal
        open={!!profileMember}
        onClose={() => setProfileMember(null)}
        member={profileMember}
      />
      <SendMessageModal
        open={!!messageMember}
        onClose={() => setMessageMember(null)}
        member={messageMember}
      />
    </div>
  );
};

export default FamilyDashboardPage;
