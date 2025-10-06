"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const expenseReports = [
  "Expense Report",
  "Travel Request Report",
  "Advance Report",
  "Manage Expense Config",
  "Monthly Expense Report",
  "Multilevel Expense Approval",
  "My Expense Report List",
];

const analyticsReports = [
  "Route Report",
  "Distributor Report",
  "Sales Person Report",
  "Route Report",
  "MIS Dashboard",
  "Adoption Dashboard",
];

const promotionsReports = [
  "Category Scheme",
  "Customer Scheme",
  "Distributor Scheme",
  "Product Scheme",
  "Combo Scheme",
];

const crmReports = [
  "Lead List",
  "Manage Lead Types",
  "Lead Configure",
  "Opportunity List",
  "Opportunity Configure",
];

const Platinum = () => {
  const [selectionMap, setSelectionMap] = useState({
    Expense: [] as string[],
    Analytics: [] as string[],
    Promotions: [] as string[],
    CRM: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      Expense: [],
      Analytics: [],
      Promotions: [],
      CRM: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="Expense"
        reports={expenseReports}
        selected={selectionMap.Expense}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Expense: selected }))
        }
      />
      <Section
        title="Analytics"
        reports={analyticsReports}
        selected={selectionMap.Analytics}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Analytics: selected }))
        }
      />
      <Section
        title="Promotions"
        reports={promotionsReports}
        selected={selectionMap.Promotions}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Promotions: selected }))
        }
      />
      <Section
        title="CRM"
        reports={crmReports}
        selected={selectionMap.CRM}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, CRM: selected }))
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

export default Platinum;
