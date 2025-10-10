"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditModeOfTravelModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditModeOfTravelModal: React.FC<EditModeOfTravelModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [modeOfTravel,setModeOfTravel] = React.useState(row?.modeOfTravel || "");
  const [rate, setRate] = React.useState(row?.rate || "");

  React.useEffect(() => {
    if (row) {
      setModeOfTravel(row.modeOfTravel || "");
      setRate(row.rate || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, modeOfTravel, rate });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Mode of Travel"
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
            value={modeOfTravel}
            label="Mode Of Travel"
            onChange={(e) => setModeOfTravel(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Rate(Rs)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditModeOfTravelModal;
