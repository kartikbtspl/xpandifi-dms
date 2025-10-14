import React, { useState } from "react";
import Button from "@/components/common/ui/Button";
import PermissionsTable from "@/components/common/ui/PermissionsTable";

const menuItems = [
  "Beat Plan",
  "Product Management",
  "Notification Broadcast",
  "Service SMS",
  "Target Report",
  "Sales Order Management",
  "Location Reports",
  "Performance Reports",
  "Growth Report",
  "Code Configure",
  "Manage Task",
  "Settings",
  "Stock Report",
  "HR Management",
  "Email Report",
  "Sales Order Workflow",
  "MIS Dashboard",
  "Customer Management",
  "Schemes",
  "Visit Reports",
  "Sales Reports",
  "Expense Management",
  "Invoice and Payment",
  "Renewal Request",
  "CRM",
] as const;

type MenuItem = typeof menuItems[number];

const actions = ["View", "Add", "Update", "Delete", "Import", "Export"];

// All your rows as before...
const beatPlanRows = ["Manage Beat Plan", "Manage Beat Reason", "Auto Beat Plan", "Manage Frequency", "Beat Plan Report", "Beat Plan List"];
const productManagementRows = ["Products", "Product with Price Master", "Manage Tax", "Product Configuration"];
const notificationBroadcastRows = ["User Notification"];
const serviceSMSRows = ["Service SMS"];
const targetReportRows = ["Daily Status Report", "Target Report", "Create Default Expenses", "Target"];
const salesOrderManagementRows = ["Secondary Orders", "Primary Orders"];
const locationReportRows = ["Tracking Report (Map)", "User Last Location Report", "Tracking Report (List)", "Team Last Location Report", "Slot Wise Location Report"];
const performanceReportRows = ["Route Report", "Distributor Report", "Sales Person Report", "Product report"];
const growthReportRows = ["Sales Person Report", "Route Report"];
const codeConfigureRows = ["Receipt Code Configure"];
const manageTaskRows = ["Manage Task Types", "Task List"];
const settingsRows = ["Manage Store Type", "Manage Class Type", "Vehicle Master", "NSR Master", "Freight Master", "Upload Documents", "Manage Pack Unit", "Manage Complaint Type", "User Activity Log", "Distributor", "Route", "Renewal Request", "Manage Account", "Email Setup", "Workflow configuration", "Profiles", "Renewal Request(2)"];
const stockReportRows = ["Retailer Stock", "Distributor Stock", "Company Stock", "Distributor Stock Statement", "Company GRN List", "Distributor GRN List"];
const hrManagementRows = ["Leave Report", "Leave Configuration", "Leave Balance Report", "Users", "Roles", "Add Leave Types", "Leave Balance Report", "Currency Location", "Attendance Report", "Monthly Attendance", "Holiday List", "User Wise Leaves", "Leave Approval Report", "Attendance Summary", "Attendance Report (Deprecated)", "Monthly Attendance (Deprecated)"];
const emailReportRows = ["Sales Order Email", "DSR Email", "Order Approval"];
const salesOrderWorkflowRows = ["Under Load Report", "Club Sales Order", "Material Stock Report", "Pricing Issue Report"];
const misDashboardRows = ["MIS Dashboard", "Analytics Dashboard"];
const customerManagementRows = ["Customer Mobile For Function", "Manage Partner", "Customer Approval Report", "Customer Order Send SMS", "Customer Real Facilities", "Customer Master", "Customer Configuration", "Send Notification to Customer (Deprecated)"];
const schemesRows = ["Category Scheme", "Customer Scheme", "Distributor Scheme", "Product Scheme", "Combo Scheme"];
const visitReportsRows = ["Manual Visit Report", "Visit Report"];
const salesReportsRows = ["End Of The Day Sold Report", "Check In Check Out", "Daily Sales Order Report", "Product Wise Sales Report", "Visit Duration Report"];
const expenseManagementRows = ["Expense Report", "Travel Request Report", "Advance Report", "Manage Expense Config", "Monthly Expense Report", "MultiLevel Expense Approval", "My Expense Report List"];
const invoiceAndPaymentRows = ["Delivery Challan List", "Manage Delivery", "Receipt Code Configure", "Outstanding Report", "Invoice List", "Manage Payment", "Distributor Invoice List", "Invoice Code Configure"];
const renewalRequestRows = ["Renewal Request"];
const crmRows = ["Lead List", "Manage Lead Types", "Lead Configure", "Opportunity List", "Opportunity Configure"];

function emptyChecked(rows: string[], actions: string[]) {
  return Array(rows.length).fill(0).map(() => Array(actions.length).fill(false));
}

export default function EditWebPermissions() {
  const [beatPlanChecked, setBeatPlanChecked] = useState(emptyChecked(beatPlanRows, actions));
  const [productChecked, setProductChecked] = useState(emptyChecked(productManagementRows, actions));
  const [notificationChecked, setNotificationChecked] = useState(emptyChecked(notificationBroadcastRows, actions));
  const [serviceSMSChecked, setServiceSMSChecked] = useState(emptyChecked(serviceSMSRows, actions));
  const [targetReportChecked, setTargetReportChecked] = useState(emptyChecked(targetReportRows, actions));
  const [salesOrderManagementChecked, setSalesOrderManagementChecked] = useState(emptyChecked(salesOrderManagementRows, actions));
  const [locationReportChecked, setLocationReportChecked] = useState(emptyChecked(locationReportRows, actions));
  const [performanceReportChecked, setPerformanceReportChecked] = useState(emptyChecked(performanceReportRows, actions));
  const [growthReportChecked, setGrowthReportChecked] = useState(emptyChecked(growthReportRows, actions));
  const [codeConfigureChecked, setCodeConfigureChecked] = useState(emptyChecked(codeConfigureRows, actions));
  const [manageTaskChecked, setManageTaskChecked] = useState(emptyChecked(manageTaskRows, actions));
  const [settingsChecked, setSettingsChecked] = useState(emptyChecked(settingsRows, actions));
  const [stockReportChecked, setStockReportChecked] = useState(emptyChecked(stockReportRows, actions));
  const [hrManagementChecked, setHrManagementChecked] = useState(emptyChecked(hrManagementRows, actions));
  const [emailReportChecked, setEmailReportChecked] = useState(emptyChecked(emailReportRows, actions));
  const [salesOrderWorkflowChecked, setSalesOrderWorkflowChecked] = useState(emptyChecked(salesOrderWorkflowRows, actions));
  const [misDashboardChecked, setMisDashboardChecked] = useState(emptyChecked(misDashboardRows, actions));
  const [customerManagementChecked, setCustomerManagementChecked] = useState(emptyChecked(customerManagementRows, actions));
  const [schemesChecked, setSchemesChecked] = useState(emptyChecked(schemesRows, actions));
  const [visitReportsChecked, setVisitReportsChecked] = useState(emptyChecked(visitReportsRows, actions));
  const [salesReportsChecked, setSalesReportsChecked] = useState(emptyChecked(salesReportsRows, actions));
  const [expenseManagementChecked, setExpenseManagementChecked] = useState(emptyChecked(expenseManagementRows, actions));
  const [invoiceAndPaymentChecked, setInvoiceAndPaymentChecked] = useState(emptyChecked(invoiceAndPaymentRows, actions));
  const [renewalRequestChecked, setRenewalRequestChecked] = useState(emptyChecked(renewalRequestRows, actions));
  const [crmChecked, setCrmChecked] = useState(emptyChecked(crmRows, actions));

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [checkedMenuItems, setCheckedMenuItems] = useState<boolean[]>(Array(menuItems.length).fill(false));

  const allChecked = [
    beatPlanChecked, productChecked, notificationChecked, serviceSMSChecked, targetReportChecked,
    salesOrderManagementChecked, locationReportChecked, performanceReportChecked, growthReportChecked,
    codeConfigureChecked, manageTaskChecked, settingsChecked, stockReportChecked, hrManagementChecked,
    emailReportChecked, salesOrderWorkflowChecked, misDashboardChecked, customerManagementChecked, schemesChecked,
    visitReportsChecked, salesReportsChecked, expenseManagementChecked, invoiceAndPaymentChecked, renewalRequestChecked,
    crmChecked
  ].every(section => section.every(row => row.every(v => v)));

  const tablePropMap: Record<MenuItem, [string[], boolean[][], React.Dispatch<React.SetStateAction<boolean[][]>>, string]> = {
    "Beat Plan": [beatPlanRows, beatPlanChecked, setBeatPlanChecked, "beatPlan"],
    "Product Management": [productManagementRows, productChecked, setProductChecked, "productManagement"],
    "Notification Broadcast": [notificationBroadcastRows, notificationChecked, setNotificationChecked, "notificationBroadcast"],
    "Service SMS": [serviceSMSRows, serviceSMSChecked, setServiceSMSChecked, "serviceSMS"],
    "Target Report": [targetReportRows, targetReportChecked, setTargetReportChecked, "targetReport"],
    "Sales Order Management": [salesOrderManagementRows, salesOrderManagementChecked, setSalesOrderManagementChecked, "salesOrderManagement"],
    "Location Reports": [locationReportRows, locationReportChecked, setLocationReportChecked, "locationReports"],
    "Performance Reports": [performanceReportRows, performanceReportChecked, setPerformanceReportChecked, "performanceReports"],
    "Growth Report": [growthReportRows, growthReportChecked, setGrowthReportChecked, "growthReport"],
    "Code Configure": [codeConfigureRows, codeConfigureChecked, setCodeConfigureChecked, "codeConfigure"],
    "Manage Task": [manageTaskRows, manageTaskChecked, setManageTaskChecked, "manageTask"],
    "Settings": [settingsRows, settingsChecked, setSettingsChecked, "settings"],
    "Stock Report": [stockReportRows, stockReportChecked, setStockReportChecked, "stockReport"],
    "HR Management": [hrManagementRows, hrManagementChecked, setHrManagementChecked, "hrManagement"],
    "Email Report": [emailReportRows, emailReportChecked, setEmailReportChecked, "emailReport"],
    "Sales Order Workflow": [salesOrderWorkflowRows, salesOrderWorkflowChecked, setSalesOrderWorkflowChecked, "salesOrderWorkflow"],
    "MIS Dashboard": [misDashboardRows, misDashboardChecked, setMisDashboardChecked, "misDashboard"],
    "Customer Management": [customerManagementRows, customerManagementChecked, setCustomerManagementChecked, "customerManagement"],
    "Schemes": [schemesRows, schemesChecked, setSchemesChecked, "schemes"],
    "Visit Reports": [visitReportsRows, visitReportsChecked, setVisitReportsChecked, "visitReports"],
    "Sales Reports": [salesReportsRows, salesReportsChecked, setSalesReportsChecked, "salesReports"],
    "Expense Management": [expenseManagementRows, expenseManagementChecked, setExpenseManagementChecked, "expenseManagement"],
    "Invoice and Payment": [invoiceAndPaymentRows, invoiceAndPaymentChecked, setInvoiceAndPaymentChecked, "invoiceAndPayment"],
    "Renewal Request": [renewalRequestRows, renewalRequestChecked, setRenewalRequestChecked, "renewalRequest"],
    "CRM": [crmRows, crmChecked, setCrmChecked, "crm"]
  };

  const handleSelectAllMenu = () => {
    const next = !allChecked;
    setBeatPlanChecked(emptyChecked(beatPlanRows, actions).map(row => row.map(() => next)));
    setProductChecked(emptyChecked(productManagementRows, actions).map(row => row.map(() => next)));
    setNotificationChecked(emptyChecked(notificationBroadcastRows, actions).map(row => row.map(() => next)));
    setServiceSMSChecked(emptyChecked(serviceSMSRows, actions).map(row => row.map(() => next)));
    setTargetReportChecked(emptyChecked(targetReportRows, actions).map(row => row.map(() => next)));
    setSalesOrderManagementChecked(emptyChecked(salesOrderManagementRows, actions).map(row => row.map(() => next)));
    setLocationReportChecked(emptyChecked(locationReportRows, actions).map(row => row.map(() => next)));
    setPerformanceReportChecked(emptyChecked(performanceReportRows, actions).map(row => row.map(() => next)));
    setGrowthReportChecked(emptyChecked(growthReportRows, actions).map(row => row.map(() => next)));
    setCodeConfigureChecked(emptyChecked(codeConfigureRows, actions).map(row => row.map(() => next)));
    setManageTaskChecked(emptyChecked(manageTaskRows, actions).map(row => row.map(() => next)));
    setSettingsChecked(emptyChecked(settingsRows, actions).map(row => row.map(() => next)));
    setStockReportChecked(emptyChecked(stockReportRows, actions).map(row => row.map(() => next)));
    setHrManagementChecked(emptyChecked(hrManagementRows, actions).map(row => row.map(() => next)));
    setEmailReportChecked(emptyChecked(emailReportRows, actions).map(row => row.map(() => next)));
    setSalesOrderWorkflowChecked(emptyChecked(salesOrderWorkflowRows, actions).map(row => row.map(() => next)));
    setMisDashboardChecked(emptyChecked(misDashboardRows, actions).map(row => row.map(() => next)));
    setCustomerManagementChecked(emptyChecked(customerManagementRows, actions).map(row => row.map(() => next)));
    setSchemesChecked(emptyChecked(schemesRows, actions).map(row => row.map(() => next)));
    setVisitReportsChecked(emptyChecked(visitReportsRows, actions).map(row => row.map(() => next)));
    setSalesReportsChecked(emptyChecked(salesReportsRows, actions).map(row => row.map(() => next)));
    setExpenseManagementChecked(emptyChecked(expenseManagementRows, actions).map(row => row.map(() => next)));
    setInvoiceAndPaymentChecked(emptyChecked(invoiceAndPaymentRows, actions).map(row => row.map(() => next)));
    setRenewalRequestChecked(emptyChecked(renewalRequestRows, actions).map(row => row.map(() => next)));
    setCrmChecked(emptyChecked(crmRows, actions).map(row => row.map(() => next)));
    setCheckedMenuItems(Array(menuItems.length).fill(next));
  };

  const handleMenuCheckbox = (idx: number) => {
    const newVal = !checkedMenuItems[idx];
    setCheckedMenuItems(menu =>
      menu.map((val, i) => (i === idx ? newVal : val))
    );
    const arr = tablePropMap[menuItems[idx]];
    if (!arr) return;
    const [rows, , setChecked] = arr;
    setChecked(Array(rows.length).fill(0).map(() => Array(actions.length).fill(newVal)));
  };

  const toggleSection = (item: string) => {
    setOpenSections(open => ({
      ...open,
      [item]: !open[item],
    }));
  };

  // Utility to extract checked rows/actions for each section
  function getSelectedOnly(checked: boolean[][], rows: string[], actions: string[]) {
    return checked
      .map((rowChecked, i) => ({
        row: rows[i],
        actions: actions.filter((_, j) => rowChecked[j])
      }))
      .filter(entry => entry.actions.length > 0);
  }

  const handleSave = () => {
    const permissions: Record<string, { row: string; actions: string[] }[]> = {};

    for (const item of menuItems) {
      const [rows, checked] = tablePropMap[item];
      const selected = getSelectedOnly(checked, rows, actions);
      if (selected.length > 0) {
        permissions[item] = selected;
      }
    }

    console.log("Checked Data", permissions);
    // Uncheck all checkboxes (reset all states to empty/false)
    setBeatPlanChecked(emptyChecked(beatPlanRows, actions));
    setProductChecked(emptyChecked(productManagementRows, actions));
    setNotificationChecked(emptyChecked(notificationBroadcastRows, actions));
    setServiceSMSChecked(emptyChecked(serviceSMSRows, actions));
    setTargetReportChecked(emptyChecked(targetReportRows, actions));
    setSalesOrderManagementChecked(emptyChecked(salesOrderManagementRows, actions));
    setLocationReportChecked(emptyChecked(locationReportRows, actions));
    setPerformanceReportChecked(emptyChecked(performanceReportRows, actions));
    setGrowthReportChecked(emptyChecked(growthReportRows, actions));
    setCodeConfigureChecked(emptyChecked(codeConfigureRows, actions));
    setManageTaskChecked(emptyChecked(manageTaskRows, actions));
    setSettingsChecked(emptyChecked(settingsRows, actions));
    setStockReportChecked(emptyChecked(stockReportRows, actions));
    setHrManagementChecked(emptyChecked(hrManagementRows, actions));
    setEmailReportChecked(emptyChecked(emailReportRows, actions));
    setSalesOrderWorkflowChecked(emptyChecked(salesOrderWorkflowRows, actions));
    setMisDashboardChecked(emptyChecked(misDashboardRows, actions));
    setCustomerManagementChecked(emptyChecked(customerManagementRows, actions));
    setSchemesChecked(emptyChecked(schemesRows, actions));
    setVisitReportsChecked(emptyChecked(visitReportsRows, actions));
    setSalesReportsChecked(emptyChecked(salesReportsRows, actions));
    setExpenseManagementChecked(emptyChecked(expenseManagementRows, actions));
    setInvoiceAndPaymentChecked(emptyChecked(invoiceAndPaymentRows, actions));
    setRenewalRequestChecked(emptyChecked(renewalRequestRows, actions));
    setCrmChecked(emptyChecked(crmRows, actions));
    setCheckedMenuItems(Array(menuItems.length).fill(false));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white px-4 pt-4 w-full">
      <div className="flex gap-3 mb-4">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={allChecked}
          onChange={handleSelectAllMenu}
        />
        <label className="text-gray-700">Select all</label>
      </div>
      <ul className="space-y-3">
        {menuItems.map((item, index) => {
          const [rows, checked, setChecked, idPrefix] = tablePropMap[item];
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggleSection(item)}
                className={`flex items-center text-left text-[15px] font-normal ${openSections[item] ? "text-blue-700 font-semibold cursor-pointer" : "text-[#445E94] cursor-pointer"
                  }`}
              >
                <input
                  type="checkbox"
                  className="mr-3 w-4 h-4"
                  checked={checkedMenuItems[index]}
                  onChange={e => {
                    e.stopPropagation();
                    handleMenuCheckbox(index);
                  }}
                  onClick={e => e.stopPropagation()}
                />
                {item}
              </button>
              {openSections[item] && (
                <div className="m-4">
                  <PermissionsTable
                    idPrefix={idPrefix}
                    rows={rows}
                    actions={actions}
                    checked={checked}
                    setChecked={setChecked}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex mt-4 justify-center gap-3 mb-5">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}
