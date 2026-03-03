import { useState } from "react";
import { useLanguage } from "@/app/useLanguage";
import { Modal, Input, Select, Button } from "@/shared/components";
import { LockIcon, UserOutlineIcon } from "@/shared/icon";
import type { AssetCategory } from "../store/vaultStore";

interface AddAssetModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (asset: {
    title: string;
    category: AssetCategory;
    addedDate: string;
    username?: string;
    password?: string;
    location?: string;
  }) => void;
}

export const AddAssetModal = ({ open, onClose, onAdd }: AddAssetModalProps) => {
  const { t } = useLanguage();
  const v = t.vault;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<AssetCategory | "">("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const categoryOptions = [
    { value: "banking", label: v.bankingFinance },
    { value: "social", label: v.socialMedia },
    { value: "document", label: v.document },
  ];

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setUsername("");
    setPassword("");
    setLocation("");
  };

  const handleSubmit = () => {
    if (!title.trim() || !category) return;

    const now = new Date();
    const addedDate = now.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    });

    onAdd({
      title: title.trim(),
      category: category as AssetCategory,
      addedDate,
      username: username.trim() || undefined,
      password: password.trim() || undefined,
      location: location.trim() || undefined,
    });

    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const isValid = title.trim() && category;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={v.addAssetTitle}
      size="md"
      footer={
        <>
          <Button variant="ghost" onClick={handleClose}>
            {v.cancel}
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={!isValid}>
            {v.add}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        {/* Asset Name */}
        <Input
          label={v.assetName}
          placeholder={v.assetNamePlaceholder}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Category */}
        <Select
          label={v.category}
          options={categoryOptions}
          placeholder={v.selectCategory}
          value={category}
          onChange={(e) => setCategory(e.target.value as AssetCategory)}
        />

        {/* Username (optional) */}
        {(category === "banking" || category === "social") && (
          <Input
            label={v.username}
            placeholder={v.usernamePlaceholder}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            leftIcon={<UserOutlineIcon className="h-4 w-4" />}
          />
        )}

        {/* Password (optional) */}
        {(category === "banking" || category === "social") && (
          <Input
            label={v.password}
            type="password"
            placeholder={v.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<LockIcon className="h-4 w-4" />}
          />
        )}

        {/* Location (for documents) */}
        {category === "document" && (
          <Input
            label={v.locationLabel}
            placeholder={v.locationPlaceholder}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        )}
      </div>
    </Modal>
  );
};
