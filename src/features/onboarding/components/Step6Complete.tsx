import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/app/useLanguage";

export const Step6Complete = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const o = t.onboarding;

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Animated checkmark circle */}
      <div className="relative mb-8 flex h-36 w-36 items-center justify-center">
        {/* Outer glow ring */}
        <div className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-20" />
        <div className="absolute inset-2 rounded-full bg-green-400 opacity-30" />
        {/* Main circle */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-green-500 shadow-lg">
          <svg
            className="h-14 w-14 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <h1 className="text-navy dark:text-text mb-8 text-center text-3xl font-bold">
        {o.complete.title}
      </h1>

      <button
        onClick={() => navigate("/dashboard")}
        className="bg-primary hover:bg-primary-hover w-72 cursor-pointer rounded-xl py-3 font-semibold text-white transition-colors"
      >
        {o.goToDashboard}
      </button>
    </div>
  );
};
