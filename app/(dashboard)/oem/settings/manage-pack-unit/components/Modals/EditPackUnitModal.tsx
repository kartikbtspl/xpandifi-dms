"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditPackUnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditPackUnitModal: React.FC<EditPackUnitModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [shortForm, setShortForm] = React.useState(row?.shortForm || "");
  const [longForm, setLongForm] = React.useState(row?.longForm || "");
  const [defaultValue, setDefaultValue] = React.useState(row?.defaultValue || "");

  React.useEffect(() => {
    if (row) {
      setShortForm(row.shortForm || "");
      setLongForm(row.longForm || "");
      setDefaultValue(row.defaultValue || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, shortForm, longForm, defaultValue });
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
            value={shortForm}
            label="Short Form "
            onChange={(e) => setShortForm(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Long Form"
            value={longForm}
            onChange={(e) => setLongForm(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Default Value"
            value={defaultValue}
            onChange={(e) => setDefaultValue(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditPackUnitModal;
