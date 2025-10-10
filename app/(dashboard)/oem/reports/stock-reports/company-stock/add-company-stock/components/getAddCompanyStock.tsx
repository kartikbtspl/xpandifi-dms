"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getAddCompanyStock = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "productId",
    label: "Product Code",
    render: (row) => (
      <span className="text-gray-700">{row.productCode || "-"}</span>
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
    id: "quantity",
    label: "Quantity",
    render: (row) => (
      <span className="text-gray-700">{row.quantity || "-"}</span>
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
    id: "expiryDate",
    label: "Expiry Date",
    render: (row) => (
      <span className="text-gray-700">{row.expiryDate || "-"}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex gap-3">
        <button className="hover:text-red-500 cursor-pointer">
          <FiTrash2 size={20} />
        </button>
      </div>
    ),
  },
];

export default getAddCompanyStock;
