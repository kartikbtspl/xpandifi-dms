"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const expenseManagementReports = [
  "Expense",
];

const promotionsReports = [
  "Scheme",
  "Offers",
];

const crmReports = [
  "My Leads",
  "Opportunity",
];

const salesOrderManagementReports = [
  "Discount",
];

const PlatinumMobile = () => {
  const [selectionMap, setSelectionMap] = useState({
    Expense_Management: [] as string[],
    Promotions: [] as string[],
    CRM: [] as string[],
    Sales_Order_Management: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      Expense_Management: [],
      Promotions: [],
      CRM: [],
      Sales_Order_Management: [],
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
        title="Promotions"
        reports={promotionsReports}
        selected={selectionMap.Promotions}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, Promotions: selected }))
        }
      />
      <Section
        title="CRM"
        reports={crmReports}
        selected={selectionMap.CRM}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, CRM: selected }))
        }
      />
      <Section
        title="Sales_Order_Management"
        reports={salesOrderManagementReports}
        selected={selectionMap.Sales_Order_Management}
        setSelected={selected =>
          setSelectionMap(prev => ({ ...prev, Sales_Order_Management: selected }))
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

export default PlatinumMobile;
