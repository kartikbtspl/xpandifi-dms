import { MenuItem } from '@/types/index';
import { 
  AiOutlineHome, AiOutlineBarChart, AiOutlineUser, AiOutlineShoppingCart, 
  AiOutlineFileText, AiOutlineDollarCircle, AiOutlineCalendar, AiOutlineTeam,
  AiOutlineSetting, AiOutlineNotification, AiOutlineSync, AiOutlineTool,
  AiOutlinePieChart, AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineEnvironment
} from 'react-icons/ai';
import { 
  FiUsers, FiSettings, FiList, FiShoppingCart, FiPackage, FiTrendingUp,
  FiMapPin, FiCreditCard, FiFileText, FiUserCheck, FiBarChart
} from 'react-icons/fi';
import { BsPeople, BsGift, BsCalendarCheck, BsCart3 } from 'react-icons/bs';
import { MdPayment, MdReport, MdTask, MdDashboard } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';

export const oemMenuItems: MenuItem[] = [
  { name: "Dashboard", icon: AiOutlineHome, path: "/oem/dashboard", level: 0 },
  { 
    name: "Customer Management", 
    icon: BsPeople, 
    path: "/oem/customer-management",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Customer Approval Request", icon: FiUserCheck, path: "/oem/customer-management/approval-request", level: 1 },
      { name: "Customer Configuration", icon: FiSettings, path: "/oem/customer-management/configuration", level: 1 },
      { name: "Customer Master", icon: FiList, path: "/oem/customer-management/master", level: 1 },
      { name: "Customer Notification", icon: AiOutlineNotification, path: "/oem/customer-management/notification", level: 1 }
    ]
  },
  { 
    name: "CRM", 
    icon: FiUsers, 
    path: "/oem/crm",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Lead Configure", icon: FiSettings, path: "/oem/crm/lead-configure", level: 1 },
      { name: "Lead List", icon: FiList, path: "/oem/crm/lead-list", level: 1 },
      { name: "Manage Lead Types", icon: AiOutlineFileText, path: "/oem/crm/manage-lead-types", level: 1 },
      { name: "Opportunity Configure", icon: FiSettings, path: "/oem/crm/opportunity-configure", level: 1 },
      { name: "Opportunity List", icon: FiList, path: "/oem/crm/opportunity-list", level: 1 }
    ]
  },
  {
    name: "Product Management",
    icon: FiPackage,
    path: "/oem/product-management",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Manage Tax", icon: AiOutlineDollarCircle, path: "/oem/product-management/manage-tax", level: 1 },
      { name: "Product Configuration", icon: FiSettings, path: "/oem/product-management/configuration", level: 1 },
      { name: "Products", icon: FiList, path: "/oem/product-management/products", level: 1 }
    ]
  },
  {
    name: "Schemes",
    icon: BsGift,
    path: "/oem/schemes",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Distributor Scheme", icon: BsPeople, path: "/oem/schemes/distributor-scheme", level: 1 },
      { name: "Product Scheme", icon: FiPackage, path: "/oem/schemes/product-scheme", level: 1 },
      { name: "Category Scheme", icon: FiList, path: "/oem/schemes/category-scheme", level: 1 },
      { name: "Customer Scheme", icon: FiUsers, path: "/oem/schemes/customer-scheme", level: 1 }
    ]
  },
  {
    name: "Beat Plan",
    icon: FiMapPin,
    path: "/oem/beat-plan",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Auto Beat Plan", icon: AiOutlineCalendar, path: "/oem/beat-plan/auto-beat-plan", level: 1 },
      { name: "Best Plan Report", icon: HiOutlineDocumentReport, path: "/oem/beat-plan/best-plan-report", level: 1 },
      { name: "Beat Plan List", icon: FiList, path: "/oem/beat-plan/beat-plan-list", level: 1 },
      { name: "Manage Beat Plan", icon: FiSettings, path: "/oem/beat-plan/manage-beat-plan", level: 1 },
      { name: "Manage Beat Reason", icon: FiSettings, path: "/oem/beat-plan/manage-beat-reason", level: 1 },
      { name: "Manage Frequency", icon: AiOutlineClockCircle, path: "/oem/beat-plan/manage-frequency", level: 1 }
    ]
  },
  {
    name: "Sales Order Management",
    icon: BsCart3,
    path: "/oem/sales-order-management",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Primary Orders", icon: FiShoppingCart, path: "/oem/sales-order-management/primary-orders", level: 1 },
      { name: "Secondary Orders", icon: FiShoppingCart, path: "/oem/sales-order-management/secondary-orders", level: 1 }
    ]
  },
  {
    name: "Expense Management",
    icon: AiOutlineDollarCircle,
    path: "/oem/expense-management",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Advance Report", icon: FiCreditCard, path: "/oem/expense-management/advance-report", level: 1 },
      { name: "Expense Report", icon: HiOutlineDocumentReport, path: "/oem/expense-management/expense-report", level: 1 },
      { name: "Manage Expense Configuration", icon: FiSettings, path: "/oem/expense-management/manage-expense-configuration", level: 1 },
      { name: "Monthly Expense Report", icon: FiBarChart, path: "/oem/expense-management/monthly-expense-report", level: 1 },
      { name: "Settlement Expense Approval", icon: AiOutlineCheckCircle, path: "/oem/expense-management/settlement-expense-approval", level: 1 },
      { name: "My Expense Report List", icon: FiList, path: "/oem/expense-management/my-expense-report-list", level: 1 },
      { name: "Travel Request Report", icon: AiOutlineEnvironment, path: "/oem/expense-management/travel-request-report", level: 1 }
    ]
  },
  {
    name: "Invoice & Payment",
    icon: MdPayment,
    path: "/oem/invoice-payment",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Delivery Challan List", icon: FiFileText, path: "/oem/invoice-payment/delivery-challan-list", level: 1 },
      { name: "Delivery Invoice List", icon: FiList, path: "/oem/invoice-payment/delivery-invoice-list", level: 1 },
      { name: "Invoice Code Configure", icon: FiSettings, path: "/oem/invoice-payment/invoice-code-configure", level: 1 },
      { name: "Invoice List", icon: FiList, path: "/oem/invoice-payment/invoice-list", level: 1 },
      { name: "Manage Delivery", icon: FiShoppingCart, path: "/oem/invoice-payment/manage-delivery", level: 1 },
      { name: "Manage Payment", icon: FiCreditCard, path: "/oem/invoice-payment/manage-payment", level: 1 },
      { name: "Outstanding Report", icon: HiOutlineDocumentReport, path: "/oem/invoice-payment/outstanding-report", level: 1 },
      { name: "Reciept Code Configure", icon: HiOutlineDocumentReport, path: "/oem/invoice-payment/receipt-code-configure", level: 1 }
    ]
  },
  {
    name: "Sales Order Workflow",
    icon: AiOutlineBarChart,
    path: "/oem/sales-order-workflow",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Club Sales Order", icon: FiShoppingCart, path: "/oem/sales-order-workflow/club-sales-order", level: 1 },
      { name: "Under Load Report", icon: HiOutlineDocumentReport, path: "/oem/sales-order-workflow/under-load-report", level: 1 }
    ]
  },
  {
    name: "HR Management",
    icon: AiOutlineTeam,
    path: "/oem/hr-management",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Add Leave Types", icon: AiOutlineCalendar, path: "/oem/hr-management/add-leave-types", level: 1 },
      { name: "Attendance Report", icon: HiOutlineDocumentReport, path: "/oem/hr-management/attendance-report", level: 1 },
      { name: "Attendance Report (Unresolved)", icon: AiOutlineClockCircle, path: "/oem/hr-management/attendance-report-unresolved", level: 1 },
      { name: "Attendance Summary", icon: FiBarChart, path: "/oem/hr-management/attendance-summary", level: 1 },
      { name: "Dummy Location", icon: AiOutlineEnvironment, path: "/oem/hr-management/dummy-location", level: 1 },
      { name: "Holiday List", icon: AiOutlineCalendar, path: "/oem/hr-management/holiday-list", level: 1 },
      { name: "Leave Approval Report", icon: AiOutlineCheckCircle, path: "/oem/hr-management/leave-approval-report", level: 1 },
      { name: "Leave Balance Report", icon: HiOutlineDocumentReport, path: "/oem/hr-management/leave-balance-report", level: 1 },
      { name: "Leave Configuration", icon: FiSettings, path: "/oem/hr-management/leave-configuration", level: 1 },
      { name: "Leave Report", icon: HiOutlineDocumentReport, path: "/oem/hr-management/leave-report", level: 1 },
      { name: "Maternity Report", icon: HiOutlineDocumentReport, path: "/oem/hr-management/maternity-report", level: 1 },
      { name: "Monthly Report (Excel/Email)", icon: FiFileText, path: "/oem/hr-management/monthly-report", level: 1 },
      { name: "Roster", icon: AiOutlineCalendar, path: "/oem/hr-management/roster", level: 1 },
      { name: "User Wise Leaves", icon: AiOutlineUser, path: "/oem/hr-management/user-wise-leaves", level: 1 },
      { name: "Users", icon: FiUsers, path: "/oem/hr-management/users", level: 1 }
    ]
  },
  {
    name: "Reports",
    icon: MdReport,
    path: "/oem/reports",
    isExpandable: true,
    level: 0,
    children: [
      {
        name: "Sales Reports",
        icon: FiTrendingUp,
        path: "/oem/reports/sales-reports",
        isExpandable: true,
        level: 1,
        children: [
          { name: "Check-in & Check-out", icon: AiOutlineCheckCircle, path: "/oem/reports/sales-reports/check-in-check-out", level: 2 },
          { name: "Daily Sales Executive Report", icon: HiOutlineDocumentReport, path: "/oem/reports/sales-reports/daily-sales-executive-report", level: 2 },
          { name: "DSR Segment Reports", icon: FiBarChart, path: "/oem/reports/sales-reports/dsr-segment-reports", level: 2 },
          { name: "Product Wise Sales Reports", icon: FiPackage, path: "/oem/reports/sales-reports/product-wise-sales-reports", level: 2 },
          { name: "Visit Duration Reports", icon: AiOutlineClockCircle, path: "/oem/reports/sales-reports/visit-duration-reports", level: 2 }
        ]
      },
      {
        name: "Performance Reports",
        icon: AiOutlinePieChart,
        path: "/oem/reports/performance-reports",
        isExpandable: true,
        level: 1,
        children: [
          { name: "Distributor Reports", icon: BsPeople, path: "/oem/reports/performance-reports/distributor-reports", level: 2 },
          { name: "Product Reports", icon: FiPackage, path: "/oem/reports/performance-reports/product-reports", level: 2 },
          { name: "Route Reports", icon: FiMapPin, path: "/oem/reports/performance-reports/route-reports", level: 2 },
          { name: "Sales Person Reports", icon: AiOutlineUser, path: "/oem/reports/performance-reports/sales-person-reports", level: 2 }
        ]
      },
      {
        name: "Target Reports",
        icon: FiTrendingUp,
        path: "/oem/reports/target-reports",
        isExpandable: true,
        level: 1,
        children: [
          { name: "Daily Sales Reports", icon: HiOutlineDocumentReport, path: "/oem/reports/target-reports/daily-sales-reports", level: 2 },
          { name: "Target", icon: FiTrendingUp, path: "/oem/reports/target-reports/target", level: 2 },
          { name: "Target Report", icon: HiOutlineDocumentReport, path: "/oem/reports/target-reports/target-report", level: 2 }
        ]
      },
      {
        name: "Stock Reports",
        icon: FiPackage,
        path: "/oem/reports/stock-reports",
        isExpandable: true,
        level: 1,
        children: [
          { name: "Company GRN List", icon: FiList, path: "/oem/reports/stock-reports/company-grn-list", level: 2 },
          { name: "Company Stock", icon: FiPackage, path: "/oem/reports/stock-reports/company-stock", level: 2 },
          { name: "Distributor GRN List", icon: FiList, path: "/oem/reports/stock-reports/distributor-grn-list", level: 2 },
          { name: "Distributor Stock", icon: FiPackage, path: "/oem/reports/stock-reports/distributor-stock", level: 2 },
          { name: "Distributor Stock Statement", icon: HiOutlineDocumentReport, path: "/oem/reports/stock-reports/distributor-stock-statement", level: 2 },
          { name: "Retailer Stock", icon: FiPackage, path: "/oem/reports/stock-reports/retailer-stock", level: 2 }
        ]
      },
      {
        name: "Location Reports",
        icon: AiOutlineEnvironment,
        path: "/oem/reports/location-reports",
        isExpandable: true,
        level: 1,
        children: [
          { name: "Staff Wise Location Reports", icon: AiOutlineUser, path: "/oem/reports/location-reports/staff-wise-location-reports", level: 2 },
          { name: "Team/Location Reports", icon: AiOutlineTeam, path: "/oem/reports/location-reports/team-location-reports", level: 2 },
          { name: "Tracking Reports (Map)", icon: FiMapPin, path: "/oem/reports/location-reports/tracking-reports-map", level: 2 },
          { name: "Tracking Reports (Table)", icon: FiList, path: "/oem/reports/location-reports/tracking-reports-table", level: 2 },
          { name: "User Location Reports", icon: AiOutlineEnvironment, path: "/oem/reports/location-reports/user-location-reports", level: 2 }
        ]
      },
      {
        name: "Growth Reports",
        icon: FiTrendingUp,
        path: "/oem/reports/growth-reports",
        isExpandable: true,
        level: 1,
        children: [
          { name: "Route Reports", icon: FiMapPin, path: "/oem/reports/growth-reports/route-reports", level: 2 },
          { name: "Sales Reports", icon: FiTrendingUp, path: "/oem/reports/growth-reports/sales-reports", level: 2 }
        ]
      },
      {
        name: "Visit Reports",
        icon: AiOutlineCalendar,
        path: "/oem/reports/visit-reports",
        isExpandable: true,
        level: 1,
        children: [
          { name: "Planned Visit Reports", icon: BsCalendarCheck, path: "/oem/reports/visit-reports/planned-visit-reports", level: 2 },
          { name: "Visit Reports", icon: HiOutlineDocumentReport, path: "/oem/reports/visit-reports/visit-reports", level: 2 }
        ]
      }
    ]
  },
  {
    name: "Code Configure",
    icon: AiOutlineTool,
    path: "/oem/code-configure",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Receipt Code Configure", icon: FiSettings, path: "/oem/code-configure/receipt-code-configure", level: 1 }
    ]
  },
  {
    name: "Manage Task",
    icon: MdTask,
    path: "/oem/manage-task",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Manage Task Types", icon: FiSettings, path: "/oem/manage-task/manage-task-types", level: 1 },
      { name: "Task List", icon: FiList, path: "/oem/manage-task/task-list", level: 1 }
    ]
  },
  {
    name: "MIS Dashboard",
    icon: MdDashboard,
    path: "/oem/mis-dashboard",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Acquisition Dashboard", icon: AiOutlinePieChart, path: "/oem/mis-dashboard/acquisition-dashboard", level: 1 },
      { name: "MIS Dashboard", icon: MdDashboard, path: "/oem/mis-dashboard/mis-dashboard", level: 1 }
    ]
  },
  { name: "Notification Broadcast", icon: AiOutlineNotification, path: "/oem/notification-broadcast", level: 0 },
  {
    name: "Settings",
    icon: AiOutlineSetting,
    path: "/oem/settings",
    isExpandable: true,
    level: 0,
    children: [
      { name: "Distributor", icon: BsPeople, path: "/oem/settings/distributor", level: 1 },
      { name: "Email Setup", icon: AiOutlineNotification, path: "/oem/settings/email-setup", level: 1 },
      { name: "Manage Account", icon: AiOutlineUser, path: "/oem/settings/manage-account", level: 1 },
      { name: "Manage Class Type", icon: FiSettings, path: "/oem/settings/manage-class-type", level: 1 },
      { name: "Manage Contact Type", icon: FiSettings, path: "/oem/settings/manage-contact-type", level: 1 },
      { name: "Manage Bank UPI", icon: FiCreditCard, path: "/oem/settings/manage-bank-upi", level: 1 },
      { name: "Manage State Type", icon: FiSettings, path: "/oem/settings/manage-state-type", level: 1 },
      { name: "Franchise", icon: BsPeople, path: "/oem/settings/franchise", level: 1 },
      { name: "Receive Request", icon: AiOutlineSync, path: "/oem/settings/receive-request", level: 1 },
      { name: "Roles", icon: AiOutlineTeam, path: "/oem/settings/roles", level: 1 },
      { name: "Upload Documents", icon: FiFileText, path: "/oem/settings/upload-documents", level: 1 },
      { name: "User Activity Log", icon: FiList, path: "/oem/settings/user-activity-log", level: 1 },
      { name: "Vehicle Master", icon: FiSettings, path: "/oem/settings/vehicle-master", level: 1 },
      { name: "Workflow Configuration", icon: AiOutlineTool, path: "/oem/settings/workflow-configuration", level: 1 }
    ]
  },
  { name: "Renewal Request", icon: AiOutlineSync, path: "/oem/renewal-request", level: 0 }
];

export const dmsMenuItems: MenuItem[] = [
{ name: "Dashboard", icon: AiOutlineHome, path: "/dms/dashboard" },
  { name: "Customer", icon: AiOutlineHome, path: "/dms/customer" },
  { name: "Order Received", icon: AiOutlineHome, path: "/dms/order-received" },
  { name: "Primary Order", icon: AiOutlineHome, path: "/dms/primary-order" },
  { name: "My Stock", icon: AiOutlineHome, path: "/dms/my-stock" },
  { name: "Retailer Stock", icon: AiOutlineHome, path: "/dms/retailer-stock" },
  { name: "Invoice List", icon: AiOutlineHome, path: "/dms/invoice-list" },
  { name: "Product", icon: AiOutlineHome, path: "/dms/product" },
  { name: "Product wise Sales Report", icon: AiOutlineHome, path: "/dms/sales-report" },
  { name: "Update Profile", icon: AiOutlineHome, path: "/dms/update-profile" },
  { name: "Delivery Challan List", icon: AiOutlineHome, path: "/dms/delivery-challan" },
];
