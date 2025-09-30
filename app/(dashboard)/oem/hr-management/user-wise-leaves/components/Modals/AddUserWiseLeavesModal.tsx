"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";

interface AddUserWiseRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newRow: any) => void;
}

const AddUserWieRoleModal: React.FC<AddUserWiseRoleModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [user, setUser] = React.useState("");
  const [leaveType, setLeaveType] = React.useState("");
  const [noOfLeaves, setNoOfLeaves] = React.useState("");
  const [leaveBalance, setLeaveBalance] = React.useState("");
  const [leaveConsumed, setLeaveConsumed] = React.useState("");

  const userOptions = [
    { label: "John Doe", value: "john" },
    { label: "Jane Smith", value: "jane" },
    { label: "Alice Johnson", value: "alice" },
  ];

  const leaveTypeOptions = [
    { label: "Casual", value: "casual" },
    { label: "Sick", value: "sick" },
    { label: "Earned", value: "earned" },
    { label: "Unpaid", value: "unpaid" },
  ];

  const handleSave = () => {
    if (!user || !leaveType || !noOfLeaves || !leaveBalance || !leaveConsumed) {
      alert("Please fill all fields!");
      return;
    }

    const newRow = {
      id: Date.now(),
      user,
      leaveType,
      noOfLeaves: Number(noOfLeaves),
      leaveBalance: Number(leaveBalance),
      leaveConsumed: Number(leaveConsumed),
    };

    onSave(newRow);
    onClose();
    // Reset fields
    setUser("");
    setLeaveType("");
    setNoOfLeaves("");
    setLeaveBalance("");
    setLeaveConsumed("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add User Role"
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
        {/* User */}
        <div>
          <label className="block text-sm font-medium mb-1">
            User<span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="--Select User--"
            options={userOptions}
            value={user}
            onChange={(val) => setUser(val)}
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

        {/* No Of Leaves */}
        <div>
          <label className="block text-sm font-medium mb-1">
            No Of Leaves<span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            placeholder="Enter number of leaves"
            value={noOfLeaves}
            onChange={(e) => setNoOfLeaves(e.target.value)}
          />
        </div>

        {/* Leave Balance */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Leave Balance<span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            placeholder="Enter leave balance"
            value={leaveBalance}
            onChange={(e) => setLeaveBalance(e.target.value)}
          />
        </div>

        {/* Leave Consumed */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Leave Consumed<span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            placeholder="Enter leave consumed"
            value={leaveConsumed}
            onChange={(e) => setLeaveConsumed(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddUserWieRoleModal;
