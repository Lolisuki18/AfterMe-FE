import { useLanguage } from "@/app/useLanguage";
import { SettingToggle } from "@/shared/components";
import { PublicHeader, PublicFooter } from "@/features/landing/components";
import {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  Lock,
  CreditCard,
  Ban,
  Copyright,
  Scale,
  XCircle,
  RefreshCw,
  Landmark,
  Mail,
} from "lucide-react";

const sectionIcons = [
  FileText,
  Shield,
  Users,
  AlertTriangle,
  Lock,
  CreditCard,
  Ban,
  Copyright,
  Scale,
  XCircle,
  RefreshCw,
  Landmark,
];

const TermsOfServicePage = () => {
  const { t } = useLanguage();
  const tos = t.termsOfService;

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
              <FileText className="h-4 w-4" />
              <span>{tos.lastUpdated}</span>
            </div>
            <h1 className="text-text mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {tos.title}
            </h1>
            <p className="text-muted mx-auto max-w-2xl text-lg leading-relaxed">
              {tos.intro}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-10">
            {/* Section 1 */}
            <SectionCard icon={sectionIcons[0]} title={tos.section1Title}>
              <p>{tos.section1P1}</p>
              <p>{tos.section1P2}</p>
            </SectionCard>

            {/* Section 2 */}
            <SectionCard icon={sectionIcons[1]} title={tos.section2Title}>
              <p>{tos.section2P1}</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {tos.section2Features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </SectionCard>

            {/* Section 3 */}
            <SectionCard icon={sectionIcons[2]} title={tos.section3Title}>
              <p>{tos.section3P1}</p>
              <p>{tos.section3P2}</p>
              <p>{tos.section3P3}</p>
            </SectionCard>

            {/* Section 4 */}
            <SectionCard icon={sectionIcons[3]} title={tos.section4Title}>
              <p>{tos.section4P1}</p>
              <p>{tos.section4P2}</p>
            </SectionCard>

            {/* Section 5 */}
            <SectionCard icon={sectionIcons[4]} title={tos.section5Title}>
              <p>{tos.section5P1}</p>
              <p>{tos.section5P2}</p>
            </SectionCard>

            {/* Section 6 */}
            <SectionCard icon={sectionIcons[5]} title={tos.section6Title}>
              <p>{tos.section6P1}</p>
              <p>{tos.section6P2}</p>
              <p>{tos.section6P3}</p>
            </SectionCard>

            {/* Section 7 */}
            <SectionCard icon={sectionIcons[6]} title={tos.section7Title}>
              <p>{tos.section7P1}</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                {tos.section7List.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            {/* Section 8 */}
            <SectionCard icon={sectionIcons[7]} title={tos.section8Title}>
              <p>{tos.section8P1}</p>
            </SectionCard>

            {/* Section 9 */}
            <SectionCard icon={sectionIcons[8]} title={tos.section9Title}>
              <p>{tos.section9P1}</p>
              <p>{tos.section9P2}</p>
            </SectionCard>

            {/* Section 10 */}
            <SectionCard icon={sectionIcons[9]} title={tos.section10Title}>
              <p>{tos.section10P1}</p>
            </SectionCard>

            {/* Section 11 */}
            <SectionCard icon={sectionIcons[10]} title={tos.section11Title}>
              <p>{tos.section11P1}</p>
              <p>{tos.section11P2}</p>
            </SectionCard>

            {/* Section 12 */}
            <SectionCard icon={sectionIcons[11]} title={tos.section12Title}>
              <p>{tos.section12P1}</p>
            </SectionCard>

            {/* Contact */}
            <div className="border-border bg-card rounded-2xl border p-8 text-center shadow-sm">
              <Mail className="text-primary mx-auto mb-4 h-8 w-8" />
              <h3 className="text-text mb-3 text-xl font-semibold">
                {tos.contactTitle}
              </h3>
              <p className="text-muted mb-4">{tos.contactP1}</p>
              <div className="space-y-1">
                <p>
                  <a
                    href={`mailto:${tos.contactEmail}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {tos.contactEmail}
                  </a>
                </p>
                <p className="text-muted text-sm">{tos.contactAddress}</p>
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

export default TermsOfServicePage;
