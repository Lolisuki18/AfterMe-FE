import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";
import { GhostIcon } from "@/shared/icon";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const n = t.notFound;

  return (
    <div className="bg-bg flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Illustration */}
      <div className="relative mb-8 select-none">
        {/* Ghost body */}
        <div className="relative mx-auto w-40">
          {/* Glow behind ghost */}
          <div className="bg-primary/20 absolute inset-0 rounded-full blur-3xl" />

          <GhostIcon />
        </div>
      </div>

      {/* 404 text */}
      <h1 className="text-primary mb-2 text-8xl font-extrabold tracking-tight md:text-9xl">
        404
      </h1>

      {/* Title */}
      <h2 className="text-text mb-3 text-2xl font-bold md:text-3xl">
        {n.title}
      </h2>

      {/* Description */}
      <p className="text-text-muted mb-8 max-w-md text-base md:text-lg">
        {n.description}
      </p>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => navigate(-1)}
          className="border-border text-text hover:bg-surface rounded-xl border px-6 py-3 text-sm font-medium transition-colors"
        >
          {n.goBack}
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-primary hover:bg-primary/90 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors"
        >
          {n.goHome}
        </button>
      </div>

      {/* Decorative dots */}
      <div className="mt-16 flex gap-3 opacity-30">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="bg-primary block rounded-full"
            style={{ width: 8 + i * 4, height: 8 + i * 4 }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFoundPage;
