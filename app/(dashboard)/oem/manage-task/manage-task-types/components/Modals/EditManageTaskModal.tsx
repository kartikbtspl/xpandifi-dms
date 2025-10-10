"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditManageTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditManageTaskModal: React.FC<EditManageTaskModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [taskTypeName, setTaskTypeName] = React.useState(row?.taskTypeName || "");

  React.useEffect(() => {
    if (row) {
      setTaskTypeName(row.taskTypeName || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, taskTypeName });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Task Type Details"
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
          <label className="block text-sm font-medium">Task Type Name:</label>
          <Input
            type="text"
            value={taskTypeName}
            onChange={(e) => setTaskTypeName(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditManageTaskModal;
