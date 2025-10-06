"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const targetManagementReports = [
  "Daily Status Report",
  "Target Report",
];

const customerReports = [
  "Manage Store Type",
  "Manage Class Type",
  "Manage Beat Plan",
  "Manage Beat Reason",
  "Manage Farmer",
  "Customer Approval Report",
  "Auto Beat Plan",
  "Manage Frequency",
];

const systemReports = [
  "User Notification",
];

const notificationReports = [
  "Attendance mail",
  "Customer Notification",
];

const salesReports = [
  "Order Approval",
  "NSR Master",
  "Freight Master",
  "Material Stock Report",
  "Pricing Issue Report",
];

const othersReports = [
  "Service SMS",
  "End Of The Day Spcl. Report",
  "Vehicle Master",
];

const deliveryReports = [
  "Under Load Report",
  "Club Sales Order",
];

const AddOn = () => {
  const [selectionMap, setSelectionMap] = useState({
    TargetManagement: [] as string[],
    Customer: [] as string[],
    System: [] as string[],
    Notification: [] as string[],
    Sales: [] as string[],
    Others: [] as string[],
    Delivery: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      TargetManagement: [],
      Customer: [],
      System: [],
      Notification: [],
      Sales: [],
      Others: [],
      Delivery: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="Target Management"
        reports={targetManagementReports}
        selected={selectionMap.TargetManagement}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, TargetManagement: selected }))
        }
      />
      <Section
        title="Customer"
        reports={customerReports}
        selected={selectionMap.Customer}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Customer: selected }))
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
      <Section
        title="Notification"
        reports={notificationReports}
        selected={selectionMap.Notification}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Notification: selected }))
        }
      />
      <Section
        title="Sales"
        reports={salesReports}
        selected={selectionMap.Sales}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Sales: selected }))
        }
      />
      <Section
        title="Others"
        reports={othersReports}
        selected={selectionMap.Others}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Others: selected }))
        }
      />
      <Section
        title="Delivery"
        reports={deliveryReports}
        selected={selectionMap.Delivery}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Delivery: selected }))
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

export default AddOn;
