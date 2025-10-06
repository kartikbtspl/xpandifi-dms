"use client"
import React, { useState } from "react";
import Section from "@/components/common/ui/Section";
import Button from "@/components/common/ui/Button";

const salesOrderManagementReports = ["Sales Order"];
const paymentAndInvoiceReports = ["Outstanding", "Manage Payment"];
const stockManagementReports = ["Distributor Stock", "My Stock", "Update Stock"];
const systemAdministrationReports = ["Pdf Download"];
const analyticsReports = ["Sales Report", "Collection Report"];
const productManagementReports = ["Custom Pack Type"];

const StandardMobile = () => {
  const [selectionMap, setSelectionMap] = useState({
    Sales_Order_Management: [] as string[],
    Payment_and_Invoice: [] as string[],
    Stock_Management: [] as string[],
    System_Administration: [] as string[],
    Analytics: [] as string[],
    Product_Management: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      Sales_Order_Management: [],
      Payment_and_Invoice: [],
      Stock_Management: [],
      System_Administration: [],
      Analytics: [],
      Product_Management: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="Sales_Order_Management"
        reports={salesOrderManagementReports}
        selected={selectionMap.Sales_Order_Management}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Sales_Order_Management: selected }))
        }
      />
      <Section
        title="Payment_and_Invoice"
        reports={paymentAndInvoiceReports}
        selected={selectionMap.Payment_and_Invoice}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Payment_and_Invoice: selected }))
        }
      />
      <Section
        title="Stock_Management"
        reports={stockManagementReports}
        selected={selectionMap.Stock_Management}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Stock_Management: selected }))
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
      <Section
        title="Analytics"
        reports={analyticsReports}
        selected={selectionMap.Analytics}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Analytics: selected }))
        }
      />
      <Section
        title="Product_Management"
        reports={productManagementReports}
        selected={selectionMap.Product_Management}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Product_Management: selected }))
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

export default StandardMobile;
