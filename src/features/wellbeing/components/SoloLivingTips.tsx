import { useLanguage } from "@/app/useLanguage";
import { ShieldCheckIcon, RefreshIcon, PeopleGroupIcon } from "@/shared/icon";

interface TipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TipCard = ({ icon, title, description }: TipCardProps) => (
  <div className="bg-surface flex gap-4 rounded-2xl p-5">
    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
      <span className="text-primary">{icon}</span>
    </div>
    <div>
      <h3 className="text-text text-sm font-bold">{title}</h3>
      <p className="text-text-muted mt-1 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export const SoloLivingTips = () => {
  const { t } = useLanguage();
  const w = t.wellbeing;

  return (
    <section>
      <h2 className="text-text text-lg font-bold">{w.tipsTitle}</h2>
      <p className="text-text-muted mt-1 text-sm">{w.tipsSubtitle}</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <TipCard
          icon={<ShieldCheckIcon />}
          title={w.safetyTitle}
          description={w.safetyDesc}
        />
        <TipCard
          icon={<RefreshIcon />}
          title={w.routineTitle}
          description={w.routineDesc}
        />
        <TipCard
          icon={<PeopleGroupIcon />}
          title={w.socialTitle}
          description={w.socialDesc}
        />
      </div>
    </section>
  );
};
