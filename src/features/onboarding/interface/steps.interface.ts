import type {
  ProfileData,
  PulseData,
  ContactData,
} from "../store/onboardingStore";

export interface Step1ProfileProps {
  data: ProfileData;
  onChange: (data: ProfileData) => void;
  onNext: () => void;
  onSkip: () => void;
}

export interface Step2PulseProps {
  data: PulseData;
  onChange: (data: PulseData) => void;
  onNext: () => void;
  onBack: () => void;
}

export interface Step3ContactProps {
  data: ContactData;
  onChange: (data: ContactData) => void;
  onComplete: () => void;
  onBack: () => void;
}
