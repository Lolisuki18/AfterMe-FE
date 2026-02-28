import { useLanguage } from "@/app/useLanguage";
import { BreathingIcon, PencilEditIcon, SmileFaceIcon } from "../icon";

interface ToolItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
}

const ToolItem = ({ icon, title, description, cta }: ToolItemProps) => (
  <div className="bg-surface flex flex-col rounded-2xl p-5 sm:p-6">
    <div className="bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl">
      <span className="text-primary">{icon}</span>
    </div>
    <h3 className="text-text text-sm font-bold">{title}</h3>
    <p className="text-text-muted mt-1 flex-1 text-xs leading-relaxed">
      {description}
    </p>
    <button className="text-primary mt-3 self-start text-sm font-semibold hover:underline">
      {cta} →
    </button>
  </div>
);

export const SelfCareTools = () => {
  const { t } = useLanguage();
  const w = t.wellbeing;

  return (
    <section>
      <h2 className="text-text text-lg font-bold">{w.selfCareTitle}</h2>
      <p className="text-text-muted mt-1 text-sm">{w.selfCareSubtitle}</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <ToolItem
          icon={<BreathingIcon />}
          title={w.breathingTitle}
          description={w.breathingDesc}
          cta={w.breathingCta}
        />
        <ToolItem
          icon={<PencilEditIcon />}
          title={w.journalTitle}
          description={w.journalDesc}
          cta={w.journalCta}
        />
        <ToolItem
          icon={<SmileFaceIcon />}
          title={w.meditationTitle}
          description={w.meditationDesc}
          cta={w.meditationCta}
        />
      </div>
    </section>
  );
};
