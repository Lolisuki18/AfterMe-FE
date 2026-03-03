import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button } from "@/shared/components";
import Logo from "@/shared/icon/Logo";
import { HamburgerIcon, XIcon } from "@/shared/icon";

export const PublicHeader = () => {
  const { t } = useLanguage();
  const l = t.aboutUs;
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: l.navHome },
    { href: "/about", label: l.navAbout },
    { href: "/pricing", label: l.navPricing },
  ];

  return (
    <header className="bg-bg border-border sticky top-0 z-50 border-b shadow-sm">
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
                className="text-text-muted hover:text-text text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="/login"
            className="text-text-muted hover:text-text text-sm font-medium"
          >
            {l.signIn}
          </a>
          <Button rounded size="md">
            <a href="/onboarding">{l.getStarted}</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button className="text-text md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="text-text h-6 w-6" />
          ) : (
            <HamburgerIcon className="text-text h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-bg border-border border-t px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-text-muted hover:bg-surface-alt rounded-lg px-3 py-2.5 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex gap-2">
            <Button variant="outline" rounded fullWidth>
              <a href="/login">{l.signIn}</a>
            </Button>
            <Button rounded fullWidth>
              <a href="/onboarding">{l.getStarted}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
