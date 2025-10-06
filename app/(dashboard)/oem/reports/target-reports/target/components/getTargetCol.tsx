"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getTargetCol = (
  onView: (row: any) => void,
  onDelete: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "userName",
    label: "User Name",
    render: (row) => (
      <span className="text-gray-700">{row.userName || "-"}</span>
    ),
  },
  {
    id: "role",
    label: "role",
    render: (row) => (
      <span className="text-gray-700">{row.role || "-"}</span>
    ),
  },
  {
    id: "month",
    label: "Month",
    render: (row) => (
      <span className="text-gray-700">{row.month || "-"}</span>
    ),
  },
  {
    id: "visits",
    label: "Visits",
    render: (row) => (
      <span className="text-gray-700">{row.visits || "-"}</span>
    ),
  },
  {
    id: "orders",
    label: "Orders",
    render: (row) => (
      <span className="text-gray-700">{row.orders || "-"}</span>
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
    id: "volumeTarget",
    label: "Volume Target",
    render: (row) => (
      <span className="text-gray-700">{row.volumeTarget || "-"}</span>
    ),
  },
  {
    id: "collection",
    label: "Collection",
    render: (row) => (
      <span className="text-gray-700">{row.collection || "-"}</span>
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
          <FiTrash2
            size={18}
            title="View"
            className="cursor-pointer hover:text-red-500"
            onClick={() => onDelete(row)}
          />
        </div>
      ),
    },
];

export default getTargetCol;
