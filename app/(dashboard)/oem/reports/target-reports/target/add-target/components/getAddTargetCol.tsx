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
    id: "user",
    label: "User",
    render: (row) => <span className="text-gray-700">{row.user}</span>,
  },
  {
    id: "month",
    label: "Month",
    render: (row) => (
      <span className="text-gray-700">{row.month || "-"}</span>
    ),
  },
  {
    id: "visitTarget",
    label: "Visit Target",
    render: (row) => (
      <span className="text-gray-700">{row.visitTarget || "-"}</span>
    ),
  },
  {
    id: "orderTarget",
    label: "Order Target",
    render: (row) => (
      <span className="text-gray-700">{row.orderTarget || "-"}</span>
    ),
  },
  {
    id: "amountTarget",
    label: "Amount Target",
    render: (row) => (
      <span className="text-gray-700">{row.amountTarget || "-"}</span>
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
    id: "collectionTarget",
    label: "Collection Target",
    render: (row) => (
      <span className="text-gray-700">{row.collectionTarget || "-"}</span>
    ),
  },
  {
    id: "category",
    label: "Category",
    render: (row) => (
      <span className="text-gray-700">{row.category || "-"}</span>
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
