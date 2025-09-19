"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditAutoBeatModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditAutoBeatModal: React.FC<EditAutoBeatModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [formData, setFormData] = React.useState<any>({});

  React.useEffect(() => {
    if (row) {
      setFormData({ ...row });
    }
  }, [row]);

  if (!row) return null;

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Auto Beat"
      size="lg"
      footer={
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-4">
        {/* User */}
        <div>
          <label className="block text-sm font-medium">User:</label>
          <Input
            type="text"
            value={formData.user || ""}
            onChange={(e) => handleChange("user", e.target.value)}
          />
        </div>

        {/* Beat Plan Date */}
        <div>
          <label className="block text-sm font-medium">Beat Plan Date:</label>
          <Input
            type="date"
            value={formData.beatPlanDate || ""}
            onChange={(e) => handleChange("beatPlanDate", e.target.value)}
          />
        </div>

        {/* Distributor */}
        <div>
          <label className="block text-sm font-medium">Distributor:</label>
          <Input
            type="text"
            value={formData.distributor || ""}
            onChange={(e) => handleChange("distributor", e.target.value)}
          />
        </div>

        {/* Route */}
        <div>
          <label className="block text-sm font-medium">Route:</label>
          <Input
            type="text"
            value={formData.route || ""}
            onChange={(e) => handleChange("route", e.target.value)}
          />
        </div>

        {/* Customer */}
        <div>
          <label className="block text-sm font-medium">Customer:</label>
          <Input
            type="text"
            value={formData.customer || ""}
            onChange={(e) => handleChange("customer", e.target.value)}
          />
        </div>

        {/* Sales Target Type */}
        <div>
          <label className="block text-sm font-medium">Sales Target Type:</label>
          <Input
            type="text"
            value={formData.salesTargetType || ""}
            onChange={(e) => handleChange("salesTargetType", e.target.value)}
          />
        </div>

        {/* Sales Target */}
        <div>
          <label className="block text-sm font-medium">Sales Target:</label>
          <Input
            type="number"
            value={formData.salesTarget || ""}
            onChange={(e) => handleChange("salesTarget", Number(e.target.value))}
          />
        </div>

        {/* Unit / Currency */}
        <div>
          <label className="block text-sm font-medium">Unit / Currency:</label>
          <Input
            type="text"
            value={formData.unit || ""}
            onChange={(e) => handleChange("unit", e.target.value)}
          />
        </div>

        {/* Collection Target */}
        <div>
          <label className="block text-sm font-medium">Collection Target:</label>
          <Input
            type="number"
            value={formData.collectionTarget || ""}
            onChange={(e) =>
              handleChange("collectionTarget", Number(e.target.value))
            }
          />
        </div>

        {/* Sequence */}
        <div>
          <label className="block text-sm font-medium">Sequence:</label>
          <Input
            type="number"
            value={formData.sequence || 0}
            onChange={(e) => handleChange("sequence", Number(e.target.value))}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditAutoBeatModal;
