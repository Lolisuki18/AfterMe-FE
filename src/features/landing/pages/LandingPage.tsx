import { SettingToggle } from "@/shared/components";
import {
  PublicHeader,
  HeroSection,
  HowItWorks,
  SecurityTrust,
  PricingPreview,
  PublicFooter,
} from "../components";

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <PublicHeader />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <SecurityTrust />
        <PricingPreview />
      </main>
      <PublicFooter />
      <SettingToggle />
    </div>
  );
};

export default LandingPage;
