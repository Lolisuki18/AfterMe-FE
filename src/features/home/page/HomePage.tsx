import { Hero } from "../components/Hero";
import { TheRisk } from "../components/TheRisk";
import { HowWork } from "../components/HowWork";
import { MoreThan } from "../components/MoreThan";
import { WhoNeed } from "../components/WhoNeed";
import { Pricing } from "../components/Pricing";

const HomePage = () => {
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
