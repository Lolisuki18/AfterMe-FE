import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Input, Button } from "@/shared/components";
import { EnvelopeIcon, PhoneIcon } from "@/shared/icon";
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
            leftIcon={<EnvelopeIcon className="h-4 w-4" />}
          />
          <p className="text-text-muted mt-1 text-xs">{s.emailHelper}</p>
        </div>

        {/* Phone */}
        <Input
          label={s.phoneNumber}
          value={phone}
          readOnly
          leftIcon={<PhoneIcon className="h-4 w-4" />}
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
