"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditStoreTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditStoreTypeModal: React.FC<EditStoreTypeModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [storeTypeName, setStoreTypeName] = React.useState(row?.storeTypeName || "");

  React.useEffect(() => {
    if (row) {
      setStoreTypeName(row.storeTypeName || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, storeTypeName });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Store Type"
      size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div>
          <Input
            type="text"
            value={storeTypeName}
            label="Store Type Name "
            onChange={(e) => setStoreTypeName(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditStoreTypeModal;
