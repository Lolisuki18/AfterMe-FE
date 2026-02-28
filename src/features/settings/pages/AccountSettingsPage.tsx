import React, { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { PersonalInfoForm, SecuritySettings, DangerZone } from "../components";
import { settingsStore } from "../store/settingsStore";

type SettingsTab = "personal" | "security" | "privacy" | "notifications";

const NAV_ICONS: Record<SettingsTab, React.ReactNode> = {
  personal: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  security: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  privacy: (
    <svg
      className="h-4 w-4"
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
  ),
  notifications: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
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
