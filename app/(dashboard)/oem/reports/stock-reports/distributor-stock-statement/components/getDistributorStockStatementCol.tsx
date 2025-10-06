"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getDistributorStockStatementCol = (onView: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "distributorName",
    label: "Distributor Name",
    render: (row) => (
      <span className="text-gray-700">{row.distributorName || "-"}</span>
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
    id: "openingStock",
    label: "Opening Stock",
    render: (row) => (
      <span className="text-gray-700">{row.openingStock || "-"}</span>
    ),
  },
  {
    id: "consumedStock",
    label: "Consumed Stock",
    render: (row) => (
      <span className="text-gray-700">{row.consumedStock || "-"}</span>
    ),
  },
  {
    id: "closingStock",
    label: "Closing Stock",
    render: (row) => (
      <span className="text-gray-700">{row.closingStock || "-"}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* View Icon */}
        <FiEye
          size={18}
          title="View"
          className="cursor-pointer hover:text-green-500"
          onClick={() => onView(row)}
        />
      </div>
    ),
  },
];

export default getDistributorStockStatementCol;
