import { useLanguage } from "../../../app/useLanguage";
import { LinkShieldIcon } from "@/shared/icon";

const ConsentHeader = () => {
  const { t } = useLanguage();
  const fl = t.familyLink;

  return (
    <div className="flex flex-col items-center text-center">
      {/* Avatar + icon */}
      <div className="relative mb-4">
        <div className="bg-primary/10 flex h-20 w-20 items-center justify-center rounded-full">
          <LinkShieldIcon className="text-primary h-10 w-10" />
        </div>
        {/* Small decorative dot */}
        <span className="border-bg absolute -right-1 bottom-0 h-5 w-5 rounded-full border-2 bg-emerald-500" />
      </div>

      <h1 className="text-text text-xl font-bold sm:text-2xl">
        {fl.headerTitle}
      </h1>
      <p className="text-primary mt-1 text-2xl font-extrabold sm:text-3xl">
        {fl.headerName}
      </p>
      <p className="text-text-muted mt-3 max-w-md text-sm leading-relaxed">
        {fl.headerSubtitle}
      </p>
    </div>
  );
};

export default ConsentHeader;
