import { useLanguage } from "@/app/useLanguage";
import { CheckIcon, LockClosedIcon, EyeOpenIcon } from "@/shared/icon";

interface FeatureItemProps {
  title: string;
  desc: string;
}

const FeatureItem = ({ title, desc }: FeatureItemProps) => (
  <div className="flex gap-2.5">
    <CheckIcon className="text-primary mt-0.5 h-4 w-4 shrink-0" />
    <div>
      <p className="text-text text-sm font-semibold">{title}</p>
      <p className="text-text-muted mt-0.5 text-xs leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const ProtectionOverview = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {/* How We Protect You */}
      <div className="bg-surface space-y-4 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <div className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
            <LockClosedIcon className="text-primary h-5 w-5" />
          </div>
          <h2 className="text-text text-base font-bold">{p.howWeProtect}</h2>
        </div>
        <FeatureItem title={p.endToEnd} desc={p.endToEndDesc} />
        <FeatureItem title={p.localStorage} desc={p.localStorageDesc} />
      </div>

      {/* Who Sees Your Data */}
      <div className="bg-surface space-y-4 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <div className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
            <EyeOpenIcon className="text-primary h-5 w-5" />
          </div>
          <h2 className="text-text text-base font-bold">{p.whoSeesData}</h2>
        </div>
        <FeatureItem title={p.noLiveTracking} desc={p.noLiveTrackingDesc} />
        <FeatureItem title={p.zeroAdSharing} desc={p.zeroAdSharingDesc} />
      </div>
    </section>
  );
};
