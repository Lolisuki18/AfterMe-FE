import type { ReactNode } from "react";
import { useLanguage } from "@/app/useLanguage";
import { CalendarSetIcon, SunRaysIcon, BellCheckIcon } from "@/shared/icon";

interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const StepCard = ({ icon, title, description }: StepCardProps) => (
  <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100">
    <div className="bg-primary/10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl">
      <span className="text-primary">{icon}</span>
    </div>
    <h3 className="text-sm font-bold text-gray-900">{title}</h3>
    <p className="mt-2 text-xs leading-relaxed text-gray-500">{description}</p>
  </div>
);

export const HowItWorks = () => {
  const { t } = useLanguage();
  const l = t.landing;

  return (
    <section id="how" className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {l.howTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500">
          {l.howSubtitle}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <StepCard
            icon={<CalendarSetIcon />}
            title={l.step1Title}
            description={l.step1Desc}
          />
          <StepCard
            icon={<SunRaysIcon />}
            title={l.step2Title}
            description={l.step2Desc}
          />
          <StepCard
            icon={<BellCheckIcon />}
            title={l.step3Title}
            description={l.step3Desc}
          />
        </div>
      </div>
    </section>
  );
};
