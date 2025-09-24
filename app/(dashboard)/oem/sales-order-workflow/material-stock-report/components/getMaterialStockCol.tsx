"use client";
import React from "react";
import { FiEye } from "react-icons/fi";
import { MdCheckCircle, MdCancel } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getMaterialStockCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "salesPerson",
    label: "Sales Person",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">
        {row.select}
      </span>
    ),
  },
  {
    id: "customer",
    label: "Customer",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.salesOrderID}</span>
    ),
  },
  {
    id: "plant",
    label: "Plant",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customer}</span>
    ),
  },
  {
    id: "date",
    label: "Date",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.date}</span>
    ),
  },
  {
    id: "status",
    label: "Status",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.status}</span>
    ),
  },
  {
    id: "total",
    label: "Total",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.total}</span>
    ),
  },
  {
    id: "address",
    label: "Address",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.address}</span>
    ),
  },
  {
    id: "approvalStatus",
    label: "Approval Status",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.approvalStatus}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.action}</span>
    ),
  },
];

export default getMaterialStockCol;
