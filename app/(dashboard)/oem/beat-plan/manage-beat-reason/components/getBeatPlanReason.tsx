// leadTypeColumn.tsx
"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getBeatPlanReason = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "beatPlanReason",
    label: "Beat Plan Reason",
    render: (row) => <span className="text-gray-700">{row.beatPlanReason}</span>,
  },
  {
    id: "details",
    label: "Beat Plan Reason Details Required",
    render: (row) => <span className="text-gray-700">{row.details}</span>,
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

export default getBeatPlanReason;
