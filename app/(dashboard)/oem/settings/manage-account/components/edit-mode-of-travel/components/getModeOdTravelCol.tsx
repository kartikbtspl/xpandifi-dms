"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getModeOdTravelCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "modeOfTravel",
    label: "Mode Of Travel",
    render: (row) => (
      <span className="text-gray-700">{row.modeOfTravel || "-"}</span>
    ),
  },
  {
    id: "rate",
    label: "Rate",
    render: (row) => (
      <span className="text-gray-700">{row.rate || "-"}</span>
    ),
  },
  {
      id: 'action',
      label: 'Action',
      render: (row) => (
        <div className="flex items-center gap-3 text-gray-600">
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

export default getModeOdTravelCol;
