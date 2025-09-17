"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditStageModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditStageModal: React.FC<EditStageModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [stage, setStage] = React.useState(row?.stage || "");
  const [sequence, setSequence] = React.useState(row?.sequence || 0);
  const [percentage, setPercentage] = React.useState(row?.percentage || 0);

  React.useEffect(() => {
    if (row) {
      setStage(row.stage || "");
      setSequence(row.sequence || 0);
      setPercentage(row.percentage || 0);
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, stage, sequence, percentage });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Opportunity Stage"
      size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium">Stage:</label>
          <Input
            type="text"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
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

export default EditStageModal;
