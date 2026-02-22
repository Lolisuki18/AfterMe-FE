import type { ReactNode } from "react";

interface Audience {
  icon: ReactNode;
  title: string;
  description: string;
}

const audiences: Audience[] = [
  {
    icon: (
      <svg
        className="h-7 w-7 text-white/70"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
        />
      </svg>
    ),
    title: "Solo Travelers",
    description:
      "Explore the world with confidence. If you don't check in from your hike or trip, local authorities or family get your location and itinerary details immediately.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-white/70"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
    title: "Living Alone",
    description:
      "Maintain your independence while having a safety net. Perfect for elderly individuals or anyone living solo who wants reassurance that someone will know if they need help.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-white/70"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
    title: "Professionals",
    description:
      "Secure your business continuity. Ensure critical work passwords and project details are transferred to colleagues if you're incapacitated.",
  },
];

export const WhoNeed = () => {
  return (
    <section className="bg-navy relative overflow-hidden py-24">
      {/* Dark vertical stripe pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0px, transparent 48px, rgba(255,255,255,0.04) 48px, rgba(255,255,255,0.04) 96px)",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Who Needs AfterMe?
          </h2>
          <p className="text-lg text-white/60">
            Designed for anyone who wants to live more intentionally and protect
            those they care about.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                {a.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{a.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
