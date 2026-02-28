import { useLanguage } from "../../../app/useLanguage";
import { UsersIcon, TrophyIcon } from "../icon";

/* ───── helpers ───── */

/** Continuous progress bar (referrals) */
const ContinuousBar = ({ value, max }: { value: number; max: number }) => {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="bg-surface-alt mt-3 h-2 w-full overflow-hidden rounded-full">
      <div
        className="h-full rounded-full bg-linear-to-r from-indigo-500 to-purple-500 transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

/** Stepped / segmented progress bar (free months) */
const SteppedBar = ({ filled, total }: { filled: number; total: number }) => (
  <div className="mt-3 flex gap-1.5">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
          i < filled
            ? "bg-linear-to-r from-emerald-400 to-teal-500"
            : "bg-surface-alt"
        }`}
      />
    ))}
  </div>
);

/* ───── RewardsStats ───── */

const RewardsStats = () => {
  const { t } = useLanguage();
  const r = t.referral;

  const referralCount = Number(r.statReferralsValue);
  const freeMonths = Number(r.statMonthsValue);
  const maxReferrals = 15; // goal
  const maxMonths = 6; // total segments

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Successful referrals – continuous bar */}
      <div className="border-border bg-surface rounded-2xl border p-5">
        <div className="text-text-muted flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <UsersIcon className="h-4 w-4 text-indigo-500" />
          {r.statReferralsLabel}
        </div>
        <p className="text-text mt-3 text-3xl font-bold">
          {r.statReferralsValue}{" "}
          <span className="text-text-muted text-base font-normal">
            {r.statReferralsSub}
          </span>
        </p>
        <ContinuousBar value={referralCount} max={maxReferrals} />
        <p className="text-text-muted mt-2 text-xs">{r.statReferralsHint}</p>
      </div>

      {/* Free months earned – stepped bar */}
      <div className="border-border bg-surface rounded-2xl border p-5">
        <div className="text-text-muted flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
          <TrophyIcon className="h-4 w-4 text-emerald-500" />
          {r.statMonthsLabel}
        </div>
        <p className="text-text mt-3 text-3xl font-bold">
          {r.statMonthsValue}{" "}
          <span className="text-text-muted text-base font-normal">
            {r.statMonthsSub}
          </span>
        </p>
        <SteppedBar filled={freeMonths} total={maxMonths} />
        <p className="text-text-muted mt-2 text-xs">{r.statMonthsHint}</p>
      </div>
    </div>
  );
};

export default RewardsStats;
