"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const expenseManagementReports = [
  "Daily Expense",
];

const hrManagementReports = [
  "GeoTagging",
];

const AddOnMobile = () => {
  const [selectionMap, setSelectionMap] = useState({
    Expense_Management: [] as string[],
    HR_Management: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      Expense_Management: [],
      HR_Management: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="Expense_Management"
        reports={expenseManagementReports}
        selected={selectionMap.Expense_Management}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, Expense_Management: selected }))
        }
      />
      <Section
        title="HR_Management"
        reports={hrManagementReports}
        selected={selectionMap.HR_Management}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, HR_Management: selected }))
        }
      />
      <div className="flex justify-center items-center gap-2 mt-4">
        <Button className="px-6 cursor-pointer" onClick={handleSave}>
          Save
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddOnMobile;
