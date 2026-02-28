import { useState } from "react";
import { PricingHeader } from "../components/PricingHeader";
import { PricingGrid } from "../components/PricingGrid";
import { FamilyPlanBanner } from "../components/FamilyPlanBanner";
import { WhyChooseUs } from "../components/WhyChooseUs";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-16 sm:px-6">
      <PricingHeader isYearly={isYearly} onToggle={setIsYearly} />
      <PricingGrid isYearly={isYearly} />
      <FamilyPlanBanner />
      <WhyChooseUs />
    </div>
  );
};

export default PricingPage;
