"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditClassTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditClassTypeModal: React.FC<EditClassTypeModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [classTypeName, setClassTypeName] = React.useState(row?.classTypeName || "");
  const [sequence, setSequence] = React.useState(row?.sequence || "");

  React.useEffect(() => {
    if (row) {
      setClassTypeName(row.classTypeName || "");
      setSequence(row.sequence || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, classTypeName, sequence });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Class Type"
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
            value={classTypeName}
            label="Class Type Name "
            onChange={(e) => setClassTypeName(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Sequence"
            value={sequence}
            onChange={(e) => setSequence(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditClassTypeModal;
