import type { ReactNode } from "react";
import { useLanguage } from "../../../app/useLanguage";
import { CheckIcon, XCircleIcon } from "../icon";

/* ───── Shared consent item ───── */

interface ConsentItemProps {
  text: string;
  isAllowed: boolean;
}

const ConsentItem = ({ text, isAllowed }: ConsentItemProps) => (
  <li className="flex items-start gap-2.5 py-1.5">
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        isAllowed
          ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
          : "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
      }`}
    >
      {isAllowed ? (
        <CheckIcon className="h-3 w-3" />
      ) : (
        <XCircleIcon className="h-3 w-3" />
      )}
    </span>
    <span className="text-text text-sm">{text}</span>
  </li>
);

/* ───── Column wrapper ───── */

interface ColumnProps {
  title: string;
  children: ReactNode;
  accent: "green" | "red";
}

const Column = ({ title, children, accent }: ColumnProps) => (
  <div>
    <h3
      className={`mb-2 text-sm font-semibold tracking-wider uppercase ${
        accent === "green"
          ? "text-emerald-600 dark:text-emerald-400"
          : "text-red-500 dark:text-red-400"
      }`}
    >
      {title}
    </h3>
    <ul className="space-y-0.5">{children}</ul>
  </div>
);

/* ───── PrivacyPromiseCard ───── */

const PrivacyPromiseCard = () => {
  const { t } = useLanguage();
  const fl = t.familyLink;

  return (
    <div className="border-border bg-surface rounded-2xl border p-5 sm:p-6">
      <h2 className="text-text mb-4 text-center text-lg font-semibold">
        {fl.privacyTitle}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* CAN see */}
        <Column title={fl.canSeeTitle} accent="green">
          {fl.canSeeItems.map((item, i) => (
            <ConsentItem key={i} text={item} isAllowed />
          ))}
        </Column>

        {/* CANNOT see */}
        <Column title={fl.cannotSeeTitle} accent="red">
          {fl.cannotSeeItems.map((item, i) => (
            <ConsentItem key={i} text={item} isAllowed={false} />
          ))}
        </Column>
      </div>
    </div>
  );
};

export default PrivacyPromiseCard;
