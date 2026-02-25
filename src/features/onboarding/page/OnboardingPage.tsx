import { useState } from "react";
import type { OnboardingFormData, OnboardingStep } from "../interface";
import { defaultFormData } from "../interface";
import {
  Step1Welcome,
  Step2Profile,
  Step3CheckIn,
  Step4Trigger,
  Step5Contact,
  Step6Complete,
} from "../components";

const OnboardingPage = () => {
  const [step, setStep] = useState<OnboardingStep>(1);
  const [form, setForm] = useState<OnboardingFormData>(defaultFormData);

  const next = () => setStep((s) => Math.min(s + 1, 6) as OnboardingStep);
  const back = () => setStep((s) => Math.max(s - 1, 1) as OnboardingStep);

  // Generic field updater – handles string, boolean, and union values
  const handleChange = (
    field: keyof OnboardingFormData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {step === 1 && <Step1Welcome onNext={next} />}

      {step === 2 && (
        <Step2Profile
          data={form}
          onChange={handleChange}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 3 && (
        <Step3CheckIn
          data={form}
          onChange={handleChange}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 4 && (
        <Step4Trigger
          data={form}
          onChange={handleChange}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 5 && (
        <Step5Contact
          data={form}
          onChange={handleChange}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 6 && <Step6Complete />}
    </>
  );
};

export default OnboardingPage;
