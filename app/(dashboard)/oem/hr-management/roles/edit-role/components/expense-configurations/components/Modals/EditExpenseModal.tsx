"use client";
import React from "react";
import Modal from "@/components/common/ui/Modal";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";

interface EditExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  row: any;
  onSave: (updatedRow: any) => void;
}

const yesNoOptions = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const cityTypeOptions = [
  { label: "--City Type--", value: "" },
  { label: "Metro", value: "Metro" },
  { label: "Urban", value: "Urban" },
  { label: "Rural", value: "Rural" },
];

const modeOfTravelOptions = [
  { label: "--Select Mode Of Travel--", value: "" },
  { label: "Air", value: "Air" },
  { label: "Rail", value: "Rail" },
  { label: "Road", value: "Road" },
  { label: "Sea", value: "Sea" },
];

const EditExpenseModal: React.FC<EditExpenseModalProps> = ({
  isOpen,
  onClose,
  row,
  onSave,
}) => {
  const [expenseCode, setExpenseCode] = React.useState(row?.expenseCode || "");
  const [expenseType, setExpenseType] = React.useState(row?.expenseType || "");
  const [cityType, setCityType] = React.useState(row?.cityType || "");
  const [expenseName, setExpenseName] = React.useState(row?.expenseName || "");
  const [maxAllowedAmount, setMaxAllowedAmount] = React.useState(row?.maxAllowedAmount || "");
  const [isDefault, setIsDefault] = React.useState(row?.isDefault || "");
  const [isFixed, setIsFixed] = React.useState(row?.isFixed || "No");
  const [isDistance, setIsDistance] = React.useState(row?.isDistance || "No");
  const [modeOfTravel, setModeOfTravel] = React.useState(row?.modeOfTravel || "");

  React.useEffect(() => {
    if (row) {
      setExpenseCode(row.expenseCode || "");
      setExpenseType(row.expenseType || "");
      setCityType(row.cityType || "");
      setExpenseName(row.expenseName || "");
      setMaxAllowedAmount(row.maxAllowedAmount || "");
      setIsDefault(row.isDefault || "");
      setIsFixed(row.isFixed || "No");
      setIsDistance(row.isDistance || "No");
      setModeOfTravel(row.modeOfTravel || "");
    }
  }, [row]);

  if (!row) return null;

  const handleSave = () => {
    onSave({
      ...row,
      expenseCode,
      expenseType,
      cityType,
      expenseName,
      maxAllowedAmount,
      isDefault,
      isFixed,
      isDistance,
      modeOfTravel,
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Expense Configuration"
      size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          label="Expense Code:"
          value={expenseCode}
          onChange={(e) => setExpenseCode(e.target.value)}
        />
        <Input
          type="text"
          label="Expense Type:"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
        />
        <Dropdown
          label="City Type:"
          options={cityTypeOptions}
          value={cityType}
          onChange={setCityType}
        />
        <Input
          type="text"
          label="Expense Name:"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <Input
          type="text"
          label="Max Allowed Amount:"
          value={maxAllowedAmount}
          onChange={(e) => setMaxAllowedAmount(e.target.value)}
        />
        <Input
          type="text"
          label="Is Default:"
          value={isDefault}
          onChange={(e) => setIsDefault(e.target.value)}
        />
        <Dropdown
          label="Is Fixed:"
          options={yesNoOptions}
          value={isFixed}
          onChange={setIsFixed}
        />
        <Dropdown
          label="Is Distance:"
          options={yesNoOptions}
          value={isDistance}
          onChange={setIsDistance}
        />
        <Dropdown
          label="Mode Of Travel:"
          options={modeOfTravelOptions}
          value={modeOfTravel}
          onChange={setModeOfTravel}
        />
      </div>
    </Modal>
  );
};

export default EditExpenseModal;
