"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";

interface DeleteLeaveConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  role?: string; // optional, to show which record is being deleted
  leaveType?: string; // optional
}

const DeleteLeaveConfigurationModal: React.FC<DeleteLeaveConfigurationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  role,
  leaveType,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Leave Configuration"
      size="sm"
      footer={
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={onConfirm}>
            Delete
          </Button>
        </div>
      }
    >
      <div className="flex items-start gap-3 text-gray-700">
        <span className="text-yellow-500 text-2xl">⚠️</span>
        <div>
          <p className="font-semibold mb-1">
            Are you sure you want to delete this leave configuration?
          </p>
          {role && leaveType && (
            <p className="text-sm text-gray-500">
              Role: <strong>{role}</strong> | Leave Type: <strong>{leaveType}</strong>
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DeleteLeaveConfigurationModal;
