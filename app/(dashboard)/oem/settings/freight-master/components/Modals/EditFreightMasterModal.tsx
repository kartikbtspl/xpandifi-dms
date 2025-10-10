"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditFreightMasterModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditFreightMasterModal: React.FC<EditFreightMasterModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [country, setCountry] = React.useState(row?.country || "");
  const [state, setState] = React.useState(row?.state || "");
  const [city, setCity] = React.useState(row?.city || "");
  const [rateMeasure, setRateMeasure] = React.useState(row?.rateMeasure || "");

  React.useEffect(() => {
    if (row) {
      setCountry(row.country || "");
      setState(row.state || "");
      setCity(row.city || "");
      setRateMeasure(row.city || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, country, state, city, rateMeasure });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Freight Master List"
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
            value={country}
            label="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Rate/Measure"
            value={rateMeasure}
            onChange={(e) => setRateMeasure(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditFreightMasterModal;
