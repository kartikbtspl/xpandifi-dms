"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface AddRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newRoute: any) => void;
  nextSrNo: string;
}

const AddRouteModal: React.FC<AddRouteModalProps> = ({
  isOpen,
  onClose,
  onSave,
  nextSrNo,
}) => {
  const [routeCode, setRouteCode] = React.useState("");
  const [routeName, setRouteName] = React.useState("");
  const [distributorName, setDistributorName] = React.useState("");

  const handleSave = () => {
    onSave({
      id: Date.now(), // or better: a UUID
      srNo: nextSrNo,
      routeCode,
      routeName,
      distributorName,
      action: "",
    });
    onClose();
    setRouteCode("");
    setRouteName("");
    setDistributorName("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add route"
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
        <div>
          <Input
            type="text"
            value={routeCode}
            label="Route Code "
            onChange={(e) => setRouteCode(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            value={routeName}
            label="Route Name "
            onChange={(e) => setRouteName(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            value={distributorName}
            label="Distributor Name "
            onChange={(e) => setDistributorName(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddRouteModal;
