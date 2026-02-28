import { useLanguage } from "../../../app/useLanguage";
import { Button } from "../../../shared/components";
import { GiftIcon } from "@/shared/icon";

const ReferralHero = () => {
  const { t } = useLanguage();
  const r = t.referral;

  return (
    <div className="overflow-hidden rounded-2xl bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-1">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-white/10 p-6 backdrop-blur-sm sm:flex-row sm:p-8">
        {/* Left – image placeholder */}
        <div className="relative flex h-48 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/20 sm:h-56 sm:w-56">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop"
            alt={r.heroImgAlt}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
            {r.heroOverlay}
          </span>
        </div>

        {/* Right – copy */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wider text-white">
            <GiftIcon className="h-3.5 w-3.5" />
            {r.heroLabel}
          </span>

          <h1 className="text-2xl leading-tight font-bold text-white sm:text-3xl">
            {r.heroTitle}{" "}
            <span className="text-yellow-300">{r.heroTitleAccent}</span>
          </h1>

          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
            {r.heroDesc}
          </p>

          <div className="mt-5 flex gap-3">
            <Button variant="secondary" size="md" rounded>
              {r.heroCta}
            </Button>
            <Button
              variant="ghost"
              size="md"
              rounded
              className="!text-white hover:!bg-white/20"
            >
              {r.heroCtaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralHero;
