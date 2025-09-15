"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditLeadTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const ProductEditModal: React.FC<EditLeadTypeModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  if (!row) return null;

  const [productApplication, setProductApplication] = React.useState(row.productApplication);
  const [sequence, setSequence] = React.useState(row.sequence);
  const [umoSize, setUmoSize] = React.useState(row.umoSize);

  const handleSave = () => {
    onSave({ ...row, productApplication, sequence, umoSize });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Product"
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
          <label className="block text-sm font-medium">Product Application:</label>
          <Input
            type="text"
            value={productApplication}
            onChange={(e) => setProductApplication(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Sequence:</label>
          <Input
            type="number"
            value={sequence}
            onChange={(e) => setSequence(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">UMO Size:</label>
          <Input
            type="text"
            value={umoSize}
            onChange={(e) => setUmoSize(Number(e.target.value))}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProductEditModal;
