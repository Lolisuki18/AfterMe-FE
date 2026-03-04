import { useLanguage } from "@/app/useLanguage";
import {
  ShieldCheckIcon,
  SupportCircleIcon,
  HeartOutlineIcon,
} from "@/shared/icon";

interface WhyItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyItem = ({ icon, title, description }: WhyItemProps) => (
  <div className="bg-surface flex flex-col items-center rounded-2xl p-6 text-center">
    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
      {icon}
    </div>
    <h4 className="text-text mt-4 text-sm font-bold">{title}</h4>
    <p className="text-text-muted mt-2 text-xs leading-relaxed">
      {description}
    </p>
  </div>
);

export const WhyChooseUs = () => {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section>
      <h2 className="text-text mb-6 text-center text-xl font-bold">
        {p.whyTitle}
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        <WhyItem
          icon={<ShieldCheckIcon />}
          title={p.whyPrivacyTitle}
          description={p.whyPrivacyDesc}
        />
        <WhyItem
          icon={<SupportCircleIcon />}
          title={p.whySupportTitle}
          description={p.whySupportDesc}
        />
        <WhyItem
          icon={<HeartOutlineIcon />}
          title={p.whyCommunityTitle}
          description={p.whyCommunityDesc}
        />
      </div>
    </section>
  );
};
