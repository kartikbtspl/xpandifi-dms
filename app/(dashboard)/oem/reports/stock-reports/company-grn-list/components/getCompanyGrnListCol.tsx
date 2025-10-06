"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getCompanyGrnListCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "grnNumber",
    label: "GRN Number",
    render: (row) => (
      <span className="text-gray-700">{row.grnNumber || "-"}</span>
    ),
  },
  {
    id: "productName",
    label: "Product Name",
    render: (row) => (
      <span className="text-gray-700">{row.productName || "-"}</span>
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
    id: "codeLocation",
    label: "Code Location",
    render: (row) => (
      <span className="text-gray-700">{row.codeLocation || "-"}</span>
    ),
  },
  {
    id: "quantityRecieved",
    label: "Quantity Recieved",
    render: (row) => (
      <span className="text-gray-700">{row.quantityRecieved || "-"}</span>
    ),
  },
  {
    id: "remark",
    label: "Remark",
    render: (row) => (
      <span className="text-gray-700">{row.remark || "-"}</span>
    ),
  },
  {
    id: "grnDate",
    label: "GRN Date",
    render: (row) => (
      <span className="text-gray-700">{row.grnDate || "-"}</span>
    ),
  },
];

export default getCompanyGrnListCol;
