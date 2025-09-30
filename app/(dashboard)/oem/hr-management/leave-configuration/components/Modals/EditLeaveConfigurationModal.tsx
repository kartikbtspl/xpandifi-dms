"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";

interface EditLeaveConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditLeaveConfigurationModal: React.FC<EditLeaveConfigurationModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [role, setRole] = React.useState(row?.role || "");
  const [leaveType, setLeaveType] = React.useState(row?.leaveType || "");
  const [noOfLeaves, setNoOfLeaves] = React.useState(row?.noOfLeaves || "");

  const roleOptions = [
    { label: "Admin", value: "Admin" },
    { label: "Manager", value: "Manager" },
    { label: "Employee", value: "Employee" },
    { label: "Intern", value: "Intern" },
  ];

  const leaveTypeOptions = [
    { label: "Casual Leave", value: "casual" },
    { label: "Sick Leave", value: "sick" },
    { label: "Earned Leave", value: "earned" },
    { label: "Unpaid Leave", value: "unpaid" },
  ];

  React.useEffect(() => {
    if (row) {
      setRole(row.role || "");
      setLeaveType(row.leaveType || "");
      setNoOfLeaves(row.noOfLeaves || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, role, leaveType, noOfLeaves });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Leave Configuration"
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
        {/* Role Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Role:</label>
          <Dropdown
            options={roleOptions}
            value={role}
            onChange={(val) => setRole(val)}
            placeholder="--Select Role--"
          />
        </div>

        {/* Leave Type Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Leave Type:</label>
          <Dropdown
            options={leaveTypeOptions}
            value={leaveType}
            onChange={(val) => setLeaveType(val)}
            placeholder="--Select Leave Type--"
          />
        </div>

        {/* Total Leaves Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Total Leaves:</label>
          <Input
            type="number"
            value={noOfLeaves}
            onChange={(e) => setNoOfLeaves(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditLeaveConfigurationModal;
