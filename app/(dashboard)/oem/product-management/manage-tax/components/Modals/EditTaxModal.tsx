"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditTaxModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditTaxModal: React.FC<EditTaxModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  const [taxCode, setTaxCode] = React.useState(row?.taxCode || "");
  const [taxName, setTaxName] = React.useState(row?.taxName || "");
  const [percentage, setPercentage] = React.useState(row?.percentage || "");

  React.useEffect(() => {
      if (row) {
        setTaxCode(row.shortForm || "");
        setTaxName(row.longForm || "");
        setPercentage(row.defaultValue || "");
      }
    }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, taxCode, taxName, percentage });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Tax"
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
          <label className="block text-sm font-medium">Tax Code:</label>
          <Input
            type="text"
            value={taxCode}
            onChange={(e) => setTaxCode(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tax Name:</label>
          <Input
            type="text"
            value={taxName}
            onChange={(e) => setTaxName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Percentage:</label>
          <Input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(Number(e.target.value))}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditTaxModal;
