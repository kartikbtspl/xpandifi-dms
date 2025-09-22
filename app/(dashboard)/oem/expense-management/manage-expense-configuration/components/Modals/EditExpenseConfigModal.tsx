"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";

interface EditExpenseConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditExpenseConfigModal: React.FC<EditExpenseConfigModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [formData, setFormData] = React.useState<any>({
    expenseType: "",
    expenseMode: "",
    role: "",
    maxAmount: "",
    to: "",
    actualAmount: "",
    approvedAmount: "",
    isDefault: "",
    isDistance: "",
  });

  React.useEffect(() => {
    if (row) {
      setFormData({
        expenseType: row.expenseType || "",
        expenseMode: row.expenseMode || "",
        role: row.role || "",
        maxAmount: row.maxAmount || "",
        to: row.to || "",
        actualAmount: row.actualAmount || "",
        approvedAmount: row.approvedAmount || "",
        isDefault: row.isDefault || "",
        isDistance: row.isDistance || "",
      });
    }
  }, [row]);

  if (!row) return null;

  const handleChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave({ ...row, ...formData });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Expense Config"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Expense Type */}
        <div>
          <label className="block text-sm font-medium">Expense Type:</label>
          <Input
            type="text"
            value={formData.expenseType}
            onChange={(e) => handleChange("expenseType", e.target.value)}
          />
        </div>

        {/* Expense Mode */}
        <div>
          <label className="block text-sm font-medium">Expense Mode:</label>
          <Input
            type="text"
            value={formData.expenseMode}
            onChange={(e) => handleChange("expenseMode", e.target.value)}
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium">Role:</label>
          <Input
            type="text"
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
          />
        </div>

        {/* Max Allowed Amount */}
        <div>
          <label className="block text-sm font-medium">Max Allowed Amount:</label>
          <Input
            type="number"
            value={formData.maxAmount}
            onChange={(e) => handleChange("maxAmount", e.target.value)}
          />
        </div>

        {/* To */}
        <div>
          <label className="block text-sm font-medium">To:</label>
          <Input
            type="text"
            value={formData.to}
            onChange={(e) => handleChange("to", e.target.value)}
          />
        </div>

        {/* Actual Amount */}
        <div>
          <label className="block text-sm font-medium">Actual Amount:</label>
          <Input
            type="number"
            value={formData.actualAmount}
            onChange={(e) => handleChange("actualAmount", e.target.value)}
          />
        </div>

        {/* Approved Amount */}
        <div>
          <label className="block text-sm font-medium">Approved Amount:</label>
          <Input
            type="number"
            value={formData.approvedAmount}
            onChange={(e) => handleChange("approvedAmount", e.target.value)}
          />
        </div>

        {/* Is Default */}
        <div>
          <label className="block text-sm font-medium">Is Default:</label>
          <Dropdown
            value={formData.isDefault}
            options={[
              { value: "", label: "--Select--" },
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            onChange={(val) => handleChange("isDefault", val)}
          />
        </div>

        {/* Is Distance */}
        <div>
          <label className="block text-sm font-medium">Is Distance:</label>
          <Dropdown
            value={formData.isDistance}
            options={[
              { value: "", label: "--Select--" },
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            onChange={(val) => handleChange("isDistance", val)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditExpenseConfigModal;
