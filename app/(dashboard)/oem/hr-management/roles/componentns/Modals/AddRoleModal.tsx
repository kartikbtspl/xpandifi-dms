"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import { Textarea } from "@/components/common/ui/Textarea";

interface AddRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newRow: any) => void;
}

const AddRoleModal: React.FC<AddRoleModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [roleName, setRoleName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [profile, setProfile] = React.useState("");

  const roleOptions = [
    { label: "John Doe", value: "john" },
    { label: "Jane Smith", value: "jane" },
    { label: "Alice Johnson", value: "alice" },
  ];

  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Achive", value: "archive" },
  ];

  const profileOptions = [
    { label: "View", value: "view" },
    { label: "Edit", value: "edit" },
  ];

  const handleSave = () => {
    if (!roleName || !description || !status || !profile) {
      alert("Please fill all fields!");
      return;
    }

    const newRow = {
      id: Date.now(),
      roleName,
      description,
      status,
      profile
    };

    onSave(newRow);
    onClose();
    // Reset fields
    setRoleName("");
    setDescription("");
    setStatus("");
    setProfile("");
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
            Role Name:<span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="--Select Role--"
            options={roleOptions}
            value={roleName}
            onChange={(val) => setRoleName(val)}
          />
        </div>

        {/* Leave Type */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description<span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder=""
            // options={leaveTypeOptions}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* No Of Leaves */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Status<span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="--Select Status--"
            options={statusOptions}
            value={status}
            onChange={(val) => setStatus(val)}
          />
        </div>

        {/* Leave Balance */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Profile<span className="text-red-500">*</span>
          </label>
          <Dropdown
            placeholder="--Select Profile--"
            options={profileOptions}
            value={profile}
            onChange={(val) => setProfile(val)}
          />
        </div>    
      </div>
    </Modal>
  );
};

export default AddRoleModal;
