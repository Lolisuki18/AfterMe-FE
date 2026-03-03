import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../icon/Logo";
import { Button } from "./Button";
import { HamburgerIcon, XIcon } from "../icon";
import { useLanguage } from "@/app/useLanguage";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const NAV_LINKS = [
    { to: "/#features", label: t.header.features },
    { to: "/#how-it-works", label: t.header.howItWorks },
    { to: "/pricing", label: t.header.pricing },
    { to: "/login", label: t.header.login },
  ];

  /** Hash links (/#xyz) are handled via native anchor; everything else via router. */
  const isHashLink = (to: string) => to.startsWith("/#");

  return (
    <header className="border-border bg-surface sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-text text-xl font-bold">
          <Logo />
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) =>
              isHashLink(link.to) ? (
                <a
                  key={link.to + link.label}
                  href={link.to}
                  className="text-text-muted hover:text-text text-sm font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to + link.label}
                  to={link.to}
                  className="text-text-muted hover:text-text text-sm font-medium"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <Button onClick={() => navigate("/register")}>{t.header.cta}</Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
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
            {NAV_LINKS.map((link) =>
              isHashLink(link.to) ? (
                <a
                  key={link.to + link.label}
                  href={link.to}
                  className="text-text-muted hover:bg-surface-alt hover:text-text rounded-lg px-3 py-2.5 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to + link.label}
                  to={link.to}
                  className="text-text-muted hover:bg-surface-alt hover:text-text rounded-lg px-3 py-2.5 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <div className="mt-3">
            <Button
              onClick={() => {
                setMenuOpen(false);
                navigate("/onboarding");
              }}
            >
              {t.header.cta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
