"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditZonesModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditZonesModal: React.FC<EditZonesModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [zoneName, setZoneName] = React.useState(row?.zoneName || "");
  const [zoneCode, setZoneCode] = React.useState(row?.zoneCode || "");

  React.useEffect(() => {
    if (row) {
      setZoneName(row.zoneName || "");
      setZoneCode(row.zoneCode || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, zoneName, zoneCode });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Zones List"
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
            value={zoneName}
            label="Zone Name "
            onChange={(e) => setZoneName(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Zone Code"
            value={zoneCode}
            onChange={(e) => setZoneCode(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditZonesModal;
