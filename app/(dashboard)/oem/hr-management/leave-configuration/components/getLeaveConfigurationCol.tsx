"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getLeaveConfigurationCol = (
  onEdit: (row: any) => void,
  onDelete: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "role",
    label: "Role",
    render: (row) => (
      <span className="text-gray-700">{row.role || "-"}</span>
    ),
  },
  {
    id: "leaveType",
    label: "Leave Type",
    render: (row) => (
      <span className="text-gray-700">{row.leaveType || "-"}</span>
    ),
  },
  {
    id: "noOfLeaves",
    label: "No Of Leaves",
    render: (row) => (
      <span className="text-gray-700">{row.noOfLeaves || "-"}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* ✏️ Edit Icon */}
        <MdModeEditOutline
          size={18}
          title="Edit"
          className="cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => onEdit(row)}
        />

        {/* 🗑️ Delete Icon */}
        <FiTrash2
          size={18}
          title="Delete"
          className="cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => onDelete(row)}
        />
      </div>
    ),
  },
];

export default getLeaveConfigurationCol;
