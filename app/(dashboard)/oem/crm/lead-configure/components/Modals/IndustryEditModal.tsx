"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface IndustryEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const IndustryEditModal: React.FC<IndustryEditModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  if (!row) return null;

  const [leadTypeName, setLeadTypeName] = React.useState(row.leadTypeName);
  const [sequence, setSequence] = React.useState(row.sequence);

  const handleSave = () => {
    onSave({ ...row, leadTypeName, sequence });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Lead Industry"
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
          <label className="block text-sm font-medium">Lead Type:</label>
          <Input
            type="text"
            value={leadTypeName}
            onChange={(e) => setLeadTypeName(e.target.value)}
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
      </div>
    </Modal>
  );
};

export default IndustryEditModal;
