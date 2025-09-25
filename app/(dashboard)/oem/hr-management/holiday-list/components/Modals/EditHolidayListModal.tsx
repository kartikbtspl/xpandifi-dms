"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";

interface EditHolidayListModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditHolidayListModal: React.FC<EditHolidayListModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [formData, setFormData] = React.useState<any>({
    holidayName: "",
    holidayDateTime: "",
    holidayStatus: "",
    country: "",
    state: "",
  });

  React.useEffect(() => {
    if (row) {
      setFormData({
        holidayName: row.holidayName || "",
        holidayDateTime: row.holidayDateTime || "",
        holidayStatus: row.holidayStatus || "",
        country: row.country || "",
        state: row.state || "",
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
      title="Edit Holiday"
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
        {/* Holiday Name */}
        <div>
          <label className="block text-sm font-medium">Holiday Name:</label>
          <Input
            type="text"
            value={formData.holidayName}
            onChange={(e) => handleChange("holidayName", e.target.value)}
          />
        </div>

        {/* Holiday Date */}
        <div>
          <label className="block text-sm font-medium">Holiday Date:</label>
          <Input
            type="date"
            value={formData.holidayDateTime}
            onChange={(e) => handleChange("holidayDateTime", e.target.value)}
          />
        </div>

        {/* Holiday Status */}
        <div>
          <label className="block text-sm font-medium">Holiday Status:</label>
          <Dropdown
            value={formData.holidayStatus}
            options={[
              { value: "Active", label: "Active" },
              { value: "Archive", label: "Archive" },
            ]}
            onChange={(val) => handleChange("holidayStatus", val)}
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium">Country:</label>
          <Dropdown
            value={formData.country}
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            onChange={(val) => handleChange("country", val)}
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium">State:</label>
          <Dropdown
            value={formData.state}
            options={[
              { value: "Maharashtra", label: "Maharashtra" },
              { value: "Karnataka", label: "Karnataka" },
              { value: "Delhi", label: "Delhi" },
            ]}
            onChange={(val) => handleChange("state", val)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditHolidayListModal;
