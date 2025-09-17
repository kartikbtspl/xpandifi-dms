"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface SubCategoryEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const SubCategoryEditModal: React.FC<SubCategoryEditModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  const [subCategoryName, setSubCategoryName] = React.useState(row?.subCategoryName || "");

  React.useEffect(() => {
    if (row) {
      setSubCategoryName(row.shortForm || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, subCategoryName });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Sub Category"
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
          <label className="block text-sm font-medium">Sub Category:</label>
          <Input
            type="text"
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SubCategoryEditModal;
