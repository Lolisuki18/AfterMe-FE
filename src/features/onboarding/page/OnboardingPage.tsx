import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Step1Profile } from "../components/Step1Profile";
import { Step2Pulse } from "../components/Step2Pulse";
import { Step3Contact } from "../components/Step3Contact";
import {
  onboardingStore,
  type ProfileData,
  type PulseData,
  type ContactData,
} from "../store/onboardingStore";

type OnboardingStep = 1 | 2 | 3;

const OnboardingPage = () => {
  const navigate = useNavigate();
  const stored = onboardingStore.getData();

  const [step, setStep] = useState<OnboardingStep>(1);
  const [profile, setProfile] = useState<ProfileData>(stored.profile);
  const [pulse, setPulse] = useState<PulseData>(stored.pulse);
  const [contact, setContact] = useState<ContactData>(stored.contact);

  const next = useCallback(() => {
    if (step === 1) {
      onboardingStore.saveProfile(profile);
      setStep(2);
    } else if (step === 2) {
      onboardingStore.savePulse(pulse);
      setStep(3);
    }
  }, [step, profile, pulse]);

  const back = useCallback(() => {
    setStep((s) => Math.max(s - 1, 1) as OnboardingStep);
  }, []);

  const skip = useCallback(() => {
    // Skip saves current data and moves to next step
    if (step === 1) {
      onboardingStore.saveProfile(profile);
      setStep(2);
    }
  }, [step, profile]);

  const complete = useCallback(() => {
    onboardingStore.saveContact(contact);
    navigate("/dashboard");
  }, [contact, navigate]);

  return (
    <>
      {step === 1 && (
        <Step1Profile
          data={profile}
          onChange={setProfile}
          onNext={next}
          onSkip={skip}
        />
      )}

      {step === 2 && (
        <Step2Pulse
          data={pulse}
          onChange={setPulse}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 3 && (
        <Step3Contact
          data={contact}
          onChange={setContact}
          onComplete={complete}
          onBack={back}
        />
      )}
    </>
  );
};

export default OnboardingPage;
