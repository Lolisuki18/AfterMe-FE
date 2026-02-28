import { useLanguage } from "@/app/useLanguage";
import ComingSoonPage from "@/shared/components/ComingSoonPage";

const NotificationsPage = () => {
  const { t } = useLanguage();
  return <ComingSoonPage featureName={t.accountSettings.nav.notifications} />;
};

export default NotificationsPage;
