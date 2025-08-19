// components/ui/ConfirmationModal.tsx
"use client";
import React from "react";
import Modal from "../../../../../components/common/ui/Modal";
import Button from "../../../../../components/common/ui/Button";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "primary" | "destructive";
  loading?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirmation",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "primary",
  loading = false,
}) => {
  const footer = (
    <div className="flex justify-end gap-3">
      <Button
        variant="ghost"
        onClick={onClose}
        disabled={loading}
        className="px-6"
      >
        {cancelText}
      </Button>
      <Button
        variant={confirmVariant}
        onClick={onConfirm}
        loading={loading}
        className="px-6"
      >
        {confirmText}
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      footer={footer}
      closeOnOverlayClick={!loading}
      closeOnEscape={!loading}
    >
      <div className="text-gray-700 text-center py-4">
        {message}
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
