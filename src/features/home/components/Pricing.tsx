interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  price: string;
  per: string;
  tagline: string;
  features: PlanFeature[];
  cta: string;
  highlight: boolean;
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "Free",
    per: "",
    tagline: "Essential protection for everyone.",
    features: [
      { text: "Basic daily reminders" },
      { text: "1 Emergency Contact" },
      { text: "Standard Dead Man Switch (48h)" },
      { text: "5 Secure Notes" },
      { text: "Email Notifications" },
    ],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$3",
    per: "/month",
    tagline: "Complete peace of mind with AI support.",
    features: [
      { text: "Unlimited Reminders" },
      { text: "5 Emergency Contacts" },
      { text: "Custom Check-in Intervals" },
      { text: "Unlimited Secure Vault" },
      { text: "AI Message Assistant" },
      { text: "SMS & Call Alerts" },
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Family",
    price: "$8",
    per: "/month",
    tagline: "Protection for your whole household.",
    features: [
      { text: "Everything in Premium" },
      { text: "Up to 5 Accounts" },
      { text: "Shared Emergency Contacts" },
      { text: "Family Dashboard" },
      { text: "Priority Support" },
      { text: "Early Warning System" },
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const CheckIcon = () => (
  <svg
    className="text-primary h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-bg relative overflow-hidden py-12 lg:py-24"
    >
      {/* Striped bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(239,122,115,0.08) 48px, rgba(239,122,115,0.08) 96px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2 className="text-secondary mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-text-muted text-base lg:text-lg">
            Start for free. Upgrade when you need more protection. No hidden
            fees.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? "border-primary bg-surface border-2 shadow-xl"
                  : "border-border bg-surface border shadow-sm"
              }`}
            >
              {/* Most Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent rounded-full px-5 py-1.5 text-sm font-semibold text-white shadow">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p className="text-secondary mb-2 text-base font-semibold">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-2 flex items-end gap-1">
                <span className="text-secondary text-5xl font-extrabold">
                  {plan.price}
                </span>
                {plan.per && (
                  <span className="text-text-muted mb-1 text-base">
                    {plan.per}
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p className="text-text-muted mb-8 text-sm">{plan.tagline}</p>

              {/* Features */}
              <ul className="mb-10 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-text text-sm">{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto">
                <button
                  type="button"
                  className={`w-full rounded-xl py-3 text-base font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-primary hover:bg-primary-hover text-white"
                      : plan.name === "Family"
                        ? "bg-navy hover:bg-navy/90 text-white"
                        : "border-border text-secondary hover:bg-surface-alt border bg-transparent"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
