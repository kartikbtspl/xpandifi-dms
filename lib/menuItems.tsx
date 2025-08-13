import { MenuItem } from '../types';
import { AiOutlineHome, AiOutlineBarChart } from 'react-icons/ai';
import React from 'react';

export const oemMenuItems: MenuItem[] = [
  { name: "Dashboard", icon: <AiOutlineHome />, path: "/oem/dashboard" },
  { name: "Customer Management", icon: <AiOutlineHome />, path: "/oem/customers" },
  { name: "CRM", icon: <AiOutlineHome />, path: "/oem/crm" },
  { name: "Product Management", icon: <AiOutlineHome />, path: "/oem/products" },
  { name: "Schemes", icon: <AiOutlineHome />, path: "/oem/schemes" },
  { name: "Beat Plan", icon: <AiOutlineHome />, path: "/oem/beat-plan" },
  { name: "Sales Order Management", icon: <AiOutlineHome />, path: "/oem/sales-orders" },
  { name: "Expense Management", icon: <AiOutlineHome />, path: "/oem/expenses" },
  { name: "Invoice & Payment", icon: <AiOutlineHome />, path: "/oem/invoices" },
  { name: "Sales Order Workflow", icon: <AiOutlineHome />, path: "/oem/sales-workflow" },
  { name: "HR Management", icon: <AiOutlineHome />, path: "/oem/hr" },
  { name: "Reports", icon: <AiOutlineHome />, path: "/oem/reports" },
  { name: "Code Configure", icon: <AiOutlineHome />, path: "/oem/code-config" },
  { name: "Manage Task", icon: <AiOutlineHome />, path: "/oem/tasks" },
  { name: "MIS Dashboard", icon: <AiOutlineHome />, path: "/oem/mis" },
  { name: "Notification Broadcast", icon: <AiOutlineHome />, path: "/oem/notifications" },
  { name: "Settings", icon: <AiOutlineHome />, path: "/oem/settings" },
  { name: "Renewal Request", icon: <AiOutlineHome />, path: "/oem/renewals" },
];

export const dmsMenuItems: MenuItem[] = [
{ name: "Dashboard", icon: <AiOutlineHome />, path: "/dms/dashboard" },
  { name: "Customer", icon: <AiOutlineHome />, path: "/dms/customer" },
  { name: "Order Received", icon: <AiOutlineHome />, path: "/dms/order-received" },
  { name: "Primary Order", icon: <AiOutlineHome />, path: "/dms/primary-order" },
  { name: "My Stock", icon: <AiOutlineHome />, path: "/dms/my-stock" },
  { name: "Retailer Stock", icon: <AiOutlineHome />, path: "/dms/retailer-stock" },
  { name: "Invoice List", icon: <AiOutlineHome />, path: "/dms/invoice-list" },
  { name: "Product", icon: <AiOutlineHome />, path: "/dms/product" },
  { name: "Product wise Sales Report", icon: <AiOutlineHome />, path: "/dms/sales-report" },
  { name: "Update Profile", icon: <AiOutlineHome />, path: "/dms/update-profile" },
  { name: "Delivery Challan List", icon: <AiOutlineHome />, path: "/dms/delivery-challan" },
];
