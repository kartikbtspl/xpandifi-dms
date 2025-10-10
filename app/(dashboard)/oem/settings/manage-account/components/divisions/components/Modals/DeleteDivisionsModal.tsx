"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";

interface DeleteDivisionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteDivisionsModal: React.FC<DeleteDivisionsModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Division list"
      size="sm"
      footer={
        <div className="flex justify-end gap-2">
          <Button
            onClick={onClose}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            
          >
            Delete
          </Button>
        </div>
      }
    >
      <div className="flex items-center gap-2 text-gray-700">
        <span className="text-yellow-500 font-bold text-xl">⚠️</span>
        <p className="font-semibold">
          Do You Really Want To Delete This Division?
        </p>
      </div>
    </Modal>
  );
};

export default DeleteDivisionsModal;
