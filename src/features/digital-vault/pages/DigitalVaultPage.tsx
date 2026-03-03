import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button, Textarea } from "@/shared/components";
import {
  PlusIcon,
  ShieldCheckIcon,
  ClockOutlineIcon,
  SaveIcon,
} from "@/shared/icon";
import { vaultStore } from "../store/vaultStore";
import { AssetItem, VaultSidebar, AddAssetModal } from "../components";
import { toast } from "sonner";

const DigitalVaultPage = () => {
  const { t } = useLanguage();
  const v = t.vault;
  const [, setRefreshKey] = useState(0);
  const data = vaultStore.getData();

  const [message, setMessage] = useState(data.finalMessage);
  const [showAddAsset, setShowAddAsset] = useState(false);

  const handleDelete = (id: string) => {
    vaultStore.removeAsset(id);
    setRefreshKey((k) => k + 1);
    toast.success(v.assetDeleted);
  };

  const handleSaveMessage = () => {
    vaultStore.saveFinalMessage(message);
    toast.success(v.messageSaved);
  };

  const handleAddAsset = (asset: Parameters<typeof vaultStore.addAsset>[0]) => {
    vaultStore.addAsset(asset);
    setRefreshKey((k) => k + 1);
    toast.success(v.assetAdded);
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-text text-2xl font-bold">{v.title}</h1>
          <p className="text-text-muted mt-1 max-w-xl text-sm leading-relaxed">
            {v.subtitle}
          </p>
        </div>
        <Button
          variant="primary"
          rounded
          leftIcon={<PlusIcon className="h-4 w-4" />}
          onClick={() => setShowAddAsset(true)}
        >
          {v.addAsset}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="bg-surface flex items-center gap-3 rounded-2xl px-4 py-4">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          <div>
            <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
              {v.vaultStatus}
            </p>
            <p className="text-text text-lg font-bold">{v.statusActive}</p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-2xl px-4 py-4">
          <ShieldCheckIcon
            className="text-primary h-5 w-5 shrink-0"
            strokeWidth={2}
          />
          <div>
            <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
              {v.encryptedItems}
            </p>
            <p className="text-text text-lg font-bold">
              {data.assets.length} {v.assets}
            </p>
          </div>
        </div>
        <div className="bg-surface flex items-center gap-3 rounded-2xl px-4 py-4">
          <ClockOutlineIcon className="text-primary h-5 w-5 shrink-0" />
          <div>
            <p className="text-text-muted text-[10px] font-semibold tracking-wider uppercase">
              {v.lastBackup}
            </p>
            <p className="text-text text-lg font-bold">2h ago</p>
          </div>
        </div>
      </div>

      {/* Main + sidebar */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left main */}
        <div className="min-w-0 flex-1 space-y-6">
          {/* Digital Assets */}
          <section>
            <h2 className="text-text mb-3 text-base font-bold">
              {v.digitalAssets}
            </h2>
            <div className="space-y-2">
              {data.assets.map((asset) => (
                <AssetItem
                  key={asset.id}
                  asset={asset}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </section>

          {/* Final Personal Message */}
          <section className="bg-surface rounded-2xl p-5">
            <h2 className="text-text text-base font-bold">{v.finalMessage}</h2>
            <p className="text-text-muted mt-1 text-sm leading-relaxed">
              {v.finalMessageDesc}
            </p>
            <div className="mt-4">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={v.messagePlaceholder}
                className="min-h-25"
              />
            </div>
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                onClick={handleSaveMessage}
                className="text-primary flex items-center gap-1.5 text-sm font-semibold hover:underline"
              >
                <SaveIcon className="h-4 w-4" />
                {v.saveMessage}
              </button>
            </div>
          </section>
        </div>

        {/* Right sidebar */}
        <aside className="w-full shrink-0 lg:w-72">
          <VaultSidebar />
        </aside>
      </div>

      {/* Add Asset Modal */}
      <AddAssetModal
        open={showAddAsset}
        onClose={() => setShowAddAsset(false)}
        onAdd={handleAddAsset}
      />
    </div>
  );
};

export default DigitalVaultPage;
