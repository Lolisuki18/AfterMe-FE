import React, { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import {
  CreditCardIcon,
  UserOutlineIcon,
  DocumentIcon,
  EyeSlashIcon,
  EyeIcon,
  TrashIcon,
} from "@/shared/icon";
import type { DigitalAsset, AssetCategory } from "../store/vaultStore";
import { vaultStore } from "../store/vaultStore";
import { UnlockAssetModal } from "./UnlockAssetModal";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import { toast } from "sonner";

const CATEGORY_ICONS: Record<AssetCategory, React.ReactNode> = {
  banking: <CreditCardIcon className="h-4 w-4" />,
  social: <UserOutlineIcon className="h-4 w-4" />,
  document: <DocumentIcon className="h-4 w-4" />,
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

  const [showUnlock, setShowUnlock] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleEyeClick = () => {
    if (revealed) {
      setRevealed(false);
      return;
    }
    if (!vaultStore.hasSecurityKey()) {
      toast.error(v.noKeySetError);
      return;
    }
    setShowUnlock(true);
  };

  const handleUnlocked = () => {
    setShowUnlock(false);
    setRevealed(true);
  };

  const handleDeleteConfirm = () => {
    setShowDelete(false);
    onDelete(asset.id);
  };

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
            <p className="text-text text-sm">
              {revealed ? asset.username : "••••••"}
            </p>
          </div>
        )}
        {asset.password && (
          <div className="text-right">
            <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
              {v.password}
            </p>
            <p className="text-text text-sm">
              {revealed ? asset.password : "••••••"}
            </p>
          </div>
        )}
        {asset.location && (
          <div className="text-right">
            <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
              {v.location}
            </p>
            <p className="text-text text-sm">
              {revealed ? asset.location : "••••••"}
            </p>
          </div>
        )}

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleEyeClick}
            className="text-text-muted hover:text-text p-1"
            title={revealed ? v.hideDetails : v.showDetails}
          >
            {revealed ? (
              <EyeIcon className="h-4 w-4" />
            ) : (
              <EyeSlashIcon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setShowDelete(true)}
            className="text-text-muted hover:text-error p-1"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <UnlockAssetModal
        open={showUnlock}
        onClose={() => setShowUnlock(false)}
        onUnlocked={handleUnlocked}
        assetTitle={asset.title}
      />
      <DeleteConfirmModal
        open={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDeleteConfirm}
        assetTitle={asset.title}
      />
    </div>
  );
};
