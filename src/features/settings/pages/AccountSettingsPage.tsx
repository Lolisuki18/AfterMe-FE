import React, { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import {
  UserOutlineIcon,
  ShieldCheckIcon,
  EyeOpenIcon,
  BellAlertIcon,
} from "@/shared/icon";
import { PersonalInfoForm, SecuritySettings, DangerZone } from "../components";
import { settingsStore } from "../store/settingsStore";

type SettingsTab = "personal" | "security" | "privacy" | "notifications";

const NAV_ICONS: Record<SettingsTab, React.ReactNode> = {
  personal: <UserOutlineIcon className="h-4 w-4" />,
  security: <ShieldCheckIcon className="h-4 w-4" />,
  privacy: <EyeOpenIcon className="h-4 w-4" />,
  notifications: <BellAlertIcon className="h-4 w-4" />,
};

const AccountSettingsPage = () => {
  const { t } = useLanguage();
  const nav = t.accountSettings.nav;
  const [activeTab, setActiveTab] = useState<SettingsTab>("personal");
  const profile = settingsStore.getProfile();

  const tabs: { key: SettingsTab; label: string }[] = [
    { key: "personal", label: nav.personalInfo },
    { key: "security", label: nav.security },
    { key: "privacy", label: nav.privacy },
    { key: "notifications", label: nav.notifications },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* User header — mobile */}
      <div className="mb-6 flex items-center gap-4 lg:hidden">
        <div className="bg-primary/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
          <span className="text-primary text-lg font-bold">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </span>
        </div>
        <div>
          <p className="text-text font-semibold">
            {profile.firstName} {profile.lastName}
          </p>
          <p className="text-text-muted text-xs">{profile.email}</p>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* ── Left Nav ──────────────────────────────────────────────── */}
        <aside className="shrink-0 lg:w-48">
          {/* User card — desktop */}
          <div className="mb-5 hidden items-center gap-3 lg:flex">
            <div className="bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
              <span className="text-primary text-sm font-bold">
                {profile.firstName[0]}
                {profile.lastName[0]}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-text truncate text-sm font-semibold">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="text-text-muted truncate text-xs">
                {profile.email}
              </p>
            </div>
          </div>

          {/* Tab buttons — horizontal scroll on mobile, vertical on lg */}
          <nav className="flex gap-1 overflow-x-auto lg:flex-col">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-primary text-white"
                    : "text-text-muted hover:bg-surface-alt hover:text-text"
                }`}
              >
                {NAV_ICONS[tab.key]}
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── Right Content ─────────────────────────────────────────── */}
        <section className="min-w-0 flex-1 space-y-8">
          {activeTab === "personal" && <PersonalInfoForm />}
          {activeTab === "security" && (
            <>
              <SecuritySettings />
              <DangerZone />
            </>
          )}
          {activeTab === "privacy" && (
            <div className="text-text-muted py-12 text-center text-sm">
              Coming soon…
            </div>
          )}
          {activeTab === "notifications" && (
            <div className="text-text-muted py-12 text-center text-sm">
              Coming soon…
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
