"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface EditNewDeliveryPlanProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const EditNewDeliveryPlan: React.FC<EditNewDeliveryPlanProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {

  const [user, setUser] = React.useState(row?.user || "");
  const [deliveryPlanDate, setDeliveryPlanDate] = React.useState(row?.deliveryPlanDate || "");
  const [distributor, setDistributor] = React.useState(row?.distributor || "");
  const [route, setRoute] = React.useState(row?.route || "");
  const [customer, setCustomer] = React.useState(row?.customer || "");
  const [target, setTarget] = React.useState(row?.target || "");


  React.useEffect(() => {
      if (row) {
        setUser(row.user || "");
        setDeliveryPlanDate(row.deliveryPlanDate || "");
        setDistributor(row.distributor || "");
        setRoute(row.route || "");
        setCustomer(row.customer || "");
        setTarget(row.target || "");
      }
    }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({ ...row, user,  deliveryPlanDate, distributor, route, customer, target});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Brand Details"
      size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button
            onClick={onClose}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium">User:</label>
          <Input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Delivery Plan Date:</label>
          <Input
            type="date"
            value={deliveryPlanDate}
            onChange={(e) => setDeliveryPlanDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Distributor:</label>
          <Input
            type="text"
            value={distributor}
            onChange={(e) => setDistributor(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Route:</label>
          <Input
            type="text"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Customer:</label>
          <Input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Target:</label>
          <Input
            type="text"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditNewDeliveryPlan;
