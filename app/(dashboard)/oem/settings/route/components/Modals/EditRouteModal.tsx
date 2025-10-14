"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditRouteModal: React.FC<EditRouteModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [routeCode, SetRouteCode] = React.useState(row?.routeCode || "");
  const [routeName, setRouteName] = React.useState(row?.routeName || "");
  const [distributorName, setDistributorName] = React.useState(row?.distributorName || "");

  React.useEffect(() => {
    if (row) {
      SetRouteCode(row.routeCode || "");
      setRouteName(row.routeName || "");
      setDistributorName(row.distributorName || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, routeCode,  routeName, distributorName});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit route"
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
            onChange={(e) => SetRouteCode(e.target.value)}
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

export default EditRouteModal;
