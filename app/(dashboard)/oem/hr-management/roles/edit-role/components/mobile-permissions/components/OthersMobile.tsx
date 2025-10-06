"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const hrManagementReports = [
  "Travel",
  "Advance",
];

const othersReports = [
  "Add Farmer",
  "EOD_Special_Report",
];

const taskManagementReports = [
  "My Task",
];

const deliveryManagementReports = [
  "Manage Delivery",
];

const OthersMobile = () => {
  const [selectionMap, setSelectionMap] = useState({
    HR_Management: [] as string[],
    Others: [] as string[],
    Task_Management: [] as string[],
    Delivery_Management: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      HR_Management: [],
      Others: [],
      Task_Management: [],
      Delivery_Management: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="HR_Management"
        reports={hrManagementReports}
        selected={selectionMap.HR_Management}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, HR_Management: selected }))
        }
      />
      <Section
        title="Others"
        reports={othersReports}
        selected={selectionMap.Others}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, Others: selected }))
        }
      />
      <Section
        title="Task_Management"
        reports={taskManagementReports}
        selected={selectionMap.Task_Management}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, Task_Management: selected }))
        }
      />
      <Section
        title="Delivery_Management"
        reports={deliveryManagementReports}
        selected={selectionMap.Delivery_Management}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, Delivery_Management: selected }))
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

export default OthersMobile;
