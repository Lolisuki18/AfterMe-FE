import { useState } from "react";
import Logo from "../icon/Logo";
import { Button } from "./Button";

const NAV_LINKS = [
  { href: "/", label: "Features" },
  { href: "/services", label: "How It Works" },
  { href: "/about", label: "Pricing" },
  { href: "/login", label: "Log In" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Button>
            <a href="/login">Start your journey</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-text flex items-center justify-center rounded-lg p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            /* X icon */
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
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
              <a href="/login" className="block w-full text-center">
                Start your journey
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
