"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import { FiUpload } from "react-icons/fi";

interface AddDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newDoc: any) => void;
  nextSrNo: string;
}

const AddDocumentModal: React.FC<AddDocumentModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [documentName, setDocumentName] = React.useState("");
  const [documentNumber, setDocumentNumber] = React.useState("");
  const [documentDate, setDocumentDate] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [documentFile, setDocumentFile] = React.useState<File | null>(null);

  const handleSave = () => {
    onSave({ documentName, documentNumber, documentDate, version, documentFile });
    onClose();
    setDocumentName("");
    setDocumentNumber("");
    setDocumentDate("");
    setVersion("");
    setDocumentFile(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Documents"
      size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          value={documentName}
          label="Document Name:"
          placeholder="-"
          onChange={e => setDocumentName(e.target.value)}
        />
        <Input
          type="text"
          value={documentNumber}
          label="Document Number:"
          placeholder="-"
          onChange={e => setDocumentNumber(e.target.value)}
        />
        <Input
          type="date"
          value={documentDate}
          label="Document Date:"
          placeholder="-"
          onChange={e => setDocumentDate(e.target.value)}
        />
        <Input
          type="text"
          value={version}
          label="Version:"
          placeholder="-"
          onChange={e => setVersion(e.target.value)}
        />
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Document:</label>
          <label className="flex items-center gap-2 bg-white border border-gray-300 rounded-full h-12 cursor-pointer px-4 py-2 hover:bg-gray-50 transition w-full">
            <FiUpload size={20} className="text-gray-400" />
            <span className="text-gray-500 flex-1 truncate">
              {documentFile ? documentFile.name : "Choose File"}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={e => setDocumentFile(e.target.files ? e.target.files[0] : null)}
            />
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default AddDocumentModal;
