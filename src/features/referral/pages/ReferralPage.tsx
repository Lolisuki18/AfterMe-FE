import {
  ReferralHero,
  ShareWidget,
  RewardsStats,
  ReferralHistory,
} from "../components";

const ReferralPage = () => (
  <div className="mx-auto flex max-w-3xl flex-col gap-6 pb-10">
    <ReferralHero />
    <ShareWidget />
    <RewardsStats />
    <ReferralHistory />
  </div>
);

export default ReferralPage;
