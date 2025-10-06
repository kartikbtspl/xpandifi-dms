"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const hrManagementReports = [
  "Attendance",
  "Leave",
  "Leave Report",
  "AttendanceSelfie",
];

const customerManagementReports = [
  "Show Beat Plan",
  "Customer Profile",
  "Lat-Long Updation",
  "Visit",
];

const systemAdministrationReports = [
  "Manager",
];

const StartUpMobile = () => {
  const [selectionMap, setSelectionMap] = useState({
    HR_Management: [] as string[],
    Customer_Management: [] as string[],
    System_Administration: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      HR_Management: [],
      Customer_Management: [],
      System_Administration: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="HR_Management"
        reports={hrManagementReports}
        selected={selectionMap.HR_Management}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, HR_Management: selected }))
        }
      />
      <Section
        title="Customer_Management"
        reports={customerManagementReports}
        selected={selectionMap.Customer_Management}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Customer_Management: selected }))
        }
      />
      <Section
        title="System_Administration"
        reports={systemAdministrationReports}
        selected={selectionMap.System_Administration}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, System_Administration: selected }))
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

export default StartUpMobile;
