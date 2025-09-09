"use client"
import React from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";  // ✅ Import icons

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getCustomerNotificationCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "customerName",
    label: "Customer Name",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customerName}</span>
    ),
  },
  {
    id: "email",
    label: "Email",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.email}</span>
    ),
  },
  {
    id: "mobileNo",
    label: "Mobile No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.mobileNo}</span>
    ),
  },
];

export default getCustomerNotificationCol;
