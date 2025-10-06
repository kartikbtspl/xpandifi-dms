"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditJourneyTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditJourneyTypeModal: React.FC<EditJourneyTypeModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  const [expense, setExpense] = React.useState(row?.expense || "");
  const [journeyName, setJourneyName] = React.useState(row?.journeyName || "");
  const [callTargets, setCallTargets] = React.useState(row?.callTargets || "");


  React.useEffect(() => {
    if (row) {
      setExpense(row.expense || "");
      setJourneyName(row.journeyName || "");
      setCallTargets(row.callTargets || 0);
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, expense, journeyName, callTargets });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Journey Type"
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
          <Input
            type="text"
            label="Expense:"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Journey Name:"
            value={journeyName}
            onChange={(e) => setJourneyName(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="number"
            label="Call Targets:"
            value={callTargets}
            onChange={(e) => setCallTargets(e.target.value === "" ? "" : Number(e.target.value))}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditJourneyTypeModal;
