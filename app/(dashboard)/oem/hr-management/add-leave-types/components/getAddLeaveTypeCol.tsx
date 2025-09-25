"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { MdCheckCircle, MdCancel, MdModeEditOutline } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getAddLeaveTypeCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "leaveTypeName",
    label: "Leave Type Name",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">
        {row.leaveTypeName}
      </span>
    ),
  },
  {
    id: "acronym",
    label: "Acronym",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.acronym}</span>
    ),
  },
  {
    id: "isPaidLeave",
    label: "Is Paid Leave",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.isPaidLeave}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
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
  },
];

export default getAddLeaveTypeCol;
