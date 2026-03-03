import { useLanguage } from "@/app/useLanguage";
import { SettingToggle } from "@/shared/components";
import { PublicHeader, PublicFooter } from "@/features/landing/components";
import {
  ShieldCheck,
  Database,
  Share2,
  UserCheck,
  Cookie,
  Clock,
  Baby,
  Globe,
  RefreshCw,
  FileSearch,
  Mail,
} from "lucide-react";

const sectionIcons = [
  Database,
  FileSearch,
  ShieldCheck,
  Share2,
  UserCheck,
  Cookie,
  Clock,
  Baby,
  Globe,
  RefreshCw,
];

const PrivacyPolicyPage = () => {
  const { t } = useLanguage();
  const pp = t.privacyPolicy;

  return (
    <div className="bg-bg text-text flex min-h-screen flex-col">
      <PublicHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-primary/10 via-primary/5 to-bg relative overflow-hidden bg-linear-to-b py-16 sm:py-24">
          <div className="absolute inset-0 opacity-5">
            <div className="bg-primary/20 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl" />
            <div className="bg-secondary/20 absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <ShieldCheck className="h-4 w-4" />
              <span>{pp.lastUpdated}</span>
            </div>
            <h1 className="text-text mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {pp.title}
            </h1>
            <p className="text-muted mx-auto max-w-2xl text-lg leading-relaxed">
              {pp.intro}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-10">
            {/* Section 1 – Information We Collect */}
            <SectionCard icon={sectionIcons[0]} title={pp.section1Title}>
              <p>{pp.section1P1}</p>

              <h4 className="text-text mt-4 font-medium">
                {pp.section1Sub1Title}
              </h4>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {pp.section1Sub1List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4 className="text-text mt-4 font-medium">
                {pp.section1Sub2Title}
              </h4>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {pp.section1Sub2List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            {/* Section 2 – How We Use Info */}
            <SectionCard icon={sectionIcons[1]} title={pp.section2Title}>
              <p>{pp.section2P1}</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {pp.section2List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            {/* Section 3 – Data Storage & Security */}
            <SectionCard icon={sectionIcons[2]} title={pp.section3Title}>
              <p>{pp.section3P1}</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {pp.section3List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-2">{pp.section3P2}</p>
            </SectionCard>

            {/* Section 4 – Data Sharing */}
            <SectionCard icon={sectionIcons[3]} title={pp.section4Title}>
              <p>{pp.section4P1}</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {pp.section4List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            {/* Section 5 – Your Rights */}
            <SectionCard icon={sectionIcons[4]} title={pp.section5Title}>
              <p>{pp.section5P1}</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {pp.section5List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-2">{pp.section5P2}</p>
            </SectionCard>

            {/* Section 6 – Cookies */}
            <SectionCard icon={sectionIcons[5]} title={pp.section6Title}>
              <p>{pp.section6P1}</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {pp.section6List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-2">{pp.section6P2}</p>
            </SectionCard>

            {/* Section 7 – Data Retention */}
            <SectionCard icon={sectionIcons[6]} title={pp.section7Title}>
              <p>{pp.section7P1}</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {pp.section7List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            {/* Section 8 – Children's Privacy */}
            <SectionCard icon={sectionIcons[7]} title={pp.section8Title}>
              <p>{pp.section8P1}</p>
            </SectionCard>

            {/* Section 9 – International Transfers */}
            <SectionCard icon={sectionIcons[8]} title={pp.section9Title}>
              <p>{pp.section9P1}</p>
            </SectionCard>

            {/* Section 10 – Policy Changes */}
            <SectionCard icon={sectionIcons[9]} title={pp.section10Title}>
              <p>{pp.section10P1}</p>
              <p>{pp.section10P2}</p>
            </SectionCard>

            {/* Contact */}
            <div className="border-border bg-card rounded-2xl border p-8 text-center shadow-sm">
              <Mail className="text-primary mx-auto mb-4 h-8 w-8" />
              <h3 className="text-text mb-3 text-xl font-semibold">
                {pp.contactTitle}
              </h3>
              <p className="text-muted mb-4">{pp.contactP1}</p>
              <div className="space-y-1">
                <p>
                  <a
                    href={`mailto:${pp.contactEmail}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {pp.contactEmail}
                  </a>
                </p>
                <p className="text-muted text-sm">{pp.contactAddress}</p>
                <p className="text-muted text-sm">{pp.contactDpo}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
      <SettingToggle />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Reusable SectionCard                                               */
/* ------------------------------------------------------------------ */
interface SectionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}

const SectionCard = ({ icon: Icon, title, children }: SectionCardProps) => (
  <div className="group">
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="text-text mb-3 text-xl font-semibold">{title}</h2>
        <div className="text-muted space-y-3 leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage;
