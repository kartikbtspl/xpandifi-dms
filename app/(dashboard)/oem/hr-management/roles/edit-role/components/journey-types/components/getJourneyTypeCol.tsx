"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getJourneyTypeCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  { id: "srNo", label: "Sr. No.", render: (row) => <span className="text-gray-700">{row.srNo}</span> },
  { id: "expense", label: "Expense", render: (row) => <span className="text-gray-700">{row.expense}</span> },
  { id: "journeyName", label: "Journey Name", render: (row) => <span className="text-gray-700">{row.journeyName}</span> },
  { id: "callTargets", label: "Call Targets", render: (row) => <span className="text-gray-700">{row.callTargets}</span> },
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

export default getJourneyTypeCol;