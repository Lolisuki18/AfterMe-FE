import type { ReactNode } from "react";

interface RiskCard {
  icon: ReactNode;
  title: string;
  description: string;
}

const risks: RiskCard[] = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 6.75 21 5.25m0 0 1.5-1.5M21 5.25l1.5 1.5M21 5.25l-1.5-1.5"
        />
      </svg>
    ),
    title: "Unresponsive Scenarios",
    description:
      "Accidents or sudden illness can happen to anyone. If you live alone or travel, who will know if you stop responding?",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z"
        />
      </svg>
    ),
    title: "Inaccessible Data",
    description:
      "Financial accounts, passwords, and digital assets are often lost forever because family members cannot access them.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>
    ),
    title: "Delayed Response",
    description:
      "In emergencies, every hour counts. Traditional methods often mean days pass before anyone realizes something is wrong.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    title: "Daily Management",
    description:
      "Basic reminder apps handle tasks but fail to prepare you for the 'what if' scenarios of life.",
  },
];

export const TheRisk = () => {
  return (
    <section className="bg-bg relative overflow-hidden py-24">
      {/* Striped bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(239,122,115,0.08) 48px, rgba(239,122,115,0.08) 96px)",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-secondary mb-4 text-4xl font-bold">
            The Risks We Often Ignore
          </h2>
          <p className="text-text-muted text-lg">
            Modern life is digital and often solitary. We've built a solution
            for the vulnerabilities that most apps overlook.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="border-border bg-surface flex flex-col gap-4 rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="text-text-muted">{risk.icon}</div>
              <h3 className="text-secondary text-base font-bold">
                {risk.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {risk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
