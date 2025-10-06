"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const customerReports = [
  "Customer Master",
  "Planned Visit Report",
  "Beat Plan Report",
  "Manage Complaint Type",
  "Visit Deviation Report",
  "Visit Report",
  "Beat Report List",
  "Customer Configuration",
];

const locationReports = [
  "Tracking Report(map)",
  "User Last Location Report",
  "Tracking Report(list)",
  "Team Last Location Report",
  "Slot Wise Location Report",
];

const hrReports = [
  "Users",
  "Roles",
  "Add Leave Type",
  "Leave Balance Report",
  "User Activity Log",
  "Company Location",
  "Attendance Report",
  "Monthly Attendance",
  "Holiday List",
  "User Wise Leaves",
  "Leave Approval Report",
  "Attendance Summary",
];

const systemReports = [
  "Distributor",
  "Route",
  "Renewal Request",
  "Manage Acount",
  "Email Setup",
  "WorkFlow Configuration",
  "Profiles",
];

const StartUp = () => {
  // State scoped per section key to track selected reports independently
  const [selectionMap, setSelectionMap] = useState({
    Customer: [] as string[],
    Location: [] as string[],
    HR: [] as string[],
    System: [] as string[],
  });

  const handleSave = () => {
    // Combine all selected reports across sections
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved selections:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    // On cancel we can clear selections or reset to previous committed state if maintained
    setSelectionMap({
      Customer: [],
      Location: [],
      HR: [],
      System: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="Customer"
        reports={customerReports}
        selected={selectionMap.Customer}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Customer: selected }))
        }
      />
      <Section
        title="Location"
        reports={locationReports}
        selected={selectionMap.Location}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Location: selected }))
        }
      />
      <Section
        title="HR"
        reports={hrReports}
        selected={selectionMap.HR}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, HR: selected }))
        }
      />
      <Section
        title="System"
        reports={systemReports}
        selected={selectionMap.System}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, System: selected }))
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

export default StartUp;
