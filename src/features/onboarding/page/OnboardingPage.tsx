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
import { authStore } from "@/features/auth/store/authStore";

type OnboardingStep = 1 | 2 | 3;

const OnboardingPage = () => {
  const navigate = useNavigate();
  const stored = onboardingStore.getData();
  const currentUser = authStore.getCurrentUser();

  const [step, setStep] = useState<OnboardingStep>(1);

  const [profile, setProfile] = useState<ProfileData>({
    fullName: stored.profile?.fullName || currentUser?.name || "",
    medicalNote: stored.profile?.medicalNote || "",
    checkInPreference: stored.profile?.checkInPreference ?? "morning",
  });

  const [pulse, setPulse] = useState<PulseData>(
    stored.pulse ?? {
      morning: true,
      afternoon: false,
      evening: false,
      night: false,
    },
  );

  const [contact, setContact] = useState<ContactData>(
    stored.contact ?? {
      fullName: "",
      relationship: "",
      phone: "",
      notifyContact: true,
    },
  );

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
    // Skip profile step → go to pulse
    setStep(2);
  }, []);

  const complete = useCallback(() => {
    onboardingStore.saveContact(contact);
    authStore.completeOnboarding();
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
