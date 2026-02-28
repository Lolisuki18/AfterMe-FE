import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";

export const DangerZone = () => {
  const { t } = useLanguage();
  const s = t.accountSettings.danger;

  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 sm:p-6">
      <h2 className="text-sm font-bold text-red-500">{s.title}</h2>
      <p className="text-text-muted mt-2 text-sm leading-relaxed">
        {s.description}
      </p>
      <div className="mt-4">
        <Button
          variant="danger"
          size="sm"
          rounded
          leftIcon={
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          }
        >
          {s.deleteAccount}
        </Button>
      </div>
    </div>
  );
};
