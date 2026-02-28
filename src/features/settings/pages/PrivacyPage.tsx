import { useLanguage } from "@/app/useLanguage";
import ComingSoonPage from "@/shared/components/ComingSoonPage";

const PrivacyPage = () => {
  const { t } = useLanguage();
  return <ComingSoonPage featureName={t.accountSettings.nav.privacy} />;
};

export default PrivacyPage;
