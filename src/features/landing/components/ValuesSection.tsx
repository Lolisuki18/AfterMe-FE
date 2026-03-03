import type { ReactNode } from "react";
import { useLanguage } from "@/app/useLanguage";
import { ShieldLockIcon, HeartIcon, BoltIcon, StarIcon } from "@/shared/icon";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="bg-surface ring-border flex flex-col gap-4 rounded-2xl p-6 shadow-sm ring-1 transition hover:shadow-md">
    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
      <span className="text-primary">{icon}</span>
    </div>
    <div>
      <h3 className="text-text text-base font-bold">{title}</h3>
      <p className="text-text-muted mt-2 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export const ValuesSection = () => {
  const { t } = useLanguage();
  const l = t.aboutUs;

  const values = [
    {
      icon: <ShieldLockIcon className="h-6 w-6" />,
      title: l.value1Title,
      desc: l.value1Desc,
    },
    {
      icon: <BoltIcon className="h-6 w-6" />,
      title: l.value2Title,
      desc: l.value2Desc,
    },
    {
      icon: <HeartIcon className="h-6 w-6" />,
      title: l.value3Title,
      desc: l.value3Desc,
    },
    {
      icon: <StarIcon className="h-6 w-6" />,
      title: l.value4Title,
      desc: l.value4Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="bg-primary/10 text-primary inline-block rounded-full px-4 py-1 text-xs font-bold tracking-wider uppercase">
            {l.valuesTag}
          </span>
          <h2 className="text-text mt-4 text-3xl font-extrabold sm:text-4xl">
            {l.valuesTitle}
          </h2>
          <p className="text-text-muted mx-auto mt-3 max-w-lg text-sm">
            {l.valuesSubtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <ValueCard
              key={v.title}
              icon={v.icon}
              title={v.title}
              description={v.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
