import { useLanguage } from "../../../app/useLanguage";
import Logo from "../../../shared/icon/Logo";
import { ExitIcon } from "@/shared/icon";

const SetupHeader = () => {
  const { t } = useLanguage();
  const a = t.aiSetup;
  const pct = parseInt(a.progressPercent, 10);

  return (
    <header className="border-border bg-bg flex shrink-0 items-center justify-between border-b px-4 py-3 sm:px-6">
      {/* Left – Brand */}
      <div className="flex items-center gap-2">
        <Logo className="h-8 w-auto" />
        <div className="hidden leading-tight sm:block">
          <p className="text-text text-sm font-bold">{a.brandName}</p>
          <p className="text-text-muted text-xs">{a.brandSub}</p>
        </div>
      </div>

      {/* Center – progress */}
      <div className="mx-4 flex flex-1 flex-col items-center gap-1 sm:max-w-xs">
        <div className="flex w-full items-center justify-between text-xs">
          <span className="text-text-muted">{a.progressLabel}</span>
          <span className="text-primary font-semibold">
            {a.progressPercent}
          </span>
        </div>
        <div className="bg-surface-alt h-2 w-full overflow-hidden rounded-full">
          <div
            className="bg-primary h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Right – exit + avatar */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="text-text-muted hover:text-text hidden items-center gap-1.5 text-sm font-medium transition sm:inline-flex"
        >
          <ExitIcon />
          {a.exitSetup}
        </button>
        {/* Avatar placeholder */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-800">
          U
        </div>
      </div>
    </header>
  );
};

export default SetupHeader;
