import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import { familyStore } from "../store/familyStore";
import { FamilyMemberCard, RecentSafetyLogs } from "../components";

const FamilyDashboardPage = () => {
  const { t } = useLanguage();
  const f = t.family;
  const data = familyStore.getData();

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
          leftIcon={
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          }
        >
          {f.addMember}
        </Button>
      </div>

      {/* Members */}
      <section className="space-y-4">
        <h2 className="text-text text-base font-bold">{f.members}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.members.map((member) => (
            <FamilyMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Safety Logs */}
      <section>
        <RecentSafetyLogs logs={data.logs} />
      </section>
    </div>
  );
};

export default FamilyDashboardPage;
