"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2, FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getRouteCol = (
  onView: (row: any) => void, 
  onEdit: (row: any) => void, 
  onDelete?: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "routeCode",
    label: "Route Code",
    render: (row) => (
      <span className="text-gray-700">{row.routeCode || "-"}</span>
    ),
  },
  {
    id: "routeName",
    label: "Route Name",
    render: (row) => (
      <span className="text-gray-700">{row.routeName || "-"}</span>
    ),
  },
  {
    id: "distributorName",
    label: "Distributor Name",
    render: (row) => (
      <span className="text-gray-700">{row.distributorName || "-"}</span>
    ),
  },
  {
      id: 'action',
      label: 'Action',
      render: (row) => (
        <div className="flex items-center gap-3 text-gray-600">
          <FiEye
            size={20}
            title="Edit"
            className="cursor-pointer hover:text-blue-500"
            onClick={() => onView(row)}
          />
          {/* Edit Icon */}
          <MdModeEditOutline
            size={20}
            title="Edit"
            className="cursor-pointer hover:text-blue-500"
            onClick={() => onEdit(row)}
          />
          {/* Delete Icon */}
          <FiTrash2
            size={20}
            title="Delete"
            className="cursor-pointer hover:text-red-500"
            onClick={() => onDelete && onDelete(row)}
          />
        </div>
      ),
    }
];

export default getRouteCol;
