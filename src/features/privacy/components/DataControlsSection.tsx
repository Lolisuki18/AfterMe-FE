import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Toggle } from "@/shared/components";
import {
  privacyStore,
  type PrivacySettings,
} from "@/features/privacy/store/privacyStore";

interface ControlRowProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}

const ControlRow = ({
  title,
  description,
  checked,
  onChange,
}: ControlRowProps) => (
  <div className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
    <div className="min-w-0 flex-1">
      <p className="text-text text-sm font-semibold">{title}</p>
      <p className="text-text-muted mt-1 text-xs leading-relaxed">
        {description}
      </p>
    </div>
    <Toggle checked={checked} onChange={onChange} />
  </div>
);

export const DataControlsSection = () => {
  const { t } = useLanguage();
  const p = t.privacy;
  const [settings, setSettings] = useState<PrivacySettings>(privacyStore.get());

  const handleToggle = (key: keyof PrivacySettings) => {
    const updated = privacyStore.toggle(key);
    setSettings({ ...updated });
  };

  const controls: {
    key: keyof PrivacySettings;
    title: string;
    desc: string;
  }[] = [
    {
      key: "usageAnalytics",
      title: p.usageAnalytics,
      desc: p.usageAnalyticsDesc,
    },
    { key: "crashReports", title: p.crashReports, desc: p.crashReportsDesc },
    {
      key: "trustedContactsVisibility",
      title: p.trustedContacts,
      desc: p.trustedContactsDesc,
    },
  ];

  return (
    <section>
      <h2 className="text-text mb-4 text-lg font-bold">{p.dataControls}</h2>
      <div className="bg-surface divide-border divide-y rounded-2xl p-5 sm:p-6">
        {controls.map((c) => (
          <ControlRow
            key={c.key}
            title={c.title}
            description={c.desc}
            checked={settings[c.key]}
            onChange={() => handleToggle(c.key)}
          />
        ))}
      </div>
    </section>
  );
};
