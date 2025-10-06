"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getCompanyStockCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "productCode",
    label: "Product Code",
    render: (row) => (
      <span className="text-gray-700">{row.productCode || "-"}</span>
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
    id: "actualStock",
    label: "Actual Stock",
    render: (row) => (
      <span className="text-gray-700">{row.actualStock || "-"}</span>
    ),
  },
  {
    id: "minimumStock",
    label: "Minimum Stock",
    render: (row) => (
      <span className="text-gray-700">{row.minimumStock || "-"}</span>
    ),
  },
  {
    id: "updatedOn",
    label: "Updated On",
    render: (row) => (
      <span className="text-gray-700">{row.updatedOn || "-"}</span>
    ),
  },
];

export default getCompanyStockCol;
