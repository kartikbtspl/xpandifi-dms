"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getExpenseConfigCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  { id: "srNo", label: "Sr.No.", render: (row) => <span className="text-gray-700">{row.srNo}</span> },
  { id: "expenseCode", label: "Expense Code", render: (row) => <span className="text-gray-700">{row.expenseCode}</span> },
  { id: "expenseType", label: "Expense Type", render: (row) => <span className="text-gray-700">{row.expenseType}</span> },
  { id: "cityType", label: "City Type", render: (row) => <span className="text-gray-700">{row.cityType}</span> },
  { id: "expenseName", label: "Expense Name", render: (row) => <span className="text-gray-700">{row.expenseName}</span> },
  { id: "maxAllowedAmount", label: "Max Allowed Amount", render: (row) => <span className="text-gray-700">{row.maxAllowedAmount}</span> },
  { id: "isDefault", label: "Is Default", render: (row) => <span className="text-gray-700">{row.isDefault}</span> },
  { id: "isFixed", label: "Is Fixed", render: (row) => <span className="text-gray-700">{row.isFixed}</span> },
  { id: "isDistance", label: "Is Distance", render: (row) => <span className="text-gray-700">{row.isDistance}</span> },
  { id: "modeOfTravel", label: "Mode Of Travel", render: (row) => <span className="text-gray-700">{row.modeOfTravel}</span> },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        <MdModeEditOutline size={20} title="Edit" className="cursor-pointer hover:text-blue-500" onClick={() => onEdit(row)} />
        <FiTrash2 size={20} title="Delete" className="cursor-pointer hover:text-red-500" onClick={() => onDelete && onDelete(row)} />
      </div>
    ),
  },
];

export default getExpenseConfigCol;
