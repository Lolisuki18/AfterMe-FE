import React from "react";
import { useLanguage } from "@/app/useLanguage";
import type { DigitalAsset, AssetCategory } from "../store/vaultStore";

const CATEGORY_ICONS: Record<AssetCategory, React.ReactNode> = {
  banking: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  ),
  social: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  document: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
};

const CATEGORY_COLORS: Record<AssetCategory, string> = {
  banking: "bg-primary/10 text-primary",
  social: "bg-purple-500/10 text-purple-500",
  document: "bg-amber-500/10 text-amber-500",
};

interface AssetItemProps {
  asset: DigitalAsset;
  onDelete: (id: string) => void;
}

export const AssetItem = ({ asset, onDelete }: AssetItemProps) => {
  const { t } = useLanguage();
  const v = t.vault;

  const categoryLabel =
    asset.category === "banking"
      ? v.bankingFinance
      : asset.category === "social"
        ? v.socialMedia
        : v.document;

  return (
    <div className="bg-surface flex flex-col gap-3 rounded-xl px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${CATEGORY_COLORS[asset.category]}`}
        >
          {CATEGORY_ICONS[asset.category]}
        </div>
        <div>
          <p className="text-text text-sm font-semibold">{asset.title}</p>
          <p className="text-text-muted text-xs">
            {categoryLabel} &middot; Added {asset.addedDate}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {asset.username && (
          <div className="text-right">
            <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
              {v.username}
            </p>
          </div>
        )}
        {asset.password && (
          <div className="text-right">
            <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
              {v.password}
            </p>
            <p className="text-text text-sm">••••••</p>
          </div>
        )}
        {asset.location && (
          <div className="text-right">
            <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
              {v.location}
            </p>
            <p className="text-text text-sm">{asset.location}</p>
          </div>
        )}

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button type="button" className="text-text-muted hover:text-text p-1">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => onDelete(asset.id)}
            className="text-text-muted hover:text-error p-1"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
