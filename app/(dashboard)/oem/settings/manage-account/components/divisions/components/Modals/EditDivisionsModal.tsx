"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditDivisionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditDivisionsModal: React.FC<EditDivisionsModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [divisionName, setDivisionName] = React.useState(row?.divisionName || "");
  const [divisionCode, setDivisonCode] = React.useState(row?.divisionCode || "");

  React.useEffect(() => {
    if (row) {
      setDivisionName(row.divisionName || "");
      setDivisonCode(row.divisionCode || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, divisionName, divisionCode });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Divisions List"
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
            value={divisionName}
            label="Division Name "
            onChange={(e) => setDivisionName(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Division Code"
            value={divisionCode}
            onChange={(e) => setDivisonCode(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditDivisionsModal;
