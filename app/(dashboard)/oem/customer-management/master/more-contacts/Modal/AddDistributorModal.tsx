"use client";
import { useState } from "react";
import Modal from "@/components/common/ui/Modal";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

interface AddDistributorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { distributorName: string; distributorCode: string }) => void;
}

export default function AddDistributorModal({
  isOpen,
  onClose,
  onSave,
}: AddDistributorModalProps) {
  const [distributorName, setDistributorName] = useState("");
  const [distributorCode, setDistributorCode] = useState("");

  const handleSubmit = () => {
    if (!distributorName || !distributorCode) return;
    onSave({ distributorName, distributorCode });
    setDistributorName("");
    setDistributorCode("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Distributor"
      size="md"
      footer={
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </div>
      }
    >
      <div className="space-y-4">
        <Input
          label="Distributor Name"
          placeholder="Distributor Name"
          required
          value={distributorName}
          onChange={(e) => setDistributorName(e.target.value)}
        />
        <Input
          label="Distributor Code"
          placeholder="Distributor Code"
          required
          value={distributorCode}
          onChange={(e) => setDistributorCode(e.target.value)}
        />
      </div>
    </Modal>
  );
}
