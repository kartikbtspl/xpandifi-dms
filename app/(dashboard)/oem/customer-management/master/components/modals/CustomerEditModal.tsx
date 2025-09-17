"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

interface CustomerEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any; // row from table
  onSave: (updatedRow: any) => void;
}


const CustomerEditModal: React.FC<CustomerEditModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [customerName, setCustomerName] = React.useState("");
  const [customerCode, setCustomerCode] = React.useState("");
  const [customerType, setCustomerType] = React.useState("");
  const [cityType, setCityType] = React.useState("");
  const [zone, setZone] = React.useState("");
  const [distributorName, setDistributorName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [createdDate, setCreatedDate] = React.useState("");

  // 🔹 Sync form state when row changes
  React.useEffect(() => {
    if (row) {
      setCustomerName(row.customerName || "");
      setCustomerCode(row.customerCode || "");
      setCustomerType(row.customerType || "");
      setCityType(row.cityType || "");
      setZone(row.zone || "");
      setDistributorName(row.distributorName || "");
      setEmail(row.email || "");
      setMobile(row.mobile || "");
      setCreatedDate(row.createdDate || "");
    }
  }, [row]);

  const handleSave = () => {
    onSave({
      ...row,
      customerName,
      customerCode,
      customerType,
      cityType,
      zone,
      distributorName,
      email,
      mobile,
      createdDate,
    });
    onClose();
  };

  if (!row) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Customer"
      size="lg"
      footer={
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline">Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Customer Name" value={customerName} onChange={setCustomerName} />
        <InputField label="Customer Code" value={customerCode} onChange={setCustomerCode} />
        <InputField label="Customer Type" value={customerType} onChange={setCustomerType} />
        <InputField label="City Type" value={cityType} onChange={setCityType} />
        <InputField label="Zone" value={zone} onChange={setZone} />
        <InputField label="Distributor Name" value={distributorName} onChange={setDistributorName} />
        <InputField label="Email" value={email} onChange={setEmail} />
        <InputField label="Mobile" value={mobile} onChange={setMobile} />
        <InputField label="Created Date" value={createdDate} onChange={setCreatedDate} />
      </div>
    </Modal>
  );
};

// Helper component for input fields
const InputField = ({ label, value, onChange }: any) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export default CustomerEditModal;
