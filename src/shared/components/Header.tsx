import Logo from "../icon/Logo";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="border-border bg-surface sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="text-text text-xl font-bold">
            <Logo />
          </a>
        </div>

        {/* Right side - Auth buttons */}
        <div className="flex items-center gap-4">
          {/* Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/"
              className="text-text-muted hover:text-text text-sm font-medium"
            >
              Features
            </a>
            <a
              href="/services"
              className="text-text-muted hover:text-text text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="/about"
              className="text-text-muted hover:text-text text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="text-text-muted hover:text-text text-sm font-medium"
            >
              Log In
            </a>
          </nav>
          <Button>
            <a href="/login">Start your journey</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
