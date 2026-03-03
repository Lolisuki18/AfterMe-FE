import { useLanguage } from "@/app/useLanguage";
import { UserProfileIcon } from "@/shared/icon";

interface TeamMemberProps {
  name: string;
  role: string;
  avatarUrl: string;
}

const TeamMember = ({ name, role, avatarUrl }: TeamMemberProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-surface-alt ring-bg flex h-28 w-28 items-center justify-center overflow-hidden rounded-full shadow-md ring-4">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : (
        <UserProfileIcon className="text-bg h-20 w-20" />
      )}
    </div>
    <h3 className="text-text mt-4 text-sm font-bold">{name}</h3>
    <p className="text-text-muted mt-1 text-xs">{role}</p>

    {/* Social placeholder */}
    <div className="mt-3 flex gap-2">
      {["𝕏", "in"].map((icon, i) => (
        <span
          key={i}
          className="bg-surface-alt text-text-muted hover:bg-border flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-xs transition"
        >
          {icon}
        </span>
      ))}
    </div>
  </div>
);

export const TeamSection = () => {
  const { t } = useLanguage();
  const l = t.aboutUs;

  const members = [
    {
      name: l.member1Name,
      role: l.member1Role,
      avatarUrl: "",
    },
    {
      name: l.member2Name,
      role: l.member2Role,
      avatarUrl: "",
    },
    {
      name: l.member3Name,
      role: l.member3Role,
      avatarUrl: "",
    },
    {
      name: l.member4Name,
      role: l.member4Role,
      avatarUrl: "",
    },
    {
      name: l.member5Name,
      role: l.member5Role,
      avatarUrl: "",
    },
    {
      name: l.member6Name,
      role: l.member6Role,
      avatarUrl: "",
    },
  ];

  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="bg-primary/10 text-primary inline-block rounded-full px-4 py-1 text-xs font-bold tracking-wider uppercase">
            {l.teamTag}
          </span>
          <h2 className="text-text mt-4 text-3xl font-extrabold sm:text-4xl">
            {l.teamTitle}
          </h2>
          <p className="text-text-muted mx-auto mt-3 max-w-md text-sm">
            {l.teamSubtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <TeamMember
              key={m.name}
              name={m.name}
              role={m.role}
              avatarUrl={m.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
