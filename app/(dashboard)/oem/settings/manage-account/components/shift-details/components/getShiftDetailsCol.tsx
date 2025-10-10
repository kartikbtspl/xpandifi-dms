"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getShiftDetailsCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "shiftName",
    label: "Shift Name",
    render: (row) => (
      <span className="text-gray-700">{row.shiftName || "-"}</span>
    ),
  },
  {
    id: "startTime",
    label: "Start Time",
    render: (row) => (
      <span className="text-gray-700">{row.startTime || "-"}</span>
    ),
  },
  {
    id: "endTime",
    label: "End Time",
    render: (row) => (
      <span className="text-gray-700">{row.endTime || "-"}</span>
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

export default getShiftDetailsCol;
