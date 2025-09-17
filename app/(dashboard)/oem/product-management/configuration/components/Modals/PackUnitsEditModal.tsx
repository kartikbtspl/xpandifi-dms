"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface PackUnitsEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any; // row from table
  onSave: (updatedRow: any) => void;
}

const PackUnitsEditModal: React.FC<PackUnitsEditModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  // 🔹 Create local state for editing
  const [shortForm, setShortForm] = React.useState(row?.shortForm || "");
  const [longForm, setLongForm] = React.useState(row?.longForm || "");
  const [defaultValue, setDefaultValue] = React.useState(row?.default || 1);

  React.useEffect(() => {
    if (row) {
      setShortForm(row.shortForm || "");
      setLongForm(row.longForm || "");
      setDefaultValue(row.defaultValue || 1);
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({
      ...row,
      shortForm,
      longForm,
      default: Number(defaultValue), // ensure number
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Pack Unit"
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
          <label className="block text-sm font-medium">Short Form:</label>
          <Input
            type="text"
            value={shortForm}
            onChange={(e) => setShortForm(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Long Form:</label>
          <Input
            type="text"
            value={longForm}
            onChange={(e) => setLongForm(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Default:</label>
          <Input
            type="number"
            value={defaultValue}
            onChange={(e) => setDefaultValue(Number(e.target.value))}
          />
        </div>
      </div>
    </Modal>
  );
};

export default PackUnitsEditModal;
