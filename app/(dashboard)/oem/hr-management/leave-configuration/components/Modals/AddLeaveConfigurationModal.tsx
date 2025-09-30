"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";

interface AddLeaveConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newRow: any) => void;
}

const AddLeaveConfigurationModal: React.FC<AddLeaveConfigurationModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [role, setRole] = React.useState("");
  const [leaveType, setLeaveType] = React.useState("");
  const [totalLeaves, setTotalLeaves] = React.useState("");

  const roleOptions = [
    { label: "Admin", value: "Admin" },
    { label: "Manager", value: "Manager" },
    { label: "Employee", value: "Employee" },
    { label: "Intern", value: "Intern" },
  ];

  const leaveTypeOptions = [
    { label: "Casual", value: "casual" },
    { label: "Sick", value: "sick" },
    { label: "Earned", value: "earned" },
    { label: "Unpaid", value: "unpaid" },
  ];

  const handleSave = () => {
    if (!role || !leaveType || !totalLeaves) return alert("Please fill all fields!");

    const newRow = {
      id: Date.now(),
      srNo: "0" + Math.floor(Math.random() * 100),
      role,
      leaveType,
      noOfLeaves: Number(totalLeaves),
    };

    onAdd(newRow);
    onClose();
    // reset fields
    setRole("");
    setLeaveType("");
    setTotalLeaves("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Role Wise Leave Configuration"
      size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        {/* Role */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Role<span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="--Select Role--"
            options={roleOptions}
            value={role}
            onChange={(val) => setRole(val)}
          />
        </div>

        {/* Leave Type */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Leave Type<span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="--Select Leave Type--"
            options={leaveTypeOptions}
            value={leaveType}
            onChange={(val) => setLeaveType(val)}
          />
        </div>

        {/* Total Leaves */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Total Leaves<span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            placeholder="Total Leaves"
            value={totalLeaves}
            onChange={(e) => setTotalLeaves(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddLeaveConfigurationModal;
