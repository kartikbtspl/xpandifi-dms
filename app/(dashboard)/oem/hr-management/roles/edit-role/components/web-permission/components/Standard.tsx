"use client"
import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import Section from "@/components/common/ui/Section";

const productReports = [
  "Products",
  "Manage Tax",
  "Product Configuration",
];
const analyticsReports = [
  "Daily Sales Order Report",
  "Product Wise Sales Report",
  "Sales Person Report",
  "Product report",
];
const salesReports = [
  "Secondary Orders",
  "Primary Orders",
];
const stockList = [
  "Retailer Stock",
  "Distributor Stock",
  "Company Stock",
  "Distributor Stock Statement",
  "Company GRN List",
  "Distributor GRN List",
];
const paymentAndInvoiceList = [
  "Outstanding Report",
  "Invoice List",
  "Manage Payment",
  "Distributor Invoice List",
  "Invoice Code Configure",
  "Receipt Code Configure",
];
const taskReports = [
  "Manage Task Types",
  "Task List",
];
const deliveryReports = [
  "Delivery Challan List",
  "Manage Delivery",
];
const settingsReports = [
  "Upload Documents",
  "Manage Pack Unit",
];
const targetManagementReports = [
  "Target",
];
const invoiceAndPaymentReports = [
  "Receipt Code Configure",
];

const Standard = () => {
  const [selectionMap, setSelectionMap] = useState({
    Product: [] as string[],
    Analytics: [] as string[],
    Sales: [] as string[],
    Stock: [] as string[],
    PaymentAndInvoice: [] as string[],
    Task: [] as string[],
    Delivery: [] as string[],
    Settings: [] as string[],
    TargetManagement: [] as string[],
    InvoiceAndPayment: [] as string[],
  });

  const handleSave = () => {
    const combinedSelected = Object.values(selectionMap).flat();
    console.log("Saved Selected Reports:", combinedSelected, selectionMap);
  };

  const handleCancel = () => {
    setSelectionMap({
      Product: [],
      Analytics: [],
      Sales: [],
      Stock: [],
      PaymentAndInvoice: [],
      Task: [],
      Delivery: [],
      Settings: [],
      TargetManagement: [],
      InvoiceAndPayment: [],
    });
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-full overflow-x-auto space-y-6">
      <Section
        title="Product"
        reports={productReports}
        selected={selectionMap.Product}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Product: selected }))
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
        title="Sales"
        reports={salesReports}
        selected={selectionMap.Sales}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Sales: selected }))
        }
      />
      <Section
        title="Stock"
        reports={stockList}
        selected={selectionMap.Stock}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Stock: selected }))
        }
      />
      <Section
        title="Payment and Invoice"
        reports={paymentAndInvoiceList}
        selected={selectionMap.PaymentAndInvoice}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, PaymentAndInvoice: selected }))
        }
      />
      <Section
        title="Task"
        reports={taskReports}
        selected={selectionMap.Task}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Task: selected }))
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
      <Section
        title="Settings"
        reports={settingsReports}
        selected={selectionMap.Settings}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, Settings: selected }))
        }
      />
      <Section
        title="Target Management"
        reports={targetManagementReports}
        selected={selectionMap.TargetManagement}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, TargetManagement: selected }))
        }
      />
      <Section
        title="Invoice and Payment"
        reports={invoiceAndPaymentReports}
        selected={selectionMap.InvoiceAndPayment}
        setSelected={(selected) =>
          setSelectionMap((prev) => ({ ...prev, InvoiceAndPayment: selected }))
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

export default Standard;
