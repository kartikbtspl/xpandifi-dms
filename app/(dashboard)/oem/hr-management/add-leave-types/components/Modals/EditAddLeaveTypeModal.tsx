"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";

interface EditAddLeaveTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditAddLeaveTypeModal: React.FC<EditAddLeaveTypeModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  const [leaveTypeName, setLeaveTypeName] = React.useState(row?.leaveTypeName || "");
  const [acronym, setAcronym] = React.useState(row?.acronym || "");
  const [isPaidLeave, setIsPaidLeave] = React.useState(row?.isPaidLeave || "");

  const leaveOptions = [
    { label: "Paid", value: "paid" },
    { label: "Unpaid", value: "unpaid" },
  ];

  React.useEffect(() => {
      if (row) {
        setLeaveTypeName(row.leaveTypeName || "");
        setAcronym(row.acronym || "");
        setIsPaidLeave(row.isPaidLeave || "");
      }
    }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, leaveTypeName, acronym, isPaidLeave });
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
          <label className="block text-sm font-medium">Leave name:</label>
          <Input
            type="text"
            value={leaveTypeName}
            onChange={(e) => setLeaveTypeName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Acronym:</label>
          <Input
            type="text"
            value={acronym}
            onChange={(e) => acronym(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Is Paid Leave:</label>
          <Dropdown
            options={leaveOptions}
            value={isPaidLeave}
            onChange={(val) => setIsPaidLeave(val)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditAddLeaveTypeModal;
