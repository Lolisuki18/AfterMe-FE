import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Input, Button } from "@/shared/components";
import { settingsStore } from "../store/settingsStore";

export const PersonalInfoForm = () => {
  const { t } = useLanguage();
  const s = t.accountSettings.personal;
  const profile = settingsStore.getProfile();

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email] = useState(profile.email);
  const [phone] = useState(profile.phone);

  const handleSave = () => {
    settingsStore.updateProfile({ firstName, lastName });
  };

  return (
    <div>
      <h2 className="text-text text-xl font-bold">{s.title}</h2>
      <p className="text-text-muted mt-1 text-sm">{s.subtitle}</p>

      <div className="mt-6 space-y-5">
        {/* First / Last name */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label={s.firstName}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            label={s.lastName}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <Input
            label={s.universityEmail}
            value={email}
            readOnly
            leftIcon={
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <p className="text-text-muted mt-1 text-xs">{s.emailHelper}</p>
        </div>

        {/* Phone */}
        <Input
          label={s.phoneNumber}
          value={phone}
          readOnly
          leftIcon={
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          }
        />

        {/* Save */}
        <div className="flex justify-end">
          <Button variant="primary" rounded onClick={handleSave}>
            {s.saveChanges}
          </Button>
        </div>
      </div>
    </div>
  );
};
