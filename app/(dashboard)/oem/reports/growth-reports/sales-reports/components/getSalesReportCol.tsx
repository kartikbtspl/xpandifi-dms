"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getSalesReportCol = (): Column[] => [
  {
    id: "customerNameCode",
    label: "Customer Name/Code",
    render: (row) => <span className="text-gray-700">{row.customerNameCode}</span>,
  },
  {
    id: "totalAmount",
    label: "Total Amount",
    render: (row) => (
      <span className="text-gray-700">{row.totalAmount || "-"}</span>
    ),
  },
  {
    id: "date",
    label: "Date",
    render: (row) => (
      <span className="text-gray-700">{row.date || "-"}</span>
    ),
  },
];

export default getSalesReportCol;
