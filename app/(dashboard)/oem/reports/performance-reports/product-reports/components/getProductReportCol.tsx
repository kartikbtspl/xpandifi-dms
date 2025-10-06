"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getProductReportCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "productName",
    label: "Product Name",
    render: (row) => (
      <span className="text-gray-700">{row.productName || "-"}</span>
    ),
  },
  {
    id: "productCode",
    label: "Product Code",
    render: (row) => (
      <span className="text-gray-700">{row.productCode || "-"}</span>
    ),
  },
  {
    id: "pack",
    label: "Pack",
    render: (row) => (
      <span className="text-gray-700">{row.pack || "-"}</span>
    ),
  },
  {
    id: "amount",
    label: "Amount",
    render: (row) => (
      <span className="text-gray-700">{row.amount || "-"}</span>
    ),
  },
  {
    id: "quantity",
    label: "Quantity",
    render: (row) => (
      <span className="text-gray-700">{row.quantity || "-"}</span>
    ),
  },
];

export default getProductReportCol;
