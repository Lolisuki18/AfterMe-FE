import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import Logo from "@/shared/icon/Logo";
import { HamburgerIcon, XIcon } from "@/shared/icon";

export const PublicHeader = () => {
  const { t } = useLanguage();
  const l = t.landing;
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#how", label: l.navHow },
    { href: "#features", label: l.navFeatures },
    { href: "#pricing", label: l.navPricing },
    { href: "#trust", label: l.navTrust },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/">
          <Logo className="h-8 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            {t.landing.signIn}
          </a>
          <Button rounded size="md">
            <a href="/onboarding">{t.landing.getStarted}</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <HamburgerIcon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex gap-2">
            <Button variant="outline" rounded fullWidth>
              <a href="/login">{t.landing.signIn}</a>
            </Button>
            <Button rounded fullWidth>
              <a href="/onboarding">{t.landing.getStarted}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
