import { useLanguage } from "@/app/useLanguage";
import { CheckIcon } from "@/shared/icon";

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
            <svg
              className="text-primary h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
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
            <svg
              className="text-primary h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <h2 className="text-text text-base font-bold">{p.whoSeesData}</h2>
        </div>
        <FeatureItem title={p.noLiveTracking} desc={p.noLiveTrackingDesc} />
        <FeatureItem title={p.zeroAdSharing} desc={p.zeroAdSharingDesc} />
      </div>
    </section>
  );
};
