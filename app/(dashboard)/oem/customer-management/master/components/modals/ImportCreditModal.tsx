"use client";
import React, { useState } from "react";
import Modal from "@/components/common/ui/Modal"
import Button from "@/components/common/ui/Button";
import { Upload } from "lucide-react";

interface ImportCreditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (file: File | null) => void;
}

const ImportCreditModal: React.FC<ImportCreditModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const footer = (
    <div className="flex justify-center gap-4">
      <Button
        variant="outline"
        onClick={onClose}
        className="px-8 rounded-full"
      >
        Cancel
      </Button>
      <Button
        variant="primary"
        onClick={() => onConfirm(file)}
        className="px-8 rounded-full"
        disabled={!file}
      >
        Add
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Import Credit Limit & Duration Details"
      size="lg"
      footer={footer}
      centered
    >
      {/* Upload Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Excel file<span className="text-red-500">*</span>
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-16 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            <Upload className="w-6 h-6 text-gray-500 mb-1" />
            <span className="text-sm text-gray-500">
              {file ? file.name : "Upload File"}
            </span>
            <input
              id="file-upload"
              type="file"
              accept=".xls,.xlsx"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-sm text-gray-600 space-y-2">
        <p>
          <span className="font-semibold">Template:</span> Use Only Standard
          Template For Import. You Can Download It From{" "}
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Here
          </a>.
        </p>
        <p>
          <span className="font-semibold">Mandatory Fields:</span> Customer Code,
          Credit Limit, Credit Duration
        </p>
        <p>
          <span className="font-semibold">Non Mandatory Fields:</span> Customer
          Name
        </p>
      </div>
    </Modal>
  );
};

export default ImportCreditModal;
