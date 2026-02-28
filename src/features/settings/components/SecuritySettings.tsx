import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button, Toggle } from "@/shared/components";
import { settingsStore } from "../store/settingsStore";

export const SecuritySettings = () => {
  const { t } = useLanguage();
  const s = t.accountSettings.security;
  const profile = settingsStore.getProfile();

  const [twoFactor, setTwoFactor] = useState(profile.twoFactorEnabled);

  const handleToggle = (val: boolean) => {
    setTwoFactor(val);
    settingsStore.toggleTwoFactor();
  };

  return (
    <div>
      <h2 className="text-text text-lg font-bold">{s.title}</h2>
      <p className="text-text-muted mt-1 text-sm">{s.subtitle}</p>

      <div className="bg-surface divide-border mt-5 divide-y rounded-2xl">
        {/* Password row */}
        <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-text text-sm font-semibold">{s.password}</p>
            <p className="text-text-muted text-xs">
              {s.lastChanged.replace("{time}", profile.passwordLastChanged)}
            </p>
          </div>
          <Button variant="outline" size="sm" rounded>
            {s.changePassword}
          </Button>
        </div>

        {/* 2FA row */}
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-text text-sm font-semibold">{s.twoFactor}</p>
            <p className="text-text-muted text-xs">{s.twoFactorDesc}</p>
          </div>
          <Toggle checked={twoFactor} onChange={handleToggle} />
        </div>
      </div>
    </div>
  );
};
