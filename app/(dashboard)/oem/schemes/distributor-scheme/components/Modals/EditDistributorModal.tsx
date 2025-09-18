"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditDistributorModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditDistributorModal: React.FC<EditDistributorModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  const [schemeName, setSchemeName] = React.useState(row?.schemeName || "");
  const [startDate, setStartDate] = React.useState(row?.startDate || "");
  const [endDate, setEndDate] = React.useState(row?.endDate || "");

  React.useEffect(() => {
      if (row) {
        setSchemeName(row.schemeName || "");
        setStartDate(row.startDate || "");
        setEndDate(row.endDate || "");
      }
    }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, schemeName,  startDate, endDate});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Brand Details"
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
          <label className="block text-sm font-medium">Scheme Name:</label>
          <Input
            type="text"
            value={schemeName}
            onChange={(e) => setSchemeName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Start Date:</label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">End Date:</label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditDistributorModal;
