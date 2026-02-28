import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Button, Textarea } from "@/shared/components";
import { vaultStore } from "../store/vaultStore";
import { AssetItem, VaultSidebar } from "../components";

const DigitalVaultPage = () => {
  const { t } = useLanguage();
  const v = t.vault;
  const data = vaultStore.getData();

  const [message, setMessage] = useState(data.finalMessage);

  const handleDelete = (id: string) => {
    vaultStore.removeAsset(id);
  };

  const handleSaveMessage = () => {
    vaultStore.saveFinalMessage(message);
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
          leftIcon={
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          }
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
          <svg
            className="text-primary h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
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
          <svg
            className="text-primary h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
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
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
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
    </div>
  );
};

export default DigitalVaultPage;
