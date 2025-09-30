"use client";
import React, { useState } from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface UploadLeavesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (file: File | null) => void;
}

const UploadLeavesModal: React.FC<UploadLeavesModalProps> = ({
  isOpen,
  onClose,
  onImport,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleImport = () => {
    onImport(selectedFile);
    onClose();
    setSelectedFile(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Import User Wise Leaves"
      size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleImport} disabled={!selectedFile}>
            Import
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Excel File:
          </label>
          <Input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UploadLeavesModal;
