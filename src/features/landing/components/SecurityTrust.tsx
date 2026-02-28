import { useLanguage } from "@/app/useLanguage";
import { ShieldLockIcon, CheckCircleSmIcon } from "../icon";

export const SecurityTrust = () => {
  const { t } = useLanguage();
  const l = t.landing;

  const items = [
    { title: l.trustItem1Title, desc: l.trustItem1Desc },
    { title: l.trustItem2Title, desc: l.trustItem2Desc },
  ];

  return (
    <section id="trust" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left text */}
        <div className="max-w-md flex-1">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            {l.trustTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            {l.trustDesc}
          </p>
          <ul className="mt-6 space-y-5">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircleSmIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right security card */}
        <div className="flex flex-1 justify-center">
          <div className="relative flex w-64 flex-col items-center rounded-2xl bg-gray-900 p-10 shadow-2xl">
            <div className="bg-primary/20 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <ShieldLockIcon className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-white">{l.trustCardTitle}</h3>
            <p className="mt-1 text-xs text-gray-400">{l.trustCardSubtitle}</p>
            {/* Decorative glow */}
            <div className="bg-primary/10 absolute -inset-1 -z-10 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
