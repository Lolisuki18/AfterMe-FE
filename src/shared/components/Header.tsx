import { useState } from "react";
import Logo from "../icon/Logo";
import { Button } from "./Button";
import { HamburgerIcon, XIcon } from "../icon";
import { useLanguage } from "@/app/useLanguage";
import { LanguageToggle } from "./LanguageToggle";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const NAV_LINKS = [
    { href: "/#features", label: t.header.features },
    { href: "/#how-it-works", label: t.header.howItWorks },
    { href: "/#pricing", label: t.header.pricing },
    { href: "/login", label: t.header.login },
  ];

  return (
    <header className="border-border bg-surface sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="text-text text-xl font-bold">
          <Logo />
        </a>

        {/* Desktop nav + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-text-muted hover:text-text text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle />
          <Button>
            <a href="/onboarding">{t.header.cta}</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            className="text-text flex items-center justify-center rounded-lg p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <XIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-border bg-surface border-t px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-text-muted hover:bg-surface-alt hover:text-text rounded-lg px-3 py-2.5 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3">
            <Button>
              <a href="/onboarding" className="block w-full text-center">
                {t.header.cta}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
