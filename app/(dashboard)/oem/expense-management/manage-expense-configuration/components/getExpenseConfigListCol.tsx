"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getExpenseConfigListCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "expenseType",
    label: "Expense Type",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.expenseType}</span>
    ),
  },
  {
    id: "expenseMode",
    label: "Expense Mode",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.expenseMode}</span>
    ),
  },
  {
    id: "role",
    label: "Role",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.role}</span>
    ),
  },
  {
    id: "maxAmount",
    label: "Max Allowed Amount",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.maxAmount}</span>
    ),
  },
  {
    id: "country",
    label: "To",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.to}</span>
    ),
  },
  {
    id: "state",
    label: "Actual Amount",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.actualAmount}</span>
    ),
  },
  {
    id: "city",
    label: "Approved Amount",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.approvedAmount}</span>
    ),
  },
  {
    id: "isDefault",
    label: "Is Default",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.isDefault}</span>
    ),
  },
  {
    id: "isDistance",
    label: "Is Distance",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.isDistance}</span>
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
  },
];

export default getExpenseConfigListCol;
