"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditShiftDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditShiftDetailsModal: React.FC<EditShiftDetailsModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [shiftName,setShiftName] = React.useState(row?.shiftName || "");
  const [startTime, setStartTime] = React.useState(row?.startTime || "");
  const [endTime, setEndTime] = React.useState(row?.endTime || "");

  React.useEffect(() => {
    if (row) {
      setShiftName(row.shiftName || "");
      setStartTime(row.startTime || "");
      setEndTime(row.endTime || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, shiftName, startTime, endTime });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Shift Details"
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
            value={shiftName}
            label="Shift Name "
            onChange={(e) => setShiftName(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="End Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditShiftDetailsModal;
