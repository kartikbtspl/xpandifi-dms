"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface CategoryEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const CategoryEditModal: React.FC<CategoryEditModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  const [categoryName, setCategoryName] = React.useState(row?.categoryName || "");

  React.useEffect(() => {
        if (row) {
          setCategoryName(row.stage || "");
        }
      }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, categoryName });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Category"
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
          <label className="block text-sm font-medium">Category:</label>
          <Input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CategoryEditModal;
