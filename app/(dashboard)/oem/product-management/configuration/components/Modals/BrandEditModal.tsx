"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface BrandEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const BrandEditModal: React.FC<BrandEditModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  const [brandName, setBrandName] = React.useState(row?.brandName || "");

  React.useEffect(() => {
      if (row) {
        setBrandName(row.stage || "");
      }
    }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, brandName });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Brand Details"
      size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button
            onClick={onClose}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium">Brand Name:</label>
          <Input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default BrandEditModal;
