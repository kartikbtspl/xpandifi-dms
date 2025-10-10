"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditCirclesModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditCirclesModal: React.FC<EditCirclesModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [circleName, setCircleName] = React.useState(row?.circleName || "");
  const [circleCode, setCircleCode] = React.useState(row?.circleCode || "");

  React.useEffect(() => {
    if (row) {
      setCircleName(row.circleName || "");
      setCircleCode(row.circleCode || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, circleName, circleCode });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Circles List"
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
            value={circleName}
            label="Circle Name "
            onChange={(e) => setCircleName(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Circle Code"
            value={circleCode}
            onChange={(e) => setCircleCode(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditCirclesModal;
