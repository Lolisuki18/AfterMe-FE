import { SettingToggle } from "@/shared/components";
import {
  PublicHeader,
  PublicFooter,
  MissionSection,
  OurStorySection,
  ValuesSection,
  TeamSection,
  AboutCtaSection,
} from "../components";

const AboutUsPage = () => {
  return (
    <div className="bg-bg text-text flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1">
        <MissionSection />
        <OurStorySection />
        <ValuesSection />
        <TeamSection />
        <AboutCtaSection />
      </main>
      <PublicFooter />
      <SettingToggle />
    </div>
  );
};

export default AboutUsPage;
