"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const hrReports = [
  "Leave Report",
  "Leave Configuration",
  "Leave Balance Report",
];

const customerReports = [
  "Check In Check Out",
];

const Others = () => {
  const [selectionMap, setSelectionMap] = useState({
    HR: [] as string[],
    Customer: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      HR: [],
      Customer: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="HR"
        reports={hrReports}
        selected={selectionMap.HR}
        setSelected={(selected) =>
          setSelectionMap(prev => ({ ...prev, HR: selected }))
        }
      />
      <Section
        title="Customer"
        reports={customerReports}
        selected={selectionMap.Customer}
        setSelected={(selected) =>
          setSelectionMap(prev => ({ ...prev, Customer: selected }))
        }
      />
      <div className="flex justify-center items-center gap-2 mt-4">
        <Button className="px-6 cursor-pointer" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outline" className="cursor-pointer" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Others;
