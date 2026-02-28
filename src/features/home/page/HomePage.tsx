import {
  Hero,
  HowWork,
  MoreThan,
  Pricing,
  TheRisk,
  WhoNeed,
} from "../components";
import { useDocumentTitle } from "@/hooks";

const HomePage = () => {
  useDocumentTitle();

  return (
    <>
      <Hero />
      <TheRisk />
      <HowWork />
      <MoreThan />
      <WhoNeed />
      <Pricing />
    </>
  );
};

export default HomePage;
