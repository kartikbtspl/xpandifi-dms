"use client";
import React, { useState } from "react";
import ConfirmationModal from "../../components/modals/ConfirmationModal";

interface ArchiveCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;   // ✅ accept from parent
}

export default function ArchiveCustomerModal({
  isOpen,
  onClose,
  onConfirm,
}: ArchiveCustomerModalProps) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    // Simulate archive API call
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);

    onConfirm();   // ✅ tell parent "archive confirmed"
    onClose();     // ✅ close modal
  };

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}   // ✅ our handler wraps parent callback
      title="Do You Want To Archive Selected Customer ?"
      confirmText="Save"
      cancelText="Cancel"
      confirmVariant="primary"
      loading={loading}
    />
  );
}
