// components/modals/ArchiveCustomerModal.tsx
"use client";
import React, { useState } from "react";
import ConfirmationModal from "../../components/modals/ConfirmationModal";

interface ArchiveCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ArchiveCustomerModal({
  isOpen,
  onClose,
}: ArchiveCustomerModalProps) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    // Perform archive API call...
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    onClose();
  };

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title="Do You Want To Archive Selected Customer ?"
      confirmText="Save"
      cancelText="Cancel"
      confirmVariant="primary"
      loading={loading}
    />
  );
}
