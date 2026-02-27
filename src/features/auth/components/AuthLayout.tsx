import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { appConfig } from "@/app/config";
import { BRANDING_SLIDES } from "../data/authMockData";
import { SettingToggle } from "@/shared/components/SettingToggle";

interface AuthLayoutProps {
  children: ReactNode;
}

// ─── Rotating branding panel ──────────────────────────────────────────────────
const BrandingPanel = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BRANDING_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = BRANDING_SLIDES[index];

  return (
    <div className="bg-third relative hidden flex-col justify-between overflow-hidden p-12 lg:flex">
      {/* Decorative blobs */}
      <div className="bg-primary/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary/10 absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl" />

      {/* Logo */}
      <div className="relative z-10">
        <span className="text-navy text-3xl font-black tracking-tight">
          {appConfig.appName}
        </span>
        <p className="text-text-muted mt-1 text-sm font-medium">
          {t.auth.brandingTagline}
        </p>
      </div>

      {/* Animated Quote */}
      <div className="relative z-10 flex flex-1 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <blockquote className="text-navy text-2xl leading-relaxed font-semibold lg:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <p className="text-primary mt-4 text-sm font-semibold tracking-wide uppercase">
              — {current.author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide dots */}
      <div className="relative z-10 flex items-center gap-2">
        {BRANDING_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-primary w-6"
                : "bg-primary/30 hover:bg-primary/50 w-1.5"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Subtext */}
      <p className="text-text-muted relative z-10 mt-6 text-xs leading-relaxed">
        {t.auth.brandingSubtitle}
      </p>
    </div>
  );
};

// ─── Main AuthLayout ──────────────────────────────────────────────────────────
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-bg grid min-h-screen lg:grid-cols-2">
      {/* ── Left: Form panel ──────────────────────────────────────────────── */}
      <div className="flex flex-col">
        {/* Top bar */}
        <header className="border-border border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-navy text-xl font-black tracking-tight transition-opacity hover:opacity-80"
            >
              {appConfig.appName}
            </Link>
            <Link
              to="/"
              className="text-text-muted hover:text-text text-sm font-medium transition-colors"
            >
              {t.auth.backToHome}
            </Link>
          </div>
        </header>

        {/* Form area */}
        <motion.main
          className="flex flex-1 items-center justify-center px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="w-full max-w-md">{children}</div>
        </motion.main>

        {/* Footer note */}
        <footer className="border-border border-t px-6 py-4">
          <p className="text-text-muted text-center text-xs">
            {t.auth.termsNotice}{" "}
            <Link to="/terms" className="text-primary hover:underline">
              {t.auth.termsLink}
            </Link>{" "}
            {t.auth.andText}{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              {t.auth.privacyLink}
            </Link>
          </p>
        </footer>
      </div>

      {/* ── Right: Branding panel (lg+) ───────────────────────────────────── */}
      <BrandingPanel />

      {/* Global settings toggle */}
      <SettingToggle />
    </div>
  );
};
